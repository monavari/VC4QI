var zl = Object.defineProperty;
var Oa = (e) => {
  throw TypeError(e);
};
var Ul = (e, t, n) => t in e ? zl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var ht = (e, t, n) => Ul(e, typeof t != "symbol" ? t + "" : t, n), La = (e, t, n) => t.has(e) || Oa("Cannot " + n);
var it = (e, t, n) => (La(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Un = (e, t, n) => t.has(e) ? Oa("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), jr = (e, t, n, i) => (La(e, t, "write to private field"), i ? i.call(e, n) : t.set(e, n), n);
const St = { rm: { manifest: { $schema: "./manifest.schema.json", id: "https://vc4qi.example/bindings/rm/1", version: "1", status: "experimental", owner: { name: "VC4QI repository fixture governance", source: "docs/bindings.md", authority: "local-research-fixture-only" }, installation: { status: "incomplete", reason: "Contexts, schemas, controller documents, signed A/H/O/S/D fixtures and status lists are pinned and verify in TypeScript and Python. The I1-I4 evaluators (protection, status, authority routes, support, claim mapping and coverage, conformity) and the current-reliance time rules are implemented, with a cross-language parity vector; an independent transformation vector is still required before selection.", pendingResources: [] }, carrierAndSchema: { model: "W3C Verifiable Credentials Data Model 2.0", modelContext: "https://www.w3.org/ns/credentials/v2", requiredContexts: ["https://www.w3.org/ns/credentials/v2", "https://vc4qi.example/contexts/rm/1"], credentialTypes: ["https://www.w3.org/2018/credentials#VerifiableCredential", "https://vc4qi.example/bindings/rm/1#RmAccreditation", "https://vc4qi.example/bindings/rm/1#RmOperationalScope", "https://vc4qi.example/bindings/rm/1#RmCertificate", "https://vc4qi.example/bindings/rm/1#RmStudy", "https://vc4qi.example/bindings/rm/1#RmLabAuthority", "https://www.w3.org/ns/credentials/status#BitstringStatusListCredential", "https://www.w3.org/ns/credentials/recognized-entities#RecognizedEntityCredential"], schemaUris: ["https://vc4qi.example/schemas/rm/1/accreditation.json", "https://vc4qi.example/schemas/rm/1/operational-scope.json", "https://vc4qi.example/schemas/rm/1/certificate.json", "https://vc4qi.example/schemas/rm/1/study.json", "https://vc4qi.example/schemas/rm/1/lab-authority.json", "https://vc4qi.example/schemas/rm/1/issued-under-policy.json", "https://vc4qi.example/schemas/rm/1/recognition-policy.json", "https://vc4qi.example/schemas/rm/1/study-reference.json", "https://vc4qi.example/schemas/rm/1/status-list.json", "https://vc4qi.example/schemas/rm/1/recognized-entity.json"], statusListCarrier: "BitstringStatusListCredential with the VCDM 2.0 context only", recognitionCarrier: "RecognizedEntityCredential with the VCDM 2.0 context and https://vc4qi.example/contexts/recognized-entities/draft-20261112, a stand-in for the unpublished W3C Recognized Entities context (Working Draft of 12 November 2026); the main scopes are carried in registration (mainScope is an RM binding extension term)", composition: "exact-listed-context-and-schema-combinations-only", pinnedResourceIndex: "bindings/experimental/rm-v1/catalog.json", decimalEncoding: "JSON strings typed xsd:decimal for every quantity, bound and uncertainty", orderedCollections: ["materials", "materialPropertiesList", "results"] }, factMappings: [{ fact: "grantorOrActor", nativePath: "/issuer", expandedIri: "https://www.w3.org/2018/credentials#issuer" }, { fact: "grantee", nativePath: "/credentialSubject/id", expandedIri: "@id" }, { fact: "permittedActivity", nativePath: "/credentialSubject/permittedActivity", expandedIri: "https://vc4qi.example/bindings/rm/1#permittedActivity" }, { fact: "scopeRecords", nativePath: "/credentialSubject/scope", expandedIri: "https://vc4qi.example/bindings/rm/1#scope" }, { fact: "authorizingReference", nativePath: "/termsOfUse/*/authorizationCredential/id", expandedIri: "https://vc4qi.example/ns/chain#authorizationCredential" }, { fact: "recognitionReference", nativePath: "/termsOfUse/*/recognitionCredential/id", expandedIri: "https://vc4qi.example/ns/chain#recognitionCredential" }, { fact: "requiredStudy", nativePath: "/evidence/*/id", expandedIri: "https://www.w3.org/2018/credentials#evidence" }, { fact: "validFrom", nativePath: "/validFrom", expandedIri: "https://www.w3.org/2018/credentials#validFrom" }, { fact: "validUntil", nativePath: "/validUntil", expandedIri: "https://www.w3.org/2018/credentials#validUntil" }, { fact: "activityTime", nativePath: "/credentialSubject/activityTime", expandedIri: "https://vc4qi.example/bindings/rm/1#activityTime" }, { fact: "selectedResult", nativePath: "/credentialSubject/materialPropertiesList/*/results/*", expandedIri: "https://vc4qi.example/bindings/rm/1#results" }], cardinality: { credentialSubject: { minimum: 1, maximum: 1 }, material: { minimum: 1, maximum: 1 }, scopeRecords: { minimum: 1 }, selectedAuthorizingPoliciesPerUse: { minimum: 1, maximum: 1 }, authorizingReferenceSelection: "by-declared-reference-type-per-route; resolved credential type must match (else contradicted); several of one type not_established", supportReferences: { minimum: 1 }, multipleRecognizedDeclarations: "unsupported-unless-exact-deterministic-composition-is-listed", ambiguousSelection: "not_established" }, discoveryAndIntegrity: { referenceCarriers: ["termsOfUse", "evidence", "relatedResource", "credentialSchema"], discovery: "supplied-or-installed-static-catalog-only", unknownUri: "not_established", immutableRepresentation: "original-secured-bytes", digestAlgorithm: "sha384", digestEncoding: "SRI", digestInput: "exact-original-secured-bytes", recognitionReferences: "only a RecognizedEntityCredential that a grant references from its own termsOfUse (a RecognitionPolicy recognitionCredential, pinned by digest); issuer.recognizedIn may mirror it and must then name the same credential; recognitions supplied by the holder but not referenced, discovery through issuer.recognizedIn alone and identifier-based discovery are unsupported", independentGrantBinding: "unsupported: authority is recognized only through termsOfUse IssuedUnderPolicy authorizationCredential references on the credential chain; an authenticated grant found by other means establishes nothing (not_established); a RecognitionPolicy reference never establishes authority" }, recognizedTypes: { authorizationPolicy: "https://vc4qi.example/ns/chain#IssuedUnderPolicy", authorizationPolicyEstablishes: ["authorizing-reference-candidate"], recognitionPolicy: "https://vc4qi.example/ns/chain#RecognitionPolicy", recognitionPolicyEstablishes: ["recognition-reference-candidate"], supportEvidence: "https://vc4qi.example/bindings/rm/1#RmStudyReference", supportEvidenceEstablishes: ["support-reference-candidate"], nonEstablishingByItself: ["authority", "scope", "support-applicability", "conformity"] }, principalAndRights: { principalEqualityEvaluator: "https://vc4qi.example/evaluators/exact-identifier/1", identityAliases: "none", activities: { issueRmCertificate: "https://vc4qi.example/bindings/rm/1#issueRmCertificate", maintainRmScope: "https://vc4qi.example/bindings/rm/1#maintainRmScope", issueRmStudy: "https://vc4qi.example/bindings/rm/1#issueRmStudy" }, rules: ["A grantee equals the producer exercising certificate issuance and scope maintenance.", "O issuer and grantee equal that producer and O is contained by A.", "D issuer equals O grantee.", "S issuer equals H laboratory grantee.", "Commissioning a study grants no laboratory competence."] }, scopeAndMapping: { mappingVersion: "rm-experimental-mapping-1", recordEvaluator: "https://vc4qi.example/evaluators/rm-complete-record/1", quantityEvaluator: "https://vc4qi.example/evaluators/exact-mass-fraction/1", dimensions: ["matrixIri", "formIri", "propertyIri", "methodIri", "quantityKindIri", "range"], units: { "mg/kg": "1e-6", "kg/kg": "1" }, boundaries: "inclusive", missingOrEmptyRestrictedDimension: "not_established", recordCombination: "one-complete-record-per-claim-no-splicing", uncertainty: { requiredCoverageFactor: "2", nonnegative: !0, accreditationCeiling: "none" }, broader: [{ narrower: "https://vc4qi.example/bindings/rm/1#CuZn39Pb3", broader: "https://vc4qi.example/bindings/rm/1#CopperAlloys" }, { narrower: "https://vc4qi.example/bindings/rm/1#CopperAlloys", broader: "https://vc4qi.example/bindings/rm/1#NonFerrousMetalsAndAlloys" }, { narrower: "https://vc4qi.example/bindings/rm/1#Disc", broader: "https://vc4qi.example/bindings/rm/1#SolidForms" }, { narrower: "https://vc4qi.example/bindings/rm/1#As", broader: "https://vc4qi.example/bindings/rm/1#ElementContents" }, { narrower: "https://vc4qi.example/bindings/rm/1#Cu", broader: "https://vc4qi.example/bindings/rm/1#ElementContents" }, { narrower: "https://vc4qi.example/bindings/rm/1#Zn", broader: "https://vc4qi.example/bindings/rm/1#ElementContents" }, { narrower: "https://vc4qi.example/bindings/rm/1#Pb", broader: "https://vc4qi.example/bindings/rm/1#ElementContents" }], conceptHierarchy: "skos:broader assertions in broader, applied transitively: a scope record's matrix, form or property covers every narrower concept (an accreditation for non-ferrous metals and alloys and element contents contains arsenic in CuZn39Pb3 discs); methods and quantity kinds are exact; labels are never compared; malformed entries are ignored and never widen a scope", methodRevisions: [{ method: "https://vc4qi.example/bindings/rm/1#M2", revises: "https://vc4qi.example/bindings/rm/1#M1" }], methodSuccessionInterpretation: "verifier-profile mapping.methodSuccession: accept-successor | require-extension | none (none leaves a revised method not_established at gate 4)", claimCoverage: "the selected result, mapped at gate 4, must lie in one complete record of the route's own scope credential (O for operational-scope, A for direct-accreditation); no fallback to a parent grant", conformity: "verifier-profile requirements and decision rules, evaluated at gate 6 only after the claim is authorized; exact arithmetic reported in the requirement's unit", unsupported: ["asymmetric-uncertainty", "display-label-equality", "substring-matching", "implicit-method-succession"] }, routesAndRestrictions: { certificateRoute: ["O-authorizes-D", "A-authorizes-O-maintenance", "O-contained-by-A"], installedCertificateRoutes: { "operational-scope": ["O-authorizes-D", "A-authorizes-O-maintenance", "O-contained-by-A", "A-issuer-is-accreditation-anchor-or-recognized-for-main-scope"], "direct-accreditation": ["A-authorizes-D", "A-issuer-is-accreditation-anchor-or-recognized-for-main-scope"] }, recognition: "a grant issuer that is not a configured anchor for the purpose is accepted only through a usable, unsuspended recognition the grant names in a RecognitionPolicy, whose issuer is an anchor for the recognizer purpose and whose subject is the grant issuer, recognized by its issuer to perform the required action in force at the activity time, with the purpose's main scope (activity and normative document, exact) in its registration; a recognition of another body or without that main scope contradicts; an issuer.recognizedIn that names another credential contradicts; a missing recognition, entry or time is not_established; recognition never establishes authority or QI scope", studyRoute: ["H-authorizes-S"], requiredSupport: ["S", "H"], globalRestrictions: ["applicable-suspension", "request-time-policy"], installedGlobalRestrictions: { "accreditation-suspension": "every usable anchor-issued RmAccreditation of the certificate issuer reached through the target's termsOfUse references, on any route, must carry a fresh issuer suspension status (Bitstring Status List, statusPurpose suspension) with its bit clear; missing or unreadable suspension status is not_established; unusable or unreferenced credentials are not restrictions" }, unusedAlternativeFailures: "diagnostic-only: only the target and the credentials on the selected route and support chains decide the request", routeComposition: "AND-within-route-OR-between-complete-routes", baselineAlternatives: 1, provenanceDoesNotEstablish: ["permission", "containment"] }, protectionTimeAndResolution: { proofSuites: ["eddsa-rdfc-2022"], proofPurpose: "assertionMethod", verificationMethodRule: "exact-installed-method-controlled-by-issuer-and-authorized-for-assertionMethod", safeJsonLd: !0, proofCollections: "unsupported-in-initial-slice", status: "authenticated-current-revocation-status-required-for-A-O-D-S-H; suspension entries on accreditations are read only by the accreditation-suspension restriction", statusMechanism: "W3C Bitstring Status List v1.0: multibase base64url GZIP encodedList, bounded decompression", statusAuthority: "status-list-issuer-equals-credential-issuer", validity: ["validFrom", "validUntil"], freshness: "verifier-profile maxAgeSeconds from the status list validFrom, judged at the activity time asked about; no default", historicalReliance: "status at an earlier activity time only from a status list of the same issuer in force and fresh at that time (kept, dated lists); a later list cannot establish it; no archive discovery", resolver: { network: !1, unknownUri: "refuse", budgets: ["maxResources", "maxDepth", "maxBytes"] }, installedEvaluatorsOnly: !0, issuerProvidedExecutableCode: !1 }, supportAndDisclosure: { objectApplicability: ["materialBatch", "activity", "method", "activityTime"], supportSubjectNeedNotEqualTargetIssuer: !0, mandatoryDisclosure: ["issuer", "credentialSubject/id", "activityTime", "selectedResult", "restrictions", "authorizingReference", "requiredStudy", "relatedResource", "proof"], missingMandatoryDisclosure: "not_established", presentationProtection: "separate-from-reliance", holderBinding: "unsupported-in-initial-slice" }, evidenceAndExclusions: { acceptanceLedger: "docs/acceptance-ledger.csv", testVectorRoots: ["testdata/regressions", "bindings/experimental/rm-v1/test-vectors"], unsupported: ["production-accreditation", "legal-effect", "physical-sample-truth", "public-example-namespace-resolution", "general-ontology-reasoning", "wallet-interoperability", "external-recognition-adapter", "timestamp-service"] } }, profiles: { "rm-verifier-1": { id: "https://vc4qi.example/profiles/rm-verifier", version: "1", status: "experimental", description: "Verifier-owned reliance profile for the experimental RM v1 binding. Fictional fixture configuration; not an external standard.", binding: { id: "https://vc4qi.example/bindings/rm/1", version: "1" }, trustAnchors: [{ id: "https://nab.vc4qi.example/controller", purposes: ["accredit-rm-producers", "accredit-rm-laboratories"] }], authority: { certificateRoutes: ["operational-scope"], globalRestrictions: ["accreditation-suspension"], maxRoutes: 8 }, credentialStatus: { required: !0, purposes: ["revocation"], maxAgeSeconds: 2592e3 }, mapping: { methodSuccession: "none" }, conformity: { requirements: [{ id: "as-mass-fraction-max-200-mg-per-kg", propertyIri: "https://vc4qi.example/bindings/rm/1#As", quantityKindIri: "https://vc4qi.example/bindings/rm/1#MassFraction", upperLimit: { value: "200", unit: "mg/kg" } }], decisionRules: [{ id: "guarded-acceptance-expanded-u", acceptWhen: "value-plus-expanded-uncertainty-at-most-limit" }, { id: "simple-acceptance", acceptWhen: "value-at-most-limit" }] } }, "rm-verifier-global-aci-1": { id: "https://vc4qi.example/profiles/rm-verifier-global-aci", version: "1", status: "experimental", description: "Fictional verifier abroad: its only trust anchor is a fictional stand-in for an arrangement anchor (Global ACI role), not the accreditation body. It accepts the accreditation body when an accreditation points up (termsOfUse) to that anchor's recognition of its issuer, a W3C Recognized Entities credential (Working Draft of 4 November 2026) with one subject, for the main scope each grant requires. It names no recognition itself. Otherwise identical to rm-verifier-1; not an external standard.", binding: { id: "https://vc4qi.example/bindings/rm/1", version: "1" }, trustAnchors: [{ id: "https://global-aci.vc4qi.example/controller", purposes: ["recognize-accreditation-bodies"] }], authority: { certificateRoutes: ["operational-scope"], globalRestrictions: ["accreditation-suspension"], maxRoutes: 8 }, credentialStatus: { required: !0, purposes: ["revocation"], maxAgeSeconds: 2592e3 }, mapping: { methodSuccession: "none" }, conformity: { requirements: [{ id: "as-mass-fraction-max-200-mg-per-kg", propertyIri: "https://vc4qi.example/bindings/rm/1#As", quantityKindIri: "https://vc4qi.example/bindings/rm/1#MassFraction", upperLimit: { value: "200", unit: "mg/kg" } }], decisionRules: [{ id: "guarded-acceptance-expanded-u", acceptWhen: "value-plus-expanded-uncertainty-at-most-limit" }, { id: "simple-acceptance", acceptWhen: "value-at-most-limit" }] }, bindingRules: { recognition: { recognizerPurpose: "recognize-accreditation-bodies", action: "accredit", purposes: { "accredit-rm-producers": { activity: "Reference material production", standardId: "urn:iso:std:iso:17034:ed-1" }, "accredit-rm-laboratories": { activity: "Testing", standardId: "urn:iso:std:iso-iec:17025:ed-3" } } } } }, "rm-verifier-two-routes-1": { id: "https://vc4qi.example/profiles/rm-verifier-two-routes", version: "1", status: "experimental", description: "Fictional verifier profile with two complete certificate routes, (operational scope within an accreditation) OR (direct accreditation), and the accreditation-suspension global restriction outside the OR. Exercises route composition (C01-C07); not an external standard.", binding: { id: "https://vc4qi.example/bindings/rm/1", version: "1" }, trustAnchors: [{ id: "https://nab.vc4qi.example/controller", purposes: ["accredit-rm-producers", "accredit-rm-laboratories"] }], authority: { certificateRoutes: ["operational-scope", "direct-accreditation"], globalRestrictions: ["accreditation-suspension"], maxRoutes: 8 }, credentialStatus: { required: !0, purposes: ["revocation"], maxAgeSeconds: 2592e3 }, mapping: { methodSuccession: "none" }, conformity: { requirements: [{ id: "as-mass-fraction-max-200-mg-per-kg", propertyIri: "https://vc4qi.example/bindings/rm/1#As", quantityKindIri: "https://vc4qi.example/bindings/rm/1#MassFraction", upperLimit: { value: "200", unit: "mg/kg" } }], decisionRules: [{ id: "guarded-acceptance-expanded-u", acceptWhen: "value-plus-expanded-uncertainty-at-most-limit" }, { id: "simple-acceptance", acceptWhen: "value-at-most-limit" }] } } }, files: [{ uri: "https://www.w3.org/ns/credentials/v2", mediaType: "application/ld+json", origin: "W3C Verifiable Credentials Data Model v2.0 context, vendored copy already used by the repository loader", version: "VCDM 2.0", digestSRI: "sha384-l/HrjlBCNWyAX91hr6LFV2Y3heB5Tcr6IeE4/Tje8YyzYBM8IhqjHWiWpr8+ZbYU", text: `{
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
}` }, { uri: "https://vc4qi.example/contexts/rm/1", mediaType: "application/ld+json", origin: "VC4QI experimental RM binding (repository-owned fictional fixture)", version: "1", digestSRI: "sha384-REBfRqylWX1HD2iFs3geU4NLcU7X1XnYiBGGpUbgcgOu0Z91JsF59CVR9Zx78q3m", text: `{
  "@context": {
    "@version": 1.1,
    "@protected": true,
    "rm": "https://vc4qi.example/bindings/rm/1#",
    "chain": "https://vc4qi.example/ns/chain#",
    "xsd": "http://www.w3.org/2001/XMLSchema#",

    "RmAccreditation": "rm:RmAccreditation",
    "RmOperationalScope": "rm:RmOperationalScope",
    "RmCertificate": "rm:RmCertificate",
    "RmStudy": "rm:RmStudy",
    "RmLabAuthority": "rm:RmLabAuthority",
    "IssuedUnderPolicy": "chain:IssuedUnderPolicy",
    "RecognitionPolicy": "chain:RecognitionPolicy",
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

    "authorizationCredential": "chain:authorizationCredential",
    "recognitionCredential": "chain:recognitionCredential",
    "recognizedIn": "https://www.w3.org/ns/credentials/recognized-entities#recognizedIn",
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
` }, { uri: "https://vc4qi.example/contexts/recognized-entities/draft-20261112", mediaType: "application/ld+json", origin: "VC4QI stand-in for the unpublished W3C Recognized Entities v1.0 context: terms expand to the draft vocabulary of w3c/vc-recognized-entities@3961cf6 (Working Draft of 12 November 2026); mainScope, activity and standard are RM binding extension terms, used inside registration", version: "draft-20261112", digestSRI: "sha384-pXFtmoWd7QX1pQQhUOo+tTKalbnl//y/XwGl9aZwEIJ9IRkOV0Iym/MPv8tR67cX", text: `{
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
` }, { uri: "https://vc4qi.example/schemas/rm/1/accreditation.json", mediaType: "application/schema+json", origin: "VC4QI experimental RM binding (generated by scripts/rm-v1/build-resources.mjs)", version: "1", digestSRI: "sha384-CaB4E5OvzhRCHSoGOdTb/xJ78Shh5g1BKaLnK0YgYP2ACrjDcEkwXFYWrintZIfH", text: `{
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
      "oneOf": [
        {
          "type": "string",
          "format": "uri"
        },
        {
          "type": "object",
          "required": [
            "id"
          ],
          "properties": {
            "id": {
              "type": "string",
              "format": "uri"
            },
            "recognizedIn": {
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
                  "const": "RecognizedEntityCredential"
                }
              },
              "additionalProperties": false
            }
          },
          "additionalProperties": false
        }
      ]
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
          "recognitionCredential"
        ],
        "properties": {
          "type": {
            "const": "RecognitionPolicy"
          },
          "recognitionCredential": {
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
                "const": "RecognizedEntityCredential"
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
` }, { uri: "https://vc4qi.example/schemas/rm/1/operational-scope.json", mediaType: "application/schema+json", origin: "VC4QI experimental RM binding (generated by scripts/rm-v1/build-resources.mjs)", version: "1", digestSRI: "sha384-c/qqDle2Y81pEMZpWKpBjkH58b73UAlmFv80S6tdCdSxpnw3tq2mzei5j91SHaxr", text: `{
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
            "const": "IssuedUnderPolicy"
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
` }, { uri: "https://vc4qi.example/schemas/rm/1/certificate.json", mediaType: "application/schema+json", origin: "VC4QI experimental RM binding (generated by scripts/rm-v1/build-resources.mjs)", version: "1", digestSRI: "sha384-oxjt0mTYvezg+RDAo4fNHqxfRSrnGgwQc4K7PdHELbmaoKNRR+JtdHrvcVuqKqQU", text: `{
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
            "const": "IssuedUnderPolicy"
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
` }, { uri: "https://vc4qi.example/schemas/rm/1/study.json", mediaType: "application/schema+json", origin: "VC4QI experimental RM binding (generated by scripts/rm-v1/build-resources.mjs)", version: "1", digestSRI: "sha384-+FNIiwgXKwtVMG4EkihxvZAepXWywm2UZHBgUQJBHBM86SNrdYmpWzQtULEprGvo", text: `{
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
            "const": "IssuedUnderPolicy"
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
` }, { uri: "https://vc4qi.example/schemas/rm/1/lab-authority.json", mediaType: "application/schema+json", origin: "VC4QI experimental RM binding (generated by scripts/rm-v1/build-resources.mjs)", version: "1", digestSRI: "sha384-D1C69KmKpjzo6y+6sM54YjPSW770cmX0hX4ox16TTe8qkAKzLuKV0KslyqgIOzUV", text: `{
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
      "oneOf": [
        {
          "type": "string",
          "format": "uri"
        },
        {
          "type": "object",
          "required": [
            "id"
          ],
          "properties": {
            "id": {
              "type": "string",
              "format": "uri"
            },
            "recognizedIn": {
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
                  "const": "RecognizedEntityCredential"
                }
              },
              "additionalProperties": false
            }
          },
          "additionalProperties": false
        }
      ]
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
          "recognitionCredential"
        ],
        "properties": {
          "type": {
            "const": "RecognitionPolicy"
          },
          "recognitionCredential": {
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
                "const": "RecognizedEntityCredential"
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
` }, { uri: "https://vc4qi.example/schemas/rm/1/recognized-entity.json", mediaType: "application/schema+json", origin: "VC4QI experimental RM binding (generated by scripts/rm-v1/build-resources.mjs)", version: "1", digestSRI: "sha384-sFClRNmToYjhcnlBg7R8TRniCaWqrgwMSOU5Q2HMgsmD2zZYD9O9owFKiCgs0YDP", text: `{
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
        "https://vc4qi.example/contexts/recognized-entities/draft-20261112"
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
        },
        "registration": {
          "type": "array",
          "items": {
            "type": "object",
            "required": [
              "mainScope"
            ],
            "properties": {
              "id": {
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
` }, { uri: "https://vc4qi.example/schemas/rm/1/issued-under-policy.json", mediaType: "application/schema+json", origin: "VC4QI experimental RM binding (generated by scripts/rm-v1/build-resources.mjs)", version: "1", digestSRI: "sha384-B3C1ByT+AZ5iZ6cuWenpM/4nPkpr3Cf++P66Wq/LQLBa8h+KeFbWKFEXmdoOR7cy", text: `{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://vc4qi.example/schemas/rm/1/issued-under-policy.json",
  "title": "IssuedUnderPolicy entry in termsOfUse: issued exercising the named grant",
  "type": "object",
  "required": [
    "type",
    "authorizationCredential"
  ],
  "properties": {
    "type": {
      "const": "IssuedUnderPolicy"
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
` }, { uri: "https://vc4qi.example/schemas/rm/1/recognition-policy.json", mediaType: "application/schema+json", origin: "VC4QI experimental RM binding (generated by scripts/rm-v1/build-resources.mjs)", version: "1", digestSRI: "sha384-3vj/dbDfhgIrmDfJ8gMI0AghwsKSHUlVd/r8qFDVl2ijQlf8iQ7TqS0sfWrl6atZ", text: `{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://vc4qi.example/schemas/rm/1/recognition-policy.json",
  "title": "RecognitionPolicy entry in termsOfUse: issued while recognized in the named recognition (no authority)",
  "type": "object",
  "required": [
    "type",
    "recognitionCredential"
  ],
  "properties": {
    "type": {
      "const": "RecognitionPolicy"
    },
    "recognitionCredential": {
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
          "const": "RecognizedEntityCredential"
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
` }, { uri: "https://global-aci.vc4qi.example/credentials/R", mediaType: "application/vc", origin: "VC4QI experimental RM v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-Pmh6reOXT1OndxiX2EnDFxuUb/646dRTb4FE2HFcfENaCdT7AH+DyYzhbq9HvuU5", text: `{
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://vc4qi.example/contexts/recognized-entities/draft-20261112"
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
        "recognizedBy": "https://global-aci.vc4qi.example/controller"
      }
    ],
    "registration": [
      {
        "id": "https://global-aci.vc4qi.example/signatories/nab#rm-production",
        "mainScope": {
          "activity": "Reference material production",
          "standard": {
            "id": "urn:iso:std:iso:17034:ed-1",
            "name": "ISO 17034:2016"
          }
        }
      },
      {
        "id": "https://global-aci.vc4qi.example/signatories/nab#testing",
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
    "proofValue": "z5Ms64SxrGzFkjQpgNX627ZMv212TP46adfmoCvf99VnAA6z8DzdH1sRAgbrESsVUC4pkmpvywiKhcnLWTw8moo4K"
  }
}
` }, { uri: "https://nab.vc4qi.example/credentials/A", mediaType: "application/vc", origin: "VC4QI experimental RM v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-kQVW7JwwfkuYljkAOFS4g9IYH6ZDXtwMF1+B1rGXu1gLv5MCeK8e9FF6naq1ycXL", text: `{
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://vc4qi.example/contexts/rm/1"
  ],
  "id": "https://nab.vc4qi.example/credentials/A",
  "type": [
    "VerifiableCredential",
    "RmAccreditation"
  ],
  "issuer": {
    "id": "https://nab.vc4qi.example/controller",
    "recognizedIn": {
      "id": "https://global-aci.vc4qi.example/credentials/R",
      "type": "RecognizedEntityCredential"
    }
  },
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
      "type": "RecognitionPolicy",
      "recognitionCredential": {
        "id": "https://global-aci.vc4qi.example/credentials/R",
        "type": "RecognizedEntityCredential"
      }
    }
  ],
  "relatedResource": [
    {
      "id": "https://global-aci.vc4qi.example/credentials/R",
      "digestSRI": "sha384-Pmh6reOXT1OndxiX2EnDFxuUb/646dRTb4FE2HFcfENaCdT7AH+DyYzhbq9HvuU5"
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
    "proofValue": "z4YMKnjFg1D9puxeBFiQ1GreYU6v4gCcbUXuk8CHa9oPmNa6MWVHdjBBP25GKTWWSiKA1qUcvbrfctxrZvuLKzvUE"
  }
}
` }, { uri: "https://nab.vc4qi.example/credentials/A2", mediaType: "application/vc", origin: "VC4QI experimental RM v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-fe/ulzbv6YtZ4iuxbz3yXlAgfleek++lQ3dWiJpCS++ere5yTUwGwVidVyJpZTV+", text: `{
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://vc4qi.example/contexts/rm/1"
  ],
  "id": "https://nab.vc4qi.example/credentials/A2",
  "type": [
    "VerifiableCredential",
    "RmAccreditation"
  ],
  "issuer": {
    "id": "https://nab.vc4qi.example/controller",
    "recognizedIn": {
      "id": "https://global-aci.vc4qi.example/credentials/R",
      "type": "RecognizedEntityCredential"
    }
  },
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
      "type": "RecognitionPolicy",
      "recognitionCredential": {
        "id": "https://global-aci.vc4qi.example/credentials/R",
        "type": "RecognizedEntityCredential"
      }
    }
  ],
  "relatedResource": [
    {
      "id": "https://global-aci.vc4qi.example/credentials/R",
      "digestSRI": "sha384-Pmh6reOXT1OndxiX2EnDFxuUb/646dRTb4FE2HFcfENaCdT7AH+DyYzhbq9HvuU5"
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
    "proofValue": "z2emg3buMLzMwhnUMU5244KHJtbUucUVcmz878D84puFY2NKJ2bE3Juj9MN92CnJVH9vzd9mcaN7zDhMghUwMf1s9"
  }
}
` }, { uri: "https://nab.vc4qi.example/credentials/H", mediaType: "application/vc", origin: "VC4QI experimental RM v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-vzThQfGJ+AL7agsA1i31rUxJ0/TFf+hxc6OQ9KUZa0w82Vmqm+smBHnnIBhzHS3S", text: `{
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://vc4qi.example/contexts/rm/1"
  ],
  "id": "https://nab.vc4qi.example/credentials/H",
  "type": [
    "VerifiableCredential",
    "RmLabAuthority"
  ],
  "issuer": {
    "id": "https://nab.vc4qi.example/controller",
    "recognizedIn": {
      "id": "https://global-aci.vc4qi.example/credentials/R",
      "type": "RecognizedEntityCredential"
    }
  },
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
      "type": "RecognitionPolicy",
      "recognitionCredential": {
        "id": "https://global-aci.vc4qi.example/credentials/R",
        "type": "RecognizedEntityCredential"
      }
    }
  ],
  "relatedResource": [
    {
      "id": "https://global-aci.vc4qi.example/credentials/R",
      "digestSRI": "sha384-Pmh6reOXT1OndxiX2EnDFxuUb/646dRTb4FE2HFcfENaCdT7AH+DyYzhbq9HvuU5"
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
    "proofValue": "z2WU52AKugrqTYadJ9o1MBw38FyfFYD4hLGg5RfVEC1Gb4yr6mLm6AnAp83J2e2MAiXhdvNbeGSW5PxyR985rRYou"
  }
}
` }, { uri: "https://producer.vc4qi.example/credentials/O", mediaType: "application/vc", origin: "VC4QI experimental RM v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-5WinmsYJ1NN0WVqH6eVpqaKtYHiTW0D7hotcARXYpeXA460YK1kV6ZzFLWzEQDXn", text: `{
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
      "type": "IssuedUnderPolicy",
      "authorizationCredential": {
        "id": "https://nab.vc4qi.example/credentials/A",
        "type": "RmAccreditation"
      }
    }
  ],
  "relatedResource": [
    {
      "id": "https://nab.vc4qi.example/credentials/A",
      "digestSRI": "sha384-kQVW7JwwfkuYljkAOFS4g9IYH6ZDXtwMF1+B1rGXu1gLv5MCeK8e9FF6naq1ycXL"
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
    "proofValue": "zqdybfttkL948ALDqQAv8xMNMjpzAeLqZQHT6Dq573GEceuenjUrQ7rWshh1xUNDsCNB9jCU9x2notq5JB5hT8uw"
  }
}
` }, { uri: "https://lab.vc4qi.example/credentials/S", mediaType: "application/vc", origin: "VC4QI experimental RM v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-Z08EhUKijrkrEjA0UpLGBxNOZihHQvvT2JZJmkHfuRitVHD2zdRvauKrrlo91ogl", text: `{
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
      "type": "IssuedUnderPolicy",
      "authorizationCredential": {
        "id": "https://nab.vc4qi.example/credentials/H",
        "type": "RmLabAuthority"
      }
    }
  ],
  "relatedResource": [
    {
      "id": "https://nab.vc4qi.example/credentials/H",
      "digestSRI": "sha384-vzThQfGJ+AL7agsA1i31rUxJ0/TFf+hxc6OQ9KUZa0w82Vmqm+smBHnnIBhzHS3S"
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
    "proofValue": "z2dbF6WH6QnUZbJyiFoK6qnorikc5NuVmriiXMmQqtQRLAMS3yaH8Zi5sBMVeio7CkBuZFkdGmeiXyfohspXQvuBu"
  }
}
` }, { uri: "https://producer.vc4qi.example/credentials/D178", mediaType: "application/vc", origin: "VC4QI experimental RM v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-7WPxKD/2A/8i+HxIsAcIQEh6KD6cp6Q5k2Zrer9rIUzAvyqU6iLkvTVOfeomui8r", text: `{
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
      "type": "IssuedUnderPolicy",
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
      "digestSRI": "sha384-5WinmsYJ1NN0WVqH6eVpqaKtYHiTW0D7hotcARXYpeXA460YK1kV6ZzFLWzEQDXn"
    },
    {
      "id": "https://lab.vc4qi.example/credentials/S",
      "digestSRI": "sha384-Z08EhUKijrkrEjA0UpLGBxNOZihHQvvT2JZJmkHfuRitVHD2zdRvauKrrlo91ogl"
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
    "proofValue": "z2QDu7XYTjBTfP6ePEd8CZinMWR1zxnND45BBfpEnM2ip5zf369CP8tGaBE38cg86LHS4w691xMRHPF8Kj1qVFNd1"
  }
}
` }, { uri: "https://producer.vc4qi.example/credentials/D197", mediaType: "application/vc", origin: "VC4QI experimental RM v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-NNjc2U8iligQ3J3ytQh/C66cSZXa01q89JHKgJU3VQoW47OkTJIJAq+lxCgKShMV", text: `{
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
      "type": "IssuedUnderPolicy",
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
      "digestSRI": "sha384-5WinmsYJ1NN0WVqH6eVpqaKtYHiTW0D7hotcARXYpeXA460YK1kV6ZzFLWzEQDXn"
    },
    {
      "id": "https://lab.vc4qi.example/credentials/S",
      "digestSRI": "sha384-Z08EhUKijrkrEjA0UpLGBxNOZihHQvvT2JZJmkHfuRitVHD2zdRvauKrrlo91ogl"
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
    "proofValue": "z4uueQs65rHYL8kN2swajHQwKdCuVjnVpCF6r7K2cRYsdjs6KejtZuor3VhZ1YtLbXqM6CvzD5BN9Ne39mt6dWkiH"
  }
}
` }, { uri: "https://producer.vc4qi.example/credentials/D520", mediaType: "application/vc", origin: "VC4QI experimental RM v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-vqgx+nZyOkMy9BoT5JCGDV3TAsCHatgiEzHRiTWjAIWf8MFF1o8hZnoaeRCq+XCw", text: `{
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
      "type": "IssuedUnderPolicy",
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
      "digestSRI": "sha384-5WinmsYJ1NN0WVqH6eVpqaKtYHiTW0D7hotcARXYpeXA460YK1kV6ZzFLWzEQDXn"
    },
    {
      "id": "https://lab.vc4qi.example/credentials/S",
      "digestSRI": "sha384-Z08EhUKijrkrEjA0UpLGBxNOZihHQvvT2JZJmkHfuRitVHD2zdRvauKrrlo91ogl"
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
    "proofValue": "z3PN3fcQ6GTBvtMBJWWuutBoSUSLK6LPdXPtnayNNHixia2Q4iXkobkpGfPUJj54FWcL5pc7MMaWqojbxcAmoXk1q"
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
` }] }, cal: { manifest: { $schema: "./manifest.schema.json", id: "https://vc4qi.example/bindings/cal/1", version: "1", status: "experimental", owner: { name: "VC4QI repository fixture governance", source: "docs/bindings.md", authority: "local-research-fixture-only" }, installation: { status: "incomplete", reason: "Migrated calibration (DCC) binding for the calibration-direct-accreditation, calibration-capability, nmi-legal-mandate and test-report-supported-dcc use cases. The gate 0-6 evaluators for direct accreditation, bounded operational scopes, statutory mandates, measurement-group coverage, CMC floors and instrument-calibration support of test reports are implemented; conformity rules and native DCC XML are not.", pendingResources: [] }, carrierAndSchema: { model: "W3C Verifiable Credentials Data Model 2.0", modelContext: "https://www.w3.org/ns/credentials/v2", requiredContexts: ["https://www.w3.org/ns/credentials/v2", "https://vc4qi.example/contexts/cal/1"], credentialTypes: ["https://www.w3.org/2018/credentials#VerifiableCredential", "https://vc4qi.example/bindings/cal/1#CalAccreditation", "https://vc4qi.example/bindings/cal/1#CalOperationalScope", "https://vc4qi.example/bindings/cal/1#CalLegalMandate", "https://vc4qi.example/bindings/cal/1#CalCertificate", "https://vc4qi.example/bindings/cal/1#CalTestReport", "https://www.w3.org/ns/credentials/status#BitstringStatusListCredential"], schemaUris: ["https://vc4qi.example/schemas/cal/1/accreditation.json", "https://vc4qi.example/schemas/cal/1/operational-scope.json", "https://vc4qi.example/schemas/cal/1/legal-mandate.json", "https://vc4qi.example/schemas/cal/1/certificate.json", "https://vc4qi.example/schemas/cal/1/test-report.json", "https://vc4qi.example/schemas/cal/1/status-list.json"], statusListCarrier: "BitstringStatusListCredential with the VCDM 2.0 context only", composition: "exact-listed-context-and-schema-combinations-only", pinnedResourceIndex: "bindings/experimental/cal-v1/catalog.json", decimalEncoding: "JSON strings typed xsd:decimal for every value, bound, uncertainty and CMC floor", orderedCollections: ["measurementGroups", "results"], nativeRepresentation: "A JSON-LD simplification of a DCC's measurement results; native DCC XML is not carried in this experimental binding" }, factMappings: [{ fact: "grantorOrActor", nativePath: "/issuer", expandedIri: "https://www.w3.org/2018/credentials#issuer" }, { fact: "grantee", nativePath: "/credentialSubject/id", expandedIri: "@id" }, { fact: "permittedActivity", nativePath: "/credentialSubject/permittedActivity", expandedIri: "https://vc4qi.example/bindings/cal/1#permittedActivity" }, { fact: "scopeRecords", nativePath: "/credentialSubject/scope", expandedIri: "https://vc4qi.example/bindings/cal/1#scope" }, { fact: "authorizingReference", nativePath: "/termsOfUse/*/authorizationCredential/id", expandedIri: "https://vc4qi.example/ns/chain#authorizationCredential" }, { fact: "activityTime", nativePath: "/credentialSubject/activityTime", expandedIri: "https://vc4qi.example/bindings/cal/1#activityTime" }, { fact: "measurementGroup", nativePath: "/credentialSubject/measurementGroups/*", expandedIri: "https://vc4qi.example/bindings/cal/1#measurementGroups" }], cardinality: { credentialSubject: { minimum: 1, maximum: 1 }, scopeRecords: { minimum: 1 }, measurementGroups: { minimum: 1 }, selectedAuthorizingPoliciesPerUse: { minimum: 1, maximum: 1 }, authorizingReferenceSelection: "by-declared-reference-type-per-route; resolved credential type must match (else contradicted); several of one type not_established", selectedGroups: "every selected measurement group is a separate required claim; the request is a conjunction over them", ambiguousSelection: "not_established" }, discoveryAndIntegrity: { referenceCarriers: ["termsOfUse", "relatedResource", "credentialSchema"], discovery: "supplied-or-installed-static-catalog-only", unknownUri: "not_established", immutableRepresentation: "original-secured-bytes", digestAlgorithm: "sha384", digestEncoding: "SRI", digestInput: "exact-original-secured-bytes", independentGrantBinding: "unsupported: authority is recognized only through termsOfUse authorizationCredential references on the credential chain" }, recognizedTypes: { authorizationPolicy: "https://vc4qi.example/ns/chain#IssuedUnderPolicy", authorizationPolicyEstablishes: ["authorizing-reference-candidate"], nonEstablishingByItself: ["authority", "scope", "conformity"] }, principalAndRights: { principalEqualityEvaluator: "https://vc4qi.example/evaluators/exact-identifier/1", identityAliases: "none", activities: { issueCalibrationCertificate: "https://vc4qi.example/bindings/cal/1#issueCalibrationCertificate", maintainCalibrationScope: "https://vc4qi.example/bindings/cal/1#maintainCalibrationScope", issueTestReport: "https://vc4qi.example/bindings/cal/1#issueTestReport" }, rules: ["The grant's grantee (accreditation, operational scope or mandate) equals the actor issuing the calibration certificate.", "The grant permits issuing calibration certificates, or, for a test report under direct accreditation, issuing test reports (anchor purpose accredit-testing-laboratories).", "An operational scope is issued by its own grantee, and the accreditation it cites names that grantee and permits maintaining a calibration scope.", "Every grant on the route was in force at the certificate's activity time."] }, scopeAndMapping: { mappingVersion: "cal-experimental-mapping-1", dimensions: ["quantityKindIri", "methodIris", "range", "cmcFloor"], units: { Pa: "1", kPa: "1e3", MPa: "1e6" }, boundaries: "inclusive", coverageFactor: "2", methodRule: "every method a group names must be allowed by the same record; a record restricting methods against a group naming none is not_established (no empty-array bypass)", groupRule: "one complete record must cover the group's quantity kind, methods and every result; groups never combine and a later group cannot erase an earlier failure", cmcFloor: "when the verifier profile applies it, an expanded uncertainty below the record's admitted CMC contradicts scope; independent of conformity", boundedProjection: "every operational-scope record lies within one accreditation record: same quantity kind, a subset of its methods, a range inside its range and, when the profile applies the CMC floor, a stated floor not below the accreditation's; claims are covered by the operational scope only", unsupported: ["asymmetric-uncertainty", "display-label-equality", "implicit-method-succession", "customer-uncertainty-limits"] }, routesAndRestrictions: { installedCertificateRoutes: { "direct-accreditation": ["CA-authorizes-certificate", "CA-grantee-is-issuer", "CA-issuer-is-accreditation-anchor", "CA-in-force-at-activity"], "operational-scope": ["O-authorizes-certificate", "O-grantee-is-issuer", "O-self-maintained", "O-cites-CA", "CA-grantee-is-O-issuer", "CA-permits-scope-maintenance", "O-within-CA", "CA-issuer-is-accreditation-anchor", "O-and-CA-in-force-at-activity"], "statutory-mandate": ["M-authorizes-certificate", "M-grantee-is-issuer", "M-issuer-is-designation-anchor", "M-in-force-at-activity"] }, globalRestrictions: [], routeComposition: "AND-within-route-OR-between-complete-routes" }, protectionTimeAndResolution: { proofSuites: ["eddsa-rdfc-2022"], proofPurpose: "assertionMethod", verificationMethodRule: "exact-installed-method-controlled-by-issuer-and-authorized-for-assertionMethod", safeJsonLd: !0, status: "authenticated-current-revocation-status-required", statusMechanism: "W3C Bitstring Status List v1.0: multibase base64url GZIP encodedList, bounded decompression", statusAuthority: "status-list-issuer-equals-credential-issuer", validity: ["validFrom", "validUntil"], historicalReliance: "unsupported-without-authenticated-historical-evidence", resolver: { network: !1, unknownUri: "refuse", budgets: ["maxResources", "maxDepth", "maxBytes"] }, installedEvaluatorsOnly: !0, issuerProvidedExecutableCode: !1 }, supportAndDisclosure: { requiredSupport: "a CalTestReport requires one cited CalCertificate (evidence CalCalibrationReference) for the same instrument and quantity kinds, calibrated before the test and valid at it, whose own authority holds with every measurement group covered; certificates have no support obligation", presentationProtection: "separate-from-reliance", holderBinding: "unsupported-in-initial-slice" }, evidenceAndExclusions: { acceptanceLedger: "docs/acceptance-ledger.csv", testVectorRoots: ["bindings/experimental/cal-v1/test-vectors"], unsupported: ["production-accreditation", "legal-effect", "real-statutory-designation", "native-dcc-xml", "public-example-namespace-resolution", "wallet-interoperability", "timestamp-service"] } }, profiles: { "cal-verifier-1": { id: "https://vc4qi.example/profiles/cal-verifier", version: "1", status: "experimental", description: "Verifier-owned reliance profile for the experimental calibration v1 binding. Fictional fixture configuration; not an external standard.", binding: { id: "https://vc4qi.example/bindings/cal/1", version: "1" }, trustAnchors: [{ id: "https://nab.vc4qi.example/controller", purposes: ["accredit-calibration-laboratories"] }], authority: { certificateRoutes: ["direct-accreditation"], globalRestrictions: [], maxRoutes: 4 }, credentialStatus: { required: !0, purposes: ["revocation"], maxAgeSeconds: 2592e3 }, mapping: { methodSuccession: "none" }, conformity: { requirements: [], decisionRules: [] }, bindingRules: { applyCmcFloor: !0 } }, "cal-verifier-capability-1": { id: "https://vc4qi.example/profiles/cal-verifier-capability", version: "1", status: "experimental", description: "Verifier-owned reliance profile for calibration-capability under the experimental calibration v1 binding: certificates issued under a laboratory's bounded operational scope within its accreditation. Fictional fixture configuration; not an external standard.", binding: { id: "https://vc4qi.example/bindings/cal/1", version: "1" }, trustAnchors: [{ id: "https://nab.vc4qi.example/controller", purposes: ["accredit-calibration-laboratories"] }], authority: { certificateRoutes: ["operational-scope"], globalRestrictions: [], maxRoutes: 4 }, credentialStatus: { required: !0, purposes: ["revocation"], maxAgeSeconds: 2592e3 }, mapping: { methodSuccession: "none" }, conformity: { requirements: [], decisionRules: [] }, bindingRules: { applyCmcFloor: !0 } }, "cal-verifier-nmi-1": { id: "https://vc4qi.example/profiles/cal-verifier-nmi", version: "1", status: "experimental", description: "Verifier-owned reliance profile for nmi-legal-mandate under the experimental calibration v1 binding: certificates issued under a statutory mandate, with no accreditation anchor configured. Fictional fixture configuration; no legal effect; not an external standard.", binding: { id: "https://vc4qi.example/bindings/cal/1", version: "1" }, trustAnchors: [{ id: "https://ministry.vc4qi.example/controller", purposes: ["designate-national-metrology-institutes"] }], authority: { certificateRoutes: ["statutory-mandate"], globalRestrictions: [], maxRoutes: 4 }, credentialStatus: { required: !0, purposes: ["revocation"], maxAgeSeconds: 2592e3 }, mapping: { methodSuccession: "none" }, conformity: { requirements: [], decisionRules: [] }, bindingRules: { applyCmcFloor: !0 } }, "cal-verifier-test-report-1": { id: "https://vc4qi.example/profiles/cal-verifier-test-report", version: "1", status: "experimental", description: "Verifier-owned reliance profile for test-report-supported-dcc under the experimental calibration v1 binding: a testing laboratory's report under its direct accreditation, supported by an independently authorized calibration of the instrument it used. Fictional fixture configuration; not an external standard.", binding: { id: "https://vc4qi.example/bindings/cal/1", version: "1" }, trustAnchors: [{ id: "https://nab.vc4qi.example/controller", purposes: ["accredit-testing-laboratories", "accredit-calibration-laboratories"] }], authority: { certificateRoutes: ["direct-accreditation"], globalRestrictions: [], maxRoutes: 4 }, credentialStatus: { required: !0, purposes: ["revocation"], maxAgeSeconds: 2592e3 }, mapping: { methodSuccession: "none" }, conformity: { requirements: [], decisionRules: [] }, bindingRules: { applyCmcFloor: !0 } } }, files: [{ uri: "https://www.w3.org/ns/credentials/v2", mediaType: "application/ld+json", origin: "W3C Verifiable Credentials Data Model v2.0 context, vendored copy already used by the repository loader", version: "VCDM 2.0", digestSRI: "sha384-l/HrjlBCNWyAX91hr6LFV2Y3heB5Tcr6IeE4/Tje8YyzYBM8IhqjHWiWpr8+ZbYU", text: `{
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
}` }, { uri: "https://vc4qi.example/contexts/cal/1", mediaType: "application/ld+json", origin: "VC4QI experimental calibration binding (repository-owned fictional fixture)", version: "1", digestSRI: "sha384-vyuoogb1rJi/p7MlVrBcN4e4NOup8jJD0+OJWtBdrahy1mZuuCkPkjBrsVgy1KXF", text: `{
  "@context": {
    "@version": 1.1,
    "@protected": true,
    "cal": "https://vc4qi.example/bindings/cal/1#",
    "chain": "https://vc4qi.example/ns/chain#",
    "xsd": "http://www.w3.org/2001/XMLSchema#",

    "CalAccreditation": "cal:CalAccreditation",
    "CalOperationalScope": "cal:CalOperationalScope",
    "CalLegalMandate": "cal:CalLegalMandate",
    "CalCertificate": "cal:CalCertificate",
    "CalTestReport": "cal:CalTestReport",
    "CalCalibrationReference": "cal:CalCalibrationReference",
    "IssuedUnderPolicy": "chain:IssuedUnderPolicy",

    "authorizationCredential": "chain:authorizationCredential",
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
` }, { uri: "https://vc4qi.example/schemas/cal/1/operational-scope.json", mediaType: "application/schema+json", origin: "VC4QI experimental calibration binding (generated by scripts/cal-v1/build-resources.mjs)", version: "1", digestSRI: "sha384-X60vPJ+X3YxqEnw9suuIX6DGY2tqhVIxxwGt+uhGXpOhZeMpsocX4qy/EHi1sCCj", text: `{
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
            "const": "IssuedUnderPolicy"
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
` }, { uri: "https://vc4qi.example/schemas/cal/1/certificate.json", mediaType: "application/schema+json", origin: "VC4QI experimental calibration binding (generated by scripts/cal-v1/build-resources.mjs)", version: "1", digestSRI: "sha384-P+s7yhJ4vR0syATc1FZaJyep+mi+BOhHtIwkY1mTe6RYJ2pr4tCSEi/yj5vb8W+I", text: `{
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
            "const": "IssuedUnderPolicy"
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
` }, { uri: "https://vc4qi.example/schemas/cal/1/test-report.json", mediaType: "application/schema+json", origin: "VC4QI experimental calibration binding (generated by scripts/cal-v1/build-resources.mjs)", version: "1", digestSRI: "sha384-2vJkP62A0oRTpkYVtJIdY50Xx7AL4K1CDdvqbvXTf3DD6sYgfmW2o5C8O/xAiAES", text: `{
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
            "const": "IssuedUnderPolicy"
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
` }, { uri: "https://lab.vc4qi.example/credentials/DCC-1", mediaType: "application/vc", origin: "VC4QI experimental calibration v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-q5mlRfvU0tInIVFFL+JtdjRmIpLN3O5FsfTcaszpQ94+BlmtwdHPKzaYE5anq6ys", text: `{
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
      "type": "IssuedUnderPolicy",
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
    "proofValue": "z3dQyotNkr9TQDJH3mwshJhzCWBDqxqgxDbnDmZgFaJsZEZDcYvskAKKovk4dTapkNmLZPYdbNyT6amx2qWLKpVeR"
  }
}
` }, { uri: "https://lab.vc4qi.example/credentials/CAL-O", mediaType: "application/vc", origin: "VC4QI experimental calibration v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-bATjUoL2AWYsF3k3Qgpfw2qXFHPgpl8RKuzEZcwL4a4lfow4I3oOOUz4ELdc8PZ+", text: `{
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
      "type": "IssuedUnderPolicy",
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
    "proofValue": "z64u1LQCgJTPV651oPkGLSJnRFksoyowbnyLC54ZbRDijoWPJ2uBxeAgQese8gvxgGL2sXH7i79Ye9m6X9dskaZeF"
  }
}
` }, { uri: "https://lab.vc4qi.example/credentials/DCC-2", mediaType: "application/vc", origin: "VC4QI experimental calibration v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-qqoo1scLhIDqDIlOYE3JTU8cT8PX+NhknOJzt/FKuwSzCuvHtjrvm6jy7UKQpKwA", text: `{
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
      "type": "IssuedUnderPolicy",
      "authorizationCredential": {
        "id": "https://lab.vc4qi.example/credentials/CAL-O",
        "type": "CalOperationalScope"
      }
    }
  ],
  "relatedResource": [
    {
      "id": "https://lab.vc4qi.example/credentials/CAL-O",
      "digestSRI": "sha384-bATjUoL2AWYsF3k3Qgpfw2qXFHPgpl8RKuzEZcwL4a4lfow4I3oOOUz4ELdc8PZ+"
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
    "proofValue": "z2N88fJmr43Eow8G8rWvQ8koGmtPygyZDpEhq4PjRHSsHzuTJUS8PCEeaH1v7jsfekWnK16xi9ocnFMuTZfAwci6b"
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
` }, { uri: "https://nmi.vc4qi.example/credentials/DCC-N", mediaType: "application/vc", origin: "VC4QI experimental calibration v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-HYRm/H3EpWaQ2I8yd4QQuKWMWs6IKuZNp6cxoeT1ZXLnaigxvt18FamN8G4YGJfu", text: `{
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
      "type": "IssuedUnderPolicy",
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
    "proofValue": "zqiWKkt8BFcbfGAA2CL4m7aUkgirySP7Ar2zUydNZ1ZwzLy9chr3w6RbpBYEg21a2stPbMnxH1CP4nEkwbW3mRv2"
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
` }, { uri: "https://testlab.vc4qi.example/credentials/REPORT-1", mediaType: "application/vc", origin: "VC4QI experimental calibration v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-gDunHzrA0NLf9GKlUS8AbSZP5bowW/5M4quhtnIt5T8x+WRm8JB1M+ePkC7E2Ozf", text: `{
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
      "type": "IssuedUnderPolicy",
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
      "digestSRI": "sha384-q5mlRfvU0tInIVFFL+JtdjRmIpLN3O5FsfTcaszpQ94+BlmtwdHPKzaYE5anq6ys"
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
    "proofValue": "z5wAgwNXMBta4VLYfTGsqBCRPymWT3i3H4EH41Xgk5gXs69cL1TRE8ffWNFvacQiLxdJYpF2sGppsjDV2L3BVoAaX"
  }
}
` }] }, gs: { manifest: { $schema: "./manifest.schema.json", id: "https://vc4qi.example/bindings/gs/1", version: "1", status: "experimental", owner: { name: "VC4QI repository fixture governance", source: "docs/bindings.md", authority: "local-research-fixture-only" }, installation: { status: "incomplete", reason: "Migrated GS certification binding for the gs-scheme-authorization use case, plus an experimental GS-mark credential for one unit and an experimental product passport shaped after the ESPR DPP whose GS-mark entry is supported by that credential (not ESPR conformance). The gate 0-6 evaluators for the competence-and-scheme-permission and gs-certified-product routes, their coverage and the certificate's required studies (type examination and factory inspection) are implemented; statutory GS routes, application assessments and conformity rules are not.", pendingResources: [] }, carrierAndSchema: { model: "W3C Verifiable Credentials Data Model 2.0", modelContext: "https://www.w3.org/ns/credentials/v2", requiredContexts: ["https://www.w3.org/ns/credentials/v2", "https://vc4qi.example/contexts/gs/1"], credentialTypes: ["https://www.w3.org/2018/credentials#VerifiableCredential", "https://vc4qi.example/bindings/gs/1#GsAccreditation", "https://vc4qi.example/bindings/gs/1#GsSchemeAuthorization", "https://vc4qi.example/bindings/gs/1#GsCertificate", "https://vc4qi.example/bindings/gs/1#GsMarkCredential", "https://vc4qi.example/bindings/gs/1#ProductPassport", "https://vc4qi.example/bindings/gs/1#GsTestReport", "https://vc4qi.example/bindings/gs/1#GsInspectionReport", "https://www.w3.org/ns/credentials/status#BitstringStatusListCredential"], schemaUris: ["https://vc4qi.example/schemas/gs/1/accreditation.json", "https://vc4qi.example/schemas/gs/1/scheme-authorization.json", "https://vc4qi.example/schemas/gs/1/certificate.json", "https://vc4qi.example/schemas/gs/1/mark-credential.json", "https://vc4qi.example/schemas/gs/1/product-passport.json", "https://vc4qi.example/schemas/gs/1/test-report.json", "https://vc4qi.example/schemas/gs/1/inspection-report.json", "https://vc4qi.example/schemas/gs/1/status-list.json"], statusListCarrier: "BitstringStatusListCredential with the VCDM 2.0 context only", composition: "exact-listed-context-and-schema-combinations-only", pinnedResourceIndex: "bindings/experimental/gs-v1/catalog.json", orderedCollections: [], nativeRepresentation: "A JSON-LD simplification of a GS certificate; no native scheme document is carried" }, factMappings: [{ fact: "grantorOrActor", nativePath: "/issuer", expandedIri: "https://www.w3.org/2018/credentials#issuer" }, { fact: "grantee", nativePath: "/credentialSubject/id", expandedIri: "@id" }, { fact: "permittedActivity", nativePath: "/credentialSubject/permittedActivity", expandedIri: "https://vc4qi.example/bindings/gs/1#permittedActivity" }, { fact: "scopeRecords", nativePath: "/credentialSubject/scope", expandedIri: "https://vc4qi.example/bindings/gs/1#scope" }, { fact: "authorizingReference", nativePath: "/termsOfUse/*/authorizationCredential/id", expandedIri: "https://vc4qi.example/ns/chain#authorizationCredential" }, { fact: "activityTime", nativePath: "/credentialSubject/activityTime", expandedIri: "https://vc4qi.example/bindings/gs/1#activityTime" }, { fact: "certification", nativePath: "/credentialSubject/certification", expandedIri: "https://vc4qi.example/bindings/gs/1#certification" }, { fact: "productModel", nativePath: "/credentialSubject/productModelIri", expandedIri: "https://vc4qi.example/bindings/gs/1#productModel" }, { fact: "marking", nativePath: "/credentialSubject/marking", expandedIri: "https://vc4qi.example/bindings/gs/1#marking" }, { fact: "passportGsMarkEntry", nativePath: "/credentialSubject/complianceInformation/gsMark", expandedIri: "https://vc4qi.example/bindings/gs/1#gsMark" }, { fact: "responsibleEconomicOperator", nativePath: "/credentialSubject/economicOperatorIri", expandedIri: "https://vc4qi.example/bindings/gs/1#economicOperator" }, { fact: "requiredStudy", nativePath: "/evidence/*/id", expandedIri: "https://www.w3.org/2018/credentials#evidence" }], cardinality: { credentialSubject: { minimum: 1, maximum: 1 }, scopeRecords: { minimum: 1 }, selectedAuthorizingPoliciesPerUse: { minimum: 1, maximum: 2 }, authorizingReferenceSelection: "by-declared-reference-type-per-route-half; resolved credential type must match (else contradicted); several of one type not_established", selectedClaims: "the certification statement at /credentialSubject/certification; for a GS-mark credential its marking at /credentialSubject/marking; for a product passport only the GS-mark entry at /credentialSubject/complianceInformation/gsMark (other passport sections have no interpretation in this binding)", ambiguousSelection: "not_established" }, discoveryAndIntegrity: { referenceCarriers: ["termsOfUse", "relatedResource", "credentialSchema"], discovery: "supplied-or-installed-static-catalog-only", unknownUri: "not_established", immutableRepresentation: "original-secured-bytes", digestAlgorithm: "sha384", digestEncoding: "SRI", digestInput: "exact-original-secured-bytes", independentGrantBinding: "unsupported: authority is recognized only through termsOfUse authorizationCredential references on the credential chain" }, recognizedTypes: { authorizationPolicy: "https://vc4qi.example/ns/chain#IssuedUnderPolicy", authorizationPolicyEstablishes: ["authorizing-reference-candidate"], nonEstablishingByItself: ["authority", "scope", "conformity"] }, principalAndRights: { principalEqualityEvaluator: "https://vc4qi.example/evaluators/exact-identifier/1", identityAliases: "none", activities: { certifyProducts: "https://vc4qi.example/bindings/gs/1#certifyProducts", testProducts: "https://vc4qi.example/bindings/gs/1#testProducts", awardGsMark: "https://vc4qi.example/bindings/gs/1#awardGsMark" }, rules: ["The accreditation (competence) and the scheme authorization each name the certification body issuing the certificate.", "The accreditation permits certifying products; the scheme authorization permits awarding the GS mark.", "The accreditation issuer is anchored for accrediting certification bodies; the scheme authorization issuer for authorizing GS certification.", "Both grants were in force at the certificate's activity time.", "A certificate needs a type examination of its model covering its category and standards, and a factory inspection of its manufacturer; each passed, precedes the certification and is issued under an anchored accreditation of its issuer that permits the activity (type examination: testing, under an issuer anchored for accrediting testing laboratories; factory inspection: certification, which includes factory inspection, under an issuer anchored for accrediting certification bodies) and was in force at the study.", "A GS-mark credential's marking must name the credential's own model, and needs a GS certificate that names the credential issuer as manufacturer, certifies that model, was in force when the unit was placed on the market and itself holds the complete route.", "A product passport is issued by the responsible economic operator it names. Its GS-mark entry must name the passport's model and is supported by exactly one cited GS-mark credential for the same unit, from the same issuer and for the same model, which itself holds its complete route."] }, scopeAndMapping: { mappingVersion: "gs-experimental-mapping-1", dimensions: ["productCategoryIri", "standardIris"], standardRule: "one competence record must cover the category and every certified standard; a record listing standards against a certification naming none is not_established (no empty-array bypass)", schemeRule: "one scheme record must cover the category", unsupported: ["display-label-equality", "standard-edition-succession", "product-variant-inheritance"] }, routesAndRestrictions: { installedCertificateRoutes: { "competence-and-scheme-permission": ["A-referenced", "A-grantee-is-issuer", "A-permits-certification", "A-issuer-is-accreditation-anchor", "S-referenced", "S-grantee-is-issuer", "S-permits-GS-mark", "S-issuer-is-scheme-anchor", "A-and-S-in-force-at-activity", "claim-covered-by-A-and-S"], "gs-certified-product": ["C-referenced", "C-names-mark-issuer-as-manufacturer", "C-in-force-at-mark-activity", "C-holds-competence-and-scheme-permission", "C-certification-covered", "C-certifies-the-mark-model", "marking-names-the-credential-model"], "responsible-economic-operator": ["passport-issuer-is-named-economic-operator", "gs-mark-entry-supported-by-cited-gs-mark-credential"] }, globalRestrictions: [], routeComposition: "AND-within-route-OR-between-complete-routes" }, protectionTimeAndResolution: { proofSuites: ["eddsa-rdfc-2022"], proofPurpose: "assertionMethod", verificationMethodRule: "exact-installed-method-controlled-by-issuer-and-authorized-for-assertionMethod", safeJsonLd: !0, status: "authenticated-current-revocation-status-required", statusMechanism: "W3C Bitstring Status List v1.0: multibase base64url GZIP encodedList, bounded decompression", statusAuthority: "status-list-issuer-equals-credential-issuer", validity: ["validFrom", "validUntil"], historicalReliance: "unsupported-without-authenticated-historical-evidence", resolver: { network: !1, unknownUri: "refuse", budgets: ["maxResources", "maxDepth", "maxBytes"] }, installedEvaluatorsOnly: !0, issuerProvidedExecutableCode: !1 }, supportAndDisclosure: { requiredSupport: "type examination (GsTypeExaminationReference to a GsTestReport) and factory inspection (GsFactoryInspectionReference to a GsInspectionReport) of the certificate", presentationProtection: "separate-from-reliance", holderBinding: "unsupported-in-initial-slice" }, evidenceAndExclusions: { acceptanceLedger: "docs/acceptance-ledger.csv", testVectorRoots: ["bindings/experimental/gs-v1/test-vectors"], unsupported: ["production-accreditation", "real-gs-scheme-rules", "legal-effect", "application-assessments", "public-example-namespace-resolution", "wallet-interoperability", "timestamp-service"] } }, profiles: { "gs-verifier-1": { id: "https://vc4qi.example/profiles/gs-verifier", version: "1", status: "experimental", description: "Verifier-owned reliance profile for gs-scheme-authorization under the experimental GS certification v1 binding: the GS mark is relied on only through competence AND scheme permission. A fictional profile example, not a universal GS or legal rule.", binding: { id: "https://vc4qi.example/bindings/gs/1", version: "1" }, trustAnchors: [{ id: "https://nab.vc4qi.example/controller", purposes: ["accredit-certification-bodies", "accredit-testing-laboratories"] }, { id: "https://zls.vc4qi.example/controller", purposes: ["authorize-gs-certification"] }], authority: { certificateRoutes: ["competence-and-scheme-permission"], globalRestrictions: [], maxRoutes: 4 }, credentialStatus: { required: !0, purposes: ["revocation"], maxAgeSeconds: 2592e3 }, mapping: { methodSuccession: "none" }, conformity: { requirements: [], decisionRules: [] } }, "gs-verifier-dpp-1": { id: "https://vc4qi.example/profiles/gs-verifier-dpp", version: "1", status: "experimental", description: "Verifier-owned reliance profile for experimental product passports (shaped after the EU Digital Product Passport, not ESPR conformance) under the GS certification v1 binding: the passport is relied on as the declaration of the responsible economic operator it names, and its GS-mark entry only through the cited GS-mark credential, which keeps its own route. Fictional.", binding: { id: "https://vc4qi.example/bindings/gs/1", version: "1" }, trustAnchors: [{ id: "https://nab.vc4qi.example/controller", purposes: ["accredit-certification-bodies", "accredit-testing-laboratories"] }, { id: "https://zls.vc4qi.example/controller", purposes: ["authorize-gs-certification"] }], authority: { certificateRoutes: ["responsible-economic-operator"], globalRestrictions: [], maxRoutes: 4 }, credentialStatus: { required: !0, purposes: ["revocation"], maxAgeSeconds: 2592e3 }, mapping: { methodSuccession: "none" }, conformity: { requirements: [], decisionRules: [] } }, "gs-verifier-mark-1": { id: "https://vc4qi.example/profiles/gs-verifier-mark", version: "1", status: "experimental", description: "Verifier-owned reliance profile for experimental GS-mark credentials under the GS certification v1 binding: a unit's GS-mark claim is relied on only through a GS certificate for its model that names the manufacturer and itself holds competence AND scheme permission. Fictional; today's GS scheme has no per-unit credential.", binding: { id: "https://vc4qi.example/bindings/gs/1", version: "1" }, trustAnchors: [{ id: "https://nab.vc4qi.example/controller", purposes: ["accredit-certification-bodies", "accredit-testing-laboratories"] }, { id: "https://zls.vc4qi.example/controller", purposes: ["authorize-gs-certification"] }], authority: { certificateRoutes: ["gs-certified-product"], globalRestrictions: [], maxRoutes: 4 }, credentialStatus: { required: !0, purposes: ["revocation"], maxAgeSeconds: 2592e3 }, mapping: { methodSuccession: "none" }, conformity: { requirements: [], decisionRules: [] } } }, files: [{ uri: "https://www.w3.org/ns/credentials/v2", mediaType: "application/ld+json", origin: "W3C Verifiable Credentials Data Model v2.0 context, vendored copy already used by the repository loader", version: "VCDM 2.0", digestSRI: "sha384-l/HrjlBCNWyAX91hr6LFV2Y3heB5Tcr6IeE4/Tje8YyzYBM8IhqjHWiWpr8+ZbYU", text: `{
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
}` }, { uri: "https://vc4qi.example/contexts/gs/1", mediaType: "application/ld+json", origin: "VC4QI experimental GS certification binding (repository-owned fictional fixture)", version: "1", digestSRI: "sha384-fAYs1/OCvQFd3XjCOKgAHpi91R9ssca87F9VuLbU5BE6xn1NpAGVO9Ntp0h8HrWX", text: `{
  "@context": {
    "@version": 1.1,
    "@protected": true,
    "gs": "https://vc4qi.example/bindings/gs/1#",
    "chain": "https://vc4qi.example/ns/chain#",
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
    "IssuedUnderPolicy": "chain:IssuedUnderPolicy",

    "authorizationCredential": "chain:authorizationCredential",
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
` }, { uri: "https://vc4qi.example/schemas/gs/1/test-report.json", mediaType: "application/schema+json", origin: "VC4QI experimental GS certification binding (generated by scripts/gs-v1/build-resources.mjs)", version: "1", digestSRI: "sha384-+J+juKc6d153WpC3UH+gnCK7HVtypbnTDAjI17Kh7S+PF+JJnV0VhoK4B+RNSGWf", text: `{
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
            "const": "IssuedUnderPolicy"
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
` }, { uri: "https://vc4qi.example/schemas/gs/1/inspection-report.json", mediaType: "application/schema+json", origin: "VC4QI experimental GS certification binding (generated by scripts/gs-v1/build-resources.mjs)", version: "1", digestSRI: "sha384-YDZ+y8rdwmBP0OmhmZKKoIz9qEPKTA3EjzsBvtPZIYeT56UPjaoNAhzOHBhPmcBL", text: `{
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
            "const": "IssuedUnderPolicy"
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
` }, { uri: "https://vc4qi.example/schemas/gs/1/certificate.json", mediaType: "application/schema+json", origin: "VC4QI experimental GS certification binding (generated by scripts/gs-v1/build-resources.mjs)", version: "1", digestSRI: "sha384-csNT2kvYqEPTaALGqLf/PQQ+/NKwRYyLjfSaUdb0UTWZETjdEjxy37cPDYPs+3pb", text: `{
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
            "const": "IssuedUnderPolicy"
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
` }, { uri: "https://vc4qi.example/schemas/gs/1/mark-credential.json", mediaType: "application/schema+json", origin: "VC4QI experimental GS certification binding (generated by scripts/gs-v1/build-resources.mjs)", version: "1", digestSRI: "sha384-CHeFy+CjZ4XOB4FXYuO60MBN53JRdh1BNnay4AukvaouEHcKGrtWJm6l476kiypH", text: `{
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
            "const": "IssuedUnderPolicy"
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
` }, { uri: "https://gs-body.vc4qi.example/credentials/FI-1", mediaType: "application/vc", origin: "VC4QI experimental GS certification v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-K3QsCugjjeMNXMOiqwcGQIBSMa9YMHOBWQV1L6omQ42Gso4Om8H9eZyI2RwatZfZ", text: `{
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
      "type": "IssuedUnderPolicy",
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
    "proofValue": "zT2VA5tbZuJoDthN7tHKJNU6SuB4SgiPDsQer4NNdFoQZGVnufb6cPCaBcUhSjfBqJQuMhizLdfrXmpJPQURwoux"
  }
}
` }, { uri: "https://gs-body.vc4qi.example/credentials/TR-1", mediaType: "application/vc", origin: "VC4QI experimental GS certification v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-I+zYN6TFW1rVPybi5zolvDOeFeSi19EHVDNvFth1MGrG24mphz6iJ/PjU676J2j7", text: `{
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
      "type": "IssuedUnderPolicy",
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
    "proofValue": "zauWFYEniLAyrSukPffamFN7ygFaPeKQLjH8HpXMBdU1V6wEvh7D1LXEraCYPHeeSGxSaqznXChK4oTZxkF2L9Hy"
  }
}
` }, { uri: "https://testlab-gs.vc4qi.example/credentials/TR-2", mediaType: "application/vc", origin: "VC4QI experimental GS certification v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-gsGwdyTKLl9BBNxFPzmPvSwemankZEbKdhZfQ8H0CeTK9+RomEzpYmc15YuE7MpZ", text: `{
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
      "type": "IssuedUnderPolicy",
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
    "proofValue": "zyWb1zSyrbKvka9jGZWaF5UpJJo1AgfcfWimgy8HiwyTXLj5Pwki3gqZzh9LDstohz5H4FVUsSC41HFf6a7SDxno"
  }
}
` }, { uri: "https://gs-body.vc4qi.example/credentials/TR-3", mediaType: "application/vc", origin: "VC4QI experimental GS certification v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-1teLXkHScUVWd8ssJx+yTpMvSwXJ0b1PGqdBd4wKnRhhE91RzCwoybCg4nlxqoBs", text: `{
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
      "type": "IssuedUnderPolicy",
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
    "proofValue": "zg78rurJQ6HwwjzDtTPQJykZXSB42GSKqHtEnMDfgnBMMehpgvWYrz3nSLtrfQc688vZ3hfdzxH5toE1cHCttn1j"
  }
}
` }, { uri: "https://gs-body.vc4qi.example/credentials/GSC-1", mediaType: "application/vc", origin: "VC4QI experimental GS certification v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-1dQPBXdYT5tcCOef9h8vIPKdnlc5kNY5dzQJnqx9u66GaFKvNTsqDdQC2mAqOEHf", text: `{
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
      "type": "IssuedUnderPolicy",
      "authorizationCredential": {
        "id": "https://nab.vc4qi.example/credentials/GS-A",
        "type": "GsAccreditation"
      }
    },
    {
      "type": "IssuedUnderPolicy",
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
      "digestSRI": "sha384-I+zYN6TFW1rVPybi5zolvDOeFeSi19EHVDNvFth1MGrG24mphz6iJ/PjU676J2j7"
    },
    {
      "id": "https://gs-body.vc4qi.example/credentials/FI-1",
      "digestSRI": "sha384-K3QsCugjjeMNXMOiqwcGQIBSMa9YMHOBWQV1L6omQ42Gso4Om8H9eZyI2RwatZfZ"
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
    "proofValue": "z49uP4Z26GYEwaiQdL5W8dDXnt2azSmEab8HjwXAG1FWMfPCuwC3aKE81bQCUwwVvRC3fPicR2cya9SGvTgKc9jSB"
  }
}
` }, { uri: "https://gs-body.vc4qi.example/credentials/GSC-2", mediaType: "application/vc", origin: "VC4QI experimental GS certification v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-3LGbDKFazMfliQ4jStGPzM3vX0/pNigxHJTTYeccoP3U/ptMecMeQuq7YSwWtyz/", text: `{
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
      "type": "IssuedUnderPolicy",
      "authorizationCredential": {
        "id": "https://nab.vc4qi.example/credentials/GS-A",
        "type": "GsAccreditation"
      }
    },
    {
      "type": "IssuedUnderPolicy",
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
      "digestSRI": "sha384-1teLXkHScUVWd8ssJx+yTpMvSwXJ0b1PGqdBd4wKnRhhE91RzCwoybCg4nlxqoBs"
    },
    {
      "id": "https://gs-body.vc4qi.example/credentials/FI-1",
      "digestSRI": "sha384-K3QsCugjjeMNXMOiqwcGQIBSMa9YMHOBWQV1L6omQ42Gso4Om8H9eZyI2RwatZfZ"
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
    "proofValue": "z46DBjcAHSwNi3MpnwCn1uR9bBsCL7VmuM9TV5LQgLouf6isqw2TJVTc38gmD1mfYuA38Ev8CbgSGDBGGAvnC9LMA"
  }
}
` }, { uri: "https://gs-body.vc4qi.example/credentials/GSC-3", mediaType: "application/vc", origin: "VC4QI experimental GS certification v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-QgxyAIEJsyCGWr6McYCPYUMamDusF+Z7WgSCdBFNkwiubyEAaomFLSMZ9RpCoyJN", text: `{
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
      "type": "IssuedUnderPolicy",
      "authorizationCredential": {
        "id": "https://nab.vc4qi.example/credentials/GS-A",
        "type": "GsAccreditation"
      }
    },
    {
      "type": "IssuedUnderPolicy",
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
      "digestSRI": "sha384-gsGwdyTKLl9BBNxFPzmPvSwemankZEbKdhZfQ8H0CeTK9+RomEzpYmc15YuE7MpZ"
    },
    {
      "id": "https://gs-body.vc4qi.example/credentials/FI-1",
      "digestSRI": "sha384-K3QsCugjjeMNXMOiqwcGQIBSMa9YMHOBWQV1L6omQ42Gso4Om8H9eZyI2RwatZfZ"
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
    "proofValue": "zxyXbeDr44SH9P28FqbNvfvDvV3h6EuRtR7wrDUgxH8czDeTXHhbYe45TjqVtZfQCKJXjvzVnRw77D4kcVX7ayLG"
  }
}
` }, { uri: "https://maker.vc4qi.example/credentials/GSM-1", mediaType: "application/vc", origin: "VC4QI experimental GS certification v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-OYOjoGBXySoM7NQ82VzGlep6MtSuhgPEC3CW4fRZ3jXAyy072B9ClizdqKltRI5L", text: `{
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
      "type": "IssuedUnderPolicy",
      "authorizationCredential": {
        "id": "https://gs-body.vc4qi.example/credentials/GSC-1",
        "type": "GsCertificate"
      }
    }
  ],
  "relatedResource": [
    {
      "id": "https://gs-body.vc4qi.example/credentials/GSC-1",
      "digestSRI": "sha384-1dQPBXdYT5tcCOef9h8vIPKdnlc5kNY5dzQJnqx9u66GaFKvNTsqDdQC2mAqOEHf"
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
    "proofValue": "z5k83AwW7bnoveywsVg6qpyQzDWqQPaWRW8oTiLV4RwaWEzX7RmZh6e9PwEnjYLRVbBnfeFjEWd5y1qh2RMnJJXJW"
  }
}
` }, { uri: "https://maker.vc4qi.example/credentials/GSM-2", mediaType: "application/vc", origin: "VC4QI experimental GS certification v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-9g0jDIM8HCRwrpcsyqsvuox1Vr8EcPWv+clt3PttTRSCJTrlqusNvpnBItqS6I8G", text: `{
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
      "type": "IssuedUnderPolicy",
      "authorizationCredential": {
        "id": "https://gs-body.vc4qi.example/credentials/GSC-2",
        "type": "GsCertificate"
      }
    }
  ],
  "relatedResource": [
    {
      "id": "https://gs-body.vc4qi.example/credentials/GSC-2",
      "digestSRI": "sha384-3LGbDKFazMfliQ4jStGPzM3vX0/pNigxHJTTYeccoP3U/ptMecMeQuq7YSwWtyz/"
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
    "proofValue": "z31gbzZJXtU5eKpa9VYmQBNjaCRJ4deQkFcEbRJ3fNUYU4HD2Fi3U6WcqJFWHkPCFXBqQoGNrJafoGXcYCHCENVjQ"
  }
}
` }, { uri: "https://maker.vc4qi.example/credentials/GSM-3", mediaType: "application/vc", origin: "VC4QI experimental GS certification v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-I4EEoiC6+K36//kWU1+LN05tpLjA9lko0Nir6Br5QUo0THvXaNxAn08mIIaP5pwO", text: `{
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
      "type": "IssuedUnderPolicy",
      "authorizationCredential": {
        "id": "https://gs-body.vc4qi.example/credentials/GSC-3",
        "type": "GsCertificate"
      }
    }
  ],
  "relatedResource": [
    {
      "id": "https://gs-body.vc4qi.example/credentials/GSC-3",
      "digestSRI": "sha384-QgxyAIEJsyCGWr6McYCPYUMamDusF+Z7WgSCdBFNkwiubyEAaomFLSMZ9RpCoyJN"
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
    "proofValue": "z5V1TuFAZvf6RwupgbMPueuEmht9uYaWs5HrUqZAMTSTChzePkPqATv9rxdvf85KF2teEghD7N65RLqL66pVTQwoK"
  }
}
` }, { uri: "https://maker.vc4qi.example/credentials/GSM-4", mediaType: "application/vc", origin: "VC4QI experimental GS certification v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-OPfZS65qXgdfGxZXBgg9Mu19y/JorbX1zwbp61rgHj3LpAI9vyUllJtH6hJsWnlz", text: `{
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
      "type": "IssuedUnderPolicy",
      "authorizationCredential": {
        "id": "https://gs-body.vc4qi.example/credentials/GSC-1",
        "type": "GsCertificate"
      }
    }
  ],
  "relatedResource": [
    {
      "id": "https://gs-body.vc4qi.example/credentials/GSC-1",
      "digestSRI": "sha384-1dQPBXdYT5tcCOef9h8vIPKdnlc5kNY5dzQJnqx9u66GaFKvNTsqDdQC2mAqOEHf"
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
    "proofValue": "zwRpnpPazcqyfRVuthdb2R9zsgMXCpQeejeBPBoW1rQcHRkn2DyC85L9aevfwRwzeWVcrW79jPV1JLkZtdommegP"
  }
}
` }, { uri: "https://clone.vc4qi.example/credentials/GSM-5", mediaType: "application/vc", origin: "VC4QI experimental GS certification v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-01DHa6Q2fE96y66yNRYlHgQ+7N/e9uOThjBmTWlxPim0xF2p2qq4eMp9z1eGV01t", text: `{
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
      "type": "IssuedUnderPolicy",
      "authorizationCredential": {
        "id": "https://gs-body.vc4qi.example/credentials/GSC-1",
        "type": "GsCertificate"
      }
    }
  ],
  "relatedResource": [
    {
      "id": "https://gs-body.vc4qi.example/credentials/GSC-1",
      "digestSRI": "sha384-1dQPBXdYT5tcCOef9h8vIPKdnlc5kNY5dzQJnqx9u66GaFKvNTsqDdQC2mAqOEHf"
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
    "proofValue": "z5S41qwTqFb3LJ5FAqg5bzpDMzAijPup6WNvbmW5FEiwVkDyfBZQYz9qFwcpWwycxncqzTWxzagya8rWAZPtBpKmu"
  }
}
` }, { uri: "https://maker.vc4qi.example/credentials/GSM-6", mediaType: "application/vc", origin: "VC4QI experimental GS certification v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-QSQ3DykQTxWIYOVzjiPP7YNVEsrp1Mpu09jAmRbZda8nkdTBYvuwfAGEQRM3hJnb", text: `{
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
      "type": "IssuedUnderPolicy",
      "authorizationCredential": {
        "id": "https://gs-body.vc4qi.example/credentials/GSC-1",
        "type": "GsCertificate"
      }
    }
  ],
  "relatedResource": [
    {
      "id": "https://gs-body.vc4qi.example/credentials/GSC-1",
      "digestSRI": "sha384-1dQPBXdYT5tcCOef9h8vIPKdnlc5kNY5dzQJnqx9u66GaFKvNTsqDdQC2mAqOEHf"
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
    "proofValue": "z5Sjj7KSqax9bhm5sjvxNzJEtMHGibQQrJUm6CjpJcz43TVBbCsHtxfzM1Ec3FY874AtLDqxZaHdTmPXygxcckcck"
  }
}
` }, { uri: "https://maker.vc4qi.example/credentials/DPP-1", mediaType: "application/vc", origin: "VC4QI experimental GS certification v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-BZNUMylEtGD8skbfXiGqxYiqd2gEyTJulthWyl13VB2xIAPRrp+wfq5iWIxYEswm", text: `{
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
      "digestSRI": "sha384-OYOjoGBXySoM7NQ82VzGlep6MtSuhgPEC3CW4fRZ3jXAyy072B9ClizdqKltRI5L"
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
    "proofValue": "z5As5q7fdbWzq84VFbVEGjPjxdLwtcNcZR5nYieNj7sJLqAywhZSNpjuQRwhsXNzfr41Dpixt9tpdzx2ni8thAtSm"
  }
}
` }, { uri: "https://maker.vc4qi.example/credentials/DPP-2", mediaType: "application/vc", origin: "VC4QI experimental GS certification v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-c3tSoHzNEDgNqBjFFbQATzmcqOHcPSysduIQXf2hcsLLV84c5mAaRmKBhHT79I2/", text: `{
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
      "digestSRI": "sha384-OPfZS65qXgdfGxZXBgg9Mu19y/JorbX1zwbp61rgHj3LpAI9vyUllJtH6hJsWnlz"
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
    "proofValue": "z5U3xVKMywvYmycieg7AwDHBiodQbwfU5AXbs213UjFAvd7cnm6XE7VyRLZehPkm8UermSJkJ3Sa9rWSsnde2SXYt"
  }
}
` }, { uri: "https://maker.vc4qi.example/credentials/DPP-3", mediaType: "application/vc", origin: "VC4QI experimental GS certification v1 signed fixture (fictional parties, insecure keys)", version: "1", digestSRI: "sha384-0P2x/dhd7LQ+AnC3HMsp12JSsSsZodWX+9SmqpBICAVaBdAvBbRb5Hny4GDrsE69", text: `{
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
      "digestSRI": "sha384-OYOjoGBXySoM7NQ82VzGlep6MtSuhgPEC3CW4fRZ3jXAyy072B9ClizdqKltRI5L"
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
    "proofValue": "z42wzztxA92FFzrqjL9zYkuB8hpPgmN2aBevh819y4744CNJfnaJt8QCELCCeSwZsYZEhR6EGBxm7UX2Szi8GmLG6"
  }
}
` }] } };
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function Vl(e) {
  return e instanceof Uint8Array || ArrayBuffer.isView(e) && e.constructor.name === "Uint8Array";
}
function sa(e, ...t) {
  if (!Vl(e))
    throw new Error("Uint8Array expected");
  if (t.length > 0 && !t.includes(e.length))
    throw new Error("Uint8Array expected of length " + t + ", got length=" + e.length);
}
function Na(e, t = !0) {
  if (e.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (t && e.finished)
    throw new Error("Hash#digest() has already been called");
}
function Fl(e, t) {
  sa(e);
  const n = t.outputLen;
  if (e.length < n)
    throw new Error("digestInto() expects output buffer of length at least " + n);
}
function Pn(...e) {
  for (let t = 0; t < e.length; t++)
    e[t].fill(0);
}
function $r(e) {
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
function $d(e) {
  return typeof e == "string" && (e = Gl(e)), sa(e), e;
}
class Bl {
}
function aa(e) {
  const t = (i) => e().update($d(i)).digest(), n = e();
  return t.outputLen = n.outputLen, t.blockLen = n.blockLen, t.create = () => e(), t;
}
function Zl(e, t, n, i) {
  if (typeof e.setBigUint64 == "function")
    return e.setBigUint64(t, n, i);
  const o = BigInt(32), r = BigInt(4294967295), s = Number(n >> o & r), a = Number(n & r), c = i ? 4 : 0, l = i ? 0 : 4;
  e.setUint32(t + c, s, i), e.setUint32(t + l, a, i);
}
function Hl(e, t, n) {
  return e & t ^ ~e & n;
}
function Jl(e, t, n) {
  return e & t ^ e & n ^ t & n;
}
class Pd extends Bl {
  constructor(t, n, i, o) {
    super(), this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.blockLen = t, this.outputLen = n, this.padOffset = i, this.isLE = o, this.buffer = new Uint8Array(t), this.view = $r(this.buffer);
  }
  update(t) {
    Na(this), t = $d(t), sa(t);
    const { view: n, buffer: i, blockLen: o } = this, r = t.length;
    for (let s = 0; s < r; ) {
      const a = Math.min(o - this.pos, r - s);
      if (a === o) {
        const c = $r(t);
        for (; o <= r - s; s += o)
          this.process(c, s);
        continue;
      }
      i.set(t.subarray(s, s + a), this.pos), this.pos += a, s += a, this.pos === o && (this.process(n, 0), this.pos = 0);
    }
    return this.length += t.length, this.roundClean(), this;
  }
  digestInto(t) {
    Na(this), Fl(t, this), this.finished = !0;
    const { buffer: n, view: i, blockLen: o, isLE: r } = this;
    let { pos: s } = this;
    n[s++] = 128, Pn(this.buffer.subarray(s)), this.padOffset > o - s && (this.process(i, 0), s = 0);
    for (let y = s; y < o; y++)
      n[y] = 0;
    Zl(i, o - 8, BigInt(this.length * 8), r), this.process(i, 0);
    const a = $r(t), c = this.outputLen;
    if (c % 4)
      throw new Error("_sha2: outputLen should be aligned to 32bit");
    const l = c / 4, u = this.get();
    if (l > u.length)
      throw new Error("_sha2: outputLen bigger than state");
    for (let y = 0; y < l; y++)
      a.setUint32(4 * y, u[y], r);
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
const Rt = /* @__PURE__ */ Uint32Array.from([
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
]), Vn = /* @__PURE__ */ BigInt(2 ** 32 - 1), Da = /* @__PURE__ */ BigInt(32);
function Kl(e, t = !1) {
  return t ? { h: Number(e & Vn), l: Number(e >> Da & Vn) } : { h: Number(e >> Da & Vn) | 0, l: Number(e & Vn) | 0 };
}
function Ql(e, t = !1) {
  const n = e.length;
  let i = new Uint32Array(n), o = new Uint32Array(n);
  for (let r = 0; r < n; r++) {
    const { h: s, l: a } = Kl(e[r], t);
    [i[r], o[r]] = [s, a];
  }
  return [i, o];
}
const za = (e, t, n) => e >>> n, Ua = (e, t, n) => e << 32 - n | t >>> n, Wt = (e, t, n) => e >>> n | t << 32 - n, Xt = (e, t, n) => e << 32 - n | t >>> n, Fn = (e, t, n) => e << 64 - n | t >>> n - 32, Gn = (e, t, n) => e >>> n - 32 | t << 64 - n;
function mt(e, t, n, i) {
  const o = (t >>> 0) + (i >>> 0);
  return { h: e + n + (o / 2 ** 32 | 0) | 0, l: o | 0 };
}
const Wl = (e, t, n) => (e >>> 0) + (t >>> 0) + (n >>> 0), Xl = (e, t, n, i) => t + n + i + (e / 2 ** 32 | 0) | 0, Yl = (e, t, n, i) => (e >>> 0) + (t >>> 0) + (n >>> 0) + (i >>> 0), eu = (e, t, n, i, o) => t + n + i + o + (e / 2 ** 32 | 0) | 0, tu = (e, t, n, i, o) => (e >>> 0) + (t >>> 0) + (n >>> 0) + (i >>> 0) + (o >>> 0), nu = (e, t, n, i, o, r) => t + n + i + o + r + (e / 2 ** 32 | 0) | 0, iu = /* @__PURE__ */ Uint32Array.from([
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
]), jt = /* @__PURE__ */ new Uint32Array(64);
class ru extends Pd {
  constructor(t = 32) {
    super(64, t, 8, !1), this.A = Rt[0] | 0, this.B = Rt[1] | 0, this.C = Rt[2] | 0, this.D = Rt[3] | 0, this.E = Rt[4] | 0, this.F = Rt[5] | 0, this.G = Rt[6] | 0, this.H = Rt[7] | 0;
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
      jt[y] = t.getUint32(n, !1);
    for (let y = 16; y < 64; y++) {
      const f = jt[y - 15], h = jt[y - 2], x = rt(f, 7) ^ rt(f, 18) ^ f >>> 3, w = rt(h, 17) ^ rt(h, 19) ^ h >>> 10;
      jt[y] = w + jt[y - 7] + x + jt[y - 16] | 0;
    }
    let { A: i, B: o, C: r, D: s, E: a, F: c, G: l, H: u } = this;
    for (let y = 0; y < 64; y++) {
      const f = rt(a, 6) ^ rt(a, 11) ^ rt(a, 25), h = u + f + Hl(a, c, l) + iu[y] + jt[y] | 0, w = (rt(i, 2) ^ rt(i, 13) ^ rt(i, 22)) + Jl(i, o, r) | 0;
      u = l, l = c, c = a, a = s + h | 0, s = r, r = o, o = i, i = h + w | 0;
    }
    i = i + this.A | 0, o = o + this.B | 0, r = r + this.C | 0, s = s + this.D | 0, a = a + this.E | 0, c = c + this.F | 0, l = l + this.G | 0, u = u + this.H | 0, this.set(i, o, r, s, a, c, l, u);
  }
  roundClean() {
    Pn(jt);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0), Pn(this.buffer);
  }
}
const _d = Ql([
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
].map((e) => BigInt(e))), su = _d[0], au = _d[1], $t = /* @__PURE__ */ new Uint32Array(80), Pt = /* @__PURE__ */ new Uint32Array(80);
class Td extends Pd {
  constructor(t = 64) {
    super(128, t, 16, !1), this.Ah = Ae[0] | 0, this.Al = Ae[1] | 0, this.Bh = Ae[2] | 0, this.Bl = Ae[3] | 0, this.Ch = Ae[4] | 0, this.Cl = Ae[5] | 0, this.Dh = Ae[6] | 0, this.Dl = Ae[7] | 0, this.Eh = Ae[8] | 0, this.El = Ae[9] | 0, this.Fh = Ae[10] | 0, this.Fl = Ae[11] | 0, this.Gh = Ae[12] | 0, this.Gl = Ae[13] | 0, this.Hh = Ae[14] | 0, this.Hl = Ae[15] | 0;
  }
  // prettier-ignore
  get() {
    const { Ah: t, Al: n, Bh: i, Bl: o, Ch: r, Cl: s, Dh: a, Dl: c, Eh: l, El: u, Fh: y, Fl: f, Gh: h, Gl: x, Hh: w, Hl: v } = this;
    return [t, n, i, o, r, s, a, c, l, u, y, f, h, x, w, v];
  }
  // prettier-ignore
  set(t, n, i, o, r, s, a, c, l, u, y, f, h, x, w, v) {
    this.Ah = t | 0, this.Al = n | 0, this.Bh = i | 0, this.Bl = o | 0, this.Ch = r | 0, this.Cl = s | 0, this.Dh = a | 0, this.Dl = c | 0, this.Eh = l | 0, this.El = u | 0, this.Fh = y | 0, this.Fl = f | 0, this.Gh = h | 0, this.Gl = x | 0, this.Hh = w | 0, this.Hl = v | 0;
  }
  process(t, n) {
    for (let m = 0; m < 16; m++, n += 4)
      $t[m] = t.getUint32(n), Pt[m] = t.getUint32(n += 4);
    for (let m = 16; m < 80; m++) {
      const d = $t[m - 15] | 0, p = Pt[m - 15] | 0, b = Wt(d, p, 1) ^ Wt(d, p, 8) ^ za(d, p, 7), S = Xt(d, p, 1) ^ Xt(d, p, 8) ^ Ua(d, p, 7), A = $t[m - 2] | 0, P = Pt[m - 2] | 0, R = Wt(A, P, 19) ^ Fn(A, P, 61) ^ za(A, P, 6), E = Xt(A, P, 19) ^ Gn(A, P, 61) ^ Ua(A, P, 6), k = Yl(S, E, Pt[m - 7], Pt[m - 16]), M = eu(k, b, R, $t[m - 7], $t[m - 16]);
      $t[m] = M | 0, Pt[m] = k | 0;
    }
    let { Ah: i, Al: o, Bh: r, Bl: s, Ch: a, Cl: c, Dh: l, Dl: u, Eh: y, El: f, Fh: h, Fl: x, Gh: w, Gl: v, Hh: I, Hl: g } = this;
    for (let m = 0; m < 80; m++) {
      const d = Wt(y, f, 14) ^ Wt(y, f, 18) ^ Fn(y, f, 41), p = Xt(y, f, 14) ^ Xt(y, f, 18) ^ Gn(y, f, 41), b = y & h ^ ~y & w, S = f & x ^ ~f & v, A = tu(g, p, S, au[m], Pt[m]), P = nu(A, I, d, b, su[m], $t[m]), R = A | 0, E = Wt(i, o, 28) ^ Fn(i, o, 34) ^ Fn(i, o, 39), k = Xt(i, o, 28) ^ Gn(i, o, 34) ^ Gn(i, o, 39), M = i & r ^ i & a ^ r & a, j = o & s ^ o & c ^ s & c;
      I = w | 0, g = v | 0, w = h | 0, v = x | 0, h = y | 0, x = f | 0, { h: y, l: f } = mt(l | 0, u | 0, P | 0, R | 0), l = a | 0, u = c | 0, a = r | 0, c = s | 0, r = i | 0, s = o | 0;
      const N = Wl(R, k, j);
      i = Xl(N, P, E, M), o = N | 0;
    }
    ({ h: i, l: o } = mt(this.Ah | 0, this.Al | 0, i | 0, o | 0)), { h: r, l: s } = mt(this.Bh | 0, this.Bl | 0, r | 0, s | 0), { h: a, l: c } = mt(this.Ch | 0, this.Cl | 0, a | 0, c | 0), { h: l, l: u } = mt(this.Dh | 0, this.Dl | 0, l | 0, u | 0), { h: y, l: f } = mt(this.Eh | 0, this.El | 0, y | 0, f | 0), { h, l: x } = mt(this.Fh | 0, this.Fl | 0, h | 0, x | 0), { h: w, l: v } = mt(this.Gh | 0, this.Gl | 0, w | 0, v | 0), { h: I, l: g } = mt(this.Hh | 0, this.Hl | 0, I | 0, g | 0), this.set(i, o, r, s, a, c, l, u, y, f, h, x, w, v, I, g);
  }
  roundClean() {
    Pn($t, Pt);
  }
  destroy() {
    Pn(this.buffer), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  }
}
class ou extends Td {
  constructor() {
    super(48), this.Ah = Ie[0] | 0, this.Al = Ie[1] | 0, this.Bh = Ie[2] | 0, this.Bl = Ie[3] | 0, this.Ch = Ie[4] | 0, this.Cl = Ie[5] | 0, this.Dh = Ie[6] | 0, this.Dl = Ie[7] | 0, this.Eh = Ie[8] | 0, this.El = Ie[9] | 0, this.Fh = Ie[10] | 0, this.Fl = Ie[11] | 0, this.Gh = Ie[12] | 0, this.Gl = Ie[13] | 0, this.Hh = Ie[14] | 0, this.Hl = Ie[15] | 0;
  }
}
const cu = /* @__PURE__ */ aa(() => new ru()), du = /* @__PURE__ */ aa(() => new Td()), lu = /* @__PURE__ */ aa(() => new ou()), Cd = cu, uu = du, pu = lu;
class fu {
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
    return this._algo === "sha384" ? r = pu(i) : this._algo === "sha512" ? r = uu(i) : r = Cd(i), t === "base64" ? btoa(String.fromCharCode(...r)) : t === "hex" ? Array.from(r).map((s) => s.toString(16).padStart(2, "0")).join("") : r;
  }
}
function Ds(e) {
  return new fu(e);
}
class Ee extends Error {
  constructor(t, n) {
    super(n), this.code = t, this.name = "CatalogError";
  }
}
function hu(e, t) {
  if (e.trim().length === 0)
    throw new Ee("INVALID_RESOURCE", `${t} must be nonempty.`);
}
function or(e) {
  return `sha384-${Ds("sha384").update(e).digest("base64")}`;
}
function Va(e) {
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
          if (!(o instanceof Ee)) throw o;
          t.set(n, o);
        }
      const i = t.get(n);
      if (i instanceof Ee) throw i;
      return { ...i, bytes: Uint8Array.from(i.bytes) };
    }
  };
}
var dn;
class Ed {
  constructor(t) {
    Un(this, dn, /* @__PURE__ */ new Map());
    for (const n of t) {
      for (const [o, r] of Object.entries({
        uri: n.uri,
        mediaType: n.mediaType,
        origin: n.origin,
        version: n.version
      })) hu(r, o);
      if (it(this, dn).has(n.uri))
        throw new Ee("DUPLICATE_RESOURCE", `Duplicate static resource: ${n.uri}`);
      const i = or(n.bytes);
      if (i !== n.digestSRI)
        throw new Ee(
          "INTEGRITY_MISMATCH",
          `Static resource ${n.uri} has ${i}; expected ${n.digestSRI}.`
        );
      it(this, dn).set(n.uri, { ...n, bytes: Uint8Array.from(n.bytes) });
    }
  }
  openSession(t) {
    if (!Number.isSafeInteger(t.maxResources) || t.maxResources <= 0 || !Number.isSafeInteger(t.maxBytes) || t.maxBytes <= 0)
      throw new Ee("INVALID_RESOURCE", "Catalog budgets must be positive safe integers.");
    return new mu(it(this, dn), Object.freeze({ ...t }));
  }
}
dn = new WeakMap();
var ln, un;
class mu {
  constructor(t, n) {
    Un(this, ln, 0);
    Un(this, un, 0);
    this.resources = t, this.budget = n;
  }
  get usage() {
    return Object.freeze({ resources: it(this, ln), bytes: it(this, un) });
  }
  resolve(t) {
    const n = this.resources.get(t);
    if (!n)
      throw new Ee("RESOURCE_NOT_FOUND", `Static resource is not installed: ${t}`);
    if (it(this, ln) + 1 > this.budget.maxResources || it(this, un) + n.bytes.byteLength > this.budget.maxBytes)
      throw new Ee("RESOURCE_BUDGET_EXCEEDED", `Static resource budget exceeded at ${t}.`);
    return jr(this, ln, it(this, ln) + 1), jr(this, un, it(this, un) + n.bytes.byteLength), { ...n, bytes: Uint8Array.from(n.bytes) };
  }
}
ln = new WeakMap(), un = new WeakMap();
function kd(e) {
  return async (t) => {
    const n = e.resolve(t);
    if (n.mediaType !== "application/json" && n.mediaType !== "application/ld+json" && !n.mediaType.endsWith("+json"))
      throw new Ee(
        "INVALID_RESOURCE",
        `JSON-LD resource ${t} has unsupported media type ${n.mediaType}.`
      );
    let i;
    try {
      const o = new TextDecoder("utf-8", { fatal: !0 }).decode(n.bytes);
      i = JSON.parse(o);
    } catch (o) {
      throw new Ee(
        "INVALID_RESOURCE",
        `JSON-LD resource ${t} is not valid UTF-8 JSON: ${String(o)}.`
      );
    }
    return { contextUrl: null, document: i, documentUrl: t };
  };
}
const Fa = "https://vc4qi.example/bindings/rm/1", Pr = [
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
function Bn(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function Md(e) {
  if (e !== null && typeof e == "object") {
    for (const t of Object.values(e)) Md(t);
    Object.freeze(e);
  }
  return e;
}
function yu(e) {
  if (!Bn(e)) throw new TypeError("Binding manifest must be an object.");
  if (Object.keys(e).length !== Pr.length || Pr.some((n) => !Object.hasOwn(e, n)))
    throw new TypeError("Binding manifest must contain exactly the supported top-level categories.");
  if (typeof e.id != "string" || e.id.length === 0 || typeof e.version != "string" || e.version.length === 0 || e.status !== "experimental" && e.status !== "production")
    throw new TypeError("Binding manifest identity, version, or status is invalid.");
  if (!Bn(e.installation) || e.installation.status !== "incomplete" && e.installation.status !== "installable" || typeof e.installation.reason != "string" || e.installation.reason.length === 0 || !Array.isArray(e.installation.pendingResources) || e.installation.pendingResources.some((n) => typeof n != "string" || n.length === 0))
    throw new TypeError("Binding manifest installation state is invalid.");
  if (!Array.isArray(e.factMappings) || e.factMappings.length === 0 || e.factMappings.some((n) => !Bn(n)))
    throw new TypeError("Binding manifest factMappings must be a nonempty object array.");
  for (const n of Pr.slice(4))
    if (!(n === "installation" || n === "factMappings") && (!Bn(e[n]) || Object.keys(e[n]).length === 0))
      throw new TypeError(`Binding manifest ${n} must be a nonempty object.`);
  return Md(structuredClone(e));
}
const Ht = "https://www.w3.org/ns/credentials/v2", gu = "https://vc4qi.example/contexts/rm/1", Ut = "https://vc4qi.example/schemas/rm/1/", vu = "https://vc4qi.example/contexts/recognized-entities/draft-20261112", Od = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz", zs = BigInt(58);
function bu(e) {
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
    const o = Number(n % zs);
    n = n / zs, i.unshift(o);
  }
  return "1".repeat(t) + i.map((o) => Od[o]).join("");
}
function wu(e) {
  if (e.length === 0) return new Uint8Array(0);
  let t = 0;
  for (const s of e) {
    if (s !== "1") break;
    t++;
  }
  let n = 0n;
  for (const s of e) {
    const a = Od.indexOf(s);
    if (a === -1) throw new Error(`Invalid base58btc character: '${s}'`);
    n = n * zs + BigInt(a);
  }
  const i = [];
  for (; n > 0n; )
    i.push(Number(n & 0xffn)), n >>= 8n;
  i.reverse();
  const o = Uint8Array.from(i), r = new Uint8Array(t + o.length);
  return r.set(o, t), r;
}
function xu(e) {
  return "z" + bu(e);
}
function oa(e) {
  if (!e.startsWith("z"))
    throw new Error(`Expected multibase base58btc prefix 'z', got '${e[0]}'`);
  return wu(e.slice(1));
}
const Ga = [237, 1], Su = ["revoked", "expires"];
function ve(e, t, n, i = {}) {
  return Object.freeze({ state: e, code: t, reason: n, ...i });
}
function Hi(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function Iu(e) {
  if (typeof e == "string" && e.length > 0) return e;
  if (Hi(e) && typeof e.id == "string" && e.id.length > 0) return e.id;
}
function Au(e) {
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
function qu(e) {
  if (typeof e != "string" || !e.startsWith("z")) return;
  let t;
  try {
    t = oa(e);
  } catch {
    return;
  }
  if (!(t.length !== 34 || t[0] !== Ga[0] || t[1] !== Ga[1]))
    return t.slice(2);
}
function Ru(e, t, n) {
  const i = Iu(e);
  if (i === void 0)
    return ve("not_established", "ISSUER_MISSING", "The credential has no issuer identifier.");
  if (typeof t != "string")
    return ve("contradicted", "MALFORMED_METHOD", "The proof names no verification method.");
  const o = Au(t);
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
    return f instanceof Ee ? ve(
      "not_established",
      "CONTROLLER_NOT_INSTALLED",
      `Controller document ${o} is not available: ${f.code}.`
    ) : ve(
      "not_established",
      "INVALID_CONTROLLER_DOCUMENT",
      `Controller document ${o} is not valid UTF-8 JSON.`
    );
  }
  if (!Hi(r))
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
  const c = (Array.isArray(r.verificationMethod) ? r.verificationMethod : []).filter((f) => Hi(f) && f.id === t);
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
  if (Su.some((f) => Object.hasOwn(l, f)))
    return ve(
      "not_established",
      "METHOD_LIFECYCLE_UNSUPPORTED",
      "Key revocation/expiry metadata is not supported in the initial slice."
    );
  const u = qu(l.publicKeyMultibase);
  if (u === void 0)
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
    { publicKey: u, verificationMethod: t, controllerDocumentDigest: s }
  ) : y.some((f) => Hi(f) && f.id === t) ? ve(
    "not_established",
    "EMBEDDED_METHOD_UNSUPPORTED",
    "Embedded assertionMethod entries are not supported; a reference is required."
  ) : ve(
    "contradicted",
    "NOT_ASSERTION_METHOD",
    `${t} is not authorized for assertionMethod.`
  );
}
const Ba = ["accept-successor", "require-extension", "none"], ju = ["value-at-most-limit", "value-plus-expanded-uncertainty-at-most-limit"], $u = /^(0|[1-9][0-9]*)(\.[0-9]+)?$/;
function Je(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
const ze = (e) => typeof e == "string" && e.trim().length > 0, _r = (e) => Array.isArray(e) && e.length > 0 && e.every(ze) && new Set(e).size === e.length;
function cr(e) {
  if (!Je(e) || !ze(e.id) || !ze(e.version) || e.status !== "experimental" && e.status !== "production")
    throw new TypeError("Reliance profile identity, version or status is invalid.");
  const t = e.binding;
  if (!Je(t) || !ze(t.id) || !ze(t.version))
    throw new TypeError("Reliance profile must name exactly one binding and version.");
  if (!Array.isArray(e.trustAnchors) || e.trustAnchors.some((l) => !Je(l) || !ze(l.id) || !_r(l.purposes)))
    throw new TypeError("Reliance profile trustAnchors must list anchors with explicit purposes.");
  const n = e.authority;
  if (!Je(n) || !_r(n.certificateRoutes) || !Array.isArray(n.globalRestrictions) || !n.globalRestrictions.every(ze) || !Number.isSafeInteger(n.maxRoutes) || n.maxRoutes <= 0)
    throw new TypeError("Reliance profile authority needs certificateRoutes, globalRestrictions and a positive maxRoutes.");
  const i = e.credentialStatus;
  if (!Je(i) || typeof i.required != "boolean" || !_r(i.purposes) || !Number.isSafeInteger(i.maxAgeSeconds) || i.maxAgeSeconds <= 0)
    throw new TypeError("Reliance profile credentialStatus needs required, purposes and a positive maxAgeSeconds.");
  const o = e.mapping;
  if (!Je(o) || !Ba.includes(o.methodSuccession))
    throw new TypeError(`Reliance profile mapping.methodSuccession must be one of ${Ba.join(", ")}.`);
  const r = e.conformity;
  if (!Je(r) || !Array.isArray(r.requirements) || !Array.isArray(r.decisionRules) || r.requirements.some((l) => !Je(l) || !ze(l.id) || !ze(l.propertyIri) || !ze(l.quantityKindIri) || !Je(l.upperLimit) || typeof l.upperLimit.value != "string" || !$u.test(l.upperLimit.value) || !ze(l.upperLimit.unit)) || r.decisionRules.some((l) => !Je(l) || !ze(l.id) || !ju.includes(l.acceptWhen)))
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
function Tr(e, t) {
  if (new Set(e).size !== e.length)
    throw new TypeError(`${t} must not contain duplicates.`);
}
function Us(e, t) {
  const n = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(?:\.\d{1,9})?(Z|[+-]\d{2}:\d{2})$/.exec(e);
  if (!n)
    throw new TypeError(`${t} must be an ISO 8601 date-time with an explicit offset.`);
  const [, i, o, r, s, a, c] = n, l = n[7], u = Number(i), y = Number(o), f = Number(r), h = Number(s), x = Number(a), w = Number(c), v = /* @__PURE__ */ new Date(0);
  v.setUTCFullYear(u, y - 1, f), v.setUTCHours(0, 0, 0, 0);
  const I = v.getUTCFullYear() !== u || v.getUTCMonth() !== y - 1 || v.getUTCDate() !== f, g = l === "Z" ? null : /^([+-])(\d{2}):(\d{2})$/.exec(l), m = g !== null && (Number(g[2]) > 23 || Number(g[3]) > 59);
  if (u < 1 || I || h > 23 || x > 59 || w > 59 || m || !Number.isFinite(Date.parse(e)))
    throw new TypeError(`${t} must be a valid ISO 8601 date-time.`);
}
function Cr(e, t) {
  if (!Number.isSafeInteger(e) || e <= 0)
    throw new TypeError(`${t} must be a positive safe integer.`);
}
function Wi(e, t) {
  ue(e.id, `${t}.id`), ue(e.version, `${t}.version`);
}
function Xi(e) {
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
function Pu(e) {
  if (ue(e.requestId, "requestId"), ue(e.targetId, "targetId"), ue(e.purpose, "purpose"), ue(e.trustConfigId, "trustConfigId"), Wi(e.binding, "binding"), Wi(e.profile, "profile"), Us(e.evaluationTime, "evaluationTime"), Us(e.activityTime, "activityTime"), e.selectedClaims.length === 0)
    throw new TypeError("selectedClaims must contain at least one claim.");
  for (const [r, s] of e.selectedClaims.entries())
    ue(s.id, `selectedClaims[${r}].id`), ue(s.sourcePointer, `selectedClaims[${r}].sourcePointer`);
  Tr(e.selectedClaims.map((r) => r.id), "selected claim IDs"), Tr(e.selectedClaims.map((r) => r.sourcePointer), "selected claim source pointers");
  for (const [r, s] of e.suppliedEvidence.entries())
    ue(s, `suppliedEvidence[${r}]`);
  Tr(e.suppliedEvidence, "suppliedEvidence"), Cr(e.resolverLimits.maxResources, "resolverLimits.maxResources"), Cr(e.resolverLimits.maxDepth, "resolverLimits.maxDepth"), Cr(e.resolverLimits.maxBytes, "resolverLimits.maxBytes"), e.conformity && (ue(e.conformity.requirementId, "conformity.requirementId"), ue(e.conformity.decisionRuleId, "conformity.decisionRuleId"));
  const t = Object.freeze(e.selectedClaims.map((r) => Object.freeze({
    id: r.id,
    sourcePointer: r.sourcePointer
  }))), n = Object.freeze([...e.suppliedEvidence]), i = Object.freeze({ ...e.resolverLimits }), o = e.conformity ? Object.freeze({ ...e.conformity }) : void 0;
  return Object.freeze({
    requestId: e.requestId,
    targetId: e.targetId,
    selectedClaims: t,
    purpose: e.purpose,
    binding: Xi(e.binding),
    profile: Xi(e.profile),
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
function Tu(e, t) {
  if (ue(e.uri, `resources[${t}].uri`), !/^sha384-[A-Za-z0-9+/]{64}$/.test(e.digestSRI))
    throw new TypeError(`resources[${t}].digestSRI must be a SHA-384 SRI value.`);
  if (!["static", "artifact", "status"].includes(e.kind) || !["catalog", "supplied"].includes(e.source))
    throw new TypeError(`resources[${t}] has an unsupported kind or source.`);
  return Us(e.observedAt, `resources[${t}].observedAt`), Object.freeze({ ...e });
}
function dr(e) {
  if (ue(e.requestId, "requestId"), ue(e.targetId, "targetId"), Wi(e.binding, "binding"), Wi(e.profile, "profile"), e.artifactVerification.forEach((t, n) => ue(t.artifactId, `artifactVerification[${n}].artifactId`)), e.authorization.forEach((t, n) => ue(t.claimId, `authorization[${n}].claimId`)), e.support.forEach((t, n) => ue(t.obligationId, `support[${n}].obligationId`)), e.conformity.requested)
    ue(e.conformity.requirementId, "conformity.requirementId"), ue(e.conformity.decisionRuleId, "conformity.decisionRuleId");
  else if (e.conformity.requested !== !1 || e.conformity.execution !== "not_run")
    throw new TypeError("Unrequested conformity must have execution state not_run.");
  if (!["accept", "reject", "not_established"].includes(e.decision))
    throw new TypeError(`Unsupported reliance decision: ${String(e.decision)}.`);
  return Object.freeze({
    requestId: e.requestId,
    targetId: e.targetId,
    binding: Xi(e.binding),
    profile: Xi(e.profile),
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
    trace: Object.freeze((e.trace ?? []).map(_u)),
    resources: Object.freeze((e.resources ?? []).map(Tu)),
    limitations: Object.freeze([...e.limitations ?? []])
  });
}
function Ld(e, t) {
  if (e.length === 0)
    throw new TypeError(`${t} requires at least one semantic state.`);
  for (const n of e)
    if (!["established", "contradicted", "not_established"].includes(n))
      throw new TypeError(`${t} received unsupported semantic state: ${String(n)}.`);
}
function xe(e) {
  return Ld(e, "semanticAnd"), e.includes("contradicted") ? "contradicted" : e.every((t) => t === "established") ? "established" : "not_established";
}
function hn(e) {
  return Ld(e, "semanticOr"), e.includes("established") ? "established" : e.every((t) => t === "contradicted") ? "contradicted" : "not_established";
}
function ca(e) {
  const t = xe(e);
  return t === "established" ? "accept" : t === "contradicted" ? "reject" : "not_established";
}
var Za = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function da(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Cu(e) {
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
var Zn = { exports: {} }, Er = {}, yt = {}, Vt = {}, kr = {}, Mr = {}, Or = {}, Ha;
function Yi() {
  return Ha || (Ha = 1, (function(e) {
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
    function u(I, g) {
      return g.emptyStr() ? I : I.emptyStr() ? g : s`${I}${g}`;
    }
    e.strConcat = u;
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
    function x(I) {
      return typeof I == "string" && e.IDENTIFIER.test(I) ? new i(`.${I}`) : o`[${I}]`;
    }
    e.getProperty = x;
    function w(I) {
      if (typeof I == "string" && e.IDENTIFIER.test(I))
        return new i(`${I}`);
      throw new Error(`CodeGen: invalid export name: ${I}, use explicit $id name mapping`);
    }
    e.getEsmExportName = w;
    function v(I) {
      return new i(I.toString());
    }
    e.regexpCode = v;
  })(Or)), Or;
}
var Lr = {}, Ja;
function Ka() {
  return Ja || (Ja = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ValueScope = e.ValueScopeName = e.Scope = e.varKinds = e.UsedValueState = void 0;
    const t = /* @__PURE__ */ Yi();
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
      constructor({ prefixes: l, parent: u } = {}) {
        this._names = {}, this._prefixes = l, this._parent = u;
      }
      toName(l) {
        return l instanceof t.Name ? l : this.name(l);
      }
      name(l) {
        return new t.Name(this._newName(l));
      }
      _newName(l) {
        const u = this._names[l] || this._nameGroup(l);
        return `${l}${u.index++}`;
      }
      _nameGroup(l) {
        var u, y;
        if (!((y = (u = this._parent) === null || u === void 0 ? void 0 : u._prefixes) === null || y === void 0) && y.has(l) || this._prefixes && !this._prefixes.has(l))
          throw new Error(`CodeGen: prefix "${l}" is not allowed in this scope`);
        return this._names[l] = { prefix: l, index: 0 };
      }
    }
    e.Scope = o;
    class r extends t.Name {
      constructor(l, u) {
        super(u), this.prefix = l;
      }
      setValue(l, { property: u, itemIndex: y }) {
        this.value = l, this.scopePath = (0, t._)`.${new t.Name(u)}[${y}]`;
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
      value(l, u) {
        var y;
        if (u.ref === void 0)
          throw new Error("CodeGen: ref must be passed in value");
        const f = this.toName(l), { prefix: h } = f, x = (y = u.key) !== null && y !== void 0 ? y : u.ref;
        let w = this._values[h];
        if (w) {
          const g = w.get(x);
          if (g)
            return g;
        } else
          w = this._values[h] = /* @__PURE__ */ new Map();
        w.set(x, f);
        const v = this._scope[h] || (this._scope[h] = []), I = v.length;
        return v[I] = u.ref, f.setValue(u, { property: h, itemIndex: I }), f;
      }
      getValue(l, u) {
        const y = this._values[l];
        if (y)
          return y.get(u);
      }
      scopeRefs(l, u = this._values) {
        return this._reduceValues(u, (y) => {
          if (y.scopePath === void 0)
            throw new Error(`CodeGen: name "${y}" has no value`);
          return (0, t._)`${l}${y.scopePath}`;
        });
      }
      scopeCode(l = this._values, u, y) {
        return this._reduceValues(l, (f) => {
          if (f.value === void 0)
            throw new Error(`CodeGen: name "${f}" has no value`);
          return f.value.code;
        }, u, y);
      }
      _reduceValues(l, u, y = {}, f) {
        let h = t.nil;
        for (const x in l) {
          const w = l[x];
          if (!w)
            continue;
          const v = y[x] = y[x] || /* @__PURE__ */ new Map();
          w.forEach((I) => {
            if (v.has(I))
              return;
            v.set(I, i.Started);
            let g = u(I);
            if (g) {
              const m = this.opts.es5 ? e.varKinds.var : e.varKinds.const;
              h = (0, t._)`${h}${m} ${I} = ${g};${this.opts._n}`;
            } else if (g = f?.(I))
              h = (0, t._)`${h}${g}${this.opts._n}`;
            else
              throw new n(I);
            v.set(I, i.Completed);
          });
        }
        return h;
      }
    }
    e.ValueScope = a;
  })(Lr)), Lr;
}
var Qa;
function te() {
  return Qa || (Qa = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.or = e.and = e.not = e.CodeGen = e.operators = e.varKinds = e.ValueScopeName = e.ValueScope = e.Scope = e.Name = e.regexpCode = e.stringify = e.getProperty = e.nil = e.strConcat = e.str = e._ = void 0;
    const t = /* @__PURE__ */ Yi(), n = /* @__PURE__ */ Ka();
    var i = /* @__PURE__ */ Yi();
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
    var o = /* @__PURE__ */ Ka();
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
    class l extends r {
      constructor($) {
        super(), this.label = $, this.names = {};
      }
      render({ _n: $ }) {
        return `${this.label}:` + $;
      }
    }
    class u extends r {
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
    class x extends h {
      render($) {
        return "{" + $._n + super.render($) + "}" + $._n;
      }
    }
    class w extends h {
    }
    class v extends x {
    }
    v.kind = "else";
    class I extends x {
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
          return $ === !1 ? q instanceof I ? q : q.nodes : this.nodes.length ? this : new I(_($), q instanceof I ? [q] : q.nodes);
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
    I.kind = "if";
    class g extends x {
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
    class d extends g {
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
    class p extends g {
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
    class b extends x {
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
        var C, z;
        return super.optimizeNames($, q), (C = this.catch) === null || C === void 0 || C.optimizeNames($, q), (z = this.finally) === null || z === void 0 || z.optimizeNames($, q), this;
      }
      get names() {
        const $ = super.names;
        return this.catch && k($, this.catch.names), this.finally && k($, this.finally.names), $;
      }
    }
    class P extends x {
      constructor($) {
        super(), this.error = $;
      }
      render($) {
        return `catch(${this.error})` + super.render($);
      }
    }
    P.kind = "catch";
    class R extends x {
      render($) {
        return "finally" + super.render($);
      }
    }
    R.kind = "finally";
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
        if (this._blockNode(new I($)), q && C)
          this.code(q).else().code(C).endIf();
        else if (q)
          this.code(q).endIf();
        else if (C)
          throw new Error('CodeGen: "else" body without "then" body');
        return this;
      }
      // `else if` clause - invalid without `if` or after `else` clauses
      elseIf($) {
        return this._elseNode(new I($));
      }
      // `else` clause - only valid after `if` or `else if` clauses
      else() {
        return this._elseNode(new v());
      }
      // end `if` statement (needed if gen.if was used only with condition)
      endIf() {
        return this._endBlockNode(I, v);
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
        return this._for(new d(H, Q, q, C), () => z(Q));
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
        return this._for(new p("of", z, H, q), () => C(H));
      }
      // `for-in` statement.
      // With option `ownProperties` replaced with a `for-of` loop for object keys
      forIn($, q, C, z = this.opts.es5 ? n.varKinds.var : n.varKinds.const) {
        if (this.opts.ownProperties)
          return this.forOf($, (0, t._)`Object.keys(${q})`, C);
        const H = this._scope.toName($);
        return this._for(new p("in", z, H, q), () => C(H));
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
        return this._leafNode(new u($));
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
        const z = new A();
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
      return typeof D == "boolean" || typeof D == "number" || D === null ? !D : (0, t._)`!${U(D)}`;
    }
    e.not = _;
    const F = O(e.operators.AND);
    function L(...D) {
      return D.reduce(F);
    }
    e.and = L;
    const B = O(e.operators.OR);
    function T(...D) {
      return D.reduce(B);
    }
    e.or = T;
    function O(D) {
      return ($, q) => $ === t.nil ? q : q === t.nil ? $ : (0, t._)`${U($)} ${D} ${U(q)}`;
    }
    function U(D) {
      return D instanceof t.Name ? D : (0, t._)`(${D})`;
    }
  })(Mr)), Mr;
}
var ne = {}, Wa;
function ie() {
  if (Wa) return ne;
  Wa = 1, Object.defineProperty(ne, "__esModule", { value: !0 }), ne.checkStrictMode = ne.getErrorPath = ne.Type = ne.useFunc = ne.setEvaluated = ne.evaluatedPropsToName = ne.mergeEvaluated = ne.eachItem = ne.unescapeJsonPointer = ne.escapeJsonPointer = ne.escapeFragment = ne.unescapeFragment = ne.schemaRefOrVal = ne.schemaHasRulesButRef = ne.schemaHasRules = ne.checkUnknownRules = ne.alwaysValidSchema = ne.toHash = void 0;
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ Yi();
  function n(p) {
    const b = {};
    for (const S of p)
      b[S] = !0;
    return b;
  }
  ne.toHash = n;
  function i(p, b) {
    return typeof b == "boolean" ? b : Object.keys(b).length === 0 ? !0 : (o(p, b), !r(b, p.self.RULES.all));
  }
  ne.alwaysValidSchema = i;
  function o(p, b = p.schema) {
    const { opts: S, self: A } = p;
    if (!S.strictSchema || typeof b == "boolean")
      return;
    const P = A.RULES.keywords;
    for (const R in b)
      P[R] || d(p, `unknown keyword: "${R}"`);
  }
  ne.checkUnknownRules = o;
  function r(p, b) {
    if (typeof p == "boolean")
      return !p;
    for (const S in p)
      if (b[S])
        return !0;
    return !1;
  }
  ne.schemaHasRules = r;
  function s(p, b) {
    if (typeof p == "boolean")
      return !p;
    for (const S in p)
      if (S !== "$ref" && b.all[S])
        return !0;
    return !1;
  }
  ne.schemaHasRulesButRef = s;
  function a({ topSchemaRef: p, schemaPath: b }, S, A, P) {
    if (!P) {
      if (typeof S == "number" || typeof S == "boolean")
        return S;
      if (typeof S == "string")
        return (0, e._)`${S}`;
    }
    return (0, e._)`${p}${b}${(0, e.getProperty)(A)}`;
  }
  ne.schemaRefOrVal = a;
  function c(p) {
    return y(decodeURIComponent(p));
  }
  ne.unescapeFragment = c;
  function l(p) {
    return encodeURIComponent(u(p));
  }
  ne.escapeFragment = l;
  function u(p) {
    return typeof p == "number" ? `${p}` : p.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  ne.escapeJsonPointer = u;
  function y(p) {
    return p.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  ne.unescapeJsonPointer = y;
  function f(p, b) {
    if (Array.isArray(p))
      for (const S of p)
        b(S);
    else
      b(p);
  }
  ne.eachItem = f;
  function h({ mergeNames: p, mergeToName: b, mergeValues: S, resultToName: A }) {
    return (P, R, E, k) => {
      const M = E === void 0 ? R : E instanceof e.Name ? (R instanceof e.Name ? p(P, R, E) : b(P, R, E), E) : R instanceof e.Name ? (b(P, E, R), R) : S(R, E);
      return k === e.Name && !(M instanceof e.Name) ? A(P, M) : M;
    };
  }
  ne.mergeEvaluated = {
    props: h({
      mergeNames: (p, b, S) => p.if((0, e._)`${S} !== true && ${b} !== undefined`, () => {
        p.if((0, e._)`${b} === true`, () => p.assign(S, !0), () => p.assign(S, (0, e._)`${S} || {}`).code((0, e._)`Object.assign(${S}, ${b})`));
      }),
      mergeToName: (p, b, S) => p.if((0, e._)`${S} !== true`, () => {
        b === !0 ? p.assign(S, !0) : (p.assign(S, (0, e._)`${S} || {}`), w(p, S, b));
      }),
      mergeValues: (p, b) => p === !0 ? !0 : { ...p, ...b },
      resultToName: x
    }),
    items: h({
      mergeNames: (p, b, S) => p.if((0, e._)`${S} !== true && ${b} !== undefined`, () => p.assign(S, (0, e._)`${b} === true ? true : ${S} > ${b} ? ${S} : ${b}`)),
      mergeToName: (p, b, S) => p.if((0, e._)`${S} !== true`, () => p.assign(S, b === !0 ? !0 : (0, e._)`${S} > ${b} ? ${S} : ${b}`)),
      mergeValues: (p, b) => p === !0 ? !0 : Math.max(p, b),
      resultToName: (p, b) => p.var("items", b)
    })
  };
  function x(p, b) {
    if (b === !0)
      return p.var("props", !0);
    const S = p.var("props", (0, e._)`{}`);
    return b !== void 0 && w(p, S, b), S;
  }
  ne.evaluatedPropsToName = x;
  function w(p, b, S) {
    Object.keys(S).forEach((A) => p.assign((0, e._)`${b}${(0, e.getProperty)(A)}`, !0));
  }
  ne.setEvaluated = w;
  const v = {};
  function I(p, b) {
    return p.scopeValue("func", {
      ref: b,
      code: v[b.code] || (v[b.code] = new t._Code(b.code))
    });
  }
  ne.useFunc = I;
  var g;
  (function(p) {
    p[p.Num = 0] = "Num", p[p.Str = 1] = "Str";
  })(g || (ne.Type = g = {}));
  function m(p, b, S) {
    if (p instanceof e.Name) {
      const A = b === g.Num;
      return S ? A ? (0, e._)`"[" + ${p} + "]"` : (0, e._)`"['" + ${p} + "']"` : A ? (0, e._)`"/" + ${p}` : (0, e._)`"/" + ${p}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
    }
    return S ? (0, e.getProperty)(p).toString() : "/" + u(p);
  }
  ne.getErrorPath = m;
  function d(p, b, S = p.opts.strictSchema) {
    if (S) {
      if (b = `strict mode: ${b}`, S === !0)
        throw new Error(b);
      p.self.logger.warn(b);
    }
  }
  return ne.checkStrictMode = d, ne;
}
var Hn = {}, Xa;
function et() {
  if (Xa) return Hn;
  Xa = 1, Object.defineProperty(Hn, "__esModule", { value: !0 });
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
  return Hn.default = t, Hn;
}
var Ya;
function lr() {
  return Ya || (Ya = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.extendErrors = e.resetErrorsCount = e.reportExtraError = e.reportError = e.keyword$DataError = e.keywordError = void 0;
    const t = /* @__PURE__ */ te(), n = /* @__PURE__ */ ie(), i = /* @__PURE__ */ et();
    e.keywordError = {
      message: ({ keyword: v }) => (0, t.str)`must pass "${v}" keyword validation`
    }, e.keyword$DataError = {
      message: ({ keyword: v, schemaType: I }) => I ? (0, t.str)`"${v}" keyword must be ${I} ($data)` : (0, t.str)`"${v}" keyword is invalid ($data)`
    };
    function o(v, I = e.keywordError, g, m) {
      const { it: d } = v, { gen: p, compositeRule: b, allErrors: S } = d, A = y(v, I, g);
      m ?? (b || S) ? c(p, A) : l(d, (0, t._)`[${A}]`);
    }
    e.reportError = o;
    function r(v, I = e.keywordError, g) {
      const { it: m } = v, { gen: d, compositeRule: p, allErrors: b } = m, S = y(v, I, g);
      c(d, S), p || b || l(m, i.default.vErrors);
    }
    e.reportExtraError = r;
    function s(v, I) {
      v.assign(i.default.errors, I), v.if((0, t._)`${i.default.vErrors} !== null`, () => v.if(I, () => v.assign((0, t._)`${i.default.vErrors}.length`, I), () => v.assign(i.default.vErrors, null)));
    }
    e.resetErrorsCount = s;
    function a({ gen: v, keyword: I, schemaValue: g, data: m, errsCount: d, it: p }) {
      if (d === void 0)
        throw new Error("ajv implementation error");
      const b = v.name("err");
      v.forRange("i", d, i.default.errors, (S) => {
        v.const(b, (0, t._)`${i.default.vErrors}[${S}]`), v.if((0, t._)`${b}.instancePath === undefined`, () => v.assign((0, t._)`${b}.instancePath`, (0, t.strConcat)(i.default.instancePath, p.errorPath))), v.assign((0, t._)`${b}.schemaPath`, (0, t.str)`${p.errSchemaPath}/${I}`), p.opts.verbose && (v.assign((0, t._)`${b}.schema`, g), v.assign((0, t._)`${b}.data`, m));
      });
    }
    e.extendErrors = a;
    function c(v, I) {
      const g = v.const("err", I);
      v.if((0, t._)`${i.default.vErrors} === null`, () => v.assign(i.default.vErrors, (0, t._)`[${g}]`), (0, t._)`${i.default.vErrors}.push(${g})`), v.code((0, t._)`${i.default.errors}++`);
    }
    function l(v, I) {
      const { gen: g, validateName: m, schemaEnv: d } = v;
      d.$async ? g.throw((0, t._)`new ${v.ValidationError}(${I})`) : (g.assign((0, t._)`${m}.errors`, I), g.return(!1));
    }
    const u = {
      keyword: new t.Name("keyword"),
      schemaPath: new t.Name("schemaPath"),
      // also used in JTD errors
      params: new t.Name("params"),
      propertyName: new t.Name("propertyName"),
      message: new t.Name("message"),
      schema: new t.Name("schema"),
      parentSchema: new t.Name("parentSchema")
    };
    function y(v, I, g) {
      const { createErrors: m } = v.it;
      return m === !1 ? (0, t._)`{}` : f(v, I, g);
    }
    function f(v, I, g = {}) {
      const { gen: m, it: d } = v, p = [
        h(d, g),
        x(v, g)
      ];
      return w(v, I, p), m.object(...p);
    }
    function h({ errorPath: v }, { instancePath: I }) {
      const g = I ? (0, t.str)`${v}${(0, n.getErrorPath)(I, n.Type.Str)}` : v;
      return [i.default.instancePath, (0, t.strConcat)(i.default.instancePath, g)];
    }
    function x({ keyword: v, it: { errSchemaPath: I } }, { schemaPath: g, parentSchema: m }) {
      let d = m ? I : (0, t.str)`${I}/${v}`;
      return g && (d = (0, t.str)`${d}${(0, n.getErrorPath)(g, n.Type.Str)}`), [u.schemaPath, d];
    }
    function w(v, { params: I, message: g }, m) {
      const { keyword: d, data: p, schemaValue: b, it: S } = v, { opts: A, propertyName: P, topSchemaRef: R, schemaPath: E } = S;
      m.push([u.keyword, d], [u.params, typeof I == "function" ? I(v) : I || (0, t._)`{}`]), A.messages && m.push([u.message, typeof g == "function" ? g(v) : g]), A.verbose && m.push([u.schema, b], [u.parentSchema, (0, t._)`${R}${E}`], [i.default.data, p]), P && m.push([u.propertyName, P]);
    }
  })(kr)), kr;
}
var eo;
function Eu() {
  if (eo) return Vt;
  eo = 1, Object.defineProperty(Vt, "__esModule", { value: !0 }), Vt.boolOrEmptySchema = Vt.topBoolOrEmptySchema = void 0;
  const e = /* @__PURE__ */ lr(), t = /* @__PURE__ */ te(), n = /* @__PURE__ */ et(), i = {
    message: "boolean schema is false"
  };
  function o(a) {
    const { gen: c, schema: l, validateName: u } = a;
    l === !1 ? s(a, !1) : typeof l == "object" && l.$async === !0 ? c.return(n.default.data) : (c.assign((0, t._)`${u}.errors`, null), c.return(!0));
  }
  Vt.topBoolOrEmptySchema = o;
  function r(a, c) {
    const { gen: l, schema: u } = a;
    u === !1 ? (l.var(c, !1), s(a)) : l.var(c, !0);
  }
  Vt.boolOrEmptySchema = r;
  function s(a, c) {
    const { gen: l, data: u } = a, y = {
      gen: l,
      keyword: "false schema",
      data: u,
      schema: !1,
      schemaCode: !1,
      schemaValue: !1,
      params: {},
      it: a
    };
    (0, e.reportError)(y, i, void 0, c);
  }
  return Vt;
}
var be = {}, Ft = {}, to;
function Nd() {
  if (to) return Ft;
  to = 1, Object.defineProperty(Ft, "__esModule", { value: !0 }), Ft.getRules = Ft.isJSONType = void 0;
  const e = ["string", "number", "integer", "boolean", "null", "object", "array"], t = new Set(e);
  function n(o) {
    return typeof o == "string" && t.has(o);
  }
  Ft.isJSONType = n;
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
  return Ft.getRules = i, Ft;
}
var gt = {}, no;
function Dd() {
  if (no) return gt;
  no = 1, Object.defineProperty(gt, "__esModule", { value: !0 }), gt.shouldUseRule = gt.shouldUseGroup = gt.schemaHasRulesForType = void 0;
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
var io;
function er() {
  if (io) return be;
  io = 1, Object.defineProperty(be, "__esModule", { value: !0 }), be.reportTypeError = be.checkDataTypes = be.checkDataType = be.coerceAndCheckDataType = be.getJSONTypes = be.getSchemaTypes = be.DataType = void 0;
  const e = /* @__PURE__ */ Nd(), t = /* @__PURE__ */ Dd(), n = /* @__PURE__ */ lr(), i = /* @__PURE__ */ te(), o = /* @__PURE__ */ ie();
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
    const { gen: d, data: p, opts: b } = g, S = u(m, b.coerceTypes), A = m.length > 0 && !(S.length === 0 && m.length === 1 && (0, t.schemaHasRulesForType)(g, m[0]));
    if (A) {
      const P = x(m, p, b.strictNumbers, r.Wrong);
      d.if(P, () => {
        S.length ? y(g, m, S) : v(g);
      });
    }
    return A;
  }
  be.coerceAndCheckDataType = c;
  const l = /* @__PURE__ */ new Set(["string", "number", "integer", "boolean", "null"]);
  function u(g, m) {
    return m ? g.filter((d) => l.has(d) || m === "array" && d === "array") : [];
  }
  function y(g, m, d) {
    const { gen: p, data: b, opts: S } = g, A = p.let("dataType", (0, i._)`typeof ${b}`), P = p.let("coerced", (0, i._)`undefined`);
    S.coerceTypes === "array" && p.if((0, i._)`${A} == 'object' && Array.isArray(${b}) && ${b}.length == 1`, () => p.assign(b, (0, i._)`${b}[0]`).assign(A, (0, i._)`typeof ${b}`).if(x(m, b, S.strictNumbers), () => p.assign(P, b))), p.if((0, i._)`${P} !== undefined`);
    for (const E of d)
      (l.has(E) || E === "array" && S.coerceTypes === "array") && R(E);
    p.else(), v(g), p.endIf(), p.if((0, i._)`${P} !== undefined`, () => {
      p.assign(b, P), f(g, P);
    });
    function R(E) {
      switch (E) {
        case "string":
          p.elseIf((0, i._)`${A} == "number" || ${A} == "boolean"`).assign(P, (0, i._)`"" + ${b}`).elseIf((0, i._)`${b} === null`).assign(P, (0, i._)`""`);
          return;
        case "number":
          p.elseIf((0, i._)`${A} == "boolean" || ${b} === null
              || (${A} == "string" && ${b} && ${b} == +${b})`).assign(P, (0, i._)`+${b}`);
          return;
        case "integer":
          p.elseIf((0, i._)`${A} === "boolean" || ${b} === null
              || (${A} === "string" && ${b} && ${b} == +${b} && !(${b} % 1))`).assign(P, (0, i._)`+${b}`);
          return;
        case "boolean":
          p.elseIf((0, i._)`${b} === "false" || ${b} === 0 || ${b} === null`).assign(P, !1).elseIf((0, i._)`${b} === "true" || ${b} === 1`).assign(P, !0);
          return;
        case "null":
          p.elseIf((0, i._)`${b} === "" || ${b} === 0 || ${b} === false`), p.assign(P, null);
          return;
        case "array":
          p.elseIf((0, i._)`${A} === "string" || ${A} === "number"
              || ${A} === "boolean" || ${b} === null`).assign(P, (0, i._)`[${b}]`);
      }
    }
  }
  function f({ gen: g, parentData: m, parentDataProperty: d }, p) {
    g.if((0, i._)`${m} !== undefined`, () => g.assign((0, i._)`${m}[${d}]`, p));
  }
  function h(g, m, d, p = r.Correct) {
    const b = p === r.Correct ? i.operators.EQ : i.operators.NEQ;
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
        S = A((0, i._)`!(${m} % 1) && !isNaN(${m})`);
        break;
      case "number":
        S = A();
        break;
      default:
        return (0, i._)`typeof ${m} ${b} ${g}`;
    }
    return p === r.Correct ? S : (0, i.not)(S);
    function A(P = i.nil) {
      return (0, i.and)((0, i._)`typeof ${m} == "number"`, P, d ? (0, i._)`isFinite(${m})` : i.nil);
    }
  }
  be.checkDataType = h;
  function x(g, m, d, p) {
    if (g.length === 1)
      return h(g[0], m, d, p);
    let b;
    const S = (0, o.toHash)(g);
    if (S.array && S.object) {
      const A = (0, i._)`typeof ${m} != "object"`;
      b = S.null ? A : (0, i._)`!${m} || ${A}`, delete S.null, delete S.array, delete S.object;
    } else
      b = i.nil;
    S.number && delete S.integer;
    for (const A in S)
      b = (0, i.and)(b, h(A, m, d, p));
    return b;
  }
  be.checkDataTypes = x;
  const w = {
    message: ({ schema: g }) => `must be ${g}`,
    params: ({ schema: g, schemaValue: m }) => typeof g == "string" ? (0, i._)`{type: ${g}}` : (0, i._)`{type: ${m}}`
  };
  function v(g) {
    const m = I(g);
    (0, n.reportError)(m, w);
  }
  be.reportTypeError = v;
  function I(g) {
    const { gen: m, data: d, schema: p } = g, b = (0, o.schemaRefOrVal)(g, p, "type");
    return {
      gen: m,
      keyword: "type",
      data: d,
      schema: p.type,
      schemaCode: b,
      schemaValue: b,
      parentSchema: p,
      params: {},
      it: g
    };
  }
  return be;
}
var yn = {}, ro;
function ku() {
  if (ro) return yn;
  ro = 1, Object.defineProperty(yn, "__esModule", { value: !0 }), yn.assignDefaults = void 0;
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ ie();
  function n(o, r) {
    const { properties: s, items: a } = o.schema;
    if (r === "object" && s)
      for (const c in s)
        i(o, c, s[c].default);
    else r === "array" && Array.isArray(a) && a.forEach((c, l) => i(o, l, c.default));
  }
  yn.assignDefaults = n;
  function i(o, r, s) {
    const { gen: a, compositeRule: c, data: l, opts: u } = o;
    if (s === void 0)
      return;
    const y = (0, e._)`${l}${(0, e.getProperty)(r)}`;
    if (c) {
      (0, t.checkStrictMode)(o, `default is ignored for: ${y}`);
      return;
    }
    let f = (0, e._)`${y} === undefined`;
    u.useDefaults === "empty" && (f = (0, e._)`${f} || ${y} === null || ${y} === ""`), a.if(f, (0, e._)`${y} = ${(0, e.stringify)(s)}`);
  }
  return yn;
}
var Ke = {}, ae = {}, so;
function tt() {
  if (so) return ae;
  so = 1, Object.defineProperty(ae, "__esModule", { value: !0 }), ae.validateUnion = ae.validateArray = ae.usePattern = ae.callValidateCode = ae.schemaProperties = ae.allSchemaProperties = ae.noPropertyInData = ae.propertyInData = ae.isOwnProperty = ae.hasPropFunc = ae.reportMissingProp = ae.checkMissingProp = ae.checkReportMissingProp = void 0;
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ et(), i = /* @__PURE__ */ ie();
  function o(g, m) {
    const { gen: d, data: p, it: b } = g;
    d.if(u(d, p, m, b.opts.ownProperties), () => {
      g.setParams({ missingProperty: (0, e._)`${m}` }, !0), g.error();
    });
  }
  ae.checkReportMissingProp = o;
  function r({ gen: g, data: m, it: { opts: d } }, p, b) {
    return (0, e.or)(...p.map((S) => (0, e.and)(u(g, m, S, d.ownProperties), (0, e._)`${b} = ${S}`)));
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
  function l(g, m, d, p) {
    const b = (0, e._)`${m}${(0, e.getProperty)(d)} !== undefined`;
    return p ? (0, e._)`${b} && ${c(g, m, d)}` : b;
  }
  ae.propertyInData = l;
  function u(g, m, d, p) {
    const b = (0, e._)`${m}${(0, e.getProperty)(d)} === undefined`;
    return p ? (0, e.or)(b, (0, e.not)(c(g, m, d))) : b;
  }
  ae.noPropertyInData = u;
  function y(g) {
    return g ? Object.keys(g).filter((m) => m !== "__proto__") : [];
  }
  ae.allSchemaProperties = y;
  function f(g, m) {
    return y(m).filter((d) => !(0, t.alwaysValidSchema)(g, m[d]));
  }
  ae.schemaProperties = f;
  function h({ schemaCode: g, data: m, it: { gen: d, topSchemaRef: p, schemaPath: b, errorPath: S }, it: A }, P, R, E) {
    const k = E ? (0, e._)`${g}, ${m}, ${p}${b}` : m, M = [
      [n.default.instancePath, (0, e.strConcat)(n.default.instancePath, S)],
      [n.default.parentData, A.parentData],
      [n.default.parentDataProperty, A.parentDataProperty],
      [n.default.rootData, n.default.rootData]
    ];
    A.opts.dynamicRef && M.push([n.default.dynamicAnchors, n.default.dynamicAnchors]);
    const j = (0, e._)`${k}, ${d.object(...M)}`;
    return R !== e.nil ? (0, e._)`${P}.call(${R}, ${j})` : (0, e._)`${P}(${j})`;
  }
  ae.callValidateCode = h;
  const x = (0, e._)`new RegExp`;
  function w({ gen: g, it: { opts: m } }, d) {
    const p = m.unicodeRegExp ? "u" : "", { regExp: b } = m.code, S = b(d, p);
    return g.scopeValue("pattern", {
      key: S.toString(),
      ref: S,
      code: (0, e._)`${b.code === "new RegExp" ? x : (0, i.useFunc)(g, b)}(${d}, ${p})`
    });
  }
  ae.usePattern = w;
  function v(g) {
    const { gen: m, data: d, keyword: p, it: b } = g, S = m.name("valid");
    if (b.allErrors) {
      const P = m.let("valid", !0);
      return A(() => m.assign(P, !1)), P;
    }
    return m.var(S, !0), A(() => m.break()), S;
    function A(P) {
      const R = m.const("len", (0, e._)`${d}.length`);
      m.forRange("i", 0, R, (E) => {
        g.subschema({
          keyword: p,
          dataProp: E,
          dataPropType: t.Type.Num
        }, S), m.if((0, e.not)(S), P);
      });
    }
  }
  ae.validateArray = v;
  function I(g) {
    const { gen: m, schema: d, keyword: p, it: b } = g;
    if (!Array.isArray(d))
      throw new Error("ajv implementation error");
    if (d.some((R) => (0, t.alwaysValidSchema)(b, R)) && !b.opts.unevaluated)
      return;
    const A = m.let("valid", !1), P = m.name("_valid");
    m.block(() => d.forEach((R, E) => {
      const k = g.subschema({
        keyword: p,
        schemaProp: E,
        compositeRule: !0
      }, P);
      m.assign(A, (0, e._)`${A} || ${P}`), g.mergeValidEvaluated(k, P) || m.if((0, e.not)(A));
    })), g.result(A, () => g.reset(), () => g.error(!0));
  }
  return ae.validateUnion = I, ae;
}
var ao;
function Mu() {
  if (ao) return Ke;
  ao = 1, Object.defineProperty(Ke, "__esModule", { value: !0 }), Ke.validateKeywordUsage = Ke.validSchemaType = Ke.funcKeywordCode = Ke.macroKeywordCode = void 0;
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ et(), n = /* @__PURE__ */ tt(), i = /* @__PURE__ */ lr();
  function o(f, h) {
    const { gen: x, keyword: w, schema: v, parentSchema: I, it: g } = f, m = h.macro.call(g.self, v, I, g), d = l(x, w, m);
    g.opts.validateSchema !== !1 && g.self.validateSchema(m, !0);
    const p = x.name("valid");
    f.subschema({
      schema: m,
      schemaPath: e.nil,
      errSchemaPath: `${g.errSchemaPath}/${w}`,
      topSchemaRef: d,
      compositeRule: !0
    }, p), f.pass(p, () => f.error(!0));
  }
  Ke.macroKeywordCode = o;
  function r(f, h) {
    var x;
    const { gen: w, keyword: v, schema: I, parentSchema: g, $data: m, it: d } = f;
    c(d, h);
    const p = !m && h.compile ? h.compile.call(d.self, I, g, d) : h.validate, b = l(w, v, p), S = w.let("valid");
    f.block$data(S, A), f.ok((x = h.valid) !== null && x !== void 0 ? x : S);
    function A() {
      if (h.errors === !1)
        E(), h.modifying && s(f), k(() => f.error());
      else {
        const M = h.async ? P() : R();
        h.modifying && s(f), k(() => a(f, M));
      }
    }
    function P() {
      const M = w.let("ruleErrs", null);
      return w.try(() => E((0, e._)`await `), (j) => w.assign(S, !1).if((0, e._)`${j} instanceof ${d.ValidationError}`, () => w.assign(M, (0, e._)`${j}.errors`), () => w.throw(j))), M;
    }
    function R() {
      const M = (0, e._)`${b}.errors`;
      return w.assign(M, null), E(e.nil), M;
    }
    function E(M = h.async ? (0, e._)`await ` : e.nil) {
      const j = d.opts.passContext ? t.default.this : t.default.self, N = !("compile" in h && !m || h.schema === !1);
      w.assign(S, (0, e._)`${M}${(0, n.callValidateCode)(f, b, j, N)}`, h.modifying);
    }
    function k(M) {
      var j;
      w.if((0, e.not)((j = h.valid) !== null && j !== void 0 ? j : S), M);
    }
  }
  Ke.funcKeywordCode = r;
  function s(f) {
    const { gen: h, data: x, it: w } = f;
    h.if(w.parentData, () => h.assign(x, (0, e._)`${w.parentData}[${w.parentDataProperty}]`));
  }
  function a(f, h) {
    const { gen: x } = f;
    x.if((0, e._)`Array.isArray(${h})`, () => {
      x.assign(t.default.vErrors, (0, e._)`${t.default.vErrors} === null ? ${h} : ${t.default.vErrors}.concat(${h})`).assign(t.default.errors, (0, e._)`${t.default.vErrors}.length`), (0, i.extendErrors)(f);
    }, () => f.error());
  }
  function c({ schemaEnv: f }, h) {
    if (h.async && !f.$async)
      throw new Error("async keyword in sync schema");
  }
  function l(f, h, x) {
    if (x === void 0)
      throw new Error(`keyword "${h}" failed to compile`);
    return f.scopeValue("keyword", typeof x == "function" ? { ref: x } : { ref: x, code: (0, e.stringify)(x) });
  }
  function u(f, h, x = !1) {
    return !h.length || h.some((w) => w === "array" ? Array.isArray(f) : w === "object" ? f && typeof f == "object" && !Array.isArray(f) : typeof f == w || x && typeof f > "u");
  }
  Ke.validSchemaType = u;
  function y({ schema: f, opts: h, self: x, errSchemaPath: w }, v, I) {
    if (Array.isArray(v.keyword) ? !v.keyword.includes(I) : v.keyword !== I)
      throw new Error("ajv implementation error");
    const g = v.dependencies;
    if (g?.some((m) => !Object.prototype.hasOwnProperty.call(f, m)))
      throw new Error(`parent schema must have dependencies of ${I}: ${g.join(",")}`);
    if (v.validateSchema && !v.validateSchema(f[I])) {
      const d = `keyword "${I}" value is invalid at path "${w}": ` + x.errorsText(v.validateSchema.errors);
      if (h.validateSchema === "log")
        x.logger.error(d);
      else
        throw new Error(d);
    }
  }
  return Ke.validateKeywordUsage = y, Ke;
}
var vt = {}, oo;
function Ou() {
  if (oo) return vt;
  oo = 1, Object.defineProperty(vt, "__esModule", { value: !0 }), vt.extendSubschemaMode = vt.extendSubschemaData = vt.getSubschema = void 0;
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ ie();
  function n(r, { keyword: s, schemaProp: a, schema: c, schemaPath: l, errSchemaPath: u, topSchemaRef: y }) {
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
      if (l === void 0 || u === void 0 || y === void 0)
        throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');
      return {
        schema: c,
        schemaPath: l,
        topSchemaRef: y,
        errSchemaPath: u
      };
    }
    throw new Error('either "keyword" or "schema" must be passed');
  }
  vt.getSubschema = n;
  function i(r, s, { dataProp: a, dataPropType: c, data: l, dataTypes: u, propertyName: y }) {
    if (l !== void 0 && a !== void 0)
      throw new Error('both "data" and "dataProp" passed, only one allowed');
    const { gen: f } = s;
    if (a !== void 0) {
      const { errorPath: x, dataPathArr: w, opts: v } = s, I = f.let("data", (0, e._)`${s.data}${(0, e.getProperty)(a)}`, !0);
      h(I), r.errorPath = (0, e.str)`${x}${(0, t.getErrorPath)(a, c, v.jsPropertySyntax)}`, r.parentDataProperty = (0, e._)`${a}`, r.dataPathArr = [...w, r.parentDataProperty];
    }
    if (l !== void 0) {
      const x = l instanceof e.Name ? l : f.let("data", l, !0);
      h(x), y !== void 0 && (r.propertyName = y);
    }
    u && (r.dataTypes = u);
    function h(x) {
      r.data = x, r.dataLevel = s.dataLevel + 1, r.dataTypes = [], s.definedProperties = /* @__PURE__ */ new Set(), r.parentData = s.data, r.dataNames = [...s.dataNames, x];
    }
  }
  vt.extendSubschemaData = i;
  function o(r, { jtdDiscriminator: s, jtdMetadata: a, compositeRule: c, createErrors: l, allErrors: u }) {
    c !== void 0 && (r.compositeRule = c), l !== void 0 && (r.createErrors = l), u !== void 0 && (r.allErrors = u), r.jtdDiscriminator = s, r.jtdMetadata = a;
  }
  return vt.extendSubschemaMode = o, vt;
}
var je = {}, Nr, co;
function zd() {
  return co || (co = 1, Nr = function e(t, n) {
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
  }), Nr;
}
var Dr = { exports: {} }, lo;
function Lu() {
  if (lo) return Dr.exports;
  lo = 1;
  var e = Dr.exports = function(i, o, r) {
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
  function t(i, o, r, s, a, c, l, u, y, f) {
    if (s && typeof s == "object" && !Array.isArray(s)) {
      o(s, a, c, l, u, y, f);
      for (var h in s) {
        var x = s[h];
        if (Array.isArray(x)) {
          if (h in e.arrayKeywords)
            for (var w = 0; w < x.length; w++)
              t(i, o, r, x[w], a + "/" + h + "/" + w, c, a, h, s, w);
        } else if (h in e.propsKeywords) {
          if (x && typeof x == "object")
            for (var v in x)
              t(i, o, r, x[v], a + "/" + h + "/" + n(v), c, a, h, s, v);
        } else (h in e.keywords || i.allKeys && !(h in e.skipKeywords)) && t(i, o, r, x, a + "/" + h, c, a, h, s);
      }
      r(s, a, c, l, u, y, f);
    }
  }
  function n(i) {
    return i.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  return Dr.exports;
}
var uo;
function ur() {
  if (uo) return je;
  uo = 1, Object.defineProperty(je, "__esModule", { value: !0 }), je.getSchemaRefs = je.resolveUrl = je.normalizeId = je._getFullPath = je.getFullPath = je.inlineRef = void 0;
  const e = /* @__PURE__ */ ie(), t = zd(), n = Lu(), i = /* @__PURE__ */ new Set([
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
  function o(w, v = !0) {
    return typeof w == "boolean" ? !0 : v === !0 ? !s(w) : v ? a(w) <= v : !1;
  }
  je.inlineRef = o;
  const r = /* @__PURE__ */ new Set([
    "$ref",
    "$recursiveRef",
    "$recursiveAnchor",
    "$dynamicRef",
    "$dynamicAnchor"
  ]);
  function s(w) {
    for (const v in w) {
      if (r.has(v))
        return !0;
      const I = w[v];
      if (Array.isArray(I) && I.some(s) || typeof I == "object" && s(I))
        return !0;
    }
    return !1;
  }
  function a(w) {
    let v = 0;
    for (const I in w) {
      if (I === "$ref")
        return 1 / 0;
      if (v++, !i.has(I) && (typeof w[I] == "object" && (0, e.eachItem)(w[I], (g) => v += a(g)), v === 1 / 0))
        return 1 / 0;
    }
    return v;
  }
  function c(w, v = "", I) {
    I !== !1 && (v = y(v));
    const g = w.parse(v);
    return l(w, g);
  }
  je.getFullPath = c;
  function l(w, v) {
    return w.serialize(v).split("#")[0] + "#";
  }
  je._getFullPath = l;
  const u = /#\/?$/;
  function y(w) {
    return w ? w.replace(u, "") : "";
  }
  je.normalizeId = y;
  function f(w, v, I) {
    return I = y(I), w.resolve(v, I);
  }
  je.resolveUrl = f;
  const h = /^[a-z_][-a-z0-9._]*$/i;
  function x(w, v) {
    if (typeof w == "boolean")
      return {};
    const { schemaId: I, uriResolver: g } = this.opts, m = y(w[I] || v), d = { "": m }, p = c(g, m, !1), b = {}, S = /* @__PURE__ */ new Set();
    return n(w, { allKeys: !0 }, (R, E, k, M) => {
      if (M === void 0)
        return;
      const j = p + E;
      let N = d[M];
      typeof R[I] == "string" && (N = _.call(this, R[I])), F.call(this, R.$anchor), F.call(this, R.$dynamicAnchor), d[E] = N;
      function _(L) {
        const B = this.opts.uriResolver.resolve;
        if (L = y(N ? B(N, L) : L), S.has(L))
          throw P(L);
        S.add(L);
        let T = this.refs[L];
        return typeof T == "string" && (T = this.refs[T]), typeof T == "object" ? A(R, T.schema, L) : L !== y(j) && (L[0] === "#" ? (A(R, b[L], L), b[L] = R) : this.refs[L] = j), L;
      }
      function F(L) {
        if (typeof L == "string") {
          if (!h.test(L))
            throw new Error(`invalid anchor "${L}"`);
          _.call(this, `#${L}`);
        }
      }
    }), b;
    function A(R, E, k) {
      if (E !== void 0 && !t(R, E))
        throw P(k);
    }
    function P(R) {
      return new Error(`reference "${R}" resolves to more than one schema`);
    }
  }
  return je.getSchemaRefs = x, je;
}
var po;
function Mn() {
  if (po) return yt;
  po = 1, Object.defineProperty(yt, "__esModule", { value: !0 }), yt.getData = yt.KeywordCxt = yt.validateFunctionCode = void 0;
  const e = /* @__PURE__ */ Eu(), t = /* @__PURE__ */ er(), n = /* @__PURE__ */ Dd(), i = /* @__PURE__ */ er(), o = /* @__PURE__ */ ku(), r = /* @__PURE__ */ Mu(), s = /* @__PURE__ */ Ou(), a = /* @__PURE__ */ te(), c = /* @__PURE__ */ et(), l = /* @__PURE__ */ ur(), u = /* @__PURE__ */ ie(), y = /* @__PURE__ */ lr();
  function f(V) {
    if (p(V) && (S(V), d(V))) {
      v(V);
      return;
    }
    h(V, () => (0, e.topBoolOrEmptySchema)(V));
  }
  yt.validateFunctionCode = f;
  function h({ gen: V, validateName: G, schema: Z, schemaEnv: K, opts: W }, ee) {
    W.code.es5 ? V.func(G, (0, a._)`${c.default.data}, ${c.default.valCxt}`, K.$async, () => {
      V.code((0, a._)`"use strict"; ${g(Z, W)}`), w(V, W), V.code(ee);
    }) : V.func(G, (0, a._)`${c.default.data}, ${x(W)}`, K.$async, () => V.code(g(Z, W)).code(ee));
  }
  function x(V) {
    return (0, a._)`{${c.default.instancePath}="", ${c.default.parentData}, ${c.default.parentDataProperty}, ${c.default.rootData}=${c.default.data}${V.dynamicRef ? (0, a._)`, ${c.default.dynamicAnchors}={}` : a.nil}}={}`;
  }
  function w(V, G) {
    V.if(c.default.valCxt, () => {
      V.var(c.default.instancePath, (0, a._)`${c.default.valCxt}.${c.default.instancePath}`), V.var(c.default.parentData, (0, a._)`${c.default.valCxt}.${c.default.parentData}`), V.var(c.default.parentDataProperty, (0, a._)`${c.default.valCxt}.${c.default.parentDataProperty}`), V.var(c.default.rootData, (0, a._)`${c.default.valCxt}.${c.default.rootData}`), G.dynamicRef && V.var(c.default.dynamicAnchors, (0, a._)`${c.default.valCxt}.${c.default.dynamicAnchors}`);
    }, () => {
      V.var(c.default.instancePath, (0, a._)`""`), V.var(c.default.parentData, (0, a._)`undefined`), V.var(c.default.parentDataProperty, (0, a._)`undefined`), V.var(c.default.rootData, c.default.data), G.dynamicRef && V.var(c.default.dynamicAnchors, (0, a._)`{}`);
    });
  }
  function v(V) {
    const { schema: G, opts: Z, gen: K } = V;
    h(V, () => {
      Z.$comment && G.$comment && M(V), R(V), K.let(c.default.vErrors, null), K.let(c.default.errors, 0), Z.unevaluated && I(V), A(V), j(V);
    });
  }
  function I(V) {
    const { gen: G, validateName: Z } = V;
    V.evaluated = G.const("evaluated", (0, a._)`${Z}.evaluated`), G.if((0, a._)`${V.evaluated}.dynamicProps`, () => G.assign((0, a._)`${V.evaluated}.props`, (0, a._)`undefined`)), G.if((0, a._)`${V.evaluated}.dynamicItems`, () => G.assign((0, a._)`${V.evaluated}.items`, (0, a._)`undefined`));
  }
  function g(V, G) {
    const Z = typeof V == "object" && V[G.schemaId];
    return Z && (G.code.source || G.code.process) ? (0, a._)`/*# sourceURL=${Z} */` : a.nil;
  }
  function m(V, G) {
    if (p(V) && (S(V), d(V))) {
      b(V, G);
      return;
    }
    (0, e.boolOrEmptySchema)(V, G);
  }
  function d({ schema: V, self: G }) {
    if (typeof V == "boolean")
      return !V;
    for (const Z in V)
      if (G.RULES.all[Z])
        return !0;
    return !1;
  }
  function p(V) {
    return typeof V.schema != "boolean";
  }
  function b(V, G) {
    const { schema: Z, gen: K, opts: W } = V;
    W.$comment && Z.$comment && M(V), E(V), k(V);
    const ee = K.const("_errs", c.default.errors);
    A(V, ee), K.var(G, (0, a._)`${ee} === ${c.default.errors}`);
  }
  function S(V) {
    (0, u.checkUnknownRules)(V), P(V);
  }
  function A(V, G) {
    if (V.opts.jtd)
      return _(V, [], !1, G);
    const Z = (0, t.getSchemaTypes)(V.schema), K = (0, t.coerceAndCheckDataType)(V, Z);
    _(V, Z, !K, G);
  }
  function P(V) {
    const { schema: G, errSchemaPath: Z, opts: K, self: W } = V;
    G.$ref && K.ignoreKeywordsWithRef && (0, u.schemaHasRulesButRef)(G, W.RULES) && W.logger.warn(`$ref: keywords ignored in schema at path "${Z}"`);
  }
  function R(V) {
    const { schema: G, opts: Z } = V;
    G.default !== void 0 && Z.useDefaults && Z.strictSchema && (0, u.checkStrictMode)(V, "default is ignored in the schema root");
  }
  function E(V) {
    const G = V.schema[V.opts.schemaId];
    G && (V.baseId = (0, l.resolveUrl)(V.opts.uriResolver, V.baseId, G));
  }
  function k(V) {
    if (V.schema.$async && !V.schemaEnv.$async)
      throw new Error("async schema in sync schema");
  }
  function M({ gen: V, schemaEnv: G, schema: Z, errSchemaPath: K, opts: W }) {
    const ee = Z.$comment;
    if (W.$comment === !0)
      V.code((0, a._)`${c.default.self}.logger.log(${ee})`);
    else if (typeof W.$comment == "function") {
      const re = (0, a.str)`${K}/$comment`, Se = V.scopeValue("root", { ref: G.root });
      V.code((0, a._)`${c.default.self}.opts.$comment(${ee}, ${re}, ${Se}.schema)`);
    }
  }
  function j(V) {
    const { gen: G, schemaEnv: Z, validateName: K, ValidationError: W, opts: ee } = V;
    Z.$async ? G.if((0, a._)`${c.default.errors} === 0`, () => G.return(c.default.data), () => G.throw((0, a._)`new ${W}(${c.default.vErrors})`)) : (G.assign((0, a._)`${K}.errors`, c.default.vErrors), ee.unevaluated && N(V), G.return((0, a._)`${c.default.errors} === 0`));
  }
  function N({ gen: V, evaluated: G, props: Z, items: K }) {
    Z instanceof a.Name && V.assign((0, a._)`${G}.props`, Z), K instanceof a.Name && V.assign((0, a._)`${G}.items`, K);
  }
  function _(V, G, Z, K) {
    const { gen: W, schema: ee, data: re, allErrors: Se, opts: me, self: ge } = V, { RULES: fe } = ge;
    if (ee.$ref && (me.ignoreKeywordsWithRef || !(0, u.schemaHasRulesButRef)(ee, fe))) {
      W.block(() => z(V, "$ref", fe.all.$ref.definition));
      return;
    }
    me.jtd || L(V, G), W.block(() => {
      for (const De of fe.rules)
        nt(De);
      nt(fe.post);
    });
    function nt(De) {
      (0, n.shouldUseGroup)(ee, De) && (De.type ? (W.if((0, i.checkDataType)(De.type, re, me.strictNumbers)), F(V, De), G.length === 1 && G[0] === De.type && Z && (W.else(), (0, i.reportTypeError)(V)), W.endIf()) : F(V, De), Se || W.if((0, a._)`${c.default.errors} === ${K || 0}`));
    }
  }
  function F(V, G) {
    const { gen: Z, schema: K, opts: { useDefaults: W } } = V;
    W && (0, o.assignDefaults)(V, G.type), Z.block(() => {
      for (const ee of G.rules)
        (0, n.shouldUseRule)(K, ee) && z(V, ee.keyword, ee.definition, G.type);
    });
  }
  function L(V, G) {
    V.schemaEnv.meta || !V.opts.strictTypes || (B(V, G), V.opts.allowUnionTypes || T(V, G), O(V, V.dataTypes));
  }
  function B(V, G) {
    if (G.length) {
      if (!V.dataTypes.length) {
        V.dataTypes = G;
        return;
      }
      G.forEach((Z) => {
        D(V.dataTypes, Z) || q(V, `type "${Z}" not allowed by context "${V.dataTypes.join(",")}"`);
      }), $(V, G);
    }
  }
  function T(V, G) {
    G.length > 1 && !(G.length === 2 && G.includes("null")) && q(V, "use allowUnionTypes to allow union type keyword");
  }
  function O(V, G) {
    const Z = V.self.RULES.all;
    for (const K in Z) {
      const W = Z[K];
      if (typeof W == "object" && (0, n.shouldUseRule)(V.schema, W)) {
        const { type: ee } = W.definition;
        ee.length && !ee.some((re) => U(G, re)) && q(V, `missing type "${ee.join(",")}" for keyword "${K}"`);
      }
    }
  }
  function U(V, G) {
    return V.includes(G) || G === "number" && V.includes("integer");
  }
  function D(V, G) {
    return V.includes(G) || G === "integer" && V.includes("number");
  }
  function $(V, G) {
    const Z = [];
    for (const K of V.dataTypes)
      D(G, K) ? Z.push(K) : G.includes("integer") && K === "number" && Z.push("integer");
    V.dataTypes = Z;
  }
  function q(V, G) {
    const Z = V.schemaEnv.baseId + V.errSchemaPath;
    G += ` at "${Z}" (strictTypes)`, (0, u.checkStrictMode)(V, G, V.opts.strictTypes);
  }
  class C {
    constructor(G, Z, K) {
      if ((0, r.validateKeywordUsage)(G, Z, K), this.gen = G.gen, this.allErrors = G.allErrors, this.keyword = K, this.data = G.data, this.schema = G.schema[K], this.$data = Z.$data && G.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, u.schemaRefOrVal)(G, this.schema, K, this.$data), this.schemaType = Z.schemaType, this.parentSchema = G.schema, this.params = {}, this.it = G, this.def = Z, this.$data)
        this.schemaCode = G.gen.const("vSchema", J(this.$data, G));
      else if (this.schemaCode = this.schemaValue, !(0, r.validSchemaType)(this.schema, Z.schemaType, Z.allowUndefined))
        throw new Error(`${K} value must be ${JSON.stringify(Z.schemaType)}`);
      ("code" in Z ? Z.trackErrors : Z.errors !== !1) && (this.errsCount = G.gen.const("_errs", c.default.errors));
    }
    result(G, Z, K) {
      this.failResult((0, a.not)(G), Z, K);
    }
    failResult(G, Z, K) {
      this.gen.if(G), K ? K() : this.error(), Z ? (this.gen.else(), Z(), this.allErrors && this.gen.endIf()) : this.allErrors ? this.gen.endIf() : this.gen.else();
    }
    pass(G, Z) {
      this.failResult((0, a.not)(G), void 0, Z);
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
      const { schemaCode: Z } = this;
      this.fail((0, a._)`${Z} !== undefined && (${(0, a.or)(this.invalid$data(), G)})`);
    }
    error(G, Z, K) {
      if (Z) {
        this.setParams(Z), this._error(G, K), this.setParams({});
        return;
      }
      this._error(G, K);
    }
    _error(G, Z) {
      (G ? y.reportExtraError : y.reportError)(this, this.def.error, Z);
    }
    $dataError() {
      (0, y.reportError)(this, this.def.$dataError || y.keyword$DataError);
    }
    reset() {
      if (this.errsCount === void 0)
        throw new Error('add "trackErrors" to keyword definition');
      (0, y.resetErrorsCount)(this.gen, this.errsCount);
    }
    ok(G) {
      this.allErrors || this.gen.if(G);
    }
    setParams(G, Z) {
      Z ? Object.assign(this.params, G) : this.params = G;
    }
    block$data(G, Z, K = a.nil) {
      this.gen.block(() => {
        this.check$data(G, K), Z();
      });
    }
    check$data(G = a.nil, Z = a.nil) {
      if (!this.$data)
        return;
      const { gen: K, schemaCode: W, schemaType: ee, def: re } = this;
      K.if((0, a.or)((0, a._)`${W} === undefined`, Z)), G !== a.nil && K.assign(G, !0), (ee.length || re.validateSchema) && (K.elseIf(this.invalid$data()), this.$dataError(), G !== a.nil && K.assign(G, !1)), K.else();
    }
    invalid$data() {
      const { gen: G, schemaCode: Z, schemaType: K, def: W, it: ee } = this;
      return (0, a.or)(re(), Se());
      function re() {
        if (K.length) {
          if (!(Z instanceof a.Name))
            throw new Error("ajv implementation error");
          const me = Array.isArray(K) ? K : [K];
          return (0, a._)`${(0, i.checkDataTypes)(me, Z, ee.opts.strictNumbers, i.DataType.Wrong)}`;
        }
        return a.nil;
      }
      function Se() {
        if (W.validateSchema) {
          const me = G.scopeValue("validate$data", { ref: W.validateSchema });
          return (0, a._)`!${me}(${Z})`;
        }
        return a.nil;
      }
    }
    subschema(G, Z) {
      const K = (0, s.getSubschema)(this.it, G);
      (0, s.extendSubschemaData)(K, this.it, G), (0, s.extendSubschemaMode)(K, G);
      const W = { ...this.it, ...K, items: void 0, props: void 0 };
      return m(W, Z), W;
    }
    mergeEvaluated(G, Z) {
      const { it: K, gen: W } = this;
      K.opts.unevaluated && (K.props !== !0 && G.props !== void 0 && (K.props = u.mergeEvaluated.props(W, G.props, K.props, Z)), K.items !== !0 && G.items !== void 0 && (K.items = u.mergeEvaluated.items(W, G.items, K.items, Z)));
    }
    mergeValidEvaluated(G, Z) {
      const { it: K, gen: W } = this;
      if (K.opts.unevaluated && (K.props !== !0 || K.items !== !0))
        return W.if(Z, () => this.mergeEvaluated(G, a.Name)), !0;
    }
  }
  yt.KeywordCxt = C;
  function z(V, G, Z, K) {
    const W = new C(V, Z, G);
    "code" in Z ? Z.code(W, K) : W.$data && Z.validate ? (0, r.funcKeywordCode)(W, Z) : "macro" in Z ? (0, r.macroKeywordCode)(W, Z) : (Z.compile || Z.validate) && (0, r.funcKeywordCode)(W, Z);
  }
  const H = /^\/(?:[^~]|~0|~1)*$/, Q = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function J(V, { dataLevel: G, dataNames: Z, dataPathArr: K }) {
    let W, ee;
    if (V === "")
      return c.default.rootData;
    if (V[0] === "/") {
      if (!H.test(V))
        throw new Error(`Invalid JSON-pointer: ${V}`);
      W = V, ee = c.default.rootData;
    } else {
      const ge = Q.exec(V);
      if (!ge)
        throw new Error(`Invalid JSON-pointer: ${V}`);
      const fe = +ge[1];
      if (W = ge[2], W === "#") {
        if (fe >= G)
          throw new Error(me("property/index", fe));
        return K[G - fe];
      }
      if (fe > G)
        throw new Error(me("data", fe));
      if (ee = Z[G - fe], !W)
        return ee;
    }
    let re = ee;
    const Se = W.split("/");
    for (const ge of Se)
      ge && (ee = (0, a._)`${ee}${(0, a.getProperty)((0, u.unescapeJsonPointer)(ge))}`, re = (0, a._)`${re} && ${ee}`);
    return re;
    function me(ge, fe) {
      return `Cannot access ${ge} ${fe} levels up, current level is ${G}`;
    }
  }
  return yt.getData = J, yt;
}
var Jn = {}, fo;
function pr() {
  if (fo) return Jn;
  fo = 1, Object.defineProperty(Jn, "__esModule", { value: !0 });
  class e extends Error {
    constructor(n) {
      super("validation failed"), this.errors = n, this.ajv = this.validation = !0;
    }
  }
  return Jn.default = e, Jn;
}
var Kn = {}, ho;
function On() {
  if (ho) return Kn;
  ho = 1, Object.defineProperty(Kn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ur();
  class t extends Error {
    constructor(i, o, r, s) {
      super(s || `can't resolve reference ${r} from id ${o}`), this.missingRef = (0, e.resolveUrl)(i, o, r), this.missingSchema = (0, e.normalizeId)((0, e.getFullPath)(i, this.missingRef));
    }
  }
  return Kn.default = t, Kn;
}
var ke = {}, mo;
function fr() {
  if (mo) return ke;
  mo = 1, Object.defineProperty(ke, "__esModule", { value: !0 }), ke.resolveSchema = ke.getCompilingSchema = ke.resolveRef = ke.compileSchema = ke.SchemaEnv = void 0;
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ pr(), n = /* @__PURE__ */ et(), i = /* @__PURE__ */ ur(), o = /* @__PURE__ */ ie(), r = /* @__PURE__ */ Mn();
  class s {
    constructor(I) {
      var g;
      this.refs = {}, this.dynamicAnchors = {};
      let m;
      typeof I.schema == "object" && (m = I.schema), this.schema = I.schema, this.schemaId = I.schemaId, this.root = I.root || this, this.baseId = (g = I.baseId) !== null && g !== void 0 ? g : (0, i.normalizeId)(m?.[I.schemaId || "$id"]), this.schemaPath = I.schemaPath, this.localRefs = I.localRefs, this.meta = I.meta, this.$async = m?.$async, this.refs = {};
    }
  }
  ke.SchemaEnv = s;
  function a(v) {
    const I = u.call(this, v);
    if (I)
      return I;
    const g = (0, i.getFullPath)(this.opts.uriResolver, v.root.baseId), { es5: m, lines: d } = this.opts.code, { ownProperties: p } = this.opts, b = new e.CodeGen(this.scope, { es5: m, lines: d, ownProperties: p });
    let S;
    v.$async && (S = b.scopeValue("Error", {
      ref: t.default,
      code: (0, e._)`require("ajv/dist/runtime/validation_error").default`
    }));
    const A = b.scopeName("validate");
    v.validateName = A;
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
      validateName: A,
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
      if (this.scope.value(A, { ref: M }), M.errors = null, M.schema = v.schema, M.schemaEnv = v, v.$async && (M.$async = !0), this.opts.code.source === !0 && (M.source = { validateName: A, validateCode: E, scopeValues: b._values }), this.opts.unevaluated) {
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
  ke.compileSchema = a;
  function c(v, I, g) {
    var m;
    g = (0, i.resolveUrl)(this.opts.uriResolver, I, g);
    const d = v.refs[g];
    if (d)
      return d;
    let p = f.call(this, v, g);
    if (p === void 0) {
      const b = (m = v.localRefs) === null || m === void 0 ? void 0 : m[g], { schemaId: S } = this.opts;
      b && (p = new s({ schema: b, schemaId: S, root: v, baseId: I }));
    }
    if (p !== void 0)
      return v.refs[g] = l.call(this, p);
  }
  ke.resolveRef = c;
  function l(v) {
    return (0, i.inlineRef)(v.schema, this.opts.inlineRefs) ? v.schema : v.validate ? v : a.call(this, v);
  }
  function u(v) {
    for (const I of this._compilations)
      if (y(I, v))
        return I;
  }
  ke.getCompilingSchema = u;
  function y(v, I) {
    return v.schema === I.schema && v.root === I.root && v.baseId === I.baseId;
  }
  function f(v, I) {
    let g;
    for (; typeof (g = this.refs[I]) == "string"; )
      I = g;
    return g || this.schemas[I] || h.call(this, v, I);
  }
  function h(v, I) {
    const g = this.opts.uriResolver.parse(I), m = (0, i._getFullPath)(this.opts.uriResolver, g);
    let d = (0, i.getFullPath)(this.opts.uriResolver, v.baseId, void 0);
    if (Object.keys(v.schema).length > 0 && m === d)
      return w.call(this, g, v);
    const p = (0, i.normalizeId)(m), b = this.refs[p] || this.schemas[p];
    if (typeof b == "string") {
      const S = h.call(this, v, b);
      return typeof S?.schema != "object" ? void 0 : w.call(this, g, S);
    }
    if (typeof b?.schema == "object") {
      if (b.validate || a.call(this, b), p === (0, i.normalizeId)(I)) {
        const { schema: S } = b, { schemaId: A } = this.opts, P = S[A];
        return P && (d = (0, i.resolveUrl)(this.opts.uriResolver, d, P)), new s({ schema: S, schemaId: A, root: v, baseId: d });
      }
      return w.call(this, g, b);
    }
  }
  ke.resolveSchema = h;
  const x = /* @__PURE__ */ new Set([
    "properties",
    "patternProperties",
    "enum",
    "dependencies",
    "definitions"
  ]);
  function w(v, { baseId: I, schema: g, root: m }) {
    var d;
    if (((d = v.fragment) === null || d === void 0 ? void 0 : d[0]) !== "/")
      return;
    for (const S of v.fragment.slice(1).split("/")) {
      if (typeof g == "boolean")
        return;
      const A = g[(0, o.unescapeFragment)(S)];
      if (A === void 0)
        return;
      g = A;
      const P = typeof g == "object" && g[this.opts.schemaId];
      !x.has(S) && P && (I = (0, i.resolveUrl)(this.opts.uriResolver, I, P));
    }
    let p;
    if (typeof g != "boolean" && g.$ref && !(0, o.schemaHasRulesButRef)(g, this.RULES)) {
      const S = (0, i.resolveUrl)(this.opts.uriResolver, I, g.$ref);
      p = h.call(this, m, S);
    }
    const { schemaId: b } = this.opts;
    if (p = p || new s({ schema: g, schemaId: b, root: m, baseId: I }), p.schema !== p.root.schema)
      return p;
  }
  return ke;
}
const Nu = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", Du = "Meta-schema for $data reference (JSON AnySchema extension proposal)", zu = "object", Uu = ["$data"], Vu = { $data: { type: "string", anyOf: [{ format: "relative-json-pointer" }, { format: "json-pointer" }] } }, Fu = !1, Gu = {
  $id: Nu,
  description: Du,
  type: zu,
  required: Uu,
  properties: Vu,
  additionalProperties: Fu
};
var Qn = {}, gn = { exports: {} }, zr, yo;
function Ud() {
  if (yo) return zr;
  yo = 1;
  const e = RegExp.prototype.test.bind(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu), t = RegExp.prototype.test.bind(/^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u);
  function n(f) {
    let h = "", x = 0, w = 0;
    for (w = 0; w < f.length; w++)
      if (x = f[w].charCodeAt(0), x !== 48) {
        if (!(x >= 48 && x <= 57 || x >= 65 && x <= 70 || x >= 97 && x <= 102))
          return "";
        h += f[w];
        break;
      }
    for (w += 1; w < f.length; w++) {
      if (x = f[w].charCodeAt(0), !(x >= 48 && x <= 57 || x >= 65 && x <= 70 || x >= 97 && x <= 102))
        return "";
      h += f[w];
    }
    return h;
  }
  const i = RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u);
  function o(f) {
    return f.length = 0, !0;
  }
  function r(f, h, x) {
    if (f.length) {
      const w = n(f);
      if (w !== "")
        h.push(w);
      else
        return x.error = !0, !1;
      f.length = 0;
    }
    return !0;
  }
  function s(f) {
    let h = 0;
    const x = { error: !1, address: "", zone: "" }, w = [], v = [];
    let I = !1, g = !1, m = r;
    for (let d = 0; d < f.length; d++) {
      const p = f[d];
      if (!(p === "[" || p === "]"))
        if (p === ":") {
          if (I === !0 && (g = !0), !m(v, w, x))
            break;
          if (++h > 7) {
            x.error = !0;
            break;
          }
          d > 0 && f[d - 1] === ":" && (I = !0), w.push(":");
          continue;
        } else if (p === "%") {
          if (!m(v, w, x))
            break;
          m = o;
        } else {
          v.push(p);
          continue;
        }
    }
    return v.length && (m === o ? x.zone = v.join("") : g ? w.push(v.join("")) : w.push(n(v))), x.address = w.join(""), x;
  }
  function a(f) {
    if (c(f, ":") < 2)
      return { host: f, isIPV6: !1 };
    const h = s(f);
    if (h.error)
      return { host: f, isIPV6: !1 };
    {
      let x = h.address, w = h.address;
      return h.zone && (x += "%" + h.zone, w += "%25" + h.zone), { host: x, isIPV6: !0, escapedHost: w };
    }
  }
  function c(f, h) {
    let x = 0;
    for (let w = 0; w < f.length; w++)
      f[w] === h && x++;
    return x;
  }
  function l(f) {
    let h = f;
    const x = [];
    let w = -1, v = 0;
    for (; v = h.length; ) {
      if (v === 1) {
        if (h === ".")
          break;
        if (h === "/") {
          x.push("/");
          break;
        } else {
          x.push(h);
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
          x.push("/");
          break;
        }
      } else if (v === 3 && h === "/..") {
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
  function u(f, h) {
    const x = h !== !0 ? escape : unescape;
    return f.scheme !== void 0 && (f.scheme = x(f.scheme)), f.userinfo !== void 0 && (f.userinfo = x(f.userinfo)), f.host !== void 0 && (f.host = x(f.host)), f.path !== void 0 && (f.path = x(f.path)), f.query !== void 0 && (f.query = x(f.query)), f.fragment !== void 0 && (f.fragment = x(f.fragment)), f;
  }
  function y(f) {
    const h = [];
    if (f.userinfo !== void 0 && (h.push(f.userinfo), h.push("@")), f.host !== void 0) {
      let x = unescape(f.host);
      if (!t(x)) {
        const w = a(x);
        w.isIPV6 === !0 ? x = `[${w.escapedHost}]` : x = f.host;
      }
      h.push(x);
    }
    return (typeof f.port == "number" || typeof f.port == "string") && (h.push(":"), h.push(String(f.port))), h.length ? h.join("") : void 0;
  }
  return zr = {
    nonSimpleDomain: i,
    recomposeAuthority: y,
    normalizeComponentEncoding: u,
    removeDotSegments: l,
    isIPv4: t,
    isUUID: e,
    normalizeIPv6: a,
    stringArrayToHexStripped: n
  }, zr;
}
var Ur, go;
function Bu() {
  if (go) return Ur;
  go = 1;
  const { isUUID: e } = Ud(), t = /([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu, n = (
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
  function i(p) {
    return n.indexOf(
      /** @type {*} */
      p
    ) !== -1;
  }
  function o(p) {
    return p.secure === !0 ? !0 : p.secure === !1 ? !1 : p.scheme ? p.scheme.length === 3 && (p.scheme[0] === "w" || p.scheme[0] === "W") && (p.scheme[1] === "s" || p.scheme[1] === "S") && (p.scheme[2] === "s" || p.scheme[2] === "S") : !1;
  }
  function r(p) {
    return p.host || (p.error = p.error || "HTTP URIs must have a host."), p;
  }
  function s(p) {
    const b = String(p.scheme).toLowerCase() === "https";
    return (p.port === (b ? 443 : 80) || p.port === "") && (p.port = void 0), p.path || (p.path = "/"), p;
  }
  function a(p) {
    return p.secure = o(p), p.resourceName = (p.path || "/") + (p.query ? "?" + p.query : ""), p.path = void 0, p.query = void 0, p;
  }
  function c(p) {
    if ((p.port === (o(p) ? 443 : 80) || p.port === "") && (p.port = void 0), typeof p.secure == "boolean" && (p.scheme = p.secure ? "wss" : "ws", p.secure = void 0), p.resourceName) {
      const [b, S] = p.resourceName.split("?");
      p.path = b && b !== "/" ? b : void 0, p.query = S, p.resourceName = void 0;
    }
    return p.fragment = void 0, p;
  }
  function l(p, b) {
    if (!p.path)
      return p.error = "URN can not be parsed", p;
    const S = p.path.match(t);
    if (S) {
      const A = b.scheme || p.scheme || "urn";
      p.nid = S[1].toLowerCase(), p.nss = S[2];
      const P = `${A}:${b.nid || p.nid}`, R = d(P);
      p.path = void 0, R && (p = R.parse(p, b));
    } else
      p.error = p.error || "URN can not be parsed.";
    return p;
  }
  function u(p, b) {
    if (p.nid === void 0)
      throw new Error("URN without nid cannot be serialized");
    const S = b.scheme || p.scheme || "urn", A = p.nid.toLowerCase(), P = `${S}:${b.nid || A}`, R = d(P);
    R && (p = R.serialize(p, b));
    const E = p, k = p.nss;
    return E.path = `${A || b.nid}:${k}`, b.skipEscape = !0, E;
  }
  function y(p, b) {
    const S = p;
    return S.uuid = S.nss, S.nss = void 0, !b.tolerant && (!S.uuid || !e(S.uuid)) && (S.error = S.error || "UUID is not valid."), S;
  }
  function f(p) {
    const b = p;
    return b.nss = (p.uuid || "").toLowerCase(), b;
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
  ), v = (
    /** @type {SchemeHandler} */
    {
      scheme: "wss",
      domainHost: w.domainHost,
      parse: w.parse,
      serialize: w.serialize
    }
  ), m = (
    /** @type {Record<SchemeName, SchemeHandler>} */
    {
      http: h,
      https: x,
      ws: w,
      wss: v,
      urn: (
        /** @type {SchemeHandler} */
        {
          scheme: "urn",
          parse: l,
          serialize: u,
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
  function d(p) {
    return p && (m[
      /** @type {SchemeName} */
      p
    ] || m[
      /** @type {SchemeName} */
      p.toLowerCase()
    ]) || void 0;
  }
  return Ur = {
    wsIsSecure: o,
    SCHEMES: m,
    isValidSchemeName: i,
    getSchemeHandler: d
  }, Ur;
}
var vo;
function Zu() {
  if (vo) return gn.exports;
  vo = 1;
  const { normalizeIPv6: e, removeDotSegments: t, recomposeAuthority: n, normalizeComponentEncoding: i, isIPv4: o, nonSimpleDomain: r } = Ud(), { SCHEMES: s, getSchemeHandler: a } = Bu();
  function c(v, I) {
    return typeof v == "string" ? v = /** @type {T} */
    f(x(v, I), I) : typeof v == "object" && (v = /** @type {T} */
    x(f(v, I), I)), v;
  }
  function l(v, I, g) {
    const m = g ? Object.assign({ scheme: "null" }, g) : { scheme: "null" }, d = u(x(v, m), x(I, m), m, !0);
    return m.skipEscape = !0, f(d, m);
  }
  function u(v, I, g, m) {
    const d = {};
    return m || (v = x(f(v, g), g), I = x(f(I, g), g)), g = g || {}, !g.tolerant && I.scheme ? (d.scheme = I.scheme, d.userinfo = I.userinfo, d.host = I.host, d.port = I.port, d.path = t(I.path || ""), d.query = I.query) : (I.userinfo !== void 0 || I.host !== void 0 || I.port !== void 0 ? (d.userinfo = I.userinfo, d.host = I.host, d.port = I.port, d.path = t(I.path || ""), d.query = I.query) : (I.path ? (I.path[0] === "/" ? d.path = t(I.path) : ((v.userinfo !== void 0 || v.host !== void 0 || v.port !== void 0) && !v.path ? d.path = "/" + I.path : v.path ? d.path = v.path.slice(0, v.path.lastIndexOf("/") + 1) + I.path : d.path = I.path, d.path = t(d.path)), d.query = I.query) : (d.path = v.path, I.query !== void 0 ? d.query = I.query : d.query = v.query), d.userinfo = v.userinfo, d.host = v.host, d.port = v.port), d.scheme = v.scheme), d.fragment = I.fragment, d;
  }
  function y(v, I, g) {
    return typeof v == "string" ? (v = unescape(v), v = f(i(x(v, g), !0), { ...g, skipEscape: !0 })) : typeof v == "object" && (v = f(i(v, !0), { ...g, skipEscape: !0 })), typeof I == "string" ? (I = unescape(I), I = f(i(x(I, g), !0), { ...g, skipEscape: !0 })) : typeof I == "object" && (I = f(i(I, !0), { ...g, skipEscape: !0 })), v.toLowerCase() === I.toLowerCase();
  }
  function f(v, I) {
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
    }, m = Object.assign({}, I), d = [], p = a(m.scheme || g.scheme);
    p && p.serialize && p.serialize(g, m), g.path !== void 0 && (m.skipEscape ? g.path = unescape(g.path) : (g.path = escape(g.path), g.scheme !== void 0 && (g.path = g.path.split("%3A").join(":")))), m.reference !== "suffix" && g.scheme && d.push(g.scheme, ":");
    const b = n(g);
    if (b !== void 0 && (m.reference !== "suffix" && d.push("//"), d.push(b), g.path && g.path[0] !== "/" && d.push("/")), g.path !== void 0) {
      let S = g.path;
      !m.absolutePath && (!p || !p.absolutePath) && (S = t(S)), b === void 0 && S[0] === "/" && S[1] === "/" && (S = "/%2F" + S.slice(2)), d.push(S);
    }
    return g.query !== void 0 && d.push("?", g.query), g.fragment !== void 0 && d.push("#", g.fragment), d.join("");
  }
  const h = /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u;
  function x(v, I) {
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
    g.reference === "suffix" && (g.scheme ? v = g.scheme + ":" + v : v = "//" + v);
    const p = v.match(h);
    if (p) {
      if (m.scheme = p[1], m.userinfo = p[3], m.host = p[4], m.port = parseInt(p[5], 10), m.path = p[6] || "", m.query = p[7], m.fragment = p[8], isNaN(m.port) && (m.port = p[5]), m.host)
        if (o(m.host) === !1) {
          const A = e(m.host);
          m.host = A.host.toLowerCase(), d = A.isIPV6;
        } else
          d = !0;
      m.scheme === void 0 && m.userinfo === void 0 && m.host === void 0 && m.port === void 0 && m.query === void 0 && !m.path ? m.reference = "same-document" : m.scheme === void 0 ? m.reference = "relative" : m.fragment === void 0 ? m.reference = "absolute" : m.reference = "uri", g.reference && g.reference !== "suffix" && g.reference !== m.reference && (m.error = m.error || "URI is not a " + g.reference + " reference.");
      const b = a(g.scheme || m.scheme);
      if (!g.unicodeSupport && (!b || !b.unicodeSupport) && m.host && (g.domainHost || b && b.domainHost) && d === !1 && r(m.host))
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
  const w = {
    SCHEMES: s,
    normalize: c,
    resolve: l,
    resolveComponent: u,
    equal: y,
    serialize: f,
    parse: x
  };
  return gn.exports = w, gn.exports.default = w, gn.exports.fastUri = w, gn.exports;
}
var bo;
function Hu() {
  if (bo) return Qn;
  bo = 1, Object.defineProperty(Qn, "__esModule", { value: !0 });
  const e = Zu();
  return e.code = 'require("ajv/dist/runtime/uri").default', Qn.default = e, Qn;
}
var wo;
function Vd() {
  return wo || (wo = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CodeGen = e.Name = e.nil = e.stringify = e.str = e._ = e.KeywordCxt = void 0;
    var t = /* @__PURE__ */ Mn();
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
    const i = /* @__PURE__ */ pr(), o = /* @__PURE__ */ On(), r = /* @__PURE__ */ Nd(), s = /* @__PURE__ */ fr(), a = /* @__PURE__ */ te(), c = /* @__PURE__ */ ur(), l = /* @__PURE__ */ er(), u = /* @__PURE__ */ ie(), y = Gu, f = /* @__PURE__ */ Hu(), h = (T, O) => new RegExp(T, O);
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
    }, I = {
      ignoreKeywordsWithRef: "",
      jsPropertySyntax: "",
      unicode: '"minLength"/"maxLength" account for unicode characters by default.'
    }, g = 200;
    function m(T) {
      var O, U, D, $, q, C, z, H, Q, J, V, G, Z, K, W, ee, re, Se, me, ge, fe, nt, De, Ar, qr;
      const mn = T.strict, Rr = (O = T.code) === null || O === void 0 ? void 0 : O.optimize, ka = Rr === !0 || Rr === void 0 ? 1 : Rr || 0, Ma = (D = (U = T.code) === null || U === void 0 ? void 0 : U.regExp) !== null && D !== void 0 ? D : h, Dl = ($ = T.uriResolver) !== null && $ !== void 0 ? $ : f.default;
      return {
        strictSchema: (C = (q = T.strictSchema) !== null && q !== void 0 ? q : mn) !== null && C !== void 0 ? C : !0,
        strictNumbers: (H = (z = T.strictNumbers) !== null && z !== void 0 ? z : mn) !== null && H !== void 0 ? H : !0,
        strictTypes: (J = (Q = T.strictTypes) !== null && Q !== void 0 ? Q : mn) !== null && J !== void 0 ? J : "log",
        strictTuples: (G = (V = T.strictTuples) !== null && V !== void 0 ? V : mn) !== null && G !== void 0 ? G : "log",
        strictRequired: (K = (Z = T.strictRequired) !== null && Z !== void 0 ? Z : mn) !== null && K !== void 0 ? K : !1,
        code: T.code ? { ...T.code, optimize: ka, regExp: Ma } : { optimize: ka, regExp: Ma },
        loopRequired: (W = T.loopRequired) !== null && W !== void 0 ? W : g,
        loopEnum: (ee = T.loopEnum) !== null && ee !== void 0 ? ee : g,
        meta: (re = T.meta) !== null && re !== void 0 ? re : !0,
        messages: (Se = T.messages) !== null && Se !== void 0 ? Se : !0,
        inlineRefs: (me = T.inlineRefs) !== null && me !== void 0 ? me : !0,
        schemaId: (ge = T.schemaId) !== null && ge !== void 0 ? ge : "$id",
        addUsedSchema: (fe = T.addUsedSchema) !== null && fe !== void 0 ? fe : !0,
        validateSchema: (nt = T.validateSchema) !== null && nt !== void 0 ? nt : !0,
        validateFormats: (De = T.validateFormats) !== null && De !== void 0 ? De : !0,
        unicodeRegExp: (Ar = T.unicodeRegExp) !== null && Ar !== void 0 ? Ar : !0,
        int32range: (qr = T.int32range) !== null && qr !== void 0 ? qr : !0,
        uriResolver: Dl
      };
    }
    class d {
      constructor(O = {}) {
        this.schemas = {}, this.refs = {}, this.formats = /* @__PURE__ */ Object.create(null), this._compilations = /* @__PURE__ */ new Set(), this._loading = {}, this._cache = /* @__PURE__ */ new Map(), O = this.opts = { ...O, ...m(O) };
        const { es5: U, lines: D } = this.opts.code;
        this.scope = new a.ValueScope({ scope: {}, prefixes: w, es5: U, lines: D }), this.logger = k(O.logger);
        const $ = O.validateFormats;
        O.validateFormats = !1, this.RULES = (0, r.getRules)(), p.call(this, v, O, "NOT SUPPORTED"), p.call(this, I, O, "DEPRECATED", "warn"), this._metaOpts = R.call(this), O.formats && A.call(this), this._addVocabularies(), this._addDefaultMetaSchema(), O.keywords && P.call(this, O.keywords), typeof O.meta == "object" && this.addMetaSchema(O.meta), S.call(this), O.validateFormats = $;
      }
      _addVocabularies() {
        this.addKeyword("$async");
      }
      _addDefaultMetaSchema() {
        const { $data: O, meta: U, schemaId: D } = this.opts;
        let $ = y;
        D === "id" && ($ = { ...y }, $.id = $.$id, delete $.$id), U && O && this.addMetaSchema($, $[D], !1);
      }
      defaultMeta() {
        const { meta: O, schemaId: U } = this.opts;
        return this.opts.defaultMeta = typeof O == "object" ? O[U] || O : void 0;
      }
      validate(O, U) {
        let D;
        if (typeof O == "string") {
          if (D = this.getSchema(O), !D)
            throw new Error(`no schema with key or ref "${O}"`);
        } else
          D = this.compile(O);
        const $ = D(U);
        return "$async" in D || (this.errors = D.errors), $;
      }
      compile(O, U) {
        const D = this._addSchema(O, U);
        return D.validate || this._compileSchemaEnv(D);
      }
      compileAsync(O, U) {
        if (typeof this.opts.loadSchema != "function")
          throw new Error("options.loadSchema should be a function");
        const { loadSchema: D } = this.opts;
        return $.call(this, O, U);
        async function $(J, V) {
          await q.call(this, J.$schema);
          const G = this._addSchema(J, V);
          return G.validate || C.call(this, G);
        }
        async function q(J) {
          J && !this.getSchema(J) && await $.call(this, { $ref: J }, !0);
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
            return await (this._loading[J] = D(J));
          } finally {
            delete this._loading[J];
          }
        }
      }
      // Adds schema to the instance
      addSchema(O, U, D, $ = this.opts.validateSchema) {
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
        return U = (0, c.normalizeId)(U || q), this._checkUnique(U), this.schemas[U] = this._addSchema(O, D, U, $, !0), this;
      }
      // Add schema that will be used to validate other schemas
      // options in META_IGNORE_OPTIONS are alway set to false
      addMetaSchema(O, U, D = this.opts.validateSchema) {
        return this.addSchema(O, U, !0, D), this;
      }
      //  Validate schema against its meta-schema
      validateSchema(O, U) {
        if (typeof O == "boolean")
          return !0;
        let D;
        if (D = O.$schema, D !== void 0 && typeof D != "string")
          throw new Error("$schema must be a string");
        if (D = D || this.opts.defaultMeta || this.defaultMeta(), !D)
          return this.logger.warn("meta-schema not available"), this.errors = null, !0;
        const $ = this.validate(D, O);
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
      getSchema(O) {
        let U;
        for (; typeof (U = b.call(this, O)) == "string"; )
          O = U;
        if (U === void 0) {
          const { schemaId: D } = this.opts, $ = new s.SchemaEnv({ schema: {}, schemaId: D });
          if (U = s.resolveSchema.call(this, $, O), !U)
            return;
          this.refs[O] = U;
        }
        return U.validate || this._compileSchemaEnv(U);
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
            const U = b.call(this, O);
            return typeof U == "object" && this._cache.delete(U.schema), delete this.schemas[O], delete this.refs[O], this;
          }
          case "object": {
            const U = O;
            this._cache.delete(U);
            let D = O[this.opts.schemaId];
            return D && (D = (0, c.normalizeId)(D), delete this.schemas[D], delete this.refs[D]), this;
          }
          default:
            throw new Error("ajv.removeSchema: invalid parameter");
        }
      }
      // add "vocabulary" - a collection of keywords
      addVocabulary(O) {
        for (const U of O)
          this.addKeyword(U);
        return this;
      }
      addKeyword(O, U) {
        let D;
        if (typeof O == "string")
          D = O, typeof U == "object" && (this.logger.warn("these parameters are deprecated, see docs for addKeyword"), U.keyword = D);
        else if (typeof O == "object" && U === void 0) {
          if (U = O, D = U.keyword, Array.isArray(D) && !D.length)
            throw new Error("addKeywords: keyword must be string or non-empty array");
        } else
          throw new Error("invalid addKeywords parameters");
        if (j.call(this, D, U), !U)
          return (0, u.eachItem)(D, (q) => N.call(this, q)), this;
        F.call(this, U);
        const $ = {
          ...U,
          type: (0, l.getJSONTypes)(U.type),
          schemaType: (0, l.getJSONTypes)(U.schemaType)
        };
        return (0, u.eachItem)(D, $.type.length === 0 ? (q) => N.call(this, q, $) : (q) => $.type.forEach((C) => N.call(this, q, $, C))), this;
      }
      getKeyword(O) {
        const U = this.RULES.all[O];
        return typeof U == "object" ? U.definition : !!U;
      }
      // Remove keyword
      removeKeyword(O) {
        const { RULES: U } = this;
        delete U.keywords[O], delete U.all[O];
        for (const D of U.rules) {
          const $ = D.rules.findIndex((q) => q.keyword === O);
          $ >= 0 && D.rules.splice($, 1);
        }
        return this;
      }
      // Add format
      addFormat(O, U) {
        return typeof U == "string" && (U = new RegExp(U)), this.formats[O] = U, this;
      }
      errorsText(O = this.errors, { separator: U = ", ", dataVar: D = "data" } = {}) {
        return !O || O.length === 0 ? "No errors" : O.map(($) => `${D}${$.instancePath} ${$.message}`).reduce(($, q) => $ + U + q);
      }
      $dataMetaSchema(O, U) {
        const D = this.RULES.all;
        O = JSON.parse(JSON.stringify(O));
        for (const $ of U) {
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
      _removeAllSchemas(O, U) {
        for (const D in O) {
          const $ = O[D];
          (!U || U.test(D)) && (typeof $ == "string" ? delete O[D] : $ && !$.meta && (this._cache.delete($.schema), delete O[D]));
        }
      }
      _addSchema(O, U, D, $ = this.opts.validateSchema, q = this.opts.addUsedSchema) {
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
        return H = new s.SchemaEnv({ schema: O, schemaId: z, meta: U, baseId: D, localRefs: Q }), this._cache.set(H.schema, H), q && !D.startsWith("#") && (D && this._checkUnique(D), this.refs[D] = H), $ && this.validateSchema(O, !0), H;
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
        const U = this.opts;
        this.opts = this._metaOpts;
        try {
          s.compileSchema.call(this, O);
        } finally {
          this.opts = U;
        }
      }
    }
    d.ValidationError = i.default, d.MissingRefError = o.default, e.default = d;
    function p(T, O, U, D = "error") {
      for (const $ in T) {
        const q = $;
        q in O && this.logger[D](`${U}: option ${$}. ${T[q]}`);
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
    function A() {
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
        const U = T[O];
        U.keyword || (U.keyword = O), this.addKeyword(U);
      }
    }
    function R() {
      const T = { ...this.opts };
      for (const O of x)
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
      const { RULES: U } = this;
      if ((0, u.eachItem)(T, (D) => {
        if (U.keywords[D])
          throw new Error(`Keyword ${D} is already defined`);
        if (!M.test(D))
          throw new Error(`Keyword ${D} has invalid name`);
      }), !!O && O.$data && !("code" in O || "validate" in O))
        throw new Error('$data keyword must have "code" or "validate" function');
    }
    function N(T, O, U) {
      var D;
      const $ = O?.post;
      if (U && $)
        throw new Error('keyword with "post" flag cannot have "type"');
      const { RULES: q } = this;
      let C = $ ? q.post : q.rules.find(({ type: H }) => H === U);
      if (C || (C = { type: U, rules: [] }, q.rules.push(C)), q.keywords[T] = !0, !O)
        return;
      const z = {
        keyword: T,
        definition: {
          ...O,
          type: (0, l.getJSONTypes)(O.type),
          schemaType: (0, l.getJSONTypes)(O.schemaType)
        }
      };
      O.before ? _.call(this, C, z, O.before) : C.rules.push(z), q.all[T] = z, (D = O.implements) === null || D === void 0 || D.forEach((H) => this.addKeyword(H));
    }
    function _(T, O, U) {
      const D = T.rules.findIndex(($) => $.keyword === U);
      D >= 0 ? T.rules.splice(D, 0, O) : (T.rules.push(O), this.logger.warn(`rule ${U} is not defined`));
    }
    function F(T) {
      let { metaSchema: O } = T;
      O !== void 0 && (T.$data && this.opts.$data && (O = B(O)), T.validateSchema = this.compile(O, !0));
    }
    const L = {
      $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
    };
    function B(T) {
      return { anyOf: [T, L] };
    }
  })(Er)), Er;
}
var Wn = {}, Xn = {}, Yn = {}, xo;
function Ju() {
  if (xo) return Yn;
  xo = 1, Object.defineProperty(Yn, "__esModule", { value: !0 });
  const e = {
    keyword: "id",
    code() {
      throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
    }
  };
  return Yn.default = e, Yn;
}
var _t = {}, So;
function la() {
  if (So) return _t;
  So = 1, Object.defineProperty(_t, "__esModule", { value: !0 }), _t.callRef = _t.getValidate = void 0;
  const e = /* @__PURE__ */ On(), t = /* @__PURE__ */ tt(), n = /* @__PURE__ */ te(), i = /* @__PURE__ */ et(), o = /* @__PURE__ */ fr(), r = /* @__PURE__ */ ie(), s = {
    keyword: "$ref",
    schemaType: "string",
    code(l) {
      const { gen: u, schema: y, it: f } = l, { baseId: h, schemaEnv: x, validateName: w, opts: v, self: I } = f, { root: g } = x;
      if ((y === "#" || y === "#/") && h === g.baseId)
        return d();
      const m = o.resolveRef.call(I, g, h, y);
      if (m === void 0)
        throw new e.default(f.opts.uriResolver, h, y);
      if (m instanceof o.SchemaEnv)
        return p(m);
      return b(m);
      function d() {
        if (x === g)
          return c(l, w, x, x.$async);
        const S = u.scopeValue("root", { ref: g });
        return c(l, (0, n._)`${S}.validate`, g, g.$async);
      }
      function p(S) {
        const A = a(l, S);
        c(l, A, S, S.$async);
      }
      function b(S) {
        const A = u.scopeValue("schema", v.code.source === !0 ? { ref: S, code: (0, n.stringify)(S) } : { ref: S }), P = u.name("valid"), R = l.subschema({
          schema: S,
          dataTypes: [],
          schemaPath: n.nil,
          topSchemaRef: A,
          errSchemaPath: y
        }, P);
        l.mergeEvaluated(R), l.ok(P);
      }
    }
  };
  function a(l, u) {
    const { gen: y } = l;
    return u.validate ? y.scopeValue("validate", { ref: u.validate }) : (0, n._)`${y.scopeValue("wrapper", { ref: u })}.validate`;
  }
  _t.getValidate = a;
  function c(l, u, y, f) {
    const { gen: h, it: x } = l, { allErrors: w, schemaEnv: v, opts: I } = x, g = I.passContext ? i.default.this : n.nil;
    f ? m() : d();
    function m() {
      if (!v.$async)
        throw new Error("async schema referenced by sync schema");
      const S = h.let("valid");
      h.try(() => {
        h.code((0, n._)`await ${(0, t.callValidateCode)(l, u, g)}`), b(u), w || h.assign(S, !0);
      }, (A) => {
        h.if((0, n._)`!(${A} instanceof ${x.ValidationError})`, () => h.throw(A)), p(A), w || h.assign(S, !1);
      }), l.ok(S);
    }
    function d() {
      l.result((0, t.callValidateCode)(l, u, g), () => b(u), () => p(u));
    }
    function p(S) {
      const A = (0, n._)`${S}.errors`;
      h.assign(i.default.vErrors, (0, n._)`${i.default.vErrors} === null ? ${A} : ${i.default.vErrors}.concat(${A})`), h.assign(i.default.errors, (0, n._)`${i.default.vErrors}.length`);
    }
    function b(S) {
      var A;
      if (!x.opts.unevaluated)
        return;
      const P = (A = y?.validate) === null || A === void 0 ? void 0 : A.evaluated;
      if (x.props !== !0)
        if (P && !P.dynamicProps)
          P.props !== void 0 && (x.props = r.mergeEvaluated.props(h, P.props, x.props));
        else {
          const R = h.var("props", (0, n._)`${S}.evaluated.props`);
          x.props = r.mergeEvaluated.props(h, R, x.props, n.Name);
        }
      if (x.items !== !0)
        if (P && !P.dynamicItems)
          P.items !== void 0 && (x.items = r.mergeEvaluated.items(h, P.items, x.items));
        else {
          const R = h.var("items", (0, n._)`${S}.evaluated.items`);
          x.items = r.mergeEvaluated.items(h, R, x.items, n.Name);
        }
    }
  }
  return _t.callRef = c, _t.default = s, _t;
}
var Io;
function Fd() {
  if (Io) return Xn;
  Io = 1, Object.defineProperty(Xn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ju(), t = /* @__PURE__ */ la(), n = [
    "$schema",
    "$id",
    "$defs",
    "$vocabulary",
    { keyword: "$comment" },
    "definitions",
    e.default,
    t.default
  ];
  return Xn.default = n, Xn;
}
var ei = {}, ti = {}, Ao;
function Ku() {
  if (Ao) return ti;
  Ao = 1, Object.defineProperty(ti, "__esModule", { value: !0 });
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
  return ti.default = o, ti;
}
var ni = {}, qo;
function Qu() {
  if (qo) return ni;
  qo = 1, Object.defineProperty(ni, "__esModule", { value: !0 });
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
      const { gen: o, data: r, schemaCode: s, it: a } = i, c = a.opts.multipleOfPrecision, l = o.let("res"), u = c ? (0, e._)`Math.abs(Math.round(${l}) - ${l}) > 1e-${c}` : (0, e._)`${l} !== parseInt(${l})`;
      i.fail$data((0, e._)`(${s} === 0 || (${l} = ${r}/${s}, ${u}))`);
    }
  };
  return ni.default = n, ni;
}
var ii = {}, ri = {}, Ro;
function Wu() {
  if (Ro) return ri;
  Ro = 1, Object.defineProperty(ri, "__esModule", { value: !0 });
  function e(t) {
    const n = t.length;
    let i = 0, o = 0, r;
    for (; o < n; )
      i++, r = t.charCodeAt(o++), r >= 55296 && r <= 56319 && o < n && (r = t.charCodeAt(o), (r & 64512) === 56320 && o++);
    return i;
  }
  return ri.default = e, e.code = 'require("ajv/dist/runtime/ucs2length").default', ri;
}
var jo;
function Xu() {
  if (jo) return ii;
  jo = 1, Object.defineProperty(ii, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ Wu(), o = {
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
      const { keyword: s, data: a, schemaCode: c, it: l } = r, u = s === "maxLength" ? e.operators.GT : e.operators.LT, y = l.opts.unicode === !1 ? (0, e._)`${a}.length` : (0, e._)`${(0, t.useFunc)(r.gen, n.default)}(${a})`;
      r.fail$data((0, e._)`${y} ${u} ${c}`);
    }
  };
  return ii.default = o, ii;
}
var si = {}, $o;
function Yu() {
  if ($o) return si;
  $o = 1, Object.defineProperty(si, "__esModule", { value: !0 });
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
      const { gen: s, data: a, $data: c, schema: l, schemaCode: u, it: y } = r, f = y.opts.unicodeRegExp ? "u" : "";
      if (c) {
        const { regExp: h } = y.opts.code, x = h.code === "new RegExp" ? (0, n._)`new RegExp` : (0, t.useFunc)(s, h), w = s.let("valid");
        s.try(() => s.assign(w, (0, n._)`${x}(${u}, ${f}).test(${a})`), () => s.assign(w, !1)), r.fail$data((0, n._)`!${w}`);
      } else {
        const h = (0, e.usePattern)(r, l);
        r.fail$data((0, n._)`!${h}.test(${a})`);
      }
    }
  };
  return si.default = o, si;
}
var ai = {}, Po;
function ep() {
  if (Po) return ai;
  Po = 1, Object.defineProperty(ai, "__esModule", { value: !0 });
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
  return ai.default = n, ai;
}
var oi = {}, _o;
function tp() {
  if (_o) return oi;
  _o = 1, Object.defineProperty(oi, "__esModule", { value: !0 });
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
      const { gen: s, schema: a, schemaCode: c, data: l, $data: u, it: y } = r, { opts: f } = y;
      if (!u && a.length === 0)
        return;
      const h = a.length >= f.loopRequired;
      if (y.allErrors ? x() : w(), f.strictRequired) {
        const g = r.parentSchema.properties, { definedProperties: m } = r.it;
        for (const d of a)
          if (g?.[d] === void 0 && !m.has(d)) {
            const p = y.schemaEnv.baseId + y.errSchemaPath, b = `required property "${d}" is not defined at "${p}" (strictRequired)`;
            (0, n.checkStrictMode)(y, b, y.opts.strictRequired);
          }
      }
      function x() {
        if (h || u)
          r.block$data(t.nil, v);
        else
          for (const g of a)
            (0, e.checkReportMissingProp)(r, g);
      }
      function w() {
        const g = s.let("missing");
        if (h || u) {
          const m = s.let("valid", !0);
          r.block$data(m, () => I(g, m)), r.ok(m);
        } else
          s.if((0, e.checkMissingProp)(r, a, g)), (0, e.reportMissingProp)(r, g), s.else();
      }
      function v() {
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
  return oi.default = o, oi;
}
var ci = {}, To;
function np() {
  if (To) return ci;
  To = 1, Object.defineProperty(ci, "__esModule", { value: !0 });
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
  return ci.default = n, ci;
}
var di = {}, li = {}, Co;
function ua() {
  if (Co) return li;
  Co = 1, Object.defineProperty(li, "__esModule", { value: !0 });
  const e = zd();
  return e.code = 'require("ajv/dist/runtime/equal").default', li.default = e, li;
}
var Eo;
function ip() {
  if (Eo) return di;
  Eo = 1, Object.defineProperty(di, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ er(), t = /* @__PURE__ */ te(), n = /* @__PURE__ */ ie(), i = /* @__PURE__ */ ua(), r = {
    keyword: "uniqueItems",
    type: "array",
    schemaType: "boolean",
    $data: !0,
    error: {
      message: ({ params: { i: s, j: a } }) => (0, t.str)`must NOT have duplicate items (items ## ${a} and ${s} are identical)`,
      params: ({ params: { i: s, j: a } }) => (0, t._)`{i: ${s}, j: ${a}}`
    },
    code(s) {
      const { gen: a, data: c, $data: l, schema: u, parentSchema: y, schemaCode: f, it: h } = s;
      if (!l && !u)
        return;
      const x = a.let("valid"), w = y.items ? (0, e.getSchemaTypes)(y.items) : [];
      s.block$data(x, v, (0, t._)`${f} === false`), s.ok(x);
      function v() {
        const d = a.let("i", (0, t._)`${c}.length`), p = a.let("j");
        s.setParams({ i: d, j: p }), a.assign(x, !0), a.if((0, t._)`${d} > 1`, () => (I() ? g : m)(d, p));
      }
      function I() {
        return w.length > 0 && !w.some((d) => d === "object" || d === "array");
      }
      function g(d, p) {
        const b = a.name("item"), S = (0, e.checkDataTypes)(w, b, h.opts.strictNumbers, e.DataType.Wrong), A = a.const("indices", (0, t._)`{}`);
        a.for((0, t._)`;${d}--;`, () => {
          a.let(b, (0, t._)`${c}[${d}]`), a.if(S, (0, t._)`continue`), w.length > 1 && a.if((0, t._)`typeof ${b} == "string"`, (0, t._)`${b} += "_"`), a.if((0, t._)`typeof ${A}[${b}] == "number"`, () => {
            a.assign(p, (0, t._)`${A}[${b}]`), s.error(), a.assign(x, !1).break();
          }).code((0, t._)`${A}[${b}] = ${d}`);
        });
      }
      function m(d, p) {
        const b = (0, n.useFunc)(a, i.default), S = a.name("outer");
        a.label(S).for((0, t._)`;${d}--;`, () => a.for((0, t._)`${p} = ${d}; ${p}--;`, () => a.if((0, t._)`${b}(${c}[${d}], ${c}[${p}])`, () => {
          s.error(), a.assign(x, !1).break(S);
        })));
      }
    }
  };
  return di.default = r, di;
}
var ui = {}, ko;
function rp() {
  if (ko) return ui;
  ko = 1, Object.defineProperty(ui, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ ua(), o = {
    keyword: "const",
    $data: !0,
    error: {
      message: "must be equal to constant",
      params: ({ schemaCode: r }) => (0, e._)`{allowedValue: ${r}}`
    },
    code(r) {
      const { gen: s, data: a, $data: c, schemaCode: l, schema: u } = r;
      c || u && typeof u == "object" ? r.fail$data((0, e._)`!${(0, t.useFunc)(s, n.default)}(${a}, ${l})`) : r.fail((0, e._)`${u} !== ${a}`);
    }
  };
  return ui.default = o, ui;
}
var pi = {}, Mo;
function sp() {
  if (Mo) return pi;
  Mo = 1, Object.defineProperty(pi, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ ua(), o = {
    keyword: "enum",
    schemaType: "array",
    $data: !0,
    error: {
      message: "must be equal to one of the allowed values",
      params: ({ schemaCode: r }) => (0, e._)`{allowedValues: ${r}}`
    },
    code(r) {
      const { gen: s, data: a, $data: c, schema: l, schemaCode: u, it: y } = r;
      if (!c && l.length === 0)
        throw new Error("enum must have non-empty array");
      const f = l.length >= y.opts.loopEnum;
      let h;
      const x = () => h ?? (h = (0, t.useFunc)(s, n.default));
      let w;
      if (f || c)
        w = s.let("valid"), r.block$data(w, v);
      else {
        if (!Array.isArray(l))
          throw new Error("ajv implementation error");
        const g = s.const("vSchema", u);
        w = (0, e.or)(...l.map((m, d) => I(g, d)));
      }
      r.pass(w);
      function v() {
        s.assign(w, !1), s.forOf("v", u, (g) => s.if((0, e._)`${x()}(${a}, ${g})`, () => s.assign(w, !0).break()));
      }
      function I(g, m) {
        const d = l[m];
        return typeof d == "object" && d !== null ? (0, e._)`${x()}(${a}, ${g}[${m}])` : (0, e._)`${a} === ${d}`;
      }
    }
  };
  return pi.default = o, pi;
}
var Oo;
function Gd() {
  if (Oo) return ei;
  Oo = 1, Object.defineProperty(ei, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ku(), t = /* @__PURE__ */ Qu(), n = /* @__PURE__ */ Xu(), i = /* @__PURE__ */ Yu(), o = /* @__PURE__ */ ep(), r = /* @__PURE__ */ tp(), s = /* @__PURE__ */ np(), a = /* @__PURE__ */ ip(), c = /* @__PURE__ */ rp(), l = /* @__PURE__ */ sp(), u = [
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
  return ei.default = u, ei;
}
var fi = {}, Yt = {}, Lo;
function Bd() {
  if (Lo) return Yt;
  Lo = 1, Object.defineProperty(Yt, "__esModule", { value: !0 }), Yt.validateAdditionalItems = void 0;
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
    const { gen: a, schema: c, data: l, keyword: u, it: y } = r;
    y.items = !0;
    const f = a.const("len", (0, e._)`${l}.length`);
    if (c === !1)
      r.setParams({ len: s.length }), r.pass((0, e._)`${f} <= ${s.length}`);
    else if (typeof c == "object" && !(0, t.alwaysValidSchema)(y, c)) {
      const x = a.var("valid", (0, e._)`${f} <= ${s.length}`);
      a.if((0, e.not)(x), () => h(x)), r.ok(x);
    }
    function h(x) {
      a.forRange("i", s.length, f, (w) => {
        r.subschema({ keyword: u, dataProp: w, dataPropType: t.Type.Num }, x), y.allErrors || a.if((0, e.not)(x), () => a.break());
      });
    }
  }
  return Yt.validateAdditionalItems = o, Yt.default = i, Yt;
}
var hi = {}, en = {}, No;
function Zd() {
  if (No) return en;
  No = 1, Object.defineProperty(en, "__esModule", { value: !0 }), en.validateTuple = void 0;
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
    const { gen: c, parentSchema: l, data: u, keyword: y, it: f } = r;
    w(l), f.opts.unevaluated && a.length && f.items !== !0 && (f.items = t.mergeEvaluated.items(c, a.length, f.items));
    const h = c.name("valid"), x = c.const("len", (0, e._)`${u}.length`);
    a.forEach((v, I) => {
      (0, t.alwaysValidSchema)(f, v) || (c.if((0, e._)`${x} > ${I}`, () => r.subschema({
        keyword: y,
        schemaProp: I,
        dataProp: I
      }, h)), r.ok(h));
    });
    function w(v) {
      const { opts: I, errSchemaPath: g } = f, m = a.length, d = m === v.minItems && (m === v.maxItems || v[s] === !1);
      if (I.strictTuples && !d) {
        const p = `"${y}" is ${m}-tuple, but minItems or maxItems/${s} are not specified or different at path "${g}"`;
        (0, t.checkStrictMode)(f, p, I.strictTuples);
      }
    }
  }
  return en.validateTuple = o, en.default = i, en;
}
var Do;
function ap() {
  if (Do) return hi;
  Do = 1, Object.defineProperty(hi, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Zd(), t = {
    keyword: "prefixItems",
    type: "array",
    schemaType: ["array"],
    before: "uniqueItems",
    code: (n) => (0, e.validateTuple)(n, "items")
  };
  return hi.default = t, hi;
}
var mi = {}, zo;
function op() {
  if (zo) return mi;
  zo = 1, Object.defineProperty(mi, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ ie(), n = /* @__PURE__ */ tt(), i = /* @__PURE__ */ Bd(), r = {
    keyword: "items",
    type: "array",
    schemaType: ["object", "boolean"],
    before: "uniqueItems",
    error: {
      message: ({ params: { len: s } }) => (0, e.str)`must NOT have more than ${s} items`,
      params: ({ params: { len: s } }) => (0, e._)`{limit: ${s}}`
    },
    code(s) {
      const { schema: a, parentSchema: c, it: l } = s, { prefixItems: u } = c;
      l.items = !0, !(0, t.alwaysValidSchema)(l, a) && (u ? (0, i.validateAdditionalItems)(s, u) : s.ok((0, n.validateArray)(s)));
    }
  };
  return mi.default = r, mi;
}
var yi = {}, Uo;
function cp() {
  if (Uo) return yi;
  Uo = 1, Object.defineProperty(yi, "__esModule", { value: !0 });
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
      let u, y;
      const { minContains: f, maxContains: h } = a;
      l.opts.next ? (u = f === void 0 ? 1 : f, y = h) : u = 1;
      const x = r.const("len", (0, e._)`${c}.length`);
      if (o.setParams({ min: u, max: y }), y === void 0 && u === 0) {
        (0, t.checkStrictMode)(l, '"minContains" == 0 without "maxContains": "contains" keyword ignored');
        return;
      }
      if (y !== void 0 && u > y) {
        (0, t.checkStrictMode)(l, '"minContains" > "maxContains" is always invalid'), o.fail();
        return;
      }
      if ((0, t.alwaysValidSchema)(l, s)) {
        let m = (0, e._)`${x} >= ${u}`;
        y !== void 0 && (m = (0, e._)`${m} && ${x} <= ${y}`), o.pass(m);
        return;
      }
      l.items = !0;
      const w = r.name("valid");
      y === void 0 && u === 1 ? I(w, () => r.if(w, () => r.break())) : u === 0 ? (r.let(w, !0), y !== void 0 && r.if((0, e._)`${c}.length > 0`, v)) : (r.let(w, !1), v()), o.result(w, () => o.reset());
      function v() {
        const m = r.name("_valid"), d = r.let("count", 0);
        I(m, () => r.if(m, () => g(d)));
      }
      function I(m, d) {
        r.forRange("i", 0, x, (p) => {
          o.subschema({
            keyword: "contains",
            dataProp: p,
            dataPropType: t.Type.Num,
            compositeRule: !0
          }, m), d();
        });
      }
      function g(m) {
        r.code((0, e._)`${m}++`), y === void 0 ? r.if((0, e._)`${m} >= ${u}`, () => r.assign(w, !0).break()) : (r.if((0, e._)`${m} > ${y}`, () => r.assign(w, !1).break()), u === 1 ? r.assign(w, !0) : r.if((0, e._)`${m} >= ${u}`, () => r.assign(w, !0)));
      }
    }
  };
  return yi.default = i, yi;
}
var Vr = {}, Vo;
function pa() {
  return Vo || (Vo = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.validateSchemaDeps = e.validatePropertyDeps = e.error = void 0;
    const t = /* @__PURE__ */ te(), n = /* @__PURE__ */ ie(), i = /* @__PURE__ */ tt();
    e.error = {
      message: ({ params: { property: c, depsCount: l, deps: u } }) => {
        const y = l === 1 ? "property" : "properties";
        return (0, t.str)`must have ${y} ${u} when property ${c} is present`;
      },
      params: ({ params: { property: c, depsCount: l, deps: u, missingProperty: y } }) => (0, t._)`{property: ${c},
    missingProperty: ${y},
    depsCount: ${l},
    deps: ${u}}`
      // TODO change to reference
    };
    const o = {
      keyword: "dependencies",
      type: "object",
      schemaType: "object",
      error: e.error,
      code(c) {
        const [l, u] = r(c);
        s(c, l), a(c, u);
      }
    };
    function r({ schema: c }) {
      const l = {}, u = {};
      for (const y in c) {
        if (y === "__proto__")
          continue;
        const f = Array.isArray(c[y]) ? l : u;
        f[y] = c[y];
      }
      return [l, u];
    }
    function s(c, l = c.schema) {
      const { gen: u, data: y, it: f } = c;
      if (Object.keys(l).length === 0)
        return;
      const h = u.let("missing");
      for (const x in l) {
        const w = l[x];
        if (w.length === 0)
          continue;
        const v = (0, i.propertyInData)(u, y, x, f.opts.ownProperties);
        c.setParams({
          property: x,
          depsCount: w.length,
          deps: w.join(", ")
        }), f.allErrors ? u.if(v, () => {
          for (const I of w)
            (0, i.checkReportMissingProp)(c, I);
        }) : (u.if((0, t._)`${v} && (${(0, i.checkMissingProp)(c, w, h)})`), (0, i.reportMissingProp)(c, h), u.else());
      }
    }
    e.validatePropertyDeps = s;
    function a(c, l = c.schema) {
      const { gen: u, data: y, keyword: f, it: h } = c, x = u.name("valid");
      for (const w in l)
        (0, n.alwaysValidSchema)(h, l[w]) || (u.if(
          (0, i.propertyInData)(u, y, w, h.opts.ownProperties),
          () => {
            const v = c.subschema({ keyword: f, schemaProp: w }, x);
            c.mergeValidEvaluated(v, x);
          },
          () => u.var(x, !0)
          // TODO var
        ), c.ok(x));
    }
    e.validateSchemaDeps = a, e.default = o;
  })(Vr)), Vr;
}
var gi = {}, Fo;
function dp() {
  if (Fo) return gi;
  Fo = 1, Object.defineProperty(gi, "__esModule", { value: !0 });
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
      r.forIn("key", a, (u) => {
        o.setParams({ propertyName: u }), o.subschema({
          keyword: "propertyNames",
          data: u,
          dataTypes: ["string"],
          propertyName: u,
          compositeRule: !0
        }, l), r.if((0, e.not)(l), () => {
          o.error(!0), c.allErrors || r.break();
        });
      }), o.ok(l);
    }
  };
  return gi.default = i, gi;
}
var vi = {}, Go;
function Hd() {
  if (Go) return vi;
  Go = 1, Object.defineProperty(vi, "__esModule", { value: !0 });
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
      const { gen: a, schema: c, parentSchema: l, data: u, errsCount: y, it: f } = s;
      if (!y)
        throw new Error("ajv implementation error");
      const { allErrors: h, opts: x } = f;
      if (f.props = !0, x.removeAdditional !== "all" && (0, i.alwaysValidSchema)(f, c))
        return;
      const w = (0, e.allSchemaProperties)(l.properties), v = (0, e.allSchemaProperties)(l.patternProperties);
      I(), s.ok((0, t._)`${y} === ${n.default.errors}`);
      function I() {
        a.forIn("key", u, (b) => {
          !w.length && !v.length ? d(b) : a.if(g(b), () => d(b));
        });
      }
      function g(b) {
        let S;
        if (w.length > 8) {
          const A = (0, i.schemaRefOrVal)(f, l.properties, "properties");
          S = (0, e.isOwnProperty)(a, A, b);
        } else w.length ? S = (0, t.or)(...w.map((A) => (0, t._)`${b} === ${A}`)) : S = t.nil;
        return v.length && (S = (0, t.or)(S, ...v.map((A) => (0, t._)`${(0, e.usePattern)(s, A)}.test(${b})`))), (0, t.not)(S);
      }
      function m(b) {
        a.code((0, t._)`delete ${u}[${b}]`);
      }
      function d(b) {
        if (x.removeAdditional === "all" || x.removeAdditional && c === !1) {
          m(b);
          return;
        }
        if (c === !1) {
          s.setParams({ additionalProperty: b }), s.error(), h || a.break();
          return;
        }
        if (typeof c == "object" && !(0, i.alwaysValidSchema)(f, c)) {
          const S = a.name("valid");
          x.removeAdditional === "failing" ? (p(b, S, !1), a.if((0, t.not)(S), () => {
            s.reset(), m(b);
          })) : (p(b, S), h || a.if((0, t.not)(S), () => a.break()));
        }
      }
      function p(b, S, A) {
        const P = {
          keyword: "additionalProperties",
          dataProp: b,
          dataPropType: i.Type.Str
        };
        A === !1 && Object.assign(P, {
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }), s.subschema(P, S);
      }
    }
  };
  return vi.default = r, vi;
}
var bi = {}, Bo;
function lp() {
  if (Bo) return bi;
  Bo = 1, Object.defineProperty(bi, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Mn(), t = /* @__PURE__ */ tt(), n = /* @__PURE__ */ ie(), i = /* @__PURE__ */ Hd(), o = {
    keyword: "properties",
    type: "object",
    schemaType: "object",
    code(r) {
      const { gen: s, schema: a, parentSchema: c, data: l, it: u } = r;
      u.opts.removeAdditional === "all" && c.additionalProperties === void 0 && i.default.code(new e.KeywordCxt(u, i.default, "additionalProperties"));
      const y = (0, t.allSchemaProperties)(a);
      for (const v of y)
        u.definedProperties.add(v);
      u.opts.unevaluated && y.length && u.props !== !0 && (u.props = n.mergeEvaluated.props(s, (0, n.toHash)(y), u.props));
      const f = y.filter((v) => !(0, n.alwaysValidSchema)(u, a[v]));
      if (f.length === 0)
        return;
      const h = s.name("valid");
      for (const v of f)
        x(v) ? w(v) : (s.if((0, t.propertyInData)(s, l, v, u.opts.ownProperties)), w(v), u.allErrors || s.else().var(h, !0), s.endIf()), r.it.definedProperties.add(v), r.ok(h);
      function x(v) {
        return u.opts.useDefaults && !u.compositeRule && a[v].default !== void 0;
      }
      function w(v) {
        r.subschema({
          keyword: "properties",
          schemaProp: v,
          dataProp: v
        }, h);
      }
    }
  };
  return bi.default = o, bi;
}
var wi = {}, Zo;
function up() {
  if (Zo) return wi;
  Zo = 1, Object.defineProperty(wi, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ tt(), t = /* @__PURE__ */ te(), n = /* @__PURE__ */ ie(), i = /* @__PURE__ */ ie(), o = {
    keyword: "patternProperties",
    type: "object",
    schemaType: "object",
    code(r) {
      const { gen: s, schema: a, data: c, parentSchema: l, it: u } = r, { opts: y } = u, f = (0, e.allSchemaProperties)(a), h = f.filter((d) => (0, n.alwaysValidSchema)(u, a[d]));
      if (f.length === 0 || h.length === f.length && (!u.opts.unevaluated || u.props === !0))
        return;
      const x = y.strictSchema && !y.allowMatchingProperties && l.properties, w = s.name("valid");
      u.props !== !0 && !(u.props instanceof t.Name) && (u.props = (0, i.evaluatedPropsToName)(s, u.props));
      const { props: v } = u;
      I();
      function I() {
        for (const d of f)
          x && g(d), u.allErrors ? m(d) : (s.var(w, !0), m(d), s.if(w));
      }
      function g(d) {
        for (const p in x)
          new RegExp(d).test(p) && (0, n.checkStrictMode)(u, `property ${p} matches pattern ${d} (use allowMatchingProperties)`);
      }
      function m(d) {
        s.forIn("key", c, (p) => {
          s.if((0, t._)`${(0, e.usePattern)(r, d)}.test(${p})`, () => {
            const b = h.includes(d);
            b || r.subschema({
              keyword: "patternProperties",
              schemaProp: d,
              dataProp: p,
              dataPropType: i.Type.Str
            }, w), u.opts.unevaluated && v !== !0 ? s.assign((0, t._)`${v}[${p}]`, !0) : !b && !u.allErrors && s.if((0, t.not)(w), () => s.break());
          });
        });
      }
    }
  };
  return wi.default = o, wi;
}
var xi = {}, Ho;
function pp() {
  if (Ho) return xi;
  Ho = 1, Object.defineProperty(xi, "__esModule", { value: !0 });
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
  return xi.default = t, xi;
}
var Si = {}, Jo;
function fp() {
  if (Jo) return Si;
  Jo = 1, Object.defineProperty(Si, "__esModule", { value: !0 });
  const t = {
    keyword: "anyOf",
    schemaType: "array",
    trackErrors: !0,
    code: (/* @__PURE__ */ tt()).validateUnion,
    error: { message: "must match a schema in anyOf" }
  };
  return Si.default = t, Si;
}
var Ii = {}, Ko;
function hp() {
  if (Ko) return Ii;
  Ko = 1, Object.defineProperty(Ii, "__esModule", { value: !0 });
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
      const l = s, u = r.let("valid", !1), y = r.let("passing", null), f = r.name("_valid");
      o.setParams({ passing: y }), r.block(h), o.result(u, () => o.reset(), () => o.error(!0));
      function h() {
        l.forEach((x, w) => {
          let v;
          (0, t.alwaysValidSchema)(c, x) ? r.var(f, !0) : v = o.subschema({
            keyword: "oneOf",
            schemaProp: w,
            compositeRule: !0
          }, f), w > 0 && r.if((0, e._)`${f} && ${u}`).assign(u, !1).assign(y, (0, e._)`[${y}, ${w}]`).else(), r.if(f, () => {
            r.assign(u, !0), r.assign(y, w), v && o.mergeEvaluated(v, e.Name);
          });
        });
      }
    }
  };
  return Ii.default = i, Ii;
}
var Ai = {}, Qo;
function mp() {
  if (Qo) return Ai;
  Qo = 1, Object.defineProperty(Ai, "__esModule", { value: !0 });
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
  return Ai.default = t, Ai;
}
var qi = {}, Wo;
function yp() {
  if (Wo) return qi;
  Wo = 1, Object.defineProperty(qi, "__esModule", { value: !0 });
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
      const l = o(c, "then"), u = o(c, "else");
      if (!l && !u)
        return;
      const y = s.let("valid", !0), f = s.name("_valid");
      if (h(), r.reset(), l && u) {
        const w = s.let("ifClause");
        r.setParams({ ifClause: w }), s.if(f, x("then", w), x("else", w));
      } else l ? s.if(f, x("then")) : s.if((0, e.not)(f), x("else"));
      r.pass(y, () => r.error(!0));
      function h() {
        const w = r.subschema({
          keyword: "if",
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }, f);
        r.mergeEvaluated(w);
      }
      function x(w, v) {
        return () => {
          const I = r.subschema({ keyword: w }, f);
          s.assign(y, f), r.mergeValidEvaluated(I, y), v ? s.assign(v, (0, e._)`${w}`) : r.setParams({ ifClause: w });
        };
      }
    }
  };
  function o(r, s) {
    const a = r.schema[s];
    return a !== void 0 && !(0, t.alwaysValidSchema)(r, a);
  }
  return qi.default = i, qi;
}
var Ri = {}, Xo;
function gp() {
  if (Xo) return Ri;
  Xo = 1, Object.defineProperty(Ri, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = {
    keyword: ["then", "else"],
    schemaType: ["object", "boolean"],
    code({ keyword: n, parentSchema: i, it: o }) {
      i.if === void 0 && (0, e.checkStrictMode)(o, `"${n}" without "if" is ignored`);
    }
  };
  return Ri.default = t, Ri;
}
var Yo;
function Jd() {
  if (Yo) return fi;
  Yo = 1, Object.defineProperty(fi, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Bd(), t = /* @__PURE__ */ ap(), n = /* @__PURE__ */ Zd(), i = /* @__PURE__ */ op(), o = /* @__PURE__ */ cp(), r = /* @__PURE__ */ pa(), s = /* @__PURE__ */ dp(), a = /* @__PURE__ */ Hd(), c = /* @__PURE__ */ lp(), l = /* @__PURE__ */ up(), u = /* @__PURE__ */ pp(), y = /* @__PURE__ */ fp(), f = /* @__PURE__ */ hp(), h = /* @__PURE__ */ mp(), x = /* @__PURE__ */ yp(), w = /* @__PURE__ */ gp();
  function v(I = !1) {
    const g = [
      // any
      u.default,
      y.default,
      f.default,
      h.default,
      x.default,
      w.default,
      // object
      s.default,
      a.default,
      r.default,
      c.default,
      l.default
    ];
    return I ? g.push(t.default, i.default) : g.push(e.default, n.default), g.push(o.default), g;
  }
  return fi.default = v, fi;
}
var ji = {}, tn = {}, ec;
function Kd() {
  if (ec) return tn;
  ec = 1, Object.defineProperty(tn, "__esModule", { value: !0 }), tn.dynamicAnchor = void 0;
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ et(), n = /* @__PURE__ */ fr(), i = /* @__PURE__ */ la(), o = {
    keyword: "$dynamicAnchor",
    schemaType: "string",
    code: (a) => r(a, a.schema)
  };
  function r(a, c) {
    const { gen: l, it: u } = a;
    u.schemaEnv.root.dynamicAnchors[c] = !0;
    const y = (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(c)}`, f = u.errSchemaPath === "#" ? u.validateName : s(a);
    l.if((0, e._)`!${y}`, () => l.assign(y, f));
  }
  tn.dynamicAnchor = r;
  function s(a) {
    const { schemaEnv: c, schema: l, self: u } = a.it, { root: y, baseId: f, localRefs: h, meta: x } = c.root, { schemaId: w } = u.opts, v = new n.SchemaEnv({ schema: l, schemaId: w, root: y, baseId: f, localRefs: h, meta: x });
    return n.compileSchema.call(u, v), (0, i.getValidate)(a, v);
  }
  return tn.default = o, tn;
}
var nn = {}, tc;
function Qd() {
  if (tc) return nn;
  tc = 1, Object.defineProperty(nn, "__esModule", { value: !0 }), nn.dynamicRef = void 0;
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ et(), n = /* @__PURE__ */ la(), i = {
    keyword: "$dynamicRef",
    schemaType: "string",
    code: (r) => o(r, r.schema)
  };
  function o(r, s) {
    const { gen: a, keyword: c, it: l } = r;
    if (s[0] !== "#")
      throw new Error(`"${c}" only supports hash fragment reference`);
    const u = s.slice(1);
    if (l.allErrors)
      y();
    else {
      const h = a.let("valid", !1);
      y(h), r.ok(h);
    }
    function y(h) {
      if (l.schemaEnv.root.dynamicAnchors[u]) {
        const x = a.let("_v", (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(u)}`);
        a.if(x, f(x, h), f(l.validateName, h));
      } else
        f(l.validateName, h)();
    }
    function f(h, x) {
      return x ? () => a.block(() => {
        (0, n.callRef)(r, h), a.let(x, !0);
      }) : () => (0, n.callRef)(r, h);
    }
  }
  return nn.dynamicRef = o, nn.default = i, nn;
}
var $i = {}, nc;
function vp() {
  if (nc) return $i;
  nc = 1, Object.defineProperty($i, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Kd(), t = /* @__PURE__ */ ie(), n = {
    keyword: "$recursiveAnchor",
    schemaType: "boolean",
    code(i) {
      i.schema ? (0, e.dynamicAnchor)(i, "") : (0, t.checkStrictMode)(i.it, "$recursiveAnchor: false is ignored");
    }
  };
  return $i.default = n, $i;
}
var Pi = {}, ic;
function bp() {
  if (ic) return Pi;
  ic = 1, Object.defineProperty(Pi, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Qd(), t = {
    keyword: "$recursiveRef",
    schemaType: "string",
    code: (n) => (0, e.dynamicRef)(n, n.schema)
  };
  return Pi.default = t, Pi;
}
var rc;
function wp() {
  if (rc) return ji;
  rc = 1, Object.defineProperty(ji, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Kd(), t = /* @__PURE__ */ Qd(), n = /* @__PURE__ */ vp(), i = /* @__PURE__ */ bp(), o = [e.default, t.default, n.default, i.default];
  return ji.default = o, ji;
}
var _i = {}, Ti = {}, sc;
function xp() {
  if (sc) return Ti;
  sc = 1, Object.defineProperty(Ti, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ pa(), t = {
    keyword: "dependentRequired",
    type: "object",
    schemaType: "object",
    error: e.error,
    code: (n) => (0, e.validatePropertyDeps)(n)
  };
  return Ti.default = t, Ti;
}
var Ci = {}, ac;
function Sp() {
  if (ac) return Ci;
  ac = 1, Object.defineProperty(Ci, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ pa(), t = {
    keyword: "dependentSchemas",
    type: "object",
    schemaType: "object",
    code: (n) => (0, e.validateSchemaDeps)(n)
  };
  return Ci.default = t, Ci;
}
var Ei = {}, oc;
function Ip() {
  if (oc) return Ei;
  oc = 1, Object.defineProperty(Ei, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ie(), t = {
    keyword: ["maxContains", "minContains"],
    type: "array",
    schemaType: "number",
    code({ keyword: n, parentSchema: i, it: o }) {
      i.contains === void 0 && (0, e.checkStrictMode)(o, `"${n}" without "contains" is ignored`);
    }
  };
  return Ei.default = t, Ei;
}
var cc;
function Ap() {
  if (cc) return _i;
  cc = 1, Object.defineProperty(_i, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ xp(), t = /* @__PURE__ */ Sp(), n = /* @__PURE__ */ Ip(), i = [e.default, t.default, n.default];
  return _i.default = i, _i;
}
var ki = {}, Mi = {}, dc;
function qp() {
  if (dc) return Mi;
  dc = 1, Object.defineProperty(Mi, "__esModule", { value: !0 });
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
      const { gen: s, schema: a, data: c, errsCount: l, it: u } = r;
      if (!l)
        throw new Error("ajv implementation error");
      const { allErrors: y, props: f } = u;
      f instanceof e.Name ? s.if((0, e._)`${f} !== true`, () => s.forIn("key", c, (v) => s.if(x(f, v), () => h(v)))) : f !== !0 && s.forIn("key", c, (v) => f === void 0 ? h(v) : s.if(w(f, v), () => h(v))), u.props = !0, r.ok((0, e._)`${l} === ${n.default.errors}`);
      function h(v) {
        if (a === !1) {
          r.setParams({ unevaluatedProperty: v }), r.error(), y || s.break();
          return;
        }
        if (!(0, t.alwaysValidSchema)(u, a)) {
          const I = s.name("valid");
          r.subschema({
            keyword: "unevaluatedProperties",
            dataProp: v,
            dataPropType: t.Type.Str
          }, I), y || s.if((0, e.not)(I), () => s.break());
        }
      }
      function x(v, I) {
        return (0, e._)`!${v} || !${v}[${I}]`;
      }
      function w(v, I) {
        const g = [];
        for (const m in v)
          v[m] === !0 && g.push((0, e._)`${I} !== ${m}`);
        return (0, e.and)(...g);
      }
    }
  };
  return Mi.default = o, Mi;
}
var Oi = {}, lc;
function Rp() {
  if (lc) return Oi;
  lc = 1, Object.defineProperty(Oi, "__esModule", { value: !0 });
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
      const u = r.const("len", (0, e._)`${a}.length`);
      if (s === !1)
        o.setParams({ len: l }), o.fail((0, e._)`${u} > ${l}`);
      else if (typeof s == "object" && !(0, t.alwaysValidSchema)(c, s)) {
        const f = r.var("valid", (0, e._)`${u} <= ${l}`);
        r.if((0, e.not)(f), () => y(f, l)), o.ok(f);
      }
      c.items = !0;
      function y(f, h) {
        r.forRange("i", h, u, (x) => {
          o.subschema({ keyword: "unevaluatedItems", dataProp: x, dataPropType: t.Type.Num }, f), c.allErrors || r.if((0, e.not)(f), () => r.break());
        });
      }
    }
  };
  return Oi.default = i, Oi;
}
var uc;
function jp() {
  if (uc) return ki;
  uc = 1, Object.defineProperty(ki, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ qp(), t = /* @__PURE__ */ Rp(), n = [e.default, t.default];
  return ki.default = n, ki;
}
var Li = {}, Ni = {}, pc;
function $p() {
  if (pc) return Ni;
  pc = 1, Object.defineProperty(Ni, "__esModule", { value: !0 });
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
      const { gen: r, data: s, $data: a, schema: c, schemaCode: l, it: u } = i, { opts: y, errSchemaPath: f, schemaEnv: h, self: x } = u;
      if (!y.validateFormats)
        return;
      a ? w() : v();
      function w() {
        const I = r.scopeValue("formats", {
          ref: x.formats,
          code: y.code.formats
        }), g = r.const("fDef", (0, e._)`${I}[${l}]`), m = r.let("fType"), d = r.let("format");
        r.if((0, e._)`typeof ${g} == "object" && !(${g} instanceof RegExp)`, () => r.assign(m, (0, e._)`${g}.type || "string"`).assign(d, (0, e._)`${g}.validate`), () => r.assign(m, (0, e._)`"string"`).assign(d, g)), i.fail$data((0, e.or)(p(), b()));
        function p() {
          return y.strictSchema === !1 ? e.nil : (0, e._)`${l} && !${d}`;
        }
        function b() {
          const S = h.$async ? (0, e._)`(${g}.async ? await ${d}(${s}) : ${d}(${s}))` : (0, e._)`${d}(${s})`, A = (0, e._)`(typeof ${d} == "function" ? ${S} : ${d}.test(${s}))`;
          return (0, e._)`${d} && ${d} !== true && ${m} === ${o} && !${A}`;
        }
      }
      function v() {
        const I = x.formats[c];
        if (!I) {
          p();
          return;
        }
        if (I === !0)
          return;
        const [g, m, d] = b(I);
        g === o && i.pass(S());
        function p() {
          if (y.strictSchema === !1) {
            x.logger.warn(A());
            return;
          }
          throw new Error(A());
          function A() {
            return `unknown format "${c}" ignored in schema at path "${f}"`;
          }
        }
        function b(A) {
          const P = A instanceof RegExp ? (0, e.regexpCode)(A) : y.code.formats ? (0, e._)`${y.code.formats}${(0, e.getProperty)(c)}` : void 0, R = r.scopeValue("formats", { key: c, ref: A, code: P });
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
  return Ni.default = n, Ni;
}
var fc;
function Wd() {
  if (fc) return Li;
  fc = 1, Object.defineProperty(Li, "__esModule", { value: !0 });
  const t = [(/* @__PURE__ */ $p()).default];
  return Li.default = t, Li;
}
var Gt = {}, hc;
function Xd() {
  return hc || (hc = 1, Object.defineProperty(Gt, "__esModule", { value: !0 }), Gt.contentVocabulary = Gt.metadataVocabulary = void 0, Gt.metadataVocabulary = [
    "title",
    "description",
    "default",
    "deprecated",
    "readOnly",
    "writeOnly",
    "examples"
  ], Gt.contentVocabulary = [
    "contentMediaType",
    "contentEncoding",
    "contentSchema"
  ]), Gt;
}
var mc;
function Pp() {
  if (mc) return Wn;
  mc = 1, Object.defineProperty(Wn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Fd(), t = /* @__PURE__ */ Gd(), n = /* @__PURE__ */ Jd(), i = /* @__PURE__ */ wp(), o = /* @__PURE__ */ Ap(), r = /* @__PURE__ */ jp(), s = /* @__PURE__ */ Wd(), a = /* @__PURE__ */ Xd(), c = [
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
  return Wn.default = c, Wn;
}
var Di = {}, vn = {}, yc;
function _p() {
  if (yc) return vn;
  yc = 1, Object.defineProperty(vn, "__esModule", { value: !0 }), vn.DiscrError = void 0;
  var e;
  return (function(t) {
    t.Tag = "tag", t.Mapping = "mapping";
  })(e || (vn.DiscrError = e = {})), vn;
}
var gc;
function Yd() {
  if (gc) return Di;
  gc = 1, Object.defineProperty(Di, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ te(), t = /* @__PURE__ */ _p(), n = /* @__PURE__ */ fr(), i = /* @__PURE__ */ On(), o = /* @__PURE__ */ ie(), s = {
    keyword: "discriminator",
    type: "object",
    schemaType: "object",
    error: {
      message: ({ params: { discrError: a, tagName: c } }) => a === t.DiscrError.Tag ? `tag "${c}" must be string` : `value of tag "${c}" must be in oneOf`,
      params: ({ params: { discrError: a, tag: c, tagName: l } }) => (0, e._)`{error: ${a}, tag: ${l}, tagValue: ${c}}`
    },
    code(a) {
      const { gen: c, data: l, schema: u, parentSchema: y, it: f } = a, { oneOf: h } = y;
      if (!f.opts.discriminator)
        throw new Error("discriminator: requires discriminator option");
      const x = u.propertyName;
      if (typeof x != "string")
        throw new Error("discriminator: requires propertyName");
      if (u.mapping)
        throw new Error("discriminator: mapping is not supported");
      if (!h)
        throw new Error("discriminator: requires oneOf keyword");
      const w = c.let("valid", !1), v = c.const("tag", (0, e._)`${l}${(0, e.getProperty)(x)}`);
      c.if((0, e._)`typeof ${v} == "string"`, () => I(), () => a.error(!1, { discrError: t.DiscrError.Tag, tag: v, tagName: x })), a.ok(w);
      function I() {
        const d = m();
        c.if(!1);
        for (const p in d)
          c.elseIf((0, e._)`${v} === ${p}`), c.assign(w, g(d[p]));
        c.else(), a.error(!1, { discrError: t.DiscrError.Mapping, tag: v, tagName: x }), c.endIf();
      }
      function g(d) {
        const p = c.name("valid"), b = a.subschema({ keyword: "oneOf", schemaProp: d }, p);
        return a.mergeEvaluated(b, e.Name), p;
      }
      function m() {
        var d;
        const p = {}, b = A(y);
        let S = !0;
        for (let E = 0; E < h.length; E++) {
          let k = h[E];
          if (k?.$ref && !(0, o.schemaHasRulesButRef)(k, f.self.RULES)) {
            const j = k.$ref;
            if (k = n.resolveRef.call(f.self, f.schemaEnv.root, f.baseId, j), k instanceof n.SchemaEnv && (k = k.schema), k === void 0)
              throw new i.default(f.opts.uriResolver, f.baseId, j);
          }
          const M = (d = k?.properties) === null || d === void 0 ? void 0 : d[x];
          if (typeof M != "object")
            throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${x}"`);
          S = S && (b || A(k)), P(M, E);
        }
        if (!S)
          throw new Error(`discriminator: "${x}" must be required`);
        return p;
        function A({ required: E }) {
          return Array.isArray(E) && E.includes(x);
        }
        function P(E, k) {
          if (E.const)
            R(E.const, k);
          else if (E.enum)
            for (const M of E.enum)
              R(M, k);
          else
            throw new Error(`discriminator: "properties/${x}" must have "const" or "enum"`);
        }
        function R(E, k) {
          if (typeof E != "string" || E in p)
            throw new Error(`discriminator: "${x}" values must be unique strings`);
          p[E] = k;
        }
      }
    }
  };
  return Di.default = s, Di;
}
var zi = {};
const Tp = "https://json-schema.org/draft/2020-12/schema", Cp = "https://json-schema.org/draft/2020-12/schema", Ep = { "https://json-schema.org/draft/2020-12/vocab/core": !0, "https://json-schema.org/draft/2020-12/vocab/applicator": !0, "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0, "https://json-schema.org/draft/2020-12/vocab/validation": !0, "https://json-schema.org/draft/2020-12/vocab/meta-data": !0, "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0, "https://json-schema.org/draft/2020-12/vocab/content": !0 }, kp = "meta", Mp = "Core and Validation specifications meta-schema", Op = [{ $ref: "meta/core" }, { $ref: "meta/applicator" }, { $ref: "meta/unevaluated" }, { $ref: "meta/validation" }, { $ref: "meta/meta-data" }, { $ref: "meta/format-annotation" }, { $ref: "meta/content" }], Lp = ["object", "boolean"], Np = "This meta-schema also defines keywords that have appeared in previous drafts in order to prevent incompatible extensions as they remain in common use.", Dp = { definitions: { $comment: '"definitions" has been replaced by "$defs".', type: "object", additionalProperties: { $dynamicRef: "#meta" }, deprecated: !0, default: {} }, dependencies: { $comment: '"dependencies" has been split and replaced by "dependentSchemas" and "dependentRequired" in order to serve their differing semantics.', type: "object", additionalProperties: { anyOf: [{ $dynamicRef: "#meta" }, { $ref: "meta/validation#/$defs/stringArray" }] }, deprecated: !0, default: {} }, $recursiveAnchor: { $comment: '"$recursiveAnchor" has been replaced by "$dynamicAnchor".', $ref: "meta/core#/$defs/anchorString", deprecated: !0 }, $recursiveRef: { $comment: '"$recursiveRef" has been replaced by "$dynamicRef".', $ref: "meta/core#/$defs/uriReferenceString", deprecated: !0 } }, zp = {
  $schema: Tp,
  $id: Cp,
  $vocabulary: Ep,
  $dynamicAnchor: kp,
  title: Mp,
  allOf: Op,
  type: Lp,
  $comment: Np,
  properties: Dp
}, Up = "https://json-schema.org/draft/2020-12/schema", Vp = "https://json-schema.org/draft/2020-12/meta/applicator", Fp = { "https://json-schema.org/draft/2020-12/vocab/applicator": !0 }, Gp = "meta", Bp = "Applicator vocabulary meta-schema", Zp = ["object", "boolean"], Hp = { prefixItems: { $ref: "#/$defs/schemaArray" }, items: { $dynamicRef: "#meta" }, contains: { $dynamicRef: "#meta" }, additionalProperties: { $dynamicRef: "#meta" }, properties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, patternProperties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, propertyNames: { format: "regex" }, default: {} }, dependentSchemas: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, propertyNames: { $dynamicRef: "#meta" }, if: { $dynamicRef: "#meta" }, then: { $dynamicRef: "#meta" }, else: { $dynamicRef: "#meta" }, allOf: { $ref: "#/$defs/schemaArray" }, anyOf: { $ref: "#/$defs/schemaArray" }, oneOf: { $ref: "#/$defs/schemaArray" }, not: { $dynamicRef: "#meta" } }, Jp = { schemaArray: { type: "array", minItems: 1, items: { $dynamicRef: "#meta" } } }, Kp = {
  $schema: Up,
  $id: Vp,
  $vocabulary: Fp,
  $dynamicAnchor: Gp,
  title: Bp,
  type: Zp,
  properties: Hp,
  $defs: Jp
}, Qp = "https://json-schema.org/draft/2020-12/schema", Wp = "https://json-schema.org/draft/2020-12/meta/unevaluated", Xp = { "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0 }, Yp = "meta", ef = "Unevaluated applicator vocabulary meta-schema", tf = ["object", "boolean"], nf = { unevaluatedItems: { $dynamicRef: "#meta" }, unevaluatedProperties: { $dynamicRef: "#meta" } }, rf = {
  $schema: Qp,
  $id: Wp,
  $vocabulary: Xp,
  $dynamicAnchor: Yp,
  title: ef,
  type: tf,
  properties: nf
}, sf = "https://json-schema.org/draft/2020-12/schema", af = "https://json-schema.org/draft/2020-12/meta/content", of = { "https://json-schema.org/draft/2020-12/vocab/content": !0 }, cf = "meta", df = "Content vocabulary meta-schema", lf = ["object", "boolean"], uf = { contentEncoding: { type: "string" }, contentMediaType: { type: "string" }, contentSchema: { $dynamicRef: "#meta" } }, pf = {
  $schema: sf,
  $id: af,
  $vocabulary: of,
  $dynamicAnchor: cf,
  title: df,
  type: lf,
  properties: uf
}, ff = "https://json-schema.org/draft/2020-12/schema", hf = "https://json-schema.org/draft/2020-12/meta/core", mf = { "https://json-schema.org/draft/2020-12/vocab/core": !0 }, yf = "meta", gf = "Core vocabulary meta-schema", vf = ["object", "boolean"], bf = { $id: { $ref: "#/$defs/uriReferenceString", $comment: "Non-empty fragments not allowed.", pattern: "^[^#]*#?$" }, $schema: { $ref: "#/$defs/uriString" }, $ref: { $ref: "#/$defs/uriReferenceString" }, $anchor: { $ref: "#/$defs/anchorString" }, $dynamicRef: { $ref: "#/$defs/uriReferenceString" }, $dynamicAnchor: { $ref: "#/$defs/anchorString" }, $vocabulary: { type: "object", propertyNames: { $ref: "#/$defs/uriString" }, additionalProperties: { type: "boolean" } }, $comment: { type: "string" }, $defs: { type: "object", additionalProperties: { $dynamicRef: "#meta" } } }, wf = { anchorString: { type: "string", pattern: "^[A-Za-z_][-A-Za-z0-9._]*$" }, uriString: { type: "string", format: "uri" }, uriReferenceString: { type: "string", format: "uri-reference" } }, xf = {
  $schema: ff,
  $id: hf,
  $vocabulary: mf,
  $dynamicAnchor: yf,
  title: gf,
  type: vf,
  properties: bf,
  $defs: wf
}, Sf = "https://json-schema.org/draft/2020-12/schema", If = "https://json-schema.org/draft/2020-12/meta/format-annotation", Af = { "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0 }, qf = "meta", Rf = "Format vocabulary meta-schema for annotation results", jf = ["object", "boolean"], $f = { format: { type: "string" } }, Pf = {
  $schema: Sf,
  $id: If,
  $vocabulary: Af,
  $dynamicAnchor: qf,
  title: Rf,
  type: jf,
  properties: $f
}, _f = "https://json-schema.org/draft/2020-12/schema", Tf = "https://json-schema.org/draft/2020-12/meta/meta-data", Cf = { "https://json-schema.org/draft/2020-12/vocab/meta-data": !0 }, Ef = "meta", kf = "Meta-data vocabulary meta-schema", Mf = ["object", "boolean"], Of = { title: { type: "string" }, description: { type: "string" }, default: !0, deprecated: { type: "boolean", default: !1 }, readOnly: { type: "boolean", default: !1 }, writeOnly: { type: "boolean", default: !1 }, examples: { type: "array", items: !0 } }, Lf = {
  $schema: _f,
  $id: Tf,
  $vocabulary: Cf,
  $dynamicAnchor: Ef,
  title: kf,
  type: Mf,
  properties: Of
}, Nf = "https://json-schema.org/draft/2020-12/schema", Df = "https://json-schema.org/draft/2020-12/meta/validation", zf = { "https://json-schema.org/draft/2020-12/vocab/validation": !0 }, Uf = "meta", Vf = "Validation vocabulary meta-schema", Ff = ["object", "boolean"], Gf = { type: { anyOf: [{ $ref: "#/$defs/simpleTypes" }, { type: "array", items: { $ref: "#/$defs/simpleTypes" }, minItems: 1, uniqueItems: !0 }] }, const: !0, enum: { type: "array", items: !0 }, multipleOf: { type: "number", exclusiveMinimum: 0 }, maximum: { type: "number" }, exclusiveMaximum: { type: "number" }, minimum: { type: "number" }, exclusiveMinimum: { type: "number" }, maxLength: { $ref: "#/$defs/nonNegativeInteger" }, minLength: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, pattern: { type: "string", format: "regex" }, maxItems: { $ref: "#/$defs/nonNegativeInteger" }, minItems: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, uniqueItems: { type: "boolean", default: !1 }, maxContains: { $ref: "#/$defs/nonNegativeInteger" }, minContains: { $ref: "#/$defs/nonNegativeInteger", default: 1 }, maxProperties: { $ref: "#/$defs/nonNegativeInteger" }, minProperties: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, required: { $ref: "#/$defs/stringArray" }, dependentRequired: { type: "object", additionalProperties: { $ref: "#/$defs/stringArray" } } }, Bf = { nonNegativeInteger: { type: "integer", minimum: 0 }, nonNegativeIntegerDefault0: { $ref: "#/$defs/nonNegativeInteger", default: 0 }, simpleTypes: { enum: ["array", "boolean", "integer", "null", "number", "object", "string"] }, stringArray: { type: "array", items: { type: "string" }, uniqueItems: !0, default: [] } }, Zf = {
  $schema: Nf,
  $id: Df,
  $vocabulary: zf,
  $dynamicAnchor: Uf,
  title: Vf,
  type: Ff,
  properties: Gf,
  $defs: Bf
};
var vc;
function Hf() {
  if (vc) return zi;
  vc = 1, Object.defineProperty(zi, "__esModule", { value: !0 });
  const e = zp, t = Kp, n = rf, i = pf, o = xf, r = Pf, s = Lf, a = Zf, c = ["/properties"];
  function l(u) {
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
      return u ? f.$dataMetaSchema(h, c) : h;
    }
  }
  return zi.default = l, zi;
}
var bc;
function Jf() {
  return bc || (bc = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.MissingRefError = t.ValidationError = t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = t.Ajv2020 = void 0;
    const n = /* @__PURE__ */ Vd(), i = /* @__PURE__ */ Pp(), o = /* @__PURE__ */ Yd(), r = /* @__PURE__ */ Hf(), s = "https://json-schema.org/draft/2020-12/schema";
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
    var c = /* @__PURE__ */ Mn();
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
    var u = /* @__PURE__ */ pr();
    Object.defineProperty(t, "ValidationError", { enumerable: !0, get: function() {
      return u.default;
    } });
    var y = /* @__PURE__ */ On();
    Object.defineProperty(t, "MissingRefError", { enumerable: !0, get: function() {
      return y.default;
    } });
  })(Zn, Zn.exports)), Zn.exports;
}
var Kf = /* @__PURE__ */ Jf();
const Qf = /* @__PURE__ */ da(Kf);
var Ui = { exports: {} }, Fr = {}, wc;
function Wf() {
  return wc || (wc = 1, (function(e) {
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
      "iso-time": t(c(), u),
      "iso-date-time": t(f(), x),
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
      int32: { type: "number", validate: b },
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
      "iso-time": t(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, u),
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
        const N = +j[1], _ = +j[2], F = +j[3], L = j[4], B = j[5] === "-" ? -1 : 1, T = +(j[6] || 0), O = +(j[7] || 0);
        if (T > 23 || O > 59 || E && !L)
          return !1;
        if (N <= 23 && _ <= 59 && F < 60)
          return !0;
        const U = _ - O * B, D = N - T * B - (U < 0 ? 1 : 0);
        return (D === 23 || D === -1) && (U === 59 || U === -1) && F < 61;
      };
    }
    function l(E, k) {
      if (!(E && k))
        return;
      const M = (/* @__PURE__ */ new Date("2020-01-01T" + E)).valueOf(), j = (/* @__PURE__ */ new Date("2020-01-01T" + k)).valueOf();
      if (M && j)
        return M - j;
    }
    function u(E, k) {
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
    function x(E, k) {
      if (!(E && k))
        return;
      const [M, j] = E.split(y), [N, _] = k.split(y), F = s(M, N);
      if (F !== void 0)
        return F || l(j, _);
    }
    const w = /\/|:/, v = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
    function I(E) {
      return w.test(E) && v.test(E);
    }
    const g = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/gm;
    function m(E) {
      return g.lastIndex = 0, g.test(E);
    }
    const d = -2147483648, p = 2 ** 31 - 1;
    function b(E) {
      return Number.isInteger(E) && E <= p && E >= d;
    }
    function S(E) {
      return Number.isInteger(E);
    }
    function A() {
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
  })(Fr)), Fr;
}
var Gr = {}, Vi = { exports: {} }, Fi = {}, xc;
function Xf() {
  if (xc) return Fi;
  xc = 1, Object.defineProperty(Fi, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Fd(), t = /* @__PURE__ */ Gd(), n = /* @__PURE__ */ Jd(), i = /* @__PURE__ */ Wd(), o = /* @__PURE__ */ Xd(), r = [
    e.default,
    t.default,
    (0, n.default)(),
    i.default,
    o.metadataVocabulary,
    o.contentVocabulary
  ];
  return Fi.default = r, Fi;
}
const Yf = "http://json-schema.org/draft-07/schema#", eh = "http://json-schema.org/draft-07/schema#", th = "Core schema meta-schema", nh = { schemaArray: { type: "array", minItems: 1, items: { $ref: "#" } }, nonNegativeInteger: { type: "integer", minimum: 0 }, nonNegativeIntegerDefault0: { allOf: [{ $ref: "#/definitions/nonNegativeInteger" }, { default: 0 }] }, simpleTypes: { enum: ["array", "boolean", "integer", "null", "number", "object", "string"] }, stringArray: { type: "array", items: { type: "string" }, uniqueItems: !0, default: [] } }, ih = ["object", "boolean"], rh = { $id: { type: "string", format: "uri-reference" }, $schema: { type: "string", format: "uri" }, $ref: { type: "string", format: "uri-reference" }, $comment: { type: "string" }, title: { type: "string" }, description: { type: "string" }, default: !0, readOnly: { type: "boolean", default: !1 }, examples: { type: "array", items: !0 }, multipleOf: { type: "number", exclusiveMinimum: 0 }, maximum: { type: "number" }, exclusiveMaximum: { type: "number" }, minimum: { type: "number" }, exclusiveMinimum: { type: "number" }, maxLength: { $ref: "#/definitions/nonNegativeInteger" }, minLength: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, pattern: { type: "string", format: "regex" }, additionalItems: { $ref: "#" }, items: { anyOf: [{ $ref: "#" }, { $ref: "#/definitions/schemaArray" }], default: !0 }, maxItems: { $ref: "#/definitions/nonNegativeInteger" }, minItems: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, uniqueItems: { type: "boolean", default: !1 }, contains: { $ref: "#" }, maxProperties: { $ref: "#/definitions/nonNegativeInteger" }, minProperties: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, required: { $ref: "#/definitions/stringArray" }, additionalProperties: { $ref: "#" }, definitions: { type: "object", additionalProperties: { $ref: "#" }, default: {} }, properties: { type: "object", additionalProperties: { $ref: "#" }, default: {} }, patternProperties: { type: "object", additionalProperties: { $ref: "#" }, propertyNames: { format: "regex" }, default: {} }, dependencies: { type: "object", additionalProperties: { anyOf: [{ $ref: "#" }, { $ref: "#/definitions/stringArray" }] } }, propertyNames: { $ref: "#" }, const: !0, enum: { type: "array", items: !0, minItems: 1, uniqueItems: !0 }, type: { anyOf: [{ $ref: "#/definitions/simpleTypes" }, { type: "array", items: { $ref: "#/definitions/simpleTypes" }, minItems: 1, uniqueItems: !0 }] }, format: { type: "string" }, contentMediaType: { type: "string" }, contentEncoding: { type: "string" }, if: { $ref: "#" }, then: { $ref: "#" }, else: { $ref: "#" }, allOf: { $ref: "#/definitions/schemaArray" }, anyOf: { $ref: "#/definitions/schemaArray" }, oneOf: { $ref: "#/definitions/schemaArray" }, not: { $ref: "#" } }, sh = {
  $schema: Yf,
  $id: eh,
  title: th,
  definitions: nh,
  type: ih,
  properties: rh,
  default: !0
};
var Sc;
function ah() {
  return Sc || (Sc = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.MissingRefError = t.ValidationError = t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = t.Ajv = void 0;
    const n = /* @__PURE__ */ Vd(), i = /* @__PURE__ */ Xf(), o = /* @__PURE__ */ Yd(), r = sh, s = ["/properties"], a = "http://json-schema.org/draft-07/schema";
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
    var l = /* @__PURE__ */ Mn();
    Object.defineProperty(t, "KeywordCxt", { enumerable: !0, get: function() {
      return l.KeywordCxt;
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
    var y = /* @__PURE__ */ pr();
    Object.defineProperty(t, "ValidationError", { enumerable: !0, get: function() {
      return y.default;
    } });
    var f = /* @__PURE__ */ On();
    Object.defineProperty(t, "MissingRefError", { enumerable: !0, get: function() {
      return f.default;
    } });
  })(Vi, Vi.exports)), Vi.exports;
}
var Ic;
function oh() {
  return Ic || (Ic = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.formatLimitDefinition = void 0;
    const t = /* @__PURE__ */ ah(), n = /* @__PURE__ */ te(), i = n.operators, o = {
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
        const { gen: c, data: l, schemaCode: u, keyword: y, it: f } = a, { opts: h, self: x } = f;
        if (!h.validateFormats)
          return;
        const w = new t.KeywordCxt(f, x.RULES.all.format.definition, "format");
        w.$data ? v() : I();
        function v() {
          const m = c.scopeValue("formats", {
            ref: x.formats,
            code: h.code.formats
          }), d = c.const("fmt", (0, n._)`${m}[${w.schemaCode}]`);
          a.fail$data((0, n.or)((0, n._)`typeof ${d} != "object"`, (0, n._)`${d} instanceof RegExp`, (0, n._)`typeof ${d}.compare != "function"`, g(d)));
        }
        function I() {
          const m = w.schema, d = x.formats[m];
          if (!d || d === !0)
            return;
          if (typeof d != "object" || d instanceof RegExp || typeof d.compare != "function")
            throw new Error(`"${y}": format "${m}" does not define "compare" function`);
          const p = c.scopeValue("formats", {
            key: m,
            ref: d,
            code: h.code.formats ? (0, n._)`${h.code.formats}${(0, n.getProperty)(m)}` : void 0
          });
          a.fail$data(g(p));
        }
        function g(m) {
          return (0, n._)`${m}.compare(${l}, ${u}) ${o[y].fail} 0`;
        }
      },
      dependencies: ["format"]
    };
    const s = (a) => (a.addKeyword(e.formatLimitDefinition), a);
    e.default = s;
  })(Gr)), Gr;
}
var Ac;
function ch() {
  return Ac || (Ac = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    const n = Wf(), i = oh(), o = /* @__PURE__ */ te(), r = new o.Name("fullFormats"), s = new o.Name("fastFormats"), a = (l, u = { keywords: !0 }) => {
      if (Array.isArray(u))
        return c(l, u, n.fullFormats, r), l;
      const [y, f] = u.mode === "fast" ? [n.fastFormats, s] : [n.fullFormats, r], h = u.formats || n.formatNames;
      return c(l, h, y, f), u.keywords && (0, i.default)(l), l;
    };
    a.get = (l, u = "full") => {
      const f = (u === "fast" ? n.fastFormats : n.fullFormats)[l];
      if (!f)
        throw new Error(`Unknown format "${l}"`);
      return f;
    };
    function c(l, u, y, f) {
      var h, x;
      (h = (x = l.opts.code).formats) !== null && h !== void 0 || (x.formats = (0, o._)`require("ajv-formats/dist/formats").${f}`);
      for (const w of u)
        l.addFormat(w, y[w]);
    }
    e.exports = t = a, Object.defineProperty(t, "__esModule", { value: !0 }), t.default = a;
  })(Ui, Ui.exports)), Ui.exports;
}
var dh = ch();
const lh = /* @__PURE__ */ da(dh);
/*! noble-ed25519 - MIT License (c) 2019 Paul Miller (paulmillr.com) */
const uh = {
  p: 0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffedn,
  n: 0x1000000000000000000000000000000014def9dea2f79cd65812631a5cf5d3edn,
  a: 0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffecn,
  d: 0x52036cee2b6ffe738cc740797779e89800700a4d4141d8ab75eb4dca135978a3n,
  Gx: 0x216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51an,
  Gy: 0x6666666666666666666666666666666666666666666666666666666666666658n
}, { p: qe, n: Ji, Gx: qc, Gy: Rc, a: Br, d: Zr } = uh, ph = 8n, Mt = 32, _n = 64, Ge = (e = "") => {
  throw new Error(e);
}, fh = (e) => typeof e == "bigint", el = (e) => typeof e == "string", hh = (e) => e instanceof Uint8Array || ArrayBuffer.isView(e) && e.constructor.name === "Uint8Array", Kt = (e, t) => !hh(e) || typeof t == "number" && t > 0 && e.length !== t ? Ge("Uint8Array expected") : e, hr = (e) => new Uint8Array(e), fa = (e) => Uint8Array.from(e), tl = (e, t) => e.toString(16).padStart(t, "0"), ha = (e) => Array.from(Kt(e)).map((t) => tl(t, 2)).join(""), bt = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 }, jc = (e) => {
  if (e >= bt._0 && e <= bt._9)
    return e - bt._0;
  if (e >= bt.A && e <= bt.F)
    return e - (bt.A - 10);
  if (e >= bt.a && e <= bt.f)
    return e - (bt.a - 10);
}, ma = (e) => {
  const t = "hex invalid";
  if (!el(e))
    return Ge(t);
  const n = e.length, i = n / 2;
  if (n % 2)
    return Ge(t);
  const o = hr(i);
  for (let r = 0, s = 0; r < i; r++, s += 2) {
    const a = jc(e.charCodeAt(s)), c = jc(e.charCodeAt(s + 1));
    if (a === void 0 || c === void 0)
      return Ge(t);
    o[r] = a * 16 + c;
  }
  return o;
}, an = (e, t) => Kt(el(e) ? ma(e) : fa(Kt(e)), t), nl = () => globalThis?.crypto, mh = () => nl()?.subtle ?? Ge("crypto.subtle must be defined"), Tn = (...e) => {
  const t = hr(e.reduce((i, o) => i + Kt(o).length, 0));
  let n = 0;
  return e.forEach((i) => {
    t.set(i, n), n += i.length;
  }), t;
}, yh = (e = Mt) => nl().getRandomValues(hr(e)), tr = BigInt, Zt = (e, t, n, i = "bad number: out of range") => fh(e) && t <= e && e < n ? e : Ge(i), Y = (e, t = qe) => {
  const n = e % t;
  return n >= 0n ? n : t + n;
}, il = (e) => Y(e, Ji), rl = (e, t) => {
  (e === 0n || t <= 0n) && Ge("no inverse n=" + e + " mod=" + t);
  let n = Y(e, t), i = t, o = 0n, r = 1n;
  for (; n !== 0n; ) {
    const s = i / n, a = i % n, c = o - r * s;
    i = n, n = a, o = r, r = c;
  }
  return i === 1n ? Y(o, t) : Ge("no inverse");
}, $c = (e) => e instanceof At ? e : Ge("Point expected"), Vs = 2n ** 256n, ot = class ot {
  constructor(t, n, i, o) {
    ht(this, "ex");
    ht(this, "ey");
    ht(this, "ez");
    ht(this, "et");
    const r = Vs;
    this.ex = Zt(t, 0n, r), this.ey = Zt(n, 0n, r), this.ez = Zt(i, 1n, r), this.et = Zt(o, 0n, r), Object.freeze(this);
  }
  static fromAffine(t) {
    return new ot(t.x, t.y, 1n, Y(t.x * t.y));
  }
  /** RFC8032 5.1.3: Uint8Array to Point. */
  static fromBytes(t, n = !1) {
    const i = Zr, o = fa(Kt(t, Mt)), r = t[31];
    o[31] = r & -129;
    const s = ya(o);
    Zt(s, 0n, n ? Vs : qe);
    const c = Y(s * s), l = Y(c - 1n), u = Y(i * c + 1n);
    let { isValid: y, value: f } = vh(l, u);
    y || Ge("bad point: y not sqrt");
    const h = (f & 1n) === 1n, x = (r & 128) !== 0;
    return !n && f === 0n && x && Ge("bad point: x==0, isLastByteOdd"), x !== h && (f = Y(-f)), new ot(f, s, 1n, Y(f * s));
  }
  /** Checks if the point is valid and on-curve. */
  assertValidity() {
    const t = Br, n = Zr, i = this;
    if (i.is0())
      throw new Error("bad point: ZERO");
    const { ex: o, ey: r, ez: s, et: a } = i, c = Y(o * o), l = Y(r * r), u = Y(s * s), y = Y(u * u), f = Y(c * t), h = Y(u * Y(f + l)), x = Y(y + Y(n * Y(c * l)));
    if (h !== x)
      throw new Error("bad point: equation left != right (1)");
    const w = Y(o * r), v = Y(s * a);
    if (w !== v)
      throw new Error("bad point: equation left != right (2)");
    return this;
  }
  /** Equality check: compare points P&Q. */
  equals(t) {
    const { ex: n, ey: i, ez: o } = this, { ex: r, ey: s, ez: a } = $c(t), c = Y(n * a), l = Y(r * o), u = Y(i * a), y = Y(s * o);
    return c === l && u === y;
  }
  is0() {
    return this.equals(sn);
  }
  /** Flip point over y coordinate. */
  negate() {
    return new ot(Y(-this.ex), this.ey, this.ez, Y(-this.et));
  }
  /** Point doubling. Complete formula. Cost: `4M + 4S + 1*a + 6add + 1*2`. */
  double() {
    const { ex: t, ey: n, ez: i } = this, o = Br, r = Y(t * t), s = Y(n * n), a = Y(2n * Y(i * i)), c = Y(o * r), l = t + n, u = Y(Y(l * l) - r - s), y = c + s, f = y - a, h = c - s, x = Y(u * f), w = Y(y * h), v = Y(u * h), I = Y(f * y);
    return new ot(x, w, I, v);
  }
  /** Point addition. Complete formula. Cost: `8M + 1*k + 8add + 1*2`. */
  add(t) {
    const { ex: n, ey: i, ez: o, et: r } = this, { ex: s, ey: a, ez: c, et: l } = $c(t), u = Br, y = Zr, f = Y(n * s), h = Y(i * a), x = Y(r * y * l), w = Y(o * c), v = Y((n + i) * (s + a) - f - h), I = Y(w - x), g = Y(w + x), m = Y(h - u * f), d = Y(v * I), p = Y(g * m), b = Y(v * m), S = Y(I * g);
    return new ot(d, p, S, b);
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
      return sn;
    if (Zt(t, 1n, Ji), t === 1n)
      return this;
    if (this.equals(Ot))
      return $h(t).p;
    let i = sn, o = Ot;
    for (let r = this; t > 0n; r = r.double(), t >>= 1n)
      t & 1n ? i = i.add(r) : n && (o = o.add(r));
    return i;
  }
  /** Convert point to 2d xy affine point. (X, Y, Z) ∋ (x=X/Z, y=Y/Z) */
  toAffine() {
    const { ex: t, ey: n, ez: i } = this;
    if (this.equals(sn))
      return { x: 0n, y: 1n };
    const o = rl(i, qe);
    return Y(i * o) !== 1n && Ge("invalid inverse"), { x: Y(t * o), y: Y(n * o) };
  }
  toBytes() {
    const { x: t, y: n } = this.assertValidity().toAffine(), i = sl(n);
    return i[31] |= t & 1n ? 128 : 0, i;
  }
  toHex() {
    return ha(this.toBytes());
  }
  // encode to hex string
  clearCofactor() {
    return this.multiply(tr(ph), !1);
  }
  isSmallOrder() {
    return this.clearCofactor().is0();
  }
  isTorsionFree() {
    let t = this.multiply(Ji / 2n, !1).double();
    return Ji % 2n && (t = t.add(this)), t.is0();
  }
  static fromHex(t, n) {
    return ot.fromBytes(an(t), n);
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
const Ot = new At(qc, Rc, 1n, Y(qc * Rc)), sn = new At(0n, 1n, 1n, 0n);
At.BASE = Ot;
At.ZERO = sn;
const sl = (e) => ma(tl(Zt(e, 0n, Vs), _n)).reverse(), ya = (e) => tr("0x" + ha(fa(Kt(e)).reverse())), st = (e, t) => {
  let n = e;
  for (; t-- > 0n; )
    n *= n, n %= qe;
  return n;
}, gh = (e) => {
  const n = e * e % qe * e % qe, i = st(n, 2n) * n % qe, o = st(i, 1n) * e % qe, r = st(o, 5n) * o % qe, s = st(r, 10n) * r % qe, a = st(s, 20n) * s % qe, c = st(a, 40n) * a % qe, l = st(c, 80n) * c % qe, u = st(l, 80n) * c % qe, y = st(u, 10n) * r % qe;
  return { pow_p_5_8: st(y, 2n) * e % qe, b2: n };
}, Pc = 0x2b8324804fc1df0b2b4d00993dfbd7a72f431806ad2fe478c4ee1b274a0ea0b0n, vh = (e, t) => {
  const n = Y(t * t * t), i = Y(n * n * t), o = gh(e * i).pow_p_5_8;
  let r = Y(e * n * o);
  const s = Y(t * r * r), a = r, c = Y(r * Pc), l = s === e, u = s === Y(-e), y = s === Y(-e * Pc);
  return l && (r = a), (u || y) && (r = c), (Y(r) & 1n) === 1n && (r = Y(-r)), { isValid: l || u, value: r };
}, nr = (e) => il(ya(e)), ga = (...e) => qh.sha512Async(...e), bh = (e) => {
  const t = e.slice(0, Mt);
  t[0] &= 248, t[31] &= 127, t[31] |= 64;
  const n = e.slice(Mt, _n), i = nr(t), o = Ot.multiply(i), r = o.toBytes();
  return { head: t, prefix: n, scalar: i, point: o, pointBytes: r };
}, wh = (e) => ga(an(e, Mt)).then(bh), al = (e) => ga(e.hashable).then(e.finish), xh = (e, t, n) => {
  const { pointBytes: i, scalar: o } = e, r = nr(t), s = Ot.multiply(r).toBytes();
  return { hashable: Tn(s, i, n), finish: (l) => {
    const u = il(r + nr(l) * o);
    return Kt(Tn(s, sl(u)), _n);
  } };
}, Sh = async (e, t) => {
  const n = an(e), i = await wh(t), o = await ga(i.prefix, n);
  return al(xh(i, o, n));
}, ol = { zip215: !0 }, Ih = (e, t, n, i = ol) => {
  e = an(e, _n), t = an(t), n = an(n, Mt);
  const { zip215: o } = i;
  let r, s, a, c, l = Uint8Array.of();
  try {
    r = At.fromHex(n, o), s = At.fromHex(e.slice(0, Mt), o), a = ya(e.slice(Mt, _n)), c = Ot.multiply(a, !1), l = Tn(s.toBytes(), r.toBytes(), t);
  } catch {
  }
  return { hashable: l, finish: (y) => {
    if (c == null || !o && r.isSmallOrder())
      return !1;
    const f = nr(y);
    return s.add(r.multiply(f, !1)).add(c.negate()).clearCofactor().is0();
  } };
}, Ah = async (e, t, n, i = ol) => al(Ih(e, t, n, i)), qh = {
  sha512Async: async (...e) => {
    const t = mh(), n = Tn(...e);
    return hr(await t.digest("SHA-512", n.buffer));
  },
  sha512Sync: void 0,
  bytesToHex: ha,
  hexToBytes: ma,
  concatBytes: Tn,
  mod: Y,
  invert: rl,
  randomBytes: yh
}, ir = 8, Rh = 256, cl = Math.ceil(Rh / ir) + 1, Fs = 2 ** (ir - 1), jh = () => {
  const e = [];
  let t = Ot, n = t;
  for (let i = 0; i < cl; i++) {
    n = t, e.push(n);
    for (let o = 1; o < Fs; o++)
      n = n.add(t), e.push(n);
    t = n.double();
  }
  return e;
};
let _c;
const Tc = (e, t) => {
  const n = t.negate();
  return e ? n : t;
}, $h = (e) => {
  const t = _c || (_c = jh());
  let n = sn, i = Ot;
  const o = 2 ** ir, r = o, s = tr(o - 1), a = tr(ir);
  for (let c = 0; c < cl; c++) {
    let l = Number(e & s);
    e >>= a, l > Fs && (l -= r, e += 1n);
    const u = c * Fs, y = u, f = u + Math.abs(l) - 1, h = c % 2 !== 0, x = l < 0;
    l === 0 ? i = i.add(Tc(h, t[y])) : n = n.add(Tc(x, t[f]));
  }
  return { p: n, f: i };
};
var Hr = {}, Jr, Cc;
function va() {
  return Cc || (Cc = 1, Jr = class dl {
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
      return new dl(t, new Map(n), i);
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
  }), Jr;
}
var Kr = {}, Ec;
function Ph() {
  return Ec || (Ec = 1, (function(e, t) {
    if (e.setImmediate)
      return;
    var n = 1, i = {}, o = !1, r = e.document, s;
    function a(g) {
      typeof g != "function" && (g = new Function("" + g));
      for (var m = new Array(arguments.length - 1), d = 0; d < m.length; d++)
        m[d] = arguments[d + 1];
      var p = { callback: g, args: m };
      return i[n] = p, s(n), n++;
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
    function u(g) {
      if (o)
        setTimeout(u, 0, g);
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
          u(g);
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
        d.source === e && typeof d.data == "string" && d.data.indexOf(g) === 0 && u(+d.data.slice(g.length));
      };
      e.addEventListener ? e.addEventListener("message", m, !1) : e.attachEvent("onmessage", m), s = function(d) {
        e.postMessage(g + d, "*");
      };
    }
    function x() {
      var g = new MessageChannel();
      g.port1.onmessage = function(m) {
        var d = m.data;
        u(d);
      }, s = function(m) {
        g.port2.postMessage(m);
      };
    }
    function w() {
      var g = r.documentElement;
      s = function(m) {
        var d = r.createElement("script");
        d.onreadystatechange = function() {
          u(m), d.onreadystatechange = null, g.removeChild(d), d = null;
        }, g.appendChild(d);
      };
    }
    function v() {
      s = function(g) {
        setTimeout(u, 0, g);
      };
    }
    var I = Object.getPrototypeOf && Object.getPrototypeOf(e);
    I = I && I.setTimeout ? I : e, {}.toString.call(e.process) === "[object process]" ? y() : f() ? h() : e.MessageChannel ? x() : r && "onreadystatechange" in r.createElement("script") ? w() : v(), I.setImmediate = a, I.clearImmediate = c;
  })(typeof self > "u" ? typeof Za > "u" ? Kr : Za : self)), Kr;
}
/*!
 * Copyright (c) 2016-2022 Digital Bazaar, Inc. All rights reserved.
 */
var Qr, kc;
function mr() {
  if (kc) return Qr;
  kc = 1, Ph();
  const e = self.crypto || self.msCrypto;
  return Qr = class {
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
  }, Qr;
}
/*!
 * Copyright (c) 2016-2022 Digital Bazaar, Inc. All rights reserved.
 */
var Wr, Mc;
function ll() {
  return Mc || (Mc = 1, Wr = class {
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
  }), Wr;
}
/*!
 * Copyright (c) 2016-2022 Digital Bazaar, Inc. All rights reserved.
 */
var Xr, Oc;
function ba() {
  if (Oc) return Xr;
  Oc = 1;
  const t = "http://www.w3.org/1999/02/22-rdf-syntax-ns#" + "langString", n = "http://www.w3.org/2001/XMLSchema#string", i = "NamedNode", o = "BlankNode", r = "Literal", s = "DefaultGraph", a = {};
  (() => {
    const h = "(?:<([^:]+:[^>]*)>)", w = "A-Za-zÀ-ÖØ-öø-˿Ͱ-ͽͿ-῿‌-‍⁰-↏Ⰰ-⿯、-퟿豈-﷏ﷰ-�" + "_", v = w + "0-9-·̀-ͯ‿-⁀", g = "(_:(?:[" + w + "0-9])(?:(?:[" + v + ".])*(?:[" + v + "]))?)", m = '"([^"\\\\]*(?:\\\\.[^"\\\\]*)*)"', d = "(?:\\^\\^" + h + ")", b = "(?:" + m + "(?:" + d + "|" + "(?:@([a-zA-Z]+(?:-[a-zA-Z0-9]+)*))" + ")?)", S = "[ \\t]+", A = "[ \\t]*", P = "(?:" + h + "|" + g + ")" + S, R = h + S, E = "(?:" + h + "|" + g + "|" + b + ")" + A, k = "(?:\\.|(?:(?:" + h + "|" + g + ")" + A + "\\.))";
    a.eoln = /(?:\r\n)|(?:\n)|(?:\r)/g, a.empty = new RegExp("^" + A + "$"), a.quad = new RegExp(
      "^" + A + P + R + E + k + A + "$"
    );
  })(), Xr = class Ki {
    /**
     * Parses RDF in the form of N-Quads.
     *
     * @param input the N-Quads input to parse.
     *
     * @return an RDF dataset (an array of quads per http://rdf.js.org/).
     */
    static parse(x) {
      const w = [], v = {}, I = x.split(a.eoln);
      let g = 0;
      for (const m of I) {
        if (g++, a.empty.test(m))
          continue;
        const d = m.match(a.quad);
        if (d === null)
          throw new Error("N-Quads parse error on line " + g + ".");
        const p = { subject: null, predicate: null, object: null, graph: null };
        if (d[1] !== void 0 ? p.subject = { termType: i, value: d[1] } : p.subject = { termType: o, value: d[2] }, p.predicate = { termType: i, value: d[3] }, d[4] !== void 0 ? p.object = { termType: i, value: d[4] } : d[5] !== void 0 ? p.object = { termType: o, value: d[5] } : (p.object = {
          termType: r,
          value: void 0,
          datatype: {
            termType: i
          }
        }, d[7] !== void 0 ? p.object.datatype.value = d[7] : d[8] !== void 0 ? (p.object.datatype.value = t, p.object.language = d[8]) : p.object.datatype.value = n, p.object.value = f(d[6])), d[9] !== void 0 ? p.graph = {
          termType: i,
          value: d[9]
        } : d[10] !== void 0 ? p.graph = {
          termType: o,
          value: d[10]
        } : p.graph = {
          termType: s,
          value: ""
        }, !(p.graph.value in v))
          v[p.graph.value] = [p], w.push(p);
        else {
          let b = !0;
          const S = v[p.graph.value];
          for (const A of S)
            if (c(A, p)) {
              b = !1;
              break;
            }
          b && (S.push(p), w.push(p));
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
      Array.isArray(x) || (x = Ki.legacyDatasetToQuads(x));
      const w = [];
      for (const v of x)
        w.push(Ki.serializeQuad(v));
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
    static serializeQuadComponents(x, w, v, I) {
      let g = "";
      return x.termType === i ? g += `<${x.value}>` : g += `${x.value}`, g += ` <${w.value}> `, v.termType === i ? g += `<${v.value}>` : v.termType === o ? g += v.value : (g += `"${u(v.value)}"`, v.datatype.value === t ? v.language && (g += `@${v.language}`) : v.datatype.value !== n && (g += `^^<${v.datatype.value}>`)), I.termType === i ? g += ` <${I.value}>` : I.termType === o && (g += ` ${I.value}`), g += ` .
`, g;
    }
    /**
     * Converts an RDF quad to an N-Quad string (a single quad).
     *
     * @param quad the RDF quad convert.
     *
     * @return the N-Quad string.
     */
    static serializeQuad(x) {
      return Ki.serializeQuadComponents(
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
      const w = [], v = {
        "blank node": o,
        IRI: i,
        literal: r
      };
      for (const I in x)
        x[I].forEach((m) => {
          const d = {};
          for (const p in m) {
            const b = m[p], S = {
              termType: v[b.type],
              value: b.value
            };
            S.termType === r && (S.datatype = {
              termType: i
            }, "datatype" in b && (S.datatype.value = b.datatype), "language" in b ? ("datatype" in b || (S.datatype.value = t), S.language = b.language) : "datatype" in b || (S.datatype.value = n)), d[p] = S;
          }
          I === "@default" ? d.graph = {
            termType: s,
            value: ""
          } : d.graph = {
            termType: I.startsWith("_:") ? o : i,
            value: I
          }, w.push(d);
        });
      return w;
    }
  };
  function c(h, x) {
    return !(h.subject.termType === x.subject.termType && h.object.termType === x.object.termType) || !(h.subject.value === x.subject.value && h.predicate.value === x.predicate.value && h.object.value === x.object.value) ? !1 : h.object.termType !== r ? !0 : h.object.datatype.termType === x.object.datatype.termType && h.object.language === x.object.language && h.object.datatype.value === x.object.datatype.value;
  }
  const l = /["\\\n\r]/g;
  function u(h) {
    return h.replace(l, function(x) {
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
  const y = /(?:\\([tbnrf"'\\]))|(?:\\u([0-9A-Fa-f]{4}))|(?:\\U([0-9A-Fa-f]{8}))/g;
  function f(h) {
    return h.replace(y, function(x, w, v, I) {
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
      if (v)
        return String.fromCharCode(parseInt(v, 16));
      if (I)
        throw new Error("Unsupported U escape");
    });
  }
  return Xr;
}
/*!
 * Copyright (c) 2016-2022 Digital Bazaar, Inc. All rights reserved.
 */
var Yr, Lc;
function ul() {
  if (Lc) return Yr;
  Lc = 1;
  const e = va(), t = mr(), n = ll(), i = ba();
  Yr = class {
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
      const u = [...a.keys()].sort(), y = [];
      for (const h of u) {
        const x = a.get(h);
        if (x.length > 1) {
          y.push(x);
          continue;
        }
        const w = x[0];
        this.canonicalIssuer.getId(w);
      }
      for (const h of y) {
        const x = [];
        for (const w of h) {
          if (this.canonicalIssuer.hasId(w))
            continue;
          const v = new e("_:b");
          v.getId(w);
          const I = await this.hashNDegreeQuads(w, v);
          x.push(I);
        }
        x.sort(o);
        for (const w of x) {
          const v = w.issuer.getOldIds();
          for (const I of v)
            this.canonicalIssuer.getId(I);
        }
      }
      const f = [];
      for (const h of this.quads) {
        const x = i.serializeQuadComponents(
          this._componentWithCanonicalId(h.subject),
          h.predicate,
          this._componentWithCanonicalId(h.object),
          this._componentWithCanonicalId(h.graph)
        );
        f.push(x);
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
      const u = this.createMessageDigest();
      for (const y of a)
        u.update(y);
      return c.hash = await u.digest(), c.hash;
    }
    // 4.7) Hash Related Blank Node
    async hashRelatedBlankNode(s, a, c, l) {
      let u;
      this.canonicalIssuer.hasId(s) ? u = this.canonicalIssuer.getId(s) : c.hasId(s) ? u = c.getId(s) : u = this.blankNodeInfo.get(s).hash;
      const y = this.createMessageDigest();
      return y.update(l), l !== "g" && y.update(this.getRelatedPredicate(a)), y.update(u), y.digest();
    }
    // 4.8) Hash N-Degree Quads
    async hashNDegreeQuads(s, a) {
      const c = this.deepIterations.get(s) || 0;
      if (c > this.maxDeepIterations)
        throw new Error(
          `Maximum deep iterations (${this.maxDeepIterations}) exceeded.`
        );
      this.deepIterations.set(s, c + 1);
      const l = this.createMessageDigest(), u = await this.createHashToRelated(s, a), y = [...u.keys()].sort();
      for (const f of y) {
        l.update(f);
        let h = "", x;
        const w = new n(u.get(f));
        let v = 0;
        for (; w.hasNext(); ) {
          const I = w.next();
          ++v % 3 === 0 && await this._yield();
          let g = a.clone(), m = "";
          const d = [];
          let p = !1;
          for (const b of I)
            if (this.canonicalIssuer.hasId(b) ? m += this.canonicalIssuer.getId(b) : (g.hasId(b) || d.push(b), m += g.getId(b)), h.length !== 0 && m > h) {
              p = !0;
              break;
            }
          if (!p) {
            for (const b of d) {
              const S = await this.hashNDegreeQuads(b, g);
              if (m += g.getId(b), m += `<${S.hash}>`, g = S.issuer, h.length !== 0 && m > h) {
                p = !0;
                break;
              }
            }
            p || (h.length === 0 || m < h) && (h = m, x = g);
          }
        }
        l.update(h), a = x;
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
      let u = 0;
      for (const y of l)
        ++u % 100 === 0 && await this._yield(), await Promise.all([
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
    async _addRelatedBlankNodeHash({ quad: s, component: a, position: c, id: l, issuer: u, hashToRelated: y }) {
      if (!(a.termType === "BlankNode" && a.value !== l))
        return;
      const f = a.value, h = await this.hashRelatedBlankNode(
        f,
        s,
        u,
        c
      ), x = y.get(h);
      x ? x.push(f) : y.set(h, [f]);
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
  return Yr;
}
/*!
 * Copyright (c) 2016-2022 Digital Bazaar, Inc. All rights reserved.
 */
var es, Nc;
function _h() {
  if (Nc) return es;
  Nc = 1;
  const e = mr(), t = ul();
  return es = class extends t {
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
        let l, u;
        if (c.subject.termType === "BlankNode" && c.subject.value !== i)
          u = c.subject.value, l = "p";
        else if (c.object.termType === "BlankNode" && c.object.value !== i)
          u = c.object.value, l = "r";
        else
          continue;
        ++a % 100 === 0 && await this._yield();
        const y = await this.hashRelatedBlankNode(
          u,
          c,
          o,
          l
        ), f = r.get(y);
        f ? f.push(u) : r.set(y, [u]);
      }
      return r;
    }
  }, es;
}
/*!
 * Copyright (c) 2016-2022 Digital Bazaar, Inc. All rights reserved.
 */
var ts, Dc;
function pl() {
  if (Dc) return ts;
  Dc = 1;
  const e = va(), t = mr(), n = ll(), i = ba();
  ts = class {
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
      const l = [...a.keys()].sort(), u = [];
      for (const f of l) {
        const h = a.get(f);
        if (h.length > 1) {
          u.push(h);
          continue;
        }
        const x = h[0];
        this.canonicalIssuer.getId(x);
      }
      for (const f of u) {
        const h = [];
        for (const x of f) {
          if (this.canonicalIssuer.hasId(x))
            continue;
          const w = new e("_:b");
          w.getId(x);
          const v = this.hashNDegreeQuads(x, w);
          h.push(v);
        }
        h.sort(o);
        for (const x of h) {
          const w = x.issuer.getOldIds();
          for (const v of w)
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
      const u = this.createMessageDigest();
      for (const y of a)
        u.update(y);
      return c.hash = u.digest(), c.hash;
    }
    // 4.7) Hash Related Blank Node
    hashRelatedBlankNode(s, a, c, l) {
      let u;
      this.canonicalIssuer.hasId(s) ? u = this.canonicalIssuer.getId(s) : c.hasId(s) ? u = c.getId(s) : u = this.blankNodeInfo.get(s).hash;
      const y = this.createMessageDigest();
      return y.update(l), l !== "g" && y.update(this.getRelatedPredicate(a)), y.update(u), y.digest();
    }
    // 4.8) Hash N-Degree Quads
    hashNDegreeQuads(s, a) {
      const c = this.deepIterations.get(s) || 0;
      if (c > this.maxDeepIterations)
        throw new Error(
          `Maximum deep iterations (${this.maxDeepIterations}) exceeded.`
        );
      this.deepIterations.set(s, c + 1);
      const l = this.createMessageDigest(), u = this.createHashToRelated(s, a), y = [...u.keys()].sort();
      for (const f of y) {
        l.update(f);
        let h = "", x;
        const w = new n(u.get(f));
        for (; w.hasNext(); ) {
          const v = w.next();
          let I = a.clone(), g = "";
          const m = [];
          let d = !1;
          for (const p of v)
            if (this.canonicalIssuer.hasId(p) ? g += this.canonicalIssuer.getId(p) : (I.hasId(p) || m.push(p), g += I.getId(p)), h.length !== 0 && g > h) {
              d = !0;
              break;
            }
          if (!d) {
            for (const p of m) {
              const b = this.hashNDegreeQuads(p, I);
              if (g += I.getId(p), g += `<${b.hash}>`, I = b.issuer, h.length !== 0 && g > h) {
                d = !0;
                break;
              }
            }
            d || (h.length === 0 || g < h) && (h = g, x = I);
          }
        }
        l.update(h), a = x;
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
      for (const u of l)
        this._addRelatedBlankNodeHash({
          quad: u,
          component: u.subject,
          position: "s",
          id: s,
          issuer: a,
          hashToRelated: c
        }), this._addRelatedBlankNodeHash({
          quad: u,
          component: u.object,
          position: "o",
          id: s,
          issuer: a,
          hashToRelated: c
        }), this._addRelatedBlankNodeHash({
          quad: u,
          component: u.graph,
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
    _addRelatedBlankNodeHash({ quad: s, component: a, position: c, id: l, issuer: u, hashToRelated: y }) {
      if (!(a.termType === "BlankNode" && a.value !== l))
        return;
      const f = a.value, h = this.hashRelatedBlankNode(f, s, u, c), x = y.get(h);
      x ? x.push(f) : y.set(h, [f]);
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
  return ts;
}
/*!
 * Copyright (c) 2016-2021 Digital Bazaar, Inc. All rights reserved.
 */
var ns, zc;
function Th() {
  if (zc) return ns;
  zc = 1;
  const e = mr(), t = pl();
  return ns = class extends t {
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
        const u = this.hashRelatedBlankNode(l, a, o, c), y = r.get(u);
        y ? y.push(l) : r.set(u, [l]);
      }
      return r;
    }
  }, ns;
}
const Ch = {}, Eh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ch
}, Symbol.toStringTag, { value: "Module" })), kh = /* @__PURE__ */ Cu(Eh);
var Uc;
function Mh() {
  return Uc || (Uc = 1, (function(e) {
    const t = ul(), n = _h(), i = pl(), o = Th();
    let r;
    try {
      r = kh;
    } catch {
    }
    function s(a) {
      return Array.isArray(a) ? a : e.NQuads.legacyDatasetToQuads(a);
    }
    e.NQuads = ba(), e.IdentifierIssuer = va(), e._rdfCanonizeNative = function(a) {
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
        return new Promise((u, y) => r.canonize(l, c, (f, h) => f ? y(f) : u(h)));
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
  })(Hr)), Hr;
}
var is, Vc;
function wa() {
  return Vc || (Vc = 1, is = Mh()), is;
}
var rs, Fc;
function Ne() {
  if (Fc) return rs;
  Fc = 1;
  const e = {};
  return rs = e, e.isArray = Array.isArray, e.isBoolean = (t) => typeof t == "boolean" || Object.prototype.toString.call(t) === "[object Boolean]", e.isDouble = (t) => e.isNumber(t) && (String(t).indexOf(".") !== -1 || Math.abs(t) >= 1e21), e.isEmptyObject = (t) => e.isObject(t) && Object.keys(t).length === 0, e.isNumber = (t) => typeof t == "number" || Object.prototype.toString.call(t) === "[object Number]", e.isNumeric = (t) => !isNaN(parseFloat(t)) && isFinite(t), e.isObject = (t) => Object.prototype.toString.call(t) === "[object Object]", e.isString = (t) => typeof t == "string" || Object.prototype.toString.call(t) === "[object String]", e.isUndefined = (t) => typeof t > "u", rs;
}
var ss, Gc;
function qt() {
  if (Gc) return ss;
  Gc = 1;
  const e = Ne(), t = {};
  return ss = t, t.isSubject = (n) => e.isObject(n) && !("@value" in n || "@set" in n || "@list" in n) ? Object.keys(n).length > 1 || !("@id" in n) : !1, t.isSubjectReference = (n) => (
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
  }, ss;
}
var as, Bc;
function He() {
  return Bc || (Bc = 1, as = class extends Error {
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
  }), as;
}
var os, Zc;
function Ze() {
  if (Zc) return os;
  Zc = 1;
  const e = qt(), t = Ne(), n = wa().IdentifierIssuer, i = He(), o = /^[a-zA-Z]{1,8}(-[a-zA-Z0-9]{1,8})*$/, r = /(?:<[^>]*?>|"[^"]*?"|[^,])+/g, s = /\s*<([^>]*?)>\s*(?:;\s*(.*))?/, a = /(.*?)=(?:(?:"([^"]*?)")|([^"]*?))\s*(?:(?:;\s*)|$)/g, c = /^@[a-zA-Z]+$/, l = {
    headers: {
      accept: "application/ld+json, application/json"
    }
  }, u = {};
  os = u, u.IdentifierIssuer = n, u.REGEX_BCP47 = o, u.REGEX_KEYWORD = c, u.clone = function(f) {
    if (f && typeof f == "object") {
      let h;
      if (t.isArray(f)) {
        h = [];
        for (let x = 0; x < f.length; ++x)
          h[x] = u.clone(f[x]);
      } else if (f instanceof Map) {
        h = /* @__PURE__ */ new Map();
        for (const [x, w] of f)
          h.set(x, u.clone(w));
      } else if (f instanceof Set) {
        h = /* @__PURE__ */ new Set();
        for (const x of f)
          h.add(u.clone(x));
      } else if (t.isObject(f)) {
        h = {};
        for (const x in f)
          h[x] = u.clone(f[x]);
      } else
        h = f.toString();
      return h;
    }
    return f;
  }, u.asArray = function(f) {
    return Array.isArray(f) ? f : [f];
  }, u.buildHeaders = (f = {}) => {
    if (Object.keys(f).some(
      (x) => x.toLowerCase() === "accept"
    ))
      throw new RangeError(
        'Accept header may not be specified; only "' + l.headers.accept + '" is supported.'
      );
    return Object.assign({ Accept: l.headers.accept }, f);
  }, u.parseLinkHeader = (f) => {
    const h = {}, x = f.match(r);
    for (let w = 0; w < x.length; ++w) {
      let v = x[w].match(s);
      if (!v)
        continue;
      const I = { target: v[1] }, g = v[2];
      for (; v = a.exec(g); )
        I[v[1]] = v[2] === void 0 ? v[3] : v[2];
      const m = I.rel || "";
      Array.isArray(h[m]) ? h[m].push(I) : h.hasOwnProperty(m) ? h[m] = [h[m], I] : h[m] = I;
    }
    return h;
  }, u.validateTypeValue = (f, h) => {
    if (!t.isString(f) && !(t.isArray(f) && f.every((x) => t.isString(x)))) {
      if (h && t.isObject(f))
        switch (Object.keys(f).length) {
          case 0:
            return;
          case 1:
            if ("@default" in f && u.asArray(f["@default"]).every((x) => t.isString(x)))
              return;
        }
      throw new i(
        'Invalid JSON-LD syntax; "@type" value must a string, an array of strings, an empty object, or a default object.',
        "jsonld.SyntaxError",
        { code: "invalid type value", value: f }
      );
    }
  }, u.hasProperty = (f, h) => {
    if (f.hasOwnProperty(h)) {
      const x = f[h];
      return !t.isArray(x) || x.length > 0;
    }
    return !1;
  }, u.hasValue = (f, h, x) => {
    if (u.hasProperty(f, h)) {
      let w = f[h];
      const v = e.isList(w);
      if (t.isArray(w) || v) {
        v && (w = w["@list"]);
        for (let I = 0; I < w.length; ++I)
          if (u.compareValues(x, w[I]))
            return !0;
      } else if (!t.isArray(x))
        return u.compareValues(x, w);
    }
    return !1;
  }, u.addValue = (f, h, x, w) => {
    if (w = w || {}, "propertyIsArray" in w || (w.propertyIsArray = !1), "valueIsArray" in w || (w.valueIsArray = !1), "allowDuplicate" in w || (w.allowDuplicate = !0), "prependValue" in w || (w.prependValue = !1), w.valueIsArray)
      f[h] = x;
    else if (t.isArray(x)) {
      x.length === 0 && w.propertyIsArray && !f.hasOwnProperty(h) && (f[h] = []), w.prependValue && (x = x.concat(f[h]), f[h] = []);
      for (let v = 0; v < x.length; ++v)
        u.addValue(f, h, x[v], w);
    } else if (f.hasOwnProperty(h)) {
      const v = !w.allowDuplicate && u.hasValue(f, h, x);
      !t.isArray(f[h]) && (!v || w.propertyIsArray) && (f[h] = [f[h]]), v || (w.prependValue ? f[h].unshift(x) : f[h].push(x));
    } else
      f[h] = w.propertyIsArray ? [x] : x;
  }, u.getValues = (f, h) => [].concat(f[h] || []), u.removeProperty = (f, h) => {
    delete f[h];
  }, u.removeValue = (f, h, x, w) => {
    w = w || {}, "propertyIsArray" in w || (w.propertyIsArray = !1);
    const v = u.getValues(f, h).filter(
      (I) => !u.compareValues(I, x)
    );
    v.length === 0 ? u.removeProperty(f, h) : v.length === 1 && !w.propertyIsArray ? f[h] = v[0] : f[h] = v;
  }, u.relabelBlankNodes = (f, h) => {
    h = h || {};
    const x = h.issuer || new n("_:b");
    return y(x, f);
  }, u.compareValues = (f, h) => f === h || e.isValue(f) && e.isValue(h) && f["@value"] === h["@value"] && f["@type"] === h["@type"] && f["@language"] === h["@language"] && f["@index"] === h["@index"] ? !0 : t.isObject(f) && "@id" in f && t.isObject(h) && "@id" in h ? f["@id"] === h["@id"] : !1, u.compareShortestLeast = (f, h) => f.length < h.length ? -1 : h.length < f.length ? 1 : f === h ? 0 : f < h ? -1 : 1;
  function y(f, h) {
    if (t.isArray(h))
      for (let x = 0; x < h.length; ++x)
        h[x] = y(f, h[x]);
    else if (e.isList(h))
      h["@list"] = y(f, h["@list"]);
    else if (t.isObject(h)) {
      e.isBlankNode(h) && (h["@id"] = f.getId(h["@id"]));
      const x = Object.keys(h).sort();
      for (let w = 0; w < x.length; ++w) {
        const v = x[w];
        v !== "@id" && (h[v] = y(f, h[v]));
      }
    }
    return h;
  }
  return os;
}
var cs, Hc;
function xa() {
  if (Hc) return cs;
  Hc = 1;
  const e = "http://www.w3.org/1999/02/22-rdf-syntax-ns#", t = "http://www.w3.org/2001/XMLSchema#";
  return cs = {
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
  }, cs;
}
var ds, Jc;
function fl() {
  return Jc || (Jc = 1, ds = class {
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
  }), ds;
}
var ls, Kc;
function Dt() {
  if (Kc) return ls;
  Kc = 1;
  const e = Ne(), t = {};
  ls = t, t.parsers = {
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
    let u = "";
    if (a.length > 0) {
      a.pop();
      for (let y = 0; y < a.length; ++y)
        u += "../";
    }
    return u += c.join("/"), s.query !== null && (u += "?" + s.query), s.fragment !== null && (u += "#" + s.fragment), u === "" && (u = "./"), u;
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
  return t.isAbsolute = (i) => e.isString(i) && n.test(i), t.isRelative = (i) => e.isString(i), ls;
}
var us, Qc;
function Oh() {
  if (Qc) return us;
  Qc = 1;
  const { parseLinkHeader: e, buildHeaders: t } = Ze(), { LINK_HEADER_CONTEXT: n } = xa(), i = He(), o = fl(), { prependBase: r } = Dt(), s = /(^|(\r\n))link:/i;
  us = ({
    secure: c,
    headers: l = {},
    xhr: u
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
      let x;
      try {
        x = await a(u, h, l);
      } catch (m) {
        throw new i(
          "URL could not be dereferenced, an error occurred.",
          "jsonld.LoadDocumentError",
          { code: "loading document failed", url: h, cause: m }
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
      let w = { contextUrl: null, documentUrl: h, document: x.response }, v = null;
      const I = x.getResponseHeader("Content-Type");
      let g;
      if (s.test(x.getAllResponseHeaders()) && (g = x.getResponseHeader("Link")), g && I !== "application/ld+json") {
        const m = e(g), d = m[n];
        if (Array.isArray(d))
          throw new i(
            "URL could not be dereferenced, it has more than one associated HTTP Link Header.",
            "jsonld.InvalidUrl",
            { code: "multiple context link headers", url: h }
          );
        d && (w.contextUrl = d.target), v = m.alternate, v && v.type == "application/ld+json" && !(I || "").match(/^application\/(\w*\+)?json$/) && (w = await f(r(h, v.target)));
      }
      return w;
    }
  };
  function a(c, l, u) {
    c = c || XMLHttpRequest;
    const y = new c();
    return new Promise((f, h) => {
      y.onload = () => f(y), y.onerror = (x) => h(x), y.open("GET", l, !0);
      for (const x in u)
        y.setRequestHeader(x, u[x]);
      y.send();
    });
  }
  return us;
}
var ps, Wc;
function Lh() {
  if (Wc) return ps;
  Wc = 1;
  const e = Oh(), t = {};
  return ps = t, t.setupDocumentLoaders = function(n) {
    typeof XMLHttpRequest < "u" && (n.documentLoaders.xhr = e, n.useDocumentLoader("xhr"));
  }, t.setupGlobals = function(n) {
    typeof globalThis.JsonLdProcessor > "u" && Object.defineProperty(globalThis, "JsonLdProcessor", {
      writable: !0,
      enumerable: !1,
      configurable: !0,
      value: n.JsonLdProcessor
    });
  }, ps;
}
var fs, Xc;
function Nh() {
  return Xc || (Xc = 1, fs = function(e) {
    e.prototype[Symbol.iterator] = function* () {
      for (let t = this.head; t; t = t.next)
        yield t.value;
    };
  }), fs;
}
var hs, Yc;
function Dh() {
  if (Yc) return hs;
  Yc = 1, hs = e, e.Node = o, e.create = e;
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
    for (var u = [], c = 0; l && c < s; c++)
      u.push(l.value), l = this.removeNode(l);
    l === null && (l = this.tail), l !== this.head && l !== this.tail && (l = l.prev);
    for (var c = 0; c < a.length; c++)
      l = t(this, l, a[c]);
    return u;
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
    Nh()(e);
  } catch {
  }
  return hs;
}
var ms, ed;
function hl() {
  if (ed) return ms;
  ed = 1;
  const e = Dh(), t = Symbol("max"), n = Symbol("length"), i = Symbol("lengthCalculator"), o = Symbol("allowStale"), r = Symbol("maxAge"), s = Symbol("dispose"), a = Symbol("noDisposeOnSet"), c = Symbol("lruList"), l = Symbol("cache"), u = Symbol("updateAgeOnGet"), y = () => 1;
  class f {
    constructor(d) {
      if (typeof d == "number" && (d = { max: d }), d || (d = {}), d.max && (typeof d.max != "number" || d.max < 0))
        throw new TypeError("max must be a non-negative number");
      this[t] = d.max || 1 / 0;
      const p = d.length || y;
      if (this[i] = typeof p != "function" ? y : p, this[o] = d.stale || !1, d.maxAge && typeof d.maxAge != "number")
        throw new TypeError("maxAge must be a number");
      this[r] = d.maxAge || 0, this[s] = d.dispose, this[a] = d.noDisposeOnSet || !1, this[u] = d.updateAgeOnGet || !1, this.reset();
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
      typeof d != "function" && (d = y), d !== this[i] && (this[i] = d, this[n] = 0, this[c].forEach((p) => {
        p.length = this[i](p.value, p.key), this[n] += p.length;
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
    rforEach(d, p) {
      p = p || this;
      for (let b = this[c].tail; b !== null; ) {
        const S = b.prev;
        g(this, d, b, p), b = S;
      }
    }
    forEach(d, p) {
      p = p || this;
      for (let b = this[c].head; b !== null; ) {
        const S = b.next;
        g(this, d, b, p), b = S;
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
      return this[c].map((d) => x(this, d) ? !1 : {
        k: d.key,
        v: d.value,
        e: d.now + (d.maxAge || 0)
      }).toArray().filter((d) => d);
    }
    dumpLru() {
      return this[c];
    }
    set(d, p, b) {
      if (b = b || this[r], b && typeof b != "number")
        throw new TypeError("maxAge must be a number");
      const S = b ? Date.now() : 0, A = this[i](p, d);
      if (this[l].has(d)) {
        if (A > this[t])
          return v(this, this[l].get(d)), !1;
        const E = this[l].get(d).value;
        return this[s] && (this[a] || this[s](d, E.value)), E.now = S, E.maxAge = b, E.value = p, this[n] += A - E.length, E.length = A, this.get(d), w(this), !0;
      }
      const P = new I(d, p, A, S, b);
      return P.length > this[t] ? (this[s] && this[s](d, p), !1) : (this[n] += P.length, this[c].unshift(P), this[l].set(d, this[c].head), w(this), !0);
    }
    has(d) {
      if (!this[l].has(d)) return !1;
      const p = this[l].get(d).value;
      return !x(this, p);
    }
    get(d) {
      return h(this, d, !0);
    }
    peek(d) {
      return h(this, d, !1);
    }
    pop() {
      const d = this[c].tail;
      return d ? (v(this, d), d.value) : null;
    }
    del(d) {
      v(this, this[l].get(d));
    }
    load(d) {
      this.reset();
      const p = Date.now();
      for (let b = d.length - 1; b >= 0; b--) {
        const S = d[b], A = S.e || 0;
        if (A === 0)
          this.set(S.k, S.v);
        else {
          const P = A - p;
          P > 0 && this.set(S.k, S.v, P);
        }
      }
    }
    prune() {
      this[l].forEach((d, p) => h(this, p, !1));
    }
  }
  const h = (m, d, p) => {
    const b = m[l].get(d);
    if (b) {
      const S = b.value;
      if (x(m, S)) {
        if (v(m, b), !m[o])
          return;
      } else
        p && (m[u] && (b.value.now = Date.now()), m[c].unshiftNode(b));
      return S.value;
    }
  }, x = (m, d) => {
    if (!d || !d.maxAge && !m[r])
      return !1;
    const p = Date.now() - d.now;
    return d.maxAge ? p > d.maxAge : m[r] && p > m[r];
  }, w = (m) => {
    if (m[n] > m[t])
      for (let d = m[c].tail; m[n] > m[t] && d !== null; ) {
        const p = d.prev;
        v(m, d), d = p;
      }
  }, v = (m, d) => {
    if (d) {
      const p = d.value;
      m[s] && m[s](p.key, p.value), m[n] -= p.length, m[l].delete(p.key), m[c].removeNode(d);
    }
  };
  class I {
    constructor(d, p, b, S, A) {
      this.key = d, this.value = p, this.length = b, this.now = S, this.maxAge = A || 0;
    }
  }
  const g = (m, d, p, b) => {
    let S = p.value;
    x(m, S) && (v(m, p), m[o] || (S = void 0)), S && d.call(b, S.value, S.key, m);
  };
  return ms = f, ms;
}
var ys, td;
function zh() {
  if (td) return ys;
  td = 1;
  const e = hl(), t = 10;
  return ys = class {
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
  }, ys;
}
var gs, nd;
function Uh() {
  if (nd) return gs;
  nd = 1;
  const {
    isArray: e,
    isObject: t,
    isString: n
  } = Ne(), {
    asArray: i
  } = Ze(), { prependBase: o } = Dt(), r = He(), s = zh(), a = 10;
  gs = class {
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
      base: x,
      cycles: w = /* @__PURE__ */ new Set()
    }) {
      f && t(f) && f["@context"] && (f = f["@context"]), f = i(f);
      const v = [];
      for (const I of f) {
        if (n(I)) {
          let d = this._get(I);
          d || (d = await this._resolveRemoteContext(
            { activeCtx: y, url: I, documentLoader: h, base: x, cycles: w }
          )), e(d) ? v.push(...d) : v.push(d);
          continue;
        }
        if (I === null) {
          v.push(new s({ document: null }));
          continue;
        }
        t(I) || c(f);
        const g = JSON.stringify(I);
        let m = this._get(g);
        m || (m = new s({ document: I }), this._cacheResolvedContext({ key: g, resolved: m, tag: "static" })), v.push(m);
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
        let x = this.sharedCache.get(y);
        x || (x = /* @__PURE__ */ new Map(), this.sharedCache.set(y, x)), x.set(h, f);
      }
      return f;
    }
    async _resolveRemoteContext({ activeCtx: y, url: f, documentLoader: h, base: x, cycles: w }) {
      f = o(x, f);
      const { context: v, remoteDoc: I } = await this._fetchContext(
        { activeCtx: y, url: f, documentLoader: h, cycles: w }
      );
      x = I.documentUrl || f, l({ context: v, base: x });
      const g = await this.resolve(
        { activeCtx: y, context: v, documentLoader: h, base: x, cycles: w }
      );
      return this._cacheResolvedContext({ key: f, resolved: g, tag: I.tag }), g;
    }
    async _fetchContext({ activeCtx: y, url: f, documentLoader: h, cycles: x }) {
      if (x.size > a)
        throw new r(
          "Maximum number of @context URLs exceeded.",
          "jsonld.ContextUrlError",
          {
            code: y.processingMode === "json-ld-1.0" ? "loading remote context failed" : "context overflow",
            max: a
          }
        );
      if (x.has(f))
        throw new r(
          "Cyclical @context URLs detected.",
          "jsonld.ContextUrlError",
          {
            code: y.processingMode === "json-ld-1.0" ? "recursive context inclusion" : "context overflow",
            url: f
          }
        );
      x.add(f);
      let w, v;
      try {
        v = await h(f), w = v.document || null, n(w) && (w = JSON.parse(w));
      } catch (I) {
        throw new r(
          `Dereferencing a URL did not result in a valid JSON-LD object. Possible causes are an inaccessible URL perhaps due to a same-origin policy (ensure the server uses CORS if you are using client-side JavaScript), too many redirects, a non-JSON response, or more than one HTTP Link Header was provided for a remote context. URL: "${f}".`,
          "jsonld.InvalidUrl",
          { code: "loading remote context failed", url: f, cause: I }
        );
      }
      if (!t(w))
        throw new r(
          `Dereferencing a URL did not result in a JSON object. The response was valid JSON, but it was not a JSON object. URL: "${f}".`,
          "jsonld.InvalidUrl",
          { code: "invalid remote context", url: f }
        );
      return "@context" in w ? w = { "@context": w["@context"] } : w = { "@context": {} }, v.contextUrl && (e(w["@context"]) || (w["@context"] = [w["@context"]]), w["@context"].push(v.contextUrl)), { context: w, remoteDoc: v };
    }
  };
  function c(u) {
    throw new r(
      "Invalid JSON-LD syntax; @context must be an object.",
      "jsonld.SyntaxError",
      {
        code: "invalid local context",
        context: u
      }
    );
  }
  function l({ context: u, base: y }) {
    if (!u)
      return;
    const f = u["@context"];
    if (n(f)) {
      u["@context"] = o(y, f);
      return;
    }
    if (e(f)) {
      for (let h = 0; h < f.length; ++h) {
        const x = f[h];
        if (n(x)) {
          f[h] = o(y, x);
          continue;
        }
        t(x) && l({ context: { "@context": x }, base: y });
      }
      return;
    }
    if (t(f))
      for (const h in f)
        l({ context: f[h], base: y });
  }
  return gs;
}
var vs, id;
function Vh() {
  return id || (id = 1, vs = wa().NQuads), vs;
}
var bs, rd;
function Ln() {
  if (rd) return bs;
  rd = 1;
  const e = He(), {
    isArray: t
  } = Ne(), {
    asArray: n
  } = Ze(), i = {};
  bs = i, i.defaultEventHandler = null, i.setupEventHandler = ({ options: s = {} }) => {
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
      const u = a[l];
      if (t(u))
        c = o({ event: s, handlers: u });
      else if (typeof u == "function")
        u({ event: s, next: () => {
          c = !0;
        } });
      else if (typeof u == "object")
        s.code in u ? u[s.code]({ event: s, next: () => {
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
  }, bs;
}
var ws, sd;
function Qt() {
  if (sd) return ws;
  sd = 1;
  const e = Ze(), t = He(), {
    isArray: n,
    isObject: i,
    isString: o,
    isUndefined: r
  } = Ne(), {
    isAbsolute: s,
    isRelative: a,
    prependBase: c
  } = Dt(), {
    handleEvent: l
  } = Ln(), {
    REGEX_BCP47: u,
    REGEX_KEYWORD: y,
    asArray: f,
    compareShortestLeast: h
  } = Ze(), x = /* @__PURE__ */ new Map(), w = 1e4, v = {};
  ws = v, v.process = async ({
    activeCtx: m,
    localCtx: d,
    options: p,
    propagate: b = !0,
    overrideProtected: S = !1,
    cycles: A = /* @__PURE__ */ new Set()
  }) => {
    if (i(d) && "@context" in d && n(d["@context"]) && (d = d["@context"]), f(d).length === 0)
      return m;
    const R = [], E = [
      ({ event: N, next: _ }) => {
        R.push(N), _();
      }
    ];
    p.eventHandler && E.push(p.eventHandler);
    const k = p;
    p = { ...p, eventHandler: E };
    const M = await p.contextResolver.resolve({
      activeCtx: m,
      context: d,
      documentLoader: p.documentLoader,
      base: p.base
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
        j = m = v.getInitialContext(p).clone();
        continue;
      }
      const F = N.getProcessed(m);
      if (F) {
        if (k.eventHandler)
          for (const B of F.events)
            l({ event: B, options: k });
        j = m = F.context;
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
            const T = I(
              j,
              B,
              { vocab: !0, base: !0 },
              void 0,
              void 0,
              p
            );
            s(T) || p.eventHandler && l({
              event: {
                type: ["JsonLdEvent"],
                code: "relative @vocab reference",
                level: "warning",
                message: "Relative @vocab reference found.",
                details: {
                  vocab: T
                }
              },
              options: p
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
          B.match(u) || p.eventHandler && l({
            event: {
              type: ["JsonLdEvent"],
              code: "invalid @language value",
              level: "warning",
              message: "@language value must be valid BCP47.",
              details: {
                language: B
              }
            },
            options: p
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
            { code: "invalid @propagate value", context: d }
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
            { code: "invalid @import value", context: d }
          );
        const T = await p.contextResolver.resolve({
          activeCtx: m,
          context: B,
          documentLoader: p.documentLoader,
          base: p.base
        });
        if (T.length !== 1)
          throw new t(
            "Invalid JSON-LD syntax; @import must reference a single context.",
            "jsonld.SyntaxError",
            { code: "invalid remote context", context: d }
          );
        const O = T[0].getProcessed(m);
        if (O)
          _ = O;
        else {
          const U = T[0].document;
          if ("@import" in U)
            throw new t(
              "Invalid JSON-LD syntax: imported context must not include @import.",
              "jsonld.SyntaxError",
              { code: "invalid context entry", context: d }
            );
          for (const D in U)
            _.hasOwnProperty(D) || (_[D] = U[D]);
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
          options: p,
          overrideProtected: S
        }), i(_[B]) && "@context" in _[B]) {
          const T = _[B]["@context"];
          let O = !0;
          if (o(T)) {
            const U = c(p.base, T);
            A.has(U) ? O = !1 : A.add(U);
          }
          if (O)
            try {
              await v.process({
                activeCtx: j.clone(),
                localCtx: _[B]["@context"],
                overrideProtected: !0,
                options: p,
                cycles: A
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
    localCtx: d,
    term: p,
    defined: b,
    options: S,
    overrideProtected: A = !1
  }) => {
    if (b.has(p)) {
      if (b.get(p))
        return;
      throw new t(
        "Cyclical context definition detected.",
        "jsonld.CyclicalContext",
        { code: "cyclic IRI mapping", context: d, term: p }
      );
    }
    b.set(p, !1);
    let P;
    if (d.hasOwnProperty(p) && (P = d[p]), p === "@type" && i(P) && (P["@container"] || "@set") === "@set" && v.processingMode(m, 1.1)) {
      const _ = ["@container", "@id", "@protected"], F = Object.keys(P);
      if (F.length === 0 || F.some((L) => !_.includes(L)))
        throw new t(
          "Invalid JSON-LD syntax; keywords cannot be overridden.",
          "jsonld.SyntaxError",
          { code: "keyword redefinition", context: d, term: p }
        );
    } else {
      if (v.isKeyword(p))
        throw new t(
          "Invalid JSON-LD syntax; keywords cannot be overridden.",
          "jsonld.SyntaxError",
          { code: "keyword redefinition", context: d, term: p }
        );
      if (p.match(y)) {
        S.eventHandler && l({
          event: {
            type: ["JsonLdEvent"],
            code: "reserved term",
            level: "warning",
            message: 'Terms beginning with "@" are reserved for future use and dropped.',
            details: {
              term: p
            }
          },
          options: S
        });
        return;
      } else if (p === "")
        throw new t(
          "Invalid JSON-LD syntax; a term cannot be an empty string.",
          "jsonld.SyntaxError",
          { code: "invalid term definition", context: d }
        );
    }
    const R = m.mappings.get(p);
    m.mappings.has(p) && m.mappings.delete(p);
    let E = !1;
    if ((o(P) || P === null) && (E = !0, P = { "@id": P }), !i(P))
      throw new t(
        "Invalid JSON-LD syntax; @context term values must be strings or objects.",
        "jsonld.SyntaxError",
        { code: "invalid term definition", context: d }
      );
    const k = {};
    m.mappings.set(p, k), k.reverse = !1;
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
          { code: "invalid term definition", context: d }
        );
    const j = p.indexOf(":");
    if (k._termHasColon = j > 0, "@reverse" in P) {
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
      const _ = P["@reverse"];
      if (!o(_))
        throw new t(
          "Invalid JSON-LD syntax; a @context @reverse value must be a string.",
          "jsonld.SyntaxError",
          { code: "invalid IRI mapping", context: d }
        );
      if (_.match(y)) {
        S.eventHandler && l({
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
        }), R ? m.mappings.set(p, R) : m.mappings.delete(p);
        return;
      }
      const F = I(
        m,
        _,
        { vocab: !0, base: !1 },
        d,
        b,
        S
      );
      if (!s(F))
        throw new t(
          "Invalid JSON-LD syntax; a @context @reverse value must be an absolute IRI or a blank node identifier.",
          "jsonld.SyntaxError",
          { code: "invalid IRI mapping", context: d }
        );
      k["@id"] = F, k.reverse = !0;
    } else if ("@id" in P) {
      let _ = P["@id"];
      if (_ && !o(_))
        throw new t(
          "Invalid JSON-LD syntax; a @context @id value must be an array of strings or a string.",
          "jsonld.SyntaxError",
          { code: "invalid IRI mapping", context: d }
        );
      if (_ === null)
        k["@id"] = null;
      else if (!v.isKeyword(_) && _.match(y)) {
        S.eventHandler && l({
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
        }), R ? m.mappings.set(p, R) : m.mappings.delete(p);
        return;
      } else if (_ !== p) {
        if (_ = I(
          m,
          _,
          { vocab: !0, base: !1 },
          d,
          b,
          S
        ), !s(_) && !v.isKeyword(_))
          throw new t(
            "Invalid JSON-LD syntax; a @context @id value must be an absolute IRI, a blank node identifier, or a keyword.",
            "jsonld.SyntaxError",
            { code: "invalid IRI mapping", context: d }
          );
        if (p.match(/(?::[^:])|\//)) {
          const F = new Map(b).set(p, !0);
          if (I(
            m,
            p,
            { vocab: !0, base: !1 },
            d,
            F,
            S
          ) !== _)
            throw new t(
              "Invalid JSON-LD syntax; term in form of IRI must expand to definition.",
              "jsonld.SyntaxError",
              { code: "invalid IRI mapping", context: d }
            );
        }
        k["@id"] = _, k._prefix = E && !k._termHasColon && _.match(/[:\/\?#\[\]@]$/) !== null;
      }
    }
    if (!("@id" in k))
      if (k._termHasColon) {
        const _ = p.substr(0, j);
        if (d.hasOwnProperty(_) && v.createTermDefinition({
          activeCtx: m,
          localCtx: d,
          term: _,
          defined: b,
          options: S
        }), m.mappings.has(_)) {
          const F = p.substr(j + 1);
          k["@id"] = m.mappings.get(_)["@id"] + F;
        } else
          k["@id"] = p;
      } else if (p === "@type")
        k["@id"] = p;
      else {
        if (!("@vocab" in m))
          throw new t(
            "Invalid JSON-LD syntax; @context terms must define an @id.",
            "jsonld.SyntaxError",
            { code: "invalid IRI mapping", context: d, term: p }
          );
        k["@id"] = m["@vocab"] + p;
      }
    if ((P["@protected"] === !0 || b.get("@protected") === !0 && P["@protected"] !== !1) && (m.protected[p] = !0, k.protected = !0), b.set(p, !0), "@type" in P) {
      let _ = P["@type"];
      if (!o(_))
        throw new t(
          "Invalid JSON-LD syntax; an @context @type value must be a string.",
          "jsonld.SyntaxError",
          { code: "invalid type mapping", context: d }
        );
      if (_ === "@json" || _ === "@none") {
        if (v.processingMode(m, 1))
          throw new t(
            `Invalid JSON-LD syntax; an @context @type value must not be "${_}" in JSON-LD 1.0 mode.`,
            "jsonld.SyntaxError",
            { code: "invalid type mapping", context: d }
          );
      } else if (_ !== "@id" && _ !== "@vocab") {
        if (_ = I(
          m,
          _,
          { vocab: !0, base: !1 },
          d,
          b,
          S
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
      k["@type"] = _;
    }
    if ("@container" in P) {
      const _ = o(P["@container"]) ? [P["@container"]] : P["@container"] || [], F = ["@list", "@set", "@index", "@language"];
      let L = !0;
      const B = _.includes("@set");
      if (v.processingMode(m, 1.1)) {
        if (F.push("@graph", "@id", "@type"), _.includes("@list")) {
          if (_.length !== 1)
            throw new t(
              "Invalid JSON-LD syntax; @context @container with @list must have no other values",
              "jsonld.SyntaxError",
              { code: "invalid container mapping", context: d }
            );
        } else if (_.includes("@graph")) {
          if (_.some((T) => T !== "@graph" && T !== "@id" && T !== "@index" && T !== "@set"))
            throw new t(
              "Invalid JSON-LD syntax; @context @container with @graph must have no other values other than @id, @index, and @set",
              "jsonld.SyntaxError",
              { code: "invalid container mapping", context: d }
            );
        } else
          L &= _.length <= (B ? 2 : 1);
        if (_.includes("@type") && (k["@type"] = k["@type"] || "@id", !["@id", "@vocab"].includes(k["@type"])))
          throw new t(
            "Invalid JSON-LD syntax; container: @type requires @type to be @id or @vocab.",
            "jsonld.SyntaxError",
            { code: "invalid type mapping", context: d }
          );
      } else
        L &= !n(P["@container"]), L &= _.length <= 1;
      if (L &= _.every((T) => F.includes(T)), L &= !(B && _.includes("@list")), !L)
        throw new t(
          "Invalid JSON-LD syntax; @context @container value must be one of the following: " + F.join(", "),
          "jsonld.SyntaxError",
          { code: "invalid container mapping", context: d }
        );
      if (k.reverse && !_.every((T) => ["@index", "@set"].includes(T)))
        throw new t(
          "Invalid JSON-LD syntax; @context @container value for a @reverse type definition must be @index or @set.",
          "jsonld.SyntaxError",
          { code: "invalid reverse property", context: d }
        );
      k["@container"] = _;
    }
    if ("@index" in P) {
      if (!("@container" in P) || !k["@container"].includes("@index"))
        throw new t(
          `Invalid JSON-LD syntax; @index without @index in @container: "${P["@index"]}" on term "${p}".`,
          "jsonld.SyntaxError",
          { code: "invalid term definition", context: d }
        );
      if (!o(P["@index"]) || P["@index"].indexOf("@") === 0)
        throw new t(
          `Invalid JSON-LD syntax; @index must expand to an IRI: "${P["@index"]}" on term "${p}".`,
          "jsonld.SyntaxError",
          { code: "invalid term definition", context: d }
        );
      k["@index"] = P["@index"];
    }
    if ("@context" in P && (k["@context"] = P["@context"]), "@language" in P && !("@type" in P)) {
      let _ = P["@language"];
      if (_ !== null && !o(_))
        throw new t(
          "Invalid JSON-LD syntax; @context @language value must be a string or null.",
          "jsonld.SyntaxError",
          { code: "invalid language mapping", context: d }
        );
      _ !== null && (_ = _.toLowerCase()), k["@language"] = _;
    }
    if ("@prefix" in P) {
      if (p.match(/:|\//))
        throw new t(
          "Invalid JSON-LD syntax; @context @prefix used on a compact IRI term",
          "jsonld.SyntaxError",
          { code: "invalid term definition", context: d }
        );
      if (v.isKeyword(k["@id"]))
        throw new t(
          "Invalid JSON-LD syntax; keywords may not be used as prefixes",
          "jsonld.SyntaxError",
          { code: "invalid term definition", context: d }
        );
      if (typeof P["@prefix"] == "boolean")
        k._prefix = P["@prefix"] === !0;
      else
        throw new t(
          "Invalid JSON-LD syntax; @context value for @prefix must be boolean",
          "jsonld.SyntaxError",
          { code: "invalid @prefix value", context: d }
        );
    }
    if ("@direction" in P) {
      const _ = P["@direction"];
      if (_ !== null && _ !== "ltr" && _ !== "rtl")
        throw new t(
          'Invalid JSON-LD syntax; @direction value must be null, "ltr", or "rtl".',
          "jsonld.SyntaxError",
          { code: "invalid base direction", context: d }
        );
      k["@direction"] = _;
    }
    if ("@nest" in P) {
      const _ = P["@nest"];
      if (!o(_) || _ !== "@nest" && _.indexOf("@") === 0)
        throw new t(
          "Invalid JSON-LD syntax; @context @nest value must be a string which is not a keyword other than @nest.",
          "jsonld.SyntaxError",
          { code: "invalid @nest value", context: d }
        );
      k["@nest"] = _;
    }
    // disallow aliasing @context and @preserve
    const N = k["@id"];
    if (N === "@context" || N === "@preserve")
      throw new t(
        "Invalid JSON-LD syntax; @context and @preserve cannot be aliased.",
        "jsonld.SyntaxError",
        { code: "invalid keyword alias", context: d }
      );
    if (R && R.protected && !A && (m.protected[p] = !0, k.protected = !0, !g(R, k)))
      throw new t(
        "Invalid JSON-LD syntax; tried to redefine a protected term.",
        "jsonld.SyntaxError",
        { code: "protected term redefinition", context: d, term: p }
      );
  }, v.expandIri = (m, d, p, b) => I(
    m,
    d,
    p,
    void 0,
    void 0,
    b
  );
  function I(m, d, p, b, S, A) {
    if (d === null || !o(d) || v.isKeyword(d))
      return d;
    if (d.match(y))
      return null;
    if (b && b.hasOwnProperty(d) && S.get(d) !== !0 && v.createTermDefinition({
      activeCtx: m,
      localCtx: b,
      term: d,
      defined: S,
      options: A
    }), p = p || {}, p.vocab) {
      const R = m.mappings.get(d);
      if (R === null)
        return null;
      if (i(R) && "@id" in R)
        return R["@id"];
    }
    const P = d.indexOf(":");
    if (P > 0) {
      const R = d.substr(0, P), E = d.substr(P + 1);
      if (R === "_" || E.indexOf("//") === 0)
        return d;
      b && b.hasOwnProperty(R) && v.createTermDefinition({
        activeCtx: m,
        localCtx: b,
        term: R,
        defined: S,
        options: A
      });
      const k = m.mappings.get(R);
      if (k && k._prefix)
        return k["@id"] + E;
      if (s(d))
        return d;
    }
    if (p.vocab && "@vocab" in m)
      d = m["@vocab"] + d;
    else if (p.base) {
      let R, E;
      "@base" in m ? m["@base"] ? (E = c(A.base, m["@base"]), R = c(E, d)) : (E = m["@base"], R = d) : (E = A.base, R = c(A.base, d)), d = R;
    }
    return d;
  }
  v.getInitialContext = (m) => {
    const d = JSON.stringify({ processingMode: m.processingMode }), p = x.get(d);
    if (p)
      return p;
    const b = {
      processingMode: m.processingMode,
      mappings: /* @__PURE__ */ new Map(),
      inverse: null,
      getInverse: S,
      clone: R,
      revertToPreviousContext: E,
      protected: {}
    };
    return x.size === w && x.clear(), x.set(d, b), b;
    function S() {
      const k = this;
      if (k.inverse)
        return k.inverse;
      const M = k.inverse = {}, j = k.fastCurieMap = {}, N = {}, _ = (k["@language"] || "@none").toLowerCase(), F = k["@direction"], L = k.mappings, B = [...L.keys()].sort(h);
      for (const T of B) {
        const O = L.get(T);
        if (O === null)
          continue;
        let U = O["@container"] || "@none";
        if (U = [].concat(U).sort().join(""), O["@id"] === null)
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
          if (q[U] || (q[U] = {
            "@language": {},
            "@type": {},
            "@any": {}
          }), q = q[U], P(T, q["@any"], "@none"), O.reverse)
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
          ) : P(T, q["@language"], "@none") : F ? (P(T, q["@language"], `_${F}`), P(T, q["@language"], "@none"), P(T, q["@type"], "@none")) : (P(T, q["@language"], _), P(T, q["@language"], "@none"), P(T, q["@type"], "@none"));
        }
      }
      for (const T in j)
        A(j, T, 1);
      return M;
    }
    function A(k, M, j) {
      const N = k[M], _ = k[M] = {};
      let F, L;
      for (const B of N)
        F = B.iri, j >= F.length ? L = "" : L = F[j], L in _ ? _[L].push(B) : _[L] = [B];
      for (const B in _)
        B !== "" && A(_, B, j + 1);
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
  }, v.getContextValue = (m, d, p) => {
    if (d === null)
      return p === "@context" ? void 0 : null;
    if (m.mappings.has(d)) {
      const b = m.mappings.get(d);
      if (r(p))
        return b;
      if (b.hasOwnProperty(p))
        return b[p];
    }
    if (p === "@language" && p in m || p === "@direction" && p in m)
      return m[p];
    if (p !== "@context")
      return null;
  }, v.processingMode = (m, d) => d.toString() >= "1.1" ? !m.processingMode || m.processingMode >= "json-ld-" + d.toString() : m.processingMode === "json-ld-1.0", v.isKeyword = (m) => {
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
    const p = Array.isArray(m);
    if (p !== Array.isArray(d))
      return !1;
    if (p) {
      if (m.length !== d.length)
        return !1;
      for (let A = 0; A < m.length; ++A)
        if (!g(m[A], d[A]))
          return !1;
      return !0;
    }
    const b = Object.keys(m), S = Object.keys(d);
    if (b.length !== S.length)
      return !1;
    for (const A in m) {
      let P = m[A], R = d[A];
      if (A === "@container" && Array.isArray(P) && Array.isArray(R) && (P = P.slice().sort(), R = R.slice().sort()), !g(P, R))
        return !1;
    }
    return !0;
  }
  return ws;
}
var xs, ad;
function Fh() {
  if (ad) return xs;
  ad = 1;
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
  } = qt(), {
    expandIri: u,
    getContextValue: y,
    isKeyword: f,
    process: h,
    processingMode: x
  } = Qt(), {
    isAbsolute: w
  } = Dt(), {
    REGEX_BCP47: v,
    REGEX_KEYWORD: I,
    addValue: g,
    asArray: m,
    getValues: d,
    validateTypeValue: p
  } = Ze(), {
    handleEvent: b
  } = Ln(), S = {};
  xs = S, S.expand = async ({
    activeCtx: M,
    activeProperty: j = null,
    element: N,
    options: _ = {},
    insideList: F = !1,
    insideIndex: L = !1,
    typeScopedContext: B = null
  }) => {
    if (N == null)
      return null;
    if (j === "@default" && (_ = Object.assign({}, _, { isFrame: !1 })), !t(N) && !n(N))
      return !F && (j === null || u(
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
      F = F || H.includes("@list");
      for (let Q = 0; Q < N.length; ++Q) {
        let J = await S.expand({
          activeCtx: M,
          activeProperty: j,
          element: N[Q],
          options: _,
          insideIndex: L,
          typeScopedContext: B
        });
        F && t(J) && (J = { "@list": J }), J !== null && (t(J) ? z = z.concat(J) : z.push(J));
      }
      return z;
    }
    const T = u(
      M,
      j,
      { vocab: !0 },
      _
    ), O = y(M, j, "@context");
    B = B || (M.previousContext ? M : null);
    let U = Object.keys(N).sort(), D = !L;
    if (D && B && U.length <= 2 && !U.includes("@context"))
      for (const z of U) {
        const H = u(
          B,
          z,
          { vocab: !0 },
          _
        );
        if (H === "@value") {
          D = !1, M = B;
          break;
        }
        if (H === "@id" && U.length === 1) {
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
    for (const z of U)
      if (u(M, z, { vocab: !0 }, _) === "@type") {
        $ = $ || z;
        const Q = N[z], J = Array.isArray(Q) ? Q.length > 1 ? Q.slice().sort() : Q : [Q];
        for (const V of J) {
          const G = y(B, V, "@context");
          r(G) || (M = await h({
            activeCtx: M,
            localCtx: G,
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
      insideList: F,
      typeKey: $,
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
      const H = q["@value"] === null ? [] : m(q["@value"]), Q = d(q, "@type");
      if (!(x(M, 1.1) && Q.includes("@json") && Q.length === 1)) if (H.length === 0)
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
      if (C > 1 && !(C === 2 && "@index" in q))
        throw new e(
          'Invalid JSON-LD syntax; if an element has the property "@set" or "@list", then it can have at most one other property that is "@index".',
          "jsonld.SyntaxError",
          { code: "invalid set or list object", element: q }
        );
      "@set" in q && (q = q["@set"], U = Object.keys(q), C = U.length);
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
    return n(q) && !_.keepFreeFloatingNodes && !F && (j === null || T === "@graph" || (y(M, j, "@container") || []).includes("@graph")) && (q = A({ value: q, count: C, options: _ })), q;
  };
  function A({
    value: M,
    count: j,
    options: N
  }) {
    if (j === 0 || "@value" in M || "@list" in M || j === 1 && "@id" in M) {
      if (N.eventHandler) {
        let _, F;
        j === 0 ? (_ = "empty object", F = "Dropping empty object.") : "@value" in M ? (_ = "object with only @value", F = "Dropping object with only @value.") : "@list" in M ? (_ = "object with only @list", F = "Dropping object with only @list.") : j === 1 && "@id" in M && (_ = "object with only @id", F = "Dropping object with only @id."), b({
          event: {
            type: ["JsonLdEvent"],
            code: _,
            level: "warning",
            message: F,
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
    expandedParent: F,
    options: L = {},
    insideList: B,
    typeKey: T,
    typeScopedContext: O
  }) {
    const U = Object.keys(_).sort(), D = [];
    let $;
    const q = _[T] && u(
      M,
      t(_[T]) ? _[T][0] : _[T],
      { vocab: !0 },
      {
        ...L,
        typeExpansion: !0
      }
    ) === "@json";
    for (const C of U) {
      let z = _[C], H;
      if (C === "@context")
        continue;
      const Q = u(M, C, { vocab: !0 }, L);
      if (Q === null || !(w(Q) || f(Q))) {
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
        g(
          F,
          "@id",
          m(z).map((Z) => {
            if (o(Z)) {
              const K = u(M, Z, { base: !0 }, L);
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
              }) : w(K) || b({
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
          u(O, Z, { vocab: !0 }),
          m(K).map(
            (W) => u(
              O,
              W,
              { base: !0, vocab: !0 },
              { ...L, typeExpansion: !0 }
            )
          )
        ]))), p(z, L.isFrame), g(
          F,
          "@type",
          m(z).map((Z) => {
            if (o(Z)) {
              const K = u(
                O,
                Z,
                { base: !0, vocab: !0 },
                { ...L, typeExpansion: !0 }
              );
              return K !== "@json" && !w(K) && L.eventHandler && b({
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
      if (Q === "@included" && x(M, 1.1)) {
        const Z = m(await S.expand({
          activeCtx: M,
          activeProperty: j,
          element: z,
          options: L
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
        $ = z, q && x(M, 1.1) ? F["@value"] = z : g(
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
          activeCtx: M,
          activeProperty: "@reverse",
          element: z,
          options: L
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
        D.push(C);
        continue;
      }
      let J = M;
      const V = y(M, C, "@context");
      r(V) || (J = await h({
        activeCtx: M,
        localCtx: V,
        propagate: !0,
        overrideProtected: !0,
        options: L
      }));
      const G = y(M, C, "@container") || [];
      if (G.includes("@language") && n(z)) {
        const Z = y(J, C, "@direction");
        H = E(J, z, Z, L);
      } else if (G.includes("@index") && n(z)) {
        const Z = G.includes("@graph"), K = y(J, C, "@index") || "@index", W = K !== "@index" && u(M, K, { vocab: !0 }, L);
        H = await k({
          activeCtx: J,
          options: L,
          activeProperty: C,
          value: z,
          asGraph: Z,
          indexKey: K,
          propertyIndex: W
        });
      } else if (G.includes("@id") && n(z)) {
        const Z = G.includes("@graph");
        H = await k({
          activeCtx: J,
          options: L,
          activeProperty: C,
          value: z,
          asGraph: Z,
          indexKey: "@id"
        });
      } else if (G.includes("@type") && n(z))
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
        if (Q !== "@list" && !s(H) && G.includes("@list") && (H = { "@list": m(H) }), G.includes("@graph") && !G.some((Z) => Z === "@id" || Z === "@index")) {
          if (H = m(H), L.isFrame || (H = H.filter((Z) => {
            const K = Object.keys(Z).length;
            return A({ value: Z, count: K, options: L }) !== null;
          })), H.length === 0)
            continue;
          H = H.map((Z) => ({ "@graph": m(Z) }));
        }
        if (J.mappings.has(C) && J.mappings.get(C).reverse) {
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
    if ("@value" in F && !(F["@type"] === "@json" && x(M, 1.1))) {
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
        if (!n(H) || Object.keys(H).some((Q) => u(M, Q, { vocab: !0 }, L) === "@value"))
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
          expandedParent: F,
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
    const F = u(
      M,
      j,
      { vocab: !0 },
      _
    );
    if (F === "@id")
      return u(M, N, { base: !0 }, _);
    if (F === "@type")
      return u(
        M,
        N,
        { vocab: !0, base: !0 },
        { ..._, typeExpansion: !0 }
      );
    const L = y(M, j, "@type");
    if ((L === "@id" || F === "@graph") && o(N)) {
      const T = u(M, N, { base: !0 }, _);
      return T === null && N.match(I) && _.eventHandler && b({
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
        "@id": u(M, N, { vocab: !0, base: !0 }, _)
      };
    if (f(F))
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
    const F = [], L = Object.keys(j).sort();
    for (const B of L) {
      const T = u(M, B, { vocab: !0 }, _);
      let O = j[B];
      t(O) || (O = [O]);
      for (const U of O) {
        if (U === null)
          continue;
        if (!o(U))
          throw new e(
            "Invalid JSON-LD syntax; language map values must be strings.",
            "jsonld.SyntaxError",
            { code: "invalid language map value", languageMap: j }
          );
        const D = { "@value": U };
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
        }), D["@language"] = B.toLowerCase()), N && (D["@direction"] = N), F.push(D);
      }
    }
    return F;
  }
  async function k({
    activeCtx: M,
    options: j,
    activeProperty: N,
    value: _,
    asGraph: F,
    indexKey: L,
    propertyIndex: B
  }) {
    const T = [], O = Object.keys(_).sort(), U = L === "@type";
    for (let D of O) {
      if (U) {
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
      ) : q = u(M, D, { vocab: !0 }, j), L === "@id" ? D = u(M, D, { base: !0 }, j) : U && (D = q);
      for (let C of $) {
        if (F && !c(C) && (C = { "@graph": [C] }), L === "@type")
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
  return xs;
}
var Ss, od;
function yr() {
  if (od) return Ss;
  od = 1;
  const { isKeyword: e } = Qt(), t = qt(), n = Ne(), i = Ze(), o = He(), r = {};
  return Ss = r, r.createMergedNodeMap = (s, a) => {
    a = a || {};
    const c = a.issuer || new i.IdentifierIssuer("_:b"), l = { "@default": {} };
    return r.createNodeMap(s, l, "@default", c), r.mergeNodeMaps(l);
  }, r.createNodeMap = (s, a, c, l, u, y) => {
    if (n.isArray(s)) {
      for (const w of s)
        r.createNodeMap(w, a, c, l, void 0, y);
      return;
    }
    if (!n.isObject(s)) {
      y && y.push(s);
      return;
    }
    if (t.isValue(s)) {
      if ("@type" in s) {
        let w = s["@type"];
        w.indexOf("_:") === 0 && (s["@type"] = w = l.getId(w));
      }
      y && y.push(s);
      return;
    } else if (y && t.isList(s)) {
      const w = [];
      r.createNodeMap(s["@list"], a, c, l, u, w), y.push({ "@list": w });
      return;
    }
    if ("@type" in s) {
      const w = s["@type"];
      for (const v of w)
        v.indexOf("_:") === 0 && l.getId(v);
    }
    n.isUndefined(u) && (u = t.isBlankNode(s) ? l.getId(s["@id"]) : s["@id"]), y && y.push({ "@id": u });
    const f = a[c], h = f[u] = f[u] || {};
    h["@id"] = u;
    const x = Object.keys(s).sort();
    for (let w of x) {
      if (w === "@id")
        continue;
      if (w === "@reverse") {
        const I = { "@id": u }, g = s["@reverse"];
        for (const m in g) {
          const d = g[m];
          for (const p of d) {
            let b = p["@id"];
            t.isBlankNode(p) && (b = l.getId(b)), r.createNodeMap(p, a, c, l, b), i.addValue(
              f[b],
              m,
              I,
              { propertyIsArray: !0, allowDuplicate: !1 }
            );
          }
        }
        continue;
      }
      if (w === "@graph") {
        u in a || (a[u] = {}), r.createNodeMap(s[w], a, u, l);
        continue;
      }
      if (w === "@included") {
        r.createNodeMap(s[w], a, c, l);
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
      const v = s[w];
      if (w.indexOf("_:") === 0 && (w = l.getId(w)), v.length === 0) {
        i.addValue(h, w, [], { propertyIsArray: !0 });
        continue;
      }
      for (let I of v)
        if (w === "@type" && (I = I.indexOf("_:") === 0 ? l.getId(I) : I), t.isSubject(I) || t.isSubjectReference(I)) {
          if ("@id" in I && !I["@id"])
            continue;
          const g = t.isBlankNode(I) ? l.getId(I["@id"]) : I["@id"];
          i.addValue(
            h,
            w,
            { "@id": g },
            { propertyIsArray: !0, allowDuplicate: !1 }
          ), r.createNodeMap(I, a, c, l, g);
        } else if (t.isValue(I))
          i.addValue(
            h,
            w,
            I,
            { propertyIsArray: !0, allowDuplicate: !1 }
          );
        else if (t.isList(I)) {
          const g = [];
          r.createNodeMap(I["@list"], a, c, l, u, g), I = { "@list": g }, i.addValue(
            h,
            w,
            I,
            { propertyIsArray: !0, allowDuplicate: !1 }
          );
        } else
          r.createNodeMap(I, a, c, l, u), i.addValue(
            h,
            w,
            I,
            { propertyIsArray: !0, allowDuplicate: !1 }
          );
    }
  }, r.mergeNodeMapGraphs = (s) => {
    const a = {};
    for (const c of Object.keys(s).sort())
      for (const l of Object.keys(s[c]).sort()) {
        const u = s[c][l];
        l in a || (a[l] = { "@id": l });
        const y = a[l];
        for (const f of Object.keys(u).sort())
          if (e(f) && f !== "@type")
            y[f] = i.clone(u[f]);
          else
            for (const h of u[f])
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
      const u = s[l];
      let y = a[l];
      y ? "@graph" in y || (y["@graph"] = []) : a[l] = y = {
        "@id": l,
        "@graph": []
      };
      const f = y["@graph"];
      for (const h of Object.keys(u).sort()) {
        const x = u[h];
        t.isSubjectReference(x) || f.push(x);
      }
    }
    return a;
  }, Ss;
}
var Is, cd;
function Gh() {
  if (cd) return Is;
  cd = 1;
  const {
    isSubjectReference: e
  } = qt(), {
    createMergedNodeMap: t
  } = yr(), n = {};
  return Is = n, n.flatten = (i) => {
    const o = t(i), r = [], s = Object.keys(o).sort();
    for (let a = 0; a < s.length; ++a) {
      const c = o[s[a]];
      e(c) || r.push(c);
    }
    return r;
  }, Is;
}
var As, dd;
function Bh() {
  if (dd) return As;
  dd = 1;
  const e = He(), t = qt(), n = Ne(), {
    REGEX_BCP47: i,
    addValue: o
  } = Ze(), {
    handleEvent: r
  } = Ln(), {
    // RDF,
    RDF_LIST: s,
    RDF_FIRST: a,
    RDF_REST: c,
    RDF_NIL: l,
    RDF_TYPE: u,
    // RDF_PLAIN_LITERAL,
    // RDF_XML_LITERAL,
    RDF_JSON_LITERAL: y,
    // RDF_OBJECT,
    // RDF_LANGSTRING,
    // XSD,
    XSD_BOOLEAN: f,
    XSD_DOUBLE: h,
    XSD_INTEGER: x,
    XSD_STRING: w
  } = xa(), v = {};
  As = v, v.fromRDF = async (g, m) => {
    const {
      useRdfType: d = !1,
      useNativeTypes: p = !1,
      rdfDirection: b = null
    } = m, S = {}, A = { "@default": S }, P = {};
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
      M in A || (A[M] = {}), M !== "@default" && !(M in S) && (S[M] = { "@id": M });
      const j = A[M], N = k.subject.value, _ = k.predicate.value, F = k.object;
      N in j || (j[N] = { "@id": N });
      const L = j[N], B = F.termType.endsWith("Node");
      if (B && !(F.value in j) && (j[F.value] = { "@id": F.value }), _ === u && !d && B) {
        o(L, "@type", F.value, { propertyIsArray: !0 });
        continue;
      }
      const T = I(F, p, b, m);
      if (o(L, _, T, { propertyIsArray: !0 }), B)
        if (F.value === l) {
          const O = j[F.value];
          "usages" in O || (O.usages = []), O.usages.push({
            node: L,
            property: _,
            value: T
          });
        } else F.value in P ? P[F.value] = !1 : P[F.value] = {
          node: L,
          property: _,
          value: T
        };
    }
    for (const k in A) {
      const M = A[k];
      if (!(l in M))
        continue;
      const j = M[l];
      if (j.usages) {
        for (let N of j.usages) {
          let _ = N.node, F = N.property, L = N.value;
          const B = [], T = [];
          let O = Object.keys(_).length;
          for (; F === c && n.isObject(P[_["@id"]]) && n.isArray(_[a]) && _[a].length === 1 && n.isArray(_[c]) && _[c].length === 1 && (O === 3 || O === 4 && n.isArray(_["@type"]) && _["@type"].length === 1 && _["@type"][0] === s) && (B.push(_[a][0]), T.push(_["@id"]), N = P[_["@id"]], _ = N.node, F = N.property, L = N.value, O = Object.keys(_).length, !!t.isBlankNode(_)); )
            ;
          delete L["@id"], L["@list"] = B.reverse();
          for (const U of T)
            delete M[U];
        }
        delete j.usages;
      }
    }
    const R = [], E = Object.keys(S).sort();
    for (const k of E) {
      const M = S[k];
      if (k in A) {
        const j = M["@graph"] = [], N = A[k], _ = Object.keys(N).sort();
        for (const F of _) {
          const L = N[F];
          t.isSubjectReference(L) || j.push(L);
        }
      }
      t.isSubjectReference(M) || R.push(M);
    }
    return R;
  };
  function I(g, m, d, p) {
    if (g.termType.endsWith("Node"))
      return { "@id": g.value };
    const b = { "@value": g.value };
    if (g.language)
      g.language.match(i) || p.eventHandler && r({
        event: {
          type: ["JsonLdEvent"],
          code: "invalid @language value",
          level: "warning",
          message: "@language value must be valid BCP47.",
          details: {
            language: g.language
          }
        },
        options: p
      }), b["@language"] = g.language;
    else {
      let S = g.datatype.value;
      if (S || (S = w), S === y) {
        S = "@json";
        try {
          b["@value"] = JSON.parse(b["@value"]);
        } catch (A) {
          throw new e(
            "JSON literal could not be parsed.",
            "jsonld.InvalidJsonLiteral",
            { code: "invalid JSON literal", value: b["@value"], cause: A }
          );
        }
      }
      if (m) {
        if (S === f)
          b["@value"] === "true" ? b["@value"] = !0 : b["@value"] === "false" && (b["@value"] = !1);
        else if (n.isNumeric(b["@value"]))
          if (S === x) {
            const A = parseInt(b["@value"], 10);
            A.toFixed(0) === b["@value"] && (b["@value"] = A);
          } else S === h && (b["@value"] = parseFloat(b["@value"]));
        [f, x, h, w].includes(S) || (b["@type"] = S);
      } else if (d === "i18n-datatype" && S.startsWith("https://www.w3.org/ns/i18n#")) {
        const [, A, P] = S.split(/[#_]/);
        A.length > 0 && (b["@language"] = A, A.match(i) || p.eventHandler && r({
          event: {
            type: ["JsonLdEvent"],
            code: "invalid @language value",
            level: "warning",
            message: "@language value must be valid BCP47.",
            details: {
              language: A
            }
          },
          options: p
        })), b["@direction"] = P;
      } else S !== w && (b["@type"] = S);
    }
    return b;
  }
  return As;
}
var qs, ld;
function Zh() {
  return ld || (ld = 1, qs = function e(t) {
    return t === null || typeof t != "object" || t.toJSON != null ? JSON.stringify(t) : Array.isArray(t) ? "[" + t.reduce((n, i, o) => {
      const r = o === 0 ? "" : ",", s = i === void 0 || typeof i == "symbol" ? null : i;
      return n + r + e(s);
    }, "") + "]" : "{" + Object.keys(t).sort().reduce((n, i, o) => {
      if (t[i] === void 0 || typeof t[i] == "symbol")
        return n;
      const r = n.length === 0 ? "" : ",";
      return n + r + e(i) + ":" + e(t[i]);
    }, "") + "}";
  }), qs;
}
var Rs, ud;
function Hh() {
  if (ud) return Rs;
  ud = 1;
  const { createNodeMap: e } = yr(), { isKeyword: t } = Qt(), n = qt(), i = Zh(), o = He(), r = Ne(), s = Ze(), {
    handleEvent: a
  } = Ln(), {
    // RDF,
    // RDF_LIST,
    RDF_FIRST: c,
    RDF_REST: l,
    RDF_NIL: u,
    RDF_TYPE: y,
    // RDF_PLAIN_LITERAL,
    // RDF_XML_LITERAL,
    RDF_JSON_LITERAL: f,
    // RDF_OBJECT,
    RDF_LANGSTRING: h,
    // XSD,
    XSD_BOOLEAN: x,
    XSD_DOUBLE: w,
    XSD_INTEGER: v,
    XSD_STRING: I
  } = xa(), {
    isAbsolute: g
  } = Dt(), m = {};
  Rs = m, m.toRDF = (S, A) => {
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
        A.eventHandler && a({
          event: {
            type: ["JsonLdEvent"],
            code: "relative graph reference",
            level: "warning",
            message: "Relative graph reference found.",
            details: {
              graph: M
            }
          },
          options: A
        });
        continue;
      }
      d(E, R[M], j, P, A);
    }
    return E;
  };
  function d(S, A, P, R, E) {
    const k = Object.keys(A).sort();
    for (const M of k) {
      const j = A[M], N = Object.keys(j).sort();
      for (let _ of N) {
        const F = j[_];
        if (_ === "@type")
          _ = y;
        else if (t(_))
          continue;
        for (const L of F) {
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
                  property: R.getOldIds().find((U) => R.getId(U) === _)
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
  function p(S, A, P, R, E, k) {
    const M = { termType: "NamedNode", value: c }, j = { termType: "NamedNode", value: l }, N = { termType: "NamedNode", value: u }, _ = S.pop(), F = _ ? { termType: "BlankNode", value: A.getId() } : N;
    let L = F;
    for (const B of S) {
      const T = b(
        B,
        A,
        P,
        R,
        E,
        k
      ), O = { termType: "BlankNode", value: A.getId() };
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
        A,
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
    return F;
  }
  function b(S, A, P, R, E, k) {
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
        M.value = j.toString(), M.datatype.value = N || x;
      else if (r.isDouble(j) || N === w)
        r.isDouble(j) || (j = parseFloat(j)), M.value = j.toExponential(15).replace(/(\d)0*e\+?/, "$1E"), M.datatype.value = N || w;
      else if (r.isNumber(j))
        M.value = j.toFixed(0), M.datatype.value = N || v;
      else if ("@direction" in S && E === "i18n-datatype") {
        const _ = (S["@language"] || "").toLowerCase(), F = S["@direction"], L = `https://www.w3.org/ns/i18n#${_}_${F}`;
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
        }), M.value = j, M.datatype.value = N || I);
      }
    } else if (n.isList(S)) {
      const j = p(
        S["@list"],
        A,
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
  return Rs;
}
var js, pd;
function Jh() {
  if (pd) return js;
  pd = 1;
  const { isKeyword: e } = Qt(), t = qt(), n = Ne(), i = Ze(), o = Dt(), r = He(), {
    createNodeMap: s,
    mergeNodeMapGraphs: a
  } = yr(), c = {};
  js = c, c.frameMergedOrDefault = (d, p, b) => {
    const S = {
      options: b,
      embedded: !1,
      graph: "@default",
      graphMap: { "@default": {} },
      subjectStack: [],
      link: {},
      bnodeMap: {}
    }, A = new i.IdentifierIssuer("_:b");
    s(d, S.graphMap, "@default", A), b.merged && (S.graphMap["@merged"] = a(S.graphMap), S.graph = "@merged"), S.subjects = S.graphMap[S.graph];
    const P = [];
    c.frame(S, Object.keys(S.subjects).sort(), p, P), b.pruneBlankNodeIdentifiers && (b.bnodesToClear = Object.keys(S.bnodeMap).filter((R) => S.bnodeMap[R].length === 1));
    // remove @preserve from results
    return b.link = {}, v(P, b);
  }, c.frame = (d, p, b, S, A = null) => {
    f(b), b = b[0];
    const P = d.options, R = {
      embed: y(b, P, "embed"),
      explicit: y(b, P, "explicit"),
      requireAll: y(b, P, "requireAll")
    };
    d.link.hasOwnProperty(d.graph) || (d.link[d.graph] = {});
    const E = d.link[d.graph], k = h(d, p, b, R), M = Object.keys(k).sort();
    for (const j of M) {
      const N = k[j];
      if (A === null ? d.uniqueEmbeds = { [d.graph]: {} } : d.uniqueEmbeds[d.graph] = d.uniqueEmbeds[d.graph] || {}, R.embed === "@link" && j in E) {
        I(S, A, E[j]);
        continue;
      }
      const _ = { "@id": j };
      if (j.indexOf("_:") === 0 && i.addValue(d.bnodeMap, j, _, { propertyIsArray: !0 }), E[j] = _, (R.embed === "@first" || R.embed === "@last") && d.is11)
        throw new r(
          "Invalid JSON-LD syntax; invalid value of @embed.",
          "jsonld.SyntaxError",
          { code: "invalid @embed value", frame: b }
        );
      if (!(!d.embedded && d.uniqueEmbeds[d.graph].hasOwnProperty(j))) {
        if (d.embedded && (R.embed === "@never" || u(N, d.graph, d.subjectStack))) {
          I(S, A, _);
          continue;
        }
        if (d.embedded && (R.embed == "@first" || R.embed == "@once") && d.uniqueEmbeds[d.graph].hasOwnProperty(j)) {
          I(S, A, _);
          continue;
        }
        if (R.embed === "@last" && j in d.uniqueEmbeds[d.graph] && w(d, j), d.uniqueEmbeds[d.graph][j] = { parent: S, property: A }, d.subjectStack.push({ subject: N, graph: d.graph }), j in d.graphMap) {
          let F = !1, L = null;
          "@graph" in b ? (L = b["@graph"][0], F = !(j === "@merged" || j === "@default"), n.isObject(L) || (L = {})) : (F = d.graph !== "@merged", L = {}), F && c.frame(
            { ...d, graph: j, embedded: !1 },
            Object.keys(d.graphMap[j]).sort(),
            [L],
            _,
            "@graph"
          );
        }
        "@included" in b && c.frame(
          { ...d, embedded: !1 },
          p,
          b["@included"],
          _,
          "@included"
        );
        for (const F of Object.keys(N).sort()) {
          if (e(F)) {
            if (_[F] = i.clone(N[F]), F === "@type")
              for (const L of N["@type"])
                L.indexOf("_:") === 0 && i.addValue(
                  d.bnodeMap,
                  L,
                  _,
                  { propertyIsArray: !0 }
                );
            continue;
          }
          if (!(R.explicit && !(F in b)))
            for (const L of N[F]) {
              const B = F in b ? b[F] : l(R);
              if (t.isList(L)) {
                const T = b[F] && b[F][0] && b[F][0]["@list"] ? b[F][0]["@list"] : l(R), O = { "@list": [] };
                I(_, F, O);
                const U = L["@list"];
                for (const D of U)
                  t.isSubjectReference(D) ? c.frame(
                    { ...d, embedded: !0 },
                    [D["@id"]],
                    T,
                    O,
                    "@list"
                  ) : I(O, "@list", i.clone(D));
              } else t.isSubjectReference(L) ? c.frame(
                { ...d, embedded: !0 },
                [L["@id"]],
                B,
                _,
                F
              ) : m(B[0], L) && I(_, F, i.clone(L));
            }
        }
        for (const F of Object.keys(b).sort()) {
          if (F === "@type") {
            if (!n.isObject(b[F][0]) || !("@default" in b[F][0]))
              continue;
          } else if (e(F))
            continue;
          const L = b[F][0] || {};
          if (!y(L, P, "omitDefault") && !(F in _)) {
            let T = "@null";
            "@default" in L && (T = i.clone(L["@default"])), n.isArray(T) || (T = [T]), _[F] = [{ "@preserve": T }];
          }
        }
        for (const F of Object.keys(b["@reverse"] || {}).sort()) {
          const L = b["@reverse"][F];
          for (const B of Object.keys(d.subjects))
            i.getValues(d.subjects[B], F).some((O) => O["@id"] === j) && (_["@reverse"] = _["@reverse"] || {}, i.addValue(
              _["@reverse"],
              F,
              [],
              { propertyIsArray: !0 }
            ), c.frame(
              { ...d, embedded: !0 },
              [B],
              L,
              _["@reverse"][F],
              A
            ));
        }
        I(S, A, _), d.subjectStack.pop();
      }
    }
  }, c.cleanupNull = (d, p) => {
    if (n.isArray(d))
      return d.map((S) => c.cleanupNull(S, p)).filter((S) => S);
    if (d === "@null")
      return null;
    if (n.isObject(d)) {
      if ("@id" in d) {
        const b = d["@id"];
        if (p.link.hasOwnProperty(b)) {
          const S = p.link[b].indexOf(d);
          if (S !== -1)
            return p.link[b][S];
          p.link[b].push(d);
        } else
          p.link[b] = [d];
      }
      for (const b in d)
        d[b] = c.cleanupNull(d[b], p);
    }
    return d;
  };
  function l(d) {
    const p = {};
    for (const b in d)
      d[b] !== void 0 && (p["@" + b] = [d[b]]);
    return [p];
  }
  function u(d, p, b) {
    for (let S = b.length - 1; S >= 0; --S) {
      const A = b[S];
      if (A.graph === p && A.subject["@id"] === d["@id"])
        return !0;
    }
    return !1;
  }
  function y(d, p, b) {
    const S = "@" + b;
    let A = S in d ? d[S][0] : p[b];
    if (b === "embed") {
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
      for (const p of i.asArray(d[0]["@id"]))
        if (!(n.isObject(p) || o.isAbsolute(p)) || n.isString(p) && p.indexOf("_:") === 0)
          throw new r(
            "Invalid JSON-LD syntax; invalid @id in frame.",
            "jsonld.SyntaxError",
            { code: "invalid frame", frame: d }
          );
    }
    if ("@type" in d[0]) {
      for (const p of i.asArray(d[0]["@type"]))
        if (!(n.isObject(p) || o.isAbsolute(p) || p === "@json") || n.isString(p) && p.indexOf("_:") === 0)
          throw new r(
            "Invalid JSON-LD syntax; invalid @type in frame.",
            "jsonld.SyntaxError",
            { code: "invalid frame", frame: d }
          );
    }
  }
  function h(d, p, b, S) {
    const A = {};
    for (const P of p) {
      const R = d.graphMap[d.graph][P];
      x(d, R, b, S) && (A[P] = R);
    }
    return A;
  }
  function x(d, p, b, S) {
    let A = !0, P = !1;
    for (const R in b) {
      let E = !1;
      const k = i.getValues(p, R), M = i.getValues(b, R).length === 0;
      if (R === "@id") {
        if (n.isEmptyObject(b["@id"][0] || {}) ? E = !0 : b["@id"].length >= 0 && (E = b["@id"].includes(k[0])), !S.requireAll)
          return E;
      } else if (R === "@type") {
        if (A = !1, M) {
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
          if (j && (f([j]), N = "@default" in j), A = !1, k.length === 0 && N)
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
              const F = k[0]["@list"];
              t.isValue(_) ? E = F.some((L) => m(_, L)) : (t.isSubject(_) || t.isSubjectReference(_)) && (E = F.some((L) => g(
                d,
                _,
                L,
                S
              )));
            }
          } else t.isValue(j) ? E = k.some((_) => m(j, _)) : t.isSubjectReference(j) ? E = k.some((_) => g(d, j, _, S)) : n.isObject(j) ? E = k.length > 0 : E = !1;
        }
      }
      if (!E && S.requireAll)
        return !1;
      P = P || E;
    }
    return A || P;
  }
  function w(d, p) {
    const b = d.uniqueEmbeds[d.graph], S = b[p], A = S.parent, P = S.property, R = { "@id": p };
    if (n.isArray(A)) {
      for (let k = 0; k < A.length; ++k)
        if (i.compareValues(A[k], R)) {
          A[k] = R;
          break;
        }
    } else {
      const k = n.isArray(A[P]);
      i.removeValue(A, P, R, { propertyIsArray: k }), i.addValue(A, P, R, { propertyIsArray: k });
    }
    const E = (k) => {
      const M = Object.keys(b);
      for (const j of M)
        j in b && n.isObject(b[j].parent) && b[j].parent["@id"] === k && (delete b[j], E(j));
    };
    E(p);
  }
  /**
   * Removes the @preserve keywords from expanded result of framing.
   *
   * @param input the framed, framed output.
   * @param options the framing options used.
   *
   * @return the resulting output.
   */
  function v(d, p) {
    if (n.isArray(d))
      return d.map((b) => v(b, p));
    if (n.isObject(d)) {
      // remove @preserve
      if ("@preserve" in d)
        return d["@preserve"][0];
      if (t.isValue(d))
        return d;
      if (t.isList(d))
        return d["@list"] = v(d["@list"], p), d;
      if ("@id" in d) {
        const b = d["@id"];
        if (p.link.hasOwnProperty(b)) {
          const S = p.link[b].indexOf(d);
          if (S !== -1)
            return p.link[b][S];
          p.link[b].push(d);
        } else
          p.link[b] = [d];
      }
      for (const b in d) {
        if (b === "@id" && p.bnodesToClear.includes(d[b])) {
          delete d["@id"];
          continue;
        }
        d[b] = v(d[b], p);
      }
    }
    return d;
  }
  function I(d, p, b) {
    n.isObject(d) ? i.addValue(d, p, b, { propertyIsArray: !0 }) : d.push(b);
  }
  function g(d, p, b, S) {
    if (!("@id" in b))
      return !1;
    const A = d.subjects[b["@id"]];
    return A && x(d, A, p, S);
  }
  function m(d, p) {
    const b = p["@value"], S = p["@type"], A = p["@language"], P = d["@value"] ? n.isArray(d["@value"]) ? d["@value"] : [d["@value"]] : [], R = d["@type"] ? n.isArray(d["@type"]) ? d["@type"] : [d["@type"]] : [], E = d["@language"] ? n.isArray(d["@language"]) ? d["@language"] : [d["@language"]] : [];
    return P.length === 0 && R.length === 0 && E.length === 0 ? !0 : !(!(P.includes(b) || n.isEmptyObject(P[0])) || !(!S && R.length === 0 || R.includes(S) || S && n.isEmptyObject(R[0])) || !(!A && E.length === 0 || E.includes(A) || A && n.isEmptyObject(E[0])));
  }
  return js;
}
var $s, fd;
function Kh() {
  if (fd) return $s;
  fd = 1;
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
  } = qt(), {
    expandIri: u,
    getContextValue: y,
    isKeyword: f,
    process: h,
    processingMode: x
  } = Qt(), {
    removeBase: w,
    prependBase: v
  } = Dt(), {
    REGEX_KEYWORD: I,
    addValue: g,
    asArray: m,
    compareShortestLeast: d
  } = Ze(), p = {};
  $s = p, p.compact = async ({
    activeCtx: A,
    activeProperty: P = null,
    element: R,
    options: E = {}
  }) => {
    if (t(R)) {
      let M = [];
      for (let j = 0; j < R.length; ++j) {
        const N = await p.compact({
          activeCtx: A,
          activeProperty: P,
          element: R[j],
          options: E
        });
        N !== null && M.push(N);
      }
      return E.compactArrays && M.length === 1 && (y(
        A,
        P,
        "@container"
      ) || []).length === 0 && (M = M[0]), M;
    }
    const k = y(A, P, "@context");
    if (o(k) || (A = await h({
      activeCtx: A,
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
      if (s(R) || l(R)) {
        const T = p.compactValue({ activeCtx: A, activeProperty: P, value: R, options: E });
        return E.link && l(R) && (E.link.hasOwnProperty(R["@id"]) || (E.link[R["@id"]] = []), E.link[R["@id"]].push({ expanded: R, compacted: T })), T;
      }
      if (r(R) && (y(
        A,
        P,
        "@container"
      ) || []).includes("@list"))
        return p.compact({
          activeCtx: A,
          activeProperty: P,
          element: R["@list"],
          options: E
        });
      const M = P === "@reverse", j = {}, N = A;
      !s(R) && !l(R) && (A = A.revertToPreviousContext());
      const _ = y(N, P, "@context");
      o(_) || (A = await h({
        activeCtx: A,
        localCtx: _,
        propagate: !0,
        overrideProtected: !0,
        options: E
      })), E.link && "@id" in R && (E.link.hasOwnProperty(R["@id"]) || (E.link[R["@id"]] = []), E.link[R["@id"]].push({ expanded: R, compacted: j }));
      let F = R["@type"] || [];
      F.length > 1 && (F = Array.from(F).sort());
      const L = A;
      for (const T of F) {
        const O = p.compactIri(
          { activeCtx: L, iri: T, relativeTo: { vocab: !0 } }
        ), U = y(N, O, "@context");
        o(U) || (A = await h({
          activeCtx: A,
          localCtx: U,
          options: E,
          propagate: !1
        }));
      }
      const B = Object.keys(R).sort();
      for (const T of B) {
        const O = R[T];
        if (T === "@id") {
          let U = m(O).map(
            ($) => p.compactIri({
              activeCtx: A,
              iri: $,
              relativeTo: { vocab: !1 },
              base: E.base
            })
          );
          U.length === 1 && (U = U[0]);
          const D = p.compactIri(
            { activeCtx: A, iri: "@id", relativeTo: { vocab: !0 } }
          );
          j[D] = U;
          continue;
        }
        if (T === "@type") {
          let U = m(O).map(
            (z) => p.compactIri({
              activeCtx: N,
              iri: z,
              relativeTo: { vocab: !0 }
            })
          );
          U.length === 1 && (U = U[0]);
          const D = p.compactIri(
            { activeCtx: A, iri: "@type", relativeTo: { vocab: !0 } }
          ), C = (y(
            A,
            D,
            "@container"
          ) || []).includes("@set") && x(A, 1.1) || t(U) && O.length === 0;
          g(j, D, U, { propertyIsArray: C });
          continue;
        }
        if (T === "@reverse") {
          const U = await p.compact({
            activeCtx: A,
            activeProperty: "@reverse",
            element: O,
            options: E
          });
          for (const D in U)
            if (A.mappings.has(D) && A.mappings.get(D).reverse) {
              const $ = U[D], C = (y(
                A,
                D,
                "@container"
              ) || []).includes("@set") || !E.compactArrays;
              g(
                j,
                D,
                $,
                { propertyIsArray: C }
              ), delete U[D];
            }
          if (Object.keys(U).length > 0) {
            const D = p.compactIri({
              activeCtx: A,
              iri: T,
              relativeTo: { vocab: !0 }
            });
            g(j, D, U);
          }
          continue;
        }
        if (T === "@preserve") {
          const U = await p.compact({
            activeCtx: A,
            activeProperty: P,
            element: O,
            options: E
          });
          t(U) && U.length === 0 || g(j, T, U);
          continue;
        }
        if (T === "@index") {
          if ((y(
            A,
            P,
            "@container"
          ) || []).includes("@index"))
            continue;
          const D = p.compactIri({
            activeCtx: A,
            iri: T,
            relativeTo: { vocab: !0 }
          });
          g(j, D, O);
          continue;
        }
        if (T !== "@graph" && T !== "@list" && T !== "@included" && f(T)) {
          const U = p.compactIri({
            activeCtx: A,
            iri: T,
            relativeTo: { vocab: !0 }
          });
          g(j, U, O);
          continue;
        }
        if (!t(O))
          throw new e(
            "JSON-LD expansion error; expanded value must be an array.",
            "jsonld.SyntaxError"
          );
        if (O.length === 0) {
          const U = p.compactIri({
            activeCtx: A,
            iri: T,
            value: O,
            relativeTo: { vocab: !0 },
            reverse: M
          }), D = A.mappings.has(U) ? A.mappings.get(U)["@nest"] : null;
          let $ = j;
          D && (S(A, D, E), n(j[D]) || (j[D] = {}), $ = j[D]), g(
            $,
            U,
            O,
            {
              propertyIsArray: !0
            }
          );
        }
        for (const U of O) {
          const D = p.compactIri({
            activeCtx: A,
            iri: T,
            value: U,
            relativeTo: { vocab: !0 },
            reverse: M
          }), $ = A.mappings.has(D) ? A.mappings.get(D)["@nest"] : null;
          let q = j;
          $ && (S(A, $, E), n(j[$]) || (j[$] = {}), q = j[$]);
          const C = y(
            A,
            D,
            "@container"
          ) || [], z = a(U), H = r(U);
          let Q;
          H ? Q = U["@list"] : z && (Q = U["@graph"]);
          let J = await p.compact({
            activeCtx: A,
            activeProperty: D,
            element: H || z ? Q : U,
            options: E
          });
          if (H)
            if (t(J) || (J = [J]), !C.includes("@list"))
              J = {
                [p.compactIri({
                  activeCtx: A,
                  iri: "@list",
                  relativeTo: { vocab: !0 }
                })]: J
              }, "@index" in U && (J[p.compactIri({
                activeCtx: A,
                iri: "@index",
                relativeTo: { vocab: !0 }
              })] = U["@index"]);
            else {
              g(q, D, J, {
                valueIsArray: !0,
                allowDuplicate: !0
              });
              continue;
            }
          if (z)
            if (C.includes("@graph") && (C.includes("@id") || C.includes("@index") && c(U))) {
              let V;
              q.hasOwnProperty(D) ? V = q[D] : q[D] = V = {};
              const G = (C.includes("@id") ? U["@id"] : U["@index"]) || p.compactIri({
                activeCtx: A,
                iri: "@none",
                relativeTo: { vocab: !0 }
              });
              g(
                V,
                G,
                J,
                {
                  propertyIsArray: !E.compactArrays || C.includes("@set")
                }
              );
            } else C.includes("@graph") && c(U) ? (t(J) && J.length > 1 && (J = { "@included": J }), g(
              q,
              D,
              J,
              {
                propertyIsArray: !E.compactArrays || C.includes("@set")
              }
            )) : (t(J) && J.length === 1 && E.compactArrays && (J = J[0]), J = {
              [p.compactIri({
                activeCtx: A,
                iri: "@graph",
                relativeTo: { vocab: !0 }
              })]: J
            }, "@id" in U && (J[p.compactIri({
              activeCtx: A,
              iri: "@id",
              relativeTo: { vocab: !0 }
            })] = U["@id"]), "@index" in U && (J[p.compactIri({
              activeCtx: A,
              iri: "@index",
              relativeTo: { vocab: !0 }
            })] = U["@index"]), g(
              q,
              D,
              J,
              {
                propertyIsArray: !E.compactArrays || C.includes("@set")
              }
            ));
          else if (C.includes("@language") || C.includes("@index") || C.includes("@id") || C.includes("@type")) {
            let V;
            q.hasOwnProperty(D) ? V = q[D] : q[D] = V = {};
            let G;
            if (C.includes("@language"))
              s(J) && (J = J["@value"]), G = U["@language"];
            else if (C.includes("@index")) {
              const Z = y(
                A,
                D,
                "@index"
              ) || "@index", K = p.compactIri(
                { activeCtx: A, iri: Z, relativeTo: { vocab: !0 } }
              );
              if (Z === "@index")
                G = U["@index"], delete J[K];
              else {
                let W;
                if ([G, ...W] = m(J[Z] || []), !i(G))
                  G = null;
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
              const Z = p.compactIri({
                activeCtx: A,
                iri: "@id",
                relativeTo: { vocab: !0 }
              });
              G = J[Z], delete J[Z];
            } else if (C.includes("@type")) {
              const Z = p.compactIri({
                activeCtx: A,
                iri: "@type",
                relativeTo: { vocab: !0 }
              });
              let K;
              switch ([G, ...K] = m(J[Z] || []), K.length) {
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
              Object.keys(J).length === 1 && "@id" in U && (J = await p.compact({
                activeCtx: A,
                activeProperty: D,
                element: { "@id": U["@id"] },
                options: E
              }));
            }
            G || (G = p.compactIri({
              activeCtx: A,
              iri: "@none",
              relativeTo: { vocab: !0 }
            })), g(
              V,
              G,
              J,
              {
                propertyIsArray: C.includes("@set")
              }
            );
          } else {
            const V = !E.compactArrays || C.includes("@set") || C.includes("@list") || t(J) && J.length === 0 || T === "@list" || T === "@graph";
            g(
              q,
              D,
              J,
              { propertyIsArray: V }
            );
          }
        }
      }
      return j;
    }
    return R;
  }, p.compactIri = ({
    activeCtx: A,
    iri: P,
    value: R = null,
    relativeTo: E = { vocab: !1 },
    reverse: k = !1,
    base: M = null
  }) => {
    if (P === null)
      return P;
    A.isPropertyTermScoped && A.previousContext && (A = A.previousContext);
    const j = A.getInverse();
    if (f(P) && P in j && "@none" in j[P] && "@type" in j[P]["@none"] && "@none" in j[P]["@none"]["@type"])
      return j[P]["@none"]["@type"]["@none"];
    if (E.vocab && P in j) {
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
      let O = "@language", U = "@null";
      if (k)
        O = "@type", U = "@reverse", T.push("@set");
      else if (r(R)) {
        "@index" in R || T.push("@list");
        const $ = R["@list"];
        if ($.length === 0)
          O = "@any", U = "@none";
        else {
          let q = $.length === 0 ? B : null, C = null;
          for (let z = 0; z < $.length; ++z) {
            const H = $[z];
            let Q = "@none", J = "@none";
            if (s(H))
              if ("@direction" in H) {
                const V = (H["@language"] || "").toLowerCase(), G = H["@direction"];
                Q = `${V}_${G}`;
              } else "@language" in H ? Q = H["@language"].toLowerCase() : "@type" in H ? J = H["@type"] : Q = "@null";
            else
              J = "@id";
            if (q === null ? q = Q : Q !== q && s(H) && (q = "@none"), C === null ? C = J : J !== C && (C = "@none"), q === "@none" && C === "@none")
              break;
          }
          q = q || "@none", C = C || "@none", C !== "@none" ? (O = "@type", U = C) : U = q;
        }
      } else {
        if (s(R))
          if ("@language" in R && !("@index" in R)) {
            T.push("@language", "@language@set"), U = R["@language"];
            const $ = R["@direction"];
            $ && (U = `${U}_${$}`);
          } else "@direction" in R && !("@index" in R) ? U = `_${R["@direction"]}` : "@type" in R && (O = "@type", U = R["@type"]);
        else
          O = "@type", U = "@id";
        T.push("@set");
      }
      T.push("@none"), n(R) && !("@index" in R) && T.push("@index", "@index@set"), s(R) && Object.keys(R).length === 1 && T.push("@language", "@language@set");
      const D = b(
        A,
        P,
        R,
        T,
        O,
        U
      );
      if (D !== null)
        return D;
    }
    if (E.vocab && "@vocab" in A) {
      const B = A["@vocab"];
      if (P.indexOf(B) === 0 && P !== B) {
        const T = P.substr(B.length);
        if (!A.mappings.has(T))
          return T;
      }
    }
    let N = null;
    const _ = [];
    let F = A.fastCurieMap;
    const L = P.length - 1;
    for (let B = 0; B < L && P[B] in F; ++B)
      F = F[P[B]], "" in F && _.push(F[""][0]);
    for (let B = _.length - 1; B >= 0; --B) {
      const T = _[B], O = T.terms;
      for (const U of O) {
        const D = U + ":" + P.substr(T.iri.length);
        A.mappings.get(U)._prefix && (!A.mappings.has(D) || R === null && A.mappings.get(D)["@id"] === P) && (N === null || d(D, N) < 0) && (N = D);
      }
    }
    if (N !== null)
      return N;
    for (const [B, T] of A.mappings)
      if (T && T._prefix && P.startsWith(B + ":"))
        throw new e(
          `Absolute IRI "${P}" confused with prefix "${B}".`,
          "jsonld.SyntaxError",
          { code: "IRI confused with prefix", context: A }
        );
    if (!E.vocab)
      if ("@base" in A)
        if (A["@base"]) {
          const B = w(v(M, A["@base"]), P);
          return I.test(B) ? `./${B}` : B;
        } else
          return P;
      else
        return w(M, P);
    return P;
  }, p.compactValue = ({ activeCtx: A, activeProperty: P, value: R, options: E }) => {
    if (s(R)) {
      const N = y(A, P, "@type"), _ = y(A, P, "@language"), F = y(A, P, "@direction"), L = y(A, P, "@container") || [], B = "@index" in R && !L.includes("@index");
      if (!B && N !== "@none" && (R["@type"] === N || "@language" in R && R["@language"] === _ && "@direction" in R && R["@direction"] === F || "@language" in R && R["@language"] === _ || "@direction" in R && R["@direction"] === F))
        return R["@value"];
      const T = Object.keys(R).length, O = T === 1 || T === 2 && "@index" in R && !B, U = "@language" in A, D = i(R["@value"]), $ = A.mappings.has(P) && A.mappings.get(P)["@language"] === null;
      if (O && N !== "@none" && (!U || !D || $))
        return R["@value"];
      const q = {};
      return B && (q[p.compactIri({
        activeCtx: A,
        iri: "@index",
        relativeTo: { vocab: !0 }
      })] = R["@index"]), "@type" in R ? q[p.compactIri({
        activeCtx: A,
        iri: "@type",
        relativeTo: { vocab: !0 }
      })] = p.compactIri(
        { activeCtx: A, iri: R["@type"], relativeTo: { vocab: !0 } }
      ) : "@language" in R && (q[p.compactIri({
        activeCtx: A,
        iri: "@language",
        relativeTo: { vocab: !0 }
      })] = R["@language"]), "@direction" in R && (q[p.compactIri({
        activeCtx: A,
        iri: "@direction",
        relativeTo: { vocab: !0 }
      })] = R["@direction"]), q[p.compactIri({
        activeCtx: A,
        iri: "@value",
        relativeTo: { vocab: !0 }
      })] = R["@value"], q;
    }
    const k = u(
      A,
      P,
      { vocab: !0 },
      E
    ), M = y(A, P, "@type"), j = p.compactIri({
      activeCtx: A,
      iri: R["@id"],
      relativeTo: { vocab: M === "@vocab" },
      base: E.base
    });
    return M === "@id" || M === "@vocab" || k === "@graph" ? j : {
      [p.compactIri({
        activeCtx: A,
        iri: "@id",
        relativeTo: { vocab: !0 }
      })]: j
    };
  };
  function b(A, P, R, E, k, M) {
    M === null && (M = "@null");
    const j = [];
    if ((M === "@id" || M === "@reverse") && n(R) && "@id" in R) {
      M === "@reverse" && j.push("@reverse");
      const _ = p.compactIri(
        { activeCtx: A, iri: R["@id"], relativeTo: { vocab: !0 } }
      );
      A.mappings.has(_) && A.mappings.get(_) && A.mappings.get(_)["@id"] === R["@id"] ? j.push.apply(j, ["@vocab", "@id"]) : j.push.apply(j, ["@id", "@vocab"]);
    } else {
      j.push(M);
      const _ = j.find((F) => F.includes("_"));
      _ && j.push(_.replace(/^[^_]+_/, "_"));
    }
    j.push("@none");
    const N = A.inverse[P];
    for (const _ of E) {
      if (!(_ in N))
        continue;
      const F = N[_][k];
      for (const L of j)
        if (L in F)
          return F[L];
    }
    return null;
  }
  function S(A, P, R) {
    if (u(A, P, { vocab: !0 }, R) !== "@nest")
      throw new e(
        "JSON-LD compact error; nested property must have an @nest value resolving to @nest.",
        "jsonld.SyntaxError",
        { code: "invalid @nest value" }
      );
  }
  return $s;
}
var Ps, hd;
function Qh() {
  return hd || (hd = 1, Ps = (e) => {
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
  }), Ps;
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
var _s, md;
function Wh() {
  if (md) return _s;
  md = 1;
  const e = wa(), t = Lh(), n = Ze(), i = Uh(), o = n.IdentifierIssuer, r = He(), s = hl(), a = Vh(), { expand: c } = Fh(), { flatten: l } = Gh(), { fromRDF: u } = Bh(), { toRDF: y } = Hh(), {
    frameMergedOrDefault: f,
    cleanupNull: h
  } = Jh(), {
    isArray: x,
    isObject: w,
    isString: v
  } = Ne(), {
    isSubjectReference: I
  } = qt(), {
    expandIri: g,
    getInitialContext: m,
    process: d,
    processingMode: p
  } = Qt(), {
    compact: b,
    compactIri: S
  } = Kh(), {
    createNodeMap: A,
    createMergedNodeMap: P,
    mergeNodeMaps: R
  } = yr(), {
    logEventHandler: E,
    logWarningEventHandler: k,
    safeEventHandler: M,
    setDefaultEventHandler: j,
    setupEventHandler: N,
    strictEventHandler: _,
    unhandledEventHandler: F
  } = Ln(), L = function(T) {
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
      z.compactArrays && !z.graph && x(J) ? J.length === 1 ? J = J[0] : J.length === 0 && (J = {}) : z.graph && w(J) && (J = [J]), w(C) && "@context" in C && (C = C["@context"]), C = n.clone(C), x(C) || (C = [C]);
      const V = C;
      C = [];
      for (let Z = 0; Z < V.length; ++Z)
        (!w(V[Z]) || Object.keys(V[Z]).length > 0) && C.push(V[Z]);
      const G = C.length > 0;
      if (C.length === 1 && (C = C[0]), x(J)) {
        const Z = S({
          activeCtx: Q,
          iri: "@graph",
          relativeTo: { vocab: !0 }
        }), K = J;
        J = {}, G && (J["@context"] = C), J[Z] = K;
      } else if (w(J) && G) {
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
        const G = n.clone(C.expandContext);
        w(G) && "@context" in G ? z.expandContext = G : z.expandContext = { "@context": G }, H.push(z.expandContext);
      }
      let Q;
      if (!v(q))
        z.input = n.clone(q);
      else {
        const G = await T.get(q, C);
        Q = G.documentUrl, z.input = G.document, G.contextUrl && (z.remoteContext = { "@context": G.contextUrl }, H.push(z.remoteContext));
      }
      "base" in C || (C.base = Q || "");
      let J = m(C);
      for (const G of H)
        J = await d({ activeCtx: J, localCtx: G, options: C });
      let V = await c({
        activeCtx: J,
        element: z.input,
        options: C
      });
      return w(V) && "@graph" in V && Object.keys(V).length === 1 ? V = V["@graph"] : V === null && (V = []), x(V) || (V = [V]), V;
    }, T.flatten = async function(q, C, z) {
      if (arguments.length < 1)
        return new TypeError("Could not flatten, too few arguments.");
      typeof C == "function" ? C = null : C = C || null, z = $(z, {
        base: v(q) ? q : "",
        contextResolver: new i(
          { sharedCache: D }
        )
      });
      const H = await T.expand(q, z), Q = l(H);
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
          re ? x(re) ? re.push(ee.contextUrl) : re = [re, ee.contextUrl] : re = ee.contextUrl, C["@context"] = re;
        }
      }
      const H = C ? C["@context"] || {} : {}, Q = await T.processContext(
        m(z),
        H,
        z
      );
      z.hasOwnProperty("omitGraph") || (z.omitGraph = p(Q, 1.1)), z.hasOwnProperty("pruneBlankNodeIdentifiers") || (z.pruneBlankNodeIdentifiers = p(Q, 1.1));
      const J = await T.expand(q, z), V = { ...z };
      V.isFrame = !0, V.keepFreeFloatingNodes = !0;
      const G = await T.expand(C, V), Z = Object.keys(C).map((ee) => g(Q, ee, { vocab: !0 }));
      V.merged = !Z.includes("@graph"), V.is11 = p(Q, 1.1);
      const K = f(J, G, V);
      V.graph = !z.omitGraph, V.skipExpansion = !0, V.link = {}, V.framing = !0;
      let W = await T.compact(K, H, V);
      return V.link = {}, W = h(W, V), W;
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
      return u(Q, C);
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
      if (!x(q))
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
      const J = z.issuer || new o("_:b"), V = { "@default": {} };
      for (let ee = 0; ee < H.length; ++ee) {
        const re = n.relabelBlankNodes(H[ee], {
          issuer: new o("_:b" + ee + "-")
        }), Se = Q || ee === 0 ? V : { "@default": {} };
        if (A(re, Se, "@default", J), Se !== V)
          for (const me in Se) {
            const ge = Se[me];
            if (!(me in V)) {
              V[me] = ge;
              continue;
            }
            const fe = V[me];
            for (const nt in ge)
              nt in fe || (fe[nt] = ge[nt]);
          }
      }
      const G = R(V), Z = [], K = Object.keys(G).sort();
      for (let ee = 0; ee < K.length; ++ee) {
        const re = G[K[ee]];
        I(re) || Z.push(re);
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
      }), C === null ? m(z) : (C = n.clone(C), w(C) && "@context" in C || (C = { "@context": C }), d({ activeCtx: q, localCtx: C, options: z }));
    }, T.getContextValue = Qt().getContextValue, T.documentLoaders = {}, T.useDocumentLoader = function(q) {
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
    }, T.registerRDFParser("application/n-quads", a.parse), T.registerRDFParser("application/nquads", a.parse), T.url = Dt(), T.logEventHandler = E, T.logWarningEventHandler = k, T.safeEventHandler = M, T.setDefaultEventHandler = j, T.strictEventHandler = _, T.unhandledEventHandler = F, T.util = n, Object.assign(T, n), T.promises = T, T.RequestQueue = fl(), T.JsonLdProcessor = Qh()(T), t.setupGlobals(T), t.setupDocumentLoaders(T);
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
  return L(B), _s = B, _s;
}
var Xh = Wh();
const Yh = /* @__PURE__ */ da(Xh);
async function yd(e, t, n = {}) {
  const i = {
    algorithm: "URDNA2015",
    format: "application/n-quads",
    safe: n.safe ?? !1
  };
  return t && (i.documentLoader = t), await Yh.normalize(e, i);
}
function em(e, t, n) {
  return {
    "@context": e,
    type: "DataIntegrityProof",
    cryptosuite: "eddsa-rdfc-2022",
    proofPurpose: "assertionMethod",
    verificationMethod: t,
    created: n
  };
}
async function ml(e, t, n, i = !1) {
  const [o, r] = await Promise.all([
    yd(e, n, { safe: i }),
    yd(t, n, { safe: i })
  ]), s = Ds("sha256").update(o, "utf8").digest(), a = Ds("sha256").update(r, "utf8").digest(), c = new Uint8Array(64);
  return c.set(a, 0), c.set(s, 32), c;
}
async function tm(e, t, n = {}) {
  const i = n.created ?? (/* @__PURE__ */ new Date()).toISOString(), o = em(
    e["@context"],
    t.id,
    i
  ), r = await ml(
    e,
    o,
    n.documentLoader,
    n.safe ?? !1
  ), s = await Sh(r, t.privateKey), a = xu(s);
  return {
    type: "DataIntegrityProof",
    cryptosuite: "eddsa-rdfc-2022",
    proofPurpose: "assertionMethod",
    verificationMethod: t.id,
    created: i,
    proofValue: a
  };
}
async function nm(e, t, n = {}) {
  const i = e.proof;
  if (!i) throw new Error("No proof found on credential");
  if (i.cryptosuite !== "eddsa-rdfc-2022")
    throw new Error(`Unsupported cryptosuite: ${i.cryptosuite}`);
  if (i.created === void 0)
    throw new Error('eddsa-rdfc-2022 proof is missing the required "created" property.');
  const o = ["type", "cryptosuite", "proofPurpose", "verificationMethod", "created", "proofValue"];
  if (i.type !== "DataIntegrityProof" || i.proofPurpose !== "assertionMethod" || Object.keys(i).some((y) => !o.includes(y)) || typeof i.verificationMethod != "string" || typeof i.created != "string" || typeof i.proofValue != "string") return !1;
  const { proof: r, ...s } = e, { proofValue: a, ...c } = i, l = { ...c, "@context": s["@context"] }, u = await ml(
    s,
    l,
    n.documentLoader,
    n.safe ?? !1
  );
  try {
    const y = oa(i.proofValue);
    return await Ah(y, u, t);
  } catch {
    return !1;
  }
}
const im = Qf, rm = lh, sm = Object.freeze({
  RmAccreditation: `${Ut}accreditation.json`,
  RmOperationalScope: `${Ut}operational-scope.json`,
  RmCertificate: `${Ut}certificate.json`,
  RmStudy: `${Ut}study.json`,
  RmLabAuthority: `${Ut}lab-authority.json`,
  BitstringStatusListCredential: `${Ut}status-list.json`,
  RecognizedEntityCredential: `${Ut}recognized-entity.json`
});
function am(e) {
  return e === "BitstringStatusListCredential" ? [Ht] : e === "RecognizedEntityCredential" ? [Ht, vu] : [Ht, gu];
}
const om = Object.freeze({
  name: "RM v1",
  schemas: sm,
  contexts: am
}), cm = Object.freeze({
  resolve: 1,
  parse: 0,
  carrier: 0,
  type: 0,
  schema: 0,
  proof: 2,
  key: 2,
  signature: 2
});
function gr(e, t, n, i) {
  return [
    e,
    t ?? "unresolved",
    n,
    i.purpose,
    `${i.profile.id}@${i.profile.version}`,
    i.evaluationTime
  ].join(" | ");
}
function on(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
const dm = (e) => e.replace(/~/g, "~0").replace(/\//g, "~1");
function lm(e, t) {
  if (!t.startsWith("/")) return [];
  let n = [{ pointer: "", value: e }];
  for (const i of t.slice(1).split("/")) {
    const o = [];
    for (const { pointer: r, value: s } of n)
      i === "*" ? Array.isArray(s) && s.forEach((a, c) => o.push({ pointer: `${r}/${c}`, value: a })) : on(s) && Object.hasOwn(s, i) && o.push({ pointer: `${r}/${dm(i)}`, value: s[i] });
    n = o;
  }
  return n;
}
function pn(e, t) {
  if (t === "") return e;
  if (!t.startsWith("/")) return;
  let n = e;
  for (const i of t.slice(1).split("/")) {
    const o = i.replace(/~1/g, "/").replace(/~0/g, "~");
    if (Array.isArray(n) && /^(0|[1-9][0-9]*)$/.test(o)) n = n[Number(o)];
    else if (on(n) && Object.hasOwn(n, o)) n = n[o];
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
const fn = (e) => ce("not_established", [e], [], "not_run");
function um(e, t) {
  const n = Date.parse(t), i = typeof e.validFrom == "string" ? Date.parse(e.validFrom) : NaN, o = typeof e.validUntil == "string" ? Date.parse(e.validUntil) : NaN;
  if (!Number.isFinite(n) || !Number.isFinite(i) || !Number.isFinite(o))
    return ce("not_established", ["Validity period or evaluation time is missing or invalid."]);
  const r = ["/validFrom", "/validUntil"];
  return n < i ? ce("contradicted", [`Not yet valid at ${t}.`], r) : n > o ? ce("contradicted", [`Expired before ${t}.`], r) : ce("established", [`Valid at ${t}.`], r);
}
function pm(e, t) {
  return (Array.isArray(e.relatedResource) ? e.relatedResource : []).filter(on).map((i) => {
    const o = String(i.id);
    try {
      const r = or(t.resolve(o).bytes);
      return r === i.digestSRI ? { id: o, state: "established", reason: "Digest matches the exact referenced bytes." } : { id: o, state: "contradicted", reason: `Digest mismatch: referenced bytes hash to ${r}.` };
    } catch (r) {
      const s = r instanceof Ee ? r.code : "UNAVAILABLE";
      return { id: o, state: "not_established", reason: `Referenced resource unavailable: ${s}.` };
    }
  });
}
async function Gi(e, t, n) {
  const i = [], o = n.staticResolver ?? t, r = n.binding ?? om, s = fn("Not evaluated because protection is not established."), a = (p = {}) => {
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
      ...p
    });
  }, c = (p, b, S, A = {}) => (i.push({ check: p, state: b, reason: S }), a(A));
  let l;
  try {
    l = t.resolve(e).bytes;
  } catch (p) {
    const b = p instanceof Ee ? p.code : "UNAVAILABLE";
    return c("resolve", "not_established", `Artifact is not available: ${b}.`);
  }
  const u = or(l);
  i.push({ check: "resolve", state: "established", reason: `Resolved ${l.byteLength} bytes.` });
  let y;
  try {
    y = JSON.parse(new TextDecoder("utf-8", { fatal: !0 }).decode(l));
  } catch {
    return c("parse", "contradicted", "Artifact bytes are not valid UTF-8 JSON.", { digestSRI: u });
  }
  if (!on(y)) return c("parse", "contradicted", "Artifact is not a JSON object.", { digestSRI: u });
  i.push({ check: "parse", state: "established", reason: "Strict UTF-8 JSON object." });
  const f = y["@context"], h = r.contexts(Array.isArray(y.type) ? y.type[1] : void 0);
  if (!Array.isArray(f) || f.length !== h.length || h.some((p, b) => f[b] !== p))
    return c(
      "carrier",
      "not_established",
      "Only the exact supported context combination for this type is accepted.",
      { digestSRI: u }
    );
  i.push({ check: "carrier", state: "established", reason: "Exact supported context combination." });
  const x = Array.isArray(y.type) ? y.type : [], w = x.length === 2 && x[0] === "VerifiableCredential" ? String(x[1]) : void 0, v = w === void 0 ? void 0 : r.schemas[w];
  if (v === void 0)
    return c("type", "not_established", `Credential type is not a recognized ${r.name} artifact type.`, { digestSRI: u });
  if (Array.isArray(y.credentialSchema))
    return c(
      "type",
      "not_established",
      "Multiple credentialSchema declarations have no accepted composition in this binding.",
      { digestSRI: u, artifactType: w }
    );
  if ((on(y.credentialSchema) ? y.credentialSchema.id : void 0) !== v)
    return c("type", "contradicted", `${w} must declare schema ${v}.`, { digestSRI: u, artifactType: w });
  i.push({ check: "type", state: "established", reason: `${w} with its pinned schema.` });
  try {
    const p = new im({ allErrors: !0, strict: !0 });
    rm(p);
    const b = JSON.parse(new TextDecoder().decode(o.resolve(v).bytes)), S = p.compile(b);
    if (!S(y)) {
      const A = (S.errors ?? []).map((P) => `${P.instancePath || "/"} ${P.message ?? ""}`).join("; ");
      return c("schema", "contradicted", `Schema validation failed: ${A}`, { digestSRI: u, artifactType: w });
    }
  } catch (p) {
    const b = p instanceof Ee ? p.code : "INVALID_SCHEMA";
    return c("schema", "not_established", `Pinned schema unavailable: ${b}.`, { digestSRI: u, artifactType: w });
  }
  i.push({ check: "schema", state: "established", reason: "Valid against the pinned schema." });
  const g = y.proof;
  if (Array.isArray(g))
    return c("proof", "not_established", "Proof sets and chains are unsupported in the initial slice.", { digestSRI: u, artifactType: w });
  if (!on(g))
    return c("proof", "not_established", "The artifact carries no proof.", { digestSRI: u, artifactType: w });
  i.push({ check: "proof", state: "established", reason: "One eddsa-rdfc-2022 assertionMethod proof." });
  const m = Ru(y.issuer, g.verificationMethod, o);
  if (m.state !== "established" || m.publicKey === void 0)
    return c(
      "key",
      m.state === "established" ? "not_established" : m.state,
      `${m.code}: ${m.reason}`,
      { digestSRI: u, artifactType: w, keyAuthorization: m }
    );
  i.push({ check: "key", state: "established", reason: m.reason });
  try {
    const p = kd(o);
    if (!await nm(y, m.publicKey, {
      documentLoader: p,
      safe: !0
    }))
      return c(
        "signature",
        "contradicted",
        "Signature does not verify over the safe canonical form.",
        { digestSRI: u, artifactType: w, keyAuthorization: m }
      );
  } catch (p) {
    const b = p instanceof Error ? p.message.split(`
`)[0] : String(p);
    return c(
      "signature",
      "contradicted",
      `Safe JSON-LD processing rejected the artifact: ${b}`,
      { digestSRI: u, artifactType: w, keyAuthorization: m }
    );
  }
  i.push({ check: "signature", state: "established", reason: "Ed25519 signature verifies (safe mode, offline catalog)." });
  const d = [];
  for (const p of n.manifest.factMappings) {
    const b = String(p.fact);
    for (const { pointer: S, value: A } of lm(y, String(p.nativePath)))
      d.push(Object.freeze({ fact: b, pointer: S, value: structuredClone(A) }));
  }
  return a({
    digestSRI: u,
    artifactType: w,
    keyAuthorization: m,
    validity: um(y, n.evaluationTime),
    relatedResources: Object.freeze(pm(y, t).map((p) => Object.freeze(p))),
    facts: Object.freeze(d)
  });
}
var we = Uint8Array, Le = Uint16Array, Sa = Int32Array, vr = new we([
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
]), br = new we([
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
]), Gs = new we([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), yl = function(e, t) {
  for (var n = new Le(31), i = 0; i < 31; ++i)
    n[i] = t += 1 << e[i - 1];
  for (var o = new Sa(n[30]), i = 1; i < 30; ++i)
    for (var r = n[i]; r < n[i + 1]; ++r)
      o[r] = r - n[i] << 5 | i;
  return { b: n, r: o };
}, gl = yl(vr, 2), vl = gl.b, Bs = gl.r;
vl[28] = 258, Bs[258] = 28;
var bl = yl(br, 0), fm = bl.b, gd = bl.r, Zs = new Le(32768);
for (var de = 0; de < 32768; ++de) {
  var Tt = (de & 43690) >> 1 | (de & 21845) << 1;
  Tt = (Tt & 52428) >> 2 | (Tt & 13107) << 2, Tt = (Tt & 61680) >> 4 | (Tt & 3855) << 4, Zs[de] = ((Tt & 65280) >> 8 | (Tt & 255) << 8) >> 1;
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
        for (var l = o << 4 | e[o], u = t - e[o], y = s[e[o] - 1]++ << u, f = y | (1 << u) - 1; y <= f; ++y)
          a[Zs[y] >> c] = l;
  } else
    for (a = new Le(i), o = 0; o < i; ++o)
      e[o] && (a[o] = Zs[s[e[o] - 1]++] >> 15 - e[o]);
  return a;
}), Lt = new we(288);
for (var de = 0; de < 144; ++de)
  Lt[de] = 8;
for (var de = 144; de < 256; ++de)
  Lt[de] = 9;
for (var de = 256; de < 280; ++de)
  Lt[de] = 7;
for (var de = 280; de < 288; ++de)
  Lt[de] = 8;
var Cn = new we(32);
for (var de = 0; de < 32; ++de)
  Cn[de] = 5;
var hm = /* @__PURE__ */ ct(Lt, 9, 0), mm = /* @__PURE__ */ ct(Lt, 9, 1), ym = /* @__PURE__ */ ct(Cn, 5, 0), gm = /* @__PURE__ */ ct(Cn, 5, 1), Ts = function(e) {
  for (var t = e[0], n = 1; n < e.length; ++n)
    e[n] > t && (t = e[n]);
  return t;
}, Qe = function(e, t, n) {
  var i = t / 8 | 0;
  return (e[i] | e[i + 1] << 8) >> (t & 7) & n;
}, Cs = function(e, t) {
  var n = t / 8 | 0;
  return (e[n] | e[n + 1] << 8 | e[n + 2] << 16) >> (t & 7);
}, Ia = function(e) {
  return (e + 7) / 8 | 0;
}, wl = function(e, t, n) {
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
], We = function(e, t, n) {
  var i = new Error(t || vm[e]);
  if (i.code = e, Error.captureStackTrace && Error.captureStackTrace(i, We), !n)
    throw i;
  return i;
}, bm = function(e, t, n, i) {
  var o = e.length, r = 0;
  if (!o || t.f && !t.l)
    return n || new we(0);
  var s = !n, a = s || t.i != 2, c = t.i;
  s && (n = new we(o * 3));
  var l = function(V) {
    var G = n.length;
    if (V > G) {
      var Z = new we(Math.max(G * 2, V));
      Z.set(n), n = Z;
    }
  }, u = t.f || 0, y = t.p || 0, f = t.b || 0, h = t.l, x = t.d, w = t.m, v = t.n, I = o * 8;
  do {
    if (!h) {
      u = Qe(e, y, 1);
      var g = Qe(e, y + 1, 3);
      if (y += 3, g)
        if (g == 1)
          h = mm, x = gm, w = 9, v = 5;
        else if (g == 2) {
          var b = Qe(e, y, 31) + 257, S = Qe(e, y + 10, 15) + 4, A = b + Qe(e, y + 5, 31) + 1;
          y += 14;
          for (var P = new we(A), R = new we(19), E = 0; E < S; ++E)
            R[Gs[E]] = Qe(e, y + E * 3, 7);
          y += S * 3;
          for (var k = Ts(R), M = (1 << k) - 1, j = ct(R, k, 1), E = 0; E < A; ) {
            var N = j[Qe(e, y, M)];
            y += N & 15;
            var m = N >> 4;
            if (m < 16)
              P[E++] = m;
            else {
              var _ = 0, F = 0;
              for (m == 16 ? (F = 3 + Qe(e, y, 3), y += 2, _ = P[E - 1]) : m == 17 ? (F = 3 + Qe(e, y, 7), y += 3) : m == 18 && (F = 11 + Qe(e, y, 127), y += 7); F--; )
                P[E++] = _;
            }
          }
          var L = P.subarray(0, b), B = P.subarray(b);
          w = Ts(L), v = Ts(B), h = ct(L, w, 1), x = ct(B, v, 1);
        } else
          We(1);
      else {
        var m = Ia(y) + 4, d = e[m - 4] | e[m - 3] << 8, p = m + d;
        if (p > o) {
          c && We(0);
          break;
        }
        a && l(f + d), n.set(e.subarray(m, p), f), t.b = f += d, t.p = y = p * 8, t.f = u;
        continue;
      }
      if (y > I) {
        c && We(0);
        break;
      }
    }
    a && l(f + 131072);
    for (var T = (1 << w) - 1, O = (1 << v) - 1, U = y; ; U = y) {
      var _ = h[Cs(e, y) & T], D = _ >> 4;
      if (y += _ & 15, y > I) {
        c && We(0);
        break;
      }
      if (_ || We(2), D < 256)
        n[f++] = D;
      else if (D == 256) {
        U = y, h = null;
        break;
      } else {
        var $ = D - 254;
        if (D > 264) {
          var E = D - 257, q = vr[E];
          $ = Qe(e, y, (1 << q) - 1) + vl[E], y += q;
        }
        var C = x[Cs(e, y) & O], z = C >> 4;
        C || We(3), y += C & 15;
        var B = fm[z];
        if (z > 3) {
          var q = br[z];
          B += Cs(e, y) & (1 << q) - 1, y += q;
        }
        if (y > I) {
          c && We(0);
          break;
        }
        a && l(f + 131072);
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
    t.l = h, t.p = U, t.b = f, t.f = u, h && (u = 1, t.m = w, t.d = x, t.n = v);
  } while (!u);
  return f != n.length && s ? wl(n, 0, f) : n.subarray(0, f);
}, wt = function(e, t, n) {
  n <<= t & 7;
  var i = t / 8 | 0;
  e[i] |= n, e[i + 1] |= n >> 8;
}, bn = function(e, t, n) {
  n <<= t & 7;
  var i = t / 8 | 0;
  e[i] |= n, e[i + 1] |= n >> 8, e[i + 2] |= n >> 16;
}, Es = function(e, t) {
  for (var n = [], i = 0; i < e.length; ++i)
    e[i] && n.push({ s: i, f: e[i] });
  var o = n.length, r = n.slice();
  if (!o)
    return { t: Sl, l: 0 };
  if (o == 1) {
    var s = new we(n[0].s + 1);
    return s[n[0].s] = 1, { t: s, l: 1 };
  }
  n.sort(function(p, b) {
    return p.f - b.f;
  }), n.push({ s: -1, f: 25001 });
  var a = n[0], c = n[1], l = 0, u = 1, y = 2;
  for (n[0] = { s: -1, f: a.f + c.f, l: a, r: c }; u != o - 1; )
    a = n[n[l].f < n[y].f ? l++ : y++], c = n[l != u && n[l].f < n[y].f ? l++ : y++], n[u++] = { s: -1, f: a.f + c.f, l: a, r: c };
  for (var f = r[0].s, i = 1; i < o; ++i)
    r[i].s > f && (f = r[i].s);
  var h = new Le(f + 1), x = Hs(n[u - 1], h, 0);
  if (x > t) {
    var i = 0, w = 0, v = x - t, I = 1 << v;
    for (r.sort(function(b, S) {
      return h[S.s] - h[b.s] || b.f - S.f;
    }); i < o; ++i) {
      var g = r[i].s;
      if (h[g] > t)
        w += I - (1 << x - h[g]), h[g] = t;
      else
        break;
    }
    for (w >>= v; w > 0; ) {
      var m = r[i].s;
      h[m] < t ? w -= 1 << t - h[m]++ - 1 : ++i;
    }
    for (; i >= 0 && w; --i) {
      var d = r[i].s;
      h[d] == t && (--h[d], ++w);
    }
    x = t;
  }
  return { t: new we(h), l: x };
}, Hs = function(e, t, n) {
  return e.s == -1 ? Math.max(Hs(e.l, t, n + 1), Hs(e.r, t, n + 1)) : t[e.s] = n;
}, vd = function(e) {
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
}, wn = function(e, t) {
  for (var n = 0, i = 0; i < t.length; ++i)
    n += e[i] * t[i];
  return n;
}, xl = function(e, t, n) {
  var i = n.length, o = Ia(t + 2);
  e[o] = i & 255, e[o + 1] = i >> 8, e[o + 2] = e[o] ^ 255, e[o + 3] = e[o + 1] ^ 255;
  for (var r = 0; r < i; ++r)
    e[o + r + 4] = n[r];
  return (o + 4 + i) * 8;
}, bd = function(e, t, n, i, o, r, s, a, c, l, u) {
  wt(t, u++, n), ++o[256];
  for (var y = Es(o, 15), f = y.t, h = y.l, x = Es(r, 15), w = x.t, v = x.l, I = vd(f), g = I.c, m = I.n, d = vd(w), p = d.c, b = d.n, S = new Le(19), A = 0; A < g.length; ++A)
    ++S[g[A] & 31];
  for (var A = 0; A < p.length; ++A)
    ++S[p[A] & 31];
  for (var P = Es(S, 7), R = P.t, E = P.l, k = 19; k > 4 && !R[Gs[k - 1]]; --k)
    ;
  var M = l + 5 << 3, j = wn(o, Lt) + wn(r, Cn) + s, N = wn(o, f) + wn(r, w) + s + 14 + 3 * k + wn(S, R) + 2 * S[16] + 3 * S[17] + 7 * S[18];
  if (c >= 0 && M <= j && M <= N)
    return xl(t, u, e.subarray(c, c + l));
  var _, F, L, B;
  if (wt(t, u, 1 + (N < j)), u += 2, N < j) {
    _ = ct(f, h, 0), F = f, L = ct(w, v, 0), B = w;
    var T = ct(R, E, 0);
    wt(t, u, m - 257), wt(t, u + 5, b - 1), wt(t, u + 10, k - 4), u += 14;
    for (var A = 0; A < k; ++A)
      wt(t, u + 3 * A, R[Gs[A]]);
    u += 3 * k;
    for (var O = [g, p], U = 0; U < 2; ++U)
      for (var D = O[U], A = 0; A < D.length; ++A) {
        var $ = D[A] & 31;
        wt(t, u, T[$]), u += R[$], $ > 15 && (wt(t, u, D[A] >> 5 & 127), u += D[A] >> 12);
      }
  } else
    _ = hm, F = Lt, L = ym, B = Cn;
  for (var A = 0; A < a; ++A) {
    var q = i[A];
    if (q > 255) {
      var $ = q >> 18 & 31;
      bn(t, u, _[$ + 257]), u += F[$ + 257], $ > 7 && (wt(t, u, q >> 23 & 31), u += vr[$]);
      var C = q & 31;
      bn(t, u, L[C]), u += B[C], C > 3 && (bn(t, u, q >> 5 & 8191), u += br[C]);
    } else
      bn(t, u, _[q]), u += F[q];
  }
  return bn(t, u, _[256]), u + F[256];
}, wm = /* @__PURE__ */ new Sa([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]), Sl = /* @__PURE__ */ new we(0), xm = function(e, t, n, i, o, r) {
  var s = r.z || e.length, a = new we(i + s + 5 * (1 + Math.ceil(s / 7e3)) + o), c = a.subarray(i, a.length - o), l = r.l, u = (r.r || 0) & 7;
  if (t) {
    u && (c[0] = r.r >> 3);
    for (var y = wm[t - 1], f = y >> 13, h = y & 8191, x = (1 << n) - 1, w = r.p || new Le(32768), v = r.h || new Le(x + 1), I = Math.ceil(n / 3), g = 2 * I, m = function(K) {
      return (e[K] ^ e[K + 1] << I ^ e[K + 2] << g) & x;
    }, d = new Sa(25e3), p = new Le(288), b = new Le(32), S = 0, A = 0, P = r.i || 0, R = 0, E = r.w || 0, k = 0; P + 2 < s; ++P) {
      var M = m(P), j = P & 32767, N = v[M];
      if (w[j] = N, v[M] = j, E <= P) {
        var _ = s - P;
        if ((S > 7e3 || R > 24576) && (_ > 423 || !l)) {
          u = bd(e, c, 0, d, p, b, A, R, k, P - k, u), R = S = A = 0, k = P;
          for (var F = 0; F < 286; ++F)
            p[F] = 0;
          for (var F = 0; F < 30; ++F)
            b[F] = 0;
        }
        var L = 2, B = 0, T = h, O = j - N & 32767;
        if (_ > 2 && M == m(P - O))
          for (var U = Math.min(f, _) - 1, D = Math.min(32767, P), $ = Math.min(258, _); O <= D && --T && j != N; ) {
            if (e[P + L] == e[P + L - O]) {
              for (var q = 0; q < $ && e[P + q] == e[P + q - O]; ++q)
                ;
              if (q > L) {
                if (L = q, B = O, q > U)
                  break;
                for (var C = Math.min(O, q - 2), z = 0, F = 0; F < C; ++F) {
                  var H = P - O + F & 32767, Q = w[H], J = H - Q & 32767;
                  J > z && (z = J, N = H);
                }
              }
            }
            j = N, N = w[j], O += j - N & 32767;
          }
        if (B) {
          d[R++] = 268435456 | Bs[L] << 18 | gd[B];
          var V = Bs[L] & 31, G = gd[B] & 31;
          A += vr[V] + br[G], ++p[257 + V], ++b[G], E = P + L, ++S;
        } else
          d[R++] = e[P], ++p[e[P]];
      }
    }
    for (P = Math.max(P, E); P < s; ++P)
      d[R++] = e[P], ++p[e[P]];
    u = bd(e, c, l, d, p, b, A, R, k, P - k, u), l || (r.r = u & 7 | c[u / 8 | 0] << 3, u -= 7, r.h = v, r.p = w, r.i = P, r.w = E);
  } else {
    for (var P = r.w || 0; P < s + l; P += 65535) {
      var Z = P + 65535;
      Z >= s && (c[u / 8 | 0] = l, Z = s), u = xl(c, u + 1, e.subarray(P, Z));
    }
    r.i = s;
  }
  return wl(a, 0, i + Ia(u) + o);
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
}, Js = function(e, t, n) {
  for (; n; ++t)
    e[t] = n, n >>>= 8;
}, qm = function(e, t) {
  var n = t.filename;
  if (e[0] = 31, e[1] = 139, e[2] = 8, e[8] = t.level < 2 ? 4 : t.level == 9 ? 2 : 0, e[9] = 3, t.mtime != 0 && Js(e, 4, Math.floor(new Date(t.mtime || Date.now()) / 1e3)), n) {
    e[3] = 8;
    for (var i = 0; i <= n.length; ++i)
      e[i + 10] = n.charCodeAt(i);
  }
}, Rm = function(e) {
  (e[0] != 31 || e[1] != 139 || e[2] != 8) && We(6, "invalid gzip data");
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
function Pm(e, t) {
  t || (t = {});
  var n = Im(), i = e.length;
  n.p(e);
  var o = Am(e, t, $m(t), 8), r = o.length;
  return qm(o, t), Js(o, r - 8, n.d()), Js(o, r - 4, i), o;
}
function _m(e, t) {
  var n = Rm(e);
  return n + 8 > e.length && We(6, "invalid gzip data"), bm(e.subarray(n, -8), { i: 2 }, new we(jm(e)), t);
}
var Tm = typeof TextDecoder < "u" && /* @__PURE__ */ new TextDecoder(), Cm = 0;
try {
  Tm.decode(Sl, { stream: !0 }), Cm = 1;
} catch {
}
function wd(e) {
  return Object.assign(new RangeError(`Cannot create a buffer larger than maxOutputLength ${e}.`), { code: "ERR_BUFFER_TOO_LARGE" });
}
function Em(e, t = {}) {
  const n = t.maxOutputLength ?? Number.MAX_SAFE_INTEGER;
  if (e.length >= 18) {
    const o = e.length - 4;
    if ((e[o] | e[o + 1] << 8 | e[o + 2] << 16 | e[o + 3] << 24) >>> 0 > n) throw wd(n);
  }
  const i = _m(e);
  if (i.length > n) throw wd(n);
  return i;
}
const Ks = 131072, km = 2 * 1024 * 1024;
class Bi extends Error {
  constructor(t, n) {
    super(n), this.code = t, this.name = "StatusListError";
  }
}
function Mm(e, t = km) {
  if (typeof e != "string" || !/^u[A-Za-z0-9_-]+$/.test(e))
    throw new Bi("MALFORMED", 'encodedList must be multibase base64url (prefix "u").');
  let n;
  try {
    n = Em(Om(e.slice(1)), { maxOutputLength: t });
  } catch (i) {
    throw i.code === "ERR_BUFFER_TOO_LARGE" || /maxOutputLength|buffer/i.test(String(i)) ? new Bi("TOO_LARGE", `Decompressed status list exceeds ${t} bytes.`) : new Bi("MALFORMED", "encodedList is not valid GZIP data.");
  }
  if (n.byteLength * 8 < Ks)
    throw new Bi("TOO_SHORT", `Status list has fewer than ${Ks} bits.`);
  return new Uint8Array(n);
}
function Om(e) {
  const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", n = new Uint8Array(Math.floor(e.length * 6 / 8));
  let i = 0, o = 0, r = 0;
  for (const s of e)
    i = i << 6 | t.indexOf(s), o += 6, o >= 8 && (o -= 8, n[r++] = i >> o & 255);
  return n;
}
function Lm(e, t) {
  const n = e[Math.floor(t / 8)];
  if (n === void 0) throw new RangeError(`Status index ${t} is outside the list.`);
  return (n >> 7 - t % 8 & 1) === 1;
}
function Qs(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function Ws(e, t) {
  const n = e.credentialStatus;
  if (n === void 0) return {};
  const i = Array.isArray(n) ? n : [n];
  if (i.length === 0 || !i.every(Qs)) return { reason: "Unsupported credentialStatus form." };
  const o = i.filter((r) => t.includes(String(r.statusPurpose)));
  return o.length > 1 ? { reason: `Several status entries for ${t.join("/")}.` } : o.length === 0 ? { reason: `No status entry has an accepted purpose (${t.join(", ")}); found ${i.map((r) => String(r.statusPurpose)).join(", ")}.` } : { entry: o[0] };
}
function Nm(e, t, n, i, o, r = o) {
  const s = Ws(e, i.purposes), a = s.entry;
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
  const u = (g) => Qs(g) ? g.id : g;
  if (typeof u(t.issuer) != "string" || u(t.issuer) !== u(e.issuer))
    return { state: "not_established", reason: `Status list is signed by ${String(u(t.issuer))}, who may not state status for credentials of ${String(u(e.issuer))}.`, listUri: c, sources: l };
  const y = t.credentialSubject;
  if (!Qs(y) || y.type !== "BitstringStatusList" || y.statusPurpose !== a.statusPurpose)
    return { state: "not_established", reason: "Status list purpose does not match the entry.", listUri: c, sources: l };
  const f = Date.parse(String(t.validFrom)), h = Date.parse(String(t.validUntil)), x = Date.parse(r);
  if (!Number.isFinite(Date.parse(o)) || !Number.isFinite(f))
    return { state: "not_established", reason: `Status list is older than the profile's ${i.maxAgeSeconds} s freshness limit.`, listUri: c, sources: l };
  if (!Number.isFinite(x) || x < f)
    return { state: "not_established", reason: `Status list observed at ${String(t.validFrom)} cannot establish status at the earlier activity time ${r}; historical status is unavailable.`, listUri: c, sources: l };
  if (Number.isFinite(h) && x > h)
    return { state: "not_established", reason: `Status list in force until ${String(t.validUntil)} cannot establish status at ${r}.`, listUri: c, sources: l };
  if ((x - f) / 1e3 > i.maxAgeSeconds)
    return { state: "not_established", reason: `Status list is older than the profile's ${i.maxAgeSeconds} s freshness limit.`, listUri: c, sources: l };
  if (!/^(0|[1-9][0-9]*)$/.test(a.statusListIndex))
    return { state: "not_established", reason: "statusListIndex is not a non-negative integer.", listUri: c, sources: l };
  let w;
  try {
    w = Lm(Mm(y.encodedList), Number(a.statusListIndex));
  } catch (g) {
    return { state: "not_established", reason: `Status list cannot be read: ${g.message}`, listUri: c, sources: l };
  }
  const [v, I] = a.statusPurpose === "suspension" ? ["Suspended", "Not suspended"] : ["Revoked", "Not revoked"];
  return w ? { state: "contradicted", reason: `${v}: bit ${a.statusListIndex} of ${c} is set.`, listUri: c, sources: l } : { state: "established", reason: `${I}: bit ${a.statusListIndex} of ${c} is clear.`, listUri: c, sources: l };
}
const Dm = Object.freeze({ maxResources: 1e3, maxBytes: 2e7 });
function Aa(e, t, n) {
  if (!(e.binding.id === t.id && e.binding.version === t.version && e.profile.id === n.id && e.profile.version === n.version))
    return `Requested ${e.profile.id}@${e.profile.version} with binding ${e.binding.id}@${e.binding.version} is not the verifier-selected profile ${n.id}@${n.version} for ${t.id}@${t.version}.`;
}
function qa(e, t) {
  const n = `${e.targetId} | plan`;
  return dr({
    requestId: e.requestId,
    targetId: e.targetId,
    binding: e.binding,
    profile: e.profile,
    artifactVerification: [],
    authorization: e.selectedClaims.map((i) => ({
      claimId: i.id,
      routeWitnessIds: [],
      ...fn("Not evaluated: the plan was refused at gate 0.")
    })),
    support: [],
    conformity: e.conformity ? { requested: !0, ...e.conformity, ...fn("Not evaluated: the plan was refused at gate 0.") } : { requested: !1, execution: "not_run" },
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
async function Ra(e, t, n, i, o) {
  const r = Va(t.openSession({
    maxResources: e.resolverLimits.maxResources,
    maxBytes: e.resolverLimits.maxBytes
  })), s = Va(t.openSession(Dm)), a = { manifest: n, evaluationTime: e.evaluationTime, staticResolver: s, ...o ? { binding: o } : {} }, c = (S) => JSON.parse(new TextDecoder().decode(r.resolve(S).bytes)), l = await Gi(e.targetId, r, a), u = [l], y = /* @__PURE__ */ new Map([[e.targetId, 0]]);
  for (const S of e.suppliedEvidence)
    y.has(S) || (y.set(S, 1), u.push(await Gi(S, r, a)));
  for (let S = 0; S < u.length; S++) {
    const A = u[S], P = y.get(A.artifactId);
    if (A.protection.state !== "established" || P + 1 > e.resolverLimits.maxDepth) continue;
    const R = c(A.artifactId), E = [
      ...(Array.isArray(R.termsOfUse) ? R.termsOfUse : []).map((k) => k).map((k) => k?.authorizationCredential?.id ?? k?.recognitionCredential?.id),
      ...(Array.isArray(R.evidence) ? R.evidence : []).map((k) => k?.id)
    ].filter((k) => typeof k == "string");
    for (const k of E)
      y.has(k) || (y.set(k, P + 1), u.push(await Gi(k, r, a)));
  }
  const f = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Map();
  for (const S of u) {
    if (S.protection.state !== "established") {
      x.set(S.artifactId, void 0);
      continue;
    }
    const A = c(S.artifactId).id;
    x.set(S.artifactId, A === S.artifactId ? ce("established", ["Artifact identifies itself by its resolved identity."], ["/id"]) : ce("contradicted", [`Artifact resolved as ${S.artifactId} identifies itself as ${String(A)}.`], ["/id"]));
  }
  const w = Date.parse(e.activityTime) < Date.parse(e.evaluationTime), v = async (S, A, P) => {
    const R = y.get(S) + 1;
    if (R > e.resolverLimits.maxDepth)
      return {
        state: "not_established",
        sources: ["/credentialStatus"],
        reason: `Status list is at depth ${R}, beyond the request's maxDepth ${e.resolverLimits.maxDepth}.`
      };
    const E = Ws(A, P.purposes).entry, k = typeof E?.statusListCredential == "string" ? E.statusListCredential : void 0;
    let M, j = "not_established";
    if (k !== void 0) {
      f.has(k) || f.set(k, await Gi(k, r, a));
      const N = f.get(k);
      N.digestSRI !== void 0 && N.protection.state === "established" ? (M = c(k), j = w ? N.protection.state : xe([N.protection.state, N.validity.state])) : N.digestSRI !== void 0 && (M = {}, j = N.protection.state);
    }
    return Nm(A, M, j, P, e.evaluationTime, e.activityTime);
  }, I = { required: !0, purposes: ["suspension"], maxAgeSeconds: i.credentialStatus.maxAgeSeconds }, g = /* @__PURE__ */ new Map();
  for (const S of u) {
    if (S.protection.state !== "established") {
      h.set(S.artifactId, void 0);
      continue;
    }
    const A = c(S.artifactId);
    h.set(S.artifactId, await v(S.artifactId, A, i.credentialStatus)), Ws(A, ["suspension"]).entry !== void 0 && g.set(S.artifactId, await v(S.artifactId, A, I));
  }
  const m = (S) => [
    S.protection,
    x.get(S.artifactId) ? {
      artifactId: S.artifactId,
      ...x.get(S.artifactId),
      reasons: x.get(S.artifactId).reasons.map((A) => `identity: ${A}`)
    } : { artifactId: S.artifactId, ...fn("identity: Not evaluated because protection is not established.") },
    {
      artifactId: S.artifactId,
      ...S.validity,
      reasons: S.validity.reasons.map((A) => `validity: ${A}`)
    },
    ...h.get(S.artifactId) ? [{ artifactId: S.artifactId, ...ce(
      h.get(S.artifactId).state,
      [`status: ${h.get(S.artifactId).reason}`],
      [...h.get(S.artifactId).sources]
    ) }] : [{
      artifactId: S.artifactId,
      ...fn("status: Not evaluated because protection is not established.")
    }],
    ...S.relatedResources.map((A) => ({
      artifactId: A.id,
      ...ce(A.state, [`integrity (from ${S.artifactId}): ${A.reason}`], ["/relatedResource"])
    }))
  ], d = /* @__PURE__ */ new Map();
  for (const S of u) {
    const A = [
      ["protection", S.protection.state, S.protection.reasons.join(" ")],
      ["identity", x.get(S.artifactId)?.state ?? "not_established", x.get(S.artifactId)?.reasons.join(" ") ?? "not evaluated"],
      ["validity", S.validity.state, S.validity.reasons.join(" ")],
      ["status", h.get(S.artifactId)?.state ?? "not_established", h.get(S.artifactId)?.reason ?? "not evaluated"]
    ], P = xe(A.map((E) => E[1])), R = g.get(S.artifactId);
    d.set(S.artifactId, {
      uri: S.artifactId,
      usable: P,
      reason: A.filter((E) => E[1] !== "established").map((E) => `${E[0]}: ${E[2]}`).join("; ") || "usable",
      ...P === "established" ? { document: c(S.artifactId) } : {},
      ...R ? { suspension: { state: R.state, reason: R.reason } } : {}
    });
  }
  const p = [], b = [];
  u.forEach((S, A) => {
    const P = A === 0 ? "target" : "supplied-evidence", R = gr(S.artifactId, S.digestSRI, P, e);
    for (const M of S.checks)
      p.push({
        gate: cm[M.check],
        nodeUse: R,
        predicate: M.check,
        state: M.state,
        execution: "executed",
        reason: M.reason,
        sources: [S.artifactId]
      });
    for (const M of S.relatedResources)
      p.push({
        gate: 1,
        nodeUse: R,
        predicate: "related-resource-integrity",
        state: M.state,
        execution: "executed",
        reason: `${M.id}: ${M.reason}`,
        sources: ["/relatedResource", M.id]
      });
    const E = x.get(S.artifactId);
    p.push(E ? {
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
    }), p.push({
      gate: 3,
      nodeUse: R,
      predicate: "validity-period",
      state: S.validity.state,
      execution: S.validity.execution,
      reason: S.validity.reasons.join(" ") || "Not evaluated.",
      sources: [...S.validity.sourcePointers]
    });
    const k = h.get(S.artifactId);
    p.push(k ? {
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
  for (const [S, A] of f)
    A.digestSRI !== void 0 && b.push({ uri: S, digestSRI: A.digestSRI, kind: "status", source: "catalog", observedAt: e.evaluationTime });
  return {
    target: l,
    artifacts: u,
    facts: d,
    verificationOf: m,
    artifactVerification: u.flatMap(m),
    trace: p,
    resources: b
  };
}
const rr = "RecognizedEntityCredential", Re = (e) => e !== null && typeof e == "object" && !Array.isArray(e), kt = (e) => typeof e == "string" && e.trim().length > 0, qn = (e) => Array.isArray(e) ? e : Re(e) ? [e] : [], It = (e) => kt(e) ? e : Re(e) && kt(e.id) ? e.id : void 0;
function zm(e) {
  const t = e.bindingRules.recognition;
  if (t === void 0) return;
  if (!Re(t) || !kt(t.recognizerPurpose) || !kt(t.action) || !Re(t.purposes)) return "invalid";
  const n = {};
  for (const [i, o] of Object.entries(t.purposes)) {
    if (!Re(o) || !kt(o.activity) || !kt(o.standardId)) return "invalid";
    n[i] = { activity: o.activity, standardId: o.standardId };
  }
  return { recognizerPurpose: t.recognizerPurpose, action: t.action, purposes: n };
}
const Xs = "RecognitionPolicy";
function Um(e) {
  return qn(e.termsOfUse).filter(Re).filter((t) => t.type === Xs && Re(t.recognitionCredential) && t.recognitionCredential.type === rr).map((t) => t.recognitionCredential.id).filter(kt);
}
const Vm = (e) => Re(e) && Re(e.recognizedIn) && kt(e.recognizedIn.id) ? e.recognizedIn.id : void 0, he = (e, t, n, i) => ({ id: e, state: t, reason: n, sources: i }), xd = (e) => {
  if (!Re(e)) return "no main scope";
  const t = Re(e.standard) ? e.standard : {};
  return `${String(e.activity)} under ${String(t.name ?? t.id)}`;
};
function Fm(e, t, n, i, o, r, s, a) {
  const c = ["/termsOfUse", t], l = (A) => Re(A.mainScope) ? A.mainScope : void 0, u = s(t);
  if (u === void 0) return he(e, "not_established", `Recognition ${t} is unavailable.`, c);
  if (u.usable !== "established" || u.document === void 0)
    return he(
      e,
      u.usable === "contradicted" ? "contradicted" : "not_established",
      `Recognition ${t} is not usable: ${u.reason}`,
      c
    );
  const y = u.document;
  if (!qn(y.type).includes(rr))
    return he(e, "contradicted", `${t} is not a ${rr}.`, c);
  const f = It(y.issuer), h = a.trustAnchors.find((A) => A.id === f);
  if (h === void 0 || !h.purposes.includes(o.recognizerPurpose))
    return he(e, "not_established", `${String(f)}, issuer of ${t}, is not a configured anchor for ${o.recognizerPurpose}.`, c);
  if (u.suspension !== void 0 && u.suspension.state !== "established")
    return he(
      e,
      u.suspension.state,
      u.suspension.state === "contradicted" ? `${String(f)} has suspended its recognition ${t}. ${u.suspension.reason}` : `The suspension status of ${t} is not established: ${u.suspension.reason}`,
      c
    );
  const x = qn(y.credentialSubject).filter(Re), w = x.find((A) => A.id === n);
  if (w === void 0)
    return he(
      e,
      "contradicted",
      `${t} recognizes ${x.map((A) => String(A.id)).join(", ") || "no subject"}, not ${n}, the grant's issuer.`,
      c
    );
  const v = qn(w.recognizedTo).filter(Re);
  if (v.length === 0)
    return he(
      e,
      "not_established",
      `${t} recognizes ${n} without recognized actions; this profile does not accept recognition without stated actions.`,
      c
    );
  const I = `${i.activity} under ${i.standardId}`, g = v.filter((A) => A.action === o.action);
  if (g.length === 0)
    return he(
      e,
      "contradicted",
      `${t} recognizes ${n} to ${v.map((A) => String(A.action)).join(", ")}, not to ${o.action}.`,
      c
    );
  const m = qn(w.registration).filter(Re), d = m.map(l).find((A) => A !== void 0 && A.activity === i.activity && Re(A.standard) && A.standard.id === i.standardId);
  if (d === void 0) {
    const A = m.map((P) => xd(l(P))).join(", ") || "no main scope";
    return he(
      e,
      "contradicted",
      `${t} registers ${n} for ${A}, not for ${I}.`,
      c
    );
  }
  const p = g.filter((A) => A.recognizedBy === void 0 || A.recognizedBy === f);
  if (p.length === 0)
    return he(e, "contradicted", `The matching action in ${t} names another recognizer than its issuer ${String(f)}.`, c);
  const b = Date.parse(String(r));
  return typeof r != "string" || !Number.isFinite(b) ? he(e, "not_established", "No activity time is stated, so recognition at that time is not established.", c) : p.find((A) => {
    const P = Date.parse(String(A.validFrom ?? y.validFrom)), R = Date.parse(String(A.validUntil ?? y.validUntil));
    return Number.isFinite(P) && Number.isFinite(R) && P <= b && b <= R;
  }) === void 0 ? he(e, "not_established", `${String(f)} did not recognize ${n} for ${I} at the activity time ${r}.`, c) : he(
    e,
    "established",
    `${n} is recognized by ${String(f)} (a configured anchor for ${o.recognizerPurpose}) to ${o.action} for ${xd(d)}, in force at ${r}, in ${t}. Recognition grants no authority; it accepts the body for this verifier.`,
    c
  );
}
function wr(e, t, n, i, o, r) {
  const s = It(t.issuer), a = i.trustAnchors.find((w) => w.id === s);
  if (a?.purposes.includes(n))
    return { basis: he(e, "established", `${String(s)} is a configured anchor for ${n}.`, ["/issuer"]) };
  const c = a === void 0 ? `${String(s)} is not a configured trust anchor.` : `${String(s)} is an anchor, but not for ${n}.`, l = zm(i);
  if (l === void 0) return { basis: he(e, "not_established", c, ["/issuer"]) };
  if (l === "invalid")
    return { basis: he(e, "not_established", `${c} The profile's recognition rules are malformed.`, ["/issuer"]) };
  const u = l.purposes[n];
  if (u === void 0 || s === void 0)
    return { basis: he(e, "not_established", `${c} The profile accepts no recognition for ${n}.`, ["/issuer"]) };
  const y = Um(t);
  if (y.length === 0)
    return { basis: he(
      e,
      "not_established",
      `${c} The grant names no ${rr} in a ${Xs} of its termsOfUse.`,
      ["/issuer", "/termsOfUse"]
    ) };
  const f = Vm(t.issuer);
  if (f !== void 0 && !y.includes(f))
    return { basis: he(
      e,
      "contradicted",
      `${c} The issuer's recognizedIn names ${f}, but the grant's ${Xs} names ${y.join(", ")}.`,
      ["/issuer/recognizedIn", "/termsOfUse"]
    ) };
  const h = y.map((w) => ({ uri: w, result: Fm(e, w, s, u, l, r, o, i) })), x = h.find((w) => w.result.state === "established");
  return x ? { basis: x.result, recognition: x.uri } : {
    basis: he(
      e,
      hn(h.map((w) => w.result.state)),
      `${c} ${h.map((w) => w.result.reason).join(" ")}`,
      ["/issuer", "/termsOfUse", ...h.map((w) => w.uri)]
    )
  };
}
const Nn = Object.freeze({ within: (e, t) => typeof e == "string" && e === t });
function Gm(e) {
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
const Bm = /^(0|[1-9][0-9]*)(\.[0-9]+)?$/, ja = Object.freeze({ "kg/kg": 0, "mg/kg": -6 });
function xr(e) {
  if (typeof e != "string" || !Bm.test(e)) return;
  const [t, n = ""] = e.split(".");
  return { n: BigInt(`${t}${n}`), scale: n.length };
}
function En(e, t) {
  const n = xr(e), i = typeof t == "string" ? ja[t] : void 0;
  if (!(n === void 0 || i === void 0))
    return i <= 0 ? { n: n.n, scale: n.scale - i } : { n: n.n * 10n ** BigInt(i), scale: n.scale };
}
function _e(e, t) {
  const n = Math.max(e.scale, t.scale), i = e.n * 10n ** BigInt(n - e.scale), o = t.n * 10n ** BigInt(n - t.scale);
  return i < o ? -1 : i > o ? 1 : 0;
}
function Zm(e, t) {
  const n = Math.max(e.scale, t.scale);
  return { n: e.n * 10n ** BigInt(n - e.scale) + t.n * 10n ** BigInt(n - t.scale), scale: n };
}
function Rn(e) {
  const t = e.n.toString().padStart(e.scale + 1, "0");
  if (e.scale === 0) return t;
  const n = t.slice(-e.scale).replace(/0+$/, "");
  return n.length === 0 ? t.slice(0, -e.scale) : `${t.slice(0, -e.scale)}.${n}`;
}
function Ys(e) {
  const t = e.range;
  if (t === void 0) return "Scope record has no range.";
  const n = En(t.from, t.unit), i = En(t.to, t.unit);
  return n === void 0 || i === void 0 ? `Unsupported or malformed range ${String(t.from)}–${String(t.to)} ${String(t.unit)}.` : _e(n, i) > 0 ? "Scope record range is reversed." : { low: n, high: i };
}
const Zi = (e) => Array.isArray(e) ? e.filter((t) => typeof t == "string") : [], Hm = (e, t) => e.length > 0 && e.every((n) => t.includes(n)), Jm = (e, t, n) => e.length > 0 && e.every((i) => t.some((o) => n.within(i, o)));
function Km(e, t, n = Nn) {
  if (e.length === 0) return { state: "not_established", reason: "The projected scope has no records.", witnesses: [] };
  const i = [];
  for (const o of e) {
    const r = Ys(o);
    if (typeof r == "string")
      return { state: /reversed/.test(r) ? "contradicted" : "not_established", reason: `${String(o.id)}: ${r}`, witnesses: i };
    const s = Zi(o.allowedPropertyIris), a = Zi(o.allowedMethodIris);
    if (s.length === 0 || a.length === 0 || typeof o.matrixIri != "string" || typeof o.formIri != "string" || typeof o.quantityKindIri != "string")
      return { state: "not_established", reason: `${String(o.id)}: a restricted dimension is missing or empty.`, witnesses: i };
    const c = t.find((l) => {
      const u = Ys(l);
      return typeof u != "string" && n.within(o.matrixIri, l.matrixIri) && n.within(o.formIri, l.formIri) && l.quantityKindIri === o.quantityKindIri && Jm(s, Zi(l.allowedPropertyIris), n) && Hm(a, Zi(l.allowedMethodIris)) && _e(r.low, u.low) >= 0 && _e(r.high, u.high) <= 0;
    });
    if (c === void 0)
      return { state: "contradicted", reason: `${String(o.id)} is not contained in any single parent record.`, witnesses: i };
    i.push({ child: String(o.id), parent: String(c.id) });
  }
  return { state: "established", reason: `Each projected record lies within one parent record (${i.map((o) => `${o.child} ⊆ ${o.parent}`).join("; ")}).`, witnesses: i };
}
const jn = "https://vc4qi.example/bindings/rm/1#", $n = Object.freeze({
  issueRmCertificate: `${jn}issueRmCertificate`,
  maintainRmScope: `${jn}maintainRmScope`,
  issueRmStudy: `${jn}issueRmStudy`
}), Pe = (e, t, n = []) => ({ id: e, state: "established", reason: t, sources: n }), Fe = (e, t, n = []) => ({ id: e, state: "contradicted", reason: t, sources: n }), ye = (e, t, n = []) => ({ id: e, state: "not_established", reason: t, sources: n }), Nt = (e) => e !== null && typeof e == "object" && !Array.isArray(e), Ve = (e) => Array.isArray(e) ? e : [], Ce = (e) => Nt(e.credentialSubject) ? e.credentialSubject : {}, ea = (e) => Array.isArray(e.type) ? String(e.type[1]) : void 0, dt = (e, t) => Ve(Ce(e).permittedActivity).includes(t);
function Il(e, t = "IssuedUnderPolicy") {
  return Ve(e.termsOfUse).filter(Nt).filter((n) => n.type === t && Nt(n.authorizationCredential)).map((n) => n.authorizationCredential).filter((n) => typeof n.id == "string").map((n) => ({ id: n.id, type: n.type }));
}
function Ye(e, t, n, i, o, r = "IssuedUnderPolicy") {
  const s = Il(t, r).filter((l) => l.type === n).map((l) => l.id);
  if (s.length === 0)
    return { basis: ye(e, `No recognized authorization policy references a ${n}.`, ["/termsOfUse"]) };
  if (s.length > 1)
    return { basis: ye(e, `Several ${n} references; this binding has no deterministic selection.`, ["/termsOfUse"]) };
  const a = s[0];
  if (o.includes(a))
    return { basis: ye(e, `Circular authorization: ${a} is already on the evaluation path.`, ["/termsOfUse", a]) };
  const c = i(a);
  return c === void 0 ? { basis: ye(e, `Referenced ${n} ${a} is unavailable.`, ["/termsOfUse", a]) } : c.usable !== "established" || c.document === void 0 ? { basis: {
    id: e,
    state: c.usable === "contradicted" ? "contradicted" : "not_established",
    reason: `Referenced ${n} ${a} is not usable: ${c.reason}`,
    sources: ["/termsOfUse", a]
  } } : ea(c.document) !== n ? { basis: Fe(e, `Reference declares ${n}, but ${a} is a ${String(ea(c.document))}.`, ["/termsOfUse", a]) } : { basis: Pe(e, `References ${n} ${a}.`, ["/termsOfUse", a]), node: c };
}
function ft(e, t, n, i) {
  const o = Ce(t).id;
  return typeof o != "string" || typeof n != "string" ? ye(e, `${i}: grantee or exercising actor is missing.`, ["/credentialSubject/id", "/issuer"]) : o === n ? Pe(e, `${i}: grantee ${o} is the exercising actor.`, ["/credentialSubject/id", "/issuer"]) : Fe(e, `${i}: grantee ${o} is not the exercising actor ${n}.`, ["/credentialSubject/id", "/issuer"]);
}
function Dn(e, t, n, i) {
  const o = It(t.issuer), r = i.trustAnchors.find((s) => s.id === o);
  return r === void 0 ? ye(e, `${String(o)} is not a configured trust anchor.`, ["/issuer"]) : r.purposes.includes(n) ? Pe(e, `${String(o)} is a configured anchor for ${n}.`, ["/issuer"]) : ye(e, `${String(o)} is an anchor, but not for ${n}.`, ["/issuer"]);
}
function zt(e, t) {
  const n = "scope-in-force-at-activity", i = Ce(e).activityTime, o = Date.parse(String(i));
  if (typeof i != "string" || !Number.isFinite(o))
    return ye(n, "The certificate states no activity time.", ["/credentialSubject/activityTime"]);
  for (const [r, s] of t) {
    const a = Date.parse(String(s.validFrom)), c = Date.parse(String(s.validUntil));
    if (!Number.isFinite(a) || o < a)
      return ye(n, `${r} is valid only from ${String(s.validFrom)}, after the activity at ${i}; a later scope cannot authorize it.`, ["/credentialSubject/activityTime", "/validFrom"]);
    if (Number.isFinite(c) && o > c)
      return ye(n, `${r} expired at ${String(s.validUntil)}, before the activity at ${i}.`, ["/credentialSubject/activityTime", "/validUntil"]);
  }
  return Pe(n, `${t.map((r) => r[0]).join(" and ")} ${t.length > 1 ? "were" : "was"} in force at the activity time ${i}.`, ["/credentialSubject/activityTime"]);
}
function pe(e, t, n, i) {
  return { id: e, state: xe(t.map((o) => o.state)), execution: "executed", bases: t, chain: n, ...i ? { scope: i } : {} };
}
function Qm(e, t, n, i, o) {
  const r = e.document, s = [], a = [e.uri], c = Ye("authorizing-reference", r, "RmOperationalScope", t, i);
  if (s.push(c.basis), !c.node) return pe("operational-scope", s, a);
  const l = c.node.document;
  a.push(c.node.uri), s.push(ft("principal-binding", l, It(r.issuer), "Operational scope O")), s.push(It(l.issuer) === Ce(l).id ? Pe("self-maintained-scope", "O is issued by its own grantee.", ["/issuer"]) : Fe("self-maintained-scope", "O is not issued by its own grantee.", ["/issuer"])), s.push(dt(l, $n.issueRmCertificate) ? Pe("activity-permission", "O permits issuing RM certificates.", ["/credentialSubject/permittedActivity"]) : Fe("activity-permission", "O does not permit issuing RM certificates.", ["/credentialSubject/permittedActivity"]));
  const u = Ye("maintenance-grant", l, "RmAccreditation", t, [...i, c.node.uri]);
  if (s.push(u.basis), !u.node) return pe("operational-scope", s, a);
  const y = u.node.document;
  a.push(u.node.uri), s.push(ft("accreditation-grantee", y, It(l.issuer), "Accreditation A")), s.push(dt(y, $n.maintainRmScope) && dt(y, $n.issueRmCertificate) ? Pe("projection-permission", "A permits maintaining an operational scope for RM certification.", ["/credentialSubject/permittedActivity"]) : Fe("projection-permission", "A does not permit maintaining an operational scope for RM certification.", ["/credentialSubject/permittedActivity"]));
  const f = Km(Ve(Ce(l).scope).filter(Nt), Ve(Ce(y).scope).filter(Nt), o);
  s.push({ id: "bounded-projection", state: f.state, reason: f.reason, sources: ["/credentialSubject/scope"] });
  const h = wr("trust-anchor", y, "accredit-rm-producers", n, t, Ce(r).activityTime);
  return s.push(h.basis), h.recognition && a.push(h.recognition), s.push(zt(r, [["O", l], ["A", y]])), pe("operational-scope", s, a, c.node.uri);
}
function Wm(e, t, n, i, o) {
  const r = e.document, s = [], a = [e.uri], c = Ye("authorizing-reference", r, "RmAccreditation", t, i);
  if (s.push(c.basis), !c.node) return pe("direct-accreditation", s, a);
  const l = c.node.document;
  a.push(c.node.uri), s.push(ft("principal-binding", l, It(r.issuer), "Accreditation A")), s.push(dt(l, $n.issueRmCertificate) ? Pe("activity-permission", "A permits issuing RM certificates.", ["/credentialSubject/permittedActivity"]) : Fe("activity-permission", "A does not permit issuing RM certificates.", ["/credentialSubject/permittedActivity"]));
  const u = wr("trust-anchor", l, "accredit-rm-producers", n, t, Ce(r).activityTime);
  return s.push(u.basis), u.recognition && a.push(u.recognition), s.push(zt(r, [["A", l]])), pe("direct-accreditation", s, a, c.node.uri);
}
const Xm = Object.freeze({
  "operational-scope": Qm,
  "direct-accreditation": Wm
});
function Ym(e, t, n) {
  const i = "restriction:accreditation-suspension", o = It(e.document.issuer), r = /* @__PURE__ */ new Set([e.uri]), s = [e.document], a = [];
  for (; s.length > 0; )
    for (const u of Il(s.shift())) {
      if (r.has(u.id)) continue;
      r.add(u.id);
      const y = t(u.id);
      if (y?.usable !== "established" || y.document === void 0) continue;
      s.push(y.document);
      const f = y.document;
      ea(f) === "RmAccreditation" && Ce(f).id === o && wr(
        "anchor",
        f,
        "accredit-rm-producers",
        n,
        t,
        Ce(e.document).activityTime
      ).basis.state === "established" && a.push(y);
    }
  if (a.length === 0)
    return ye(i, `No accreditation of ${String(o)} is reached, so the absence of a suspension is not established.`);
  const c = a.map((u) => u.suspension === void 0 ? ye(i, `${u.uri} carries no suspension status.`, [u.uri]) : { id: i, state: u.suspension.state, reason: `${u.uri}: ${u.suspension.reason}`, sources: [u.uri] }), l = xe(c.map((u) => u.state));
  return {
    id: i,
    state: l,
    reason: l === "contradicted" ? `The actor's certification activity is suspended. ${c.filter((u) => u.state === "contradicted").map((u) => u.reason).join(" ")}` : c.map((u) => u.reason).join(" "),
    sources: a.map((u) => u.uri)
  };
}
const ey = Object.freeze({
  "accreditation-suspension": Ym
});
function zn(e, t, n) {
  const i = [
    ...t,
    ...n.map((l) => ({ id: l, state: "not_established", execution: "not_run", bases: [], chain: [] }))
  ], o = e.length === 0 ? "established" : xe(e.map((l) => l.state)), r = i.length === 0 ? "not_established" : hn(i.map((l) => l.state)), s = xe([o, r]), a = i.find((l) => l.state === "established"), c = s === "established" ? `Authorized through route ${a.id}; global restrictions hold.` : o === "contradicted" ? "An applicable global restriction applies to every route." : r === "contradicted" ? "Every permitted route is contradicted." : n.length > 0 ? "The route search stopped at its budget before every route was evaluated." : "No complete route is established.";
  return { state: s, reason: c, restrictions: e, routes: i };
}
function Sr(e, t) {
  const n = e.routes.filter((o) => o.execution === "executed").map((o) => {
    const s = (o.scope === void 0 ? void 0 : t(o)) ?? ye("claim-coverage", "The route did not reach a scope credential.");
    return { ...o, bases: [...o.bases, s], state: xe([o.state, s.state]) };
  }), i = e.routes.filter((o) => o.execution === "not_run").map((o) => o.id);
  return zn(e.restrictions, n, i);
}
function ty(e, t, n, i = Nn) {
  if (e.usable !== "established" || e.document === void 0)
    return { state: "not_established", reason: "The target is not usable, so its authority is not evaluated.", restrictions: [], routes: [] };
  const o = e, r = n.authority.certificateRoutes, s = n.authority.maxRoutes, a = r.slice(0, s).map((l) => {
    const u = Xm[l];
    return u === void 0 ? pe(l, [ye("installed-evaluator", `Route ${l} has no installed evaluator.`)], [o.uri]) : u(o, t, n, [o.uri], i);
  }), c = n.authority.globalRestrictions.map((l) => {
    const u = ey[l];
    return u === void 0 ? ye(`restriction:${l}`, `Global restriction ${l} has no installed evaluator.`) : u(o, t, n);
  });
  return zn(c, a, r.slice(s));
}
function ny(e, t, n, i, o = Nn) {
  const r = e.document, s = [], a = [e.uri], c = Ye("laboratory-authority-reference", r, "RmLabAuthority", t, i);
  if (s.push(c.basis), !c.node) return pe("laboratory-authority", s, a);
  const l = c.node.document;
  a.push(c.node.uri), s.push(ft("laboratory-binding", l, It(r.issuer), "Laboratory authority H")), s.push(dt(l, $n.issueRmStudy) ? Pe("study-permission", "H permits issuing RM studies.", ["/credentialSubject/permittedActivity"]) : Fe("study-permission", "H does not permit issuing RM studies.", ["/credentialSubject/permittedActivity"]));
  const u = Ce(r), y = Ve(Ce(l).scope).filter(Nt).some((h) => o.within(u.matrixIri, h.matrixIri) && Ve(h.allowedPropertyIris).some((x) => o.within(u.propertyIri, x)) && Ve(h.studyTypeIris).includes(u.studyTypeIri));
  s.push(y ? Pe("study-scope", "H covers this matrix, property and study type.", ["/credentialSubject/scope"]) : Fe("study-scope", "H does not cover this matrix, property and study type.", ["/credentialSubject/scope"]));
  const f = wr("laboratory-anchor", l, "accredit-rm-laboratories", n, t, u.activityTime);
  return s.push(f.basis), f.recognition && a.push(f.recognition), pe("laboratory-authority", s, a);
}
function iy(e, t, n, i = Nn) {
  if (e.usable !== "established" || e.document === void 0)
    return { state: "not_established", reason: "The target is not usable, so its support is not evaluated.", bases: [], chain: [] };
  const o = e.document, r = Ve(o.evidence).filter(Nt).filter((g) => g.type === "RmStudyReference").map((g) => String(g.id));
  if (r.length === 0)
    return { state: "not_established", reason: "D cites no required study.", bases: [ye("study-reference", "No RmStudyReference in evidence.", ["/evidence"])], chain: [e.uri] };
  if (r.length > 1)
    return { state: "not_established", reason: "Several study references; this binding has no composition for them.", bases: [ye("study-reference", "Ambiguous study references.", ["/evidence"])], chain: [e.uri] };
  const s = r[0], a = t(s);
  if (a === void 0) {
    const g = ye("study-reference", `Required study ${s} is unavailable.`, ["/evidence", s]);
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
  const c = a.document, l = Ce(c), u = Ce(o), y = Nt(Ve(u.materialPropertiesList)[0]) ? Ve(Ve(u.materialPropertiesList)[0].results)[0] : void 0, f = Ve(u.materials)[0], h = [Pe("study-reference", `Cites study ${s}.`, ["/evidence", s])];
  h.push(l.id === u.id ? Pe("same-batch", `S concerns batch ${String(l.id)}.`, ["/credentialSubject/id"]) : Fe("same-batch", `S concerns ${String(l.id)}, not batch ${String(u.id)}.`, ["/credentialSubject/id"])), h.push(l.propertyIri === y?.propertyIri && l.matrixIri === f?.matrixIri ? Pe("same-property-and-matrix", "S concerns the certified property and matrix.", ["/credentialSubject/propertyIri"]) : Fe("same-property-and-matrix", "S concerns another property or matrix.", ["/credentialSubject/propertyIri"])), h.push(l.studyTypeIri === `${jn}Homogeneity` && l.outcomeIri === `${jn}Homogeneous` ? Pe("study-outcome", "S reports the batch homogeneous.", ["/credentialSubject/outcomeIri"]) : Fe("study-outcome", "S does not report a homogeneous batch.", ["/credentialSubject/outcomeIri"]));
  const x = Date.parse(String(l.activityTime)), w = Date.parse(String(u.activityTime));
  h.push(Number.isFinite(x) && Number.isFinite(w) ? x <= w ? Pe("study-precedes-certification", "The study precedes the certification activity.", ["/credentialSubject/activityTime"]) : Fe("study-precedes-certification", "The study postdates the certification activity.", ["/credentialSubject/activityTime"]) : ye("study-precedes-certification", "An activity time is missing.", ["/credentialSubject/activityTime"]));
  const v = ny(a, t, n, [e.uri, s], i);
  h.push(...v.bases);
  const I = xe(h.map((g) => g.state));
  return {
    state: I,
    reason: I === "established" ? "Required study is applicable and independently authorized." : I === "contradicted" ? "Required study is contradicted." : "Required study is not established.",
    bases: h,
    chain: [e.uri, ...v.chain]
  };
}
const Bt = (e) => e !== null && typeof e == "object" && !Array.isArray(e), Al = (e) => Array.isArray(e) ? e : [], Sd = (e) => Al(e).filter((t) => typeof t == "string"), le = (e) => String(e).split(/[#/]/).pop();
function ry(e, t, n) {
  const i = [t], o = Bt(e.credentialSubject) ? e.credentialSubject : {}, r = Al(o.materials).filter(Bt);
  if (r.length !== 1) return { state: "not_established", reason: "The certificate must name exactly one material.", sources: ["/credentialSubject/materials"] };
  const s = r[0];
  if (!Bt(n)) return { state: "not_established", reason: `No result at ${t}.`, sources: i };
  const a = Bt(n.data) && Bt(n.data.quantity) ? n.data.quantity : void 0;
  if (a === void 0) return { state: "not_established", reason: "The result has no quantity.", sources: i };
  const c = Bt(a.unit) ? a.unit.ucumCode : void 0;
  if (typeof c != "string" || ja[c] === void 0)
    return { state: "not_established", reason: `Unit ${String(c)} has no supported mapping (mg/kg, kg/kg).`, sources: [`${t}/data/quantity/unit`] };
  const l = Bt(a.uncertainty) ? a.uncertainty : void 0, u = xr(l?.coverageFactor);
  if (u === void 0 || _e(u, { n: 2n, scale: 0 }) !== 0)
    return { state: "not_established", reason: `Coverage factor ${String(l?.coverageFactor)} is not the binding's k = 2.`, sources: [`${t}/data/quantity/uncertainty`] };
  const y = En(a.value, c), f = En(l?.expandedUncertainty, c);
  if (y === void 0 || f === void 0)
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
    reason: `Mapped ${le(h.propertyIri)} by ${le(h.methodIri)} in ${le(h.matrixIri)}: ${String(a.value)} ± ${String(l?.expandedUncertainty)} ${c} (k = 2).`,
    sources: i,
    coordinates: { ...h, value: y, uncertainty: f }
  };
}
function sy(e, t, n, i) {
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
function ay(e, t, n, i, o = Nn) {
  if (t.length === 0) return { state: "not_established", reason: "The scope has no records.", sources: ["/credentialSubject/scope"] };
  const r = t.map((c) => {
    const l = String(c.id), u = Ys(c);
    if (typeof u == "string")
      return { id: l, state: /reversed/.test(u) ? "contradicted" : "not_established", reason: `${le(l)}: ${u}` };
    const y = [];
    o.within(e.matrixIri, c.matrixIri) || y.push(`matrix ${le(e.matrixIri)} ≠ ${le(c.matrixIri)}`), o.within(e.formIri, c.formIri) || y.push(`form ${le(e.formIri)} ≠ ${le(c.formIri)}`), c.quantityKindIri !== e.quantityKindIri && y.push(`quantity kind ${le(e.quantityKindIri)} ≠ ${le(c.quantityKindIri)}`), Sd(c.allowedPropertyIris).some((w) => o.within(e.propertyIri, w)) || y.push(`property ${le(e.propertyIri)} is not allowed`), _e(e.value, u.low) < 0 && y.push("value is below the range"), _e(e.value, u.high) > 0 && y.push("value is above the range");
    const f = sy(e.methodIri, Sd(c.allowedMethodIris), n, i);
    if (y.length > 0 || f.state === "contradicted")
      return { id: l, state: "contradicted", reason: `${le(l)}: ${[...y, ...f.state === "contradicted" ? [f.reason] : []].join("; ")}` };
    if (f.state === "not_established") return { id: l, state: "not_established", reason: `${le(l)}: ${f.reason}` };
    const h = Rn(Qi(u.low, "mg/kg")), x = Rn(Qi(u.high, "mg/kg"));
    return {
      id: l,
      state: "established",
      reason: `${le(l)} covers ${le(e.propertyIri)}, ${f.reason}, ${le(e.matrixIri)}/${le(e.formIri)}, ${Rn(Qi(e.value, "mg/kg"))} mg/kg within ${h}–${x} mg/kg`
    };
  }), s = hn(r.map((c) => c.state)), a = r.find((c) => c.state === "established");
  return {
    state: s,
    reason: a ? a.reason : `No single scope record covers the claim (${r.map((c) => c.reason).join(" | ")}).`,
    sources: ["/credentialSubject/scope"],
    ...a ? { record: a.id } : {}
  };
}
function Qi(e, t) {
  const n = ja[t];
  return n >= 0 ? { n: e.n, scale: e.scale + n } : e.scale + n >= 0 ? { n: e.n, scale: e.scale + n } : { n: e.n * 10n ** BigInt(-(e.scale + n)), scale: 0 };
}
function oy(e, t, n) {
  if (e.propertyIri !== t.propertyIri || e.quantityKindIri !== t.quantityKindIri)
    return { state: "not_established", reason: `Requirement ${t.id} does not apply to this claim's property and quantity kind.`, sources: [] };
  const i = En(t.upperLimit.value, t.upperLimit.unit);
  if (i === void 0) return { state: "not_established", reason: `Requirement ${t.id} has an unsupported limit.`, sources: [] };
  const o = t.upperLimit.unit, r = (y) => Rn(Qi(y, o)), s = n.acceptWhen === "value-plus-expanded-uncertainty-at-most-limit", a = s ? Zm(e.value, e.uncertainty) : e.value, c = _e(a, i) <= 0, u = `${s ? `${r(e.value)} + ${r(e.uncertainty)} = ${r(a)}` : r(e.value)} ${c ? "≤" : ">"} ${r(i)} ${o}`;
  return {
    state: c ? "established" : "contradicted",
    reason: `${c ? "Conforms" : "Does not conform"} under ${n.id}: ${u}.`,
    sources: [],
    arithmetic: u
  };
}
const cy = /^\/credentialSubject\/materialPropertiesList\/(0|[1-9][0-9]*)\/results\/(0|[1-9][0-9]*)$/;
async function dy(e, t, n, i) {
  if (n.id !== Fa || i.binding.id !== n.id || i.binding.version !== n.version)
    throw new Error(`Profile ${i.id}@${i.version} is not configured for ${Fa}@${n.version}.`);
  const o = Aa(e, n, i);
  if (o !== void 0) return Object.freeze({ result: qa(e, o), artifacts: Object.freeze([]) });
  const r = await Ra(e, t, n, i), { target: s, artifacts: a, facts: c, verificationOf: l, artifactVerification: u } = r, y = (j) => c.get(j), f = Gm(n.scopeAndMapping), h = ty(c.get(e.targetId), y, i, f), x = iy(c.get(e.targetId), y, i, f), w = h.routes.find((j) => j.state === "established"), v = c.get(e.targetId)?.document, I = (Array.isArray(n.scopeAndMapping.methodRevisions) ? n.scopeAndMapping.methodRevisions : []).filter((j) => typeof j?.method == "string" && typeof j?.revises == "string"), g = (j) => {
    const N = c.get(j)?.document?.credentialSubject;
    return Array.isArray(N?.scope) ? N.scope : [];
  }, m = e.selectedClaims.map((j) => {
    if (!(v !== void 0 && cy.test(j.sourcePointer) && pn(v, j.sourcePointer) !== void 0)) {
      const U = v === void 0 ? "The target is not usable, so its claims are not read." : `Selected claim ${j.sourcePointer} is not a result in the usable target.`;
      return {
        claim: j,
        mapping: void 0,
        coverage: /* @__PURE__ */ new Map(),
        result: { claimId: j.id, routeWitnessIds: [], ...ce("not_established", [U]) }
      };
    }
    const _ = ry(v, j.sourcePointer, pn(v, j.sourcePointer)), F = /* @__PURE__ */ new Map();
    if (_.coordinates === void 0)
      return { claim: j, mapping: _, coverage: F, result: {
        claimId: j.id,
        routeWitnessIds: [],
        ...ce(_.state, [`Gate 4: ${_.reason}`], [j.sourcePointer])
      } };
    const L = _.coordinates, B = Sr(h, (U) => {
      const D = ay(L, g(U.scope), I, i.mapping.methodSuccession, f), $ = [U.scope, ...D.sources];
      return F.set(U.id, { ...D, sources: $ }), { id: "claim-coverage", state: D.state, reason: D.reason, sources: $ };
    }), T = B.routes.find((U) => U.state === "established"), O = T ? F.get(T.id)?.record : void 0;
    return { claim: j, mapping: _, coverage: F, result: {
      claimId: j.id,
      routeWitnessIds: B.state === "established" && T ? [`route:${T.id}`, ...T.chain, `record:${O}`] : [],
      ...ce(B.state, [
        B.reason,
        ...T ? [F.get(T.id).reason] : [...F].map(([U, D]) => `${U}: ${D.reason}`)
      ], [j.sourcePointer])
    } };
  }), d = m.map((j) => j.result), p = [{
    obligationId: "rm-v1:required-study",
    witnessIds: x.state === "established" ? [...x.chain] : [],
    ...ce(x.state, [x.reason], ["/evidence"])
  }], b = (() => {
    if (!e.conformity) return { requested: !1, execution: "not_run" };
    const j = { requested: !0, ...e.conformity }, N = i.conformity.requirements.find((T) => T.id === e.conformity.requirementId), _ = i.conformity.decisionRules.find((T) => T.id === e.conformity.decisionRuleId);
    if (!N || !_)
      return { ...j, ...ce("not_established", [`Requirement ${e.conformity.requirementId} or decision rule ${e.conformity.decisionRuleId} is not configured in the verifier profile.`]) };
    const F = m.filter((T) => T.mapping?.coordinates?.propertyIri === N.propertyIri && T.mapping.coordinates.quantityKindIri === N.quantityKindIri);
    if (F.length !== 1)
      return { ...j, ...ce("not_established", [`Requirement ${N.id} must apply to exactly one selected claim; ${F.length} match.`]) };
    const L = F[0];
    if (L.result.state !== "established")
      return { ...j, ...fn(`Not evaluated: claim ${L.claim.id} is not authorized.`) };
    const B = oy(L.mapping.coordinates, N, _);
    return { ...j, ...ce(B.state, [B.reason], [L.claim.sourcePointer]) };
  })(), S = /* @__PURE__ */ new Set([
    e.targetId,
    ...w?.chain ?? [],
    ...x.state === "established" ? x.chain : []
  ]), A = [
    ...a.filter((j) => S.has(j.artifactId)).flatMap(l).filter((j) => S.has(j.artifactId)).map((j) => j.state),
    ...d.map((j) => j.state),
    ...p.map((j) => j.state),
    ...b.requested ? [b.state] : []
  ], P = ca(A), R = [...r.trace], E = [...r.resources], k = gr(s.artifactId, s.digestSRI, "target", e);
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
    for (const [F, L] of _)
      R.push({
        gate: 5,
        nodeUse: k,
        predicate: `claim-coverage:${j.id}:${F}`,
        state: L.state,
        execution: "executed",
        reason: L.reason,
        sources: [...L.sources]
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
    sources: w ? [...w.chain] : []
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
  for (const j of x.bases)
    R.push({
      gate: 6,
      nodeUse: k,
      predicate: `support:${j.id}`,
      state: j.state,
      execution: "executed",
      reason: j.reason,
      sources: [...j.sources]
    });
  for (const j of p)
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
  const M = dr({
    requestId: e.requestId,
    targetId: e.targetId,
    binding: e.binding,
    profile: e.profile,
    artifactVerification: u,
    authorization: d,
    support: p,
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
const ta = "https://vc4qi.example/bindings/cal/1", ly = "https://vc4qi.example/contexts/cal/1", na = "https://vc4qi.example/bindings/cal/1#", rn = "https://vc4qi.example/schemas/cal/1/", uy = Object.freeze({
  name: "calibration v1",
  schemas: Object.freeze({
    CalAccreditation: `${rn}accreditation.json`,
    CalOperationalScope: `${rn}operational-scope.json`,
    CalLegalMandate: `${rn}legal-mandate.json`,
    CalCertificate: `${rn}certificate.json`,
    CalTestReport: `${rn}test-report.json`,
    BitstringStatusListCredential: `${rn}status-list.json`
  }),
  contexts: (e) => e === "BitstringStatusListCredential" ? [Ht] : [Ht, ly]
}), Te = (e) => e !== null && typeof e == "object" && !Array.isArray(e), Be = (e) => Array.isArray(e) ? e : [], se = (e) => String(e).split(/[#/]/).pop(), py = Object.freeze({ Pa: 0, kPa: 3, MPa: 6 });
function Xe(e, t) {
  const n = xr(e), i = typeof t == "string" ? py[t] : void 0;
  if (!(n === void 0 || i === void 0))
    return n.scale >= i ? { n: n.n, scale: n.scale - i } : { n: n.n * 10n ** BigInt(i - n.scale), scale: 0 };
}
const $e = (e) => Rn({ n: e.n, scale: e.scale + 3 });
function ql(e, t) {
  const n = [t];
  if (!Te(e) || typeof e.id != "string" || typeof e.quantityKindIri != "string")
    return { state: "not_established", reason: "The selected measurement group has no identifier or quantity kind.", sources: n };
  const i = [];
  for (const [r, s] of Be(e.results).entries()) {
    const a = Te(s) ? s : {}, c = xr(a.coverageFactor);
    if (c === void 0 || _e(c, { n: 2n, scale: 0 }) !== 0)
      return { state: "not_established", reason: `Result ${r}: coverage factor ${String(a.coverageFactor)} is not the binding's k = 2.`, sources: n };
    const l = Xe(a.value, a.unit), u = Xe(a.expandedUncertainty, a.unit);
    if (l === void 0 || u === void 0)
      return { state: "not_established", reason: `Result ${r}: unit ${String(a.unit)} or a number has no supported mapping (Pa, kPa, MPa).`, sources: n };
    i.push({ value: l, uncertainty: u });
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
function Rl(e, t, n) {
  const i = ["/credentialSubject/scope"];
  if (t.length === 0) return { state: "not_established", reason: "The scope has no records.", sources: i };
  const o = t.map((a) => {
    const c = String(a.id), l = Te(a.range) ? a.range : {}, u = Xe(l.from, l.unit), y = Xe(l.to, l.unit);
    if (u === void 0 || y === void 0) return { id: c, state: "not_established", reason: `${se(c)}: unsupported or malformed range.` };
    if (_e(u, y) > 0) return { id: c, state: "contradicted", reason: `${se(c)}: range is reversed.` };
    const f = Te(a.cmcFloor) ? a.cmcFloor : void 0, h = f === void 0 ? void 0 : Xe(f.value, f.unit);
    if (f !== void 0 && h === void 0) return { id: c, state: "not_established", reason: `${se(c)}: unsupported CMC floor.` };
    const x = [];
    a.quantityKindIri !== e.quantityKindIri && x.push(`quantity kind ${se(e.quantityKindIri)} ≠ ${se(a.quantityKindIri)}`);
    const w = Be(a.allowedMethodIris).filter((I) => typeof I == "string"), v = e.methodIris.filter((I) => !w.includes(I));
    return v.length > 0 && x.push(`method ${v.map(se).join(", ")} is not allowed`), e.results.forEach((I, g) => {
      (_e(I.value, u) < 0 || _e(I.value, y) > 0) && x.push(`result ${g} ${$e(I.value)} kPa is outside ${$e(u)}–${$e(y)} kPa`), n && h !== void 0 && _e(I.uncertainty, h) < 0 && x.push(`result ${g} U = ${$e(I.uncertainty)} kPa is below the admitted CMC ${$e(h)} kPa`);
    }), x.length > 0 ? { id: c, state: "contradicted", reason: `${se(c)}: ${x.join("; ")}` } : e.methodIris.length === 0 && w.length > 0 ? {
      id: c,
      state: "not_established",
      reason: `${se(c)} restricts methods to [${w.map(se).join(", ")}], but the group names no governed method.`
    } : {
      id: c,
      state: "established",
      reason: `${se(c)} covers ${se(e.id)}: ${se(e.quantityKindIri)}, methods [${e.methodIris.map(se).join(", ")}], ${e.results.length} result(s) within ${$e(u)}–${$e(y)} kPa${n && h !== void 0 ? ` and not below the CMC ${$e(h)} kPa` : ""}`
    };
  }), r = hn(o.map((a) => a.state)), s = o.find((a) => a.state === "established");
  return s ? { state: r, reason: s.reason, sources: i, record: s.id } : { state: r, reason: `No single scope record covers the group (${o.map((a) => a.reason).join(" | ")}).`, sources: i };
}
function fy(e, t, n) {
  const i = ["/credentialSubject/scope"];
  if (e.length === 0) return { state: "not_established", reason: "The operational scope has no records.", sources: i };
  const o = e.map((s) => {
    const a = Te(s.range) ? s.range : {}, c = Xe(a.from, a.unit), l = Xe(a.to, a.unit), u = Te(s.cmcFloor) ? s.cmcFloor : void 0, y = u === void 0 ? void 0 : Xe(u.value, u.unit);
    if (c === void 0 || l === void 0 || u !== void 0 && y === void 0)
      return { state: "not_established", reason: `${se(s.id)}: unsupported or malformed range or CMC floor.` };
    const f = Be(s.allowedMethodIris), h = t.map((w) => {
      const v = Te(w.range) ? w.range : {}, I = Xe(v.from, v.unit), g = Xe(v.to, v.unit), m = Te(w.cmcFloor) ? w.cmcFloor : void 0, d = m === void 0 ? void 0 : Xe(m.value, m.unit);
      if (I === void 0 || g === void 0 || m !== void 0 && d === void 0)
        return { state: "not_established", reason: `${se(w.id)}: unsupported or malformed range or CMC floor.` };
      const p = [];
      s.quantityKindIri !== w.quantityKindIri && p.push(`quantity kind ${se(s.quantityKindIri)} ≠ ${se(w.quantityKindIri)}`);
      const b = Be(w.allowedMethodIris), S = f.filter((A) => !b.includes(A));
      return f.length === 0 && b.length > 0 && p.push("the parent restricts methods, the child does not"), S.length > 0 && p.push(`method ${S.map(se).join(", ")} is not in ${se(w.id)}`), (_e(c, I) < 0 || _e(l, g) > 0) && p.push(`range ${$e(c)}–${$e(l)} kPa is not within ${$e(I)}–${$e(g)} kPa`), n && d !== void 0 && (y === void 0 ? p.push(`it states no CMC floor, but ${se(w.id)} admits only ${$e(d)} kPa`) : _e(y, d) < 0 && p.push(`CMC ${$e(y)} kPa is below the admitted ${$e(d)} kPa`)), p.length > 0 ? { state: "contradicted", reason: `${se(s.id)} widens ${se(w.id)}: ${p.join("; ")}` } : { state: "established", reason: `${se(s.id)} lies within ${se(w.id)}` };
    });
    if (h.length === 0) return { state: "not_established", reason: "The parent grant has no records." };
    const x = hn(h.map((w) => w.state));
    return x === "established" ? h.find((w) => w.state === "established") : { state: x, reason: h.map((w) => w.reason).join(" | ") };
  }), r = Pa(o.map((s) => s.state));
  return { state: r, reason: `${r === "established" ? "Bounded projection holds" : "Bounded projection fails"}: ${o.map((s) => s.reason).join("; ")}.`, sources: i };
}
const Jt = (e) => Te(e.credentialSubject) ? e.credentialSubject : {}, $a = (e, t, n, i, o) => dt(t, `${na}${n}`) ? { id: e, state: "established", reason: `${o} permits ${i}.`, sources: ["/credentialSubject/permittedActivity"] } : { id: e, state: "contradicted", reason: `${o} does not permit ${i}.`, sources: ["/credentialSubject/permittedActivity"] }, hy = Object.freeze({
  CalCertificate: { activity: "issueCalibrationCertificate", what: "issuing calibration certificates", purpose: "accredit-calibration-laboratories" },
  CalTestReport: { activity: "issueTestReport", what: "issuing test reports", purpose: "accredit-testing-laboratories" }
}), sr = (e) => Array.isArray(e.type) ? String(e.type[1]) : void 0;
function my(e, t, n) {
  const i = e.document, o = [], r = [e.uri], s = hy[sr(i) ?? ""];
  if (s === void 0)
    return pe("direct-accreditation", [{
      id: "target-type",
      state: "not_established",
      reason: `No accreditation activity is installed for ${String(sr(i))}.`,
      sources: ["/type"]
    }], r);
  const a = Ye("authorizing-reference", i, "CalAccreditation", t, [e.uri], "IssuedUnderPolicy");
  if (o.push(a.basis), !a.node) return pe("direct-accreditation", o, r);
  const c = a.node.document;
  return r.push(a.node.uri), o.push(ft("principal-binding", c, i.issuer, "Accreditation CA")), o.push($a("activity-permission", c, s.activity, s.what, "CA")), o.push(Dn("trust-anchor", c, s.purpose, n)), o.push(zt(i, [["CA", c]])), pe("direct-accreditation", o, r, a.node.uri);
}
function yy(e, t, n) {
  const i = e.document, o = [], r = [e.uri], s = Ye("authorizing-reference", i, "CalOperationalScope", t, [e.uri], "IssuedUnderPolicy");
  if (o.push(s.basis), !s.node) return pe("operational-scope", o, r);
  const a = s.node.document;
  r.push(s.node.uri), o.push(ft("principal-binding", a, i.issuer, "Operational scope O")), o.push(a.issuer === Jt(a).id ? { id: "self-maintained-scope", state: "established", reason: "O is issued by its own grantee.", sources: ["/issuer"] } : { id: "self-maintained-scope", state: "contradicted", reason: "O is not issued by its own grantee.", sources: ["/issuer"] }), o.push($a("activity-permission", a, "issueCalibrationCertificate", "issuing calibration certificates", "O"));
  const c = Ye("maintenance-grant", a, "CalAccreditation", t, [e.uri, s.node.uri], "IssuedUnderPolicy");
  if (o.push(c.basis), !c.node) return pe("operational-scope", o, r);
  const l = c.node.document;
  r.push(c.node.uri), o.push(ft("accreditation-grantee", l, a.issuer, "Accreditation CA")), o.push(dt(l, `${na}maintainCalibrationScope`) && dt(l, `${na}issueCalibrationCertificate`) ? { id: "projection-permission", state: "established", reason: "CA permits maintaining an operational calibration scope.", sources: ["/credentialSubject/permittedActivity"] } : { id: "projection-permission", state: "contradicted", reason: "CA does not permit maintaining an operational calibration scope.", sources: ["/credentialSubject/permittedActivity"] });
  const u = fy(
    Be(Jt(a).scope).filter(Te),
    Be(Jt(l).scope).filter(Te),
    n.bindingRules.applyCmcFloor === !0
  );
  return o.push({ id: "bounded-projection", state: u.state, reason: u.reason, sources: u.sources }), o.push(Dn("trust-anchor", l, "accredit-calibration-laboratories", n)), o.push(zt(i, [["O", a], ["CA", l]])), pe("operational-scope", o, r, s.node.uri);
}
function gy(e, t, n) {
  const i = e.document, o = [], r = [e.uri], s = Ye("authorizing-reference", i, "CalLegalMandate", t, [e.uri], "IssuedUnderPolicy");
  if (o.push(s.basis), !s.node) return pe("statutory-mandate", o, r);
  const a = s.node.document;
  return r.push(s.node.uri), o.push(ft("principal-binding", a, i.issuer, "Mandate M")), o.push($a("activity-permission", a, "issueCalibrationCertificate", "issuing calibration certificates", "M")), o.push(Dn("trust-anchor", a, "designate-national-metrology-institutes", n)), o.push(zt(i, [["M", a]])), pe("statutory-mandate", o, r, s.node.uri);
}
const jl = Object.freeze({
  "direct-accreditation": my,
  "operational-scope": yy,
  "statutory-mandate": gy
}), Pa = (e) => e.length === 0 ? "not_established" : xe(e);
function vy(e, t, n, i) {
  const o = n.authority.certificateRoutes, r = o.slice(0, n.authority.maxRoutes).map((y) => {
    const f = jl[y];
    return f === void 0 ? pe(y, [{ id: "installed-evaluator", state: "not_established", reason: `Route ${y} has no installed evaluator.`, sources: [] }], [e.uri]) : f(e, t, n);
  }), s = zn([], r, o.slice(n.authority.maxRoutes)), a = Be(Jt(e.document).measurementGroups);
  if (a.length === 0)
    return { state: "not_established", reason: "The certificate has no measurement groups.", chain: [e.uri], bases: [] };
  const c = [];
  let l = [e.uri];
  a.forEach((y, f) => {
    const h = `/credentialSubject/measurementGroups/${f}`, x = ql(y, h);
    if (x.group === void 0) {
      c.push({ id: `group-${f}`, state: x.state, reason: `Group ${f}: ${x.reason}`, sources: [h] });
      return;
    }
    const w = x.group, v = Sr(s, (m) => {
      const d = Be(Jt(t(m.scope)?.document ?? {}).scope).filter(Te), p = Rl(w, d, i);
      return { id: "claim-coverage", state: p.state, reason: p.reason, sources: [m.scope, ...p.sources] };
    }), I = v.routes.find((m) => m.state === "established");
    I && (l = I.chain);
    const g = I ? `through ${I.id}` : v.routes.map((m) => `${m.id} ${m.state}: ${m.bases.filter((d) => d.state !== "established").map((d) => d.reason).join(" ")}`).join(" | ");
    c.push({ id: `group-${f}`, state: v.state, reason: `Group ${f} (${se(w.id)}) is ${v.state} ${g}`.trim(), sources: [h] });
  });
  const u = Pa(c.map((y) => y.state));
  return { state: u, reason: `The certificate's own authority is ${u}.`, chain: l, bases: c };
}
function by(e, t, n, i) {
  if (e.usable !== "established" || e.document === void 0)
    return { state: "not_established", reason: "The target is not usable, so its support is not evaluated.", bases: [], chain: [] };
  const o = e.document, r = (b) => ({ state: b.state, reason: b.reason, bases: [b], chain: [e.uri] }), s = Be(o.evidence).filter(Te).filter((b) => b.type === "CalCalibrationReference").map((b) => String(b.id));
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
  if (sr(l) !== "CalCertificate")
    return r({ id: "calibration-reference", state: "contradicted", reason: `${a} is a ${String(sr(l))}, not a calibration certificate.`, sources: ["/evidence", a] });
  const u = Jt(o), y = Jt(l), f = [{ id: "calibration-reference", state: "established", reason: `Cites calibration ${a}.`, sources: ["/evidence", a] }];
  f.push(typeof u.instrumentIri != "string" ? { id: "same-instrument", state: "not_established", reason: "The report names no instrument.", sources: ["/credentialSubject/instrumentIri"] } : y.id === u.instrumentIri ? { id: "same-instrument", state: "established", reason: `The calibration concerns instrument ${String(u.instrumentIri)}.`, sources: ["/credentialSubject/instrumentIri"] } : { id: "same-instrument", state: "contradicted", reason: `The calibration concerns ${String(y.id)}, not instrument ${String(u.instrumentIri)}.`, sources: ["/credentialSubject/instrumentIri"] });
  const h = Be(u.measurementGroups).filter(Te).map((b) => b.quantityKindIri), x = Be(y.measurementGroups).filter(Te).map((b) => b.quantityKindIri), w = h.filter((b) => !x.includes(b));
  f.push(h.length > 0 && w.length === 0 ? { id: "same-quantity", state: "established", reason: `The calibration covers ${[...new Set(h.map(se))].join(", ")}.`, sources: ["/credentialSubject/measurementGroups"] } : {
    id: "same-quantity",
    state: h.length === 0 ? "not_established" : "contradicted",
    reason: h.length === 0 ? "The report has no measurement groups." : `The calibration does not cover ${w.map(se).join(", ")}.`,
    sources: ["/credentialSubject/measurementGroups"]
  });
  const v = Date.parse(String(u.activityTime)), I = Date.parse(String(y.activityTime)), g = Date.parse(String(l.validFrom)), m = Date.parse(String(l.validUntil));
  !Number.isFinite(v) || !Number.isFinite(I) ? f.push({ id: "calibration-precedes-use", state: "not_established", reason: "An activity time is missing.", sources: ["/credentialSubject/activityTime"] }) : (f.push(I <= v ? { id: "calibration-precedes-use", state: "established", reason: `Calibrated at ${String(y.activityTime)}, before the test at ${String(u.activityTime)}.`, sources: ["/credentialSubject/activityTime"] } : { id: "calibration-precedes-use", state: "contradicted", reason: `Calibrated at ${String(y.activityTime)}, after the test at ${String(u.activityTime)}.`, sources: ["/credentialSubject/activityTime"] }), f.push(Number.isFinite(g) && Number.isFinite(m) && g <= v && v <= m ? { id: "calibration-valid-at-use", state: "established", reason: "The calibration certificate was valid at the test.", sources: ["/validFrom", "/validUntil"] } : { id: "calibration-valid-at-use", state: "contradicted", reason: `The calibration certificate (valid ${String(l.validFrom)} to ${String(l.validUntil)}) was not valid at the test at ${String(u.activityTime)}.`, sources: ["/validFrom", "/validUntil"] }));
  const d = vy(c, t, n, i);
  f.push({ id: "calibration-authority", state: d.state, reason: d.reason, sources: [a] }, ...d.bases.map((b) => ({ ...b, id: `calibration-authority:${b.id}` })));
  const p = Pa(f.map((b) => b.state));
  return {
    state: p,
    reason: p === "established" ? "The instrument calibration is applicable and independently authorized." : p === "contradicted" ? "The instrument calibration is contradicted." : "The instrument calibration is not established.",
    bases: f,
    chain: [e.uri, ...d.chain]
  };
}
const wy = /^\/credentialSubject\/measurementGroups\/(0|[1-9][0-9]*)$/;
function xy(e) {
  const t = e.bindingRules.applyCmcFloor;
  if (typeof t != "boolean")
    throw new Error(`Profile ${e.id}@${e.version} must state bindingRules.applyCmcFloor for ${ta}.`);
  return t;
}
async function Sy(e, t, n, i) {
  if (n.id !== ta || i.binding.id !== n.id || i.binding.version !== n.version)
    throw new Error(`Profile ${i.id}@${i.version} is not configured for ${ta}@${n.version}.`);
  const o = xy(i), r = Aa(e, n, i);
  if (r !== void 0) return Object.freeze({ result: qa(e, r), artifacts: Object.freeze([]) });
  const s = await Ra(e, t, n, i, uy), { target: a, artifacts: c, facts: l, verificationOf: u, artifactVerification: y } = s, f = (N) => l.get(N), h = l.get(e.targetId), x = i.authority.certificateRoutes, w = h.document === void 0 ? [] : x.slice(0, i.authority.maxRoutes).map((N) => {
    const _ = jl[N];
    return _ === void 0 ? {
      id: N,
      state: "not_established",
      execution: "executed",
      chain: [h.uri],
      bases: [{ id: "installed-evaluator", state: "not_established", reason: `Route ${N} has no installed evaluator.`, sources: [] }]
    } : _(h, f, i);
  }), v = h.document === void 0 ? { state: "not_established", reason: "The target is not usable, so its authority is not evaluated.", restrictions: [], routes: [] } : zn([], w, x.slice(i.authority.maxRoutes)), I = v.routes.find((N) => N.state === "established"), g = (N) => {
    const _ = l.get(N)?.document?.credentialSubject;
    return Array.isArray(_?.scope) ? _.scope : [];
  }, m = h.document, d = e.selectedClaims.map((N) => {
    const _ = /* @__PURE__ */ new Map();
    if (m === void 0 || !wy.test(N.sourcePointer) || pn(m, N.sourcePointer) === void 0) {
      const O = m === void 0 ? "The target is not usable, so its claims are not read." : `Selected claim ${N.sourcePointer} is not a measurement group in the usable target.`;
      return { claim: N, mapping: void 0, coverage: _, result: { claimId: N.id, routeWitnessIds: [], ...ce("not_established", [O]) } };
    }
    const F = ql(pn(m, N.sourcePointer), N.sourcePointer);
    if (F.group === void 0)
      return { claim: N, mapping: F, coverage: _, result: {
        claimId: N.id,
        routeWitnessIds: [],
        ...ce(F.state, [`Gate 4: ${F.reason}`], [N.sourcePointer])
      } };
    const L = F.group, B = Sr(v, (O) => {
      const U = Rl(L, g(O.scope), o), D = [O.scope, ...U.sources];
      return _.set(O.id, { ...U, sources: D }), { id: "claim-coverage", state: U.state, reason: U.reason, sources: D };
    }), T = B.routes.find((O) => O.state === "established");
    return { claim: N, mapping: F, coverage: _, result: {
      claimId: N.id,
      routeWitnessIds: B.state === "established" && T ? [`route:${T.id}`, ...T.chain, `record:${_.get(T.id)?.record}`] : [],
      ...ce(B.state, [
        B.reason,
        ...T ? [_.get(T.id).reason] : [..._].map(([O, U]) => `${O}: ${U.reason}`)
      ], [N.sourcePointer])
    } };
  }), p = d.map((N) => N.result), S = Array.isArray(m?.type) && m.type[1] === "CalTestReport" ? by(h, f, i, o) : void 0, A = S === void 0 ? [] : [{
    obligationId: "cal-v1:instrument-calibration",
    witnessIds: S.state === "established" ? [...S.chain] : [],
    ...ce(S.state, [S.reason], ["/evidence"])
  }], P = e.conformity ? {
    requested: !0,
    ...e.conformity,
    ...ce("not_established", ["The calibration v1 binding installs no conformity requirements or decision rules."])
  } : { requested: !1, execution: "not_run" }, R = /* @__PURE__ */ new Set([
    e.targetId,
    ...I?.chain ?? [],
    ...S?.state === "established" ? S.chain : []
  ]), E = [
    ...c.filter((N) => R.has(N.artifactId)).flatMap(u).map((N) => N.state),
    ...p.map((N) => N.state),
    ...A.map((N) => N.state),
    ...P.requested ? [P.state] : []
  ], k = [...s.trace], M = gr(a.artifactId, a.digestSRI, "target", e);
  for (const { claim: N, mapping: _, coverage: F } of d) {
    _ && k.push({
      gate: 4,
      nodeUse: M,
      predicate: `claim-mapping:${N.id}`,
      state: _.state,
      execution: "executed",
      reason: _.reason,
      sources: [..._.sources]
    });
    for (const [L, B] of F)
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
  for (const N of p)
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
    sources: I ? [...I.chain] : []
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
  for (const N of A)
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
  const j = dr({
    requestId: e.requestId,
    targetId: e.targetId,
    binding: e.binding,
    profile: e.profile,
    artifactVerification: y,
    authorization: p,
    support: A,
    conformity: P,
    decision: ca(E),
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
const Id = "https://vc4qi.example/bindings/gs/1", Iy = "https://vc4qi.example/contexts/gs/1", Ir = "https://vc4qi.example/bindings/gs/1#", Ct = "https://vc4qi.example/schemas/gs/1/", Ay = Object.freeze({
  name: "GS certification v1",
  schemas: Object.freeze({
    GsAccreditation: `${Ct}accreditation.json`,
    GsSchemeAuthorization: `${Ct}scheme-authorization.json`,
    GsCertificate: `${Ct}certificate.json`,
    GsMarkCredential: `${Ct}mark-credential.json`,
    ProductPassport: `${Ct}product-passport.json`,
    GsTestReport: `${Ct}test-report.json`,
    GsInspectionReport: `${Ct}inspection-report.json`,
    BitstringStatusListCredential: `${Ct}status-list.json`
  }),
  contexts: (e) => e === "BitstringStatusListCredential" ? [Ht] : [Ht, Iy]
}), lt = (e) => e !== null && typeof e == "object" && !Array.isArray(e), Ue = (e) => Array.isArray(e) ? e : [], X = (e) => String(e).split(/[#/]/).pop(), ut = (e) => lt(e.credentialSubject) ? e.credentialSubject : {};
function $l(e, t) {
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
function Pl(e, t, n) {
  const i = ["/credentialSubject/scope"], { productCategoryIri: o, standardIris: r } = e, s = t.map((f) => {
    const h = String(f.id), x = Ue(f.standardIris);
    if (f.productCategoryIri !== o)
      return { id: h, state: "contradicted", reason: `${X(h)}: category ${X(o)} ≠ ${X(f.productCategoryIri)}` };
    const w = r.filter((v) => !x.includes(v));
    return w.length > 0 ? { id: h, state: "contradicted", reason: `${X(h)}: standard ${w.map(X).join(", ")} is not in the accredited scope` } : r.length === 0 && x.length > 0 ? { id: h, state: "not_established", reason: `${X(h)} restricts standards, but the certification names none` } : { id: h, state: "established", reason: `${X(h)} covers ${X(o)} against [${r.map(X).join(", ")}]` };
  }), a = n.map((f) => {
    const h = String(f.id);
    return f.productCategoryIri === o ? { id: h, state: "established", reason: `${X(h)} permits the GS mark for ${X(o)}` } : { id: h, state: "contradicted", reason: `${X(h)}: category ${X(o)} ≠ ${X(f.productCategoryIri)}` };
  }), c = (f, h) => {
    if (h.length === 0) return { state: "not_established", reason: `The ${f} scope has no records.`, record: void 0 };
    const x = h.find((w) => w.state === "established");
    return x ? { state: "established", reason: x.reason, record: x.id } : { state: hn(h.map((w) => w.state)), reason: `No single ${f} record covers it (${h.map((w) => w.reason).join(" | ")})`, record: void 0 };
  }, l = c("competence", s), u = c("scheme", a), y = xe([l.state, u.state]);
  return {
    state: y,
    reason: `Competence: ${l.reason}. Scheme: ${u.reason}.`,
    sources: i,
    ...y === "established" ? { records: [l.record, u.record] } : {}
  };
}
function _l(e, t, n) {
  const i = e.document, o = [], r = [e.uri], s = (l, u, y, f, h, x) => {
    const w = Ye(`${l}-reference`, i, u, t, [e.uri], "IssuedUnderPolicy");
    if (o.push(w.basis), !w.node) return;
    const v = w.node.document;
    return o.push(ft(`${l}-grantee`, v, i.issuer, x)), o.push(dt(v, `${Ir}${y}`) ? { id: `${l}-permission`, state: "established", reason: `${x} permits ${f}.`, sources: ["/credentialSubject/permittedActivity"] } : { id: `${l}-permission`, state: "contradicted", reason: `${x} does not permit ${f}.`, sources: ["/credentialSubject/permittedActivity"] }), o.push(Dn(`${l}-anchor`, v, h, n)), w.node;
  }, a = s("competence", "GsAccreditation", "certifyProducts", "certifying products", "accredit-certification-bodies", "Accreditation GS-A"), c = s("scheme", "GsSchemeAuthorization", "awardGsMark", "awarding the GS mark", "authorize-gs-certification", "Scheme authorization GS-S");
  return !a || !c ? pe("competence-and-scheme-permission", o, r) : (r.push(a.uri, c.uri), o.push(zt(i, [["GS-A", a.document], ["GS-S", c.document]])), pe("competence-and-scheme-permission", o, r, a.uri));
}
function Tl(e, t) {
  const n = (i) => i === void 0 ? [] : Ue(ut(t(i)?.document ?? {}).scope).filter(lt);
  return { competence: n(e.scope), scheme: n(e.chain.length === 3 ? e.chain[2] : void 0) };
}
const qy = `${Ir}GsMark`;
function Cl(e, t, n) {
  const i = [t];
  if (!lt(e) || typeof e.markIri != "string" || typeof e.productModelIri != "string")
    return { state: "not_established", reason: "The selected marking names no mark or product model.", sources: i };
  if (e.markIri !== qy)
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
function El(e, t) {
  const n = ["/credentialSubject/id"];
  if (t === void 0) return { state: "not_established", reason: "No certificate was reached.", sources: n };
  const i = ut(t).id;
  return i === e.productModelIri ? { state: "established", reason: `${X(t.id)} certifies model ${X(i)}.`, sources: n, records: [String(t.id)] } : { state: "contradicted", reason: `${X(t.id)} certifies ${X(i)}, not model ${X(e.productModelIri)}.`, sources: n };
}
function kl(e, t, n) {
  const i = e.document, o = [], r = [e.uri], s = Ye("certificate-reference", i, "GsCertificate", t, [e.uri], "IssuedUnderPolicy");
  if (o.push(s.basis), !s.node) return pe("gs-certified-product", o, r);
  const a = s.node.document;
  r.push(s.node.uri);
  const c = ut(a).manufacturerIri;
  o.push(typeof c != "string" ? { id: "manufacturer-binding", state: "not_established", reason: "The certificate names no manufacturer.", sources: ["/credentialSubject/manufacturerIri"] } : c === i.issuer ? { id: "manufacturer-binding", state: "established", reason: `The certificate names the passport issuer ${c} as manufacturer.`, sources: ["/credentialSubject/manufacturerIri", "/issuer"] } : { id: "manufacturer-binding", state: "contradicted", reason: `The certificate names ${c}, not the passport issuer ${String(i.issuer)}.`, sources: ["/credentialSubject/manufacturerIri", "/issuer"] }), o.push({ ...zt(i, [["The certificate", a]]), id: "certificate-in-force" });
  const l = _l(s.node, t, n);
  o.push(...l.bases.map((f) => ({ ...f, id: `certificate:${f.id}` })));
  const u = $l(ut(a).certification, "/credentialSubject/certification"), y = u.certification === void 0 ? { state: u.state, reason: u.reason } : (() => {
    const { competence: f, scheme: h } = Tl(l, t);
    return Pl(u.certification, f, h);
  })();
  return o.push({ id: "certificate:claim-coverage", state: y.state, reason: y.reason, sources: ["/credentialSubject/certification"] }), r.push(...l.chain.slice(1)), pe("gs-certified-product", o, r, s.node.uri);
}
const Ry = `${Ir}Pass`, jy = [
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
], Oe = (e, t, n, i, o) => t === void 0 ? { id: e, state: "not_established", reason: i, sources: o } : { id: e, state: t ? "established" : "contradicted", reason: t ? n : i, sources: o };
function $y(e, t, n) {
  const i = e.document, o = ut(i), r = lt(o.certification) ? o.certification : {};
  return jy.map(({ obligationId: s, reference: a, type: c, activity: l, purpose: u, what: y }) => {
    const f = [], h = (A) => {
      const P = xe(f.map((E) => E.state)), R = f.find((E) => E.state === P && P !== "established");
      return {
        obligationId: s,
        state: P,
        bases: f,
        chain: A,
        reason: P === "established" ? `The ${y} applies and is independently authorized.` : `The ${y}: ${R?.reason ?? "not established"}`
      };
    }, x = Ue(i.evidence).filter(lt).filter((A) => A.type === a).map((A) => String(A.id));
    if (x.length !== 1)
      return f.push({
        id: "reference",
        state: "not_established",
        sources: ["/evidence"],
        reason: x.length === 0 ? `The certificate cites no ${y}.` : `The certificate cites several ${y}s; none is chosen.`
      }), h([]);
    const w = x[0], v = t(w);
    if (v === void 0 || v.usable !== "established" || v.document === void 0)
      return f.push({
        id: "reference",
        state: v?.usable === "contradicted" ? "contradicted" : "not_established",
        sources: ["/evidence", w],
        reason: v === void 0 ? `${X(w)} is unavailable.` : `${X(w)} is not usable: ${v.reason}`
      }), h([]);
    const I = v.document, g = ut(I), m = Ue(I.type);
    if (f.push(Oe("reference", m.includes(c), `Cites ${y} ${X(w)}.`, `${X(w)} is not a ${c}.`, ["/evidence", w])), s === "type-examination") {
      f.push(Oe(
        "same-model",
        g.productModelIri === o.id,
        `${X(w)} examined model ${X(o.id)}.`,
        `${X(w)} examined ${X(g.productModelIri)}, not model ${X(o.id)}.`,
        ["/credentialSubject/productModelIri"]
      ));
      const A = Ue(g.standardIris), P = Ue(r.standardIris), R = P.filter((E) => !A.includes(E));
      f.push(Oe(
        "covers-certification",
        g.productCategoryIri === r.productCategoryIri && R.length === 0,
        `${X(w)} covers ${X(r.productCategoryIri)} against [${P.map(X).join(", ")}].`,
        g.productCategoryIri !== r.productCategoryIri ? `${X(w)} examined ${X(g.productCategoryIri)}, not ${X(r.productCategoryIri)}.` : `${X(w)} did not examine ${R.map(X).join(", ")}.`,
        ["/credentialSubject/standardIris"]
      ));
    } else
      f.push(Oe(
        "same-manufacturer",
        typeof g.manufacturerIri == "string" && typeof o.manufacturerIri == "string" ? g.manufacturerIri === o.manufacturerIri : void 0,
        `${X(w)} inspected the certificate's manufacturer.`,
        `${X(w)} inspected ${String(g.manufacturerIri)}, not the certificate's manufacturer ${String(o.manufacturerIri)}.`,
        ["/credentialSubject/manufacturerIri"]
      ));
    f.push(Oe("outcome", g.outcomeIri === Ry, `${X(w)} passed.`, `${X(w)} did not pass (${X(g.outcomeIri)}).`, ["/credentialSubject/outcomeIri"]));
    const d = Date.parse(String(g.activityTime)), p = Date.parse(String(o.activityTime));
    f.push(Oe(
      "precedes-certification",
      Number.isFinite(d) && Number.isFinite(p) ? d <= p : void 0,
      `The ${y} (${String(g.activityTime)}) precedes the certification.`,
      Number.isFinite(d) && Number.isFinite(p) ? `The ${y} (${String(g.activityTime)}) follows the certification (${String(o.activityTime)}).` : "An activity time is missing.",
      ["/credentialSubject/activityTime"]
    ));
    const b = Ye("accreditation-reference", I, "GsAccreditation", t, [e.uri, w], "IssuedUnderPolicy");
    if (f.push(b.basis), !b.node) return h([w]);
    const S = b.node.document;
    if (f.push(ft("accreditation-grantee", S, I.issuer, `Accreditation ${X(b.node.uri)}`)), f.push(Oe(
      "accreditation-permission",
      dt(S, `${Ir}${l}`),
      `${X(b.node.uri)} permits ${l}.`,
      `${X(b.node.uri)} does not permit ${l}.`,
      ["/credentialSubject/permittedActivity"]
    )), f.push(Dn("accreditation-anchor", S, u, n)), f.push({ ...zt(I, [[X(b.node.uri), S]]), id: "accreditation-in-force" }), s === "type-examination") {
      const A = Ue(g.standardIris), R = Ue(ut(S).scope).filter(lt).find((E) => E.productCategoryIri === g.productCategoryIri && A.every((k) => Ue(E.standardIris).includes(k)));
      f.push(Oe(
        "accreditation-scope",
        R !== void 0,
        `${X(R?.id)} covers the examination.`,
        `No record of ${X(b.node.uri)} covers ${X(g.productCategoryIri)} against [${A.map(X).join(", ")}].`,
        ["/credentialSubject/scope"]
      ));
    }
    return h([w, b.node.uri]);
  });
}
function Py(e, t, n) {
  const i = e.document, o = ut(i).economicOperatorIri, r = ["/credentialSubject/economicOperatorIri", "/issuer"];
  return pe(
    "responsible-economic-operator",
    [typeof o != "string" ? { id: "operator-is-issuer", state: "not_established", reason: "The passport names no responsible economic operator.", sources: r } : Oe(
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
function _y(e, t, n) {
  const i = e.document, o = ut(i), r = lt(o.complianceInformation) ? o.complianceInformation : {}, s = lt(r.gsMark) ? r.gsMark : {}, a = [], c = (g, m) => {
    const d = xe(a.map((b) => b.state)), p = a.find((b) => b.state === d && d !== "established");
    return { ...m === void 0 ? {} : { certificateUri: m }, support: {
      obligationId: "gs-mark-credential",
      state: d,
      bases: a,
      chain: g,
      reason: d === "established" ? "The GS-mark credential applies to this unit and holds its own route." : `The GS-mark credential: ${p?.reason ?? "not established"}`
    } };
  }, l = Ue(i.evidence).filter(lt).filter((g) => g.type === "GsMarkCredentialReference").map((g) => String(g.id));
  if (l.length !== 1)
    return a.push({
      id: "reference",
      state: "not_established",
      sources: ["/evidence"],
      reason: l.length === 0 ? "The passport cites no GS-mark credential." : "The passport cites several GS-mark credentials; none is chosen."
    }), c([]);
  const u = l[0], y = t(u);
  if (y === void 0 || y.usable !== "established" || y.document === void 0)
    return a.push({
      id: "reference",
      state: y?.usable === "contradicted" ? "contradicted" : "not_established",
      sources: ["/evidence", u],
      reason: y === void 0 ? `${X(u)} is unavailable.` : `${X(u)} is not usable: ${y.reason}`
    }), c([]);
  const f = y.document, h = ut(f);
  a.push(Oe(
    "reference",
    Ue(f.type).includes("GsMarkCredential"),
    `Cites GS-mark credential ${X(u)}.`,
    `${X(u)} is not a GsMarkCredential.`,
    ["/evidence", u]
  )), a.push(Oe(
    "same-unit",
    h.id === o.id,
    `${X(u)} is for this unit ${X(o.id)}.`,
    `${X(u)} is for unit ${X(h.id)}, not this unit ${X(o.id)}.`,
    ["/credentialSubject/id"]
  )), a.push(Oe(
    "same-operator",
    f.issuer === i.issuer,
    `${X(u)} is issued by the passport's issuer.`,
    `${X(u)} is issued by ${String(f.issuer)}, not the passport's issuer ${String(i.issuer)}.`,
    ["/issuer"]
  ));
  const x = Cl(h.marking, "/credentialSubject/marking", h.productModelIri);
  a.push({ id: "mark-credential:mapping", state: x.state, reason: x.reason, sources: [...x.sources] }), a.push(Oe(
    "same-model",
    x.marking === void 0 ? void 0 : x.marking.productModelIri === s.productModelIri && h.productModelIri === o.productModelIri,
    `${X(u)} claims the mark for the passport's model ${X(o.productModelIri)}.`,
    x.marking === void 0 ? `${X(u)} claims no mark for a model.` : `${X(u)} claims the mark for model ${X(x.marking.productModelIri)}, not the passport's model ${X(o.productModelIri)}.`,
    ["/credentialSubject/complianceInformation/gsMark/productModelIri", "/credentialSubject/productModelIri"]
  ));
  const w = kl(y, t, n);
  a.push(...w.bases.map((g) => ({ ...g, id: `mark-credential:${g.id}` })));
  const v = w.scope === void 0 ? void 0 : t(w.scope)?.document, I = x.marking === void 0 ? { state: "not_established", reason: "No mark was mapped.", sources: [] } : El(x.marking, v);
  return a.push({ id: "mark-credential:claim-coverage", state: I.state, reason: I.reason, sources: [...I.sources] }), c([u, ...w.chain.slice(1)], w.scope);
}
const Ty = Object.freeze({
  "competence-and-scheme-permission": _l,
  "gs-certified-product": kl,
  "responsible-economic-operator": Py
}), Cy = "/credentialSubject/certification", Ey = "/credentialSubject/marking", ia = "/credentialSubject/complianceInformation/gsMark", ky = { GsMarkCredential: "mark", ProductPassport: "passport" }, My = { certificate: Cy, mark: Ey, passport: ia };
async function Oy(e, t, n, i) {
  if (n.id !== Id || i.binding.id !== n.id || i.binding.version !== n.version)
    throw new Error(`Profile ${i.id}@${i.version} is not configured for ${Id}@${n.version}.`);
  const o = Aa(e, n, i);
  if (o !== void 0) return Object.freeze({ result: qa(e, o), artifacts: Object.freeze([]) });
  const r = await Ra(e, t, n, i, Ay), { target: s, artifacts: a, facts: c, verificationOf: l, artifactVerification: u } = r, y = (L) => c.get(L), f = c.get(e.targetId), h = f.document, x = i.authority.certificateRoutes, w = h === void 0 ? [] : x.slice(0, i.authority.maxRoutes).map((L) => {
    const B = Ty[L];
    return B === void 0 ? {
      id: L,
      state: "not_established",
      execution: "executed",
      chain: [f.uri],
      bases: [{ id: "installed-evaluator", state: "not_established", reason: `Route ${L} has no installed evaluator.`, sources: [] }]
    } : B(f, y, i);
  }), v = h === void 0 ? { state: "not_established", reason: "The target is not usable, so its authority is not evaluated.", restrictions: [], routes: [] } : zn([], w, x.slice(i.authority.maxRoutes)), I = v.routes.find((L) => L.state === "established"), g = Array.isArray(h?.type) && ky[String(h.type[1])] || "certificate", m = My[g], d = e.selectedClaims.map((L) => {
    const B = /* @__PURE__ */ new Map();
    if (h === void 0 || L.sourcePointer !== m || pn(h, L.sourcePointer) === void 0) {
      const z = h === void 0 ? "The target is not usable, so its claims are not read." : g === "passport" ? `This binding interprets only the GS-mark entry (${ia}) of a product passport; ${L.sourcePointer} has no interpretation here.` : `Selected claim ${L.sourcePointer} is not the ${g === "mark" ? "marking" : "certification statement"} of the usable target.`;
      return { claim: L, mapping: void 0, coverage: B, result: { claimId: L.id, routeWitnessIds: [], ...ce("not_established", [z]) } };
    }
    const T = pn(h, L.sourcePointer), O = g === "certificate" ? void 0 : Cl(T, L.sourcePointer, h.credentialSubject?.productModelIri), U = O ?? $l(T, L.sourcePointer), D = O?.marking, $ = g === "certificate" ? U.certification : void 0;
    if (D === void 0 && $ === void 0)
      return { claim: L, mapping: U, coverage: B, result: {
        claimId: L.id,
        routeWitnessIds: [],
        ...ce(U.state, [`Gate 4: ${U.reason}`], [L.sourcePointer])
      } };
    const q = Sr(v, (z) => {
      const H = g === "passport" ? {
        state: "established",
        sources: [ia],
        reason: "The entry is declared by the passport's responsible economic operator; it is relied on through the GS-mark credential it cites (gate 6)."
      } : D !== void 0 ? El(D, y(z.scope)?.document) : (() => {
        const { competence: J, scheme: V } = Tl(z, y);
        return Pl($, J, V);
      })(), Q = [...z.chain.slice(1), ...H.sources];
      return B.set(z.id, { ...H, sources: Q }), { id: "claim-coverage", state: H.state, reason: H.reason, sources: Q };
    }), C = q.routes.find((z) => z.state === "established");
    return { claim: L, mapping: U, coverage: B, result: {
      claimId: L.id,
      routeWitnessIds: q.state === "established" && C ? [`route:${C.id}`, ...C.chain, ...(B.get(C.id)?.records ?? []).map((z) => `record:${z}`)] : [],
      ...ce(q.state, [
        q.reason,
        ...C ? [B.get(C.id).reason] : [...B].map(([z, H]) => `${z}: ${H.reason}`)
      ], [L.sourcePointer])
    } };
  }), p = d.map((L) => L.result), b = g === "passport" && h !== void 0 ? _y(f, y, i) : void 0, S = h === void 0 ? void 0 : g === "passport" ? b?.certificateUri : g === "mark" ? w.find((L) => L.chain.length > 1)?.chain[1] : e.targetId, A = S === void 0 ? void 0 : y(S), P = h === void 0 ? [] : A?.usable === "established" && A.document !== void 0 ? $y(A, y, i) : ["type-examination", "factory-inspection"].map((L) => ({
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
    ...I?.chain ?? [],
    ...R.filter((L) => L.state === "established").flatMap((L) => L.chain)
  ]), j = [
    ...a.filter((L) => M.has(L.artifactId)).flatMap(l).map((L) => L.state),
    ...p.map((L) => L.state),
    ...E.map((L) => L.state),
    ...k.requested ? [k.state] : []
  ], N = [...r.trace], _ = gr(s.artifactId, s.digestSRI, "target", e);
  for (const { claim: L, mapping: B, coverage: T } of d) {
    B && N.push({
      gate: 4,
      nodeUse: _,
      predicate: `claim-mapping:${L.id}`,
      state: B.state,
      execution: "executed",
      reason: B.reason,
      sources: [...B.sources]
    });
    for (const [O, U] of T)
      N.push({
        gate: 5,
        nodeUse: _,
        predicate: `claim-coverage:${L.id}:${O}`,
        state: U.state,
        execution: "executed",
        reason: U.reason,
        sources: [...U.sources]
      });
  }
  for (const L of p)
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
    sources: I ? [...I.chain] : []
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
  const F = dr({
    requestId: e.requestId,
    targetId: e.targetId,
    binding: e.binding,
    profile: e.profile,
    artifactVerification: u,
    authorization: p,
    support: E,
    conformity: k,
    decision: ca(j),
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
  return Object.freeze({ result: F, artifacts: Object.freeze([...a]) });
}
function Ly(e, t, n) {
  const i = JSON.parse(n), o = oa(i.verificationMethod[0].publicKeyMultibase).slice(2), r = Cd(new TextEncoder().encode(`vc4qi-rm-v1-insecure-fixture-key:${e}`));
  return { id: `${t}#key-1`, controller: t, privateKey: r, publicKey: o };
}
const Ny = (e) => `${JSON.stringify(e, null, 2)}
`;
async function Ml(e, t, n, i, o, r) {
  const s = kd(new Ed(o).openSession({ maxResources: 64, maxBytes: 1e6 })), a = await tm(e, Ly(t, n, r), { created: i, documentLoader: s, safe: !0 });
  return Ny({ ...e, proof: a });
}
function Dy(e) {
  const t = new Uint8Array(Ks / 8);
  for (const o of e) t[o >> 3] |= 128 >> (o & 7);
  const n = Pm(t, { level: 9, mtime: 0 });
  let i = "";
  for (const o of n) i += String.fromCharCode(o);
  return `u${btoa(i).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")}`;
}
function zy(e, t, n) {
  const { proof: i, ...o } = JSON.parse(e);
  return { ...o, validFrom: n, credentialSubject: { ...o.credentialSubject, encodedList: Dy(t) } };
}
const ar = "2026-09-25T12:00:00Z", Uy = { rm: dy, cal: Sy, gs: Oy }, pt = Object.fromEntries(["rm", "cal", "gs"].map((e) => [e, {
  manifest: yu(St[e].manifest),
  profiles: Object.fromEntries(Object.entries(St[e].profiles).map(([t, n]) => [t, cr(n)])),
  files: St[e].files
}])), _a = "gs-verifier-dpp-accreditation-only (demonstrator)";
{
  const e = St.gs.profiles["gs-verifier-dpp-1"];
  pt.gs.profiles[_a] = cr({
    ...e,
    id: "https://vc4qi.example/profiles/gs-verifier-dpp-accreditation-only",
    description: "Demonstrator-only variant of gs-verifier-dpp-1 that configures the accreditation body as its only trust anchor. Fictional.",
    trustAnchors: e.trustAnchors.filter((t) => t.id !== "https://zls.vc4qi.example/controller")
  });
}
const ks = (e) => String(e).split(/[#/:]/).pop() ?? "", Ms = (e, t) => ({
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
}), Me = {
  CA: "https://nab.vc4qi.example/credentials/CAL-A",
  DCC1: "https://lab.vc4qi.example/credentials/DCC-1",
  O: "https://lab.vc4qi.example/credentials/CAL-O",
  DCC2: "https://lab.vc4qi.example/credentials/DCC-2",
  M: "https://ministry.vc4qi.example/credentials/CAL-M",
  DCCN: "https://nmi.vc4qi.example/credentials/DCC-N",
  T: "https://nab.vc4qi.example/credentials/CAL-T",
  REPORT: "https://testlab.vc4qi.example/credentials/REPORT-1"
}, xn = (e) => ({ id: `g${e + 1}`, sourcePointer: `/credentialSubject/measurementGroups/${e}` }), Vy = [
  {
    id: "direct",
    label: "Accredited lab",
    sublabel: "DCC-1",
    binding: "cal",
    profile: "cal-verifier-1",
    target: Me.DCC1,
    claims: [xn(0), xn(1)],
    supplied: [Me.CA],
    tamper: ['"value": "1000"', '"value": "15000"'],
    withhold: { uri: Me.CA, label: "Withhold the accreditation" }
  },
  {
    id: "capability",
    label: "Capability scope",
    sublabel: "DCC-2",
    binding: "cal",
    profile: "cal-verifier-capability-1",
    target: Me.DCC2,
    claims: [xn(0)],
    supplied: [Me.O, Me.CA],
    tamper: ['"value": "1000"', '"value": "5000"'],
    withhold: { uri: Me.O, label: "Withhold the operational scope" }
  },
  {
    id: "nmi",
    label: "National institute",
    sublabel: "DCC-N",
    binding: "cal",
    profile: "cal-verifier-nmi-1",
    target: Me.DCCN,
    claims: [xn(0)],
    supplied: [Me.M],
    tamper: ['"value": "20"', '"value": "200"'],
    withhold: { uri: Me.M, label: "Withhold the mandate" }
  },
  {
    id: "report",
    label: "Test report",
    sublabel: "REPORT-1",
    binding: "cal",
    profile: "cal-verifier-test-report-1",
    target: Me.REPORT,
    claims: [xn(0)],
    supplied: [Me.T],
    tamper: ['"value": "2"', '"value": "30"'],
    withhold: { uri: Me.DCC1, label: "Withhold the instrument's calibration" }
  }
], at = {
  C1: "https://gs-body.vc4qi.example/credentials/GSC-1",
  TR1: "https://gs-body.vc4qi.example/credentials/TR-1",
  TR2: "https://testlab-gs.vc4qi.example/credentials/TR-2",
  TR3: "https://gs-body.vc4qi.example/credentials/TR-3",
  M1: "https://maker.vc4qi.example/credentials/GSM-1",
  M4: "https://maker.vc4qi.example/credentials/GSM-4"
}, Sn = (e, t, n, i, o) => ({
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
}), Os = (e, t, n, i, o) => ({
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
}), In = (e) => ({ uri: e, label: "Withhold the type examination" }), Ls = (e) => ({ uri: e, label: "Withhold the GS-mark credential" }), Ad = [
  {
    id: "rm",
    tab: "RM",
    title: "Certified reference material",
    intro: "M375a, leaded brass: may I rely on the certified arsenic value?",
    caseLabel: "Certified As mass fraction (mg/kg)",
    cases: [Ms("178", "certificate"), Ms("197", "hypothetical"), Ms("520", "hypothetical")],
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
    cases: Vy,
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
      Sn("in-house", "Hair dryer HD-01", "GS body tested", "https://maker.vc4qi.example/credentials/GSM-1", In(at.TR1)),
      Sn("external", "Hair dryer HD-02", "external lab tested", "https://maker.vc4qi.example/credentials/GSM-3", In(at.TR2)),
      Sn("toy", "Toy 001", "outside ZLS scope", "https://maker.vc4qi.example/credentials/GSM-2", In(at.TR3)),
      Sn("clone", "Other company", "cites the HD-01 certificate", "https://clone.vc4qi.example/credentials/GSM-5", In(at.TR1)),
      Sn("mismatch", "HD-02 unit", "claims the HD-01 mark", "https://maker.vc4qi.example/credentials/GSM-6", In(at.TR1))
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
      Os("unit", "Unit sn-0042", "its own GS-mark credential", "https://maker.vc4qi.example/credentials/DPP-1", Ls(at.M1)),
      Os("early", "Unit sn-0001", "on market before certification", "https://maker.vc4qi.example/credentials/DPP-2", Ls(at.M4)),
      Os("borrowed", "Unit sn-0050", "cites another unit's credential", "https://maker.vc4qi.example/credentials/DPP-3", Ls(at.M1))
    ],
    choice: { label: "The verifier trusts", options: [
      { id: "both", label: "Accreditation body and scheme owner", sublabel: "gs-verifier-dpp-1" },
      { id: "accreditation-only", label: "Accreditation body only", sublabel: "no scheme-owner anchor" }
    ] },
    note: "An experimental product passport shaped after the EU Digital Product Passport (ESPR): unique product identifier, GTIN, commodity code, economic operator and facility, technical and sustainability data, and compliance information. Its GS-mark entry is supported by the unit's GS-mark credential, which keeps its own authority route. The GS binding evaluates only that entry. Not ESPR conformance; identifiers are fictional, and today's GS scheme has no per-unit credential. All parties and keys are fictional."
  }
], Fy = {
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
}, qd = (e) => {
  const t = e !== null && typeof e == "object" ? e.id : e, n = /^https:\/\/([^./]+)\./.exec(String(t))?.[1];
  return n === void 0 ? String(t).split("#")[0].split(":").pop() : Fy[n] ?? n;
}, Gy = {
  nab: "authority",
  "global-aci": "authority",
  zls: "authority",
  ministry: "authority",
  producer: "actor",
  lab: "actor",
  nmi: "actor",
  testlab: "actor",
  "testlab-gs": "actor",
  "gs-body": "actor",
  maker: "actor",
  clone: "actor"
}, By = (e) => {
  const t = e !== null && typeof e == "object" ? e.id : e;
  return Gy[/^https:\/\/([^./]+)\./.exec(String(t))?.[1] ?? ""];
}, Zy = {
  RmAccreditation: "Producer accreditation",
  RmLabAuthority: "Laboratory accreditation",
  RmOperationalScope: "Operational scope",
  RmStudy: "Homogeneity study",
  RmCertificate: "RM certificate (DRMD)",
  RecognizedEntityCredential: "Recognition of the body",
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
function Hy(e, t, n, i, o) {
  const r = /* @__PURE__ */ new Map();
  for (const [w, v] of Object.entries(t))
    try {
      r.set(w, JSON.parse(v));
    } catch {
    }
  const s = (w) => [
    ...(w?.termsOfUse ?? []).filter((v) => typeof v.authorizationCredential?.id == "string").map((v) => ({ to: v.authorizationCredential.id, kind: "authority", policy: String(v.type ?? "termsOfUse") })),
    ...(w?.termsOfUse ?? []).filter((v) => typeof v.recognitionCredential?.id == "string").map((v) => ({ to: v.recognitionCredential.id, kind: "recognition", policy: String(v.type ?? "termsOfUse") })),
    ...(w?.evidence ?? []).map((v) => v.id).filter((v) => typeof v == "string").map((v) => ({ to: v, kind: "support", policy: "evidence" }))
  ], a = new Map(n.artifactVerification.map((w) => [w.artifactId, w.state])), c = n.decision === "accept" ? /* @__PURE__ */ new Set([...n.authorization.flatMap((w) => w.routeWitnessIds), ...n.support.flatMap((w) => w.witnessIds)]) : void 0, l = /* @__PURE__ */ new Map([[e, 0]]), u = /* @__PURE__ */ new Set(), y = [], f = [[e, !1]], h = /* @__PURE__ */ new Set();
  for (; f.length > 0; ) {
    const [w, v] = f.shift();
    for (const { to: I, kind: g, policy: m } of s(r.get(w))) {
      const d = `${w}>${I}`, p = v || g === "support";
      h.has(d) || (h.add(d), y.push({
        from: w,
        to: I,
        kind: g,
        policy: m,
        state: w === e ? g === "support" ? o : i : c && !c.has(I) ? "unused" : a.get(I) ?? "not_established"
      }));
      const b = (l.get(w) ?? 0) + 1;
      (l.get(I) ?? -1) < b && b < 8 ? (l.set(I, b), f.push([I, p])) : p && !u.has(I) && u.add(I);
    }
  }
  return { nodes: [...l].map(([w, v]) => {
    const I = r.get(w), g = Array.isArray(I?.type) ? String(I.type[1]) : "", m = I?.credentialSubject ?? {};
    return {
      uri: w,
      name: ks(w),
      code: Jy[ks(w)] ?? ks(w),
      role: Zy[g] ?? (g || "not supplied"),
      type: g,
      group: I === void 0 ? void 0 : By(I.issuer),
      layer: v,
      present: I !== void 0,
      target: w === e,
      parties: I === void 0 ? "withheld" : `${qd(I.issuer)} → ${qd(m.id)}`,
      state: a.get(w) ?? "not_established"
    };
  }), edges: y };
}
const Et = (e) => e.length === 0 ? "not_established" : xe(e.map((t) => t.state)), Rd = (e, t) => e.find((n) => n.state === t);
async function Ta(e) {
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
      digestSRI: E === R.text && R.digestSRI ? R.digestSRI : or(k)
    };
  }), c = Pu({
    requestId: e.requestId,
    targetId: e.target,
    selectedClaims: e.claims.map((R) => ({ ...R })),
    purpose: "demonstrator",
    binding: { id: t.manifest.id, version: t.manifest.version },
    profile: { id: n.id, version: n.version },
    trustConfigId: "https://vc4qi.example/trust/fixture-anchors",
    evaluationTime: ar,
    activityTime: e.activityTime ?? ar,
    suppliedEvidence: e.supplied.filter((R) => R !== e.withheld),
    resolverLimits: { maxResources: 64, maxDepth: 4, maxBytes: 5e6 },
    ...e.conformity ? { conformity: { ...e.conformity } } : {}
  }), { result: l } = await Uy[e.binding](c, new Ed(a), t.manifest, n), u = (R, E = () => !0) => l.trace.filter((k) => k.gate === R && E(k)), f = [...u(2), ...u(1)], h = u(3), x = [...u(0), ...u(4)], w = (R, E, k) => E === "established" ? k : (Rd(R, E) ?? Rd(R, "not_established"))?.reason ?? "Not evaluated.", v = l.authorization, I = v.length === 0 ? "not_established" : xe(v.map((R) => R.state)), g = I === "established" ? v.map((R) => R.reasons.at(-1)).join(" ") : v.filter((R) => R.state !== "established").map((R) => `${R.claimId}: ${R.reasons.join(" ")}`).join(" "), m = l.support, d = l.artifactVerification.find((R) => R.artifactId === e.target)?.state === "established", p = m.length > 0 ? xe(m.map((R) => R.state)) : d ? "not_required" : "not_established", b = u(6, (R) => R.predicate.startsWith("conformity:")), S = [
    {
      id: "authentic",
      state: Et(f),
      details: f,
      summary: w(f, Et(f), "Every credential is signed by its issuer's own key, and every reference matches the exact bytes.")
    },
    {
      id: "current",
      state: Et(h),
      details: h,
      summary: w(h, Et(h), "Every credential is within its validity period and not revoked.")
    },
    // "Understood" includes reading the claim itself (gate 4); a claim that was never
    // read, because its credential failed a lower gate, is not understood.
    u(4).length === 0 ? {
      id: "understood",
      state: Et(u(0)) === "contradicted" ? "contradicted" : "not_established",
      details: x,
      summary: w(u(0), Et(u(0)), "The claim was not read, because its credential did not pass the earlier checks.")
    } : {
      id: "understood",
      state: Et(x),
      details: x,
      summary: w(x, Et(x), u(4).map((R) => R.reason).join(" "))
    },
    {
      id: "authorized",
      state: I,
      summary: g,
      details: u(5, (R) => R.predicate.startsWith("claim-") || R.predicate.startsWith("restriction:") || R.predicate.startsWith("route:"))
    },
    {
      id: "supported",
      state: p,
      summary: m.length > 0 ? m.map((R) => R.reasons.join(" ")).join(" ") : d ? "This claim needs no supporting credential under the selected profile." : "Not evaluated: the credential did not pass the earlier checks.",
      details: u(6, (R) => R.predicate.startsWith("support:") || m.some((E) => E.obligationId === R.predicate))
    },
    l.conformity.requested ? {
      id: "fit",
      state: l.conformity.execution === "not_run" ? "not_asked" : l.conformity.state,
      details: b,
      summary: l.conformity.reasons.join(" ")
    } : { id: "fit", state: "not_asked", details: [], summary: e.notAsked }
  ], A = JSON.parse(s[e.target]), P = Hy(e.target, s, l, I, p);
  return { profile: e.profileName, result: l, questions: S, target: A, texts: s, graph: P };
}
async function hg(e) {
  const t = Ad.find((s) => s.id === e.example) ?? Ad[0], n = t.cases.find((s) => s.id === e.caseId) ?? t.cases[0], i = pt[n.binding].files.find((s) => s.uri === n.target), o = e.tamper ? { [n.target]: i.text.replace(n.tamper[0], n.tamper[1]) } : {}, r = await Ta({
    binding: n.binding,
    profileName: t.id === "dcc" && e.choice === "direct-only" ? "cal-verifier-1" : t.id === "dpp" && e.choice === "accreditation-only" ? _a : n.profile,
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
const mg = [
  { id: "build", label: "Build the chain" },
  { id: "verify", label: "Verify" },
  { id: "manipulate", label: "Manipulate" },
  { id: "decide", label: "The verifier decides" },
  { id: "present", label: "Present" },
  { id: "play", label: "Your turn" }
], Ns = /* @__PURE__ */ new Map();
function Ol(e, t) {
  return Ns.has(e) || Ns.set(e, t()), Ns.get(e);
}
const jd = "2026-09-20T00:00:00Z", kn = (e, t) => pt[e].files.find((n) => n.uri === t).text, Ll = (e) => pt[e].files.map((t) => ({
  uri: t.uri,
  mediaType: t.mediaType,
  origin: t.origin,
  version: t.version,
  bytes: new TextEncoder().encode(t.text),
  digestSRI: t.digestSRI
})), cn = (e, t, n, i) => Ol(`${e}:list:${t}`, () => Ml(zy(kn(e, t), [0], jd), n, i, jd, Ll(e), kn(e, i))), Nl = (e, t, n) => e.replace(t, n), yg = [
  { id: "anatomy", label: "The credential" },
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
}, gg = [
  {
    id: "gaci",
    mono: "GACI",
    group: "authority",
    name: "Global ACI",
    does: "Recognizes accreditation bodies after peer evaluation. Can suspend one recognition. A fictional stand-in.",
    publishes: [{ label: "Key", uri: oe.GACI }, { label: "Revocation list", uri: oe.GACI_STATUS }, { label: "Suspension list", uri: oe.GACI_SUSPENSION }]
  },
  {
    id: "ab",
    mono: "AB",
    group: "authority",
    name: "Accreditation body",
    does: "Accredits the producer and the laboratory. Can suspend.",
    publishes: [{ label: "Key", uri: oe.NAB }, { label: "Revocation list", uri: oe.NAB_STATUS }, { label: "Suspension list", uri: oe.SUSPENSION }]
  },
  {
    id: "lab",
    mono: "LAB",
    group: "actor",
    name: "Laboratory",
    does: "Studies the batch under its accreditation. Can revoke its study.",
    publishes: [{ label: "Key", uri: oe.LAB }, { label: "Revocation list", uri: oe.LAB_STATUS }]
  },
  {
    id: "rmp",
    mono: "RMP",
    group: "actor",
    name: "RM producer",
    does: "Declares its scope, certifies the material and ships it.",
    publishes: [{ label: "Key", uri: oe.PRODUCER }, { label: "Revocation list", uri: oe.PRODUCER_STATUS }]
  },
  {
    id: "holder",
    mono: "CUST",
    name: "Customer lab",
    does: "Bought disc lot 1. Holds its certificate and shows it.",
    publishes: [{ label: "Wallet" }]
  },
  {
    id: "verifier",
    mono: "VER",
    name: "Verifier",
    does: "Relies on the certificate only as far as its own profile allows.",
    publishes: [{ label: "Profile" }]
  }
], Jy = {
  R: "REC1",
  A: "PA1",
  A2: "PA2",
  H: "LA1",
  O: "OS1",
  S: "HS1",
  D178: "RM178",
  D197: "RM197",
  D520: "RM520",
  "D-live": "RM-own"
}, vg = [
  { code: "R", label: "Recognition of the body", tag: "proposal", kind: "grant", actor: "gaci", row: 1, about: "ab", heldBy: "ab" },
  { code: "A", label: "Producer accreditation", kind: "grant", actor: "ab", row: 1, about: "rmp", heldBy: "rmp" },
  { code: "H", label: "Laboratory accreditation", kind: "grant", actor: "ab", row: 2, about: "lab", heldBy: "lab" },
  { code: "O", label: "Producer’s operational scope", kind: "grant", actor: "rmp", row: 1, about: "rmp", heldBy: "rmp" },
  { code: "S", label: "Homogeneity study", kind: "evidence", actor: "lab", row: 2, about: "object", aboutLabel: "disc lot 1", heldBy: "rmp" },
  { code: "D", label: "RM certificate", kind: "claim", actor: "rmp", row: 2, about: "object", aboutLabel: "disc lot 1", heldBy: "holder" }
], Ky = {
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
}, Qy = "2026-01-20T00:00:00Z", bg = [
  {
    id: "credential",
    part: "anatomy",
    acts: [],
    panel: "credential",
    title: "One credential, its links and the rules",
    text: "Every card is a W3C verifiable credential. Its links are standard fields; the type of each term of use says what the link means."
  },
  {
    id: "recognize",
    part: "build",
    acts: ["gaci", "ab"],
    joins: ["gaci", "ab"],
    issues: ["R"],
    title: "Global ACI recognizes the accreditation body",
    text: "After peer evaluation, for RM production (ISO 17034) and testing (ISO/IEC 17025). Recognition grants no authority."
  },
  {
    id: "accredit-producer",
    part: "build",
    acts: ["ab", "rmp"],
    joins: ["rmp"],
    issues: ["A"],
    title: "The accreditation body accredits the producer",
    text: "PA1 names what the producer may certify. It names REC1 as a RecognitionPolicy: issued while recognized."
  },
  {
    id: "accredit-lab",
    part: "build",
    acts: ["ab", "lab"],
    joins: ["lab"],
    issues: ["H"],
    title: "The accreditation body accredits the laboratory",
    text: "LA1 names which studies the laboratory may carry out. It too names REC1 as a RecognitionPolicy."
  },
  {
    id: "scope",
    part: "build",
    acts: ["rmp"],
    issues: ["O"],
    title: "The producer declares its operational scope",
    text: "OS1 is issued under PA1 (IssuedUnderPolicy) and must lie within it: As in CuZn39Pb3 discs, method M1."
  },
  {
    id: "study",
    part: "build",
    acts: ["lab"],
    issues: ["S"],
    title: "The laboratory studies the batch",
    text: "HS1, 10 January 2026: disc lot 1 is homogeneous for As. Issued under LA1."
  },
  {
    id: "certify",
    part: "build",
    acts: ["rmp", "holder"],
    joins: ["holder"],
    issues: ["D"],
    title: "The producer certifies and ships",
    text: "RM178, 20 January 2026: As = 178 ± 5 mg/kg, issued under OS1, with HS1 as evidence."
  },
  {
    id: "verify",
    part: "verify",
    acts: ["holder", "verifier"],
    joins: ["verifier"],
    expect: "accept",
    title: "Checked upward",
    text: "The verifier trusts the accreditation body and climbs every link from RM178 to it. Its own rule: As + U ≤ 200 mg/kg."
  },
  {
    id: "break",
    part: "manipulate",
    acts: ["holder", "rmp", "ab", "lab"],
    expect: "accept",
    unlock: ["withhold", "tamper", "certificate", "suspend", "revoke"],
    title: "Try to break it",
    text: "Click a line to leave that credential out, edit a value, certify 520 or your own value, suspend PA1 or revoke HS1."
  },
  {
    id: "decide",
    part: "decide",
    acts: ["verifier", "rmp"],
    state: { certificate: "197" },
    unlock: ["rule", "limit", "ask", "certificate"],
    expect: "reject",
    title: "The verifier decides, not the issuer",
    text: "RM197 is authorized, but guarded acceptance counts the uncertainty: 197 + 5 = 202 > 200."
  },
  {
    id: "abroad",
    part: "decide",
    acts: ["verifier", "gaci", "rmp"],
    state: { trust: "global-aci" },
    unlock: ["trust", "suspendGaci", "certificate"],
    expect: "accept",
    title: "A verifier abroad trusts only Global ACI",
    text: "REC1 tells it to accept the body. Suspend REC1, or certify 520: recognized is not in scope."
  },
  {
    id: "when",
    part: "when",
    acts: ["ab", "verifier"],
    state: { suspendA: !0, asOf: "issuance", archive: !0 },
    unlock: ["asOf", "archive", "suspend"],
    expect: "accept",
    title: "Was it valid when it was issued?",
    text: "PA1 was suspended in September; RM178 dates from 20 January. Only the status lists kept from January can answer."
  },
  {
    id: "proposal",
    part: "proposal",
    acts: ["gaci", "ab"],
    panel: "proposal",
    title: "Proposal: one recognition per body",
    text: "One recognition credential per body, named by its accreditations, and dated status lists."
  },
  {
    id: "reconcile",
    part: "proposal",
    acts: ["gaci", "ab", "rmp"],
    panel: "reconcile",
    title: "Recognized Entities and terms of use",
    text: "One rule for every upward link; its type says grant (IssuedUnderPolicy) or recognition (RecognitionPolicy)."
  },
  {
    id: "play",
    part: "play",
    acts: ["gaci", "ab", "lab", "rmp", "holder", "verifier"],
    unlock: ["suspendGaci", "suspend", "revoke", "certificate", "tamper", "withhold", "trust", "ask", "rule", "limit", "asOf", "archive"],
    title: "Your turn",
    text: "Every action is live: leave out, edit, certify, suspend, revoke, and change what the verifier trusts, asks and when."
  }
], Ca = "rm-verifier-1", Ea = "rm-verifier-other-anchor (demonstrator)", Wy = "rm-verifier-global-aci-1";
{
  const e = St.rm.profiles[Ca];
  pt.rm.profiles[Ea] = cr({
    ...e,
    id: "https://vc4qi.example/profiles/rm-verifier-other-anchor",
    description: "Demonstrator-only variant of rm-verifier-1 whose only trust anchor is another, fictional accreditation body.",
    trustAnchors: e.trustAnchors.map((t) => ({ ...t, id: "https://other-ab.vc4qi.example/controller" }))
  });
}
function Xy(e, t) {
  if (t === "200") return e;
  const n = `${e} (limit ${t} mg/kg, demonstrator)`;
  if (!pt.rm.profiles[n]) {
    const i = pt.rm.profiles[e], o = structuredClone(St.rm.profiles[e] ?? St.rm.profiles[Ca]);
    e === Ea && (o.trustAnchors = i.trustAnchors.map((s) => ({ id: s.id, purposes: [...s.purposes] })));
    const r = o.conformity;
    r.requirements[0].upperLimit.value = t, pt.rm.profiles[n] = cr({
      ...o,
      id: `${i.id}-limit-${t}`,
      description: `Demonstrator-only variant of ${i.id} whose As limit is ${t} mg/kg.`
    });
  }
  return n;
}
const ra = (e) => kn("rm", e), Yy = (e) => e.certificate === "custom" ? oe.LIVE : `https://producer.vc4qi.example/credentials/D${e.certificate}`;
function eg(e) {
  return Ol(`rm:D:${e.value}:${e.uncertainty}:${e.method}`, () => {
    const { proof: t, ...n } = JSON.parse(ra("https://producer.vc4qi.example/credentials/D178")), i = structuredClone(n.credentialSubject), o = i.materialPropertiesList[0].results[0];
    o.methodIri = o.methodIri.replace(/M1$/, e.method), o.data.quantity.value = e.value, o.data.quantity.uncertainty.expandedUncertainty = e.uncertainty;
    const r = { ...n.credentialStatus, id: `${oe.PRODUCER_STATUS}#4`, statusListIndex: "4" };
    return Ml(
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
      Ll("rm"),
      ra(oe.PRODUCER)
    );
  });
}
async function wg(e = {}) {
  const t = { ...Ky, ...e }, n = Yy(t), i = {};
  if (t.certificate === "custom" && (i[n] = await eg(t)), t.suspendA && (i[oe.SUSPENSION] = await cn("rm", oe.SUSPENSION, "nab", oe.NAB)), t.revokeS && (i[oe.LAB_STATUS] = await cn("rm", oe.LAB_STATUS, "lab", oe.LAB)), t.suspendGaci && (i[oe.GACI_SUSPENSION] = await cn("rm", oe.GACI_SUSPENSION, "global-aci", oe.GACI)), t.asOf === "issuance" && t.archive) for (const l of St.rm.archive ?? []) i[l.uri] = l.text;
  const o = new Set((t.asOf === "issuance" && t.archive ? St.rm.archive ?? [] : []).map((l) => l.uri)), r = Object.keys(i).filter((l) => !o.has(l));
  if (t.tamper) {
    const l = i[n] ?? ra(n), u = JSON.parse(l).credentialSubject.materialPropertiesList[0].results[0].data.quantity.value;
    i[n] = Nl(l, `"value": "${u}"`, `"value": "${u === "150" ? "151" : "150"}"`);
  }
  const s = { R: oe.R, A: oe.A, H: oe.H, O: oe.O, S: oe.S, D: n }, a = t.trust === "ab" ? Ca : t.trust === "global-aci" ? Wy : Ea;
  return { ...await Ta({
    binding: "rm",
    profileName: t.ask === "fit" ? Xy(a, t.limit) : a,
    requestId: "urn:vc4qi:demonstrator:rm-board",
    target: n,
    claims: [{ id: "as", sourcePointer: "/credentialSubject/materialPropertiesList/0/results/0" }],
    supplied: [],
    texts: i,
    withheld: t.withhold ? s[t.withhold] : void 0,
    activityTime: t.asOf === "issuance" ? Qy : ar,
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
}, xg = [
  {
    id: "ab",
    mono: "AB",
    group: "authority",
    name: "Accreditation body",
    does: "Accredits the GS body for testing and certifying. Can revoke.",
    publishes: [{ label: "Key", uri: xt.NAB }, { label: "Revocation list", uri: xt.NAB_STATUS }]
  },
  {
    id: "so",
    mono: "SO",
    group: "authority",
    name: "Scheme owner",
    does: "Permits a body to award the GS mark, in the role ZLS has. Can revoke.",
    publishes: [{ label: "Key", uri: xt.ZLS }, { label: "Revocation list", uri: xt.ZLS_STATUS }]
  },
  {
    id: "gsb",
    mono: "GSB",
    group: "actor",
    name: "GS body",
    does: "Examines, inspects and certifies. Can withdraw a certificate.",
    publishes: [{ label: "Key", uri: xt.BODY }, { label: "Revocation list", uri: xt.BODY_STATUS }]
  },
  {
    id: "mfr",
    mono: "MFR",
    group: "actor",
    name: "Manufacturer",
    does: "Makes hair dryer HD-01, marks each unit and issues its passport.",
    publishes: [{ label: "Key", uri: xt.MAKER }, { label: "Revocation list", uri: xt.MAKER_STATUS }]
  },
  {
    id: "verifier",
    mono: "VER",
    name: "Verifier",
    does: "Relies on the passport's GS mark only as far as its own profile allows.",
    publishes: [{ label: "Profile" }]
  }
], Sg = [
  { code: "GS-A", label: "Accreditation", kind: "grant", actor: "ab", row: 1, about: "gsb", heldBy: "gsb" },
  { code: "GS-S", label: "Scheme permission", kind: "grant", actor: "so", row: 3, about: "gsb", heldBy: "gsb" },
  { code: "TR-1", label: "Type examination", kind: "evidence", actor: "gsb", row: 1, about: "object", aboutLabel: "model HD-01", heldBy: "mfr" },
  { code: "GSC-1", label: "GS certificate", kind: "grant", actor: "gsb", row: 2, about: "object", aboutLabel: "model HD-01", heldBy: "mfr" },
  { code: "FI-1", label: "Factory inspection", kind: "evidence", actor: "gsb", row: 3, about: "mfr", heldBy: "mfr" },
  { code: "GSM", label: "GS-mark credential", kind: "evidence", actor: "mfr", row: 2, about: "object", aboutLabel: "the unit", heldBy: "mfr" },
  { code: "DPP", label: "Product passport", kind: "claim", actor: "mfr", row: 3, about: "object", aboutLabel: "the unit", heldBy: "mfr" }
], tg = {
  unit: "sn-0042",
  revokeA: !1,
  revokeS: !1,
  revokeC: !1,
  tamper: !1,
  withholdTR: !1,
  trust: "both"
}, ng = {
  "sn-0042": "https://maker.vc4qi.example/credentials/DPP-1",
  "sn-0050": "https://maker.vc4qi.example/credentials/DPP-3",
  "sn-0001": "https://maker.vc4qi.example/credentials/DPP-2"
}, Ig = [
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
async function Ag(e = {}) {
  const t = { ...tg, ...e }, n = ng[t.unit], i = xt, o = {};
  t.revokeA && (o[i.NAB_STATUS] = await cn("gs", i.NAB_STATUS, "nab", i.NAB)), t.revokeS && (o[i.ZLS_STATUS] = await cn("gs", i.ZLS_STATUS, "zls", i.ZLS)), t.revokeC && (o[i.BODY_STATUS] = await cn("gs", i.BODY_STATUS, "gs-body", i.BODY));
  const r = Object.keys(o);
  t.tamper && (o[n] = Nl(kn("gs", n), "-sn-", "-sn-9"));
  const s = await Ta({
    binding: "gs",
    profileName: t.trust === "both" ? "gs-verifier-dpp-1" : _a,
    requestId: "urn:vc4qi:demonstrator:gs-board",
    target: n,
    claims: [{ id: "mark", sourcePointer: "/credentialSubject/complianceInformation/gsMark" }],
    supplied: [],
    texts: o,
    withheld: t.withholdTR ? i.TR : void 0,
    notAsked: "The verifier asks only whether the GS-mark entry is authorized; the binding installs no decision rule."
  }), a = JSON.parse(kn("gs", n)).evidence[0].id, c = { "GS-A": i.A, "GS-S": i.S, "TR-1": i.TR, "FI-1": i.FI, "GSC-1": i.C, GSM: a, DPP: n };
  return { ...s, state: t, certificate: n, uris: c, signedLive: r };
}
const qg = {
  evaluationTime: ar,
  bindings: Object.fromEntries(Object.entries(pt).map(([e, t]) => [e, `${t.manifest.id}@${t.manifest.version}`]))
};
export {
  mg as BOARD_PARTS,
  ar as EVALUATION_TIME,
  Ad as EXAMPLES,
  xg as GS_ACTORS,
  Sg as GS_ASSETS,
  tg as GS_DEFAULT,
  Ig as GS_STORY,
  Qy as RM_ACTIVITY,
  gg as RM_ACTORS,
  vg as RM_ASSETS,
  Jy as RM_CODES,
  Ky as RM_DEFAULT,
  yg as RM_PARTS,
  bg as RM_STORY,
  qg as buildInfo,
  Ag as evaluateGsBoard,
  wg as evaluateRmBoard,
  hg as evaluateScenario
};
