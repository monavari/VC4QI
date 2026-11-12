var Nl = Object.defineProperty;
var Ea = (e) => {
  throw TypeError(e);
};
var Dl = (e, t, n) => t in e ? Nl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var ht = (e, t, n) => Dl(e, typeof t != "symbol" ? t + "" : t, n), ka = (e, t, n) => t.has(e) || Ea("Cannot " + n);
var it = (e, t, n) => (ka(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Dn = (e, t, n) => t.has(e) ? Ea("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Rr = (e, t, n, i) => (ka(e, t, "write to private field"), i ? i.call(e, n) : t.set(e, n), n);
const St = { rm: { manifest: { $schema: "./manifest.schema.json", id: "https://vc4qi.example/bindings/rm/1", version: "1", status: "experimental", owner: { name: "VC4QI repository fixture governance", source: "docs/bindings.md", authority: "local-research-fixture-only" }, installation: { status: "incomplete", reason: "Contexts, schemas, controller documents, signed A/H/O/S/D fixtures and status lists are pinned and verify in TypeScript and Python. The I1-I4 evaluators (protection, status, authority routes, support, claim mapping and coverage, conformity) and the current-reliance time rules are implemented, with a cross-language parity vector; an independent transformation vector is still required before selection.", pendingResources: [] }, carrierAndSchema: { model: "W3C Verifiable Credentials Data Model 2.0", modelContext: "https://www.w3.org/ns/credentials/v2", requiredContexts: ["https://www.w3.org/ns/credentials/v2", "https://vc4qi.example/contexts/rm/1"], credentialTypes: ["https://www.w3.org/2018/credentials#VerifiableCredential", "https://vc4qi.example/bindings/rm/1#RmAccreditation", "https://vc4qi.example/bindings/rm/1#RmOperationalScope", "https://vc4qi.example/bindings/rm/1#RmCertificate", "https://vc4qi.example/bindings/rm/1#RmStudy", "https://vc4qi.example/bindings/rm/1#RmLabAuthority", "https://www.w3.org/ns/credentials/status#BitstringStatusListCredential", "https://www.w3.org/ns/credentials/recognized-entities#RecognizedEntityCredential"], schemaUris: ["https://vc4qi.example/schemas/rm/1/accreditation.json", "https://vc4qi.example/schemas/rm/1/operational-scope.json", "https://vc4qi.example/schemas/rm/1/certificate.json", "https://vc4qi.example/schemas/rm/1/study.json", "https://vc4qi.example/schemas/rm/1/lab-authority.json", "https://vc4qi.example/schemas/rm/1/authorization-policy.json", "https://vc4qi.example/schemas/rm/1/study-reference.json", "https://vc4qi.example/schemas/rm/1/status-list.json", "https://vc4qi.example/schemas/rm/1/recognized-entity.json"], statusListCarrier: "BitstringStatusListCredential with the VCDM 2.0 context only", recognitionCarrier: "RecognizedEntityCredential with the VCDM 2.0 context and https://vc4qi.example/contexts/recognized-entities/draft-20261104, a stand-in for the unpublished W3C Recognized Entities context (Working Draft of 4 November 2026)", composition: "exact-listed-context-and-schema-combinations-only", pinnedResourceIndex: "bindings/experimental/rm-v1/catalog.json", decimalEncoding: "JSON strings typed xsd:decimal for every quantity, bound and uncertainty", orderedCollections: ["materials", "materialPropertiesList", "results"] }, factMappings: [{ fact: "grantorOrActor", nativePath: "/issuer", expandedIri: "https://www.w3.org/2018/credentials#issuer" }, { fact: "grantee", nativePath: "/credentialSubject/id", expandedIri: "@id" }, { fact: "permittedActivity", nativePath: "/credentialSubject/permittedActivity", expandedIri: "https://vc4qi.example/bindings/rm/1#permittedActivity" }, { fact: "scopeRecords", nativePath: "/credentialSubject/scope", expandedIri: "https://vc4qi.example/bindings/rm/1#scope" }, { fact: "authorizingReference", nativePath: "/termsOfUse/*/authorizationCredential/id", expandedIri: "https://vc4qi.example/bindings/rm/1#authorizationCredential" }, { fact: "requiredStudy", nativePath: "/evidence/*/id", expandedIri: "https://www.w3.org/2018/credentials#evidence" }, { fact: "validFrom", nativePath: "/validFrom", expandedIri: "https://www.w3.org/2018/credentials#validFrom" }, { fact: "validUntil", nativePath: "/validUntil", expandedIri: "https://www.w3.org/2018/credentials#validUntil" }, { fact: "activityTime", nativePath: "/credentialSubject/activityTime", expandedIri: "https://vc4qi.example/bindings/rm/1#activityTime" }, { fact: "selectedResult", nativePath: "/credentialSubject/materialPropertiesList/*/results/*", expandedIri: "https://vc4qi.example/bindings/rm/1#results" }], cardinality: { credentialSubject: { minimum: 1, maximum: 1 }, material: { minimum: 1, maximum: 1 }, scopeRecords: { minimum: 1 }, selectedAuthorizingPoliciesPerUse: { minimum: 1, maximum: 1 }, authorizingReferenceSelection: "by-declared-reference-type-per-route; resolved credential type must match (else contradicted); several of one type not_established", supportReferences: { minimum: 1 }, multipleRecognizedDeclarations: "unsupported-unless-exact-deterministic-composition-is-listed", ambiguousSelection: "not_established" }, discoveryAndIntegrity: { referenceCarriers: ["termsOfUse", "evidence", "relatedResource", "credentialSchema"], discovery: "supplied-or-installed-static-catalog-only", unknownUri: "not_established", immutableRepresentation: "original-secured-bytes", digestAlgorithm: "sha384", digestEncoding: "SRI", digestInput: "exact-original-secured-bytes", recognitionReferences: "only a RecognizedEntityCredential that a grant references from its own termsOfUse (authorizationCredential of that type, pinned by digest); recognitions supplied by the holder but not referenced, issuer.recognizedIn and identifier-based discovery are unsupported", independentGrantBinding: "unsupported: authority is recognized only through termsOfUse authorizationCredential references on the credential chain; an authenticated grant found by other means establishes nothing (not_established)" }, recognizedTypes: { authorizationPolicy: "https://vc4qi.example/bindings/rm/1#RmAuthorizationPolicy", authorizationPolicyEstablishes: ["authorizing-reference-candidate"], supportEvidence: "https://vc4qi.example/bindings/rm/1#RmStudyReference", supportEvidenceEstablishes: ["support-reference-candidate"], nonEstablishingByItself: ["authority", "scope", "support-applicability", "conformity"] }, principalAndRights: { principalEqualityEvaluator: "https://vc4qi.example/evaluators/exact-identifier/1", identityAliases: "none", activities: { issueRmCertificate: "https://vc4qi.example/bindings/rm/1#issueRmCertificate", maintainRmScope: "https://vc4qi.example/bindings/rm/1#maintainRmScope", issueRmStudy: "https://vc4qi.example/bindings/rm/1#issueRmStudy" }, rules: ["A grantee equals the producer exercising certificate issuance and scope maintenance.", "O issuer and grantee equal that producer and O is contained by A.", "D issuer equals O grantee.", "S issuer equals H laboratory grantee.", "Commissioning a study grants no laboratory competence."] }, scopeAndMapping: { mappingVersion: "rm-experimental-mapping-1", recordEvaluator: "https://vc4qi.example/evaluators/rm-complete-record/1", quantityEvaluator: "https://vc4qi.example/evaluators/exact-mass-fraction/1", dimensions: ["matrixIri", "formIri", "propertyIri", "methodIri", "quantityKindIri", "range"], units: { "mg/kg": "1e-6", "kg/kg": "1" }, boundaries: "inclusive", missingOrEmptyRestrictedDimension: "not_established", recordCombination: "one-complete-record-per-claim-no-splicing", uncertainty: { requiredCoverageFactor: "2", nonnegative: !0, accreditationCeiling: "none" }, broader: [{ narrower: "https://vc4qi.example/bindings/rm/1#CuZn39Pb3", broader: "https://vc4qi.example/bindings/rm/1#CopperAlloys" }, { narrower: "https://vc4qi.example/bindings/rm/1#CopperAlloys", broader: "https://vc4qi.example/bindings/rm/1#NonFerrousMetalsAndAlloys" }, { narrower: "https://vc4qi.example/bindings/rm/1#Disc", broader: "https://vc4qi.example/bindings/rm/1#SolidForms" }, { narrower: "https://vc4qi.example/bindings/rm/1#As", broader: "https://vc4qi.example/bindings/rm/1#ElementContents" }, { narrower: "https://vc4qi.example/bindings/rm/1#Cu", broader: "https://vc4qi.example/bindings/rm/1#ElementContents" }, { narrower: "https://vc4qi.example/bindings/rm/1#Zn", broader: "https://vc4qi.example/bindings/rm/1#ElementContents" }, { narrower: "https://vc4qi.example/bindings/rm/1#Pb", broader: "https://vc4qi.example/bindings/rm/1#ElementContents" }], conceptHierarchy: "skos:broader assertions in broader, applied transitively: a scope record's matrix, form or property covers every narrower concept (an accreditation for non-ferrous metals and alloys and element contents contains arsenic in CuZn39Pb3 discs); methods and quantity kinds are exact; labels are never compared; malformed entries are ignored and never widen a scope", methodRevisions: [{ method: "https://vc4qi.example/bindings/rm/1#M2", revises: "https://vc4qi.example/bindings/rm/1#M1" }], methodSuccessionInterpretation: "verifier-profile mapping.methodSuccession: accept-successor | require-extension | none (none leaves a revised method not_established at gate 4)", claimCoverage: "the selected result, mapped at gate 4, must lie in one complete record of the route's own scope credential (O for operational-scope, A for direct-accreditation); no fallback to a parent grant", conformity: "verifier-profile requirements and decision rules, evaluated at gate 6 only after the claim is authorized; exact arithmetic reported in the requirement's unit", unsupported: ["asymmetric-uncertainty", "display-label-equality", "substring-matching", "implicit-method-succession"] }, routesAndRestrictions: { certificateRoute: ["O-authorizes-D", "A-authorizes-O-maintenance", "O-contained-by-A"], installedCertificateRoutes: { "operational-scope": ["O-authorizes-D", "A-authorizes-O-maintenance", "O-contained-by-A", "A-issuer-is-accreditation-anchor-or-recognized-for-main-scope"], "direct-accreditation": ["A-authorizes-D", "A-issuer-is-accreditation-anchor-or-recognized-for-main-scope"] }, recognition: "a grant issuer that is not a configured anchor for the purpose is accepted only through a usable, unsuspended recognition the grant references, whose issuer is an anchor for the recognizer purpose and whose subject is the grant issuer with the required action for the purpose's main scope (activity and normative document, exact), recognized by its issuer and in force at the activity time; a recognition of another body or another main scope contradicts; a missing recognition, entry or time is not_established; recognition never establishes QI scope", studyRoute: ["H-authorizes-S"], requiredSupport: ["S", "H"], globalRestrictions: ["applicable-suspension", "request-time-policy"], installedGlobalRestrictions: { "accreditation-suspension": "every usable anchor-issued RmAccreditation of the certificate issuer reached through the target's termsOfUse references, on any route, must carry a fresh issuer suspension status (Bitstring Status List, statusPurpose suspension) with its bit clear; missing or unreadable suspension status is not_established; unusable or unreferenced credentials are not restrictions" }, unusedAlternativeFailures: "diagnostic-only: only the target and the credentials on the selected route and support chains decide the request", routeComposition: "AND-within-route-OR-between-complete-routes", baselineAlternatives: 1, provenanceDoesNotEstablish: ["permission", "containment"] }, protectionTimeAndResolution: { proofSuites: ["eddsa-rdfc-2022"], proofPurpose: "assertionMethod", verificationMethodRule: "exact-installed-method-controlled-by-issuer-and-authorized-for-assertionMethod", safeJsonLd: !0, proofCollections: "unsupported-in-initial-slice", status: "authenticated-current-revocation-status-required-for-A-O-D-S-H; suspension entries on accreditations are read only by the accreditation-suspension restriction", statusMechanism: "W3C Bitstring Status List v1.0: multibase base64url GZIP encodedList, bounded decompression", statusAuthority: "status-list-issuer-equals-credential-issuer", validity: ["validFrom", "validUntil"], freshness: "verifier-profile maxAgeSeconds from the status list validFrom, judged at the activity time asked about; no default", historicalReliance: "status at an earlier activity time only from a status list of the same issuer in force and fresh at that time (kept, dated lists); a later list cannot establish it; no archive discovery", resolver: { network: !1, unknownUri: "refuse", budgets: ["maxResources", "maxDepth", "maxBytes"] }, installedEvaluatorsOnly: !0, issuerProvidedExecutableCode: !1 }, supportAndDisclosure: { objectApplicability: ["materialBatch", "activity", "method", "activityTime"], supportSubjectNeedNotEqualTargetIssuer: !0, mandatoryDisclosure: ["issuer", "credentialSubject/id", "activityTime", "selectedResult", "restrictions", "authorizingReference", "requiredStudy", "relatedResource", "proof"], missingMandatoryDisclosure: "not_established", presentationProtection: "separate-from-reliance", holderBinding: "unsupported-in-initial-slice" }, evidenceAndExclusions: { acceptanceLedger: "docs/acceptance-ledger.csv", testVectorRoots: ["testdata/regressions", "bindings/experimental/rm-v1/test-vectors"], unsupported: ["production-accreditation", "legal-effect", "physical-sample-truth", "public-example-namespace-resolution", "general-ontology-reasoning", "wallet-interoperability", "external-recognition-adapter", "timestamp-service"] } }, profiles: { "rm-verifier-1": { id: "https://vc4qi.example/profiles/rm-verifier", version: "1", status: "experimental", description: "Verifier-owned reliance profile for the experimental RM v1 binding. Fictional fixture configuration; not an external standard.", binding: { id: "https://vc4qi.example/bindings/rm/1", version: "1" }, trustAnchors: [{ id: "https://nab.vc4qi.example/controller", purposes: ["accredit-rm-producers", "accredit-rm-laboratories"] }], authority: { certificateRoutes: ["operational-scope"], globalRestrictions: ["accreditation-suspension"], maxRoutes: 8 }, credentialStatus: { required: !0, purposes: ["revocation"], maxAgeSeconds: 2592e3 }, mapping: { methodSuccession: "none" }, conformity: { requirements: [{ id: "as-mass-fraction-max-200-mg-per-kg", propertyIri: "https://vc4qi.example/bindings/rm/1#As", quantityKindIri: "https://vc4qi.example/bindings/rm/1#MassFraction", upperLimit: { value: "200", unit: "mg/kg" } }], decisionRules: [{ id: "guarded-acceptance-expanded-u", acceptWhen: "value-plus-expanded-uncertainty-at-most-limit" }, { id: "simple-acceptance", acceptWhen: "value-at-most-limit" }] } }, "rm-verifier-global-aci-1": { id: "https://vc4qi.example/profiles/rm-verifier-global-aci", version: "1", status: "experimental", description: "Fictional verifier abroad: its only trust anchor is a fictional stand-in for an arrangement anchor (Global ACI role), not the accreditation body. It accepts the accreditation body when an accreditation points up (termsOfUse) to that anchor's recognition of its issuer, a W3C Recognized Entities credential (Working Draft of 4 November 2026) with one subject, for the main scope each grant requires. It names no recognition itself. Otherwise identical to rm-verifier-1; not an external standard.", binding: { id: "https://vc4qi.example/bindings/rm/1", version: "1" }, trustAnchors: [{ id: "https://global-aci.vc4qi.example/controller", purposes: ["recognize-accreditation-bodies"] }], authority: { certificateRoutes: ["operational-scope"], globalRestrictions: ["accreditation-suspension"], maxRoutes: 8 }, credentialStatus: { required: !0, purposes: ["revocation"], maxAgeSeconds: 2592e3 }, mapping: { methodSuccession: "none" }, conformity: { requirements: [{ id: "as-mass-fraction-max-200-mg-per-kg", propertyIri: "https://vc4qi.example/bindings/rm/1#As", quantityKindIri: "https://vc4qi.example/bindings/rm/1#MassFraction", upperLimit: { value: "200", unit: "mg/kg" } }], decisionRules: [{ id: "guarded-acceptance-expanded-u", acceptWhen: "value-plus-expanded-uncertainty-at-most-limit" }, { id: "simple-acceptance", acceptWhen: "value-at-most-limit" }] }, bindingRules: { recognition: { recognizerPurpose: "recognize-accreditation-bodies", action: "accredit", purposes: { "accredit-rm-producers": { activity: "Reference material production", standardId: "urn:iso:std:iso:17034:ed-1" }, "accredit-rm-laboratories": { activity: "Testing", standardId: "urn:iso:std:iso-iec:17025:ed-3" } } } } }, "rm-verifier-two-routes-1": { id: "https://vc4qi.example/profiles/rm-verifier-two-routes", version: "1", status: "experimental", description: "Fictional verifier profile with two complete certificate routes, (operational scope within an accreditation) OR (direct accreditation), and the accreditation-suspension global restriction outside the OR. Exercises route composition (C01-C07); not an external standard.", binding: { id: "https://vc4qi.example/bindings/rm/1", version: "1" }, trustAnchors: [{ id: "https://nab.vc4qi.example/controller", purposes: ["accredit-rm-producers", "accredit-rm-laboratories"] }], authority: { certificateRoutes: ["operational-scope", "direct-accreditation"], globalRestrictions: ["accreditation-suspension"], maxRoutes: 8 }, credentialStatus: { required: !0, purposes: ["revocation"], maxAgeSeconds: 2592e3 }, mapping: { methodSuccession: "none" }, conformity: { requirements: [{ id: "as-mass-fraction-max-200-mg-per-kg", propertyIri: "https://vc4qi.example/bindings/rm/1#As", quantityKindIri: "https://vc4qi.example/bindings/rm/1#MassFraction", upperLimit: { value: "200", unit: "mg/kg" } }], decisionRules: [{ id: "guarded-acceptance-expanded-u", acceptWhen: "value-plus-expanded-uncertainty-at-most-limit" }, { id: "simple-acceptance", acceptWhen: "value-at-most-limit" }] } } }, files: [{ uri: "https://www.w3.org/ns/credentials/v2", mediaType: "application/ld+json", origin: "W3C Verifiable Credentials Data Model v2.0 context, vendored copy already used by the repository loader", version: "VCDM 2.0", digestSRI: "sha384-l/HrjlBCNWyAX91hr6LFV2Y3heB5Tcr6IeE4/Tje8YyzYBM8IhqjHWiWpr8+ZbYU", text: `{
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
` }], archive: [{ uri: "https://nab.vc4qi.example/status/1", mediaType: "application/vc", origin: "VC4QI experimental RM v1 signed fixture (fictional parties, insecure keys)", version: "1", validFrom: "2026-01-01T00:00:00Z", validUntil: "2026-03-01T00:00:00Z", digestSRI: "sha384-7S4MCwH8AbLzHkOes8UlxgzJm7Gv8jCvFRvwaxcf8r66/x1t2Nm0c6CaWQcB2wjO", text: `{
  "@context": [
    "https://www.w3.org/ns/credentials/v2"
  ],
  "id": "https://nab.vc4qi.example/status/1",
  "type": [
    "VerifiableCredential",
    "BitstringStatusListCredential"
  ],
  "issuer": "https://nab.vc4qi.example/controller",
  "validFrom": "2026-01-01T00:00:00Z",
  "validUntil": "2026-03-01T00:00:00Z",
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
    "created": "2026-01-01T00:00:00Z",
    "proofValue": "z4itZrxKrNv9aZ8zVkTsow8bRevMxvLxx3Paar8MXeY28S4ZznsQGhgEMMg1nb1DRQ8Kmar5Svu5GtV7xc29KSStm"
  }
}
` }, { uri: "https://producer.vc4qi.example/status/1", mediaType: "application/vc", origin: "VC4QI experimental RM v1 signed fixture (fictional parties, insecure keys)", version: "1", validFrom: "2026-01-01T00:00:00Z", validUntil: "2026-03-01T00:00:00Z", digestSRI: "sha384-crunH0sPGo7Jqy1veRbpqvgB/uGBFh7WPvzagINlz2BeaX/ZmTiwIrt37FocWsdk", text: `{
  "@context": [
    "https://www.w3.org/ns/credentials/v2"
  ],
  "id": "https://producer.vc4qi.example/status/1",
  "type": [
    "VerifiableCredential",
    "BitstringStatusListCredential"
  ],
  "issuer": "https://producer.vc4qi.example/controller",
  "validFrom": "2026-01-01T00:00:00Z",
  "validUntil": "2026-03-01T00:00:00Z",
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
    "created": "2026-01-01T00:00:00Z",
    "proofValue": "z2nV1iCXkmneyS5aFod5KFNzm1kQEpp3HVKVqpyorAseWZ2yG5mHUWxRVtgnKTW6yVyAbN4VUsw1dojETnWoSzfjo"
  }
}
` }, { uri: "https://lab.vc4qi.example/status/1", mediaType: "application/vc", origin: "VC4QI experimental RM v1 signed fixture (fictional parties, insecure keys)", version: "1", validFrom: "2026-01-01T00:00:00Z", validUntil: "2026-03-01T00:00:00Z", digestSRI: "sha384-VM9I37elEdhd/228wyVxHbMgROx9RmwE1d3zqa4Mz4nwdgybxlPLofG0xkSk9hhA", text: `{
  "@context": [
    "https://www.w3.org/ns/credentials/v2"
  ],
  "id": "https://lab.vc4qi.example/status/1",
  "type": [
    "VerifiableCredential",
    "BitstringStatusListCredential"
  ],
  "issuer": "https://lab.vc4qi.example/controller",
  "validFrom": "2026-01-01T00:00:00Z",
  "validUntil": "2026-03-01T00:00:00Z",
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
    "created": "2026-01-01T00:00:00Z",
    "proofValue": "z2mJqQT4S9KZZ2kwC7wM9eJmJcnMBTdYU3qdYnoHC8P82zy7vB17ZM1MPZ57gJ4NBdou7aZsSwsDazNcWiUmfW8LG"
  }
}
` }, { uri: "https://nab.vc4qi.example/status/suspension/1", mediaType: "application/vc", origin: "VC4QI experimental RM v1 signed fixture (fictional parties, insecure keys)", version: "1", validFrom: "2026-01-01T00:00:00Z", validUntil: "2026-03-01T00:00:00Z", digestSRI: "sha384-5X/FLhJ8mWHODe4W3FK41tRuWm93QCRCwWLLmuP2K+JrwgW9qBUuWB2+fEtiPiYs", text: `{
  "@context": [
    "https://www.w3.org/ns/credentials/v2"
  ],
  "id": "https://nab.vc4qi.example/status/suspension/1",
  "type": [
    "VerifiableCredential",
    "BitstringStatusListCredential"
  ],
  "issuer": "https://nab.vc4qi.example/controller",
  "validFrom": "2026-01-01T00:00:00Z",
  "validUntil": "2026-03-01T00:00:00Z",
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
    "created": "2026-01-01T00:00:00Z",
    "proofValue": "zxkhF425ewFq4FeVEMJH4juVR13Kc9MxrZcAX2iy2QXFqMH6q193wJ53pWPgw3QPEuGvjpt8XMtjBCmjQsvNvW2A"
  }
}
` }, { uri: "https://global-aci.vc4qi.example/status/1", mediaType: "application/vc", origin: "VC4QI experimental RM v1 signed fixture (fictional parties, insecure keys)", version: "1", validFrom: "2026-01-01T00:00:00Z", validUntil: "2026-03-01T00:00:00Z", digestSRI: "sha384-6gup4gCn7XkfhMgjkjEhgiP/zv+uK6vg6wb+ZMFtgPenqCJzPcABfDbPM1RafS5Z", text: `{
  "@context": [
    "https://www.w3.org/ns/credentials/v2"
  ],
  "id": "https://global-aci.vc4qi.example/status/1",
  "type": [
    "VerifiableCredential",
    "BitstringStatusListCredential"
  ],
  "issuer": "https://global-aci.vc4qi.example/controller",
  "validFrom": "2026-01-01T00:00:00Z",
  "validUntil": "2026-03-01T00:00:00Z",
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
    "created": "2026-01-01T00:00:00Z",
    "proofValue": "z5aQYF7xnzyNrVAtrKzu9LteKcD3bWfFLkuPExQJi9ixUXc66rCsxLn1TikSgyMdZUNKhZpMNW7u3renZotUm7uLU"
  }
}
` }, { uri: "https://global-aci.vc4qi.example/status/suspension/1", mediaType: "application/vc", origin: "VC4QI experimental RM v1 signed fixture (fictional parties, insecure keys)", version: "1", validFrom: "2026-01-01T00:00:00Z", validUntil: "2026-03-01T00:00:00Z", digestSRI: "sha384-OUg5/fEHyJWiHfVK6JO/3F9ZiB8YCupdW8w6xETQPB5UozbrWVbs5gBvhZ85iRIq", text: `{
  "@context": [
    "https://www.w3.org/ns/credentials/v2"
  ],
  "id": "https://global-aci.vc4qi.example/status/suspension/1",
  "type": [
    "VerifiableCredential",
    "BitstringStatusListCredential"
  ],
  "issuer": "https://global-aci.vc4qi.example/controller",
  "validFrom": "2026-01-01T00:00:00Z",
  "validUntil": "2026-03-01T00:00:00Z",
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
    "created": "2026-01-01T00:00:00Z",
    "proofValue": "z2Vbvrnszd979yQWy2vxri1R4E1TcXrwAzZYQTF6E8CiTw9hymNvZgLdE61dsLrBKqpXUCFKD3XsGTZ5c1xNRM7HP"
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
function na(e, ...t) {
  if (!zl(e))
    throw new Error("Uint8Array expected");
  if (t.length > 0 && !t.includes(e.length))
    throw new Error("Uint8Array expected of length " + t + ", got length=" + e.length);
}
function Ma(e, t = !0) {
  if (e.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (t && e.finished)
    throw new Error("Hash#digest() has already been called");
}
function Vl(e, t) {
  na(e);
  const n = t.outputLen;
  if (e.length < n)
    throw new Error("digestInto() expects output buffer of length at least " + n);
}
function jn(...e) {
  for (let t = 0; t < e.length; t++)
    e[t].fill(0);
}
function jr(e) {
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
function qd(e) {
  return typeof e == "string" && (e = Ul(e)), na(e), e;
}
class Gl {
}
function ia(e) {
  const t = (i) => e().update(qd(i)).digest(), n = e();
  return t.outputLen = n.outputLen, t.blockLen = n.blockLen, t.create = () => e(), t;
}
function Fl(e, t, n, i) {
  if (typeof e.setBigUint64 == "function")
    return e.setBigUint64(t, n, i);
  const o = BigInt(32), r = BigInt(4294967295), s = Number(n >> o & r), a = Number(n & r), c = i ? 4 : 0, d = i ? 0 : 4;
  e.setUint32(t + c, s, i), e.setUint32(t + d, a, i);
}
function Bl(e, t, n) {
  return e & t ^ ~e & n;
}
function Zl(e, t, n) {
  return e & t ^ e & n ^ t & n;
}
class Rd extends Gl {
  constructor(t, n, i, o) {
    super(), this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.blockLen = t, this.outputLen = n, this.padOffset = i, this.isLE = o, this.buffer = new Uint8Array(t), this.view = jr(this.buffer);
  }
  update(t) {
    Ma(this), t = qd(t), na(t);
    const { view: n, buffer: i, blockLen: o } = this, r = t.length;
    for (let s = 0; s < r; ) {
      const a = Math.min(o - this.pos, r - s);
      if (a === o) {
        const c = jr(t);
        for (; o <= r - s; s += o)
          this.process(c, s);
        continue;
      }
      i.set(t.subarray(s, s + a), this.pos), this.pos += a, s += a, this.pos === o && (this.process(n, 0), this.pos = 0);
    }
    return this.length += t.length, this.roundClean(), this;
  }
  digestInto(t) {
    Ma(this), Vl(t, this), this.finished = !0;
    const { buffer: n, view: i, blockLen: o, isLE: r } = this;
    let { pos: s } = this;
    n[s++] = 128, jn(this.buffer.subarray(s)), this.padOffset > o - s && (this.process(i, 0), s = 0);
    for (let y = s; y < o; y++)
      n[y] = 0;
    Fl(i, o - 8, BigInt(this.length * 8), r), this.process(i, 0);
    const a = jr(t), c = this.outputLen;
    if (c % 4)
      throw new Error("_sha2: outputLen should be aligned to 32bit");
    const d = c / 4, p = this.get();
    if (d > p.length)
      throw new Error("_sha2: outputLen bigger than state");
    for (let y = 0; y < d; y++)
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
const qt = /* @__PURE__ */ Uint32Array.from([
  1779033703,
  3144134277,
  1013904242,
  2773480762,
  1359893119,
  2600822924,
  528734635,
  1541459225
]), Ae = /* @__PURE__ */ Uint32Array.from([
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
]), zn = /* @__PURE__ */ BigInt(2 ** 32 - 1), Oa = /* @__PURE__ */ BigInt(32);
function Hl(e, t = !1) {
  return t ? { h: Number(e & zn), l: Number(e >> Oa & zn) } : { h: Number(e >> Oa & zn) | 0, l: Number(e & zn) | 0 };
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
const La = (e, t, n) => e >>> n, Na = (e, t, n) => e << 32 - n | t >>> n, Qt = (e, t, n) => e >>> n | t << 32 - n, Wt = (e, t, n) => e << 32 - n | t >>> n, Vn = (e, t, n) => e << 64 - n | t >>> n - 32, Un = (e, t, n) => e >>> n - 32 | t << 64 - n;
function mt(e, t, n, i) {
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
]), Rt = /* @__PURE__ */ new Uint32Array(64);
class nu extends Rd {
  constructor(t = 32) {
    super(64, t, 8, !1), this.A = qt[0] | 0, this.B = qt[1] | 0, this.C = qt[2] | 0, this.D = qt[3] | 0, this.E = qt[4] | 0, this.F = qt[5] | 0, this.G = qt[6] | 0, this.H = qt[7] | 0;
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
      Rt[y] = t.getUint32(n, !1);
    for (let y = 16; y < 64; y++) {
      const f = Rt[y - 15], h = Rt[y - 2], w = rt(f, 7) ^ rt(f, 18) ^ f >>> 3, x = rt(h, 17) ^ rt(h, 19) ^ h >>> 10;
      Rt[y] = x + Rt[y - 7] + w + Rt[y - 16] | 0;
    }
    let { A: i, B: o, C: r, D: s, E: a, F: c, G: d, H: p } = this;
    for (let y = 0; y < 64; y++) {
      const f = rt(a, 6) ^ rt(a, 11) ^ rt(a, 25), h = p + f + Bl(a, c, d) + tu[y] + Rt[y] | 0, x = (rt(i, 2) ^ rt(i, 13) ^ rt(i, 22)) + Zl(i, o, r) | 0;
      p = d, d = c, c = a, a = s + h | 0, s = r, r = o, o = i, i = h + x | 0;
    }
    i = i + this.A | 0, o = o + this.B | 0, r = r + this.C | 0, s = s + this.D | 0, a = a + this.E | 0, c = c + this.F | 0, d = d + this.G | 0, p = p + this.H | 0, this.set(i, o, r, s, a, c, d, p);
  }
  roundClean() {
    jn(Rt);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0), jn(this.buffer);
  }
}
const jd = Jl([
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
].map((e) => BigInt(e))), iu = jd[0], ru = jd[1], jt = /* @__PURE__ */ new Uint32Array(80), $t = /* @__PURE__ */ new Uint32Array(80);
class $d extends Rd {
  constructor(t = 64) {
    super(128, t, 16, !1), this.Ah = Ie[0] | 0, this.Al = Ie[1] | 0, this.Bh = Ie[2] | 0, this.Bl = Ie[3] | 0, this.Ch = Ie[4] | 0, this.Cl = Ie[5] | 0, this.Dh = Ie[6] | 0, this.Dl = Ie[7] | 0, this.Eh = Ie[8] | 0, this.El = Ie[9] | 0, this.Fh = Ie[10] | 0, this.Fl = Ie[11] | 0, this.Gh = Ie[12] | 0, this.Gl = Ie[13] | 0, this.Hh = Ie[14] | 0, this.Hl = Ie[15] | 0;
  }
  // prettier-ignore
  get() {
    const { Ah: t, Al: n, Bh: i, Bl: o, Ch: r, Cl: s, Dh: a, Dl: c, Eh: d, El: p, Fh: y, Fl: f, Gh: h, Gl: w, Hh: x, Hl: v } = this;
    return [t, n, i, o, r, s, a, c, d, p, y, f, h, w, x, v];
  }
  // prettier-ignore
  set(t, n, i, o, r, s, a, c, d, p, y, f, h, w, x, v) {
    this.Ah = t | 0, this.Al = n | 0, this.Bh = i | 0, this.Bl = o | 0, this.Ch = r | 0, this.Cl = s | 0, this.Dh = a | 0, this.Dl = c | 0, this.Eh = d | 0, this.El = p | 0, this.Fh = y | 0, this.Fl = f | 0, this.Gh = h | 0, this.Gl = w | 0, this.Hh = x | 0, this.Hl = v | 0;
  }
  process(t, n) {
    for (let m = 0; m < 16; m++, n += 4)
      jt[m] = t.getUint32(n), $t[m] = t.getUint32(n += 4);
    for (let m = 16; m < 80; m++) {
      const l = jt[m - 15] | 0, u = $t[m - 15] | 0, b = Qt(l, u, 1) ^ Qt(l, u, 8) ^ La(l, u, 7), S = Wt(l, u, 1) ^ Wt(l, u, 8) ^ Na(l, u, 7), I = jt[m - 2] | 0, P = $t[m - 2] | 0, R = Qt(I, P, 19) ^ Vn(I, P, 61) ^ La(I, P, 6), E = Wt(I, P, 19) ^ Un(I, P, 61) ^ Na(I, P, 6), k = Wl(S, E, $t[m - 7], $t[m - 16]), M = Xl(k, b, R, jt[m - 7], jt[m - 16]);
      jt[m] = M | 0, $t[m] = k | 0;
    }
    let { Ah: i, Al: o, Bh: r, Bl: s, Ch: a, Cl: c, Dh: d, Dl: p, Eh: y, El: f, Fh: h, Fl: w, Gh: x, Gl: v, Hh: A, Hl: g } = this;
    for (let m = 0; m < 80; m++) {
      const l = Qt(y, f, 14) ^ Qt(y, f, 18) ^ Vn(y, f, 41), u = Wt(y, f, 14) ^ Wt(y, f, 18) ^ Un(y, f, 41), b = y & h ^ ~y & x, S = f & w ^ ~f & v, I = Yl(g, u, S, ru[m], $t[m]), P = eu(I, A, l, b, iu[m], jt[m]), R = I | 0, E = Qt(i, o, 28) ^ Vn(i, o, 34) ^ Vn(i, o, 39), k = Wt(i, o, 28) ^ Un(i, o, 34) ^ Un(i, o, 39), M = i & r ^ i & a ^ r & a, j = o & s ^ o & c ^ s & c;
      A = x | 0, g = v | 0, x = h | 0, v = w | 0, h = y | 0, w = f | 0, { h: y, l: f } = mt(d | 0, p | 0, P | 0, R | 0), d = a | 0, p = c | 0, a = r | 0, c = s | 0, r = i | 0, s = o | 0;
      const N = Kl(R, k, j);
      i = Ql(N, P, E, M), o = N | 0;
    }
    ({ h: i, l: o } = mt(this.Ah | 0, this.Al | 0, i | 0, o | 0)), { h: r, l: s } = mt(this.Bh | 0, this.Bl | 0, r | 0, s | 0), { h: a, l: c } = mt(this.Ch | 0, this.Cl | 0, a | 0, c | 0), { h: d, l: p } = mt(this.Dh | 0, this.Dl | 0, d | 0, p | 0), { h: y, l: f } = mt(this.Eh | 0, this.El | 0, y | 0, f | 0), { h, l: w } = mt(this.Fh | 0, this.Fl | 0, h | 0, w | 0), { h: x, l: v } = mt(this.Gh | 0, this.Gl | 0, x | 0, v | 0), { h: A, l: g } = mt(this.Hh | 0, this.Hl | 0, A | 0, g | 0), this.set(i, o, r, s, a, c, d, p, y, f, h, w, x, v, A, g);
  }
  roundClean() {
    jn(jt, $t);
  }
  destroy() {
    jn(this.buffer), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  }
}
class su extends $d {
  constructor() {
    super(48), this.Ah = Ae[0] | 0, this.Al = Ae[1] | 0, this.Bh = Ae[2] | 0, this.Bl = Ae[3] | 0, this.Ch = Ae[4] | 0, this.Cl = Ae[5] | 0, this.Dh = Ae[6] | 0, this.Dl = Ae[7] | 0, this.Eh = Ae[8] | 0, this.El = Ae[9] | 0, this.Fh = Ae[10] | 0, this.Fl = Ae[11] | 0, this.Gh = Ae[12] | 0, this.Gl = Ae[13] | 0, this.Hh = Ae[14] | 0, this.Hl = Ae[15] | 0;
  }
}
const au = /* @__PURE__ */ ia(() => new nu()), ou = /* @__PURE__ */ ia(() => new $d()), cu = /* @__PURE__ */ ia(() => new su()), Pd = au, du = ou, lu = cu;
class uu {
  constructor(t) {
    ht(this, "_chunks", []);
    ht(this, "_algo");
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
    return this._algo === "sha384" ? r = lu(i) : this._algo === "sha512" ? r = du(i) : r = Pd(i), t === "base64" ? btoa(String.fromCharCode(...r)) : t === "hex" ? Array.from(r).map((s) => s.toString(16).padStart(2, "0")).join("") : r;
  }
}
function Ls(e) {
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
function ar(e) {
  return `sha384-${Ls("sha384").update(e).digest("base64")}`;
}
function Da(e) {
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
var cn;
class _d {
  constructor(t) {
    Dn(this, cn, /* @__PURE__ */ new Map());
    for (const n of t) {
      for (const [o, r] of Object.entries({
        uri: n.uri,
        mediaType: n.mediaType,
        origin: n.origin,
        version: n.version
      })) pu(r, o);
      if (it(this, cn).has(n.uri))
        throw new Ce("DUPLICATE_RESOURCE", `Duplicate static resource: ${n.uri}`);
      const i = ar(n.bytes);
      if (i !== n.digestSRI)
        throw new Ce(
          "INTEGRITY_MISMATCH",
          `Static resource ${n.uri} has ${i}; expected ${n.digestSRI}.`
        );
      it(this, cn).set(n.uri, { ...n, bytes: Uint8Array.from(n.bytes) });
    }
  }
  openSession(t) {
    if (!Number.isSafeInteger(t.maxResources) || t.maxResources <= 0 || !Number.isSafeInteger(t.maxBytes) || t.maxBytes <= 0)
      throw new Ce("INVALID_RESOURCE", "Catalog budgets must be positive safe integers.");
    return new fu(it(this, cn), Object.freeze({ ...t }));
  }
}
cn = new WeakMap();
var dn, ln;
class fu {
  constructor(t, n) {
    Dn(this, dn, 0);
    Dn(this, ln, 0);
    this.resources = t, this.budget = n;
  }
  get usage() {
    return Object.freeze({ resources: it(this, dn), bytes: it(this, ln) });
  }
  resolve(t) {
    const n = this.resources.get(t);
    if (!n)
      throw new Ce("RESOURCE_NOT_FOUND", `Static resource is not installed: ${t}`);
    if (it(this, dn) + 1 > this.budget.maxResources || it(this, ln) + n.bytes.byteLength > this.budget.maxBytes)
      throw new Ce("RESOURCE_BUDGET_EXCEEDED", `Static resource budget exceeded at ${t}.`);
    return Rr(this, dn, it(this, dn) + 1), Rr(this, ln, it(this, ln) + n.bytes.byteLength), { ...n, bytes: Uint8Array.from(n.bytes) };
  }
}
dn = new WeakMap(), ln = new WeakMap();
function Td(e) {
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
const za = "https://vc4qi.example/bindings/rm/1", $r = [
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
function Cd(e) {
  if (e !== null && typeof e == "object") {
    for (const t of Object.values(e)) Cd(t);
    Object.freeze(e);
  }
  return e;
}
function hu(e) {
  if (!Gn(e)) throw new TypeError("Binding manifest must be an object.");
  if (Object.keys(e).length !== $r.length || $r.some((n) => !Object.hasOwn(e, n)))
    throw new TypeError("Binding manifest must contain exactly the supported top-level categories.");
  if (typeof e.id != "string" || e.id.length === 0 || typeof e.version != "string" || e.version.length === 0 || e.status !== "experimental" && e.status !== "production")
    throw new TypeError("Binding manifest identity, version, or status is invalid.");
  if (!Gn(e.installation) || e.installation.status !== "incomplete" && e.installation.status !== "installable" || typeof e.installation.reason != "string" || e.installation.reason.length === 0 || !Array.isArray(e.installation.pendingResources) || e.installation.pendingResources.some((n) => typeof n != "string" || n.length === 0))
    throw new TypeError("Binding manifest installation state is invalid.");
  if (!Array.isArray(e.factMappings) || e.factMappings.length === 0 || e.factMappings.some((n) => !Gn(n)))
    throw new TypeError("Binding manifest factMappings must be a nonempty object array.");
  for (const n of $r.slice(4))
    if (!(n === "installation" || n === "factMappings") && (!Gn(e[n]) || Object.keys(e[n]).length === 0))
      throw new TypeError(`Binding manifest ${n} must be a nonempty object.`);
  return Cd(structuredClone(e));
}
const Zt = "https://www.w3.org/ns/credentials/v2", mu = "https://vc4qi.example/contexts/rm/1", Dt = "https://vc4qi.example/schemas/rm/1/", yu = "https://vc4qi.example/contexts/recognized-entities/draft-20261104", Ed = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz", Ns = BigInt(58);
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
    const o = Number(n % Ns);
    n = n / Ns, i.unshift(o);
  }
  return "1".repeat(t) + i.map((o) => Ed[o]).join("");
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
    const a = Ed.indexOf(s);
    if (a === -1) throw new Error(`Invalid base58btc character: '${s}'`);
    n = n * Ns + BigInt(a);
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
function ra(e) {
  if (!e.startsWith("z"))
    throw new Error(`Expected multibase base58btc prefix 'z', got '${e[0]}'`);
  return vu(e.slice(1));
}
const Va = [237, 1], wu = ["revoked", "expires"];
function ve(e, t, n, i = {}) {
  return Object.freeze({ state: e, code: t, reason: n, ...i });
}
function Bi(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function xu(e) {
  if (typeof e == "string" && e.length > 0) return e;
  if (Bi(e) && typeof e.id == "string" && e.id.length > 0) return e.id;
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
function Au(e) {
  if (typeof e != "string" || !e.startsWith("z")) return;
  let t;
  try {
    t = ra(e);
  } catch {
    return;
  }
  if (!(t.length !== 34 || t[0] !== Va[0] || t[1] !== Va[1]))
    return t.slice(2);
}
function Iu(e, t, n) {
  const i = xu(e);
  if (i === void 0)
    return ve("not_established", "ISSUER_MISSING", "The credential has no issuer identifier.");
  if (typeof t != "string")
    return ve("contradicted", "MALFORMED_METHOD", "The proof names no verification method.");
  const o = Su(t);
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
  const d = c[0];
  if (d.type !== "Multikey")
    return ve(
      "not_established",
      "METHOD_TYPE_UNSUPPORTED",
      `Verification method type ${String(d.type)} is not supported; Multikey is required.`
    );
  if (d.controller !== o)
    return ve(
      "contradicted",
      "METHOD_CONTROLLER_MISMATCH",
      `${t} is controlled by ${String(d.controller)}, not ${o}.`
    );
  if (wu.some((f) => Object.hasOwn(d, f)))
    return ve(
      "not_established",
      "METHOD_LIFECYCLE_UNSUPPORTED",
      "Key revocation/expiry metadata is not supported in the initial slice."
    );
  const p = Au(d.publicKeyMultibase);
  if (p === void 0)
    return ve(
      "contradicted",
      "INVALID_PUBLIC_KEY",
      `${t} does not carry an Ed25519 Multikey public key.`
    );
  const y = Array.isArray(r.assertionMethod) ? r.assertionMethod : [];
  return y.includes(t) ? ve(
    "established",
    "AUTHORIZED",
    `${t} is the issuer's Ed25519 assertion key.`,
    { publicKey: p, verificationMethod: t, controllerDocumentDigest: s }
  ) : y.some((f) => Bi(f) && f.id === t) ? ve(
    "not_established",
    "EMBEDDED_METHOD_UNSUPPORTED",
    "Embedded assertionMethod entries are not supported; a reference is required."
  ) : ve(
    "contradicted",
    "NOT_ASSERTION_METHOD",
    `${t} is not authorized for assertionMethod.`
  );
}
const Ua = ["accept-successor", "require-extension", "none"], qu = ["value-at-most-limit", "value-plus-expanded-uncertainty-at-most-limit"], Ru = /^(0|[1-9][0-9]*)(\.[0-9]+)?$/;
function Je(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
const ze = (e) => typeof e == "string" && e.trim().length > 0, Pr = (e) => Array.isArray(e) && e.length > 0 && e.every(ze) && new Set(e).size === e.length;
function or(e) {
  if (!Je(e) || !ze(e.id) || !ze(e.version) || e.status !== "experimental" && e.status !== "production")
    throw new TypeError("Reliance profile identity, version or status is invalid.");
  const t = e.binding;
  if (!Je(t) || !ze(t.id) || !ze(t.version))
    throw new TypeError("Reliance profile must name exactly one binding and version.");
  if (!Array.isArray(e.trustAnchors) || e.trustAnchors.some((d) => !Je(d) || !ze(d.id) || !Pr(d.purposes)))
    throw new TypeError("Reliance profile trustAnchors must list anchors with explicit purposes.");
  const n = e.authority;
  if (!Je(n) || !Pr(n.certificateRoutes) || !Array.isArray(n.globalRestrictions) || !n.globalRestrictions.every(ze) || !Number.isSafeInteger(n.maxRoutes) || n.maxRoutes <= 0)
    throw new TypeError("Reliance profile authority needs certificateRoutes, globalRestrictions and a positive maxRoutes.");
  const i = e.credentialStatus;
  if (!Je(i) || typeof i.required != "boolean" || !Pr(i.purposes) || !Number.isSafeInteger(i.maxAgeSeconds) || i.maxAgeSeconds <= 0)
    throw new TypeError("Reliance profile credentialStatus needs required, purposes and a positive maxAgeSeconds.");
  const o = e.mapping;
  if (!Je(o) || !Ua.includes(o.methodSuccession))
    throw new TypeError(`Reliance profile mapping.methodSuccession must be one of ${Ua.join(", ")}.`);
  const r = e.conformity;
  if (!Je(r) || !Array.isArray(r.requirements) || !Array.isArray(r.decisionRules) || r.requirements.some((d) => !Je(d) || !ze(d.id) || !ze(d.propertyIri) || !ze(d.quantityKindIri) || !Je(d.upperLimit) || typeof d.upperLimit.value != "string" || !Ru.test(d.upperLimit.value) || !ze(d.upperLimit.unit)) || r.decisionRules.some((d) => !Je(d) || !ze(d.id) || !qu.includes(d.acceptWhen)))
    throw new TypeError("Reliance profile conformity needs requirements (id, propertyIri, quantityKindIri, upperLimit) and decisionRules (id, acceptWhen).");
  if (e.bindingRules !== void 0 && !Je(e.bindingRules))
    throw new TypeError("Reliance profile bindingRules must be an object when present.");
  const s = r.requirements, a = r.decisionRules, c = [...s.map((d) => d.id), ...a.map((d) => d.id)];
  if (new Set(c).size !== c.length) throw new TypeError("Reliance profile conformity ids must be unique.");
  return Object.freeze({
    id: e.id,
    version: e.version,
    status: e.status,
    binding: Object.freeze({ id: t.id, version: t.version }),
    trustAnchors: Object.freeze(e.trustAnchors.map((d) => Object.freeze({
      id: d.id,
      purposes: Object.freeze([...d.purposes])
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
      requirements: Object.freeze(s.map((d) => Object.freeze({
        id: d.id,
        propertyIri: d.propertyIri,
        quantityKindIri: d.quantityKindIri,
        upperLimit: Object.freeze({ value: d.upperLimit.value, unit: d.upperLimit.unit })
      }))),
      decisionRules: Object.freeze(a.map((d) => Object.freeze({ id: d.id, acceptWhen: d.acceptWhen })))
    }),
    bindingRules: Object.freeze({ ...e.bindingRules })
  });
}
function ue(e, t) {
  if (e.trim().length === 0)
    throw new TypeError(`${t} must be a non-empty string.`);
}
function _r(e, t) {
  if (new Set(e).size !== e.length)
    throw new TypeError(`${t} must not contain duplicates.`);
}
function Ds(e, t) {
  const n = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(?:\.\d{1,9})?(Z|[+-]\d{2}:\d{2})$/.exec(e);
  if (!n)
    throw new TypeError(`${t} must be an ISO 8601 date-time with an explicit offset.`);
  const [, i, o, r, s, a, c] = n, d = n[7], p = Number(i), y = Number(o), f = Number(r), h = Number(s), w = Number(a), x = Number(c), v = /* @__PURE__ */ new Date(0);
  v.setUTCFullYear(p, y - 1, f), v.setUTCHours(0, 0, 0, 0);
  const A = v.getUTCFullYear() !== p || v.getUTCMonth() !== y - 1 || v.getUTCDate() !== f, g = d === "Z" ? null : /^([+-])(\d{2}):(\d{2})$/.exec(d), m = g !== null && (Number(g[2]) > 23 || Number(g[3]) > 59);
  if (p < 1 || A || h > 23 || w > 59 || x > 59 || m || !Number.isFinite(Date.parse(e)))
    throw new TypeError(`${t} must be a valid ISO 8601 date-time.`);
}
function Tr(e, t) {
  if (!Number.isSafeInteger(e) || e <= 0)
    throw new TypeError(`${t} must be a positive safe integer.`);
}
function Qi(e, t) {
  ue(e.id, `${t}.id`), ue(e.version, `${t}.version`);
}
function Wi(e) {
  return Object.freeze({ id: e.id, version: e.version });
}
function An(e) {
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
  if (ue(e.requestId, "requestId"), ue(e.targetId, "targetId"), ue(e.purpose, "purpose"), ue(e.trustConfigId, "trustConfigId"), Qi(e.binding, "binding"), Qi(e.profile, "profile"), Ds(e.evaluationTime, "evaluationTime"), Ds(e.activityTime, "activityTime"), e.selectedClaims.length === 0)
    throw new TypeError("selectedClaims must contain at least one claim.");
  for (const [r, s] of e.selectedClaims.entries())
    ue(s.id, `selectedClaims[${r}].id`), ue(s.sourcePointer, `selectedClaims[${r}].sourcePointer`);
  _r(e.selectedClaims.map((r) => r.id), "selected claim IDs"), _r(e.selectedClaims.map((r) => r.sourcePointer), "selected claim source pointers");
  for (const [r, s] of e.suppliedEvidence.entries())
    ue(s, `suppliedEvidence[${r}]`);
  _r(e.suppliedEvidence, "suppliedEvidence"), Tr(e.resolverLimits.maxResources, "resolverLimits.maxResources"), Tr(e.resolverLimits.maxDepth, "resolverLimits.maxDepth"), Tr(e.resolverLimits.maxBytes, "resolverLimits.maxBytes"), e.conformity && (ue(e.conformity.requirementId, "conformity.requirementId"), ue(e.conformity.decisionRuleId, "conformity.decisionRuleId"));
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
function $u(e, t) {
  if (!Number.isInteger(e.gate) || e.gate < 0 || e.gate > 6)
    throw new TypeError(`trace[${t}].gate must be a canonical gate number 0-6.`);
  ue(e.nodeUse, `trace[${t}].nodeUse`), ue(e.predicate, `trace[${t}].predicate`), ue(e.reason, `trace[${t}].reason`);
  const n = An({
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
  return Ds(e.observedAt, `resources[${t}].observedAt`), Object.freeze({ ...e });
}
function cr(e) {
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
    artifactVerification: Object.freeze(e.artifactVerification.map((t) => An({
      ...t
    }))),
    authorization: Object.freeze(e.authorization.map((t) => Object.freeze({
      ...An(t),
      routeWitnessIds: Object.freeze([...t.routeWitnessIds])
    }))),
    support: Object.freeze(e.support.map((t) => Object.freeze({
      ...An(t),
      witnessIds: Object.freeze([...t.witnessIds])
    }))),
    conformity: e.conformity.requested ? An({ ...e.conformity }) : Object.freeze({ requested: !1, execution: "not_run" }),
    decision: e.decision,
    trace: Object.freeze((e.trace ?? []).map($u)),
    resources: Object.freeze((e.resources ?? []).map(Pu)),
    limitations: Object.freeze([...e.limitations ?? []])
  });
}
function kd(e, t) {
  if (e.length === 0)
    throw new TypeError(`${t} requires at least one semantic state.`);
  for (const n of e)
    if (!["established", "contradicted", "not_established"].includes(n))
      throw new TypeError(`${t} received unsupported semantic state: ${String(n)}.`);
}
function xe(e) {
  return kd(e, "semanticAnd"), e.includes("contradicted") ? "contradicted" : e.every((t) => t === "established") ? "established" : "not_established";
}
function fn(e) {
  return kd(e, "semanticOr"), e.includes("established") ? "established" : e.every((t) => t === "contradicted") ? "contradicted" : "not_established";
}
function sa(e) {
  const t = xe(e);
  return t === "established" ? "accept" : t === "contradicted" ? "reject" : "not_established";
}
var Ga = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function aa(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function _u(e) {
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
var Fn = { exports: {} }, Cr = {}, yt = {}, zt = {}, Er = {}, kr = {}, Mr = {}, Fa;
function Xi() {
  return Fa || (Fa = 1, (function(e) {
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
        return (g = this._str) !== null && g !== void 0 ? g : this._str = this._items.reduce((m, l) => `${m}${l}`, "");
      }
      get names() {
        var g;
        return (g = this._names) !== null && g !== void 0 ? g : this._names = this._items.reduce((m, l) => (l instanceof n && (m[l.str] = (m[l.str] || 0) + 1), m), {});
      }
    }
    e._Code = i, e.nil = new i("");
    function o(A, ...g) {
      const m = [A[0]];
      let l = 0;
      for (; l < g.length; )
        a(m, g[l]), m.push(A[++l]);
      return new i(m);
    }
    e._ = o;
    const r = new i("+");
    function s(A, ...g) {
      const m = [h(A[0])];
      let l = 0;
      for (; l < g.length; )
        m.push(r), a(m, g[l]), m.push(r, h(A[++l]));
      return c(m), new i(m);
    }
    e.str = s;
    function a(A, g) {
      g instanceof i ? A.push(...g._items) : g instanceof n ? A.push(g) : A.push(y(g));
    }
    e.addCodeArg = a;
    function c(A) {
      let g = 1;
      for (; g < A.length - 1; ) {
        if (A[g] === r) {
          const m = d(A[g - 1], A[g + 1]);
          if (m !== void 0) {
            A.splice(g - 1, 3, m);
            continue;
          }
          A[g++] = "+";
        }
        g++;
      }
    }
    function d(A, g) {
      if (g === '""')
        return A;
      if (A === '""')
        return g;
      if (typeof A == "string")
        return g instanceof n || A[A.length - 1] !== '"' ? void 0 : typeof g != "string" ? `${A.slice(0, -1)}${g}"` : g[0] === '"' ? A.slice(0, -1) + g.slice(1) : void 0;
      if (typeof g == "string" && g[0] === '"' && !(A instanceof n))
        return `"${A}${g.slice(1)}`;
    }
    function p(A, g) {
      return g.emptyStr() ? A : A.emptyStr() ? g : s`${A}${g}`;
    }
    e.strConcat = p;
    function y(A) {
      return typeof A == "number" || typeof A == "boolean" || A === null ? A : h(Array.isArray(A) ? A.join(",") : A);
    }
    function f(A) {
      return new i(h(A));
    }
    e.stringify = f;
    function h(A) {
      return JSON.stringify(A).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
    }
    e.safeStringify = h;
    function w(A) {
      return typeof A == "string" && e.IDENTIFIER.test(A) ? new i(`.${A}`) : o`[${A}]`;
    }
    e.getProperty = w;
    function x(A) {
      if (typeof A == "string" && e.IDENTIFIER.test(A))
        return new i(`${A}`);
      throw new Error(`CodeGen: invalid export name: ${A}, use explicit $id name mapping`);
    }
    e.getEsmExportName = x;
    function v(A) {
      return new i(A.toString());
    }
    e.regexpCode = v;
  })(Mr)), Mr;
}
var Or = {}, Ba;
function Za() {
  return Ba || (Ba = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ValueScope = e.ValueScopeName = e.Scope = e.varKinds = e.UsedValueState = void 0;
    const t = /* @__PURE__ */ Xi();
    class n extends Error {
      constructor(d) {
        super(`CodeGen: "code" for ${d} not defined`), this.value = d.value;
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
      constructor({ prefixes: d, parent: p } = {}) {
        this._names = {}, this._prefixes = d, this._parent = p;
      }
      toName(d) {
        return d instanceof t.Name ? d : this.name(d);
      }
      name(d) {
        return new t.Name(this._newName(d));
      }
      _newName(d) {
        const p = this._names[d] || this._nameGroup(d);
        return `${d}${p.index++}`;
      }
      _nameGroup(d) {
        var p, y;
        if (!((y = (p = this._parent) === null || p === void 0 ? void 0 : p._prefixes) === null || y === void 0) && y.has(d) || this._prefixes && !this._prefixes.has(d))
          throw new Error(`CodeGen: prefix "${d}" is not allowed in this scope`);
        return this._names[d] = { prefix: d, index: 0 };
      }
    }
    e.Scope = o;
    class r extends t.Name {
      constructor(d, p) {
        super(p), this.prefix = d;
      }
      setValue(d, { property: p, itemIndex: y }) {
        this.value = d, this.scopePath = (0, t._)`.${new t.Name(p)}[${y}]`;
      }
    }
    e.ValueScopeName = r;
    const s = (0, t._)`\n`;
    class a extends o {
      constructor(d) {
        super(d), this._values = {}, this._scope = d.scope, this.opts = { ...d, _n: d.lines ? s : t.nil };
      }
      get() {
        return this._scope;
      }
      name(d) {
        return new r(d, this._newName(d));
      }
      value(d, p) {
        var y;
        if (p.ref === void 0)
          throw new Error("CodeGen: ref must be passed in value");
        const f = this.toName(d), { prefix: h } = f, w = (y = p.key) !== null && y !== void 0 ? y : p.ref;
        let x = this._values[h];
        if (x) {
          const g = x.get(w);
          if (g)
            return g;
        } else
          x = this._values[h] = /* @__PURE__ */ new Map();
        x.set(w, f);
        const v = this._scope[h] || (this._scope[h] = []), A = v.length;
        return v[A] = p.ref, f.setValue(p, { property: h, itemIndex: A }), f;
      }
      getValue(d, p) {
        const y = this._values[d];
        if (y)
          return y.get(p);
      }
      scopeRefs(d, p = this._values) {
        return this._reduceValues(p, (y) => {
          if (y.scopePath === void 0)
            throw new Error(`CodeGen: name "${y}" has no value`);
          return (0, t._)`${d}${y.scopePath}`;
        });
      }
      scopeCode(d = this._values, p, y) {
        return this._reduceValues(d, (f) => {
          if (f.value === void 0)
            throw new Error(`CodeGen: name "${f}" has no value`);
          return f.value.code;
        }, p, y);
      }
      _reduceValues(d, p, y = {}, f) {
        let h = t.nil;
        for (const w in d) {
          const x = d[w];
          if (!x)
            continue;
          const v = y[w] = y[w] || /* @__PURE__ */ new Map();
          x.forEach((A) => {
            if (v.has(A))
              return;
            v.set(A, i.Started);
            let g = p(A);
            if (g) {
              const m = this.opts.es5 ? e.varKinds.var : e.varKinds.const;
              h = (0, t._)`${h}${m} ${A} = ${g};${this.opts._n}`;
            } else if (g = f?.(A))
              h = (0, t._)`${h}${g}${this.opts._n}`;
            else
              throw new n(A);
            v.set(A, i.Completed);
          });
        }
        return h;
      }
    }
    e.ValueScope = a;
  })(Or)), Or;
}
var Ha;
function te() {
  return Ha || (Ha = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.or = e.and = e.not = e.CodeGen = e.operators = e.varKinds = e.ValueScopeName = e.ValueScope = e.Scope = e.Name = e.regexpCode = e.stringify = e.getProperty = e.nil = e.strConcat = e.str = e._ = void 0;
    const t = /* @__PURE__ */ Xi(), n = /* @__PURE__ */ Za();
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
    var o = /* @__PURE__ */ Za();
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
      constructor($, q, C) {
        super(), this.varKind = $, this.name = q, this.rhs = C;
      }
      render({ es5: $, _n: q }) {
        const C = $ ? n.varKinds.var : this.varKind, z = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
        return `${C} ${this.name}${z};` + q;
      }
      optimizeNames($, q) {
        if ($[this.name.str])
          return this.rhs && (this.rhs = j(this.rhs, $, q)), this;
      }
      get names() {
        return this.rhs instanceof t._CodeOrName ? this.rhs.names : {};
      }
    }
    class a extends r {
      constructor($, q, C) {
        super(), this.lhs = $, this.rhs = q, this.sideEffects = C;
      }
      render({ _n: $ }) {
        return `${this.lhs} = ${this.rhs};` + $;
      }
      optimizeNames($, q) {
        if (!(this.lhs instanceof t.Name && !$[this.lhs.str] && !this.sideEffects))
          return this.rhs = j(this.rhs, $, q), this;
      }
      get names() {
        const $ = this.lhs instanceof t.Name ? {} : { ...this.lhs.names };
        return M($, this.rhs);
      }
    }
    class c extends a {
      constructor($, q, C, z) {
        super($, C, z), this.op = q;
      }
      render({ _n: $ }) {
        return `${this.lhs} ${this.op}= ${this.rhs};` + $;
      }
    }
    class d extends r {
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
        return this.code = j(this.code, $, q), this;
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
        return this.nodes.reduce((q, C) => q + C.render($), "");
      }
      optimizeNodes() {
        const { nodes: $ } = this;
        let q = $.length;
        for (; q--; ) {
          const C = $[q].optimizeNodes();
          Array.isArray(C) ? $.splice(q, 1, ...C) : C ? $[q] = C : $.splice(q, 1);
        }
        return $.length > 0 ? this : void 0;
      }
      optimizeNames($, q) {
        const { nodes: C } = this;
        let z = C.length;
        for (; z--; ) {
          const H = C[z];
          H.optimizeNames($, q) || (N($, H.names), C.splice(z, 1));
        }
        return C.length > 0 ? this : void 0;
      }
      get names() {
        return this.nodes.reduce(($, q) => k($, q.names), {});
      }
    }
    class w extends h {
      render($) {
        return "{" + $._n + super.render($) + "}" + $._n;
      }
    }
    class x extends h {
    }
    class v extends w {
    }
    v.kind = "else";
    class A extends w {
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
          const C = q.optimizeNodes();
          q = this.else = Array.isArray(C) ? new v(C) : C;
        }
        if (q)
          return $ === !1 ? q instanceof A ? q : q.nodes : this.nodes.length ? this : new A(_($), q instanceof A ? [q] : q.nodes);
        if (!($ === !1 || !this.nodes.length))
          return this;
      }
      optimizeNames($, q) {
        var C;
        if (this.else = (C = this.else) === null || C === void 0 ? void 0 : C.optimizeNames($, q), !!(super.optimizeNames($, q) || this.else))
          return this.condition = j(this.condition, $, q), this;
      }
      get names() {
        const $ = super.names;
        return M($, this.condition), this.else && k($, this.else.names), $;
      }
    }
    A.kind = "if";
    class g extends w {
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
          return this.iteration = j(this.iteration, $, q), this;
      }
      get names() {
        return k(super.names, this.iteration.names);
      }
    }
    class l extends g {
      constructor($, q, C, z) {
        super(), this.varKind = $, this.name = q, this.from = C, this.to = z;
      }
      render($) {
        const q = $.es5 ? n.varKinds.var : this.varKind, { name: C, from: z, to: H } = this;
        return `for(${q} ${C}=${z}; ${C}<${H}; ${C}++)` + super.render($);
      }
      get names() {
        const $ = M(super.names, this.from);
        return M($, this.to);
      }
    }
    class u extends g {
      constructor($, q, C, z) {
        super(), this.loop = $, this.varKind = q, this.name = C, this.iterable = z;
      }
      render($) {
        return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render($);
      }
      optimizeNames($, q) {
        if (super.optimizeNames($, q))
          return this.iterable = j(this.iterable, $, q), this;
      }
      get names() {
        return k(super.names, this.iterable.names);
      }
    }
    class b extends w {
      constructor($, q, C) {
        super(), this.name = $, this.args = q, this.async = C;
      }
      render($) {
        return `${this.async ? "async " : ""}function ${this.name}(${this.args})` + super.render($);
      }
    }
    b.kind = "func";
    class S extends h {
      render($) {
        return "return " + super.render($);
      }
    }
    S.kind = "return";
    class I extends w {
      render($) {
        let q = "try" + super.render($);
        return this.catch && (q += this.catch.render($)), this.finally && (q += this.finally.render($)), q;
      }
      optimizeNodes() {
        var $, q;
        return super.optimizeNodes(), ($ = this.catch) === null || $ === void 0 || $.optimizeNodes(), (q = this.finally) === null || q === void 0 || q.optimizeNodes(), this;
      }
      optimizeNames($, q) {
        var C, z;
        return super.optimizeNames($, q), (C = this.catch) === null || C === void 0 || C.optimizeNames($, q), (z = this.finally) === null || z === void 0 || z.optimizeNames($, q), this;
      }
      get names() {
        const $ = super.names;
        return this.catch && k($, this.catch.names), this.finally && k($, this.finally.names), $;
      }
    }
    class P extends w {
      constructor($) {
        super(), this.error = $;
      }
      render($) {
        return `catch(${this.error})` + super.render($);
      }
    }
    P.kind = "catch";
    class R extends w {
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
        const C = this._extScope.value($, q);
        return (this._values[C.prefix] || (this._values[C.prefix] = /* @__PURE__ */ new Set())).add(C), C;
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
      _def($, q, C, z) {
        const H = this._scope.toName(q);
        return C !== void 0 && z && (this._constants[H.str] = C), this._leafNode(new s($, H, C)), H;
      }
      // `const` declaration (`var` in es5 mode)
      const($, q, C) {
        return this._def(n.varKinds.const, $, q, C);
      }
      // `let` declaration with optional assignment (`var` in es5 mode)
      let($, q, C) {
        return this._def(n.varKinds.let, $, q, C);
      }
      // `var` declaration with optional assignment
      var($, q, C) {
        return this._def(n.varKinds.var, $, q, C);
      }
      // assignment code
      assign($, q, C) {
        return this._leafNode(new a($, q, C));
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
        for (const [C, z] of $)
          q.length > 1 && q.push(","), q.push(C), (C !== z || this.opts.es5) && (q.push(":"), (0, t.addCodeArg)(q, z));
        return q.push("}"), new t._Code(q);
      }
      // `if` clause (or statement if `thenBody` and, optionally, `elseBody` are passed)
      if($, q, C) {
        if (this._blockNode(new A($)), q && C)
          this.code(q).else().code(C).endIf();
        else if (q)
          this.code(q).endIf();
        else if (C)
          throw new Error('CodeGen: "else" body without "then" body');
        return this;
      }
      // `else if` clause - invalid without `if` or after `else` clauses
      elseIf($) {
        return this._elseNode(new A($));
      }
      // `else` clause - only valid after `if` or `else if` clauses
      else() {
        return this._elseNode(new v());
      }
      // end `if` statement (needed if gen.if was used only with condition)
      endIf() {
        return this._endBlockNode(A, v);
      }
      _for($, q) {
        return this._blockNode($), q && this.code(q).endFor(), this;
      }
      // a generic `for` clause (or statement if `forBody` is passed)
      for($, q) {
        return this._for(new m($), q);
      }
      // `for` statement for a range of values
      forRange($, q, C, z, H = this.opts.es5 ? n.varKinds.var : n.varKinds.let) {
        const Q = this._scope.toName($);
        return this._for(new l(H, Q, q, C), () => z(Q));
      }
      // `for-of` statement (in es5 mode replace with a normal for loop)
      forOf($, q, C, z = n.varKinds.const) {
        const H = this._scope.toName($);
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
      forIn($, q, C, z = this.opts.es5 ? n.varKinds.var : n.varKinds.const) {
        if (this.opts.ownProperties)
          return this.forOf($, (0, t._)`Object.keys(${q})`, C);
        const H = this._scope.toName($);
        return this._for(new u("in", z, H, q), () => C(H));
      }
      // end `for` loop
      endFor() {
        return this._endBlockNode(g);
      }
      // `label` statement
      label($) {
        return this._leafNode(new d($));
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
      try($, q, C) {
        if (!q && !C)
          throw new Error('CodeGen: "try" without "catch" and "finally"');
        const z = new I();
        if (this._blockNode(z), this.code($), q) {
          const H = this.name("e");
          this._currNode = z.catch = new P(H), q(H);
        }
        return C && (this._currNode = z.finally = new R(), this.code(C)), this._endBlockNode(P, R);
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
        const C = this._nodes.length - q;
        if (C < 0 || $ !== void 0 && C !== $)
          throw new Error(`CodeGen: wrong number of nodes: ${C} vs ${$} expected`);
        return this._nodes.length = q, this;
      }
      // `function` heading (or definition if funcBody is passed)
      func($, q = t.nil, C, z) {
        return this._blockNode(new b($, q, C)), z && this.code(z).endFunc(), this;
      }
      // end function definition
      endFunc() {
        return this._endBlockNode(b);
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
        const C = this._currNode;
        if (C instanceof $ || q && C instanceof q)
          return this._nodes.pop(), this;
        throw new Error(`CodeGen: not in block "${q ? `${$.kind}/${q.kind}` : $.kind}"`);
      }
      _elseNode($) {
        const q = this._currNode;
        if (!(q instanceof A))
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
    function k(D, $) {
      for (const q in $)
        D[q] = (D[q] || 0) + ($[q] || 0);
      return D;
    }
    function M(D, $) {
      return $ instanceof t._CodeOrName ? k(D, $.names) : D;
    }
    function j(D, $, q) {
      if (D instanceof t.Name)
        return C(D);
      if (!z(D))
        return D;
      return new t._Code(D._items.reduce((H, Q) => (Q instanceof t.Name && (Q = C(Q)), Q instanceof t._Code ? H.push(...Q._items) : H.push(Q), H), []));
      function C(H) {
        const Q = q[H.str];
        return Q === void 0 || $[H.str] !== 1 ? H : (delete $[H.str], Q);
      }
      function z(H) {
        return H instanceof t._Code && H._items.some((Q) => Q instanceof t.Name && $[Q.str] === 1 && q[Q.str] !== void 0);
      }
    }
    function N(D, $) {
      for (const q in $)
        D[q] = (D[q] || 0) - ($[q] || 0);
    }
    function _(D) {
      return typeof D == "boolean" || typeof D == "number" || D === null ? !D : (0, t._)`!${V(D)}`;
    }
    e.not = _;
    const G = O(e.operators.AND);
    function L(...D) {
      return D.reduce(G);
    }
    e.and = L;
    const B = O(e.operators.OR);
    function T(...D) {
      return D.reduce(B);
    }
    e.or = T;
    function O(D) {
      return ($, q) => $ === t.nil ? q : q === t.nil ? $ : (0, t._)`${V($)} ${D} ${V(q)}`;
    }
    function V(D) {
      return D instanceof t.Name ? D : (0, t._)`(${D})`;
    }
  })(kr)), kr;
}
var ne = {}, Ja;
function ie() {
  if (Ja) return ne;
  Ja = 1, Object.defineProperty(ne, "__esModule", { value: !0 }), ne.checkStrictMode = ne.getErrorPath = ne.Type = ne.useFunc = ne.setEvaluated = ne.evaluatedPropsToName = ne.mergeEvaluated = ne.eachItem = ne.unescapeJsonPointer = ne.escapeJsonPointer = ne.escapeFragment = ne.unescapeFragment = ne.schemaRefOrVal = ne.schemaHasRulesButRef = ne.schemaHasRules = ne.checkUnknownRules = ne.alwaysValidSchema = ne.toHash = void 0;
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ Xi();
  function n(u) {
    const b = {};
    for (const S of u)
      b[S] = !0;
    return b;
  }
  ne.toHash = n;
  function i(u, b) {
    return typeof b == "boolean" ? b : Object.keys(b).length === 0 ? !0 : (o(u, b), !r(b, u.self.RULES.all));
  }
  ne.alwaysValidSchema = i;
  function o(u, b = u.schema) {
    const { opts: S, self: I } = u;
    if (!S.strictSchema || typeof b == "boolean")
      return;
    const P = I.RULES.keywords;
    for (const R in b)
      P[R] || l(u, `unknown keyword: "${R}"`);
  }
  ne.checkUnknownRules = o;
  function r(u, b) {
    if (typeof u == "boolean")
      return !u;
    for (const S in u)
      if (b[S])
        return !0;
    return !1;
  }
  ne.schemaHasRules = r;
  function s(u, b) {
    if (typeof u == "boolean")
      return !u;
    for (const S in u)
      if (S !== "$ref" && b.all[S])
        return !0;
    return !1;
  }
  ne.schemaHasRulesButRef = s;
  function a({ topSchemaRef: u, schemaPath: b }, S, I, P) {
    if (!P) {
      if (typeof S == "number" || typeof S == "boolean")
        return S;
      if (typeof S == "string")
        return (0, e._)`${S}`;
    }
    return (0, e._)`${u}${b}${(0, e.getProperty)(I)}`;
  }
  ne.schemaRefOrVal = a;
  function c(u) {
    return y(decodeURIComponent(u));
  }
  ne.unescapeFragment = c;
  function d(u) {
    return encodeURIComponent(p(u));
  }
  ne.escapeFragment = d;
  function p(u) {
    return typeof u == "number" ? `${u}` : u.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  ne.escapeJsonPointer = p;
  function y(u) {
    return u.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  ne.unescapeJsonPointer = y;
  function f(u, b) {
    if (Array.isArray(u))
      for (const S of u)
        b(S);
    else
      b(u);
  }
  ne.eachItem = f;
  function h({ mergeNames: u, mergeToName: b, mergeValues: S, resultToName: I }) {
    return (P, R, E, k) => {
      const M = E === void 0 ? R : E instanceof e.Name ? (R instanceof e.Name ? u(P, R, E) : b(P, R, E), E) : R instanceof e.Name ? (b(P, E, R), R) : S(R, E);
      return k === e.Name && !(M instanceof e.Name) ? I(P, M) : M;
    };
  }
  ne.mergeEvaluated = {
    props: h({
      mergeNames: (u, b, S) => u.if((0, e._)`${S} !== true && ${b} !== undefined`, () => {
        u.if((0, e._)`${b} === true`, () => u.assign(S, !0), () => u.assign(S, (0, e._)`${S} || {}`).code((0, e._)`Object.assign(${S}, ${b})`));
      }),
      mergeToName: (u, b, S) => u.if((0, e._)`${S} !== true`, () => {
        b === !0 ? u.assign(S, !0) : (u.assign(S, (0, e._)`${S} || {}`), x(u, S, b));
      }),
      mergeValues: (u, b) => u === !0 ? !0 : { ...u, ...b },
      resultToName: w
    }),
    items: h({
      mergeNames: (u, b, S) => u.if((0, e._)`${S} !== true && ${b} !== undefined`, () => u.assign(S, (0, e._)`${b} === true ? true : ${S} > ${b} ? ${S} : ${b}`)),
      mergeToName: (u, b, S) => u.if((0, e._)`${S} !== true`, () => u.assign(S, b === !0 ? !0 : (0, e._)`${S} > ${b} ? ${S} : ${b}`)),
      mergeValues: (u, b) => u === !0 ? !0 : Math.max(u, b),
      resultToName: (u, b) => u.var("items", b)
    })
  };
  function w(u, b) {
    if (b === !0)
      return u.var("props", !0);
    const S = u.var("props", (0, e._)`{}`);
    return b !== void 0 && x(u, S, b), S;
  }
  ne.evaluatedPropsToName = w;
  function x(u, b, S) {
    Object.keys(S).forEach((I) => u.assign((0, e._)`${b}${(0, e.getProperty)(I)}`, !0));
  }
  ne.setEvaluated = x;
  const v = {};
  function A(u, b) {
    return u.scopeValue("func", {
      ref: b,
      code: v[b.code] || (v[b.code] = new t._Code(b.code))
    });
  }
  ne.useFunc = A;
  var g;
  (function(u) {
    u[u.Num = 0] = "Num", u[u.Str = 1] = "Str";
  })(g || (ne.Type = g = {}));
  function m(u, b, S) {
    if (u instanceof e.Name) {
      const I = b === g.Num;
      return S ? I ? (0, e._)`"[" + ${u} + "]"` : (0, e._)`"['" + ${u} + "']"` : I ? (0, e._)`"/" + ${u}` : (0, e._)`"/" + ${u}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
    }
    return S ? (0, e.getProperty)(u).toString() : "/" + p(u);
  }
  ne.getErrorPath = m;
  function l(u, b, S = u.opts.strictSchema) {
    if (S) {
      if (b = `strict mode: ${b}`, S === !0)
        throw new Error(b);
      u.self.logger.warn(b);
    }
  }
  return ne.checkStrictMode = l, ne;
}
var Bn = {}, Ka;
function et() {
  if (Ka) return Bn;
  Ka = 1, Object.defineProperty(Bn, "__esModule", { value: !0 });
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
var Qa;
function dr() {
  return Qa || (Qa = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.extendErrors = e.resetErrorsCount = e.reportExtraError = e.reportError = e.keyword$DataError = e.keywordError = void 0;
    const t = /* @__PURE__ */ te(), n = /* @__PURE__ */ ie(), i = /* @__PURE__ */ et();
    e.keywordError = {
      message: ({ keyword: v }) => (0, t.str)`must pass "${v}" keyword validation`
    }, e.keyword$DataError = {
      message: ({ keyword: v, schemaType: A }) => A ? (0, t.str)`"${v}" keyword must be ${A} ($data)` : (0, t.str)`"${v}" keyword is invalid ($data)`
    };
    function o(v, A = e.keywordError, g, m) {
      const { it: l } = v, { gen: u, compositeRule: b, allErrors: S } = l, I = y(v, A, g);
      m ?? (b || S) ? c(u, I) : d(l, (0, t._)`[${I}]`);
    }
    e.reportError = o;
    function r(v, A = e.keywordError, g) {
      const { it: m } = v, { gen: l, compositeRule: u, allErrors: b } = m, S = y(v, A, g);
      c(l, S), u || b || d(m, i.default.vErrors);
    }
    e.reportExtraError = r;
    function s(v, A) {
      v.assign(i.default.errors, A), v.if((0, t._)`${i.default.vErrors} !== null`, () => v.if(A, () => v.assign((0, t._)`${i.default.vErrors}.length`, A), () => v.assign(i.default.vErrors, null)));
    }
    e.resetErrorsCount = s;
    function a({ gen: v, keyword: A, schemaValue: g, data: m, errsCount: l, it: u }) {
      if (l === void 0)
        throw new Error("ajv implementation error");
      const b = v.name("err");
      v.forRange("i", l, i.default.errors, (S) => {
        v.const(b, (0, t._)`${i.default.vErrors}[${S}]`), v.if((0, t._)`${b}.instancePath === undefined`, () => v.assign((0, t._)`${b}.instancePath`, (0, t.strConcat)(i.default.instancePath, u.errorPath))), v.assign((0, t._)`${b}.schemaPath`, (0, t.str)`${u.errSchemaPath}/${A}`), u.opts.verbose && (v.assign((0, t._)`${b}.schema`, g), v.assign((0, t._)`${b}.data`, m));
      });
    }
    e.extendErrors = a;
    function c(v, A) {
      const g = v.const("err", A);
      v.if((0, t._)`${i.default.vErrors} === null`, () => v.assign(i.default.vErrors, (0, t._)`[${g}]`), (0, t._)`${i.default.vErrors}.push(${g})`), v.code((0, t._)`${i.default.errors}++`);
    }
    function d(v, A) {
      const { gen: g, validateName: m, schemaEnv: l } = v;
      l.$async ? g.throw((0, t._)`new ${v.ValidationError}(${A})`) : (g.assign((0, t._)`${m}.errors`, A), g.return(!1));
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
    function y(v, A, g) {
      const { createErrors: m } = v.it;
      return m === !1 ? (0, t._)`{}` : f(v, A, g);
    }
    function f(v, A, g = {}) {
      const { gen: m, it: l } = v, u = [
        h(l, g),
        w(v, g)
      ];
      return x(v, A, u), m.object(...u);
    }
    function h({ errorPath: v }, { instancePath: A }) {
      const g = A ? (0, t.str)`${v}${(0, n.getErrorPath)(A, n.Type.Str)}` : v;
      return [i.default.instancePath, (0, t.strConcat)(i.default.instancePath, g)];
    }
    function w({ keyword: v, it: { errSchemaPath: A } }, { schemaPath: g, parentSchema: m }) {
      let l = m ? A : (0, t.str)`${A}/${v}`;
      return g && (l = (0, t.str)`${l}${(0, n.getErrorPath)(g, n.Type.Str)}`), [p.schemaPath, l];
    }
    function x(v, { params: A, message: g }, m) {
      const { keyword: l, data: u, schemaValue: b, it: S } = v, { opts: I, propertyName: P, topSchemaRef: R, schemaPath: E } = S;
      m.push([p.keyword, l], [p.params, typeof A == "function" ? A(v) : A || (0, t._)`{}`]), I.messages && m.push([p.message, typeof g == "function" ? g(v) : g]), I.verbose && m.push([p.schema, b], [p.parentSchema, (0, t._)`${R}${E}`], [i.default.data, u]), P && m.push([p.propertyName, P]);
    }
  })(Er)), Er;
}
var Wa;
function Tu() {
  if (Wa) return zt;
  Wa = 1, Object.defineProperty(zt, "__esModule", { value: !0 }), zt.boolOrEmptySchema = zt.topBoolOrEmptySchema = void 0;
  const e = /* @__PURE__ */ dr(), t = /* @__PURE__ */ te(), n = /* @__PURE__ */ et(), i = {
    message: "boolean schema is false"
  };
  function o(a) {
    const { gen: c, schema: d, validateName: p } = a;
    d === !1 ? s(a, !1) : typeof d == "object" && d.$async === !0 ? c.return(n.default.data) : (c.assign((0, t._)`${p}.errors`, null), c.return(!0));
  }
  zt.topBoolOrEmptySchema = o;
  function r(a, c) {
    const { gen: d, schema: p } = a;
    p === !1 ? (d.var(c, !1), s(a)) : d.var(c, !0);
  }
  zt.boolOrEmptySchema = r;
  function s(a, c) {
    const { gen: d, data: p } = a, y = {
      gen: d,
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
  return zt;
}
var be = {}, Vt = {}, Xa;
function Md() {
  if (Xa) return Vt;
  Xa = 1, Object.defineProperty(Vt, "__esModule", { value: !0 }), Vt.getRules = Vt.isJSONType = void 0;
  const e = ["string", "number", "integer", "boolean", "null", "object", "array"], t = new Set(e);
  function n(o) {
    return typeof o == "string" && t.has(o);
  }
  Vt.isJSONType = n;
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
  return Vt.getRules = i, Vt;
}
var gt = {}, Ya;
function Od() {
  if (Ya) return gt;
  Ya = 1, Object.defineProperty(gt, "__esModule", { value: !0 }), gt.shouldUseRule = gt.shouldUseGroup = gt.schemaHasRulesForType = void 0;
  function e({ schema: i, self: o }, r) {
    const s = o.RULES.types[r];
    return s && s !== !0 && t(i, s);
  }
  gt.schemaHasRulesForType = e;
  function t(i, o) {
    return o.rules.some((r) => n(i, r));
  }
  gt.shouldUseGroup = t;
  function n(i, o) {
    var r;
    return i[o.keyword] !== void 0 || ((r = o.definition.implements) === null || r === void 0 ? void 0 : r.some((s) => i[s] !== void 0));
  }
  return gt.shouldUseRule = n, gt;
}
var eo;
function Yi() {
  if (eo) return be;
  eo = 1, Object.defineProperty(be, "__esModule", { value: !0 }), be.reportTypeError = be.checkDataTypes = be.checkDataType = be.coerceAndCheckDataType = be.getJSONTypes = be.getSchemaTypes = be.DataType = void 0;
  const e = /* @__PURE__ */ Md(), t = /* @__PURE__ */ Od(), n = /* @__PURE__ */ dr(), i = /* @__PURE__ */ te(), o = /* @__PURE__ */ ie();
  var r;
  (function(g) {
    g[g.Correct = 0] = "Correct", g[g.Wrong = 1] = "Wrong";
  })(r || (be.DataType = r = {}));
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
  be.getSchemaTypes = s;
  function a(g) {
    const m = Array.isArray(g) ? g : g ? [g] : [];
    if (m.every(e.isJSONType))
      return m;
    throw new Error("type must be JSONType or JSONType[]: " + m.join(","));
  }
  be.getJSONTypes = a;
  function c(g, m) {
    const { gen: l, data: u, opts: b } = g, S = p(m, b.coerceTypes), I = m.length > 0 && !(S.length === 0 && m.length === 1 && (0, t.schemaHasRulesForType)(g, m[0]));
    if (I) {
      const P = w(m, u, b.strictNumbers, r.Wrong);
      l.if(P, () => {
        S.length ? y(g, m, S) : v(g);
      });
    }
    return I;
  }
  be.coerceAndCheckDataType = c;
  const d = /* @__PURE__ */ new Set(["string", "number", "integer", "boolean", "null"]);
  function p(g, m) {
    return m ? g.filter((l) => d.has(l) || m === "array" && l === "array") : [];
  }
  function y(g, m, l) {
    const { gen: u, data: b, opts: S } = g, I = u.let("dataType", (0, i._)`typeof ${b}`), P = u.let("coerced", (0, i._)`undefined`);
    S.coerceTypes === "array" && u.if((0, i._)`${I} == 'object' && Array.isArray(${b}) && ${b}.length == 1`, () => u.assign(b, (0, i._)`${b}[0]`).assign(I, (0, i._)`typeof ${b}`).if(w(m, b, S.strictNumbers), () => u.assign(P, b))), u.if((0, i._)`${P} !== undefined`);
    for (const E of l)
      (d.has(E) || E === "array" && S.coerceTypes === "array") && R(E);
    u.else(), v(g), u.endIf(), u.if((0, i._)`${P} !== undefined`, () => {
      u.assign(b, P), f(g, P);
    });
    function R(E) {
      switch (E) {
        case "string":
          u.elseIf((0, i._)`${I} == "number" || ${I} == "boolean"`).assign(P, (0, i._)`"" + ${b}`).elseIf((0, i._)`${b} === null`).assign(P, (0, i._)`""`);
          return;
        case "number":
          u.elseIf((0, i._)`${I} == "boolean" || ${b} === null
              || (${I} == "string" && ${b} && ${b} == +${b})`).assign(P, (0, i._)`+${b}`);
          return;
        case "integer":
          u.elseIf((0, i._)`${I} === "boolean" || ${b} === null
              || (${I} === "string" && ${b} && ${b} == +${b} && !(${b} % 1))`).assign(P, (0, i._)`+${b}`);
          return;
        case "boolean":
          u.elseIf((0, i._)`${b} === "false" || ${b} === 0 || ${b} === null`).assign(P, !1).elseIf((0, i._)`${b} === "true" || ${b} === 1`).assign(P, !0);
          return;
        case "null":
          u.elseIf((0, i._)`${b} === "" || ${b} === 0 || ${b} === false`), u.assign(P, null);
          return;
        case "array":
          u.elseIf((0, i._)`${I} === "string" || ${I} === "number"
              || ${I} === "boolean" || ${b} === null`).assign(P, (0, i._)`[${b}]`);
      }
    }
  }
  function f({ gen: g, parentData: m, parentDataProperty: l }, u) {
    g.if((0, i._)`${m} !== undefined`, () => g.assign((0, i._)`${m}[${l}]`, u));
  }
  function h(g, m, l, u = r.Correct) {
    const b = u === r.Correct ? i.operators.EQ : i.operators.NEQ;
    let S;
    switch (g) {
      case "null":
        return (0, i._)`${m} ${b} null`;
      case "array":
        S = (0, i._)`Array.isArray(${m})`;
        break;
      case "object":
        S = (0, i._)`${m} && typeof ${m} == "object" && !Array.isArray(${m})`;
        break;
      case "integer":
        S = I((0, i._)`!(${m} % 1) && !isNaN(${m})`);
        break;
      case "number":
        S = I();
        break;
      default:
        return (0, i._)`typeof ${m} ${b} ${g}`;
    }
    return u === r.Correct ? S : (0, i.not)(S);
    function I(P = i.nil) {
      return (0, i.and)((0, i._)`typeof ${m} == "number"`, P, l ? (0, i._)`isFinite(${m})` : i.nil);
    }
  }
  be.checkDataType = h;
  function w(g, m, l, u) {
    if (g.length === 1)
      return h(g[0], m, l, u);
    let b;
    const S = (0, o.toHash)(g);
    if (S.array && S.object) {
      const I = (0, i._)`typeof ${m} != "object"`;
      b = S.null ? I : (0, i._)`!${m} || ${I}`, delete S.null, delete S.array, delete S.object;
    } else
      b = i.nil;
    S.number && delete S.integer;
    for (const I in S)
      b = (0, i.and)(b, h(I, m, l, u));
    return b;
  }
  be.checkDataTypes = w;
  const x = {
    message: ({ schema: g }) => `must be ${g}`,
    params: ({ schema: g, schemaValue: m }) => typeof g == "string" ? (0, i._)`{type: ${g}}` : (0, i._)`{type: ${m}}`
  };
  function v(g) {
    const m = A(g);
    (0, n.reportError)(m, x);
  }
  be.reportTypeError = v;
  function A(g) {
    const { gen: m, data: l, schema: u } = g, b = (0, o.schemaRefOrVal)(g, u, "type");
    return {
      gen: m,
      keyword: "type",
      data: l,
      schema: u.type,
      schemaCode: b,
      schemaValue: b,
      parentSchema: u,
      params: {},
      it: g
    };
  }
  return be;
}
var mn = {}, to;
function Cu() {
  if (to) return mn;
  to = 1, Object.defineProperty(mn, "__esModule", { value: !0 }), mn.assignDefaults = void 0;
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ ie();
  function n(o, r) {
    const { properties: s, items: a } = o.schema;
    if (r === "object" && s)
      for (const c in s)
        i(o, c, s[c].default);
    else r === "array" && Array.isArray(a) && a.forEach((c, d) => i(o, d, c.default));
  }
  mn.assignDefaults = n;
  function i(o, r, s) {
    const { gen: a, compositeRule: c, data: d, opts: p } = o;
    if (s === void 0)
      return;
    const y = (0, e._)`${d}${(0, e.getProperty)(r)}`;
    if (c) {
      (0, t.checkStrictMode)(o, `default is ignored for: ${y}`);
      return;
    }
    let f = (0, e._)`${y} === undefined`;
    p.useDefaults === "empty" && (f = (0, e._)`${f} || ${y} === null || ${y} === ""`), a.if(f, (0, e._)`${y} = ${(0, e.stringify)(s)}`);
  }
  return mn;
}
var Ke = {}, ae = {}, no;
function tt() {
  if (no) return ae;
  no = 1, Object.defineProperty(ae, "__esModule", { value: !0 }), ae.validateUnion = ae.validateArray = ae.usePattern = ae.callValidateCode = ae.schemaProperties = ae.allSchemaProperties = ae.noPropertyInData = ae.propertyInData = ae.isOwnProperty = ae.hasPropFunc = ae.reportMissingProp = ae.checkMissingProp = ae.checkReportMissingProp = void 0;
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ et(), i = /* @__PURE__ */ ie();
  function o(g, m) {
    const { gen: l, data: u, it: b } = g;
    l.if(p(l, u, m, b.opts.ownProperties), () => {
      g.setParams({ missingProperty: (0, e._)`${m}` }, !0), g.error();
    });
  }
  ae.checkReportMissingProp = o;
  function r({ gen: g, data: m, it: { opts: l } }, u, b) {
    return (0, e.or)(...u.map((S) => (0, e.and)(p(g, m, S, l.ownProperties), (0, e._)`${b} = ${S}`)));
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
  function c(g, m, l) {
    return (0, e._)`${a(g)}.call(${m}, ${l})`;
  }
  ae.isOwnProperty = c;
  function d(g, m, l, u) {
    const b = (0, e._)`${m}${(0, e.getProperty)(l)} !== undefined`;
    return u ? (0, e._)`${b} && ${c(g, m, l)}` : b;
  }
  ae.propertyInData = d;
  function p(g, m, l, u) {
    const b = (0, e._)`${m}${(0, e.getProperty)(l)} === undefined`;
    return u ? (0, e.or)(b, (0, e.not)(c(g, m, l))) : b;
  }
  ae.noPropertyInData = p;
  function y(g) {
    return g ? Object.keys(g).filter((m) => m !== "__proto__") : [];
  }
  ae.allSchemaProperties = y;
  function f(g, m) {
    return y(m).filter((l) => !(0, t.alwaysValidSchema)(g, m[l]));
  }
  ae.schemaProperties = f;
  function h({ schemaCode: g, data: m, it: { gen: l, topSchemaRef: u, schemaPath: b, errorPath: S }, it: I }, P, R, E) {
    const k = E ? (0, e._)`${g}, ${m}, ${u}${b}` : m, M = [
      [n.default.instancePath, (0, e.strConcat)(n.default.instancePath, S)],
      [n.default.parentData, I.parentData],
      [n.default.parentDataProperty, I.parentDataProperty],
      [n.default.rootData, n.default.rootData]
    ];
    I.opts.dynamicRef && M.push([n.default.dynamicAnchors, n.default.dynamicAnchors]);
    const j = (0, e._)`${k}, ${l.object(...M)}`;
    return R !== e.nil ? (0, e._)`${P}.call(${R}, ${j})` : (0, e._)`${P}(${j})`;
  }
  ae.callValidateCode = h;
  const w = (0, e._)`new RegExp`;
  function x({ gen: g, it: { opts: m } }, l) {
    const u = m.unicodeRegExp ? "u" : "", { regExp: b } = m.code, S = b(l, u);
    return g.scopeValue("pattern", {
      key: S.toString(),
      ref: S,
      code: (0, e._)`${b.code === "new RegExp" ? w : (0, i.useFunc)(g, b)}(${l}, ${u})`
    });
  }
  ae.usePattern = x;
  function v(g) {
    const { gen: m, data: l, keyword: u, it: b } = g, S = m.name("valid");
    if (b.allErrors) {
      const P = m.let("valid", !0);
      return I(() => m.assign(P, !1)), P;
    }
    return m.var(S, !0), I(() => m.break()), S;
    function I(P) {
      const R = m.const("len", (0, e._)`${l}.length`);
      m.forRange("i", 0, R, (E) => {
        g.subschema({
          keyword: u,
          dataProp: E,
          dataPropType: t.Type.Num
        }, S), m.if((0, e.not)(S), P);
      });
    }
  }
  ae.validateArray = v;
  function A(g) {
    const { gen: m, schema: l, keyword: u, it: b } = g;
    if (!Array.isArray(l))
      throw new Error("ajv implementation error");
    if (l.some((R) => (0, t.alwaysValidSchema)(b, R)) && !b.opts.unevaluated)
      return;
    const I = m.let("valid", !1), P = m.name("_valid");
    m.block(() => l.forEach((R, E) => {
      const k = g.subschema({
        keyword: u,
        schemaProp: E,
        compositeRule: !0
      }, P);
      m.assign(I, (0, e._)`${I} || ${P}`), g.mergeValidEvaluated(k, P) || m.if((0, e.not)(I));
    })), g.result(I, () => g.reset(), () => g.error(!0));
  }
  return ae.validateUnion = A, ae;
}
var io;
function Eu() {
  if (io) return Ke;
  io = 1, Object.defineProperty(Ke, "__esModule", { value: !0 }), Ke.validateKeywordUsage = Ke.validSchemaType = Ke.funcKeywordCode = Ke.macroKeywordCode = void 0;
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ et(), n = /* @__PURE__ */ tt(), i = /* @__PURE__ */ dr();
  function o(f, h) {
    const { gen: w, keyword: x, schema: v, parentSchema: A, it: g } = f, m = h.macro.call(g.self, v, A, g), l = d(w, x, m);
    g.opts.validateSchema !== !1 && g.self.validateSchema(m, !0);
    const u = w.name("valid");
    f.subschema({
      schema: m,
      schemaPath: e.nil,
      errSchemaPath: `${g.errSchemaPath}/${x}`,
      topSchemaRef: l,
      compositeRule: !0
    }, u), f.pass(u, () => f.error(!0));
  }
  Ke.macroKeywordCode = o;
  function r(f, h) {
    var w;
    const { gen: x, keyword: v, schema: A, parentSchema: g, $data: m, it: l } = f;
    c(l, h);
    const u = !m && h.compile ? h.compile.call(l.self, A, g, l) : h.validate, b = d(x, v, u), S = x.let("valid");
    f.block$data(S, I), f.ok((w = h.valid) !== null && w !== void 0 ? w : S);
    function I() {
      if (h.errors === !1)
        E(), h.modifying && s(f), k(() => f.error());
      else {
        const M = h.async ? P() : R();
        h.modifying && s(f), k(() => a(f, M));
      }
    }
    function P() {
      const M = x.let("ruleErrs", null);
      return x.try(() => E((0, e._)`await `), (j) => x.assign(S, !1).if((0, e._)`${j} instanceof ${l.ValidationError}`, () => x.assign(M, (0, e._)`${j}.errors`), () => x.throw(j))), M;
    }
    function R() {
      const M = (0, e._)`${b}.errors`;
      return x.assign(M, null), E(e.nil), M;
    }
    function E(M = h.async ? (0, e._)`await ` : e.nil) {
      const j = l.opts.passContext ? t.default.this : t.default.self, N = !("compile" in h && !m || h.schema === !1);
      x.assign(S, (0, e._)`${M}${(0, n.callValidateCode)(f, b, j, N)}`, h.modifying);
    }
    function k(M) {
      var j;
      x.if((0, e.not)((j = h.valid) !== null && j !== void 0 ? j : S), M);
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
  function d(f, h, w) {
    if (w === void 0)
      throw new Error(`keyword "${h}" failed to compile`);
    return f.scopeValue("keyword", typeof w == "function" ? { ref: w } : { ref: w, code: (0, e.stringify)(w) });
  }
  function p(f, h, w = !1) {
    return !h.length || h.some((x) => x === "array" ? Array.isArray(f) : x === "object" ? f && typeof f == "object" && !Array.isArray(f) : typeof f == x || w && typeof f > "u");
  }
  Ke.validSchemaType = p;
  function y({ schema: f, opts: h, self: w, errSchemaPath: x }, v, A) {
    if (Array.isArray(v.keyword) ? !v.keyword.includes(A) : v.keyword !== A)
      throw new Error("ajv implementation error");
    const g = v.dependencies;
    if (g?.some((m) => !Object.prototype.hasOwnProperty.call(f, m)))
      throw new Error(`parent schema must have dependencies of ${A}: ${g.join(",")}`);
    if (v.validateSchema && !v.validateSchema(f[A])) {
      const l = `keyword "${A}" value is invalid at path "${x}": ` + w.errorsText(v.validateSchema.errors);
      if (h.validateSchema === "log")
        w.logger.error(l);
      else
        throw new Error(l);
    }
  }
  return Ke.validateKeywordUsage = y, Ke;
}
var vt = {}, ro;
function ku() {
  if (ro) return vt;
  ro = 1, Object.defineProperty(vt, "__esModule", { value: !0 }), vt.extendSubschemaMode = vt.extendSubschemaData = vt.getSubschema = void 0;
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ ie();
  function n(r, { keyword: s, schemaProp: a, schema: c, schemaPath: d, errSchemaPath: p, topSchemaRef: y }) {
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
      if (d === void 0 || p === void 0 || y === void 0)
        throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');
      return {
        schema: c,
        schemaPath: d,
        topSchemaRef: y,
        errSchemaPath: p
      };
    }
    throw new Error('either "keyword" or "schema" must be passed');
  }
  vt.getSubschema = n;
  function i(r, s, { dataProp: a, dataPropType: c, data: d, dataTypes: p, propertyName: y }) {
    if (d !== void 0 && a !== void 0)
      throw new Error('both "data" and "dataProp" passed, only one allowed');
    const { gen: f } = s;
    if (a !== void 0) {
      const { errorPath: w, dataPathArr: x, opts: v } = s, A = f.let("data", (0, e._)`${s.data}${(0, e.getProperty)(a)}`, !0);
      h(A), r.errorPath = (0, e.str)`${w}${(0, t.getErrorPath)(a, c, v.jsPropertySyntax)}`, r.parentDataProperty = (0, e._)`${a}`, r.dataPathArr = [...x, r.parentDataProperty];
    }
    if (d !== void 0) {
      const w = d instanceof e.Name ? d : f.let("data", d, !0);
      h(w), y !== void 0 && (r.propertyName = y);
    }
    p && (r.dataTypes = p);
    function h(w) {
      r.data = w, r.dataLevel = s.dataLevel + 1, r.dataTypes = [], s.definedProperties = /* @__PURE__ */ new Set(), r.parentData = s.data, r.dataNames = [...s.dataNames, w];
    }
  }
  vt.extendSubschemaData = i;
  function o(r, { jtdDiscriminator: s, jtdMetadata: a, compositeRule: c, createErrors: d, allErrors: p }) {
    c !== void 0 && (r.compositeRule = c), d !== void 0 && (r.createErrors = d), p !== void 0 && (r.allErrors = p), r.jtdDiscriminator = s, r.jtdMetadata = a;
  }
  return vt.extendSubschemaMode = o, vt;
}
var Re = {}, Lr, so;
function Ld() {
  return so || (so = 1, Lr = function e(t, n) {
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
  }), Lr;
}
var Nr = { exports: {} }, ao;
function Mu() {
  if (ao) return Nr.exports;
  ao = 1;
  var e = Nr.exports = function(i, o, r) {
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
  function t(i, o, r, s, a, c, d, p, y, f) {
    if (s && typeof s == "object" && !Array.isArray(s)) {
      o(s, a, c, d, p, y, f);
      for (var h in s) {
        var w = s[h];
        if (Array.isArray(w)) {
          if (h in e.arrayKeywords)
            for (var x = 0; x < w.length; x++)
              t(i, o, r, w[x], a + "/" + h + "/" + x, c, a, h, s, x);
        } else if (h in e.propsKeywords) {
          if (w && typeof w == "object")
            for (var v in w)
              t(i, o, r, w[v], a + "/" + h + "/" + n(v), c, a, h, s, v);
        } else (h in e.keywords || i.allKeys && !(h in e.skipKeywords)) && t(i, o, r, w, a + "/" + h, c, a, h, s);
      }
      r(s, a, c, d, p, y, f);
    }
  }
  function n(i) {
    return i.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  return Nr.exports;
}
var oo;
function lr() {
  if (oo) return Re;
  oo = 1, Object.defineProperty(Re, "__esModule", { value: !0 }), Re.getSchemaRefs = Re.resolveUrl = Re.normalizeId = Re._getFullPath = Re.getFullPath = Re.inlineRef = void 0;
  const e = /* @__PURE__ */ ie(), t = Ld(), n = Mu(), i = /* @__PURE__ */ new Set([
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
  function o(x, v = !0) {
    return typeof x == "boolean" ? !0 : v === !0 ? !s(x) : v ? a(x) <= v : !1;
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
    for (const v in x) {
      if (r.has(v))
        return !0;
      const A = x[v];
      if (Array.isArray(A) && A.some(s) || typeof A == "object" && s(A))
        return !0;
    }
    return !1;
  }
  function a(x) {
    let v = 0;
    for (const A in x) {
      if (A === "$ref")
        return 1 / 0;
      if (v++, !i.has(A) && (typeof x[A] == "object" && (0, e.eachItem)(x[A], (g) => v += a(g)), v === 1 / 0))
        return 1 / 0;
    }
    return v;
  }
  function c(x, v = "", A) {
    A !== !1 && (v = y(v));
    const g = x.parse(v);
    return d(x, g);
  }
  Re.getFullPath = c;
  function d(x, v) {
    return x.serialize(v).split("#")[0] + "#";
  }
  Re._getFullPath = d;
  const p = /#\/?$/;
  function y(x) {
    return x ? x.replace(p, "") : "";
  }
  Re.normalizeId = y;
  function f(x, v, A) {
    return A = y(A), x.resolve(v, A);
  }
  Re.resolveUrl = f;
  const h = /^[a-z_][-a-z0-9._]*$/i;
  function w(x, v) {
    if (typeof x == "boolean")
      return {};
    const { schemaId: A, uriResolver: g } = this.opts, m = y(x[A] || v), l = { "": m }, u = c(g, m, !1), b = {}, S = /* @__PURE__ */ new Set();
    return n(x, { allKeys: !0 }, (R, E, k, M) => {
      if (M === void 0)
        return;
      const j = u + E;
      let N = l[M];
      typeof R[A] == "string" && (N = _.call(this, R[A])), G.call(this, R.$anchor), G.call(this, R.$dynamicAnchor), l[E] = N;
      function _(L) {
        const B = this.opts.uriResolver.resolve;
        if (L = y(N ? B(N, L) : L), S.has(L))
          throw P(L);
        S.add(L);
        let T = this.refs[L];
        return typeof T == "string" && (T = this.refs[T]), typeof T == "object" ? I(R, T.schema, L) : L !== y(j) && (L[0] === "#" ? (I(R, b[L], L), b[L] = R) : this.refs[L] = j), L;
      }
      function G(L) {
        if (typeof L == "string") {
          if (!h.test(L))
            throw new Error(`invalid anchor "${L}"`);
          _.call(this, `#${L}`);
        }
      }
    }), b;
    function I(R, E, k) {
      if (E !== void 0 && !t(R, E))
        throw P(k);
    }
    function P(R) {
      return new Error(`reference "${R}" resolves to more than one schema`);
    }
  }
  return Re.getSchemaRefs = w, Re;
}
var co;
function En() {
  if (co) return yt;
  co = 1, Object.defineProperty(yt, "__esModule", { value: !0 }), yt.getData = yt.KeywordCxt = yt.validateFunctionCode = void 0;
  const e = /* @__PURE__ */ Tu(), t = /* @__PURE__ */ Yi(), n = /* @__PURE__ */ Od(), i = /* @__PURE__ */ Yi(), o = /* @__PURE__ */ Cu(), r = /* @__PURE__ */ Eu(), s = /* @__PURE__ */ ku(), a = /* @__PURE__ */ te(), c = /* @__PURE__ */ et(), d = /* @__PURE__ */ lr(), p = /* @__PURE__ */ ie(), y = /* @__PURE__ */ dr();
  function f(U) {
    if (u(U) && (S(U), l(U))) {
      v(U);
      return;
    }
    h(U, () => (0, e.topBoolOrEmptySchema)(U));
  }
  yt.validateFunctionCode = f;
  function h({ gen: U, validateName: F, schema: Z, schemaEnv: K, opts: W }, ee) {
    W.code.es5 ? U.func(F, (0, a._)`${c.default.data}, ${c.default.valCxt}`, K.$async, () => {
      U.code((0, a._)`"use strict"; ${g(Z, W)}`), x(U, W), U.code(ee);
    }) : U.func(F, (0, a._)`${c.default.data}, ${w(W)}`, K.$async, () => U.code(g(Z, W)).code(ee));
  }
  function w(U) {
    return (0, a._)`{${c.default.instancePath}="", ${c.default.parentData}, ${c.default.parentDataProperty}, ${c.default.rootData}=${c.default.data}${U.dynamicRef ? (0, a._)`, ${c.default.dynamicAnchors}={}` : a.nil}}={}`;
  }
  function x(U, F) {
    U.if(c.default.valCxt, () => {
      U.var(c.default.instancePath, (0, a._)`${c.default.valCxt}.${c.default.instancePath}`), U.var(c.default.parentData, (0, a._)`${c.default.valCxt}.${c.default.parentData}`), U.var(c.default.parentDataProperty, (0, a._)`${c.default.valCxt}.${c.default.parentDataProperty}`), U.var(c.default.rootData, (0, a._)`${c.default.valCxt}.${c.default.rootData}`), F.dynamicRef && U.var(c.default.dynamicAnchors, (0, a._)`${c.default.valCxt}.${c.default.dynamicAnchors}`);
    }, () => {
      U.var(c.default.instancePath, (0, a._)`""`), U.var(c.default.parentData, (0, a._)`undefined`), U.var(c.default.parentDataProperty, (0, a._)`undefined`), U.var(c.default.rootData, c.default.data), F.dynamicRef && U.var(c.default.dynamicAnchors, (0, a._)`{}`);
    });
  }
  function v(U) {
    const { schema: F, opts: Z, gen: K } = U;
    h(U, () => {
      Z.$comment && F.$comment && M(U), R(U), K.let(c.default.vErrors, null), K.let(c.default.errors, 0), Z.unevaluated && A(U), I(U), j(U);
    });
  }
  function A(U) {
    const { gen: F, validateName: Z } = U;
    U.evaluated = F.const("evaluated", (0, a._)`${Z}.evaluated`), F.if((0, a._)`${U.evaluated}.dynamicProps`, () => F.assign((0, a._)`${U.evaluated}.props`, (0, a._)`undefined`)), F.if((0, a._)`${U.evaluated}.dynamicItems`, () => F.assign((0, a._)`${U.evaluated}.items`, (0, a._)`undefined`));
  }
  function g(U, F) {
    const Z = typeof U == "object" && U[F.schemaId];
    return Z && (F.code.source || F.code.process) ? (0, a._)`/*# sourceURL=${Z} */` : a.nil;
  }
  function m(U, F) {
    if (u(U) && (S(U), l(U))) {
      b(U, F);
      return;
    }
    (0, e.boolOrEmptySchema)(U, F);
  }
  function l({ schema: U, self: F }) {
    if (typeof U == "boolean")
      return !U;
    for (const Z in U)
      if (F.RULES.all[Z])
        return !0;
    return !1;
  }
  function u(U) {
    return typeof U.schema != "boolean";
  }
  function b(U, F) {
    const { schema: Z, gen: K, opts: W } = U;
    W.$comment && Z.$comment && M(U), E(U), k(U);
    const ee = K.const("_errs", c.default.errors);
    I(U, ee), K.var(F, (0, a._)`${ee} === ${c.default.errors}`);
  }
  function S(U) {
    (0, p.checkUnknownRules)(U), P(U);
  }
  function I(U, F) {
    if (U.opts.jtd)
      return _(U, [], !1, F);
    const Z = (0, t.getSchemaTypes)(U.schema), K = (0, t.coerceAndCheckDataType)(U, Z);
    _(U, Z, !K, F);
  }
  function P(U) {
    const { schema: F, errSchemaPath: Z, opts: K, self: W } = U;
    F.$ref && K.ignoreKeywordsWithRef && (0, p.schemaHasRulesButRef)(F, W.RULES) && W.logger.warn(`$ref: keywords ignored in schema at path "${Z}"`);
  }
  function R(U) {
    const { schema: F, opts: Z } = U;
    F.default !== void 0 && Z.useDefaults && Z.strictSchema && (0, p.checkStrictMode)(U, "default is ignored in the schema root");
  }
  function E(U) {
    const F = U.schema[U.opts.schemaId];
    F && (U.baseId = (0, d.resolveUrl)(U.opts.uriResolver, U.baseId, F));
  }
  function k(U) {
    if (U.schema.$async && !U.schemaEnv.$async)
      throw new Error("async schema in sync schema");
  }
  function M({ gen: U, schemaEnv: F, schema: Z, errSchemaPath: K, opts: W }) {
    const ee = Z.$comment;
    if (W.$comment === !0)
      U.code((0, a._)`${c.default.self}.logger.log(${ee})`);
    else if (typeof W.$comment == "function") {
      const re = (0, a.str)`${K}/$comment`, Se = U.scopeValue("root", { ref: F.root });
      U.code((0, a._)`${c.default.self}.opts.$comment(${ee}, ${re}, ${Se}.schema)`);
    }
  }
  function j(U) {
    const { gen: F, schemaEnv: Z, validateName: K, ValidationError: W, opts: ee } = U;
    Z.$async ? F.if((0, a._)`${c.default.errors} === 0`, () => F.return(c.default.data), () => F.throw((0, a._)`new ${W}(${c.default.vErrors})`)) : (F.assign((0, a._)`${K}.errors`, c.default.vErrors), ee.unevaluated && N(U), F.return((0, a._)`${c.default.errors} === 0`));
  }
  function N({ gen: U, evaluated: F, props: Z, items: K }) {
    Z instanceof a.Name && U.assign((0, a._)`${F}.props`, Z), K instanceof a.Name && U.assign((0, a._)`${F}.items`, K);
  }
  function _(U, F, Z, K) {
    const { gen: W, schema: ee, data: re, allErrors: Se, opts: he, self: ye } = U, { RULES: fe } = ye;
    if (ee.$ref && (he.ignoreKeywordsWithRef || !(0, p.schemaHasRulesButRef)(ee, fe))) {
      W.block(() => z(U, "$ref", fe.all.$ref.definition));
      return;
    }
    he.jtd || L(U, F), W.block(() => {
      for (const De of fe.rules)
        nt(De);
      nt(fe.post);
    });
    function nt(De) {
      (0, n.shouldUseGroup)(ee, De) && (De.type ? (W.if((0, i.checkDataType)(De.type, re, he.strictNumbers)), G(U, De), F.length === 1 && F[0] === De.type && Z && (W.else(), (0, i.reportTypeError)(U)), W.endIf()) : G(U, De), Se || W.if((0, a._)`${c.default.errors} === ${K || 0}`));
    }
  }
  function G(U, F) {
    const { gen: Z, schema: K, opts: { useDefaults: W } } = U;
    W && (0, o.assignDefaults)(U, F.type), Z.block(() => {
      for (const ee of F.rules)
        (0, n.shouldUseRule)(K, ee) && z(U, ee.keyword, ee.definition, F.type);
    });
  }
  function L(U, F) {
    U.schemaEnv.meta || !U.opts.strictTypes || (B(U, F), U.opts.allowUnionTypes || T(U, F), O(U, U.dataTypes));
  }
  function B(U, F) {
    if (F.length) {
      if (!U.dataTypes.length) {
        U.dataTypes = F;
        return;
      }
      F.forEach((Z) => {
        D(U.dataTypes, Z) || q(U, `type "${Z}" not allowed by context "${U.dataTypes.join(",")}"`);
      }), $(U, F);
    }
  }
  function T(U, F) {
    F.length > 1 && !(F.length === 2 && F.includes("null")) && q(U, "use allowUnionTypes to allow union type keyword");
  }
  function O(U, F) {
    const Z = U.self.RULES.all;
    for (const K in Z) {
      const W = Z[K];
      if (typeof W == "object" && (0, n.shouldUseRule)(U.schema, W)) {
        const { type: ee } = W.definition;
        ee.length && !ee.some((re) => V(F, re)) && q(U, `missing type "${ee.join(",")}" for keyword "${K}"`);
      }
    }
  }
  function V(U, F) {
    return U.includes(F) || F === "number" && U.includes("integer");
  }
  function D(U, F) {
    return U.includes(F) || F === "integer" && U.includes("number");
  }
  function $(U, F) {
    const Z = [];
    for (const K of U.dataTypes)
      D(F, K) ? Z.push(K) : F.includes("integer") && K === "number" && Z.push("integer");
    U.dataTypes = Z;
  }
  function q(U, F) {
    const Z = U.schemaEnv.baseId + U.errSchemaPath;
    F += ` at "${Z}" (strictTypes)`, (0, p.checkStrictMode)(U, F, U.opts.strictTypes);
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
      (F ? y.reportExtraError : y.reportError)(this, this.def.error, Z);
    }
    $dataError() {
      (0, y.reportError)(this, this.def.$dataError || y.keyword$DataError);
    }
    reset() {
      if (this.errsCount === void 0)
        throw new Error('add "trackErrors" to keyword definition');
      (0, y.resetErrorsCount)(this.gen, this.errsCount);
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
      return m(W, Z), W;
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
  yt.KeywordCxt = C;
  function z(U, F, Z, K) {
    const W = new C(U, Z, F);
    "code" in Z ? Z.code(W, K) : W.$data && Z.validate ? (0, r.funcKeywordCode)(W, Z) : "macro" in Z ? (0, r.macroKeywordCode)(W, Z) : (Z.compile || Z.validate) && (0, r.funcKeywordCode)(W, Z);
  }
  const H = /^\/(?:[^~]|~0|~1)*$/, Q = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function J(U, { dataLevel: F, dataNames: Z, dataPathArr: K }) {
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
  return yt.getData = J, yt;
}
var Zn = {}, lo;
function ur() {
  if (lo) return Zn;
  lo = 1, Object.defineProperty(Zn, "__esModule", { value: !0 });
  class e extends Error {
    constructor(n) {
      super("validation failed"), this.errors = n, this.ajv = this.validation = !0;
    }
  }
  return Zn.default = e, Zn;
}
var Hn = {}, uo;
function kn() {
  if (uo) return Hn;
  uo = 1, Object.defineProperty(Hn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ lr();
  class t extends Error {
    constructor(i, o, r, s) {
      super(s || `can't resolve reference ${r} from id ${o}`), this.missingRef = (0, e.resolveUrl)(i, o, r), this.missingSchema = (0, e.normalizeId)((0, e.getFullPath)(i, this.missingRef));
    }
  }
  return Hn.default = t, Hn;
}
var Ee = {}, po;
function pr() {
  if (po) return Ee;
  po = 1, Object.defineProperty(Ee, "__esModule", { value: !0 }), Ee.resolveSchema = Ee.getCompilingSchema = Ee.resolveRef = Ee.compileSchema = Ee.SchemaEnv = void 0;
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ ur(), n = /* @__PURE__ */ et(), i = /* @__PURE__ */ lr(), o = /* @__PURE__ */ ie(), r = /* @__PURE__ */ En();
  class s {
    constructor(A) {
      var g;
      this.refs = {}, this.dynamicAnchors = {};
      let m;
      typeof A.schema == "object" && (m = A.schema), this.schema = A.schema, this.schemaId = A.schemaId, this.root = A.root || this, this.baseId = (g = A.baseId) !== null && g !== void 0 ? g : (0, i.normalizeId)(m?.[A.schemaId || "$id"]), this.schemaPath = A.schemaPath, this.localRefs = A.localRefs, this.meta = A.meta, this.$async = m?.$async, this.refs = {};
    }
  }
  Ee.SchemaEnv = s;
  function a(v) {
    const A = p.call(this, v);
    if (A)
      return A;
    const g = (0, i.getFullPath)(this.opts.uriResolver, v.root.baseId), { es5: m, lines: l } = this.opts.code, { ownProperties: u } = this.opts, b = new e.CodeGen(this.scope, { es5: m, lines: l, ownProperties: u });
    let S;
    v.$async && (S = b.scopeValue("Error", {
      ref: t.default,
      code: (0, e._)`require("ajv/dist/runtime/validation_error").default`
    }));
    const I = b.scopeName("validate");
    v.validateName = I;
    const P = {
      gen: b,
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
      topSchemaRef: b.scopeValue("schema", this.opts.code.source === !0 ? { ref: v.schema, code: (0, e.stringify)(v.schema) } : { ref: v.schema }),
      validateName: I,
      ValidationError: S,
      schema: v.schema,
      schemaEnv: v,
      rootId: g,
      baseId: v.baseId || g,
      schemaPath: e.nil,
      errSchemaPath: v.schemaPath || (this.opts.jtd ? "" : "#"),
      errorPath: (0, e._)`""`,
      opts: this.opts,
      self: this
    };
    let R;
    try {
      this._compilations.add(v), (0, r.validateFunctionCode)(P), b.optimize(this.opts.code.optimize);
      const E = b.toString();
      R = `${b.scopeRefs(n.default.scope)}return ${E}`, this.opts.code.process && (R = this.opts.code.process(R, v));
      const M = new Function(`${n.default.self}`, `${n.default.scope}`, R)(this, this.scope.get());
      if (this.scope.value(I, { ref: M }), M.errors = null, M.schema = v.schema, M.schemaEnv = v, v.$async && (M.$async = !0), this.opts.code.source === !0 && (M.source = { validateName: I, validateCode: E, scopeValues: b._values }), this.opts.unevaluated) {
        const { props: j, items: N } = P;
        M.evaluated = {
          props: j instanceof e.Name ? void 0 : j,
          items: N instanceof e.Name ? void 0 : N,
          dynamicProps: j instanceof e.Name,
          dynamicItems: N instanceof e.Name
        }, M.source && (M.source.evaluated = (0, e.stringify)(M.evaluated));
      }
      return v.validate = M, v;
    } catch (E) {
      throw delete v.validate, delete v.validateName, R && this.logger.error("Error compiling schema, function code:", R), E;
    } finally {
      this._compilations.delete(v);
    }
  }
  Ee.compileSchema = a;
  function c(v, A, g) {
    var m;
    g = (0, i.resolveUrl)(this.opts.uriResolver, A, g);
    const l = v.refs[g];
    if (l)
      return l;
    let u = f.call(this, v, g);
    if (u === void 0) {
      const b = (m = v.localRefs) === null || m === void 0 ? void 0 : m[g], { schemaId: S } = this.opts;
      b && (u = new s({ schema: b, schemaId: S, root: v, baseId: A }));
    }
    if (u !== void 0)
      return v.refs[g] = d.call(this, u);
  }
  Ee.resolveRef = c;
  function d(v) {
    return (0, i.inlineRef)(v.schema, this.opts.inlineRefs) ? v.schema : v.validate ? v : a.call(this, v);
  }
  function p(v) {
    for (const A of this._compilations)
      if (y(A, v))
        return A;
  }
  Ee.getCompilingSchema = p;
  function y(v, A) {
    return v.schema === A.schema && v.root === A.root && v.baseId === A.baseId;
  }
  function f(v, A) {
    let g;
    for (; typeof (g = this.refs[A]) == "string"; )
      A = g;
    return g || this.schemas[A] || h.call(this, v, A);
  }
  function h(v, A) {
    const g = this.opts.uriResolver.parse(A), m = (0, i._getFullPath)(this.opts.uriResolver, g);
    let l = (0, i.getFullPath)(this.opts.uriResolver, v.baseId, void 0);
    if (Object.keys(v.schema).length > 0 && m === l)
      return x.call(this, g, v);
    const u = (0, i.normalizeId)(m), b = this.refs[u] || this.schemas[u];
    if (typeof b == "string") {
      const S = h.call(this, v, b);
      return typeof S?.schema != "object" ? void 0 : x.call(this, g, S);
    }
    if (typeof b?.schema == "object") {
      if (b.validate || a.call(this, b), u === (0, i.normalizeId)(A)) {
        const { schema: S } = b, { schemaId: I } = this.opts, P = S[I];
        return P && (l = (0, i.resolveUrl)(this.opts.uriResolver, l, P)), new s({ schema: S, schemaId: I, root: v, baseId: l });
      }
      return x.call(this, g, b);
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
  function x(v, { baseId: A, schema: g, root: m }) {
    var l;
    if (((l = v.fragment) === null || l === void 0 ? void 0 : l[0]) !== "/")
      return;
    for (const S of v.fragment.slice(1).split("/")) {
      if (typeof g == "boolean")
        return;
      const I = g[(0, o.unescapeFragment)(S)];
      if (I === void 0)
        return;
      g = I;
      const P = typeof g == "object" && g[this.opts.schemaId];
      !w.has(S) && P && (A = (0, i.resolveUrl)(this.opts.uriResolver, A, P));
    }
    let u;
    if (typeof g != "boolean" && g.$ref && !(0, o.schemaHasRulesButRef)(g, this.RULES)) {
      const S = (0, i.resolveUrl)(this.opts.uriResolver, A, g.$ref);
      u = h.call(this, m, S);
    }
    const { schemaId: b } = this.opts;
    if (u = u || new s({ schema: g, schemaId: b, root: m, baseId: A }), u.schema !== u.root.schema)
      return u;
  }
  return Ee;
}
const Ou = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", Lu = "Meta-schema for $data reference (JSON AnySchema extension proposal)", Nu = "object", Du = ["$data"], zu = { $data: { type: "string", anyOf: [{ format: "relative-json-pointer" }, { format: "json-pointer" }] } }, Vu = !1, Uu = {
  $id: Ou,
  description: Lu,
  type: Nu,
  required: Du,
  properties: zu,
  additionalProperties: Vu
};
var Jn = {}, yn = { exports: {} }, Dr, fo;
function Nd() {
  if (fo) return Dr;
  fo = 1;
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
    const w = { error: !1, address: "", zone: "" }, x = [], v = [];
    let A = !1, g = !1, m = r;
    for (let l = 0; l < f.length; l++) {
      const u = f[l];
      if (!(u === "[" || u === "]"))
        if (u === ":") {
          if (A === !0 && (g = !0), !m(v, x, w))
            break;
          if (++h > 7) {
            w.error = !0;
            break;
          }
          l > 0 && f[l - 1] === ":" && (A = !0), x.push(":");
          continue;
        } else if (u === "%") {
          if (!m(v, x, w))
            break;
          m = o;
        } else {
          v.push(u);
          continue;
        }
    }
    return v.length && (m === o ? w.zone = v.join("") : g ? x.push(v.join("")) : x.push(n(v))), w.address = x.join(""), w;
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
  function d(f) {
    let h = f;
    const w = [];
    let x = -1, v = 0;
    for (; v = h.length; ) {
      if (v === 1) {
        if (h === ".")
          break;
        if (h === "/") {
          w.push("/");
          break;
        } else {
          w.push(h);
          break;
        }
      } else if (v === 2) {
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
      } else if (v === 3 && h === "/..") {
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
  function y(f) {
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
  return Dr = {
    nonSimpleDomain: i,
    recomposeAuthority: y,
    normalizeComponentEncoding: p,
    removeDotSegments: d,
    isIPv4: t,
    isUUID: e,
    normalizeIPv6: a,
    stringArrayToHexStripped: n
  }, Dr;
}
var zr, ho;
function Gu() {
  if (ho) return zr;
  ho = 1;
  const { isUUID: e } = Nd(), t = /([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu, n = (
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
    const b = String(u.scheme).toLowerCase() === "https";
    return (u.port === (b ? 443 : 80) || u.port === "") && (u.port = void 0), u.path || (u.path = "/"), u;
  }
  function a(u) {
    return u.secure = o(u), u.resourceName = (u.path || "/") + (u.query ? "?" + u.query : ""), u.path = void 0, u.query = void 0, u;
  }
  function c(u) {
    if ((u.port === (o(u) ? 443 : 80) || u.port === "") && (u.port = void 0), typeof u.secure == "boolean" && (u.scheme = u.secure ? "wss" : "ws", u.secure = void 0), u.resourceName) {
      const [b, S] = u.resourceName.split("?");
      u.path = b && b !== "/" ? b : void 0, u.query = S, u.resourceName = void 0;
    }
    return u.fragment = void 0, u;
  }
  function d(u, b) {
    if (!u.path)
      return u.error = "URN can not be parsed", u;
    const S = u.path.match(t);
    if (S) {
      const I = b.scheme || u.scheme || "urn";
      u.nid = S[1].toLowerCase(), u.nss = S[2];
      const P = `${I}:${b.nid || u.nid}`, R = l(P);
      u.path = void 0, R && (u = R.parse(u, b));
    } else
      u.error = u.error || "URN can not be parsed.";
    return u;
  }
  function p(u, b) {
    if (u.nid === void 0)
      throw new Error("URN without nid cannot be serialized");
    const S = b.scheme || u.scheme || "urn", I = u.nid.toLowerCase(), P = `${S}:${b.nid || I}`, R = l(P);
    R && (u = R.serialize(u, b));
    const E = u, k = u.nss;
    return E.path = `${I || b.nid}:${k}`, b.skipEscape = !0, E;
  }
  function y(u, b) {
    const S = u;
    return S.uuid = S.nss, S.nss = void 0, !b.tolerant && (!S.uuid || !e(S.uuid)) && (S.error = S.error || "UUID is not valid."), S;
  }
  function f(u) {
    const b = u;
    return b.nss = (u.uuid || "").toLowerCase(), b;
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
  ), v = (
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
      https: w,
      ws: x,
      wss: v,
      urn: (
        /** @type {SchemeHandler} */
        {
          scheme: "urn",
          parse: d,
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
  function l(u) {
    return u && (m[
      /** @type {SchemeName} */
      u
    ] || m[
      /** @type {SchemeName} */
      u.toLowerCase()
    ]) || void 0;
  }
  return zr = {
    wsIsSecure: o,
    SCHEMES: m,
    isValidSchemeName: i,
    getSchemeHandler: l
  }, zr;
}
var mo;
function Fu() {
  if (mo) return yn.exports;
  mo = 1;
  const { normalizeIPv6: e, removeDotSegments: t, recomposeAuthority: n, normalizeComponentEncoding: i, isIPv4: o, nonSimpleDomain: r } = Nd(), { SCHEMES: s, getSchemeHandler: a } = Gu();
  function c(v, A) {
    return typeof v == "string" ? v = /** @type {T} */
    f(w(v, A), A) : typeof v == "object" && (v = /** @type {T} */
    w(f(v, A), A)), v;
  }
  function d(v, A, g) {
    const m = g ? Object.assign({ scheme: "null" }, g) : { scheme: "null" }, l = p(w(v, m), w(A, m), m, !0);
    return m.skipEscape = !0, f(l, m);
  }
  function p(v, A, g, m) {
    const l = {};
    return m || (v = w(f(v, g), g), A = w(f(A, g), g)), g = g || {}, !g.tolerant && A.scheme ? (l.scheme = A.scheme, l.userinfo = A.userinfo, l.host = A.host, l.port = A.port, l.path = t(A.path || ""), l.query = A.query) : (A.userinfo !== void 0 || A.host !== void 0 || A.port !== void 0 ? (l.userinfo = A.userinfo, l.host = A.host, l.port = A.port, l.path = t(A.path || ""), l.query = A.query) : (A.path ? (A.path[0] === "/" ? l.path = t(A.path) : ((v.userinfo !== void 0 || v.host !== void 0 || v.port !== void 0) && !v.path ? l.path = "/" + A.path : v.path ? l.path = v.path.slice(0, v.path.lastIndexOf("/") + 1) + A.path : l.path = A.path, l.path = t(l.path)), l.query = A.query) : (l.path = v.path, A.query !== void 0 ? l.query = A.query : l.query = v.query), l.userinfo = v.userinfo, l.host = v.host, l.port = v.port), l.scheme = v.scheme), l.fragment = A.fragment, l;
  }
  function y(v, A, g) {
    return typeof v == "string" ? (v = unescape(v), v = f(i(w(v, g), !0), { ...g, skipEscape: !0 })) : typeof v == "object" && (v = f(i(v, !0), { ...g, skipEscape: !0 })), typeof A == "string" ? (A = unescape(A), A = f(i(w(A, g), !0), { ...g, skipEscape: !0 })) : typeof A == "object" && (A = f(i(A, !0), { ...g, skipEscape: !0 })), v.toLowerCase() === A.toLowerCase();
  }
  function f(v, A) {
    const g = {
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
    }, m = Object.assign({}, A), l = [], u = a(m.scheme || g.scheme);
    u && u.serialize && u.serialize(g, m), g.path !== void 0 && (m.skipEscape ? g.path = unescape(g.path) : (g.path = escape(g.path), g.scheme !== void 0 && (g.path = g.path.split("%3A").join(":")))), m.reference !== "suffix" && g.scheme && l.push(g.scheme, ":");
    const b = n(g);
    if (b !== void 0 && (m.reference !== "suffix" && l.push("//"), l.push(b), g.path && g.path[0] !== "/" && l.push("/")), g.path !== void 0) {
      let S = g.path;
      !m.absolutePath && (!u || !u.absolutePath) && (S = t(S)), b === void 0 && S[0] === "/" && S[1] === "/" && (S = "/%2F" + S.slice(2)), l.push(S);
    }
    return g.query !== void 0 && l.push("?", g.query), g.fragment !== void 0 && l.push("#", g.fragment), l.join("");
  }
  const h = /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u;
  function w(v, A) {
    const g = Object.assign({}, A), m = {
      scheme: void 0,
      userinfo: void 0,
      host: "",
      port: void 0,
      path: "",
      query: void 0,
      fragment: void 0
    };
    let l = !1;
    g.reference === "suffix" && (g.scheme ? v = g.scheme + ":" + v : v = "//" + v);
    const u = v.match(h);
    if (u) {
      if (m.scheme = u[1], m.userinfo = u[3], m.host = u[4], m.port = parseInt(u[5], 10), m.path = u[6] || "", m.query = u[7], m.fragment = u[8], isNaN(m.port) && (m.port = u[5]), m.host)
        if (o(m.host) === !1) {
          const I = e(m.host);
          m.host = I.host.toLowerCase(), l = I.isIPV6;
        } else
          l = !0;
      m.scheme === void 0 && m.userinfo === void 0 && m.host === void 0 && m.port === void 0 && m.query === void 0 && !m.path ? m.reference = "same-document" : m.scheme === void 0 ? m.reference = "relative" : m.fragment === void 0 ? m.reference = "absolute" : m.reference = "uri", g.reference && g.reference !== "suffix" && g.reference !== m.reference && (m.error = m.error || "URI is not a " + g.reference + " reference.");
      const b = a(g.scheme || m.scheme);
      if (!g.unicodeSupport && (!b || !b.unicodeSupport) && m.host && (g.domainHost || b && b.domainHost) && l === !1 && r(m.host))
        try {
          m.host = URL.domainToASCII(m.host.toLowerCase());
        } catch (S) {
          m.error = m.error || "Host's domain name can not be converted to ASCII: " + S;
        }
      (!b || b && !b.skipNormalize) && (v.indexOf("%") !== -1 && (m.scheme !== void 0 && (m.scheme = unescape(m.scheme)), m.host !== void 0 && (m.host = unescape(m.host))), m.path && (m.path = escape(unescape(m.path))), m.fragment && (m.fragment = encodeURI(decodeURIComponent(m.fragment)))), b && b.parse && b.parse(m, g);
    } else
      m.error = m.error || "URI can not be parsed.";
    return m;
  }
  const x = {
    SCHEMES: s,
    normalize: c,
    resolve: d,
    resolveComponent: p,
    equal: y,
    serialize: f,
    parse: w
  };
  return yn.exports = x, yn.exports.default = x, yn.exports.fastUri = x, yn.exports;
}
var yo;
function Bu() {
  if (yo) return Jn;
  yo = 1, Object.defineProperty(Jn, "__esModule", { value: !0 });
  const e = Fu();
  return e.code = 'require("ajv/dist/runtime/uri").default', Jn.default = e, Jn;
}
var go;
function Dd() {
  return go || (go = 1, (function(e) {
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
    const i = /* @__PURE__ */ ur(), o = /* @__PURE__ */ kn(), r = /* @__PURE__ */ Md(), s = /* @__PURE__ */ pr(), a = /* @__PURE__ */ te(), c = /* @__PURE__ */ lr(), d = /* @__PURE__ */ Yi(), p = /* @__PURE__ */ ie(), y = Uu, f = /* @__PURE__ */ Bu(), h = (T, O) => new RegExp(T, O);
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
    }, A = {
      ignoreKeywordsWithRef: "",
      jsPropertySyntax: "",
      unicode: '"minLength"/"maxLength" account for unicode characters by default.'
    }, g = 200;
    function m(T) {
      var O, V, D, $, q, C, z, H, Q, J, U, F, Z, K, W, ee, re, Se, he, ye, fe, nt, De, Ar, Ir;
      const hn = T.strict, qr = (O = T.code) === null || O === void 0 ? void 0 : O.optimize, Ta = qr === !0 || qr === void 0 ? 1 : qr || 0, Ca = (D = (V = T.code) === null || V === void 0 ? void 0 : V.regExp) !== null && D !== void 0 ? D : h, Ll = ($ = T.uriResolver) !== null && $ !== void 0 ? $ : f.default;
      return {
        strictSchema: (C = (q = T.strictSchema) !== null && q !== void 0 ? q : hn) !== null && C !== void 0 ? C : !0,
        strictNumbers: (H = (z = T.strictNumbers) !== null && z !== void 0 ? z : hn) !== null && H !== void 0 ? H : !0,
        strictTypes: (J = (Q = T.strictTypes) !== null && Q !== void 0 ? Q : hn) !== null && J !== void 0 ? J : "log",
        strictTuples: (F = (U = T.strictTuples) !== null && U !== void 0 ? U : hn) !== null && F !== void 0 ? F : "log",
        strictRequired: (K = (Z = T.strictRequired) !== null && Z !== void 0 ? Z : hn) !== null && K !== void 0 ? K : !1,
        code: T.code ? { ...T.code, optimize: Ta, regExp: Ca } : { optimize: Ta, regExp: Ca },
        loopRequired: (W = T.loopRequired) !== null && W !== void 0 ? W : g,
        loopEnum: (ee = T.loopEnum) !== null && ee !== void 0 ? ee : g,
        meta: (re = T.meta) !== null && re !== void 0 ? re : !0,
        messages: (Se = T.messages) !== null && Se !== void 0 ? Se : !0,
        inlineRefs: (he = T.inlineRefs) !== null && he !== void 0 ? he : !0,
        schemaId: (ye = T.schemaId) !== null && ye !== void 0 ? ye : "$id",
        addUsedSchema: (fe = T.addUsedSchema) !== null && fe !== void 0 ? fe : !0,
        validateSchema: (nt = T.validateSchema) !== null && nt !== void 0 ? nt : !0,
        validateFormats: (De = T.validateFormats) !== null && De !== void 0 ? De : !0,
        unicodeRegExp: (Ar = T.unicodeRegExp) !== null && Ar !== void 0 ? Ar : !0,
        int32range: (Ir = T.int32range) !== null && Ir !== void 0 ? Ir : !0,
        uriResolver: Ll
      };
    }
    class l {
      constructor(O = {}) {
        this.schemas = {}, this.refs = {}, this.formats = /* @__PURE__ */ Object.create(null), this._compilations = /* @__PURE__ */ new Set(), this._loading = {}, this._cache = /* @__PURE__ */ new Map(), O = this.opts = { ...O, ...m(O) };
        const { es5: V, lines: D } = this.opts.code;
        this.scope = new a.ValueScope({ scope: {}, prefixes: x, es5: V, lines: D }), this.logger = k(O.logger);
        const $ = O.validateFormats;
        O.validateFormats = !1, this.RULES = (0, r.getRules)(), u.call(this, v, O, "NOT SUPPORTED"), u.call(this, A, O, "DEPRECATED", "warn"), this._metaOpts = R.call(this), O.formats && I.call(this), this._addVocabularies(), this._addDefaultMetaSchema(), O.keywords && P.call(this, O.keywords), typeof O.meta == "object" && this.addMetaSchema(O.meta), S.call(this), O.validateFormats = $;
      }
      _addVocabularies() {
        this.addKeyword("$async");
      }
      _addDefaultMetaSchema() {
        const { $data: O, meta: V, schemaId: D } = this.opts;
        let $ = y;
        D === "id" && ($ = { ...y }, $.id = $.$id, delete $.$id), V && O && this.addMetaSchema($, $[D], !1);
      }
      defaultMeta() {
        const { meta: O, schemaId: V } = this.opts;
        return this.opts.defaultMeta = typeof O == "object" ? O[V] || O : void 0;
      }
      validate(O, V) {
        let D;
        if (typeof O == "string") {
          if (D = this.getSchema(O), !D)
            throw new Error(`no schema with key or ref "${O}"`);
        } else
          D = this.compile(O);
        const $ = D(V);
        return "$async" in D || (this.errors = D.errors), $;
      }
      compile(O, V) {
        const D = this._addSchema(O, V);
        return D.validate || this._compileSchemaEnv(D);
      }
      compileAsync(O, V) {
        if (typeof this.opts.loadSchema != "function")
          throw new Error("options.loadSchema should be a function");
        const { loadSchema: D } = this.opts;
        return $.call(this, O, V);
        async function $(J, U) {
          await q.call(this, J.$schema);
          const F = this._addSchema(J, U);
          return F.validate || C.call(this, F);
        }
        async function q(J) {
          J && !this.getSchema(J) && await $.call(this, { $ref: J }, !0);
        }
        async function C(J) {
          try {
            return this._compileSchemaEnv(J);
          } catch (U) {
            if (!(U instanceof o.default))
              throw U;
            return z.call(this, U), await H.call(this, U.missingSchema), C.call(this, J);
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
            return await (this._loading[J] = D(J));
          } finally {
            delete this._loading[J];
          }
        }
      }
      // Adds schema to the instance
      addSchema(O, V, D, $ = this.opts.validateSchema) {
        if (Array.isArray(O)) {
          for (const C of O)
            this.addSchema(C, void 0, D, $);
          return this;
        }
        let q;
        if (typeof O == "object") {
          const { schemaId: C } = this.opts;
          if (q = O[C], q !== void 0 && typeof q != "string")
            throw new Error(`schema ${C} must be string`);
        }
        return V = (0, c.normalizeId)(V || q), this._checkUnique(V), this.schemas[V] = this._addSchema(O, D, V, $, !0), this;
      }
      // Add schema that will be used to validate other schemas
      // options in META_IGNORE_OPTIONS are alway set to false
      addMetaSchema(O, V, D = this.opts.validateSchema) {
        return this.addSchema(O, V, !0, D), this;
      }
      //  Validate schema against its meta-schema
      validateSchema(O, V) {
        if (typeof O == "boolean")
          return !0;
        let D;
        if (D = O.$schema, D !== void 0 && typeof D != "string")
          throw new Error("$schema must be a string");
        if (D = D || this.opts.defaultMeta || this.defaultMeta(), !D)
          return this.logger.warn("meta-schema not available"), this.errors = null, !0;
        const $ = this.validate(D, O);
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
      getSchema(O) {
        let V;
        for (; typeof (V = b.call(this, O)) == "string"; )
          O = V;
        if (V === void 0) {
          const { schemaId: D } = this.opts, $ = new s.SchemaEnv({ schema: {}, schemaId: D });
          if (V = s.resolveSchema.call(this, $, O), !V)
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
            const V = b.call(this, O);
            return typeof V == "object" && this._cache.delete(V.schema), delete this.schemas[O], delete this.refs[O], this;
          }
          case "object": {
            const V = O;
            this._cache.delete(V);
            let D = O[this.opts.schemaId];
            return D && (D = (0, c.normalizeId)(D), delete this.schemas[D], delete this.refs[D]), this;
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
        let D;
        if (typeof O == "string")
          D = O, typeof V == "object" && (this.logger.warn("these parameters are deprecated, see docs for addKeyword"), V.keyword = D);
        else if (typeof O == "object" && V === void 0) {
          if (V = O, D = V.keyword, Array.isArray(D) && !D.length)
            throw new Error("addKeywords: keyword must be string or non-empty array");
        } else
          throw new Error("invalid addKeywords parameters");
        if (j.call(this, D, V), !V)
          return (0, p.eachItem)(D, (q) => N.call(this, q)), this;
        G.call(this, V);
        const $ = {
          ...V,
          type: (0, d.getJSONTypes)(V.type),
          schemaType: (0, d.getJSONTypes)(V.schemaType)
        };
        return (0, p.eachItem)(D, $.type.length === 0 ? (q) => N.call(this, q, $) : (q) => $.type.forEach((C) => N.call(this, q, $, C))), this;
      }
      getKeyword(O) {
        const V = this.RULES.all[O];
        return typeof V == "object" ? V.definition : !!V;
      }
      // Remove keyword
      removeKeyword(O) {
        const { RULES: V } = this;
        delete V.keywords[O], delete V.all[O];
        for (const D of V.rules) {
          const $ = D.rules.findIndex((q) => q.keyword === O);
          $ >= 0 && D.rules.splice($, 1);
        }
        return this;
      }
      // Add format
      addFormat(O, V) {
        return typeof V == "string" && (V = new RegExp(V)), this.formats[O] = V, this;
      }
      errorsText(O = this.errors, { separator: V = ", ", dataVar: D = "data" } = {}) {
        return !O || O.length === 0 ? "No errors" : O.map(($) => `${D}${$.instancePath} ${$.message}`).reduce(($, q) => $ + V + q);
      }
      $dataMetaSchema(O, V) {
        const D = this.RULES.all;
        O = JSON.parse(JSON.stringify(O));
        for (const $ of V) {
          const q = $.split("/").slice(1);
          let C = O;
          for (const z of q)
            C = C[z];
          for (const z in D) {
            const H = D[z];
            if (typeof H != "object")
              continue;
            const { $data: Q } = H.definition, J = C[z];
            Q && J && (C[z] = B(J));
          }
        }
        return O;
      }
      _removeAllSchemas(O, V) {
        for (const D in O) {
          const $ = O[D];
          (!V || V.test(D)) && (typeof $ == "string" ? delete O[D] : $ && !$.meta && (this._cache.delete($.schema), delete O[D]));
        }
      }
      _addSchema(O, V, D, $ = this.opts.validateSchema, q = this.opts.addUsedSchema) {
        let C;
        const { schemaId: z } = this.opts;
        if (typeof O == "object")
          C = O[z];
        else {
          if (this.opts.jtd)
            throw new Error("schema must be object");
          if (typeof O != "boolean")
            throw new Error("schema must be object or boolean");
        }
        let H = this._cache.get(O);
        if (H !== void 0)
          return H;
        D = (0, c.normalizeId)(C || D);
        const Q = c.getSchemaRefs.call(this, O, D);
        return H = new s.SchemaEnv({ schema: O, schemaId: z, meta: V, baseId: D, localRefs: Q }), this._cache.set(H.schema, H), q && !D.startsWith("#") && (D && this._checkUnique(D), this.refs[D] = H), $ && this.validateSchema(O, !0), H;
      }
      _checkUnique(O) {
        if (this.schemas[O] || this.refs[O])
          throw new Error(`schema with key or id "${O}" already exists`);
      }
      _compileSchemaEnv(O) {
        if (O.meta ? this._compileMetaSchema(O) : s.compileSchema.call(this, O), !O.validate)
          throw new Error("ajv implementation error");
        return O.validate;
      }
      _compileMetaSchema(O) {
        const V = this.opts;
        this.opts = this._metaOpts;
        try {
          s.compileSchema.call(this, O);
        } finally {
          this.opts = V;
        }
      }
    }
    l.ValidationError = i.default, l.MissingRefError = o.default, e.default = l;
    function u(T, O, V, D = "error") {
      for (const $ in T) {
        const q = $;
        q in O && this.logger[D](`${V}: option ${$}. ${T[q]}`);
      }
    }
    function b(T) {
      return T = (0, c.normalizeId)(T), this.schemas[T] || this.refs[T];
    }
    function S() {
      const T = this.opts.schemas;
      if (T)
        if (Array.isArray(T))
          this.addSchema(T);
        else
          for (const O in T)
            this.addSchema(T[O], O);
    }
    function I() {
      for (const T in this.opts.formats) {
        const O = this.opts.formats[T];
        O && this.addFormat(T, O);
      }
    }
    function P(T) {
      if (Array.isArray(T)) {
        this.addVocabulary(T);
        return;
      }
      this.logger.warn("keywords option as map is deprecated, pass array");
      for (const O in T) {
        const V = T[O];
        V.keyword || (V.keyword = O), this.addKeyword(V);
      }
    }
    function R() {
      const T = { ...this.opts };
      for (const O of w)
        delete T[O];
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
    const M = /^[a-z_$][a-z0-9_$:-]*$/i;
    function j(T, O) {
      const { RULES: V } = this;
      if ((0, p.eachItem)(T, (D) => {
        if (V.keywords[D])
          throw new Error(`Keyword ${D} is already defined`);
        if (!M.test(D))
          throw new Error(`Keyword ${D} has invalid name`);
      }), !!O && O.$data && !("code" in O || "validate" in O))
        throw new Error('$data keyword must have "code" or "validate" function');
    }
    function N(T, O, V) {
      var D;
      const $ = O?.post;
      if (V && $)
        throw new Error('keyword with "post" flag cannot have "type"');
      const { RULES: q } = this;
      let C = $ ? q.post : q.rules.find(({ type: H }) => H === V);
      if (C || (C = { type: V, rules: [] }, q.rules.push(C)), q.keywords[T] = !0, !O)
        return;
      const z = {
        keyword: T,
        definition: {
          ...O,
          type: (0, d.getJSONTypes)(O.type),
          schemaType: (0, d.getJSONTypes)(O.schemaType)
        }
      };
      O.before ? _.call(this, C, z, O.before) : C.rules.push(z), q.all[T] = z, (D = O.implements) === null || D === void 0 || D.forEach((H) => this.addKeyword(H));
    }
    function _(T, O, V) {
      const D = T.rules.findIndex(($) => $.keyword === V);
      D >= 0 ? T.rules.splice(D, 0, O) : (T.rules.push(O), this.logger.warn(`rule ${V} is not defined`));
    }
    function G(T) {
      let { metaSchema: O } = T;
      O !== void 0 && (T.$data && this.opts.$data && (O = B(O)), T.validateSchema = this.compile(O, !0));
    }
    const L = {
      $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
    };
    function B(T) {
      return { anyOf: [T, L] };
    }
  })(Cr)), Cr;
}
var Kn = {}, Qn = {}, Wn = {}, vo;
function Zu() {
  if (vo) return Wn;
  vo = 1, Object.defineProperty(Wn, "__esModule", { value: !0 });
  const e = {
    keyword: "id",
    code() {
      throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
    }
  };
  return Wn.default = e, Wn;
}
var Pt = {}, bo;
function oa() {
  if (bo) return Pt;
  bo = 1, Object.defineProperty(Pt, "__esModule", { value: !0 }), Pt.callRef = Pt.getValidate = void 0;
  const e = /* @__PURE__ */ kn(), t = /* @__PURE__ */ tt(), n = /* @__PURE__ */ te(), i = /* @__PURE__ */ et(), o = /* @__PURE__ */ pr(), r = /* @__PURE__ */ ie(), s = {
    keyword: "$ref",
    schemaType: "string",
    code(d) {
      const { gen: p, schema: y, it: f } = d, { baseId: h, schemaEnv: w, validateName: x, opts: v, self: A } = f, { root: g } = w;
      if ((y === "#" || y === "#/") && h === g.baseId)
        return l();
      const m = o.resolveRef.call(A, g, h, y);
      if (m === void 0)
        throw new e.default(f.opts.uriResolver, h, y);
      if (m instanceof o.SchemaEnv)
        return u(m);
      return b(m);
      function l() {
        if (w === g)
          return c(d, x, w, w.$async);
        const S = p.scopeValue("root", { ref: g });
        return c(d, (0, n._)`${S}.validate`, g, g.$async);
      }
      function u(S) {
        const I = a(d, S);
        c(d, I, S, S.$async);
      }
      function b(S) {
        const I = p.scopeValue("schema", v.code.source === !0 ? { ref: S, code: (0, n.stringify)(S) } : { ref: S }), P = p.name("valid"), R = d.subschema({
          schema: S,
          dataTypes: [],
          schemaPath: n.nil,
          topSchemaRef: I,
          errSchemaPath: y
        }, P);
        d.mergeEvaluated(R), d.ok(P);
      }
    }
  };
  function a(d, p) {
    const { gen: y } = d;
    return p.validate ? y.scopeValue("validate", { ref: p.validate }) : (0, n._)`${y.scopeValue("wrapper", { ref: p })}.validate`;
  }
  Pt.getValidate = a;
  function c(d, p, y, f) {
    const { gen: h, it: w } = d, { allErrors: x, schemaEnv: v, opts: A } = w, g = A.passContext ? i.default.this : n.nil;
    f ? m() : l();
    function m() {
      if (!v.$async)
        throw new Error("async schema referenced by sync schema");
      const S = h.let("valid");
      h.try(() => {
        h.code((0, n._)`await ${(0, t.callValidateCode)(d, p, g)}`), b(p), x || h.assign(S, !0);
      }, (I) => {
        h.if((0, n._)`!(${I} instanceof ${w.ValidationError})`, () => h.throw(I)), u(I), x || h.assign(S, !1);
      }), d.ok(S);
    }
    function l() {
      d.result((0, t.callValidateCode)(d, p, g), () => b(p), () => u(p));
    }
    function u(S) {
      const I = (0, n._)`${S}.errors`;
      h.assign(i.default.vErrors, (0, n._)`${i.default.vErrors} === null ? ${I} : ${i.default.vErrors}.concat(${I})`), h.assign(i.default.errors, (0, n._)`${i.default.vErrors}.length`);
    }
    function b(S) {
      var I;
      if (!w.opts.unevaluated)
        return;
      const P = (I = y?.validate) === null || I === void 0 ? void 0 : I.evaluated;
      if (w.props !== !0)
        if (P && !P.dynamicProps)
          P.props !== void 0 && (w.props = r.mergeEvaluated.props(h, P.props, w.props));
        else {
          const R = h.var("props", (0, n._)`${S}.evaluated.props`);
          w.props = r.mergeEvaluated.props(h, R, w.props, n.Name);
        }
      if (w.items !== !0)
        if (P && !P.dynamicItems)
          P.items !== void 0 && (w.items = r.mergeEvaluated.items(h, P.items, w.items));
        else {
          const R = h.var("items", (0, n._)`${S}.evaluated.items`);
          w.items = r.mergeEvaluated.items(h, R, w.items, n.Name);
        }
    }
  }
  return Pt.callRef = c, Pt.default = s, Pt;
}
var wo;
function zd() {
  if (wo) return Qn;
  wo = 1, Object.defineProperty(Qn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Zu(), t = /* @__PURE__ */ oa(), n = [
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
var Xn = {}, Yn = {}, xo;
function Hu() {
  if (xo) return Yn;
  xo = 1, Object.defineProperty(Yn, "__esModule", { value: !0 });
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
var ei = {}, So;
function Ju() {
  if (So) return ei;
  So = 1, Object.defineProperty(ei, "__esModule", { value: !0 });
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
      const { gen: o, data: r, schemaCode: s, it: a } = i, c = a.opts.multipleOfPrecision, d = o.let("res"), p = c ? (0, e._)`Math.abs(Math.round(${d}) - ${d}) > 1e-${c}` : (0, e._)`${d} !== parseInt(${d})`;
      i.fail$data((0, e._)`(${s} === 0 || (${d} = ${r}/${s}, ${p}))`);
    }
  };
  return ei.default = n, ei;
}
var ti = {}, ni = {}, Ao;
function Ku() {
  if (Ao) return ni;
  Ao = 1, Object.defineProperty(ni, "__esModule", { value: !0 });
  function e(t) {
    const n = t.length;
    let i = 0, o = 0, r;
    for (; o < n; )
      i++, r = t.charCodeAt(o++), r >= 55296 && r <= 56319 && o < n && (r = t.charCodeAt(o), (r & 64512) === 56320 && o++);
    return i;
  }
  return ni.default = e, e.code = 'require("ajv/dist/runtime/ucs2length").default', ni;
}
var Io;
function Qu() {
  if (Io) return ti;
  Io = 1, Object.defineProperty(ti, "__esModule", { value: !0 });
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
      const { keyword: s, data: a, schemaCode: c, it: d } = r, p = s === "maxLength" ? e.operators.GT : e.operators.LT, y = d.opts.unicode === !1 ? (0, e._)`${a}.length` : (0, e._)`${(0, t.useFunc)(r.gen, n.default)}(${a})`;
      r.fail$data((0, e._)`${y} ${p} ${c}`);
    }
  };
  return ti.default = o, ti;
}
var ii = {}, qo;
function Wu() {
  if (qo) return ii;
  qo = 1, Object.defineProperty(ii, "__esModule", { value: !0 });
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
      const { gen: s, data: a, $data: c, schema: d, schemaCode: p, it: y } = r, f = y.opts.unicodeRegExp ? "u" : "";
      if (c) {
        const { regExp: h } = y.opts.code, w = h.code === "new RegExp" ? (0, n._)`new RegExp` : (0, t.useFunc)(s, h), x = s.let("valid");
        s.try(() => s.assign(x, (0, n._)`${w}(${p}, ${f}).test(${a})`), () => s.assign(x, !1)), r.fail$data((0, n._)`!${x}`);
      } else {
        const h = (0, e.usePattern)(r, d);
        r.fail$data((0, n._)`!${h}.test(${a})`);
      }
    }
  };
  return ii.default = o, ii;
}
var ri = {}, Ro;
function Xu() {
  if (Ro) return ri;
  Ro = 1, Object.defineProperty(ri, "__esModule", { value: !0 });
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
var si = {}, jo;
function Yu() {
  if (jo) return si;
  jo = 1, Object.defineProperty(si, "__esModule", { value: !0 });
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
      const { gen: s, schema: a, schemaCode: c, data: d, $data: p, it: y } = r, { opts: f } = y;
      if (!p && a.length === 0)
        return;
      const h = a.length >= f.loopRequired;
      if (y.allErrors ? w() : x(), f.strictRequired) {
        const g = r.parentSchema.properties, { definedProperties: m } = r.it;
        for (const l of a)
          if (g?.[l] === void 0 && !m.has(l)) {
            const u = y.schemaEnv.baseId + y.errSchemaPath, b = `required property "${l}" is not defined at "${u}" (strictRequired)`;
            (0, n.checkStrictMode)(y, b, y.opts.strictRequired);
          }
      }
      function w() {
        if (h || p)
          r.block$data(t.nil, v);
        else
          for (const g of a)
            (0, e.checkReportMissingProp)(r, g);
      }
      function x() {
        const g = s.let("missing");
        if (h || p) {
          const m = s.let("valid", !0);
          r.block$data(m, () => A(g, m)), r.ok(m);
        } else
          s.if((0, e.checkMissingProp)(r, a, g)), (0, e.reportMissingProp)(r, g), s.else();
      }
      function v() {
        s.forOf("prop", c, (g) => {
          r.setParams({ missingProperty: g }), s.if((0, e.noPropertyInData)(s, d, g, f.ownProperties), () => r.error());
        });
      }
      function A(g, m) {
        r.setParams({ missingProperty: g }), s.forOf(g, c, () => {
          s.assign(m, (0, e.propertyInData)(s, d, g, f.ownProperties)), s.if((0, t.not)(m), () => {
            r.error(), s.break();
          });
        }, t.nil);
      }
    }
  };
  return si.default = o, si;
}
var ai = {}, $o;
function ep() {
  if ($o) return ai;
  $o = 1, Object.defineProperty(ai, "__esModule", { value: !0 });
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
var oi = {}, ci = {}, Po;
function ca() {
  if (Po) return ci;
  Po = 1, Object.defineProperty(ci, "__esModule", { value: !0 });
  const e = Ld();
  return e.code = 'require("ajv/dist/runtime/equal").default', ci.default = e, ci;
}
var _o;
function tp() {
  if (_o) return oi;
  _o = 1, Object.defineProperty(oi, "__esModule", { value: !0 });
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
      const { gen: a, data: c, $data: d, schema: p, parentSchema: y, schemaCode: f, it: h } = s;
      if (!d && !p)
        return;
      const w = a.let("valid"), x = y.items ? (0, e.getSchemaTypes)(y.items) : [];
      s.block$data(w, v, (0, t._)`${f} === false`), s.ok(w);
      function v() {
        const l = a.let("i", (0, t._)`${c}.length`), u = a.let("j");
        s.setParams({ i: l, j: u }), a.assign(w, !0), a.if((0, t._)`${l} > 1`, () => (A() ? g : m)(l, u));
      }
      function A() {
        return x.length > 0 && !x.some((l) => l === "object" || l === "array");
      }
      function g(l, u) {
        const b = a.name("item"), S = (0, e.checkDataTypes)(x, b, h.opts.strictNumbers, e.DataType.Wrong), I = a.const("indices", (0, t._)`{}`);
        a.for((0, t._)`;${l}--;`, () => {
          a.let(b, (0, t._)`${c}[${l}]`), a.if(S, (0, t._)`continue`), x.length > 1 && a.if((0, t._)`typeof ${b} == "string"`, (0, t._)`${b} += "_"`), a.if((0, t._)`typeof ${I}[${b}] == "number"`, () => {
            a.assign(u, (0, t._)`${I}[${b}]`), s.error(), a.assign(w, !1).break();
          }).code((0, t._)`${I}[${b}] = ${l}`);
        });
      }
      function m(l, u) {
        const b = (0, n.useFunc)(a, i.default), S = a.name("outer");
        a.label(S).for((0, t._)`;${l}--;`, () => a.for((0, t._)`${u} = ${l}; ${u}--;`, () => a.if((0, t._)`${b}(${c}[${l}], ${c}[${u}])`, () => {
          s.error(), a.assign(w, !1).break(S);
        })));
      }
    }
  };
  return oi.default = r, oi;
}
var di = {}, To;
function np() {
  if (To) return di;
  To = 1, Object.defineProperty(di, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ ca(), o = {
    keyword: "const",
    $data: !0,
    error: {
      message: "must be equal to constant",
      params: ({ schemaCode: r }) => (0, e._)`{allowedValue: ${r}}`
    },
    code(r) {
      const { gen: s, data: a, $data: c, schemaCode: d, schema: p } = r;
      c || p && typeof p == "object" ? r.fail$data((0, e._)`!${(0, t.useFunc)(s, n.default)}(${a}, ${d})`) : r.fail((0, e._)`${p} !== ${a}`);
    }
  };
  return di.default = o, di;
}
var li = {}, Co;
function ip() {
  if (Co) return li;
  Co = 1, Object.defineProperty(li, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ ca(), o = {
    keyword: "enum",
    schemaType: "array",
    $data: !0,
    error: {
      message: "must be equal to one of the allowed values",
      params: ({ schemaCode: r }) => (0, e._)`{allowedValues: ${r}}`
    },
    code(r) {
      const { gen: s, data: a, $data: c, schema: d, schemaCode: p, it: y } = r;
      if (!c && d.length === 0)
        throw new Error("enum must have non-empty array");
      const f = d.length >= y.opts.loopEnum;
      let h;
      const w = () => h ?? (h = (0, t.useFunc)(s, n.default));
      let x;
      if (f || c)
        x = s.let("valid"), r.block$data(x, v);
      else {
        if (!Array.isArray(d))
          throw new Error("ajv implementation error");
        const g = s.const("vSchema", p);
        x = (0, e.or)(...d.map((m, l) => A(g, l)));
      }
      r.pass(x);
      function v() {
        s.assign(x, !1), s.forOf("v", p, (g) => s.if((0, e._)`${w()}(${a}, ${g})`, () => s.assign(x, !0).break()));
      }
      function A(g, m) {
        const l = d[m];
        return typeof l == "object" && l !== null ? (0, e._)`${w()}(${a}, ${g}[${m}])` : (0, e._)`${a} === ${l}`;
      }
    }
  };
  return li.default = o, li;
}
var Eo;
function Vd() {
  if (Eo) return Xn;
  Eo = 1, Object.defineProperty(Xn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Hu(), t = /* @__PURE__ */ Ju(), n = /* @__PURE__ */ Qu(), i = /* @__PURE__ */ Wu(), o = /* @__PURE__ */ Xu(), r = /* @__PURE__ */ Yu(), s = /* @__PURE__ */ ep(), a = /* @__PURE__ */ tp(), c = /* @__PURE__ */ np(), d = /* @__PURE__ */ ip(), p = [
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
    d.default
  ];
  return Xn.default = p, Xn;
}
var ui = {}, Xt = {}, ko;
function Ud() {
  if (ko) return Xt;
  ko = 1, Object.defineProperty(Xt, "__esModule", { value: !0 }), Xt.validateAdditionalItems = void 0;
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
    const { gen: a, schema: c, data: d, keyword: p, it: y } = r;
    y.items = !0;
    const f = a.const("len", (0, e._)`${d}.length`);
    if (c === !1)
      r.setParams({ len: s.length }), r.pass((0, e._)`${f} <= ${s.length}`);
    else if (typeof c == "object" && !(0, t.alwaysValidSchema)(y, c)) {
      const w = a.var("valid", (0, e._)`${f} <= ${s.length}`);
      a.if((0, e.not)(w), () => h(w)), r.ok(w);
    }
    function h(w) {
      a.forRange("i", s.length, f, (x) => {
        r.subschema({ keyword: p, dataProp: x, dataPropType: t.Type.Num }, w), y.allErrors || a.if((0, e.not)(w), () => a.break());
      });
    }
  }
  return Xt.validateAdditionalItems = o, Xt.default = i, Xt;
}
var pi = {}, Yt = {}, Mo;
function Gd() {
  if (Mo) return Yt;
  Mo = 1, Object.defineProperty(Yt, "__esModule", { value: !0 }), Yt.validateTuple = void 0;
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
    const { gen: c, parentSchema: d, data: p, keyword: y, it: f } = r;
    x(d), f.opts.unevaluated && a.length && f.items !== !0 && (f.items = t.mergeEvaluated.items(c, a.length, f.items));
    const h = c.name("valid"), w = c.const("len", (0, e._)`${p}.length`);
    a.forEach((v, A) => {
      (0, t.alwaysValidSchema)(f, v) || (c.if((0, e._)`${w} > ${A}`, () => r.subschema({
        keyword: y,
        schemaProp: A,
        dataProp: A
      }, h)), r.ok(h));
    });
    function x(v) {
      const { opts: A, errSchemaPath: g } = f, m = a.length, l = m === v.minItems && (m === v.maxItems || v[s] === !1);
      if (A.strictTuples && !l) {
        const u = `"${y}" is ${m}-tuple, but minItems or maxItems/${s} are not specified or different at path "${g}"`;
        (0, t.checkStrictMode)(f, u, A.strictTuples);
      }
    }
  }
  return Yt.validateTuple = o, Yt.default = i, Yt;
}
var Oo;
function rp() {
  if (Oo) return pi;
  Oo = 1, Object.defineProperty(pi, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Gd(), t = {
    keyword: "prefixItems",
    type: "array",
    schemaType: ["array"],
    before: "uniqueItems",
    code: (n) => (0, e.validateTuple)(n, "items")
  };
  return pi.default = t, pi;
}
var fi = {}, Lo;
function sp() {
  if (Lo) return fi;
  Lo = 1, Object.defineProperty(fi, "__esModule", { value: !0 });
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
      const { schema: a, parentSchema: c, it: d } = s, { prefixItems: p } = c;
      d.items = !0, !(0, t.alwaysValidSchema)(d, a) && (p ? (0, i.validateAdditionalItems)(s, p) : s.ok((0, n.validateArray)(s)));
    }
  };
  return fi.default = r, fi;
}
var hi = {}, No;
function ap() {
  if (No) return hi;
  No = 1, Object.defineProperty(hi, "__esModule", { value: !0 });
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
      const { gen: r, schema: s, parentSchema: a, data: c, it: d } = o;
      let p, y;
      const { minContains: f, maxContains: h } = a;
      d.opts.next ? (p = f === void 0 ? 1 : f, y = h) : p = 1;
      const w = r.const("len", (0, e._)`${c}.length`);
      if (o.setParams({ min: p, max: y }), y === void 0 && p === 0) {
        (0, t.checkStrictMode)(d, '"minContains" == 0 without "maxContains": "contains" keyword ignored');
        return;
      }
      if (y !== void 0 && p > y) {
        (0, t.checkStrictMode)(d, '"minContains" > "maxContains" is always invalid'), o.fail();
        return;
      }
      if ((0, t.alwaysValidSchema)(d, s)) {
        let m = (0, e._)`${w} >= ${p}`;
        y !== void 0 && (m = (0, e._)`${m} && ${w} <= ${y}`), o.pass(m);
        return;
      }
      d.items = !0;
      const x = r.name("valid");
      y === void 0 && p === 1 ? A(x, () => r.if(x, () => r.break())) : p === 0 ? (r.let(x, !0), y !== void 0 && r.if((0, e._)`${c}.length > 0`, v)) : (r.let(x, !1), v()), o.result(x, () => o.reset());
      function v() {
        const m = r.name("_valid"), l = r.let("count", 0);
        A(m, () => r.if(m, () => g(l)));
      }
      function A(m, l) {
        r.forRange("i", 0, w, (u) => {
          o.subschema({
            keyword: "contains",
            dataProp: u,
            dataPropType: t.Type.Num,
            compositeRule: !0
          }, m), l();
        });
      }
      function g(m) {
        r.code((0, e._)`${m}++`), y === void 0 ? r.if((0, e._)`${m} >= ${p}`, () => r.assign(x, !0).break()) : (r.if((0, e._)`${m} > ${y}`, () => r.assign(x, !1).break()), p === 1 ? r.assign(x, !0) : r.if((0, e._)`${m} >= ${p}`, () => r.assign(x, !0)));
      }
    }
  };
  return hi.default = i, hi;
}
var Vr = {}, Do;
function da() {
  return Do || (Do = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.validateSchemaDeps = e.validatePropertyDeps = e.error = void 0;
    const t = /* @__PURE__ */ te(), n = /* @__PURE__ */ ie(), i = /* @__PURE__ */ tt();
    e.error = {
      message: ({ params: { property: c, depsCount: d, deps: p } }) => {
        const y = d === 1 ? "property" : "properties";
        return (0, t.str)`must have ${y} ${p} when property ${c} is present`;
      },
      params: ({ params: { property: c, depsCount: d, deps: p, missingProperty: y } }) => (0, t._)`{property: ${c},
    missingProperty: ${y},
    depsCount: ${d},
    deps: ${p}}`
      // TODO change to reference
    };
    const o = {
      keyword: "dependencies",
      type: "object",
      schemaType: "object",
      error: e.error,
      code(c) {
        const [d, p] = r(c);
        s(c, d), a(c, p);
      }
    };
    function r({ schema: c }) {
      const d = {}, p = {};
      for (const y in c) {
        if (y === "__proto__")
          continue;
        const f = Array.isArray(c[y]) ? d : p;
        f[y] = c[y];
      }
      return [d, p];
    }
    function s(c, d = c.schema) {
      const { gen: p, data: y, it: f } = c;
      if (Object.keys(d).length === 0)
        return;
      const h = p.let("missing");
      for (const w in d) {
        const x = d[w];
        if (x.length === 0)
          continue;
        const v = (0, i.propertyInData)(p, y, w, f.opts.ownProperties);
        c.setParams({
          property: w,
          depsCount: x.length,
          deps: x.join(", ")
        }), f.allErrors ? p.if(v, () => {
          for (const A of x)
            (0, i.checkReportMissingProp)(c, A);
        }) : (p.if((0, t._)`${v} && (${(0, i.checkMissingProp)(c, x, h)})`), (0, i.reportMissingProp)(c, h), p.else());
      }
    }
    e.validatePropertyDeps = s;
    function a(c, d = c.schema) {
      const { gen: p, data: y, keyword: f, it: h } = c, w = p.name("valid");
      for (const x in d)
        (0, n.alwaysValidSchema)(h, d[x]) || (p.if(
          (0, i.propertyInData)(p, y, x, h.opts.ownProperties),
          () => {
            const v = c.subschema({ keyword: f, schemaProp: x }, w);
            c.mergeValidEvaluated(v, w);
          },
          () => p.var(w, !0)
          // TODO var
        ), c.ok(w));
    }
    e.validateSchemaDeps = a, e.default = o;
  })(Vr)), Vr;
}
var mi = {}, zo;
function op() {
  if (zo) return mi;
  zo = 1, Object.defineProperty(mi, "__esModule", { value: !0 });
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
      const d = r.name("valid");
      r.forIn("key", a, (p) => {
        o.setParams({ propertyName: p }), o.subschema({
          keyword: "propertyNames",
          data: p,
          dataTypes: ["string"],
          propertyName: p,
          compositeRule: !0
        }, d), r.if((0, e.not)(d), () => {
          o.error(!0), c.allErrors || r.break();
        });
      }), o.ok(d);
    }
  };
  return mi.default = i, mi;
}
var yi = {}, Vo;
function Fd() {
  if (Vo) return yi;
  Vo = 1, Object.defineProperty(yi, "__esModule", { value: !0 });
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
      const { gen: a, schema: c, parentSchema: d, data: p, errsCount: y, it: f } = s;
      if (!y)
        throw new Error("ajv implementation error");
      const { allErrors: h, opts: w } = f;
      if (f.props = !0, w.removeAdditional !== "all" && (0, i.alwaysValidSchema)(f, c))
        return;
      const x = (0, e.allSchemaProperties)(d.properties), v = (0, e.allSchemaProperties)(d.patternProperties);
      A(), s.ok((0, t._)`${y} === ${n.default.errors}`);
      function A() {
        a.forIn("key", p, (b) => {
          !x.length && !v.length ? l(b) : a.if(g(b), () => l(b));
        });
      }
      function g(b) {
        let S;
        if (x.length > 8) {
          const I = (0, i.schemaRefOrVal)(f, d.properties, "properties");
          S = (0, e.isOwnProperty)(a, I, b);
        } else x.length ? S = (0, t.or)(...x.map((I) => (0, t._)`${b} === ${I}`)) : S = t.nil;
        return v.length && (S = (0, t.or)(S, ...v.map((I) => (0, t._)`${(0, e.usePattern)(s, I)}.test(${b})`))), (0, t.not)(S);
      }
      function m(b) {
        a.code((0, t._)`delete ${p}[${b}]`);
      }
      function l(b) {
        if (w.removeAdditional === "all" || w.removeAdditional && c === !1) {
          m(b);
          return;
        }
        if (c === !1) {
          s.setParams({ additionalProperty: b }), s.error(), h || a.break();
          return;
        }
        if (typeof c == "object" && !(0, i.alwaysValidSchema)(f, c)) {
          const S = a.name("valid");
          w.removeAdditional === "failing" ? (u(b, S, !1), a.if((0, t.not)(S), () => {
            s.reset(), m(b);
          })) : (u(b, S), h || a.if((0, t.not)(S), () => a.break()));
        }
      }
      function u(b, S, I) {
        const P = {
          keyword: "additionalProperties",
          dataProp: b,
          dataPropType: i.Type.Str
        };
        I === !1 && Object.assign(P, {
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }), s.subschema(P, S);
      }
    }
  };
  return yi.default = r, yi;
}
var gi = {}, Uo;
function cp() {
  if (Uo) return gi;
  Uo = 1, Object.defineProperty(gi, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ En(), t = /* @__PURE__ */ tt(), n = /* @__PURE__ */ ie(), i = /* @__PURE__ */ Fd(), o = {
    keyword: "properties",
    type: "object",
    schemaType: "object",
    code(r) {
      const { gen: s, schema: a, parentSchema: c, data: d, it: p } = r;
      p.opts.removeAdditional === "all" && c.additionalProperties === void 0 && i.default.code(new e.KeywordCxt(p, i.default, "additionalProperties"));
      const y = (0, t.allSchemaProperties)(a);
      for (const v of y)
        p.definedProperties.add(v);
      p.opts.unevaluated && y.length && p.props !== !0 && (p.props = n.mergeEvaluated.props(s, (0, n.toHash)(y), p.props));
      const f = y.filter((v) => !(0, n.alwaysValidSchema)(p, a[v]));
      if (f.length === 0)
        return;
      const h = s.name("valid");
      for (const v of f)
        w(v) ? x(v) : (s.if((0, t.propertyInData)(s, d, v, p.opts.ownProperties)), x(v), p.allErrors || s.else().var(h, !0), s.endIf()), r.it.definedProperties.add(v), r.ok(h);
      function w(v) {
        return p.opts.useDefaults && !p.compositeRule && a[v].default !== void 0;
      }
      function x(v) {
        r.subschema({
          keyword: "properties",
          schemaProp: v,
          dataProp: v
        }, h);
      }
    }
  };
  return gi.default = o, gi;
}
var vi = {}, Go;
function dp() {
  if (Go) return vi;
  Go = 1, Object.defineProperty(vi, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ tt(), t = /* @__PURE__ */ te(), n = /* @__PURE__ */ ie(), i = /* @__PURE__ */ ie(), o = {
    keyword: "patternProperties",
    type: "object",
    schemaType: "object",
    code(r) {
      const { gen: s, schema: a, data: c, parentSchema: d, it: p } = r, { opts: y } = p, f = (0, e.allSchemaProperties)(a), h = f.filter((l) => (0, n.alwaysValidSchema)(p, a[l]));
      if (f.length === 0 || h.length === f.length && (!p.opts.unevaluated || p.props === !0))
        return;
      const w = y.strictSchema && !y.allowMatchingProperties && d.properties, x = s.name("valid");
      p.props !== !0 && !(p.props instanceof t.Name) && (p.props = (0, i.evaluatedPropsToName)(s, p.props));
      const { props: v } = p;
      A();
      function A() {
        for (const l of f)
          w && g(l), p.allErrors ? m(l) : (s.var(x, !0), m(l), s.if(x));
      }
      function g(l) {
        for (const u in w)
          new RegExp(l).test(u) && (0, n.checkStrictMode)(p, `property ${u} matches pattern ${l} (use allowMatchingProperties)`);
      }
      function m(l) {
        s.forIn("key", c, (u) => {
          s.if((0, t._)`${(0, e.usePattern)(r, l)}.test(${u})`, () => {
            const b = h.includes(l);
            b || r.subschema({
              keyword: "patternProperties",
              schemaProp: l,
              dataProp: u,
              dataPropType: i.Type.Str
            }, x), p.opts.unevaluated && v !== !0 ? s.assign((0, t._)`${v}[${u}]`, !0) : !b && !p.allErrors && s.if((0, t.not)(x), () => s.break());
          });
        });
      }
    }
  };
  return vi.default = o, vi;
}
var bi = {}, Fo;
function lp() {
  if (Fo) return bi;
  Fo = 1, Object.defineProperty(bi, "__esModule", { value: !0 });
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
var wi = {}, Bo;
function up() {
  if (Bo) return wi;
  Bo = 1, Object.defineProperty(wi, "__esModule", { value: !0 });
  const t = {
    keyword: "anyOf",
    schemaType: "array",
    trackErrors: !0,
    code: (/* @__PURE__ */ tt()).validateUnion,
    error: { message: "must match a schema in anyOf" }
  };
  return wi.default = t, wi;
}
var xi = {}, Zo;
function pp() {
  if (Zo) return xi;
  Zo = 1, Object.defineProperty(xi, "__esModule", { value: !0 });
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
      const d = s, p = r.let("valid", !1), y = r.let("passing", null), f = r.name("_valid");
      o.setParams({ passing: y }), r.block(h), o.result(p, () => o.reset(), () => o.error(!0));
      function h() {
        d.forEach((w, x) => {
          let v;
          (0, t.alwaysValidSchema)(c, w) ? r.var(f, !0) : v = o.subschema({
            keyword: "oneOf",
            schemaProp: x,
            compositeRule: !0
          }, f), x > 0 && r.if((0, e._)`${f} && ${p}`).assign(p, !1).assign(y, (0, e._)`[${y}, ${x}]`).else(), r.if(f, () => {
            r.assign(p, !0), r.assign(y, x), v && o.mergeEvaluated(v, e.Name);
          });
        });
      }
    }
  };
  return xi.default = i, xi;
}
var Si = {}, Ho;
function fp() {
  if (Ho) return Si;
  Ho = 1, Object.defineProperty(Si, "__esModule", { value: !0 });
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
        const d = n.subschema({ keyword: "allOf", schemaProp: c }, s);
        n.ok(s), n.mergeEvaluated(d);
      });
    }
  };
  return Si.default = t, Si;
}
var Ai = {}, Jo;
function hp() {
  if (Jo) return Ai;
  Jo = 1, Object.defineProperty(Ai, "__esModule", { value: !0 });
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
      const d = o(c, "then"), p = o(c, "else");
      if (!d && !p)
        return;
      const y = s.let("valid", !0), f = s.name("_valid");
      if (h(), r.reset(), d && p) {
        const x = s.let("ifClause");
        r.setParams({ ifClause: x }), s.if(f, w("then", x), w("else", x));
      } else d ? s.if(f, w("then")) : s.if((0, e.not)(f), w("else"));
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
      function w(x, v) {
        return () => {
          const A = r.subschema({ keyword: x }, f);
          s.assign(y, f), r.mergeValidEvaluated(A, y), v ? s.assign(v, (0, e._)`${x}`) : r.setParams({ ifClause: x });
        };
      }
    }
  };
  function o(r, s) {
    const a = r.schema[s];
    return a !== void 0 && !(0, t.alwaysValidSchema)(r, a);
  }
  return Ai.default = i, Ai;
}
var Ii = {}, Ko;
function mp() {
  if (Ko) return Ii;
  Ko = 1, Object.defineProperty(Ii, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = {
    keyword: ["then", "else"],
    schemaType: ["object", "boolean"],
    code({ keyword: n, parentSchema: i, it: o }) {
      i.if === void 0 && (0, e.checkStrictMode)(o, `"${n}" without "if" is ignored`);
    }
  };
  return Ii.default = t, Ii;
}
var Qo;
function Bd() {
  if (Qo) return ui;
  Qo = 1, Object.defineProperty(ui, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ud(), t = /* @__PURE__ */ rp(), n = /* @__PURE__ */ Gd(), i = /* @__PURE__ */ sp(), o = /* @__PURE__ */ ap(), r = /* @__PURE__ */ da(), s = /* @__PURE__ */ op(), a = /* @__PURE__ */ Fd(), c = /* @__PURE__ */ cp(), d = /* @__PURE__ */ dp(), p = /* @__PURE__ */ lp(), y = /* @__PURE__ */ up(), f = /* @__PURE__ */ pp(), h = /* @__PURE__ */ fp(), w = /* @__PURE__ */ hp(), x = /* @__PURE__ */ mp();
  function v(A = !1) {
    const g = [
      // any
      p.default,
      y.default,
      f.default,
      h.default,
      w.default,
      x.default,
      // object
      s.default,
      a.default,
      r.default,
      c.default,
      d.default
    ];
    return A ? g.push(t.default, i.default) : g.push(e.default, n.default), g.push(o.default), g;
  }
  return ui.default = v, ui;
}
var qi = {}, en = {}, Wo;
function Zd() {
  if (Wo) return en;
  Wo = 1, Object.defineProperty(en, "__esModule", { value: !0 }), en.dynamicAnchor = void 0;
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ et(), n = /* @__PURE__ */ pr(), i = /* @__PURE__ */ oa(), o = {
    keyword: "$dynamicAnchor",
    schemaType: "string",
    code: (a) => r(a, a.schema)
  };
  function r(a, c) {
    const { gen: d, it: p } = a;
    p.schemaEnv.root.dynamicAnchors[c] = !0;
    const y = (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(c)}`, f = p.errSchemaPath === "#" ? p.validateName : s(a);
    d.if((0, e._)`!${y}`, () => d.assign(y, f));
  }
  en.dynamicAnchor = r;
  function s(a) {
    const { schemaEnv: c, schema: d, self: p } = a.it, { root: y, baseId: f, localRefs: h, meta: w } = c.root, { schemaId: x } = p.opts, v = new n.SchemaEnv({ schema: d, schemaId: x, root: y, baseId: f, localRefs: h, meta: w });
    return n.compileSchema.call(p, v), (0, i.getValidate)(a, v);
  }
  return en.default = o, en;
}
var tn = {}, Xo;
function Hd() {
  if (Xo) return tn;
  Xo = 1, Object.defineProperty(tn, "__esModule", { value: !0 }), tn.dynamicRef = void 0;
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ et(), n = /* @__PURE__ */ oa(), i = {
    keyword: "$dynamicRef",
    schemaType: "string",
    code: (r) => o(r, r.schema)
  };
  function o(r, s) {
    const { gen: a, keyword: c, it: d } = r;
    if (s[0] !== "#")
      throw new Error(`"${c}" only supports hash fragment reference`);
    const p = s.slice(1);
    if (d.allErrors)
      y();
    else {
      const h = a.let("valid", !1);
      y(h), r.ok(h);
    }
    function y(h) {
      if (d.schemaEnv.root.dynamicAnchors[p]) {
        const w = a.let("_v", (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(p)}`);
        a.if(w, f(w, h), f(d.validateName, h));
      } else
        f(d.validateName, h)();
    }
    function f(h, w) {
      return w ? () => a.block(() => {
        (0, n.callRef)(r, h), a.let(w, !0);
      }) : () => (0, n.callRef)(r, h);
    }
  }
  return tn.dynamicRef = o, tn.default = i, tn;
}
var Ri = {}, Yo;
function yp() {
  if (Yo) return Ri;
  Yo = 1, Object.defineProperty(Ri, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Zd(), t = /* @__PURE__ */ ie(), n = {
    keyword: "$recursiveAnchor",
    schemaType: "boolean",
    code(i) {
      i.schema ? (0, e.dynamicAnchor)(i, "") : (0, t.checkStrictMode)(i.it, "$recursiveAnchor: false is ignored");
    }
  };
  return Ri.default = n, Ri;
}
var ji = {}, ec;
function gp() {
  if (ec) return ji;
  ec = 1, Object.defineProperty(ji, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Hd(), t = {
    keyword: "$recursiveRef",
    schemaType: "string",
    code: (n) => (0, e.dynamicRef)(n, n.schema)
  };
  return ji.default = t, ji;
}
var tc;
function vp() {
  if (tc) return qi;
  tc = 1, Object.defineProperty(qi, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Zd(), t = /* @__PURE__ */ Hd(), n = /* @__PURE__ */ yp(), i = /* @__PURE__ */ gp(), o = [e.default, t.default, n.default, i.default];
  return qi.default = o, qi;
}
var $i = {}, Pi = {}, nc;
function bp() {
  if (nc) return Pi;
  nc = 1, Object.defineProperty(Pi, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ da(), t = {
    keyword: "dependentRequired",
    type: "object",
    schemaType: "object",
    error: e.error,
    code: (n) => (0, e.validatePropertyDeps)(n)
  };
  return Pi.default = t, Pi;
}
var _i = {}, ic;
function wp() {
  if (ic) return _i;
  ic = 1, Object.defineProperty(_i, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ da(), t = {
    keyword: "dependentSchemas",
    type: "object",
    schemaType: "object",
    code: (n) => (0, e.validateSchemaDeps)(n)
  };
  return _i.default = t, _i;
}
var Ti = {}, rc;
function xp() {
  if (rc) return Ti;
  rc = 1, Object.defineProperty(Ti, "__esModule", { value: !0 });
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
var sc;
function Sp() {
  if (sc) return $i;
  sc = 1, Object.defineProperty($i, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ bp(), t = /* @__PURE__ */ wp(), n = /* @__PURE__ */ xp(), i = [e.default, t.default, n.default];
  return $i.default = i, $i;
}
var Ci = {}, Ei = {}, ac;
function Ap() {
  if (ac) return Ei;
  ac = 1, Object.defineProperty(Ei, "__esModule", { value: !0 });
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
      const { gen: s, schema: a, data: c, errsCount: d, it: p } = r;
      if (!d)
        throw new Error("ajv implementation error");
      const { allErrors: y, props: f } = p;
      f instanceof e.Name ? s.if((0, e._)`${f} !== true`, () => s.forIn("key", c, (v) => s.if(w(f, v), () => h(v)))) : f !== !0 && s.forIn("key", c, (v) => f === void 0 ? h(v) : s.if(x(f, v), () => h(v))), p.props = !0, r.ok((0, e._)`${d} === ${n.default.errors}`);
      function h(v) {
        if (a === !1) {
          r.setParams({ unevaluatedProperty: v }), r.error(), y || s.break();
          return;
        }
        if (!(0, t.alwaysValidSchema)(p, a)) {
          const A = s.name("valid");
          r.subschema({
            keyword: "unevaluatedProperties",
            dataProp: v,
            dataPropType: t.Type.Str
          }, A), y || s.if((0, e.not)(A), () => s.break());
        }
      }
      function w(v, A) {
        return (0, e._)`!${v} || !${v}[${A}]`;
      }
      function x(v, A) {
        const g = [];
        for (const m in v)
          v[m] === !0 && g.push((0, e._)`${A} !== ${m}`);
        return (0, e.and)(...g);
      }
    }
  };
  return Ei.default = o, Ei;
}
var ki = {}, oc;
function Ip() {
  if (oc) return ki;
  oc = 1, Object.defineProperty(ki, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ ie(), i = {
    keyword: "unevaluatedItems",
    type: "array",
    schemaType: ["boolean", "object"],
    error: {
      message: ({ params: { len: o } }) => (0, e.str)`must NOT have more than ${o} items`,
      params: ({ params: { len: o } }) => (0, e._)`{limit: ${o}}`
    },
    code(o) {
      const { gen: r, schema: s, data: a, it: c } = o, d = c.items || 0;
      if (d === !0)
        return;
      const p = r.const("len", (0, e._)`${a}.length`);
      if (s === !1)
        o.setParams({ len: d }), o.fail((0, e._)`${p} > ${d}`);
      else if (typeof s == "object" && !(0, t.alwaysValidSchema)(c, s)) {
        const f = r.var("valid", (0, e._)`${p} <= ${d}`);
        r.if((0, e.not)(f), () => y(f, d)), o.ok(f);
      }
      c.items = !0;
      function y(f, h) {
        r.forRange("i", h, p, (w) => {
          o.subschema({ keyword: "unevaluatedItems", dataProp: w, dataPropType: t.Type.Num }, f), c.allErrors || r.if((0, e.not)(f), () => r.break());
        });
      }
    }
  };
  return ki.default = i, ki;
}
var cc;
function qp() {
  if (cc) return Ci;
  cc = 1, Object.defineProperty(Ci, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ap(), t = /* @__PURE__ */ Ip(), n = [e.default, t.default];
  return Ci.default = n, Ci;
}
var Mi = {}, Oi = {}, dc;
function Rp() {
  if (dc) return Oi;
  dc = 1, Object.defineProperty(Oi, "__esModule", { value: !0 });
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
      const { gen: r, data: s, $data: a, schema: c, schemaCode: d, it: p } = i, { opts: y, errSchemaPath: f, schemaEnv: h, self: w } = p;
      if (!y.validateFormats)
        return;
      a ? x() : v();
      function x() {
        const A = r.scopeValue("formats", {
          ref: w.formats,
          code: y.code.formats
        }), g = r.const("fDef", (0, e._)`${A}[${d}]`), m = r.let("fType"), l = r.let("format");
        r.if((0, e._)`typeof ${g} == "object" && !(${g} instanceof RegExp)`, () => r.assign(m, (0, e._)`${g}.type || "string"`).assign(l, (0, e._)`${g}.validate`), () => r.assign(m, (0, e._)`"string"`).assign(l, g)), i.fail$data((0, e.or)(u(), b()));
        function u() {
          return y.strictSchema === !1 ? e.nil : (0, e._)`${d} && !${l}`;
        }
        function b() {
          const S = h.$async ? (0, e._)`(${g}.async ? await ${l}(${s}) : ${l}(${s}))` : (0, e._)`${l}(${s})`, I = (0, e._)`(typeof ${l} == "function" ? ${S} : ${l}.test(${s}))`;
          return (0, e._)`${l} && ${l} !== true && ${m} === ${o} && !${I}`;
        }
      }
      function v() {
        const A = w.formats[c];
        if (!A) {
          u();
          return;
        }
        if (A === !0)
          return;
        const [g, m, l] = b(A);
        g === o && i.pass(S());
        function u() {
          if (y.strictSchema === !1) {
            w.logger.warn(I());
            return;
          }
          throw new Error(I());
          function I() {
            return `unknown format "${c}" ignored in schema at path "${f}"`;
          }
        }
        function b(I) {
          const P = I instanceof RegExp ? (0, e.regexpCode)(I) : y.code.formats ? (0, e._)`${y.code.formats}${(0, e.getProperty)(c)}` : void 0, R = r.scopeValue("formats", { key: c, ref: I, code: P });
          return typeof I == "object" && !(I instanceof RegExp) ? [I.type || "string", I.validate, (0, e._)`${R}.validate`] : ["string", I, R];
        }
        function S() {
          if (typeof A == "object" && !(A instanceof RegExp) && A.async) {
            if (!h.$async)
              throw new Error("async format in sync schema");
            return (0, e._)`await ${l}(${s})`;
          }
          return typeof m == "function" ? (0, e._)`${l}(${s})` : (0, e._)`${l}.test(${s})`;
        }
      }
    }
  };
  return Oi.default = n, Oi;
}
var lc;
function Jd() {
  if (lc) return Mi;
  lc = 1, Object.defineProperty(Mi, "__esModule", { value: !0 });
  const t = [(/* @__PURE__ */ Rp()).default];
  return Mi.default = t, Mi;
}
var Ut = {}, uc;
function Kd() {
  return uc || (uc = 1, Object.defineProperty(Ut, "__esModule", { value: !0 }), Ut.contentVocabulary = Ut.metadataVocabulary = void 0, Ut.metadataVocabulary = [
    "title",
    "description",
    "default",
    "deprecated",
    "readOnly",
    "writeOnly",
    "examples"
  ], Ut.contentVocabulary = [
    "contentMediaType",
    "contentEncoding",
    "contentSchema"
  ]), Ut;
}
var pc;
function jp() {
  if (pc) return Kn;
  pc = 1, Object.defineProperty(Kn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ zd(), t = /* @__PURE__ */ Vd(), n = /* @__PURE__ */ Bd(), i = /* @__PURE__ */ vp(), o = /* @__PURE__ */ Sp(), r = /* @__PURE__ */ qp(), s = /* @__PURE__ */ Jd(), a = /* @__PURE__ */ Kd(), c = [
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
var Li = {}, gn = {}, fc;
function $p() {
  if (fc) return gn;
  fc = 1, Object.defineProperty(gn, "__esModule", { value: !0 }), gn.DiscrError = void 0;
  var e;
  return (function(t) {
    t.Tag = "tag", t.Mapping = "mapping";
  })(e || (gn.DiscrError = e = {})), gn;
}
var hc;
function Qd() {
  if (hc) return Li;
  hc = 1, Object.defineProperty(Li, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ $p(), n = /* @__PURE__ */ pr(), i = /* @__PURE__ */ kn(), o = /* @__PURE__ */ ie(), s = {
    keyword: "discriminator",
    type: "object",
    schemaType: "object",
    error: {
      message: ({ params: { discrError: a, tagName: c } }) => a === t.DiscrError.Tag ? `tag "${c}" must be string` : `value of tag "${c}" must be in oneOf`,
      params: ({ params: { discrError: a, tag: c, tagName: d } }) => (0, e._)`{error: ${a}, tag: ${d}, tagValue: ${c}}`
    },
    code(a) {
      const { gen: c, data: d, schema: p, parentSchema: y, it: f } = a, { oneOf: h } = y;
      if (!f.opts.discriminator)
        throw new Error("discriminator: requires discriminator option");
      const w = p.propertyName;
      if (typeof w != "string")
        throw new Error("discriminator: requires propertyName");
      if (p.mapping)
        throw new Error("discriminator: mapping is not supported");
      if (!h)
        throw new Error("discriminator: requires oneOf keyword");
      const x = c.let("valid", !1), v = c.const("tag", (0, e._)`${d}${(0, e.getProperty)(w)}`);
      c.if((0, e._)`typeof ${v} == "string"`, () => A(), () => a.error(!1, { discrError: t.DiscrError.Tag, tag: v, tagName: w })), a.ok(x);
      function A() {
        const l = m();
        c.if(!1);
        for (const u in l)
          c.elseIf((0, e._)`${v} === ${u}`), c.assign(x, g(l[u]));
        c.else(), a.error(!1, { discrError: t.DiscrError.Mapping, tag: v, tagName: w }), c.endIf();
      }
      function g(l) {
        const u = c.name("valid"), b = a.subschema({ keyword: "oneOf", schemaProp: l }, u);
        return a.mergeEvaluated(b, e.Name), u;
      }
      function m() {
        var l;
        const u = {}, b = I(y);
        let S = !0;
        for (let E = 0; E < h.length; E++) {
          let k = h[E];
          if (k?.$ref && !(0, o.schemaHasRulesButRef)(k, f.self.RULES)) {
            const j = k.$ref;
            if (k = n.resolveRef.call(f.self, f.schemaEnv.root, f.baseId, j), k instanceof n.SchemaEnv && (k = k.schema), k === void 0)
              throw new i.default(f.opts.uriResolver, f.baseId, j);
          }
          const M = (l = k?.properties) === null || l === void 0 ? void 0 : l[w];
          if (typeof M != "object")
            throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${w}"`);
          S = S && (b || I(k)), P(M, E);
        }
        if (!S)
          throw new Error(`discriminator: "${w}" must be required`);
        return u;
        function I({ required: E }) {
          return Array.isArray(E) && E.includes(w);
        }
        function P(E, k) {
          if (E.const)
            R(E.const, k);
          else if (E.enum)
            for (const M of E.enum)
              R(M, k);
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
const Pp = "https://json-schema.org/draft/2020-12/schema", _p = "https://json-schema.org/draft/2020-12/schema", Tp = { "https://json-schema.org/draft/2020-12/vocab/core": !0, "https://json-schema.org/draft/2020-12/vocab/applicator": !0, "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0, "https://json-schema.org/draft/2020-12/vocab/validation": !0, "https://json-schema.org/draft/2020-12/vocab/meta-data": !0, "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0, "https://json-schema.org/draft/2020-12/vocab/content": !0 }, Cp = "meta", Ep = "Core and Validation specifications meta-schema", kp = [{ $ref: "meta/core" }, { $ref: "meta/applicator" }, { $ref: "meta/unevaluated" }, { $ref: "meta/validation" }, { $ref: "meta/meta-data" }, { $ref: "meta/format-annotation" }, { $ref: "meta/content" }], Mp = ["object", "boolean"], Op = "This meta-schema also defines keywords that have appeared in previous drafts in order to prevent incompatible extensions as they remain in common use.", Lp = { definitions: { $comment: '"definitions" has been replaced by "$defs".', type: "object", additionalProperties: { $dynamicRef: "#meta" }, deprecated: !0, default: {} }, dependencies: { $comment: '"dependencies" has been split and replaced by "dependentSchemas" and "dependentRequired" in order to serve their differing semantics.', type: "object", additionalProperties: { anyOf: [{ $dynamicRef: "#meta" }, { $ref: "meta/validation#/$defs/stringArray" }] }, deprecated: !0, default: {} }, $recursiveAnchor: { $comment: '"$recursiveAnchor" has been replaced by "$dynamicAnchor".', $ref: "meta/core#/$defs/anchorString", deprecated: !0 }, $recursiveRef: { $comment: '"$recursiveRef" has been replaced by "$dynamicRef".', $ref: "meta/core#/$defs/uriReferenceString", deprecated: !0 } }, Np = {
  $schema: Pp,
  $id: _p,
  $vocabulary: Tp,
  $dynamicAnchor: Cp,
  title: Ep,
  allOf: kp,
  type: Mp,
  $comment: Op,
  properties: Lp
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
}, wf = "https://json-schema.org/draft/2020-12/schema", xf = "https://json-schema.org/draft/2020-12/meta/format-annotation", Sf = { "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0 }, Af = "meta", If = "Format vocabulary meta-schema for annotation results", qf = ["object", "boolean"], Rf = { format: { type: "string" } }, jf = {
  $schema: wf,
  $id: xf,
  $vocabulary: Sf,
  $dynamicAnchor: Af,
  title: If,
  type: qf,
  properties: Rf
}, $f = "https://json-schema.org/draft/2020-12/schema", Pf = "https://json-schema.org/draft/2020-12/meta/meta-data", _f = { "https://json-schema.org/draft/2020-12/vocab/meta-data": !0 }, Tf = "meta", Cf = "Meta-data vocabulary meta-schema", Ef = ["object", "boolean"], kf = { title: { type: "string" }, description: { type: "string" }, default: !0, deprecated: { type: "boolean", default: !1 }, readOnly: { type: "boolean", default: !1 }, writeOnly: { type: "boolean", default: !1 }, examples: { type: "array", items: !0 } }, Mf = {
  $schema: $f,
  $id: Pf,
  $vocabulary: _f,
  $dynamicAnchor: Tf,
  title: Cf,
  type: Ef,
  properties: kf
}, Of = "https://json-schema.org/draft/2020-12/schema", Lf = "https://json-schema.org/draft/2020-12/meta/validation", Nf = { "https://json-schema.org/draft/2020-12/vocab/validation": !0 }, Df = "meta", zf = "Validation vocabulary meta-schema", Vf = ["object", "boolean"], Uf = { type: { anyOf: [{ $ref: "#/$defs/simpleTypes" }, { type: "array", items: { $ref: "#/$defs/simpleTypes" }, minItems: 1, uniqueItems: !0 }] }, const: !0, enum: { type: "array", items: !0 }, multipleOf: { type: "number", exclusiveMinimum: 0 }, maximum: { type: "number" }, exclusiveMaximum: { type: "number" }, minimum: { type: "number" }, exclusiveMinimum: { type: "number" }, maxLength: { $ref: "#/$defs/nonNegativeInteger" }, minLength: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, pattern: { type: "string", format: "regex" }, maxItems: { $ref: "#/$defs/nonNegativeInteger" }, minItems: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, uniqueItems: { type: "boolean", default: !1 }, maxContains: { $ref: "#/$defs/nonNegativeInteger" }, minContains: { $ref: "#/$defs/nonNegativeInteger", default: 1 }, maxProperties: { $ref: "#/$defs/nonNegativeInteger" }, minProperties: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, required: { $ref: "#/$defs/stringArray" }, dependentRequired: { type: "object", additionalProperties: { $ref: "#/$defs/stringArray" } } }, Gf = { nonNegativeInteger: { type: "integer", minimum: 0 }, nonNegativeIntegerDefault0: { $ref: "#/$defs/nonNegativeInteger", default: 0 }, simpleTypes: { enum: ["array", "boolean", "integer", "null", "number", "object", "string"] }, stringArray: { type: "array", items: { type: "string" }, uniqueItems: !0, default: [] } }, Ff = {
  $schema: Of,
  $id: Lf,
  $vocabulary: Nf,
  $dynamicAnchor: Df,
  title: zf,
  type: Vf,
  properties: Uf,
  $defs: Gf
};
var mc;
function Bf() {
  if (mc) return Ni;
  mc = 1, Object.defineProperty(Ni, "__esModule", { value: !0 });
  const e = Np, t = Hp, n = tf, i = lf, o = bf, r = jf, s = Mf, a = Ff, c = ["/properties"];
  function d(p) {
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
  return Ni.default = d, Ni;
}
var yc;
function Zf() {
  return yc || (yc = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.MissingRefError = t.ValidationError = t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = t.Ajv2020 = void 0;
    const n = /* @__PURE__ */ Dd(), i = /* @__PURE__ */ jp(), o = /* @__PURE__ */ Qd(), r = /* @__PURE__ */ Bf(), s = "https://json-schema.org/draft/2020-12/schema";
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
    var d = /* @__PURE__ */ te();
    Object.defineProperty(t, "_", { enumerable: !0, get: function() {
      return d._;
    } }), Object.defineProperty(t, "str", { enumerable: !0, get: function() {
      return d.str;
    } }), Object.defineProperty(t, "stringify", { enumerable: !0, get: function() {
      return d.stringify;
    } }), Object.defineProperty(t, "nil", { enumerable: !0, get: function() {
      return d.nil;
    } }), Object.defineProperty(t, "Name", { enumerable: !0, get: function() {
      return d.Name;
    } }), Object.defineProperty(t, "CodeGen", { enumerable: !0, get: function() {
      return d.CodeGen;
    } });
    var p = /* @__PURE__ */ ur();
    Object.defineProperty(t, "ValidationError", { enumerable: !0, get: function() {
      return p.default;
    } });
    var y = /* @__PURE__ */ kn();
    Object.defineProperty(t, "MissingRefError", { enumerable: !0, get: function() {
      return y.default;
    } });
  })(Fn, Fn.exports)), Fn.exports;
}
var Hf = /* @__PURE__ */ Zf();
const Jf = /* @__PURE__ */ aa(Hf);
var Di = { exports: {} }, Ur = {}, gc;
function Kf() {
  return gc || (gc = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.formatNames = e.fastFormats = e.fullFormats = void 0;
    function t(E, k) {
      return { validate: E, compare: k };
    }
    e.fullFormats = {
      // date: http://tools.ietf.org/html/rfc3339#section-5.6
      date: t(r, s),
      // date-time: http://tools.ietf.org/html/rfc3339#section-5.6
      time: t(c(!0), d),
      "date-time": t(f(!0), h),
      "iso-time": t(c(), p),
      "iso-date-time": t(f(), w),
      // duration: https://tools.ietf.org/html/rfc3339#appendix-A
      duration: /^P(?!$)((\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+S)?)?|(\d+W)?)$/,
      uri: A,
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
      int32: { type: "number", validate: b },
      // signed 64 bit integer
      int64: { type: "number", validate: S },
      // C-type float
      float: { type: "number", validate: I },
      // C-type double
      double: { type: "number", validate: I },
      // hint to the UI to hide input strings
      password: !0,
      // unchecked string payload
      binary: !0
    }, e.fastFormats = {
      ...e.fullFormats,
      date: t(/^\d\d\d\d-[0-1]\d-[0-3]\d$/, s),
      time: t(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, d),
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
      const M = +k[1], j = +k[2], N = +k[3];
      return j >= 1 && j <= 12 && N >= 1 && N <= (j === 2 && n(M) ? 29 : o[j]);
    }
    function s(E, k) {
      if (E && k)
        return E > k ? 1 : E < k ? -1 : 0;
    }
    const a = /^(\d\d):(\d\d):(\d\d(?:\.\d+)?)(z|([+-])(\d\d)(?::?(\d\d))?)?$/i;
    function c(E) {
      return function(M) {
        const j = a.exec(M);
        if (!j)
          return !1;
        const N = +j[1], _ = +j[2], G = +j[3], L = j[4], B = j[5] === "-" ? -1 : 1, T = +(j[6] || 0), O = +(j[7] || 0);
        if (T > 23 || O > 59 || E && !L)
          return !1;
        if (N <= 23 && _ <= 59 && G < 60)
          return !0;
        const V = _ - O * B, D = N - T * B - (V < 0 ? 1 : 0);
        return (D === 23 || D === -1) && (V === 59 || V === -1) && G < 61;
      };
    }
    function d(E, k) {
      if (!(E && k))
        return;
      const M = (/* @__PURE__ */ new Date("2020-01-01T" + E)).valueOf(), j = (/* @__PURE__ */ new Date("2020-01-01T" + k)).valueOf();
      if (M && j)
        return M - j;
    }
    function p(E, k) {
      if (!(E && k))
        return;
      const M = a.exec(E), j = a.exec(k);
      if (M && j)
        return E = M[1] + M[2] + M[3], k = j[1] + j[2] + j[3], E > k ? 1 : E < k ? -1 : 0;
    }
    const y = /t|\s/i;
    function f(E) {
      const k = c(E);
      return function(j) {
        const N = j.split(y);
        return N.length === 2 && r(N[0]) && k(N[1]);
      };
    }
    function h(E, k) {
      if (!(E && k))
        return;
      const M = new Date(E).valueOf(), j = new Date(k).valueOf();
      if (M && j)
        return M - j;
    }
    function w(E, k) {
      if (!(E && k))
        return;
      const [M, j] = E.split(y), [N, _] = k.split(y), G = s(M, N);
      if (G !== void 0)
        return G || d(j, _);
    }
    const x = /\/|:/, v = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
    function A(E) {
      return x.test(E) && v.test(E);
    }
    const g = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/gm;
    function m(E) {
      return g.lastIndex = 0, g.test(E);
    }
    const l = -2147483648, u = 2 ** 31 - 1;
    function b(E) {
      return Number.isInteger(E) && E <= u && E >= l;
    }
    function S(E) {
      return Number.isInteger(E);
    }
    function I() {
      return !0;
    }
    const P = /[^\\]\\Z/;
    function R(E) {
      if (P.test(E))
        return !1;
      try {
        return new RegExp(E), !0;
      } catch {
        return !1;
      }
    }
  })(Ur)), Ur;
}
var Gr = {}, zi = { exports: {} }, Vi = {}, vc;
function Qf() {
  if (vc) return Vi;
  vc = 1, Object.defineProperty(Vi, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ zd(), t = /* @__PURE__ */ Vd(), n = /* @__PURE__ */ Bd(), i = /* @__PURE__ */ Jd(), o = /* @__PURE__ */ Kd(), r = [
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
var bc;
function rh() {
  return bc || (bc = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.MissingRefError = t.ValidationError = t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = t.Ajv = void 0;
    const n = /* @__PURE__ */ Dd(), i = /* @__PURE__ */ Qf(), o = /* @__PURE__ */ Qd(), r = ih, s = ["/properties"], a = "http://json-schema.org/draft-07/schema";
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
    var d = /* @__PURE__ */ En();
    Object.defineProperty(t, "KeywordCxt", { enumerable: !0, get: function() {
      return d.KeywordCxt;
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
    var y = /* @__PURE__ */ ur();
    Object.defineProperty(t, "ValidationError", { enumerable: !0, get: function() {
      return y.default;
    } });
    var f = /* @__PURE__ */ kn();
    Object.defineProperty(t, "MissingRefError", { enumerable: !0, get: function() {
      return f.default;
    } });
  })(zi, zi.exports)), zi.exports;
}
var wc;
function sh() {
  return wc || (wc = 1, (function(e) {
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
        const { gen: c, data: d, schemaCode: p, keyword: y, it: f } = a, { opts: h, self: w } = f;
        if (!h.validateFormats)
          return;
        const x = new t.KeywordCxt(f, w.RULES.all.format.definition, "format");
        x.$data ? v() : A();
        function v() {
          const m = c.scopeValue("formats", {
            ref: w.formats,
            code: h.code.formats
          }), l = c.const("fmt", (0, n._)`${m}[${x.schemaCode}]`);
          a.fail$data((0, n.or)((0, n._)`typeof ${l} != "object"`, (0, n._)`${l} instanceof RegExp`, (0, n._)`typeof ${l}.compare != "function"`, g(l)));
        }
        function A() {
          const m = x.schema, l = w.formats[m];
          if (!l || l === !0)
            return;
          if (typeof l != "object" || l instanceof RegExp || typeof l.compare != "function")
            throw new Error(`"${y}": format "${m}" does not define "compare" function`);
          const u = c.scopeValue("formats", {
            key: m,
            ref: l,
            code: h.code.formats ? (0, n._)`${h.code.formats}${(0, n.getProperty)(m)}` : void 0
          });
          a.fail$data(g(u));
        }
        function g(m) {
          return (0, n._)`${m}.compare(${d}, ${p}) ${o[y].fail} 0`;
        }
      },
      dependencies: ["format"]
    };
    const s = (a) => (a.addKeyword(e.formatLimitDefinition), a);
    e.default = s;
  })(Gr)), Gr;
}
var xc;
function ah() {
  return xc || (xc = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    const n = Kf(), i = sh(), o = /* @__PURE__ */ te(), r = new o.Name("fullFormats"), s = new o.Name("fastFormats"), a = (d, p = { keywords: !0 }) => {
      if (Array.isArray(p))
        return c(d, p, n.fullFormats, r), d;
      const [y, f] = p.mode === "fast" ? [n.fastFormats, s] : [n.fullFormats, r], h = p.formats || n.formatNames;
      return c(d, h, y, f), p.keywords && (0, i.default)(d), d;
    };
    a.get = (d, p = "full") => {
      const f = (p === "fast" ? n.fastFormats : n.fullFormats)[d];
      if (!f)
        throw new Error(`Unknown format "${d}"`);
      return f;
    };
    function c(d, p, y, f) {
      var h, w;
      (h = (w = d.opts.code).formats) !== null && h !== void 0 || (w.formats = (0, o._)`require("ajv-formats/dist/formats").${f}`);
      for (const x of p)
        d.addFormat(x, y[x]);
    }
    e.exports = t = a, Object.defineProperty(t, "__esModule", { value: !0 }), t.default = a;
  })(Di, Di.exports)), Di.exports;
}
var oh = ah();
const ch = /* @__PURE__ */ aa(oh);
/*! noble-ed25519 - MIT License (c) 2019 Paul Miller (paulmillr.com) */
const dh = {
  p: 0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffedn,
  n: 0x1000000000000000000000000000000014def9dea2f79cd65812631a5cf5d3edn,
  a: 0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffecn,
  d: 0x52036cee2b6ffe738cc740797779e89800700a4d4141d8ab75eb4dca135978a3n,
  Gx: 0x216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51an,
  Gy: 0x6666666666666666666666666666666666666666666666666666666666666658n
}, { p: qe, n: Zi, Gx: Sc, Gy: Ac, a: Fr, d: Br } = dh, lh = 8n, Et = 32, $n = 64, Fe = (e = "") => {
  throw new Error(e);
}, uh = (e) => typeof e == "bigint", Wd = (e) => typeof e == "string", ph = (e) => e instanceof Uint8Array || ArrayBuffer.isView(e) && e.constructor.name === "Uint8Array", Jt = (e, t) => !ph(e) || typeof t == "number" && t > 0 && e.length !== t ? Fe("Uint8Array expected") : e, fr = (e) => new Uint8Array(e), la = (e) => Uint8Array.from(e), Xd = (e, t) => e.toString(16).padStart(t, "0"), ua = (e) => Array.from(Jt(e)).map((t) => Xd(t, 2)).join(""), bt = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 }, Ic = (e) => {
  if (e >= bt._0 && e <= bt._9)
    return e - bt._0;
  if (e >= bt.A && e <= bt.F)
    return e - (bt.A - 10);
  if (e >= bt.a && e <= bt.f)
    return e - (bt.a - 10);
}, pa = (e) => {
  const t = "hex invalid";
  if (!Wd(e))
    return Fe(t);
  const n = e.length, i = n / 2;
  if (n % 2)
    return Fe(t);
  const o = fr(i);
  for (let r = 0, s = 0; r < i; r++, s += 2) {
    const a = Ic(e.charCodeAt(s)), c = Ic(e.charCodeAt(s + 1));
    if (a === void 0 || c === void 0)
      return Fe(t);
    o[r] = a * 16 + c;
  }
  return o;
}, sn = (e, t) => Jt(Wd(e) ? pa(e) : la(Jt(e)), t), Yd = () => globalThis?.crypto, fh = () => Yd()?.subtle ?? Fe("crypto.subtle must be defined"), Pn = (...e) => {
  const t = fr(e.reduce((i, o) => i + Jt(o).length, 0));
  let n = 0;
  return e.forEach((i) => {
    t.set(i, n), n += i.length;
  }), t;
}, hh = (e = Et) => Yd().getRandomValues(fr(e)), er = BigInt, Ft = (e, t, n, i = "bad number: out of range") => uh(e) && t <= e && e < n ? e : Fe(i), Y = (e, t = qe) => {
  const n = e % t;
  return n >= 0n ? n : t + n;
}, el = (e) => Y(e, Zi), tl = (e, t) => {
  (e === 0n || t <= 0n) && Fe("no inverse n=" + e + " mod=" + t);
  let n = Y(e, t), i = t, o = 0n, r = 1n;
  for (; n !== 0n; ) {
    const s = i / n, a = i % n, c = o - r * s;
    i = n, n = a, o = r, r = c;
  }
  return i === 1n ? Y(o, t) : Fe("no inverse");
}, qc = (e) => e instanceof At ? e : Fe("Point expected"), zs = 2n ** 256n, ot = class ot {
  constructor(t, n, i, o) {
    ht(this, "ex");
    ht(this, "ey");
    ht(this, "ez");
    ht(this, "et");
    const r = zs;
    this.ex = Ft(t, 0n, r), this.ey = Ft(n, 0n, r), this.ez = Ft(i, 1n, r), this.et = Ft(o, 0n, r), Object.freeze(this);
  }
  static fromAffine(t) {
    return new ot(t.x, t.y, 1n, Y(t.x * t.y));
  }
  /** RFC8032 5.1.3: Uint8Array to Point. */
  static fromBytes(t, n = !1) {
    const i = Br, o = la(Jt(t, Et)), r = t[31];
    o[31] = r & -129;
    const s = fa(o);
    Ft(s, 0n, n ? zs : qe);
    const c = Y(s * s), d = Y(c - 1n), p = Y(i * c + 1n);
    let { isValid: y, value: f } = yh(d, p);
    y || Fe("bad point: y not sqrt");
    const h = (f & 1n) === 1n, w = (r & 128) !== 0;
    return !n && f === 0n && w && Fe("bad point: x==0, isLastByteOdd"), w !== h && (f = Y(-f)), new ot(f, s, 1n, Y(f * s));
  }
  /** Checks if the point is valid and on-curve. */
  assertValidity() {
    const t = Fr, n = Br, i = this;
    if (i.is0())
      throw new Error("bad point: ZERO");
    const { ex: o, ey: r, ez: s, et: a } = i, c = Y(o * o), d = Y(r * r), p = Y(s * s), y = Y(p * p), f = Y(c * t), h = Y(p * Y(f + d)), w = Y(y + Y(n * Y(c * d)));
    if (h !== w)
      throw new Error("bad point: equation left != right (1)");
    const x = Y(o * r), v = Y(s * a);
    if (x !== v)
      throw new Error("bad point: equation left != right (2)");
    return this;
  }
  /** Equality check: compare points P&Q. */
  equals(t) {
    const { ex: n, ey: i, ez: o } = this, { ex: r, ey: s, ez: a } = qc(t), c = Y(n * a), d = Y(r * o), p = Y(i * a), y = Y(s * o);
    return c === d && p === y;
  }
  is0() {
    return this.equals(rn);
  }
  /** Flip point over y coordinate. */
  negate() {
    return new ot(Y(-this.ex), this.ey, this.ez, Y(-this.et));
  }
  /** Point doubling. Complete formula. Cost: `4M + 4S + 1*a + 6add + 1*2`. */
  double() {
    const { ex: t, ey: n, ez: i } = this, o = Fr, r = Y(t * t), s = Y(n * n), a = Y(2n * Y(i * i)), c = Y(o * r), d = t + n, p = Y(Y(d * d) - r - s), y = c + s, f = y - a, h = c - s, w = Y(p * f), x = Y(y * h), v = Y(p * h), A = Y(f * y);
    return new ot(w, x, A, v);
  }
  /** Point addition. Complete formula. Cost: `8M + 1*k + 8add + 1*2`. */
  add(t) {
    const { ex: n, ey: i, ez: o, et: r } = this, { ex: s, ey: a, ez: c, et: d } = qc(t), p = Fr, y = Br, f = Y(n * s), h = Y(i * a), w = Y(r * y * d), x = Y(o * c), v = Y((n + i) * (s + a) - f - h), A = Y(x - w), g = Y(x + w), m = Y(h - p * f), l = Y(v * A), u = Y(g * m), b = Y(v * m), S = Y(A * g);
    return new ot(l, u, S, b);
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
      return rn;
    if (Ft(t, 1n, Zi), t === 1n)
      return this;
    if (this.equals(kt))
      return Rh(t).p;
    let i = rn, o = kt;
    for (let r = this; t > 0n; r = r.double(), t >>= 1n)
      t & 1n ? i = i.add(r) : n && (o = o.add(r));
    return i;
  }
  /** Convert point to 2d xy affine point. (X, Y, Z) ∋ (x=X/Z, y=Y/Z) */
  toAffine() {
    const { ex: t, ey: n, ez: i } = this;
    if (this.equals(rn))
      return { x: 0n, y: 1n };
    const o = tl(i, qe);
    return Y(i * o) !== 1n && Fe("invalid inverse"), { x: Y(t * o), y: Y(n * o) };
  }
  toBytes() {
    const { x: t, y: n } = this.assertValidity().toAffine(), i = nl(n);
    return i[31] |= t & 1n ? 128 : 0, i;
  }
  toHex() {
    return ua(this.toBytes());
  }
  // encode to hex string
  clearCofactor() {
    return this.multiply(er(lh), !1);
  }
  isSmallOrder() {
    return this.clearCofactor().is0();
  }
  isTorsionFree() {
    let t = this.multiply(Zi / 2n, !1).double();
    return Zi % 2n && (t = t.add(this)), t.is0();
  }
  static fromHex(t, n) {
    return ot.fromBytes(sn(t), n);
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
ht(ot, "BASE"), ht(ot, "ZERO");
let At = ot;
const kt = new At(Sc, Ac, 1n, Y(Sc * Ac)), rn = new At(0n, 1n, 1n, 0n);
At.BASE = kt;
At.ZERO = rn;
const nl = (e) => pa(Xd(Ft(e, 0n, zs), $n)).reverse(), fa = (e) => er("0x" + ua(la(Jt(e)).reverse())), st = (e, t) => {
  let n = e;
  for (; t-- > 0n; )
    n *= n, n %= qe;
  return n;
}, mh = (e) => {
  const n = e * e % qe * e % qe, i = st(n, 2n) * n % qe, o = st(i, 1n) * e % qe, r = st(o, 5n) * o % qe, s = st(r, 10n) * r % qe, a = st(s, 20n) * s % qe, c = st(a, 40n) * a % qe, d = st(c, 80n) * c % qe, p = st(d, 80n) * c % qe, y = st(p, 10n) * r % qe;
  return { pow_p_5_8: st(y, 2n) * e % qe, b2: n };
}, Rc = 0x2b8324804fc1df0b2b4d00993dfbd7a72f431806ad2fe478c4ee1b274a0ea0b0n, yh = (e, t) => {
  const n = Y(t * t * t), i = Y(n * n * t), o = mh(e * i).pow_p_5_8;
  let r = Y(e * n * o);
  const s = Y(t * r * r), a = r, c = Y(r * Rc), d = s === e, p = s === Y(-e), y = s === Y(-e * Rc);
  return d && (r = a), (p || y) && (r = c), (Y(r) & 1n) === 1n && (r = Y(-r)), { isValid: d || p, value: r };
}, tr = (e) => el(fa(e)), ha = (...e) => Ah.sha512Async(...e), gh = (e) => {
  const t = e.slice(0, Et);
  t[0] &= 248, t[31] &= 127, t[31] |= 64;
  const n = e.slice(Et, $n), i = tr(t), o = kt.multiply(i), r = o.toBytes();
  return { head: t, prefix: n, scalar: i, point: o, pointBytes: r };
}, vh = (e) => ha(sn(e, Et)).then(gh), il = (e) => ha(e.hashable).then(e.finish), bh = (e, t, n) => {
  const { pointBytes: i, scalar: o } = e, r = tr(t), s = kt.multiply(r).toBytes();
  return { hashable: Pn(s, i, n), finish: (d) => {
    const p = el(r + tr(d) * o);
    return Jt(Pn(s, nl(p)), $n);
  } };
}, wh = async (e, t) => {
  const n = sn(e), i = await vh(t), o = await ha(i.prefix, n);
  return il(bh(i, o, n));
}, rl = { zip215: !0 }, xh = (e, t, n, i = rl) => {
  e = sn(e, $n), t = sn(t), n = sn(n, Et);
  const { zip215: o } = i;
  let r, s, a, c, d = Uint8Array.of();
  try {
    r = At.fromHex(n, o), s = At.fromHex(e.slice(0, Et), o), a = fa(e.slice(Et, $n)), c = kt.multiply(a, !1), d = Pn(s.toBytes(), r.toBytes(), t);
  } catch {
  }
  return { hashable: d, finish: (y) => {
    if (c == null || !o && r.isSmallOrder())
      return !1;
    const f = tr(y);
    return s.add(r.multiply(f, !1)).add(c.negate()).clearCofactor().is0();
  } };
}, Sh = async (e, t, n, i = rl) => il(xh(e, t, n, i)), Ah = {
  sha512Async: async (...e) => {
    const t = fh(), n = Pn(...e);
    return fr(await t.digest("SHA-512", n.buffer));
  },
  sha512Sync: void 0,
  bytesToHex: ua,
  hexToBytes: pa,
  concatBytes: Pn,
  mod: Y,
  invert: tl,
  randomBytes: hh
}, nr = 8, Ih = 256, sl = Math.ceil(Ih / nr) + 1, Vs = 2 ** (nr - 1), qh = () => {
  const e = [];
  let t = kt, n = t;
  for (let i = 0; i < sl; i++) {
    n = t, e.push(n);
    for (let o = 1; o < Vs; o++)
      n = n.add(t), e.push(n);
    t = n.double();
  }
  return e;
};
let jc;
const $c = (e, t) => {
  const n = t.negate();
  return e ? n : t;
}, Rh = (e) => {
  const t = jc || (jc = qh());
  let n = rn, i = kt;
  const o = 2 ** nr, r = o, s = er(o - 1), a = er(nr);
  for (let c = 0; c < sl; c++) {
    let d = Number(e & s);
    e >>= a, d > Vs && (d -= r, e += 1n);
    const p = c * Vs, y = p, f = p + Math.abs(d) - 1, h = c % 2 !== 0, w = d < 0;
    d === 0 ? i = i.add($c(h, t[y])) : n = n.add($c(w, t[f]));
  }
  return { p: n, f: i };
};
var Zr = {}, Hr, Pc;
function ma() {
  return Pc || (Pc = 1, Hr = class al {
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
      return new al(t, new Map(n), i);
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
  }), Hr;
}
var Jr = {}, _c;
function jh() {
  return _c || (_c = 1, (function(e, t) {
    if (e.setImmediate)
      return;
    var n = 1, i = {}, o = !1, r = e.document, s;
    function a(g) {
      typeof g != "function" && (g = new Function("" + g));
      for (var m = new Array(arguments.length - 1), l = 0; l < m.length; l++)
        m[l] = arguments[l + 1];
      var u = { callback: g, args: m };
      return i[n] = u, s(n), n++;
    }
    function c(g) {
      delete i[g];
    }
    function d(g) {
      var m = g.callback, l = g.args;
      switch (l.length) {
        case 0:
          m();
          break;
        case 1:
          m(l[0]);
          break;
        case 2:
          m(l[0], l[1]);
          break;
        case 3:
          m(l[0], l[1], l[2]);
          break;
        default:
          m.apply(t, l);
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
            d(m);
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
      var g = "setImmediate$" + Math.random() + "$", m = function(l) {
        l.source === e && typeof l.data == "string" && l.data.indexOf(g) === 0 && p(+l.data.slice(g.length));
      };
      e.addEventListener ? e.addEventListener("message", m, !1) : e.attachEvent("onmessage", m), s = function(l) {
        e.postMessage(g + l, "*");
      };
    }
    function w() {
      var g = new MessageChannel();
      g.port1.onmessage = function(m) {
        var l = m.data;
        p(l);
      }, s = function(m) {
        g.port2.postMessage(m);
      };
    }
    function x() {
      var g = r.documentElement;
      s = function(m) {
        var l = r.createElement("script");
        l.onreadystatechange = function() {
          p(m), l.onreadystatechange = null, g.removeChild(l), l = null;
        }, g.appendChild(l);
      };
    }
    function v() {
      s = function(g) {
        setTimeout(p, 0, g);
      };
    }
    var A = Object.getPrototypeOf && Object.getPrototypeOf(e);
    A = A && A.setTimeout ? A : e, {}.toString.call(e.process) === "[object process]" ? y() : f() ? h() : e.MessageChannel ? w() : r && "onreadystatechange" in r.createElement("script") ? x() : v(), A.setImmediate = a, A.clearImmediate = c;
  })(typeof self > "u" ? typeof Ga > "u" ? Jr : Ga : self)), Jr;
}
/*!
 * Copyright (c) 2016-2022 Digital Bazaar, Inc. All rights reserved.
 */
var Kr, Tc;
function hr() {
  if (Tc) return Kr;
  Tc = 1, jh();
  const e = self.crypto || self.msCrypto;
  return Kr = class {
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
  }, Kr;
}
/*!
 * Copyright (c) 2016-2022 Digital Bazaar, Inc. All rights reserved.
 */
var Qr, Cc;
function ol() {
  return Cc || (Cc = 1, Qr = class {
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
        const c = t[a], d = n.get(c);
        (o === null || c > o) && (d && a > 0 && c > t[a - 1] || !d && a < s - 1 && c > t[a + 1]) && (o = c, r = a);
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
  }), Qr;
}
/*!
 * Copyright (c) 2016-2022 Digital Bazaar, Inc. All rights reserved.
 */
var Wr, Ec;
function ya() {
  if (Ec) return Wr;
  Ec = 1;
  const t = "http://www.w3.org/1999/02/22-rdf-syntax-ns#" + "langString", n = "http://www.w3.org/2001/XMLSchema#string", i = "NamedNode", o = "BlankNode", r = "Literal", s = "DefaultGraph", a = {};
  (() => {
    const h = "(?:<([^:]+:[^>]*)>)", x = "A-Za-zÀ-ÖØ-öø-˿Ͱ-ͽͿ-῿‌-‍⁰-↏Ⰰ-⿯、-퟿豈-﷏ﷰ-�" + "_", v = x + "0-9-·̀-ͯ‿-⁀", g = "(_:(?:[" + x + "0-9])(?:(?:[" + v + ".])*(?:[" + v + "]))?)", m = '"([^"\\\\]*(?:\\\\.[^"\\\\]*)*)"', l = "(?:\\^\\^" + h + ")", b = "(?:" + m + "(?:" + l + "|" + "(?:@([a-zA-Z]+(?:-[a-zA-Z0-9]+)*))" + ")?)", S = "[ \\t]+", I = "[ \\t]*", P = "(?:" + h + "|" + g + ")" + S, R = h + S, E = "(?:" + h + "|" + g + "|" + b + ")" + I, k = "(?:\\.|(?:(?:" + h + "|" + g + ")" + I + "\\.))";
    a.eoln = /(?:\r\n)|(?:\n)|(?:\r)/g, a.empty = new RegExp("^" + I + "$"), a.quad = new RegExp(
      "^" + I + P + R + E + k + I + "$"
    );
  })(), Wr = class Hi {
    /**
     * Parses RDF in the form of N-Quads.
     *
     * @param input the N-Quads input to parse.
     *
     * @return an RDF dataset (an array of quads per http://rdf.js.org/).
     */
    static parse(w) {
      const x = [], v = {}, A = w.split(a.eoln);
      let g = 0;
      for (const m of A) {
        if (g++, a.empty.test(m))
          continue;
        const l = m.match(a.quad);
        if (l === null)
          throw new Error("N-Quads parse error on line " + g + ".");
        const u = { subject: null, predicate: null, object: null, graph: null };
        if (l[1] !== void 0 ? u.subject = { termType: i, value: l[1] } : u.subject = { termType: o, value: l[2] }, u.predicate = { termType: i, value: l[3] }, l[4] !== void 0 ? u.object = { termType: i, value: l[4] } : l[5] !== void 0 ? u.object = { termType: o, value: l[5] } : (u.object = {
          termType: r,
          value: void 0,
          datatype: {
            termType: i
          }
        }, l[7] !== void 0 ? u.object.datatype.value = l[7] : l[8] !== void 0 ? (u.object.datatype.value = t, u.object.language = l[8]) : u.object.datatype.value = n, u.object.value = f(l[6])), l[9] !== void 0 ? u.graph = {
          termType: i,
          value: l[9]
        } : l[10] !== void 0 ? u.graph = {
          termType: o,
          value: l[10]
        } : u.graph = {
          termType: s,
          value: ""
        }, !(u.graph.value in v))
          v[u.graph.value] = [u], x.push(u);
        else {
          let b = !0;
          const S = v[u.graph.value];
          for (const I of S)
            if (c(I, u)) {
              b = !1;
              break;
            }
          b && (S.push(u), x.push(u));
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
      for (const v of w)
        x.push(Hi.serializeQuad(v));
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
    static serializeQuadComponents(w, x, v, A) {
      let g = "";
      return w.termType === i ? g += `<${w.value}>` : g += `${w.value}`, g += ` <${x.value}> `, v.termType === i ? g += `<${v.value}>` : v.termType === o ? g += v.value : (g += `"${p(v.value)}"`, v.datatype.value === t ? v.language && (g += `@${v.language}`) : v.datatype.value !== n && (g += `^^<${v.datatype.value}>`)), A.termType === i ? g += ` <${A.value}>` : A.termType === o && (g += ` ${A.value}`), g += ` .
`, g;
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
      const x = [], v = {
        "blank node": o,
        IRI: i,
        literal: r
      };
      for (const A in w)
        w[A].forEach((m) => {
          const l = {};
          for (const u in m) {
            const b = m[u], S = {
              termType: v[b.type],
              value: b.value
            };
            S.termType === r && (S.datatype = {
              termType: i
            }, "datatype" in b && (S.datatype.value = b.datatype), "language" in b ? ("datatype" in b || (S.datatype.value = t), S.language = b.language) : "datatype" in b || (S.datatype.value = n)), l[u] = S;
          }
          A === "@default" ? l.graph = {
            termType: s,
            value: ""
          } : l.graph = {
            termType: A.startsWith("_:") ? o : i,
            value: A
          }, x.push(l);
        });
      return x;
    }
  };
  function c(h, w) {
    return !(h.subject.termType === w.subject.termType && h.object.termType === w.object.termType) || !(h.subject.value === w.subject.value && h.predicate.value === w.predicate.value && h.object.value === w.object.value) ? !1 : h.object.termType !== r ? !0 : h.object.datatype.termType === w.object.datatype.termType && h.object.language === w.object.language && h.object.datatype.value === w.object.datatype.value;
  }
  const d = /["\\\n\r]/g;
  function p(h) {
    return h.replace(d, function(w) {
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
  const y = /(?:\\([tbnrf"'\\]))|(?:\\u([0-9A-Fa-f]{4}))|(?:\\U([0-9A-Fa-f]{8}))/g;
  function f(h) {
    return h.replace(y, function(w, x, v, A) {
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
      if (A)
        throw new Error("Unsupported U escape");
    });
  }
  return Wr;
}
/*!
 * Copyright (c) 2016-2022 Digital Bazaar, Inc. All rights reserved.
 */
var Xr, kc;
function cl() {
  if (kc) return Xr;
  kc = 1;
  const e = ma(), t = hr(), n = ol(), i = ya();
  Xr = class {
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
      let d = 0;
      for (const h of c)
        ++d % 100 === 0 && await this._yield(), await this._hashAndTrackBlankNode({ id: h, hashToBlankNodes: a });
      const p = [...a.keys()].sort(), y = [];
      for (const h of p) {
        const w = a.get(h);
        if (w.length > 1) {
          y.push(w);
          continue;
        }
        const x = w[0];
        this.canonicalIssuer.getId(x);
      }
      for (const h of y) {
        const w = [];
        for (const x of h) {
          if (this.canonicalIssuer.hasId(x))
            continue;
          const v = new e("_:b");
          v.getId(x);
          const A = await this.hashNDegreeQuads(x, v);
          w.push(A);
        }
        w.sort(o);
        for (const x of w) {
          const v = x.issuer.getOldIds();
          for (const A of v)
            this.canonicalIssuer.getId(A);
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
      const a = [], c = this.blankNodeInfo.get(s), d = c.quads;
      for (const y of d) {
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
    async hashRelatedBlankNode(s, a, c, d) {
      let p;
      this.canonicalIssuer.hasId(s) ? p = this.canonicalIssuer.getId(s) : c.hasId(s) ? p = c.getId(s) : p = this.blankNodeInfo.get(s).hash;
      const y = this.createMessageDigest();
      return y.update(d), d !== "g" && y.update(this.getRelatedPredicate(a)), y.update(p), y.digest();
    }
    // 4.8) Hash N-Degree Quads
    async hashNDegreeQuads(s, a) {
      const c = this.deepIterations.get(s) || 0;
      if (c > this.maxDeepIterations)
        throw new Error(
          `Maximum deep iterations (${this.maxDeepIterations}) exceeded.`
        );
      this.deepIterations.set(s, c + 1);
      const d = this.createMessageDigest(), p = await this.createHashToRelated(s, a), y = [...p.keys()].sort();
      for (const f of y) {
        d.update(f);
        let h = "", w;
        const x = new n(p.get(f));
        let v = 0;
        for (; x.hasNext(); ) {
          const A = x.next();
          ++v % 3 === 0 && await this._yield();
          let g = a.clone(), m = "";
          const l = [];
          let u = !1;
          for (const b of A)
            if (this.canonicalIssuer.hasId(b) ? m += this.canonicalIssuer.getId(b) : (g.hasId(b) || l.push(b), m += g.getId(b)), h.length !== 0 && m > h) {
              u = !0;
              break;
            }
          if (!u) {
            for (const b of l) {
              const S = await this.hashNDegreeQuads(b, g);
              if (m += g.getId(b), m += `<${S.hash}>`, g = S.issuer, h.length !== 0 && m > h) {
                u = !0;
                break;
              }
            }
            u || (h.length === 0 || m < h) && (h = m, w = g);
          }
        }
        d.update(h), a = w;
      }
      return { hash: await d.digest(), issuer: a };
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
      const c = /* @__PURE__ */ new Map(), d = this.blankNodeInfo.get(s).quads;
      let p = 0;
      for (const y of d)
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
      const c = await this.hashFirstDegreeQuads(s), d = a.get(c);
      d ? d.push(s) : a.set(c, [s]);
    }
    _addBlankNodeQuadInfo({ quad: s, component: a }) {
      if (a.termType !== "BlankNode")
        return;
      const c = a.value, d = this.blankNodeInfo.get(c);
      d ? d.quads.add(s) : this.blankNodeInfo.set(c, { quads: /* @__PURE__ */ new Set([s]), hash: null });
    }
    async _addRelatedBlankNodeHash({ quad: s, component: a, position: c, id: d, issuer: p, hashToRelated: y }) {
      if (!(a.termType === "BlankNode" && a.value !== d))
        return;
      const f = a.value, h = await this.hashRelatedBlankNode(
        f,
        s,
        p,
        c
      ), w = y.get(h);
      w ? w.push(f) : y.set(h, [f]);
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
  return Xr;
}
/*!
 * Copyright (c) 2016-2022 Digital Bazaar, Inc. All rights reserved.
 */
var Yr, Mc;
function $h() {
  if (Mc) return Yr;
  Mc = 1;
  const e = hr(), t = cl();
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
    async createHashToRelated(i, o) {
      const r = /* @__PURE__ */ new Map(), s = this.blankNodeInfo.get(i).quads;
      let a = 0;
      for (const c of s) {
        let d, p;
        if (c.subject.termType === "BlankNode" && c.subject.value !== i)
          p = c.subject.value, d = "p";
        else if (c.object.termType === "BlankNode" && c.object.value !== i)
          p = c.object.value, d = "r";
        else
          continue;
        ++a % 100 === 0 && await this._yield();
        const y = await this.hashRelatedBlankNode(
          p,
          c,
          o,
          d
        ), f = r.get(y);
        f ? f.push(p) : r.set(y, [p]);
      }
      return r;
    }
  }, Yr;
}
/*!
 * Copyright (c) 2016-2022 Digital Bazaar, Inc. All rights reserved.
 */
var es, Oc;
function dl() {
  if (Oc) return es;
  Oc = 1;
  const e = ma(), t = hr(), n = ol(), i = ya();
  es = class {
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
      const d = [...a.keys()].sort(), p = [];
      for (const f of d) {
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
          const v = this.hashNDegreeQuads(w, x);
          h.push(v);
        }
        h.sort(o);
        for (const w of h) {
          const x = w.issuer.getOldIds();
          for (const v of x)
            this.canonicalIssuer.getId(v);
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
      const a = [], c = this.blankNodeInfo.get(s), d = c.quads;
      for (const y of d) {
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
    hashRelatedBlankNode(s, a, c, d) {
      let p;
      this.canonicalIssuer.hasId(s) ? p = this.canonicalIssuer.getId(s) : c.hasId(s) ? p = c.getId(s) : p = this.blankNodeInfo.get(s).hash;
      const y = this.createMessageDigest();
      return y.update(d), d !== "g" && y.update(this.getRelatedPredicate(a)), y.update(p), y.digest();
    }
    // 4.8) Hash N-Degree Quads
    hashNDegreeQuads(s, a) {
      const c = this.deepIterations.get(s) || 0;
      if (c > this.maxDeepIterations)
        throw new Error(
          `Maximum deep iterations (${this.maxDeepIterations}) exceeded.`
        );
      this.deepIterations.set(s, c + 1);
      const d = this.createMessageDigest(), p = this.createHashToRelated(s, a), y = [...p.keys()].sort();
      for (const f of y) {
        d.update(f);
        let h = "", w;
        const x = new n(p.get(f));
        for (; x.hasNext(); ) {
          const v = x.next();
          let A = a.clone(), g = "";
          const m = [];
          let l = !1;
          for (const u of v)
            if (this.canonicalIssuer.hasId(u) ? g += this.canonicalIssuer.getId(u) : (A.hasId(u) || m.push(u), g += A.getId(u)), h.length !== 0 && g > h) {
              l = !0;
              break;
            }
          if (!l) {
            for (const u of m) {
              const b = this.hashNDegreeQuads(u, A);
              if (g += A.getId(u), g += `<${b.hash}>`, A = b.issuer, h.length !== 0 && g > h) {
                l = !0;
                break;
              }
            }
            l || (h.length === 0 || g < h) && (h = g, w = A);
          }
        }
        d.update(h), a = w;
      }
      return { hash: d.digest(), issuer: a };
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
      const c = /* @__PURE__ */ new Map(), d = this.blankNodeInfo.get(s).quads;
      for (const p of d)
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
      const c = this.hashFirstDegreeQuads(s), d = a.get(c);
      d ? d.push(s) : a.set(c, [s]);
    }
    _addBlankNodeQuadInfo({ quad: s, component: a }) {
      if (a.termType !== "BlankNode")
        return;
      const c = a.value, d = this.blankNodeInfo.get(c);
      d ? d.quads.add(s) : this.blankNodeInfo.set(c, { quads: /* @__PURE__ */ new Set([s]), hash: null });
    }
    _addRelatedBlankNodeHash({ quad: s, component: a, position: c, id: d, issuer: p, hashToRelated: y }) {
      if (!(a.termType === "BlankNode" && a.value !== d))
        return;
      const f = a.value, h = this.hashRelatedBlankNode(f, s, p, c), w = y.get(h);
      w ? w.push(f) : y.set(h, [f]);
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
  return es;
}
/*!
 * Copyright (c) 2016-2021 Digital Bazaar, Inc. All rights reserved.
 */
var ts, Lc;
function Ph() {
  if (Lc) return ts;
  Lc = 1;
  const e = hr(), t = dl();
  return ts = class extends t {
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
        let c, d;
        if (a.subject.termType === "BlankNode" && a.subject.value !== i)
          d = a.subject.value, c = "p";
        else if (a.object.termType === "BlankNode" && a.object.value !== i)
          d = a.object.value, c = "r";
        else
          continue;
        const p = this.hashRelatedBlankNode(d, a, o, c), y = r.get(p);
        y ? y.push(d) : r.set(p, [d]);
      }
      return r;
    }
  }, ts;
}
const _h = {}, Th = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _h
}, Symbol.toStringTag, { value: "Module" })), Ch = /* @__PURE__ */ _u(Th);
var Nc;
function Eh() {
  return Nc || (Nc = 1, (function(e) {
    const t = cl(), n = $h(), i = dl(), o = Ph();
    let r;
    try {
      r = Ch;
    } catch {
    }
    function s(a) {
      return Array.isArray(a) ? a : e.NQuads.legacyDatasetToQuads(a);
    }
    e.NQuads = ya(), e.IdentifierIssuer = ma(), e._rdfCanonizeNative = function(a) {
      return a && (r = a), r;
    }, e.canonize = async function(a, c) {
      const d = s(a);
      if (c.useNative) {
        if (!r)
          throw new Error("rdf-canonize-native not available");
        if (c.createMessageDigest)
          throw new Error(
            '"createMessageDigest" cannot be used with "useNative".'
          );
        return new Promise((p, y) => r.canonize(d, c, (f, h) => f ? y(f) : p(h)));
      }
      if (c.algorithm === "URDNA2015")
        return new t(c).main(d);
      if (c.algorithm === "URGNA2012") {
        if (c.createMessageDigest)
          throw new Error(
            '"createMessageDigest" cannot be used with "URGNA2012".'
          );
        return new n(c).main(d);
      }
      throw "algorithm" in c ? new Error(
        "Invalid RDF Dataset Canonicalization algorithm: " + c.algorithm
      ) : new Error("No RDF Dataset Canonicalization algorithm specified.");
    }, e._canonizeSync = function(a, c) {
      const d = s(a);
      if (c.useNative) {
        if (!r)
          throw new Error("rdf-canonize-native not available");
        if (c.createMessageDigest)
          throw new Error(
            '"createMessageDigest" cannot be used with "useNative".'
          );
        return r.canonizeSync(d, c);
      }
      if (c.algorithm === "URDNA2015")
        return new i(c).main(d);
      if (c.algorithm === "URGNA2012") {
        if (c.createMessageDigest)
          throw new Error(
            '"createMessageDigest" cannot be used with "URGNA2012".'
          );
        return new o(c).main(d);
      }
      throw "algorithm" in c ? new Error(
        "Invalid RDF Dataset Canonicalization algorithm: " + c.algorithm
      ) : new Error("No RDF Dataset Canonicalization algorithm specified.");
    };
  })(Zr)), Zr;
}
var ns, Dc;
function ga() {
  return Dc || (Dc = 1, ns = Eh()), ns;
}
var is, zc;
function Ne() {
  if (zc) return is;
  zc = 1;
  const e = {};
  return is = e, e.isArray = Array.isArray, e.isBoolean = (t) => typeof t == "boolean" || Object.prototype.toString.call(t) === "[object Boolean]", e.isDouble = (t) => e.isNumber(t) && (String(t).indexOf(".") !== -1 || Math.abs(t) >= 1e21), e.isEmptyObject = (t) => e.isObject(t) && Object.keys(t).length === 0, e.isNumber = (t) => typeof t == "number" || Object.prototype.toString.call(t) === "[object Number]", e.isNumeric = (t) => !isNaN(parseFloat(t)) && isFinite(t), e.isObject = (t) => Object.prototype.toString.call(t) === "[object Object]", e.isString = (t) => typeof t == "string" || Object.prototype.toString.call(t) === "[object String]", e.isUndefined = (t) => typeof t > "u", is;
}
var rs, Vc;
function It() {
  if (Vc) return rs;
  Vc = 1;
  const e = Ne(), t = {};
  return rs = t, t.isSubject = (n) => e.isObject(n) && !("@value" in n || "@set" in n || "@list" in n) ? Object.keys(n).length > 1 || !("@id" in n) : !1, t.isSubjectReference = (n) => (
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
  }, rs;
}
var ss, Uc;
function He() {
  return Uc || (Uc = 1, ss = class extends Error {
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
  }), ss;
}
var as, Gc;
function Ze() {
  if (Gc) return as;
  Gc = 1;
  const e = It(), t = Ne(), n = ga().IdentifierIssuer, i = He(), o = /^[a-zA-Z]{1,8}(-[a-zA-Z0-9]{1,8})*$/, r = /(?:<[^>]*?>|"[^"]*?"|[^,])+/g, s = /\s*<([^>]*?)>\s*(?:;\s*(.*))?/, a = /(.*?)=(?:(?:"([^"]*?)")|([^"]*?))\s*(?:(?:;\s*)|$)/g, c = /^@[a-zA-Z]+$/, d = {
    headers: {
      accept: "application/ld+json, application/json"
    }
  }, p = {};
  as = p, p.IdentifierIssuer = n, p.REGEX_BCP47 = o, p.REGEX_KEYWORD = c, p.clone = function(f) {
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
        'Accept header may not be specified; only "' + d.headers.accept + '" is supported.'
      );
    return Object.assign({ Accept: d.headers.accept }, f);
  }, p.parseLinkHeader = (f) => {
    const h = {}, w = f.match(r);
    for (let x = 0; x < w.length; ++x) {
      let v = w[x].match(s);
      if (!v)
        continue;
      const A = { target: v[1] }, g = v[2];
      for (; v = a.exec(g); )
        A[v[1]] = v[2] === void 0 ? v[3] : v[2];
      const m = A.rel || "";
      Array.isArray(h[m]) ? h[m].push(A) : h.hasOwnProperty(m) ? h[m] = [h[m], A] : h[m] = A;
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
      const v = e.isList(x);
      if (t.isArray(x) || v) {
        v && (x = x["@list"]);
        for (let A = 0; A < x.length; ++A)
          if (p.compareValues(w, x[A]))
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
      for (let v = 0; v < w.length; ++v)
        p.addValue(f, h, w[v], x);
    } else if (f.hasOwnProperty(h)) {
      const v = !x.allowDuplicate && p.hasValue(f, h, w);
      !t.isArray(f[h]) && (!v || x.propertyIsArray) && (f[h] = [f[h]]), v || (x.prependValue ? f[h].unshift(w) : f[h].push(w));
    } else
      f[h] = x.propertyIsArray ? [w] : w;
  }, p.getValues = (f, h) => [].concat(f[h] || []), p.removeProperty = (f, h) => {
    delete f[h];
  }, p.removeValue = (f, h, w, x) => {
    x = x || {}, "propertyIsArray" in x || (x.propertyIsArray = !1);
    const v = p.getValues(f, h).filter(
      (A) => !p.compareValues(A, w)
    );
    v.length === 0 ? p.removeProperty(f, h) : v.length === 1 && !x.propertyIsArray ? f[h] = v[0] : f[h] = v;
  }, p.relabelBlankNodes = (f, h) => {
    h = h || {};
    const w = h.issuer || new n("_:b");
    return y(w, f);
  }, p.compareValues = (f, h) => f === h || e.isValue(f) && e.isValue(h) && f["@value"] === h["@value"] && f["@type"] === h["@type"] && f["@language"] === h["@language"] && f["@index"] === h["@index"] ? !0 : t.isObject(f) && "@id" in f && t.isObject(h) && "@id" in h ? f["@id"] === h["@id"] : !1, p.compareShortestLeast = (f, h) => f.length < h.length ? -1 : h.length < f.length ? 1 : f === h ? 0 : f < h ? -1 : 1;
  function y(f, h) {
    if (t.isArray(h))
      for (let w = 0; w < h.length; ++w)
        h[w] = y(f, h[w]);
    else if (e.isList(h))
      h["@list"] = y(f, h["@list"]);
    else if (t.isObject(h)) {
      e.isBlankNode(h) && (h["@id"] = f.getId(h["@id"]));
      const w = Object.keys(h).sort();
      for (let x = 0; x < w.length; ++x) {
        const v = w[x];
        v !== "@id" && (h[v] = y(f, h[v]));
      }
    }
    return h;
  }
  return as;
}
var os, Fc;
function va() {
  if (Fc) return os;
  Fc = 1;
  const e = "http://www.w3.org/1999/02/22-rdf-syntax-ns#", t = "http://www.w3.org/2001/XMLSchema#";
  return os = {
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
  }, os;
}
var cs, Bc;
function ll() {
  return Bc || (Bc = 1, cs = class {
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
  }), cs;
}
var ds, Zc;
function Lt() {
  if (Zc) return ds;
  Zc = 1;
  const e = Ne(), t = {};
  ds = t, t.parsers = {
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
    const s = t.parse(o.substr(r.length)), a = i.normalizedPath.split("/"), c = s.normalizedPath.split("/"), d = s.fragment || s.query ? 0 : 1;
    for (; a.length > 0 && c.length > d && a[0] === c[0]; )
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
  return t.isAbsolute = (i) => e.isString(i) && n.test(i), t.isRelative = (i) => e.isString(i), ds;
}
var ls, Hc;
function kh() {
  if (Hc) return ls;
  Hc = 1;
  const { parseLinkHeader: e, buildHeaders: t } = Ze(), { LINK_HEADER_CONTEXT: n } = va(), i = He(), o = ll(), { prependBase: r } = Lt(), s = /(^|(\r\n))link:/i;
  ls = ({
    secure: c,
    headers: d = {},
    xhr: p
  } = { headers: {} }) => {
    return d = t(d), new o().wrapLoader(f);
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
        w = await a(p, h, d);
      } catch (m) {
        throw new i(
          "URL could not be dereferenced, an error occurred.",
          "jsonld.LoadDocumentError",
          { code: "loading document failed", url: h, cause: m }
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
      let x = { contextUrl: null, documentUrl: h, document: w.response }, v = null;
      const A = w.getResponseHeader("Content-Type");
      let g;
      if (s.test(w.getAllResponseHeaders()) && (g = w.getResponseHeader("Link")), g && A !== "application/ld+json") {
        const m = e(g), l = m[n];
        if (Array.isArray(l))
          throw new i(
            "URL could not be dereferenced, it has more than one associated HTTP Link Header.",
            "jsonld.InvalidUrl",
            { code: "multiple context link headers", url: h }
          );
        l && (x.contextUrl = l.target), v = m.alternate, v && v.type == "application/ld+json" && !(A || "").match(/^application\/(\w*\+)?json$/) && (x = await f(r(h, v.target)));
      }
      return x;
    }
  };
  function a(c, d, p) {
    c = c || XMLHttpRequest;
    const y = new c();
    return new Promise((f, h) => {
      y.onload = () => f(y), y.onerror = (w) => h(w), y.open("GET", d, !0);
      for (const w in p)
        y.setRequestHeader(w, p[w]);
      y.send();
    });
  }
  return ls;
}
var us, Jc;
function Mh() {
  if (Jc) return us;
  Jc = 1;
  const e = kh(), t = {};
  return us = t, t.setupDocumentLoaders = function(n) {
    typeof XMLHttpRequest < "u" && (n.documentLoaders.xhr = e, n.useDocumentLoader("xhr"));
  }, t.setupGlobals = function(n) {
    typeof globalThis.JsonLdProcessor > "u" && Object.defineProperty(globalThis, "JsonLdProcessor", {
      writable: !0,
      enumerable: !1,
      configurable: !0,
      value: n.JsonLdProcessor
    });
  }, us;
}
var ps, Kc;
function Oh() {
  return Kc || (Kc = 1, ps = function(e) {
    e.prototype[Symbol.iterator] = function* () {
      for (let t = this.head; t; t = t.next)
        yield t.value;
    };
  }), ps;
}
var fs, Qc;
function Lh() {
  if (Qc) return fs;
  Qc = 1, fs = e, e.Node = o, e.create = e;
  function e(r) {
    var s = this;
    if (s instanceof e || (s = new e()), s.tail = null, s.head = null, s.length = 0, r && typeof r.forEach == "function")
      r.forEach(function(d) {
        s.push(d);
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
    for (var d = 0; c !== null; d++)
      a = r(a, c.value, d), c = c.next;
    return a;
  }, e.prototype.reduceReverse = function(r, s) {
    var a, c = this.tail;
    if (arguments.length > 1)
      a = s;
    else if (this.tail)
      c = this.tail.prev, a = this.tail.value;
    else
      throw new TypeError("Reduce of empty list with no initial value");
    for (var d = this.length - 1; c !== null; d--)
      a = r(a, c.value, d), c = c.prev;
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
    for (var c = 0, d = this.head; d !== null && c < r; c++)
      d = d.next;
    for (; d !== null && c < s; c++, d = d.next)
      a.push(d.value);
    return a;
  }, e.prototype.sliceReverse = function(r, s) {
    s = s || this.length, s < 0 && (s += this.length), r = r || 0, r < 0 && (r += this.length);
    var a = new e();
    if (s < r || s < 0)
      return a;
    r < 0 && (r = 0), s > this.length && (s = this.length);
    for (var c = this.length, d = this.tail; d !== null && c > s; c--)
      d = d.prev;
    for (; d !== null && c > r; c--, d = d.prev)
      a.push(d.value);
    return a;
  }, e.prototype.splice = function(r, s, ...a) {
    r > this.length && (r = this.length - 1), r < 0 && (r = this.length + r);
    for (var c = 0, d = this.head; d !== null && c < r; c++)
      d = d.next;
    for (var p = [], c = 0; d && c < s; c++)
      p.push(d.value), d = this.removeNode(d);
    d === null && (d = this.tail), d !== this.head && d !== this.tail && (d = d.prev);
    for (var c = 0; c < a.length; c++)
      d = t(this, d, a[c]);
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
    Oh()(e);
  } catch {
  }
  return fs;
}
var hs, Wc;
function ul() {
  if (Wc) return hs;
  Wc = 1;
  const e = Lh(), t = Symbol("max"), n = Symbol("length"), i = Symbol("lengthCalculator"), o = Symbol("allowStale"), r = Symbol("maxAge"), s = Symbol("dispose"), a = Symbol("noDisposeOnSet"), c = Symbol("lruList"), d = Symbol("cache"), p = Symbol("updateAgeOnGet"), y = () => 1;
  class f {
    constructor(l) {
      if (typeof l == "number" && (l = { max: l }), l || (l = {}), l.max && (typeof l.max != "number" || l.max < 0))
        throw new TypeError("max must be a non-negative number");
      this[t] = l.max || 1 / 0;
      const u = l.length || y;
      if (this[i] = typeof u != "function" ? y : u, this[o] = l.stale || !1, l.maxAge && typeof l.maxAge != "number")
        throw new TypeError("maxAge must be a number");
      this[r] = l.maxAge || 0, this[s] = l.dispose, this[a] = l.noDisposeOnSet || !1, this[p] = l.updateAgeOnGet || !1, this.reset();
    }
    // resize the cache when the max changes.
    set max(l) {
      if (typeof l != "number" || l < 0)
        throw new TypeError("max must be a non-negative number");
      this[t] = l || 1 / 0, x(this);
    }
    get max() {
      return this[t];
    }
    set allowStale(l) {
      this[o] = !!l;
    }
    get allowStale() {
      return this[o];
    }
    set maxAge(l) {
      if (typeof l != "number")
        throw new TypeError("maxAge must be a non-negative number");
      this[r] = l, x(this);
    }
    get maxAge() {
      return this[r];
    }
    // resize the cache when the lengthCalculator changes.
    set lengthCalculator(l) {
      typeof l != "function" && (l = y), l !== this[i] && (this[i] = l, this[n] = 0, this[c].forEach((u) => {
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
    rforEach(l, u) {
      u = u || this;
      for (let b = this[c].tail; b !== null; ) {
        const S = b.prev;
        g(this, l, b, u), b = S;
      }
    }
    forEach(l, u) {
      u = u || this;
      for (let b = this[c].head; b !== null; ) {
        const S = b.next;
        g(this, l, b, u), b = S;
      }
    }
    keys() {
      return this[c].toArray().map((l) => l.key);
    }
    values() {
      return this[c].toArray().map((l) => l.value);
    }
    reset() {
      this[s] && this[c] && this[c].length && this[c].forEach((l) => this[s](l.key, l.value)), this[d] = /* @__PURE__ */ new Map(), this[c] = new e(), this[n] = 0;
    }
    dump() {
      return this[c].map((l) => w(this, l) ? !1 : {
        k: l.key,
        v: l.value,
        e: l.now + (l.maxAge || 0)
      }).toArray().filter((l) => l);
    }
    dumpLru() {
      return this[c];
    }
    set(l, u, b) {
      if (b = b || this[r], b && typeof b != "number")
        throw new TypeError("maxAge must be a number");
      const S = b ? Date.now() : 0, I = this[i](u, l);
      if (this[d].has(l)) {
        if (I > this[t])
          return v(this, this[d].get(l)), !1;
        const E = this[d].get(l).value;
        return this[s] && (this[a] || this[s](l, E.value)), E.now = S, E.maxAge = b, E.value = u, this[n] += I - E.length, E.length = I, this.get(l), x(this), !0;
      }
      const P = new A(l, u, I, S, b);
      return P.length > this[t] ? (this[s] && this[s](l, u), !1) : (this[n] += P.length, this[c].unshift(P), this[d].set(l, this[c].head), x(this), !0);
    }
    has(l) {
      if (!this[d].has(l)) return !1;
      const u = this[d].get(l).value;
      return !w(this, u);
    }
    get(l) {
      return h(this, l, !0);
    }
    peek(l) {
      return h(this, l, !1);
    }
    pop() {
      const l = this[c].tail;
      return l ? (v(this, l), l.value) : null;
    }
    del(l) {
      v(this, this[d].get(l));
    }
    load(l) {
      this.reset();
      const u = Date.now();
      for (let b = l.length - 1; b >= 0; b--) {
        const S = l[b], I = S.e || 0;
        if (I === 0)
          this.set(S.k, S.v);
        else {
          const P = I - u;
          P > 0 && this.set(S.k, S.v, P);
        }
      }
    }
    prune() {
      this[d].forEach((l, u) => h(this, u, !1));
    }
  }
  const h = (m, l, u) => {
    const b = m[d].get(l);
    if (b) {
      const S = b.value;
      if (w(m, S)) {
        if (v(m, b), !m[o])
          return;
      } else
        u && (m[p] && (b.value.now = Date.now()), m[c].unshiftNode(b));
      return S.value;
    }
  }, w = (m, l) => {
    if (!l || !l.maxAge && !m[r])
      return !1;
    const u = Date.now() - l.now;
    return l.maxAge ? u > l.maxAge : m[r] && u > m[r];
  }, x = (m) => {
    if (m[n] > m[t])
      for (let l = m[c].tail; m[n] > m[t] && l !== null; ) {
        const u = l.prev;
        v(m, l), l = u;
      }
  }, v = (m, l) => {
    if (l) {
      const u = l.value;
      m[s] && m[s](u.key, u.value), m[n] -= u.length, m[d].delete(u.key), m[c].removeNode(l);
    }
  };
  class A {
    constructor(l, u, b, S, I) {
      this.key = l, this.value = u, this.length = b, this.now = S, this.maxAge = I || 0;
    }
  }
  const g = (m, l, u, b) => {
    let S = u.value;
    w(m, S) && (v(m, u), m[o] || (S = void 0)), S && l.call(b, S.value, S.key, m);
  };
  return hs = f, hs;
}
var ms, Xc;
function Nh() {
  if (Xc) return ms;
  Xc = 1;
  const e = ul(), t = 10;
  return ms = class {
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
  }, ms;
}
var ys, Yc;
function Dh() {
  if (Yc) return ys;
  Yc = 1;
  const {
    isArray: e,
    isObject: t,
    isString: n
  } = Ne(), {
    asArray: i
  } = Ze(), { prependBase: o } = Lt(), r = He(), s = Nh(), a = 10;
  ys = class {
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
      base: w,
      cycles: x = /* @__PURE__ */ new Set()
    }) {
      f && t(f) && f["@context"] && (f = f["@context"]), f = i(f);
      const v = [];
      for (const A of f) {
        if (n(A)) {
          let l = this._get(A);
          l || (l = await this._resolveRemoteContext(
            { activeCtx: y, url: A, documentLoader: h, base: w, cycles: x }
          )), e(l) ? v.push(...l) : v.push(l);
          continue;
        }
        if (A === null) {
          v.push(new s({ document: null }));
          continue;
        }
        t(A) || c(f);
        const g = JSON.stringify(A);
        let m = this._get(g);
        m || (m = new s({ document: A }), this._cacheResolvedContext({ key: g, resolved: m, tag: "static" })), v.push(m);
      }
      return v;
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
        let w = this.sharedCache.get(y);
        w || (w = /* @__PURE__ */ new Map(), this.sharedCache.set(y, w)), w.set(h, f);
      }
      return f;
    }
    async _resolveRemoteContext({ activeCtx: y, url: f, documentLoader: h, base: w, cycles: x }) {
      f = o(w, f);
      const { context: v, remoteDoc: A } = await this._fetchContext(
        { activeCtx: y, url: f, documentLoader: h, cycles: x }
      );
      w = A.documentUrl || f, d({ context: v, base: w });
      const g = await this.resolve(
        { activeCtx: y, context: v, documentLoader: h, base: w, cycles: x }
      );
      return this._cacheResolvedContext({ key: f, resolved: g, tag: A.tag }), g;
    }
    async _fetchContext({ activeCtx: y, url: f, documentLoader: h, cycles: w }) {
      if (w.size > a)
        throw new r(
          "Maximum number of @context URLs exceeded.",
          "jsonld.ContextUrlError",
          {
            code: y.processingMode === "json-ld-1.0" ? "loading remote context failed" : "context overflow",
            max: a
          }
        );
      if (w.has(f))
        throw new r(
          "Cyclical @context URLs detected.",
          "jsonld.ContextUrlError",
          {
            code: y.processingMode === "json-ld-1.0" ? "recursive context inclusion" : "context overflow",
            url: f
          }
        );
      w.add(f);
      let x, v;
      try {
        v = await h(f), x = v.document || null, n(x) && (x = JSON.parse(x));
      } catch (A) {
        throw new r(
          `Dereferencing a URL did not result in a valid JSON-LD object. Possible causes are an inaccessible URL perhaps due to a same-origin policy (ensure the server uses CORS if you are using client-side JavaScript), too many redirects, a non-JSON response, or more than one HTTP Link Header was provided for a remote context. URL: "${f}".`,
          "jsonld.InvalidUrl",
          { code: "loading remote context failed", url: f, cause: A }
        );
      }
      if (!t(x))
        throw new r(
          `Dereferencing a URL did not result in a JSON object. The response was valid JSON, but it was not a JSON object. URL: "${f}".`,
          "jsonld.InvalidUrl",
          { code: "invalid remote context", url: f }
        );
      return "@context" in x ? x = { "@context": x["@context"] } : x = { "@context": {} }, v.contextUrl && (e(x["@context"]) || (x["@context"] = [x["@context"]]), x["@context"].push(v.contextUrl)), { context: x, remoteDoc: v };
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
  function d({ context: p, base: y }) {
    if (!p)
      return;
    const f = p["@context"];
    if (n(f)) {
      p["@context"] = o(y, f);
      return;
    }
    if (e(f)) {
      for (let h = 0; h < f.length; ++h) {
        const w = f[h];
        if (n(w)) {
          f[h] = o(y, w);
          continue;
        }
        t(w) && d({ context: { "@context": w }, base: y });
      }
      return;
    }
    if (t(f))
      for (const h in f)
        d({ context: f[h], base: y });
  }
  return ys;
}
var gs, ed;
function zh() {
  return ed || (ed = 1, gs = ga().NQuads), gs;
}
var vs, td;
function Mn() {
  if (td) return vs;
  td = 1;
  const e = He(), {
    isArray: t
  } = Ne(), {
    asArray: n
  } = Ze(), i = {};
  vs = i, i.defaultEventHandler = null, i.setupEventHandler = ({ options: s = {} }) => {
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
    for (let d = 0; c && d < a.length; ++d) {
      c = !1;
      const p = a[d];
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
  }, vs;
}
var bs, nd;
function Kt() {
  if (nd) return bs;
  nd = 1;
  const e = Ze(), t = He(), {
    isArray: n,
    isObject: i,
    isString: o,
    isUndefined: r
  } = Ne(), {
    isAbsolute: s,
    isRelative: a,
    prependBase: c
  } = Lt(), {
    handleEvent: d
  } = Mn(), {
    REGEX_BCP47: p,
    REGEX_KEYWORD: y,
    asArray: f,
    compareShortestLeast: h
  } = Ze(), w = /* @__PURE__ */ new Map(), x = 1e4, v = {};
  bs = v, v.process = async ({
    activeCtx: m,
    localCtx: l,
    options: u,
    propagate: b = !0,
    overrideProtected: S = !1,
    cycles: I = /* @__PURE__ */ new Set()
  }) => {
    if (i(l) && "@context" in l && n(l["@context"]) && (l = l["@context"]), f(l).length === 0)
      return m;
    const R = [], E = [
      ({ event: N, next: _ }) => {
        R.push(N), _();
      }
    ];
    u.eventHandler && E.push(u.eventHandler);
    const k = u;
    u = { ...u, eventHandler: E };
    const M = await u.contextResolver.resolve({
      activeCtx: m,
      context: l,
      documentLoader: u.documentLoader,
      base: u.base
    });
    i(M[0].document) && typeof M[0].document["@propagate"] == "boolean" && (b = M[0].document["@propagate"]);
    let j = m;
    !b && !j.previousContext && (j = j.clone(), j.previousContext = m);
    for (const N of M) {
      let { document: _ } = N;
      if (m = j, _ === null) {
        if (!S && Object.keys(m.protected).length !== 0)
          throw new t(
            "Tried to nullify a context with protected terms outside of a term definition.",
            "jsonld.SyntaxError",
            { code: "invalid context nullification" }
          );
        j = m = v.getInitialContext(u).clone();
        continue;
      }
      const G = N.getProcessed(m);
      if (G) {
        if (k.eventHandler)
          for (const B of G.events)
            d({ event: B, options: k });
        j = m = G.context;
        continue;
      }
      if (i(_) && "@context" in _ && (_ = _["@context"]), !i(_))
        throw new t(
          "Invalid JSON-LD syntax; @context must be an object.",
          "jsonld.SyntaxError",
          { code: "invalid local context", context: _ }
        );
      j = j.clone();
      const L = /* @__PURE__ */ new Map();
      if ("@version" in _) {
        if (_["@version"] !== 1.1)
          throw new t(
            "Unsupported JSON-LD version: " + _["@version"],
            "jsonld.UnsupportedVersion",
            { code: "invalid @version value", context: _ }
          );
        if (m.processingMode && m.processingMode === "json-ld-1.0")
          throw new t(
            "@version: " + _["@version"] + " not compatible with " + m.processingMode,
            "jsonld.ProcessingModeConflict",
            { code: "processing mode conflict", context: _ }
          );
        j.processingMode = "json-ld-1.1", j["@version"] = _["@version"], L.set("@version", !0);
      }
      if (j.processingMode = j.processingMode || m.processingMode, "@base" in _) {
        let B = _["@base"];
        if (!(B === null || s(B))) if (a(B))
          B = c(j["@base"], B);
        else
          throw new t(
            'Invalid JSON-LD syntax; the value of "@base" in a @context must be an absolute IRI, a relative IRI, or null.',
            "jsonld.SyntaxError",
            { code: "invalid base IRI", context: _ }
          );
        j["@base"] = B, L.set("@base", !0);
      }
      if ("@vocab" in _) {
        const B = _["@vocab"];
        if (B === null)
          delete j["@vocab"];
        else if (o(B)) {
          if (!s(B) && v.processingMode(j, 1))
            throw new t(
              'Invalid JSON-LD syntax; the value of "@vocab" in a @context must be an absolute IRI.',
              "jsonld.SyntaxError",
              { code: "invalid vocab mapping", context: _ }
            );
          {
            const T = A(
              j,
              B,
              { vocab: !0, base: !0 },
              void 0,
              void 0,
              u
            );
            s(T) || u.eventHandler && d({
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
          { code: "invalid vocab mapping", context: _ }
        );
        L.set("@vocab", !0);
      }
      if ("@language" in _) {
        const B = _["@language"];
        if (B === null)
          delete j["@language"];
        else if (o(B))
          B.match(p) || u.eventHandler && d({
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
            { code: "invalid default language", context: _ }
          );
        L.set("@language", !0);
      }
      if ("@direction" in _) {
        const B = _["@direction"];
        if (m.processingMode === "json-ld-1.0")
          throw new t(
            "Invalid JSON-LD syntax; @direction not compatible with " + m.processingMode,
            "jsonld.SyntaxError",
            { code: "invalid context member", context: _ }
          );
        if (B === null)
          delete j["@direction"];
        else {
          if (B !== "ltr" && B !== "rtl")
            throw new t(
              'Invalid JSON-LD syntax; the value of "@direction" in a @context must be null, "ltr", or "rtl".',
              "jsonld.SyntaxError",
              { code: "invalid base direction", context: _ }
            );
          j["@direction"] = B;
        }
        L.set("@direction", !0);
      }
      if ("@propagate" in _) {
        const B = _["@propagate"];
        if (m.processingMode === "json-ld-1.0")
          throw new t(
            "Invalid JSON-LD syntax; @propagate not compatible with " + m.processingMode,
            "jsonld.SyntaxError",
            { code: "invalid context entry", context: _ }
          );
        if (typeof B != "boolean")
          throw new t(
            "Invalid JSON-LD syntax; @propagate value must be a boolean.",
            "jsonld.SyntaxError",
            { code: "invalid @propagate value", context: l }
          );
        L.set("@propagate", !0);
      }
      if ("@import" in _) {
        const B = _["@import"];
        if (m.processingMode === "json-ld-1.0")
          throw new t(
            "Invalid JSON-LD syntax; @import not compatible with " + m.processingMode,
            "jsonld.SyntaxError",
            { code: "invalid context entry", context: _ }
          );
        if (!o(B))
          throw new t(
            "Invalid JSON-LD syntax; @import must be a string.",
            "jsonld.SyntaxError",
            { code: "invalid @import value", context: l }
          );
        const T = await u.contextResolver.resolve({
          activeCtx: m,
          context: B,
          documentLoader: u.documentLoader,
          base: u.base
        });
        if (T.length !== 1)
          throw new t(
            "Invalid JSON-LD syntax; @import must reference a single context.",
            "jsonld.SyntaxError",
            { code: "invalid remote context", context: l }
          );
        const O = T[0].getProcessed(m);
        if (O)
          _ = O;
        else {
          const V = T[0].document;
          if ("@import" in V)
            throw new t(
              "Invalid JSON-LD syntax: imported context must not include @import.",
              "jsonld.SyntaxError",
              { code: "invalid context entry", context: l }
            );
          for (const D in V)
            _.hasOwnProperty(D) || (_[D] = V[D]);
          T[0].setProcessed(m, _);
        }
        L.set("@import", !0);
      }
      L.set("@protected", _["@protected"] || !1);
      for (const B in _)
        if (v.createTermDefinition({
          activeCtx: j,
          localCtx: _,
          term: B,
          defined: L,
          options: u,
          overrideProtected: S
        }), i(_[B]) && "@context" in _[B]) {
          const T = _[B]["@context"];
          let O = !0;
          if (o(T)) {
            const V = c(u.base, T);
            I.has(V) ? O = !1 : I.add(V);
          }
          if (O)
            try {
              await v.process({
                activeCtx: j.clone(),
                localCtx: _[B]["@context"],
                overrideProtected: !0,
                options: u,
                cycles: I
              });
            } catch {
              throw new t(
                "Invalid JSON-LD syntax; invalid scoped context.",
                "jsonld.SyntaxError",
                {
                  code: "invalid scoped context",
                  context: _[B]["@context"],
                  term: B
                }
              );
            }
        }
      N.setProcessed(m, {
        context: j,
        events: R
      });
    }
    return j;
  }, v.createTermDefinition = ({
    activeCtx: m,
    localCtx: l,
    term: u,
    defined: b,
    options: S,
    overrideProtected: I = !1
  }) => {
    if (b.has(u)) {
      if (b.get(u))
        return;
      throw new t(
        "Cyclical context definition detected.",
        "jsonld.CyclicalContext",
        { code: "cyclic IRI mapping", context: l, term: u }
      );
    }
    b.set(u, !1);
    let P;
    if (l.hasOwnProperty(u) && (P = l[u]), u === "@type" && i(P) && (P["@container"] || "@set") === "@set" && v.processingMode(m, 1.1)) {
      const _ = ["@container", "@id", "@protected"], G = Object.keys(P);
      if (G.length === 0 || G.some((L) => !_.includes(L)))
        throw new t(
          "Invalid JSON-LD syntax; keywords cannot be overridden.",
          "jsonld.SyntaxError",
          { code: "keyword redefinition", context: l, term: u }
        );
    } else {
      if (v.isKeyword(u))
        throw new t(
          "Invalid JSON-LD syntax; keywords cannot be overridden.",
          "jsonld.SyntaxError",
          { code: "keyword redefinition", context: l, term: u }
        );
      if (u.match(y)) {
        S.eventHandler && d({
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
          { code: "invalid term definition", context: l }
        );
    }
    const R = m.mappings.get(u);
    m.mappings.has(u) && m.mappings.delete(u);
    let E = !1;
    if ((o(P) || P === null) && (E = !0, P = { "@id": P }), !i(P))
      throw new t(
        "Invalid JSON-LD syntax; @context term values must be strings or objects.",
        "jsonld.SyntaxError",
        { code: "invalid term definition", context: l }
      );
    const k = {};
    m.mappings.set(u, k), k.reverse = !1;
    const M = ["@container", "@id", "@language", "@reverse", "@type"];
    v.processingMode(m, 1.1) && M.push(
      "@context",
      "@direction",
      "@index",
      "@nest",
      "@prefix",
      "@protected"
    );
    for (const _ in P)
      if (!M.includes(_))
        throw new t(
          "Invalid JSON-LD syntax; a term definition must not contain " + _,
          "jsonld.SyntaxError",
          { code: "invalid term definition", context: l }
        );
    const j = u.indexOf(":");
    if (k._termHasColon = j > 0, "@reverse" in P) {
      if ("@id" in P)
        throw new t(
          "Invalid JSON-LD syntax; a @reverse term definition must not contain @id.",
          "jsonld.SyntaxError",
          { code: "invalid reverse property", context: l }
        );
      if ("@nest" in P)
        throw new t(
          "Invalid JSON-LD syntax; a @reverse term definition must not contain @nest.",
          "jsonld.SyntaxError",
          { code: "invalid reverse property", context: l }
        );
      const _ = P["@reverse"];
      if (!o(_))
        throw new t(
          "Invalid JSON-LD syntax; a @context @reverse value must be a string.",
          "jsonld.SyntaxError",
          { code: "invalid IRI mapping", context: l }
        );
      if (_.match(y)) {
        S.eventHandler && d({
          event: {
            type: ["JsonLdEvent"],
            code: "reserved @reverse value",
            level: "warning",
            message: '@reverse values beginning with "@" are reserved for future use and dropped.',
            details: {
              reverse: _
            }
          },
          options: S
        }), R ? m.mappings.set(u, R) : m.mappings.delete(u);
        return;
      }
      const G = A(
        m,
        _,
        { vocab: !0, base: !1 },
        l,
        b,
        S
      );
      if (!s(G))
        throw new t(
          "Invalid JSON-LD syntax; a @context @reverse value must be an absolute IRI or a blank node identifier.",
          "jsonld.SyntaxError",
          { code: "invalid IRI mapping", context: l }
        );
      k["@id"] = G, k.reverse = !0;
    } else if ("@id" in P) {
      let _ = P["@id"];
      if (_ && !o(_))
        throw new t(
          "Invalid JSON-LD syntax; a @context @id value must be an array of strings or a string.",
          "jsonld.SyntaxError",
          { code: "invalid IRI mapping", context: l }
        );
      if (_ === null)
        k["@id"] = null;
      else if (!v.isKeyword(_) && _.match(y)) {
        S.eventHandler && d({
          event: {
            type: ["JsonLdEvent"],
            code: "reserved @id value",
            level: "warning",
            message: '@id values beginning with "@" are reserved for future use and dropped.',
            details: {
              id: _
            }
          },
          options: S
        }), R ? m.mappings.set(u, R) : m.mappings.delete(u);
        return;
      } else if (_ !== u) {
        if (_ = A(
          m,
          _,
          { vocab: !0, base: !1 },
          l,
          b,
          S
        ), !s(_) && !v.isKeyword(_))
          throw new t(
            "Invalid JSON-LD syntax; a @context @id value must be an absolute IRI, a blank node identifier, or a keyword.",
            "jsonld.SyntaxError",
            { code: "invalid IRI mapping", context: l }
          );
        if (u.match(/(?::[^:])|\//)) {
          const G = new Map(b).set(u, !0);
          if (A(
            m,
            u,
            { vocab: !0, base: !1 },
            l,
            G,
            S
          ) !== _)
            throw new t(
              "Invalid JSON-LD syntax; term in form of IRI must expand to definition.",
              "jsonld.SyntaxError",
              { code: "invalid IRI mapping", context: l }
            );
        }
        k["@id"] = _, k._prefix = E && !k._termHasColon && _.match(/[:\/\?#\[\]@]$/) !== null;
      }
    }
    if (!("@id" in k))
      if (k._termHasColon) {
        const _ = u.substr(0, j);
        if (l.hasOwnProperty(_) && v.createTermDefinition({
          activeCtx: m,
          localCtx: l,
          term: _,
          defined: b,
          options: S
        }), m.mappings.has(_)) {
          const G = u.substr(j + 1);
          k["@id"] = m.mappings.get(_)["@id"] + G;
        } else
          k["@id"] = u;
      } else if (u === "@type")
        k["@id"] = u;
      else {
        if (!("@vocab" in m))
          throw new t(
            "Invalid JSON-LD syntax; @context terms must define an @id.",
            "jsonld.SyntaxError",
            { code: "invalid IRI mapping", context: l, term: u }
          );
        k["@id"] = m["@vocab"] + u;
      }
    if ((P["@protected"] === !0 || b.get("@protected") === !0 && P["@protected"] !== !1) && (m.protected[u] = !0, k.protected = !0), b.set(u, !0), "@type" in P) {
      let _ = P["@type"];
      if (!o(_))
        throw new t(
          "Invalid JSON-LD syntax; an @context @type value must be a string.",
          "jsonld.SyntaxError",
          { code: "invalid type mapping", context: l }
        );
      if (_ === "@json" || _ === "@none") {
        if (v.processingMode(m, 1))
          throw new t(
            `Invalid JSON-LD syntax; an @context @type value must not be "${_}" in JSON-LD 1.0 mode.`,
            "jsonld.SyntaxError",
            { code: "invalid type mapping", context: l }
          );
      } else if (_ !== "@id" && _ !== "@vocab") {
        if (_ = A(
          m,
          _,
          { vocab: !0, base: !1 },
          l,
          b,
          S
        ), !s(_))
          throw new t(
            "Invalid JSON-LD syntax; an @context @type value must be an absolute IRI.",
            "jsonld.SyntaxError",
            { code: "invalid type mapping", context: l }
          );
        if (_.indexOf("_:") === 0)
          throw new t(
            "Invalid JSON-LD syntax; an @context @type value must be an IRI, not a blank node identifier.",
            "jsonld.SyntaxError",
            { code: "invalid type mapping", context: l }
          );
      }
      k["@type"] = _;
    }
    if ("@container" in P) {
      const _ = o(P["@container"]) ? [P["@container"]] : P["@container"] || [], G = ["@list", "@set", "@index", "@language"];
      let L = !0;
      const B = _.includes("@set");
      if (v.processingMode(m, 1.1)) {
        if (G.push("@graph", "@id", "@type"), _.includes("@list")) {
          if (_.length !== 1)
            throw new t(
              "Invalid JSON-LD syntax; @context @container with @list must have no other values",
              "jsonld.SyntaxError",
              { code: "invalid container mapping", context: l }
            );
        } else if (_.includes("@graph")) {
          if (_.some((T) => T !== "@graph" && T !== "@id" && T !== "@index" && T !== "@set"))
            throw new t(
              "Invalid JSON-LD syntax; @context @container with @graph must have no other values other than @id, @index, and @set",
              "jsonld.SyntaxError",
              { code: "invalid container mapping", context: l }
            );
        } else
          L &= _.length <= (B ? 2 : 1);
        if (_.includes("@type") && (k["@type"] = k["@type"] || "@id", !["@id", "@vocab"].includes(k["@type"])))
          throw new t(
            "Invalid JSON-LD syntax; container: @type requires @type to be @id or @vocab.",
            "jsonld.SyntaxError",
            { code: "invalid type mapping", context: l }
          );
      } else
        L &= !n(P["@container"]), L &= _.length <= 1;
      if (L &= _.every((T) => G.includes(T)), L &= !(B && _.includes("@list")), !L)
        throw new t(
          "Invalid JSON-LD syntax; @context @container value must be one of the following: " + G.join(", "),
          "jsonld.SyntaxError",
          { code: "invalid container mapping", context: l }
        );
      if (k.reverse && !_.every((T) => ["@index", "@set"].includes(T)))
        throw new t(
          "Invalid JSON-LD syntax; @context @container value for a @reverse type definition must be @index or @set.",
          "jsonld.SyntaxError",
          { code: "invalid reverse property", context: l }
        );
      k["@container"] = _;
    }
    if ("@index" in P) {
      if (!("@container" in P) || !k["@container"].includes("@index"))
        throw new t(
          `Invalid JSON-LD syntax; @index without @index in @container: "${P["@index"]}" on term "${u}".`,
          "jsonld.SyntaxError",
          { code: "invalid term definition", context: l }
        );
      if (!o(P["@index"]) || P["@index"].indexOf("@") === 0)
        throw new t(
          `Invalid JSON-LD syntax; @index must expand to an IRI: "${P["@index"]}" on term "${u}".`,
          "jsonld.SyntaxError",
          { code: "invalid term definition", context: l }
        );
      k["@index"] = P["@index"];
    }
    if ("@context" in P && (k["@context"] = P["@context"]), "@language" in P && !("@type" in P)) {
      let _ = P["@language"];
      if (_ !== null && !o(_))
        throw new t(
          "Invalid JSON-LD syntax; @context @language value must be a string or null.",
          "jsonld.SyntaxError",
          { code: "invalid language mapping", context: l }
        );
      _ !== null && (_ = _.toLowerCase()), k["@language"] = _;
    }
    if ("@prefix" in P) {
      if (u.match(/:|\//))
        throw new t(
          "Invalid JSON-LD syntax; @context @prefix used on a compact IRI term",
          "jsonld.SyntaxError",
          { code: "invalid term definition", context: l }
        );
      if (v.isKeyword(k["@id"]))
        throw new t(
          "Invalid JSON-LD syntax; keywords may not be used as prefixes",
          "jsonld.SyntaxError",
          { code: "invalid term definition", context: l }
        );
      if (typeof P["@prefix"] == "boolean")
        k._prefix = P["@prefix"] === !0;
      else
        throw new t(
          "Invalid JSON-LD syntax; @context value for @prefix must be boolean",
          "jsonld.SyntaxError",
          { code: "invalid @prefix value", context: l }
        );
    }
    if ("@direction" in P) {
      const _ = P["@direction"];
      if (_ !== null && _ !== "ltr" && _ !== "rtl")
        throw new t(
          'Invalid JSON-LD syntax; @direction value must be null, "ltr", or "rtl".',
          "jsonld.SyntaxError",
          { code: "invalid base direction", context: l }
        );
      k["@direction"] = _;
    }
    if ("@nest" in P) {
      const _ = P["@nest"];
      if (!o(_) || _ !== "@nest" && _.indexOf("@") === 0)
        throw new t(
          "Invalid JSON-LD syntax; @context @nest value must be a string which is not a keyword other than @nest.",
          "jsonld.SyntaxError",
          { code: "invalid @nest value", context: l }
        );
      k["@nest"] = _;
    }
    // disallow aliasing @context and @preserve
    const N = k["@id"];
    if (N === "@context" || N === "@preserve")
      throw new t(
        "Invalid JSON-LD syntax; @context and @preserve cannot be aliased.",
        "jsonld.SyntaxError",
        { code: "invalid keyword alias", context: l }
      );
    if (R && R.protected && !I && (m.protected[u] = !0, k.protected = !0, !g(R, k)))
      throw new t(
        "Invalid JSON-LD syntax; tried to redefine a protected term.",
        "jsonld.SyntaxError",
        { code: "protected term redefinition", context: l, term: u }
      );
  }, v.expandIri = (m, l, u, b) => A(
    m,
    l,
    u,
    void 0,
    void 0,
    b
  );
  function A(m, l, u, b, S, I) {
    if (l === null || !o(l) || v.isKeyword(l))
      return l;
    if (l.match(y))
      return null;
    if (b && b.hasOwnProperty(l) && S.get(l) !== !0 && v.createTermDefinition({
      activeCtx: m,
      localCtx: b,
      term: l,
      defined: S,
      options: I
    }), u = u || {}, u.vocab) {
      const R = m.mappings.get(l);
      if (R === null)
        return null;
      if (i(R) && "@id" in R)
        return R["@id"];
    }
    const P = l.indexOf(":");
    if (P > 0) {
      const R = l.substr(0, P), E = l.substr(P + 1);
      if (R === "_" || E.indexOf("//") === 0)
        return l;
      b && b.hasOwnProperty(R) && v.createTermDefinition({
        activeCtx: m,
        localCtx: b,
        term: R,
        defined: S,
        options: I
      });
      const k = m.mappings.get(R);
      if (k && k._prefix)
        return k["@id"] + E;
      if (s(l))
        return l;
    }
    if (u.vocab && "@vocab" in m)
      l = m["@vocab"] + l;
    else if (u.base) {
      let R, E;
      "@base" in m ? m["@base"] ? (E = c(I.base, m["@base"]), R = c(E, l)) : (E = m["@base"], R = l) : (E = I.base, R = c(I.base, l)), l = R;
    }
    return l;
  }
  v.getInitialContext = (m) => {
    const l = JSON.stringify({ processingMode: m.processingMode }), u = w.get(l);
    if (u)
      return u;
    const b = {
      processingMode: m.processingMode,
      mappings: /* @__PURE__ */ new Map(),
      inverse: null,
      getInverse: S,
      clone: R,
      revertToPreviousContext: E,
      protected: {}
    };
    return w.size === x && w.clear(), w.set(l, b), b;
    function S() {
      const k = this;
      if (k.inverse)
        return k.inverse;
      const M = k.inverse = {}, j = k.fastCurieMap = {}, N = {}, _ = (k["@language"] || "@none").toLowerCase(), G = k["@direction"], L = k.mappings, B = [...L.keys()].sort(h);
      for (const T of B) {
        const O = L.get(T);
        if (O === null)
          continue;
        let V = O["@container"] || "@none";
        if (V = [].concat(V).sort().join(""), O["@id"] === null)
          continue;
        const D = f(O["@id"]);
        for (const $ of D) {
          let q = M[$];
          const C = v.isKeyword($);
          if (q)
            !C && !O._termHasColon && N[$].push(T);
          else if (M[$] = q = {}, !C && !O._termHasColon) {
            N[$] = [T];
            const z = { iri: $, terms: N[$] };
            $[0] in j ? j[$[0]].push(z) : j[$[0]] = [z];
          }
          if (q[V] || (q[V] = {
            "@language": {},
            "@type": {},
            "@any": {}
          }), q = q[V], P(T, q["@any"], "@none"), O.reverse)
            P(T, q["@type"], "@reverse");
          else if (O["@type"] === "@none")
            P(T, q["@any"], "@none"), P(T, q["@language"], "@none"), P(T, q["@type"], "@none");
          else if ("@type" in O)
            P(T, q["@type"], O["@type"]);
          else if ("@language" in O && "@direction" in O) {
            const z = O["@language"], H = O["@direction"];
            z && H ? P(
              T,
              q["@language"],
              `${z}_${H}`.toLowerCase()
            ) : z ? P(T, q["@language"], z.toLowerCase()) : H ? P(T, q["@language"], `_${H}`) : P(T, q["@language"], "@null");
          } else "@language" in O ? P(
            T,
            q["@language"],
            (O["@language"] || "@null").toLowerCase()
          ) : "@direction" in O ? O["@direction"] ? P(
            T,
            q["@language"],
            `_${O["@direction"]}`
          ) : P(T, q["@language"], "@none") : G ? (P(T, q["@language"], `_${G}`), P(T, q["@language"], "@none"), P(T, q["@type"], "@none")) : (P(T, q["@language"], _), P(T, q["@language"], "@none"), P(T, q["@type"], "@none"));
        }
      }
      for (const T in j)
        I(j, T, 1);
      return M;
    }
    function I(k, M, j) {
      const N = k[M], _ = k[M] = {};
      let G, L;
      for (const B of N)
        G = B.iri, j >= G.length ? L = "" : L = G[j], L in _ ? _[L].push(B) : _[L] = [B];
      for (const B in _)
        B !== "" && I(_, B, j + 1);
    }
    function P(k, M, j) {
      M.hasOwnProperty(j) || (M[j] = k);
    }
    function R() {
      const k = {};
      return k.mappings = e.clone(this.mappings), k.clone = this.clone, k.inverse = null, k.getInverse = this.getInverse, k.protected = e.clone(this.protected), this.previousContext && (k.previousContext = this.previousContext.clone()), k.revertToPreviousContext = this.revertToPreviousContext, "@base" in this && (k["@base"] = this["@base"]), "@language" in this && (k["@language"] = this["@language"]), "@vocab" in this && (k["@vocab"] = this["@vocab"]), k;
    }
    function E() {
      return this.previousContext ? this.previousContext.clone() : this;
    }
  }, v.getContextValue = (m, l, u) => {
    if (l === null)
      return u === "@context" ? void 0 : null;
    if (m.mappings.has(l)) {
      const b = m.mappings.get(l);
      if (r(u))
        return b;
      if (b.hasOwnProperty(u))
        return b[u];
    }
    if (u === "@language" && u in m || u === "@direction" && u in m)
      return m[u];
    if (u !== "@context")
      return null;
  }, v.processingMode = (m, l) => l.toString() >= "1.1" ? !m.processingMode || m.processingMode >= "json-ld-" + l.toString() : m.processingMode === "json-ld-1.0", v.isKeyword = (m) => {
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
  function g(m, l) {
    if (!(m && typeof m == "object") || !(l && typeof l == "object"))
      return m === l;
    const u = Array.isArray(m);
    if (u !== Array.isArray(l))
      return !1;
    if (u) {
      if (m.length !== l.length)
        return !1;
      for (let I = 0; I < m.length; ++I)
        if (!g(m[I], l[I]))
          return !1;
      return !0;
    }
    const b = Object.keys(m), S = Object.keys(l);
    if (b.length !== S.length)
      return !1;
    for (const I in m) {
      let P = m[I], R = l[I];
      if (I === "@container" && Array.isArray(P) && Array.isArray(R) && (P = P.slice().sort(), R = R.slice().sort()), !g(P, R))
        return !1;
    }
    return !0;
  }
  return bs;
}
var ws, id;
function Vh() {
  if (id) return ws;
  id = 1;
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
    isSubject: d
  } = It(), {
    expandIri: p,
    getContextValue: y,
    isKeyword: f,
    process: h,
    processingMode: w
  } = Kt(), {
    isAbsolute: x
  } = Lt(), {
    REGEX_BCP47: v,
    REGEX_KEYWORD: A,
    addValue: g,
    asArray: m,
    getValues: l,
    validateTypeValue: u
  } = Ze(), {
    handleEvent: b
  } = Mn(), S = {};
  ws = S, S.expand = async ({
    activeCtx: M,
    activeProperty: j = null,
    element: N,
    options: _ = {},
    insideList: G = !1,
    insideIndex: L = !1,
    typeScopedContext: B = null
  }) => {
    if (N == null)
      return null;
    if (j === "@default" && (_ = Object.assign({}, _, { isFrame: !1 })), !t(N) && !n(N))
      return !G && (j === null || p(
        M,
        j,
        { vocab: !0 },
        _
      ) === "@graph") ? (_.eventHandler && b({
        event: {
          type: ["JsonLdEvent"],
          code: "free-floating scalar",
          level: "warning",
          message: "Dropping free-floating scalar not in a list.",
          details: {
            value: N
            //activeProperty
            //insideList
          }
        },
        options: _
      }), null) : R({ activeCtx: M, activeProperty: j, value: N, options: _ });
    if (t(N)) {
      let z = [];
      const H = y(
        M,
        j,
        "@container"
      ) || [];
      G = G || H.includes("@list");
      for (let Q = 0; Q < N.length; ++Q) {
        let J = await S.expand({
          activeCtx: M,
          activeProperty: j,
          element: N[Q],
          options: _,
          insideIndex: L,
          typeScopedContext: B
        });
        G && t(J) && (J = { "@list": J }), J !== null && (t(J) ? z = z.concat(J) : z.push(J));
      }
      return z;
    }
    const T = p(
      M,
      j,
      { vocab: !0 },
      _
    ), O = y(M, j, "@context");
    B = B || (M.previousContext ? M : null);
    let V = Object.keys(N).sort(), D = !L;
    if (D && B && V.length <= 2 && !V.includes("@context"))
      for (const z of V) {
        const H = p(
          B,
          z,
          { vocab: !0 },
          _
        );
        if (H === "@value") {
          D = !1, M = B;
          break;
        }
        if (H === "@id" && V.length === 1) {
          D = !1;
          break;
        }
      }
    D && (M = M.revertToPreviousContext()), r(O) || (M = await h({
      activeCtx: M,
      localCtx: O,
      propagate: !0,
      overrideProtected: !0,
      options: _
    })), "@context" in N && (M = await h(
      { activeCtx: M, localCtx: N["@context"], options: _ }
    )), B = M;
    let $ = null;
    for (const z of V)
      if (p(M, z, { vocab: !0 }, _) === "@type") {
        $ = $ || z;
        const Q = N[z], J = Array.isArray(Q) ? Q.length > 1 ? Q.slice().sort() : Q : [Q];
        for (const U of J) {
          const F = y(B, U, "@context");
          r(F) || (M = await h({
            activeCtx: M,
            localCtx: F,
            options: _,
            propagate: !1
          }));
        }
      }
    let q = {};
    await P({
      activeCtx: M,
      activeProperty: j,
      expandedActiveProperty: T,
      element: N,
      expandedParent: q,
      options: _,
      insideList: G,
      typeKey: $,
      typeScopedContext: B
    }), V = Object.keys(q);
    let C = V.length;
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
      const H = q["@value"] === null ? [] : m(q["@value"]), Q = l(q, "@type");
      if (!(w(M, 1.1) && Q.includes("@json") && Q.length === 1)) if (H.length === 0)
        _.eventHandler && b({
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
      "@set" in q && (q = q["@set"], V = Object.keys(q), C = V.length);
    } else C === 1 && "@language" in q && (_.eventHandler && b({
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
    return n(q) && !_.keepFreeFloatingNodes && !G && (j === null || T === "@graph" || (y(M, j, "@container") || []).includes("@graph")) && (q = I({ value: q, count: C, options: _ })), q;
  };
  function I({
    value: M,
    count: j,
    options: N
  }) {
    if (j === 0 || "@value" in M || "@list" in M || j === 1 && "@id" in M) {
      if (N.eventHandler) {
        let _, G;
        j === 0 ? (_ = "empty object", G = "Dropping empty object.") : "@value" in M ? (_ = "object with only @value", G = "Dropping object with only @value.") : "@list" in M ? (_ = "object with only @list", G = "Dropping object with only @list.") : j === 1 && "@id" in M && (_ = "object with only @id", G = "Dropping object with only @id."), b({
          event: {
            type: ["JsonLdEvent"],
            code: _,
            level: "warning",
            message: G,
            details: {
              value: M
            }
          },
          options: N
        });
      }
      return null;
    }
    return M;
  }
  async function P({
    activeCtx: M,
    activeProperty: j,
    expandedActiveProperty: N,
    element: _,
    expandedParent: G,
    options: L = {},
    insideList: B,
    typeKey: T,
    typeScopedContext: O
  }) {
    const V = Object.keys(_).sort(), D = [];
    let $;
    const q = _[T] && p(
      M,
      t(_[T]) ? _[T][0] : _[T],
      { vocab: !0 },
      {
        ...L,
        typeExpansion: !0
      }
    ) === "@json";
    for (const C of V) {
      let z = _[C], H;
      if (C === "@context")
        continue;
      const Q = p(M, C, { vocab: !0 }, L);
      if (Q === null || !(x(Q) || f(Q))) {
        L.eventHandler && b({
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
          options: L
        });
        continue;
      }
      if (f(Q)) {
        if (N === "@reverse")
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
        g(
          G,
          "@id",
          m(z).map((Z) => {
            if (o(Z)) {
              const K = p(M, Z, { base: !0 }, L);
              return L.eventHandler && (K === null ? b(Z === null ? {
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
              }) : x(K) || b({
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
          p(O, Z, { vocab: !0 }),
          m(K).map(
            (W) => p(
              O,
              W,
              { base: !0, vocab: !0 },
              { ...L, typeExpansion: !0 }
            )
          )
        ]))), u(z, L.isFrame), g(
          G,
          "@type",
          m(z).map((Z) => {
            if (o(Z)) {
              const K = p(
                O,
                Z,
                { base: !0, vocab: !0 },
                { ...L, typeExpansion: !0 }
              );
              return K !== "@json" && !x(K) && L.eventHandler && b({
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
      if (Q === "@included" && w(M, 1.1)) {
        const Z = m(await S.expand({
          activeCtx: M,
          activeProperty: j,
          element: z,
          options: L
        }));
        if (!Z.every((K) => d(K)))
          throw new e(
            "Invalid JSON-LD syntax; values of @included must expand to node objects.",
            "jsonld.SyntaxError",
            { code: "invalid @included value", value: z }
          );
        g(
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
        $ = z, q && w(M, 1.1) ? G["@value"] = z : g(
          G,
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
        z = m(z).map((Z) => o(Z) ? Z.toLowerCase() : Z);
        for (const Z of z)
          o(Z) && !Z.match(v) && L.eventHandler && b({
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
        g(
          G,
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
        z = m(z);
        for (const Z of z)
          if (o(Z) && Z !== "ltr" && Z !== "rtl")
            throw new e(
              'Invalid JSON-LD syntax; "@direction" must be "ltr" or "rtl".',
              "jsonld.SyntaxError",
              { code: "invalid base direction", value: z }
            );
        g(
          G,
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
        g(G, "@index", z);
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
          activeCtx: M,
          activeProperty: "@reverse",
          element: z,
          options: L
        }), "@reverse" in H)
          for (const K in H["@reverse"])
            g(
              G,
              K,
              H["@reverse"][K],
              { propertyIsArray: !0 }
            );
        let Z = G["@reverse"] || null;
        for (const K in H) {
          if (K === "@reverse")
            continue;
          Z === null && (Z = G["@reverse"] = {}), g(Z, K, [], { propertyIsArray: !0 });
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
        D.push(C);
        continue;
      }
      let J = M;
      const U = y(M, C, "@context");
      r(U) || (J = await h({
        activeCtx: M,
        localCtx: U,
        propagate: !0,
        overrideProtected: !0,
        options: L
      }));
      const F = y(M, C, "@container") || [];
      if (F.includes("@language") && n(z)) {
        const Z = y(J, C, "@direction");
        H = E(J, z, Z, L);
      } else if (F.includes("@index") && n(z)) {
        const Z = F.includes("@graph"), K = y(J, C, "@index") || "@index", W = K !== "@index" && p(M, K, { vocab: !0 }, L);
        H = await k({
          activeCtx: J,
          options: L,
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
          options: L,
          activeProperty: C,
          value: z,
          asGraph: Z,
          indexKey: "@id"
        });
      } else if (F.includes("@type") && n(z))
        H = await k({
          // since container is `@type`, revert type scoped context when expanding
          activeCtx: J.revertToPreviousContext(),
          options: L,
          activeProperty: C,
          value: z,
          asGraph: !1,
          indexKey: "@type"
        });
      else {
        const Z = Q === "@list";
        if (Z || Q === "@set") {
          let K = j;
          Z && N === "@graph" && (K = null), H = await S.expand({
            activeCtx: J,
            activeProperty: K,
            element: z,
            options: L,
            insideList: Z
          });
        } else y(M, C, "@type") === "@json" ? H = {
          "@type": "@json",
          "@value": z
        } : H = await S.expand({
          activeCtx: J,
          activeProperty: C,
          element: z,
          options: L,
          insideList: !1
        });
      }
      if (!(H === null && Q !== "@value")) {
        if (Q !== "@list" && !s(H) && F.includes("@list") && (H = { "@list": m(H) }), F.includes("@graph") && !F.some((Z) => Z === "@id" || Z === "@index")) {
          if (H = m(H), L.isFrame || (H = H.filter((Z) => {
            const K = Object.keys(Z).length;
            return I({ value: Z, count: K, options: L }) !== null;
          })), H.length === 0)
            continue;
          H = H.map((Z) => ({ "@graph": m(Z) }));
        }
        if (J.mappings.has(C) && J.mappings.get(C).reverse) {
          const Z = G["@reverse"] = G["@reverse"] || {};
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
        g(G, Q, H, {
          propertyIsArray: !0
        });
      }
    }
    if ("@value" in G && !(G["@type"] === "@json" && w(M, 1.1))) {
      if ((n($) || t($)) && !L.isFrame)
        throw new e(
          'Invalid JSON-LD syntax; "@value" value must not be an object or an array.',
          "jsonld.SyntaxError",
          { code: "invalid value object value", value: $ }
        );
    }
    for (const C of D) {
      const z = t(_[C]) ? _[C] : [_[C]];
      for (const H of z) {
        if (!n(H) || Object.keys(H).some((Q) => p(M, Q, { vocab: !0 }, L) === "@value"))
          throw new e(
            "Invalid JSON-LD syntax; nested value must be a node object.",
            "jsonld.SyntaxError",
            { code: "invalid @nest value", value: H }
          );
        await P({
          activeCtx: M,
          activeProperty: j,
          expandedActiveProperty: N,
          element: H,
          expandedParent: G,
          options: L,
          insideList: B,
          typeScopedContext: O,
          typeKey: T
        });
      }
    }
  }
  function R({ activeCtx: M, activeProperty: j, value: N, options: _ }) {
    if (N == null)
      return null;
    const G = p(
      M,
      j,
      { vocab: !0 },
      _
    );
    if (G === "@id")
      return p(M, N, { base: !0 }, _);
    if (G === "@type")
      return p(
        M,
        N,
        { vocab: !0, base: !0 },
        { ..._, typeExpansion: !0 }
      );
    const L = y(M, j, "@type");
    if ((L === "@id" || G === "@graph") && o(N)) {
      const T = p(M, N, { base: !0 }, _);
      return T === null && N.match(A) && _.eventHandler && b({
        event: {
          type: ["JsonLdEvent"],
          code: "reserved @id value",
          level: "warning",
          message: "Reserved @id found.",
          details: {
            id: j
          }
        },
        options: _
      }), { "@id": T };
    }
    if (L === "@vocab" && o(N))
      return {
        "@id": p(M, N, { vocab: !0, base: !0 }, _)
      };
    if (f(G))
      return N;
    const B = {};
    if (L && !["@id", "@vocab", "@none"].includes(L))
      B["@type"] = L;
    else if (o(N)) {
      const T = y(M, j, "@language");
      T !== null && (B["@language"] = T);
      const O = y(M, j, "@direction");
      O !== null && (B["@direction"] = O);
    }
    return ["boolean", "number", "string"].includes(typeof N) || (N = N.toString()), B["@value"] = N, B;
  }
  function E(M, j, N, _) {
    const G = [], L = Object.keys(j).sort();
    for (const B of L) {
      const T = p(M, B, { vocab: !0 }, _);
      let O = j[B];
      t(O) || (O = [O]);
      for (const V of O) {
        if (V === null)
          continue;
        if (!o(V))
          throw new e(
            "Invalid JSON-LD syntax; language map values must be strings.",
            "jsonld.SyntaxError",
            { code: "invalid language map value", languageMap: j }
          );
        const D = { "@value": V };
        T !== "@none" && (B.match(v) || _.eventHandler && b({
          event: {
            type: ["JsonLdEvent"],
            code: "invalid @language value",
            level: "warning",
            message: "@language value must be valid BCP47.",
            details: {
              language: B
            }
          },
          options: _
        }), D["@language"] = B.toLowerCase()), N && (D["@direction"] = N), G.push(D);
      }
    }
    return G;
  }
  async function k({
    activeCtx: M,
    options: j,
    activeProperty: N,
    value: _,
    asGraph: G,
    indexKey: L,
    propertyIndex: B
  }) {
    const T = [], O = Object.keys(_).sort(), V = L === "@type";
    for (let D of O) {
      if (V) {
        const C = y(M, D, "@context");
        r(C) || (M = await h({
          activeCtx: M,
          localCtx: C,
          propagate: !1,
          options: j
        }));
      }
      let $ = _[D];
      t($) || ($ = [$]), $ = await S.expand({
        activeCtx: M,
        activeProperty: N,
        element: $,
        options: j,
        insideList: !1,
        insideIndex: !0
      });
      let q;
      B ? D === "@none" ? q = "@none" : q = R(
        { activeCtx: M, activeProperty: L, value: D, options: j }
      ) : q = p(M, D, { vocab: !0 }, j), L === "@id" ? D = p(M, D, { base: !0 }, j) : V && (D = q);
      for (let C of $) {
        if (G && !c(C) && (C = { "@graph": [C] }), L === "@type")
          q === "@none" || (C["@type"] ? C["@type"] = [D].concat(C["@type"]) : C["@type"] = [D]);
        else {
          if (a(C) && !["@language", "@type", "@index"].includes(L))
            throw new e(
              `Invalid JSON-LD syntax; Attempt to add illegal key to value object: "${L}".`,
              "jsonld.SyntaxError",
              { code: "invalid value object", value: C }
            );
          B ? q !== "@none" && g(C, B, q, {
            propertyIsArray: !0,
            prependValue: !0
          }) : q !== "@none" && !(L in C) && (C[L] = D);
        }
        T.push(C);
      }
    }
    return T;
  }
  return ws;
}
var xs, rd;
function mr() {
  if (rd) return xs;
  rd = 1;
  const { isKeyword: e } = Kt(), t = It(), n = Ne(), i = Ze(), o = He(), r = {};
  return xs = r, r.createMergedNodeMap = (s, a) => {
    a = a || {};
    const c = a.issuer || new i.IdentifierIssuer("_:b"), d = { "@default": {} };
    return r.createNodeMap(s, d, "@default", c), r.mergeNodeMaps(d);
  }, r.createNodeMap = (s, a, c, d, p, y) => {
    if (n.isArray(s)) {
      for (const x of s)
        r.createNodeMap(x, a, c, d, void 0, y);
      return;
    }
    if (!n.isObject(s)) {
      y && y.push(s);
      return;
    }
    if (t.isValue(s)) {
      if ("@type" in s) {
        let x = s["@type"];
        x.indexOf("_:") === 0 && (s["@type"] = x = d.getId(x));
      }
      y && y.push(s);
      return;
    } else if (y && t.isList(s)) {
      const x = [];
      r.createNodeMap(s["@list"], a, c, d, p, x), y.push({ "@list": x });
      return;
    }
    if ("@type" in s) {
      const x = s["@type"];
      for (const v of x)
        v.indexOf("_:") === 0 && d.getId(v);
    }
    n.isUndefined(p) && (p = t.isBlankNode(s) ? d.getId(s["@id"]) : s["@id"]), y && y.push({ "@id": p });
    const f = a[c], h = f[p] = f[p] || {};
    h["@id"] = p;
    const w = Object.keys(s).sort();
    for (let x of w) {
      if (x === "@id")
        continue;
      if (x === "@reverse") {
        const A = { "@id": p }, g = s["@reverse"];
        for (const m in g) {
          const l = g[m];
          for (const u of l) {
            let b = u["@id"];
            t.isBlankNode(u) && (b = d.getId(b)), r.createNodeMap(u, a, c, d, b), i.addValue(
              f[b],
              m,
              A,
              { propertyIsArray: !0, allowDuplicate: !1 }
            );
          }
        }
        continue;
      }
      if (x === "@graph") {
        p in a || (a[p] = {}), r.createNodeMap(s[x], a, p, d);
        continue;
      }
      if (x === "@included") {
        r.createNodeMap(s[x], a, c, d);
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
      const v = s[x];
      if (x.indexOf("_:") === 0 && (x = d.getId(x)), v.length === 0) {
        i.addValue(h, x, [], { propertyIsArray: !0 });
        continue;
      }
      for (let A of v)
        if (x === "@type" && (A = A.indexOf("_:") === 0 ? d.getId(A) : A), t.isSubject(A) || t.isSubjectReference(A)) {
          if ("@id" in A && !A["@id"])
            continue;
          const g = t.isBlankNode(A) ? d.getId(A["@id"]) : A["@id"];
          i.addValue(
            h,
            x,
            { "@id": g },
            { propertyIsArray: !0, allowDuplicate: !1 }
          ), r.createNodeMap(A, a, c, d, g);
        } else if (t.isValue(A))
          i.addValue(
            h,
            x,
            A,
            { propertyIsArray: !0, allowDuplicate: !1 }
          );
        else if (t.isList(A)) {
          const g = [];
          r.createNodeMap(A["@list"], a, c, d, p, g), A = { "@list": g }, i.addValue(
            h,
            x,
            A,
            { propertyIsArray: !0, allowDuplicate: !1 }
          );
        } else
          r.createNodeMap(A, a, c, d, p), i.addValue(
            h,
            x,
            A,
            { propertyIsArray: !0, allowDuplicate: !1 }
          );
    }
  }, r.mergeNodeMapGraphs = (s) => {
    const a = {};
    for (const c of Object.keys(s).sort())
      for (const d of Object.keys(s[c]).sort()) {
        const p = s[c][d];
        d in a || (a[d] = { "@id": d });
        const y = a[d];
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
    for (const d of c) {
      if (d === "@default")
        continue;
      const p = s[d];
      let y = a[d];
      y ? "@graph" in y || (y["@graph"] = []) : a[d] = y = {
        "@id": d,
        "@graph": []
      };
      const f = y["@graph"];
      for (const h of Object.keys(p).sort()) {
        const w = p[h];
        t.isSubjectReference(w) || f.push(w);
      }
    }
    return a;
  }, xs;
}
var Ss, sd;
function Uh() {
  if (sd) return Ss;
  sd = 1;
  const {
    isSubjectReference: e
  } = It(), {
    createMergedNodeMap: t
  } = mr(), n = {};
  return Ss = n, n.flatten = (i) => {
    const o = t(i), r = [], s = Object.keys(o).sort();
    for (let a = 0; a < s.length; ++a) {
      const c = o[s[a]];
      e(c) || r.push(c);
    }
    return r;
  }, Ss;
}
var As, ad;
function Gh() {
  if (ad) return As;
  ad = 1;
  const e = He(), t = It(), n = Ne(), {
    REGEX_BCP47: i,
    addValue: o
  } = Ze(), {
    handleEvent: r
  } = Mn(), {
    // RDF,
    RDF_LIST: s,
    RDF_FIRST: a,
    RDF_REST: c,
    RDF_NIL: d,
    RDF_TYPE: p,
    // RDF_PLAIN_LITERAL,
    // RDF_XML_LITERAL,
    RDF_JSON_LITERAL: y,
    // RDF_OBJECT,
    // RDF_LANGSTRING,
    // XSD,
    XSD_BOOLEAN: f,
    XSD_DOUBLE: h,
    XSD_INTEGER: w,
    XSD_STRING: x
  } = va(), v = {};
  As = v, v.fromRDF = async (g, m) => {
    const {
      useRdfType: l = !1,
      useNativeTypes: u = !1,
      rdfDirection: b = null
    } = m, S = {}, I = { "@default": S }, P = {};
    if (b) {
      if (b === "compound-literal")
        throw new e(
          "Unsupported rdfDirection value.",
          "jsonld.InvalidRdfDirection",
          { value: b }
        );
      if (b !== "i18n-datatype")
        throw new e(
          "Unknown rdfDirection value.",
          "jsonld.InvalidRdfDirection",
          { value: b }
        );
    }
    for (const k of g) {
      const M = k.graph.termType === "DefaultGraph" ? "@default" : k.graph.value;
      M in I || (I[M] = {}), M !== "@default" && !(M in S) && (S[M] = { "@id": M });
      const j = I[M], N = k.subject.value, _ = k.predicate.value, G = k.object;
      N in j || (j[N] = { "@id": N });
      const L = j[N], B = G.termType.endsWith("Node");
      if (B && !(G.value in j) && (j[G.value] = { "@id": G.value }), _ === p && !l && B) {
        o(L, "@type", G.value, { propertyIsArray: !0 });
        continue;
      }
      const T = A(G, u, b, m);
      if (o(L, _, T, { propertyIsArray: !0 }), B)
        if (G.value === d) {
          const O = j[G.value];
          "usages" in O || (O.usages = []), O.usages.push({
            node: L,
            property: _,
            value: T
          });
        } else G.value in P ? P[G.value] = !1 : P[G.value] = {
          node: L,
          property: _,
          value: T
        };
    }
    for (const k in I) {
      const M = I[k];
      if (!(d in M))
        continue;
      const j = M[d];
      if (j.usages) {
        for (let N of j.usages) {
          let _ = N.node, G = N.property, L = N.value;
          const B = [], T = [];
          let O = Object.keys(_).length;
          for (; G === c && n.isObject(P[_["@id"]]) && n.isArray(_[a]) && _[a].length === 1 && n.isArray(_[c]) && _[c].length === 1 && (O === 3 || O === 4 && n.isArray(_["@type"]) && _["@type"].length === 1 && _["@type"][0] === s) && (B.push(_[a][0]), T.push(_["@id"]), N = P[_["@id"]], _ = N.node, G = N.property, L = N.value, O = Object.keys(_).length, !!t.isBlankNode(_)); )
            ;
          delete L["@id"], L["@list"] = B.reverse();
          for (const V of T)
            delete M[V];
        }
        delete j.usages;
      }
    }
    const R = [], E = Object.keys(S).sort();
    for (const k of E) {
      const M = S[k];
      if (k in I) {
        const j = M["@graph"] = [], N = I[k], _ = Object.keys(N).sort();
        for (const G of _) {
          const L = N[G];
          t.isSubjectReference(L) || j.push(L);
        }
      }
      t.isSubjectReference(M) || R.push(M);
    }
    return R;
  };
  function A(g, m, l, u) {
    if (g.termType.endsWith("Node"))
      return { "@id": g.value };
    const b = { "@value": g.value };
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
      }), b["@language"] = g.language;
    else {
      let S = g.datatype.value;
      if (S || (S = x), S === y) {
        S = "@json";
        try {
          b["@value"] = JSON.parse(b["@value"]);
        } catch (I) {
          throw new e(
            "JSON literal could not be parsed.",
            "jsonld.InvalidJsonLiteral",
            { code: "invalid JSON literal", value: b["@value"], cause: I }
          );
        }
      }
      if (m) {
        if (S === f)
          b["@value"] === "true" ? b["@value"] = !0 : b["@value"] === "false" && (b["@value"] = !1);
        else if (n.isNumeric(b["@value"]))
          if (S === w) {
            const I = parseInt(b["@value"], 10);
            I.toFixed(0) === b["@value"] && (b["@value"] = I);
          } else S === h && (b["@value"] = parseFloat(b["@value"]));
        [f, w, h, x].includes(S) || (b["@type"] = S);
      } else if (l === "i18n-datatype" && S.startsWith("https://www.w3.org/ns/i18n#")) {
        const [, I, P] = S.split(/[#_]/);
        I.length > 0 && (b["@language"] = I, I.match(i) || u.eventHandler && r({
          event: {
            type: ["JsonLdEvent"],
            code: "invalid @language value",
            level: "warning",
            message: "@language value must be valid BCP47.",
            details: {
              language: I
            }
          },
          options: u
        })), b["@direction"] = P;
      } else S !== x && (b["@type"] = S);
    }
    return b;
  }
  return As;
}
var Is, od;
function Fh() {
  return od || (od = 1, Is = function e(t) {
    return t === null || typeof t != "object" || t.toJSON != null ? JSON.stringify(t) : Array.isArray(t) ? "[" + t.reduce((n, i, o) => {
      const r = o === 0 ? "" : ",", s = i === void 0 || typeof i == "symbol" ? null : i;
      return n + r + e(s);
    }, "") + "]" : "{" + Object.keys(t).sort().reduce((n, i, o) => {
      if (t[i] === void 0 || typeof t[i] == "symbol")
        return n;
      const r = n.length === 0 ? "" : ",";
      return n + r + e(i) + ":" + e(t[i]);
    }, "") + "}";
  }), Is;
}
var qs, cd;
function Bh() {
  if (cd) return qs;
  cd = 1;
  const { createNodeMap: e } = mr(), { isKeyword: t } = Kt(), n = It(), i = Fh(), o = He(), r = Ne(), s = Ze(), {
    handleEvent: a
  } = Mn(), {
    // RDF,
    // RDF_LIST,
    RDF_FIRST: c,
    RDF_REST: d,
    RDF_NIL: p,
    RDF_TYPE: y,
    // RDF_PLAIN_LITERAL,
    // RDF_XML_LITERAL,
    RDF_JSON_LITERAL: f,
    // RDF_OBJECT,
    RDF_LANGSTRING: h,
    // XSD,
    XSD_BOOLEAN: w,
    XSD_DOUBLE: x,
    XSD_INTEGER: v,
    XSD_STRING: A
  } = va(), {
    isAbsolute: g
  } = Lt(), m = {};
  qs = m, m.toRDF = (S, I) => {
    const P = new s.IdentifierIssuer("_:b"), R = { "@default": {} };
    e(S, R, "@default", P);
    const E = [], k = Object.keys(R).sort();
    for (const M of k) {
      let j;
      if (M === "@default")
        j = { termType: "DefaultGraph", value: "" };
      else if (g(M))
        M.startsWith("_:") ? j = { termType: "BlankNode" } : j = { termType: "NamedNode" }, j.value = M;
      else {
        I.eventHandler && a({
          event: {
            type: ["JsonLdEvent"],
            code: "relative graph reference",
            level: "warning",
            message: "Relative graph reference found.",
            details: {
              graph: M
            }
          },
          options: I
        });
        continue;
      }
      l(E, R[M], j, P, I);
    }
    return E;
  };
  function l(S, I, P, R, E) {
    const k = Object.keys(I).sort();
    for (const M of k) {
      const j = I[M], N = Object.keys(j).sort();
      for (let _ of N) {
        const G = j[_];
        if (_ === "@type")
          _ = y;
        else if (t(_))
          continue;
        for (const L of G) {
          const B = {
            termType: M.startsWith("_:") ? "BlankNode" : "NamedNode",
            value: M
          };
          if (!g(M)) {
            E.eventHandler && a({
              event: {
                type: ["JsonLdEvent"],
                code: "relative subject reference",
                level: "warning",
                message: "Relative subject reference found.",
                details: {
                  subject: M
                }
              },
              options: E
            });
            continue;
          }
          const T = {
            termType: _.startsWith("_:") ? "BlankNode" : "NamedNode",
            value: _
          };
          if (!g(_)) {
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
          if (T.termType === "BlankNode" && !E.produceGeneralizedRdf) {
            E.eventHandler && a({
              event: {
                type: ["JsonLdEvent"],
                code: "blank node predicate",
                level: "warning",
                message: "Dropping blank node predicate.",
                details: {
                  // FIXME: add better issuer API to get reverse mapping
                  property: R.getOldIds().find((V) => R.getId(V) === _)
                }
              },
              options: E
            });
            continue;
          }
          const O = b(
            L,
            R,
            S,
            P,
            E.rdfDirection,
            E
          );
          O && S.push({
            subject: B,
            predicate: T,
            object: O,
            graph: P
          });
        }
      }
    }
  }
  function u(S, I, P, R, E, k) {
    const M = { termType: "NamedNode", value: c }, j = { termType: "NamedNode", value: d }, N = { termType: "NamedNode", value: p }, _ = S.pop(), G = _ ? { termType: "BlankNode", value: I.getId() } : N;
    let L = G;
    for (const B of S) {
      const T = b(
        B,
        I,
        P,
        R,
        E,
        k
      ), O = { termType: "BlankNode", value: I.getId() };
      P.push({
        subject: L,
        predicate: M,
        object: T,
        graph: R
      }), P.push({
        subject: L,
        predicate: j,
        object: O,
        graph: R
      }), L = O;
    }
    if (_) {
      const B = b(
        _,
        I,
        P,
        R,
        E,
        k
      );
      P.push({
        subject: L,
        predicate: M,
        object: B,
        graph: R
      }), P.push({
        subject: L,
        predicate: j,
        object: N,
        graph: R
      });
    }
    return G;
  }
  function b(S, I, P, R, E, k) {
    const M = {};
    if (n.isValue(S)) {
      M.termType = "Literal", M.value = void 0, M.datatype = {
        termType: "NamedNode"
      };
      let j = S["@value"];
      const N = S["@type"] || null;
      if (N === "@json")
        M.value = i(j), M.datatype.value = f;
      else if (r.isBoolean(j))
        M.value = j.toString(), M.datatype.value = N || w;
      else if (r.isDouble(j) || N === x)
        r.isDouble(j) || (j = parseFloat(j)), M.value = j.toExponential(15).replace(/(\d)0*e\+?/, "$1E"), M.datatype.value = N || x;
      else if (r.isNumber(j))
        M.value = j.toFixed(0), M.datatype.value = N || v;
      else if ("@direction" in S && E === "i18n-datatype") {
        const _ = (S["@language"] || "").toLowerCase(), G = S["@direction"], L = `https://www.w3.org/ns/i18n#${_}_${G}`;
        M.datatype.value = L, M.value = j;
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
        "@language" in S ? ("@direction" in S && !E && k.eventHandler && a({
          event: {
            type: ["JsonLdEvent"],
            code: "rdfDirection not set",
            level: "warning",
            message: "rdfDirection not set for @direction.",
            details: {
              object: M.value
            }
          },
          options: k
        }), M.value = j, M.datatype.value = N || h, M.language = S["@language"]) : ("@direction" in S && !E && k.eventHandler && a({
          event: {
            type: ["JsonLdEvent"],
            code: "rdfDirection not set",
            level: "warning",
            message: "rdfDirection not set for @direction.",
            details: {
              object: M.value
            }
          },
          options: k
        }), M.value = j, M.datatype.value = N || A);
      }
    } else if (n.isList(S)) {
      const j = u(
        S["@list"],
        I,
        P,
        R,
        E,
        k
      );
      M.termType = j.termType, M.value = j.value;
    } else {
      const j = r.isObject(S) ? S["@id"] : S;
      M.termType = j.startsWith("_:") ? "BlankNode" : "NamedNode", M.value = j;
    }
    return M.termType === "NamedNode" && !g(M.value) ? (k.eventHandler && a({
      event: {
        type: ["JsonLdEvent"],
        code: "relative object reference",
        level: "warning",
        message: "Relative object reference found.",
        details: {
          object: M.value
        }
      },
      options: k
    }), null) : M;
  }
  return qs;
}
var Rs, dd;
function Zh() {
  if (dd) return Rs;
  dd = 1;
  const { isKeyword: e } = Kt(), t = It(), n = Ne(), i = Ze(), o = Lt(), r = He(), {
    createNodeMap: s,
    mergeNodeMapGraphs: a
  } = mr(), c = {};
  Rs = c, c.frameMergedOrDefault = (l, u, b) => {
    const S = {
      options: b,
      embedded: !1,
      graph: "@default",
      graphMap: { "@default": {} },
      subjectStack: [],
      link: {},
      bnodeMap: {}
    }, I = new i.IdentifierIssuer("_:b");
    s(l, S.graphMap, "@default", I), b.merged && (S.graphMap["@merged"] = a(S.graphMap), S.graph = "@merged"), S.subjects = S.graphMap[S.graph];
    const P = [];
    c.frame(S, Object.keys(S.subjects).sort(), u, P), b.pruneBlankNodeIdentifiers && (b.bnodesToClear = Object.keys(S.bnodeMap).filter((R) => S.bnodeMap[R].length === 1));
    // remove @preserve from results
    return b.link = {}, v(P, b);
  }, c.frame = (l, u, b, S, I = null) => {
    f(b), b = b[0];
    const P = l.options, R = {
      embed: y(b, P, "embed"),
      explicit: y(b, P, "explicit"),
      requireAll: y(b, P, "requireAll")
    };
    l.link.hasOwnProperty(l.graph) || (l.link[l.graph] = {});
    const E = l.link[l.graph], k = h(l, u, b, R), M = Object.keys(k).sort();
    for (const j of M) {
      const N = k[j];
      if (I === null ? l.uniqueEmbeds = { [l.graph]: {} } : l.uniqueEmbeds[l.graph] = l.uniqueEmbeds[l.graph] || {}, R.embed === "@link" && j in E) {
        A(S, I, E[j]);
        continue;
      }
      const _ = { "@id": j };
      if (j.indexOf("_:") === 0 && i.addValue(l.bnodeMap, j, _, { propertyIsArray: !0 }), E[j] = _, (R.embed === "@first" || R.embed === "@last") && l.is11)
        throw new r(
          "Invalid JSON-LD syntax; invalid value of @embed.",
          "jsonld.SyntaxError",
          { code: "invalid @embed value", frame: b }
        );
      if (!(!l.embedded && l.uniqueEmbeds[l.graph].hasOwnProperty(j))) {
        if (l.embedded && (R.embed === "@never" || p(N, l.graph, l.subjectStack))) {
          A(S, I, _);
          continue;
        }
        if (l.embedded && (R.embed == "@first" || R.embed == "@once") && l.uniqueEmbeds[l.graph].hasOwnProperty(j)) {
          A(S, I, _);
          continue;
        }
        if (R.embed === "@last" && j in l.uniqueEmbeds[l.graph] && x(l, j), l.uniqueEmbeds[l.graph][j] = { parent: S, property: I }, l.subjectStack.push({ subject: N, graph: l.graph }), j in l.graphMap) {
          let G = !1, L = null;
          "@graph" in b ? (L = b["@graph"][0], G = !(j === "@merged" || j === "@default"), n.isObject(L) || (L = {})) : (G = l.graph !== "@merged", L = {}), G && c.frame(
            { ...l, graph: j, embedded: !1 },
            Object.keys(l.graphMap[j]).sort(),
            [L],
            _,
            "@graph"
          );
        }
        "@included" in b && c.frame(
          { ...l, embedded: !1 },
          u,
          b["@included"],
          _,
          "@included"
        );
        for (const G of Object.keys(N).sort()) {
          if (e(G)) {
            if (_[G] = i.clone(N[G]), G === "@type")
              for (const L of N["@type"])
                L.indexOf("_:") === 0 && i.addValue(
                  l.bnodeMap,
                  L,
                  _,
                  { propertyIsArray: !0 }
                );
            continue;
          }
          if (!(R.explicit && !(G in b)))
            for (const L of N[G]) {
              const B = G in b ? b[G] : d(R);
              if (t.isList(L)) {
                const T = b[G] && b[G][0] && b[G][0]["@list"] ? b[G][0]["@list"] : d(R), O = { "@list": [] };
                A(_, G, O);
                const V = L["@list"];
                for (const D of V)
                  t.isSubjectReference(D) ? c.frame(
                    { ...l, embedded: !0 },
                    [D["@id"]],
                    T,
                    O,
                    "@list"
                  ) : A(O, "@list", i.clone(D));
              } else t.isSubjectReference(L) ? c.frame(
                { ...l, embedded: !0 },
                [L["@id"]],
                B,
                _,
                G
              ) : m(B[0], L) && A(_, G, i.clone(L));
            }
        }
        for (const G of Object.keys(b).sort()) {
          if (G === "@type") {
            if (!n.isObject(b[G][0]) || !("@default" in b[G][0]))
              continue;
          } else if (e(G))
            continue;
          const L = b[G][0] || {};
          if (!y(L, P, "omitDefault") && !(G in _)) {
            let T = "@null";
            "@default" in L && (T = i.clone(L["@default"])), n.isArray(T) || (T = [T]), _[G] = [{ "@preserve": T }];
          }
        }
        for (const G of Object.keys(b["@reverse"] || {}).sort()) {
          const L = b["@reverse"][G];
          for (const B of Object.keys(l.subjects))
            i.getValues(l.subjects[B], G).some((O) => O["@id"] === j) && (_["@reverse"] = _["@reverse"] || {}, i.addValue(
              _["@reverse"],
              G,
              [],
              { propertyIsArray: !0 }
            ), c.frame(
              { ...l, embedded: !0 },
              [B],
              L,
              _["@reverse"][G],
              I
            ));
        }
        A(S, I, _), l.subjectStack.pop();
      }
    }
  }, c.cleanupNull = (l, u) => {
    if (n.isArray(l))
      return l.map((S) => c.cleanupNull(S, u)).filter((S) => S);
    if (l === "@null")
      return null;
    if (n.isObject(l)) {
      if ("@id" in l) {
        const b = l["@id"];
        if (u.link.hasOwnProperty(b)) {
          const S = u.link[b].indexOf(l);
          if (S !== -1)
            return u.link[b][S];
          u.link[b].push(l);
        } else
          u.link[b] = [l];
      }
      for (const b in l)
        l[b] = c.cleanupNull(l[b], u);
    }
    return l;
  };
  function d(l) {
    const u = {};
    for (const b in l)
      l[b] !== void 0 && (u["@" + b] = [l[b]]);
    return [u];
  }
  function p(l, u, b) {
    for (let S = b.length - 1; S >= 0; --S) {
      const I = b[S];
      if (I.graph === u && I.subject["@id"] === l["@id"])
        return !0;
    }
    return !1;
  }
  function y(l, u, b) {
    const S = "@" + b;
    let I = S in l ? l[S][0] : u[b];
    if (b === "embed") {
      if (I === !0)
        I = "@once";
      else if (I === !1)
        I = "@never";
      else if (I !== "@always" && I !== "@never" && I !== "@link" && I !== "@first" && I !== "@last" && I !== "@once")
        throw new r(
          "Invalid JSON-LD syntax; invalid value of @embed.",
          "jsonld.SyntaxError",
          { code: "invalid @embed value", frame: l }
        );
    }
    return I;
  }
  function f(l) {
    if (!n.isArray(l) || l.length !== 1 || !n.isObject(l[0]))
      throw new r(
        "Invalid JSON-LD syntax; a JSON-LD frame must be a single object.",
        "jsonld.SyntaxError",
        { frame: l }
      );
    if ("@id" in l[0]) {
      for (const u of i.asArray(l[0]["@id"]))
        if (!(n.isObject(u) || o.isAbsolute(u)) || n.isString(u) && u.indexOf("_:") === 0)
          throw new r(
            "Invalid JSON-LD syntax; invalid @id in frame.",
            "jsonld.SyntaxError",
            { code: "invalid frame", frame: l }
          );
    }
    if ("@type" in l[0]) {
      for (const u of i.asArray(l[0]["@type"]))
        if (!(n.isObject(u) || o.isAbsolute(u) || u === "@json") || n.isString(u) && u.indexOf("_:") === 0)
          throw new r(
            "Invalid JSON-LD syntax; invalid @type in frame.",
            "jsonld.SyntaxError",
            { code: "invalid frame", frame: l }
          );
    }
  }
  function h(l, u, b, S) {
    const I = {};
    for (const P of u) {
      const R = l.graphMap[l.graph][P];
      w(l, R, b, S) && (I[P] = R);
    }
    return I;
  }
  function w(l, u, b, S) {
    let I = !0, P = !1;
    for (const R in b) {
      let E = !1;
      const k = i.getValues(u, R), M = i.getValues(b, R).length === 0;
      if (R === "@id") {
        if (n.isEmptyObject(b["@id"][0] || {}) ? E = !0 : b["@id"].length >= 0 && (E = b["@id"].includes(k[0])), !S.requireAll)
          return E;
      } else if (R === "@type") {
        if (I = !1, M) {
          if (k.length > 0)
            return !1;
          E = !0;
        } else if (b["@type"].length === 1 && n.isEmptyObject(b["@type"][0]))
          E = k.length > 0;
        else
          for (const j of b["@type"])
            n.isObject(j) && "@default" in j ? E = !0 : E = E || k.some((N) => N === j);
        if (!S.requireAll)
          return E;
      } else {
        if (e(R))
          continue;
        {
          const j = i.getValues(b, R)[0];
          let N = !1;
          if (j && (f([j]), N = "@default" in j), I = !1, k.length === 0 && N)
            continue;
          if (k.length > 0 && M)
            return !1;
          if (j === void 0) {
            if (k.length > 0)
              return !1;
            E = !0;
          } else if (t.isList(j)) {
            const _ = j["@list"][0];
            if (t.isList(k[0])) {
              const G = k[0]["@list"];
              t.isValue(_) ? E = G.some((L) => m(_, L)) : (t.isSubject(_) || t.isSubjectReference(_)) && (E = G.some((L) => g(
                l,
                _,
                L,
                S
              )));
            }
          } else t.isValue(j) ? E = k.some((_) => m(j, _)) : t.isSubjectReference(j) ? E = k.some((_) => g(l, j, _, S)) : n.isObject(j) ? E = k.length > 0 : E = !1;
        }
      }
      if (!E && S.requireAll)
        return !1;
      P = P || E;
    }
    return I || P;
  }
  function x(l, u) {
    const b = l.uniqueEmbeds[l.graph], S = b[u], I = S.parent, P = S.property, R = { "@id": u };
    if (n.isArray(I)) {
      for (let k = 0; k < I.length; ++k)
        if (i.compareValues(I[k], R)) {
          I[k] = R;
          break;
        }
    } else {
      const k = n.isArray(I[P]);
      i.removeValue(I, P, R, { propertyIsArray: k }), i.addValue(I, P, R, { propertyIsArray: k });
    }
    const E = (k) => {
      const M = Object.keys(b);
      for (const j of M)
        j in b && n.isObject(b[j].parent) && b[j].parent["@id"] === k && (delete b[j], E(j));
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
  function v(l, u) {
    if (n.isArray(l))
      return l.map((b) => v(b, u));
    if (n.isObject(l)) {
      // remove @preserve
      if ("@preserve" in l)
        return l["@preserve"][0];
      if (t.isValue(l))
        return l;
      if (t.isList(l))
        return l["@list"] = v(l["@list"], u), l;
      if ("@id" in l) {
        const b = l["@id"];
        if (u.link.hasOwnProperty(b)) {
          const S = u.link[b].indexOf(l);
          if (S !== -1)
            return u.link[b][S];
          u.link[b].push(l);
        } else
          u.link[b] = [l];
      }
      for (const b in l) {
        if (b === "@id" && u.bnodesToClear.includes(l[b])) {
          delete l["@id"];
          continue;
        }
        l[b] = v(l[b], u);
      }
    }
    return l;
  }
  function A(l, u, b) {
    n.isObject(l) ? i.addValue(l, u, b, { propertyIsArray: !0 }) : l.push(b);
  }
  function g(l, u, b, S) {
    if (!("@id" in b))
      return !1;
    const I = l.subjects[b["@id"]];
    return I && w(l, I, u, S);
  }
  function m(l, u) {
    const b = u["@value"], S = u["@type"], I = u["@language"], P = l["@value"] ? n.isArray(l["@value"]) ? l["@value"] : [l["@value"]] : [], R = l["@type"] ? n.isArray(l["@type"]) ? l["@type"] : [l["@type"]] : [], E = l["@language"] ? n.isArray(l["@language"]) ? l["@language"] : [l["@language"]] : [];
    return P.length === 0 && R.length === 0 && E.length === 0 ? !0 : !(!(P.includes(b) || n.isEmptyObject(P[0])) || !(!S && R.length === 0 || R.includes(S) || S && n.isEmptyObject(R[0])) || !(!I && E.length === 0 || E.includes(I) || I && n.isEmptyObject(E[0])));
  }
  return Rs;
}
var js, ld;
function Hh() {
  if (ld) return js;
  ld = 1;
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
    isSubjectReference: d
  } = It(), {
    expandIri: p,
    getContextValue: y,
    isKeyword: f,
    process: h,
    processingMode: w
  } = Kt(), {
    removeBase: x,
    prependBase: v
  } = Lt(), {
    REGEX_KEYWORD: A,
    addValue: g,
    asArray: m,
    compareShortestLeast: l
  } = Ze(), u = {};
  js = u, u.compact = async ({
    activeCtx: I,
    activeProperty: P = null,
    element: R,
    options: E = {}
  }) => {
    if (t(R)) {
      let M = [];
      for (let j = 0; j < R.length; ++j) {
        const N = await u.compact({
          activeCtx: I,
          activeProperty: P,
          element: R[j],
          options: E
        });
        N !== null && M.push(N);
      }
      return E.compactArrays && M.length === 1 && (y(
        I,
        P,
        "@container"
      ) || []).length === 0 && (M = M[0]), M;
    }
    const k = y(I, P, "@context");
    if (o(k) || (I = await h({
      activeCtx: I,
      localCtx: k,
      propagate: !0,
      overrideProtected: !0,
      options: E
    })), n(R)) {
      if (E.link && "@id" in R && E.link.hasOwnProperty(R["@id"])) {
        const T = E.link[R["@id"]];
        for (let O = 0; O < T.length; ++O)
          if (T[O].expanded === R)
            return T[O].compacted;
      }
      if (s(R) || d(R)) {
        const T = u.compactValue({ activeCtx: I, activeProperty: P, value: R, options: E });
        return E.link && d(R) && (E.link.hasOwnProperty(R["@id"]) || (E.link[R["@id"]] = []), E.link[R["@id"]].push({ expanded: R, compacted: T })), T;
      }
      if (r(R) && (y(
        I,
        P,
        "@container"
      ) || []).includes("@list"))
        return u.compact({
          activeCtx: I,
          activeProperty: P,
          element: R["@list"],
          options: E
        });
      const M = P === "@reverse", j = {}, N = I;
      !s(R) && !d(R) && (I = I.revertToPreviousContext());
      const _ = y(N, P, "@context");
      o(_) || (I = await h({
        activeCtx: I,
        localCtx: _,
        propagate: !0,
        overrideProtected: !0,
        options: E
      })), E.link && "@id" in R && (E.link.hasOwnProperty(R["@id"]) || (E.link[R["@id"]] = []), E.link[R["@id"]].push({ expanded: R, compacted: j }));
      let G = R["@type"] || [];
      G.length > 1 && (G = Array.from(G).sort());
      const L = I;
      for (const T of G) {
        const O = u.compactIri(
          { activeCtx: L, iri: T, relativeTo: { vocab: !0 } }
        ), V = y(N, O, "@context");
        o(V) || (I = await h({
          activeCtx: I,
          localCtx: V,
          options: E,
          propagate: !1
        }));
      }
      const B = Object.keys(R).sort();
      for (const T of B) {
        const O = R[T];
        if (T === "@id") {
          let V = m(O).map(
            ($) => u.compactIri({
              activeCtx: I,
              iri: $,
              relativeTo: { vocab: !1 },
              base: E.base
            })
          );
          V.length === 1 && (V = V[0]);
          const D = u.compactIri(
            { activeCtx: I, iri: "@id", relativeTo: { vocab: !0 } }
          );
          j[D] = V;
          continue;
        }
        if (T === "@type") {
          let V = m(O).map(
            (z) => u.compactIri({
              activeCtx: N,
              iri: z,
              relativeTo: { vocab: !0 }
            })
          );
          V.length === 1 && (V = V[0]);
          const D = u.compactIri(
            { activeCtx: I, iri: "@type", relativeTo: { vocab: !0 } }
          ), C = (y(
            I,
            D,
            "@container"
          ) || []).includes("@set") && w(I, 1.1) || t(V) && O.length === 0;
          g(j, D, V, { propertyIsArray: C });
          continue;
        }
        if (T === "@reverse") {
          const V = await u.compact({
            activeCtx: I,
            activeProperty: "@reverse",
            element: O,
            options: E
          });
          for (const D in V)
            if (I.mappings.has(D) && I.mappings.get(D).reverse) {
              const $ = V[D], C = (y(
                I,
                D,
                "@container"
              ) || []).includes("@set") || !E.compactArrays;
              g(
                j,
                D,
                $,
                { propertyIsArray: C }
              ), delete V[D];
            }
          if (Object.keys(V).length > 0) {
            const D = u.compactIri({
              activeCtx: I,
              iri: T,
              relativeTo: { vocab: !0 }
            });
            g(j, D, V);
          }
          continue;
        }
        if (T === "@preserve") {
          const V = await u.compact({
            activeCtx: I,
            activeProperty: P,
            element: O,
            options: E
          });
          t(V) && V.length === 0 || g(j, T, V);
          continue;
        }
        if (T === "@index") {
          if ((y(
            I,
            P,
            "@container"
          ) || []).includes("@index"))
            continue;
          const D = u.compactIri({
            activeCtx: I,
            iri: T,
            relativeTo: { vocab: !0 }
          });
          g(j, D, O);
          continue;
        }
        if (T !== "@graph" && T !== "@list" && T !== "@included" && f(T)) {
          const V = u.compactIri({
            activeCtx: I,
            iri: T,
            relativeTo: { vocab: !0 }
          });
          g(j, V, O);
          continue;
        }
        if (!t(O))
          throw new e(
            "JSON-LD expansion error; expanded value must be an array.",
            "jsonld.SyntaxError"
          );
        if (O.length === 0) {
          const V = u.compactIri({
            activeCtx: I,
            iri: T,
            value: O,
            relativeTo: { vocab: !0 },
            reverse: M
          }), D = I.mappings.has(V) ? I.mappings.get(V)["@nest"] : null;
          let $ = j;
          D && (S(I, D, E), n(j[D]) || (j[D] = {}), $ = j[D]), g(
            $,
            V,
            O,
            {
              propertyIsArray: !0
            }
          );
        }
        for (const V of O) {
          const D = u.compactIri({
            activeCtx: I,
            iri: T,
            value: V,
            relativeTo: { vocab: !0 },
            reverse: M
          }), $ = I.mappings.has(D) ? I.mappings.get(D)["@nest"] : null;
          let q = j;
          $ && (S(I, $, E), n(j[$]) || (j[$] = {}), q = j[$]);
          const C = y(
            I,
            D,
            "@container"
          ) || [], z = a(V), H = r(V);
          let Q;
          H ? Q = V["@list"] : z && (Q = V["@graph"]);
          let J = await u.compact({
            activeCtx: I,
            activeProperty: D,
            element: H || z ? Q : V,
            options: E
          });
          if (H)
            if (t(J) || (J = [J]), !C.includes("@list"))
              J = {
                [u.compactIri({
                  activeCtx: I,
                  iri: "@list",
                  relativeTo: { vocab: !0 }
                })]: J
              }, "@index" in V && (J[u.compactIri({
                activeCtx: I,
                iri: "@index",
                relativeTo: { vocab: !0 }
              })] = V["@index"]);
            else {
              g(q, D, J, {
                valueIsArray: !0,
                allowDuplicate: !0
              });
              continue;
            }
          if (z)
            if (C.includes("@graph") && (C.includes("@id") || C.includes("@index") && c(V))) {
              let U;
              q.hasOwnProperty(D) ? U = q[D] : q[D] = U = {};
              const F = (C.includes("@id") ? V["@id"] : V["@index"]) || u.compactIri({
                activeCtx: I,
                iri: "@none",
                relativeTo: { vocab: !0 }
              });
              g(
                U,
                F,
                J,
                {
                  propertyIsArray: !E.compactArrays || C.includes("@set")
                }
              );
            } else C.includes("@graph") && c(V) ? (t(J) && J.length > 1 && (J = { "@included": J }), g(
              q,
              D,
              J,
              {
                propertyIsArray: !E.compactArrays || C.includes("@set")
              }
            )) : (t(J) && J.length === 1 && E.compactArrays && (J = J[0]), J = {
              [u.compactIri({
                activeCtx: I,
                iri: "@graph",
                relativeTo: { vocab: !0 }
              })]: J
            }, "@id" in V && (J[u.compactIri({
              activeCtx: I,
              iri: "@id",
              relativeTo: { vocab: !0 }
            })] = V["@id"]), "@index" in V && (J[u.compactIri({
              activeCtx: I,
              iri: "@index",
              relativeTo: { vocab: !0 }
            })] = V["@index"]), g(
              q,
              D,
              J,
              {
                propertyIsArray: !E.compactArrays || C.includes("@set")
              }
            ));
          else if (C.includes("@language") || C.includes("@index") || C.includes("@id") || C.includes("@type")) {
            let U;
            q.hasOwnProperty(D) ? U = q[D] : q[D] = U = {};
            let F;
            if (C.includes("@language"))
              s(J) && (J = J["@value"]), F = V["@language"];
            else if (C.includes("@index")) {
              const Z = y(
                I,
                D,
                "@index"
              ) || "@index", K = u.compactIri(
                { activeCtx: I, iri: Z, relativeTo: { vocab: !0 } }
              );
              if (Z === "@index")
                F = V["@index"], delete J[K];
              else {
                let W;
                if ([F, ...W] = m(J[Z] || []), !i(F))
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
                activeCtx: I,
                iri: "@id",
                relativeTo: { vocab: !0 }
              });
              F = J[Z], delete J[Z];
            } else if (C.includes("@type")) {
              const Z = u.compactIri({
                activeCtx: I,
                iri: "@type",
                relativeTo: { vocab: !0 }
              });
              let K;
              switch ([F, ...K] = m(J[Z] || []), K.length) {
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
                activeCtx: I,
                activeProperty: D,
                element: { "@id": V["@id"] },
                options: E
              }));
            }
            F || (F = u.compactIri({
              activeCtx: I,
              iri: "@none",
              relativeTo: { vocab: !0 }
            })), g(
              U,
              F,
              J,
              {
                propertyIsArray: C.includes("@set")
              }
            );
          } else {
            const U = !E.compactArrays || C.includes("@set") || C.includes("@list") || t(J) && J.length === 0 || T === "@list" || T === "@graph";
            g(
              q,
              D,
              J,
              { propertyIsArray: U }
            );
          }
        }
      }
      return j;
    }
    return R;
  }, u.compactIri = ({
    activeCtx: I,
    iri: P,
    value: R = null,
    relativeTo: E = { vocab: !1 },
    reverse: k = !1,
    base: M = null
  }) => {
    if (P === null)
      return P;
    I.isPropertyTermScoped && I.previousContext && (I = I.previousContext);
    const j = I.getInverse();
    if (f(P) && P in j && "@none" in j[P] && "@type" in j[P]["@none"] && "@none" in j[P]["@none"]["@type"])
      return j[P]["@none"]["@type"]["@none"];
    if (E.vocab && P in j) {
      const B = I["@language"] || "@none", T = [];
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
      let O = "@language", V = "@null";
      if (k)
        O = "@type", V = "@reverse", T.push("@set");
      else if (r(R)) {
        "@index" in R || T.push("@list");
        const $ = R["@list"];
        if ($.length === 0)
          O = "@any", V = "@none";
        else {
          let q = $.length === 0 ? B : null, C = null;
          for (let z = 0; z < $.length; ++z) {
            const H = $[z];
            let Q = "@none", J = "@none";
            if (s(H))
              if ("@direction" in H) {
                const U = (H["@language"] || "").toLowerCase(), F = H["@direction"];
                Q = `${U}_${F}`;
              } else "@language" in H ? Q = H["@language"].toLowerCase() : "@type" in H ? J = H["@type"] : Q = "@null";
            else
              J = "@id";
            if (q === null ? q = Q : Q !== q && s(H) && (q = "@none"), C === null ? C = J : J !== C && (C = "@none"), q === "@none" && C === "@none")
              break;
          }
          q = q || "@none", C = C || "@none", C !== "@none" ? (O = "@type", V = C) : V = q;
        }
      } else {
        if (s(R))
          if ("@language" in R && !("@index" in R)) {
            T.push("@language", "@language@set"), V = R["@language"];
            const $ = R["@direction"];
            $ && (V = `${V}_${$}`);
          } else "@direction" in R && !("@index" in R) ? V = `_${R["@direction"]}` : "@type" in R && (O = "@type", V = R["@type"]);
        else
          O = "@type", V = "@id";
        T.push("@set");
      }
      T.push("@none"), n(R) && !("@index" in R) && T.push("@index", "@index@set"), s(R) && Object.keys(R).length === 1 && T.push("@language", "@language@set");
      const D = b(
        I,
        P,
        R,
        T,
        O,
        V
      );
      if (D !== null)
        return D;
    }
    if (E.vocab && "@vocab" in I) {
      const B = I["@vocab"];
      if (P.indexOf(B) === 0 && P !== B) {
        const T = P.substr(B.length);
        if (!I.mappings.has(T))
          return T;
      }
    }
    let N = null;
    const _ = [];
    let G = I.fastCurieMap;
    const L = P.length - 1;
    for (let B = 0; B < L && P[B] in G; ++B)
      G = G[P[B]], "" in G && _.push(G[""][0]);
    for (let B = _.length - 1; B >= 0; --B) {
      const T = _[B], O = T.terms;
      for (const V of O) {
        const D = V + ":" + P.substr(T.iri.length);
        I.mappings.get(V)._prefix && (!I.mappings.has(D) || R === null && I.mappings.get(D)["@id"] === P) && (N === null || l(D, N) < 0) && (N = D);
      }
    }
    if (N !== null)
      return N;
    for (const [B, T] of I.mappings)
      if (T && T._prefix && P.startsWith(B + ":"))
        throw new e(
          `Absolute IRI "${P}" confused with prefix "${B}".`,
          "jsonld.SyntaxError",
          { code: "IRI confused with prefix", context: I }
        );
    if (!E.vocab)
      if ("@base" in I)
        if (I["@base"]) {
          const B = x(v(M, I["@base"]), P);
          return A.test(B) ? `./${B}` : B;
        } else
          return P;
      else
        return x(M, P);
    return P;
  }, u.compactValue = ({ activeCtx: I, activeProperty: P, value: R, options: E }) => {
    if (s(R)) {
      const N = y(I, P, "@type"), _ = y(I, P, "@language"), G = y(I, P, "@direction"), L = y(I, P, "@container") || [], B = "@index" in R && !L.includes("@index");
      if (!B && N !== "@none" && (R["@type"] === N || "@language" in R && R["@language"] === _ && "@direction" in R && R["@direction"] === G || "@language" in R && R["@language"] === _ || "@direction" in R && R["@direction"] === G))
        return R["@value"];
      const T = Object.keys(R).length, O = T === 1 || T === 2 && "@index" in R && !B, V = "@language" in I, D = i(R["@value"]), $ = I.mappings.has(P) && I.mappings.get(P)["@language"] === null;
      if (O && N !== "@none" && (!V || !D || $))
        return R["@value"];
      const q = {};
      return B && (q[u.compactIri({
        activeCtx: I,
        iri: "@index",
        relativeTo: { vocab: !0 }
      })] = R["@index"]), "@type" in R ? q[u.compactIri({
        activeCtx: I,
        iri: "@type",
        relativeTo: { vocab: !0 }
      })] = u.compactIri(
        { activeCtx: I, iri: R["@type"], relativeTo: { vocab: !0 } }
      ) : "@language" in R && (q[u.compactIri({
        activeCtx: I,
        iri: "@language",
        relativeTo: { vocab: !0 }
      })] = R["@language"]), "@direction" in R && (q[u.compactIri({
        activeCtx: I,
        iri: "@direction",
        relativeTo: { vocab: !0 }
      })] = R["@direction"]), q[u.compactIri({
        activeCtx: I,
        iri: "@value",
        relativeTo: { vocab: !0 }
      })] = R["@value"], q;
    }
    const k = p(
      I,
      P,
      { vocab: !0 },
      E
    ), M = y(I, P, "@type"), j = u.compactIri({
      activeCtx: I,
      iri: R["@id"],
      relativeTo: { vocab: M === "@vocab" },
      base: E.base
    });
    return M === "@id" || M === "@vocab" || k === "@graph" ? j : {
      [u.compactIri({
        activeCtx: I,
        iri: "@id",
        relativeTo: { vocab: !0 }
      })]: j
    };
  };
  function b(I, P, R, E, k, M) {
    M === null && (M = "@null");
    const j = [];
    if ((M === "@id" || M === "@reverse") && n(R) && "@id" in R) {
      M === "@reverse" && j.push("@reverse");
      const _ = u.compactIri(
        { activeCtx: I, iri: R["@id"], relativeTo: { vocab: !0 } }
      );
      I.mappings.has(_) && I.mappings.get(_) && I.mappings.get(_)["@id"] === R["@id"] ? j.push.apply(j, ["@vocab", "@id"]) : j.push.apply(j, ["@id", "@vocab"]);
    } else {
      j.push(M);
      const _ = j.find((G) => G.includes("_"));
      _ && j.push(_.replace(/^[^_]+_/, "_"));
    }
    j.push("@none");
    const N = I.inverse[P];
    for (const _ of E) {
      if (!(_ in N))
        continue;
      const G = N[_][k];
      for (const L of j)
        if (L in G)
          return G[L];
    }
    return null;
  }
  function S(I, P, R) {
    if (p(I, P, { vocab: !0 }, R) !== "@nest")
      throw new e(
        "JSON-LD compact error; nested property must have an @nest value resolving to @nest.",
        "jsonld.SyntaxError",
        { code: "invalid @nest value" }
      );
  }
  return js;
}
var $s, ud;
function Jh() {
  return ud || (ud = 1, $s = (e) => {
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
  }), $s;
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
var Ps, pd;
function Kh() {
  if (pd) return Ps;
  pd = 1;
  const e = ga(), t = Mh(), n = Ze(), i = Dh(), o = n.IdentifierIssuer, r = He(), s = ul(), a = zh(), { expand: c } = Vh(), { flatten: d } = Uh(), { fromRDF: p } = Gh(), { toRDF: y } = Bh(), {
    frameMergedOrDefault: f,
    cleanupNull: h
  } = Zh(), {
    isArray: w,
    isObject: x,
    isString: v
  } = Ne(), {
    isSubjectReference: A
  } = It(), {
    expandIri: g,
    getInitialContext: m,
    process: l,
    processingMode: u
  } = Kt(), {
    compact: b,
    compactIri: S
  } = Hh(), {
    createNodeMap: I,
    createMergedNodeMap: P,
    mergeNodeMaps: R
  } = mr(), {
    logEventHandler: E,
    logWarningEventHandler: k,
    safeEventHandler: M,
    setDefaultEventHandler: j,
    setupEventHandler: N,
    strictEventHandler: _,
    unhandledEventHandler: G
  } = Mn(), L = function(T) {
    const O = {}, D = new s({ max: 100 });
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
      z = $(z, {
        base: v(q) ? q : "",
        compactArrays: !0,
        compactToRelative: !0,
        graph: !1,
        skipExpansion: !1,
        link: !1,
        issuer: new o("_:b"),
        contextResolver: new i(
          { sharedCache: D }
        )
      }), z.link && (z.skipExpansion = !0), z.compactToRelative || delete z.base;
      let H;
      z.skipExpansion ? H = q : H = await T.expand(q, z);
      const Q = await T.processContext(
        m(z),
        C,
        z
      );
      let J = await b({
        activeCtx: Q,
        element: H,
        options: z
      });
      z.compactArrays && !z.graph && w(J) ? J.length === 1 ? J = J[0] : J.length === 0 && (J = {}) : z.graph && x(J) && (J = [J]), x(C) && "@context" in C && (C = C["@context"]), C = n.clone(C), w(C) || (C = [C]);
      const U = C;
      C = [];
      for (let Z = 0; Z < U.length; ++Z)
        (!x(U[Z]) || Object.keys(U[Z]).length > 0) && C.push(U[Z]);
      const F = C.length > 0;
      if (C.length === 1 && (C = C[0]), w(J)) {
        const Z = S({
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
      C = $(C, {
        keepFreeFloatingNodes: !1,
        contextResolver: new i(
          { sharedCache: D }
        )
      });
      const z = {}, H = [];
      if ("expandContext" in C) {
        const F = n.clone(C.expandContext);
        x(F) && "@context" in F ? z.expandContext = F : z.expandContext = { "@context": F }, H.push(z.expandContext);
      }
      let Q;
      if (!v(q))
        z.input = n.clone(q);
      else {
        const F = await T.get(q, C);
        Q = F.documentUrl, z.input = F.document, F.contextUrl && (z.remoteContext = { "@context": F.contextUrl }, H.push(z.remoteContext));
      }
      "base" in C || (C.base = Q || "");
      let J = m(C);
      for (const F of H)
        J = await l({ activeCtx: J, localCtx: F, options: C });
      let U = await c({
        activeCtx: J,
        element: z.input,
        options: C
      });
      return x(U) && "@graph" in U && Object.keys(U).length === 1 ? U = U["@graph"] : U === null && (U = []), w(U) || (U = [U]), U;
    }, T.flatten = async function(q, C, z) {
      if (arguments.length < 1)
        return new TypeError("Could not flatten, too few arguments.");
      typeof C == "function" ? C = null : C = C || null, z = $(z, {
        base: v(q) ? q : "",
        contextResolver: new i(
          { sharedCache: D }
        )
      });
      const H = await T.expand(q, z), Q = d(H);
      return C === null ? Q : (z.graph = !0, z.skipExpansion = !0, await T.compact(Q, C, z));
    }, T.frame = async function(q, C, z) {
      if (arguments.length < 2)
        throw new TypeError("Could not frame, too few arguments.");
      if (z = $(z, {
        base: v(q) ? q : "",
        embed: "@once",
        explicit: !1,
        requireAll: !1,
        omitDefault: !1,
        bnodesToClear: [],
        contextResolver: new i(
          { sharedCache: D }
        )
      }), v(C)) {
        const ee = await T.get(C, z);
        if (C = ee.document, ee.contextUrl) {
          let re = C["@context"];
          re ? w(re) ? re.push(ee.contextUrl) : re = [re, ee.contextUrl] : re = ee.contextUrl, C["@context"] = re;
        }
      }
      const H = C ? C["@context"] || {} : {}, Q = await T.processContext(
        m(z),
        H,
        z
      );
      z.hasOwnProperty("omitGraph") || (z.omitGraph = u(Q, 1.1)), z.hasOwnProperty("pruneBlankNodeIdentifiers") || (z.pruneBlankNodeIdentifiers = u(Q, 1.1));
      const J = await T.expand(q, z), U = { ...z };
      U.isFrame = !0, U.keepFreeFloatingNodes = !0;
      const F = await T.expand(C, U), Z = Object.keys(C).map((ee) => g(Q, ee, { vocab: !0 }));
      U.merged = !Z.includes("@graph"), U.is11 = u(Q, 1.1);
      const K = f(J, F, U);
      U.graph = !z.omitGraph, U.skipExpansion = !0, U.link = {}, U.framing = !0;
      let W = await T.compact(K, H, U);
      return U.link = {}, W = h(W, U), W;
    }, T.link = async function(q, C, z) {
      const H = {};
      return C && (H["@context"] = C), H["@embed"] = "@link", T.frame(q, H, z);
    }, T.normalize = T.canonize = async function(q, C) {
      if (arguments.length < 1)
        throw new TypeError("Could not canonize, too few arguments.");
      if (C = $(C, {
        base: v(q) ? q : null,
        algorithm: "URDNA2015",
        skipExpansion: !1,
        safe: !0,
        contextResolver: new i(
          { sharedCache: D }
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
      C = $(C, {
        format: v(q) ? "application/n-quads" : void 0
      });
      const { format: z } = C;
      let { rdfParser: H } = C;
      if (z) {
        if (H = H || O[z], !H)
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
      C = $(C, {
        base: v(q) ? q : "",
        skipExpansion: !1,
        contextResolver: new i(
          { sharedCache: D }
        )
      });
      let z;
      C.skipExpansion ? z = q : z = await T.expand(q, C);
      const H = y(z, C);
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
      C = $(C, {
        base: v(q) ? q : "",
        contextResolver: new i(
          { sharedCache: D }
        )
      });
      const z = await T.expand(q, C);
      return P(z, C);
    }, T.merge = async function(q, C, z) {
      if (arguments.length < 1)
        throw new TypeError("Could not merge, too few arguments.");
      if (!w(q))
        throw new TypeError('Could not merge, "docs" must be an array.');
      typeof C == "function" ? C = null : C = C || null, z = $(z, {
        contextResolver: new i(
          { sharedCache: D }
        )
      });
      const H = await Promise.all(q.map((ee) => {
        const re = { ...z };
        return T.expand(ee, re);
      }));
      let Q = !0;
      "mergeNodes" in z && (Q = z.mergeNodes);
      const J = z.issuer || new o("_:b"), U = { "@default": {} };
      for (let ee = 0; ee < H.length; ++ee) {
        const re = n.relabelBlankNodes(H[ee], {
          issuer: new o("_:b" + ee + "-")
        }), Se = Q || ee === 0 ? U : { "@default": {} };
        if (I(re, Se, "@default", J), Se !== U)
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
      const F = R(U), Z = [], K = Object.keys(F).sort();
      for (let ee = 0; ee < K.length; ++ee) {
        const re = F[K[ee]];
        A(re) || Z.push(re);
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
        v(H.document) && (H.document = JSON.parse(H.document));
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
      return z = $(z, {
        base: "",
        contextResolver: new i(
          { sharedCache: D }
        )
      }), C === null ? m(z) : (C = n.clone(C), x(C) && "@context" in C || (C = { "@context": C }), l({ activeCtx: q, localCtx: C, options: z }));
    }, T.getContextValue = Kt().getContextValue, T.documentLoaders = {}, T.useDocumentLoader = function(q) {
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
      O[q] = C;
    }, T.unregisterRDFParser = function(q) {
      delete O[q];
    }, T.registerRDFParser("application/n-quads", a.parse), T.registerRDFParser("application/nquads", a.parse), T.url = Lt(), T.logEventHandler = E, T.logWarningEventHandler = k, T.safeEventHandler = M, T.setDefaultEventHandler = j, T.strictEventHandler = _, T.unhandledEventHandler = G, T.util = n, Object.assign(T, n), T.promises = T, T.RequestQueue = ll(), T.JsonLdProcessor = Jh()(T), t.setupGlobals(T), t.setupDocumentLoaders(T);
    function $(q, {
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
        { eventHandler: N({ options: q }) }
      );
    }
    return T;
  }, B = function() {
    return L(function() {
      return B();
    });
  };
  return L(B), Ps = B, Ps;
}
var Qh = Kh();
const Wh = /* @__PURE__ */ aa(Qh);
async function fd(e, t, n = {}) {
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
async function pl(e, t, n, i = !1) {
  const [o, r] = await Promise.all([
    fd(e, n, { safe: i }),
    fd(t, n, { safe: i })
  ]), s = Ls("sha256").update(o, "utf8").digest(), a = Ls("sha256").update(r, "utf8").digest(), c = new Uint8Array(64);
  return c.set(a, 0), c.set(s, 32), c;
}
async function Yh(e, t, n = {}) {
  const i = n.created ?? (/* @__PURE__ */ new Date()).toISOString(), o = Xh(
    e["@context"],
    t.id,
    i
  ), r = await pl(
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
  const { proof: r, ...s } = e, { proofValue: a, ...c } = i, d = { ...c, "@context": s["@context"] }, p = await pl(
    s,
    d,
    n.documentLoader,
    n.safe ?? !1
  );
  try {
    const y = ra(i.proofValue);
    return await Sh(y, p, t);
  } catch {
    return !1;
  }
}
const tm = Jf, nm = ch, im = Object.freeze({
  RmAccreditation: `${Dt}accreditation.json`,
  RmOperationalScope: `${Dt}operational-scope.json`,
  RmCertificate: `${Dt}certificate.json`,
  RmStudy: `${Dt}study.json`,
  RmLabAuthority: `${Dt}lab-authority.json`,
  BitstringStatusListCredential: `${Dt}status-list.json`,
  RecognizedEntityCredential: `${Dt}recognized-entity.json`
});
function rm(e) {
  return e === "BitstringStatusListCredential" ? [Zt] : e === "RecognizedEntityCredential" ? [Zt, yu] : [Zt, mu];
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
function yr(e, t, n, i) {
  return [
    e,
    t ?? "unresolved",
    n,
    i.purpose,
    `${i.profile.id}@${i.profile.version}`,
    i.evaluationTime
  ].join(" | ");
}
function an(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
const om = (e) => e.replace(/~/g, "~0").replace(/\//g, "~1");
function cm(e, t) {
  if (!t.startsWith("/")) return [];
  let n = [{ pointer: "", value: e }];
  for (const i of t.slice(1).split("/")) {
    const o = [];
    for (const { pointer: r, value: s } of n)
      i === "*" ? Array.isArray(s) && s.forEach((a, c) => o.push({ pointer: `${r}/${c}`, value: a })) : an(s) && Object.hasOwn(s, i) && o.push({ pointer: `${r}/${om(i)}`, value: s[i] });
    n = o;
  }
  return n;
}
function un(e, t) {
  if (t === "") return e;
  if (!t.startsWith("/")) return;
  let n = e;
  for (const i of t.slice(1).split("/")) {
    const o = i.replace(/~1/g, "/").replace(/~0/g, "~");
    if (Array.isArray(n) && /^(0|[1-9][0-9]*)$/.test(o)) n = n[Number(o)];
    else if (an(n) && Object.hasOwn(n, o)) n = n[o];
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
const pn = (e) => ce("not_established", [e], [], "not_run");
function dm(e, t) {
  const n = Date.parse(t), i = typeof e.validFrom == "string" ? Date.parse(e.validFrom) : NaN, o = typeof e.validUntil == "string" ? Date.parse(e.validUntil) : NaN;
  if (!Number.isFinite(n) || !Number.isFinite(i) || !Number.isFinite(o))
    return ce("not_established", ["Validity period or evaluation time is missing or invalid."]);
  const r = ["/validFrom", "/validUntil"];
  return n < i ? ce("contradicted", [`Not yet valid at ${t}.`], r) : n > o ? ce("contradicted", [`Expired before ${t}.`], r) : ce("established", [`Valid at ${t}.`], r);
}
function lm(e, t) {
  return (Array.isArray(e.relatedResource) ? e.relatedResource : []).filter(an).map((i) => {
    const o = String(i.id);
    try {
      const r = ar(t.resolve(o).bytes);
      return r === i.digestSRI ? { id: o, state: "established", reason: "Digest matches the exact referenced bytes." } : { id: o, state: "contradicted", reason: `Digest mismatch: referenced bytes hash to ${r}.` };
    } catch (r) {
      const s = r instanceof Ce ? r.code : "UNAVAILABLE";
      return { id: o, state: "not_established", reason: `Referenced resource unavailable: ${s}.` };
    }
  });
}
async function Ui(e, t, n) {
  const i = [], o = n.staticResolver ?? t, r = n.binding ?? sm, s = pn("Not evaluated because protection is not established."), a = (u = {}) => {
    const b = xe(i.map((S) => S.state));
    return Object.freeze({
      artifactId: e,
      protection: Object.freeze({
        artifactId: e,
        ...ce(b, i.filter((S) => S.state !== "established").map((S) => `${S.check}: ${S.reason}`).concat(b === "established" ? ["Protection established from the original secured bytes."] : []))
      }),
      checks: Object.freeze(i.map((S) => Object.freeze(S))),
      validity: s,
      relatedResources: Object.freeze([]),
      facts: Object.freeze([]),
      ...u
    });
  }, c = (u, b, S, I = {}) => (i.push({ check: u, state: b, reason: S }), a(I));
  let d;
  try {
    d = t.resolve(e).bytes;
  } catch (u) {
    const b = u instanceof Ce ? u.code : "UNAVAILABLE";
    return c("resolve", "not_established", `Artifact is not available: ${b}.`);
  }
  const p = ar(d);
  i.push({ check: "resolve", state: "established", reason: `Resolved ${d.byteLength} bytes.` });
  let y;
  try {
    y = JSON.parse(new TextDecoder("utf-8", { fatal: !0 }).decode(d));
  } catch {
    return c("parse", "contradicted", "Artifact bytes are not valid UTF-8 JSON.", { digestSRI: p });
  }
  if (!an(y)) return c("parse", "contradicted", "Artifact is not a JSON object.", { digestSRI: p });
  i.push({ check: "parse", state: "established", reason: "Strict UTF-8 JSON object." });
  const f = y["@context"], h = r.contexts(Array.isArray(y.type) ? y.type[1] : void 0);
  if (!Array.isArray(f) || f.length !== h.length || h.some((u, b) => f[b] !== u))
    return c(
      "carrier",
      "not_established",
      "Only the exact supported context combination for this type is accepted.",
      { digestSRI: p }
    );
  i.push({ check: "carrier", state: "established", reason: "Exact supported context combination." });
  const w = Array.isArray(y.type) ? y.type : [], x = w.length === 2 && w[0] === "VerifiableCredential" ? String(w[1]) : void 0, v = x === void 0 ? void 0 : r.schemas[x];
  if (v === void 0)
    return c("type", "not_established", `Credential type is not a recognized ${r.name} artifact type.`, { digestSRI: p });
  if (Array.isArray(y.credentialSchema))
    return c(
      "type",
      "not_established",
      "Multiple credentialSchema declarations have no accepted composition in this binding.",
      { digestSRI: p, artifactType: x }
    );
  if ((an(y.credentialSchema) ? y.credentialSchema.id : void 0) !== v)
    return c("type", "contradicted", `${x} must declare schema ${v}.`, { digestSRI: p, artifactType: x });
  i.push({ check: "type", state: "established", reason: `${x} with its pinned schema.` });
  try {
    const u = new tm({ allErrors: !0, strict: !0 });
    nm(u);
    const b = JSON.parse(new TextDecoder().decode(o.resolve(v).bytes)), S = u.compile(b);
    if (!S(y)) {
      const I = (S.errors ?? []).map((P) => `${P.instancePath || "/"} ${P.message ?? ""}`).join("; ");
      return c("schema", "contradicted", `Schema validation failed: ${I}`, { digestSRI: p, artifactType: x });
    }
  } catch (u) {
    const b = u instanceof Ce ? u.code : "INVALID_SCHEMA";
    return c("schema", "not_established", `Pinned schema unavailable: ${b}.`, { digestSRI: p, artifactType: x });
  }
  i.push({ check: "schema", state: "established", reason: "Valid against the pinned schema." });
  const g = y.proof;
  if (Array.isArray(g))
    return c("proof", "not_established", "Proof sets and chains are unsupported in the initial slice.", { digestSRI: p, artifactType: x });
  if (!an(g))
    return c("proof", "not_established", "The artifact carries no proof.", { digestSRI: p, artifactType: x });
  i.push({ check: "proof", state: "established", reason: "One eddsa-rdfc-2022 assertionMethod proof." });
  const m = Iu(y.issuer, g.verificationMethod, o);
  if (m.state !== "established" || m.publicKey === void 0)
    return c(
      "key",
      m.state === "established" ? "not_established" : m.state,
      `${m.code}: ${m.reason}`,
      { digestSRI: p, artifactType: x, keyAuthorization: m }
    );
  i.push({ check: "key", state: "established", reason: m.reason });
  try {
    const u = Td(o);
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
    const b = u instanceof Error ? u.message.split(`
`)[0] : String(u);
    return c(
      "signature",
      "contradicted",
      `Safe JSON-LD processing rejected the artifact: ${b}`,
      { digestSRI: p, artifactType: x, keyAuthorization: m }
    );
  }
  i.push({ check: "signature", state: "established", reason: "Ed25519 signature verifies (safe mode, offline catalog)." });
  const l = [];
  for (const u of n.manifest.factMappings) {
    const b = String(u.fact);
    for (const { pointer: S, value: I } of cm(y, String(u.nativePath)))
      l.push(Object.freeze({ fact: b, pointer: S, value: structuredClone(I) }));
  }
  return a({
    digestSRI: p,
    artifactType: x,
    keyAuthorization: m,
    validity: dm(y, n.evaluationTime),
    relatedResources: Object.freeze(lm(y, t).map((u) => Object.freeze(u))),
    facts: Object.freeze(l)
  });
}
var we = Uint8Array, Oe = Uint16Array, ba = Int32Array, gr = new we([
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
]), vr = new we([
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
]), Us = new we([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), fl = function(e, t) {
  for (var n = new Oe(31), i = 0; i < 31; ++i)
    n[i] = t += 1 << e[i - 1];
  for (var o = new ba(n[30]), i = 1; i < 30; ++i)
    for (var r = n[i]; r < n[i + 1]; ++r)
      o[r] = r - n[i] << 5 | i;
  return { b: n, r: o };
}, hl = fl(gr, 2), ml = hl.b, Gs = hl.r;
ml[28] = 258, Gs[258] = 28;
var yl = fl(vr, 0), um = yl.b, hd = yl.r, Fs = new Oe(32768);
for (var de = 0; de < 32768; ++de) {
  var _t = (de & 43690) >> 1 | (de & 21845) << 1;
  _t = (_t & 52428) >> 2 | (_t & 13107) << 2, _t = (_t & 61680) >> 4 | (_t & 3855) << 4, Fs[de] = ((_t & 65280) >> 8 | (_t & 255) << 8) >> 1;
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
        for (var d = o << 4 | e[o], p = t - e[o], y = s[e[o] - 1]++ << p, f = y | (1 << p) - 1; y <= f; ++y)
          a[Fs[y] >> c] = d;
  } else
    for (a = new Oe(i), o = 0; o < i; ++o)
      e[o] && (a[o] = Fs[s[e[o] - 1]++] >> 15 - e[o]);
  return a;
}), Mt = new we(288);
for (var de = 0; de < 144; ++de)
  Mt[de] = 8;
for (var de = 144; de < 256; ++de)
  Mt[de] = 9;
for (var de = 256; de < 280; ++de)
  Mt[de] = 7;
for (var de = 280; de < 288; ++de)
  Mt[de] = 8;
var _n = new we(32);
for (var de = 0; de < 32; ++de)
  _n[de] = 5;
var pm = /* @__PURE__ */ ct(Mt, 9, 0), fm = /* @__PURE__ */ ct(Mt, 9, 1), hm = /* @__PURE__ */ ct(_n, 5, 0), mm = /* @__PURE__ */ ct(_n, 5, 1), _s = function(e) {
  for (var t = e[0], n = 1; n < e.length; ++n)
    e[n] > t && (t = e[n]);
  return t;
}, Qe = function(e, t, n) {
  var i = t / 8 | 0;
  return (e[i] | e[i + 1] << 8) >> (t & 7) & n;
}, Ts = function(e, t) {
  var n = t / 8 | 0;
  return (e[n] | e[n + 1] << 8 | e[n + 2] << 16) >> (t & 7);
}, wa = function(e) {
  return (e + 7) / 8 | 0;
}, gl = function(e, t, n) {
  return (n == null || n > e.length) && (n = e.length), new we(e.subarray(t, n));
}, ym = [
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
  var i = new Error(t || ym[e]);
  if (i.code = e, Error.captureStackTrace && Error.captureStackTrace(i, We), !n)
    throw i;
  return i;
}, gm = function(e, t, n, i) {
  var o = e.length, r = 0;
  if (!o || t.f && !t.l)
    return n || new we(0);
  var s = !n, a = s || t.i != 2, c = t.i;
  s && (n = new we(o * 3));
  var d = function(U) {
    var F = n.length;
    if (U > F) {
      var Z = new we(Math.max(F * 2, U));
      Z.set(n), n = Z;
    }
  }, p = t.f || 0, y = t.p || 0, f = t.b || 0, h = t.l, w = t.d, x = t.m, v = t.n, A = o * 8;
  do {
    if (!h) {
      p = Qe(e, y, 1);
      var g = Qe(e, y + 1, 3);
      if (y += 3, g)
        if (g == 1)
          h = fm, w = mm, x = 9, v = 5;
        else if (g == 2) {
          var b = Qe(e, y, 31) + 257, S = Qe(e, y + 10, 15) + 4, I = b + Qe(e, y + 5, 31) + 1;
          y += 14;
          for (var P = new we(I), R = new we(19), E = 0; E < S; ++E)
            R[Us[E]] = Qe(e, y + E * 3, 7);
          y += S * 3;
          for (var k = _s(R), M = (1 << k) - 1, j = ct(R, k, 1), E = 0; E < I; ) {
            var N = j[Qe(e, y, M)];
            y += N & 15;
            var m = N >> 4;
            if (m < 16)
              P[E++] = m;
            else {
              var _ = 0, G = 0;
              for (m == 16 ? (G = 3 + Qe(e, y, 3), y += 2, _ = P[E - 1]) : m == 17 ? (G = 3 + Qe(e, y, 7), y += 3) : m == 18 && (G = 11 + Qe(e, y, 127), y += 7); G--; )
                P[E++] = _;
            }
          }
          var L = P.subarray(0, b), B = P.subarray(b);
          x = _s(L), v = _s(B), h = ct(L, x, 1), w = ct(B, v, 1);
        } else
          We(1);
      else {
        var m = wa(y) + 4, l = e[m - 4] | e[m - 3] << 8, u = m + l;
        if (u > o) {
          c && We(0);
          break;
        }
        a && d(f + l), n.set(e.subarray(m, u), f), t.b = f += l, t.p = y = u * 8, t.f = p;
        continue;
      }
      if (y > A) {
        c && We(0);
        break;
      }
    }
    a && d(f + 131072);
    for (var T = (1 << x) - 1, O = (1 << v) - 1, V = y; ; V = y) {
      var _ = h[Ts(e, y) & T], D = _ >> 4;
      if (y += _ & 15, y > A) {
        c && We(0);
        break;
      }
      if (_ || We(2), D < 256)
        n[f++] = D;
      else if (D == 256) {
        V = y, h = null;
        break;
      } else {
        var $ = D - 254;
        if (D > 264) {
          var E = D - 257, q = gr[E];
          $ = Qe(e, y, (1 << q) - 1) + ml[E], y += q;
        }
        var C = w[Ts(e, y) & O], z = C >> 4;
        C || We(3), y += C & 15;
        var B = um[z];
        if (z > 3) {
          var q = vr[z];
          B += Ts(e, y) & (1 << q) - 1, y += q;
        }
        if (y > A) {
          c && We(0);
          break;
        }
        a && d(f + 131072);
        var H = f + $;
        if (f < B) {
          var Q = r - B, J = Math.min(B, H);
          for (Q + f < 0 && We(3); f < J; ++f)
            n[f] = i[Q + f];
        }
        for (; f < H; ++f)
          n[f] = n[f - B];
      }
    }
    t.l = h, t.p = V, t.b = f, t.f = p, h && (p = 1, t.m = x, t.d = w, t.n = v);
  } while (!p);
  return f != n.length && s ? gl(n, 0, f) : n.subarray(0, f);
}, wt = function(e, t, n) {
  n <<= t & 7;
  var i = t / 8 | 0;
  e[i] |= n, e[i + 1] |= n >> 8;
}, vn = function(e, t, n) {
  n <<= t & 7;
  var i = t / 8 | 0;
  e[i] |= n, e[i + 1] |= n >> 8, e[i + 2] |= n >> 16;
}, Cs = function(e, t) {
  for (var n = [], i = 0; i < e.length; ++i)
    e[i] && n.push({ s: i, f: e[i] });
  var o = n.length, r = n.slice();
  if (!o)
    return { t: bl, l: 0 };
  if (o == 1) {
    var s = new we(n[0].s + 1);
    return s[n[0].s] = 1, { t: s, l: 1 };
  }
  n.sort(function(u, b) {
    return u.f - b.f;
  }), n.push({ s: -1, f: 25001 });
  var a = n[0], c = n[1], d = 0, p = 1, y = 2;
  for (n[0] = { s: -1, f: a.f + c.f, l: a, r: c }; p != o - 1; )
    a = n[n[d].f < n[y].f ? d++ : y++], c = n[d != p && n[d].f < n[y].f ? d++ : y++], n[p++] = { s: -1, f: a.f + c.f, l: a, r: c };
  for (var f = r[0].s, i = 1; i < o; ++i)
    r[i].s > f && (f = r[i].s);
  var h = new Oe(f + 1), w = Bs(n[p - 1], h, 0);
  if (w > t) {
    var i = 0, x = 0, v = w - t, A = 1 << v;
    for (r.sort(function(b, S) {
      return h[S.s] - h[b.s] || b.f - S.f;
    }); i < o; ++i) {
      var g = r[i].s;
      if (h[g] > t)
        x += A - (1 << w - h[g]), h[g] = t;
      else
        break;
    }
    for (x >>= v; x > 0; ) {
      var m = r[i].s;
      h[m] < t ? x -= 1 << t - h[m]++ - 1 : ++i;
    }
    for (; i >= 0 && x; --i) {
      var l = r[i].s;
      h[l] == t && (--h[l], ++x);
    }
    w = t;
  }
  return { t: new we(h), l: w };
}, Bs = function(e, t, n) {
  return e.s == -1 ? Math.max(Bs(e.l, t, n + 1), Bs(e.r, t, n + 1)) : t[e.s] = n;
}, md = function(e) {
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
}, bn = function(e, t) {
  for (var n = 0, i = 0; i < t.length; ++i)
    n += e[i] * t[i];
  return n;
}, vl = function(e, t, n) {
  var i = n.length, o = wa(t + 2);
  e[o] = i & 255, e[o + 1] = i >> 8, e[o + 2] = e[o] ^ 255, e[o + 3] = e[o + 1] ^ 255;
  for (var r = 0; r < i; ++r)
    e[o + r + 4] = n[r];
  return (o + 4 + i) * 8;
}, yd = function(e, t, n, i, o, r, s, a, c, d, p) {
  wt(t, p++, n), ++o[256];
  for (var y = Cs(o, 15), f = y.t, h = y.l, w = Cs(r, 15), x = w.t, v = w.l, A = md(f), g = A.c, m = A.n, l = md(x), u = l.c, b = l.n, S = new Oe(19), I = 0; I < g.length; ++I)
    ++S[g[I] & 31];
  for (var I = 0; I < u.length; ++I)
    ++S[u[I] & 31];
  for (var P = Cs(S, 7), R = P.t, E = P.l, k = 19; k > 4 && !R[Us[k - 1]]; --k)
    ;
  var M = d + 5 << 3, j = bn(o, Mt) + bn(r, _n) + s, N = bn(o, f) + bn(r, x) + s + 14 + 3 * k + bn(S, R) + 2 * S[16] + 3 * S[17] + 7 * S[18];
  if (c >= 0 && M <= j && M <= N)
    return vl(t, p, e.subarray(c, c + d));
  var _, G, L, B;
  if (wt(t, p, 1 + (N < j)), p += 2, N < j) {
    _ = ct(f, h, 0), G = f, L = ct(x, v, 0), B = x;
    var T = ct(R, E, 0);
    wt(t, p, m - 257), wt(t, p + 5, b - 1), wt(t, p + 10, k - 4), p += 14;
    for (var I = 0; I < k; ++I)
      wt(t, p + 3 * I, R[Us[I]]);
    p += 3 * k;
    for (var O = [g, u], V = 0; V < 2; ++V)
      for (var D = O[V], I = 0; I < D.length; ++I) {
        var $ = D[I] & 31;
        wt(t, p, T[$]), p += R[$], $ > 15 && (wt(t, p, D[I] >> 5 & 127), p += D[I] >> 12);
      }
  } else
    _ = pm, G = Mt, L = hm, B = _n;
  for (var I = 0; I < a; ++I) {
    var q = i[I];
    if (q > 255) {
      var $ = q >> 18 & 31;
      vn(t, p, _[$ + 257]), p += G[$ + 257], $ > 7 && (wt(t, p, q >> 23 & 31), p += gr[$]);
      var C = q & 31;
      vn(t, p, L[C]), p += B[C], C > 3 && (vn(t, p, q >> 5 & 8191), p += vr[C]);
    } else
      vn(t, p, _[q]), p += G[q];
  }
  return vn(t, p, _[256]), p + G[256];
}, vm = /* @__PURE__ */ new ba([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]), bl = /* @__PURE__ */ new we(0), bm = function(e, t, n, i, o, r) {
  var s = r.z || e.length, a = new we(i + s + 5 * (1 + Math.ceil(s / 7e3)) + o), c = a.subarray(i, a.length - o), d = r.l, p = (r.r || 0) & 7;
  if (t) {
    p && (c[0] = r.r >> 3);
    for (var y = vm[t - 1], f = y >> 13, h = y & 8191, w = (1 << n) - 1, x = r.p || new Oe(32768), v = r.h || new Oe(w + 1), A = Math.ceil(n / 3), g = 2 * A, m = function(K) {
      return (e[K] ^ e[K + 1] << A ^ e[K + 2] << g) & w;
    }, l = new ba(25e3), u = new Oe(288), b = new Oe(32), S = 0, I = 0, P = r.i || 0, R = 0, E = r.w || 0, k = 0; P + 2 < s; ++P) {
      var M = m(P), j = P & 32767, N = v[M];
      if (x[j] = N, v[M] = j, E <= P) {
        var _ = s - P;
        if ((S > 7e3 || R > 24576) && (_ > 423 || !d)) {
          p = yd(e, c, 0, l, u, b, I, R, k, P - k, p), R = S = I = 0, k = P;
          for (var G = 0; G < 286; ++G)
            u[G] = 0;
          for (var G = 0; G < 30; ++G)
            b[G] = 0;
        }
        var L = 2, B = 0, T = h, O = j - N & 32767;
        if (_ > 2 && M == m(P - O))
          for (var V = Math.min(f, _) - 1, D = Math.min(32767, P), $ = Math.min(258, _); O <= D && --T && j != N; ) {
            if (e[P + L] == e[P + L - O]) {
              for (var q = 0; q < $ && e[P + q] == e[P + q - O]; ++q)
                ;
              if (q > L) {
                if (L = q, B = O, q > V)
                  break;
                for (var C = Math.min(O, q - 2), z = 0, G = 0; G < C; ++G) {
                  var H = P - O + G & 32767, Q = x[H], J = H - Q & 32767;
                  J > z && (z = J, N = H);
                }
              }
            }
            j = N, N = x[j], O += j - N & 32767;
          }
        if (B) {
          l[R++] = 268435456 | Gs[L] << 18 | hd[B];
          var U = Gs[L] & 31, F = hd[B] & 31;
          I += gr[U] + vr[F], ++u[257 + U], ++b[F], E = P + L, ++S;
        } else
          l[R++] = e[P], ++u[e[P]];
      }
    }
    for (P = Math.max(P, E); P < s; ++P)
      l[R++] = e[P], ++u[e[P]];
    p = yd(e, c, d, l, u, b, I, R, k, P - k, p), d || (r.r = p & 7 | c[p / 8 | 0] << 3, p -= 7, r.h = v, r.p = x, r.i = P, r.w = E);
  } else {
    for (var P = r.w || 0; P < s + d; P += 65535) {
      var Z = P + 65535;
      Z >= s && (c[p / 8 | 0] = d, Z = s), p = vl(c, p + 1, e.subarray(P, Z));
    }
    r.i = s;
  }
  return gl(a, 0, i + wa(p) + o);
}, wm = /* @__PURE__ */ (function() {
  for (var e = new Int32Array(256), t = 0; t < 256; ++t) {
    for (var n = t, i = 9; --i; )
      n = (n & 1 && -306674912) ^ n >>> 1;
    e[t] = n;
  }
  return e;
})(), xm = function() {
  var e = -1;
  return {
    p: function(t) {
      for (var n = e, i = 0; i < t.length; ++i)
        n = wm[n & 255 ^ t[i]] ^ n >>> 8;
      e = n;
    },
    d: function() {
      return ~e;
    }
  };
}, Sm = function(e, t, n, i, o) {
  if (!o && (o = { l: 1 }, t.dictionary)) {
    var r = t.dictionary.subarray(-32768), s = new we(r.length + e.length);
    s.set(r), s.set(e, r.length), e = s, o.w = r.length;
  }
  return bm(e, t.level == null ? 6 : t.level, t.mem == null ? o.l ? Math.ceil(Math.max(8, Math.min(13, Math.log(e.length))) * 1.5) : 20 : 12 + t.mem, n, i, o);
}, Zs = function(e, t, n) {
  for (; n; ++t)
    e[t] = n, n >>>= 8;
}, Am = function(e, t) {
  var n = t.filename;
  if (e[0] = 31, e[1] = 139, e[2] = 8, e[8] = t.level < 2 ? 4 : t.level == 9 ? 2 : 0, e[9] = 3, t.mtime != 0 && Zs(e, 4, Math.floor(new Date(t.mtime || Date.now()) / 1e3)), n) {
    e[3] = 8;
    for (var i = 0; i <= n.length; ++i)
      e[i + 10] = n.charCodeAt(i);
  }
}, Im = function(e) {
  (e[0] != 31 || e[1] != 139 || e[2] != 8) && We(6, "invalid gzip data");
  var t = e[3], n = 10;
  t & 4 && (n += (e[10] | e[11] << 8) + 2);
  for (var i = (t >> 3 & 1) + (t >> 4 & 1); i > 0; i -= !e[n++])
    ;
  return n + (t & 2);
}, qm = function(e) {
  var t = e.length;
  return (e[t - 4] | e[t - 3] << 8 | e[t - 2] << 16 | e[t - 1] << 24) >>> 0;
}, Rm = function(e) {
  return 10 + (e.filename ? e.filename.length + 1 : 0);
};
function jm(e, t) {
  t || (t = {});
  var n = xm(), i = e.length;
  n.p(e);
  var o = Sm(e, t, Rm(t), 8), r = o.length;
  return Am(o, t), Zs(o, r - 8, n.d()), Zs(o, r - 4, i), o;
}
function $m(e, t) {
  var n = Im(e);
  return n + 8 > e.length && We(6, "invalid gzip data"), gm(e.subarray(n, -8), { i: 2 }, new we(qm(e)), t);
}
var Pm = typeof TextDecoder < "u" && /* @__PURE__ */ new TextDecoder(), _m = 0;
try {
  Pm.decode(bl, { stream: !0 }), _m = 1;
} catch {
}
function gd(e) {
  return Object.assign(new RangeError(`Cannot create a buffer larger than maxOutputLength ${e}.`), { code: "ERR_BUFFER_TOO_LARGE" });
}
function Tm(e, t = {}) {
  const n = t.maxOutputLength ?? Number.MAX_SAFE_INTEGER;
  if (e.length >= 18) {
    const o = e.length - 4;
    if ((e[o] | e[o + 1] << 8 | e[o + 2] << 16 | e[o + 3] << 24) >>> 0 > n) throw gd(n);
  }
  const i = $m(e);
  if (i.length > n) throw gd(n);
  return i;
}
const Hs = 131072, Cm = 2 * 1024 * 1024;
class Gi extends Error {
  constructor(t, n) {
    super(n), this.code = t, this.name = "StatusListError";
  }
}
function Em(e, t = Cm) {
  if (typeof e != "string" || !/^u[A-Za-z0-9_-]+$/.test(e))
    throw new Gi("MALFORMED", 'encodedList must be multibase base64url (prefix "u").');
  let n;
  try {
    n = Tm(km(e.slice(1)), { maxOutputLength: t });
  } catch (i) {
    throw i.code === "ERR_BUFFER_TOO_LARGE" || /maxOutputLength|buffer/i.test(String(i)) ? new Gi("TOO_LARGE", `Decompressed status list exceeds ${t} bytes.`) : new Gi("MALFORMED", "encodedList is not valid GZIP data.");
  }
  if (n.byteLength * 8 < Hs)
    throw new Gi("TOO_SHORT", `Status list has fewer than ${Hs} bits.`);
  return new Uint8Array(n);
}
function km(e) {
  const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", n = new Uint8Array(Math.floor(e.length * 6 / 8));
  let i = 0, o = 0, r = 0;
  for (const s of e)
    i = i << 6 | t.indexOf(s), o += 6, o >= 8 && (o -= 8, n[r++] = i >> o & 255);
  return n;
}
function Mm(e, t) {
  const n = e[Math.floor(t / 8)];
  if (n === void 0) throw new RangeError(`Status index ${t} is outside the list.`);
  return (n >> 7 - t % 8 & 1) === 1;
}
function Js(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function Ks(e, t) {
  const n = e.credentialStatus;
  if (n === void 0) return {};
  const i = Array.isArray(n) ? n : [n];
  if (i.length === 0 || !i.every(Js)) return { reason: "Unsupported credentialStatus form." };
  const o = i.filter((r) => t.includes(String(r.statusPurpose)));
  return o.length > 1 ? { reason: `Several status entries for ${t.join("/")}.` } : o.length === 0 ? { reason: `No status entry has an accepted purpose (${t.join(", ")}); found ${i.map((r) => String(r.statusPurpose)).join(", ")}.` } : { entry: o[0] };
}
function Om(e, t, n, i, o, r = o) {
  const s = Ks(e, i.purposes), a = s.entry;
  if (a === void 0 && s.reason === void 0)
    return i.required ? { state: "not_established", reason: "Status is required by the profile but the credential names none.", sources: [] } : { state: "established", reason: "The profile does not require status for this credential.", sources: [] };
  if (a === void 0) return { state: "not_established", reason: s.reason, sources: ["/credentialStatus"] };
  if (a.type !== "BitstringStatusListEntry" || typeof a.statusListCredential != "string" || typeof a.statusListIndex != "string")
    return { state: "not_established", reason: "Unsupported credentialStatus form.", sources: ["/credentialStatus"] };
  const c = a.statusListCredential, d = ["/credentialStatus", c];
  if (t === void 0)
    return { state: "not_established", reason: `Status list ${c} is unavailable.`, listUri: c, sources: d };
  if (n !== "established")
    return { state: "not_established", reason: `Status list ${c} is not protected and valid.`, listUri: c, sources: d };
  if (t.id !== c)
    return { state: "not_established", reason: `Resolved status list identifies itself as ${String(t.id)}.`, listUri: c, sources: d };
  const p = (g) => Js(g) ? g.id : g;
  if (typeof p(t.issuer) != "string" || p(t.issuer) !== p(e.issuer))
    return { state: "not_established", reason: `Status list is signed by ${String(p(t.issuer))}, who may not state status for credentials of ${String(p(e.issuer))}.`, listUri: c, sources: d };
  const y = t.credentialSubject;
  if (!Js(y) || y.type !== "BitstringStatusList" || y.statusPurpose !== a.statusPurpose)
    return { state: "not_established", reason: "Status list purpose does not match the entry.", listUri: c, sources: d };
  const f = Date.parse(String(t.validFrom)), h = Date.parse(String(t.validUntil)), w = Date.parse(r);
  if (!Number.isFinite(Date.parse(o)) || !Number.isFinite(f))
    return { state: "not_established", reason: `Status list is older than the profile's ${i.maxAgeSeconds} s freshness limit.`, listUri: c, sources: d };
  if (!Number.isFinite(w) || w < f)
    return { state: "not_established", reason: `Status list observed at ${String(t.validFrom)} cannot establish status at the earlier activity time ${r}; historical status is unavailable.`, listUri: c, sources: d };
  if (Number.isFinite(h) && w > h)
    return { state: "not_established", reason: `Status list in force until ${String(t.validUntil)} cannot establish status at ${r}.`, listUri: c, sources: d };
  if ((w - f) / 1e3 > i.maxAgeSeconds)
    return { state: "not_established", reason: `Status list is older than the profile's ${i.maxAgeSeconds} s freshness limit.`, listUri: c, sources: d };
  if (!/^(0|[1-9][0-9]*)$/.test(a.statusListIndex))
    return { state: "not_established", reason: "statusListIndex is not a non-negative integer.", listUri: c, sources: d };
  let x;
  try {
    x = Mm(Em(y.encodedList), Number(a.statusListIndex));
  } catch (g) {
    return { state: "not_established", reason: `Status list cannot be read: ${g.message}`, listUri: c, sources: d };
  }
  const [v, A] = a.statusPurpose === "suspension" ? ["Suspended", "Not suspended"] : ["Revoked", "Not revoked"];
  return x ? { state: "contradicted", reason: `${v}: bit ${a.statusListIndex} of ${c} is set.`, listUri: c, sources: d } : { state: "established", reason: `${A}: bit ${a.statusListIndex} of ${c} is clear.`, listUri: c, sources: d };
}
const Lm = Object.freeze({ maxResources: 1e3, maxBytes: 2e7 });
function xa(e, t, n) {
  if (!(e.binding.id === t.id && e.binding.version === t.version && e.profile.id === n.id && e.profile.version === n.version))
    return `Requested ${e.profile.id}@${e.profile.version} with binding ${e.binding.id}@${e.binding.version} is not the verifier-selected profile ${n.id}@${n.version} for ${t.id}@${t.version}.`;
}
function Sa(e, t) {
  const n = `${e.targetId} | plan`;
  return cr({
    requestId: e.requestId,
    targetId: e.targetId,
    binding: e.binding,
    profile: e.profile,
    artifactVerification: [],
    authorization: e.selectedClaims.map((i) => ({
      claimId: i.id,
      routeWitnessIds: [],
      ...pn("Not evaluated: the plan was refused at gate 0.")
    })),
    support: [],
    conformity: e.conformity ? { requested: !0, ...e.conformity, ...pn("Not evaluated: the plan was refused at gate 0.") } : { requested: !1, execution: "not_run" },
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
async function Aa(e, t, n, i, o) {
  const r = Da(t.openSession({
    maxResources: e.resolverLimits.maxResources,
    maxBytes: e.resolverLimits.maxBytes
  })), s = Da(t.openSession(Lm)), a = { manifest: n, evaluationTime: e.evaluationTime, staticResolver: s, ...o ? { binding: o } : {} }, c = (S) => JSON.parse(new TextDecoder().decode(r.resolve(S).bytes)), d = await Ui(e.targetId, r, a), p = [d], y = /* @__PURE__ */ new Map([[e.targetId, 0]]);
  for (const S of e.suppliedEvidence)
    y.has(S) || (y.set(S, 1), p.push(await Ui(S, r, a)));
  for (let S = 0; S < p.length; S++) {
    const I = p[S], P = y.get(I.artifactId);
    if (I.protection.state !== "established" || P + 1 > e.resolverLimits.maxDepth) continue;
    const R = c(I.artifactId), E = [
      ...(Array.isArray(R.termsOfUse) ? R.termsOfUse : []).map((k) => k?.authorizationCredential?.id),
      ...(Array.isArray(R.evidence) ? R.evidence : []).map((k) => k?.id)
    ].filter((k) => typeof k == "string");
    for (const k of E)
      y.has(k) || (y.set(k, P + 1), p.push(await Ui(k, r, a)));
  }
  const f = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Map();
  for (const S of p) {
    if (S.protection.state !== "established") {
      w.set(S.artifactId, void 0);
      continue;
    }
    const I = c(S.artifactId).id;
    w.set(S.artifactId, I === S.artifactId ? ce("established", ["Artifact identifies itself by its resolved identity."], ["/id"]) : ce("contradicted", [`Artifact resolved as ${S.artifactId} identifies itself as ${String(I)}.`], ["/id"]));
  }
  const x = Date.parse(e.activityTime) < Date.parse(e.evaluationTime), v = async (S, I, P) => {
    const R = y.get(S) + 1;
    if (R > e.resolverLimits.maxDepth)
      return {
        state: "not_established",
        sources: ["/credentialStatus"],
        reason: `Status list is at depth ${R}, beyond the request's maxDepth ${e.resolverLimits.maxDepth}.`
      };
    const E = Ks(I, P.purposes).entry, k = typeof E?.statusListCredential == "string" ? E.statusListCredential : void 0;
    let M, j = "not_established";
    if (k !== void 0) {
      f.has(k) || f.set(k, await Ui(k, r, a));
      const N = f.get(k);
      N.digestSRI !== void 0 && N.protection.state === "established" ? (M = c(k), j = x ? N.protection.state : xe([N.protection.state, N.validity.state])) : N.digestSRI !== void 0 && (M = {}, j = N.protection.state);
    }
    return Om(I, M, j, P, e.evaluationTime, e.activityTime);
  }, A = { required: !0, purposes: ["suspension"], maxAgeSeconds: i.credentialStatus.maxAgeSeconds }, g = /* @__PURE__ */ new Map();
  for (const S of p) {
    if (S.protection.state !== "established") {
      h.set(S.artifactId, void 0);
      continue;
    }
    const I = c(S.artifactId);
    h.set(S.artifactId, await v(S.artifactId, I, i.credentialStatus)), Ks(I, ["suspension"]).entry !== void 0 && g.set(S.artifactId, await v(S.artifactId, I, A));
  }
  const m = (S) => [
    S.protection,
    w.get(S.artifactId) ? {
      artifactId: S.artifactId,
      ...w.get(S.artifactId),
      reasons: w.get(S.artifactId).reasons.map((I) => `identity: ${I}`)
    } : { artifactId: S.artifactId, ...pn("identity: Not evaluated because protection is not established.") },
    {
      artifactId: S.artifactId,
      ...S.validity,
      reasons: S.validity.reasons.map((I) => `validity: ${I}`)
    },
    ...h.get(S.artifactId) ? [{ artifactId: S.artifactId, ...ce(
      h.get(S.artifactId).state,
      [`status: ${h.get(S.artifactId).reason}`],
      [...h.get(S.artifactId).sources]
    ) }] : [{
      artifactId: S.artifactId,
      ...pn("status: Not evaluated because protection is not established.")
    }],
    ...S.relatedResources.map((I) => ({
      artifactId: I.id,
      ...ce(I.state, [`integrity (from ${S.artifactId}): ${I.reason}`], ["/relatedResource"])
    }))
  ], l = /* @__PURE__ */ new Map();
  for (const S of p) {
    const I = [
      ["protection", S.protection.state, S.protection.reasons.join(" ")],
      ["identity", w.get(S.artifactId)?.state ?? "not_established", w.get(S.artifactId)?.reasons.join(" ") ?? "not evaluated"],
      ["validity", S.validity.state, S.validity.reasons.join(" ")],
      ["status", h.get(S.artifactId)?.state ?? "not_established", h.get(S.artifactId)?.reason ?? "not evaluated"]
    ], P = xe(I.map((E) => E[1])), R = g.get(S.artifactId);
    l.set(S.artifactId, {
      uri: S.artifactId,
      usable: P,
      reason: I.filter((E) => E[1] !== "established").map((E) => `${E[0]}: ${E[2]}`).join("; ") || "usable",
      ...P === "established" ? { document: c(S.artifactId) } : {},
      ...R ? { suspension: { state: R.state, reason: R.reason } } : {}
    });
  }
  const u = [], b = [];
  p.forEach((S, I) => {
    const P = I === 0 ? "target" : "supplied-evidence", R = yr(S.artifactId, S.digestSRI, P, e);
    for (const M of S.checks)
      u.push({
        gate: am[M.check],
        nodeUse: R,
        predicate: M.check,
        state: M.state,
        execution: "executed",
        reason: M.reason,
        sources: [S.artifactId]
      });
    for (const M of S.relatedResources)
      u.push({
        gate: 1,
        nodeUse: R,
        predicate: "related-resource-integrity",
        state: M.state,
        execution: "executed",
        reason: `${M.id}: ${M.reason}`,
        sources: ["/relatedResource", M.id]
      });
    const E = w.get(S.artifactId);
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
    const k = h.get(S.artifactId);
    u.push(k ? {
      gate: 3,
      nodeUse: R,
      predicate: "credential-status",
      state: k.state,
      execution: "executed",
      reason: k.reason,
      sources: [...k.sources]
    } : {
      gate: 3,
      nodeUse: R,
      predicate: "credential-status",
      state: "not_established",
      execution: "not_run",
      reason: "Not evaluated because protection is not established.",
      sources: []
    }), S.digestSRI !== void 0 && b.push({
      uri: S.artifactId,
      digestSRI: S.digestSRI,
      kind: "artifact",
      source: "catalog",
      observedAt: e.evaluationTime
    });
  });
  for (const [S, I] of f)
    I.digestSRI !== void 0 && b.push({ uri: S, digestSRI: I.digestSRI, kind: "status", source: "catalog", observedAt: e.evaluationTime });
  return {
    target: d,
    artifacts: p,
    facts: l,
    verificationOf: m,
    artifactVerification: p.flatMap(m),
    trace: u,
    resources: b
  };
}
const ir = "RecognizedEntityCredential", Le = (e) => e !== null && typeof e == "object" && !Array.isArray(e), Bt = (e) => typeof e == "string" && e.trim().length > 0, Ji = (e) => Array.isArray(e) ? e : Le(e) ? [e] : [], wl = (e) => Bt(e) ? e : Le(e) && Bt(e.id) ? e.id : void 0;
function Nm(e) {
  const t = e.bindingRules.recognition;
  if (t === void 0) return;
  if (!Le(t) || !Bt(t.recognizerPurpose) || !Bt(t.action) || !Le(t.purposes)) return "invalid";
  const n = {};
  for (const [i, o] of Object.entries(t.purposes)) {
    if (!Le(o) || !Bt(o.activity) || !Bt(o.standardId)) return "invalid";
    n[i] = { activity: o.activity, standardId: o.standardId };
  }
  return { recognizerPurpose: t.recognizerPurpose, action: t.action, purposes: n };
}
function Dm(e) {
  return Ji(e.termsOfUse).filter(Le).filter((t) => t.type === "RmAuthorizationPolicy" && Le(t.authorizationCredential) && t.authorizationCredential.type === ir).map((t) => t.authorizationCredential.id).filter(Bt);
}
const ge = (e, t, n, i) => ({ id: e, state: t, reason: n, sources: i }), vd = (e) => {
  if (!Le(e)) return "no main scope";
  const t = Le(e.standard) ? e.standard : {};
  return `${String(e.activity)} under ${String(t.name ?? t.id)}`;
};
function zm(e, t, n, i, o, r, s, a) {
  const c = ["/termsOfUse", t], d = s(t);
  if (d === void 0) return ge(e, "not_established", `Recognition ${t} is unavailable.`, c);
  if (d.usable !== "established" || d.document === void 0)
    return ge(
      e,
      d.usable === "contradicted" ? "contradicted" : "not_established",
      `Recognition ${t} is not usable: ${d.reason}`,
      c
    );
  const p = d.document;
  if (!Ji(p.type).includes(ir))
    return ge(e, "contradicted", `${t} is not a ${ir}.`, c);
  const y = wl(p.issuer), f = a.trustAnchors.find((u) => u.id === y);
  if (f === void 0 || !f.purposes.includes(o.recognizerPurpose))
    return ge(e, "not_established", `${String(y)}, issuer of ${t}, is not a configured anchor for ${o.recognizerPurpose}.`, c);
  if (d.suspension !== void 0 && d.suspension.state !== "established")
    return ge(
      e,
      d.suspension.state,
      d.suspension.state === "contradicted" ? `${String(y)} has suspended its recognition ${t}. ${d.suspension.reason}` : `The suspension status of ${t} is not established: ${d.suspension.reason}`,
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
  const v = `${i.activity} under ${i.standardId}`, A = x.filter((u) => u.action === o.action && Le(u.mainScope) && u.mainScope.activity === i.activity && Le(u.mainScope.standard) && u.mainScope.standard.id === i.standardId);
  if (A.length === 0) {
    const u = x.map((b) => `${String(b.action)} (${vd(b.mainScope)})`).join(", ");
    return ge(
      e,
      "contradicted",
      `${t} recognizes ${n} for ${u}, not to ${o.action} for ${v}.`,
      c
    );
  }
  const g = A.filter((u) => u.recognizedBy === void 0 || u.recognizedBy === y);
  if (g.length === 0)
    return ge(e, "contradicted", `The matching action in ${t} names another recognizer than its issuer ${String(y)}.`, c);
  const m = Date.parse(String(r));
  if (typeof r != "string" || !Number.isFinite(m))
    return ge(e, "not_established", "No activity time is stated, so recognition at that time is not established.", c);
  const l = g.find((u) => {
    const b = Date.parse(String(u.validFrom ?? p.validFrom)), S = Date.parse(String(u.validUntil ?? p.validUntil));
    return Number.isFinite(b) && Number.isFinite(S) && b <= m && m <= S;
  });
  return l === void 0 ? ge(e, "not_established", `${String(y)} did not recognize ${n} for ${v} at the activity time ${r}.`, c) : ge(
    e,
    "established",
    `${n} is recognized by ${String(y)} (a configured anchor for ${o.recognizerPurpose}) to ${o.action} for ${vd(l.mainScope)}, in force at ${r}, in ${t}.`,
    c
  );
}
function br(e, t, n, i, o, r) {
  const s = wl(t.issuer), a = i.trustAnchors.find((w) => w.id === s);
  if (a?.purposes.includes(n))
    return { basis: ge(e, "established", `${String(s)} is a configured anchor for ${n}.`, ["/issuer"]) };
  const c = a === void 0 ? `${String(s)} is not a configured trust anchor.` : `${String(s)} is an anchor, but not for ${n}.`, d = Nm(i);
  if (d === void 0) return { basis: ge(e, "not_established", c, ["/issuer"]) };
  if (d === "invalid")
    return { basis: ge(e, "not_established", `${c} The profile's recognition rules are malformed.`, ["/issuer"]) };
  const p = d.purposes[n];
  if (p === void 0 || s === void 0)
    return { basis: ge(e, "not_established", `${c} The profile accepts no recognition for ${n}.`, ["/issuer"]) };
  const y = Dm(t);
  if (y.length === 0)
    return { basis: ge(
      e,
      "not_established",
      `${c} The grant points up to no ${ir} in its termsOfUse.`,
      ["/issuer", "/termsOfUse"]
    ) };
  const f = y.map((w) => ({ uri: w, result: zm(e, w, s, p, d, r, o, i) })), h = f.find((w) => w.result.state === "established");
  return h ? { basis: h.result, recognition: h.uri } : {
    basis: ge(
      e,
      fn(f.map((w) => w.result.state)),
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
const Um = /^(0|[1-9][0-9]*)(\.[0-9]+)?$/, Ia = Object.freeze({ "kg/kg": 0, "mg/kg": -6 });
function wr(e) {
  if (typeof e != "string" || !Um.test(e)) return;
  const [t, n = ""] = e.split(".");
  return { n: BigInt(`${t}${n}`), scale: n.length };
}
function Tn(e, t) {
  const n = wr(e), i = typeof t == "string" ? Ia[t] : void 0;
  if (!(n === void 0 || i === void 0))
    return i <= 0 ? { n: n.n, scale: n.scale - i } : { n: n.n * 10n ** BigInt(i), scale: n.scale };
}
function Pe(e, t) {
  const n = Math.max(e.scale, t.scale), i = e.n * 10n ** BigInt(n - e.scale), o = t.n * 10n ** BigInt(n - t.scale);
  return i < o ? -1 : i > o ? 1 : 0;
}
function Gm(e, t) {
  const n = Math.max(e.scale, t.scale);
  return { n: e.n * 10n ** BigInt(n - e.scale) + t.n * 10n ** BigInt(n - t.scale), scale: n };
}
function In(e) {
  const t = e.n.toString().padStart(e.scale + 1, "0");
  if (e.scale === 0) return t;
  const n = t.slice(-e.scale).replace(/0+$/, "");
  return n.length === 0 ? t.slice(0, -e.scale) : `${t.slice(0, -e.scale)}.${n}`;
}
function Qs(e) {
  const t = e.range;
  if (t === void 0) return "Scope record has no range.";
  const n = Tn(t.from, t.unit), i = Tn(t.to, t.unit);
  return n === void 0 || i === void 0 ? `Unsupported or malformed range ${String(t.from)}–${String(t.to)} ${String(t.unit)}.` : Pe(n, i) > 0 ? "Scope record range is reversed." : { low: n, high: i };
}
const Fi = (e) => Array.isArray(e) ? e.filter((t) => typeof t == "string") : [], Fm = (e, t) => e.length > 0 && e.every((n) => t.includes(n)), Bm = (e, t, n) => e.length > 0 && e.every((i) => t.some((o) => n.within(i, o)));
function Zm(e, t, n = On) {
  if (e.length === 0) return { state: "not_established", reason: "The projected scope has no records.", witnesses: [] };
  const i = [];
  for (const o of e) {
    const r = Qs(o);
    if (typeof r == "string")
      return { state: /reversed/.test(r) ? "contradicted" : "not_established", reason: `${String(o.id)}: ${r}`, witnesses: i };
    const s = Fi(o.allowedPropertyIris), a = Fi(o.allowedMethodIris);
    if (s.length === 0 || a.length === 0 || typeof o.matrixIri != "string" || typeof o.formIri != "string" || typeof o.quantityKindIri != "string")
      return { state: "not_established", reason: `${String(o.id)}: a restricted dimension is missing or empty.`, witnesses: i };
    const c = t.find((d) => {
      const p = Qs(d);
      return typeof p != "string" && n.within(o.matrixIri, d.matrixIri) && n.within(o.formIri, d.formIri) && d.quantityKindIri === o.quantityKindIri && Bm(s, Fi(d.allowedPropertyIris), n) && Fm(a, Fi(d.allowedMethodIris)) && Pe(r.low, p.low) >= 0 && Pe(r.high, p.high) <= 0;
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
}), $e = (e, t, n = []) => ({ id: e, state: "established", reason: t, sources: n }), Ge = (e, t, n = []) => ({ id: e, state: "contradicted", reason: t, sources: n }), me = (e, t, n = []) => ({ id: e, state: "not_established", reason: t, sources: n }), Ot = (e) => e !== null && typeof e == "object" && !Array.isArray(e), Ue = (e) => Array.isArray(e) ? e : [], Te = (e) => Ot(e.credentialSubject) ? e.credentialSubject : {}, Ws = (e) => Array.isArray(e.type) ? String(e.type[1]) : void 0, dt = (e, t) => Ue(Te(e).permittedActivity).includes(t);
function xl(e, t = "RmAuthorizationPolicy") {
  return Ue(e.termsOfUse).filter(Ot).filter((n) => n.type === t && Ot(n.authorizationCredential)).map((n) => n.authorizationCredential).filter((n) => typeof n.id == "string").map((n) => ({ id: n.id, type: n.type }));
}
function Ye(e, t, n, i, o, r = "RmAuthorizationPolicy") {
  const s = xl(t, r).filter((d) => d.type === n).map((d) => d.id);
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
  } } : Ws(c.document) !== n ? { basis: Ge(e, `Reference declares ${n}, but ${a} is a ${String(Ws(c.document))}.`, ["/termsOfUse", a]) } : { basis: $e(e, `References ${n} ${a}.`, ["/termsOfUse", a]), node: c };
}
function ft(e, t, n, i) {
  const o = Te(t).id;
  return typeof o != "string" || typeof n != "string" ? me(e, `${i}: grantee or exercising actor is missing.`, ["/credentialSubject/id", "/issuer"]) : o === n ? $e(e, `${i}: grantee ${o} is the exercising actor.`, ["/credentialSubject/id", "/issuer"]) : Ge(e, `${i}: grantee ${o} is not the exercising actor ${n}.`, ["/credentialSubject/id", "/issuer"]);
}
function Ln(e, t, n, i) {
  const o = i.trustAnchors.find((r) => r.id === t.issuer);
  return o === void 0 ? me(e, `${String(t.issuer)} is not a configured trust anchor.`, ["/issuer"]) : o.purposes.includes(n) ? $e(e, `${String(t.issuer)} is a configured anchor for ${n}.`, ["/issuer"]) : me(e, `${String(t.issuer)} is an anchor, but not for ${n}.`, ["/issuer"]);
}
function Nt(e, t) {
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
function Hm(e, t, n, i, o) {
  const r = e.document, s = [], a = [e.uri], c = Ye("authorizing-reference", r, "RmOperationalScope", t, i);
  if (s.push(c.basis), !c.node) return pe("operational-scope", s, a);
  const d = c.node.document;
  a.push(c.node.uri), s.push(ft("principal-binding", d, r.issuer, "Operational scope O")), s.push(d.issuer === Te(d).id ? $e("self-maintained-scope", "O is issued by its own grantee.", ["/issuer"]) : Ge("self-maintained-scope", "O is not issued by its own grantee.", ["/issuer"])), s.push(dt(d, Rn.issueRmCertificate) ? $e("activity-permission", "O permits issuing RM certificates.", ["/credentialSubject/permittedActivity"]) : Ge("activity-permission", "O does not permit issuing RM certificates.", ["/credentialSubject/permittedActivity"]));
  const p = Ye("maintenance-grant", d, "RmAccreditation", t, [...i, c.node.uri]);
  if (s.push(p.basis), !p.node) return pe("operational-scope", s, a);
  const y = p.node.document;
  a.push(p.node.uri), s.push(ft("accreditation-grantee", y, d.issuer, "Accreditation A")), s.push(dt(y, Rn.maintainRmScope) && dt(y, Rn.issueRmCertificate) ? $e("projection-permission", "A permits maintaining an operational scope for RM certification.", ["/credentialSubject/permittedActivity"]) : Ge("projection-permission", "A does not permit maintaining an operational scope for RM certification.", ["/credentialSubject/permittedActivity"]));
  const f = Zm(Ue(Te(d).scope).filter(Ot), Ue(Te(y).scope).filter(Ot), o);
  s.push({ id: "bounded-projection", state: f.state, reason: f.reason, sources: ["/credentialSubject/scope"] });
  const h = br("trust-anchor", y, "accredit-rm-producers", n, t, Te(r).activityTime);
  return s.push(h.basis), h.recognition && a.push(h.recognition), s.push(Nt(r, [["O", d], ["A", y]])), pe("operational-scope", s, a, c.node.uri);
}
function Jm(e, t, n, i, o) {
  const r = e.document, s = [], a = [e.uri], c = Ye("authorizing-reference", r, "RmAccreditation", t, i);
  if (s.push(c.basis), !c.node) return pe("direct-accreditation", s, a);
  const d = c.node.document;
  a.push(c.node.uri), s.push(ft("principal-binding", d, r.issuer, "Accreditation A")), s.push(dt(d, Rn.issueRmCertificate) ? $e("activity-permission", "A permits issuing RM certificates.", ["/credentialSubject/permittedActivity"]) : Ge("activity-permission", "A does not permit issuing RM certificates.", ["/credentialSubject/permittedActivity"]));
  const p = br("trust-anchor", d, "accredit-rm-producers", n, t, Te(r).activityTime);
  return s.push(p.basis), p.recognition && a.push(p.recognition), s.push(Nt(r, [["A", d]])), pe("direct-accreditation", s, a, c.node.uri);
}
const Km = Object.freeze({
  "operational-scope": Hm,
  "direct-accreditation": Jm
});
function Qm(e, t, n) {
  const i = "restriction:accreditation-suspension", o = e.document.issuer, r = /* @__PURE__ */ new Set([e.uri]), s = [e.document], a = [];
  for (; s.length > 0; )
    for (const p of xl(s.shift())) {
      if (r.has(p.id)) continue;
      r.add(p.id);
      const y = t(p.id);
      if (y?.usable !== "established" || y.document === void 0) continue;
      s.push(y.document);
      const f = y.document;
      Ws(f) === "RmAccreditation" && Te(f).id === o && br(
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
  const c = a.map((p) => p.suspension === void 0 ? me(i, `${p.uri} carries no suspension status.`, [p.uri]) : { id: i, state: p.suspension.state, reason: `${p.uri}: ${p.suspension.reason}`, sources: [p.uri] }), d = xe(c.map((p) => p.state));
  return {
    id: i,
    state: d,
    reason: d === "contradicted" ? `The actor's certification activity is suspended. ${c.filter((p) => p.state === "contradicted").map((p) => p.reason).join(" ")}` : c.map((p) => p.reason).join(" "),
    sources: a.map((p) => p.uri)
  };
}
const Wm = Object.freeze({
  "accreditation-suspension": Qm
});
function Nn(e, t, n) {
  const i = [
    ...t,
    ...n.map((d) => ({ id: d, state: "not_established", execution: "not_run", bases: [], chain: [] }))
  ], o = e.length === 0 ? "established" : xe(e.map((d) => d.state)), r = i.length === 0 ? "not_established" : fn(i.map((d) => d.state)), s = xe([o, r]), a = i.find((d) => d.state === "established"), c = s === "established" ? `Authorized through route ${a.id}; global restrictions hold.` : o === "contradicted" ? "An applicable global restriction applies to every route." : r === "contradicted" ? "Every permitted route is contradicted." : n.length > 0 ? "The route search stopped at its budget before every route was evaluated." : "No complete route is established.";
  return { state: s, reason: c, restrictions: e, routes: i };
}
function xr(e, t) {
  const n = e.routes.filter((o) => o.execution === "executed").map((o) => {
    const s = (o.scope === void 0 ? void 0 : t(o)) ?? me("claim-coverage", "The route did not reach a scope credential.");
    return { ...o, bases: [...o.bases, s], state: xe([o.state, s.state]) };
  }), i = e.routes.filter((o) => o.execution === "not_run").map((o) => o.id);
  return Nn(e.restrictions, n, i);
}
function Xm(e, t, n, i = On) {
  if (e.usable !== "established" || e.document === void 0)
    return { state: "not_established", reason: "The target is not usable, so its authority is not evaluated.", restrictions: [], routes: [] };
  const o = e, r = n.authority.certificateRoutes, s = n.authority.maxRoutes, a = r.slice(0, s).map((d) => {
    const p = Km[d];
    return p === void 0 ? pe(d, [me("installed-evaluator", `Route ${d} has no installed evaluator.`)], [o.uri]) : p(o, t, n, [o.uri], i);
  }), c = n.authority.globalRestrictions.map((d) => {
    const p = Wm[d];
    return p === void 0 ? me(`restriction:${d}`, `Global restriction ${d} has no installed evaluator.`) : p(o, t, n);
  });
  return Nn(c, a, r.slice(s));
}
function Ym(e, t, n, i, o = On) {
  const r = e.document, s = [], a = [e.uri], c = Ye("laboratory-authority-reference", r, "RmLabAuthority", t, i);
  if (s.push(c.basis), !c.node) return pe("laboratory-authority", s, a);
  const d = c.node.document;
  a.push(c.node.uri), s.push(ft("laboratory-binding", d, r.issuer, "Laboratory authority H")), s.push(dt(d, Rn.issueRmStudy) ? $e("study-permission", "H permits issuing RM studies.", ["/credentialSubject/permittedActivity"]) : Ge("study-permission", "H does not permit issuing RM studies.", ["/credentialSubject/permittedActivity"]));
  const p = Te(r), y = Ue(Te(d).scope).filter(Ot).some((h) => o.within(p.matrixIri, h.matrixIri) && Ue(h.allowedPropertyIris).some((w) => o.within(p.propertyIri, w)) && Ue(h.studyTypeIris).includes(p.studyTypeIri));
  s.push(y ? $e("study-scope", "H covers this matrix, property and study type.", ["/credentialSubject/scope"]) : Ge("study-scope", "H does not cover this matrix, property and study type.", ["/credentialSubject/scope"]));
  const f = br("laboratory-anchor", d, "accredit-rm-laboratories", n, t, p.activityTime);
  return s.push(f.basis), f.recognition && a.push(f.recognition), pe("laboratory-authority", s, a);
}
function ey(e, t, n, i = On) {
  if (e.usable !== "established" || e.document === void 0)
    return { state: "not_established", reason: "The target is not usable, so its support is not evaluated.", bases: [], chain: [] };
  const o = e.document, r = Ue(o.evidence).filter(Ot).filter((g) => g.type === "RmStudyReference").map((g) => String(g.id));
  if (r.length === 0)
    return { state: "not_established", reason: "D cites no required study.", bases: [me("study-reference", "No RmStudyReference in evidence.", ["/evidence"])], chain: [e.uri] };
  if (r.length > 1)
    return { state: "not_established", reason: "Several study references; this binding has no composition for them.", bases: [me("study-reference", "Ambiguous study references.", ["/evidence"])], chain: [e.uri] };
  const s = r[0], a = t(s);
  if (a === void 0) {
    const g = me("study-reference", `Required study ${s} is unavailable.`, ["/evidence", s]);
    return { state: "not_established", reason: g.reason, bases: [g], chain: [e.uri] };
  }
  if (a.usable !== "established" || a.document === void 0) {
    const g = {
      id: "study-reference",
      state: a.usable === "contradicted" ? "contradicted" : "not_established",
      reason: `Required study ${s} is not usable: ${a.reason}`,
      sources: ["/evidence", s]
    };
    return { state: g.state, reason: g.reason, bases: [g], chain: [e.uri] };
  }
  const c = a.document, d = Te(c), p = Te(o), y = Ot(Ue(p.materialPropertiesList)[0]) ? Ue(Ue(p.materialPropertiesList)[0].results)[0] : void 0, f = Ue(p.materials)[0], h = [$e("study-reference", `Cites study ${s}.`, ["/evidence", s])];
  h.push(d.id === p.id ? $e("same-batch", `S concerns batch ${String(d.id)}.`, ["/credentialSubject/id"]) : Ge("same-batch", `S concerns ${String(d.id)}, not batch ${String(p.id)}.`, ["/credentialSubject/id"])), h.push(d.propertyIri === y?.propertyIri && d.matrixIri === f?.matrixIri ? $e("same-property-and-matrix", "S concerns the certified property and matrix.", ["/credentialSubject/propertyIri"]) : Ge("same-property-and-matrix", "S concerns another property or matrix.", ["/credentialSubject/propertyIri"])), h.push(d.studyTypeIri === `${qn}Homogeneity` && d.outcomeIri === `${qn}Homogeneous` ? $e("study-outcome", "S reports the batch homogeneous.", ["/credentialSubject/outcomeIri"]) : Ge("study-outcome", "S does not report a homogeneous batch.", ["/credentialSubject/outcomeIri"]));
  const w = Date.parse(String(d.activityTime)), x = Date.parse(String(p.activityTime));
  h.push(Number.isFinite(w) && Number.isFinite(x) ? w <= x ? $e("study-precedes-certification", "The study precedes the certification activity.", ["/credentialSubject/activityTime"]) : Ge("study-precedes-certification", "The study postdates the certification activity.", ["/credentialSubject/activityTime"]) : me("study-precedes-certification", "An activity time is missing.", ["/credentialSubject/activityTime"]));
  const v = Ym(a, t, n, [e.uri, s], i);
  h.push(...v.bases);
  const A = xe(h.map((g) => g.state));
  return {
    state: A,
    reason: A === "established" ? "Required study is applicable and independently authorized." : A === "contradicted" ? "Required study is contradicted." : "Required study is not established.",
    bases: h,
    chain: [e.uri, ...v.chain]
  };
}
const Gt = (e) => e !== null && typeof e == "object" && !Array.isArray(e), Sl = (e) => Array.isArray(e) ? e : [], bd = (e) => Sl(e).filter((t) => typeof t == "string"), le = (e) => String(e).split(/[#/]/).pop();
function ty(e, t, n) {
  const i = [t], o = Gt(e.credentialSubject) ? e.credentialSubject : {}, r = Sl(o.materials).filter(Gt);
  if (r.length !== 1) return { state: "not_established", reason: "The certificate must name exactly one material.", sources: ["/credentialSubject/materials"] };
  const s = r[0];
  if (!Gt(n)) return { state: "not_established", reason: `No result at ${t}.`, sources: i };
  const a = Gt(n.data) && Gt(n.data.quantity) ? n.data.quantity : void 0;
  if (a === void 0) return { state: "not_established", reason: "The result has no quantity.", sources: i };
  const c = Gt(a.unit) ? a.unit.ucumCode : void 0;
  if (typeof c != "string" || Ia[c] === void 0)
    return { state: "not_established", reason: `Unit ${String(c)} has no supported mapping (mg/kg, kg/kg).`, sources: [`${t}/data/quantity/unit`] };
  const d = Gt(a.uncertainty) ? a.uncertainty : void 0, p = wr(d?.coverageFactor);
  if (p === void 0 || Pe(p, { n: 2n, scale: 0 }) !== 0)
    return { state: "not_established", reason: `Coverage factor ${String(d?.coverageFactor)} is not the binding's k = 2.`, sources: [`${t}/data/quantity/uncertainty`] };
  const y = Tn(a.value, c), f = Tn(d?.expandedUncertainty, c);
  if (y === void 0 || f === void 0)
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
    reason: `Mapped ${le(h.propertyIri)} by ${le(h.methodIri)} in ${le(h.matrixIri)}: ${String(a.value)} ± ${String(d?.expandedUncertainty)} ${c} (k = 2).`,
    sources: i,
    coordinates: { ...h, value: y, uncertainty: f }
  };
}
function ny(e, t, n, i) {
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
function iy(e, t, n, i, o = On) {
  if (t.length === 0) return { state: "not_established", reason: "The scope has no records.", sources: ["/credentialSubject/scope"] };
  const r = t.map((c) => {
    const d = String(c.id), p = Qs(c);
    if (typeof p == "string")
      return { id: d, state: /reversed/.test(p) ? "contradicted" : "not_established", reason: `${le(d)}: ${p}` };
    const y = [];
    o.within(e.matrixIri, c.matrixIri) || y.push(`matrix ${le(e.matrixIri)} ≠ ${le(c.matrixIri)}`), o.within(e.formIri, c.formIri) || y.push(`form ${le(e.formIri)} ≠ ${le(c.formIri)}`), c.quantityKindIri !== e.quantityKindIri && y.push(`quantity kind ${le(e.quantityKindIri)} ≠ ${le(c.quantityKindIri)}`), bd(c.allowedPropertyIris).some((x) => o.within(e.propertyIri, x)) || y.push(`property ${le(e.propertyIri)} is not allowed`), Pe(e.value, p.low) < 0 && y.push("value is below the range"), Pe(e.value, p.high) > 0 && y.push("value is above the range");
    const f = ny(e.methodIri, bd(c.allowedMethodIris), n, i);
    if (y.length > 0 || f.state === "contradicted")
      return { id: d, state: "contradicted", reason: `${le(d)}: ${[...y, ...f.state === "contradicted" ? [f.reason] : []].join("; ")}` };
    if (f.state === "not_established") return { id: d, state: "not_established", reason: `${le(d)}: ${f.reason}` };
    const h = In(Ki(p.low, "mg/kg")), w = In(Ki(p.high, "mg/kg"));
    return {
      id: d,
      state: "established",
      reason: `${le(d)} covers ${le(e.propertyIri)}, ${f.reason}, ${le(e.matrixIri)}/${le(e.formIri)}, ${In(Ki(e.value, "mg/kg"))} mg/kg within ${h}–${w} mg/kg`
    };
  }), s = fn(r.map((c) => c.state)), a = r.find((c) => c.state === "established");
  return {
    state: s,
    reason: a ? a.reason : `No single scope record covers the claim (${r.map((c) => c.reason).join(" | ")}).`,
    sources: ["/credentialSubject/scope"],
    ...a ? { record: a.id } : {}
  };
}
function Ki(e, t) {
  const n = Ia[t];
  return n >= 0 ? { n: e.n, scale: e.scale + n } : e.scale + n >= 0 ? { n: e.n, scale: e.scale + n } : { n: e.n * 10n ** BigInt(-(e.scale + n)), scale: 0 };
}
function ry(e, t, n) {
  if (e.propertyIri !== t.propertyIri || e.quantityKindIri !== t.quantityKindIri)
    return { state: "not_established", reason: `Requirement ${t.id} does not apply to this claim's property and quantity kind.`, sources: [] };
  const i = Tn(t.upperLimit.value, t.upperLimit.unit);
  if (i === void 0) return { state: "not_established", reason: `Requirement ${t.id} has an unsupported limit.`, sources: [] };
  const o = t.upperLimit.unit, r = (y) => In(Ki(y, o)), s = n.acceptWhen === "value-plus-expanded-uncertainty-at-most-limit", a = s ? Gm(e.value, e.uncertainty) : e.value, c = Pe(a, i) <= 0, p = `${s ? `${r(e.value)} + ${r(e.uncertainty)} = ${r(a)}` : r(e.value)} ${c ? "≤" : ">"} ${r(i)} ${o}`;
  return {
    state: c ? "established" : "contradicted",
    reason: `${c ? "Conforms" : "Does not conform"} under ${n.id}: ${p}.`,
    sources: [],
    arithmetic: p
  };
}
const sy = /^\/credentialSubject\/materialPropertiesList\/(0|[1-9][0-9]*)\/results\/(0|[1-9][0-9]*)$/;
async function ay(e, t, n, i) {
  if (n.id !== za || i.binding.id !== n.id || i.binding.version !== n.version)
    throw new Error(`Profile ${i.id}@${i.version} is not configured for ${za}@${n.version}.`);
  const o = xa(e, n, i);
  if (o !== void 0) return Object.freeze({ result: Sa(e, o), artifacts: Object.freeze([]) });
  const r = await Aa(e, t, n, i), { target: s, artifacts: a, facts: c, verificationOf: d, artifactVerification: p } = r, y = (j) => c.get(j), f = Vm(n.scopeAndMapping), h = Xm(c.get(e.targetId), y, i, f), w = ey(c.get(e.targetId), y, i, f), x = h.routes.find((j) => j.state === "established"), v = c.get(e.targetId)?.document, A = (Array.isArray(n.scopeAndMapping.methodRevisions) ? n.scopeAndMapping.methodRevisions : []).filter((j) => typeof j?.method == "string" && typeof j?.revises == "string"), g = (j) => {
    const N = c.get(j)?.document?.credentialSubject;
    return Array.isArray(N?.scope) ? N.scope : [];
  }, m = e.selectedClaims.map((j) => {
    if (!(v !== void 0 && sy.test(j.sourcePointer) && un(v, j.sourcePointer) !== void 0)) {
      const V = v === void 0 ? "The target is not usable, so its claims are not read." : `Selected claim ${j.sourcePointer} is not a result in the usable target.`;
      return {
        claim: j,
        mapping: void 0,
        coverage: /* @__PURE__ */ new Map(),
        result: { claimId: j.id, routeWitnessIds: [], ...ce("not_established", [V]) }
      };
    }
    const _ = ty(v, j.sourcePointer, un(v, j.sourcePointer)), G = /* @__PURE__ */ new Map();
    if (_.coordinates === void 0)
      return { claim: j, mapping: _, coverage: G, result: {
        claimId: j.id,
        routeWitnessIds: [],
        ...ce(_.state, [`Gate 4: ${_.reason}`], [j.sourcePointer])
      } };
    const L = _.coordinates, B = xr(h, (V) => {
      const D = iy(L, g(V.scope), A, i.mapping.methodSuccession, f), $ = [V.scope, ...D.sources];
      return G.set(V.id, { ...D, sources: $ }), { id: "claim-coverage", state: D.state, reason: D.reason, sources: $ };
    }), T = B.routes.find((V) => V.state === "established"), O = T ? G.get(T.id)?.record : void 0;
    return { claim: j, mapping: _, coverage: G, result: {
      claimId: j.id,
      routeWitnessIds: B.state === "established" && T ? [`route:${T.id}`, ...T.chain, `record:${O}`] : [],
      ...ce(B.state, [
        B.reason,
        ...T ? [G.get(T.id).reason] : [...G].map(([V, D]) => `${V}: ${D.reason}`)
      ], [j.sourcePointer])
    } };
  }), l = m.map((j) => j.result), u = [{
    obligationId: "rm-v1:required-study",
    witnessIds: w.state === "established" ? [...w.chain] : [],
    ...ce(w.state, [w.reason], ["/evidence"])
  }], b = (() => {
    if (!e.conformity) return { requested: !1, execution: "not_run" };
    const j = { requested: !0, ...e.conformity }, N = i.conformity.requirements.find((T) => T.id === e.conformity.requirementId), _ = i.conformity.decisionRules.find((T) => T.id === e.conformity.decisionRuleId);
    if (!N || !_)
      return { ...j, ...ce("not_established", [`Requirement ${e.conformity.requirementId} or decision rule ${e.conformity.decisionRuleId} is not configured in the verifier profile.`]) };
    const G = m.filter((T) => T.mapping?.coordinates?.propertyIri === N.propertyIri && T.mapping.coordinates.quantityKindIri === N.quantityKindIri);
    if (G.length !== 1)
      return { ...j, ...ce("not_established", [`Requirement ${N.id} must apply to exactly one selected claim; ${G.length} match.`]) };
    const L = G[0];
    if (L.result.state !== "established")
      return { ...j, ...pn(`Not evaluated: claim ${L.claim.id} is not authorized.`) };
    const B = ry(L.mapping.coordinates, N, _);
    return { ...j, ...ce(B.state, [B.reason], [L.claim.sourcePointer]) };
  })(), S = /* @__PURE__ */ new Set([
    e.targetId,
    ...x?.chain ?? [],
    ...w.state === "established" ? w.chain : []
  ]), I = [
    ...a.filter((j) => S.has(j.artifactId)).flatMap(d).filter((j) => S.has(j.artifactId)).map((j) => j.state),
    ...l.map((j) => j.state),
    ...u.map((j) => j.state),
    ...b.requested ? [b.state] : []
  ], P = sa(I), R = [...r.trace], E = [...r.resources], k = yr(s.artifactId, s.digestSRI, "target", e);
  for (const { claim: j, mapping: N, coverage: _ } of m) {
    N && R.push({
      gate: 4,
      nodeUse: k,
      predicate: `claim-mapping:${j.id}`,
      state: N.state,
      execution: "executed",
      reason: N.reason,
      sources: [...N.sources]
    });
    for (const [G, L] of _)
      R.push({
        gate: 5,
        nodeUse: k,
        predicate: `claim-coverage:${j.id}:${G}`,
        state: L.state,
        execution: "executed",
        reason: L.reason,
        sources: [...L.sources]
      });
  }
  for (const j of l)
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
    for (const N of j.bases)
      R.push({
        gate: 5,
        nodeUse: k,
        predicate: `route:${j.id}:${N.id}`,
        state: N.state,
        execution: "executed",
        reason: N.reason,
        sources: [...N.sources]
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
  b.requested && R.push({
    gate: 6,
    nodeUse: k,
    predicate: `conformity:${b.requirementId}`,
    state: b.state,
    execution: b.execution,
    reason: b.reasons.join(" "),
    sources: []
  });
  const M = cr({
    requestId: e.requestId,
    targetId: e.targetId,
    binding: e.binding,
    profile: e.profile,
    artifactVerification: p,
    authorization: l,
    support: u,
    conformity: b,
    decision: P,
    trace: R,
    resources: E,
    limitations: [
      "Verification failures of credentials outside the selected route and support chains are reported but do not decide the request."
    ]
  });
  return Object.freeze({ result: M, artifacts: Object.freeze(a) });
}
const Xs = "https://vc4qi.example/bindings/cal/1", oy = "https://vc4qi.example/contexts/cal/1", Ys = "https://vc4qi.example/bindings/cal/1#", nn = "https://vc4qi.example/schemas/cal/1/", cy = Object.freeze({
  name: "calibration v1",
  schemas: Object.freeze({
    CalAccreditation: `${nn}accreditation.json`,
    CalOperationalScope: `${nn}operational-scope.json`,
    CalLegalMandate: `${nn}legal-mandate.json`,
    CalCertificate: `${nn}certificate.json`,
    CalTestReport: `${nn}test-report.json`,
    BitstringStatusListCredential: `${nn}status-list.json`
  }),
  contexts: (e) => e === "BitstringStatusListCredential" ? [Zt] : [Zt, oy]
}), _e = (e) => e !== null && typeof e == "object" && !Array.isArray(e), Be = (e) => Array.isArray(e) ? e : [], se = (e) => String(e).split(/[#/]/).pop(), dy = Object.freeze({ Pa: 0, kPa: 3, MPa: 6 });
function Xe(e, t) {
  const n = wr(e), i = typeof t == "string" ? dy[t] : void 0;
  if (!(n === void 0 || i === void 0))
    return n.scale >= i ? { n: n.n, scale: n.scale - i } : { n: n.n * 10n ** BigInt(i - n.scale), scale: 0 };
}
const je = (e) => In({ n: e.n, scale: e.scale + 3 });
function Al(e, t) {
  const n = [t];
  if (!_e(e) || typeof e.id != "string" || typeof e.quantityKindIri != "string")
    return { state: "not_established", reason: "The selected measurement group has no identifier or quantity kind.", sources: n };
  const i = [];
  for (const [r, s] of Be(e.results).entries()) {
    const a = _e(s) ? s : {}, c = wr(a.coverageFactor);
    if (c === void 0 || Pe(c, { n: 2n, scale: 0 }) !== 0)
      return { state: "not_established", reason: `Result ${r}: coverage factor ${String(a.coverageFactor)} is not the binding's k = 2.`, sources: n };
    const d = Xe(a.value, a.unit), p = Xe(a.expandedUncertainty, a.unit);
    if (d === void 0 || p === void 0)
      return { state: "not_established", reason: `Result ${r}: unit ${String(a.unit)} or a number has no supported mapping (Pa, kPa, MPa).`, sources: n };
    i.push({ value: d, uncertainty: p });
  }
  if (i.length === 0) return { state: "not_established", reason: "The measurement group has no results.", sources: n };
  const o = Be(e.methodIris).filter((r) => typeof r == "string");
  return {
    state: "established",
    reason: `Mapped ${se(e.id)}: ${se(e.quantityKindIri)}, ${i.length} result(s) in Pa, methods [${o.map(se).join(", ")}].`,
    sources: n,
    group: { id: e.id, quantityKindIri: e.quantityKindIri, methodIris: o, results: i }
  };
}
function Il(e, t, n) {
  const i = ["/credentialSubject/scope"];
  if (t.length === 0) return { state: "not_established", reason: "The scope has no records.", sources: i };
  const o = t.map((a) => {
    const c = String(a.id), d = _e(a.range) ? a.range : {}, p = Xe(d.from, d.unit), y = Xe(d.to, d.unit);
    if (p === void 0 || y === void 0) return { id: c, state: "not_established", reason: `${se(c)}: unsupported or malformed range.` };
    if (Pe(p, y) > 0) return { id: c, state: "contradicted", reason: `${se(c)}: range is reversed.` };
    const f = _e(a.cmcFloor) ? a.cmcFloor : void 0, h = f === void 0 ? void 0 : Xe(f.value, f.unit);
    if (f !== void 0 && h === void 0) return { id: c, state: "not_established", reason: `${se(c)}: unsupported CMC floor.` };
    const w = [];
    a.quantityKindIri !== e.quantityKindIri && w.push(`quantity kind ${se(e.quantityKindIri)} ≠ ${se(a.quantityKindIri)}`);
    const x = Be(a.allowedMethodIris).filter((A) => typeof A == "string"), v = e.methodIris.filter((A) => !x.includes(A));
    return v.length > 0 && w.push(`method ${v.map(se).join(", ")} is not allowed`), e.results.forEach((A, g) => {
      (Pe(A.value, p) < 0 || Pe(A.value, y) > 0) && w.push(`result ${g} ${je(A.value)} kPa is outside ${je(p)}–${je(y)} kPa`), n && h !== void 0 && Pe(A.uncertainty, h) < 0 && w.push(`result ${g} U = ${je(A.uncertainty)} kPa is below the admitted CMC ${je(h)} kPa`);
    }), w.length > 0 ? { id: c, state: "contradicted", reason: `${se(c)}: ${w.join("; ")}` } : e.methodIris.length === 0 && x.length > 0 ? {
      id: c,
      state: "not_established",
      reason: `${se(c)} restricts methods to [${x.map(se).join(", ")}], but the group names no governed method.`
    } : {
      id: c,
      state: "established",
      reason: `${se(c)} covers ${se(e.id)}: ${se(e.quantityKindIri)}, methods [${e.methodIris.map(se).join(", ")}], ${e.results.length} result(s) within ${je(p)}–${je(y)} kPa${n && h !== void 0 ? ` and not below the CMC ${je(h)} kPa` : ""}`
    };
  }), r = fn(o.map((a) => a.state)), s = o.find((a) => a.state === "established");
  return s ? { state: r, reason: s.reason, sources: i, record: s.id } : { state: r, reason: `No single scope record covers the group (${o.map((a) => a.reason).join(" | ")}).`, sources: i };
}
function ly(e, t, n) {
  const i = ["/credentialSubject/scope"];
  if (e.length === 0) return { state: "not_established", reason: "The operational scope has no records.", sources: i };
  const o = e.map((s) => {
    const a = _e(s.range) ? s.range : {}, c = Xe(a.from, a.unit), d = Xe(a.to, a.unit), p = _e(s.cmcFloor) ? s.cmcFloor : void 0, y = p === void 0 ? void 0 : Xe(p.value, p.unit);
    if (c === void 0 || d === void 0 || p !== void 0 && y === void 0)
      return { state: "not_established", reason: `${se(s.id)}: unsupported or malformed range or CMC floor.` };
    const f = Be(s.allowedMethodIris), h = t.map((x) => {
      const v = _e(x.range) ? x.range : {}, A = Xe(v.from, v.unit), g = Xe(v.to, v.unit), m = _e(x.cmcFloor) ? x.cmcFloor : void 0, l = m === void 0 ? void 0 : Xe(m.value, m.unit);
      if (A === void 0 || g === void 0 || m !== void 0 && l === void 0)
        return { state: "not_established", reason: `${se(x.id)}: unsupported or malformed range or CMC floor.` };
      const u = [];
      s.quantityKindIri !== x.quantityKindIri && u.push(`quantity kind ${se(s.quantityKindIri)} ≠ ${se(x.quantityKindIri)}`);
      const b = Be(x.allowedMethodIris), S = f.filter((I) => !b.includes(I));
      return f.length === 0 && b.length > 0 && u.push("the parent restricts methods, the child does not"), S.length > 0 && u.push(`method ${S.map(se).join(", ")} is not in ${se(x.id)}`), (Pe(c, A) < 0 || Pe(d, g) > 0) && u.push(`range ${je(c)}–${je(d)} kPa is not within ${je(A)}–${je(g)} kPa`), n && l !== void 0 && (y === void 0 ? u.push(`it states no CMC floor, but ${se(x.id)} admits only ${je(l)} kPa`) : Pe(y, l) < 0 && u.push(`CMC ${je(y)} kPa is below the admitted ${je(l)} kPa`)), u.length > 0 ? { state: "contradicted", reason: `${se(s.id)} widens ${se(x.id)}: ${u.join("; ")}` } : { state: "established", reason: `${se(s.id)} lies within ${se(x.id)}` };
    });
    if (h.length === 0) return { state: "not_established", reason: "The parent grant has no records." };
    const w = fn(h.map((x) => x.state));
    return w === "established" ? h.find((x) => x.state === "established") : { state: w, reason: h.map((x) => x.reason).join(" | ") };
  }), r = Ra(o.map((s) => s.state));
  return { state: r, reason: `${r === "established" ? "Bounded projection holds" : "Bounded projection fails"}: ${o.map((s) => s.reason).join("; ")}.`, sources: i };
}
const Ht = (e) => _e(e.credentialSubject) ? e.credentialSubject : {}, qa = (e, t, n, i, o) => dt(t, `${Ys}${n}`) ? { id: e, state: "established", reason: `${o} permits ${i}.`, sources: ["/credentialSubject/permittedActivity"] } : { id: e, state: "contradicted", reason: `${o} does not permit ${i}.`, sources: ["/credentialSubject/permittedActivity"] }, uy = Object.freeze({
  CalCertificate: { activity: "issueCalibrationCertificate", what: "issuing calibration certificates", purpose: "accredit-calibration-laboratories" },
  CalTestReport: { activity: "issueTestReport", what: "issuing test reports", purpose: "accredit-testing-laboratories" }
}), rr = (e) => Array.isArray(e.type) ? String(e.type[1]) : void 0;
function py(e, t, n) {
  const i = e.document, o = [], r = [e.uri], s = uy[rr(i) ?? ""];
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
  return r.push(a.node.uri), o.push(ft("principal-binding", c, i.issuer, "Accreditation CA")), o.push(qa("activity-permission", c, s.activity, s.what, "CA")), o.push(Ln("trust-anchor", c, s.purpose, n)), o.push(Nt(i, [["CA", c]])), pe("direct-accreditation", o, r, a.node.uri);
}
function fy(e, t, n) {
  const i = e.document, o = [], r = [e.uri], s = Ye("authorizing-reference", i, "CalOperationalScope", t, [e.uri], "CalAuthorizationPolicy");
  if (o.push(s.basis), !s.node) return pe("operational-scope", o, r);
  const a = s.node.document;
  r.push(s.node.uri), o.push(ft("principal-binding", a, i.issuer, "Operational scope O")), o.push(a.issuer === Ht(a).id ? { id: "self-maintained-scope", state: "established", reason: "O is issued by its own grantee.", sources: ["/issuer"] } : { id: "self-maintained-scope", state: "contradicted", reason: "O is not issued by its own grantee.", sources: ["/issuer"] }), o.push(qa("activity-permission", a, "issueCalibrationCertificate", "issuing calibration certificates", "O"));
  const c = Ye("maintenance-grant", a, "CalAccreditation", t, [e.uri, s.node.uri], "CalAuthorizationPolicy");
  if (o.push(c.basis), !c.node) return pe("operational-scope", o, r);
  const d = c.node.document;
  r.push(c.node.uri), o.push(ft("accreditation-grantee", d, a.issuer, "Accreditation CA")), o.push(dt(d, `${Ys}maintainCalibrationScope`) && dt(d, `${Ys}issueCalibrationCertificate`) ? { id: "projection-permission", state: "established", reason: "CA permits maintaining an operational calibration scope.", sources: ["/credentialSubject/permittedActivity"] } : { id: "projection-permission", state: "contradicted", reason: "CA does not permit maintaining an operational calibration scope.", sources: ["/credentialSubject/permittedActivity"] });
  const p = ly(
    Be(Ht(a).scope).filter(_e),
    Be(Ht(d).scope).filter(_e),
    n.bindingRules.applyCmcFloor === !0
  );
  return o.push({ id: "bounded-projection", state: p.state, reason: p.reason, sources: p.sources }), o.push(Ln("trust-anchor", d, "accredit-calibration-laboratories", n)), o.push(Nt(i, [["O", a], ["CA", d]])), pe("operational-scope", o, r, s.node.uri);
}
function hy(e, t, n) {
  const i = e.document, o = [], r = [e.uri], s = Ye("authorizing-reference", i, "CalLegalMandate", t, [e.uri], "CalAuthorizationPolicy");
  if (o.push(s.basis), !s.node) return pe("statutory-mandate", o, r);
  const a = s.node.document;
  return r.push(s.node.uri), o.push(ft("principal-binding", a, i.issuer, "Mandate M")), o.push(qa("activity-permission", a, "issueCalibrationCertificate", "issuing calibration certificates", "M")), o.push(Ln("trust-anchor", a, "designate-national-metrology-institutes", n)), o.push(Nt(i, [["M", a]])), pe("statutory-mandate", o, r, s.node.uri);
}
const ql = Object.freeze({
  "direct-accreditation": py,
  "operational-scope": fy,
  "statutory-mandate": hy
}), Ra = (e) => e.length === 0 ? "not_established" : xe(e);
function my(e, t, n, i) {
  const o = n.authority.certificateRoutes, r = o.slice(0, n.authority.maxRoutes).map((y) => {
    const f = ql[y];
    return f === void 0 ? pe(y, [{ id: "installed-evaluator", state: "not_established", reason: `Route ${y} has no installed evaluator.`, sources: [] }], [e.uri]) : f(e, t, n);
  }), s = Nn([], r, o.slice(n.authority.maxRoutes)), a = Be(Ht(e.document).measurementGroups);
  if (a.length === 0)
    return { state: "not_established", reason: "The certificate has no measurement groups.", chain: [e.uri], bases: [] };
  const c = [];
  let d = [e.uri];
  a.forEach((y, f) => {
    const h = `/credentialSubject/measurementGroups/${f}`, w = Al(y, h);
    if (w.group === void 0) {
      c.push({ id: `group-${f}`, state: w.state, reason: `Group ${f}: ${w.reason}`, sources: [h] });
      return;
    }
    const x = w.group, v = xr(s, (m) => {
      const l = Be(Ht(t(m.scope)?.document ?? {}).scope).filter(_e), u = Il(x, l, i);
      return { id: "claim-coverage", state: u.state, reason: u.reason, sources: [m.scope, ...u.sources] };
    }), A = v.routes.find((m) => m.state === "established");
    A && (d = A.chain);
    const g = A ? `through ${A.id}` : v.routes.map((m) => `${m.id} ${m.state}: ${m.bases.filter((l) => l.state !== "established").map((l) => l.reason).join(" ")}`).join(" | ");
    c.push({ id: `group-${f}`, state: v.state, reason: `Group ${f} (${se(x.id)}) is ${v.state} ${g}`.trim(), sources: [h] });
  });
  const p = Ra(c.map((y) => y.state));
  return { state: p, reason: `The certificate's own authority is ${p}.`, chain: d, bases: c };
}
function yy(e, t, n, i) {
  if (e.usable !== "established" || e.document === void 0)
    return { state: "not_established", reason: "The target is not usable, so its support is not evaluated.", bases: [], chain: [] };
  const o = e.document, r = (b) => ({ state: b.state, reason: b.reason, bases: [b], chain: [e.uri] }), s = Be(o.evidence).filter(_e).filter((b) => b.type === "CalCalibrationReference").map((b) => String(b.id));
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
  const d = c.document;
  if (rr(d) !== "CalCertificate")
    return r({ id: "calibration-reference", state: "contradicted", reason: `${a} is a ${String(rr(d))}, not a calibration certificate.`, sources: ["/evidence", a] });
  const p = Ht(o), y = Ht(d), f = [{ id: "calibration-reference", state: "established", reason: `Cites calibration ${a}.`, sources: ["/evidence", a] }];
  f.push(typeof p.instrumentIri != "string" ? { id: "same-instrument", state: "not_established", reason: "The report names no instrument.", sources: ["/credentialSubject/instrumentIri"] } : y.id === p.instrumentIri ? { id: "same-instrument", state: "established", reason: `The calibration concerns instrument ${String(p.instrumentIri)}.`, sources: ["/credentialSubject/instrumentIri"] } : { id: "same-instrument", state: "contradicted", reason: `The calibration concerns ${String(y.id)}, not instrument ${String(p.instrumentIri)}.`, sources: ["/credentialSubject/instrumentIri"] });
  const h = Be(p.measurementGroups).filter(_e).map((b) => b.quantityKindIri), w = Be(y.measurementGroups).filter(_e).map((b) => b.quantityKindIri), x = h.filter((b) => !w.includes(b));
  f.push(h.length > 0 && x.length === 0 ? { id: "same-quantity", state: "established", reason: `The calibration covers ${[...new Set(h.map(se))].join(", ")}.`, sources: ["/credentialSubject/measurementGroups"] } : {
    id: "same-quantity",
    state: h.length === 0 ? "not_established" : "contradicted",
    reason: h.length === 0 ? "The report has no measurement groups." : `The calibration does not cover ${x.map(se).join(", ")}.`,
    sources: ["/credentialSubject/measurementGroups"]
  });
  const v = Date.parse(String(p.activityTime)), A = Date.parse(String(y.activityTime)), g = Date.parse(String(d.validFrom)), m = Date.parse(String(d.validUntil));
  !Number.isFinite(v) || !Number.isFinite(A) ? f.push({ id: "calibration-precedes-use", state: "not_established", reason: "An activity time is missing.", sources: ["/credentialSubject/activityTime"] }) : (f.push(A <= v ? { id: "calibration-precedes-use", state: "established", reason: `Calibrated at ${String(y.activityTime)}, before the test at ${String(p.activityTime)}.`, sources: ["/credentialSubject/activityTime"] } : { id: "calibration-precedes-use", state: "contradicted", reason: `Calibrated at ${String(y.activityTime)}, after the test at ${String(p.activityTime)}.`, sources: ["/credentialSubject/activityTime"] }), f.push(Number.isFinite(g) && Number.isFinite(m) && g <= v && v <= m ? { id: "calibration-valid-at-use", state: "established", reason: "The calibration certificate was valid at the test.", sources: ["/validFrom", "/validUntil"] } : { id: "calibration-valid-at-use", state: "contradicted", reason: `The calibration certificate (valid ${String(d.validFrom)} to ${String(d.validUntil)}) was not valid at the test at ${String(p.activityTime)}.`, sources: ["/validFrom", "/validUntil"] }));
  const l = my(c, t, n, i);
  f.push({ id: "calibration-authority", state: l.state, reason: l.reason, sources: [a] }, ...l.bases.map((b) => ({ ...b, id: `calibration-authority:${b.id}` })));
  const u = Ra(f.map((b) => b.state));
  return {
    state: u,
    reason: u === "established" ? "The instrument calibration is applicable and independently authorized." : u === "contradicted" ? "The instrument calibration is contradicted." : "The instrument calibration is not established.",
    bases: f,
    chain: [e.uri, ...l.chain]
  };
}
const gy = /^\/credentialSubject\/measurementGroups\/(0|[1-9][0-9]*)$/;
function vy(e) {
  const t = e.bindingRules.applyCmcFloor;
  if (typeof t != "boolean")
    throw new Error(`Profile ${e.id}@${e.version} must state bindingRules.applyCmcFloor for ${Xs}.`);
  return t;
}
async function by(e, t, n, i) {
  if (n.id !== Xs || i.binding.id !== n.id || i.binding.version !== n.version)
    throw new Error(`Profile ${i.id}@${i.version} is not configured for ${Xs}@${n.version}.`);
  const o = vy(i), r = xa(e, n, i);
  if (r !== void 0) return Object.freeze({ result: Sa(e, r), artifacts: Object.freeze([]) });
  const s = await Aa(e, t, n, i, cy), { target: a, artifacts: c, facts: d, verificationOf: p, artifactVerification: y } = s, f = (N) => d.get(N), h = d.get(e.targetId), w = i.authority.certificateRoutes, x = h.document === void 0 ? [] : w.slice(0, i.authority.maxRoutes).map((N) => {
    const _ = ql[N];
    return _ === void 0 ? {
      id: N,
      state: "not_established",
      execution: "executed",
      chain: [h.uri],
      bases: [{ id: "installed-evaluator", state: "not_established", reason: `Route ${N} has no installed evaluator.`, sources: [] }]
    } : _(h, f, i);
  }), v = h.document === void 0 ? { state: "not_established", reason: "The target is not usable, so its authority is not evaluated.", restrictions: [], routes: [] } : Nn([], x, w.slice(i.authority.maxRoutes)), A = v.routes.find((N) => N.state === "established"), g = (N) => {
    const _ = d.get(N)?.document?.credentialSubject;
    return Array.isArray(_?.scope) ? _.scope : [];
  }, m = h.document, l = e.selectedClaims.map((N) => {
    const _ = /* @__PURE__ */ new Map();
    if (m === void 0 || !gy.test(N.sourcePointer) || un(m, N.sourcePointer) === void 0) {
      const O = m === void 0 ? "The target is not usable, so its claims are not read." : `Selected claim ${N.sourcePointer} is not a measurement group in the usable target.`;
      return { claim: N, mapping: void 0, coverage: _, result: { claimId: N.id, routeWitnessIds: [], ...ce("not_established", [O]) } };
    }
    const G = Al(un(m, N.sourcePointer), N.sourcePointer);
    if (G.group === void 0)
      return { claim: N, mapping: G, coverage: _, result: {
        claimId: N.id,
        routeWitnessIds: [],
        ...ce(G.state, [`Gate 4: ${G.reason}`], [N.sourcePointer])
      } };
    const L = G.group, B = xr(v, (O) => {
      const V = Il(L, g(O.scope), o), D = [O.scope, ...V.sources];
      return _.set(O.id, { ...V, sources: D }), { id: "claim-coverage", state: V.state, reason: V.reason, sources: D };
    }), T = B.routes.find((O) => O.state === "established");
    return { claim: N, mapping: G, coverage: _, result: {
      claimId: N.id,
      routeWitnessIds: B.state === "established" && T ? [`route:${T.id}`, ...T.chain, `record:${_.get(T.id)?.record}`] : [],
      ...ce(B.state, [
        B.reason,
        ...T ? [_.get(T.id).reason] : [..._].map(([O, V]) => `${O}: ${V.reason}`)
      ], [N.sourcePointer])
    } };
  }), u = l.map((N) => N.result), S = Array.isArray(m?.type) && m.type[1] === "CalTestReport" ? yy(h, f, i, o) : void 0, I = S === void 0 ? [] : [{
    obligationId: "cal-v1:instrument-calibration",
    witnessIds: S.state === "established" ? [...S.chain] : [],
    ...ce(S.state, [S.reason], ["/evidence"])
  }], P = e.conformity ? {
    requested: !0,
    ...e.conformity,
    ...ce("not_established", ["The calibration v1 binding installs no conformity requirements or decision rules."])
  } : { requested: !1, execution: "not_run" }, R = /* @__PURE__ */ new Set([
    e.targetId,
    ...A?.chain ?? [],
    ...S?.state === "established" ? S.chain : []
  ]), E = [
    ...c.filter((N) => R.has(N.artifactId)).flatMap(p).map((N) => N.state),
    ...u.map((N) => N.state),
    ...I.map((N) => N.state),
    ...P.requested ? [P.state] : []
  ], k = [...s.trace], M = yr(a.artifactId, a.digestSRI, "target", e);
  for (const { claim: N, mapping: _, coverage: G } of l) {
    _ && k.push({
      gate: 4,
      nodeUse: M,
      predicate: `claim-mapping:${N.id}`,
      state: _.state,
      execution: "executed",
      reason: _.reason,
      sources: [..._.sources]
    });
    for (const [L, B] of G)
      k.push({
        gate: 5,
        nodeUse: M,
        predicate: `claim-coverage:${N.id}:${L}`,
        state: B.state,
        execution: "executed",
        reason: B.reason,
        sources: [...B.sources]
      });
  }
  for (const N of u)
    k.push({
      gate: 5,
      nodeUse: M,
      predicate: `claim-authorization:${N.claimId}`,
      state: N.state,
      execution: N.execution,
      reason: N.reasons.join(" "),
      sources: [...N.sourcePointers]
    });
  k.push({
    gate: 5,
    nodeUse: M,
    predicate: "authority",
    state: v.state,
    execution: "executed",
    reason: v.reason,
    sources: A ? [...A.chain] : []
  });
  for (const N of v.routes) {
    k.push(N.execution === "not_run" ? {
      gate: 5,
      nodeUse: M,
      predicate: `route:${N.id}`,
      state: "not_established",
      execution: "not_run",
      reason: "Not evaluated: the route budget was exhausted.",
      sources: []
    } : {
      gate: 5,
      nodeUse: M,
      predicate: `route:${N.id}`,
      state: N.state,
      execution: "executed",
      reason: `Route ${N.id} is ${N.state}.`,
      sources: [...N.chain]
    });
    for (const _ of N.bases)
      k.push({
        gate: 5,
        nodeUse: M,
        predicate: `route:${N.id}:${_.id}`,
        state: _.state,
        execution: "executed",
        reason: _.reason,
        sources: [..._.sources]
      });
  }
  for (const N of S?.bases ?? [])
    k.push({
      gate: 6,
      nodeUse: M,
      predicate: `support:${N.id}`,
      state: N.state,
      execution: "executed",
      reason: N.reason,
      sources: [...N.sources]
    });
  for (const N of I)
    k.push({
      gate: 6,
      nodeUse: M,
      predicate: N.obligationId,
      state: N.state,
      execution: N.execution,
      reason: N.reasons.join(" "),
      sources: []
    });
  P.requested && k.push({
    gate: 6,
    nodeUse: M,
    predicate: `conformity:${P.requirementId}`,
    state: P.state,
    execution: P.execution,
    reason: P.reasons.join(" "),
    sources: []
  });
  const j = cr({
    requestId: e.requestId,
    targetId: e.targetId,
    binding: e.binding,
    profile: e.profile,
    artifactVerification: y,
    authorization: u,
    support: I,
    conformity: P,
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
const wd = "https://vc4qi.example/bindings/gs/1", wy = "https://vc4qi.example/contexts/gs/1", Sr = "https://vc4qi.example/bindings/gs/1#", Tt = "https://vc4qi.example/schemas/gs/1/", xy = Object.freeze({
  name: "GS certification v1",
  schemas: Object.freeze({
    GsAccreditation: `${Tt}accreditation.json`,
    GsSchemeAuthorization: `${Tt}scheme-authorization.json`,
    GsCertificate: `${Tt}certificate.json`,
    GsMarkCredential: `${Tt}mark-credential.json`,
    ProductPassport: `${Tt}product-passport.json`,
    GsTestReport: `${Tt}test-report.json`,
    GsInspectionReport: `${Tt}inspection-report.json`,
    BitstringStatusListCredential: `${Tt}status-list.json`
  }),
  contexts: (e) => e === "BitstringStatusListCredential" ? [Zt] : [Zt, wy]
}), lt = (e) => e !== null && typeof e == "object" && !Array.isArray(e), Ve = (e) => Array.isArray(e) ? e : [], X = (e) => String(e).split(/[#/]/).pop(), ut = (e) => lt(e.credentialSubject) ? e.credentialSubject : {};
function Rl(e, t) {
  const n = [t];
  if (!lt(e) || typeof e.productCategoryIri != "string")
    return { state: "not_established", reason: "The selected certification names no product category.", sources: n };
  const i = Ve(e.standardIris).filter((o) => typeof o == "string");
  return {
    state: "established",
    reason: `Mapped certification of ${X(e.productCategoryIri)} against [${i.map(X).join(", ")}].`,
    sources: n,
    certification: { productCategoryIri: e.productCategoryIri, standardIris: i }
  };
}
function jl(e, t, n) {
  const i = ["/credentialSubject/scope"], { productCategoryIri: o, standardIris: r } = e, s = t.map((f) => {
    const h = String(f.id), w = Ve(f.standardIris);
    if (f.productCategoryIri !== o)
      return { id: h, state: "contradicted", reason: `${X(h)}: category ${X(o)} ≠ ${X(f.productCategoryIri)}` };
    const x = r.filter((v) => !w.includes(v));
    return x.length > 0 ? { id: h, state: "contradicted", reason: `${X(h)}: standard ${x.map(X).join(", ")} is not in the accredited scope` } : r.length === 0 && w.length > 0 ? { id: h, state: "not_established", reason: `${X(h)} restricts standards, but the certification names none` } : { id: h, state: "established", reason: `${X(h)} covers ${X(o)} against [${r.map(X).join(", ")}]` };
  }), a = n.map((f) => {
    const h = String(f.id);
    return f.productCategoryIri === o ? { id: h, state: "established", reason: `${X(h)} permits the GS mark for ${X(o)}` } : { id: h, state: "contradicted", reason: `${X(h)}: category ${X(o)} ≠ ${X(f.productCategoryIri)}` };
  }), c = (f, h) => {
    if (h.length === 0) return { state: "not_established", reason: `The ${f} scope has no records.`, record: void 0 };
    const w = h.find((x) => x.state === "established");
    return w ? { state: "established", reason: w.reason, record: w.id } : { state: fn(h.map((x) => x.state)), reason: `No single ${f} record covers it (${h.map((x) => x.reason).join(" | ")})`, record: void 0 };
  }, d = c("competence", s), p = c("scheme", a), y = xe([d.state, p.state]);
  return {
    state: y,
    reason: `Competence: ${d.reason}. Scheme: ${p.reason}.`,
    sources: i,
    ...y === "established" ? { records: [d.record, p.record] } : {}
  };
}
function $l(e, t, n) {
  const i = e.document, o = [], r = [e.uri], s = (d, p, y, f, h, w) => {
    const x = Ye(`${d}-reference`, i, p, t, [e.uri], "GsAuthorizationPolicy");
    if (o.push(x.basis), !x.node) return;
    const v = x.node.document;
    return o.push(ft(`${d}-grantee`, v, i.issuer, w)), o.push(dt(v, `${Sr}${y}`) ? { id: `${d}-permission`, state: "established", reason: `${w} permits ${f}.`, sources: ["/credentialSubject/permittedActivity"] } : { id: `${d}-permission`, state: "contradicted", reason: `${w} does not permit ${f}.`, sources: ["/credentialSubject/permittedActivity"] }), o.push(Ln(`${d}-anchor`, v, h, n)), x.node;
  }, a = s("competence", "GsAccreditation", "certifyProducts", "certifying products", "accredit-certification-bodies", "Accreditation GS-A"), c = s("scheme", "GsSchemeAuthorization", "awardGsMark", "awarding the GS mark", "authorize-gs-certification", "Scheme authorization GS-S");
  return !a || !c ? pe("competence-and-scheme-permission", o, r) : (r.push(a.uri, c.uri), o.push(Nt(i, [["GS-A", a.document], ["GS-S", c.document]])), pe("competence-and-scheme-permission", o, r, a.uri));
}
function Pl(e, t) {
  const n = (i) => i === void 0 ? [] : Ve(ut(t(i)?.document ?? {}).scope).filter(lt);
  return { competence: n(e.scope), scheme: n(e.chain.length === 3 ? e.chain[2] : void 0) };
}
const Sy = `${Sr}GsMark`;
function _l(e, t, n) {
  const i = [t];
  if (!lt(e) || typeof e.markIri != "string" || typeof e.productModelIri != "string")
    return { state: "not_established", reason: "The selected marking names no mark or product model.", sources: i };
  if (e.markIri !== Sy)
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
function Tl(e, t) {
  const n = ["/credentialSubject/id"];
  if (t === void 0) return { state: "not_established", reason: "No certificate was reached.", sources: n };
  const i = ut(t).id;
  return i === e.productModelIri ? { state: "established", reason: `${X(t.id)} certifies model ${X(i)}.`, sources: n, records: [String(t.id)] } : { state: "contradicted", reason: `${X(t.id)} certifies ${X(i)}, not model ${X(e.productModelIri)}.`, sources: n };
}
function Cl(e, t, n) {
  const i = e.document, o = [], r = [e.uri], s = Ye("certificate-reference", i, "GsCertificate", t, [e.uri], "GsAuthorizationPolicy");
  if (o.push(s.basis), !s.node) return pe("gs-certified-product", o, r);
  const a = s.node.document;
  r.push(s.node.uri);
  const c = ut(a).manufacturerIri;
  o.push(typeof c != "string" ? { id: "manufacturer-binding", state: "not_established", reason: "The certificate names no manufacturer.", sources: ["/credentialSubject/manufacturerIri"] } : c === i.issuer ? { id: "manufacturer-binding", state: "established", reason: `The certificate names the passport issuer ${c} as manufacturer.`, sources: ["/credentialSubject/manufacturerIri", "/issuer"] } : { id: "manufacturer-binding", state: "contradicted", reason: `The certificate names ${c}, not the passport issuer ${String(i.issuer)}.`, sources: ["/credentialSubject/manufacturerIri", "/issuer"] }), o.push({ ...Nt(i, [["The certificate", a]]), id: "certificate-in-force" });
  const d = $l(s.node, t, n);
  o.push(...d.bases.map((f) => ({ ...f, id: `certificate:${f.id}` })));
  const p = Rl(ut(a).certification, "/credentialSubject/certification"), y = p.certification === void 0 ? { state: p.state, reason: p.reason } : (() => {
    const { competence: f, scheme: h } = Pl(d, t);
    return jl(p.certification, f, h);
  })();
  return o.push({ id: "certificate:claim-coverage", state: y.state, reason: y.reason, sources: ["/credentialSubject/certification"] }), r.push(...d.chain.slice(1)), pe("gs-certified-product", o, r, s.node.uri);
}
const Ay = `${Sr}Pass`, Iy = [
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
function qy(e, t, n) {
  const i = e.document, o = ut(i), r = lt(o.certification) ? o.certification : {};
  return Iy.map(({ obligationId: s, reference: a, type: c, activity: d, purpose: p, what: y }) => {
    const f = [], h = (I) => {
      const P = xe(f.map((E) => E.state)), R = f.find((E) => E.state === P && P !== "established");
      return {
        obligationId: s,
        state: P,
        bases: f,
        chain: I,
        reason: P === "established" ? `The ${y} applies and is independently authorized.` : `The ${y}: ${R?.reason ?? "not established"}`
      };
    }, w = Ve(i.evidence).filter(lt).filter((I) => I.type === a).map((I) => String(I.id));
    if (w.length !== 1)
      return f.push({
        id: "reference",
        state: "not_established",
        sources: ["/evidence"],
        reason: w.length === 0 ? `The certificate cites no ${y}.` : `The certificate cites several ${y}s; none is chosen.`
      }), h([]);
    const x = w[0], v = t(x);
    if (v === void 0 || v.usable !== "established" || v.document === void 0)
      return f.push({
        id: "reference",
        state: v?.usable === "contradicted" ? "contradicted" : "not_established",
        sources: ["/evidence", x],
        reason: v === void 0 ? `${X(x)} is unavailable.` : `${X(x)} is not usable: ${v.reason}`
      }), h([]);
    const A = v.document, g = ut(A), m = Ve(A.type);
    if (f.push(Me("reference", m.includes(c), `Cites ${y} ${X(x)}.`, `${X(x)} is not a ${c}.`, ["/evidence", x])), s === "type-examination") {
      f.push(Me(
        "same-model",
        g.productModelIri === o.id,
        `${X(x)} examined model ${X(o.id)}.`,
        `${X(x)} examined ${X(g.productModelIri)}, not model ${X(o.id)}.`,
        ["/credentialSubject/productModelIri"]
      ));
      const I = Ve(g.standardIris), P = Ve(r.standardIris), R = P.filter((E) => !I.includes(E));
      f.push(Me(
        "covers-certification",
        g.productCategoryIri === r.productCategoryIri && R.length === 0,
        `${X(x)} covers ${X(r.productCategoryIri)} against [${P.map(X).join(", ")}].`,
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
    f.push(Me("outcome", g.outcomeIri === Ay, `${X(x)} passed.`, `${X(x)} did not pass (${X(g.outcomeIri)}).`, ["/credentialSubject/outcomeIri"]));
    const l = Date.parse(String(g.activityTime)), u = Date.parse(String(o.activityTime));
    f.push(Me(
      "precedes-certification",
      Number.isFinite(l) && Number.isFinite(u) ? l <= u : void 0,
      `The ${y} (${String(g.activityTime)}) precedes the certification.`,
      Number.isFinite(l) && Number.isFinite(u) ? `The ${y} (${String(g.activityTime)}) follows the certification (${String(o.activityTime)}).` : "An activity time is missing.",
      ["/credentialSubject/activityTime"]
    ));
    const b = Ye("accreditation-reference", A, "GsAccreditation", t, [e.uri, x], "GsAuthorizationPolicy");
    if (f.push(b.basis), !b.node) return h([x]);
    const S = b.node.document;
    if (f.push(ft("accreditation-grantee", S, A.issuer, `Accreditation ${X(b.node.uri)}`)), f.push(Me(
      "accreditation-permission",
      dt(S, `${Sr}${d}`),
      `${X(b.node.uri)} permits ${d}.`,
      `${X(b.node.uri)} does not permit ${d}.`,
      ["/credentialSubject/permittedActivity"]
    )), f.push(Ln("accreditation-anchor", S, p, n)), f.push({ ...Nt(A, [[X(b.node.uri), S]]), id: "accreditation-in-force" }), s === "type-examination") {
      const I = Ve(g.standardIris), R = Ve(ut(S).scope).filter(lt).find((E) => E.productCategoryIri === g.productCategoryIri && I.every((k) => Ve(E.standardIris).includes(k)));
      f.push(Me(
        "accreditation-scope",
        R !== void 0,
        `${X(R?.id)} covers the examination.`,
        `No record of ${X(b.node.uri)} covers ${X(g.productCategoryIri)} against [${I.map(X).join(", ")}].`,
        ["/credentialSubject/scope"]
      ));
    }
    return h([x, b.node.uri]);
  });
}
function Ry(e, t, n) {
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
function jy(e, t, n) {
  const i = e.document, o = ut(i), r = lt(o.complianceInformation) ? o.complianceInformation : {}, s = lt(r.gsMark) ? r.gsMark : {}, a = [], c = (g, m) => {
    const l = xe(a.map((b) => b.state)), u = a.find((b) => b.state === l && l !== "established");
    return { ...m === void 0 ? {} : { certificateUri: m }, support: {
      obligationId: "gs-mark-credential",
      state: l,
      bases: a,
      chain: g,
      reason: l === "established" ? "The GS-mark credential applies to this unit and holds its own route." : `The GS-mark credential: ${u?.reason ?? "not established"}`
    } };
  }, d = Ve(i.evidence).filter(lt).filter((g) => g.type === "GsMarkCredentialReference").map((g) => String(g.id));
  if (d.length !== 1)
    return a.push({
      id: "reference",
      state: "not_established",
      sources: ["/evidence"],
      reason: d.length === 0 ? "The passport cites no GS-mark credential." : "The passport cites several GS-mark credentials; none is chosen."
    }), c([]);
  const p = d[0], y = t(p);
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
    Ve(f.type).includes("GsMarkCredential"),
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
  const x = Cl(y, t, n);
  a.push(...x.bases.map((g) => ({ ...g, id: `mark-credential:${g.id}` })));
  const v = x.scope === void 0 ? void 0 : t(x.scope)?.document, A = w.marking === void 0 ? { state: "not_established", reason: "No mark was mapped.", sources: [] } : Tl(w.marking, v);
  return a.push({ id: "mark-credential:claim-coverage", state: A.state, reason: A.reason, sources: [...A.sources] }), c([p, ...x.chain.slice(1)], x.scope);
}
const $y = Object.freeze({
  "competence-and-scheme-permission": $l,
  "gs-certified-product": Cl,
  "responsible-economic-operator": Ry
}), Py = "/credentialSubject/certification", _y = "/credentialSubject/marking", ea = "/credentialSubject/complianceInformation/gsMark", Ty = { GsMarkCredential: "mark", ProductPassport: "passport" }, Cy = { certificate: Py, mark: _y, passport: ea };
async function Ey(e, t, n, i) {
  if (n.id !== wd || i.binding.id !== n.id || i.binding.version !== n.version)
    throw new Error(`Profile ${i.id}@${i.version} is not configured for ${wd}@${n.version}.`);
  const o = xa(e, n, i);
  if (o !== void 0) return Object.freeze({ result: Sa(e, o), artifacts: Object.freeze([]) });
  const r = await Aa(e, t, n, i, xy), { target: s, artifacts: a, facts: c, verificationOf: d, artifactVerification: p } = r, y = (L) => c.get(L), f = c.get(e.targetId), h = f.document, w = i.authority.certificateRoutes, x = h === void 0 ? [] : w.slice(0, i.authority.maxRoutes).map((L) => {
    const B = $y[L];
    return B === void 0 ? {
      id: L,
      state: "not_established",
      execution: "executed",
      chain: [f.uri],
      bases: [{ id: "installed-evaluator", state: "not_established", reason: `Route ${L} has no installed evaluator.`, sources: [] }]
    } : B(f, y, i);
  }), v = h === void 0 ? { state: "not_established", reason: "The target is not usable, so its authority is not evaluated.", restrictions: [], routes: [] } : Nn([], x, w.slice(i.authority.maxRoutes)), A = v.routes.find((L) => L.state === "established"), g = Array.isArray(h?.type) && Ty[String(h.type[1])] || "certificate", m = Cy[g], l = e.selectedClaims.map((L) => {
    const B = /* @__PURE__ */ new Map();
    if (h === void 0 || L.sourcePointer !== m || un(h, L.sourcePointer) === void 0) {
      const z = h === void 0 ? "The target is not usable, so its claims are not read." : g === "passport" ? `This binding interprets only the GS-mark entry (${ea}) of a product passport; ${L.sourcePointer} has no interpretation here.` : `Selected claim ${L.sourcePointer} is not the ${g === "mark" ? "marking" : "certification statement"} of the usable target.`;
      return { claim: L, mapping: void 0, coverage: B, result: { claimId: L.id, routeWitnessIds: [], ...ce("not_established", [z]) } };
    }
    const T = un(h, L.sourcePointer), O = g === "certificate" ? void 0 : _l(T, L.sourcePointer, h.credentialSubject?.productModelIri), V = O ?? Rl(T, L.sourcePointer), D = O?.marking, $ = g === "certificate" ? V.certification : void 0;
    if (D === void 0 && $ === void 0)
      return { claim: L, mapping: V, coverage: B, result: {
        claimId: L.id,
        routeWitnessIds: [],
        ...ce(V.state, [`Gate 4: ${V.reason}`], [L.sourcePointer])
      } };
    const q = xr(v, (z) => {
      const H = g === "passport" ? {
        state: "established",
        sources: [ea],
        reason: "The entry is declared by the passport's responsible economic operator; it is relied on through the GS-mark credential it cites (gate 6)."
      } : D !== void 0 ? Tl(D, y(z.scope)?.document) : (() => {
        const { competence: J, scheme: U } = Pl(z, y);
        return jl($, J, U);
      })(), Q = [...z.chain.slice(1), ...H.sources];
      return B.set(z.id, { ...H, sources: Q }), { id: "claim-coverage", state: H.state, reason: H.reason, sources: Q };
    }), C = q.routes.find((z) => z.state === "established");
    return { claim: L, mapping: V, coverage: B, result: {
      claimId: L.id,
      routeWitnessIds: q.state === "established" && C ? [`route:${C.id}`, ...C.chain, ...(B.get(C.id)?.records ?? []).map((z) => `record:${z}`)] : [],
      ...ce(q.state, [
        q.reason,
        ...C ? [B.get(C.id).reason] : [...B].map(([z, H]) => `${z}: ${H.reason}`)
      ], [L.sourcePointer])
    } };
  }), u = l.map((L) => L.result), b = g === "passport" && h !== void 0 ? jy(f, y, i) : void 0, S = h === void 0 ? void 0 : g === "passport" ? b?.certificateUri : g === "mark" ? x.find((L) => L.chain.length > 1)?.chain[1] : e.targetId, I = S === void 0 ? void 0 : y(S), P = h === void 0 ? [] : I?.usable === "established" && I.document !== void 0 ? qy(I, y, i) : ["type-examination", "factory-inspection"].map((L) => ({
    obligationId: L,
    state: "not_established",
    reason: "No usable GS certificate was reached, so its studies are not evaluated.",
    bases: [],
    chain: []
  })), R = [...b ? [b.support] : [], ...P], E = R.map((L) => ({
    obligationId: `gs-v1:${L.obligationId}`,
    witnessIds: L.state === "established" ? [...L.chain] : [],
    ...ce(L.state, [L.reason], ["/evidence"])
  })), k = e.conformity ? {
    requested: !0,
    ...e.conformity,
    ...ce("not_established", ["The GS v1 binding installs no conformity requirements or decision rules."])
  } : { requested: !1, execution: "not_run" }, M = /* @__PURE__ */ new Set([
    e.targetId,
    ...A?.chain ?? [],
    ...R.filter((L) => L.state === "established").flatMap((L) => L.chain)
  ]), j = [
    ...a.filter((L) => M.has(L.artifactId)).flatMap(d).map((L) => L.state),
    ...u.map((L) => L.state),
    ...E.map((L) => L.state),
    ...k.requested ? [k.state] : []
  ], N = [...r.trace], _ = yr(s.artifactId, s.digestSRI, "target", e);
  for (const { claim: L, mapping: B, coverage: T } of l) {
    B && N.push({
      gate: 4,
      nodeUse: _,
      predicate: `claim-mapping:${L.id}`,
      state: B.state,
      execution: "executed",
      reason: B.reason,
      sources: [...B.sources]
    });
    for (const [O, V] of T)
      N.push({
        gate: 5,
        nodeUse: _,
        predicate: `claim-coverage:${L.id}:${O}`,
        state: V.state,
        execution: "executed",
        reason: V.reason,
        sources: [...V.sources]
      });
  }
  for (const L of u)
    N.push({
      gate: 5,
      nodeUse: _,
      predicate: `claim-authorization:${L.claimId}`,
      state: L.state,
      execution: L.execution,
      reason: L.reasons.join(" "),
      sources: [...L.sourcePointers]
    });
  N.push({
    gate: 5,
    nodeUse: _,
    predicate: "authority",
    state: v.state,
    execution: "executed",
    reason: v.reason,
    sources: A ? [...A.chain] : []
  });
  for (const L of v.routes) {
    N.push(L.execution === "not_run" ? {
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
    for (const B of L.bases)
      N.push({
        gate: 5,
        nodeUse: _,
        predicate: `route:${L.id}:${B.id}`,
        state: B.state,
        execution: "executed",
        reason: B.reason,
        sources: [...B.sources]
      });
  }
  for (const L of R)
    for (const B of L.bases)
      N.push({
        gate: 6,
        nodeUse: _,
        predicate: `support:${L.obligationId}:${B.id}`,
        state: B.state,
        execution: "executed",
        reason: B.reason,
        sources: [...B.sources]
      });
  for (const L of E)
    N.push({
      gate: 6,
      nodeUse: _,
      predicate: L.obligationId,
      state: L.state,
      execution: L.execution,
      reason: L.reasons.join(" "),
      sources: []
    });
  k.requested && N.push({
    gate: 6,
    nodeUse: _,
    predicate: `conformity:${k.requirementId}`,
    state: k.state,
    execution: k.execution,
    reason: k.reasons.join(" "),
    sources: []
  });
  const G = cr({
    requestId: e.requestId,
    targetId: e.targetId,
    binding: e.binding,
    profile: e.profile,
    artifactVerification: p,
    authorization: u,
    support: E,
    conformity: k,
    decision: sa(j),
    trace: N,
    resources: r.resources,
    limitations: [
      "The GS route is a fictional profile example (competence AND scheme permission), not a universal GS or legal rule.",
      ...g === "passport" ? ["The product passport is an experimental credential shaped after the EU Digital Product Passport (ESPR), not ESPR conformance; this binding interprets only its GS-mark entry."] : [],
      ...g === "mark" ? ["The GS-mark credential is an experimental manufacturer credential; today's GS scheme has no per-unit credential."] : [],
      "Verification failures of credentials outside the selected route and study chains are reported but do not decide the request.",
      "Fixture grants are fictional: an accreditation or scheme authorization here has no legal effect."
    ]
  });
  return Object.freeze({ result: G, artifacts: Object.freeze([...a]) });
}
function ky(e, t, n) {
  const i = JSON.parse(n), o = ra(i.verificationMethod[0].publicKeyMultibase).slice(2), r = Pd(new TextEncoder().encode(`vc4qi-rm-v1-insecure-fixture-key:${e}`));
  return { id: `${t}#key-1`, controller: t, privateKey: r, publicKey: o };
}
const My = (e) => `${JSON.stringify(e, null, 2)}
`;
async function El(e, t, n, i, o, r) {
  const s = Td(new _d(o).openSession({ maxResources: 64, maxBytes: 1e6 })), a = await Yh(e, ky(t, n, r), { created: i, documentLoader: s, safe: !0 });
  return My({ ...e, proof: a });
}
function Oy(e) {
  const t = new Uint8Array(Hs / 8);
  for (const o of e) t[o >> 3] |= 128 >> (o & 7);
  const n = jm(t, { level: 9, mtime: 0 });
  let i = "";
  for (const o of n) i += String.fromCharCode(o);
  return `u${btoa(i).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")}`;
}
function Ly(e, t, n) {
  const { proof: i, ...o } = JSON.parse(e);
  return { ...o, validFrom: n, credentialSubject: { ...o.credentialSubject, encodedList: Oy(t) } };
}
const sr = "2026-09-25T12:00:00Z", Ny = { rm: ay, cal: by, gs: Ey }, pt = Object.fromEntries(["rm", "cal", "gs"].map((e) => [e, {
  manifest: hu(St[e].manifest),
  profiles: Object.fromEntries(Object.entries(St[e].profiles).map(([t, n]) => [t, or(n)])),
  files: St[e].files
}])), ja = "gs-verifier-dpp-accreditation-only (demonstrator)";
{
  const e = St.gs.profiles["gs-verifier-dpp-1"];
  pt.gs.profiles[ja] = or({
    ...e,
    id: "https://vc4qi.example/profiles/gs-verifier-dpp-accreditation-only",
    description: "Demonstrator-only variant of gs-verifier-dpp-1 that configures the accreditation body as its only trust anchor. Fictional.",
    trustAnchors: e.trustAnchors.filter((t) => t.id !== "https://zls.vc4qi.example/controller")
  });
}
const Dy = (e) => String(e).split(/[#/:]/).pop() ?? "", Es = (e, t) => ({
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
}, wn = (e) => ({ id: `g${e + 1}`, sourcePointer: `/credentialSubject/measurementGroups/${e}` }), zy = [
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
}), ks = (e, t, n, i, o) => ({
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
}), Sn = (e) => ({ uri: e, label: "Withhold the type examination" }), Ms = (e) => ({ uri: e, label: "Withhold the GS-mark credential" }), xd = [
  {
    id: "rm",
    tab: "RM",
    title: "Certified reference material",
    intro: "M375a, leaded brass: may I rely on the certified arsenic value?",
    caseLabel: "Certified As mass fraction (mg/kg)",
    cases: [Es("178", "certificate"), Es("197", "hypothetical"), Es("520", "hypothetical")],
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
    cases: zy,
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
      ks("unit", "Unit sn-0042", "its own GS-mark credential", "https://maker.vc4qi.example/credentials/DPP-1", Ms(at.M1)),
      ks("early", "Unit sn-0001", "on market before certification", "https://maker.vc4qi.example/credentials/DPP-2", Ms(at.M4)),
      ks("borrowed", "Unit sn-0050", "cites another unit's credential", "https://maker.vc4qi.example/credentials/DPP-3", Ms(at.M1))
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
}, Sd = (e) => {
  const t = e !== null && typeof e == "object" ? e.id : e, n = /^https:\/\/([^./]+)\./.exec(String(t))?.[1];
  return n === void 0 ? String(t).split("#")[0].split(":").pop() : Vy[n] ?? n;
}, Uy = {
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
function Gy(e, t, n, i, o) {
  const r = /* @__PURE__ */ new Map();
  for (const [x, v] of Object.entries(t))
    try {
      r.set(x, JSON.parse(v));
    } catch {
    }
  const s = (x) => [
    ...(x?.termsOfUse ?? []).map((v) => v.authorizationCredential?.id).filter((v) => typeof v == "string").map((v) => ({ to: v, kind: "authority" })),
    ...(x?.evidence ?? []).map((v) => v.id).filter((v) => typeof v == "string").map((v) => ({ to: v, kind: "support" }))
  ], a = new Map(n.artifactVerification.map((x) => [x.artifactId, x.state])), c = n.decision === "accept" ? /* @__PURE__ */ new Set([...n.authorization.flatMap((x) => x.routeWitnessIds), ...n.support.flatMap((x) => x.witnessIds)]) : void 0, d = /* @__PURE__ */ new Map([[e, 0]]), p = /* @__PURE__ */ new Set(), y = [], f = [[e, !1]], h = /* @__PURE__ */ new Set();
  for (; f.length > 0; ) {
    const [x, v] = f.shift();
    for (const { to: A, kind: g } of s(r.get(x))) {
      const m = `${x}>${A}`, l = v || g === "support";
      h.has(m) || (h.add(m), y.push({
        from: x,
        to: A,
        kind: g,
        state: x === e ? g === "support" ? o : i : c && !c.has(A) ? "unused" : a.get(A) ?? "not_established"
      }));
      const u = (d.get(x) ?? 0) + 1;
      (d.get(A) ?? -1) < u && u < 8 ? (d.set(A, u), f.push([A, l])) : l && !p.has(A) && p.add(A);
    }
  }
  return { nodes: [...d].map(([x, v]) => {
    const A = r.get(x), g = Array.isArray(A?.type) ? String(A.type[1]) : "", m = A?.credentialSubject ?? {};
    return {
      uri: x,
      name: Dy(x),
      role: Uy[g] ?? (g || "not supplied"),
      layer: v,
      present: A !== void 0,
      target: x === e,
      parties: A === void 0 ? "withheld" : `${Sd(A.issuer)} → ${Sd(m.id)}`,
      state: a.get(x) ?? "not_established"
    };
  }), edges: y };
}
const Ct = (e) => e.length === 0 ? "not_established" : xe(e.map((t) => t.state)), Ad = (e, t) => e.find((n) => n.state === t);
async function $a(e) {
  const t = pt[e.binding], n = t.profiles[e.profileName], i = e.texts ?? {}, o = new Set(t.files.map((R) => R.uri)), r = t.files.find((R) => R.uri === e.target)?.origin ?? t.files.at(-1).origin, s = {}, a = [
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
      digestSRI: E === R.text && R.digestSRI ? R.digestSRI : ar(k)
    };
  }), c = ju({
    requestId: e.requestId,
    targetId: e.target,
    selectedClaims: e.claims.map((R) => ({ ...R })),
    purpose: "demonstrator",
    binding: { id: t.manifest.id, version: t.manifest.version },
    profile: { id: n.id, version: n.version },
    trustConfigId: "https://vc4qi.example/trust/fixture-anchors",
    evaluationTime: sr,
    activityTime: e.activityTime ?? sr,
    suppliedEvidence: e.supplied.filter((R) => R !== e.withheld),
    resolverLimits: { maxResources: 64, maxDepth: 4, maxBytes: 5e6 },
    ...e.conformity ? { conformity: { ...e.conformity } } : {}
  }), { result: d } = await Ny[e.binding](c, new _d(a), t.manifest, n), p = (R, E = () => !0) => d.trace.filter((k) => k.gate === R && E(k)), f = [...p(2), ...p(1)], h = p(3), w = [...p(0), ...p(4)], x = (R, E, k) => E === "established" ? k : (Ad(R, E) ?? Ad(R, "not_established"))?.reason ?? "Not evaluated.", v = d.authorization, A = v.length === 0 ? "not_established" : xe(v.map((R) => R.state)), g = A === "established" ? v.map((R) => R.reasons.at(-1)).join(" ") : v.filter((R) => R.state !== "established").map((R) => `${R.claimId}: ${R.reasons.join(" ")}`).join(" "), m = d.support, l = d.artifactVerification.find((R) => R.artifactId === e.target)?.state === "established", u = m.length > 0 ? xe(m.map((R) => R.state)) : l ? "not_required" : "not_established", b = p(6, (R) => R.predicate.startsWith("conformity:")), S = [
    {
      id: "authentic",
      state: Ct(f),
      details: f,
      summary: x(f, Ct(f), "Every credential is signed by its issuer's own key, and every reference matches the exact bytes.")
    },
    {
      id: "current",
      state: Ct(h),
      details: h,
      summary: x(h, Ct(h), "Every credential is within its validity period and not revoked.")
    },
    // "Understood" includes reading the claim itself (gate 4); a claim that was never
    // read, because its credential failed a lower gate, is not understood.
    p(4).length === 0 ? {
      id: "understood",
      state: Ct(p(0)) === "contradicted" ? "contradicted" : "not_established",
      details: w,
      summary: x(p(0), Ct(p(0)), "The claim was not read, because its credential did not pass the earlier checks.")
    } : {
      id: "understood",
      state: Ct(w),
      details: w,
      summary: x(w, Ct(w), p(4).map((R) => R.reason).join(" "))
    },
    {
      id: "authorized",
      state: A,
      summary: g,
      details: p(5, (R) => R.predicate.startsWith("claim-") || R.predicate.startsWith("restriction:") || R.predicate.startsWith("route:"))
    },
    {
      id: "supported",
      state: u,
      summary: m.length > 0 ? m.map((R) => R.reasons.join(" ")).join(" ") : l ? "This claim needs no supporting credential under the selected profile." : "Not evaluated: the credential did not pass the earlier checks.",
      details: p(6, (R) => R.predicate.startsWith("support:") || m.some((E) => E.obligationId === R.predicate))
    },
    d.conformity.requested ? {
      id: "fit",
      state: d.conformity.execution === "not_run" ? "not_asked" : d.conformity.state,
      details: b,
      summary: d.conformity.reasons.join(" ")
    } : { id: "fit", state: "not_asked", details: [], summary: e.notAsked }
  ], I = JSON.parse(s[e.target]), P = Gy(e.target, s, d, A, u);
  return { profile: e.profileName, result: d, questions: S, target: I, texts: s, graph: P };
}
async function dg(e) {
  const t = xd.find((s) => s.id === e.example) ?? xd[0], n = t.cases.find((s) => s.id === e.caseId) ?? t.cases[0], i = pt[n.binding].files.find((s) => s.uri === n.target), o = e.tamper ? { [n.target]: i.text.replace(n.tamper[0], n.tamper[1]) } : {}, r = await $a({
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
const lg = [
  { id: "build", label: "Build the chain" },
  { id: "verify", label: "Verify" },
  { id: "manipulate", label: "Manipulate" },
  { id: "decide", label: "The verifier decides" },
  { id: "present", label: "Present" },
  { id: "play", label: "Your turn" }
], Os = /* @__PURE__ */ new Map();
function kl(e, t) {
  return Os.has(e) || Os.set(e, t()), Os.get(e);
}
const Id = "2026-09-20T00:00:00Z", Cn = (e, t) => pt[e].files.find((n) => n.uri === t).text, Ml = (e) => pt[e].files.map((t) => ({
  uri: t.uri,
  mediaType: t.mediaType,
  origin: t.origin,
  version: t.version,
  bytes: new TextEncoder().encode(t.text),
  digestSRI: t.digestSRI
})), on = (e, t, n, i) => kl(`${e}:list:${t}`, () => El(Ly(Cn(e, t), [0], Id), n, i, Id, Ml(e), Cn(e, i))), Ol = (e, t, n) => e.replace(t, n), ug = [
  { id: "rules", label: "Design rules" },
  { id: "build", label: "Build the chain" },
  { id: "verify", label: "Verify" },
  { id: "manipulate", label: "Try to break it" },
  { id: "decide", label: "Who decides" },
  { id: "when", label: "At issuance" },
  { id: "proposal", label: "Proposal" },
  { id: "play", label: "Your turn" }
], oe = {
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
}, pg = [
  {
    id: "gaci",
    mono: "ACI",
    name: "Global ACI",
    does: "Recognizes accreditation bodies after peer evaluation. Can suspend one recognition. A fictional stand-in.",
    publishes: [{ label: "Key", uri: oe.GACI }, { label: "Revocation list", uri: oe.GACI_STATUS }, { label: "Suspension list", uri: oe.GACI_SUSPENSION }]
  },
  {
    id: "ab",
    mono: "AB",
    name: "Accreditation body",
    does: "Accredits the producer and the laboratory. Can suspend.",
    publishes: [{ label: "Key", uri: oe.NAB }, { label: "Revocation list", uri: oe.NAB_STATUS }, { label: "Suspension list", uri: oe.SUSPENSION }]
  },
  {
    id: "lab",
    mono: "LAB",
    name: "Laboratory",
    does: "Studies the batch under its accreditation. Can revoke its study.",
    publishes: [{ label: "Key", uri: oe.LAB }, { label: "Revocation list", uri: oe.LAB_STATUS }]
  },
  {
    id: "rmp",
    mono: "RMP",
    name: "RM producer",
    does: "Declares its scope, certifies the material and ships it.",
    publishes: [{ label: "Key", uri: oe.PRODUCER }, { label: "Revocation list", uri: oe.PRODUCER_STATUS }]
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
], fg = [
  { code: "R", label: "Recognition", tag: "proposal", kind: "grant", actor: "gaci", row: 1, about: "ab", heldBy: "ab" },
  { code: "A", label: "Accreditation", kind: "grant", actor: "ab", row: 1, about: "rmp", heldBy: "rmp" },
  { code: "H", label: "Laboratory accreditation", kind: "grant", actor: "ab", row: 2, about: "lab", heldBy: "lab" },
  { code: "O", label: "Operational scope", kind: "grant", actor: "rmp", row: 1, about: "rmp", heldBy: "rmp" },
  { code: "S", label: "Homogeneity study", kind: "evidence", actor: "lab", row: 2, about: "object", aboutLabel: "disc lot 1", heldBy: "rmp" },
  { code: "D", label: "RM certificate", kind: "claim", actor: "rmp", row: 2, about: "object", aboutLabel: "disc lot 1", heldBy: "holder" }
], Fy = {
  certificate: "178",
  value: "178",
  uncertainty: "5",
  method: "M1",
  suspendA: !1,
  revokeS: !1,
  tamper: !1,
  withhold: "",
  trust: "ab",
  suspendGaci: !1,
  ask: "fit",
  rule: "guarded",
  limit: "200",
  asOf: "now",
  archive: !1
}, By = "2026-01-20T00:00:00Z", hg = [
  {
    id: "rules",
    part: "rules",
    acts: [],
    panel: "rules",
    title: "One credential, and the rules that make a chain",
    text: "Certificate D178 itself. Every link points somewhere: authority up, the material down, evidence sideways, status beside it."
  },
  {
    id: "recognize",
    part: "build",
    acts: ["gaci", "ab"],
    joins: ["gaci", "ab"],
    issues: ["R"],
    title: "Global ACI recognizes the accreditation body",
    text: "After peer evaluation, Global ACI signs R about the accreditation body: what it may accredit for. One credential per recognition is our proposal."
  },
  {
    id: "accredit",
    part: "build",
    acts: ["ab"],
    joins: ["lab", "rmp"],
    issues: ["A", "H"],
    title: "The accreditation body accredits the producer and the laboratory",
    text: "The body accredits the producer (A) and the laboratory (H). Both point up to R, the authority the body acts under."
  },
  {
    id: "act",
    part: "build",
    acts: ["rmp", "lab", "holder"],
    joins: ["holder"],
    issues: ["O", "S", "D"],
    title: "The producer and the laboratory act",
    text: "The producer keeps its own scope O within A, the lab studies the lot (S), and certificate D178 cites both and ships with the disc."
  },
  {
    id: "verify",
    part: "verify",
    acts: ["holder", "verifier"],
    joins: ["verifier"],
    expect: "accept",
    title: "Checked upward",
    text: "The verifier trusts one root, the accreditation body, and climbs every link from D178 to it. Its own rule: As + U at most 200 mg/kg."
  },
  {
    id: "break",
    part: "manipulate",
    acts: ["holder", "rmp", "ab", "lab"],
    expect: "accept",
    unlock: ["withhold", "tamper", "certificate", "suspend", "revoke"],
    title: "Try to break it",
    text: "Click a line to leave that credential out. Edit a value after signing, certify 520 or your own value, suspend A or revoke S."
  },
  {
    id: "decide",
    part: "decide",
    acts: ["verifier", "rmp"],
    state: { certificate: "197" },
    unlock: ["rule", "limit", "ask", "certificate"],
    expect: "reject",
    title: "The verifier decides, not the issuer",
    text: "D197: 197 ± 5 mg/kg, authorized. Guarded acceptance counts the uncertainty: 202 is above 200. Change the rule or the limit."
  },
  {
    id: "abroad",
    part: "decide",
    acts: ["verifier", "gaci", "rmp"],
    state: { trust: "global-aci" },
    unlock: ["trust", "suspendGaci", "certificate"],
    expect: "accept",
    title: "A verifier abroad trusts only Global ACI",
    text: "It climbs one link further: A and H point up to R. Suspend R, or certify 520: recognized is not the same as in scope."
  },
  {
    id: "when",
    part: "when",
    acts: ["ab", "verifier"],
    state: { suspendA: !0, asOf: "issuance", archive: !0 },
    unlock: ["asOf", "archive", "suspend"],
    expect: "accept",
    title: "Was it valid when it was issued?",
    text: "A was suspended in September; D178 was certified on 20 January. Asked about today it fails. Asked about January, the lists kept from January answer: A held."
  },
  {
    id: "proposal",
    part: "proposal",
    acts: ["gaci", "ab"],
    panel: "proposal",
    title: "Proposal: from recognized body to accreditation",
    text: "One recognition credential per body, which its accreditations point up to, and dated status lists for the question at issuance."
  },
  {
    id: "play",
    part: "play",
    acts: ["gaci", "ab", "lab", "rmp", "holder", "verifier"],
    unlock: ["suspendGaci", "suspend", "revoke", "certificate", "tamper", "withhold", "trust", "ask", "rule", "limit", "asOf", "archive"],
    title: "Your turn",
    text: "Every action is live: leave out, edit, certify, suspend or revoke, and change what the verifier trusts, asks and when."
  }
], Pa = "rm-verifier-1", _a = "rm-verifier-other-anchor (demonstrator)", Zy = "rm-verifier-global-aci-1";
{
  const e = St.rm.profiles[Pa];
  pt.rm.profiles[_a] = or({
    ...e,
    id: "https://vc4qi.example/profiles/rm-verifier-other-anchor",
    description: "Demonstrator-only variant of rm-verifier-1 whose only trust anchor is another, fictional accreditation body.",
    trustAnchors: e.trustAnchors.map((t) => ({ ...t, id: "https://other-ab.vc4qi.example/controller" }))
  });
}
function Hy(e, t) {
  if (t === "200") return e;
  const n = `${e} (limit ${t} mg/kg, demonstrator)`;
  if (!pt.rm.profiles[n]) {
    const i = pt.rm.profiles[e], o = structuredClone(St.rm.profiles[e] ?? St.rm.profiles[Pa]);
    e === _a && (o.trustAnchors = i.trustAnchors.map((s) => ({ id: s.id, purposes: [...s.purposes] })));
    const r = o.conformity;
    r.requirements[0].upperLimit.value = t, pt.rm.profiles[n] = or({
      ...o,
      id: `${i.id}-limit-${t}`,
      description: `Demonstrator-only variant of ${i.id} whose As limit is ${t} mg/kg.`
    });
  }
  return n;
}
const ta = (e) => Cn("rm", e), Jy = (e) => e.certificate === "custom" ? oe.LIVE : `https://producer.vc4qi.example/credentials/D${e.certificate}`;
function Ky(e) {
  return kl(`rm:D:${e.value}:${e.uncertainty}:${e.method}`, () => {
    const { proof: t, ...n } = JSON.parse(ta("https://producer.vc4qi.example/credentials/D178")), i = structuredClone(n.credentialSubject), o = i.materialPropertiesList[0].results[0];
    o.methodIri = o.methodIri.replace(/M1$/, e.method), o.data.quantity.value = e.value, o.data.quantity.uncertainty.expandedUncertainty = e.uncertainty;
    const r = { ...n.credentialStatus, id: `${oe.PRODUCER_STATUS}#4`, statusListIndex: "4" };
    return El(
      {
        ...n,
        id: oe.LIVE,
        name: "Reference material certificate, CuZn39Pb3 disc lot 1 (signed in this browser)",
        credentialSubject: i,
        credentialStatus: r
      },
      "producer",
      oe.PRODUCER,
      n.validFrom,
      Ml("rm"),
      ta(oe.PRODUCER)
    );
  });
}
async function mg(e = {}) {
  const t = { ...Fy, ...e }, n = Jy(t), i = {};
  if (t.certificate === "custom" && (i[n] = await Ky(t)), t.suspendA && (i[oe.SUSPENSION] = await on("rm", oe.SUSPENSION, "nab", oe.NAB)), t.revokeS && (i[oe.LAB_STATUS] = await on("rm", oe.LAB_STATUS, "lab", oe.LAB)), t.suspendGaci && (i[oe.GACI_SUSPENSION] = await on("rm", oe.GACI_SUSPENSION, "global-aci", oe.GACI)), t.asOf === "issuance" && t.archive) for (const d of St.rm.archive ?? []) i[d.uri] = d.text;
  const o = new Set((t.asOf === "issuance" && t.archive ? St.rm.archive ?? [] : []).map((d) => d.uri)), r = Object.keys(i).filter((d) => !o.has(d));
  if (t.tamper) {
    const d = i[n] ?? ta(n), p = JSON.parse(d).credentialSubject.materialPropertiesList[0].results[0].data.quantity.value;
    i[n] = Ol(d, `"value": "${p}"`, `"value": "${p === "150" ? "151" : "150"}"`);
  }
  const s = { R: oe.R, A: oe.A, H: oe.H, O: oe.O, S: oe.S, D: n }, a = t.trust === "ab" ? Pa : t.trust === "global-aci" ? Zy : _a;
  return { ...await $a({
    binding: "rm",
    profileName: t.ask === "fit" ? Hy(a, t.limit) : a,
    requestId: "urn:vc4qi:demonstrator:rm-board",
    target: n,
    claims: [{ id: "as", sourcePointer: "/credentialSubject/materialPropertiesList/0/results/0" }],
    supplied: [],
    texts: i,
    withheld: t.withhold ? s[t.withhold] : void 0,
    activityTime: t.asOf === "issuance" ? By : sr,
    ...t.ask === "fit" ? { conformity: {
      requirementId: "as-mass-fraction-max-200-mg-per-kg",
      decisionRuleId: t.rule === "simple" ? "simple-acceptance" : "guarded-acceptance-expanded-u"
    } } : {},
    notAsked: "The verifier asked only whether the value is authorized; no limit was applied."
  }), state: t, certificate: n, uris: s, signedLive: r };
}
const xt = {
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
}, yg = [
  {
    id: "ab",
    mono: "AB",
    name: "Accreditation body",
    does: "Accredits the GS body for testing and certifying. Can revoke.",
    publishes: [{ label: "Key", uri: xt.NAB }, { label: "Revocation list", uri: xt.NAB_STATUS }]
  },
  {
    id: "so",
    mono: "SO",
    name: "Scheme owner",
    does: "Permits a body to award the GS mark, in the role ZLS has. Can revoke.",
    publishes: [{ label: "Key", uri: xt.ZLS }, { label: "Revocation list", uri: xt.ZLS_STATUS }]
  },
  {
    id: "gsb",
    mono: "GSB",
    name: "GS body",
    does: "Examines, inspects and certifies. Can withdraw a certificate.",
    publishes: [{ label: "Key", uri: xt.BODY }, { label: "Revocation list", uri: xt.BODY_STATUS }]
  },
  {
    id: "mfr",
    mono: "MFR",
    name: "Manufacturer",
    does: "Makes hair dryer HD-01, marks each unit and issues its passport.",
    publishes: [{ label: "Key", uri: xt.MAKER }, { label: "Revocation list", uri: xt.MAKER_STATUS }]
  },
  {
    id: "verifier",
    mono: "V",
    name: "Verifier",
    does: "Relies on the passport's GS mark only as far as its own profile allows.",
    publishes: [{ label: "Profile" }]
  }
], gg = [
  { code: "GS-A", label: "Accreditation", kind: "grant", actor: "ab", row: 1, about: "gsb", heldBy: "gsb" },
  { code: "GS-S", label: "Scheme permission", kind: "grant", actor: "so", row: 3, about: "gsb", heldBy: "gsb" },
  { code: "TR-1", label: "Type examination", kind: "evidence", actor: "gsb", row: 1, about: "object", aboutLabel: "model HD-01", heldBy: "mfr" },
  { code: "GSC-1", label: "GS certificate", kind: "grant", actor: "gsb", row: 2, about: "object", aboutLabel: "model HD-01", heldBy: "mfr" },
  { code: "FI-1", label: "Factory inspection", kind: "evidence", actor: "gsb", row: 3, about: "mfr", heldBy: "mfr" },
  { code: "GSM", label: "GS-mark credential", kind: "evidence", actor: "mfr", row: 2, about: "object", aboutLabel: "the unit", heldBy: "mfr" },
  { code: "DPP", label: "Product passport", kind: "claim", actor: "mfr", row: 3, about: "object", aboutLabel: "the unit", heldBy: "mfr" }
], Qy = {
  unit: "sn-0042",
  revokeA: !1,
  revokeS: !1,
  revokeC: !1,
  tamper: !1,
  withholdTR: !1,
  trust: "both"
}, Wy = {
  "sn-0042": "https://maker.vc4qi.example/credentials/DPP-1",
  "sn-0050": "https://maker.vc4qi.example/credentials/DPP-3",
  "sn-0001": "https://maker.vc4qi.example/credentials/DPP-2"
}, vg = [
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
async function bg(e = {}) {
  const t = { ...Qy, ...e }, n = Wy[t.unit], i = xt, o = {};
  t.revokeA && (o[i.NAB_STATUS] = await on("gs", i.NAB_STATUS, "nab", i.NAB)), t.revokeS && (o[i.ZLS_STATUS] = await on("gs", i.ZLS_STATUS, "zls", i.ZLS)), t.revokeC && (o[i.BODY_STATUS] = await on("gs", i.BODY_STATUS, "gs-body", i.BODY));
  const r = Object.keys(o);
  t.tamper && (o[n] = Ol(Cn("gs", n), "-sn-", "-sn-9"));
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
const wg = {
  evaluationTime: sr,
  bindings: Object.fromEntries(Object.entries(pt).map(([e, t]) => [e, `${t.manifest.id}@${t.manifest.version}`]))
};
export {
  lg as BOARD_PARTS,
  sr as EVALUATION_TIME,
  xd as EXAMPLES,
  yg as GS_ACTORS,
  gg as GS_ASSETS,
  Qy as GS_DEFAULT,
  vg as GS_STORY,
  By as RM_ACTIVITY,
  pg as RM_ACTORS,
  fg as RM_ASSETS,
  Fy as RM_DEFAULT,
  ug as RM_PARTS,
  hg as RM_STORY,
  wg as buildInfo,
  bg as evaluateGsBoard,
  mg as evaluateRmBoard,
  dg as evaluateScenario
};
