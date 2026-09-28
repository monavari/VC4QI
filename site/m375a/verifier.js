var Qc = Object.defineProperty;
var us = (e) => {
  throw TypeError(e);
};
var Wc = (e, t, n) => t in e ? Qc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Be = (e, t, n) => Wc(e, typeof t != "symbol" ? t + "" : t, n), ls = (e, t, n) => t.has(e) || us("Cannot " + n);
var ze = (e, t, n) => (ls(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Qt = (e, t, n) => t.has(e) ? us("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Ar = (e, t, n, i) => (ls(e, t, "write to private field"), i ? i.call(e, n) : t.set(e, n), n);
const gr = { manifest: { $schema: "./manifest.schema.json", id: "https://vc4qi.example/bindings/rm/1", version: "1", status: "experimental", owner: { name: "VC4QI repository fixture governance", source: "docs/bindings.md", authority: "local-research-fixture-only" }, installation: { status: "incomplete", reason: "Contexts, schemas, controller documents, signed A/H/O/S/D fixtures and status lists are pinned and verify in TypeScript and Python. The I1-I4 evaluators (protection, status, authority routes, support, claim mapping and coverage, conformity) and the current-reliance time rules are implemented, with a cross-language parity vector; an independent transformation vector is still required before selection.", pendingResources: [] }, carrierAndSchema: { model: "W3C Verifiable Credentials Data Model 2.0", modelContext: "https://www.w3.org/ns/credentials/v2", requiredContexts: ["https://www.w3.org/ns/credentials/v2", "https://vc4qi.example/contexts/rm/1"], credentialTypes: ["https://www.w3.org/2018/credentials#VerifiableCredential", "https://vc4qi.example/bindings/rm/1#RmAccreditation", "https://vc4qi.example/bindings/rm/1#RmOperationalScope", "https://vc4qi.example/bindings/rm/1#RmCertificate", "https://vc4qi.example/bindings/rm/1#RmStudy", "https://vc4qi.example/bindings/rm/1#RmLabAuthority", "https://www.w3.org/ns/credentials/status#BitstringStatusListCredential"], schemaUris: ["https://vc4qi.example/schemas/rm/1/accreditation.json", "https://vc4qi.example/schemas/rm/1/operational-scope.json", "https://vc4qi.example/schemas/rm/1/certificate.json", "https://vc4qi.example/schemas/rm/1/study.json", "https://vc4qi.example/schemas/rm/1/lab-authority.json", "https://vc4qi.example/schemas/rm/1/authorization-policy.json", "https://vc4qi.example/schemas/rm/1/study-reference.json", "https://vc4qi.example/schemas/rm/1/status-list.json"], statusListCarrier: "BitstringStatusListCredential with the VCDM 2.0 context only", composition: "exact-listed-context-and-schema-combinations-only", pinnedResourceIndex: "bindings/experimental/rm-v1/catalog.json", decimalEncoding: "JSON strings typed xsd:decimal for every quantity, bound and uncertainty", orderedCollections: ["materials", "materialPropertiesList", "results"] }, factMappings: [{ fact: "grantorOrActor", nativePath: "/issuer", expandedIri: "https://www.w3.org/2018/credentials#issuer" }, { fact: "grantee", nativePath: "/credentialSubject/id", expandedIri: "@id" }, { fact: "permittedActivity", nativePath: "/credentialSubject/permittedActivity", expandedIri: "https://vc4qi.example/bindings/rm/1#permittedActivity" }, { fact: "scopeRecords", nativePath: "/credentialSubject/scope", expandedIri: "https://vc4qi.example/bindings/rm/1#scope" }, { fact: "authorizingReference", nativePath: "/termsOfUse/*/authorizationCredential/id", expandedIri: "https://vc4qi.example/bindings/rm/1#authorizationCredential" }, { fact: "requiredStudy", nativePath: "/evidence/*/id", expandedIri: "https://www.w3.org/2018/credentials#evidence" }, { fact: "validFrom", nativePath: "/validFrom", expandedIri: "https://www.w3.org/2018/credentials#validFrom" }, { fact: "validUntil", nativePath: "/validUntil", expandedIri: "https://www.w3.org/2018/credentials#validUntil" }, { fact: "activityTime", nativePath: "/credentialSubject/activityTime", expandedIri: "https://vc4qi.example/bindings/rm/1#activityTime" }, { fact: "selectedResult", nativePath: "/credentialSubject/materialPropertiesList/*/results/*", expandedIri: "https://vc4qi.example/bindings/rm/1#results" }], cardinality: { credentialSubject: { minimum: 1, maximum: 1 }, material: { minimum: 1, maximum: 1 }, scopeRecords: { minimum: 1 }, selectedAuthorizingPoliciesPerUse: { minimum: 1, maximum: 1 }, authorizingReferenceSelection: "by-declared-reference-type-per-route; resolved credential type must match (else contradicted); several of one type not_established", supportReferences: { minimum: 1 }, multipleRecognizedDeclarations: "unsupported-unless-exact-deterministic-composition-is-listed", ambiguousSelection: "not_established" }, discoveryAndIntegrity: { referenceCarriers: ["termsOfUse", "evidence", "relatedResource", "credentialSchema"], discovery: "supplied-or-installed-static-catalog-only", unknownUri: "not_established", immutableRepresentation: "original-secured-bytes", digestAlgorithm: "sha384", digestEncoding: "SRI", digestInput: "exact-original-secured-bytes", independentGrantBinding: "unsupported: authority is recognized only through termsOfUse authorizationCredential references on the credential chain; an authenticated grant found by other means establishes nothing (not_established)" }, recognizedTypes: { authorizationPolicy: "https://vc4qi.example/bindings/rm/1#RmAuthorizationPolicy", authorizationPolicyEstablishes: ["authorizing-reference-candidate"], supportEvidence: "https://vc4qi.example/bindings/rm/1#RmStudyReference", supportEvidenceEstablishes: ["support-reference-candidate"], nonEstablishingByItself: ["authority", "scope", "support-applicability", "conformity"] }, principalAndRights: { principalEqualityEvaluator: "https://vc4qi.example/evaluators/exact-identifier/1", identityAliases: "none", activities: { issueRmCertificate: "https://vc4qi.example/bindings/rm/1#issueRmCertificate", maintainRmScope: "https://vc4qi.example/bindings/rm/1#maintainRmScope", issueRmStudy: "https://vc4qi.example/bindings/rm/1#issueRmStudy" }, rules: ["A grantee equals the producer exercising certificate issuance and scope maintenance.", "O issuer and grantee equal that producer and O is contained by A.", "D issuer equals O grantee.", "S issuer equals H laboratory grantee.", "Commissioning a study grants no laboratory competence."] }, scopeAndMapping: { mappingVersion: "rm-experimental-mapping-1", recordEvaluator: "https://vc4qi.example/evaluators/rm-complete-record/1", quantityEvaluator: "https://vc4qi.example/evaluators/exact-mass-fraction/1", dimensions: ["matrixIri", "formIri", "propertyIri", "methodIri", "quantityKindIri", "range"], units: { "mg/kg": "1e-6", "kg/kg": "1" }, boundaries: "inclusive", missingOrEmptyRestrictedDimension: "not_established", recordCombination: "one-complete-record-per-claim-no-splicing", uncertainty: { requiredCoverageFactor: "2", nonnegative: !0, accreditationCeiling: "none" }, methodRevisions: [{ method: "https://vc4qi.example/bindings/rm/1#M2", revises: "https://vc4qi.example/bindings/rm/1#M1" }], methodSuccessionInterpretation: "verifier-profile mapping.methodSuccession: accept-successor | require-extension | none (none leaves a revised method not_established at gate 4)", claimCoverage: "the selected result, mapped at gate 4, must lie in one complete record of the route's own scope credential (O for operational-scope, A for direct-accreditation); no fallback to a parent grant", conformity: "verifier-profile requirements and decision rules, evaluated at gate 6 only after the claim is authorized; exact arithmetic reported in the requirement's unit", unsupported: ["asymmetric-uncertainty", "display-label-equality", "substring-matching", "implicit-method-succession"] }, routesAndRestrictions: { certificateRoute: ["O-authorizes-D", "A-authorizes-O-maintenance", "O-contained-by-A"], installedCertificateRoutes: { "operational-scope": ["O-authorizes-D", "A-authorizes-O-maintenance", "O-contained-by-A", "A-issuer-is-accreditation-anchor"], "direct-accreditation": ["A-authorizes-D", "A-issuer-is-accreditation-anchor"] }, studyRoute: ["H-authorizes-S"], requiredSupport: ["S", "H"], globalRestrictions: ["applicable-suspension", "request-time-policy"], installedGlobalRestrictions: { "accreditation-suspension": "every usable anchor-issued RmAccreditation of the certificate issuer reached through the target's termsOfUse references, on any route, must carry a fresh issuer suspension status (Bitstring Status List, statusPurpose suspension) with its bit clear; missing or unreadable suspension status is not_established; unusable or unreferenced credentials are not restrictions" }, unusedAlternativeFailures: "diagnostic-only: only the target and the credentials on the selected route and support chains decide the request", routeComposition: "AND-within-route-OR-between-complete-routes", baselineAlternatives: 1, provenanceDoesNotEstablish: ["permission", "containment"] }, protectionTimeAndResolution: { proofSuites: ["eddsa-rdfc-2022"], proofPurpose: "assertionMethod", verificationMethodRule: "exact-installed-method-controlled-by-issuer-and-authorized-for-assertionMethod", safeJsonLd: !0, proofCollections: "unsupported-in-initial-slice", status: "authenticated-current-revocation-status-required-for-A-O-D-S-H; suspension entries on accreditations are read only by the accreditation-suspension restriction", statusMechanism: "W3C Bitstring Status List v1.0: multibase base64url GZIP encodedList, bounded decompression", statusAuthority: "status-list-issuer-equals-credential-issuer", validity: ["validFrom", "validUntil"], freshness: "verifier-profile maxAgeSeconds from the status list validFrom; no default", historicalReliance: "unsupported-without-authenticated-historical-evidence", resolver: { network: !1, unknownUri: "refuse", budgets: ["maxResources", "maxDepth", "maxBytes"] }, installedEvaluatorsOnly: !0, issuerProvidedExecutableCode: !1 }, supportAndDisclosure: { objectApplicability: ["materialBatch", "activity", "method", "activityTime"], supportSubjectNeedNotEqualTargetIssuer: !0, mandatoryDisclosure: ["issuer", "credentialSubject/id", "activityTime", "selectedResult", "restrictions", "authorizingReference", "requiredStudy", "relatedResource", "proof"], missingMandatoryDisclosure: "not_established", presentationProtection: "separate-from-reliance", holderBinding: "unsupported-in-initial-slice" }, evidenceAndExclusions: { acceptanceLedger: "docs/plans/standards-first-acceptance.csv", testVectorRoots: ["testdata/regressions", "bindings/experimental/rm-v1/test-vectors"], implementationEvidence: "docs/plans/evidence.md", unsupported: ["production-accreditation", "legal-effect", "physical-sample-truth", "public-example-namespace-resolution", "general-ontology-reasoning", "wallet-interoperability", "external-recognition-adapter", "timestamp-service"] } }, profile: { id: "https://vc4qi.example/profiles/rm-verifier", version: "1", status: "experimental", description: "Verifier-owned reliance profile for the experimental RM v1 binding. Fictional fixture configuration; not an external standard.", binding: { id: "https://vc4qi.example/bindings/rm/1", version: "1" }, trustAnchors: [{ id: "https://nab.vc4qi.example/controller", purposes: ["accredit-rm-producers", "recognize-rm-laboratories"] }], authority: { certificateRoutes: ["operational-scope"], globalRestrictions: ["accreditation-suspension"], maxRoutes: 8 }, credentialStatus: { required: !0, purposes: ["revocation"], maxAgeSeconds: 2592e3 }, mapping: { methodSuccession: "none" }, conformity: { requirements: [{ id: "as-mass-fraction-max-200-mg-per-kg", propertyIri: "https://vc4qi.example/bindings/rm/1#As", quantityKindIri: "https://vc4qi.example/bindings/rm/1#MassFraction", upperLimit: { value: "200", unit: "mg/kg" } }], decisionRules: [{ id: "guarded-acceptance-expanded-u", acceptWhen: "value-plus-expanded-uncertainty-at-most-limit" }, { id: "simple-acceptance", acceptWhen: "value-at-most-limit" }] } }, files: [{ uri: "https://www.w3.org/ns/credentials/v2", mediaType: "application/ld+json", origin: "W3C Verifiable Credentials Data Model v2.0 context, vendored copy already used by the repository loader", version: "VCDM 2.0", digestSRI: "sha384-l/HrjlBCNWyAX91hr6LFV2Y3heB5Tcr6IeE4/Tje8YyzYBM8IhqjHWiWpr8+ZbYU", text: `{
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
` }] };
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
function Xc(e) {
  return e instanceof Uint8Array || ArrayBuffer.isView(e) && e.constructor.name === "Uint8Array";
}
function Ji(e, ...t) {
  if (!Xc(e))
    throw new Error("Uint8Array expected");
  if (t.length > 0 && !t.includes(e.length))
    throw new Error("Uint8Array expected of length " + t + ", got length=" + e.length);
}
function fs(e, t = !0) {
  if (e.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (t && e.finished)
    throw new Error("Hash#digest() has already been called");
}
function Yc(e, t) {
  Ji(e);
  const n = t.outputLen;
  if (e.length < n)
    throw new Error("digestInto() expects output buffer of length at least " + n);
}
function Ht(...e) {
  for (let t = 0; t < e.length; t++)
    e[t].fill(0);
}
function Or(e) {
  return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function Ve(e, t) {
  return e << 32 - t | e >>> t;
}
function ed(e) {
  if (typeof e != "string")
    throw new Error("string expected");
  return new Uint8Array(new TextEncoder().encode(e));
}
function Yo(e) {
  return typeof e == "string" && (e = ed(e)), Ji(e), e;
}
class td {
}
function Ki(e) {
  const t = (i) => e().update(Yo(i)).digest(), n = e();
  return t.outputLen = n.outputLen, t.blockLen = n.blockLen, t.create = () => e(), t;
}
function nd(e, t, n, i) {
  if (typeof e.setBigUint64 == "function")
    return e.setBigUint64(t, n, i);
  const u = BigInt(32), r = BigInt(4294967295), s = Number(n >> u & r), a = Number(n & r), o = i ? 4 : 0, l = i ? 0 : 4;
  e.setUint32(t + o, s, i), e.setUint32(t + l, a, i);
}
function rd(e, t, n) {
  return e & t ^ ~e & n;
}
function id(e, t, n) {
  return e & t ^ e & n ^ t & n;
}
class ec extends td {
  constructor(t, n, i, u) {
    super(), this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.blockLen = t, this.outputLen = n, this.padOffset = i, this.isLE = u, this.buffer = new Uint8Array(t), this.view = Or(this.buffer);
  }
  update(t) {
    fs(this), t = Yo(t), Ji(t);
    const { view: n, buffer: i, blockLen: u } = this, r = t.length;
    for (let s = 0; s < r; ) {
      const a = Math.min(u - this.pos, r - s);
      if (a === u) {
        const o = Or(t);
        for (; u <= r - s; s += u)
          this.process(o, s);
        continue;
      }
      i.set(t.subarray(s, s + a), this.pos), this.pos += a, s += a, this.pos === u && (this.process(n, 0), this.pos = 0);
    }
    return this.length += t.length, this.roundClean(), this;
  }
  digestInto(t) {
    fs(this), Yc(t, this), this.finished = !0;
    const { buffer: n, view: i, blockLen: u, isLE: r } = this;
    let { pos: s } = this;
    n[s++] = 128, Ht(this.buffer.subarray(s)), this.padOffset > u - s && (this.process(i, 0), s = 0);
    for (let g = s; g < u; g++)
      n[g] = 0;
    nd(i, u - 8, BigInt(this.length * 8), r), this.process(i, 0);
    const a = Or(t), o = this.outputLen;
    if (o % 4)
      throw new Error("_sha2: outputLen should be aligned to 32bit");
    const l = o / 4, y = this.get();
    if (l > y.length)
      throw new Error("_sha2: outputLen bigger than state");
    for (let g = 0; g < l; g++)
      a.setUint32(4 * g, y[g], r);
  }
  digest() {
    const { buffer: t, outputLen: n } = this;
    this.digestInto(t);
    const i = t.slice(0, n);
    return this.destroy(), i;
  }
  _cloneInto(t) {
    t || (t = new this.constructor()), t.set(...this.get());
    const { blockLen: n, buffer: i, length: u, finished: r, destroyed: s, pos: a } = this;
    return t.destroyed = s, t.finished = r, t.length = u, t.pos = a, u % n && t.buffer.set(i), t;
  }
  clone() {
    return this._cloneInto();
  }
}
const et = /* @__PURE__ */ Uint32Array.from([
  1779033703,
  3144134277,
  1013904242,
  2773480762,
  1359893119,
  2600822924,
  528734635,
  1541459225
]), ye = /* @__PURE__ */ Uint32Array.from([
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
]), ge = /* @__PURE__ */ Uint32Array.from([
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
]), Wt = /* @__PURE__ */ BigInt(2 ** 32 - 1), ps = /* @__PURE__ */ BigInt(32);
function sd(e, t = !1) {
  return t ? { h: Number(e & Wt), l: Number(e >> ps & Wt) } : { h: Number(e >> ps & Wt) | 0, l: Number(e & Wt) | 0 };
}
function ad(e, t = !1) {
  const n = e.length;
  let i = new Uint32Array(n), u = new Uint32Array(n);
  for (let r = 0; r < n; r++) {
    const { h: s, l: a } = sd(e[r], t);
    [i[r], u[r]] = [s, a];
  }
  return [i, u];
}
const hs = (e, t, n) => e >>> n, ms = (e, t, n) => e << 32 - n | t >>> n, yt = (e, t, n) => e >>> n | t << 32 - n, gt = (e, t, n) => e << 32 - n | t >>> n, Xt = (e, t, n) => e << 64 - n | t >>> n - 32, Yt = (e, t, n) => e >>> n - 32 | t << 64 - n;
function Je(e, t, n, i) {
  const u = (t >>> 0) + (i >>> 0);
  return { h: e + n + (u / 2 ** 32 | 0) | 0, l: u | 0 };
}
const od = (e, t, n) => (e >>> 0) + (t >>> 0) + (n >>> 0), cd = (e, t, n, i) => t + n + i + (e / 2 ** 32 | 0) | 0, dd = (e, t, n, i) => (e >>> 0) + (t >>> 0) + (n >>> 0) + (i >>> 0), ud = (e, t, n, i, u) => t + n + i + u + (e / 2 ** 32 | 0) | 0, ld = (e, t, n, i, u) => (e >>> 0) + (t >>> 0) + (n >>> 0) + (i >>> 0) + (u >>> 0), fd = (e, t, n, i, u, r) => t + n + i + u + r + (e / 2 ** 32 | 0) | 0, pd = /* @__PURE__ */ Uint32Array.from([
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
]), tt = /* @__PURE__ */ new Uint32Array(64);
class hd extends ec {
  constructor(t = 32) {
    super(64, t, 8, !1), this.A = et[0] | 0, this.B = et[1] | 0, this.C = et[2] | 0, this.D = et[3] | 0, this.E = et[4] | 0, this.F = et[5] | 0, this.G = et[6] | 0, this.H = et[7] | 0;
  }
  get() {
    const { A: t, B: n, C: i, D: u, E: r, F: s, G: a, H: o } = this;
    return [t, n, i, u, r, s, a, o];
  }
  // prettier-ignore
  set(t, n, i, u, r, s, a, o) {
    this.A = t | 0, this.B = n | 0, this.C = i | 0, this.D = u | 0, this.E = r | 0, this.F = s | 0, this.G = a | 0, this.H = o | 0;
  }
  process(t, n) {
    for (let g = 0; g < 16; g++, n += 4)
      tt[g] = t.getUint32(n, !1);
    for (let g = 16; g < 64; g++) {
      const f = tt[g - 15], m = tt[g - 2], w = Ve(f, 7) ^ Ve(f, 18) ^ f >>> 3, _ = Ve(m, 17) ^ Ve(m, 19) ^ m >>> 10;
      tt[g] = _ + tt[g - 7] + w + tt[g - 16] | 0;
    }
    let { A: i, B: u, C: r, D: s, E: a, F: o, G: l, H: y } = this;
    for (let g = 0; g < 64; g++) {
      const f = Ve(a, 6) ^ Ve(a, 11) ^ Ve(a, 25), m = y + f + rd(a, o, l) + pd[g] + tt[g] | 0, _ = (Ve(i, 2) ^ Ve(i, 13) ^ Ve(i, 22)) + id(i, u, r) | 0;
      y = l, l = o, o = a, a = s + m | 0, s = r, r = u, u = i, i = m + _ | 0;
    }
    i = i + this.A | 0, u = u + this.B | 0, r = r + this.C | 0, s = s + this.D | 0, a = a + this.E | 0, o = o + this.F | 0, l = l + this.G | 0, y = y + this.H | 0, this.set(i, u, r, s, a, o, l, y);
  }
  roundClean() {
    Ht(tt);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0), Ht(this.buffer);
  }
}
const tc = ad([
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
].map((e) => BigInt(e))), md = tc[0], yd = tc[1], nt = /* @__PURE__ */ new Uint32Array(80), rt = /* @__PURE__ */ new Uint32Array(80);
class nc extends ec {
  constructor(t = 64) {
    super(128, t, 16, !1), this.Ah = ge[0] | 0, this.Al = ge[1] | 0, this.Bh = ge[2] | 0, this.Bl = ge[3] | 0, this.Ch = ge[4] | 0, this.Cl = ge[5] | 0, this.Dh = ge[6] | 0, this.Dl = ge[7] | 0, this.Eh = ge[8] | 0, this.El = ge[9] | 0, this.Fh = ge[10] | 0, this.Fl = ge[11] | 0, this.Gh = ge[12] | 0, this.Gl = ge[13] | 0, this.Hh = ge[14] | 0, this.Hl = ge[15] | 0;
  }
  // prettier-ignore
  get() {
    const { Ah: t, Al: n, Bh: i, Bl: u, Ch: r, Cl: s, Dh: a, Dl: o, Eh: l, El: y, Fh: g, Fl: f, Gh: m, Gl: w, Hh: _, Hl: b } = this;
    return [t, n, i, u, r, s, a, o, l, y, g, f, m, w, _, b];
  }
  // prettier-ignore
  set(t, n, i, u, r, s, a, o, l, y, g, f, m, w, _, b) {
    this.Ah = t | 0, this.Al = n | 0, this.Bh = i | 0, this.Bl = u | 0, this.Ch = r | 0, this.Cl = s | 0, this.Dh = a | 0, this.Dl = o | 0, this.Eh = l | 0, this.El = y | 0, this.Fh = g | 0, this.Fl = f | 0, this.Gh = m | 0, this.Gl = w | 0, this.Hh = _ | 0, this.Hl = b | 0;
  }
  process(t, n) {
    for (let h = 0; h < 16; h++, n += 4)
      nt[h] = t.getUint32(n), rt[h] = t.getUint32(n += 4);
    for (let h = 16; h < 80; h++) {
      const c = nt[h - 15] | 0, d = rt[h - 15] | 0, p = yt(c, d, 1) ^ yt(c, d, 8) ^ hs(c, d, 7), I = gt(c, d, 1) ^ gt(c, d, 8) ^ ms(c, d, 7), $ = nt[h - 2] | 0, E = rt[h - 2] | 0, O = yt($, E, 19) ^ Xt($, E, 61) ^ hs($, E, 6), P = gt($, E, 19) ^ Yt($, E, 61) ^ ms($, E, 6), M = dd(I, P, rt[h - 7], rt[h - 16]), j = ud(M, p, O, nt[h - 7], nt[h - 16]);
      nt[h] = j | 0, rt[h] = M | 0;
    }
    let { Ah: i, Al: u, Bh: r, Bl: s, Ch: a, Cl: o, Dh: l, Dl: y, Eh: g, El: f, Fh: m, Fl: w, Gh: _, Gl: b, Hh: S, Hl: v } = this;
    for (let h = 0; h < 80; h++) {
      const c = yt(g, f, 14) ^ yt(g, f, 18) ^ Xt(g, f, 41), d = gt(g, f, 14) ^ gt(g, f, 18) ^ Yt(g, f, 41), p = g & m ^ ~g & _, I = f & w ^ ~f & b, $ = ld(v, d, I, yd[h], rt[h]), E = fd($, S, c, p, md[h], nt[h]), O = $ | 0, P = yt(i, u, 28) ^ Xt(i, u, 34) ^ Xt(i, u, 39), M = gt(i, u, 28) ^ Yt(i, u, 34) ^ Yt(i, u, 39), j = i & r ^ i & a ^ r & a, q = u & s ^ u & o ^ s & o;
      S = _ | 0, v = b | 0, _ = m | 0, b = w | 0, m = g | 0, w = f | 0, { h: g, l: f } = Je(l | 0, y | 0, E | 0, O | 0), l = a | 0, y = o | 0, a = r | 0, o = s | 0, r = i | 0, s = u | 0;
      const B = od(O, M, q);
      i = cd(B, E, P, j), u = B | 0;
    }
    ({ h: i, l: u } = Je(this.Ah | 0, this.Al | 0, i | 0, u | 0)), { h: r, l: s } = Je(this.Bh | 0, this.Bl | 0, r | 0, s | 0), { h: a, l: o } = Je(this.Ch | 0, this.Cl | 0, a | 0, o | 0), { h: l, l: y } = Je(this.Dh | 0, this.Dl | 0, l | 0, y | 0), { h: g, l: f } = Je(this.Eh | 0, this.El | 0, g | 0, f | 0), { h: m, l: w } = Je(this.Fh | 0, this.Fl | 0, m | 0, w | 0), { h: _, l: b } = Je(this.Gh | 0, this.Gl | 0, _ | 0, b | 0), { h: S, l: v } = Je(this.Hh | 0, this.Hl | 0, S | 0, v | 0), this.set(i, u, r, s, a, o, l, y, g, f, m, w, _, b, S, v);
  }
  roundClean() {
    Ht(nt, rt);
  }
  destroy() {
    Ht(this.buffer), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  }
}
class gd extends nc {
  constructor() {
    super(48), this.Ah = ye[0] | 0, this.Al = ye[1] | 0, this.Bh = ye[2] | 0, this.Bl = ye[3] | 0, this.Ch = ye[4] | 0, this.Cl = ye[5] | 0, this.Dh = ye[6] | 0, this.Dl = ye[7] | 0, this.Eh = ye[8] | 0, this.El = ye[9] | 0, this.Fh = ye[10] | 0, this.Fl = ye[11] | 0, this.Gh = ye[12] | 0, this.Gl = ye[13] | 0, this.Hh = ye[14] | 0, this.Hl = ye[15] | 0;
  }
}
const vd = /* @__PURE__ */ Ki(() => new hd()), bd = /* @__PURE__ */ Ki(() => new nc()), wd = /* @__PURE__ */ Ki(() => new gd()), _d = vd, Sd = bd, Id = wd;
class $d {
  constructor(t) {
    Be(this, "_chunks", []);
    Be(this, "_algo");
    this._algo = t === "sha384" ? "sha384" : t === "sha512" ? "sha512" : "sha256";
  }
  update(t, n) {
    const i = typeof t == "string" ? new TextEncoder().encode(t) : t;
    return this._chunks.push(i), this;
  }
  digest(t) {
    const n = this._chunks.reduce((s, a) => s + a.length, 0), i = new Uint8Array(n);
    let u = 0;
    for (const s of this._chunks)
      i.set(s, u), u += s.length;
    let r;
    return this._algo === "sha384" ? r = Id(i) : this._algo === "sha512" ? r = Sd(i) : r = _d(i), t === "base64" ? btoa(String.fromCharCode(...r)) : t === "hex" ? Array.from(r).map((s) => s.toString(16).padStart(2, "0")).join("") : r;
  }
}
function Di(e) {
  return new $d(e);
}
class _e extends Error {
  constructor(t, n) {
    super(n), this.code = t, this.name = "CatalogError";
  }
}
function xd(e, t) {
  if (e.trim().length === 0)
    throw new _e("INVALID_RESOURCE", `${t} must be nonempty.`);
}
function vr(e) {
  return `sha384-${Di("sha384").update(e).digest("base64")}`;
}
function ys(e) {
  const t = /* @__PURE__ */ new Map();
  return {
    get resolved() {
      return new Set(t.keys());
    },
    resolve(n) {
      if (!t.has(n))
        try {
          t.set(n, e.resolve(n));
        } catch (u) {
          if (!(u instanceof _e)) throw u;
          t.set(n, u);
        }
      const i = t.get(n);
      if (i instanceof _e) throw i;
      return { ...i, bytes: Uint8Array.from(i.bytes) };
    }
  };
}
var Rt;
class Rd {
  constructor(t) {
    Qt(this, Rt, /* @__PURE__ */ new Map());
    for (const n of t) {
      for (const [u, r] of Object.entries({
        uri: n.uri,
        mediaType: n.mediaType,
        origin: n.origin,
        version: n.version
      })) xd(r, u);
      if (ze(this, Rt).has(n.uri))
        throw new _e("DUPLICATE_RESOURCE", `Duplicate static resource: ${n.uri}`);
      const i = vr(n.bytes);
      if (i !== n.digestSRI)
        throw new _e(
          "INTEGRITY_MISMATCH",
          `Static resource ${n.uri} has ${i}; expected ${n.digestSRI}.`
        );
      ze(this, Rt).set(n.uri, { ...n, bytes: Uint8Array.from(n.bytes) });
    }
  }
  openSession(t) {
    if (!Number.isSafeInteger(t.maxResources) || t.maxResources <= 0 || !Number.isSafeInteger(t.maxBytes) || t.maxBytes <= 0)
      throw new _e("INVALID_RESOURCE", "Catalog budgets must be positive safe integers.");
    return new Ed(ze(this, Rt), Object.freeze({ ...t }));
  }
}
Rt = new WeakMap();
var Et, jt;
class Ed {
  constructor(t, n) {
    Qt(this, Et, 0);
    Qt(this, jt, 0);
    this.resources = t, this.budget = n;
  }
  get usage() {
    return Object.freeze({ resources: ze(this, Et), bytes: ze(this, jt) });
  }
  resolve(t) {
    const n = this.resources.get(t);
    if (!n)
      throw new _e("RESOURCE_NOT_FOUND", `Static resource is not installed: ${t}`);
    if (ze(this, Et) + 1 > this.budget.maxResources || ze(this, jt) + n.bytes.byteLength > this.budget.maxBytes)
      throw new _e("RESOURCE_BUDGET_EXCEEDED", `Static resource budget exceeded at ${t}.`);
    return Ar(this, Et, ze(this, Et) + 1), Ar(this, jt, ze(this, jt) + n.bytes.byteLength), { ...n, bytes: Uint8Array.from(n.bytes) };
  }
}
Et = new WeakMap(), jt = new WeakMap();
function jd(e) {
  return async (t) => {
    const n = e.resolve(t);
    if (n.mediaType !== "application/json" && n.mediaType !== "application/ld+json" && !n.mediaType.endsWith("+json"))
      throw new _e(
        "INVALID_RESOURCE",
        `JSON-LD resource ${t} has unsupported media type ${n.mediaType}.`
      );
    let i;
    try {
      const u = new TextDecoder("utf-8", { fatal: !0 }).decode(n.bytes);
      i = JSON.parse(u);
    } catch (u) {
      throw new _e(
        "INVALID_RESOURCE",
        `JSON-LD resource ${t} is not valid UTF-8 JSON: ${String(u)}.`
      );
    }
    return { contextUrl: null, document: i, documentUrl: t };
  };
}
const gs = "https://vc4qi.example/bindings/rm/1", qr = [
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
function en(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function rc(e) {
  if (e !== null && typeof e == "object") {
    for (const t of Object.values(e)) rc(t);
    Object.freeze(e);
  }
  return e;
}
function Ad(e) {
  if (!en(e)) throw new TypeError("Binding manifest must be an object.");
  if (Object.keys(e).length !== qr.length || qr.some((n) => !Object.hasOwn(e, n)))
    throw new TypeError("Binding manifest must contain exactly the supported top-level categories.");
  if (typeof e.id != "string" || e.id.length === 0 || typeof e.version != "string" || e.version.length === 0 || e.status !== "experimental" && e.status !== "production")
    throw new TypeError("Binding manifest identity, version, or status is invalid.");
  if (!en(e.installation) || e.installation.status !== "incomplete" && e.installation.status !== "installable" || typeof e.installation.reason != "string" || e.installation.reason.length === 0 || !Array.isArray(e.installation.pendingResources) || e.installation.pendingResources.some((n) => typeof n != "string" || n.length === 0))
    throw new TypeError("Binding manifest installation state is invalid.");
  if (!Array.isArray(e.factMappings) || e.factMappings.length === 0 || e.factMappings.some((n) => !en(n)))
    throw new TypeError("Binding manifest factMappings must be a nonempty object array.");
  for (const n of qr.slice(4))
    if (!(n === "installation" || n === "factMappings") && (!en(e[n]) || Object.keys(e[n]).length === 0))
      throw new TypeError(`Binding manifest ${n} must be a nonempty object.`);
  return rc(structuredClone(e));
}
const vs = "https://www.w3.org/ns/credentials/v2", Od = "https://vc4qi.example/contexts/rm/1", vt = "https://vc4qi.example/schemas/rm/1/", qd = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz", Nd = BigInt(58);
function Td(e) {
  if (e.length === 0) return new Uint8Array(0);
  let t = 0;
  for (const s of e) {
    if (s !== "1") break;
    t++;
  }
  let n = 0n;
  for (const s of e) {
    const a = qd.indexOf(s);
    if (a === -1) throw new Error(`Invalid base58btc character: '${s}'`);
    n = n * Nd + BigInt(a);
  }
  const i = [];
  for (; n > 0n; )
    i.push(Number(n & 0xffn)), n >>= 8n;
  i.reverse();
  const u = Uint8Array.from(i), r = new Uint8Array(t + u.length);
  return r.set(u, t), r;
}
function ic(e) {
  if (!e.startsWith("z"))
    throw new Error(`Expected multibase base58btc prefix 'z', got '${e[0]}'`);
  return Td(e.slice(1));
}
const bs = [237, 1], Pd = ["revoked", "expires"];
function fe(e, t, n, i = {}) {
  return Object.freeze({ state: e, code: t, reason: n, ...i });
}
function rr(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function Dd(e) {
  if (typeof e == "string" && e.length > 0) return e;
  if (rr(e) && typeof e.id == "string" && e.id.length > 0) return e.id;
}
function kd(e) {
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
function Ld(e) {
  if (typeof e != "string" || !e.startsWith("z")) return;
  let t;
  try {
    t = ic(e);
  } catch {
    return;
  }
  if (!(t.length !== 34 || t[0] !== bs[0] || t[1] !== bs[1]))
    return t.slice(2);
}
function Md(e, t, n) {
  const i = Dd(e);
  if (i === void 0)
    return fe("not_established", "ISSUER_MISSING", "The credential has no issuer identifier.");
  if (typeof t != "string")
    return fe("contradicted", "MALFORMED_METHOD", "The proof names no verification method.");
  const u = kd(t);
  if (u === void 0)
    return fe(
      "contradicted",
      "MALFORMED_METHOD",
      `Verification method ${t} is not an absolute URL with a fragment.`
    );
  if (u !== i)
    return fe(
      "contradicted",
      "NOT_ISSUER_CONTROLLER",
      `Verification method ${t} is not in issuer ${i}'s controller document.`
    );
  let r, s;
  try {
    const f = n.resolve(u);
    s = f.digestSRI, r = JSON.parse(new TextDecoder("utf-8", { fatal: !0 }).decode(f.bytes));
  } catch (f) {
    return f instanceof _e ? fe(
      "not_established",
      "CONTROLLER_NOT_INSTALLED",
      `Controller document ${u} is not available: ${f.code}.`
    ) : fe(
      "not_established",
      "INVALID_CONTROLLER_DOCUMENT",
      `Controller document ${u} is not valid UTF-8 JSON.`
    );
  }
  if (!rr(r))
    return fe(
      "not_established",
      "INVALID_CONTROLLER_DOCUMENT",
      `Controller document ${u} is not a JSON object.`
    );
  if (r.id !== u)
    return fe(
      "contradicted",
      "CONTROLLER_ID_MISMATCH",
      `Controller document at ${u} identifies itself as ${String(r.id)}.`
    );
  const o = (Array.isArray(r.verificationMethod) ? r.verificationMethod : []).filter((f) => rr(f) && f.id === t);
  if (o.length === 0)
    return fe(
      "contradicted",
      "METHOD_NOT_FOUND",
      `${t} is not listed in its controller document.`
    );
  if (o.length > 1)
    return fe(
      "contradicted",
      "METHOD_AMBIGUOUS",
      `${t} is listed more than once in its controller document.`
    );
  const l = o[0];
  if (l.type !== "Multikey")
    return fe(
      "not_established",
      "METHOD_TYPE_UNSUPPORTED",
      `Verification method type ${String(l.type)} is not supported; Multikey is required.`
    );
  if (l.controller !== u)
    return fe(
      "contradicted",
      "METHOD_CONTROLLER_MISMATCH",
      `${t} is controlled by ${String(l.controller)}, not ${u}.`
    );
  if (Pd.some((f) => Object.hasOwn(l, f)))
    return fe(
      "not_established",
      "METHOD_LIFECYCLE_UNSUPPORTED",
      "Key revocation/expiry metadata is not supported in the initial slice."
    );
  const y = Ld(l.publicKeyMultibase);
  if (y === void 0)
    return fe(
      "contradicted",
      "INVALID_PUBLIC_KEY",
      `${t} does not carry an Ed25519 Multikey public key.`
    );
  const g = Array.isArray(r.assertionMethod) ? r.assertionMethod : [];
  return g.includes(t) ? fe(
    "established",
    "AUTHORIZED",
    `${t} is the issuer's Ed25519 assertion key.`,
    { publicKey: y, verificationMethod: t, controllerDocumentDigest: s }
  ) : g.some((f) => rr(f) && f.id === t) ? fe(
    "not_established",
    "EMBEDDED_METHOD_UNSUPPORTED",
    "Embedded assertionMethod entries are not supported; a reference is required."
  ) : fe(
    "contradicted",
    "NOT_ASSERTION_METHOD",
    `${t} is not authorized for assertionMethod.`
  );
}
const ws = ["accept-successor", "require-extension", "none"], Cd = ["value-at-most-limit", "value-plus-expanded-uncertainty-at-most-limit"], Ud = /^(0|[1-9][0-9]*)(\.[0-9]+)?$/;
function Ne(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
const Re = (e) => typeof e == "string" && e.trim().length > 0, Nr = (e) => Array.isArray(e) && e.length > 0 && e.every(Re) && new Set(e).size === e.length;
function zd(e) {
  if (!Ne(e) || !Re(e.id) || !Re(e.version) || e.status !== "experimental" && e.status !== "production")
    throw new TypeError("Reliance profile identity, version or status is invalid.");
  const t = e.binding;
  if (!Ne(t) || !Re(t.id) || !Re(t.version))
    throw new TypeError("Reliance profile must name exactly one binding and version.");
  if (!Array.isArray(e.trustAnchors) || e.trustAnchors.some((l) => !Ne(l) || !Re(l.id) || !Nr(l.purposes)))
    throw new TypeError("Reliance profile trustAnchors must list anchors with explicit purposes.");
  const n = e.authority;
  if (!Ne(n) || !Nr(n.certificateRoutes) || !Array.isArray(n.globalRestrictions) || !n.globalRestrictions.every(Re) || !Number.isSafeInteger(n.maxRoutes) || n.maxRoutes <= 0)
    throw new TypeError("Reliance profile authority needs certificateRoutes, globalRestrictions and a positive maxRoutes.");
  const i = e.credentialStatus;
  if (!Ne(i) || typeof i.required != "boolean" || !Nr(i.purposes) || !Number.isSafeInteger(i.maxAgeSeconds) || i.maxAgeSeconds <= 0)
    throw new TypeError("Reliance profile credentialStatus needs required, purposes and a positive maxAgeSeconds.");
  const u = e.mapping;
  if (!Ne(u) || !ws.includes(u.methodSuccession))
    throw new TypeError(`Reliance profile mapping.methodSuccession must be one of ${ws.join(", ")}.`);
  const r = e.conformity;
  if (!Ne(r) || !Array.isArray(r.requirements) || !Array.isArray(r.decisionRules) || r.requirements.some((l) => !Ne(l) || !Re(l.id) || !Re(l.propertyIri) || !Re(l.quantityKindIri) || !Ne(l.upperLimit) || typeof l.upperLimit.value != "string" || !Ud.test(l.upperLimit.value) || !Re(l.upperLimit.unit)) || r.decisionRules.some((l) => !Ne(l) || !Re(l.id) || !Cd.includes(l.acceptWhen)))
    throw new TypeError("Reliance profile conformity needs requirements (id, propertyIri, quantityKindIri, upperLimit) and decisionRules (id, acceptWhen).");
  if (e.bindingRules !== void 0 && !Ne(e.bindingRules))
    throw new TypeError("Reliance profile bindingRules must be an object when present.");
  const s = r.requirements, a = r.decisionRules, o = [...s.map((l) => l.id), ...a.map((l) => l.id)];
  if (new Set(o).size !== o.length) throw new TypeError("Reliance profile conformity ids must be unique.");
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
    mapping: Object.freeze({ methodSuccession: u.methodSuccession }),
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
function oe(e, t) {
  if (e.trim().length === 0)
    throw new TypeError(`${t} must be a non-empty string.`);
}
function Tr(e, t) {
  if (new Set(e).size !== e.length)
    throw new TypeError(`${t} must not contain duplicates.`);
}
function ki(e, t) {
  const n = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(?:\.\d{1,9})?(Z|[+-]\d{2}:\d{2})$/.exec(e);
  if (!n)
    throw new TypeError(`${t} must be an ISO 8601 date-time with an explicit offset.`);
  const [, i, u, r, s, a, o] = n, l = n[7], y = Number(i), g = Number(u), f = Number(r), m = Number(s), w = Number(a), _ = Number(o), b = /* @__PURE__ */ new Date(0);
  b.setUTCFullYear(y, g - 1, f), b.setUTCHours(0, 0, 0, 0);
  const S = b.getUTCFullYear() !== y || b.getUTCMonth() !== g - 1 || b.getUTCDate() !== f, v = l === "Z" ? null : /^([+-])(\d{2}):(\d{2})$/.exec(l), h = v !== null && (Number(v[2]) > 23 || Number(v[3]) > 59);
  if (y < 1 || S || m > 23 || w > 59 || _ > 59 || h || !Number.isFinite(Date.parse(e)))
    throw new TypeError(`${t} must be a valid ISO 8601 date-time.`);
}
function Pr(e, t) {
  if (!Number.isSafeInteger(e) || e <= 0)
    throw new TypeError(`${t} must be a positive safe integer.`);
}
function dr(e, t) {
  oe(e.id, `${t}.id`), oe(e.version, `${t}.version`);
}
function ur(e) {
  return Object.freeze({ id: e.id, version: e.version });
}
function kt(e) {
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
function Vd(e) {
  if (oe(e.requestId, "requestId"), oe(e.targetId, "targetId"), oe(e.purpose, "purpose"), oe(e.trustConfigId, "trustConfigId"), dr(e.binding, "binding"), dr(e.profile, "profile"), ki(e.evaluationTime, "evaluationTime"), ki(e.activityTime, "activityTime"), e.selectedClaims.length === 0)
    throw new TypeError("selectedClaims must contain at least one claim.");
  for (const [r, s] of e.selectedClaims.entries())
    oe(s.id, `selectedClaims[${r}].id`), oe(s.sourcePointer, `selectedClaims[${r}].sourcePointer`);
  Tr(e.selectedClaims.map((r) => r.id), "selected claim IDs"), Tr(e.selectedClaims.map((r) => r.sourcePointer), "selected claim source pointers");
  for (const [r, s] of e.suppliedEvidence.entries())
    oe(s, `suppliedEvidence[${r}]`);
  Tr(e.suppliedEvidence, "suppliedEvidence"), Pr(e.resolverLimits.maxResources, "resolverLimits.maxResources"), Pr(e.resolverLimits.maxDepth, "resolverLimits.maxDepth"), Pr(e.resolverLimits.maxBytes, "resolverLimits.maxBytes"), e.conformity && (oe(e.conformity.requirementId, "conformity.requirementId"), oe(e.conformity.decisionRuleId, "conformity.decisionRuleId"));
  const t = Object.freeze(e.selectedClaims.map((r) => Object.freeze({
    id: r.id,
    sourcePointer: r.sourcePointer
  }))), n = Object.freeze([...e.suppliedEvidence]), i = Object.freeze({ ...e.resolverLimits }), u = e.conformity ? Object.freeze({ ...e.conformity }) : void 0;
  return Object.freeze({
    requestId: e.requestId,
    targetId: e.targetId,
    selectedClaims: t,
    purpose: e.purpose,
    binding: ur(e.binding),
    profile: ur(e.profile),
    trustConfigId: e.trustConfigId,
    evaluationTime: e.evaluationTime,
    activityTime: e.activityTime,
    suppliedEvidence: n,
    resolverLimits: i,
    ...u ? { conformity: u } : {}
  });
}
function Fd(e, t) {
  if (!Number.isInteger(e.gate) || e.gate < 0 || e.gate > 6)
    throw new TypeError(`trace[${t}].gate must be a canonical gate number 0-6.`);
  oe(e.nodeUse, `trace[${t}].nodeUse`), oe(e.predicate, `trace[${t}].predicate`), oe(e.reason, `trace[${t}].reason`);
  const n = kt({
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
function Hd(e, t) {
  if (oe(e.uri, `resources[${t}].uri`), !/^sha384-[A-Za-z0-9+/]{64}$/.test(e.digestSRI))
    throw new TypeError(`resources[${t}].digestSRI must be a SHA-384 SRI value.`);
  if (!["static", "artifact", "status"].includes(e.kind) || !["catalog", "supplied"].includes(e.source))
    throw new TypeError(`resources[${t}] has an unsupported kind or source.`);
  return ki(e.observedAt, `resources[${t}].observedAt`), Object.freeze({ ...e });
}
function sc(e) {
  if (oe(e.requestId, "requestId"), oe(e.targetId, "targetId"), dr(e.binding, "binding"), dr(e.profile, "profile"), e.artifactVerification.forEach((t, n) => oe(t.artifactId, `artifactVerification[${n}].artifactId`)), e.authorization.forEach((t, n) => oe(t.claimId, `authorization[${n}].claimId`)), e.support.forEach((t, n) => oe(t.obligationId, `support[${n}].obligationId`)), e.conformity.requested)
    oe(e.conformity.requirementId, "conformity.requirementId"), oe(e.conformity.decisionRuleId, "conformity.decisionRuleId");
  else if (e.conformity.requested !== !1 || e.conformity.execution !== "not_run")
    throw new TypeError("Unrequested conformity must have execution state not_run.");
  if (!["accept", "reject", "not_established"].includes(e.decision))
    throw new TypeError(`Unsupported reliance decision: ${String(e.decision)}.`);
  return Object.freeze({
    requestId: e.requestId,
    targetId: e.targetId,
    binding: ur(e.binding),
    profile: ur(e.profile),
    artifactVerification: Object.freeze(e.artifactVerification.map((t) => kt({
      ...t
    }))),
    authorization: Object.freeze(e.authorization.map((t) => Object.freeze({
      ...kt(t),
      routeWitnessIds: Object.freeze([...t.routeWitnessIds])
    }))),
    support: Object.freeze(e.support.map((t) => Object.freeze({
      ...kt(t),
      witnessIds: Object.freeze([...t.witnessIds])
    }))),
    conformity: e.conformity.requested ? kt({ ...e.conformity }) : Object.freeze({ requested: !1, execution: "not_run" }),
    decision: e.decision,
    trace: Object.freeze((e.trace ?? []).map(Fd)),
    resources: Object.freeze((e.resources ?? []).map(Hd)),
    limitations: Object.freeze([...e.limitations ?? []])
  });
}
function ac(e, t) {
  if (e.length === 0)
    throw new TypeError(`${t} requires at least one semantic state.`);
  for (const n of e)
    if (!["established", "contradicted", "not_established"].includes(n))
      throw new TypeError(`${t} received unsupported semantic state: ${String(n)}.`);
}
function Le(e) {
  return ac(e, "semanticAnd"), e.includes("contradicted") ? "contradicted" : e.every((t) => t === "established") ? "established" : "not_established";
}
function oc(e) {
  return ac(e, "semanticOr"), e.includes("established") ? "established" : e.every((t) => t === "contradicted") ? "contradicted" : "not_established";
}
function Bd(e) {
  const t = Le(e);
  return t === "established" ? "accept" : t === "contradicted" ? "reject" : "not_established";
}
var _s = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Gi(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Jd(e) {
  if (Object.prototype.hasOwnProperty.call(e, "__esModule")) return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function i() {
      return this instanceof i ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(e).forEach(function(i) {
    var u = Object.getOwnPropertyDescriptor(e, i);
    Object.defineProperty(n, i, u.get ? u : {
      enumerable: !0,
      get: function() {
        return e[i];
      }
    });
  }), n;
}
var tn = { exports: {} }, Dr = {}, Ke = {}, dt = {}, kr = {}, Lr = {}, Mr = {}, Ss;
function lr() {
  return Ss || (Ss = 1, (function(e) {
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
        return (v = this._str) !== null && v !== void 0 ? v : this._str = this._items.reduce((h, c) => `${h}${c}`, "");
      }
      get names() {
        var v;
        return (v = this._names) !== null && v !== void 0 ? v : this._names = this._items.reduce((h, c) => (c instanceof n && (h[c.str] = (h[c.str] || 0) + 1), h), {});
      }
    }
    e._Code = i, e.nil = new i("");
    function u(S, ...v) {
      const h = [S[0]];
      let c = 0;
      for (; c < v.length; )
        a(h, v[c]), h.push(S[++c]);
      return new i(h);
    }
    e._ = u;
    const r = new i("+");
    function s(S, ...v) {
      const h = [m(S[0])];
      let c = 0;
      for (; c < v.length; )
        h.push(r), a(h, v[c]), h.push(r, m(S[++c]));
      return o(h), new i(h);
    }
    e.str = s;
    function a(S, v) {
      v instanceof i ? S.push(...v._items) : v instanceof n ? S.push(v) : S.push(g(v));
    }
    e.addCodeArg = a;
    function o(S) {
      let v = 1;
      for (; v < S.length - 1; ) {
        if (S[v] === r) {
          const h = l(S[v - 1], S[v + 1]);
          if (h !== void 0) {
            S.splice(v - 1, 3, h);
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
    function y(S, v) {
      return v.emptyStr() ? S : S.emptyStr() ? v : s`${S}${v}`;
    }
    e.strConcat = y;
    function g(S) {
      return typeof S == "number" || typeof S == "boolean" || S === null ? S : m(Array.isArray(S) ? S.join(",") : S);
    }
    function f(S) {
      return new i(m(S));
    }
    e.stringify = f;
    function m(S) {
      return JSON.stringify(S).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
    }
    e.safeStringify = m;
    function w(S) {
      return typeof S == "string" && e.IDENTIFIER.test(S) ? new i(`.${S}`) : u`[${S}]`;
    }
    e.getProperty = w;
    function _(S) {
      if (typeof S == "string" && e.IDENTIFIER.test(S))
        return new i(`${S}`);
      throw new Error(`CodeGen: invalid export name: ${S}, use explicit $id name mapping`);
    }
    e.getEsmExportName = _;
    function b(S) {
      return new i(S.toString());
    }
    e.regexpCode = b;
  })(Mr)), Mr;
}
var Cr = {}, Is;
function $s() {
  return Is || (Is = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ValueScope = e.ValueScopeName = e.Scope = e.varKinds = e.UsedValueState = void 0;
    const t = /* @__PURE__ */ lr();
    class n extends Error {
      constructor(l) {
        super(`CodeGen: "code" for ${l} not defined`), this.value = l.value;
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
    class u {
      constructor({ prefixes: l, parent: y } = {}) {
        this._names = {}, this._prefixes = l, this._parent = y;
      }
      toName(l) {
        return l instanceof t.Name ? l : this.name(l);
      }
      name(l) {
        return new t.Name(this._newName(l));
      }
      _newName(l) {
        const y = this._names[l] || this._nameGroup(l);
        return `${l}${y.index++}`;
      }
      _nameGroup(l) {
        var y, g;
        if (!((g = (y = this._parent) === null || y === void 0 ? void 0 : y._prefixes) === null || g === void 0) && g.has(l) || this._prefixes && !this._prefixes.has(l))
          throw new Error(`CodeGen: prefix "${l}" is not allowed in this scope`);
        return this._names[l] = { prefix: l, index: 0 };
      }
    }
    e.Scope = u;
    class r extends t.Name {
      constructor(l, y) {
        super(y), this.prefix = l;
      }
      setValue(l, { property: y, itemIndex: g }) {
        this.value = l, this.scopePath = (0, t._)`.${new t.Name(y)}[${g}]`;
      }
    }
    e.ValueScopeName = r;
    const s = (0, t._)`\n`;
    class a extends u {
      constructor(l) {
        super(l), this._values = {}, this._scope = l.scope, this.opts = { ...l, _n: l.lines ? s : t.nil };
      }
      get() {
        return this._scope;
      }
      name(l) {
        return new r(l, this._newName(l));
      }
      value(l, y) {
        var g;
        if (y.ref === void 0)
          throw new Error("CodeGen: ref must be passed in value");
        const f = this.toName(l), { prefix: m } = f, w = (g = y.key) !== null && g !== void 0 ? g : y.ref;
        let _ = this._values[m];
        if (_) {
          const v = _.get(w);
          if (v)
            return v;
        } else
          _ = this._values[m] = /* @__PURE__ */ new Map();
        _.set(w, f);
        const b = this._scope[m] || (this._scope[m] = []), S = b.length;
        return b[S] = y.ref, f.setValue(y, { property: m, itemIndex: S }), f;
      }
      getValue(l, y) {
        const g = this._values[l];
        if (g)
          return g.get(y);
      }
      scopeRefs(l, y = this._values) {
        return this._reduceValues(y, (g) => {
          if (g.scopePath === void 0)
            throw new Error(`CodeGen: name "${g}" has no value`);
          return (0, t._)`${l}${g.scopePath}`;
        });
      }
      scopeCode(l = this._values, y, g) {
        return this._reduceValues(l, (f) => {
          if (f.value === void 0)
            throw new Error(`CodeGen: name "${f}" has no value`);
          return f.value.code;
        }, y, g);
      }
      _reduceValues(l, y, g = {}, f) {
        let m = t.nil;
        for (const w in l) {
          const _ = l[w];
          if (!_)
            continue;
          const b = g[w] = g[w] || /* @__PURE__ */ new Map();
          _.forEach((S) => {
            if (b.has(S))
              return;
            b.set(S, i.Started);
            let v = y(S);
            if (v) {
              const h = this.opts.es5 ? e.varKinds.var : e.varKinds.const;
              m = (0, t._)`${m}${h} ${S} = ${v};${this.opts._n}`;
            } else if (v = f?.(S))
              m = (0, t._)`${m}${v}${this.opts._n}`;
            else
              throw new n(S);
            b.set(S, i.Completed);
          });
        }
        return m;
      }
    }
    e.ValueScope = a;
  })(Cr)), Cr;
}
var xs;
function ee() {
  return xs || (xs = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.or = e.and = e.not = e.CodeGen = e.operators = e.varKinds = e.ValueScopeName = e.ValueScope = e.Scope = e.Name = e.regexpCode = e.stringify = e.getProperty = e.nil = e.strConcat = e.str = e._ = void 0;
    const t = /* @__PURE__ */ lr(), n = /* @__PURE__ */ $s();
    var i = /* @__PURE__ */ lr();
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
    var u = /* @__PURE__ */ $s();
    Object.defineProperty(e, "Scope", { enumerable: !0, get: function() {
      return u.Scope;
    } }), Object.defineProperty(e, "ValueScope", { enumerable: !0, get: function() {
      return u.ValueScope;
    } }), Object.defineProperty(e, "ValueScopeName", { enumerable: !0, get: function() {
      return u.ValueScopeName;
    } }), Object.defineProperty(e, "varKinds", { enumerable: !0, get: function() {
      return u.varKinds;
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
      optimizeNames(R, x) {
        return this;
      }
    }
    class s extends r {
      constructor(R, x, A) {
        super(), this.varKind = R, this.name = x, this.rhs = A;
      }
      render({ es5: R, _n: x }) {
        const A = R ? n.varKinds.var : this.varKind, L = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
        return `${A} ${this.name}${L};` + x;
      }
      optimizeNames(R, x) {
        if (R[this.name.str])
          return this.rhs && (this.rhs = q(this.rhs, R, x)), this;
      }
      get names() {
        return this.rhs instanceof t._CodeOrName ? this.rhs.names : {};
      }
    }
    class a extends r {
      constructor(R, x, A) {
        super(), this.lhs = R, this.rhs = x, this.sideEffects = A;
      }
      render({ _n: R }) {
        return `${this.lhs} = ${this.rhs};` + R;
      }
      optimizeNames(R, x) {
        if (!(this.lhs instanceof t.Name && !R[this.lhs.str] && !this.sideEffects))
          return this.rhs = q(this.rhs, R, x), this;
      }
      get names() {
        const R = this.lhs instanceof t.Name ? {} : { ...this.lhs.names };
        return j(R, this.rhs);
      }
    }
    class o extends a {
      constructor(R, x, A, L) {
        super(R, A, L), this.op = x;
      }
      render({ _n: R }) {
        return `${this.lhs} ${this.op}= ${this.rhs};` + R;
      }
    }
    class l extends r {
      constructor(R) {
        super(), this.label = R, this.names = {};
      }
      render({ _n: R }) {
        return `${this.label}:` + R;
      }
    }
    class y extends r {
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
    class f extends r {
      constructor(R) {
        super(), this.code = R;
      }
      render({ _n: R }) {
        return `${this.code};` + R;
      }
      optimizeNodes() {
        return `${this.code}` ? this : void 0;
      }
      optimizeNames(R, x) {
        return this.code = q(this.code, R, x), this;
      }
      get names() {
        return this.code instanceof t._CodeOrName ? this.code.names : {};
      }
    }
    class m extends r {
      constructor(R = []) {
        super(), this.nodes = R;
      }
      render(R) {
        return this.nodes.reduce((x, A) => x + A.render(R), "");
      }
      optimizeNodes() {
        const { nodes: R } = this;
        let x = R.length;
        for (; x--; ) {
          const A = R[x].optimizeNodes();
          Array.isArray(A) ? R.splice(x, 1, ...A) : A ? R[x] = A : R.splice(x, 1);
        }
        return R.length > 0 ? this : void 0;
      }
      optimizeNames(R, x) {
        const { nodes: A } = this;
        let L = A.length;
        for (; L--; ) {
          const K = A[L];
          K.optimizeNames(R, x) || (B(R, K.names), A.splice(L, 1));
        }
        return A.length > 0 ? this : void 0;
      }
      get names() {
        return this.nodes.reduce((R, x) => M(R, x.names), {});
      }
    }
    class w extends m {
      render(R) {
        return "{" + R._n + super.render(R) + "}" + R._n;
      }
    }
    class _ extends m {
    }
    class b extends w {
    }
    b.kind = "else";
    class S extends w {
      constructor(R, x) {
        super(x), this.condition = R;
      }
      render(R) {
        let x = `if(${this.condition})` + super.render(R);
        return this.else && (x += "else " + this.else.render(R)), x;
      }
      optimizeNodes() {
        super.optimizeNodes();
        const R = this.condition;
        if (R === !0)
          return this.nodes;
        let x = this.else;
        if (x) {
          const A = x.optimizeNodes();
          x = this.else = Array.isArray(A) ? new b(A) : A;
        }
        if (x)
          return R === !1 ? x instanceof S ? x : x.nodes : this.nodes.length ? this : new S(N(R), x instanceof S ? [x] : x.nodes);
        if (!(R === !1 || !this.nodes.length))
          return this;
      }
      optimizeNames(R, x) {
        var A;
        if (this.else = (A = this.else) === null || A === void 0 ? void 0 : A.optimizeNames(R, x), !!(super.optimizeNames(R, x) || this.else))
          return this.condition = q(this.condition, R, x), this;
      }
      get names() {
        const R = super.names;
        return j(R, this.condition), this.else && M(R, this.else.names), R;
      }
    }
    S.kind = "if";
    class v extends w {
    }
    v.kind = "for";
    class h extends v {
      constructor(R) {
        super(), this.iteration = R;
      }
      render(R) {
        return `for(${this.iteration})` + super.render(R);
      }
      optimizeNames(R, x) {
        if (super.optimizeNames(R, x))
          return this.iteration = q(this.iteration, R, x), this;
      }
      get names() {
        return M(super.names, this.iteration.names);
      }
    }
    class c extends v {
      constructor(R, x, A, L) {
        super(), this.varKind = R, this.name = x, this.from = A, this.to = L;
      }
      render(R) {
        const x = R.es5 ? n.varKinds.var : this.varKind, { name: A, from: L, to: K } = this;
        return `for(${x} ${A}=${L}; ${A}<${K}; ${A}++)` + super.render(R);
      }
      get names() {
        const R = j(super.names, this.from);
        return j(R, this.to);
      }
    }
    class d extends v {
      constructor(R, x, A, L) {
        super(), this.loop = R, this.varKind = x, this.name = A, this.iterable = L;
      }
      render(R) {
        return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(R);
      }
      optimizeNames(R, x) {
        if (super.optimizeNames(R, x))
          return this.iterable = q(this.iterable, R, x), this;
      }
      get names() {
        return M(super.names, this.iterable.names);
      }
    }
    class p extends w {
      constructor(R, x, A) {
        super(), this.name = R, this.args = x, this.async = A;
      }
      render(R) {
        return `${this.async ? "async " : ""}function ${this.name}(${this.args})` + super.render(R);
      }
    }
    p.kind = "func";
    class I extends m {
      render(R) {
        return "return " + super.render(R);
      }
    }
    I.kind = "return";
    class $ extends w {
      render(R) {
        let x = "try" + super.render(R);
        return this.catch && (x += this.catch.render(R)), this.finally && (x += this.finally.render(R)), x;
      }
      optimizeNodes() {
        var R, x;
        return super.optimizeNodes(), (R = this.catch) === null || R === void 0 || R.optimizeNodes(), (x = this.finally) === null || x === void 0 || x.optimizeNodes(), this;
      }
      optimizeNames(R, x) {
        var A, L;
        return super.optimizeNames(R, x), (A = this.catch) === null || A === void 0 || A.optimizeNames(R, x), (L = this.finally) === null || L === void 0 || L.optimizeNames(R, x), this;
      }
      get names() {
        const R = super.names;
        return this.catch && M(R, this.catch.names), this.finally && M(R, this.finally.names), R;
      }
    }
    class E extends w {
      constructor(R) {
        super(), this.error = R;
      }
      render(R) {
        return `catch(${this.error})` + super.render(R);
      }
    }
    E.kind = "catch";
    class O extends w {
      render(R) {
        return "finally" + super.render(R);
      }
    }
    O.kind = "finally";
    class P {
      constructor(R, x = {}) {
        this._values = {}, this._blockStarts = [], this._constants = {}, this.opts = { ...x, _n: x.lines ? `
` : "" }, this._extScope = R, this._scope = new n.Scope({ parent: R }), this._nodes = [new _()];
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
      scopeValue(R, x) {
        const A = this._extScope.value(R, x);
        return (this._values[A.prefix] || (this._values[A.prefix] = /* @__PURE__ */ new Set())).add(A), A;
      }
      getScopeValue(R, x) {
        return this._extScope.getValue(R, x);
      }
      // return code that assigns values in the external scope to the names that are used internally
      // (same names that were returned by gen.scopeName or gen.scopeValue)
      scopeRefs(R) {
        return this._extScope.scopeRefs(R, this._values);
      }
      scopeCode() {
        return this._extScope.scopeCode(this._values);
      }
      _def(R, x, A, L) {
        const K = this._scope.toName(x);
        return A !== void 0 && L && (this._constants[K.str] = A), this._leafNode(new s(R, K, A)), K;
      }
      // `const` declaration (`var` in es5 mode)
      const(R, x, A) {
        return this._def(n.varKinds.const, R, x, A);
      }
      // `let` declaration with optional assignment (`var` in es5 mode)
      let(R, x, A) {
        return this._def(n.varKinds.let, R, x, A);
      }
      // `var` declaration with optional assignment
      var(R, x, A) {
        return this._def(n.varKinds.var, R, x, A);
      }
      // assignment code
      assign(R, x, A) {
        return this._leafNode(new a(R, x, A));
      }
      // `+=` code
      add(R, x) {
        return this._leafNode(new o(R, e.operators.ADD, x));
      }
      // appends passed SafeExpr to code or executes Block
      code(R) {
        return typeof R == "function" ? R() : R !== t.nil && this._leafNode(new f(R)), this;
      }
      // returns code for object literal for the passed argument list of key-value pairs
      object(...R) {
        const x = ["{"];
        for (const [A, L] of R)
          x.length > 1 && x.push(","), x.push(A), (A !== L || this.opts.es5) && (x.push(":"), (0, t.addCodeArg)(x, L));
        return x.push("}"), new t._Code(x);
      }
      // `if` clause (or statement if `thenBody` and, optionally, `elseBody` are passed)
      if(R, x, A) {
        if (this._blockNode(new S(R)), x && A)
          this.code(x).else().code(A).endIf();
        else if (x)
          this.code(x).endIf();
        else if (A)
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
      _for(R, x) {
        return this._blockNode(R), x && this.code(x).endFor(), this;
      }
      // a generic `for` clause (or statement if `forBody` is passed)
      for(R, x) {
        return this._for(new h(R), x);
      }
      // `for` statement for a range of values
      forRange(R, x, A, L, K = this.opts.es5 ? n.varKinds.var : n.varKinds.let) {
        const Q = this._scope.toName(R);
        return this._for(new c(K, Q, x, A), () => L(Q));
      }
      // `for-of` statement (in es5 mode replace with a normal for loop)
      forOf(R, x, A, L = n.varKinds.const) {
        const K = this._scope.toName(R);
        if (this.opts.es5) {
          const Q = x instanceof t.Name ? x : this.var("_arr", x);
          return this.forRange("_i", 0, (0, t._)`${Q}.length`, (G) => {
            this.var(K, (0, t._)`${Q}[${G}]`), A(K);
          });
        }
        return this._for(new d("of", L, K, x), () => A(K));
      }
      // `for-in` statement.
      // With option `ownProperties` replaced with a `for-of` loop for object keys
      forIn(R, x, A, L = this.opts.es5 ? n.varKinds.var : n.varKinds.const) {
        if (this.opts.ownProperties)
          return this.forOf(R, (0, t._)`Object.keys(${x})`, A);
        const K = this._scope.toName(R);
        return this._for(new d("in", L, K, x), () => A(K));
      }
      // end `for` loop
      endFor() {
        return this._endBlockNode(v);
      }
      // `label` statement
      label(R) {
        return this._leafNode(new l(R));
      }
      // `break` statement
      break(R) {
        return this._leafNode(new y(R));
      }
      // `return` statement
      return(R) {
        const x = new I();
        if (this._blockNode(x), this.code(R), x.nodes.length !== 1)
          throw new Error('CodeGen: "return" should have one node');
        return this._endBlockNode(I);
      }
      // `try` statement
      try(R, x, A) {
        if (!x && !A)
          throw new Error('CodeGen: "try" without "catch" and "finally"');
        const L = new $();
        if (this._blockNode(L), this.code(R), x) {
          const K = this.name("e");
          this._currNode = L.catch = new E(K), x(K);
        }
        return A && (this._currNode = L.finally = new O(), this.code(A)), this._endBlockNode(E, O);
      }
      // `throw` statement
      throw(R) {
        return this._leafNode(new g(R));
      }
      // start self-balancing block
      block(R, x) {
        return this._blockStarts.push(this._nodes.length), R && this.code(R).endBlock(x), this;
      }
      // end the current self-balancing block
      endBlock(R) {
        const x = this._blockStarts.pop();
        if (x === void 0)
          throw new Error("CodeGen: not in self-balancing block");
        const A = this._nodes.length - x;
        if (A < 0 || R !== void 0 && A !== R)
          throw new Error(`CodeGen: wrong number of nodes: ${A} vs ${R} expected`);
        return this._nodes.length = x, this;
      }
      // `function` heading (or definition if funcBody is passed)
      func(R, x = t.nil, A, L) {
        return this._blockNode(new p(R, x, A)), L && this.code(L).endFunc(), this;
      }
      // end function definition
      endFunc() {
        return this._endBlockNode(p);
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
      _endBlockNode(R, x) {
        const A = this._currNode;
        if (A instanceof R || x && A instanceof x)
          return this._nodes.pop(), this;
        throw new Error(`CodeGen: not in block "${x ? `${R.kind}/${x.kind}` : R.kind}"`);
      }
      _elseNode(R) {
        const x = this._currNode;
        if (!(x instanceof S))
          throw new Error('CodeGen: "else" without "if"');
        return this._currNode = x.else = R, this;
      }
      get _root() {
        return this._nodes[0];
      }
      get _currNode() {
        const R = this._nodes;
        return R[R.length - 1];
      }
      set _currNode(R) {
        const x = this._nodes;
        x[x.length - 1] = R;
      }
    }
    e.CodeGen = P;
    function M(k, R) {
      for (const x in R)
        k[x] = (k[x] || 0) + (R[x] || 0);
      return k;
    }
    function j(k, R) {
      return R instanceof t._CodeOrName ? M(k, R.names) : k;
    }
    function q(k, R, x) {
      if (k instanceof t.Name)
        return A(k);
      if (!L(k))
        return k;
      return new t._Code(k._items.reduce((K, Q) => (Q instanceof t.Name && (Q = A(Q)), Q instanceof t._Code ? K.push(...Q._items) : K.push(Q), K), []));
      function A(K) {
        const Q = x[K.str];
        return Q === void 0 || R[K.str] !== 1 ? K : (delete R[K.str], Q);
      }
      function L(K) {
        return K instanceof t._Code && K._items.some((Q) => Q instanceof t.Name && R[Q.str] === 1 && x[Q.str] !== void 0);
      }
    }
    function B(k, R) {
      for (const x in R)
        k[x] = (k[x] || 0) - (R[x] || 0);
    }
    function N(k) {
      return typeof k == "boolean" || typeof k == "number" || k === null ? !k : (0, t._)`!${U(k)}`;
    }
    e.not = N;
    const H = D(e.operators.AND);
    function F(...k) {
      return k.reduce(H);
    }
    e.and = F;
    const J = D(e.operators.OR);
    function T(...k) {
      return k.reduce(J);
    }
    e.or = T;
    function D(k) {
      return (R, x) => R === t.nil ? x : x === t.nil ? R : (0, t._)`${U(R)} ${k} ${U(x)}`;
    }
    function U(k) {
      return k instanceof t.Name ? k : (0, t._)`(${k})`;
    }
  })(Lr)), Lr;
}
var te = {}, Rs;
function ne() {
  if (Rs) return te;
  Rs = 1, Object.defineProperty(te, "__esModule", { value: !0 }), te.checkStrictMode = te.getErrorPath = te.Type = te.useFunc = te.setEvaluated = te.evaluatedPropsToName = te.mergeEvaluated = te.eachItem = te.unescapeJsonPointer = te.escapeJsonPointer = te.escapeFragment = te.unescapeFragment = te.schemaRefOrVal = te.schemaHasRulesButRef = te.schemaHasRules = te.checkUnknownRules = te.alwaysValidSchema = te.toHash = void 0;
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ lr();
  function n(d) {
    const p = {};
    for (const I of d)
      p[I] = !0;
    return p;
  }
  te.toHash = n;
  function i(d, p) {
    return typeof p == "boolean" ? p : Object.keys(p).length === 0 ? !0 : (u(d, p), !r(p, d.self.RULES.all));
  }
  te.alwaysValidSchema = i;
  function u(d, p = d.schema) {
    const { opts: I, self: $ } = d;
    if (!I.strictSchema || typeof p == "boolean")
      return;
    const E = $.RULES.keywords;
    for (const O in p)
      E[O] || c(d, `unknown keyword: "${O}"`);
  }
  te.checkUnknownRules = u;
  function r(d, p) {
    if (typeof d == "boolean")
      return !d;
    for (const I in d)
      if (p[I])
        return !0;
    return !1;
  }
  te.schemaHasRules = r;
  function s(d, p) {
    if (typeof d == "boolean")
      return !d;
    for (const I in d)
      if (I !== "$ref" && p.all[I])
        return !0;
    return !1;
  }
  te.schemaHasRulesButRef = s;
  function a({ topSchemaRef: d, schemaPath: p }, I, $, E) {
    if (!E) {
      if (typeof I == "number" || typeof I == "boolean")
        return I;
      if (typeof I == "string")
        return (0, e._)`${I}`;
    }
    return (0, e._)`${d}${p}${(0, e.getProperty)($)}`;
  }
  te.schemaRefOrVal = a;
  function o(d) {
    return g(decodeURIComponent(d));
  }
  te.unescapeFragment = o;
  function l(d) {
    return encodeURIComponent(y(d));
  }
  te.escapeFragment = l;
  function y(d) {
    return typeof d == "number" ? `${d}` : d.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  te.escapeJsonPointer = y;
  function g(d) {
    return d.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  te.unescapeJsonPointer = g;
  function f(d, p) {
    if (Array.isArray(d))
      for (const I of d)
        p(I);
    else
      p(d);
  }
  te.eachItem = f;
  function m({ mergeNames: d, mergeToName: p, mergeValues: I, resultToName: $ }) {
    return (E, O, P, M) => {
      const j = P === void 0 ? O : P instanceof e.Name ? (O instanceof e.Name ? d(E, O, P) : p(E, O, P), P) : O instanceof e.Name ? (p(E, P, O), O) : I(O, P);
      return M === e.Name && !(j instanceof e.Name) ? $(E, j) : j;
    };
  }
  te.mergeEvaluated = {
    props: m({
      mergeNames: (d, p, I) => d.if((0, e._)`${I} !== true && ${p} !== undefined`, () => {
        d.if((0, e._)`${p} === true`, () => d.assign(I, !0), () => d.assign(I, (0, e._)`${I} || {}`).code((0, e._)`Object.assign(${I}, ${p})`));
      }),
      mergeToName: (d, p, I) => d.if((0, e._)`${I} !== true`, () => {
        p === !0 ? d.assign(I, !0) : (d.assign(I, (0, e._)`${I} || {}`), _(d, I, p));
      }),
      mergeValues: (d, p) => d === !0 ? !0 : { ...d, ...p },
      resultToName: w
    }),
    items: m({
      mergeNames: (d, p, I) => d.if((0, e._)`${I} !== true && ${p} !== undefined`, () => d.assign(I, (0, e._)`${p} === true ? true : ${I} > ${p} ? ${I} : ${p}`)),
      mergeToName: (d, p, I) => d.if((0, e._)`${I} !== true`, () => d.assign(I, p === !0 ? !0 : (0, e._)`${I} > ${p} ? ${I} : ${p}`)),
      mergeValues: (d, p) => d === !0 ? !0 : Math.max(d, p),
      resultToName: (d, p) => d.var("items", p)
    })
  };
  function w(d, p) {
    if (p === !0)
      return d.var("props", !0);
    const I = d.var("props", (0, e._)`{}`);
    return p !== void 0 && _(d, I, p), I;
  }
  te.evaluatedPropsToName = w;
  function _(d, p, I) {
    Object.keys(I).forEach(($) => d.assign((0, e._)`${p}${(0, e.getProperty)($)}`, !0));
  }
  te.setEvaluated = _;
  const b = {};
  function S(d, p) {
    return d.scopeValue("func", {
      ref: p,
      code: b[p.code] || (b[p.code] = new t._Code(p.code))
    });
  }
  te.useFunc = S;
  var v;
  (function(d) {
    d[d.Num = 0] = "Num", d[d.Str = 1] = "Str";
  })(v || (te.Type = v = {}));
  function h(d, p, I) {
    if (d instanceof e.Name) {
      const $ = p === v.Num;
      return I ? $ ? (0, e._)`"[" + ${d} + "]"` : (0, e._)`"['" + ${d} + "']"` : $ ? (0, e._)`"/" + ${d}` : (0, e._)`"/" + ${d}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
    }
    return I ? (0, e.getProperty)(d).toString() : "/" + y(d);
  }
  te.getErrorPath = h;
  function c(d, p, I = d.opts.strictSchema) {
    if (I) {
      if (p = `strict mode: ${p}`, I === !0)
        throw new Error(p);
      d.self.logger.warn(p);
    }
  }
  return te.checkStrictMode = c, te;
}
var nn = {}, Es;
function Me() {
  if (Es) return nn;
  Es = 1, Object.defineProperty(nn, "__esModule", { value: !0 });
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
  return nn.default = t, nn;
}
var js;
function br() {
  return js || (js = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.extendErrors = e.resetErrorsCount = e.reportExtraError = e.reportError = e.keyword$DataError = e.keywordError = void 0;
    const t = /* @__PURE__ */ ee(), n = /* @__PURE__ */ ne(), i = /* @__PURE__ */ Me();
    e.keywordError = {
      message: ({ keyword: b }) => (0, t.str)`must pass "${b}" keyword validation`
    }, e.keyword$DataError = {
      message: ({ keyword: b, schemaType: S }) => S ? (0, t.str)`"${b}" keyword must be ${S} ($data)` : (0, t.str)`"${b}" keyword is invalid ($data)`
    };
    function u(b, S = e.keywordError, v, h) {
      const { it: c } = b, { gen: d, compositeRule: p, allErrors: I } = c, $ = g(b, S, v);
      h ?? (p || I) ? o(d, $) : l(c, (0, t._)`[${$}]`);
    }
    e.reportError = u;
    function r(b, S = e.keywordError, v) {
      const { it: h } = b, { gen: c, compositeRule: d, allErrors: p } = h, I = g(b, S, v);
      o(c, I), d || p || l(h, i.default.vErrors);
    }
    e.reportExtraError = r;
    function s(b, S) {
      b.assign(i.default.errors, S), b.if((0, t._)`${i.default.vErrors} !== null`, () => b.if(S, () => b.assign((0, t._)`${i.default.vErrors}.length`, S), () => b.assign(i.default.vErrors, null)));
    }
    e.resetErrorsCount = s;
    function a({ gen: b, keyword: S, schemaValue: v, data: h, errsCount: c, it: d }) {
      if (c === void 0)
        throw new Error("ajv implementation error");
      const p = b.name("err");
      b.forRange("i", c, i.default.errors, (I) => {
        b.const(p, (0, t._)`${i.default.vErrors}[${I}]`), b.if((0, t._)`${p}.instancePath === undefined`, () => b.assign((0, t._)`${p}.instancePath`, (0, t.strConcat)(i.default.instancePath, d.errorPath))), b.assign((0, t._)`${p}.schemaPath`, (0, t.str)`${d.errSchemaPath}/${S}`), d.opts.verbose && (b.assign((0, t._)`${p}.schema`, v), b.assign((0, t._)`${p}.data`, h));
      });
    }
    e.extendErrors = a;
    function o(b, S) {
      const v = b.const("err", S);
      b.if((0, t._)`${i.default.vErrors} === null`, () => b.assign(i.default.vErrors, (0, t._)`[${v}]`), (0, t._)`${i.default.vErrors}.push(${v})`), b.code((0, t._)`${i.default.errors}++`);
    }
    function l(b, S) {
      const { gen: v, validateName: h, schemaEnv: c } = b;
      c.$async ? v.throw((0, t._)`new ${b.ValidationError}(${S})`) : (v.assign((0, t._)`${h}.errors`, S), v.return(!1));
    }
    const y = {
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
      const { createErrors: h } = b.it;
      return h === !1 ? (0, t._)`{}` : f(b, S, v);
    }
    function f(b, S, v = {}) {
      const { gen: h, it: c } = b, d = [
        m(c, v),
        w(b, v)
      ];
      return _(b, S, d), h.object(...d);
    }
    function m({ errorPath: b }, { instancePath: S }) {
      const v = S ? (0, t.str)`${b}${(0, n.getErrorPath)(S, n.Type.Str)}` : b;
      return [i.default.instancePath, (0, t.strConcat)(i.default.instancePath, v)];
    }
    function w({ keyword: b, it: { errSchemaPath: S } }, { schemaPath: v, parentSchema: h }) {
      let c = h ? S : (0, t.str)`${S}/${b}`;
      return v && (c = (0, t.str)`${c}${(0, n.getErrorPath)(v, n.Type.Str)}`), [y.schemaPath, c];
    }
    function _(b, { params: S, message: v }, h) {
      const { keyword: c, data: d, schemaValue: p, it: I } = b, { opts: $, propertyName: E, topSchemaRef: O, schemaPath: P } = I;
      h.push([y.keyword, c], [y.params, typeof S == "function" ? S(b) : S || (0, t._)`{}`]), $.messages && h.push([y.message, typeof v == "function" ? v(b) : v]), $.verbose && h.push([y.schema, p], [y.parentSchema, (0, t._)`${O}${P}`], [i.default.data, d]), E && h.push([y.propertyName, E]);
    }
  })(kr)), kr;
}
var As;
function Kd() {
  if (As) return dt;
  As = 1, Object.defineProperty(dt, "__esModule", { value: !0 }), dt.boolOrEmptySchema = dt.topBoolOrEmptySchema = void 0;
  const e = /* @__PURE__ */ br(), t = /* @__PURE__ */ ee(), n = /* @__PURE__ */ Me(), i = {
    message: "boolean schema is false"
  };
  function u(a) {
    const { gen: o, schema: l, validateName: y } = a;
    l === !1 ? s(a, !1) : typeof l == "object" && l.$async === !0 ? o.return(n.default.data) : (o.assign((0, t._)`${y}.errors`, null), o.return(!0));
  }
  dt.topBoolOrEmptySchema = u;
  function r(a, o) {
    const { gen: l, schema: y } = a;
    y === !1 ? (l.var(o, !1), s(a)) : l.var(o, !0);
  }
  dt.boolOrEmptySchema = r;
  function s(a, o) {
    const { gen: l, data: y } = a, g = {
      gen: l,
      keyword: "false schema",
      data: y,
      schema: !1,
      schemaCode: !1,
      schemaValue: !1,
      params: {},
      it: a
    };
    (0, e.reportError)(g, i, void 0, o);
  }
  return dt;
}
var pe = {}, ut = {}, Os;
function cc() {
  if (Os) return ut;
  Os = 1, Object.defineProperty(ut, "__esModule", { value: !0 }), ut.getRules = ut.isJSONType = void 0;
  const e = ["string", "number", "integer", "boolean", "null", "object", "array"], t = new Set(e);
  function n(u) {
    return typeof u == "string" && t.has(u);
  }
  ut.isJSONType = n;
  function i() {
    const u = {
      number: { type: "number", rules: [] },
      string: { type: "string", rules: [] },
      array: { type: "array", rules: [] },
      object: { type: "object", rules: [] }
    };
    return {
      types: { ...u, integer: !0, boolean: !0, null: !0 },
      rules: [{ rules: [] }, u.number, u.string, u.array, u.object],
      post: { rules: [] },
      all: {},
      keywords: {}
    };
  }
  return ut.getRules = i, ut;
}
var Ge = {}, qs;
function dc() {
  if (qs) return Ge;
  qs = 1, Object.defineProperty(Ge, "__esModule", { value: !0 }), Ge.shouldUseRule = Ge.shouldUseGroup = Ge.schemaHasRulesForType = void 0;
  function e({ schema: i, self: u }, r) {
    const s = u.RULES.types[r];
    return s && s !== !0 && t(i, s);
  }
  Ge.schemaHasRulesForType = e;
  function t(i, u) {
    return u.rules.some((r) => n(i, r));
  }
  Ge.shouldUseGroup = t;
  function n(i, u) {
    var r;
    return i[u.keyword] !== void 0 || ((r = u.definition.implements) === null || r === void 0 ? void 0 : r.some((s) => i[s] !== void 0));
  }
  return Ge.shouldUseRule = n, Ge;
}
var Ns;
function fr() {
  if (Ns) return pe;
  Ns = 1, Object.defineProperty(pe, "__esModule", { value: !0 }), pe.reportTypeError = pe.checkDataTypes = pe.checkDataType = pe.coerceAndCheckDataType = pe.getJSONTypes = pe.getSchemaTypes = pe.DataType = void 0;
  const e = /* @__PURE__ */ cc(), t = /* @__PURE__ */ dc(), n = /* @__PURE__ */ br(), i = /* @__PURE__ */ ee(), u = /* @__PURE__ */ ne();
  var r;
  (function(v) {
    v[v.Correct = 0] = "Correct", v[v.Wrong = 1] = "Wrong";
  })(r || (pe.DataType = r = {}));
  function s(v) {
    const h = a(v.type);
    if (h.includes("null")) {
      if (v.nullable === !1)
        throw new Error("type: null contradicts nullable: false");
    } else {
      if (!h.length && v.nullable !== void 0)
        throw new Error('"nullable" cannot be used without "type"');
      v.nullable === !0 && h.push("null");
    }
    return h;
  }
  pe.getSchemaTypes = s;
  function a(v) {
    const h = Array.isArray(v) ? v : v ? [v] : [];
    if (h.every(e.isJSONType))
      return h;
    throw new Error("type must be JSONType or JSONType[]: " + h.join(","));
  }
  pe.getJSONTypes = a;
  function o(v, h) {
    const { gen: c, data: d, opts: p } = v, I = y(h, p.coerceTypes), $ = h.length > 0 && !(I.length === 0 && h.length === 1 && (0, t.schemaHasRulesForType)(v, h[0]));
    if ($) {
      const E = w(h, d, p.strictNumbers, r.Wrong);
      c.if(E, () => {
        I.length ? g(v, h, I) : b(v);
      });
    }
    return $;
  }
  pe.coerceAndCheckDataType = o;
  const l = /* @__PURE__ */ new Set(["string", "number", "integer", "boolean", "null"]);
  function y(v, h) {
    return h ? v.filter((c) => l.has(c) || h === "array" && c === "array") : [];
  }
  function g(v, h, c) {
    const { gen: d, data: p, opts: I } = v, $ = d.let("dataType", (0, i._)`typeof ${p}`), E = d.let("coerced", (0, i._)`undefined`);
    I.coerceTypes === "array" && d.if((0, i._)`${$} == 'object' && Array.isArray(${p}) && ${p}.length == 1`, () => d.assign(p, (0, i._)`${p}[0]`).assign($, (0, i._)`typeof ${p}`).if(w(h, p, I.strictNumbers), () => d.assign(E, p))), d.if((0, i._)`${E} !== undefined`);
    for (const P of c)
      (l.has(P) || P === "array" && I.coerceTypes === "array") && O(P);
    d.else(), b(v), d.endIf(), d.if((0, i._)`${E} !== undefined`, () => {
      d.assign(p, E), f(v, E);
    });
    function O(P) {
      switch (P) {
        case "string":
          d.elseIf((0, i._)`${$} == "number" || ${$} == "boolean"`).assign(E, (0, i._)`"" + ${p}`).elseIf((0, i._)`${p} === null`).assign(E, (0, i._)`""`);
          return;
        case "number":
          d.elseIf((0, i._)`${$} == "boolean" || ${p} === null
              || (${$} == "string" && ${p} && ${p} == +${p})`).assign(E, (0, i._)`+${p}`);
          return;
        case "integer":
          d.elseIf((0, i._)`${$} === "boolean" || ${p} === null
              || (${$} === "string" && ${p} && ${p} == +${p} && !(${p} % 1))`).assign(E, (0, i._)`+${p}`);
          return;
        case "boolean":
          d.elseIf((0, i._)`${p} === "false" || ${p} === 0 || ${p} === null`).assign(E, !1).elseIf((0, i._)`${p} === "true" || ${p} === 1`).assign(E, !0);
          return;
        case "null":
          d.elseIf((0, i._)`${p} === "" || ${p} === 0 || ${p} === false`), d.assign(E, null);
          return;
        case "array":
          d.elseIf((0, i._)`${$} === "string" || ${$} === "number"
              || ${$} === "boolean" || ${p} === null`).assign(E, (0, i._)`[${p}]`);
      }
    }
  }
  function f({ gen: v, parentData: h, parentDataProperty: c }, d) {
    v.if((0, i._)`${h} !== undefined`, () => v.assign((0, i._)`${h}[${c}]`, d));
  }
  function m(v, h, c, d = r.Correct) {
    const p = d === r.Correct ? i.operators.EQ : i.operators.NEQ;
    let I;
    switch (v) {
      case "null":
        return (0, i._)`${h} ${p} null`;
      case "array":
        I = (0, i._)`Array.isArray(${h})`;
        break;
      case "object":
        I = (0, i._)`${h} && typeof ${h} == "object" && !Array.isArray(${h})`;
        break;
      case "integer":
        I = $((0, i._)`!(${h} % 1) && !isNaN(${h})`);
        break;
      case "number":
        I = $();
        break;
      default:
        return (0, i._)`typeof ${h} ${p} ${v}`;
    }
    return d === r.Correct ? I : (0, i.not)(I);
    function $(E = i.nil) {
      return (0, i.and)((0, i._)`typeof ${h} == "number"`, E, c ? (0, i._)`isFinite(${h})` : i.nil);
    }
  }
  pe.checkDataType = m;
  function w(v, h, c, d) {
    if (v.length === 1)
      return m(v[0], h, c, d);
    let p;
    const I = (0, u.toHash)(v);
    if (I.array && I.object) {
      const $ = (0, i._)`typeof ${h} != "object"`;
      p = I.null ? $ : (0, i._)`!${h} || ${$}`, delete I.null, delete I.array, delete I.object;
    } else
      p = i.nil;
    I.number && delete I.integer;
    for (const $ in I)
      p = (0, i.and)(p, m($, h, c, d));
    return p;
  }
  pe.checkDataTypes = w;
  const _ = {
    message: ({ schema: v }) => `must be ${v}`,
    params: ({ schema: v, schemaValue: h }) => typeof v == "string" ? (0, i._)`{type: ${v}}` : (0, i._)`{type: ${h}}`
  };
  function b(v) {
    const h = S(v);
    (0, n.reportError)(h, _);
  }
  pe.reportTypeError = b;
  function S(v) {
    const { gen: h, data: c, schema: d } = v, p = (0, u.schemaRefOrVal)(v, d, "type");
    return {
      gen: h,
      keyword: "type",
      data: c,
      schema: d.type,
      schemaCode: p,
      schemaValue: p,
      parentSchema: d,
      params: {},
      it: v
    };
  }
  return pe;
}
var Tt = {}, Ts;
function Gd() {
  if (Ts) return Tt;
  Ts = 1, Object.defineProperty(Tt, "__esModule", { value: !0 }), Tt.assignDefaults = void 0;
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ ne();
  function n(u, r) {
    const { properties: s, items: a } = u.schema;
    if (r === "object" && s)
      for (const o in s)
        i(u, o, s[o].default);
    else r === "array" && Array.isArray(a) && a.forEach((o, l) => i(u, l, o.default));
  }
  Tt.assignDefaults = n;
  function i(u, r, s) {
    const { gen: a, compositeRule: o, data: l, opts: y } = u;
    if (s === void 0)
      return;
    const g = (0, e._)`${l}${(0, e.getProperty)(r)}`;
    if (o) {
      (0, t.checkStrictMode)(u, `default is ignored for: ${g}`);
      return;
    }
    let f = (0, e._)`${g} === undefined`;
    y.useDefaults === "empty" && (f = (0, e._)`${f} || ${g} === null || ${g} === ""`), a.if(f, (0, e._)`${g} = ${(0, e.stringify)(s)}`);
  }
  return Tt;
}
var Te = {}, ie = {}, Ps;
function Ce() {
  if (Ps) return ie;
  Ps = 1, Object.defineProperty(ie, "__esModule", { value: !0 }), ie.validateUnion = ie.validateArray = ie.usePattern = ie.callValidateCode = ie.schemaProperties = ie.allSchemaProperties = ie.noPropertyInData = ie.propertyInData = ie.isOwnProperty = ie.hasPropFunc = ie.reportMissingProp = ie.checkMissingProp = ie.checkReportMissingProp = void 0;
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ ne(), n = /* @__PURE__ */ Me(), i = /* @__PURE__ */ ne();
  function u(v, h) {
    const { gen: c, data: d, it: p } = v;
    c.if(y(c, d, h, p.opts.ownProperties), () => {
      v.setParams({ missingProperty: (0, e._)`${h}` }, !0), v.error();
    });
  }
  ie.checkReportMissingProp = u;
  function r({ gen: v, data: h, it: { opts: c } }, d, p) {
    return (0, e.or)(...d.map((I) => (0, e.and)(y(v, h, I, c.ownProperties), (0, e._)`${p} = ${I}`)));
  }
  ie.checkMissingProp = r;
  function s(v, h) {
    v.setParams({ missingProperty: h }, !0), v.error();
  }
  ie.reportMissingProp = s;
  function a(v) {
    return v.scopeValue("func", {
      // eslint-disable-next-line @typescript-eslint/unbound-method
      ref: Object.prototype.hasOwnProperty,
      code: (0, e._)`Object.prototype.hasOwnProperty`
    });
  }
  ie.hasPropFunc = a;
  function o(v, h, c) {
    return (0, e._)`${a(v)}.call(${h}, ${c})`;
  }
  ie.isOwnProperty = o;
  function l(v, h, c, d) {
    const p = (0, e._)`${h}${(0, e.getProperty)(c)} !== undefined`;
    return d ? (0, e._)`${p} && ${o(v, h, c)}` : p;
  }
  ie.propertyInData = l;
  function y(v, h, c, d) {
    const p = (0, e._)`${h}${(0, e.getProperty)(c)} === undefined`;
    return d ? (0, e.or)(p, (0, e.not)(o(v, h, c))) : p;
  }
  ie.noPropertyInData = y;
  function g(v) {
    return v ? Object.keys(v).filter((h) => h !== "__proto__") : [];
  }
  ie.allSchemaProperties = g;
  function f(v, h) {
    return g(h).filter((c) => !(0, t.alwaysValidSchema)(v, h[c]));
  }
  ie.schemaProperties = f;
  function m({ schemaCode: v, data: h, it: { gen: c, topSchemaRef: d, schemaPath: p, errorPath: I }, it: $ }, E, O, P) {
    const M = P ? (0, e._)`${v}, ${h}, ${d}${p}` : h, j = [
      [n.default.instancePath, (0, e.strConcat)(n.default.instancePath, I)],
      [n.default.parentData, $.parentData],
      [n.default.parentDataProperty, $.parentDataProperty],
      [n.default.rootData, n.default.rootData]
    ];
    $.opts.dynamicRef && j.push([n.default.dynamicAnchors, n.default.dynamicAnchors]);
    const q = (0, e._)`${M}, ${c.object(...j)}`;
    return O !== e.nil ? (0, e._)`${E}.call(${O}, ${q})` : (0, e._)`${E}(${q})`;
  }
  ie.callValidateCode = m;
  const w = (0, e._)`new RegExp`;
  function _({ gen: v, it: { opts: h } }, c) {
    const d = h.unicodeRegExp ? "u" : "", { regExp: p } = h.code, I = p(c, d);
    return v.scopeValue("pattern", {
      key: I.toString(),
      ref: I,
      code: (0, e._)`${p.code === "new RegExp" ? w : (0, i.useFunc)(v, p)}(${c}, ${d})`
    });
  }
  ie.usePattern = _;
  function b(v) {
    const { gen: h, data: c, keyword: d, it: p } = v, I = h.name("valid");
    if (p.allErrors) {
      const E = h.let("valid", !0);
      return $(() => h.assign(E, !1)), E;
    }
    return h.var(I, !0), $(() => h.break()), I;
    function $(E) {
      const O = h.const("len", (0, e._)`${c}.length`);
      h.forRange("i", 0, O, (P) => {
        v.subschema({
          keyword: d,
          dataProp: P,
          dataPropType: t.Type.Num
        }, I), h.if((0, e.not)(I), E);
      });
    }
  }
  ie.validateArray = b;
  function S(v) {
    const { gen: h, schema: c, keyword: d, it: p } = v;
    if (!Array.isArray(c))
      throw new Error("ajv implementation error");
    if (c.some((O) => (0, t.alwaysValidSchema)(p, O)) && !p.opts.unevaluated)
      return;
    const $ = h.let("valid", !1), E = h.name("_valid");
    h.block(() => c.forEach((O, P) => {
      const M = v.subschema({
        keyword: d,
        schemaProp: P,
        compositeRule: !0
      }, E);
      h.assign($, (0, e._)`${$} || ${E}`), v.mergeValidEvaluated(M, E) || h.if((0, e.not)($));
    })), v.result($, () => v.reset(), () => v.error(!0));
  }
  return ie.validateUnion = S, ie;
}
var Ds;
function Zd() {
  if (Ds) return Te;
  Ds = 1, Object.defineProperty(Te, "__esModule", { value: !0 }), Te.validateKeywordUsage = Te.validSchemaType = Te.funcKeywordCode = Te.macroKeywordCode = void 0;
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ Me(), n = /* @__PURE__ */ Ce(), i = /* @__PURE__ */ br();
  function u(f, m) {
    const { gen: w, keyword: _, schema: b, parentSchema: S, it: v } = f, h = m.macro.call(v.self, b, S, v), c = l(w, _, h);
    v.opts.validateSchema !== !1 && v.self.validateSchema(h, !0);
    const d = w.name("valid");
    f.subschema({
      schema: h,
      schemaPath: e.nil,
      errSchemaPath: `${v.errSchemaPath}/${_}`,
      topSchemaRef: c,
      compositeRule: !0
    }, d), f.pass(d, () => f.error(!0));
  }
  Te.macroKeywordCode = u;
  function r(f, m) {
    var w;
    const { gen: _, keyword: b, schema: S, parentSchema: v, $data: h, it: c } = f;
    o(c, m);
    const d = !h && m.compile ? m.compile.call(c.self, S, v, c) : m.validate, p = l(_, b, d), I = _.let("valid");
    f.block$data(I, $), f.ok((w = m.valid) !== null && w !== void 0 ? w : I);
    function $() {
      if (m.errors === !1)
        P(), m.modifying && s(f), M(() => f.error());
      else {
        const j = m.async ? E() : O();
        m.modifying && s(f), M(() => a(f, j));
      }
    }
    function E() {
      const j = _.let("ruleErrs", null);
      return _.try(() => P((0, e._)`await `), (q) => _.assign(I, !1).if((0, e._)`${q} instanceof ${c.ValidationError}`, () => _.assign(j, (0, e._)`${q}.errors`), () => _.throw(q))), j;
    }
    function O() {
      const j = (0, e._)`${p}.errors`;
      return _.assign(j, null), P(e.nil), j;
    }
    function P(j = m.async ? (0, e._)`await ` : e.nil) {
      const q = c.opts.passContext ? t.default.this : t.default.self, B = !("compile" in m && !h || m.schema === !1);
      _.assign(I, (0, e._)`${j}${(0, n.callValidateCode)(f, p, q, B)}`, m.modifying);
    }
    function M(j) {
      var q;
      _.if((0, e.not)((q = m.valid) !== null && q !== void 0 ? q : I), j);
    }
  }
  Te.funcKeywordCode = r;
  function s(f) {
    const { gen: m, data: w, it: _ } = f;
    m.if(_.parentData, () => m.assign(w, (0, e._)`${_.parentData}[${_.parentDataProperty}]`));
  }
  function a(f, m) {
    const { gen: w } = f;
    w.if((0, e._)`Array.isArray(${m})`, () => {
      w.assign(t.default.vErrors, (0, e._)`${t.default.vErrors} === null ? ${m} : ${t.default.vErrors}.concat(${m})`).assign(t.default.errors, (0, e._)`${t.default.vErrors}.length`), (0, i.extendErrors)(f);
    }, () => f.error());
  }
  function o({ schemaEnv: f }, m) {
    if (m.async && !f.$async)
      throw new Error("async keyword in sync schema");
  }
  function l(f, m, w) {
    if (w === void 0)
      throw new Error(`keyword "${m}" failed to compile`);
    return f.scopeValue("keyword", typeof w == "function" ? { ref: w } : { ref: w, code: (0, e.stringify)(w) });
  }
  function y(f, m, w = !1) {
    return !m.length || m.some((_) => _ === "array" ? Array.isArray(f) : _ === "object" ? f && typeof f == "object" && !Array.isArray(f) : typeof f == _ || w && typeof f > "u");
  }
  Te.validSchemaType = y;
  function g({ schema: f, opts: m, self: w, errSchemaPath: _ }, b, S) {
    if (Array.isArray(b.keyword) ? !b.keyword.includes(S) : b.keyword !== S)
      throw new Error("ajv implementation error");
    const v = b.dependencies;
    if (v?.some((h) => !Object.prototype.hasOwnProperty.call(f, h)))
      throw new Error(`parent schema must have dependencies of ${S}: ${v.join(",")}`);
    if (b.validateSchema && !b.validateSchema(f[S])) {
      const c = `keyword "${S}" value is invalid at path "${_}": ` + w.errorsText(b.validateSchema.errors);
      if (m.validateSchema === "log")
        w.logger.error(c);
      else
        throw new Error(c);
    }
  }
  return Te.validateKeywordUsage = g, Te;
}
var Ze = {}, ks;
function Qd() {
  if (ks) return Ze;
  ks = 1, Object.defineProperty(Ze, "__esModule", { value: !0 }), Ze.extendSubschemaMode = Ze.extendSubschemaData = Ze.getSubschema = void 0;
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ ne();
  function n(r, { keyword: s, schemaProp: a, schema: o, schemaPath: l, errSchemaPath: y, topSchemaRef: g }) {
    if (s !== void 0 && o !== void 0)
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
    if (o !== void 0) {
      if (l === void 0 || y === void 0 || g === void 0)
        throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');
      return {
        schema: o,
        schemaPath: l,
        topSchemaRef: g,
        errSchemaPath: y
      };
    }
    throw new Error('either "keyword" or "schema" must be passed');
  }
  Ze.getSubschema = n;
  function i(r, s, { dataProp: a, dataPropType: o, data: l, dataTypes: y, propertyName: g }) {
    if (l !== void 0 && a !== void 0)
      throw new Error('both "data" and "dataProp" passed, only one allowed');
    const { gen: f } = s;
    if (a !== void 0) {
      const { errorPath: w, dataPathArr: _, opts: b } = s, S = f.let("data", (0, e._)`${s.data}${(0, e.getProperty)(a)}`, !0);
      m(S), r.errorPath = (0, e.str)`${w}${(0, t.getErrorPath)(a, o, b.jsPropertySyntax)}`, r.parentDataProperty = (0, e._)`${a}`, r.dataPathArr = [..._, r.parentDataProperty];
    }
    if (l !== void 0) {
      const w = l instanceof e.Name ? l : f.let("data", l, !0);
      m(w), g !== void 0 && (r.propertyName = g);
    }
    y && (r.dataTypes = y);
    function m(w) {
      r.data = w, r.dataLevel = s.dataLevel + 1, r.dataTypes = [], s.definedProperties = /* @__PURE__ */ new Set(), r.parentData = s.data, r.dataNames = [...s.dataNames, w];
    }
  }
  Ze.extendSubschemaData = i;
  function u(r, { jtdDiscriminator: s, jtdMetadata: a, compositeRule: o, createErrors: l, allErrors: y }) {
    o !== void 0 && (r.compositeRule = o), l !== void 0 && (r.createErrors = l), y !== void 0 && (r.allErrors = y), r.jtdDiscriminator = s, r.jtdMetadata = a;
  }
  return Ze.extendSubschemaMode = u, Ze;
}
var be = {}, Ur, Ls;
function uc() {
  return Ls || (Ls = 1, Ur = function e(t, n) {
    if (t === n) return !0;
    if (t && n && typeof t == "object" && typeof n == "object") {
      if (t.constructor !== n.constructor) return !1;
      var i, u, r;
      if (Array.isArray(t)) {
        if (i = t.length, i != n.length) return !1;
        for (u = i; u-- !== 0; )
          if (!e(t[u], n[u])) return !1;
        return !0;
      }
      if (t.constructor === RegExp) return t.source === n.source && t.flags === n.flags;
      if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === n.valueOf();
      if (t.toString !== Object.prototype.toString) return t.toString() === n.toString();
      if (r = Object.keys(t), i = r.length, i !== Object.keys(n).length) return !1;
      for (u = i; u-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(n, r[u])) return !1;
      for (u = i; u-- !== 0; ) {
        var s = r[u];
        if (!e(t[s], n[s])) return !1;
      }
      return !0;
    }
    return t !== t && n !== n;
  }), Ur;
}
var zr = { exports: {} }, Ms;
function Wd() {
  if (Ms) return zr.exports;
  Ms = 1;
  var e = zr.exports = function(i, u, r) {
    typeof u == "function" && (r = u, u = {}), r = u.cb || r;
    var s = typeof r == "function" ? r : r.pre || function() {
    }, a = r.post || function() {
    };
    t(u, s, a, i, "", i);
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
  function t(i, u, r, s, a, o, l, y, g, f) {
    if (s && typeof s == "object" && !Array.isArray(s)) {
      u(s, a, o, l, y, g, f);
      for (var m in s) {
        var w = s[m];
        if (Array.isArray(w)) {
          if (m in e.arrayKeywords)
            for (var _ = 0; _ < w.length; _++)
              t(i, u, r, w[_], a + "/" + m + "/" + _, o, a, m, s, _);
        } else if (m in e.propsKeywords) {
          if (w && typeof w == "object")
            for (var b in w)
              t(i, u, r, w[b], a + "/" + m + "/" + n(b), o, a, m, s, b);
        } else (m in e.keywords || i.allKeys && !(m in e.skipKeywords)) && t(i, u, r, w, a + "/" + m, o, a, m, s);
      }
      r(s, a, o, l, y, g, f);
    }
  }
  function n(i) {
    return i.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  return zr.exports;
}
var Cs;
function wr() {
  if (Cs) return be;
  Cs = 1, Object.defineProperty(be, "__esModule", { value: !0 }), be.getSchemaRefs = be.resolveUrl = be.normalizeId = be._getFullPath = be.getFullPath = be.inlineRef = void 0;
  const e = /* @__PURE__ */ ne(), t = uc(), n = Wd(), i = /* @__PURE__ */ new Set([
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
  function u(_, b = !0) {
    return typeof _ == "boolean" ? !0 : b === !0 ? !s(_) : b ? a(_) <= b : !1;
  }
  be.inlineRef = u;
  const r = /* @__PURE__ */ new Set([
    "$ref",
    "$recursiveRef",
    "$recursiveAnchor",
    "$dynamicRef",
    "$dynamicAnchor"
  ]);
  function s(_) {
    for (const b in _) {
      if (r.has(b))
        return !0;
      const S = _[b];
      if (Array.isArray(S) && S.some(s) || typeof S == "object" && s(S))
        return !0;
    }
    return !1;
  }
  function a(_) {
    let b = 0;
    for (const S in _) {
      if (S === "$ref")
        return 1 / 0;
      if (b++, !i.has(S) && (typeof _[S] == "object" && (0, e.eachItem)(_[S], (v) => b += a(v)), b === 1 / 0))
        return 1 / 0;
    }
    return b;
  }
  function o(_, b = "", S) {
    S !== !1 && (b = g(b));
    const v = _.parse(b);
    return l(_, v);
  }
  be.getFullPath = o;
  function l(_, b) {
    return _.serialize(b).split("#")[0] + "#";
  }
  be._getFullPath = l;
  const y = /#\/?$/;
  function g(_) {
    return _ ? _.replace(y, "") : "";
  }
  be.normalizeId = g;
  function f(_, b, S) {
    return S = g(S), _.resolve(b, S);
  }
  be.resolveUrl = f;
  const m = /^[a-z_][-a-z0-9._]*$/i;
  function w(_, b) {
    if (typeof _ == "boolean")
      return {};
    const { schemaId: S, uriResolver: v } = this.opts, h = g(_[S] || b), c = { "": h }, d = o(v, h, !1), p = {}, I = /* @__PURE__ */ new Set();
    return n(_, { allKeys: !0 }, (O, P, M, j) => {
      if (j === void 0)
        return;
      const q = d + P;
      let B = c[j];
      typeof O[S] == "string" && (B = N.call(this, O[S])), H.call(this, O.$anchor), H.call(this, O.$dynamicAnchor), c[P] = B;
      function N(F) {
        const J = this.opts.uriResolver.resolve;
        if (F = g(B ? J(B, F) : F), I.has(F))
          throw E(F);
        I.add(F);
        let T = this.refs[F];
        return typeof T == "string" && (T = this.refs[T]), typeof T == "object" ? $(O, T.schema, F) : F !== g(q) && (F[0] === "#" ? ($(O, p[F], F), p[F] = O) : this.refs[F] = q), F;
      }
      function H(F) {
        if (typeof F == "string") {
          if (!m.test(F))
            throw new Error(`invalid anchor "${F}"`);
          N.call(this, `#${F}`);
        }
      }
    }), p;
    function $(O, P, M) {
      if (P !== void 0 && !t(O, P))
        throw E(M);
    }
    function E(O) {
      return new Error(`reference "${O}" resolves to more than one schema`);
    }
  }
  return be.getSchemaRefs = w, be;
}
var Us;
function Jt() {
  if (Us) return Ke;
  Us = 1, Object.defineProperty(Ke, "__esModule", { value: !0 }), Ke.getData = Ke.KeywordCxt = Ke.validateFunctionCode = void 0;
  const e = /* @__PURE__ */ Kd(), t = /* @__PURE__ */ fr(), n = /* @__PURE__ */ dc(), i = /* @__PURE__ */ fr(), u = /* @__PURE__ */ Gd(), r = /* @__PURE__ */ Zd(), s = /* @__PURE__ */ Qd(), a = /* @__PURE__ */ ee(), o = /* @__PURE__ */ Me(), l = /* @__PURE__ */ wr(), y = /* @__PURE__ */ ne(), g = /* @__PURE__ */ br();
  function f(C) {
    if (d(C) && (I(C), c(C))) {
      b(C);
      return;
    }
    m(C, () => (0, e.topBoolOrEmptySchema)(C));
  }
  Ke.validateFunctionCode = f;
  function m({ gen: C, validateName: z, schema: V, schemaEnv: Z, opts: W }, Y) {
    W.code.es5 ? C.func(z, (0, a._)`${o.default.data}, ${o.default.valCxt}`, Z.$async, () => {
      C.code((0, a._)`"use strict"; ${v(V, W)}`), _(C, W), C.code(Y);
    }) : C.func(z, (0, a._)`${o.default.data}, ${w(W)}`, Z.$async, () => C.code(v(V, W)).code(Y));
  }
  function w(C) {
    return (0, a._)`{${o.default.instancePath}="", ${o.default.parentData}, ${o.default.parentDataProperty}, ${o.default.rootData}=${o.default.data}${C.dynamicRef ? (0, a._)`, ${o.default.dynamicAnchors}={}` : a.nil}}={}`;
  }
  function _(C, z) {
    C.if(o.default.valCxt, () => {
      C.var(o.default.instancePath, (0, a._)`${o.default.valCxt}.${o.default.instancePath}`), C.var(o.default.parentData, (0, a._)`${o.default.valCxt}.${o.default.parentData}`), C.var(o.default.parentDataProperty, (0, a._)`${o.default.valCxt}.${o.default.parentDataProperty}`), C.var(o.default.rootData, (0, a._)`${o.default.valCxt}.${o.default.rootData}`), z.dynamicRef && C.var(o.default.dynamicAnchors, (0, a._)`${o.default.valCxt}.${o.default.dynamicAnchors}`);
    }, () => {
      C.var(o.default.instancePath, (0, a._)`""`), C.var(o.default.parentData, (0, a._)`undefined`), C.var(o.default.parentDataProperty, (0, a._)`undefined`), C.var(o.default.rootData, o.default.data), z.dynamicRef && C.var(o.default.dynamicAnchors, (0, a._)`{}`);
    });
  }
  function b(C) {
    const { schema: z, opts: V, gen: Z } = C;
    m(C, () => {
      V.$comment && z.$comment && j(C), O(C), Z.let(o.default.vErrors, null), Z.let(o.default.errors, 0), V.unevaluated && S(C), $(C), q(C);
    });
  }
  function S(C) {
    const { gen: z, validateName: V } = C;
    C.evaluated = z.const("evaluated", (0, a._)`${V}.evaluated`), z.if((0, a._)`${C.evaluated}.dynamicProps`, () => z.assign((0, a._)`${C.evaluated}.props`, (0, a._)`undefined`)), z.if((0, a._)`${C.evaluated}.dynamicItems`, () => z.assign((0, a._)`${C.evaluated}.items`, (0, a._)`undefined`));
  }
  function v(C, z) {
    const V = typeof C == "object" && C[z.schemaId];
    return V && (z.code.source || z.code.process) ? (0, a._)`/*# sourceURL=${V} */` : a.nil;
  }
  function h(C, z) {
    if (d(C) && (I(C), c(C))) {
      p(C, z);
      return;
    }
    (0, e.boolOrEmptySchema)(C, z);
  }
  function c({ schema: C, self: z }) {
    if (typeof C == "boolean")
      return !C;
    for (const V in C)
      if (z.RULES.all[V])
        return !0;
    return !1;
  }
  function d(C) {
    return typeof C.schema != "boolean";
  }
  function p(C, z) {
    const { schema: V, gen: Z, opts: W } = C;
    W.$comment && V.$comment && j(C), P(C), M(C);
    const Y = Z.const("_errs", o.default.errors);
    $(C, Y), Z.var(z, (0, a._)`${Y} === ${o.default.errors}`);
  }
  function I(C) {
    (0, y.checkUnknownRules)(C), E(C);
  }
  function $(C, z) {
    if (C.opts.jtd)
      return N(C, [], !1, z);
    const V = (0, t.getSchemaTypes)(C.schema), Z = (0, t.coerceAndCheckDataType)(C, V);
    N(C, V, !Z, z);
  }
  function E(C) {
    const { schema: z, errSchemaPath: V, opts: Z, self: W } = C;
    z.$ref && Z.ignoreKeywordsWithRef && (0, y.schemaHasRulesButRef)(z, W.RULES) && W.logger.warn(`$ref: keywords ignored in schema at path "${V}"`);
  }
  function O(C) {
    const { schema: z, opts: V } = C;
    z.default !== void 0 && V.useDefaults && V.strictSchema && (0, y.checkStrictMode)(C, "default is ignored in the schema root");
  }
  function P(C) {
    const z = C.schema[C.opts.schemaId];
    z && (C.baseId = (0, l.resolveUrl)(C.opts.uriResolver, C.baseId, z));
  }
  function M(C) {
    if (C.schema.$async && !C.schemaEnv.$async)
      throw new Error("async schema in sync schema");
  }
  function j({ gen: C, schemaEnv: z, schema: V, errSchemaPath: Z, opts: W }) {
    const Y = V.$comment;
    if (W.$comment === !0)
      C.code((0, a._)`${o.default.self}.logger.log(${Y})`);
    else if (typeof W.$comment == "function") {
      const re = (0, a.str)`${Z}/$comment`, me = C.scopeValue("root", { ref: z.root });
      C.code((0, a._)`${o.default.self}.opts.$comment(${Y}, ${re}, ${me}.schema)`);
    }
  }
  function q(C) {
    const { gen: z, schemaEnv: V, validateName: Z, ValidationError: W, opts: Y } = C;
    V.$async ? z.if((0, a._)`${o.default.errors} === 0`, () => z.return(o.default.data), () => z.throw((0, a._)`new ${W}(${o.default.vErrors})`)) : (z.assign((0, a._)`${Z}.errors`, o.default.vErrors), Y.unevaluated && B(C), z.return((0, a._)`${o.default.errors} === 0`));
  }
  function B({ gen: C, evaluated: z, props: V, items: Z }) {
    V instanceof a.Name && C.assign((0, a._)`${z}.props`, V), Z instanceof a.Name && C.assign((0, a._)`${z}.items`, Z);
  }
  function N(C, z, V, Z) {
    const { gen: W, schema: Y, data: re, allErrors: me, opts: de, self: le } = C, { RULES: ce } = le;
    if (Y.$ref && (de.ignoreKeywordsWithRef || !(0, y.schemaHasRulesButRef)(Y, ce))) {
      W.block(() => L(C, "$ref", ce.all.$ref.definition));
      return;
    }
    de.jtd || F(C, z), W.block(() => {
      for (const xe of ce.rules)
        Ue(xe);
      Ue(ce.post);
    });
    function Ue(xe) {
      (0, n.shouldUseGroup)(Y, xe) && (xe.type ? (W.if((0, i.checkDataType)(xe.type, re, de.strictNumbers)), H(C, xe), z.length === 1 && z[0] === xe.type && V && (W.else(), (0, i.reportTypeError)(C)), W.endIf()) : H(C, xe), me || W.if((0, a._)`${o.default.errors} === ${Z || 0}`));
    }
  }
  function H(C, z) {
    const { gen: V, schema: Z, opts: { useDefaults: W } } = C;
    W && (0, u.assignDefaults)(C, z.type), V.block(() => {
      for (const Y of z.rules)
        (0, n.shouldUseRule)(Z, Y) && L(C, Y.keyword, Y.definition, z.type);
    });
  }
  function F(C, z) {
    C.schemaEnv.meta || !C.opts.strictTypes || (J(C, z), C.opts.allowUnionTypes || T(C, z), D(C, C.dataTypes));
  }
  function J(C, z) {
    if (z.length) {
      if (!C.dataTypes.length) {
        C.dataTypes = z;
        return;
      }
      z.forEach((V) => {
        k(C.dataTypes, V) || x(C, `type "${V}" not allowed by context "${C.dataTypes.join(",")}"`);
      }), R(C, z);
    }
  }
  function T(C, z) {
    z.length > 1 && !(z.length === 2 && z.includes("null")) && x(C, "use allowUnionTypes to allow union type keyword");
  }
  function D(C, z) {
    const V = C.self.RULES.all;
    for (const Z in V) {
      const W = V[Z];
      if (typeof W == "object" && (0, n.shouldUseRule)(C.schema, W)) {
        const { type: Y } = W.definition;
        Y.length && !Y.some((re) => U(z, re)) && x(C, `missing type "${Y.join(",")}" for keyword "${Z}"`);
      }
    }
  }
  function U(C, z) {
    return C.includes(z) || z === "number" && C.includes("integer");
  }
  function k(C, z) {
    return C.includes(z) || z === "integer" && C.includes("number");
  }
  function R(C, z) {
    const V = [];
    for (const Z of C.dataTypes)
      k(z, Z) ? V.push(Z) : z.includes("integer") && Z === "number" && V.push("integer");
    C.dataTypes = V;
  }
  function x(C, z) {
    const V = C.schemaEnv.baseId + C.errSchemaPath;
    z += ` at "${V}" (strictTypes)`, (0, y.checkStrictMode)(C, z, C.opts.strictTypes);
  }
  class A {
    constructor(z, V, Z) {
      if ((0, r.validateKeywordUsage)(z, V, Z), this.gen = z.gen, this.allErrors = z.allErrors, this.keyword = Z, this.data = z.data, this.schema = z.schema[Z], this.$data = V.$data && z.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, y.schemaRefOrVal)(z, this.schema, Z, this.$data), this.schemaType = V.schemaType, this.parentSchema = z.schema, this.params = {}, this.it = z, this.def = V, this.$data)
        this.schemaCode = z.gen.const("vSchema", G(this.$data, z));
      else if (this.schemaCode = this.schemaValue, !(0, r.validSchemaType)(this.schema, V.schemaType, V.allowUndefined))
        throw new Error(`${Z} value must be ${JSON.stringify(V.schemaType)}`);
      ("code" in V ? V.trackErrors : V.errors !== !1) && (this.errsCount = z.gen.const("_errs", o.default.errors));
    }
    result(z, V, Z) {
      this.failResult((0, a.not)(z), V, Z);
    }
    failResult(z, V, Z) {
      this.gen.if(z), Z ? Z() : this.error(), V ? (this.gen.else(), V(), this.allErrors && this.gen.endIf()) : this.allErrors ? this.gen.endIf() : this.gen.else();
    }
    pass(z, V) {
      this.failResult((0, a.not)(z), void 0, V);
    }
    fail(z) {
      if (z === void 0) {
        this.error(), this.allErrors || this.gen.if(!1);
        return;
      }
      this.gen.if(z), this.error(), this.allErrors ? this.gen.endIf() : this.gen.else();
    }
    fail$data(z) {
      if (!this.$data)
        return this.fail(z);
      const { schemaCode: V } = this;
      this.fail((0, a._)`${V} !== undefined && (${(0, a.or)(this.invalid$data(), z)})`);
    }
    error(z, V, Z) {
      if (V) {
        this.setParams(V), this._error(z, Z), this.setParams({});
        return;
      }
      this._error(z, Z);
    }
    _error(z, V) {
      (z ? g.reportExtraError : g.reportError)(this, this.def.error, V);
    }
    $dataError() {
      (0, g.reportError)(this, this.def.$dataError || g.keyword$DataError);
    }
    reset() {
      if (this.errsCount === void 0)
        throw new Error('add "trackErrors" to keyword definition');
      (0, g.resetErrorsCount)(this.gen, this.errsCount);
    }
    ok(z) {
      this.allErrors || this.gen.if(z);
    }
    setParams(z, V) {
      V ? Object.assign(this.params, z) : this.params = z;
    }
    block$data(z, V, Z = a.nil) {
      this.gen.block(() => {
        this.check$data(z, Z), V();
      });
    }
    check$data(z = a.nil, V = a.nil) {
      if (!this.$data)
        return;
      const { gen: Z, schemaCode: W, schemaType: Y, def: re } = this;
      Z.if((0, a.or)((0, a._)`${W} === undefined`, V)), z !== a.nil && Z.assign(z, !0), (Y.length || re.validateSchema) && (Z.elseIf(this.invalid$data()), this.$dataError(), z !== a.nil && Z.assign(z, !1)), Z.else();
    }
    invalid$data() {
      const { gen: z, schemaCode: V, schemaType: Z, def: W, it: Y } = this;
      return (0, a.or)(re(), me());
      function re() {
        if (Z.length) {
          if (!(V instanceof a.Name))
            throw new Error("ajv implementation error");
          const de = Array.isArray(Z) ? Z : [Z];
          return (0, a._)`${(0, i.checkDataTypes)(de, V, Y.opts.strictNumbers, i.DataType.Wrong)}`;
        }
        return a.nil;
      }
      function me() {
        if (W.validateSchema) {
          const de = z.scopeValue("validate$data", { ref: W.validateSchema });
          return (0, a._)`!${de}(${V})`;
        }
        return a.nil;
      }
    }
    subschema(z, V) {
      const Z = (0, s.getSubschema)(this.it, z);
      (0, s.extendSubschemaData)(Z, this.it, z), (0, s.extendSubschemaMode)(Z, z);
      const W = { ...this.it, ...Z, items: void 0, props: void 0 };
      return h(W, V), W;
    }
    mergeEvaluated(z, V) {
      const { it: Z, gen: W } = this;
      Z.opts.unevaluated && (Z.props !== !0 && z.props !== void 0 && (Z.props = y.mergeEvaluated.props(W, z.props, Z.props, V)), Z.items !== !0 && z.items !== void 0 && (Z.items = y.mergeEvaluated.items(W, z.items, Z.items, V)));
    }
    mergeValidEvaluated(z, V) {
      const { it: Z, gen: W } = this;
      if (Z.opts.unevaluated && (Z.props !== !0 || Z.items !== !0))
        return W.if(V, () => this.mergeEvaluated(z, a.Name)), !0;
    }
  }
  Ke.KeywordCxt = A;
  function L(C, z, V, Z) {
    const W = new A(C, V, z);
    "code" in V ? V.code(W, Z) : W.$data && V.validate ? (0, r.funcKeywordCode)(W, V) : "macro" in V ? (0, r.macroKeywordCode)(W, V) : (V.compile || V.validate) && (0, r.funcKeywordCode)(W, V);
  }
  const K = /^\/(?:[^~]|~0|~1)*$/, Q = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function G(C, { dataLevel: z, dataNames: V, dataPathArr: Z }) {
    let W, Y;
    if (C === "")
      return o.default.rootData;
    if (C[0] === "/") {
      if (!K.test(C))
        throw new Error(`Invalid JSON-pointer: ${C}`);
      W = C, Y = o.default.rootData;
    } else {
      const le = Q.exec(C);
      if (!le)
        throw new Error(`Invalid JSON-pointer: ${C}`);
      const ce = +le[1];
      if (W = le[2], W === "#") {
        if (ce >= z)
          throw new Error(de("property/index", ce));
        return Z[z - ce];
      }
      if (ce > z)
        throw new Error(de("data", ce));
      if (Y = V[z - ce], !W)
        return Y;
    }
    let re = Y;
    const me = W.split("/");
    for (const le of me)
      le && (Y = (0, a._)`${Y}${(0, a.getProperty)((0, y.unescapeJsonPointer)(le))}`, re = (0, a._)`${re} && ${Y}`);
    return re;
    function de(le, ce) {
      return `Cannot access ${le} ${ce} levels up, current level is ${z}`;
    }
  }
  return Ke.getData = G, Ke;
}
var rn = {}, zs;
function _r() {
  if (zs) return rn;
  zs = 1, Object.defineProperty(rn, "__esModule", { value: !0 });
  class e extends Error {
    constructor(n) {
      super("validation failed"), this.errors = n, this.ajv = this.validation = !0;
    }
  }
  return rn.default = e, rn;
}
var sn = {}, Vs;
function Kt() {
  if (Vs) return sn;
  Vs = 1, Object.defineProperty(sn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ wr();
  class t extends Error {
    constructor(i, u, r, s) {
      super(s || `can't resolve reference ${r} from id ${u}`), this.missingRef = (0, e.resolveUrl)(i, u, r), this.missingSchema = (0, e.normalizeId)((0, e.getFullPath)(i, this.missingRef));
    }
  }
  return sn.default = t, sn;
}
var Se = {}, Fs;
function Sr() {
  if (Fs) return Se;
  Fs = 1, Object.defineProperty(Se, "__esModule", { value: !0 }), Se.resolveSchema = Se.getCompilingSchema = Se.resolveRef = Se.compileSchema = Se.SchemaEnv = void 0;
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ _r(), n = /* @__PURE__ */ Me(), i = /* @__PURE__ */ wr(), u = /* @__PURE__ */ ne(), r = /* @__PURE__ */ Jt();
  class s {
    constructor(S) {
      var v;
      this.refs = {}, this.dynamicAnchors = {};
      let h;
      typeof S.schema == "object" && (h = S.schema), this.schema = S.schema, this.schemaId = S.schemaId, this.root = S.root || this, this.baseId = (v = S.baseId) !== null && v !== void 0 ? v : (0, i.normalizeId)(h?.[S.schemaId || "$id"]), this.schemaPath = S.schemaPath, this.localRefs = S.localRefs, this.meta = S.meta, this.$async = h?.$async, this.refs = {};
    }
  }
  Se.SchemaEnv = s;
  function a(b) {
    const S = y.call(this, b);
    if (S)
      return S;
    const v = (0, i.getFullPath)(this.opts.uriResolver, b.root.baseId), { es5: h, lines: c } = this.opts.code, { ownProperties: d } = this.opts, p = new e.CodeGen(this.scope, { es5: h, lines: c, ownProperties: d });
    let I;
    b.$async && (I = p.scopeValue("Error", {
      ref: t.default,
      code: (0, e._)`require("ajv/dist/runtime/validation_error").default`
    }));
    const $ = p.scopeName("validate");
    b.validateName = $;
    const E = {
      gen: p,
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
      topSchemaRef: p.scopeValue("schema", this.opts.code.source === !0 ? { ref: b.schema, code: (0, e.stringify)(b.schema) } : { ref: b.schema }),
      validateName: $,
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
    let O;
    try {
      this._compilations.add(b), (0, r.validateFunctionCode)(E), p.optimize(this.opts.code.optimize);
      const P = p.toString();
      O = `${p.scopeRefs(n.default.scope)}return ${P}`, this.opts.code.process && (O = this.opts.code.process(O, b));
      const j = new Function(`${n.default.self}`, `${n.default.scope}`, O)(this, this.scope.get());
      if (this.scope.value($, { ref: j }), j.errors = null, j.schema = b.schema, j.schemaEnv = b, b.$async && (j.$async = !0), this.opts.code.source === !0 && (j.source = { validateName: $, validateCode: P, scopeValues: p._values }), this.opts.unevaluated) {
        const { props: q, items: B } = E;
        j.evaluated = {
          props: q instanceof e.Name ? void 0 : q,
          items: B instanceof e.Name ? void 0 : B,
          dynamicProps: q instanceof e.Name,
          dynamicItems: B instanceof e.Name
        }, j.source && (j.source.evaluated = (0, e.stringify)(j.evaluated));
      }
      return b.validate = j, b;
    } catch (P) {
      throw delete b.validate, delete b.validateName, O && this.logger.error("Error compiling schema, function code:", O), P;
    } finally {
      this._compilations.delete(b);
    }
  }
  Se.compileSchema = a;
  function o(b, S, v) {
    var h;
    v = (0, i.resolveUrl)(this.opts.uriResolver, S, v);
    const c = b.refs[v];
    if (c)
      return c;
    let d = f.call(this, b, v);
    if (d === void 0) {
      const p = (h = b.localRefs) === null || h === void 0 ? void 0 : h[v], { schemaId: I } = this.opts;
      p && (d = new s({ schema: p, schemaId: I, root: b, baseId: S }));
    }
    if (d !== void 0)
      return b.refs[v] = l.call(this, d);
  }
  Se.resolveRef = o;
  function l(b) {
    return (0, i.inlineRef)(b.schema, this.opts.inlineRefs) ? b.schema : b.validate ? b : a.call(this, b);
  }
  function y(b) {
    for (const S of this._compilations)
      if (g(S, b))
        return S;
  }
  Se.getCompilingSchema = y;
  function g(b, S) {
    return b.schema === S.schema && b.root === S.root && b.baseId === S.baseId;
  }
  function f(b, S) {
    let v;
    for (; typeof (v = this.refs[S]) == "string"; )
      S = v;
    return v || this.schemas[S] || m.call(this, b, S);
  }
  function m(b, S) {
    const v = this.opts.uriResolver.parse(S), h = (0, i._getFullPath)(this.opts.uriResolver, v);
    let c = (0, i.getFullPath)(this.opts.uriResolver, b.baseId, void 0);
    if (Object.keys(b.schema).length > 0 && h === c)
      return _.call(this, v, b);
    const d = (0, i.normalizeId)(h), p = this.refs[d] || this.schemas[d];
    if (typeof p == "string") {
      const I = m.call(this, b, p);
      return typeof I?.schema != "object" ? void 0 : _.call(this, v, I);
    }
    if (typeof p?.schema == "object") {
      if (p.validate || a.call(this, p), d === (0, i.normalizeId)(S)) {
        const { schema: I } = p, { schemaId: $ } = this.opts, E = I[$];
        return E && (c = (0, i.resolveUrl)(this.opts.uriResolver, c, E)), new s({ schema: I, schemaId: $, root: b, baseId: c });
      }
      return _.call(this, v, p);
    }
  }
  Se.resolveSchema = m;
  const w = /* @__PURE__ */ new Set([
    "properties",
    "patternProperties",
    "enum",
    "dependencies",
    "definitions"
  ]);
  function _(b, { baseId: S, schema: v, root: h }) {
    var c;
    if (((c = b.fragment) === null || c === void 0 ? void 0 : c[0]) !== "/")
      return;
    for (const I of b.fragment.slice(1).split("/")) {
      if (typeof v == "boolean")
        return;
      const $ = v[(0, u.unescapeFragment)(I)];
      if ($ === void 0)
        return;
      v = $;
      const E = typeof v == "object" && v[this.opts.schemaId];
      !w.has(I) && E && (S = (0, i.resolveUrl)(this.opts.uriResolver, S, E));
    }
    let d;
    if (typeof v != "boolean" && v.$ref && !(0, u.schemaHasRulesButRef)(v, this.RULES)) {
      const I = (0, i.resolveUrl)(this.opts.uriResolver, S, v.$ref);
      d = m.call(this, h, I);
    }
    const { schemaId: p } = this.opts;
    if (d = d || new s({ schema: v, schemaId: p, root: h, baseId: S }), d.schema !== d.root.schema)
      return d;
  }
  return Se;
}
const Xd = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", Yd = "Meta-schema for $data reference (JSON AnySchema extension proposal)", eu = "object", tu = ["$data"], nu = { $data: { type: "string", anyOf: [{ format: "relative-json-pointer" }, { format: "json-pointer" }] } }, ru = !1, iu = {
  $id: Xd,
  description: Yd,
  type: eu,
  required: tu,
  properties: nu,
  additionalProperties: ru
};
var an = {}, Pt = { exports: {} }, Vr, Hs;
function lc() {
  if (Hs) return Vr;
  Hs = 1;
  const e = RegExp.prototype.test.bind(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu), t = RegExp.prototype.test.bind(/^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u);
  function n(f) {
    let m = "", w = 0, _ = 0;
    for (_ = 0; _ < f.length; _++)
      if (w = f[_].charCodeAt(0), w !== 48) {
        if (!(w >= 48 && w <= 57 || w >= 65 && w <= 70 || w >= 97 && w <= 102))
          return "";
        m += f[_];
        break;
      }
    for (_ += 1; _ < f.length; _++) {
      if (w = f[_].charCodeAt(0), !(w >= 48 && w <= 57 || w >= 65 && w <= 70 || w >= 97 && w <= 102))
        return "";
      m += f[_];
    }
    return m;
  }
  const i = RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u);
  function u(f) {
    return f.length = 0, !0;
  }
  function r(f, m, w) {
    if (f.length) {
      const _ = n(f);
      if (_ !== "")
        m.push(_);
      else
        return w.error = !0, !1;
      f.length = 0;
    }
    return !0;
  }
  function s(f) {
    let m = 0;
    const w = { error: !1, address: "", zone: "" }, _ = [], b = [];
    let S = !1, v = !1, h = r;
    for (let c = 0; c < f.length; c++) {
      const d = f[c];
      if (!(d === "[" || d === "]"))
        if (d === ":") {
          if (S === !0 && (v = !0), !h(b, _, w))
            break;
          if (++m > 7) {
            w.error = !0;
            break;
          }
          c > 0 && f[c - 1] === ":" && (S = !0), _.push(":");
          continue;
        } else if (d === "%") {
          if (!h(b, _, w))
            break;
          h = u;
        } else {
          b.push(d);
          continue;
        }
    }
    return b.length && (h === u ? w.zone = b.join("") : v ? _.push(b.join("")) : _.push(n(b))), w.address = _.join(""), w;
  }
  function a(f) {
    if (o(f, ":") < 2)
      return { host: f, isIPV6: !1 };
    const m = s(f);
    if (m.error)
      return { host: f, isIPV6: !1 };
    {
      let w = m.address, _ = m.address;
      return m.zone && (w += "%" + m.zone, _ += "%25" + m.zone), { host: w, isIPV6: !0, escapedHost: _ };
    }
  }
  function o(f, m) {
    let w = 0;
    for (let _ = 0; _ < f.length; _++)
      f[_] === m && w++;
    return w;
  }
  function l(f) {
    let m = f;
    const w = [];
    let _ = -1, b = 0;
    for (; b = m.length; ) {
      if (b === 1) {
        if (m === ".")
          break;
        if (m === "/") {
          w.push("/");
          break;
        } else {
          w.push(m);
          break;
        }
      } else if (b === 2) {
        if (m[0] === ".") {
          if (m[1] === ".")
            break;
          if (m[1] === "/") {
            m = m.slice(2);
            continue;
          }
        } else if (m[0] === "/" && (m[1] === "." || m[1] === "/")) {
          w.push("/");
          break;
        }
      } else if (b === 3 && m === "/..") {
        w.length !== 0 && w.pop(), w.push("/");
        break;
      }
      if (m[0] === ".") {
        if (m[1] === ".") {
          if (m[2] === "/") {
            m = m.slice(3);
            continue;
          }
        } else if (m[1] === "/") {
          m = m.slice(2);
          continue;
        }
      } else if (m[0] === "/" && m[1] === ".") {
        if (m[2] === "/") {
          m = m.slice(2);
          continue;
        } else if (m[2] === "." && m[3] === "/") {
          m = m.slice(3), w.length !== 0 && w.pop();
          continue;
        }
      }
      if ((_ = m.indexOf("/", 1)) === -1) {
        w.push(m);
        break;
      } else
        w.push(m.slice(0, _)), m = m.slice(_);
    }
    return w.join("");
  }
  function y(f, m) {
    const w = m !== !0 ? escape : unescape;
    return f.scheme !== void 0 && (f.scheme = w(f.scheme)), f.userinfo !== void 0 && (f.userinfo = w(f.userinfo)), f.host !== void 0 && (f.host = w(f.host)), f.path !== void 0 && (f.path = w(f.path)), f.query !== void 0 && (f.query = w(f.query)), f.fragment !== void 0 && (f.fragment = w(f.fragment)), f;
  }
  function g(f) {
    const m = [];
    if (f.userinfo !== void 0 && (m.push(f.userinfo), m.push("@")), f.host !== void 0) {
      let w = unescape(f.host);
      if (!t(w)) {
        const _ = a(w);
        _.isIPV6 === !0 ? w = `[${_.escapedHost}]` : w = f.host;
      }
      m.push(w);
    }
    return (typeof f.port == "number" || typeof f.port == "string") && (m.push(":"), m.push(String(f.port))), m.length ? m.join("") : void 0;
  }
  return Vr = {
    nonSimpleDomain: i,
    recomposeAuthority: g,
    normalizeComponentEncoding: y,
    removeDotSegments: l,
    isIPv4: t,
    isUUID: e,
    normalizeIPv6: a,
    stringArrayToHexStripped: n
  }, Vr;
}
var Fr, Bs;
function su() {
  if (Bs) return Fr;
  Bs = 1;
  const { isUUID: e } = lc(), t = /([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu, n = (
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
  function i(d) {
    return n.indexOf(
      /** @type {*} */
      d
    ) !== -1;
  }
  function u(d) {
    return d.secure === !0 ? !0 : d.secure === !1 ? !1 : d.scheme ? d.scheme.length === 3 && (d.scheme[0] === "w" || d.scheme[0] === "W") && (d.scheme[1] === "s" || d.scheme[1] === "S") && (d.scheme[2] === "s" || d.scheme[2] === "S") : !1;
  }
  function r(d) {
    return d.host || (d.error = d.error || "HTTP URIs must have a host."), d;
  }
  function s(d) {
    const p = String(d.scheme).toLowerCase() === "https";
    return (d.port === (p ? 443 : 80) || d.port === "") && (d.port = void 0), d.path || (d.path = "/"), d;
  }
  function a(d) {
    return d.secure = u(d), d.resourceName = (d.path || "/") + (d.query ? "?" + d.query : ""), d.path = void 0, d.query = void 0, d;
  }
  function o(d) {
    if ((d.port === (u(d) ? 443 : 80) || d.port === "") && (d.port = void 0), typeof d.secure == "boolean" && (d.scheme = d.secure ? "wss" : "ws", d.secure = void 0), d.resourceName) {
      const [p, I] = d.resourceName.split("?");
      d.path = p && p !== "/" ? p : void 0, d.query = I, d.resourceName = void 0;
    }
    return d.fragment = void 0, d;
  }
  function l(d, p) {
    if (!d.path)
      return d.error = "URN can not be parsed", d;
    const I = d.path.match(t);
    if (I) {
      const $ = p.scheme || d.scheme || "urn";
      d.nid = I[1].toLowerCase(), d.nss = I[2];
      const E = `${$}:${p.nid || d.nid}`, O = c(E);
      d.path = void 0, O && (d = O.parse(d, p));
    } else
      d.error = d.error || "URN can not be parsed.";
    return d;
  }
  function y(d, p) {
    if (d.nid === void 0)
      throw new Error("URN without nid cannot be serialized");
    const I = p.scheme || d.scheme || "urn", $ = d.nid.toLowerCase(), E = `${I}:${p.nid || $}`, O = c(E);
    O && (d = O.serialize(d, p));
    const P = d, M = d.nss;
    return P.path = `${$ || p.nid}:${M}`, p.skipEscape = !0, P;
  }
  function g(d, p) {
    const I = d;
    return I.uuid = I.nss, I.nss = void 0, !p.tolerant && (!I.uuid || !e(I.uuid)) && (I.error = I.error || "UUID is not valid."), I;
  }
  function f(d) {
    const p = d;
    return p.nss = (d.uuid || "").toLowerCase(), p;
  }
  const m = (
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
      domainHost: m.domainHost,
      parse: r,
      serialize: s
    }
  ), _ = (
    /** @type {SchemeHandler} */
    {
      scheme: "ws",
      domainHost: !0,
      parse: a,
      serialize: o
    }
  ), b = (
    /** @type {SchemeHandler} */
    {
      scheme: "wss",
      domainHost: _.domainHost,
      parse: _.parse,
      serialize: _.serialize
    }
  ), h = (
    /** @type {Record<SchemeName, SchemeHandler>} */
    {
      http: m,
      https: w,
      ws: _,
      wss: b,
      urn: (
        /** @type {SchemeHandler} */
        {
          scheme: "urn",
          parse: l,
          serialize: y,
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
  Object.setPrototypeOf(h, null);
  function c(d) {
    return d && (h[
      /** @type {SchemeName} */
      d
    ] || h[
      /** @type {SchemeName} */
      d.toLowerCase()
    ]) || void 0;
  }
  return Fr = {
    wsIsSecure: u,
    SCHEMES: h,
    isValidSchemeName: i,
    getSchemeHandler: c
  }, Fr;
}
var Js;
function au() {
  if (Js) return Pt.exports;
  Js = 1;
  const { normalizeIPv6: e, removeDotSegments: t, recomposeAuthority: n, normalizeComponentEncoding: i, isIPv4: u, nonSimpleDomain: r } = lc(), { SCHEMES: s, getSchemeHandler: a } = su();
  function o(b, S) {
    return typeof b == "string" ? b = /** @type {T} */
    f(w(b, S), S) : typeof b == "object" && (b = /** @type {T} */
    w(f(b, S), S)), b;
  }
  function l(b, S, v) {
    const h = v ? Object.assign({ scheme: "null" }, v) : { scheme: "null" }, c = y(w(b, h), w(S, h), h, !0);
    return h.skipEscape = !0, f(c, h);
  }
  function y(b, S, v, h) {
    const c = {};
    return h || (b = w(f(b, v), v), S = w(f(S, v), v)), v = v || {}, !v.tolerant && S.scheme ? (c.scheme = S.scheme, c.userinfo = S.userinfo, c.host = S.host, c.port = S.port, c.path = t(S.path || ""), c.query = S.query) : (S.userinfo !== void 0 || S.host !== void 0 || S.port !== void 0 ? (c.userinfo = S.userinfo, c.host = S.host, c.port = S.port, c.path = t(S.path || ""), c.query = S.query) : (S.path ? (S.path[0] === "/" ? c.path = t(S.path) : ((b.userinfo !== void 0 || b.host !== void 0 || b.port !== void 0) && !b.path ? c.path = "/" + S.path : b.path ? c.path = b.path.slice(0, b.path.lastIndexOf("/") + 1) + S.path : c.path = S.path, c.path = t(c.path)), c.query = S.query) : (c.path = b.path, S.query !== void 0 ? c.query = S.query : c.query = b.query), c.userinfo = b.userinfo, c.host = b.host, c.port = b.port), c.scheme = b.scheme), c.fragment = S.fragment, c;
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
    }, h = Object.assign({}, S), c = [], d = a(h.scheme || v.scheme);
    d && d.serialize && d.serialize(v, h), v.path !== void 0 && (h.skipEscape ? v.path = unescape(v.path) : (v.path = escape(v.path), v.scheme !== void 0 && (v.path = v.path.split("%3A").join(":")))), h.reference !== "suffix" && v.scheme && c.push(v.scheme, ":");
    const p = n(v);
    if (p !== void 0 && (h.reference !== "suffix" && c.push("//"), c.push(p), v.path && v.path[0] !== "/" && c.push("/")), v.path !== void 0) {
      let I = v.path;
      !h.absolutePath && (!d || !d.absolutePath) && (I = t(I)), p === void 0 && I[0] === "/" && I[1] === "/" && (I = "/%2F" + I.slice(2)), c.push(I);
    }
    return v.query !== void 0 && c.push("?", v.query), v.fragment !== void 0 && c.push("#", v.fragment), c.join("");
  }
  const m = /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u;
  function w(b, S) {
    const v = Object.assign({}, S), h = {
      scheme: void 0,
      userinfo: void 0,
      host: "",
      port: void 0,
      path: "",
      query: void 0,
      fragment: void 0
    };
    let c = !1;
    v.reference === "suffix" && (v.scheme ? b = v.scheme + ":" + b : b = "//" + b);
    const d = b.match(m);
    if (d) {
      if (h.scheme = d[1], h.userinfo = d[3], h.host = d[4], h.port = parseInt(d[5], 10), h.path = d[6] || "", h.query = d[7], h.fragment = d[8], isNaN(h.port) && (h.port = d[5]), h.host)
        if (u(h.host) === !1) {
          const $ = e(h.host);
          h.host = $.host.toLowerCase(), c = $.isIPV6;
        } else
          c = !0;
      h.scheme === void 0 && h.userinfo === void 0 && h.host === void 0 && h.port === void 0 && h.query === void 0 && !h.path ? h.reference = "same-document" : h.scheme === void 0 ? h.reference = "relative" : h.fragment === void 0 ? h.reference = "absolute" : h.reference = "uri", v.reference && v.reference !== "suffix" && v.reference !== h.reference && (h.error = h.error || "URI is not a " + v.reference + " reference.");
      const p = a(v.scheme || h.scheme);
      if (!v.unicodeSupport && (!p || !p.unicodeSupport) && h.host && (v.domainHost || p && p.domainHost) && c === !1 && r(h.host))
        try {
          h.host = URL.domainToASCII(h.host.toLowerCase());
        } catch (I) {
          h.error = h.error || "Host's domain name can not be converted to ASCII: " + I;
        }
      (!p || p && !p.skipNormalize) && (b.indexOf("%") !== -1 && (h.scheme !== void 0 && (h.scheme = unescape(h.scheme)), h.host !== void 0 && (h.host = unescape(h.host))), h.path && (h.path = escape(unescape(h.path))), h.fragment && (h.fragment = encodeURI(decodeURIComponent(h.fragment)))), p && p.parse && p.parse(h, v);
    } else
      h.error = h.error || "URI can not be parsed.";
    return h;
  }
  const _ = {
    SCHEMES: s,
    normalize: o,
    resolve: l,
    resolveComponent: y,
    equal: g,
    serialize: f,
    parse: w
  };
  return Pt.exports = _, Pt.exports.default = _, Pt.exports.fastUri = _, Pt.exports;
}
var Ks;
function ou() {
  if (Ks) return an;
  Ks = 1, Object.defineProperty(an, "__esModule", { value: !0 });
  const e = au();
  return e.code = 'require("ajv/dist/runtime/uri").default', an.default = e, an;
}
var Gs;
function fc() {
  return Gs || (Gs = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CodeGen = e.Name = e.nil = e.stringify = e.str = e._ = e.KeywordCxt = void 0;
    var t = /* @__PURE__ */ Jt();
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
    const i = /* @__PURE__ */ _r(), u = /* @__PURE__ */ Kt(), r = /* @__PURE__ */ cc(), s = /* @__PURE__ */ Sr(), a = /* @__PURE__ */ ee(), o = /* @__PURE__ */ wr(), l = /* @__PURE__ */ fr(), y = /* @__PURE__ */ ne(), g = iu, f = /* @__PURE__ */ ou(), m = (T, D) => new RegExp(T, D);
    m.code = "new RegExp";
    const w = ["removeAdditional", "useDefaults", "coerceTypes"], _ = /* @__PURE__ */ new Set([
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
    function h(T) {
      var D, U, k, R, x, A, L, K, Q, G, C, z, V, Z, W, Y, re, me, de, le, ce, Ue, xe, Rr, Er;
      const Nt = T.strict, jr = (D = T.code) === null || D === void 0 ? void 0 : D.optimize, cs = jr === !0 || jr === void 0 ? 1 : jr || 0, ds = (k = (U = T.code) === null || U === void 0 ? void 0 : U.regExp) !== null && k !== void 0 ? k : m, Zc = (R = T.uriResolver) !== null && R !== void 0 ? R : f.default;
      return {
        strictSchema: (A = (x = T.strictSchema) !== null && x !== void 0 ? x : Nt) !== null && A !== void 0 ? A : !0,
        strictNumbers: (K = (L = T.strictNumbers) !== null && L !== void 0 ? L : Nt) !== null && K !== void 0 ? K : !0,
        strictTypes: (G = (Q = T.strictTypes) !== null && Q !== void 0 ? Q : Nt) !== null && G !== void 0 ? G : "log",
        strictTuples: (z = (C = T.strictTuples) !== null && C !== void 0 ? C : Nt) !== null && z !== void 0 ? z : "log",
        strictRequired: (Z = (V = T.strictRequired) !== null && V !== void 0 ? V : Nt) !== null && Z !== void 0 ? Z : !1,
        code: T.code ? { ...T.code, optimize: cs, regExp: ds } : { optimize: cs, regExp: ds },
        loopRequired: (W = T.loopRequired) !== null && W !== void 0 ? W : v,
        loopEnum: (Y = T.loopEnum) !== null && Y !== void 0 ? Y : v,
        meta: (re = T.meta) !== null && re !== void 0 ? re : !0,
        messages: (me = T.messages) !== null && me !== void 0 ? me : !0,
        inlineRefs: (de = T.inlineRefs) !== null && de !== void 0 ? de : !0,
        schemaId: (le = T.schemaId) !== null && le !== void 0 ? le : "$id",
        addUsedSchema: (ce = T.addUsedSchema) !== null && ce !== void 0 ? ce : !0,
        validateSchema: (Ue = T.validateSchema) !== null && Ue !== void 0 ? Ue : !0,
        validateFormats: (xe = T.validateFormats) !== null && xe !== void 0 ? xe : !0,
        unicodeRegExp: (Rr = T.unicodeRegExp) !== null && Rr !== void 0 ? Rr : !0,
        int32range: (Er = T.int32range) !== null && Er !== void 0 ? Er : !0,
        uriResolver: Zc
      };
    }
    class c {
      constructor(D = {}) {
        this.schemas = {}, this.refs = {}, this.formats = /* @__PURE__ */ Object.create(null), this._compilations = /* @__PURE__ */ new Set(), this._loading = {}, this._cache = /* @__PURE__ */ new Map(), D = this.opts = { ...D, ...h(D) };
        const { es5: U, lines: k } = this.opts.code;
        this.scope = new a.ValueScope({ scope: {}, prefixes: _, es5: U, lines: k }), this.logger = M(D.logger);
        const R = D.validateFormats;
        D.validateFormats = !1, this.RULES = (0, r.getRules)(), d.call(this, b, D, "NOT SUPPORTED"), d.call(this, S, D, "DEPRECATED", "warn"), this._metaOpts = O.call(this), D.formats && $.call(this), this._addVocabularies(), this._addDefaultMetaSchema(), D.keywords && E.call(this, D.keywords), typeof D.meta == "object" && this.addMetaSchema(D.meta), I.call(this), D.validateFormats = R;
      }
      _addVocabularies() {
        this.addKeyword("$async");
      }
      _addDefaultMetaSchema() {
        const { $data: D, meta: U, schemaId: k } = this.opts;
        let R = g;
        k === "id" && (R = { ...g }, R.id = R.$id, delete R.$id), U && D && this.addMetaSchema(R, R[k], !1);
      }
      defaultMeta() {
        const { meta: D, schemaId: U } = this.opts;
        return this.opts.defaultMeta = typeof D == "object" ? D[U] || D : void 0;
      }
      validate(D, U) {
        let k;
        if (typeof D == "string") {
          if (k = this.getSchema(D), !k)
            throw new Error(`no schema with key or ref "${D}"`);
        } else
          k = this.compile(D);
        const R = k(U);
        return "$async" in k || (this.errors = k.errors), R;
      }
      compile(D, U) {
        const k = this._addSchema(D, U);
        return k.validate || this._compileSchemaEnv(k);
      }
      compileAsync(D, U) {
        if (typeof this.opts.loadSchema != "function")
          throw new Error("options.loadSchema should be a function");
        const { loadSchema: k } = this.opts;
        return R.call(this, D, U);
        async function R(G, C) {
          await x.call(this, G.$schema);
          const z = this._addSchema(G, C);
          return z.validate || A.call(this, z);
        }
        async function x(G) {
          G && !this.getSchema(G) && await R.call(this, { $ref: G }, !0);
        }
        async function A(G) {
          try {
            return this._compileSchemaEnv(G);
          } catch (C) {
            if (!(C instanceof u.default))
              throw C;
            return L.call(this, C), await K.call(this, C.missingSchema), A.call(this, G);
          }
        }
        function L({ missingSchema: G, missingRef: C }) {
          if (this.refs[G])
            throw new Error(`AnySchema ${G} is loaded but ${C} cannot be resolved`);
        }
        async function K(G) {
          const C = await Q.call(this, G);
          this.refs[G] || await x.call(this, C.$schema), this.refs[G] || this.addSchema(C, G, U);
        }
        async function Q(G) {
          const C = this._loading[G];
          if (C)
            return C;
          try {
            return await (this._loading[G] = k(G));
          } finally {
            delete this._loading[G];
          }
        }
      }
      // Adds schema to the instance
      addSchema(D, U, k, R = this.opts.validateSchema) {
        if (Array.isArray(D)) {
          for (const A of D)
            this.addSchema(A, void 0, k, R);
          return this;
        }
        let x;
        if (typeof D == "object") {
          const { schemaId: A } = this.opts;
          if (x = D[A], x !== void 0 && typeof x != "string")
            throw new Error(`schema ${A} must be string`);
        }
        return U = (0, o.normalizeId)(U || x), this._checkUnique(U), this.schemas[U] = this._addSchema(D, k, U, R, !0), this;
      }
      // Add schema that will be used to validate other schemas
      // options in META_IGNORE_OPTIONS are alway set to false
      addMetaSchema(D, U, k = this.opts.validateSchema) {
        return this.addSchema(D, U, !0, k), this;
      }
      //  Validate schema against its meta-schema
      validateSchema(D, U) {
        if (typeof D == "boolean")
          return !0;
        let k;
        if (k = D.$schema, k !== void 0 && typeof k != "string")
          throw new Error("$schema must be a string");
        if (k = k || this.opts.defaultMeta || this.defaultMeta(), !k)
          return this.logger.warn("meta-schema not available"), this.errors = null, !0;
        const R = this.validate(k, D);
        if (!R && U) {
          const x = "schema is invalid: " + this.errorsText();
          if (this.opts.validateSchema === "log")
            this.logger.error(x);
          else
            throw new Error(x);
        }
        return R;
      }
      // Get compiled schema by `key` or `ref`.
      // (`key` that was passed to `addSchema` or full schema reference - `schema.$id` or resolved id)
      getSchema(D) {
        let U;
        for (; typeof (U = p.call(this, D)) == "string"; )
          D = U;
        if (U === void 0) {
          const { schemaId: k } = this.opts, R = new s.SchemaEnv({ schema: {}, schemaId: k });
          if (U = s.resolveSchema.call(this, R, D), !U)
            return;
          this.refs[D] = U;
        }
        return U.validate || this._compileSchemaEnv(U);
      }
      // Remove cached schema(s).
      // If no parameter is passed all schemas but meta-schemas are removed.
      // If RegExp is passed all schemas with key/id matching pattern but meta-schemas are removed.
      // Even if schema is referenced by other schemas it still can be removed as other schemas have local references.
      removeSchema(D) {
        if (D instanceof RegExp)
          return this._removeAllSchemas(this.schemas, D), this._removeAllSchemas(this.refs, D), this;
        switch (typeof D) {
          case "undefined":
            return this._removeAllSchemas(this.schemas), this._removeAllSchemas(this.refs), this._cache.clear(), this;
          case "string": {
            const U = p.call(this, D);
            return typeof U == "object" && this._cache.delete(U.schema), delete this.schemas[D], delete this.refs[D], this;
          }
          case "object": {
            const U = D;
            this._cache.delete(U);
            let k = D[this.opts.schemaId];
            return k && (k = (0, o.normalizeId)(k), delete this.schemas[k], delete this.refs[k]), this;
          }
          default:
            throw new Error("ajv.removeSchema: invalid parameter");
        }
      }
      // add "vocabulary" - a collection of keywords
      addVocabulary(D) {
        for (const U of D)
          this.addKeyword(U);
        return this;
      }
      addKeyword(D, U) {
        let k;
        if (typeof D == "string")
          k = D, typeof U == "object" && (this.logger.warn("these parameters are deprecated, see docs for addKeyword"), U.keyword = k);
        else if (typeof D == "object" && U === void 0) {
          if (U = D, k = U.keyword, Array.isArray(k) && !k.length)
            throw new Error("addKeywords: keyword must be string or non-empty array");
        } else
          throw new Error("invalid addKeywords parameters");
        if (q.call(this, k, U), !U)
          return (0, y.eachItem)(k, (x) => B.call(this, x)), this;
        H.call(this, U);
        const R = {
          ...U,
          type: (0, l.getJSONTypes)(U.type),
          schemaType: (0, l.getJSONTypes)(U.schemaType)
        };
        return (0, y.eachItem)(k, R.type.length === 0 ? (x) => B.call(this, x, R) : (x) => R.type.forEach((A) => B.call(this, x, R, A))), this;
      }
      getKeyword(D) {
        const U = this.RULES.all[D];
        return typeof U == "object" ? U.definition : !!U;
      }
      // Remove keyword
      removeKeyword(D) {
        const { RULES: U } = this;
        delete U.keywords[D], delete U.all[D];
        for (const k of U.rules) {
          const R = k.rules.findIndex((x) => x.keyword === D);
          R >= 0 && k.rules.splice(R, 1);
        }
        return this;
      }
      // Add format
      addFormat(D, U) {
        return typeof U == "string" && (U = new RegExp(U)), this.formats[D] = U, this;
      }
      errorsText(D = this.errors, { separator: U = ", ", dataVar: k = "data" } = {}) {
        return !D || D.length === 0 ? "No errors" : D.map((R) => `${k}${R.instancePath} ${R.message}`).reduce((R, x) => R + U + x);
      }
      $dataMetaSchema(D, U) {
        const k = this.RULES.all;
        D = JSON.parse(JSON.stringify(D));
        for (const R of U) {
          const x = R.split("/").slice(1);
          let A = D;
          for (const L of x)
            A = A[L];
          for (const L in k) {
            const K = k[L];
            if (typeof K != "object")
              continue;
            const { $data: Q } = K.definition, G = A[L];
            Q && G && (A[L] = J(G));
          }
        }
        return D;
      }
      _removeAllSchemas(D, U) {
        for (const k in D) {
          const R = D[k];
          (!U || U.test(k)) && (typeof R == "string" ? delete D[k] : R && !R.meta && (this._cache.delete(R.schema), delete D[k]));
        }
      }
      _addSchema(D, U, k, R = this.opts.validateSchema, x = this.opts.addUsedSchema) {
        let A;
        const { schemaId: L } = this.opts;
        if (typeof D == "object")
          A = D[L];
        else {
          if (this.opts.jtd)
            throw new Error("schema must be object");
          if (typeof D != "boolean")
            throw new Error("schema must be object or boolean");
        }
        let K = this._cache.get(D);
        if (K !== void 0)
          return K;
        k = (0, o.normalizeId)(A || k);
        const Q = o.getSchemaRefs.call(this, D, k);
        return K = new s.SchemaEnv({ schema: D, schemaId: L, meta: U, baseId: k, localRefs: Q }), this._cache.set(K.schema, K), x && !k.startsWith("#") && (k && this._checkUnique(k), this.refs[k] = K), R && this.validateSchema(D, !0), K;
      }
      _checkUnique(D) {
        if (this.schemas[D] || this.refs[D])
          throw new Error(`schema with key or id "${D}" already exists`);
      }
      _compileSchemaEnv(D) {
        if (D.meta ? this._compileMetaSchema(D) : s.compileSchema.call(this, D), !D.validate)
          throw new Error("ajv implementation error");
        return D.validate;
      }
      _compileMetaSchema(D) {
        const U = this.opts;
        this.opts = this._metaOpts;
        try {
          s.compileSchema.call(this, D);
        } finally {
          this.opts = U;
        }
      }
    }
    c.ValidationError = i.default, c.MissingRefError = u.default, e.default = c;
    function d(T, D, U, k = "error") {
      for (const R in T) {
        const x = R;
        x in D && this.logger[k](`${U}: option ${R}. ${T[x]}`);
      }
    }
    function p(T) {
      return T = (0, o.normalizeId)(T), this.schemas[T] || this.refs[T];
    }
    function I() {
      const T = this.opts.schemas;
      if (T)
        if (Array.isArray(T))
          this.addSchema(T);
        else
          for (const D in T)
            this.addSchema(T[D], D);
    }
    function $() {
      for (const T in this.opts.formats) {
        const D = this.opts.formats[T];
        D && this.addFormat(T, D);
      }
    }
    function E(T) {
      if (Array.isArray(T)) {
        this.addVocabulary(T);
        return;
      }
      this.logger.warn("keywords option as map is deprecated, pass array");
      for (const D in T) {
        const U = T[D];
        U.keyword || (U.keyword = D), this.addKeyword(U);
      }
    }
    function O() {
      const T = { ...this.opts };
      for (const D of w)
        delete T[D];
      return T;
    }
    const P = { log() {
    }, warn() {
    }, error() {
    } };
    function M(T) {
      if (T === !1)
        return P;
      if (T === void 0)
        return console;
      if (T.log && T.warn && T.error)
        return T;
      throw new Error("logger must implement log, warn and error methods");
    }
    const j = /^[a-z_$][a-z0-9_$:-]*$/i;
    function q(T, D) {
      const { RULES: U } = this;
      if ((0, y.eachItem)(T, (k) => {
        if (U.keywords[k])
          throw new Error(`Keyword ${k} is already defined`);
        if (!j.test(k))
          throw new Error(`Keyword ${k} has invalid name`);
      }), !!D && D.$data && !("code" in D || "validate" in D))
        throw new Error('$data keyword must have "code" or "validate" function');
    }
    function B(T, D, U) {
      var k;
      const R = D?.post;
      if (U && R)
        throw new Error('keyword with "post" flag cannot have "type"');
      const { RULES: x } = this;
      let A = R ? x.post : x.rules.find(({ type: K }) => K === U);
      if (A || (A = { type: U, rules: [] }, x.rules.push(A)), x.keywords[T] = !0, !D)
        return;
      const L = {
        keyword: T,
        definition: {
          ...D,
          type: (0, l.getJSONTypes)(D.type),
          schemaType: (0, l.getJSONTypes)(D.schemaType)
        }
      };
      D.before ? N.call(this, A, L, D.before) : A.rules.push(L), x.all[T] = L, (k = D.implements) === null || k === void 0 || k.forEach((K) => this.addKeyword(K));
    }
    function N(T, D, U) {
      const k = T.rules.findIndex((R) => R.keyword === U);
      k >= 0 ? T.rules.splice(k, 0, D) : (T.rules.push(D), this.logger.warn(`rule ${U} is not defined`));
    }
    function H(T) {
      let { metaSchema: D } = T;
      D !== void 0 && (T.$data && this.opts.$data && (D = J(D)), T.validateSchema = this.compile(D, !0));
    }
    const F = {
      $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
    };
    function J(T) {
      return { anyOf: [T, F] };
    }
  })(Dr)), Dr;
}
var on = {}, cn = {}, dn = {}, Zs;
function cu() {
  if (Zs) return dn;
  Zs = 1, Object.defineProperty(dn, "__esModule", { value: !0 });
  const e = {
    keyword: "id",
    code() {
      throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
    }
  };
  return dn.default = e, dn;
}
var it = {}, Qs;
function Zi() {
  if (Qs) return it;
  Qs = 1, Object.defineProperty(it, "__esModule", { value: !0 }), it.callRef = it.getValidate = void 0;
  const e = /* @__PURE__ */ Kt(), t = /* @__PURE__ */ Ce(), n = /* @__PURE__ */ ee(), i = /* @__PURE__ */ Me(), u = /* @__PURE__ */ Sr(), r = /* @__PURE__ */ ne(), s = {
    keyword: "$ref",
    schemaType: "string",
    code(l) {
      const { gen: y, schema: g, it: f } = l, { baseId: m, schemaEnv: w, validateName: _, opts: b, self: S } = f, { root: v } = w;
      if ((g === "#" || g === "#/") && m === v.baseId)
        return c();
      const h = u.resolveRef.call(S, v, m, g);
      if (h === void 0)
        throw new e.default(f.opts.uriResolver, m, g);
      if (h instanceof u.SchemaEnv)
        return d(h);
      return p(h);
      function c() {
        if (w === v)
          return o(l, _, w, w.$async);
        const I = y.scopeValue("root", { ref: v });
        return o(l, (0, n._)`${I}.validate`, v, v.$async);
      }
      function d(I) {
        const $ = a(l, I);
        o(l, $, I, I.$async);
      }
      function p(I) {
        const $ = y.scopeValue("schema", b.code.source === !0 ? { ref: I, code: (0, n.stringify)(I) } : { ref: I }), E = y.name("valid"), O = l.subschema({
          schema: I,
          dataTypes: [],
          schemaPath: n.nil,
          topSchemaRef: $,
          errSchemaPath: g
        }, E);
        l.mergeEvaluated(O), l.ok(E);
      }
    }
  };
  function a(l, y) {
    const { gen: g } = l;
    return y.validate ? g.scopeValue("validate", { ref: y.validate }) : (0, n._)`${g.scopeValue("wrapper", { ref: y })}.validate`;
  }
  it.getValidate = a;
  function o(l, y, g, f) {
    const { gen: m, it: w } = l, { allErrors: _, schemaEnv: b, opts: S } = w, v = S.passContext ? i.default.this : n.nil;
    f ? h() : c();
    function h() {
      if (!b.$async)
        throw new Error("async schema referenced by sync schema");
      const I = m.let("valid");
      m.try(() => {
        m.code((0, n._)`await ${(0, t.callValidateCode)(l, y, v)}`), p(y), _ || m.assign(I, !0);
      }, ($) => {
        m.if((0, n._)`!(${$} instanceof ${w.ValidationError})`, () => m.throw($)), d($), _ || m.assign(I, !1);
      }), l.ok(I);
    }
    function c() {
      l.result((0, t.callValidateCode)(l, y, v), () => p(y), () => d(y));
    }
    function d(I) {
      const $ = (0, n._)`${I}.errors`;
      m.assign(i.default.vErrors, (0, n._)`${i.default.vErrors} === null ? ${$} : ${i.default.vErrors}.concat(${$})`), m.assign(i.default.errors, (0, n._)`${i.default.vErrors}.length`);
    }
    function p(I) {
      var $;
      if (!w.opts.unevaluated)
        return;
      const E = ($ = g?.validate) === null || $ === void 0 ? void 0 : $.evaluated;
      if (w.props !== !0)
        if (E && !E.dynamicProps)
          E.props !== void 0 && (w.props = r.mergeEvaluated.props(m, E.props, w.props));
        else {
          const O = m.var("props", (0, n._)`${I}.evaluated.props`);
          w.props = r.mergeEvaluated.props(m, O, w.props, n.Name);
        }
      if (w.items !== !0)
        if (E && !E.dynamicItems)
          E.items !== void 0 && (w.items = r.mergeEvaluated.items(m, E.items, w.items));
        else {
          const O = m.var("items", (0, n._)`${I}.evaluated.items`);
          w.items = r.mergeEvaluated.items(m, O, w.items, n.Name);
        }
    }
  }
  return it.callRef = o, it.default = s, it;
}
var Ws;
function pc() {
  if (Ws) return cn;
  Ws = 1, Object.defineProperty(cn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ cu(), t = /* @__PURE__ */ Zi(), n = [
    "$schema",
    "$id",
    "$defs",
    "$vocabulary",
    { keyword: "$comment" },
    "definitions",
    e.default,
    t.default
  ];
  return cn.default = n, cn;
}
var un = {}, ln = {}, Xs;
function du() {
  if (Xs) return ln;
  Xs = 1, Object.defineProperty(ln, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), t = e.operators, n = {
    maximum: { okStr: "<=", ok: t.LTE, fail: t.GT },
    minimum: { okStr: ">=", ok: t.GTE, fail: t.LT },
    exclusiveMaximum: { okStr: "<", ok: t.LT, fail: t.GTE },
    exclusiveMinimum: { okStr: ">", ok: t.GT, fail: t.LTE }
  }, i = {
    message: ({ keyword: r, schemaCode: s }) => (0, e.str)`must be ${n[r].okStr} ${s}`,
    params: ({ keyword: r, schemaCode: s }) => (0, e._)`{comparison: ${n[r].okStr}, limit: ${s}}`
  }, u = {
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
  return ln.default = u, ln;
}
var fn = {}, Ys;
function uu() {
  if (Ys) return fn;
  Ys = 1, Object.defineProperty(fn, "__esModule", { value: !0 });
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
      const { gen: u, data: r, schemaCode: s, it: a } = i, o = a.opts.multipleOfPrecision, l = u.let("res"), y = o ? (0, e._)`Math.abs(Math.round(${l}) - ${l}) > 1e-${o}` : (0, e._)`${l} !== parseInt(${l})`;
      i.fail$data((0, e._)`(${s} === 0 || (${l} = ${r}/${s}, ${y}))`);
    }
  };
  return fn.default = n, fn;
}
var pn = {}, hn = {}, ea;
function lu() {
  if (ea) return hn;
  ea = 1, Object.defineProperty(hn, "__esModule", { value: !0 });
  function e(t) {
    const n = t.length;
    let i = 0, u = 0, r;
    for (; u < n; )
      i++, r = t.charCodeAt(u++), r >= 55296 && r <= 56319 && u < n && (r = t.charCodeAt(u), (r & 64512) === 56320 && u++);
    return i;
  }
  return hn.default = e, e.code = 'require("ajv/dist/runtime/ucs2length").default', hn;
}
var ta;
function fu() {
  if (ta) return pn;
  ta = 1, Object.defineProperty(pn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ ne(), n = /* @__PURE__ */ lu(), u = {
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
      const { keyword: s, data: a, schemaCode: o, it: l } = r, y = s === "maxLength" ? e.operators.GT : e.operators.LT, g = l.opts.unicode === !1 ? (0, e._)`${a}.length` : (0, e._)`${(0, t.useFunc)(r.gen, n.default)}(${a})`;
      r.fail$data((0, e._)`${g} ${y} ${o}`);
    }
  };
  return pn.default = u, pn;
}
var mn = {}, na;
function pu() {
  if (na) return mn;
  na = 1, Object.defineProperty(mn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ce(), t = /* @__PURE__ */ ne(), n = /* @__PURE__ */ ee(), u = {
    keyword: "pattern",
    type: "string",
    schemaType: "string",
    $data: !0,
    error: {
      message: ({ schemaCode: r }) => (0, n.str)`must match pattern "${r}"`,
      params: ({ schemaCode: r }) => (0, n._)`{pattern: ${r}}`
    },
    code(r) {
      const { gen: s, data: a, $data: o, schema: l, schemaCode: y, it: g } = r, f = g.opts.unicodeRegExp ? "u" : "";
      if (o) {
        const { regExp: m } = g.opts.code, w = m.code === "new RegExp" ? (0, n._)`new RegExp` : (0, t.useFunc)(s, m), _ = s.let("valid");
        s.try(() => s.assign(_, (0, n._)`${w}(${y}, ${f}).test(${a})`), () => s.assign(_, !1)), r.fail$data((0, n._)`!${_}`);
      } else {
        const m = (0, e.usePattern)(r, l);
        r.fail$data((0, n._)`!${m}.test(${a})`);
      }
    }
  };
  return mn.default = u, mn;
}
var yn = {}, ra;
function hu() {
  if (ra) return yn;
  ra = 1, Object.defineProperty(yn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), n = {
    keyword: ["maxProperties", "minProperties"],
    type: "object",
    schemaType: "number",
    $data: !0,
    error: {
      message({ keyword: i, schemaCode: u }) {
        const r = i === "maxProperties" ? "more" : "fewer";
        return (0, e.str)`must NOT have ${r} than ${u} properties`;
      },
      params: ({ schemaCode: i }) => (0, e._)`{limit: ${i}}`
    },
    code(i) {
      const { keyword: u, data: r, schemaCode: s } = i, a = u === "maxProperties" ? e.operators.GT : e.operators.LT;
      i.fail$data((0, e._)`Object.keys(${r}).length ${a} ${s}`);
    }
  };
  return yn.default = n, yn;
}
var gn = {}, ia;
function mu() {
  if (ia) return gn;
  ia = 1, Object.defineProperty(gn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ce(), t = /* @__PURE__ */ ee(), n = /* @__PURE__ */ ne(), u = {
    keyword: "required",
    type: "object",
    schemaType: "array",
    $data: !0,
    error: {
      message: ({ params: { missingProperty: r } }) => (0, t.str)`must have required property '${r}'`,
      params: ({ params: { missingProperty: r } }) => (0, t._)`{missingProperty: ${r}}`
    },
    code(r) {
      const { gen: s, schema: a, schemaCode: o, data: l, $data: y, it: g } = r, { opts: f } = g;
      if (!y && a.length === 0)
        return;
      const m = a.length >= f.loopRequired;
      if (g.allErrors ? w() : _(), f.strictRequired) {
        const v = r.parentSchema.properties, { definedProperties: h } = r.it;
        for (const c of a)
          if (v?.[c] === void 0 && !h.has(c)) {
            const d = g.schemaEnv.baseId + g.errSchemaPath, p = `required property "${c}" is not defined at "${d}" (strictRequired)`;
            (0, n.checkStrictMode)(g, p, g.opts.strictRequired);
          }
      }
      function w() {
        if (m || y)
          r.block$data(t.nil, b);
        else
          for (const v of a)
            (0, e.checkReportMissingProp)(r, v);
      }
      function _() {
        const v = s.let("missing");
        if (m || y) {
          const h = s.let("valid", !0);
          r.block$data(h, () => S(v, h)), r.ok(h);
        } else
          s.if((0, e.checkMissingProp)(r, a, v)), (0, e.reportMissingProp)(r, v), s.else();
      }
      function b() {
        s.forOf("prop", o, (v) => {
          r.setParams({ missingProperty: v }), s.if((0, e.noPropertyInData)(s, l, v, f.ownProperties), () => r.error());
        });
      }
      function S(v, h) {
        r.setParams({ missingProperty: v }), s.forOf(v, o, () => {
          s.assign(h, (0, e.propertyInData)(s, l, v, f.ownProperties)), s.if((0, t.not)(h), () => {
            r.error(), s.break();
          });
        }, t.nil);
      }
    }
  };
  return gn.default = u, gn;
}
var vn = {}, sa;
function yu() {
  if (sa) return vn;
  sa = 1, Object.defineProperty(vn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), n = {
    keyword: ["maxItems", "minItems"],
    type: "array",
    schemaType: "number",
    $data: !0,
    error: {
      message({ keyword: i, schemaCode: u }) {
        const r = i === "maxItems" ? "more" : "fewer";
        return (0, e.str)`must NOT have ${r} than ${u} items`;
      },
      params: ({ schemaCode: i }) => (0, e._)`{limit: ${i}}`
    },
    code(i) {
      const { keyword: u, data: r, schemaCode: s } = i, a = u === "maxItems" ? e.operators.GT : e.operators.LT;
      i.fail$data((0, e._)`${r}.length ${a} ${s}`);
    }
  };
  return vn.default = n, vn;
}
var bn = {}, wn = {}, aa;
function Qi() {
  if (aa) return wn;
  aa = 1, Object.defineProperty(wn, "__esModule", { value: !0 });
  const e = uc();
  return e.code = 'require("ajv/dist/runtime/equal").default', wn.default = e, wn;
}
var oa;
function gu() {
  if (oa) return bn;
  oa = 1, Object.defineProperty(bn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ fr(), t = /* @__PURE__ */ ee(), n = /* @__PURE__ */ ne(), i = /* @__PURE__ */ Qi(), r = {
    keyword: "uniqueItems",
    type: "array",
    schemaType: "boolean",
    $data: !0,
    error: {
      message: ({ params: { i: s, j: a } }) => (0, t.str)`must NOT have duplicate items (items ## ${a} and ${s} are identical)`,
      params: ({ params: { i: s, j: a } }) => (0, t._)`{i: ${s}, j: ${a}}`
    },
    code(s) {
      const { gen: a, data: o, $data: l, schema: y, parentSchema: g, schemaCode: f, it: m } = s;
      if (!l && !y)
        return;
      const w = a.let("valid"), _ = g.items ? (0, e.getSchemaTypes)(g.items) : [];
      s.block$data(w, b, (0, t._)`${f} === false`), s.ok(w);
      function b() {
        const c = a.let("i", (0, t._)`${o}.length`), d = a.let("j");
        s.setParams({ i: c, j: d }), a.assign(w, !0), a.if((0, t._)`${c} > 1`, () => (S() ? v : h)(c, d));
      }
      function S() {
        return _.length > 0 && !_.some((c) => c === "object" || c === "array");
      }
      function v(c, d) {
        const p = a.name("item"), I = (0, e.checkDataTypes)(_, p, m.opts.strictNumbers, e.DataType.Wrong), $ = a.const("indices", (0, t._)`{}`);
        a.for((0, t._)`;${c}--;`, () => {
          a.let(p, (0, t._)`${o}[${c}]`), a.if(I, (0, t._)`continue`), _.length > 1 && a.if((0, t._)`typeof ${p} == "string"`, (0, t._)`${p} += "_"`), a.if((0, t._)`typeof ${$}[${p}] == "number"`, () => {
            a.assign(d, (0, t._)`${$}[${p}]`), s.error(), a.assign(w, !1).break();
          }).code((0, t._)`${$}[${p}] = ${c}`);
        });
      }
      function h(c, d) {
        const p = (0, n.useFunc)(a, i.default), I = a.name("outer");
        a.label(I).for((0, t._)`;${c}--;`, () => a.for((0, t._)`${d} = ${c}; ${d}--;`, () => a.if((0, t._)`${p}(${o}[${c}], ${o}[${d}])`, () => {
          s.error(), a.assign(w, !1).break(I);
        })));
      }
    }
  };
  return bn.default = r, bn;
}
var _n = {}, ca;
function vu() {
  if (ca) return _n;
  ca = 1, Object.defineProperty(_n, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ ne(), n = /* @__PURE__ */ Qi(), u = {
    keyword: "const",
    $data: !0,
    error: {
      message: "must be equal to constant",
      params: ({ schemaCode: r }) => (0, e._)`{allowedValue: ${r}}`
    },
    code(r) {
      const { gen: s, data: a, $data: o, schemaCode: l, schema: y } = r;
      o || y && typeof y == "object" ? r.fail$data((0, e._)`!${(0, t.useFunc)(s, n.default)}(${a}, ${l})`) : r.fail((0, e._)`${y} !== ${a}`);
    }
  };
  return _n.default = u, _n;
}
var Sn = {}, da;
function bu() {
  if (da) return Sn;
  da = 1, Object.defineProperty(Sn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ ne(), n = /* @__PURE__ */ Qi(), u = {
    keyword: "enum",
    schemaType: "array",
    $data: !0,
    error: {
      message: "must be equal to one of the allowed values",
      params: ({ schemaCode: r }) => (0, e._)`{allowedValues: ${r}}`
    },
    code(r) {
      const { gen: s, data: a, $data: o, schema: l, schemaCode: y, it: g } = r;
      if (!o && l.length === 0)
        throw new Error("enum must have non-empty array");
      const f = l.length >= g.opts.loopEnum;
      let m;
      const w = () => m ?? (m = (0, t.useFunc)(s, n.default));
      let _;
      if (f || o)
        _ = s.let("valid"), r.block$data(_, b);
      else {
        if (!Array.isArray(l))
          throw new Error("ajv implementation error");
        const v = s.const("vSchema", y);
        _ = (0, e.or)(...l.map((h, c) => S(v, c)));
      }
      r.pass(_);
      function b() {
        s.assign(_, !1), s.forOf("v", y, (v) => s.if((0, e._)`${w()}(${a}, ${v})`, () => s.assign(_, !0).break()));
      }
      function S(v, h) {
        const c = l[h];
        return typeof c == "object" && c !== null ? (0, e._)`${w()}(${a}, ${v}[${h}])` : (0, e._)`${a} === ${c}`;
      }
    }
  };
  return Sn.default = u, Sn;
}
var ua;
function hc() {
  if (ua) return un;
  ua = 1, Object.defineProperty(un, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ du(), t = /* @__PURE__ */ uu(), n = /* @__PURE__ */ fu(), i = /* @__PURE__ */ pu(), u = /* @__PURE__ */ hu(), r = /* @__PURE__ */ mu(), s = /* @__PURE__ */ yu(), a = /* @__PURE__ */ gu(), o = /* @__PURE__ */ vu(), l = /* @__PURE__ */ bu(), y = [
    // number
    e.default,
    t.default,
    // string
    n.default,
    i.default,
    // object
    u.default,
    r.default,
    // array
    s.default,
    a.default,
    // any
    { keyword: "type", schemaType: ["string", "array"] },
    { keyword: "nullable", schemaType: "boolean" },
    o.default,
    l.default
  ];
  return un.default = y, un;
}
var In = {}, bt = {}, la;
function mc() {
  if (la) return bt;
  la = 1, Object.defineProperty(bt, "__esModule", { value: !0 }), bt.validateAdditionalItems = void 0;
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
      u(r, o);
    }
  };
  function u(r, s) {
    const { gen: a, schema: o, data: l, keyword: y, it: g } = r;
    g.items = !0;
    const f = a.const("len", (0, e._)`${l}.length`);
    if (o === !1)
      r.setParams({ len: s.length }), r.pass((0, e._)`${f} <= ${s.length}`);
    else if (typeof o == "object" && !(0, t.alwaysValidSchema)(g, o)) {
      const w = a.var("valid", (0, e._)`${f} <= ${s.length}`);
      a.if((0, e.not)(w), () => m(w)), r.ok(w);
    }
    function m(w) {
      a.forRange("i", s.length, f, (_) => {
        r.subschema({ keyword: y, dataProp: _, dataPropType: t.Type.Num }, w), g.allErrors || a.if((0, e.not)(w), () => a.break());
      });
    }
  }
  return bt.validateAdditionalItems = u, bt.default = i, bt;
}
var $n = {}, wt = {}, fa;
function yc() {
  if (fa) return wt;
  fa = 1, Object.defineProperty(wt, "__esModule", { value: !0 }), wt.validateTuple = void 0;
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ ne(), n = /* @__PURE__ */ Ce(), i = {
    keyword: "items",
    type: "array",
    schemaType: ["object", "array", "boolean"],
    before: "uniqueItems",
    code(r) {
      const { schema: s, it: a } = r;
      if (Array.isArray(s))
        return u(r, "additionalItems", s);
      a.items = !0, !(0, t.alwaysValidSchema)(a, s) && r.ok((0, n.validateArray)(r));
    }
  };
  function u(r, s, a = r.schema) {
    const { gen: o, parentSchema: l, data: y, keyword: g, it: f } = r;
    _(l), f.opts.unevaluated && a.length && f.items !== !0 && (f.items = t.mergeEvaluated.items(o, a.length, f.items));
    const m = o.name("valid"), w = o.const("len", (0, e._)`${y}.length`);
    a.forEach((b, S) => {
      (0, t.alwaysValidSchema)(f, b) || (o.if((0, e._)`${w} > ${S}`, () => r.subschema({
        keyword: g,
        schemaProp: S,
        dataProp: S
      }, m)), r.ok(m));
    });
    function _(b) {
      const { opts: S, errSchemaPath: v } = f, h = a.length, c = h === b.minItems && (h === b.maxItems || b[s] === !1);
      if (S.strictTuples && !c) {
        const d = `"${g}" is ${h}-tuple, but minItems or maxItems/${s} are not specified or different at path "${v}"`;
        (0, t.checkStrictMode)(f, d, S.strictTuples);
      }
    }
  }
  return wt.validateTuple = u, wt.default = i, wt;
}
var pa;
function wu() {
  if (pa) return $n;
  pa = 1, Object.defineProperty($n, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ yc(), t = {
    keyword: "prefixItems",
    type: "array",
    schemaType: ["array"],
    before: "uniqueItems",
    code: (n) => (0, e.validateTuple)(n, "items")
  };
  return $n.default = t, $n;
}
var xn = {}, ha;
function _u() {
  if (ha) return xn;
  ha = 1, Object.defineProperty(xn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ ne(), n = /* @__PURE__ */ Ce(), i = /* @__PURE__ */ mc(), r = {
    keyword: "items",
    type: "array",
    schemaType: ["object", "boolean"],
    before: "uniqueItems",
    error: {
      message: ({ params: { len: s } }) => (0, e.str)`must NOT have more than ${s} items`,
      params: ({ params: { len: s } }) => (0, e._)`{limit: ${s}}`
    },
    code(s) {
      const { schema: a, parentSchema: o, it: l } = s, { prefixItems: y } = o;
      l.items = !0, !(0, t.alwaysValidSchema)(l, a) && (y ? (0, i.validateAdditionalItems)(s, y) : s.ok((0, n.validateArray)(s)));
    }
  };
  return xn.default = r, xn;
}
var Rn = {}, ma;
function Su() {
  if (ma) return Rn;
  ma = 1, Object.defineProperty(Rn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ ne(), i = {
    keyword: "contains",
    type: "array",
    schemaType: ["object", "boolean"],
    before: "uniqueItems",
    trackErrors: !0,
    error: {
      message: ({ params: { min: u, max: r } }) => r === void 0 ? (0, e.str)`must contain at least ${u} valid item(s)` : (0, e.str)`must contain at least ${u} and no more than ${r} valid item(s)`,
      params: ({ params: { min: u, max: r } }) => r === void 0 ? (0, e._)`{minContains: ${u}}` : (0, e._)`{minContains: ${u}, maxContains: ${r}}`
    },
    code(u) {
      const { gen: r, schema: s, parentSchema: a, data: o, it: l } = u;
      let y, g;
      const { minContains: f, maxContains: m } = a;
      l.opts.next ? (y = f === void 0 ? 1 : f, g = m) : y = 1;
      const w = r.const("len", (0, e._)`${o}.length`);
      if (u.setParams({ min: y, max: g }), g === void 0 && y === 0) {
        (0, t.checkStrictMode)(l, '"minContains" == 0 without "maxContains": "contains" keyword ignored');
        return;
      }
      if (g !== void 0 && y > g) {
        (0, t.checkStrictMode)(l, '"minContains" > "maxContains" is always invalid'), u.fail();
        return;
      }
      if ((0, t.alwaysValidSchema)(l, s)) {
        let h = (0, e._)`${w} >= ${y}`;
        g !== void 0 && (h = (0, e._)`${h} && ${w} <= ${g}`), u.pass(h);
        return;
      }
      l.items = !0;
      const _ = r.name("valid");
      g === void 0 && y === 1 ? S(_, () => r.if(_, () => r.break())) : y === 0 ? (r.let(_, !0), g !== void 0 && r.if((0, e._)`${o}.length > 0`, b)) : (r.let(_, !1), b()), u.result(_, () => u.reset());
      function b() {
        const h = r.name("_valid"), c = r.let("count", 0);
        S(h, () => r.if(h, () => v(c)));
      }
      function S(h, c) {
        r.forRange("i", 0, w, (d) => {
          u.subschema({
            keyword: "contains",
            dataProp: d,
            dataPropType: t.Type.Num,
            compositeRule: !0
          }, h), c();
        });
      }
      function v(h) {
        r.code((0, e._)`${h}++`), g === void 0 ? r.if((0, e._)`${h} >= ${y}`, () => r.assign(_, !0).break()) : (r.if((0, e._)`${h} > ${g}`, () => r.assign(_, !1).break()), y === 1 ? r.assign(_, !0) : r.if((0, e._)`${h} >= ${y}`, () => r.assign(_, !0)));
      }
    }
  };
  return Rn.default = i, Rn;
}
var Hr = {}, ya;
function Wi() {
  return ya || (ya = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.validateSchemaDeps = e.validatePropertyDeps = e.error = void 0;
    const t = /* @__PURE__ */ ee(), n = /* @__PURE__ */ ne(), i = /* @__PURE__ */ Ce();
    e.error = {
      message: ({ params: { property: o, depsCount: l, deps: y } }) => {
        const g = l === 1 ? "property" : "properties";
        return (0, t.str)`must have ${g} ${y} when property ${o} is present`;
      },
      params: ({ params: { property: o, depsCount: l, deps: y, missingProperty: g } }) => (0, t._)`{property: ${o},
    missingProperty: ${g},
    depsCount: ${l},
    deps: ${y}}`
      // TODO change to reference
    };
    const u = {
      keyword: "dependencies",
      type: "object",
      schemaType: "object",
      error: e.error,
      code(o) {
        const [l, y] = r(o);
        s(o, l), a(o, y);
      }
    };
    function r({ schema: o }) {
      const l = {}, y = {};
      for (const g in o) {
        if (g === "__proto__")
          continue;
        const f = Array.isArray(o[g]) ? l : y;
        f[g] = o[g];
      }
      return [l, y];
    }
    function s(o, l = o.schema) {
      const { gen: y, data: g, it: f } = o;
      if (Object.keys(l).length === 0)
        return;
      const m = y.let("missing");
      for (const w in l) {
        const _ = l[w];
        if (_.length === 0)
          continue;
        const b = (0, i.propertyInData)(y, g, w, f.opts.ownProperties);
        o.setParams({
          property: w,
          depsCount: _.length,
          deps: _.join(", ")
        }), f.allErrors ? y.if(b, () => {
          for (const S of _)
            (0, i.checkReportMissingProp)(o, S);
        }) : (y.if((0, t._)`${b} && (${(0, i.checkMissingProp)(o, _, m)})`), (0, i.reportMissingProp)(o, m), y.else());
      }
    }
    e.validatePropertyDeps = s;
    function a(o, l = o.schema) {
      const { gen: y, data: g, keyword: f, it: m } = o, w = y.name("valid");
      for (const _ in l)
        (0, n.alwaysValidSchema)(m, l[_]) || (y.if(
          (0, i.propertyInData)(y, g, _, m.opts.ownProperties),
          () => {
            const b = o.subschema({ keyword: f, schemaProp: _ }, w);
            o.mergeValidEvaluated(b, w);
          },
          () => y.var(w, !0)
          // TODO var
        ), o.ok(w));
    }
    e.validateSchemaDeps = a, e.default = u;
  })(Hr)), Hr;
}
var En = {}, ga;
function Iu() {
  if (ga) return En;
  ga = 1, Object.defineProperty(En, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ ne(), i = {
    keyword: "propertyNames",
    type: "object",
    schemaType: ["object", "boolean"],
    error: {
      message: "property name must be valid",
      params: ({ params: u }) => (0, e._)`{propertyName: ${u.propertyName}}`
    },
    code(u) {
      const { gen: r, schema: s, data: a, it: o } = u;
      if ((0, t.alwaysValidSchema)(o, s))
        return;
      const l = r.name("valid");
      r.forIn("key", a, (y) => {
        u.setParams({ propertyName: y }), u.subschema({
          keyword: "propertyNames",
          data: y,
          dataTypes: ["string"],
          propertyName: y,
          compositeRule: !0
        }, l), r.if((0, e.not)(l), () => {
          u.error(!0), o.allErrors || r.break();
        });
      }), u.ok(l);
    }
  };
  return En.default = i, En;
}
var jn = {}, va;
function gc() {
  if (va) return jn;
  va = 1, Object.defineProperty(jn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ce(), t = /* @__PURE__ */ ee(), n = /* @__PURE__ */ Me(), i = /* @__PURE__ */ ne(), r = {
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
      const { gen: a, schema: o, parentSchema: l, data: y, errsCount: g, it: f } = s;
      if (!g)
        throw new Error("ajv implementation error");
      const { allErrors: m, opts: w } = f;
      if (f.props = !0, w.removeAdditional !== "all" && (0, i.alwaysValidSchema)(f, o))
        return;
      const _ = (0, e.allSchemaProperties)(l.properties), b = (0, e.allSchemaProperties)(l.patternProperties);
      S(), s.ok((0, t._)`${g} === ${n.default.errors}`);
      function S() {
        a.forIn("key", y, (p) => {
          !_.length && !b.length ? c(p) : a.if(v(p), () => c(p));
        });
      }
      function v(p) {
        let I;
        if (_.length > 8) {
          const $ = (0, i.schemaRefOrVal)(f, l.properties, "properties");
          I = (0, e.isOwnProperty)(a, $, p);
        } else _.length ? I = (0, t.or)(..._.map(($) => (0, t._)`${p} === ${$}`)) : I = t.nil;
        return b.length && (I = (0, t.or)(I, ...b.map(($) => (0, t._)`${(0, e.usePattern)(s, $)}.test(${p})`))), (0, t.not)(I);
      }
      function h(p) {
        a.code((0, t._)`delete ${y}[${p}]`);
      }
      function c(p) {
        if (w.removeAdditional === "all" || w.removeAdditional && o === !1) {
          h(p);
          return;
        }
        if (o === !1) {
          s.setParams({ additionalProperty: p }), s.error(), m || a.break();
          return;
        }
        if (typeof o == "object" && !(0, i.alwaysValidSchema)(f, o)) {
          const I = a.name("valid");
          w.removeAdditional === "failing" ? (d(p, I, !1), a.if((0, t.not)(I), () => {
            s.reset(), h(p);
          })) : (d(p, I), m || a.if((0, t.not)(I), () => a.break()));
        }
      }
      function d(p, I, $) {
        const E = {
          keyword: "additionalProperties",
          dataProp: p,
          dataPropType: i.Type.Str
        };
        $ === !1 && Object.assign(E, {
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }), s.subschema(E, I);
      }
    }
  };
  return jn.default = r, jn;
}
var An = {}, ba;
function $u() {
  if (ba) return An;
  ba = 1, Object.defineProperty(An, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Jt(), t = /* @__PURE__ */ Ce(), n = /* @__PURE__ */ ne(), i = /* @__PURE__ */ gc(), u = {
    keyword: "properties",
    type: "object",
    schemaType: "object",
    code(r) {
      const { gen: s, schema: a, parentSchema: o, data: l, it: y } = r;
      y.opts.removeAdditional === "all" && o.additionalProperties === void 0 && i.default.code(new e.KeywordCxt(y, i.default, "additionalProperties"));
      const g = (0, t.allSchemaProperties)(a);
      for (const b of g)
        y.definedProperties.add(b);
      y.opts.unevaluated && g.length && y.props !== !0 && (y.props = n.mergeEvaluated.props(s, (0, n.toHash)(g), y.props));
      const f = g.filter((b) => !(0, n.alwaysValidSchema)(y, a[b]));
      if (f.length === 0)
        return;
      const m = s.name("valid");
      for (const b of f)
        w(b) ? _(b) : (s.if((0, t.propertyInData)(s, l, b, y.opts.ownProperties)), _(b), y.allErrors || s.else().var(m, !0), s.endIf()), r.it.definedProperties.add(b), r.ok(m);
      function w(b) {
        return y.opts.useDefaults && !y.compositeRule && a[b].default !== void 0;
      }
      function _(b) {
        r.subschema({
          keyword: "properties",
          schemaProp: b,
          dataProp: b
        }, m);
      }
    }
  };
  return An.default = u, An;
}
var On = {}, wa;
function xu() {
  if (wa) return On;
  wa = 1, Object.defineProperty(On, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Ce(), t = /* @__PURE__ */ ee(), n = /* @__PURE__ */ ne(), i = /* @__PURE__ */ ne(), u = {
    keyword: "patternProperties",
    type: "object",
    schemaType: "object",
    code(r) {
      const { gen: s, schema: a, data: o, parentSchema: l, it: y } = r, { opts: g } = y, f = (0, e.allSchemaProperties)(a), m = f.filter((c) => (0, n.alwaysValidSchema)(y, a[c]));
      if (f.length === 0 || m.length === f.length && (!y.opts.unevaluated || y.props === !0))
        return;
      const w = g.strictSchema && !g.allowMatchingProperties && l.properties, _ = s.name("valid");
      y.props !== !0 && !(y.props instanceof t.Name) && (y.props = (0, i.evaluatedPropsToName)(s, y.props));
      const { props: b } = y;
      S();
      function S() {
        for (const c of f)
          w && v(c), y.allErrors ? h(c) : (s.var(_, !0), h(c), s.if(_));
      }
      function v(c) {
        for (const d in w)
          new RegExp(c).test(d) && (0, n.checkStrictMode)(y, `property ${d} matches pattern ${c} (use allowMatchingProperties)`);
      }
      function h(c) {
        s.forIn("key", o, (d) => {
          s.if((0, t._)`${(0, e.usePattern)(r, c)}.test(${d})`, () => {
            const p = m.includes(c);
            p || r.subschema({
              keyword: "patternProperties",
              schemaProp: c,
              dataProp: d,
              dataPropType: i.Type.Str
            }, _), y.opts.unevaluated && b !== !0 ? s.assign((0, t._)`${b}[${d}]`, !0) : !p && !y.allErrors && s.if((0, t.not)(_), () => s.break());
          });
        });
      }
    }
  };
  return On.default = u, On;
}
var qn = {}, _a;
function Ru() {
  if (_a) return qn;
  _a = 1, Object.defineProperty(qn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ne(), t = {
    keyword: "not",
    schemaType: ["object", "boolean"],
    trackErrors: !0,
    code(n) {
      const { gen: i, schema: u, it: r } = n;
      if ((0, e.alwaysValidSchema)(r, u)) {
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
  return qn.default = t, qn;
}
var Nn = {}, Sa;
function Eu() {
  if (Sa) return Nn;
  Sa = 1, Object.defineProperty(Nn, "__esModule", { value: !0 });
  const t = {
    keyword: "anyOf",
    schemaType: "array",
    trackErrors: !0,
    code: (/* @__PURE__ */ Ce()).validateUnion,
    error: { message: "must match a schema in anyOf" }
  };
  return Nn.default = t, Nn;
}
var Tn = {}, Ia;
function ju() {
  if (Ia) return Tn;
  Ia = 1, Object.defineProperty(Tn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ ne(), i = {
    keyword: "oneOf",
    schemaType: "array",
    trackErrors: !0,
    error: {
      message: "must match exactly one schema in oneOf",
      params: ({ params: u }) => (0, e._)`{passingSchemas: ${u.passing}}`
    },
    code(u) {
      const { gen: r, schema: s, parentSchema: a, it: o } = u;
      if (!Array.isArray(s))
        throw new Error("ajv implementation error");
      if (o.opts.discriminator && a.discriminator)
        return;
      const l = s, y = r.let("valid", !1), g = r.let("passing", null), f = r.name("_valid");
      u.setParams({ passing: g }), r.block(m), u.result(y, () => u.reset(), () => u.error(!0));
      function m() {
        l.forEach((w, _) => {
          let b;
          (0, t.alwaysValidSchema)(o, w) ? r.var(f, !0) : b = u.subschema({
            keyword: "oneOf",
            schemaProp: _,
            compositeRule: !0
          }, f), _ > 0 && r.if((0, e._)`${f} && ${y}`).assign(y, !1).assign(g, (0, e._)`[${g}, ${_}]`).else(), r.if(f, () => {
            r.assign(y, !0), r.assign(g, _), b && u.mergeEvaluated(b, e.Name);
          });
        });
      }
    }
  };
  return Tn.default = i, Tn;
}
var Pn = {}, $a;
function Au() {
  if ($a) return Pn;
  $a = 1, Object.defineProperty(Pn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ne(), t = {
    keyword: "allOf",
    schemaType: "array",
    code(n) {
      const { gen: i, schema: u, it: r } = n;
      if (!Array.isArray(u))
        throw new Error("ajv implementation error");
      const s = i.name("valid");
      u.forEach((a, o) => {
        if ((0, e.alwaysValidSchema)(r, a))
          return;
        const l = n.subschema({ keyword: "allOf", schemaProp: o }, s);
        n.ok(s), n.mergeEvaluated(l);
      });
    }
  };
  return Pn.default = t, Pn;
}
var Dn = {}, xa;
function Ou() {
  if (xa) return Dn;
  xa = 1, Object.defineProperty(Dn, "__esModule", { value: !0 });
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
      const l = u(o, "then"), y = u(o, "else");
      if (!l && !y)
        return;
      const g = s.let("valid", !0), f = s.name("_valid");
      if (m(), r.reset(), l && y) {
        const _ = s.let("ifClause");
        r.setParams({ ifClause: _ }), s.if(f, w("then", _), w("else", _));
      } else l ? s.if(f, w("then")) : s.if((0, e.not)(f), w("else"));
      r.pass(g, () => r.error(!0));
      function m() {
        const _ = r.subschema({
          keyword: "if",
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }, f);
        r.mergeEvaluated(_);
      }
      function w(_, b) {
        return () => {
          const S = r.subschema({ keyword: _ }, f);
          s.assign(g, f), r.mergeValidEvaluated(S, g), b ? s.assign(b, (0, e._)`${_}`) : r.setParams({ ifClause: _ });
        };
      }
    }
  };
  function u(r, s) {
    const a = r.schema[s];
    return a !== void 0 && !(0, t.alwaysValidSchema)(r, a);
  }
  return Dn.default = i, Dn;
}
var kn = {}, Ra;
function qu() {
  if (Ra) return kn;
  Ra = 1, Object.defineProperty(kn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ne(), t = {
    keyword: ["then", "else"],
    schemaType: ["object", "boolean"],
    code({ keyword: n, parentSchema: i, it: u }) {
      i.if === void 0 && (0, e.checkStrictMode)(u, `"${n}" without "if" is ignored`);
    }
  };
  return kn.default = t, kn;
}
var Ea;
function vc() {
  if (Ea) return In;
  Ea = 1, Object.defineProperty(In, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ mc(), t = /* @__PURE__ */ wu(), n = /* @__PURE__ */ yc(), i = /* @__PURE__ */ _u(), u = /* @__PURE__ */ Su(), r = /* @__PURE__ */ Wi(), s = /* @__PURE__ */ Iu(), a = /* @__PURE__ */ gc(), o = /* @__PURE__ */ $u(), l = /* @__PURE__ */ xu(), y = /* @__PURE__ */ Ru(), g = /* @__PURE__ */ Eu(), f = /* @__PURE__ */ ju(), m = /* @__PURE__ */ Au(), w = /* @__PURE__ */ Ou(), _ = /* @__PURE__ */ qu();
  function b(S = !1) {
    const v = [
      // any
      y.default,
      g.default,
      f.default,
      m.default,
      w.default,
      _.default,
      // object
      s.default,
      a.default,
      r.default,
      o.default,
      l.default
    ];
    return S ? v.push(t.default, i.default) : v.push(e.default, n.default), v.push(u.default), v;
  }
  return In.default = b, In;
}
var Ln = {}, _t = {}, ja;
function bc() {
  if (ja) return _t;
  ja = 1, Object.defineProperty(_t, "__esModule", { value: !0 }), _t.dynamicAnchor = void 0;
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ Me(), n = /* @__PURE__ */ Sr(), i = /* @__PURE__ */ Zi(), u = {
    keyword: "$dynamicAnchor",
    schemaType: "string",
    code: (a) => r(a, a.schema)
  };
  function r(a, o) {
    const { gen: l, it: y } = a;
    y.schemaEnv.root.dynamicAnchors[o] = !0;
    const g = (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(o)}`, f = y.errSchemaPath === "#" ? y.validateName : s(a);
    l.if((0, e._)`!${g}`, () => l.assign(g, f));
  }
  _t.dynamicAnchor = r;
  function s(a) {
    const { schemaEnv: o, schema: l, self: y } = a.it, { root: g, baseId: f, localRefs: m, meta: w } = o.root, { schemaId: _ } = y.opts, b = new n.SchemaEnv({ schema: l, schemaId: _, root: g, baseId: f, localRefs: m, meta: w });
    return n.compileSchema.call(y, b), (0, i.getValidate)(a, b);
  }
  return _t.default = u, _t;
}
var St = {}, Aa;
function wc() {
  if (Aa) return St;
  Aa = 1, Object.defineProperty(St, "__esModule", { value: !0 }), St.dynamicRef = void 0;
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ Me(), n = /* @__PURE__ */ Zi(), i = {
    keyword: "$dynamicRef",
    schemaType: "string",
    code: (r) => u(r, r.schema)
  };
  function u(r, s) {
    const { gen: a, keyword: o, it: l } = r;
    if (s[0] !== "#")
      throw new Error(`"${o}" only supports hash fragment reference`);
    const y = s.slice(1);
    if (l.allErrors)
      g();
    else {
      const m = a.let("valid", !1);
      g(m), r.ok(m);
    }
    function g(m) {
      if (l.schemaEnv.root.dynamicAnchors[y]) {
        const w = a.let("_v", (0, e._)`${t.default.dynamicAnchors}${(0, e.getProperty)(y)}`);
        a.if(w, f(w, m), f(l.validateName, m));
      } else
        f(l.validateName, m)();
    }
    function f(m, w) {
      return w ? () => a.block(() => {
        (0, n.callRef)(r, m), a.let(w, !0);
      }) : () => (0, n.callRef)(r, m);
    }
  }
  return St.dynamicRef = u, St.default = i, St;
}
var Mn = {}, Oa;
function Nu() {
  if (Oa) return Mn;
  Oa = 1, Object.defineProperty(Mn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ bc(), t = /* @__PURE__ */ ne(), n = {
    keyword: "$recursiveAnchor",
    schemaType: "boolean",
    code(i) {
      i.schema ? (0, e.dynamicAnchor)(i, "") : (0, t.checkStrictMode)(i.it, "$recursiveAnchor: false is ignored");
    }
  };
  return Mn.default = n, Mn;
}
var Cn = {}, qa;
function Tu() {
  if (qa) return Cn;
  qa = 1, Object.defineProperty(Cn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ wc(), t = {
    keyword: "$recursiveRef",
    schemaType: "string",
    code: (n) => (0, e.dynamicRef)(n, n.schema)
  };
  return Cn.default = t, Cn;
}
var Na;
function Pu() {
  if (Na) return Ln;
  Na = 1, Object.defineProperty(Ln, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ bc(), t = /* @__PURE__ */ wc(), n = /* @__PURE__ */ Nu(), i = /* @__PURE__ */ Tu(), u = [e.default, t.default, n.default, i.default];
  return Ln.default = u, Ln;
}
var Un = {}, zn = {}, Ta;
function Du() {
  if (Ta) return zn;
  Ta = 1, Object.defineProperty(zn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Wi(), t = {
    keyword: "dependentRequired",
    type: "object",
    schemaType: "object",
    error: e.error,
    code: (n) => (0, e.validatePropertyDeps)(n)
  };
  return zn.default = t, zn;
}
var Vn = {}, Pa;
function ku() {
  if (Pa) return Vn;
  Pa = 1, Object.defineProperty(Vn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Wi(), t = {
    keyword: "dependentSchemas",
    type: "object",
    schemaType: "object",
    code: (n) => (0, e.validateSchemaDeps)(n)
  };
  return Vn.default = t, Vn;
}
var Fn = {}, Da;
function Lu() {
  if (Da) return Fn;
  Da = 1, Object.defineProperty(Fn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ne(), t = {
    keyword: ["maxContains", "minContains"],
    type: "array",
    schemaType: "number",
    code({ keyword: n, parentSchema: i, it: u }) {
      i.contains === void 0 && (0, e.checkStrictMode)(u, `"${n}" without "contains" is ignored`);
    }
  };
  return Fn.default = t, Fn;
}
var ka;
function Mu() {
  if (ka) return Un;
  ka = 1, Object.defineProperty(Un, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Du(), t = /* @__PURE__ */ ku(), n = /* @__PURE__ */ Lu(), i = [e.default, t.default, n.default];
  return Un.default = i, Un;
}
var Hn = {}, Bn = {}, La;
function Cu() {
  if (La) return Bn;
  La = 1, Object.defineProperty(Bn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ ne(), n = /* @__PURE__ */ Me(), u = {
    keyword: "unevaluatedProperties",
    type: "object",
    schemaType: ["boolean", "object"],
    trackErrors: !0,
    error: {
      message: "must NOT have unevaluated properties",
      params: ({ params: r }) => (0, e._)`{unevaluatedProperty: ${r.unevaluatedProperty}}`
    },
    code(r) {
      const { gen: s, schema: a, data: o, errsCount: l, it: y } = r;
      if (!l)
        throw new Error("ajv implementation error");
      const { allErrors: g, props: f } = y;
      f instanceof e.Name ? s.if((0, e._)`${f} !== true`, () => s.forIn("key", o, (b) => s.if(w(f, b), () => m(b)))) : f !== !0 && s.forIn("key", o, (b) => f === void 0 ? m(b) : s.if(_(f, b), () => m(b))), y.props = !0, r.ok((0, e._)`${l} === ${n.default.errors}`);
      function m(b) {
        if (a === !1) {
          r.setParams({ unevaluatedProperty: b }), r.error(), g || s.break();
          return;
        }
        if (!(0, t.alwaysValidSchema)(y, a)) {
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
      function _(b, S) {
        const v = [];
        for (const h in b)
          b[h] === !0 && v.push((0, e._)`${S} !== ${h}`);
        return (0, e.and)(...v);
      }
    }
  };
  return Bn.default = u, Bn;
}
var Jn = {}, Ma;
function Uu() {
  if (Ma) return Jn;
  Ma = 1, Object.defineProperty(Jn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ ne(), i = {
    keyword: "unevaluatedItems",
    type: "array",
    schemaType: ["boolean", "object"],
    error: {
      message: ({ params: { len: u } }) => (0, e.str)`must NOT have more than ${u} items`,
      params: ({ params: { len: u } }) => (0, e._)`{limit: ${u}}`
    },
    code(u) {
      const { gen: r, schema: s, data: a, it: o } = u, l = o.items || 0;
      if (l === !0)
        return;
      const y = r.const("len", (0, e._)`${a}.length`);
      if (s === !1)
        u.setParams({ len: l }), u.fail((0, e._)`${y} > ${l}`);
      else if (typeof s == "object" && !(0, t.alwaysValidSchema)(o, s)) {
        const f = r.var("valid", (0, e._)`${y} <= ${l}`);
        r.if((0, e.not)(f), () => g(f, l)), u.ok(f);
      }
      o.items = !0;
      function g(f, m) {
        r.forRange("i", m, y, (w) => {
          u.subschema({ keyword: "unevaluatedItems", dataProp: w, dataPropType: t.Type.Num }, f), o.allErrors || r.if((0, e.not)(f), () => r.break());
        });
      }
    }
  };
  return Jn.default = i, Jn;
}
var Ca;
function zu() {
  if (Ca) return Hn;
  Ca = 1, Object.defineProperty(Hn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ Cu(), t = /* @__PURE__ */ Uu(), n = [e.default, t.default];
  return Hn.default = n, Hn;
}
var Kn = {}, Gn = {}, Ua;
function Vu() {
  if (Ua) return Gn;
  Ua = 1, Object.defineProperty(Gn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), n = {
    keyword: "format",
    type: ["number", "string"],
    schemaType: "string",
    $data: !0,
    error: {
      message: ({ schemaCode: i }) => (0, e.str)`must match format "${i}"`,
      params: ({ schemaCode: i }) => (0, e._)`{format: ${i}}`
    },
    code(i, u) {
      const { gen: r, data: s, $data: a, schema: o, schemaCode: l, it: y } = i, { opts: g, errSchemaPath: f, schemaEnv: m, self: w } = y;
      if (!g.validateFormats)
        return;
      a ? _() : b();
      function _() {
        const S = r.scopeValue("formats", {
          ref: w.formats,
          code: g.code.formats
        }), v = r.const("fDef", (0, e._)`${S}[${l}]`), h = r.let("fType"), c = r.let("format");
        r.if((0, e._)`typeof ${v} == "object" && !(${v} instanceof RegExp)`, () => r.assign(h, (0, e._)`${v}.type || "string"`).assign(c, (0, e._)`${v}.validate`), () => r.assign(h, (0, e._)`"string"`).assign(c, v)), i.fail$data((0, e.or)(d(), p()));
        function d() {
          return g.strictSchema === !1 ? e.nil : (0, e._)`${l} && !${c}`;
        }
        function p() {
          const I = m.$async ? (0, e._)`(${v}.async ? await ${c}(${s}) : ${c}(${s}))` : (0, e._)`${c}(${s})`, $ = (0, e._)`(typeof ${c} == "function" ? ${I} : ${c}.test(${s}))`;
          return (0, e._)`${c} && ${c} !== true && ${h} === ${u} && !${$}`;
        }
      }
      function b() {
        const S = w.formats[o];
        if (!S) {
          d();
          return;
        }
        if (S === !0)
          return;
        const [v, h, c] = p(S);
        v === u && i.pass(I());
        function d() {
          if (g.strictSchema === !1) {
            w.logger.warn($());
            return;
          }
          throw new Error($());
          function $() {
            return `unknown format "${o}" ignored in schema at path "${f}"`;
          }
        }
        function p($) {
          const E = $ instanceof RegExp ? (0, e.regexpCode)($) : g.code.formats ? (0, e._)`${g.code.formats}${(0, e.getProperty)(o)}` : void 0, O = r.scopeValue("formats", { key: o, ref: $, code: E });
          return typeof $ == "object" && !($ instanceof RegExp) ? [$.type || "string", $.validate, (0, e._)`${O}.validate`] : ["string", $, O];
        }
        function I() {
          if (typeof S == "object" && !(S instanceof RegExp) && S.async) {
            if (!m.$async)
              throw new Error("async format in sync schema");
            return (0, e._)`await ${c}(${s})`;
          }
          return typeof h == "function" ? (0, e._)`${c}(${s})` : (0, e._)`${c}.test(${s})`;
        }
      }
    }
  };
  return Gn.default = n, Gn;
}
var za;
function _c() {
  if (za) return Kn;
  za = 1, Object.defineProperty(Kn, "__esModule", { value: !0 });
  const t = [(/* @__PURE__ */ Vu()).default];
  return Kn.default = t, Kn;
}
var lt = {}, Va;
function Sc() {
  return Va || (Va = 1, Object.defineProperty(lt, "__esModule", { value: !0 }), lt.contentVocabulary = lt.metadataVocabulary = void 0, lt.metadataVocabulary = [
    "title",
    "description",
    "default",
    "deprecated",
    "readOnly",
    "writeOnly",
    "examples"
  ], lt.contentVocabulary = [
    "contentMediaType",
    "contentEncoding",
    "contentSchema"
  ]), lt;
}
var Fa;
function Fu() {
  if (Fa) return on;
  Fa = 1, Object.defineProperty(on, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ pc(), t = /* @__PURE__ */ hc(), n = /* @__PURE__ */ vc(), i = /* @__PURE__ */ Pu(), u = /* @__PURE__ */ Mu(), r = /* @__PURE__ */ zu(), s = /* @__PURE__ */ _c(), a = /* @__PURE__ */ Sc(), o = [
    i.default,
    e.default,
    t.default,
    (0, n.default)(!0),
    s.default,
    a.metadataVocabulary,
    a.contentVocabulary,
    u.default,
    r.default
  ];
  return on.default = o, on;
}
var Zn = {}, Dt = {}, Ha;
function Hu() {
  if (Ha) return Dt;
  Ha = 1, Object.defineProperty(Dt, "__esModule", { value: !0 }), Dt.DiscrError = void 0;
  var e;
  return (function(t) {
    t.Tag = "tag", t.Mapping = "mapping";
  })(e || (Dt.DiscrError = e = {})), Dt;
}
var Ba;
function Ic() {
  if (Ba) return Zn;
  Ba = 1, Object.defineProperty(Zn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ ee(), t = /* @__PURE__ */ Hu(), n = /* @__PURE__ */ Sr(), i = /* @__PURE__ */ Kt(), u = /* @__PURE__ */ ne(), s = {
    keyword: "discriminator",
    type: "object",
    schemaType: "object",
    error: {
      message: ({ params: { discrError: a, tagName: o } }) => a === t.DiscrError.Tag ? `tag "${o}" must be string` : `value of tag "${o}" must be in oneOf`,
      params: ({ params: { discrError: a, tag: o, tagName: l } }) => (0, e._)`{error: ${a}, tag: ${l}, tagValue: ${o}}`
    },
    code(a) {
      const { gen: o, data: l, schema: y, parentSchema: g, it: f } = a, { oneOf: m } = g;
      if (!f.opts.discriminator)
        throw new Error("discriminator: requires discriminator option");
      const w = y.propertyName;
      if (typeof w != "string")
        throw new Error("discriminator: requires propertyName");
      if (y.mapping)
        throw new Error("discriminator: mapping is not supported");
      if (!m)
        throw new Error("discriminator: requires oneOf keyword");
      const _ = o.let("valid", !1), b = o.const("tag", (0, e._)`${l}${(0, e.getProperty)(w)}`);
      o.if((0, e._)`typeof ${b} == "string"`, () => S(), () => a.error(!1, { discrError: t.DiscrError.Tag, tag: b, tagName: w })), a.ok(_);
      function S() {
        const c = h();
        o.if(!1);
        for (const d in c)
          o.elseIf((0, e._)`${b} === ${d}`), o.assign(_, v(c[d]));
        o.else(), a.error(!1, { discrError: t.DiscrError.Mapping, tag: b, tagName: w }), o.endIf();
      }
      function v(c) {
        const d = o.name("valid"), p = a.subschema({ keyword: "oneOf", schemaProp: c }, d);
        return a.mergeEvaluated(p, e.Name), d;
      }
      function h() {
        var c;
        const d = {}, p = $(g);
        let I = !0;
        for (let P = 0; P < m.length; P++) {
          let M = m[P];
          if (M?.$ref && !(0, u.schemaHasRulesButRef)(M, f.self.RULES)) {
            const q = M.$ref;
            if (M = n.resolveRef.call(f.self, f.schemaEnv.root, f.baseId, q), M instanceof n.SchemaEnv && (M = M.schema), M === void 0)
              throw new i.default(f.opts.uriResolver, f.baseId, q);
          }
          const j = (c = M?.properties) === null || c === void 0 ? void 0 : c[w];
          if (typeof j != "object")
            throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${w}"`);
          I = I && (p || $(M)), E(j, P);
        }
        if (!I)
          throw new Error(`discriminator: "${w}" must be required`);
        return d;
        function $({ required: P }) {
          return Array.isArray(P) && P.includes(w);
        }
        function E(P, M) {
          if (P.const)
            O(P.const, M);
          else if (P.enum)
            for (const j of P.enum)
              O(j, M);
          else
            throw new Error(`discriminator: "properties/${w}" must have "const" or "enum"`);
        }
        function O(P, M) {
          if (typeof P != "string" || P in d)
            throw new Error(`discriminator: "${w}" values must be unique strings`);
          d[P] = M;
        }
      }
    }
  };
  return Zn.default = s, Zn;
}
var Qn = {};
const Bu = "https://json-schema.org/draft/2020-12/schema", Ju = "https://json-schema.org/draft/2020-12/schema", Ku = { "https://json-schema.org/draft/2020-12/vocab/core": !0, "https://json-schema.org/draft/2020-12/vocab/applicator": !0, "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0, "https://json-schema.org/draft/2020-12/vocab/validation": !0, "https://json-schema.org/draft/2020-12/vocab/meta-data": !0, "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0, "https://json-schema.org/draft/2020-12/vocab/content": !0 }, Gu = "meta", Zu = "Core and Validation specifications meta-schema", Qu = [{ $ref: "meta/core" }, { $ref: "meta/applicator" }, { $ref: "meta/unevaluated" }, { $ref: "meta/validation" }, { $ref: "meta/meta-data" }, { $ref: "meta/format-annotation" }, { $ref: "meta/content" }], Wu = ["object", "boolean"], Xu = "This meta-schema also defines keywords that have appeared in previous drafts in order to prevent incompatible extensions as they remain in common use.", Yu = { definitions: { $comment: '"definitions" has been replaced by "$defs".', type: "object", additionalProperties: { $dynamicRef: "#meta" }, deprecated: !0, default: {} }, dependencies: { $comment: '"dependencies" has been split and replaced by "dependentSchemas" and "dependentRequired" in order to serve their differing semantics.', type: "object", additionalProperties: { anyOf: [{ $dynamicRef: "#meta" }, { $ref: "meta/validation#/$defs/stringArray" }] }, deprecated: !0, default: {} }, $recursiveAnchor: { $comment: '"$recursiveAnchor" has been replaced by "$dynamicAnchor".', $ref: "meta/core#/$defs/anchorString", deprecated: !0 }, $recursiveRef: { $comment: '"$recursiveRef" has been replaced by "$dynamicRef".', $ref: "meta/core#/$defs/uriReferenceString", deprecated: !0 } }, el = {
  $schema: Bu,
  $id: Ju,
  $vocabulary: Ku,
  $dynamicAnchor: Gu,
  title: Zu,
  allOf: Qu,
  type: Wu,
  $comment: Xu,
  properties: Yu
}, tl = "https://json-schema.org/draft/2020-12/schema", nl = "https://json-schema.org/draft/2020-12/meta/applicator", rl = { "https://json-schema.org/draft/2020-12/vocab/applicator": !0 }, il = "meta", sl = "Applicator vocabulary meta-schema", al = ["object", "boolean"], ol = { prefixItems: { $ref: "#/$defs/schemaArray" }, items: { $dynamicRef: "#meta" }, contains: { $dynamicRef: "#meta" }, additionalProperties: { $dynamicRef: "#meta" }, properties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, patternProperties: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, propertyNames: { format: "regex" }, default: {} }, dependentSchemas: { type: "object", additionalProperties: { $dynamicRef: "#meta" }, default: {} }, propertyNames: { $dynamicRef: "#meta" }, if: { $dynamicRef: "#meta" }, then: { $dynamicRef: "#meta" }, else: { $dynamicRef: "#meta" }, allOf: { $ref: "#/$defs/schemaArray" }, anyOf: { $ref: "#/$defs/schemaArray" }, oneOf: { $ref: "#/$defs/schemaArray" }, not: { $dynamicRef: "#meta" } }, cl = { schemaArray: { type: "array", minItems: 1, items: { $dynamicRef: "#meta" } } }, dl = {
  $schema: tl,
  $id: nl,
  $vocabulary: rl,
  $dynamicAnchor: il,
  title: sl,
  type: al,
  properties: ol,
  $defs: cl
}, ul = "https://json-schema.org/draft/2020-12/schema", ll = "https://json-schema.org/draft/2020-12/meta/unevaluated", fl = { "https://json-schema.org/draft/2020-12/vocab/unevaluated": !0 }, pl = "meta", hl = "Unevaluated applicator vocabulary meta-schema", ml = ["object", "boolean"], yl = { unevaluatedItems: { $dynamicRef: "#meta" }, unevaluatedProperties: { $dynamicRef: "#meta" } }, gl = {
  $schema: ul,
  $id: ll,
  $vocabulary: fl,
  $dynamicAnchor: pl,
  title: hl,
  type: ml,
  properties: yl
}, vl = "https://json-schema.org/draft/2020-12/schema", bl = "https://json-schema.org/draft/2020-12/meta/content", wl = { "https://json-schema.org/draft/2020-12/vocab/content": !0 }, _l = "meta", Sl = "Content vocabulary meta-schema", Il = ["object", "boolean"], $l = { contentEncoding: { type: "string" }, contentMediaType: { type: "string" }, contentSchema: { $dynamicRef: "#meta" } }, xl = {
  $schema: vl,
  $id: bl,
  $vocabulary: wl,
  $dynamicAnchor: _l,
  title: Sl,
  type: Il,
  properties: $l
}, Rl = "https://json-schema.org/draft/2020-12/schema", El = "https://json-schema.org/draft/2020-12/meta/core", jl = { "https://json-schema.org/draft/2020-12/vocab/core": !0 }, Al = "meta", Ol = "Core vocabulary meta-schema", ql = ["object", "boolean"], Nl = { $id: { $ref: "#/$defs/uriReferenceString", $comment: "Non-empty fragments not allowed.", pattern: "^[^#]*#?$" }, $schema: { $ref: "#/$defs/uriString" }, $ref: { $ref: "#/$defs/uriReferenceString" }, $anchor: { $ref: "#/$defs/anchorString" }, $dynamicRef: { $ref: "#/$defs/uriReferenceString" }, $dynamicAnchor: { $ref: "#/$defs/anchorString" }, $vocabulary: { type: "object", propertyNames: { $ref: "#/$defs/uriString" }, additionalProperties: { type: "boolean" } }, $comment: { type: "string" }, $defs: { type: "object", additionalProperties: { $dynamicRef: "#meta" } } }, Tl = { anchorString: { type: "string", pattern: "^[A-Za-z_][-A-Za-z0-9._]*$" }, uriString: { type: "string", format: "uri" }, uriReferenceString: { type: "string", format: "uri-reference" } }, Pl = {
  $schema: Rl,
  $id: El,
  $vocabulary: jl,
  $dynamicAnchor: Al,
  title: Ol,
  type: ql,
  properties: Nl,
  $defs: Tl
}, Dl = "https://json-schema.org/draft/2020-12/schema", kl = "https://json-schema.org/draft/2020-12/meta/format-annotation", Ll = { "https://json-schema.org/draft/2020-12/vocab/format-annotation": !0 }, Ml = "meta", Cl = "Format vocabulary meta-schema for annotation results", Ul = ["object", "boolean"], zl = { format: { type: "string" } }, Vl = {
  $schema: Dl,
  $id: kl,
  $vocabulary: Ll,
  $dynamicAnchor: Ml,
  title: Cl,
  type: Ul,
  properties: zl
}, Fl = "https://json-schema.org/draft/2020-12/schema", Hl = "https://json-schema.org/draft/2020-12/meta/meta-data", Bl = { "https://json-schema.org/draft/2020-12/vocab/meta-data": !0 }, Jl = "meta", Kl = "Meta-data vocabulary meta-schema", Gl = ["object", "boolean"], Zl = { title: { type: "string" }, description: { type: "string" }, default: !0, deprecated: { type: "boolean", default: !1 }, readOnly: { type: "boolean", default: !1 }, writeOnly: { type: "boolean", default: !1 }, examples: { type: "array", items: !0 } }, Ql = {
  $schema: Fl,
  $id: Hl,
  $vocabulary: Bl,
  $dynamicAnchor: Jl,
  title: Kl,
  type: Gl,
  properties: Zl
}, Wl = "https://json-schema.org/draft/2020-12/schema", Xl = "https://json-schema.org/draft/2020-12/meta/validation", Yl = { "https://json-schema.org/draft/2020-12/vocab/validation": !0 }, ef = "meta", tf = "Validation vocabulary meta-schema", nf = ["object", "boolean"], rf = { type: { anyOf: [{ $ref: "#/$defs/simpleTypes" }, { type: "array", items: { $ref: "#/$defs/simpleTypes" }, minItems: 1, uniqueItems: !0 }] }, const: !0, enum: { type: "array", items: !0 }, multipleOf: { type: "number", exclusiveMinimum: 0 }, maximum: { type: "number" }, exclusiveMaximum: { type: "number" }, minimum: { type: "number" }, exclusiveMinimum: { type: "number" }, maxLength: { $ref: "#/$defs/nonNegativeInteger" }, minLength: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, pattern: { type: "string", format: "regex" }, maxItems: { $ref: "#/$defs/nonNegativeInteger" }, minItems: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, uniqueItems: { type: "boolean", default: !1 }, maxContains: { $ref: "#/$defs/nonNegativeInteger" }, minContains: { $ref: "#/$defs/nonNegativeInteger", default: 1 }, maxProperties: { $ref: "#/$defs/nonNegativeInteger" }, minProperties: { $ref: "#/$defs/nonNegativeIntegerDefault0" }, required: { $ref: "#/$defs/stringArray" }, dependentRequired: { type: "object", additionalProperties: { $ref: "#/$defs/stringArray" } } }, sf = { nonNegativeInteger: { type: "integer", minimum: 0 }, nonNegativeIntegerDefault0: { $ref: "#/$defs/nonNegativeInteger", default: 0 }, simpleTypes: { enum: ["array", "boolean", "integer", "null", "number", "object", "string"] }, stringArray: { type: "array", items: { type: "string" }, uniqueItems: !0, default: [] } }, af = {
  $schema: Wl,
  $id: Xl,
  $vocabulary: Yl,
  $dynamicAnchor: ef,
  title: tf,
  type: nf,
  properties: rf,
  $defs: sf
};
var Ja;
function of() {
  if (Ja) return Qn;
  Ja = 1, Object.defineProperty(Qn, "__esModule", { value: !0 });
  const e = el, t = dl, n = gl, i = xl, u = Pl, r = Vl, s = Ql, a = af, o = ["/properties"];
  function l(y) {
    return [
      e,
      t,
      n,
      i,
      u,
      g(this, r),
      s,
      g(this, a)
    ].forEach((f) => this.addMetaSchema(f, void 0, !1)), this;
    function g(f, m) {
      return y ? f.$dataMetaSchema(m, o) : m;
    }
  }
  return Qn.default = l, Qn;
}
var Ka;
function cf() {
  return Ka || (Ka = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.MissingRefError = t.ValidationError = t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = t.Ajv2020 = void 0;
    const n = /* @__PURE__ */ fc(), i = /* @__PURE__ */ Fu(), u = /* @__PURE__ */ Ic(), r = /* @__PURE__ */ of(), s = "https://json-schema.org/draft/2020-12/schema";
    class a extends n.default {
      constructor(m = {}) {
        super({
          ...m,
          dynamicRef: !0,
          next: !0,
          unevaluated: !0
        });
      }
      _addVocabularies() {
        super._addVocabularies(), i.default.forEach((m) => this.addVocabulary(m)), this.opts.discriminator && this.addKeyword(u.default);
      }
      _addDefaultMetaSchema() {
        super._addDefaultMetaSchema();
        const { $data: m, meta: w } = this.opts;
        w && (r.default.call(this, m), this.refs["http://json-schema.org/schema"] = s);
      }
      defaultMeta() {
        return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(s) ? s : void 0);
      }
    }
    t.Ajv2020 = a, e.exports = t = a, e.exports.Ajv2020 = a, Object.defineProperty(t, "__esModule", { value: !0 }), t.default = a;
    var o = /* @__PURE__ */ Jt();
    Object.defineProperty(t, "KeywordCxt", { enumerable: !0, get: function() {
      return o.KeywordCxt;
    } });
    var l = /* @__PURE__ */ ee();
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
    var y = /* @__PURE__ */ _r();
    Object.defineProperty(t, "ValidationError", { enumerable: !0, get: function() {
      return y.default;
    } });
    var g = /* @__PURE__ */ Kt();
    Object.defineProperty(t, "MissingRefError", { enumerable: !0, get: function() {
      return g.default;
    } });
  })(tn, tn.exports)), tn.exports;
}
var df = /* @__PURE__ */ cf();
const uf = /* @__PURE__ */ Gi(df);
var Wn = { exports: {} }, Br = {}, Ga;
function lf() {
  return Ga || (Ga = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.formatNames = e.fastFormats = e.fullFormats = void 0;
    function t(P, M) {
      return { validate: P, compare: M };
    }
    e.fullFormats = {
      // date: http://tools.ietf.org/html/rfc3339#section-5.6
      date: t(r, s),
      // date-time: http://tools.ietf.org/html/rfc3339#section-5.6
      time: t(o(!0), l),
      "date-time": t(f(!0), m),
      "iso-time": t(o(), y),
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
      byte: h,
      // signed 32 bit integer
      int32: { type: "number", validate: p },
      // signed 64 bit integer
      int64: { type: "number", validate: I },
      // C-type float
      float: { type: "number", validate: $ },
      // C-type double
      double: { type: "number", validate: $ },
      // hint to the UI to hide input strings
      password: !0,
      // unchecked string payload
      binary: !0
    }, e.fastFormats = {
      ...e.fullFormats,
      date: t(/^\d\d\d\d-[0-1]\d-[0-3]\d$/, s),
      time: t(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, l),
      "date-time": t(/^\d\d\d\d-[0-1]\d-[0-3]\dt(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i, m),
      "iso-time": t(/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, y),
      "iso-date-time": t(/^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i, w),
      // uri: https://github.com/mafintosh/is-my-json-valid/blob/master/formats.js
      uri: /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/)?[^\s]*$/i,
      "uri-reference": /^(?:(?:[a-z][a-z0-9+\-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i,
      // email (sources from jsen validator):
      // http://stackoverflow.com/questions/201323/using-a-regular-expression-to-validate-an-email-address#answer-8829363
      // http://www.w3.org/TR/html5/forms.html#valid-e-mail-address (search for 'wilful violation')
      email: /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i
    }, e.formatNames = Object.keys(e.fullFormats);
    function n(P) {
      return P % 4 === 0 && (P % 100 !== 0 || P % 400 === 0);
    }
    const i = /^(\d\d\d\d)-(\d\d)-(\d\d)$/, u = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    function r(P) {
      const M = i.exec(P);
      if (!M)
        return !1;
      const j = +M[1], q = +M[2], B = +M[3];
      return q >= 1 && q <= 12 && B >= 1 && B <= (q === 2 && n(j) ? 29 : u[q]);
    }
    function s(P, M) {
      if (P && M)
        return P > M ? 1 : P < M ? -1 : 0;
    }
    const a = /^(\d\d):(\d\d):(\d\d(?:\.\d+)?)(z|([+-])(\d\d)(?::?(\d\d))?)?$/i;
    function o(P) {
      return function(j) {
        const q = a.exec(j);
        if (!q)
          return !1;
        const B = +q[1], N = +q[2], H = +q[3], F = q[4], J = q[5] === "-" ? -1 : 1, T = +(q[6] || 0), D = +(q[7] || 0);
        if (T > 23 || D > 59 || P && !F)
          return !1;
        if (B <= 23 && N <= 59 && H < 60)
          return !0;
        const U = N - D * J, k = B - T * J - (U < 0 ? 1 : 0);
        return (k === 23 || k === -1) && (U === 59 || U === -1) && H < 61;
      };
    }
    function l(P, M) {
      if (!(P && M))
        return;
      const j = (/* @__PURE__ */ new Date("2020-01-01T" + P)).valueOf(), q = (/* @__PURE__ */ new Date("2020-01-01T" + M)).valueOf();
      if (j && q)
        return j - q;
    }
    function y(P, M) {
      if (!(P && M))
        return;
      const j = a.exec(P), q = a.exec(M);
      if (j && q)
        return P = j[1] + j[2] + j[3], M = q[1] + q[2] + q[3], P > M ? 1 : P < M ? -1 : 0;
    }
    const g = /t|\s/i;
    function f(P) {
      const M = o(P);
      return function(q) {
        const B = q.split(g);
        return B.length === 2 && r(B[0]) && M(B[1]);
      };
    }
    function m(P, M) {
      if (!(P && M))
        return;
      const j = new Date(P).valueOf(), q = new Date(M).valueOf();
      if (j && q)
        return j - q;
    }
    function w(P, M) {
      if (!(P && M))
        return;
      const [j, q] = P.split(g), [B, N] = M.split(g), H = s(j, B);
      if (H !== void 0)
        return H || l(q, N);
    }
    const _ = /\/|:/, b = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
    function S(P) {
      return _.test(P) && b.test(P);
    }
    const v = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/gm;
    function h(P) {
      return v.lastIndex = 0, v.test(P);
    }
    const c = -2147483648, d = 2 ** 31 - 1;
    function p(P) {
      return Number.isInteger(P) && P <= d && P >= c;
    }
    function I(P) {
      return Number.isInteger(P);
    }
    function $() {
      return !0;
    }
    const E = /[^\\]\\Z/;
    function O(P) {
      if (E.test(P))
        return !1;
      try {
        return new RegExp(P), !0;
      } catch {
        return !1;
      }
    }
  })(Br)), Br;
}
var Jr = {}, Xn = { exports: {} }, Yn = {}, Za;
function ff() {
  if (Za) return Yn;
  Za = 1, Object.defineProperty(Yn, "__esModule", { value: !0 });
  const e = /* @__PURE__ */ pc(), t = /* @__PURE__ */ hc(), n = /* @__PURE__ */ vc(), i = /* @__PURE__ */ _c(), u = /* @__PURE__ */ Sc(), r = [
    e.default,
    t.default,
    (0, n.default)(),
    i.default,
    u.metadataVocabulary,
    u.contentVocabulary
  ];
  return Yn.default = r, Yn;
}
const pf = "http://json-schema.org/draft-07/schema#", hf = "http://json-schema.org/draft-07/schema#", mf = "Core schema meta-schema", yf = { schemaArray: { type: "array", minItems: 1, items: { $ref: "#" } }, nonNegativeInteger: { type: "integer", minimum: 0 }, nonNegativeIntegerDefault0: { allOf: [{ $ref: "#/definitions/nonNegativeInteger" }, { default: 0 }] }, simpleTypes: { enum: ["array", "boolean", "integer", "null", "number", "object", "string"] }, stringArray: { type: "array", items: { type: "string" }, uniqueItems: !0, default: [] } }, gf = ["object", "boolean"], vf = { $id: { type: "string", format: "uri-reference" }, $schema: { type: "string", format: "uri" }, $ref: { type: "string", format: "uri-reference" }, $comment: { type: "string" }, title: { type: "string" }, description: { type: "string" }, default: !0, readOnly: { type: "boolean", default: !1 }, examples: { type: "array", items: !0 }, multipleOf: { type: "number", exclusiveMinimum: 0 }, maximum: { type: "number" }, exclusiveMaximum: { type: "number" }, minimum: { type: "number" }, exclusiveMinimum: { type: "number" }, maxLength: { $ref: "#/definitions/nonNegativeInteger" }, minLength: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, pattern: { type: "string", format: "regex" }, additionalItems: { $ref: "#" }, items: { anyOf: [{ $ref: "#" }, { $ref: "#/definitions/schemaArray" }], default: !0 }, maxItems: { $ref: "#/definitions/nonNegativeInteger" }, minItems: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, uniqueItems: { type: "boolean", default: !1 }, contains: { $ref: "#" }, maxProperties: { $ref: "#/definitions/nonNegativeInteger" }, minProperties: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, required: { $ref: "#/definitions/stringArray" }, additionalProperties: { $ref: "#" }, definitions: { type: "object", additionalProperties: { $ref: "#" }, default: {} }, properties: { type: "object", additionalProperties: { $ref: "#" }, default: {} }, patternProperties: { type: "object", additionalProperties: { $ref: "#" }, propertyNames: { format: "regex" }, default: {} }, dependencies: { type: "object", additionalProperties: { anyOf: [{ $ref: "#" }, { $ref: "#/definitions/stringArray" }] } }, propertyNames: { $ref: "#" }, const: !0, enum: { type: "array", items: !0, minItems: 1, uniqueItems: !0 }, type: { anyOf: [{ $ref: "#/definitions/simpleTypes" }, { type: "array", items: { $ref: "#/definitions/simpleTypes" }, minItems: 1, uniqueItems: !0 }] }, format: { type: "string" }, contentMediaType: { type: "string" }, contentEncoding: { type: "string" }, if: { $ref: "#" }, then: { $ref: "#" }, else: { $ref: "#" }, allOf: { $ref: "#/definitions/schemaArray" }, anyOf: { $ref: "#/definitions/schemaArray" }, oneOf: { $ref: "#/definitions/schemaArray" }, not: { $ref: "#" } }, bf = {
  $schema: pf,
  $id: hf,
  title: mf,
  definitions: yf,
  type: gf,
  properties: vf,
  default: !0
};
var Qa;
function wf() {
  return Qa || (Qa = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.MissingRefError = t.ValidationError = t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = t.Ajv = void 0;
    const n = /* @__PURE__ */ fc(), i = /* @__PURE__ */ ff(), u = /* @__PURE__ */ Ic(), r = bf, s = ["/properties"], a = "http://json-schema.org/draft-07/schema";
    class o extends n.default {
      _addVocabularies() {
        super._addVocabularies(), i.default.forEach((w) => this.addVocabulary(w)), this.opts.discriminator && this.addKeyword(u.default);
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
    var l = /* @__PURE__ */ Jt();
    Object.defineProperty(t, "KeywordCxt", { enumerable: !0, get: function() {
      return l.KeywordCxt;
    } });
    var y = /* @__PURE__ */ ee();
    Object.defineProperty(t, "_", { enumerable: !0, get: function() {
      return y._;
    } }), Object.defineProperty(t, "str", { enumerable: !0, get: function() {
      return y.str;
    } }), Object.defineProperty(t, "stringify", { enumerable: !0, get: function() {
      return y.stringify;
    } }), Object.defineProperty(t, "nil", { enumerable: !0, get: function() {
      return y.nil;
    } }), Object.defineProperty(t, "Name", { enumerable: !0, get: function() {
      return y.Name;
    } }), Object.defineProperty(t, "CodeGen", { enumerable: !0, get: function() {
      return y.CodeGen;
    } });
    var g = /* @__PURE__ */ _r();
    Object.defineProperty(t, "ValidationError", { enumerable: !0, get: function() {
      return g.default;
    } });
    var f = /* @__PURE__ */ Kt();
    Object.defineProperty(t, "MissingRefError", { enumerable: !0, get: function() {
      return f.default;
    } });
  })(Xn, Xn.exports)), Xn.exports;
}
var Wa;
function _f() {
  return Wa || (Wa = 1, (function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.formatLimitDefinition = void 0;
    const t = /* @__PURE__ */ wf(), n = /* @__PURE__ */ ee(), i = n.operators, u = {
      formatMaximum: { okStr: "<=", ok: i.LTE, fail: i.GT },
      formatMinimum: { okStr: ">=", ok: i.GTE, fail: i.LT },
      formatExclusiveMaximum: { okStr: "<", ok: i.LT, fail: i.GTE },
      formatExclusiveMinimum: { okStr: ">", ok: i.GT, fail: i.LTE }
    }, r = {
      message: ({ keyword: a, schemaCode: o }) => (0, n.str)`should be ${u[a].okStr} ${o}`,
      params: ({ keyword: a, schemaCode: o }) => (0, n._)`{comparison: ${u[a].okStr}, limit: ${o}}`
    };
    e.formatLimitDefinition = {
      keyword: Object.keys(u),
      type: "string",
      schemaType: "string",
      $data: !0,
      error: r,
      code(a) {
        const { gen: o, data: l, schemaCode: y, keyword: g, it: f } = a, { opts: m, self: w } = f;
        if (!m.validateFormats)
          return;
        const _ = new t.KeywordCxt(f, w.RULES.all.format.definition, "format");
        _.$data ? b() : S();
        function b() {
          const h = o.scopeValue("formats", {
            ref: w.formats,
            code: m.code.formats
          }), c = o.const("fmt", (0, n._)`${h}[${_.schemaCode}]`);
          a.fail$data((0, n.or)((0, n._)`typeof ${c} != "object"`, (0, n._)`${c} instanceof RegExp`, (0, n._)`typeof ${c}.compare != "function"`, v(c)));
        }
        function S() {
          const h = _.schema, c = w.formats[h];
          if (!c || c === !0)
            return;
          if (typeof c != "object" || c instanceof RegExp || typeof c.compare != "function")
            throw new Error(`"${g}": format "${h}" does not define "compare" function`);
          const d = o.scopeValue("formats", {
            key: h,
            ref: c,
            code: m.code.formats ? (0, n._)`${m.code.formats}${(0, n.getProperty)(h)}` : void 0
          });
          a.fail$data(v(d));
        }
        function v(h) {
          return (0, n._)`${h}.compare(${l}, ${y}) ${u[g].fail} 0`;
        }
      },
      dependencies: ["format"]
    };
    const s = (a) => (a.addKeyword(e.formatLimitDefinition), a);
    e.default = s;
  })(Jr)), Jr;
}
var Xa;
function Sf() {
  return Xa || (Xa = 1, (function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    const n = lf(), i = _f(), u = /* @__PURE__ */ ee(), r = new u.Name("fullFormats"), s = new u.Name("fastFormats"), a = (l, y = { keywords: !0 }) => {
      if (Array.isArray(y))
        return o(l, y, n.fullFormats, r), l;
      const [g, f] = y.mode === "fast" ? [n.fastFormats, s] : [n.fullFormats, r], m = y.formats || n.formatNames;
      return o(l, m, g, f), y.keywords && (0, i.default)(l), l;
    };
    a.get = (l, y = "full") => {
      const f = (y === "fast" ? n.fastFormats : n.fullFormats)[l];
      if (!f)
        throw new Error(`Unknown format "${l}"`);
      return f;
    };
    function o(l, y, g, f) {
      var m, w;
      (m = (w = l.opts.code).formats) !== null && m !== void 0 || (w.formats = (0, u._)`require("ajv-formats/dist/formats").${f}`);
      for (const _ of y)
        l.addFormat(_, g[_]);
    }
    e.exports = t = a, Object.defineProperty(t, "__esModule", { value: !0 }), t.default = a;
  })(Wn, Wn.exports)), Wn.exports;
}
var If = Sf();
const $f = /* @__PURE__ */ Gi(If);
/*! noble-ed25519 - MIT License (c) 2019 Paul Miller (paulmillr.com) */
const xf = {
  p: 0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffedn,
  n: 0x1000000000000000000000000000000014def9dea2f79cd65812631a5cf5d3edn,
  a: 0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffecn,
  d: 0x52036cee2b6ffe738cc740797779e89800700a4d4141d8ab75eb4dca135978a3n,
  Gx: 0x216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51an,
  Gy: 0x6666666666666666666666666666666666666666666666666666666666666658n
}, { p: ve, n: ir, Gx: Ya, Gy: eo, a: Kr, d: Gr } = xf, Rf = 8n, Lt = 32, Li = 64, Ae = (e = "") => {
  throw new Error(e);
}, Ef = (e) => typeof e == "bigint", $c = (e) => typeof e == "string", jf = (e) => e instanceof Uint8Array || ArrayBuffer.isView(e) && e.constructor.name === "Uint8Array", At = (e, t) => !jf(e) || typeof t == "number" && t > 0 && e.length !== t ? Ae("Uint8Array expected") : e, Ir = (e) => new Uint8Array(e), Xi = (e) => Uint8Array.from(e), xc = (e, t) => e.toString(16).padStart(t, "0"), Yi = (e) => Array.from(At(e)).map((t) => xc(t, 2)).join(""), Qe = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 }, to = (e) => {
  if (e >= Qe._0 && e <= Qe._9)
    return e - Qe._0;
  if (e >= Qe.A && e <= Qe.F)
    return e - (Qe.A - 10);
  if (e >= Qe.a && e <= Qe.f)
    return e - (Qe.a - 10);
}, es = (e) => {
  const t = "hex invalid";
  if (!$c(e))
    return Ae(t);
  const n = e.length, i = n / 2;
  if (n % 2)
    return Ae(t);
  const u = Ir(i);
  for (let r = 0, s = 0; r < i; r++, s += 2) {
    const a = to(e.charCodeAt(s)), o = to(e.charCodeAt(s + 1));
    if (a === void 0 || o === void 0)
      return Ae(t);
    u[r] = a * 16 + o;
  }
  return u;
}, sr = (e, t) => At($c(e) ? es(e) : Xi(At(e)), t), Rc = () => globalThis?.crypto, Af = () => Rc()?.subtle ?? Ae("crypto.subtle must be defined"), Mi = (...e) => {
  const t = Ir(e.reduce((i, u) => i + At(u).length, 0));
  let n = 0;
  return e.forEach((i) => {
    t.set(i, n), n += i.length;
  }), t;
}, Of = (e = Lt) => Rc().getRandomValues(Ir(e)), pr = BigInt, pt = (e, t, n, i = "bad number: out of range") => Ef(e) && t <= e && e < n ? e : Ae(i), X = (e, t = ve) => {
  const n = e % t;
  return n >= 0n ? n : t + n;
}, qf = (e) => X(e, ir), Ec = (e, t) => {
  (e === 0n || t <= 0n) && Ae("no inverse n=" + e + " mod=" + t);
  let n = X(e, t), i = t, u = 0n, r = 1n;
  for (; n !== 0n; ) {
    const s = i / n, a = i % n, o = u - r * s;
    i = n, n = a, u = r, r = o;
  }
  return i === 1n ? X(u, t) : Ae("no inverse");
}, no = (e) => e instanceof Xe ? e : Ae("Point expected"), Ci = 2n ** 256n, He = class He {
  constructor(t, n, i, u) {
    Be(this, "ex");
    Be(this, "ey");
    Be(this, "ez");
    Be(this, "et");
    const r = Ci;
    this.ex = pt(t, 0n, r), this.ey = pt(n, 0n, r), this.ez = pt(i, 1n, r), this.et = pt(u, 0n, r), Object.freeze(this);
  }
  static fromAffine(t) {
    return new He(t.x, t.y, 1n, X(t.x * t.y));
  }
  /** RFC8032 5.1.3: Uint8Array to Point. */
  static fromBytes(t, n = !1) {
    const i = Gr, u = Xi(At(t, Lt)), r = t[31];
    u[31] = r & -129;
    const s = ts(u);
    pt(s, 0n, n ? Ci : ve);
    const o = X(s * s), l = X(o - 1n), y = X(i * o + 1n);
    let { isValid: g, value: f } = Pf(l, y);
    g || Ae("bad point: y not sqrt");
    const m = (f & 1n) === 1n, w = (r & 128) !== 0;
    return !n && f === 0n && w && Ae("bad point: x==0, isLastByteOdd"), w !== m && (f = X(-f)), new He(f, s, 1n, X(f * s));
  }
  /** Checks if the point is valid and on-curve. */
  assertValidity() {
    const t = Kr, n = Gr, i = this;
    if (i.is0())
      throw new Error("bad point: ZERO");
    const { ex: u, ey: r, ez: s, et: a } = i, o = X(u * u), l = X(r * r), y = X(s * s), g = X(y * y), f = X(o * t), m = X(y * X(f + l)), w = X(g + X(n * X(o * l)));
    if (m !== w)
      throw new Error("bad point: equation left != right (1)");
    const _ = X(u * r), b = X(s * a);
    if (_ !== b)
      throw new Error("bad point: equation left != right (2)");
    return this;
  }
  /** Equality check: compare points P&Q. */
  equals(t) {
    const { ex: n, ey: i, ez: u } = this, { ex: r, ey: s, ez: a } = no(t), o = X(n * a), l = X(r * u), y = X(i * a), g = X(s * u);
    return o === l && y === g;
  }
  is0() {
    return this.equals(It);
  }
  /** Flip point over y coordinate. */
  negate() {
    return new He(X(-this.ex), this.ey, this.ez, X(-this.et));
  }
  /** Point doubling. Complete formula. Cost: `4M + 4S + 1*a + 6add + 1*2`. */
  double() {
    const { ex: t, ey: n, ez: i } = this, u = Kr, r = X(t * t), s = X(n * n), a = X(2n * X(i * i)), o = X(u * r), l = t + n, y = X(X(l * l) - r - s), g = o + s, f = g - a, m = o - s, w = X(y * f), _ = X(g * m), b = X(y * m), S = X(f * g);
    return new He(w, _, S, b);
  }
  /** Point addition. Complete formula. Cost: `8M + 1*k + 8add + 1*2`. */
  add(t) {
    const { ex: n, ey: i, ez: u, et: r } = this, { ex: s, ey: a, ez: o, et: l } = no(t), y = Kr, g = Gr, f = X(n * s), m = X(i * a), w = X(r * g * l), _ = X(u * o), b = X((n + i) * (s + a) - f - m), S = X(_ - w), v = X(_ + w), h = X(m - y * f), c = X(b * S), d = X(v * h), p = X(b * h), I = X(S * v);
    return new He(c, d, I, p);
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
      return It;
    if (pt(t, 1n, ir), t === 1n)
      return this;
    if (this.equals(Ot))
      return Ff(t).p;
    let i = It, u = Ot;
    for (let r = this; t > 0n; r = r.double(), t >>= 1n)
      t & 1n ? i = i.add(r) : n && (u = u.add(r));
    return i;
  }
  /** Convert point to 2d xy affine point. (X, Y, Z) ∋ (x=X/Z, y=Y/Z) */
  toAffine() {
    const { ex: t, ey: n, ez: i } = this;
    if (this.equals(It))
      return { x: 0n, y: 1n };
    const u = Ec(i, ve);
    return X(i * u) !== 1n && Ae("invalid inverse"), { x: X(t * u), y: X(n * u) };
  }
  toBytes() {
    const { x: t, y: n } = this.assertValidity().toAffine(), i = Nf(n);
    return i[31] |= t & 1n ? 128 : 0, i;
  }
  toHex() {
    return Yi(this.toBytes());
  }
  // encode to hex string
  clearCofactor() {
    return this.multiply(pr(Rf), !1);
  }
  isSmallOrder() {
    return this.clearCofactor().is0();
  }
  isTorsionFree() {
    let t = this.multiply(ir / 2n, !1).double();
    return ir % 2n && (t = t.add(this)), t.is0();
  }
  static fromHex(t, n) {
    return He.fromBytes(sr(t), n);
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
Be(He, "BASE"), Be(He, "ZERO");
let Xe = He;
const Ot = new Xe(Ya, eo, 1n, X(Ya * eo)), It = new Xe(0n, 1n, 1n, 0n);
Xe.BASE = Ot;
Xe.ZERO = It;
const Nf = (e) => es(xc(pt(e, 0n, Ci), Li)).reverse(), ts = (e) => pr("0x" + Yi(Xi(At(e)).reverse())), Fe = (e, t) => {
  let n = e;
  for (; t-- > 0n; )
    n *= n, n %= ve;
  return n;
}, Tf = (e) => {
  const n = e * e % ve * e % ve, i = Fe(n, 2n) * n % ve, u = Fe(i, 1n) * e % ve, r = Fe(u, 5n) * u % ve, s = Fe(r, 10n) * r % ve, a = Fe(s, 20n) * s % ve, o = Fe(a, 40n) * a % ve, l = Fe(o, 80n) * o % ve, y = Fe(l, 80n) * o % ve, g = Fe(y, 10n) * r % ve;
  return { pow_p_5_8: Fe(g, 2n) * e % ve, b2: n };
}, ro = 0x2b8324804fc1df0b2b4d00993dfbd7a72f431806ad2fe478c4ee1b274a0ea0b0n, Pf = (e, t) => {
  const n = X(t * t * t), i = X(n * n * t), u = Tf(e * i).pow_p_5_8;
  let r = X(e * n * u);
  const s = X(t * r * r), a = r, o = X(r * ro), l = s === e, y = s === X(-e), g = s === X(-e * ro);
  return l && (r = a), (y || g) && (r = o), (X(r) & 1n) === 1n && (r = X(-r)), { isValid: l || y, value: r };
}, Df = (e) => qf(ts(e)), kf = (...e) => Uf.sha512Async(...e), Lf = (e) => kf(e.hashable).then(e.finish), jc = { zip215: !0 }, Mf = (e, t, n, i = jc) => {
  e = sr(e, Li), t = sr(t), n = sr(n, Lt);
  const { zip215: u } = i;
  let r, s, a, o, l = Uint8Array.of();
  try {
    r = Xe.fromHex(n, u), s = Xe.fromHex(e.slice(0, Lt), u), a = ts(e.slice(Lt, Li)), o = Ot.multiply(a, !1), l = Mi(s.toBytes(), r.toBytes(), t);
  } catch {
  }
  return { hashable: l, finish: (g) => {
    if (o == null || !u && r.isSmallOrder())
      return !1;
    const f = Df(g);
    return s.add(r.multiply(f, !1)).add(o.negate()).clearCofactor().is0();
  } };
}, Cf = async (e, t, n, i = jc) => Lf(Mf(e, t, n, i)), Uf = {
  sha512Async: async (...e) => {
    const t = Af(), n = Mi(...e);
    return Ir(await t.digest("SHA-512", n.buffer));
  },
  sha512Sync: void 0,
  bytesToHex: Yi,
  hexToBytes: es,
  concatBytes: Mi,
  mod: X,
  invert: Ec,
  randomBytes: Of
}, hr = 8, zf = 256, Ac = Math.ceil(zf / hr) + 1, Ui = 2 ** (hr - 1), Vf = () => {
  const e = [];
  let t = Ot, n = t;
  for (let i = 0; i < Ac; i++) {
    n = t, e.push(n);
    for (let u = 1; u < Ui; u++)
      n = n.add(t), e.push(n);
    t = n.double();
  }
  return e;
};
let io;
const so = (e, t) => {
  const n = t.negate();
  return e ? n : t;
}, Ff = (e) => {
  const t = io || (io = Vf());
  let n = It, i = Ot;
  const u = 2 ** hr, r = u, s = pr(u - 1), a = pr(hr);
  for (let o = 0; o < Ac; o++) {
    let l = Number(e & s);
    e >>= a, l > Ui && (l -= r, e += 1n);
    const y = o * Ui, g = y, f = y + Math.abs(l) - 1, m = o % 2 !== 0, w = l < 0;
    l === 0 ? i = i.add(so(m, t[g])) : n = n.add(so(w, t[f]));
  }
  return { p: n, f: i };
};
var Zr = {}, Qr, ao;
function ns() {
  return ao || (ao = 1, Qr = class Oc {
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
      return new Oc(t, new Map(n), i);
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
  }), Qr;
}
var Wr = {}, oo;
function Hf() {
  return oo || (oo = 1, (function(e, t) {
    if (e.setImmediate)
      return;
    var n = 1, i = {}, u = !1, r = e.document, s;
    function a(v) {
      typeof v != "function" && (v = new Function("" + v));
      for (var h = new Array(arguments.length - 1), c = 0; c < h.length; c++)
        h[c] = arguments[c + 1];
      var d = { callback: v, args: h };
      return i[n] = d, s(n), n++;
    }
    function o(v) {
      delete i[v];
    }
    function l(v) {
      var h = v.callback, c = v.args;
      switch (c.length) {
        case 0:
          h();
          break;
        case 1:
          h(c[0]);
          break;
        case 2:
          h(c[0], c[1]);
          break;
        case 3:
          h(c[0], c[1], c[2]);
          break;
        default:
          h.apply(t, c);
          break;
      }
    }
    function y(v) {
      if (u)
        setTimeout(y, 0, v);
      else {
        var h = i[v];
        if (h) {
          u = !0;
          try {
            l(h);
          } finally {
            o(v), u = !1;
          }
        }
      }
    }
    function g() {
      s = function(v) {
        process.nextTick(function() {
          y(v);
        });
      };
    }
    function f() {
      if (e.postMessage && !e.importScripts) {
        var v = !0, h = e.onmessage;
        return e.onmessage = function() {
          v = !1;
        }, e.postMessage("", "*"), e.onmessage = h, v;
      }
    }
    function m() {
      var v = "setImmediate$" + Math.random() + "$", h = function(c) {
        c.source === e && typeof c.data == "string" && c.data.indexOf(v) === 0 && y(+c.data.slice(v.length));
      };
      e.addEventListener ? e.addEventListener("message", h, !1) : e.attachEvent("onmessage", h), s = function(c) {
        e.postMessage(v + c, "*");
      };
    }
    function w() {
      var v = new MessageChannel();
      v.port1.onmessage = function(h) {
        var c = h.data;
        y(c);
      }, s = function(h) {
        v.port2.postMessage(h);
      };
    }
    function _() {
      var v = r.documentElement;
      s = function(h) {
        var c = r.createElement("script");
        c.onreadystatechange = function() {
          y(h), c.onreadystatechange = null, v.removeChild(c), c = null;
        }, v.appendChild(c);
      };
    }
    function b() {
      s = function(v) {
        setTimeout(y, 0, v);
      };
    }
    var S = Object.getPrototypeOf && Object.getPrototypeOf(e);
    S = S && S.setTimeout ? S : e, {}.toString.call(e.process) === "[object process]" ? g() : f() ? m() : e.MessageChannel ? w() : r && "onreadystatechange" in r.createElement("script") ? _() : b(), S.setImmediate = a, S.clearImmediate = o;
  })(typeof self > "u" ? typeof _s > "u" ? Wr : _s : self)), Wr;
}
/*!
 * Copyright (c) 2016-2022 Digital Bazaar, Inc. All rights reserved.
 */
var Xr, co;
function $r() {
  if (co) return Xr;
  co = 1, Hf();
  const e = self.crypto || self.msCrypto;
  return Xr = class {
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
      let u = "";
      for (let r = 0; r < i.length; ++r)
        u += i[r].toString(16).padStart(2, "0");
      return u;
    }
  }, Xr;
}
/*!
 * Copyright (c) 2016-2022 Digital Bazaar, Inc. All rights reserved.
 */
var Yr, uo;
function qc() {
  return uo || (uo = 1, Yr = class {
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
      let u = null, r = 0;
      const s = t.length;
      for (let a = 0; a < s; ++a) {
        const o = t[a], l = n.get(o);
        (u === null || o > u) && (l && a > 0 && o > t[a - 1] || !l && a < s - 1 && o > t[a + 1]) && (u = o, r = a);
      }
      if (u === null)
        this.done = !0;
      else {
        const a = n.get(u) ? r - 1 : r + 1;
        t[r] = t[a], t[a] = u;
        for (const o of t)
          o > u && n.set(o, !n.get(o));
      }
      return i;
    }
  }), Yr;
}
/*!
 * Copyright (c) 2016-2022 Digital Bazaar, Inc. All rights reserved.
 */
var ei, lo;
function rs() {
  if (lo) return ei;
  lo = 1;
  const t = "http://www.w3.org/1999/02/22-rdf-syntax-ns#" + "langString", n = "http://www.w3.org/2001/XMLSchema#string", i = "NamedNode", u = "BlankNode", r = "Literal", s = "DefaultGraph", a = {};
  (() => {
    const m = "(?:<([^:]+:[^>]*)>)", _ = "A-Za-zÀ-ÖØ-öø-˿Ͱ-ͽͿ-῿‌-‍⁰-↏Ⰰ-⿯、-퟿豈-﷏ﷰ-�" + "_", b = _ + "0-9-·̀-ͯ‿-⁀", v = "(_:(?:[" + _ + "0-9])(?:(?:[" + b + ".])*(?:[" + b + "]))?)", h = '"([^"\\\\]*(?:\\\\.[^"\\\\]*)*)"', c = "(?:\\^\\^" + m + ")", p = "(?:" + h + "(?:" + c + "|" + "(?:@([a-zA-Z]+(?:-[a-zA-Z0-9]+)*))" + ")?)", I = "[ \\t]+", $ = "[ \\t]*", E = "(?:" + m + "|" + v + ")" + I, O = m + I, P = "(?:" + m + "|" + v + "|" + p + ")" + $, M = "(?:\\.|(?:(?:" + m + "|" + v + ")" + $ + "\\.))";
    a.eoln = /(?:\r\n)|(?:\n)|(?:\r)/g, a.empty = new RegExp("^" + $ + "$"), a.quad = new RegExp(
      "^" + $ + E + O + P + M + $ + "$"
    );
  })(), ei = class ar {
    /**
     * Parses RDF in the form of N-Quads.
     *
     * @param input the N-Quads input to parse.
     *
     * @return an RDF dataset (an array of quads per http://rdf.js.org/).
     */
    static parse(w) {
      const _ = [], b = {}, S = w.split(a.eoln);
      let v = 0;
      for (const h of S) {
        if (v++, a.empty.test(h))
          continue;
        const c = h.match(a.quad);
        if (c === null)
          throw new Error("N-Quads parse error on line " + v + ".");
        const d = { subject: null, predicate: null, object: null, graph: null };
        if (c[1] !== void 0 ? d.subject = { termType: i, value: c[1] } : d.subject = { termType: u, value: c[2] }, d.predicate = { termType: i, value: c[3] }, c[4] !== void 0 ? d.object = { termType: i, value: c[4] } : c[5] !== void 0 ? d.object = { termType: u, value: c[5] } : (d.object = {
          termType: r,
          value: void 0,
          datatype: {
            termType: i
          }
        }, c[7] !== void 0 ? d.object.datatype.value = c[7] : c[8] !== void 0 ? (d.object.datatype.value = t, d.object.language = c[8]) : d.object.datatype.value = n, d.object.value = f(c[6])), c[9] !== void 0 ? d.graph = {
          termType: i,
          value: c[9]
        } : c[10] !== void 0 ? d.graph = {
          termType: u,
          value: c[10]
        } : d.graph = {
          termType: s,
          value: ""
        }, !(d.graph.value in b))
          b[d.graph.value] = [d], _.push(d);
        else {
          let p = !0;
          const I = b[d.graph.value];
          for (const $ of I)
            if (o($, d)) {
              p = !1;
              break;
            }
          p && (I.push(d), _.push(d));
        }
      }
      return _;
    }
    /**
     * Converts an RDF dataset to N-Quads.
     *
     * @param dataset (array of quads) the RDF dataset to convert.
     *
     * @return the N-Quads string.
     */
    static serialize(w) {
      Array.isArray(w) || (w = ar.legacyDatasetToQuads(w));
      const _ = [];
      for (const b of w)
        _.push(ar.serializeQuad(b));
      return _.sort().join("");
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
    static serializeQuadComponents(w, _, b, S) {
      let v = "";
      return w.termType === i ? v += `<${w.value}>` : v += `${w.value}`, v += ` <${_.value}> `, b.termType === i ? v += `<${b.value}>` : b.termType === u ? v += b.value : (v += `"${y(b.value)}"`, b.datatype.value === t ? b.language && (v += `@${b.language}`) : b.datatype.value !== n && (v += `^^<${b.datatype.value}>`)), S.termType === i ? v += ` <${S.value}>` : S.termType === u && (v += ` ${S.value}`), v += ` .
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
      return ar.serializeQuadComponents(
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
      const _ = [], b = {
        "blank node": u,
        IRI: i,
        literal: r
      };
      for (const S in w)
        w[S].forEach((h) => {
          const c = {};
          for (const d in h) {
            const p = h[d], I = {
              termType: b[p.type],
              value: p.value
            };
            I.termType === r && (I.datatype = {
              termType: i
            }, "datatype" in p && (I.datatype.value = p.datatype), "language" in p ? ("datatype" in p || (I.datatype.value = t), I.language = p.language) : "datatype" in p || (I.datatype.value = n)), c[d] = I;
          }
          S === "@default" ? c.graph = {
            termType: s,
            value: ""
          } : c.graph = {
            termType: S.startsWith("_:") ? u : i,
            value: S
          }, _.push(c);
        });
      return _;
    }
  };
  function o(m, w) {
    return !(m.subject.termType === w.subject.termType && m.object.termType === w.object.termType) || !(m.subject.value === w.subject.value && m.predicate.value === w.predicate.value && m.object.value === w.object.value) ? !1 : m.object.termType !== r ? !0 : m.object.datatype.termType === w.object.datatype.termType && m.object.language === w.object.language && m.object.datatype.value === w.object.datatype.value;
  }
  const l = /["\\\n\r]/g;
  function y(m) {
    return m.replace(l, function(w) {
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
  function f(m) {
    return m.replace(g, function(w, _, b, S) {
      if (_)
        switch (_) {
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
  return ei;
}
/*!
 * Copyright (c) 2016-2022 Digital Bazaar, Inc. All rights reserved.
 */
var ti, fo;
function Nc() {
  if (fo) return ti;
  fo = 1;
  const e = ns(), t = $r(), n = qc(), i = rs();
  ti = class {
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
      for (const m of s)
        this._addBlankNodeQuadInfo({ quad: m, component: m.subject }), this._addBlankNodeQuadInfo({ quad: m, component: m.object }), this._addBlankNodeQuadInfo({ quad: m, component: m.graph });
      const a = /* @__PURE__ */ new Map(), o = [...this.blankNodeInfo.keys()];
      let l = 0;
      for (const m of o)
        ++l % 100 === 0 && await this._yield(), await this._hashAndTrackBlankNode({ id: m, hashToBlankNodes: a });
      const y = [...a.keys()].sort(), g = [];
      for (const m of y) {
        const w = a.get(m);
        if (w.length > 1) {
          g.push(w);
          continue;
        }
        const _ = w[0];
        this.canonicalIssuer.getId(_);
      }
      for (const m of g) {
        const w = [];
        for (const _ of m) {
          if (this.canonicalIssuer.hasId(_))
            continue;
          const b = new e("_:b");
          b.getId(_);
          const S = await this.hashNDegreeQuads(_, b);
          w.push(S);
        }
        w.sort(u);
        for (const _ of w) {
          const b = _.issuer.getOldIds();
          for (const S of b)
            this.canonicalIssuer.getId(S);
        }
      }
      const f = [];
      for (const m of this.quads) {
        const w = i.serializeQuadComponents(
          this._componentWithCanonicalId(m.subject),
          m.predicate,
          this._componentWithCanonicalId(m.object),
          this._componentWithCanonicalId(m.graph)
        );
        f.push(w);
      }
      return f.sort(), f.join("");
    }
    // 4.6) Hash First Degree Quads
    async hashFirstDegreeQuads(s) {
      const a = [], o = this.blankNodeInfo.get(s), l = o.quads;
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
      const y = this.createMessageDigest();
      for (const g of a)
        y.update(g);
      return o.hash = await y.digest(), o.hash;
    }
    // 4.7) Hash Related Blank Node
    async hashRelatedBlankNode(s, a, o, l) {
      let y;
      this.canonicalIssuer.hasId(s) ? y = this.canonicalIssuer.getId(s) : o.hasId(s) ? y = o.getId(s) : y = this.blankNodeInfo.get(s).hash;
      const g = this.createMessageDigest();
      return g.update(l), l !== "g" && g.update(this.getRelatedPredicate(a)), g.update(y), g.digest();
    }
    // 4.8) Hash N-Degree Quads
    async hashNDegreeQuads(s, a) {
      const o = this.deepIterations.get(s) || 0;
      if (o > this.maxDeepIterations)
        throw new Error(
          `Maximum deep iterations (${this.maxDeepIterations}) exceeded.`
        );
      this.deepIterations.set(s, o + 1);
      const l = this.createMessageDigest(), y = await this.createHashToRelated(s, a), g = [...y.keys()].sort();
      for (const f of g) {
        l.update(f);
        let m = "", w;
        const _ = new n(y.get(f));
        let b = 0;
        for (; _.hasNext(); ) {
          const S = _.next();
          ++b % 3 === 0 && await this._yield();
          let v = a.clone(), h = "";
          const c = [];
          let d = !1;
          for (const p of S)
            if (this.canonicalIssuer.hasId(p) ? h += this.canonicalIssuer.getId(p) : (v.hasId(p) || c.push(p), h += v.getId(p)), m.length !== 0 && h > m) {
              d = !0;
              break;
            }
          if (!d) {
            for (const p of c) {
              const I = await this.hashNDegreeQuads(p, v);
              if (h += v.getId(p), h += `<${I.hash}>`, v = I.issuer, m.length !== 0 && h > m) {
                d = !0;
                break;
              }
            }
            d || (m.length === 0 || h < m) && (m = h, w = v);
          }
        }
        l.update(m), a = w;
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
      const o = /* @__PURE__ */ new Map(), l = this.blankNodeInfo.get(s).quads;
      let y = 0;
      for (const g of l)
        ++y % 100 === 0 && await this._yield(), await Promise.all([
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
      const o = await this.hashFirstDegreeQuads(s), l = a.get(o);
      l ? l.push(s) : a.set(o, [s]);
    }
    _addBlankNodeQuadInfo({ quad: s, component: a }) {
      if (a.termType !== "BlankNode")
        return;
      const o = a.value, l = this.blankNodeInfo.get(o);
      l ? l.quads.add(s) : this.blankNodeInfo.set(o, { quads: /* @__PURE__ */ new Set([s]), hash: null });
    }
    async _addRelatedBlankNodeHash({ quad: s, component: a, position: o, id: l, issuer: y, hashToRelated: g }) {
      if (!(a.termType === "BlankNode" && a.value !== l))
        return;
      const f = a.value, m = await this.hashRelatedBlankNode(
        f,
        s,
        y,
        o
      ), w = g.get(m);
      w ? w.push(f) : g.set(m, [f]);
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
  function u(r, s) {
    return r.hash < s.hash ? -1 : r.hash > s.hash ? 1 : 0;
  }
  return ti;
}
/*!
 * Copyright (c) 2016-2022 Digital Bazaar, Inc. All rights reserved.
 */
var ni, po;
function Bf() {
  if (po) return ni;
  po = 1;
  const e = $r(), t = Nc();
  return ni = class extends t {
    constructor() {
      super(), this.name = "URGNA2012", this.createMessageDigest = () => new e("sha1");
    }
    // helper for modifying component during Hash First Degree Quads
    modifyFirstDegreeComponent(i, u, r) {
      return u.termType !== "BlankNode" ? u : r === "graph" ? {
        termType: "BlankNode",
        value: "_:g"
      } : {
        termType: "BlankNode",
        value: u.value === i ? "_:a" : "_:z"
      };
    }
    // helper for getting a related predicate
    getRelatedPredicate(i) {
      return i.predicate.value;
    }
    // helper for creating hash to related blank nodes map
    async createHashToRelated(i, u) {
      const r = /* @__PURE__ */ new Map(), s = this.blankNodeInfo.get(i).quads;
      let a = 0;
      for (const o of s) {
        let l, y;
        if (o.subject.termType === "BlankNode" && o.subject.value !== i)
          y = o.subject.value, l = "p";
        else if (o.object.termType === "BlankNode" && o.object.value !== i)
          y = o.object.value, l = "r";
        else
          continue;
        ++a % 100 === 0 && await this._yield();
        const g = await this.hashRelatedBlankNode(
          y,
          o,
          u,
          l
        ), f = r.get(g);
        f ? f.push(y) : r.set(g, [y]);
      }
      return r;
    }
  }, ni;
}
/*!
 * Copyright (c) 2016-2022 Digital Bazaar, Inc. All rights reserved.
 */
var ri, ho;
function Tc() {
  if (ho) return ri;
  ho = 1;
  const e = ns(), t = $r(), n = qc(), i = rs();
  ri = class {
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
      for (const f of s)
        this._addBlankNodeQuadInfo({ quad: f, component: f.subject }), this._addBlankNodeQuadInfo({ quad: f, component: f.object }), this._addBlankNodeQuadInfo({ quad: f, component: f.graph });
      const a = /* @__PURE__ */ new Map(), o = [...this.blankNodeInfo.keys()];
      for (const f of o)
        this._hashAndTrackBlankNode({ id: f, hashToBlankNodes: a });
      const l = [...a.keys()].sort(), y = [];
      for (const f of l) {
        const m = a.get(f);
        if (m.length > 1) {
          y.push(m);
          continue;
        }
        const w = m[0];
        this.canonicalIssuer.getId(w);
      }
      for (const f of y) {
        const m = [];
        for (const w of f) {
          if (this.canonicalIssuer.hasId(w))
            continue;
          const _ = new e("_:b");
          _.getId(w);
          const b = this.hashNDegreeQuads(w, _);
          m.push(b);
        }
        m.sort(u);
        for (const w of m) {
          const _ = w.issuer.getOldIds();
          for (const b of _)
            this.canonicalIssuer.getId(b);
        }
      }
      const g = [];
      for (const f of this.quads) {
        const m = i.serializeQuadComponents(
          this._componentWithCanonicalId({ component: f.subject }),
          f.predicate,
          this._componentWithCanonicalId({ component: f.object }),
          this._componentWithCanonicalId({ component: f.graph })
        );
        g.push(m);
      }
      return g.sort(), g.join("");
    }
    // 4.6) Hash First Degree Quads
    hashFirstDegreeQuads(s) {
      const a = [], o = this.blankNodeInfo.get(s), l = o.quads;
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
      const y = this.createMessageDigest();
      for (const g of a)
        y.update(g);
      return o.hash = y.digest(), o.hash;
    }
    // 4.7) Hash Related Blank Node
    hashRelatedBlankNode(s, a, o, l) {
      let y;
      this.canonicalIssuer.hasId(s) ? y = this.canonicalIssuer.getId(s) : o.hasId(s) ? y = o.getId(s) : y = this.blankNodeInfo.get(s).hash;
      const g = this.createMessageDigest();
      return g.update(l), l !== "g" && g.update(this.getRelatedPredicate(a)), g.update(y), g.digest();
    }
    // 4.8) Hash N-Degree Quads
    hashNDegreeQuads(s, a) {
      const o = this.deepIterations.get(s) || 0;
      if (o > this.maxDeepIterations)
        throw new Error(
          `Maximum deep iterations (${this.maxDeepIterations}) exceeded.`
        );
      this.deepIterations.set(s, o + 1);
      const l = this.createMessageDigest(), y = this.createHashToRelated(s, a), g = [...y.keys()].sort();
      for (const f of g) {
        l.update(f);
        let m = "", w;
        const _ = new n(y.get(f));
        for (; _.hasNext(); ) {
          const b = _.next();
          let S = a.clone(), v = "";
          const h = [];
          let c = !1;
          for (const d of b)
            if (this.canonicalIssuer.hasId(d) ? v += this.canonicalIssuer.getId(d) : (S.hasId(d) || h.push(d), v += S.getId(d)), m.length !== 0 && v > m) {
              c = !0;
              break;
            }
          if (!c) {
            for (const d of h) {
              const p = this.hashNDegreeQuads(d, S);
              if (v += S.getId(d), v += `<${p.hash}>`, S = p.issuer, m.length !== 0 && v > m) {
                c = !0;
                break;
              }
            }
            c || (m.length === 0 || v < m) && (m = v, w = S);
          }
        }
        l.update(m), a = w;
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
      const o = /* @__PURE__ */ new Map(), l = this.blankNodeInfo.get(s).quads;
      for (const y of l)
        this._addRelatedBlankNodeHash({
          quad: y,
          component: y.subject,
          position: "s",
          id: s,
          issuer: a,
          hashToRelated: o
        }), this._addRelatedBlankNodeHash({
          quad: y,
          component: y.object,
          position: "o",
          id: s,
          issuer: a,
          hashToRelated: o
        }), this._addRelatedBlankNodeHash({
          quad: y,
          component: y.graph,
          position: "g",
          id: s,
          issuer: a,
          hashToRelated: o
        });
      return o;
    }
    _hashAndTrackBlankNode({ id: s, hashToBlankNodes: a }) {
      const o = this.hashFirstDegreeQuads(s), l = a.get(o);
      l ? l.push(s) : a.set(o, [s]);
    }
    _addBlankNodeQuadInfo({ quad: s, component: a }) {
      if (a.termType !== "BlankNode")
        return;
      const o = a.value, l = this.blankNodeInfo.get(o);
      l ? l.quads.add(s) : this.blankNodeInfo.set(o, { quads: /* @__PURE__ */ new Set([s]), hash: null });
    }
    _addRelatedBlankNodeHash({ quad: s, component: a, position: o, id: l, issuer: y, hashToRelated: g }) {
      if (!(a.termType === "BlankNode" && a.value !== l))
        return;
      const f = a.value, m = this.hashRelatedBlankNode(f, s, y, o), w = g.get(m);
      w ? w.push(f) : g.set(m, [f]);
    }
    // canonical ids for 7.1
    _componentWithCanonicalId({ component: s }) {
      return s.termType === "BlankNode" && !s.value.startsWith(this.canonicalIssuer.prefix) ? {
        termType: "BlankNode",
        value: this.canonicalIssuer.getId(s.value)
      } : s;
    }
  };
  function u(r, s) {
    return r.hash < s.hash ? -1 : r.hash > s.hash ? 1 : 0;
  }
  return ri;
}
/*!
 * Copyright (c) 2016-2021 Digital Bazaar, Inc. All rights reserved.
 */
var ii, mo;
function Jf() {
  if (mo) return ii;
  mo = 1;
  const e = $r(), t = Tc();
  return ii = class extends t {
    constructor() {
      super(), this.name = "URGNA2012", this.createMessageDigest = () => new e("sha1");
    }
    // helper for modifying component during Hash First Degree Quads
    modifyFirstDegreeComponent(i, u, r) {
      return u.termType !== "BlankNode" ? u : r === "graph" ? {
        termType: "BlankNode",
        value: "_:g"
      } : {
        termType: "BlankNode",
        value: u.value === i ? "_:a" : "_:z"
      };
    }
    // helper for getting a related predicate
    getRelatedPredicate(i) {
      return i.predicate.value;
    }
    // helper for creating hash to related blank nodes map
    createHashToRelated(i, u) {
      const r = /* @__PURE__ */ new Map(), s = this.blankNodeInfo.get(i).quads;
      for (const a of s) {
        let o, l;
        if (a.subject.termType === "BlankNode" && a.subject.value !== i)
          l = a.subject.value, o = "p";
        else if (a.object.termType === "BlankNode" && a.object.value !== i)
          l = a.object.value, o = "r";
        else
          continue;
        const y = this.hashRelatedBlankNode(l, a, u, o), g = r.get(y);
        g ? g.push(l) : r.set(y, [l]);
      }
      return r;
    }
  }, ii;
}
const Kf = {}, Gf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Kf
}, Symbol.toStringTag, { value: "Module" })), Zf = /* @__PURE__ */ Jd(Gf);
var yo;
function Qf() {
  return yo || (yo = 1, (function(e) {
    const t = Nc(), n = Bf(), i = Tc(), u = Jf();
    let r;
    try {
      r = Zf;
    } catch {
    }
    function s(a) {
      return Array.isArray(a) ? a : e.NQuads.legacyDatasetToQuads(a);
    }
    e.NQuads = rs(), e.IdentifierIssuer = ns(), e._rdfCanonizeNative = function(a) {
      return a && (r = a), r;
    }, e.canonize = async function(a, o) {
      const l = s(a);
      if (o.useNative) {
        if (!r)
          throw new Error("rdf-canonize-native not available");
        if (o.createMessageDigest)
          throw new Error(
            '"createMessageDigest" cannot be used with "useNative".'
          );
        return new Promise((y, g) => r.canonize(l, o, (f, m) => f ? g(f) : y(m)));
      }
      if (o.algorithm === "URDNA2015")
        return new t(o).main(l);
      if (o.algorithm === "URGNA2012") {
        if (o.createMessageDigest)
          throw new Error(
            '"createMessageDigest" cannot be used with "URGNA2012".'
          );
        return new n(o).main(l);
      }
      throw "algorithm" in o ? new Error(
        "Invalid RDF Dataset Canonicalization algorithm: " + o.algorithm
      ) : new Error("No RDF Dataset Canonicalization algorithm specified.");
    }, e._canonizeSync = function(a, o) {
      const l = s(a);
      if (o.useNative) {
        if (!r)
          throw new Error("rdf-canonize-native not available");
        if (o.createMessageDigest)
          throw new Error(
            '"createMessageDigest" cannot be used with "useNative".'
          );
        return r.canonizeSync(l, o);
      }
      if (o.algorithm === "URDNA2015")
        return new i(o).main(l);
      if (o.algorithm === "URGNA2012") {
        if (o.createMessageDigest)
          throw new Error(
            '"createMessageDigest" cannot be used with "URGNA2012".'
          );
        return new u(o).main(l);
      }
      throw "algorithm" in o ? new Error(
        "Invalid RDF Dataset Canonicalization algorithm: " + o.algorithm
      ) : new Error("No RDF Dataset Canonicalization algorithm specified.");
    };
  })(Zr)), Zr;
}
var si, go;
function is() {
  return go || (go = 1, si = Qf()), si;
}
var ai, vo;
function $e() {
  if (vo) return ai;
  vo = 1;
  const e = {};
  return ai = e, e.isArray = Array.isArray, e.isBoolean = (t) => typeof t == "boolean" || Object.prototype.toString.call(t) === "[object Boolean]", e.isDouble = (t) => e.isNumber(t) && (String(t).indexOf(".") !== -1 || Math.abs(t) >= 1e21), e.isEmptyObject = (t) => e.isObject(t) && Object.keys(t).length === 0, e.isNumber = (t) => typeof t == "number" || Object.prototype.toString.call(t) === "[object Number]", e.isNumeric = (t) => !isNaN(parseFloat(t)) && isFinite(t), e.isObject = (t) => Object.prototype.toString.call(t) === "[object Object]", e.isString = (t) => typeof t == "string" || Object.prototype.toString.call(t) === "[object String]", e.isUndefined = (t) => typeof t > "u", ai;
}
var oi, bo;
function Ye() {
  if (bo) return oi;
  bo = 1;
  const e = $e(), t = {};
  return oi = t, t.isSubject = (n) => e.isObject(n) && !("@value" in n || "@set" in n || "@list" in n) ? Object.keys(n).length > 1 || !("@id" in n) : !1, t.isSubjectReference = (n) => (
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
  }, oi;
}
var ci, wo;
function qe() {
  return wo || (wo = 1, ci = class extends Error {
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
  }), ci;
}
var di, _o;
function Oe() {
  if (_o) return di;
  _o = 1;
  const e = Ye(), t = $e(), n = is().IdentifierIssuer, i = qe(), u = /^[a-zA-Z]{1,8}(-[a-zA-Z0-9]{1,8})*$/, r = /(?:<[^>]*?>|"[^"]*?"|[^,])+/g, s = /\s*<([^>]*?)>\s*(?:;\s*(.*))?/, a = /(.*?)=(?:(?:"([^"]*?)")|([^"]*?))\s*(?:(?:;\s*)|$)/g, o = /^@[a-zA-Z]+$/, l = {
    headers: {
      accept: "application/ld+json, application/json"
    }
  }, y = {};
  di = y, y.IdentifierIssuer = n, y.REGEX_BCP47 = u, y.REGEX_KEYWORD = o, y.clone = function(f) {
    if (f && typeof f == "object") {
      let m;
      if (t.isArray(f)) {
        m = [];
        for (let w = 0; w < f.length; ++w)
          m[w] = y.clone(f[w]);
      } else if (f instanceof Map) {
        m = /* @__PURE__ */ new Map();
        for (const [w, _] of f)
          m.set(w, y.clone(_));
      } else if (f instanceof Set) {
        m = /* @__PURE__ */ new Set();
        for (const w of f)
          m.add(y.clone(w));
      } else if (t.isObject(f)) {
        m = {};
        for (const w in f)
          m[w] = y.clone(f[w]);
      } else
        m = f.toString();
      return m;
    }
    return f;
  }, y.asArray = function(f) {
    return Array.isArray(f) ? f : [f];
  }, y.buildHeaders = (f = {}) => {
    if (Object.keys(f).some(
      (w) => w.toLowerCase() === "accept"
    ))
      throw new RangeError(
        'Accept header may not be specified; only "' + l.headers.accept + '" is supported.'
      );
    return Object.assign({ Accept: l.headers.accept }, f);
  }, y.parseLinkHeader = (f) => {
    const m = {}, w = f.match(r);
    for (let _ = 0; _ < w.length; ++_) {
      let b = w[_].match(s);
      if (!b)
        continue;
      const S = { target: b[1] }, v = b[2];
      for (; b = a.exec(v); )
        S[b[1]] = b[2] === void 0 ? b[3] : b[2];
      const h = S.rel || "";
      Array.isArray(m[h]) ? m[h].push(S) : m.hasOwnProperty(h) ? m[h] = [m[h], S] : m[h] = S;
    }
    return m;
  }, y.validateTypeValue = (f, m) => {
    if (!t.isString(f) && !(t.isArray(f) && f.every((w) => t.isString(w)))) {
      if (m && t.isObject(f))
        switch (Object.keys(f).length) {
          case 0:
            return;
          case 1:
            if ("@default" in f && y.asArray(f["@default"]).every((w) => t.isString(w)))
              return;
        }
      throw new i(
        'Invalid JSON-LD syntax; "@type" value must a string, an array of strings, an empty object, or a default object.',
        "jsonld.SyntaxError",
        { code: "invalid type value", value: f }
      );
    }
  }, y.hasProperty = (f, m) => {
    if (f.hasOwnProperty(m)) {
      const w = f[m];
      return !t.isArray(w) || w.length > 0;
    }
    return !1;
  }, y.hasValue = (f, m, w) => {
    if (y.hasProperty(f, m)) {
      let _ = f[m];
      const b = e.isList(_);
      if (t.isArray(_) || b) {
        b && (_ = _["@list"]);
        for (let S = 0; S < _.length; ++S)
          if (y.compareValues(w, _[S]))
            return !0;
      } else if (!t.isArray(w))
        return y.compareValues(w, _);
    }
    return !1;
  }, y.addValue = (f, m, w, _) => {
    if (_ = _ || {}, "propertyIsArray" in _ || (_.propertyIsArray = !1), "valueIsArray" in _ || (_.valueIsArray = !1), "allowDuplicate" in _ || (_.allowDuplicate = !0), "prependValue" in _ || (_.prependValue = !1), _.valueIsArray)
      f[m] = w;
    else if (t.isArray(w)) {
      w.length === 0 && _.propertyIsArray && !f.hasOwnProperty(m) && (f[m] = []), _.prependValue && (w = w.concat(f[m]), f[m] = []);
      for (let b = 0; b < w.length; ++b)
        y.addValue(f, m, w[b], _);
    } else if (f.hasOwnProperty(m)) {
      const b = !_.allowDuplicate && y.hasValue(f, m, w);
      !t.isArray(f[m]) && (!b || _.propertyIsArray) && (f[m] = [f[m]]), b || (_.prependValue ? f[m].unshift(w) : f[m].push(w));
    } else
      f[m] = _.propertyIsArray ? [w] : w;
  }, y.getValues = (f, m) => [].concat(f[m] || []), y.removeProperty = (f, m) => {
    delete f[m];
  }, y.removeValue = (f, m, w, _) => {
    _ = _ || {}, "propertyIsArray" in _ || (_.propertyIsArray = !1);
    const b = y.getValues(f, m).filter(
      (S) => !y.compareValues(S, w)
    );
    b.length === 0 ? y.removeProperty(f, m) : b.length === 1 && !_.propertyIsArray ? f[m] = b[0] : f[m] = b;
  }, y.relabelBlankNodes = (f, m) => {
    m = m || {};
    const w = m.issuer || new n("_:b");
    return g(w, f);
  }, y.compareValues = (f, m) => f === m || e.isValue(f) && e.isValue(m) && f["@value"] === m["@value"] && f["@type"] === m["@type"] && f["@language"] === m["@language"] && f["@index"] === m["@index"] ? !0 : t.isObject(f) && "@id" in f && t.isObject(m) && "@id" in m ? f["@id"] === m["@id"] : !1, y.compareShortestLeast = (f, m) => f.length < m.length ? -1 : m.length < f.length ? 1 : f === m ? 0 : f < m ? -1 : 1;
  function g(f, m) {
    if (t.isArray(m))
      for (let w = 0; w < m.length; ++w)
        m[w] = g(f, m[w]);
    else if (e.isList(m))
      m["@list"] = g(f, m["@list"]);
    else if (t.isObject(m)) {
      e.isBlankNode(m) && (m["@id"] = f.getId(m["@id"]));
      const w = Object.keys(m).sort();
      for (let _ = 0; _ < w.length; ++_) {
        const b = w[_];
        b !== "@id" && (m[b] = g(f, m[b]));
      }
    }
    return m;
  }
  return di;
}
var ui, So;
function ss() {
  if (So) return ui;
  So = 1;
  const e = "http://www.w3.org/1999/02/22-rdf-syntax-ns#", t = "http://www.w3.org/2001/XMLSchema#";
  return ui = {
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
  }, ui;
}
var li, Io;
function Pc() {
  return Io || (Io = 1, li = class {
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
  }), li;
}
var fi, $o;
function ct() {
  if ($o) return fi;
  $o = 1;
  const e = $e(), t = {};
  fi = t, t.parsers = {
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
  }, t.parse = (i, u) => {
    const r = {}, s = t.parsers[u || "full"], a = s.regex.exec(i);
    let o = s.keys.length;
    for (; o--; )
      r[s.keys[o]] = a[o] === void 0 ? null : a[o];
    return (r.scheme === "https" && r.port === "443" || r.scheme === "http" && r.port === "80") && (r.href = r.href.replace(":" + r.port, ""), r.authority = r.authority.replace(":" + r.port, ""), r.port = null), r.normalizedPath = t.removeDotSegments(r.path), r;
  }, t.prependBase = (i, u) => {
    if (i === null || t.isAbsolute(u))
      return u;
    (!i || e.isString(i)) && (i = t.parse(i || ""));
    const r = t.parse(u), s = {
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
  }, t.removeBase = (i, u) => {
    if (i === null)
      return u;
    (!i || e.isString(i)) && (i = t.parse(i || ""));
    let r = "";
    if (i.href !== "" ? r += (i.protocol || "") + "//" + (i.authority || "") : u.indexOf("//") && (r += "//"), u.indexOf(r) !== 0)
      return u;
    const s = t.parse(u.substr(r.length)), a = i.normalizedPath.split("/"), o = s.normalizedPath.split("/"), l = s.fragment || s.query ? 0 : 1;
    for (; a.length > 0 && o.length > l && a[0] === o[0]; )
      a.shift(), o.shift();
    let y = "";
    if (a.length > 0) {
      a.pop();
      for (let g = 0; g < a.length; ++g)
        y += "../";
    }
    return y += o.join("/"), s.query !== null && (y += "?" + s.query), s.fragment !== null && (y += "#" + s.fragment), y === "" && (y = "./"), y;
  }, t.removeDotSegments = (i) => {
    if (i.length === 0)
      return "";
    const u = i.split("/"), r = [];
    for (; u.length > 0; ) {
      const s = u.shift(), a = u.length === 0;
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
  return t.isAbsolute = (i) => e.isString(i) && n.test(i), t.isRelative = (i) => e.isString(i), fi;
}
var pi, xo;
function Wf() {
  if (xo) return pi;
  xo = 1;
  const { parseLinkHeader: e, buildHeaders: t } = Oe(), { LINK_HEADER_CONTEXT: n } = ss(), i = qe(), u = Pc(), { prependBase: r } = ct(), s = /(^|(\r\n))link:/i;
  pi = ({
    secure: o,
    headers: l = {},
    xhr: y
  } = { headers: {} }) => {
    return l = t(l), new u().wrapLoader(f);
    async function f(m) {
      if (m.indexOf("http:") !== 0 && m.indexOf("https:") !== 0)
        throw new i(
          'URL could not be dereferenced; only "http" and "https" URLs are supported.',
          "jsonld.InvalidUrl",
          { code: "loading document failed", url: m }
        );
      if (o && m.indexOf("https") !== 0)
        throw new i(
          `URL could not be dereferenced; secure mode is enabled and the URL's scheme is not "https".`,
          "jsonld.InvalidUrl",
          { code: "loading document failed", url: m }
        );
      let w;
      try {
        w = await a(y, m, l);
      } catch (h) {
        throw new i(
          "URL could not be dereferenced, an error occurred.",
          "jsonld.LoadDocumentError",
          { code: "loading document failed", url: m, cause: h }
        );
      }
      if (w.status >= 400)
        throw new i(
          "URL could not be dereferenced: " + w.statusText,
          "jsonld.LoadDocumentError",
          {
            code: "loading document failed",
            url: m,
            httpStatusCode: w.status
          }
        );
      let _ = { contextUrl: null, documentUrl: m, document: w.response }, b = null;
      const S = w.getResponseHeader("Content-Type");
      let v;
      if (s.test(w.getAllResponseHeaders()) && (v = w.getResponseHeader("Link")), v && S !== "application/ld+json") {
        const h = e(v), c = h[n];
        if (Array.isArray(c))
          throw new i(
            "URL could not be dereferenced, it has more than one associated HTTP Link Header.",
            "jsonld.InvalidUrl",
            { code: "multiple context link headers", url: m }
          );
        c && (_.contextUrl = c.target), b = h.alternate, b && b.type == "application/ld+json" && !(S || "").match(/^application\/(\w*\+)?json$/) && (_ = await f(r(m, b.target)));
      }
      return _;
    }
  };
  function a(o, l, y) {
    o = o || XMLHttpRequest;
    const g = new o();
    return new Promise((f, m) => {
      g.onload = () => f(g), g.onerror = (w) => m(w), g.open("GET", l, !0);
      for (const w in y)
        g.setRequestHeader(w, y[w]);
      g.send();
    });
  }
  return pi;
}
var hi, Ro;
function Xf() {
  if (Ro) return hi;
  Ro = 1;
  const e = Wf(), t = {};
  return hi = t, t.setupDocumentLoaders = function(n) {
    typeof XMLHttpRequest < "u" && (n.documentLoaders.xhr = e, n.useDocumentLoader("xhr"));
  }, t.setupGlobals = function(n) {
    typeof globalThis.JsonLdProcessor > "u" && Object.defineProperty(globalThis, "JsonLdProcessor", {
      writable: !0,
      enumerable: !1,
      configurable: !0,
      value: n.JsonLdProcessor
    });
  }, hi;
}
var mi, Eo;
function Yf() {
  return Eo || (Eo = 1, mi = function(e) {
    e.prototype[Symbol.iterator] = function* () {
      for (let t = this.head; t; t = t.next)
        yield t.value;
    };
  }), mi;
}
var yi, jo;
function ep() {
  if (jo) return yi;
  jo = 1, yi = e, e.Node = u, e.create = e;
  function e(r) {
    var s = this;
    if (s instanceof e || (s = new e()), s.tail = null, s.head = null, s.length = 0, r && typeof r.forEach == "function")
      r.forEach(function(l) {
        s.push(l);
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
    for (var l = 0; o !== null; l++)
      a = r(a, o.value, l), o = o.next;
    return a;
  }, e.prototype.reduceReverse = function(r, s) {
    var a, o = this.tail;
    if (arguments.length > 1)
      a = s;
    else if (this.tail)
      o = this.tail.prev, a = this.tail.value;
    else
      throw new TypeError("Reduce of empty list with no initial value");
    for (var l = this.length - 1; o !== null; l--)
      a = r(a, o.value, l), o = o.prev;
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
    for (var o = 0, l = this.head; l !== null && o < r; o++)
      l = l.next;
    for (; l !== null && o < s; o++, l = l.next)
      a.push(l.value);
    return a;
  }, e.prototype.sliceReverse = function(r, s) {
    s = s || this.length, s < 0 && (s += this.length), r = r || 0, r < 0 && (r += this.length);
    var a = new e();
    if (s < r || s < 0)
      return a;
    r < 0 && (r = 0), s > this.length && (s = this.length);
    for (var o = this.length, l = this.tail; l !== null && o > s; o--)
      l = l.prev;
    for (; l !== null && o > r; o--, l = l.prev)
      a.push(l.value);
    return a;
  }, e.prototype.splice = function(r, s, ...a) {
    r > this.length && (r = this.length - 1), r < 0 && (r = this.length + r);
    for (var o = 0, l = this.head; l !== null && o < r; o++)
      l = l.next;
    for (var y = [], o = 0; l && o < s; o++)
      y.push(l.value), l = this.removeNode(l);
    l === null && (l = this.tail), l !== this.head && l !== this.tail && (l = l.prev);
    for (var o = 0; o < a.length; o++)
      l = t(this, l, a[o]);
    return y;
  }, e.prototype.reverse = function() {
    for (var r = this.head, s = this.tail, a = r; a !== null; a = a.prev) {
      var o = a.prev;
      a.prev = a.next, a.next = o;
    }
    return this.head = s, this.tail = r, this;
  };
  function t(r, s, a) {
    var o = s === r.head ? new u(a, null, s, r) : new u(a, s, s.next, r);
    return o.next === null && (r.tail = o), o.prev === null && (r.head = o), r.length++, o;
  }
  function n(r, s) {
    r.tail = new u(s, r.tail, null, r), r.head || (r.head = r.tail), r.length++;
  }
  function i(r, s) {
    r.head = new u(s, null, r.head, r), r.tail || (r.tail = r.head), r.length++;
  }
  function u(r, s, a, o) {
    if (!(this instanceof u))
      return new u(r, s, a, o);
    this.list = o, this.value = r, s ? (s.next = this, this.prev = s) : this.prev = null, a ? (a.prev = this, this.next = a) : this.next = null;
  }
  try {
    Yf()(e);
  } catch {
  }
  return yi;
}
var gi, Ao;
function Dc() {
  if (Ao) return gi;
  Ao = 1;
  const e = ep(), t = Symbol("max"), n = Symbol("length"), i = Symbol("lengthCalculator"), u = Symbol("allowStale"), r = Symbol("maxAge"), s = Symbol("dispose"), a = Symbol("noDisposeOnSet"), o = Symbol("lruList"), l = Symbol("cache"), y = Symbol("updateAgeOnGet"), g = () => 1;
  class f {
    constructor(c) {
      if (typeof c == "number" && (c = { max: c }), c || (c = {}), c.max && (typeof c.max != "number" || c.max < 0))
        throw new TypeError("max must be a non-negative number");
      this[t] = c.max || 1 / 0;
      const d = c.length || g;
      if (this[i] = typeof d != "function" ? g : d, this[u] = c.stale || !1, c.maxAge && typeof c.maxAge != "number")
        throw new TypeError("maxAge must be a number");
      this[r] = c.maxAge || 0, this[s] = c.dispose, this[a] = c.noDisposeOnSet || !1, this[y] = c.updateAgeOnGet || !1, this.reset();
    }
    // resize the cache when the max changes.
    set max(c) {
      if (typeof c != "number" || c < 0)
        throw new TypeError("max must be a non-negative number");
      this[t] = c || 1 / 0, _(this);
    }
    get max() {
      return this[t];
    }
    set allowStale(c) {
      this[u] = !!c;
    }
    get allowStale() {
      return this[u];
    }
    set maxAge(c) {
      if (typeof c != "number")
        throw new TypeError("maxAge must be a non-negative number");
      this[r] = c, _(this);
    }
    get maxAge() {
      return this[r];
    }
    // resize the cache when the lengthCalculator changes.
    set lengthCalculator(c) {
      typeof c != "function" && (c = g), c !== this[i] && (this[i] = c, this[n] = 0, this[o].forEach((d) => {
        d.length = this[i](d.value, d.key), this[n] += d.length;
      })), _(this);
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
    rforEach(c, d) {
      d = d || this;
      for (let p = this[o].tail; p !== null; ) {
        const I = p.prev;
        v(this, c, p, d), p = I;
      }
    }
    forEach(c, d) {
      d = d || this;
      for (let p = this[o].head; p !== null; ) {
        const I = p.next;
        v(this, c, p, d), p = I;
      }
    }
    keys() {
      return this[o].toArray().map((c) => c.key);
    }
    values() {
      return this[o].toArray().map((c) => c.value);
    }
    reset() {
      this[s] && this[o] && this[o].length && this[o].forEach((c) => this[s](c.key, c.value)), this[l] = /* @__PURE__ */ new Map(), this[o] = new e(), this[n] = 0;
    }
    dump() {
      return this[o].map((c) => w(this, c) ? !1 : {
        k: c.key,
        v: c.value,
        e: c.now + (c.maxAge || 0)
      }).toArray().filter((c) => c);
    }
    dumpLru() {
      return this[o];
    }
    set(c, d, p) {
      if (p = p || this[r], p && typeof p != "number")
        throw new TypeError("maxAge must be a number");
      const I = p ? Date.now() : 0, $ = this[i](d, c);
      if (this[l].has(c)) {
        if ($ > this[t])
          return b(this, this[l].get(c)), !1;
        const P = this[l].get(c).value;
        return this[s] && (this[a] || this[s](c, P.value)), P.now = I, P.maxAge = p, P.value = d, this[n] += $ - P.length, P.length = $, this.get(c), _(this), !0;
      }
      const E = new S(c, d, $, I, p);
      return E.length > this[t] ? (this[s] && this[s](c, d), !1) : (this[n] += E.length, this[o].unshift(E), this[l].set(c, this[o].head), _(this), !0);
    }
    has(c) {
      if (!this[l].has(c)) return !1;
      const d = this[l].get(c).value;
      return !w(this, d);
    }
    get(c) {
      return m(this, c, !0);
    }
    peek(c) {
      return m(this, c, !1);
    }
    pop() {
      const c = this[o].tail;
      return c ? (b(this, c), c.value) : null;
    }
    del(c) {
      b(this, this[l].get(c));
    }
    load(c) {
      this.reset();
      const d = Date.now();
      for (let p = c.length - 1; p >= 0; p--) {
        const I = c[p], $ = I.e || 0;
        if ($ === 0)
          this.set(I.k, I.v);
        else {
          const E = $ - d;
          E > 0 && this.set(I.k, I.v, E);
        }
      }
    }
    prune() {
      this[l].forEach((c, d) => m(this, d, !1));
    }
  }
  const m = (h, c, d) => {
    const p = h[l].get(c);
    if (p) {
      const I = p.value;
      if (w(h, I)) {
        if (b(h, p), !h[u])
          return;
      } else
        d && (h[y] && (p.value.now = Date.now()), h[o].unshiftNode(p));
      return I.value;
    }
  }, w = (h, c) => {
    if (!c || !c.maxAge && !h[r])
      return !1;
    const d = Date.now() - c.now;
    return c.maxAge ? d > c.maxAge : h[r] && d > h[r];
  }, _ = (h) => {
    if (h[n] > h[t])
      for (let c = h[o].tail; h[n] > h[t] && c !== null; ) {
        const d = c.prev;
        b(h, c), c = d;
      }
  }, b = (h, c) => {
    if (c) {
      const d = c.value;
      h[s] && h[s](d.key, d.value), h[n] -= d.length, h[l].delete(d.key), h[o].removeNode(c);
    }
  };
  class S {
    constructor(c, d, p, I, $) {
      this.key = c, this.value = d, this.length = p, this.now = I, this.maxAge = $ || 0;
    }
  }
  const v = (h, c, d, p) => {
    let I = d.value;
    w(h, I) && (b(h, d), h[u] || (I = void 0)), I && c.call(p, I.value, I.key, h);
  };
  return gi = f, gi;
}
var vi, Oo;
function tp() {
  if (Oo) return vi;
  Oo = 1;
  const e = Dc(), t = 10;
  return vi = class {
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
    setProcessed(i, u) {
      this.cache.set(i, u);
    }
  }, vi;
}
var bi, qo;
function np() {
  if (qo) return bi;
  qo = 1;
  const {
    isArray: e,
    isObject: t,
    isString: n
  } = $e(), {
    asArray: i
  } = Oe(), { prependBase: u } = ct(), r = qe(), s = tp(), a = 10;
  bi = class {
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
      documentLoader: m,
      base: w,
      cycles: _ = /* @__PURE__ */ new Set()
    }) {
      f && t(f) && f["@context"] && (f = f["@context"]), f = i(f);
      const b = [];
      for (const S of f) {
        if (n(S)) {
          let c = this._get(S);
          c || (c = await this._resolveRemoteContext(
            { activeCtx: g, url: S, documentLoader: m, base: w, cycles: _ }
          )), e(c) ? b.push(...c) : b.push(c);
          continue;
        }
        if (S === null) {
          b.push(new s({ document: null }));
          continue;
        }
        t(S) || o(f);
        const v = JSON.stringify(S);
        let h = this._get(v);
        h || (h = new s({ document: S }), this._cacheResolvedContext({ key: v, resolved: h, tag: "static" })), b.push(h);
      }
      return b;
    }
    _get(g) {
      let f = this.perOpCache.get(g);
      if (!f) {
        const m = this.sharedCache.get(g);
        m && (f = m.get("static"), f && this.perOpCache.set(g, f));
      }
      return f;
    }
    _cacheResolvedContext({ key: g, resolved: f, tag: m }) {
      if (this.perOpCache.set(g, f), m !== void 0) {
        let w = this.sharedCache.get(g);
        w || (w = /* @__PURE__ */ new Map(), this.sharedCache.set(g, w)), w.set(m, f);
      }
      return f;
    }
    async _resolveRemoteContext({ activeCtx: g, url: f, documentLoader: m, base: w, cycles: _ }) {
      f = u(w, f);
      const { context: b, remoteDoc: S } = await this._fetchContext(
        { activeCtx: g, url: f, documentLoader: m, cycles: _ }
      );
      w = S.documentUrl || f, l({ context: b, base: w });
      const v = await this.resolve(
        { activeCtx: g, context: b, documentLoader: m, base: w, cycles: _ }
      );
      return this._cacheResolvedContext({ key: f, resolved: v, tag: S.tag }), v;
    }
    async _fetchContext({ activeCtx: g, url: f, documentLoader: m, cycles: w }) {
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
      let _, b;
      try {
        b = await m(f), _ = b.document || null, n(_) && (_ = JSON.parse(_));
      } catch (S) {
        throw new r(
          `Dereferencing a URL did not result in a valid JSON-LD object. Possible causes are an inaccessible URL perhaps due to a same-origin policy (ensure the server uses CORS if you are using client-side JavaScript), too many redirects, a non-JSON response, or more than one HTTP Link Header was provided for a remote context. URL: "${f}".`,
          "jsonld.InvalidUrl",
          { code: "loading remote context failed", url: f, cause: S }
        );
      }
      if (!t(_))
        throw new r(
          `Dereferencing a URL did not result in a JSON object. The response was valid JSON, but it was not a JSON object. URL: "${f}".`,
          "jsonld.InvalidUrl",
          { code: "invalid remote context", url: f }
        );
      return "@context" in _ ? _ = { "@context": _["@context"] } : _ = { "@context": {} }, b.contextUrl && (e(_["@context"]) || (_["@context"] = [_["@context"]]), _["@context"].push(b.contextUrl)), { context: _, remoteDoc: b };
    }
  };
  function o(y) {
    throw new r(
      "Invalid JSON-LD syntax; @context must be an object.",
      "jsonld.SyntaxError",
      {
        code: "invalid local context",
        context: y
      }
    );
  }
  function l({ context: y, base: g }) {
    if (!y)
      return;
    const f = y["@context"];
    if (n(f)) {
      y["@context"] = u(g, f);
      return;
    }
    if (e(f)) {
      for (let m = 0; m < f.length; ++m) {
        const w = f[m];
        if (n(w)) {
          f[m] = u(g, w);
          continue;
        }
        t(w) && l({ context: { "@context": w }, base: g });
      }
      return;
    }
    if (t(f))
      for (const m in f)
        l({ context: f[m], base: g });
  }
  return bi;
}
var wi, No;
function rp() {
  return No || (No = 1, wi = is().NQuads), wi;
}
var _i, To;
function Gt() {
  if (To) return _i;
  To = 1;
  const e = qe(), {
    isArray: t
  } = $e(), {
    asArray: n
  } = Oe(), i = {};
  _i = i, i.defaultEventHandler = null, i.setupEventHandler = ({ options: s = {} }) => {
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
    u({ event: s, handlers: a.eventHandler });
  };
  function u({ event: s, handlers: a }) {
    let o = !0;
    for (let l = 0; o && l < a.length; ++l) {
      o = !1;
      const y = a[l];
      if (t(y))
        o = u({ event: s, handlers: y });
      else if (typeof y == "function")
        y({ event: s, next: () => {
          o = !0;
        } });
      else if (typeof y == "object")
        s.code in y ? y[s.code]({ event: s, next: () => {
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
  }, _i;
}
var Si, Po;
function ht() {
  if (Po) return Si;
  Po = 1;
  const e = Oe(), t = qe(), {
    isArray: n,
    isObject: i,
    isString: u,
    isUndefined: r
  } = $e(), {
    isAbsolute: s,
    isRelative: a,
    prependBase: o
  } = ct(), {
    handleEvent: l
  } = Gt(), {
    REGEX_BCP47: y,
    REGEX_KEYWORD: g,
    asArray: f,
    compareShortestLeast: m
  } = Oe(), w = /* @__PURE__ */ new Map(), _ = 1e4, b = {};
  Si = b, b.process = async ({
    activeCtx: h,
    localCtx: c,
    options: d,
    propagate: p = !0,
    overrideProtected: I = !1,
    cycles: $ = /* @__PURE__ */ new Set()
  }) => {
    if (i(c) && "@context" in c && n(c["@context"]) && (c = c["@context"]), f(c).length === 0)
      return h;
    const O = [], P = [
      ({ event: B, next: N }) => {
        O.push(B), N();
      }
    ];
    d.eventHandler && P.push(d.eventHandler);
    const M = d;
    d = { ...d, eventHandler: P };
    const j = await d.contextResolver.resolve({
      activeCtx: h,
      context: c,
      documentLoader: d.documentLoader,
      base: d.base
    });
    i(j[0].document) && typeof j[0].document["@propagate"] == "boolean" && (p = j[0].document["@propagate"]);
    let q = h;
    !p && !q.previousContext && (q = q.clone(), q.previousContext = h);
    for (const B of j) {
      let { document: N } = B;
      if (h = q, N === null) {
        if (!I && Object.keys(h.protected).length !== 0)
          throw new t(
            "Tried to nullify a context with protected terms outside of a term definition.",
            "jsonld.SyntaxError",
            { code: "invalid context nullification" }
          );
        q = h = b.getInitialContext(d).clone();
        continue;
      }
      const H = B.getProcessed(h);
      if (H) {
        if (M.eventHandler)
          for (const J of H.events)
            l({ event: J, options: M });
        q = h = H.context;
        continue;
      }
      if (i(N) && "@context" in N && (N = N["@context"]), !i(N))
        throw new t(
          "Invalid JSON-LD syntax; @context must be an object.",
          "jsonld.SyntaxError",
          { code: "invalid local context", context: N }
        );
      q = q.clone();
      const F = /* @__PURE__ */ new Map();
      if ("@version" in N) {
        if (N["@version"] !== 1.1)
          throw new t(
            "Unsupported JSON-LD version: " + N["@version"],
            "jsonld.UnsupportedVersion",
            { code: "invalid @version value", context: N }
          );
        if (h.processingMode && h.processingMode === "json-ld-1.0")
          throw new t(
            "@version: " + N["@version"] + " not compatible with " + h.processingMode,
            "jsonld.ProcessingModeConflict",
            { code: "processing mode conflict", context: N }
          );
        q.processingMode = "json-ld-1.1", q["@version"] = N["@version"], F.set("@version", !0);
      }
      if (q.processingMode = q.processingMode || h.processingMode, "@base" in N) {
        let J = N["@base"];
        if (!(J === null || s(J))) if (a(J))
          J = o(q["@base"], J);
        else
          throw new t(
            'Invalid JSON-LD syntax; the value of "@base" in a @context must be an absolute IRI, a relative IRI, or null.',
            "jsonld.SyntaxError",
            { code: "invalid base IRI", context: N }
          );
        q["@base"] = J, F.set("@base", !0);
      }
      if ("@vocab" in N) {
        const J = N["@vocab"];
        if (J === null)
          delete q["@vocab"];
        else if (u(J)) {
          if (!s(J) && b.processingMode(q, 1))
            throw new t(
              'Invalid JSON-LD syntax; the value of "@vocab" in a @context must be an absolute IRI.',
              "jsonld.SyntaxError",
              { code: "invalid vocab mapping", context: N }
            );
          {
            const T = S(
              q,
              J,
              { vocab: !0, base: !0 },
              void 0,
              void 0,
              d
            );
            s(T) || d.eventHandler && l({
              event: {
                type: ["JsonLdEvent"],
                code: "relative @vocab reference",
                level: "warning",
                message: "Relative @vocab reference found.",
                details: {
                  vocab: T
                }
              },
              options: d
            }), q["@vocab"] = T;
          }
        } else throw new t(
          'Invalid JSON-LD syntax; the value of "@vocab" in a @context must be a string or null.',
          "jsonld.SyntaxError",
          { code: "invalid vocab mapping", context: N }
        );
        F.set("@vocab", !0);
      }
      if ("@language" in N) {
        const J = N["@language"];
        if (J === null)
          delete q["@language"];
        else if (u(J))
          J.match(y) || d.eventHandler && l({
            event: {
              type: ["JsonLdEvent"],
              code: "invalid @language value",
              level: "warning",
              message: "@language value must be valid BCP47.",
              details: {
                language: J
              }
            },
            options: d
          }), q["@language"] = J.toLowerCase();
        else
          throw new t(
            'Invalid JSON-LD syntax; the value of "@language" in a @context must be a string or null.',
            "jsonld.SyntaxError",
            { code: "invalid default language", context: N }
          );
        F.set("@language", !0);
      }
      if ("@direction" in N) {
        const J = N["@direction"];
        if (h.processingMode === "json-ld-1.0")
          throw new t(
            "Invalid JSON-LD syntax; @direction not compatible with " + h.processingMode,
            "jsonld.SyntaxError",
            { code: "invalid context member", context: N }
          );
        if (J === null)
          delete q["@direction"];
        else {
          if (J !== "ltr" && J !== "rtl")
            throw new t(
              'Invalid JSON-LD syntax; the value of "@direction" in a @context must be null, "ltr", or "rtl".',
              "jsonld.SyntaxError",
              { code: "invalid base direction", context: N }
            );
          q["@direction"] = J;
        }
        F.set("@direction", !0);
      }
      if ("@propagate" in N) {
        const J = N["@propagate"];
        if (h.processingMode === "json-ld-1.0")
          throw new t(
            "Invalid JSON-LD syntax; @propagate not compatible with " + h.processingMode,
            "jsonld.SyntaxError",
            { code: "invalid context entry", context: N }
          );
        if (typeof J != "boolean")
          throw new t(
            "Invalid JSON-LD syntax; @propagate value must be a boolean.",
            "jsonld.SyntaxError",
            { code: "invalid @propagate value", context: c }
          );
        F.set("@propagate", !0);
      }
      if ("@import" in N) {
        const J = N["@import"];
        if (h.processingMode === "json-ld-1.0")
          throw new t(
            "Invalid JSON-LD syntax; @import not compatible with " + h.processingMode,
            "jsonld.SyntaxError",
            { code: "invalid context entry", context: N }
          );
        if (!u(J))
          throw new t(
            "Invalid JSON-LD syntax; @import must be a string.",
            "jsonld.SyntaxError",
            { code: "invalid @import value", context: c }
          );
        const T = await d.contextResolver.resolve({
          activeCtx: h,
          context: J,
          documentLoader: d.documentLoader,
          base: d.base
        });
        if (T.length !== 1)
          throw new t(
            "Invalid JSON-LD syntax; @import must reference a single context.",
            "jsonld.SyntaxError",
            { code: "invalid remote context", context: c }
          );
        const D = T[0].getProcessed(h);
        if (D)
          N = D;
        else {
          const U = T[0].document;
          if ("@import" in U)
            throw new t(
              "Invalid JSON-LD syntax: imported context must not include @import.",
              "jsonld.SyntaxError",
              { code: "invalid context entry", context: c }
            );
          for (const k in U)
            N.hasOwnProperty(k) || (N[k] = U[k]);
          T[0].setProcessed(h, N);
        }
        F.set("@import", !0);
      }
      F.set("@protected", N["@protected"] || !1);
      for (const J in N)
        if (b.createTermDefinition({
          activeCtx: q,
          localCtx: N,
          term: J,
          defined: F,
          options: d,
          overrideProtected: I
        }), i(N[J]) && "@context" in N[J]) {
          const T = N[J]["@context"];
          let D = !0;
          if (u(T)) {
            const U = o(d.base, T);
            $.has(U) ? D = !1 : $.add(U);
          }
          if (D)
            try {
              await b.process({
                activeCtx: q.clone(),
                localCtx: N[J]["@context"],
                overrideProtected: !0,
                options: d,
                cycles: $
              });
            } catch {
              throw new t(
                "Invalid JSON-LD syntax; invalid scoped context.",
                "jsonld.SyntaxError",
                {
                  code: "invalid scoped context",
                  context: N[J]["@context"],
                  term: J
                }
              );
            }
        }
      B.setProcessed(h, {
        context: q,
        events: O
      });
    }
    return q;
  }, b.createTermDefinition = ({
    activeCtx: h,
    localCtx: c,
    term: d,
    defined: p,
    options: I,
    overrideProtected: $ = !1
  }) => {
    if (p.has(d)) {
      if (p.get(d))
        return;
      throw new t(
        "Cyclical context definition detected.",
        "jsonld.CyclicalContext",
        { code: "cyclic IRI mapping", context: c, term: d }
      );
    }
    p.set(d, !1);
    let E;
    if (c.hasOwnProperty(d) && (E = c[d]), d === "@type" && i(E) && (E["@container"] || "@set") === "@set" && b.processingMode(h, 1.1)) {
      const N = ["@container", "@id", "@protected"], H = Object.keys(E);
      if (H.length === 0 || H.some((F) => !N.includes(F)))
        throw new t(
          "Invalid JSON-LD syntax; keywords cannot be overridden.",
          "jsonld.SyntaxError",
          { code: "keyword redefinition", context: c, term: d }
        );
    } else {
      if (b.isKeyword(d))
        throw new t(
          "Invalid JSON-LD syntax; keywords cannot be overridden.",
          "jsonld.SyntaxError",
          { code: "keyword redefinition", context: c, term: d }
        );
      if (d.match(g)) {
        I.eventHandler && l({
          event: {
            type: ["JsonLdEvent"],
            code: "reserved term",
            level: "warning",
            message: 'Terms beginning with "@" are reserved for future use and dropped.',
            details: {
              term: d
            }
          },
          options: I
        });
        return;
      } else if (d === "")
        throw new t(
          "Invalid JSON-LD syntax; a term cannot be an empty string.",
          "jsonld.SyntaxError",
          { code: "invalid term definition", context: c }
        );
    }
    const O = h.mappings.get(d);
    h.mappings.has(d) && h.mappings.delete(d);
    let P = !1;
    if ((u(E) || E === null) && (P = !0, E = { "@id": E }), !i(E))
      throw new t(
        "Invalid JSON-LD syntax; @context term values must be strings or objects.",
        "jsonld.SyntaxError",
        { code: "invalid term definition", context: c }
      );
    const M = {};
    h.mappings.set(d, M), M.reverse = !1;
    const j = ["@container", "@id", "@language", "@reverse", "@type"];
    b.processingMode(h, 1.1) && j.push(
      "@context",
      "@direction",
      "@index",
      "@nest",
      "@prefix",
      "@protected"
    );
    for (const N in E)
      if (!j.includes(N))
        throw new t(
          "Invalid JSON-LD syntax; a term definition must not contain " + N,
          "jsonld.SyntaxError",
          { code: "invalid term definition", context: c }
        );
    const q = d.indexOf(":");
    if (M._termHasColon = q > 0, "@reverse" in E) {
      if ("@id" in E)
        throw new t(
          "Invalid JSON-LD syntax; a @reverse term definition must not contain @id.",
          "jsonld.SyntaxError",
          { code: "invalid reverse property", context: c }
        );
      if ("@nest" in E)
        throw new t(
          "Invalid JSON-LD syntax; a @reverse term definition must not contain @nest.",
          "jsonld.SyntaxError",
          { code: "invalid reverse property", context: c }
        );
      const N = E["@reverse"];
      if (!u(N))
        throw new t(
          "Invalid JSON-LD syntax; a @context @reverse value must be a string.",
          "jsonld.SyntaxError",
          { code: "invalid IRI mapping", context: c }
        );
      if (N.match(g)) {
        I.eventHandler && l({
          event: {
            type: ["JsonLdEvent"],
            code: "reserved @reverse value",
            level: "warning",
            message: '@reverse values beginning with "@" are reserved for future use and dropped.',
            details: {
              reverse: N
            }
          },
          options: I
        }), O ? h.mappings.set(d, O) : h.mappings.delete(d);
        return;
      }
      const H = S(
        h,
        N,
        { vocab: !0, base: !1 },
        c,
        p,
        I
      );
      if (!s(H))
        throw new t(
          "Invalid JSON-LD syntax; a @context @reverse value must be an absolute IRI or a blank node identifier.",
          "jsonld.SyntaxError",
          { code: "invalid IRI mapping", context: c }
        );
      M["@id"] = H, M.reverse = !0;
    } else if ("@id" in E) {
      let N = E["@id"];
      if (N && !u(N))
        throw new t(
          "Invalid JSON-LD syntax; a @context @id value must be an array of strings or a string.",
          "jsonld.SyntaxError",
          { code: "invalid IRI mapping", context: c }
        );
      if (N === null)
        M["@id"] = null;
      else if (!b.isKeyword(N) && N.match(g)) {
        I.eventHandler && l({
          event: {
            type: ["JsonLdEvent"],
            code: "reserved @id value",
            level: "warning",
            message: '@id values beginning with "@" are reserved for future use and dropped.',
            details: {
              id: N
            }
          },
          options: I
        }), O ? h.mappings.set(d, O) : h.mappings.delete(d);
        return;
      } else if (N !== d) {
        if (N = S(
          h,
          N,
          { vocab: !0, base: !1 },
          c,
          p,
          I
        ), !s(N) && !b.isKeyword(N))
          throw new t(
            "Invalid JSON-LD syntax; a @context @id value must be an absolute IRI, a blank node identifier, or a keyword.",
            "jsonld.SyntaxError",
            { code: "invalid IRI mapping", context: c }
          );
        if (d.match(/(?::[^:])|\//)) {
          const H = new Map(p).set(d, !0);
          if (S(
            h,
            d,
            { vocab: !0, base: !1 },
            c,
            H,
            I
          ) !== N)
            throw new t(
              "Invalid JSON-LD syntax; term in form of IRI must expand to definition.",
              "jsonld.SyntaxError",
              { code: "invalid IRI mapping", context: c }
            );
        }
        M["@id"] = N, M._prefix = P && !M._termHasColon && N.match(/[:\/\?#\[\]@]$/) !== null;
      }
    }
    if (!("@id" in M))
      if (M._termHasColon) {
        const N = d.substr(0, q);
        if (c.hasOwnProperty(N) && b.createTermDefinition({
          activeCtx: h,
          localCtx: c,
          term: N,
          defined: p,
          options: I
        }), h.mappings.has(N)) {
          const H = d.substr(q + 1);
          M["@id"] = h.mappings.get(N)["@id"] + H;
        } else
          M["@id"] = d;
      } else if (d === "@type")
        M["@id"] = d;
      else {
        if (!("@vocab" in h))
          throw new t(
            "Invalid JSON-LD syntax; @context terms must define an @id.",
            "jsonld.SyntaxError",
            { code: "invalid IRI mapping", context: c, term: d }
          );
        M["@id"] = h["@vocab"] + d;
      }
    if ((E["@protected"] === !0 || p.get("@protected") === !0 && E["@protected"] !== !1) && (h.protected[d] = !0, M.protected = !0), p.set(d, !0), "@type" in E) {
      let N = E["@type"];
      if (!u(N))
        throw new t(
          "Invalid JSON-LD syntax; an @context @type value must be a string.",
          "jsonld.SyntaxError",
          { code: "invalid type mapping", context: c }
        );
      if (N === "@json" || N === "@none") {
        if (b.processingMode(h, 1))
          throw new t(
            `Invalid JSON-LD syntax; an @context @type value must not be "${N}" in JSON-LD 1.0 mode.`,
            "jsonld.SyntaxError",
            { code: "invalid type mapping", context: c }
          );
      } else if (N !== "@id" && N !== "@vocab") {
        if (N = S(
          h,
          N,
          { vocab: !0, base: !1 },
          c,
          p,
          I
        ), !s(N))
          throw new t(
            "Invalid JSON-LD syntax; an @context @type value must be an absolute IRI.",
            "jsonld.SyntaxError",
            { code: "invalid type mapping", context: c }
          );
        if (N.indexOf("_:") === 0)
          throw new t(
            "Invalid JSON-LD syntax; an @context @type value must be an IRI, not a blank node identifier.",
            "jsonld.SyntaxError",
            { code: "invalid type mapping", context: c }
          );
      }
      M["@type"] = N;
    }
    if ("@container" in E) {
      const N = u(E["@container"]) ? [E["@container"]] : E["@container"] || [], H = ["@list", "@set", "@index", "@language"];
      let F = !0;
      const J = N.includes("@set");
      if (b.processingMode(h, 1.1)) {
        if (H.push("@graph", "@id", "@type"), N.includes("@list")) {
          if (N.length !== 1)
            throw new t(
              "Invalid JSON-LD syntax; @context @container with @list must have no other values",
              "jsonld.SyntaxError",
              { code: "invalid container mapping", context: c }
            );
        } else if (N.includes("@graph")) {
          if (N.some((T) => T !== "@graph" && T !== "@id" && T !== "@index" && T !== "@set"))
            throw new t(
              "Invalid JSON-LD syntax; @context @container with @graph must have no other values other than @id, @index, and @set",
              "jsonld.SyntaxError",
              { code: "invalid container mapping", context: c }
            );
        } else
          F &= N.length <= (J ? 2 : 1);
        if (N.includes("@type") && (M["@type"] = M["@type"] || "@id", !["@id", "@vocab"].includes(M["@type"])))
          throw new t(
            "Invalid JSON-LD syntax; container: @type requires @type to be @id or @vocab.",
            "jsonld.SyntaxError",
            { code: "invalid type mapping", context: c }
          );
      } else
        F &= !n(E["@container"]), F &= N.length <= 1;
      if (F &= N.every((T) => H.includes(T)), F &= !(J && N.includes("@list")), !F)
        throw new t(
          "Invalid JSON-LD syntax; @context @container value must be one of the following: " + H.join(", "),
          "jsonld.SyntaxError",
          { code: "invalid container mapping", context: c }
        );
      if (M.reverse && !N.every((T) => ["@index", "@set"].includes(T)))
        throw new t(
          "Invalid JSON-LD syntax; @context @container value for a @reverse type definition must be @index or @set.",
          "jsonld.SyntaxError",
          { code: "invalid reverse property", context: c }
        );
      M["@container"] = N;
    }
    if ("@index" in E) {
      if (!("@container" in E) || !M["@container"].includes("@index"))
        throw new t(
          `Invalid JSON-LD syntax; @index without @index in @container: "${E["@index"]}" on term "${d}".`,
          "jsonld.SyntaxError",
          { code: "invalid term definition", context: c }
        );
      if (!u(E["@index"]) || E["@index"].indexOf("@") === 0)
        throw new t(
          `Invalid JSON-LD syntax; @index must expand to an IRI: "${E["@index"]}" on term "${d}".`,
          "jsonld.SyntaxError",
          { code: "invalid term definition", context: c }
        );
      M["@index"] = E["@index"];
    }
    if ("@context" in E && (M["@context"] = E["@context"]), "@language" in E && !("@type" in E)) {
      let N = E["@language"];
      if (N !== null && !u(N))
        throw new t(
          "Invalid JSON-LD syntax; @context @language value must be a string or null.",
          "jsonld.SyntaxError",
          { code: "invalid language mapping", context: c }
        );
      N !== null && (N = N.toLowerCase()), M["@language"] = N;
    }
    if ("@prefix" in E) {
      if (d.match(/:|\//))
        throw new t(
          "Invalid JSON-LD syntax; @context @prefix used on a compact IRI term",
          "jsonld.SyntaxError",
          { code: "invalid term definition", context: c }
        );
      if (b.isKeyword(M["@id"]))
        throw new t(
          "Invalid JSON-LD syntax; keywords may not be used as prefixes",
          "jsonld.SyntaxError",
          { code: "invalid term definition", context: c }
        );
      if (typeof E["@prefix"] == "boolean")
        M._prefix = E["@prefix"] === !0;
      else
        throw new t(
          "Invalid JSON-LD syntax; @context value for @prefix must be boolean",
          "jsonld.SyntaxError",
          { code: "invalid @prefix value", context: c }
        );
    }
    if ("@direction" in E) {
      const N = E["@direction"];
      if (N !== null && N !== "ltr" && N !== "rtl")
        throw new t(
          'Invalid JSON-LD syntax; @direction value must be null, "ltr", or "rtl".',
          "jsonld.SyntaxError",
          { code: "invalid base direction", context: c }
        );
      M["@direction"] = N;
    }
    if ("@nest" in E) {
      const N = E["@nest"];
      if (!u(N) || N !== "@nest" && N.indexOf("@") === 0)
        throw new t(
          "Invalid JSON-LD syntax; @context @nest value must be a string which is not a keyword other than @nest.",
          "jsonld.SyntaxError",
          { code: "invalid @nest value", context: c }
        );
      M["@nest"] = N;
    }
    // disallow aliasing @context and @preserve
    const B = M["@id"];
    if (B === "@context" || B === "@preserve")
      throw new t(
        "Invalid JSON-LD syntax; @context and @preserve cannot be aliased.",
        "jsonld.SyntaxError",
        { code: "invalid keyword alias", context: c }
      );
    if (O && O.protected && !$ && (h.protected[d] = !0, M.protected = !0, !v(O, M)))
      throw new t(
        "Invalid JSON-LD syntax; tried to redefine a protected term.",
        "jsonld.SyntaxError",
        { code: "protected term redefinition", context: c, term: d }
      );
  }, b.expandIri = (h, c, d, p) => S(
    h,
    c,
    d,
    void 0,
    void 0,
    p
  );
  function S(h, c, d, p, I, $) {
    if (c === null || !u(c) || b.isKeyword(c))
      return c;
    if (c.match(g))
      return null;
    if (p && p.hasOwnProperty(c) && I.get(c) !== !0 && b.createTermDefinition({
      activeCtx: h,
      localCtx: p,
      term: c,
      defined: I,
      options: $
    }), d = d || {}, d.vocab) {
      const O = h.mappings.get(c);
      if (O === null)
        return null;
      if (i(O) && "@id" in O)
        return O["@id"];
    }
    const E = c.indexOf(":");
    if (E > 0) {
      const O = c.substr(0, E), P = c.substr(E + 1);
      if (O === "_" || P.indexOf("//") === 0)
        return c;
      p && p.hasOwnProperty(O) && b.createTermDefinition({
        activeCtx: h,
        localCtx: p,
        term: O,
        defined: I,
        options: $
      });
      const M = h.mappings.get(O);
      if (M && M._prefix)
        return M["@id"] + P;
      if (s(c))
        return c;
    }
    if (d.vocab && "@vocab" in h)
      c = h["@vocab"] + c;
    else if (d.base) {
      let O, P;
      "@base" in h ? h["@base"] ? (P = o($.base, h["@base"]), O = o(P, c)) : (P = h["@base"], O = c) : (P = $.base, O = o($.base, c)), c = O;
    }
    return c;
  }
  b.getInitialContext = (h) => {
    const c = JSON.stringify({ processingMode: h.processingMode }), d = w.get(c);
    if (d)
      return d;
    const p = {
      processingMode: h.processingMode,
      mappings: /* @__PURE__ */ new Map(),
      inverse: null,
      getInverse: I,
      clone: O,
      revertToPreviousContext: P,
      protected: {}
    };
    return w.size === _ && w.clear(), w.set(c, p), p;
    function I() {
      const M = this;
      if (M.inverse)
        return M.inverse;
      const j = M.inverse = {}, q = M.fastCurieMap = {}, B = {}, N = (M["@language"] || "@none").toLowerCase(), H = M["@direction"], F = M.mappings, J = [...F.keys()].sort(m);
      for (const T of J) {
        const D = F.get(T);
        if (D === null)
          continue;
        let U = D["@container"] || "@none";
        if (U = [].concat(U).sort().join(""), D["@id"] === null)
          continue;
        const k = f(D["@id"]);
        for (const R of k) {
          let x = j[R];
          const A = b.isKeyword(R);
          if (x)
            !A && !D._termHasColon && B[R].push(T);
          else if (j[R] = x = {}, !A && !D._termHasColon) {
            B[R] = [T];
            const L = { iri: R, terms: B[R] };
            R[0] in q ? q[R[0]].push(L) : q[R[0]] = [L];
          }
          if (x[U] || (x[U] = {
            "@language": {},
            "@type": {},
            "@any": {}
          }), x = x[U], E(T, x["@any"], "@none"), D.reverse)
            E(T, x["@type"], "@reverse");
          else if (D["@type"] === "@none")
            E(T, x["@any"], "@none"), E(T, x["@language"], "@none"), E(T, x["@type"], "@none");
          else if ("@type" in D)
            E(T, x["@type"], D["@type"]);
          else if ("@language" in D && "@direction" in D) {
            const L = D["@language"], K = D["@direction"];
            L && K ? E(
              T,
              x["@language"],
              `${L}_${K}`.toLowerCase()
            ) : L ? E(T, x["@language"], L.toLowerCase()) : K ? E(T, x["@language"], `_${K}`) : E(T, x["@language"], "@null");
          } else "@language" in D ? E(
            T,
            x["@language"],
            (D["@language"] || "@null").toLowerCase()
          ) : "@direction" in D ? D["@direction"] ? E(
            T,
            x["@language"],
            `_${D["@direction"]}`
          ) : E(T, x["@language"], "@none") : H ? (E(T, x["@language"], `_${H}`), E(T, x["@language"], "@none"), E(T, x["@type"], "@none")) : (E(T, x["@language"], N), E(T, x["@language"], "@none"), E(T, x["@type"], "@none"));
        }
      }
      for (const T in q)
        $(q, T, 1);
      return j;
    }
    function $(M, j, q) {
      const B = M[j], N = M[j] = {};
      let H, F;
      for (const J of B)
        H = J.iri, q >= H.length ? F = "" : F = H[q], F in N ? N[F].push(J) : N[F] = [J];
      for (const J in N)
        J !== "" && $(N, J, q + 1);
    }
    function E(M, j, q) {
      j.hasOwnProperty(q) || (j[q] = M);
    }
    function O() {
      const M = {};
      return M.mappings = e.clone(this.mappings), M.clone = this.clone, M.inverse = null, M.getInverse = this.getInverse, M.protected = e.clone(this.protected), this.previousContext && (M.previousContext = this.previousContext.clone()), M.revertToPreviousContext = this.revertToPreviousContext, "@base" in this && (M["@base"] = this["@base"]), "@language" in this && (M["@language"] = this["@language"]), "@vocab" in this && (M["@vocab"] = this["@vocab"]), M;
    }
    function P() {
      return this.previousContext ? this.previousContext.clone() : this;
    }
  }, b.getContextValue = (h, c, d) => {
    if (c === null)
      return d === "@context" ? void 0 : null;
    if (h.mappings.has(c)) {
      const p = h.mappings.get(c);
      if (r(d))
        return p;
      if (p.hasOwnProperty(d))
        return p[d];
    }
    if (d === "@language" && d in h || d === "@direction" && d in h)
      return h[d];
    if (d !== "@context")
      return null;
  }, b.processingMode = (h, c) => c.toString() >= "1.1" ? !h.processingMode || h.processingMode >= "json-ld-" + c.toString() : h.processingMode === "json-ld-1.0", b.isKeyword = (h) => {
    if (!u(h) || h[0] !== "@")
      return !1;
    switch (h) {
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
  function v(h, c) {
    if (!(h && typeof h == "object") || !(c && typeof c == "object"))
      return h === c;
    const d = Array.isArray(h);
    if (d !== Array.isArray(c))
      return !1;
    if (d) {
      if (h.length !== c.length)
        return !1;
      for (let $ = 0; $ < h.length; ++$)
        if (!v(h[$], c[$]))
          return !1;
      return !0;
    }
    const p = Object.keys(h), I = Object.keys(c);
    if (p.length !== I.length)
      return !1;
    for (const $ in h) {
      let E = h[$], O = c[$];
      if ($ === "@container" && Array.isArray(E) && Array.isArray(O) && (E = E.slice().sort(), O = O.slice().sort()), !v(E, O))
        return !1;
    }
    return !0;
  }
  return Si;
}
var Ii, Do;
function ip() {
  if (Do) return Ii;
  Do = 1;
  const e = qe(), {
    isArray: t,
    isObject: n,
    isEmptyObject: i,
    isString: u,
    isUndefined: r
  } = $e(), {
    isList: s,
    isValue: a,
    isGraph: o,
    isSubject: l
  } = Ye(), {
    expandIri: y,
    getContextValue: g,
    isKeyword: f,
    process: m,
    processingMode: w
  } = ht(), {
    isAbsolute: _
  } = ct(), {
    REGEX_BCP47: b,
    REGEX_KEYWORD: S,
    addValue: v,
    asArray: h,
    getValues: c,
    validateTypeValue: d
  } = Oe(), {
    handleEvent: p
  } = Gt(), I = {};
  Ii = I, I.expand = async ({
    activeCtx: j,
    activeProperty: q = null,
    element: B,
    options: N = {},
    insideList: H = !1,
    insideIndex: F = !1,
    typeScopedContext: J = null
  }) => {
    if (B == null)
      return null;
    if (q === "@default" && (N = Object.assign({}, N, { isFrame: !1 })), !t(B) && !n(B))
      return !H && (q === null || y(
        j,
        q,
        { vocab: !0 },
        N
      ) === "@graph") ? (N.eventHandler && p({
        event: {
          type: ["JsonLdEvent"],
          code: "free-floating scalar",
          level: "warning",
          message: "Dropping free-floating scalar not in a list.",
          details: {
            value: B
            //activeProperty
            //insideList
          }
        },
        options: N
      }), null) : O({ activeCtx: j, activeProperty: q, value: B, options: N });
    if (t(B)) {
      let L = [];
      const K = g(
        j,
        q,
        "@container"
      ) || [];
      H = H || K.includes("@list");
      for (let Q = 0; Q < B.length; ++Q) {
        let G = await I.expand({
          activeCtx: j,
          activeProperty: q,
          element: B[Q],
          options: N,
          insideIndex: F,
          typeScopedContext: J
        });
        H && t(G) && (G = { "@list": G }), G !== null && (t(G) ? L = L.concat(G) : L.push(G));
      }
      return L;
    }
    const T = y(
      j,
      q,
      { vocab: !0 },
      N
    ), D = g(j, q, "@context");
    J = J || (j.previousContext ? j : null);
    let U = Object.keys(B).sort(), k = !F;
    if (k && J && U.length <= 2 && !U.includes("@context"))
      for (const L of U) {
        const K = y(
          J,
          L,
          { vocab: !0 },
          N
        );
        if (K === "@value") {
          k = !1, j = J;
          break;
        }
        if (K === "@id" && U.length === 1) {
          k = !1;
          break;
        }
      }
    k && (j = j.revertToPreviousContext()), r(D) || (j = await m({
      activeCtx: j,
      localCtx: D,
      propagate: !0,
      overrideProtected: !0,
      options: N
    })), "@context" in B && (j = await m(
      { activeCtx: j, localCtx: B["@context"], options: N }
    )), J = j;
    let R = null;
    for (const L of U)
      if (y(j, L, { vocab: !0 }, N) === "@type") {
        R = R || L;
        const Q = B[L], G = Array.isArray(Q) ? Q.length > 1 ? Q.slice().sort() : Q : [Q];
        for (const C of G) {
          const z = g(J, C, "@context");
          r(z) || (j = await m({
            activeCtx: j,
            localCtx: z,
            options: N,
            propagate: !1
          }));
        }
      }
    let x = {};
    await E({
      activeCtx: j,
      activeProperty: q,
      expandedActiveProperty: T,
      element: B,
      expandedParent: x,
      options: N,
      insideList: H,
      typeKey: R,
      typeScopedContext: J
    }), U = Object.keys(x);
    let A = U.length;
    if ("@value" in x) {
      if ("@type" in x && ("@language" in x || "@direction" in x))
        throw new e(
          'Invalid JSON-LD syntax; an element containing "@value" may not contain both "@type" and either "@language" or "@direction".',
          "jsonld.SyntaxError",
          { code: "invalid value object", element: x }
        );
      let L = A - 1;
      if ("@type" in x && (L -= 1), "@index" in x && (L -= 1), "@language" in x && (L -= 1), "@direction" in x && (L -= 1), L !== 0)
        throw new e(
          'Invalid JSON-LD syntax; an element containing "@value" may only have an "@index" property and either "@type" or either or both "@language" or "@direction".',
          "jsonld.SyntaxError",
          { code: "invalid value object", element: x }
        );
      const K = x["@value"] === null ? [] : h(x["@value"]), Q = c(x, "@type");
      if (!(w(j, 1.1) && Q.includes("@json") && Q.length === 1)) if (K.length === 0)
        N.eventHandler && p({
          event: {
            type: ["JsonLdEvent"],
            code: "null @value value",
            level: "warning",
            message: "Dropping null @value value.",
            details: {
              value: x
            }
          },
          options: N
        }), x = null;
      else {
        if (!K.every((G) => u(G) || i(G)) && "@language" in x)
          throw new e(
            "Invalid JSON-LD syntax; only strings may be language-tagged.",
            "jsonld.SyntaxError",
            { code: "invalid language-tagged value", element: x }
          );
        if (!Q.every((G) => _(G) && !(u(G) && G.indexOf("_:") === 0) || i(G)))
          throw new e(
            'Invalid JSON-LD syntax; an element containing "@value" and "@type" must have an absolute IRI for the value of "@type".',
            "jsonld.SyntaxError",
            { code: "invalid typed value", element: x }
          );
      }
    } else if ("@type" in x && !t(x["@type"]))
      x["@type"] = [x["@type"]];
    else if ("@set" in x || "@list" in x) {
      if (A > 1 && !(A === 2 && "@index" in x))
        throw new e(
          'Invalid JSON-LD syntax; if an element has the property "@set" or "@list", then it can have at most one other property that is "@index".',
          "jsonld.SyntaxError",
          { code: "invalid set or list object", element: x }
        );
      "@set" in x && (x = x["@set"], U = Object.keys(x), A = U.length);
    } else A === 1 && "@language" in x && (N.eventHandler && p({
      event: {
        type: ["JsonLdEvent"],
        code: "object with only @language",
        level: "warning",
        message: "Dropping object with only @language.",
        details: {
          value: x
        }
      },
      options: N
    }), x = null);
    return n(x) && !N.keepFreeFloatingNodes && !H && (q === null || T === "@graph" || (g(j, q, "@container") || []).includes("@graph")) && (x = $({ value: x, count: A, options: N })), x;
  };
  function $({
    value: j,
    count: q,
    options: B
  }) {
    if (q === 0 || "@value" in j || "@list" in j || q === 1 && "@id" in j) {
      if (B.eventHandler) {
        let N, H;
        q === 0 ? (N = "empty object", H = "Dropping empty object.") : "@value" in j ? (N = "object with only @value", H = "Dropping object with only @value.") : "@list" in j ? (N = "object with only @list", H = "Dropping object with only @list.") : q === 1 && "@id" in j && (N = "object with only @id", H = "Dropping object with only @id."), p({
          event: {
            type: ["JsonLdEvent"],
            code: N,
            level: "warning",
            message: H,
            details: {
              value: j
            }
          },
          options: B
        });
      }
      return null;
    }
    return j;
  }
  async function E({
    activeCtx: j,
    activeProperty: q,
    expandedActiveProperty: B,
    element: N,
    expandedParent: H,
    options: F = {},
    insideList: J,
    typeKey: T,
    typeScopedContext: D
  }) {
    const U = Object.keys(N).sort(), k = [];
    let R;
    const x = N[T] && y(
      j,
      t(N[T]) ? N[T][0] : N[T],
      { vocab: !0 },
      {
        ...F,
        typeExpansion: !0
      }
    ) === "@json";
    for (const A of U) {
      let L = N[A], K;
      if (A === "@context")
        continue;
      const Q = y(j, A, { vocab: !0 }, F);
      if (Q === null || !(_(Q) || f(Q))) {
        F.eventHandler && p({
          event: {
            type: ["JsonLdEvent"],
            code: "invalid property",
            level: "warning",
            message: "Dropping property that did not expand into an absolute IRI or keyword.",
            details: {
              property: A,
              expandedProperty: Q
            }
          },
          options: F
        });
        continue;
      }
      if (f(Q)) {
        if (B === "@reverse")
          throw new e(
            "Invalid JSON-LD syntax; a keyword cannot be used as a @reverse property.",
            "jsonld.SyntaxError",
            { code: "invalid reverse property map", value: L }
          );
        if (Q in H && Q !== "@included" && Q !== "@type")
          throw new e(
            "Invalid JSON-LD syntax; colliding keywords detected.",
            "jsonld.SyntaxError",
            { code: "colliding keywords", keyword: Q }
          );
      }
      if (Q === "@id") {
        if (!u(L)) {
          if (!F.isFrame)
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
            if (!L.every((V) => u(V)))
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
        v(
          H,
          "@id",
          h(L).map((V) => {
            if (u(V)) {
              const Z = y(j, V, { base: !0 }, F);
              return F.eventHandler && (Z === null ? p(V === null ? {
                event: {
                  type: ["JsonLdEvent"],
                  code: "null @id value",
                  level: "warning",
                  message: "Null @id found.",
                  details: {
                    id: V
                  }
                },
                options: F
              } : {
                event: {
                  type: ["JsonLdEvent"],
                  code: "reserved @id value",
                  level: "warning",
                  message: "Reserved @id found.",
                  details: {
                    id: V
                  }
                },
                options: F
              }) : _(Z) || p({
                event: {
                  type: ["JsonLdEvent"],
                  code: "relative @id reference",
                  level: "warning",
                  message: "Relative @id reference found.",
                  details: {
                    id: V,
                    expandedId: Z
                  }
                },
                options: F
              })), Z;
            }
            return V;
          }),
          { propertyIsArray: F.isFrame }
        );
        continue;
      }
      if (Q === "@type") {
        n(L) && (L = Object.fromEntries(Object.entries(L).map(([V, Z]) => [
          y(D, V, { vocab: !0 }),
          h(Z).map(
            (W) => y(
              D,
              W,
              { base: !0, vocab: !0 },
              { ...F, typeExpansion: !0 }
            )
          )
        ]))), d(L, F.isFrame), v(
          H,
          "@type",
          h(L).map((V) => {
            if (u(V)) {
              const Z = y(
                D,
                V,
                { base: !0, vocab: !0 },
                { ...F, typeExpansion: !0 }
              );
              return Z !== "@json" && !_(Z) && F.eventHandler && p({
                event: {
                  type: ["JsonLdEvent"],
                  code: "relative @type reference",
                  level: "warning",
                  message: "Relative @type reference found.",
                  details: {
                    type: V
                  }
                },
                options: F
              }), Z;
            }
            return V;
          }),
          { propertyIsArray: !!F.isFrame }
        );
        continue;
      }
      if (Q === "@included" && w(j, 1.1)) {
        const V = h(await I.expand({
          activeCtx: j,
          activeProperty: q,
          element: L,
          options: F
        }));
        if (!V.every((Z) => l(Z)))
          throw new e(
            "Invalid JSON-LD syntax; values of @included must expand to node objects.",
            "jsonld.SyntaxError",
            { code: "invalid @included value", value: L }
          );
        v(
          H,
          "@included",
          V,
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
        R = L, x && w(j, 1.1) ? H["@value"] = L : v(
          H,
          "@value",
          L,
          { propertyIsArray: F.isFrame }
        );
        continue;
      }
      if (Q === "@language") {
        if (L === null)
          continue;
        if (!u(L) && !F.isFrame)
          throw new e(
            'Invalid JSON-LD syntax; "@language" value must be a string.',
            "jsonld.SyntaxError",
            { code: "invalid language-tagged string", value: L }
          );
        L = h(L).map((V) => u(V) ? V.toLowerCase() : V);
        for (const V of L)
          u(V) && !V.match(b) && F.eventHandler && p({
            event: {
              type: ["JsonLdEvent"],
              code: "invalid @language value",
              level: "warning",
              message: "@language value must be valid BCP47.",
              details: {
                language: V
              }
            },
            options: F
          });
        v(
          H,
          "@language",
          L,
          { propertyIsArray: F.isFrame }
        );
        continue;
      }
      if (Q === "@direction") {
        if (!u(L) && !F.isFrame)
          throw new e(
            'Invalid JSON-LD syntax; "@direction" value must be a string.',
            "jsonld.SyntaxError",
            { code: "invalid base direction", value: L }
          );
        L = h(L);
        for (const V of L)
          if (u(V) && V !== "ltr" && V !== "rtl")
            throw new e(
              'Invalid JSON-LD syntax; "@direction" must be "ltr" or "rtl".',
              "jsonld.SyntaxError",
              { code: "invalid base direction", value: L }
            );
        v(
          H,
          "@direction",
          L,
          { propertyIsArray: F.isFrame }
        );
        continue;
      }
      if (Q === "@index") {
        if (!u(L))
          throw new e(
            'Invalid JSON-LD syntax; "@index" value must be a string.',
            "jsonld.SyntaxError",
            { code: "invalid @index value", value: L }
          );
        v(H, "@index", L);
        continue;
      }
      if (Q === "@reverse") {
        if (!n(L))
          throw new e(
            'Invalid JSON-LD syntax; "@reverse" value must be an object.',
            "jsonld.SyntaxError",
            { code: "invalid @reverse value", value: L }
          );
        if (K = await I.expand({
          activeCtx: j,
          activeProperty: "@reverse",
          element: L,
          options: F
        }), "@reverse" in K)
          for (const Z in K["@reverse"])
            v(
              H,
              Z,
              K["@reverse"][Z],
              { propertyIsArray: !0 }
            );
        let V = H["@reverse"] || null;
        for (const Z in K) {
          if (Z === "@reverse")
            continue;
          V === null && (V = H["@reverse"] = {}), v(V, Z, [], { propertyIsArray: !0 });
          const W = K[Z];
          for (let Y = 0; Y < W.length; ++Y) {
            const re = W[Y];
            if (a(re) || s(re))
              throw new e(
                'Invalid JSON-LD syntax; "@reverse" value must not be a @value or an @list.',
                "jsonld.SyntaxError",
                { code: "invalid reverse property value", value: K }
              );
            v(V, Z, re, { propertyIsArray: !0 });
          }
        }
        continue;
      }
      if (Q === "@nest") {
        k.push(A);
        continue;
      }
      let G = j;
      const C = g(j, A, "@context");
      r(C) || (G = await m({
        activeCtx: j,
        localCtx: C,
        propagate: !0,
        overrideProtected: !0,
        options: F
      }));
      const z = g(j, A, "@container") || [];
      if (z.includes("@language") && n(L)) {
        const V = g(G, A, "@direction");
        K = P(G, L, V, F);
      } else if (z.includes("@index") && n(L)) {
        const V = z.includes("@graph"), Z = g(G, A, "@index") || "@index", W = Z !== "@index" && y(j, Z, { vocab: !0 }, F);
        K = await M({
          activeCtx: G,
          options: F,
          activeProperty: A,
          value: L,
          asGraph: V,
          indexKey: Z,
          propertyIndex: W
        });
      } else if (z.includes("@id") && n(L)) {
        const V = z.includes("@graph");
        K = await M({
          activeCtx: G,
          options: F,
          activeProperty: A,
          value: L,
          asGraph: V,
          indexKey: "@id"
        });
      } else if (z.includes("@type") && n(L))
        K = await M({
          // since container is `@type`, revert type scoped context when expanding
          activeCtx: G.revertToPreviousContext(),
          options: F,
          activeProperty: A,
          value: L,
          asGraph: !1,
          indexKey: "@type"
        });
      else {
        const V = Q === "@list";
        if (V || Q === "@set") {
          let Z = q;
          V && B === "@graph" && (Z = null), K = await I.expand({
            activeCtx: G,
            activeProperty: Z,
            element: L,
            options: F,
            insideList: V
          });
        } else g(j, A, "@type") === "@json" ? K = {
          "@type": "@json",
          "@value": L
        } : K = await I.expand({
          activeCtx: G,
          activeProperty: A,
          element: L,
          options: F,
          insideList: !1
        });
      }
      if (!(K === null && Q !== "@value")) {
        if (Q !== "@list" && !s(K) && z.includes("@list") && (K = { "@list": h(K) }), z.includes("@graph") && !z.some((V) => V === "@id" || V === "@index")) {
          if (K = h(K), F.isFrame || (K = K.filter((V) => {
            const Z = Object.keys(V).length;
            return $({ value: V, count: Z, options: F }) !== null;
          })), K.length === 0)
            continue;
          K = K.map((V) => ({ "@graph": h(V) }));
        }
        if (G.mappings.has(A) && G.mappings.get(A).reverse) {
          const V = H["@reverse"] = H["@reverse"] || {};
          K = h(K);
          for (let Z = 0; Z < K.length; ++Z) {
            const W = K[Z];
            if (a(W) || s(W))
              throw new e(
                'Invalid JSON-LD syntax; "@reverse" value must not be a @value or an @list.',
                "jsonld.SyntaxError",
                { code: "invalid reverse property value", value: K }
              );
            v(V, Q, W, { propertyIsArray: !0 });
          }
          continue;
        }
        v(H, Q, K, {
          propertyIsArray: !0
        });
      }
    }
    if ("@value" in H && !(H["@type"] === "@json" && w(j, 1.1))) {
      if ((n(R) || t(R)) && !F.isFrame)
        throw new e(
          'Invalid JSON-LD syntax; "@value" value must not be an object or an array.',
          "jsonld.SyntaxError",
          { code: "invalid value object value", value: R }
        );
    }
    for (const A of k) {
      const L = t(N[A]) ? N[A] : [N[A]];
      for (const K of L) {
        if (!n(K) || Object.keys(K).some((Q) => y(j, Q, { vocab: !0 }, F) === "@value"))
          throw new e(
            "Invalid JSON-LD syntax; nested value must be a node object.",
            "jsonld.SyntaxError",
            { code: "invalid @nest value", value: K }
          );
        await E({
          activeCtx: j,
          activeProperty: q,
          expandedActiveProperty: B,
          element: K,
          expandedParent: H,
          options: F,
          insideList: J,
          typeScopedContext: D,
          typeKey: T
        });
      }
    }
  }
  function O({ activeCtx: j, activeProperty: q, value: B, options: N }) {
    if (B == null)
      return null;
    const H = y(
      j,
      q,
      { vocab: !0 },
      N
    );
    if (H === "@id")
      return y(j, B, { base: !0 }, N);
    if (H === "@type")
      return y(
        j,
        B,
        { vocab: !0, base: !0 },
        { ...N, typeExpansion: !0 }
      );
    const F = g(j, q, "@type");
    if ((F === "@id" || H === "@graph") && u(B)) {
      const T = y(j, B, { base: !0 }, N);
      return T === null && B.match(S) && N.eventHandler && p({
        event: {
          type: ["JsonLdEvent"],
          code: "reserved @id value",
          level: "warning",
          message: "Reserved @id found.",
          details: {
            id: q
          }
        },
        options: N
      }), { "@id": T };
    }
    if (F === "@vocab" && u(B))
      return {
        "@id": y(j, B, { vocab: !0, base: !0 }, N)
      };
    if (f(H))
      return B;
    const J = {};
    if (F && !["@id", "@vocab", "@none"].includes(F))
      J["@type"] = F;
    else if (u(B)) {
      const T = g(j, q, "@language");
      T !== null && (J["@language"] = T);
      const D = g(j, q, "@direction");
      D !== null && (J["@direction"] = D);
    }
    return ["boolean", "number", "string"].includes(typeof B) || (B = B.toString()), J["@value"] = B, J;
  }
  function P(j, q, B, N) {
    const H = [], F = Object.keys(q).sort();
    for (const J of F) {
      const T = y(j, J, { vocab: !0 }, N);
      let D = q[J];
      t(D) || (D = [D]);
      for (const U of D) {
        if (U === null)
          continue;
        if (!u(U))
          throw new e(
            "Invalid JSON-LD syntax; language map values must be strings.",
            "jsonld.SyntaxError",
            { code: "invalid language map value", languageMap: q }
          );
        const k = { "@value": U };
        T !== "@none" && (J.match(b) || N.eventHandler && p({
          event: {
            type: ["JsonLdEvent"],
            code: "invalid @language value",
            level: "warning",
            message: "@language value must be valid BCP47.",
            details: {
              language: J
            }
          },
          options: N
        }), k["@language"] = J.toLowerCase()), B && (k["@direction"] = B), H.push(k);
      }
    }
    return H;
  }
  async function M({
    activeCtx: j,
    options: q,
    activeProperty: B,
    value: N,
    asGraph: H,
    indexKey: F,
    propertyIndex: J
  }) {
    const T = [], D = Object.keys(N).sort(), U = F === "@type";
    for (let k of D) {
      if (U) {
        const A = g(j, k, "@context");
        r(A) || (j = await m({
          activeCtx: j,
          localCtx: A,
          propagate: !1,
          options: q
        }));
      }
      let R = N[k];
      t(R) || (R = [R]), R = await I.expand({
        activeCtx: j,
        activeProperty: B,
        element: R,
        options: q,
        insideList: !1,
        insideIndex: !0
      });
      let x;
      J ? k === "@none" ? x = "@none" : x = O(
        { activeCtx: j, activeProperty: F, value: k, options: q }
      ) : x = y(j, k, { vocab: !0 }, q), F === "@id" ? k = y(j, k, { base: !0 }, q) : U && (k = x);
      for (let A of R) {
        if (H && !o(A) && (A = { "@graph": [A] }), F === "@type")
          x === "@none" || (A["@type"] ? A["@type"] = [k].concat(A["@type"]) : A["@type"] = [k]);
        else {
          if (a(A) && !["@language", "@type", "@index"].includes(F))
            throw new e(
              `Invalid JSON-LD syntax; Attempt to add illegal key to value object: "${F}".`,
              "jsonld.SyntaxError",
              { code: "invalid value object", value: A }
            );
          J ? x !== "@none" && v(A, J, x, {
            propertyIsArray: !0,
            prependValue: !0
          }) : x !== "@none" && !(F in A) && (A[F] = k);
        }
        T.push(A);
      }
    }
    return T;
  }
  return Ii;
}
var $i, ko;
function xr() {
  if (ko) return $i;
  ko = 1;
  const { isKeyword: e } = ht(), t = Ye(), n = $e(), i = Oe(), u = qe(), r = {};
  return $i = r, r.createMergedNodeMap = (s, a) => {
    a = a || {};
    const o = a.issuer || new i.IdentifierIssuer("_:b"), l = { "@default": {} };
    return r.createNodeMap(s, l, "@default", o), r.mergeNodeMaps(l);
  }, r.createNodeMap = (s, a, o, l, y, g) => {
    if (n.isArray(s)) {
      for (const _ of s)
        r.createNodeMap(_, a, o, l, void 0, g);
      return;
    }
    if (!n.isObject(s)) {
      g && g.push(s);
      return;
    }
    if (t.isValue(s)) {
      if ("@type" in s) {
        let _ = s["@type"];
        _.indexOf("_:") === 0 && (s["@type"] = _ = l.getId(_));
      }
      g && g.push(s);
      return;
    } else if (g && t.isList(s)) {
      const _ = [];
      r.createNodeMap(s["@list"], a, o, l, y, _), g.push({ "@list": _ });
      return;
    }
    if ("@type" in s) {
      const _ = s["@type"];
      for (const b of _)
        b.indexOf("_:") === 0 && l.getId(b);
    }
    n.isUndefined(y) && (y = t.isBlankNode(s) ? l.getId(s["@id"]) : s["@id"]), g && g.push({ "@id": y });
    const f = a[o], m = f[y] = f[y] || {};
    m["@id"] = y;
    const w = Object.keys(s).sort();
    for (let _ of w) {
      if (_ === "@id")
        continue;
      if (_ === "@reverse") {
        const S = { "@id": y }, v = s["@reverse"];
        for (const h in v) {
          const c = v[h];
          for (const d of c) {
            let p = d["@id"];
            t.isBlankNode(d) && (p = l.getId(p)), r.createNodeMap(d, a, o, l, p), i.addValue(
              f[p],
              h,
              S,
              { propertyIsArray: !0, allowDuplicate: !1 }
            );
          }
        }
        continue;
      }
      if (_ === "@graph") {
        y in a || (a[y] = {}), r.createNodeMap(s[_], a, y, l);
        continue;
      }
      if (_ === "@included") {
        r.createNodeMap(s[_], a, o, l);
        continue;
      }
      if (_ !== "@type" && e(_)) {
        if (_ === "@index" && _ in m && (s[_] !== m[_] || s[_]["@id"] !== m[_]["@id"]))
          throw new u(
            "Invalid JSON-LD syntax; conflicting @index property detected.",
            "jsonld.SyntaxError",
            { code: "conflicting indexes", subject: m }
          );
        m[_] = s[_];
        continue;
      }
      const b = s[_];
      if (_.indexOf("_:") === 0 && (_ = l.getId(_)), b.length === 0) {
        i.addValue(m, _, [], { propertyIsArray: !0 });
        continue;
      }
      for (let S of b)
        if (_ === "@type" && (S = S.indexOf("_:") === 0 ? l.getId(S) : S), t.isSubject(S) || t.isSubjectReference(S)) {
          if ("@id" in S && !S["@id"])
            continue;
          const v = t.isBlankNode(S) ? l.getId(S["@id"]) : S["@id"];
          i.addValue(
            m,
            _,
            { "@id": v },
            { propertyIsArray: !0, allowDuplicate: !1 }
          ), r.createNodeMap(S, a, o, l, v);
        } else if (t.isValue(S))
          i.addValue(
            m,
            _,
            S,
            { propertyIsArray: !0, allowDuplicate: !1 }
          );
        else if (t.isList(S)) {
          const v = [];
          r.createNodeMap(S["@list"], a, o, l, y, v), S = { "@list": v }, i.addValue(
            m,
            _,
            S,
            { propertyIsArray: !0, allowDuplicate: !1 }
          );
        } else
          r.createNodeMap(S, a, o, l, y), i.addValue(
            m,
            _,
            S,
            { propertyIsArray: !0, allowDuplicate: !1 }
          );
    }
  }, r.mergeNodeMapGraphs = (s) => {
    const a = {};
    for (const o of Object.keys(s).sort())
      for (const l of Object.keys(s[o]).sort()) {
        const y = s[o][l];
        l in a || (a[l] = { "@id": l });
        const g = a[l];
        for (const f of Object.keys(y).sort())
          if (e(f) && f !== "@type")
            g[f] = i.clone(y[f]);
          else
            for (const m of y[f])
              i.addValue(
                g,
                f,
                i.clone(m),
                { propertyIsArray: !0, allowDuplicate: !1 }
              );
      }
    return a;
  }, r.mergeNodeMaps = (s) => {
    const a = s["@default"], o = Object.keys(s).sort();
    for (const l of o) {
      if (l === "@default")
        continue;
      const y = s[l];
      let g = a[l];
      g ? "@graph" in g || (g["@graph"] = []) : a[l] = g = {
        "@id": l,
        "@graph": []
      };
      const f = g["@graph"];
      for (const m of Object.keys(y).sort()) {
        const w = y[m];
        t.isSubjectReference(w) || f.push(w);
      }
    }
    return a;
  }, $i;
}
var xi, Lo;
function sp() {
  if (Lo) return xi;
  Lo = 1;
  const {
    isSubjectReference: e
  } = Ye(), {
    createMergedNodeMap: t
  } = xr(), n = {};
  return xi = n, n.flatten = (i) => {
    const u = t(i), r = [], s = Object.keys(u).sort();
    for (let a = 0; a < s.length; ++a) {
      const o = u[s[a]];
      e(o) || r.push(o);
    }
    return r;
  }, xi;
}
var Ri, Mo;
function ap() {
  if (Mo) return Ri;
  Mo = 1;
  const e = qe(), t = Ye(), n = $e(), {
    REGEX_BCP47: i,
    addValue: u
  } = Oe(), {
    handleEvent: r
  } = Gt(), {
    // RDF,
    RDF_LIST: s,
    RDF_FIRST: a,
    RDF_REST: o,
    RDF_NIL: l,
    RDF_TYPE: y,
    // RDF_PLAIN_LITERAL,
    // RDF_XML_LITERAL,
    RDF_JSON_LITERAL: g,
    // RDF_OBJECT,
    // RDF_LANGSTRING,
    // XSD,
    XSD_BOOLEAN: f,
    XSD_DOUBLE: m,
    XSD_INTEGER: w,
    XSD_STRING: _
  } = ss(), b = {};
  Ri = b, b.fromRDF = async (v, h) => {
    const {
      useRdfType: c = !1,
      useNativeTypes: d = !1,
      rdfDirection: p = null
    } = h, I = {}, $ = { "@default": I }, E = {};
    if (p) {
      if (p === "compound-literal")
        throw new e(
          "Unsupported rdfDirection value.",
          "jsonld.InvalidRdfDirection",
          { value: p }
        );
      if (p !== "i18n-datatype")
        throw new e(
          "Unknown rdfDirection value.",
          "jsonld.InvalidRdfDirection",
          { value: p }
        );
    }
    for (const M of v) {
      const j = M.graph.termType === "DefaultGraph" ? "@default" : M.graph.value;
      j in $ || ($[j] = {}), j !== "@default" && !(j in I) && (I[j] = { "@id": j });
      const q = $[j], B = M.subject.value, N = M.predicate.value, H = M.object;
      B in q || (q[B] = { "@id": B });
      const F = q[B], J = H.termType.endsWith("Node");
      if (J && !(H.value in q) && (q[H.value] = { "@id": H.value }), N === y && !c && J) {
        u(F, "@type", H.value, { propertyIsArray: !0 });
        continue;
      }
      const T = S(H, d, p, h);
      if (u(F, N, T, { propertyIsArray: !0 }), J)
        if (H.value === l) {
          const D = q[H.value];
          "usages" in D || (D.usages = []), D.usages.push({
            node: F,
            property: N,
            value: T
          });
        } else H.value in E ? E[H.value] = !1 : E[H.value] = {
          node: F,
          property: N,
          value: T
        };
    }
    for (const M in $) {
      const j = $[M];
      if (!(l in j))
        continue;
      const q = j[l];
      if (q.usages) {
        for (let B of q.usages) {
          let N = B.node, H = B.property, F = B.value;
          const J = [], T = [];
          let D = Object.keys(N).length;
          for (; H === o && n.isObject(E[N["@id"]]) && n.isArray(N[a]) && N[a].length === 1 && n.isArray(N[o]) && N[o].length === 1 && (D === 3 || D === 4 && n.isArray(N["@type"]) && N["@type"].length === 1 && N["@type"][0] === s) && (J.push(N[a][0]), T.push(N["@id"]), B = E[N["@id"]], N = B.node, H = B.property, F = B.value, D = Object.keys(N).length, !!t.isBlankNode(N)); )
            ;
          delete F["@id"], F["@list"] = J.reverse();
          for (const U of T)
            delete j[U];
        }
        delete q.usages;
      }
    }
    const O = [], P = Object.keys(I).sort();
    for (const M of P) {
      const j = I[M];
      if (M in $) {
        const q = j["@graph"] = [], B = $[M], N = Object.keys(B).sort();
        for (const H of N) {
          const F = B[H];
          t.isSubjectReference(F) || q.push(F);
        }
      }
      t.isSubjectReference(j) || O.push(j);
    }
    return O;
  };
  function S(v, h, c, d) {
    if (v.termType.endsWith("Node"))
      return { "@id": v.value };
    const p = { "@value": v.value };
    if (v.language)
      v.language.match(i) || d.eventHandler && r({
        event: {
          type: ["JsonLdEvent"],
          code: "invalid @language value",
          level: "warning",
          message: "@language value must be valid BCP47.",
          details: {
            language: v.language
          }
        },
        options: d
      }), p["@language"] = v.language;
    else {
      let I = v.datatype.value;
      if (I || (I = _), I === g) {
        I = "@json";
        try {
          p["@value"] = JSON.parse(p["@value"]);
        } catch ($) {
          throw new e(
            "JSON literal could not be parsed.",
            "jsonld.InvalidJsonLiteral",
            { code: "invalid JSON literal", value: p["@value"], cause: $ }
          );
        }
      }
      if (h) {
        if (I === f)
          p["@value"] === "true" ? p["@value"] = !0 : p["@value"] === "false" && (p["@value"] = !1);
        else if (n.isNumeric(p["@value"]))
          if (I === w) {
            const $ = parseInt(p["@value"], 10);
            $.toFixed(0) === p["@value"] && (p["@value"] = $);
          } else I === m && (p["@value"] = parseFloat(p["@value"]));
        [f, w, m, _].includes(I) || (p["@type"] = I);
      } else if (c === "i18n-datatype" && I.startsWith("https://www.w3.org/ns/i18n#")) {
        const [, $, E] = I.split(/[#_]/);
        $.length > 0 && (p["@language"] = $, $.match(i) || d.eventHandler && r({
          event: {
            type: ["JsonLdEvent"],
            code: "invalid @language value",
            level: "warning",
            message: "@language value must be valid BCP47.",
            details: {
              language: $
            }
          },
          options: d
        })), p["@direction"] = E;
      } else I !== _ && (p["@type"] = I);
    }
    return p;
  }
  return Ri;
}
var Ei, Co;
function op() {
  return Co || (Co = 1, Ei = function e(t) {
    return t === null || typeof t != "object" || t.toJSON != null ? JSON.stringify(t) : Array.isArray(t) ? "[" + t.reduce((n, i, u) => {
      const r = u === 0 ? "" : ",", s = i === void 0 || typeof i == "symbol" ? null : i;
      return n + r + e(s);
    }, "") + "]" : "{" + Object.keys(t).sort().reduce((n, i, u) => {
      if (t[i] === void 0 || typeof t[i] == "symbol")
        return n;
      const r = n.length === 0 ? "" : ",";
      return n + r + e(i) + ":" + e(t[i]);
    }, "") + "}";
  }), Ei;
}
var ji, Uo;
function cp() {
  if (Uo) return ji;
  Uo = 1;
  const { createNodeMap: e } = xr(), { isKeyword: t } = ht(), n = Ye(), i = op(), u = qe(), r = $e(), s = Oe(), {
    handleEvent: a
  } = Gt(), {
    // RDF,
    // RDF_LIST,
    RDF_FIRST: o,
    RDF_REST: l,
    RDF_NIL: y,
    RDF_TYPE: g,
    // RDF_PLAIN_LITERAL,
    // RDF_XML_LITERAL,
    RDF_JSON_LITERAL: f,
    // RDF_OBJECT,
    RDF_LANGSTRING: m,
    // XSD,
    XSD_BOOLEAN: w,
    XSD_DOUBLE: _,
    XSD_INTEGER: b,
    XSD_STRING: S
  } = ss(), {
    isAbsolute: v
  } = ct(), h = {};
  ji = h, h.toRDF = (I, $) => {
    const E = new s.IdentifierIssuer("_:b"), O = { "@default": {} };
    e(I, O, "@default", E);
    const P = [], M = Object.keys(O).sort();
    for (const j of M) {
      let q;
      if (j === "@default")
        q = { termType: "DefaultGraph", value: "" };
      else if (v(j))
        j.startsWith("_:") ? q = { termType: "BlankNode" } : q = { termType: "NamedNode" }, q.value = j;
      else {
        $.eventHandler && a({
          event: {
            type: ["JsonLdEvent"],
            code: "relative graph reference",
            level: "warning",
            message: "Relative graph reference found.",
            details: {
              graph: j
            }
          },
          options: $
        });
        continue;
      }
      c(P, O[j], q, E, $);
    }
    return P;
  };
  function c(I, $, E, O, P) {
    const M = Object.keys($).sort();
    for (const j of M) {
      const q = $[j], B = Object.keys(q).sort();
      for (let N of B) {
        const H = q[N];
        if (N === "@type")
          N = g;
        else if (t(N))
          continue;
        for (const F of H) {
          const J = {
            termType: j.startsWith("_:") ? "BlankNode" : "NamedNode",
            value: j
          };
          if (!v(j)) {
            P.eventHandler && a({
              event: {
                type: ["JsonLdEvent"],
                code: "relative subject reference",
                level: "warning",
                message: "Relative subject reference found.",
                details: {
                  subject: j
                }
              },
              options: P
            });
            continue;
          }
          const T = {
            termType: N.startsWith("_:") ? "BlankNode" : "NamedNode",
            value: N
          };
          if (!v(N)) {
            P.eventHandler && a({
              event: {
                type: ["JsonLdEvent"],
                code: "relative predicate reference",
                level: "warning",
                message: "Relative predicate reference found.",
                details: {
                  predicate: N
                }
              },
              options: P
            });
            continue;
          }
          if (T.termType === "BlankNode" && !P.produceGeneralizedRdf) {
            P.eventHandler && a({
              event: {
                type: ["JsonLdEvent"],
                code: "blank node predicate",
                level: "warning",
                message: "Dropping blank node predicate.",
                details: {
                  // FIXME: add better issuer API to get reverse mapping
                  property: O.getOldIds().find((U) => O.getId(U) === N)
                }
              },
              options: P
            });
            continue;
          }
          const D = p(
            F,
            O,
            I,
            E,
            P.rdfDirection,
            P
          );
          D && I.push({
            subject: J,
            predicate: T,
            object: D,
            graph: E
          });
        }
      }
    }
  }
  function d(I, $, E, O, P, M) {
    const j = { termType: "NamedNode", value: o }, q = { termType: "NamedNode", value: l }, B = { termType: "NamedNode", value: y }, N = I.pop(), H = N ? { termType: "BlankNode", value: $.getId() } : B;
    let F = H;
    for (const J of I) {
      const T = p(
        J,
        $,
        E,
        O,
        P,
        M
      ), D = { termType: "BlankNode", value: $.getId() };
      E.push({
        subject: F,
        predicate: j,
        object: T,
        graph: O
      }), E.push({
        subject: F,
        predicate: q,
        object: D,
        graph: O
      }), F = D;
    }
    if (N) {
      const J = p(
        N,
        $,
        E,
        O,
        P,
        M
      );
      E.push({
        subject: F,
        predicate: j,
        object: J,
        graph: O
      }), E.push({
        subject: F,
        predicate: q,
        object: B,
        graph: O
      });
    }
    return H;
  }
  function p(I, $, E, O, P, M) {
    const j = {};
    if (n.isValue(I)) {
      j.termType = "Literal", j.value = void 0, j.datatype = {
        termType: "NamedNode"
      };
      let q = I["@value"];
      const B = I["@type"] || null;
      if (B === "@json")
        j.value = i(q), j.datatype.value = f;
      else if (r.isBoolean(q))
        j.value = q.toString(), j.datatype.value = B || w;
      else if (r.isDouble(q) || B === _)
        r.isDouble(q) || (q = parseFloat(q)), j.value = q.toExponential(15).replace(/(\d)0*e\+?/, "$1E"), j.datatype.value = B || _;
      else if (r.isNumber(q))
        j.value = q.toFixed(0), j.datatype.value = B || b;
      else if ("@direction" in I && P === "i18n-datatype") {
        const N = (I["@language"] || "").toLowerCase(), H = I["@direction"], F = `https://www.w3.org/ns/i18n#${N}_${H}`;
        j.datatype.value = F, j.value = q;
      } else {
        if ("@direction" in I && P === "compound-literal")
          throw new u(
            "Unsupported rdfDirection value.",
            "jsonld.InvalidRdfDirection",
            { value: P }
          );
        if ("@direction" in I && P)
          throw new u(
            "Unknown rdfDirection value.",
            "jsonld.InvalidRdfDirection",
            { value: P }
          );
        "@language" in I ? ("@direction" in I && !P && M.eventHandler && a({
          event: {
            type: ["JsonLdEvent"],
            code: "rdfDirection not set",
            level: "warning",
            message: "rdfDirection not set for @direction.",
            details: {
              object: j.value
            }
          },
          options: M
        }), j.value = q, j.datatype.value = B || m, j.language = I["@language"]) : ("@direction" in I && !P && M.eventHandler && a({
          event: {
            type: ["JsonLdEvent"],
            code: "rdfDirection not set",
            level: "warning",
            message: "rdfDirection not set for @direction.",
            details: {
              object: j.value
            }
          },
          options: M
        }), j.value = q, j.datatype.value = B || S);
      }
    } else if (n.isList(I)) {
      const q = d(
        I["@list"],
        $,
        E,
        O,
        P,
        M
      );
      j.termType = q.termType, j.value = q.value;
    } else {
      const q = r.isObject(I) ? I["@id"] : I;
      j.termType = q.startsWith("_:") ? "BlankNode" : "NamedNode", j.value = q;
    }
    return j.termType === "NamedNode" && !v(j.value) ? (M.eventHandler && a({
      event: {
        type: ["JsonLdEvent"],
        code: "relative object reference",
        level: "warning",
        message: "Relative object reference found.",
        details: {
          object: j.value
        }
      },
      options: M
    }), null) : j;
  }
  return ji;
}
var Ai, zo;
function dp() {
  if (zo) return Ai;
  zo = 1;
  const { isKeyword: e } = ht(), t = Ye(), n = $e(), i = Oe(), u = ct(), r = qe(), {
    createNodeMap: s,
    mergeNodeMapGraphs: a
  } = xr(), o = {};
  Ai = o, o.frameMergedOrDefault = (c, d, p) => {
    const I = {
      options: p,
      embedded: !1,
      graph: "@default",
      graphMap: { "@default": {} },
      subjectStack: [],
      link: {},
      bnodeMap: {}
    }, $ = new i.IdentifierIssuer("_:b");
    s(c, I.graphMap, "@default", $), p.merged && (I.graphMap["@merged"] = a(I.graphMap), I.graph = "@merged"), I.subjects = I.graphMap[I.graph];
    const E = [];
    o.frame(I, Object.keys(I.subjects).sort(), d, E), p.pruneBlankNodeIdentifiers && (p.bnodesToClear = Object.keys(I.bnodeMap).filter((O) => I.bnodeMap[O].length === 1));
    // remove @preserve from results
    return p.link = {}, b(E, p);
  }, o.frame = (c, d, p, I, $ = null) => {
    f(p), p = p[0];
    const E = c.options, O = {
      embed: g(p, E, "embed"),
      explicit: g(p, E, "explicit"),
      requireAll: g(p, E, "requireAll")
    };
    c.link.hasOwnProperty(c.graph) || (c.link[c.graph] = {});
    const P = c.link[c.graph], M = m(c, d, p, O), j = Object.keys(M).sort();
    for (const q of j) {
      const B = M[q];
      if ($ === null ? c.uniqueEmbeds = { [c.graph]: {} } : c.uniqueEmbeds[c.graph] = c.uniqueEmbeds[c.graph] || {}, O.embed === "@link" && q in P) {
        S(I, $, P[q]);
        continue;
      }
      const N = { "@id": q };
      if (q.indexOf("_:") === 0 && i.addValue(c.bnodeMap, q, N, { propertyIsArray: !0 }), P[q] = N, (O.embed === "@first" || O.embed === "@last") && c.is11)
        throw new r(
          "Invalid JSON-LD syntax; invalid value of @embed.",
          "jsonld.SyntaxError",
          { code: "invalid @embed value", frame: p }
        );
      if (!(!c.embedded && c.uniqueEmbeds[c.graph].hasOwnProperty(q))) {
        if (c.embedded && (O.embed === "@never" || y(B, c.graph, c.subjectStack))) {
          S(I, $, N);
          continue;
        }
        if (c.embedded && (O.embed == "@first" || O.embed == "@once") && c.uniqueEmbeds[c.graph].hasOwnProperty(q)) {
          S(I, $, N);
          continue;
        }
        if (O.embed === "@last" && q in c.uniqueEmbeds[c.graph] && _(c, q), c.uniqueEmbeds[c.graph][q] = { parent: I, property: $ }, c.subjectStack.push({ subject: B, graph: c.graph }), q in c.graphMap) {
          let H = !1, F = null;
          "@graph" in p ? (F = p["@graph"][0], H = !(q === "@merged" || q === "@default"), n.isObject(F) || (F = {})) : (H = c.graph !== "@merged", F = {}), H && o.frame(
            { ...c, graph: q, embedded: !1 },
            Object.keys(c.graphMap[q]).sort(),
            [F],
            N,
            "@graph"
          );
        }
        "@included" in p && o.frame(
          { ...c, embedded: !1 },
          d,
          p["@included"],
          N,
          "@included"
        );
        for (const H of Object.keys(B).sort()) {
          if (e(H)) {
            if (N[H] = i.clone(B[H]), H === "@type")
              for (const F of B["@type"])
                F.indexOf("_:") === 0 && i.addValue(
                  c.bnodeMap,
                  F,
                  N,
                  { propertyIsArray: !0 }
                );
            continue;
          }
          if (!(O.explicit && !(H in p)))
            for (const F of B[H]) {
              const J = H in p ? p[H] : l(O);
              if (t.isList(F)) {
                const T = p[H] && p[H][0] && p[H][0]["@list"] ? p[H][0]["@list"] : l(O), D = { "@list": [] };
                S(N, H, D);
                const U = F["@list"];
                for (const k of U)
                  t.isSubjectReference(k) ? o.frame(
                    { ...c, embedded: !0 },
                    [k["@id"]],
                    T,
                    D,
                    "@list"
                  ) : S(D, "@list", i.clone(k));
              } else t.isSubjectReference(F) ? o.frame(
                { ...c, embedded: !0 },
                [F["@id"]],
                J,
                N,
                H
              ) : h(J[0], F) && S(N, H, i.clone(F));
            }
        }
        for (const H of Object.keys(p).sort()) {
          if (H === "@type") {
            if (!n.isObject(p[H][0]) || !("@default" in p[H][0]))
              continue;
          } else if (e(H))
            continue;
          const F = p[H][0] || {};
          if (!g(F, E, "omitDefault") && !(H in N)) {
            let T = "@null";
            "@default" in F && (T = i.clone(F["@default"])), n.isArray(T) || (T = [T]), N[H] = [{ "@preserve": T }];
          }
        }
        for (const H of Object.keys(p["@reverse"] || {}).sort()) {
          const F = p["@reverse"][H];
          for (const J of Object.keys(c.subjects))
            i.getValues(c.subjects[J], H).some((D) => D["@id"] === q) && (N["@reverse"] = N["@reverse"] || {}, i.addValue(
              N["@reverse"],
              H,
              [],
              { propertyIsArray: !0 }
            ), o.frame(
              { ...c, embedded: !0 },
              [J],
              F,
              N["@reverse"][H],
              $
            ));
        }
        S(I, $, N), c.subjectStack.pop();
      }
    }
  }, o.cleanupNull = (c, d) => {
    if (n.isArray(c))
      return c.map((I) => o.cleanupNull(I, d)).filter((I) => I);
    if (c === "@null")
      return null;
    if (n.isObject(c)) {
      if ("@id" in c) {
        const p = c["@id"];
        if (d.link.hasOwnProperty(p)) {
          const I = d.link[p].indexOf(c);
          if (I !== -1)
            return d.link[p][I];
          d.link[p].push(c);
        } else
          d.link[p] = [c];
      }
      for (const p in c)
        c[p] = o.cleanupNull(c[p], d);
    }
    return c;
  };
  function l(c) {
    const d = {};
    for (const p in c)
      c[p] !== void 0 && (d["@" + p] = [c[p]]);
    return [d];
  }
  function y(c, d, p) {
    for (let I = p.length - 1; I >= 0; --I) {
      const $ = p[I];
      if ($.graph === d && $.subject["@id"] === c["@id"])
        return !0;
    }
    return !1;
  }
  function g(c, d, p) {
    const I = "@" + p;
    let $ = I in c ? c[I][0] : d[p];
    if (p === "embed") {
      if ($ === !0)
        $ = "@once";
      else if ($ === !1)
        $ = "@never";
      else if ($ !== "@always" && $ !== "@never" && $ !== "@link" && $ !== "@first" && $ !== "@last" && $ !== "@once")
        throw new r(
          "Invalid JSON-LD syntax; invalid value of @embed.",
          "jsonld.SyntaxError",
          { code: "invalid @embed value", frame: c }
        );
    }
    return $;
  }
  function f(c) {
    if (!n.isArray(c) || c.length !== 1 || !n.isObject(c[0]))
      throw new r(
        "Invalid JSON-LD syntax; a JSON-LD frame must be a single object.",
        "jsonld.SyntaxError",
        { frame: c }
      );
    if ("@id" in c[0]) {
      for (const d of i.asArray(c[0]["@id"]))
        if (!(n.isObject(d) || u.isAbsolute(d)) || n.isString(d) && d.indexOf("_:") === 0)
          throw new r(
            "Invalid JSON-LD syntax; invalid @id in frame.",
            "jsonld.SyntaxError",
            { code: "invalid frame", frame: c }
          );
    }
    if ("@type" in c[0]) {
      for (const d of i.asArray(c[0]["@type"]))
        if (!(n.isObject(d) || u.isAbsolute(d) || d === "@json") || n.isString(d) && d.indexOf("_:") === 0)
          throw new r(
            "Invalid JSON-LD syntax; invalid @type in frame.",
            "jsonld.SyntaxError",
            { code: "invalid frame", frame: c }
          );
    }
  }
  function m(c, d, p, I) {
    const $ = {};
    for (const E of d) {
      const O = c.graphMap[c.graph][E];
      w(c, O, p, I) && ($[E] = O);
    }
    return $;
  }
  function w(c, d, p, I) {
    let $ = !0, E = !1;
    for (const O in p) {
      let P = !1;
      const M = i.getValues(d, O), j = i.getValues(p, O).length === 0;
      if (O === "@id") {
        if (n.isEmptyObject(p["@id"][0] || {}) ? P = !0 : p["@id"].length >= 0 && (P = p["@id"].includes(M[0])), !I.requireAll)
          return P;
      } else if (O === "@type") {
        if ($ = !1, j) {
          if (M.length > 0)
            return !1;
          P = !0;
        } else if (p["@type"].length === 1 && n.isEmptyObject(p["@type"][0]))
          P = M.length > 0;
        else
          for (const q of p["@type"])
            n.isObject(q) && "@default" in q ? P = !0 : P = P || M.some((B) => B === q);
        if (!I.requireAll)
          return P;
      } else {
        if (e(O))
          continue;
        {
          const q = i.getValues(p, O)[0];
          let B = !1;
          if (q && (f([q]), B = "@default" in q), $ = !1, M.length === 0 && B)
            continue;
          if (M.length > 0 && j)
            return !1;
          if (q === void 0) {
            if (M.length > 0)
              return !1;
            P = !0;
          } else if (t.isList(q)) {
            const N = q["@list"][0];
            if (t.isList(M[0])) {
              const H = M[0]["@list"];
              t.isValue(N) ? P = H.some((F) => h(N, F)) : (t.isSubject(N) || t.isSubjectReference(N)) && (P = H.some((F) => v(
                c,
                N,
                F,
                I
              )));
            }
          } else t.isValue(q) ? P = M.some((N) => h(q, N)) : t.isSubjectReference(q) ? P = M.some((N) => v(c, q, N, I)) : n.isObject(q) ? P = M.length > 0 : P = !1;
        }
      }
      if (!P && I.requireAll)
        return !1;
      E = E || P;
    }
    return $ || E;
  }
  function _(c, d) {
    const p = c.uniqueEmbeds[c.graph], I = p[d], $ = I.parent, E = I.property, O = { "@id": d };
    if (n.isArray($)) {
      for (let M = 0; M < $.length; ++M)
        if (i.compareValues($[M], O)) {
          $[M] = O;
          break;
        }
    } else {
      const M = n.isArray($[E]);
      i.removeValue($, E, O, { propertyIsArray: M }), i.addValue($, E, O, { propertyIsArray: M });
    }
    const P = (M) => {
      const j = Object.keys(p);
      for (const q of j)
        q in p && n.isObject(p[q].parent) && p[q].parent["@id"] === M && (delete p[q], P(q));
    };
    P(d);
  }
  /**
   * Removes the @preserve keywords from expanded result of framing.
   *
   * @param input the framed, framed output.
   * @param options the framing options used.
   *
   * @return the resulting output.
   */
  function b(c, d) {
    if (n.isArray(c))
      return c.map((p) => b(p, d));
    if (n.isObject(c)) {
      // remove @preserve
      if ("@preserve" in c)
        return c["@preserve"][0];
      if (t.isValue(c))
        return c;
      if (t.isList(c))
        return c["@list"] = b(c["@list"], d), c;
      if ("@id" in c) {
        const p = c["@id"];
        if (d.link.hasOwnProperty(p)) {
          const I = d.link[p].indexOf(c);
          if (I !== -1)
            return d.link[p][I];
          d.link[p].push(c);
        } else
          d.link[p] = [c];
      }
      for (const p in c) {
        if (p === "@id" && d.bnodesToClear.includes(c[p])) {
          delete c["@id"];
          continue;
        }
        c[p] = b(c[p], d);
      }
    }
    return c;
  }
  function S(c, d, p) {
    n.isObject(c) ? i.addValue(c, d, p, { propertyIsArray: !0 }) : c.push(p);
  }
  function v(c, d, p, I) {
    if (!("@id" in p))
      return !1;
    const $ = c.subjects[p["@id"]];
    return $ && w(c, $, d, I);
  }
  function h(c, d) {
    const p = d["@value"], I = d["@type"], $ = d["@language"], E = c["@value"] ? n.isArray(c["@value"]) ? c["@value"] : [c["@value"]] : [], O = c["@type"] ? n.isArray(c["@type"]) ? c["@type"] : [c["@type"]] : [], P = c["@language"] ? n.isArray(c["@language"]) ? c["@language"] : [c["@language"]] : [];
    return E.length === 0 && O.length === 0 && P.length === 0 ? !0 : !(!(E.includes(p) || n.isEmptyObject(E[0])) || !(!I && O.length === 0 || O.includes(I) || I && n.isEmptyObject(O[0])) || !(!$ && P.length === 0 || P.includes($) || $ && n.isEmptyObject(P[0])));
  }
  return Ai;
}
var Oi, Vo;
function up() {
  if (Vo) return Oi;
  Vo = 1;
  const e = qe(), {
    isArray: t,
    isObject: n,
    isString: i,
    isUndefined: u
  } = $e(), {
    isList: r,
    isValue: s,
    isGraph: a,
    isSimpleGraph: o,
    isSubjectReference: l
  } = Ye(), {
    expandIri: y,
    getContextValue: g,
    isKeyword: f,
    process: m,
    processingMode: w
  } = ht(), {
    removeBase: _,
    prependBase: b
  } = ct(), {
    REGEX_KEYWORD: S,
    addValue: v,
    asArray: h,
    compareShortestLeast: c
  } = Oe(), d = {};
  Oi = d, d.compact = async ({
    activeCtx: $,
    activeProperty: E = null,
    element: O,
    options: P = {}
  }) => {
    if (t(O)) {
      let j = [];
      for (let q = 0; q < O.length; ++q) {
        const B = await d.compact({
          activeCtx: $,
          activeProperty: E,
          element: O[q],
          options: P
        });
        B !== null && j.push(B);
      }
      return P.compactArrays && j.length === 1 && (g(
        $,
        E,
        "@container"
      ) || []).length === 0 && (j = j[0]), j;
    }
    const M = g($, E, "@context");
    if (u(M) || ($ = await m({
      activeCtx: $,
      localCtx: M,
      propagate: !0,
      overrideProtected: !0,
      options: P
    })), n(O)) {
      if (P.link && "@id" in O && P.link.hasOwnProperty(O["@id"])) {
        const T = P.link[O["@id"]];
        for (let D = 0; D < T.length; ++D)
          if (T[D].expanded === O)
            return T[D].compacted;
      }
      if (s(O) || l(O)) {
        const T = d.compactValue({ activeCtx: $, activeProperty: E, value: O, options: P });
        return P.link && l(O) && (P.link.hasOwnProperty(O["@id"]) || (P.link[O["@id"]] = []), P.link[O["@id"]].push({ expanded: O, compacted: T })), T;
      }
      if (r(O) && (g(
        $,
        E,
        "@container"
      ) || []).includes("@list"))
        return d.compact({
          activeCtx: $,
          activeProperty: E,
          element: O["@list"],
          options: P
        });
      const j = E === "@reverse", q = {}, B = $;
      !s(O) && !l(O) && ($ = $.revertToPreviousContext());
      const N = g(B, E, "@context");
      u(N) || ($ = await m({
        activeCtx: $,
        localCtx: N,
        propagate: !0,
        overrideProtected: !0,
        options: P
      })), P.link && "@id" in O && (P.link.hasOwnProperty(O["@id"]) || (P.link[O["@id"]] = []), P.link[O["@id"]].push({ expanded: O, compacted: q }));
      let H = O["@type"] || [];
      H.length > 1 && (H = Array.from(H).sort());
      const F = $;
      for (const T of H) {
        const D = d.compactIri(
          { activeCtx: F, iri: T, relativeTo: { vocab: !0 } }
        ), U = g(B, D, "@context");
        u(U) || ($ = await m({
          activeCtx: $,
          localCtx: U,
          options: P,
          propagate: !1
        }));
      }
      const J = Object.keys(O).sort();
      for (const T of J) {
        const D = O[T];
        if (T === "@id") {
          let U = h(D).map(
            (R) => d.compactIri({
              activeCtx: $,
              iri: R,
              relativeTo: { vocab: !1 },
              base: P.base
            })
          );
          U.length === 1 && (U = U[0]);
          const k = d.compactIri(
            { activeCtx: $, iri: "@id", relativeTo: { vocab: !0 } }
          );
          q[k] = U;
          continue;
        }
        if (T === "@type") {
          let U = h(D).map(
            (L) => d.compactIri({
              activeCtx: B,
              iri: L,
              relativeTo: { vocab: !0 }
            })
          );
          U.length === 1 && (U = U[0]);
          const k = d.compactIri(
            { activeCtx: $, iri: "@type", relativeTo: { vocab: !0 } }
          ), A = (g(
            $,
            k,
            "@container"
          ) || []).includes("@set") && w($, 1.1) || t(U) && D.length === 0;
          v(q, k, U, { propertyIsArray: A });
          continue;
        }
        if (T === "@reverse") {
          const U = await d.compact({
            activeCtx: $,
            activeProperty: "@reverse",
            element: D,
            options: P
          });
          for (const k in U)
            if ($.mappings.has(k) && $.mappings.get(k).reverse) {
              const R = U[k], A = (g(
                $,
                k,
                "@container"
              ) || []).includes("@set") || !P.compactArrays;
              v(
                q,
                k,
                R,
                { propertyIsArray: A }
              ), delete U[k];
            }
          if (Object.keys(U).length > 0) {
            const k = d.compactIri({
              activeCtx: $,
              iri: T,
              relativeTo: { vocab: !0 }
            });
            v(q, k, U);
          }
          continue;
        }
        if (T === "@preserve") {
          const U = await d.compact({
            activeCtx: $,
            activeProperty: E,
            element: D,
            options: P
          });
          t(U) && U.length === 0 || v(q, T, U);
          continue;
        }
        if (T === "@index") {
          if ((g(
            $,
            E,
            "@container"
          ) || []).includes("@index"))
            continue;
          const k = d.compactIri({
            activeCtx: $,
            iri: T,
            relativeTo: { vocab: !0 }
          });
          v(q, k, D);
          continue;
        }
        if (T !== "@graph" && T !== "@list" && T !== "@included" && f(T)) {
          const U = d.compactIri({
            activeCtx: $,
            iri: T,
            relativeTo: { vocab: !0 }
          });
          v(q, U, D);
          continue;
        }
        if (!t(D))
          throw new e(
            "JSON-LD expansion error; expanded value must be an array.",
            "jsonld.SyntaxError"
          );
        if (D.length === 0) {
          const U = d.compactIri({
            activeCtx: $,
            iri: T,
            value: D,
            relativeTo: { vocab: !0 },
            reverse: j
          }), k = $.mappings.has(U) ? $.mappings.get(U)["@nest"] : null;
          let R = q;
          k && (I($, k, P), n(q[k]) || (q[k] = {}), R = q[k]), v(
            R,
            U,
            D,
            {
              propertyIsArray: !0
            }
          );
        }
        for (const U of D) {
          const k = d.compactIri({
            activeCtx: $,
            iri: T,
            value: U,
            relativeTo: { vocab: !0 },
            reverse: j
          }), R = $.mappings.has(k) ? $.mappings.get(k)["@nest"] : null;
          let x = q;
          R && (I($, R, P), n(q[R]) || (q[R] = {}), x = q[R]);
          const A = g(
            $,
            k,
            "@container"
          ) || [], L = a(U), K = r(U);
          let Q;
          K ? Q = U["@list"] : L && (Q = U["@graph"]);
          let G = await d.compact({
            activeCtx: $,
            activeProperty: k,
            element: K || L ? Q : U,
            options: P
          });
          if (K)
            if (t(G) || (G = [G]), !A.includes("@list"))
              G = {
                [d.compactIri({
                  activeCtx: $,
                  iri: "@list",
                  relativeTo: { vocab: !0 }
                })]: G
              }, "@index" in U && (G[d.compactIri({
                activeCtx: $,
                iri: "@index",
                relativeTo: { vocab: !0 }
              })] = U["@index"]);
            else {
              v(x, k, G, {
                valueIsArray: !0,
                allowDuplicate: !0
              });
              continue;
            }
          if (L)
            if (A.includes("@graph") && (A.includes("@id") || A.includes("@index") && o(U))) {
              let C;
              x.hasOwnProperty(k) ? C = x[k] : x[k] = C = {};
              const z = (A.includes("@id") ? U["@id"] : U["@index"]) || d.compactIri({
                activeCtx: $,
                iri: "@none",
                relativeTo: { vocab: !0 }
              });
              v(
                C,
                z,
                G,
                {
                  propertyIsArray: !P.compactArrays || A.includes("@set")
                }
              );
            } else A.includes("@graph") && o(U) ? (t(G) && G.length > 1 && (G = { "@included": G }), v(
              x,
              k,
              G,
              {
                propertyIsArray: !P.compactArrays || A.includes("@set")
              }
            )) : (t(G) && G.length === 1 && P.compactArrays && (G = G[0]), G = {
              [d.compactIri({
                activeCtx: $,
                iri: "@graph",
                relativeTo: { vocab: !0 }
              })]: G
            }, "@id" in U && (G[d.compactIri({
              activeCtx: $,
              iri: "@id",
              relativeTo: { vocab: !0 }
            })] = U["@id"]), "@index" in U && (G[d.compactIri({
              activeCtx: $,
              iri: "@index",
              relativeTo: { vocab: !0 }
            })] = U["@index"]), v(
              x,
              k,
              G,
              {
                propertyIsArray: !P.compactArrays || A.includes("@set")
              }
            ));
          else if (A.includes("@language") || A.includes("@index") || A.includes("@id") || A.includes("@type")) {
            let C;
            x.hasOwnProperty(k) ? C = x[k] : x[k] = C = {};
            let z;
            if (A.includes("@language"))
              s(G) && (G = G["@value"]), z = U["@language"];
            else if (A.includes("@index")) {
              const V = g(
                $,
                k,
                "@index"
              ) || "@index", Z = d.compactIri(
                { activeCtx: $, iri: V, relativeTo: { vocab: !0 } }
              );
              if (V === "@index")
                z = U["@index"], delete G[Z];
              else {
                let W;
                if ([z, ...W] = h(G[V] || []), !i(z))
                  z = null;
                else
                  switch (W.length) {
                    case 0:
                      delete G[V];
                      break;
                    case 1:
                      G[V] = W[0];
                      break;
                    default:
                      G[V] = W;
                      break;
                  }
              }
            } else if (A.includes("@id")) {
              const V = d.compactIri({
                activeCtx: $,
                iri: "@id",
                relativeTo: { vocab: !0 }
              });
              z = G[V], delete G[V];
            } else if (A.includes("@type")) {
              const V = d.compactIri({
                activeCtx: $,
                iri: "@type",
                relativeTo: { vocab: !0 }
              });
              let Z;
              switch ([z, ...Z] = h(G[V] || []), Z.length) {
                case 0:
                  delete G[V];
                  break;
                case 1:
                  G[V] = Z[0];
                  break;
                default:
                  G[V] = Z;
                  break;
              }
              Object.keys(G).length === 1 && "@id" in U && (G = await d.compact({
                activeCtx: $,
                activeProperty: k,
                element: { "@id": U["@id"] },
                options: P
              }));
            }
            z || (z = d.compactIri({
              activeCtx: $,
              iri: "@none",
              relativeTo: { vocab: !0 }
            })), v(
              C,
              z,
              G,
              {
                propertyIsArray: A.includes("@set")
              }
            );
          } else {
            const C = !P.compactArrays || A.includes("@set") || A.includes("@list") || t(G) && G.length === 0 || T === "@list" || T === "@graph";
            v(
              x,
              k,
              G,
              { propertyIsArray: C }
            );
          }
        }
      }
      return q;
    }
    return O;
  }, d.compactIri = ({
    activeCtx: $,
    iri: E,
    value: O = null,
    relativeTo: P = { vocab: !1 },
    reverse: M = !1,
    base: j = null
  }) => {
    if (E === null)
      return E;
    $.isPropertyTermScoped && $.previousContext && ($ = $.previousContext);
    const q = $.getInverse();
    if (f(E) && E in q && "@none" in q[E] && "@type" in q[E]["@none"] && "@none" in q[E]["@none"]["@type"])
      return q[E]["@none"]["@type"]["@none"];
    if (P.vocab && E in q) {
      const J = $["@language"] || "@none", T = [];
      n(O) && "@index" in O && !("@graph" in O) && T.push("@index", "@index@set"), n(O) && "@preserve" in O && (O = O["@preserve"][0]), a(O) ? ("@index" in O && T.push(
        "@graph@index",
        "@graph@index@set",
        "@index",
        "@index@set"
      ), "@id" in O && T.push(
        "@graph@id",
        "@graph@id@set"
      ), T.push("@graph", "@graph@set", "@set"), "@index" in O || T.push(
        "@graph@index",
        "@graph@index@set",
        "@index",
        "@index@set"
      ), "@id" in O || T.push("@graph@id", "@graph@id@set")) : n(O) && !s(O) && T.push("@id", "@id@set", "@type", "@set@type");
      let D = "@language", U = "@null";
      if (M)
        D = "@type", U = "@reverse", T.push("@set");
      else if (r(O)) {
        "@index" in O || T.push("@list");
        const R = O["@list"];
        if (R.length === 0)
          D = "@any", U = "@none";
        else {
          let x = R.length === 0 ? J : null, A = null;
          for (let L = 0; L < R.length; ++L) {
            const K = R[L];
            let Q = "@none", G = "@none";
            if (s(K))
              if ("@direction" in K) {
                const C = (K["@language"] || "").toLowerCase(), z = K["@direction"];
                Q = `${C}_${z}`;
              } else "@language" in K ? Q = K["@language"].toLowerCase() : "@type" in K ? G = K["@type"] : Q = "@null";
            else
              G = "@id";
            if (x === null ? x = Q : Q !== x && s(K) && (x = "@none"), A === null ? A = G : G !== A && (A = "@none"), x === "@none" && A === "@none")
              break;
          }
          x = x || "@none", A = A || "@none", A !== "@none" ? (D = "@type", U = A) : U = x;
        }
      } else {
        if (s(O))
          if ("@language" in O && !("@index" in O)) {
            T.push("@language", "@language@set"), U = O["@language"];
            const R = O["@direction"];
            R && (U = `${U}_${R}`);
          } else "@direction" in O && !("@index" in O) ? U = `_${O["@direction"]}` : "@type" in O && (D = "@type", U = O["@type"]);
        else
          D = "@type", U = "@id";
        T.push("@set");
      }
      T.push("@none"), n(O) && !("@index" in O) && T.push("@index", "@index@set"), s(O) && Object.keys(O).length === 1 && T.push("@language", "@language@set");
      const k = p(
        $,
        E,
        O,
        T,
        D,
        U
      );
      if (k !== null)
        return k;
    }
    if (P.vocab && "@vocab" in $) {
      const J = $["@vocab"];
      if (E.indexOf(J) === 0 && E !== J) {
        const T = E.substr(J.length);
        if (!$.mappings.has(T))
          return T;
      }
    }
    let B = null;
    const N = [];
    let H = $.fastCurieMap;
    const F = E.length - 1;
    for (let J = 0; J < F && E[J] in H; ++J)
      H = H[E[J]], "" in H && N.push(H[""][0]);
    for (let J = N.length - 1; J >= 0; --J) {
      const T = N[J], D = T.terms;
      for (const U of D) {
        const k = U + ":" + E.substr(T.iri.length);
        $.mappings.get(U)._prefix && (!$.mappings.has(k) || O === null && $.mappings.get(k)["@id"] === E) && (B === null || c(k, B) < 0) && (B = k);
      }
    }
    if (B !== null)
      return B;
    for (const [J, T] of $.mappings)
      if (T && T._prefix && E.startsWith(J + ":"))
        throw new e(
          `Absolute IRI "${E}" confused with prefix "${J}".`,
          "jsonld.SyntaxError",
          { code: "IRI confused with prefix", context: $ }
        );
    if (!P.vocab)
      if ("@base" in $)
        if ($["@base"]) {
          const J = _(b(j, $["@base"]), E);
          return S.test(J) ? `./${J}` : J;
        } else
          return E;
      else
        return _(j, E);
    return E;
  }, d.compactValue = ({ activeCtx: $, activeProperty: E, value: O, options: P }) => {
    if (s(O)) {
      const B = g($, E, "@type"), N = g($, E, "@language"), H = g($, E, "@direction"), F = g($, E, "@container") || [], J = "@index" in O && !F.includes("@index");
      if (!J && B !== "@none" && (O["@type"] === B || "@language" in O && O["@language"] === N && "@direction" in O && O["@direction"] === H || "@language" in O && O["@language"] === N || "@direction" in O && O["@direction"] === H))
        return O["@value"];
      const T = Object.keys(O).length, D = T === 1 || T === 2 && "@index" in O && !J, U = "@language" in $, k = i(O["@value"]), R = $.mappings.has(E) && $.mappings.get(E)["@language"] === null;
      if (D && B !== "@none" && (!U || !k || R))
        return O["@value"];
      const x = {};
      return J && (x[d.compactIri({
        activeCtx: $,
        iri: "@index",
        relativeTo: { vocab: !0 }
      })] = O["@index"]), "@type" in O ? x[d.compactIri({
        activeCtx: $,
        iri: "@type",
        relativeTo: { vocab: !0 }
      })] = d.compactIri(
        { activeCtx: $, iri: O["@type"], relativeTo: { vocab: !0 } }
      ) : "@language" in O && (x[d.compactIri({
        activeCtx: $,
        iri: "@language",
        relativeTo: { vocab: !0 }
      })] = O["@language"]), "@direction" in O && (x[d.compactIri({
        activeCtx: $,
        iri: "@direction",
        relativeTo: { vocab: !0 }
      })] = O["@direction"]), x[d.compactIri({
        activeCtx: $,
        iri: "@value",
        relativeTo: { vocab: !0 }
      })] = O["@value"], x;
    }
    const M = y(
      $,
      E,
      { vocab: !0 },
      P
    ), j = g($, E, "@type"), q = d.compactIri({
      activeCtx: $,
      iri: O["@id"],
      relativeTo: { vocab: j === "@vocab" },
      base: P.base
    });
    return j === "@id" || j === "@vocab" || M === "@graph" ? q : {
      [d.compactIri({
        activeCtx: $,
        iri: "@id",
        relativeTo: { vocab: !0 }
      })]: q
    };
  };
  function p($, E, O, P, M, j) {
    j === null && (j = "@null");
    const q = [];
    if ((j === "@id" || j === "@reverse") && n(O) && "@id" in O) {
      j === "@reverse" && q.push("@reverse");
      const N = d.compactIri(
        { activeCtx: $, iri: O["@id"], relativeTo: { vocab: !0 } }
      );
      $.mappings.has(N) && $.mappings.get(N) && $.mappings.get(N)["@id"] === O["@id"] ? q.push.apply(q, ["@vocab", "@id"]) : q.push.apply(q, ["@id", "@vocab"]);
    } else {
      q.push(j);
      const N = q.find((H) => H.includes("_"));
      N && q.push(N.replace(/^[^_]+_/, "_"));
    }
    q.push("@none");
    const B = $.inverse[E];
    for (const N of P) {
      if (!(N in B))
        continue;
      const H = B[N][M];
      for (const F of q)
        if (F in H)
          return H[F];
    }
    return null;
  }
  function I($, E, O) {
    if (y($, E, { vocab: !0 }, O) !== "@nest")
      throw new e(
        "JSON-LD compact error; nested property must have an @nest value resolving to @nest.",
        "jsonld.SyntaxError",
        { code: "invalid @nest value" }
      );
  }
  return Oi;
}
var qi, Fo;
function lp() {
  return Fo || (Fo = 1, qi = (e) => {
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
  }), qi;
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
var Ni, Ho;
function fp() {
  if (Ho) return Ni;
  Ho = 1;
  const e = is(), t = Xf(), n = Oe(), i = np(), u = n.IdentifierIssuer, r = qe(), s = Dc(), a = rp(), { expand: o } = ip(), { flatten: l } = sp(), { fromRDF: y } = ap(), { toRDF: g } = cp(), {
    frameMergedOrDefault: f,
    cleanupNull: m
  } = dp(), {
    isArray: w,
    isObject: _,
    isString: b
  } = $e(), {
    isSubjectReference: S
  } = Ye(), {
    expandIri: v,
    getInitialContext: h,
    process: c,
    processingMode: d
  } = ht(), {
    compact: p,
    compactIri: I
  } = up(), {
    createNodeMap: $,
    createMergedNodeMap: E,
    mergeNodeMaps: O
  } = xr(), {
    logEventHandler: P,
    logWarningEventHandler: M,
    safeEventHandler: j,
    setDefaultEventHandler: q,
    setupEventHandler: B,
    strictEventHandler: N,
    unhandledEventHandler: H
  } = Gt(), F = function(T) {
    const D = {}, k = new s({ max: 100 });
    T.compact = async function(x, A, L) {
      if (arguments.length < 2)
        throw new TypeError("Could not compact, too few arguments.");
      if (A === null)
        throw new r(
          "The compaction context must not be null.",
          "jsonld.CompactError",
          { code: "invalid local context" }
        );
      if (x === null)
        return null;
      L = R(L, {
        base: b(x) ? x : "",
        compactArrays: !0,
        compactToRelative: !0,
        graph: !1,
        skipExpansion: !1,
        link: !1,
        issuer: new u("_:b"),
        contextResolver: new i(
          { sharedCache: k }
        )
      }), L.link && (L.skipExpansion = !0), L.compactToRelative || delete L.base;
      let K;
      L.skipExpansion ? K = x : K = await T.expand(x, L);
      const Q = await T.processContext(
        h(L),
        A,
        L
      );
      let G = await p({
        activeCtx: Q,
        element: K,
        options: L
      });
      L.compactArrays && !L.graph && w(G) ? G.length === 1 ? G = G[0] : G.length === 0 && (G = {}) : L.graph && _(G) && (G = [G]), _(A) && "@context" in A && (A = A["@context"]), A = n.clone(A), w(A) || (A = [A]);
      const C = A;
      A = [];
      for (let V = 0; V < C.length; ++V)
        (!_(C[V]) || Object.keys(C[V]).length > 0) && A.push(C[V]);
      const z = A.length > 0;
      if (A.length === 1 && (A = A[0]), w(G)) {
        const V = I({
          activeCtx: Q,
          iri: "@graph",
          relativeTo: { vocab: !0 }
        }), Z = G;
        G = {}, z && (G["@context"] = A), G[V] = Z;
      } else if (_(G) && z) {
        const V = G;
        G = { "@context": A };
        for (const Z in V)
          G[Z] = V[Z];
      }
      return G;
    }, T.expand = async function(x, A) {
      if (arguments.length < 1)
        throw new TypeError("Could not expand, too few arguments.");
      A = R(A, {
        keepFreeFloatingNodes: !1,
        contextResolver: new i(
          { sharedCache: k }
        )
      });
      const L = {}, K = [];
      if ("expandContext" in A) {
        const z = n.clone(A.expandContext);
        _(z) && "@context" in z ? L.expandContext = z : L.expandContext = { "@context": z }, K.push(L.expandContext);
      }
      let Q;
      if (!b(x))
        L.input = n.clone(x);
      else {
        const z = await T.get(x, A);
        Q = z.documentUrl, L.input = z.document, z.contextUrl && (L.remoteContext = { "@context": z.contextUrl }, K.push(L.remoteContext));
      }
      "base" in A || (A.base = Q || "");
      let G = h(A);
      for (const z of K)
        G = await c({ activeCtx: G, localCtx: z, options: A });
      let C = await o({
        activeCtx: G,
        element: L.input,
        options: A
      });
      return _(C) && "@graph" in C && Object.keys(C).length === 1 ? C = C["@graph"] : C === null && (C = []), w(C) || (C = [C]), C;
    }, T.flatten = async function(x, A, L) {
      if (arguments.length < 1)
        return new TypeError("Could not flatten, too few arguments.");
      typeof A == "function" ? A = null : A = A || null, L = R(L, {
        base: b(x) ? x : "",
        contextResolver: new i(
          { sharedCache: k }
        )
      });
      const K = await T.expand(x, L), Q = l(K);
      return A === null ? Q : (L.graph = !0, L.skipExpansion = !0, await T.compact(Q, A, L));
    }, T.frame = async function(x, A, L) {
      if (arguments.length < 2)
        throw new TypeError("Could not frame, too few arguments.");
      if (L = R(L, {
        base: b(x) ? x : "",
        embed: "@once",
        explicit: !1,
        requireAll: !1,
        omitDefault: !1,
        bnodesToClear: [],
        contextResolver: new i(
          { sharedCache: k }
        )
      }), b(A)) {
        const Y = await T.get(A, L);
        if (A = Y.document, Y.contextUrl) {
          let re = A["@context"];
          re ? w(re) ? re.push(Y.contextUrl) : re = [re, Y.contextUrl] : re = Y.contextUrl, A["@context"] = re;
        }
      }
      const K = A ? A["@context"] || {} : {}, Q = await T.processContext(
        h(L),
        K,
        L
      );
      L.hasOwnProperty("omitGraph") || (L.omitGraph = d(Q, 1.1)), L.hasOwnProperty("pruneBlankNodeIdentifiers") || (L.pruneBlankNodeIdentifiers = d(Q, 1.1));
      const G = await T.expand(x, L), C = { ...L };
      C.isFrame = !0, C.keepFreeFloatingNodes = !0;
      const z = await T.expand(A, C), V = Object.keys(A).map((Y) => v(Q, Y, { vocab: !0 }));
      C.merged = !V.includes("@graph"), C.is11 = d(Q, 1.1);
      const Z = f(G, z, C);
      C.graph = !L.omitGraph, C.skipExpansion = !0, C.link = {}, C.framing = !0;
      let W = await T.compact(Z, K, C);
      return C.link = {}, W = m(W, C), W;
    }, T.link = async function(x, A, L) {
      const K = {};
      return A && (K["@context"] = A), K["@embed"] = "@link", T.frame(x, K, L);
    }, T.normalize = T.canonize = async function(x, A) {
      if (arguments.length < 1)
        throw new TypeError("Could not canonize, too few arguments.");
      if (A = R(A, {
        base: b(x) ? x : null,
        algorithm: "URDNA2015",
        skipExpansion: !1,
        safe: !0,
        contextResolver: new i(
          { sharedCache: k }
        )
      }), "inputFormat" in A) {
        if (A.inputFormat !== "application/n-quads" && A.inputFormat !== "application/nquads")
          throw new r(
            "Unknown canonicalization input format.",
            "jsonld.CanonizeError"
          );
        const Q = a.parse(x);
        return e.canonize(Q, A);
      }
      const L = { ...A };
      delete L.format, L.produceGeneralizedRdf = !1;
      const K = await T.toRDF(x, L);
      return e.canonize(K, A);
    }, T.fromRDF = async function(x, A) {
      if (arguments.length < 1)
        throw new TypeError("Could not convert from RDF, too few arguments.");
      A = R(A, {
        format: b(x) ? "application/n-quads" : void 0
      });
      const { format: L } = A;
      let { rdfParser: K } = A;
      if (L) {
        if (K = K || D[L], !K)
          throw new r(
            "Unknown input format.",
            "jsonld.UnknownFormat",
            { format: L }
          );
      } else
        K = () => x;
      const Q = await K(x);
      return y(Q, A);
    }, T.toRDF = async function(x, A) {
      if (arguments.length < 1)
        throw new TypeError("Could not convert to RDF, too few arguments.");
      A = R(A, {
        base: b(x) ? x : "",
        skipExpansion: !1,
        contextResolver: new i(
          { sharedCache: k }
        )
      });
      let L;
      A.skipExpansion ? L = x : L = await T.expand(x, A);
      const K = g(L, A);
      if (A.format) {
        if (A.format === "application/n-quads" || A.format === "application/nquads")
          return a.serialize(K);
        throw new r(
          "Unknown output format.",
          "jsonld.UnknownFormat",
          { format: A.format }
        );
      }
      return K;
    }, T.createNodeMap = async function(x, A) {
      if (arguments.length < 1)
        throw new TypeError("Could not create node map, too few arguments.");
      A = R(A, {
        base: b(x) ? x : "",
        contextResolver: new i(
          { sharedCache: k }
        )
      });
      const L = await T.expand(x, A);
      return E(L, A);
    }, T.merge = async function(x, A, L) {
      if (arguments.length < 1)
        throw new TypeError("Could not merge, too few arguments.");
      if (!w(x))
        throw new TypeError('Could not merge, "docs" must be an array.');
      typeof A == "function" ? A = null : A = A || null, L = R(L, {
        contextResolver: new i(
          { sharedCache: k }
        )
      });
      const K = await Promise.all(x.map((Y) => {
        const re = { ...L };
        return T.expand(Y, re);
      }));
      let Q = !0;
      "mergeNodes" in L && (Q = L.mergeNodes);
      const G = L.issuer || new u("_:b"), C = { "@default": {} };
      for (let Y = 0; Y < K.length; ++Y) {
        const re = n.relabelBlankNodes(K[Y], {
          issuer: new u("_:b" + Y + "-")
        }), me = Q || Y === 0 ? C : { "@default": {} };
        if ($(re, me, "@default", G), me !== C)
          for (const de in me) {
            const le = me[de];
            if (!(de in C)) {
              C[de] = le;
              continue;
            }
            const ce = C[de];
            for (const Ue in le)
              Ue in ce || (ce[Ue] = le[Ue]);
          }
      }
      const z = O(C), V = [], Z = Object.keys(z).sort();
      for (let Y = 0; Y < Z.length; ++Y) {
        const re = z[Z[Y]];
        S(re) || V.push(re);
      }
      return A === null ? V : (L.graph = !0, L.skipExpansion = !0, await T.compact(V, A, L));
    }, Object.defineProperty(T, "documentLoader", {
      get: () => T._documentLoader,
      set: (x) => T._documentLoader = x
    }), T.documentLoader = async (x) => {
      throw new r(
        "Could not retrieve a JSON-LD document from the URL. URL dereferencing not implemented.",
        "jsonld.LoadDocumentError",
        { code: "loading document failed", url: x }
      );
    }, T.get = async function(x, A) {
      let L;
      typeof A.documentLoader == "function" ? L = A.documentLoader : L = T.documentLoader;
      const K = await L(x);
      try {
        if (!K.document)
          throw new r(
            "No remote document found at the given URL.",
            "jsonld.NullRemoteDocument"
          );
        b(K.document) && (K.document = JSON.parse(K.document));
      } catch (Q) {
        throw new r(
          "Could not retrieve a JSON-LD document from the URL.",
          "jsonld.LoadDocumentError",
          {
            code: "loading document failed",
            cause: Q,
            remoteDoc: K
          }
        );
      }
      return K;
    }, T.processContext = async function(x, A, L) {
      return L = R(L, {
        base: "",
        contextResolver: new i(
          { sharedCache: k }
        )
      }), A === null ? h(L) : (A = n.clone(A), _(A) && "@context" in A || (A = { "@context": A }), c({ activeCtx: x, localCtx: A, options: L }));
    }, T.getContextValue = ht().getContextValue, T.documentLoaders = {}, T.useDocumentLoader = function(x) {
      if (!(x in T.documentLoaders))
        throw new r(
          'Unknown document loader type: "' + x + '"',
          "jsonld.UnknownDocumentLoader",
          { type: x }
        );
      T.documentLoader = T.documentLoaders[x].apply(
        T,
        Array.prototype.slice.call(arguments, 1)
      );
    }, T.registerRDFParser = function(x, A) {
      D[x] = A;
    }, T.unregisterRDFParser = function(x) {
      delete D[x];
    }, T.registerRDFParser("application/n-quads", a.parse), T.registerRDFParser("application/nquads", a.parse), T.url = ct(), T.logEventHandler = P, T.logWarningEventHandler = M, T.safeEventHandler = j, T.setDefaultEventHandler = q, T.strictEventHandler = N, T.unhandledEventHandler = H, T.util = n, Object.assign(T, n), T.promises = T, T.RequestQueue = Pc(), T.JsonLdProcessor = lp()(T), t.setupGlobals(T), t.setupDocumentLoaders(T);
    function R(x, {
      documentLoader: A = T.documentLoader,
      ...L
    }) {
      if (x && "compactionMap" in x)
        throw new r(
          '"compactionMap" not supported.',
          "jsonld.OptionsError"
        );
      if (x && "expansionMap" in x)
        throw new r(
          '"expansionMap" not supported.',
          "jsonld.OptionsError"
        );
      return Object.assign(
        {},
        { documentLoader: A },
        L,
        x,
        { eventHandler: B({ options: x }) }
      );
    }
    return T;
  }, J = function() {
    return F(function() {
      return J();
    });
  };
  return F(J), Ni = J, Ni;
}
var pp = fp();
const hp = /* @__PURE__ */ Gi(pp);
async function Bo(e, t, n = {}) {
  const i = {
    algorithm: "URDNA2015",
    format: "application/n-quads",
    safe: n.safe ?? !1
  };
  return t && (i.documentLoader = t), await hp.normalize(e, i);
}
async function mp(e, t, n, i = !1) {
  const [u, r] = await Promise.all([
    Bo(e, n, { safe: i }),
    Bo(t, n, { safe: i })
  ]), s = Di("sha256").update(u, "utf8").digest(), a = Di("sha256").update(r, "utf8").digest(), o = new Uint8Array(64);
  return o.set(a, 0), o.set(s, 32), o;
}
async function yp(e, t, n = {}) {
  const i = e.proof;
  if (!i) throw new Error("No proof found on credential");
  if (i.cryptosuite !== "eddsa-rdfc-2022")
    throw new Error(`Unsupported cryptosuite: ${i.cryptosuite}`);
  if (i.created === void 0)
    throw new Error('eddsa-rdfc-2022 proof is missing the required "created" property.');
  const u = ["type", "cryptosuite", "proofPurpose", "verificationMethod", "created", "proofValue"];
  if (i.type !== "DataIntegrityProof" || i.proofPurpose !== "assertionMethod" || Object.keys(i).some((g) => !u.includes(g)) || typeof i.verificationMethod != "string" || typeof i.created != "string" || typeof i.proofValue != "string") return !1;
  const { proof: r, ...s } = e, { proofValue: a, ...o } = i, l = { ...o, "@context": s["@context"] }, y = await mp(
    s,
    l,
    n.documentLoader,
    n.safe ?? !1
  );
  try {
    const g = ic(i.proofValue);
    return await Cf(g, y, t);
  } catch {
    return !1;
  }
}
const gp = uf, vp = $f, bp = Object.freeze({
  RmAccreditation: `${vt}accreditation.json`,
  RmOperationalScope: `${vt}operational-scope.json`,
  RmCertificate: `${vt}certificate.json`,
  RmStudy: `${vt}study.json`,
  RmLabAuthority: `${vt}lab-authority.json`,
  BitstringStatusListCredential: `${vt}status-list.json`
});
function wp(e) {
  return e === "BitstringStatusListCredential" ? [vs] : [vs, Od];
}
const _p = Object.freeze({
  name: "RM v1",
  schemas: bp,
  contexts: wp
}), Sp = Object.freeze({
  resolve: 1,
  parse: 0,
  carrier: 0,
  type: 0,
  schema: 0,
  proof: 2,
  key: 2,
  signature: 2
});
function kc(e, t, n, i) {
  return [
    e,
    t ?? "unresolved",
    n,
    i.purpose,
    `${i.profile.id}@${i.profile.version}`,
    i.evaluationTime
  ].join(" | ");
}
function xt(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
const Ip = (e) => e.replace(/~/g, "~0").replace(/\//g, "~1");
function $p(e, t) {
  if (!t.startsWith("/")) return [];
  let n = [{ pointer: "", value: e }];
  for (const i of t.slice(1).split("/")) {
    const u = [];
    for (const { pointer: r, value: s } of n)
      i === "*" ? Array.isArray(s) && s.forEach((a, o) => u.push({ pointer: `${r}/${o}`, value: a })) : xt(s) && Object.hasOwn(s, i) && u.push({ pointer: `${r}/${Ip(i)}`, value: s[i] });
    n = u;
  }
  return n;
}
function Jo(e, t) {
  if (t === "") return e;
  if (!t.startsWith("/")) return;
  let n = e;
  for (const i of t.slice(1).split("/")) {
    const u = i.replace(/~1/g, "/").replace(/~0/g, "~");
    if (Array.isArray(n) && /^(0|[1-9][0-9]*)$/.test(u)) n = n[Number(u)];
    else if (xt(n) && Object.hasOwn(n, u)) n = n[u];
    else return;
  }
  return n;
}
function he(e, t, n = [], i = "executed") {
  return Object.freeze({
    state: e,
    execution: i,
    reasons: Object.freeze(t),
    sourcePointers: Object.freeze(n)
  });
}
const qt = (e) => he("not_established", [e], [], "not_run");
function xp(e, t) {
  const n = Date.parse(t), i = typeof e.validFrom == "string" ? Date.parse(e.validFrom) : NaN, u = typeof e.validUntil == "string" ? Date.parse(e.validUntil) : NaN;
  if (!Number.isFinite(n) || !Number.isFinite(i) || !Number.isFinite(u))
    return he("not_established", ["Validity period or evaluation time is missing or invalid."]);
  const r = ["/validFrom", "/validUntil"];
  return n < i ? he("contradicted", [`Not yet valid at ${t}.`], r) : n > u ? he("contradicted", [`Expired before ${t}.`], r) : he("established", [`Valid at ${t}.`], r);
}
function Rp(e, t) {
  return (Array.isArray(e.relatedResource) ? e.relatedResource : []).filter(xt).map((i) => {
    const u = String(i.id);
    try {
      const r = vr(t.resolve(u).bytes);
      return r === i.digestSRI ? { id: u, state: "established", reason: "Digest matches the exact referenced bytes." } : { id: u, state: "contradicted", reason: `Digest mismatch: referenced bytes hash to ${r}.` };
    } catch (r) {
      const s = r instanceof _e ? r.code : "UNAVAILABLE";
      return { id: u, state: "not_established", reason: `Referenced resource unavailable: ${s}.` };
    }
  });
}
async function er(e, t, n) {
  const i = [], u = n.staticResolver ?? t, r = n.binding ?? _p, s = qt("Not evaluated because protection is not established."), a = (d = {}) => {
    const p = Le(i.map((I) => I.state));
    return Object.freeze({
      artifactId: e,
      protection: Object.freeze({
        artifactId: e,
        ...he(p, i.filter((I) => I.state !== "established").map((I) => `${I.check}: ${I.reason}`).concat(p === "established" ? ["Protection established from the original secured bytes."] : []))
      }),
      checks: Object.freeze(i.map((I) => Object.freeze(I))),
      validity: s,
      relatedResources: Object.freeze([]),
      facts: Object.freeze([]),
      ...d
    });
  }, o = (d, p, I, $ = {}) => (i.push({ check: d, state: p, reason: I }), a($));
  let l;
  try {
    l = t.resolve(e).bytes;
  } catch (d) {
    const p = d instanceof _e ? d.code : "UNAVAILABLE";
    return o("resolve", "not_established", `Artifact is not available: ${p}.`);
  }
  const y = vr(l);
  i.push({ check: "resolve", state: "established", reason: `Resolved ${l.byteLength} bytes.` });
  let g;
  try {
    g = JSON.parse(new TextDecoder("utf-8", { fatal: !0 }).decode(l));
  } catch {
    return o("parse", "contradicted", "Artifact bytes are not valid UTF-8 JSON.", { digestSRI: y });
  }
  if (!xt(g)) return o("parse", "contradicted", "Artifact is not a JSON object.", { digestSRI: y });
  i.push({ check: "parse", state: "established", reason: "Strict UTF-8 JSON object." });
  const f = g["@context"], m = r.contexts(Array.isArray(g.type) ? g.type[1] : void 0);
  if (!Array.isArray(f) || f.length !== m.length || m.some((d, p) => f[p] !== d))
    return o(
      "carrier",
      "not_established",
      "Only the exact supported context combination for this type is accepted.",
      { digestSRI: y }
    );
  i.push({ check: "carrier", state: "established", reason: "Exact supported context combination." });
  const w = Array.isArray(g.type) ? g.type : [], _ = w.length === 2 && w[0] === "VerifiableCredential" ? String(w[1]) : void 0, b = _ === void 0 ? void 0 : r.schemas[_];
  if (b === void 0)
    return o("type", "not_established", `Credential type is not a recognized ${r.name} artifact type.`, { digestSRI: y });
  if (Array.isArray(g.credentialSchema))
    return o(
      "type",
      "not_established",
      "Multiple credentialSchema declarations have no accepted composition in this binding.",
      { digestSRI: y, artifactType: _ }
    );
  if ((xt(g.credentialSchema) ? g.credentialSchema.id : void 0) !== b)
    return o("type", "contradicted", `${_} must declare schema ${b}.`, { digestSRI: y, artifactType: _ });
  i.push({ check: "type", state: "established", reason: `${_} with its pinned schema.` });
  try {
    const d = new gp({ allErrors: !0, strict: !0 });
    vp(d);
    const p = JSON.parse(new TextDecoder().decode(u.resolve(b).bytes)), I = d.compile(p);
    if (!I(g)) {
      const $ = (I.errors ?? []).map((E) => `${E.instancePath || "/"} ${E.message ?? ""}`).join("; ");
      return o("schema", "contradicted", `Schema validation failed: ${$}`, { digestSRI: y, artifactType: _ });
    }
  } catch (d) {
    const p = d instanceof _e ? d.code : "INVALID_SCHEMA";
    return o("schema", "not_established", `Pinned schema unavailable: ${p}.`, { digestSRI: y, artifactType: _ });
  }
  i.push({ check: "schema", state: "established", reason: "Valid against the pinned schema." });
  const v = g.proof;
  if (Array.isArray(v))
    return o("proof", "not_established", "Proof sets and chains are unsupported in the initial slice.", { digestSRI: y, artifactType: _ });
  if (!xt(v))
    return o("proof", "not_established", "The artifact carries no proof.", { digestSRI: y, artifactType: _ });
  i.push({ check: "proof", state: "established", reason: "One eddsa-rdfc-2022 assertionMethod proof." });
  const h = Md(g.issuer, v.verificationMethod, u);
  if (h.state !== "established" || h.publicKey === void 0)
    return o(
      "key",
      h.state === "established" ? "not_established" : h.state,
      `${h.code}: ${h.reason}`,
      { digestSRI: y, artifactType: _, keyAuthorization: h }
    );
  i.push({ check: "key", state: "established", reason: h.reason });
  try {
    const d = jd(u);
    if (!await yp(g, h.publicKey, {
      documentLoader: d,
      safe: !0
    }))
      return o(
        "signature",
        "contradicted",
        "Signature does not verify over the safe canonical form.",
        { digestSRI: y, artifactType: _, keyAuthorization: h }
      );
  } catch (d) {
    const p = d instanceof Error ? d.message.split(`
`)[0] : String(d);
    return o(
      "signature",
      "contradicted",
      `Safe JSON-LD processing rejected the artifact: ${p}`,
      { digestSRI: y, artifactType: _, keyAuthorization: h }
    );
  }
  i.push({ check: "signature", state: "established", reason: "Ed25519 signature verifies (safe mode, offline catalog)." });
  const c = [];
  for (const d of n.manifest.factMappings) {
    const p = String(d.fact);
    for (const { pointer: I, value: $ } of $p(g, String(d.nativePath)))
      c.push(Object.freeze({ fact: p, pointer: I, value: structuredClone($) }));
  }
  return a({
    digestSRI: y,
    artifactType: _,
    keyAuthorization: h,
    validity: xp(g, n.evaluationTime),
    relatedResources: Object.freeze(Rp(g, t).map((d) => Object.freeze(d))),
    facts: Object.freeze(c)
  });
}
var Ie = Uint8Array, $t = Uint16Array, Ep = Int32Array, Lc = new Ie([
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
]), Mc = new Ie([
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
]), jp = new Ie([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), Cc = function(e, t) {
  for (var n = new $t(31), i = 0; i < 31; ++i)
    n[i] = t += 1 << e[i - 1];
  for (var u = new Ep(n[30]), i = 1; i < 30; ++i)
    for (var r = n[i]; r < n[i + 1]; ++r)
      u[r] = r - n[i] << 5 | i;
  return { b: n, r: u };
}, Uc = Cc(Lc, 2), zc = Uc.b, Ap = Uc.r;
zc[28] = 258, Ap[258] = 28;
var Op = Cc(Mc, 0), qp = Op.b, zi = new $t(32768);
for (var se = 0; se < 32768; ++se) {
  var st = (se & 43690) >> 1 | (se & 21845) << 1;
  st = (st & 52428) >> 2 | (st & 13107) << 2, st = (st & 61680) >> 4 | (st & 3855) << 4, zi[se] = ((st & 65280) >> 8 | (st & 255) << 8) >> 1;
}
var Mt = (function(e, t, n) {
  for (var i = e.length, u = 0, r = new $t(t); u < i; ++u)
    e[u] && ++r[e[u] - 1];
  var s = new $t(t);
  for (u = 1; u < t; ++u)
    s[u] = s[u - 1] + r[u - 1] << 1;
  var a;
  if (n) {
    a = new $t(1 << t);
    var o = 15 - t;
    for (u = 0; u < i; ++u)
      if (e[u])
        for (var l = u << 4 | e[u], y = t - e[u], g = s[e[u] - 1]++ << y, f = g | (1 << y) - 1; g <= f; ++g)
          a[zi[g] >> o] = l;
  } else
    for (a = new $t(i), u = 0; u < i; ++u)
      e[u] && (a[u] = zi[s[e[u] - 1]++] >> 15 - e[u]);
  return a;
}), Zt = new Ie(288);
for (var se = 0; se < 144; ++se)
  Zt[se] = 8;
for (var se = 144; se < 256; ++se)
  Zt[se] = 9;
for (var se = 256; se < 280; ++se)
  Zt[se] = 7;
for (var se = 280; se < 288; ++se)
  Zt[se] = 8;
var Vc = new Ie(32);
for (var se = 0; se < 32; ++se)
  Vc[se] = 5;
var Np = /* @__PURE__ */ Mt(Zt, 9, 1), Tp = /* @__PURE__ */ Mt(Vc, 5, 1), Ti = function(e) {
  for (var t = e[0], n = 1; n < e.length; ++n)
    e[n] > t && (t = e[n]);
  return t;
}, Pe = function(e, t, n) {
  var i = t / 8 | 0;
  return (e[i] | e[i + 1] << 8) >> (t & 7) & n;
}, Pi = function(e, t) {
  var n = t / 8 | 0;
  return (e[n] | e[n + 1] << 8 | e[n + 2] << 16) >> (t & 7);
}, Pp = function(e) {
  return (e + 7) / 8 | 0;
}, Dp = function(e, t, n) {
  return (n == null || n > e.length) && (n = e.length), new Ie(e.subarray(t, n));
}, kp = [
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
], De = function(e, t, n) {
  var i = new Error(t || kp[e]);
  if (i.code = e, Error.captureStackTrace && Error.captureStackTrace(i, De), !n)
    throw i;
  return i;
}, Lp = function(e, t, n, i) {
  var u = e.length, r = 0;
  if (!u || t.f && !t.l)
    return n || new Ie(0);
  var s = !n, a = s || t.i != 2, o = t.i;
  s && (n = new Ie(u * 3));
  var l = function(C) {
    var z = n.length;
    if (C > z) {
      var V = new Ie(Math.max(z * 2, C));
      V.set(n), n = V;
    }
  }, y = t.f || 0, g = t.p || 0, f = t.b || 0, m = t.l, w = t.d, _ = t.m, b = t.n, S = u * 8;
  do {
    if (!m) {
      y = Pe(e, g, 1);
      var v = Pe(e, g + 1, 3);
      if (g += 3, v)
        if (v == 1)
          m = Np, w = Tp, _ = 9, b = 5;
        else if (v == 2) {
          var p = Pe(e, g, 31) + 257, I = Pe(e, g + 10, 15) + 4, $ = p + Pe(e, g + 5, 31) + 1;
          g += 14;
          for (var E = new Ie($), O = new Ie(19), P = 0; P < I; ++P)
            O[jp[P]] = Pe(e, g + P * 3, 7);
          g += I * 3;
          for (var M = Ti(O), j = (1 << M) - 1, q = Mt(O, M, 1), P = 0; P < $; ) {
            var B = q[Pe(e, g, j)];
            g += B & 15;
            var h = B >> 4;
            if (h < 16)
              E[P++] = h;
            else {
              var N = 0, H = 0;
              for (h == 16 ? (H = 3 + Pe(e, g, 3), g += 2, N = E[P - 1]) : h == 17 ? (H = 3 + Pe(e, g, 7), g += 3) : h == 18 && (H = 11 + Pe(e, g, 127), g += 7); H--; )
                E[P++] = N;
            }
          }
          var F = E.subarray(0, p), J = E.subarray(p);
          _ = Ti(F), b = Ti(J), m = Mt(F, _, 1), w = Mt(J, b, 1);
        } else
          De(1);
      else {
        var h = Pp(g) + 4, c = e[h - 4] | e[h - 3] << 8, d = h + c;
        if (d > u) {
          o && De(0);
          break;
        }
        a && l(f + c), n.set(e.subarray(h, d), f), t.b = f += c, t.p = g = d * 8, t.f = y;
        continue;
      }
      if (g > S) {
        o && De(0);
        break;
      }
    }
    a && l(f + 131072);
    for (var T = (1 << _) - 1, D = (1 << b) - 1, U = g; ; U = g) {
      var N = m[Pi(e, g) & T], k = N >> 4;
      if (g += N & 15, g > S) {
        o && De(0);
        break;
      }
      if (N || De(2), k < 256)
        n[f++] = k;
      else if (k == 256) {
        U = g, m = null;
        break;
      } else {
        var R = k - 254;
        if (k > 264) {
          var P = k - 257, x = Lc[P];
          R = Pe(e, g, (1 << x) - 1) + zc[P], g += x;
        }
        var A = w[Pi(e, g) & D], L = A >> 4;
        A || De(3), g += A & 15;
        var J = qp[L];
        if (L > 3) {
          var x = Mc[L];
          J += Pi(e, g) & (1 << x) - 1, g += x;
        }
        if (g > S) {
          o && De(0);
          break;
        }
        a && l(f + 131072);
        var K = f + R;
        if (f < J) {
          var Q = r - J, G = Math.min(J, K);
          for (Q + f < 0 && De(3); f < G; ++f)
            n[f] = i[Q + f];
        }
        for (; f < K; ++f)
          n[f] = n[f - J];
      }
    }
    t.l = m, t.p = U, t.b = f, t.f = y, m && (y = 1, t.m = _, t.d = w, t.n = b);
  } while (!y);
  return f != n.length && s ? Dp(n, 0, f) : n.subarray(0, f);
}, Mp = /* @__PURE__ */ new Ie(0), Cp = function(e) {
  (e[0] != 31 || e[1] != 139 || e[2] != 8) && De(6, "invalid gzip data");
  var t = e[3], n = 10;
  t & 4 && (n += (e[10] | e[11] << 8) + 2);
  for (var i = (t >> 3 & 1) + (t >> 4 & 1); i > 0; i -= !e[n++])
    ;
  return n + (t & 2);
}, Up = function(e) {
  var t = e.length;
  return (e[t - 4] | e[t - 3] << 8 | e[t - 2] << 16 | e[t - 1] << 24) >>> 0;
};
function zp(e, t) {
  var n = Cp(e);
  return n + 8 > e.length && De(6, "invalid gzip data"), Lp(e.subarray(n, -8), { i: 2 }, new Ie(Up(e)), t);
}
var Vp = typeof TextDecoder < "u" && /* @__PURE__ */ new TextDecoder(), Fp = 0;
try {
  Vp.decode(Mp, { stream: !0 }), Fp = 1;
} catch {
}
function Ko(e) {
  return Object.assign(new RangeError(`Cannot create a buffer larger than maxOutputLength ${e}.`), { code: "ERR_BUFFER_TOO_LARGE" });
}
function Hp(e, t = {}) {
  const n = t.maxOutputLength ?? Number.MAX_SAFE_INTEGER;
  if (e.length >= 18) {
    const u = e.length - 4;
    if ((e[u] | e[u + 1] << 8 | e[u + 2] << 16 | e[u + 3] << 24) >>> 0 > n) throw Ko(n);
  }
  const i = zp(e);
  if (i.length > n) throw Ko(n);
  return i;
}
const Go = 131072, Bp = 2 * 1024 * 1024;
class tr extends Error {
  constructor(t, n) {
    super(n), this.code = t, this.name = "StatusListError";
  }
}
function Jp(e, t = Bp) {
  if (typeof e != "string" || !/^u[A-Za-z0-9_-]+$/.test(e))
    throw new tr("MALFORMED", 'encodedList must be multibase base64url (prefix "u").');
  let n;
  try {
    n = Hp(Kp(e.slice(1)), { maxOutputLength: t });
  } catch (i) {
    throw i.code === "ERR_BUFFER_TOO_LARGE" || /maxOutputLength|buffer/i.test(String(i)) ? new tr("TOO_LARGE", `Decompressed status list exceeds ${t} bytes.`) : new tr("MALFORMED", "encodedList is not valid GZIP data.");
  }
  if (n.byteLength * 8 < Go)
    throw new tr("TOO_SHORT", `Status list has fewer than ${Go} bits.`);
  return new Uint8Array(n);
}
function Kp(e) {
  const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", n = new Uint8Array(Math.floor(e.length * 6 / 8));
  let i = 0, u = 0, r = 0;
  for (const s of e)
    i = i << 6 | t.indexOf(s), u += 6, u >= 8 && (u -= 8, n[r++] = i >> u & 255);
  return n;
}
function Gp(e, t) {
  const n = e[Math.floor(t / 8)];
  if (n === void 0) throw new RangeError(`Status index ${t} is outside the list.`);
  return (n >> 7 - t % 8 & 1) === 1;
}
function Fc(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function Vi(e, t) {
  const n = e.credentialStatus;
  if (n === void 0) return {};
  const i = Array.isArray(n) ? n : [n];
  if (i.length === 0 || !i.every(Fc)) return { reason: "Unsupported credentialStatus form." };
  const u = i.filter((r) => t.includes(String(r.statusPurpose)));
  return u.length > 1 ? { reason: `Several status entries for ${t.join("/")}.` } : u.length === 0 ? { reason: `No status entry has an accepted purpose (${t.join(", ")}); found ${i.map((r) => String(r.statusPurpose)).join(", ")}.` } : { entry: u[0] };
}
function Zp(e, t, n, i, u, r = u) {
  const s = Vi(e, i.purposes), a = s.entry;
  if (a === void 0 && s.reason === void 0)
    return i.required ? { state: "not_established", reason: "Status is required by the profile but the credential names none.", sources: [] } : { state: "established", reason: "The profile does not require status for this credential.", sources: [] };
  if (a === void 0) return { state: "not_established", reason: s.reason, sources: ["/credentialStatus"] };
  if (a.type !== "BitstringStatusListEntry" || typeof a.statusListCredential != "string" || typeof a.statusListIndex != "string")
    return { state: "not_established", reason: "Unsupported credentialStatus form.", sources: ["/credentialStatus"] };
  const o = a.statusListCredential, l = ["/credentialStatus", o];
  if (t === void 0)
    return { state: "not_established", reason: `Status list ${o} is unavailable.`, listUri: o, sources: l };
  if (n !== "established")
    return { state: "not_established", reason: `Status list ${o} is not protected and valid.`, listUri: o, sources: l };
  if (t.id !== o)
    return { state: "not_established", reason: `Resolved status list identifies itself as ${String(t.id)}.`, listUri: o, sources: l };
  if (t.issuer !== e.issuer)
    return { state: "not_established", reason: `Status list is signed by ${String(t.issuer)}, who may not state status for credentials of ${String(e.issuer)}.`, listUri: o, sources: l };
  const y = t.credentialSubject;
  if (!Fc(y) || y.type !== "BitstringStatusList" || y.statusPurpose !== a.statusPurpose)
    return { state: "not_established", reason: "Status list purpose does not match the entry.", listUri: o, sources: l };
  const g = Date.parse(u), f = Date.parse(String(t.validFrom));
  if (!Number.isFinite(g) || !Number.isFinite(f) || (g - f) / 1e3 > i.maxAgeSeconds)
    return { state: "not_established", reason: `Status list is older than the profile's ${i.maxAgeSeconds} s freshness limit.`, listUri: o, sources: l };
  const m = Date.parse(r);
  if (!Number.isFinite(m) || m < f)
    return { state: "not_established", reason: `Status list observed at ${String(t.validFrom)} cannot establish status at the earlier activity time ${r}; historical status is unavailable.`, listUri: o, sources: l };
  if (!/^(0|[1-9][0-9]*)$/.test(a.statusListIndex))
    return { state: "not_established", reason: "statusListIndex is not a non-negative integer.", listUri: o, sources: l };
  let w;
  try {
    w = Gp(Jp(y.encodedList), Number(a.statusListIndex));
  } catch (S) {
    return { state: "not_established", reason: `Status list cannot be read: ${S.message}`, listUri: o, sources: l };
  }
  const [_, b] = a.statusPurpose === "suspension" ? ["Suspended", "Not suspended"] : ["Revoked", "Not revoked"];
  return w ? { state: "contradicted", reason: `${_}: bit ${a.statusListIndex} of ${o} is set.`, listUri: o, sources: l } : { state: "established", reason: `${b}: bit ${a.statusListIndex} of ${o} is clear.`, listUri: o, sources: l };
}
const Qp = Object.freeze({ maxResources: 1e3, maxBytes: 2e7 });
function Wp(e, t, n) {
  if (!(e.binding.id === t.id && e.binding.version === t.version && e.profile.id === n.id && e.profile.version === n.version))
    return `Requested ${e.profile.id}@${e.profile.version} with binding ${e.binding.id}@${e.binding.version} is not the verifier-selected profile ${n.id}@${n.version} for ${t.id}@${t.version}.`;
}
function Xp(e, t) {
  const n = `${e.targetId} | plan`;
  return sc({
    requestId: e.requestId,
    targetId: e.targetId,
    binding: e.binding,
    profile: e.profile,
    artifactVerification: [],
    authorization: e.selectedClaims.map((i) => ({
      claimId: i.id,
      routeWitnessIds: [],
      ...qt("Not evaluated: the plan was refused at gate 0.")
    })),
    support: [],
    conformity: e.conformity ? { requested: !0, ...e.conformity, ...qt("Not evaluated: the plan was refused at gate 0.") } : { requested: !1, execution: "not_run" },
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
async function Yp(e, t, n, i, u) {
  const r = ys(t.openSession({
    maxResources: e.resolverLimits.maxResources,
    maxBytes: e.resolverLimits.maxBytes
  })), s = ys(t.openSession(Qp)), a = { manifest: n, evaluationTime: e.evaluationTime, staticResolver: s }, o = (p) => JSON.parse(new TextDecoder().decode(r.resolve(p).bytes)), l = await er(e.targetId, r, a), y = [l], g = /* @__PURE__ */ new Map([[e.targetId, 0]]);
  for (const p of e.suppliedEvidence)
    g.has(p) || (g.set(p, 1), y.push(await er(p, r, a)));
  for (let p = 0; p < y.length; p++) {
    const I = y[p], $ = g.get(I.artifactId);
    if (I.protection.state !== "established" || $ + 1 > e.resolverLimits.maxDepth) continue;
    const E = o(I.artifactId), O = [
      ...(Array.isArray(E.termsOfUse) ? E.termsOfUse : []).map((P) => P?.authorizationCredential?.id),
      ...(Array.isArray(E.evidence) ? E.evidence : []).map((P) => P?.id)
    ].filter((P) => typeof P == "string");
    for (const P of O)
      g.has(P) || (g.set(P, $ + 1), y.push(await er(P, r, a)));
  }
  const f = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Map();
  for (const p of y) {
    if (p.protection.state !== "established") {
      w.set(p.artifactId, void 0);
      continue;
    }
    const I = o(p.artifactId).id;
    w.set(p.artifactId, I === p.artifactId ? he("established", ["Artifact identifies itself by its resolved identity."], ["/id"]) : he("contradicted", [`Artifact resolved as ${p.artifactId} identifies itself as ${String(I)}.`], ["/id"]));
  }
  const _ = async (p, I, $) => {
    const E = g.get(p) + 1;
    if (E > e.resolverLimits.maxDepth)
      return {
        state: "not_established",
        sources: ["/credentialStatus"],
        reason: `Status list is at depth ${E}, beyond the request's maxDepth ${e.resolverLimits.maxDepth}.`
      };
    const O = Vi(I, $.purposes).entry, P = typeof O?.statusListCredential == "string" ? O.statusListCredential : void 0;
    let M, j = "not_established";
    if (P !== void 0) {
      f.has(P) || f.set(P, await er(P, r, a));
      const q = f.get(P);
      q.digestSRI !== void 0 && q.protection.state === "established" ? (M = o(P), j = Le([q.protection.state, q.validity.state])) : q.digestSRI !== void 0 && (M = {}, j = q.protection.state);
    }
    return Zp(I, M, j, $, e.evaluationTime, e.activityTime);
  }, b = { required: !0, purposes: ["suspension"], maxAgeSeconds: i.credentialStatus.maxAgeSeconds }, S = /* @__PURE__ */ new Map();
  for (const p of y) {
    if (p.protection.state !== "established") {
      m.set(p.artifactId, void 0);
      continue;
    }
    const I = o(p.artifactId);
    m.set(p.artifactId, await _(p.artifactId, I, i.credentialStatus)), Vi(I, ["suspension"]).entry !== void 0 && S.set(p.artifactId, await _(p.artifactId, I, b));
  }
  const v = (p) => [
    p.protection,
    w.get(p.artifactId) ? {
      artifactId: p.artifactId,
      ...w.get(p.artifactId),
      reasons: w.get(p.artifactId).reasons.map((I) => `identity: ${I}`)
    } : { artifactId: p.artifactId, ...qt("identity: Not evaluated because protection is not established.") },
    {
      artifactId: p.artifactId,
      ...p.validity,
      reasons: p.validity.reasons.map((I) => `validity: ${I}`)
    },
    ...m.get(p.artifactId) ? [{ artifactId: p.artifactId, ...he(
      m.get(p.artifactId).state,
      [`status: ${m.get(p.artifactId).reason}`],
      [...m.get(p.artifactId).sources]
    ) }] : [{
      artifactId: p.artifactId,
      ...qt("status: Not evaluated because protection is not established.")
    }],
    ...p.relatedResources.map((I) => ({
      artifactId: I.id,
      ...he(I.state, [`integrity (from ${p.artifactId}): ${I.reason}`], ["/relatedResource"])
    }))
  ], h = /* @__PURE__ */ new Map();
  for (const p of y) {
    const I = [
      ["protection", p.protection.state, p.protection.reasons.join(" ")],
      ["identity", w.get(p.artifactId)?.state ?? "not_established", w.get(p.artifactId)?.reasons.join(" ") ?? "not evaluated"],
      ["validity", p.validity.state, p.validity.reasons.join(" ")],
      ["status", m.get(p.artifactId)?.state ?? "not_established", m.get(p.artifactId)?.reason ?? "not evaluated"]
    ], $ = Le(I.map((O) => O[1])), E = S.get(p.artifactId);
    h.set(p.artifactId, {
      uri: p.artifactId,
      usable: $,
      reason: I.filter((O) => O[1] !== "established").map((O) => `${O[0]}: ${O[2]}`).join("; ") || "usable",
      ...$ === "established" ? { document: o(p.artifactId) } : {},
      ...E ? { suspension: { state: E.state, reason: E.reason } } : {}
    });
  }
  const c = [], d = [];
  y.forEach((p, I) => {
    const $ = I === 0 ? "target" : "supplied-evidence", E = kc(p.artifactId, p.digestSRI, $, e);
    for (const M of p.checks)
      c.push({
        gate: Sp[M.check],
        nodeUse: E,
        predicate: M.check,
        state: M.state,
        execution: "executed",
        reason: M.reason,
        sources: [p.artifactId]
      });
    for (const M of p.relatedResources)
      c.push({
        gate: 1,
        nodeUse: E,
        predicate: "related-resource-integrity",
        state: M.state,
        execution: "executed",
        reason: `${M.id}: ${M.reason}`,
        sources: ["/relatedResource", M.id]
      });
    const O = w.get(p.artifactId);
    c.push(O ? {
      gate: 1,
      nodeUse: E,
      predicate: "resource-identity",
      state: O.state,
      execution: "executed",
      reason: O.reasons.join(" "),
      sources: [...O.sourcePointers]
    } : {
      gate: 1,
      nodeUse: E,
      predicate: "resource-identity",
      state: "not_established",
      execution: "not_run",
      reason: "Not evaluated because protection is not established.",
      sources: []
    }), c.push({
      gate: 3,
      nodeUse: E,
      predicate: "validity-period",
      state: p.validity.state,
      execution: p.validity.execution,
      reason: p.validity.reasons.join(" ") || "Not evaluated.",
      sources: [...p.validity.sourcePointers]
    });
    const P = m.get(p.artifactId);
    c.push(P ? {
      gate: 3,
      nodeUse: E,
      predicate: "credential-status",
      state: P.state,
      execution: "executed",
      reason: P.reason,
      sources: [...P.sources]
    } : {
      gate: 3,
      nodeUse: E,
      predicate: "credential-status",
      state: "not_established",
      execution: "not_run",
      reason: "Not evaluated because protection is not established.",
      sources: []
    }), p.digestSRI !== void 0 && d.push({
      uri: p.artifactId,
      digestSRI: p.digestSRI,
      kind: "artifact",
      source: "catalog",
      observedAt: e.evaluationTime
    });
  });
  for (const [p, I] of f)
    I.digestSRI !== void 0 && d.push({ uri: p, digestSRI: I.digestSRI, kind: "status", source: "catalog", observedAt: e.evaluationTime });
  return {
    target: l,
    artifacts: y,
    facts: h,
    verificationOf: v,
    artifactVerification: y.flatMap(v),
    trace: c,
    resources: d
  };
}
const eh = /^(0|[1-9][0-9]*)(\.[0-9]+)?$/, as = Object.freeze({ "kg/kg": 0, "mg/kg": -6 });
function Hc(e) {
  if (typeof e != "string" || !eh.test(e)) return;
  const [t, n = ""] = e.split(".");
  return { n: BigInt(`${t}${n}`), scale: n.length };
}
function Bt(e, t) {
  const n = Hc(e), i = typeof t == "string" ? as[t] : void 0;
  if (!(n === void 0 || i === void 0))
    return i <= 0 ? { n: n.n, scale: n.scale - i } : { n: n.n * 10n ** BigInt(i), scale: n.scale };
}
function mt(e, t) {
  const n = Math.max(e.scale, t.scale), i = e.n * 10n ** BigInt(n - e.scale), u = t.n * 10n ** BigInt(n - t.scale);
  return i < u ? -1 : i > u ? 1 : 0;
}
function th(e, t) {
  const n = Math.max(e.scale, t.scale);
  return { n: e.n * 10n ** BigInt(n - e.scale) + t.n * 10n ** BigInt(n - t.scale), scale: n };
}
function or(e) {
  const t = e.n.toString().padStart(e.scale + 1, "0");
  if (e.scale === 0) return t;
  const n = t.slice(-e.scale).replace(/0+$/, "");
  return n.length === 0 ? t.slice(0, -e.scale) : `${t.slice(0, -e.scale)}.${n}`;
}
function Fi(e) {
  const t = e.range;
  if (t === void 0) return "Scope record has no range.";
  const n = Bt(t.from, t.unit), i = Bt(t.to, t.unit);
  return n === void 0 || i === void 0 ? `Unsupported or malformed range ${String(t.from)}–${String(t.to)} ${String(t.unit)}.` : mt(n, i) > 0 ? "Scope record range is reversed." : { low: n, high: i };
}
const nr = (e) => Array.isArray(e) ? e.filter((t) => typeof t == "string") : [], Zo = (e, t) => e.length > 0 && e.every((n) => t.includes(n));
function nh(e, t) {
  if (e.length === 0) return { state: "not_established", reason: "The projected scope has no records.", witnesses: [] };
  const n = [];
  for (const i of e) {
    const u = Fi(i);
    if (typeof u == "string")
      return { state: /reversed/.test(u) ? "contradicted" : "not_established", reason: `${String(i.id)}: ${u}`, witnesses: n };
    const r = nr(i.allowedPropertyIris), s = nr(i.allowedMethodIris);
    if (r.length === 0 || s.length === 0 || typeof i.matrixIri != "string" || typeof i.formIri != "string" || typeof i.quantityKindIri != "string")
      return { state: "not_established", reason: `${String(i.id)}: a restricted dimension is missing or empty.`, witnesses: n };
    const a = t.find((o) => {
      const l = Fi(o);
      return typeof l != "string" && o.matrixIri === i.matrixIri && o.formIri === i.formIri && o.quantityKindIri === i.quantityKindIri && Zo(r, nr(o.allowedPropertyIris)) && Zo(s, nr(o.allowedMethodIris)) && mt(u.low, l.low) >= 0 && mt(u.high, l.high) <= 0;
    });
    if (a === void 0)
      return { state: "contradicted", reason: `${String(i.id)} is not contained in any single parent record.`, witnesses: n };
    n.push({ child: String(i.id), parent: String(a.id) });
  }
  return { state: "established", reason: `Each projected record lies within one parent record (${n.map((i) => `${i.child} ⊆ ${i.parent}`).join("; ")}).`, witnesses: n };
}
const Ct = "https://vc4qi.example/bindings/rm/1#", Ut = Object.freeze({
  issueRmCertificate: `${Ct}issueRmCertificate`,
  maintainRmScope: `${Ct}maintainRmScope`,
  issueRmStudy: `${Ct}issueRmStudy`
}), we = (e, t, n = []) => ({ id: e, state: "established", reason: t, sources: n }), je = (e, t, n = []) => ({ id: e, state: "contradicted", reason: t, sources: n }), ue = (e, t, n = []) => ({ id: e, state: "not_established", reason: t, sources: n }), ot = (e) => e !== null && typeof e == "object" && !Array.isArray(e), Ee = (e) => Array.isArray(e) ? e : [], ke = (e) => ot(e.credentialSubject) ? e.credentialSubject : {}, Hi = (e) => Array.isArray(e.type) ? String(e.type[1]) : void 0, zt = (e, t) => Ee(ke(e).permittedActivity).includes(t);
function Bc(e, t = "RmAuthorizationPolicy") {
  return Ee(e.termsOfUse).filter(ot).filter((n) => n.type === t && ot(n.authorizationCredential)).map((n) => n.authorizationCredential).filter((n) => typeof n.id == "string").map((n) => ({ id: n.id, type: n.type }));
}
function mr(e, t, n, i, u, r = "RmAuthorizationPolicy") {
  const s = Bc(t, r).filter((l) => l.type === n).map((l) => l.id);
  if (s.length === 0)
    return { basis: ue(e, `No recognized authorization policy references a ${n}.`, ["/termsOfUse"]) };
  if (s.length > 1)
    return { basis: ue(e, `Several ${n} references; this binding has no deterministic selection.`, ["/termsOfUse"]) };
  const a = s[0];
  if (u.includes(a))
    return { basis: ue(e, `Circular authorization: ${a} is already on the evaluation path.`, ["/termsOfUse", a]) };
  const o = i(a);
  return o === void 0 ? { basis: ue(e, `Referenced ${n} ${a} is unavailable.`, ["/termsOfUse", a]) } : o.usable !== "established" || o.document === void 0 ? { basis: {
    id: e,
    state: o.usable === "contradicted" ? "contradicted" : "not_established",
    reason: `Referenced ${n} ${a} is not usable: ${o.reason}`,
    sources: ["/termsOfUse", a]
  } } : Hi(o.document) !== n ? { basis: je(e, `Reference declares ${n}, but ${a} is a ${String(Hi(o.document))}.`, ["/termsOfUse", a]) } : { basis: we(e, `References ${n} ${a}.`, ["/termsOfUse", a]), node: o };
}
function yr(e, t, n, i) {
  const u = ke(t).id;
  return typeof u != "string" || typeof n != "string" ? ue(e, `${i}: grantee or exercising actor is missing.`, ["/credentialSubject/id", "/issuer"]) : u === n ? we(e, `${i}: grantee ${u} is the exercising actor.`, ["/credentialSubject/id", "/issuer"]) : je(e, `${i}: grantee ${u} is not the exercising actor ${n}.`, ["/credentialSubject/id", "/issuer"]);
}
function os(e, t, n, i) {
  const u = i.trustAnchors.find((r) => r.id === t.issuer);
  return u === void 0 ? ue(e, `${String(t.issuer)} is not a configured trust anchor.`, ["/issuer"]) : u.purposes.includes(n) ? we(e, `${String(t.issuer)} is a configured anchor for ${n}.`, ["/issuer"]) : ue(e, `${String(t.issuer)} is an anchor, but not for ${n}.`, ["/issuer"]);
}
function Jc(e, t) {
  const n = "scope-in-force-at-activity", i = ke(e).activityTime, u = Date.parse(String(i));
  if (typeof i != "string" || !Number.isFinite(u))
    return ue(n, "The certificate states no activity time.", ["/credentialSubject/activityTime"]);
  for (const [r, s] of t) {
    const a = Date.parse(String(s.validFrom)), o = Date.parse(String(s.validUntil));
    if (!Number.isFinite(a) || u < a)
      return ue(n, `${r} is valid only from ${String(s.validFrom)}, after the activity at ${i}; a later scope cannot authorize it.`, ["/credentialSubject/activityTime", "/validFrom"]);
    if (Number.isFinite(o) && u > o)
      return ue(n, `${r} expired at ${String(s.validUntil)}, before the activity at ${i}.`, ["/credentialSubject/activityTime", "/validUntil"]);
  }
  return we(n, `${t.map((r) => r[0]).join(" and ")} ${t.length > 1 ? "were" : "was"} in force at the activity time ${i}.`, ["/credentialSubject/activityTime"]);
}
function at(e, t, n, i) {
  return { id: e, state: Le(t.map((u) => u.state)), execution: "executed", bases: t, chain: n, ...i ? { scope: i } : {} };
}
function rh(e, t, n, i) {
  const u = e.document, r = [], s = [e.uri], a = mr("authorizing-reference", u, "RmOperationalScope", t, i);
  if (r.push(a.basis), !a.node) return at("operational-scope", r, s);
  const o = a.node.document;
  s.push(a.node.uri), r.push(yr("principal-binding", o, u.issuer, "Operational scope O")), r.push(o.issuer === ke(o).id ? we("self-maintained-scope", "O is issued by its own grantee.", ["/issuer"]) : je("self-maintained-scope", "O is not issued by its own grantee.", ["/issuer"])), r.push(zt(o, Ut.issueRmCertificate) ? we("activity-permission", "O permits issuing RM certificates.", ["/credentialSubject/permittedActivity"]) : je("activity-permission", "O does not permit issuing RM certificates.", ["/credentialSubject/permittedActivity"]));
  const l = mr("maintenance-grant", o, "RmAccreditation", t, [...i, a.node.uri]);
  if (r.push(l.basis), !l.node) return at("operational-scope", r, s);
  const y = l.node.document;
  s.push(l.node.uri), r.push(yr("accreditation-grantee", y, o.issuer, "Accreditation A")), r.push(zt(y, Ut.maintainRmScope) && zt(y, Ut.issueRmCertificate) ? we("projection-permission", "A permits maintaining an operational scope for RM certification.", ["/credentialSubject/permittedActivity"]) : je("projection-permission", "A does not permit maintaining an operational scope for RM certification.", ["/credentialSubject/permittedActivity"]));
  const g = nh(Ee(ke(o).scope).filter(ot), Ee(ke(y).scope).filter(ot));
  return r.push({ id: "bounded-projection", state: g.state, reason: g.reason, sources: ["/credentialSubject/scope"] }), r.push(os("trust-anchor", y, "accredit-rm-producers", n)), r.push(Jc(u, [["O", o], ["A", y]])), at("operational-scope", r, s, a.node.uri);
}
function ih(e, t, n, i) {
  const u = e.document, r = [], s = [e.uri], a = mr("authorizing-reference", u, "RmAccreditation", t, i);
  if (r.push(a.basis), !a.node) return at("direct-accreditation", r, s);
  const o = a.node.document;
  return s.push(a.node.uri), r.push(yr("principal-binding", o, u.issuer, "Accreditation A")), r.push(zt(o, Ut.issueRmCertificate) ? we("activity-permission", "A permits issuing RM certificates.", ["/credentialSubject/permittedActivity"]) : je("activity-permission", "A does not permit issuing RM certificates.", ["/credentialSubject/permittedActivity"])), r.push(os("trust-anchor", o, "accredit-rm-producers", n)), r.push(Jc(u, [["A", o]])), at("direct-accreditation", r, s, a.node.uri);
}
const sh = Object.freeze({
  "operational-scope": rh,
  "direct-accreditation": ih
});
function ah(e, t, n) {
  const i = "restriction:accreditation-suspension", u = e.document.issuer, r = /* @__PURE__ */ new Set([e.uri]), s = [e.document], a = [];
  for (; s.length > 0; )
    for (const y of Bc(s.shift())) {
      if (r.has(y.id)) continue;
      r.add(y.id);
      const g = t(y.id);
      if (g?.usable !== "established" || g.document === void 0) continue;
      s.push(g.document);
      const f = g.document, m = n.trustAnchors.some((w) => w.id === f.issuer && w.purposes.includes("accredit-rm-producers"));
      Hi(f) === "RmAccreditation" && m && ke(f).id === u && a.push(g);
    }
  if (a.length === 0)
    return ue(i, `No accreditation of ${String(u)} is reached, so the absence of a suspension is not established.`);
  const o = a.map((y) => y.suspension === void 0 ? ue(i, `${y.uri} carries no suspension status.`, [y.uri]) : { id: i, state: y.suspension.state, reason: `${y.uri}: ${y.suspension.reason}`, sources: [y.uri] }), l = Le(o.map((y) => y.state));
  return {
    id: i,
    state: l,
    reason: l === "contradicted" ? `The actor's certification activity is suspended. ${o.filter((y) => y.state === "contradicted").map((y) => y.reason).join(" ")}` : o.map((y) => y.reason).join(" "),
    sources: a.map((y) => y.uri)
  };
}
const oh = Object.freeze({
  "accreditation-suspension": ah
});
function Kc(e, t, n) {
  const i = [
    ...t,
    ...n.map((l) => ({ id: l, state: "not_established", execution: "not_run", bases: [], chain: [] }))
  ], u = e.length === 0 ? "established" : Le(e.map((l) => l.state)), r = i.length === 0 ? "not_established" : oc(i.map((l) => l.state)), s = Le([u, r]), a = i.find((l) => l.state === "established"), o = s === "established" ? `Authorized through route ${a.id}; global restrictions hold.` : u === "contradicted" ? "An applicable global restriction applies to every route." : r === "contradicted" ? "Every permitted route is contradicted." : n.length > 0 ? "The route search stopped at its budget before every route was evaluated." : "No complete route is established.";
  return { state: s, reason: o, restrictions: e, routes: i };
}
function ch(e, t) {
  const n = e.routes.filter((u) => u.execution === "executed").map((u) => {
    const s = (u.scope === void 0 ? void 0 : t(u)) ?? ue("claim-coverage", "The route did not reach a scope credential.");
    return { ...u, bases: [...u.bases, s], state: Le([u.state, s.state]) };
  }), i = e.routes.filter((u) => u.execution === "not_run").map((u) => u.id);
  return Kc(e.restrictions, n, i);
}
function dh(e, t, n) {
  if (e.usable !== "established" || e.document === void 0)
    return { state: "not_established", reason: "The target is not usable, so its authority is not evaluated.", restrictions: [], routes: [] };
  const i = e, u = n.authority.certificateRoutes, r = n.authority.maxRoutes, s = u.slice(0, r).map((o) => {
    const l = sh[o];
    return l === void 0 ? at(o, [ue("installed-evaluator", `Route ${o} has no installed evaluator.`)], [i.uri]) : l(i, t, n, [i.uri]);
  }), a = n.authority.globalRestrictions.map((o) => {
    const l = oh[o];
    return l === void 0 ? ue(`restriction:${o}`, `Global restriction ${o} has no installed evaluator.`) : l(i, t, n);
  });
  return Kc(a, s, u.slice(r));
}
function uh(e, t, n, i) {
  const u = e.document, r = [], s = [e.uri], a = mr("laboratory-authority-reference", u, "RmLabAuthority", t, i);
  if (r.push(a.basis), !a.node) return at("laboratory-authority", r, s);
  const o = a.node.document;
  s.push(a.node.uri), r.push(yr("laboratory-binding", o, u.issuer, "Laboratory authority H")), r.push(zt(o, Ut.issueRmStudy) ? we("study-permission", "H permits issuing RM studies.", ["/credentialSubject/permittedActivity"]) : je("study-permission", "H does not permit issuing RM studies.", ["/credentialSubject/permittedActivity"]));
  const l = ke(u), y = Ee(ke(o).scope).filter(ot).some((g) => g.matrixIri === l.matrixIri && Ee(g.allowedPropertyIris).includes(l.propertyIri) && Ee(g.studyTypeIris).includes(l.studyTypeIri));
  return r.push(y ? we("study-scope", "H covers this matrix, property and study type.", ["/credentialSubject/scope"]) : je("study-scope", "H does not cover this matrix, property and study type.", ["/credentialSubject/scope"])), r.push(os("laboratory-anchor", o, "recognize-rm-laboratories", n)), at("laboratory-authority", r, s);
}
function lh(e, t, n) {
  if (e.usable !== "established" || e.document === void 0)
    return { state: "not_established", reason: "The target is not usable, so its support is not evaluated.", bases: [], chain: [] };
  const i = e.document, u = Ee(i.evidence).filter(ot).filter((S) => S.type === "RmStudyReference").map((S) => String(S.id));
  if (u.length === 0)
    return { state: "not_established", reason: "D cites no required study.", bases: [ue("study-reference", "No RmStudyReference in evidence.", ["/evidence"])], chain: [e.uri] };
  if (u.length > 1)
    return { state: "not_established", reason: "Several study references; this binding has no composition for them.", bases: [ue("study-reference", "Ambiguous study references.", ["/evidence"])], chain: [e.uri] };
  const r = u[0], s = t(r);
  if (s === void 0) {
    const S = ue("study-reference", `Required study ${r} is unavailable.`, ["/evidence", r]);
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
  const a = s.document, o = ke(a), l = ke(i), y = ot(Ee(l.materialPropertiesList)[0]) ? Ee(Ee(l.materialPropertiesList)[0].results)[0] : void 0, g = Ee(l.materials)[0], f = [we("study-reference", `Cites study ${r}.`, ["/evidence", r])];
  f.push(o.id === l.id ? we("same-batch", `S concerns batch ${String(o.id)}.`, ["/credentialSubject/id"]) : je("same-batch", `S concerns ${String(o.id)}, not batch ${String(l.id)}.`, ["/credentialSubject/id"])), f.push(o.propertyIri === y?.propertyIri && o.matrixIri === g?.matrixIri ? we("same-property-and-matrix", "S concerns the certified property and matrix.", ["/credentialSubject/propertyIri"]) : je("same-property-and-matrix", "S concerns another property or matrix.", ["/credentialSubject/propertyIri"])), f.push(o.studyTypeIri === `${Ct}Homogeneity` && o.outcomeIri === `${Ct}Homogeneous` ? we("study-outcome", "S reports the batch homogeneous.", ["/credentialSubject/outcomeIri"]) : je("study-outcome", "S does not report a homogeneous batch.", ["/credentialSubject/outcomeIri"]));
  const m = Date.parse(String(o.activityTime)), w = Date.parse(String(l.activityTime));
  f.push(Number.isFinite(m) && Number.isFinite(w) ? m <= w ? we("study-precedes-certification", "The study precedes the certification activity.", ["/credentialSubject/activityTime"]) : je("study-precedes-certification", "The study postdates the certification activity.", ["/credentialSubject/activityTime"]) : ue("study-precedes-certification", "An activity time is missing.", ["/credentialSubject/activityTime"]));
  const _ = uh(s, t, n, [e.uri, r]);
  f.push(..._.bases);
  const b = Le(f.map((S) => S.state));
  return {
    state: b,
    reason: b === "established" ? "Required study is applicable and independently authorized." : b === "contradicted" ? "Required study is contradicted." : "Required study is not established.",
    bases: f,
    chain: [e.uri, ..._.chain]
  };
}
const ft = (e) => e !== null && typeof e == "object" && !Array.isArray(e), Gc = (e) => Array.isArray(e) ? e : [], Qo = (e) => Gc(e).filter((t) => typeof t == "string"), ae = (e) => String(e).split(/[#/]/).pop();
function fh(e, t, n) {
  const i = [t], u = ft(e.credentialSubject) ? e.credentialSubject : {}, r = Gc(u.materials).filter(ft);
  if (r.length !== 1) return { state: "not_established", reason: "The certificate must name exactly one material.", sources: ["/credentialSubject/materials"] };
  const s = r[0];
  if (!ft(n)) return { state: "not_established", reason: `No result at ${t}.`, sources: i };
  const a = ft(n.data) && ft(n.data.quantity) ? n.data.quantity : void 0;
  if (a === void 0) return { state: "not_established", reason: "The result has no quantity.", sources: i };
  const o = ft(a.unit) ? a.unit.ucumCode : void 0;
  if (typeof o != "string" || as[o] === void 0)
    return { state: "not_established", reason: `Unit ${String(o)} has no supported mapping (mg/kg, kg/kg).`, sources: [`${t}/data/quantity/unit`] };
  const l = ft(a.uncertainty) ? a.uncertainty : void 0, y = Hc(l?.coverageFactor);
  if (y === void 0 || mt(y, { n: 2n, scale: 0 }) !== 0)
    return { state: "not_established", reason: `Coverage factor ${String(l?.coverageFactor)} is not the binding's k = 2.`, sources: [`${t}/data/quantity/uncertainty`] };
  const g = Bt(a.value, o), f = Bt(l?.expandedUncertainty, o);
  if (g === void 0 || f === void 0)
    return { state: "not_established", reason: "Value or expanded uncertainty is not a supported decimal.", sources: [`${t}/data/quantity`] };
  const m = {
    matrixIri: s.matrixIri,
    formIri: s.formIri,
    propertyIri: n.propertyIri,
    methodIri: n.methodIri,
    quantityKindIri: a.quantityKind
  }, w = Object.entries(m).filter(([, _]) => typeof _ != "string").map(([_]) => _);
  return w.length > 0 ? { state: "not_established", reason: `Missing governed identifier: ${w.join(", ")}.`, sources: i } : {
    state: "established",
    reason: `Mapped ${ae(m.propertyIri)} by ${ae(m.methodIri)} in ${ae(m.matrixIri)}: ${String(a.value)} ± ${String(l?.expandedUncertainty)} ${o} (k = 2).`,
    sources: i,
    coordinates: { ...m, value: g, uncertainty: f }
  };
}
function ph(e, t, n, i) {
  if (t.includes(e)) return { state: "established", reason: `method ${ae(e)}` };
  const u = n.find((s) => s.method === e && t.includes(s.revises));
  if (u === void 0) return { state: "contradicted", reason: `method ${ae(e)} is not allowed` };
  const r = `${ae(u.revises)} → ${ae(e)}`;
  switch (i) {
    case "accept-successor":
      return { state: "established", reason: `method ${ae(e)} as accepted successor (${r})` };
    case "require-extension":
      return { state: "contradicted", reason: `method ${ae(e)} needs an explicit scope extension (${r})` };
    default:
      return { state: "not_established", reason: `no governed ${r} succession rule in the profile` };
  }
}
function hh(e, t, n, i) {
  if (t.length === 0) return { state: "not_established", reason: "The scope has no records.", sources: ["/credentialSubject/scope"] };
  const u = t.map((a) => {
    const o = String(a.id), l = Fi(a);
    if (typeof l == "string")
      return { id: o, state: /reversed/.test(l) ? "contradicted" : "not_established", reason: `${ae(o)}: ${l}` };
    const y = [];
    a.matrixIri !== e.matrixIri && y.push(`matrix ${ae(e.matrixIri)} ≠ ${ae(a.matrixIri)}`), a.formIri !== e.formIri && y.push(`form ${ae(e.formIri)} ≠ ${ae(a.formIri)}`), a.quantityKindIri !== e.quantityKindIri && y.push(`quantity kind ${ae(e.quantityKindIri)} ≠ ${ae(a.quantityKindIri)}`), Qo(a.allowedPropertyIris).includes(e.propertyIri) || y.push(`property ${ae(e.propertyIri)} is not allowed`), mt(e.value, l.low) < 0 && y.push("value is below the range"), mt(e.value, l.high) > 0 && y.push("value is above the range");
    const g = ph(e.methodIri, Qo(a.allowedMethodIris), n, i);
    if (y.length > 0 || g.state === "contradicted")
      return { id: o, state: "contradicted", reason: `${ae(o)}: ${[...y, ...g.state === "contradicted" ? [g.reason] : []].join("; ")}` };
    if (g.state === "not_established") return { id: o, state: "not_established", reason: `${ae(o)}: ${g.reason}` };
    const f = or(cr(l.low, "mg/kg")), m = or(cr(l.high, "mg/kg"));
    return {
      id: o,
      state: "established",
      reason: `${ae(o)} covers ${ae(e.propertyIri)}, ${g.reason}, ${ae(e.matrixIri)}/${ae(e.formIri)}, ${or(cr(e.value, "mg/kg"))} mg/kg within ${f}–${m} mg/kg`
    };
  }), r = oc(u.map((a) => a.state)), s = u.find((a) => a.state === "established");
  return {
    state: r,
    reason: s ? s.reason : `No single scope record covers the claim (${u.map((a) => a.reason).join(" | ")}).`,
    sources: ["/credentialSubject/scope"],
    ...s ? { record: s.id } : {}
  };
}
function cr(e, t) {
  const n = as[t];
  return n >= 0 ? { n: e.n, scale: e.scale + n } : e.scale + n >= 0 ? { n: e.n, scale: e.scale + n } : { n: e.n * 10n ** BigInt(-(e.scale + n)), scale: 0 };
}
function mh(e, t, n) {
  if (e.propertyIri !== t.propertyIri || e.quantityKindIri !== t.quantityKindIri)
    return { state: "not_established", reason: `Requirement ${t.id} does not apply to this claim's property and quantity kind.`, sources: [] };
  const i = Bt(t.upperLimit.value, t.upperLimit.unit);
  if (i === void 0) return { state: "not_established", reason: `Requirement ${t.id} has an unsupported limit.`, sources: [] };
  const u = t.upperLimit.unit, r = (g) => or(cr(g, u)), s = n.acceptWhen === "value-plus-expanded-uncertainty-at-most-limit", a = s ? th(e.value, e.uncertainty) : e.value, o = mt(a, i) <= 0, y = `${s ? `${r(e.value)} + ${r(e.uncertainty)} = ${r(a)}` : r(e.value)} ${o ? "≤" : ">"} ${r(i)} ${u}`;
  return {
    state: o ? "established" : "contradicted",
    reason: `${o ? "Conforms" : "Does not conform"} under ${n.id}: ${y}.`,
    sources: [],
    arithmetic: y
  };
}
const yh = /^\/credentialSubject\/materialPropertiesList\/(0|[1-9][0-9]*)\/results\/(0|[1-9][0-9]*)$/;
async function gh(e, t, n, i) {
  if (n.id !== gs || i.binding.id !== n.id || i.binding.version !== n.version)
    throw new Error(`Profile ${i.id}@${i.version} is not configured for ${gs}@${n.version}.`);
  const u = Wp(e, n, i);
  if (u !== void 0) return Object.freeze({ result: Xp(e, u), artifacts: Object.freeze([]) });
  const r = await Yp(e, t, n, i), { target: s, artifacts: a, facts: o, verificationOf: l, artifactVerification: y } = r, g = (j) => o.get(j), f = dh(o.get(e.targetId), g, i), m = lh(o.get(e.targetId), g, i), w = f.routes.find((j) => j.state === "established"), _ = o.get(e.targetId)?.document, b = (Array.isArray(n.scopeAndMapping.methodRevisions) ? n.scopeAndMapping.methodRevisions : []).filter((j) => typeof j?.method == "string" && typeof j?.revises == "string"), S = (j) => {
    const q = o.get(j)?.document?.credentialSubject;
    return Array.isArray(q?.scope) ? q.scope : [];
  }, v = e.selectedClaims.map((j) => {
    if (!(_ !== void 0 && yh.test(j.sourcePointer) && Jo(_, j.sourcePointer) !== void 0)) {
      const D = _ === void 0 ? "The target is not usable, so its claims are not read." : `Selected claim ${j.sourcePointer} is not a result in the usable target.`;
      return {
        claim: j,
        mapping: void 0,
        coverage: /* @__PURE__ */ new Map(),
        result: { claimId: j.id, routeWitnessIds: [], ...he("not_established", [D]) }
      };
    }
    const B = fh(_, j.sourcePointer, Jo(_, j.sourcePointer)), N = /* @__PURE__ */ new Map();
    if (B.coordinates === void 0)
      return { claim: j, mapping: B, coverage: N, result: {
        claimId: j.id,
        routeWitnessIds: [],
        ...he(B.state, [`Gate 4: ${B.reason}`], [j.sourcePointer])
      } };
    const H = B.coordinates, F = ch(f, (D) => {
      const U = hh(H, S(D.scope), b, i.mapping.methodSuccession), k = [D.scope, ...U.sources];
      return N.set(D.id, { ...U, sources: k }), { id: "claim-coverage", state: U.state, reason: U.reason, sources: k };
    }), J = F.routes.find((D) => D.state === "established"), T = J ? N.get(J.id)?.record : void 0;
    return { claim: j, mapping: B, coverage: N, result: {
      claimId: j.id,
      routeWitnessIds: F.state === "established" && J ? [`route:${J.id}`, ...J.chain, `record:${T}`] : [],
      ...he(F.state, [
        F.reason,
        ...J ? [N.get(J.id).reason] : [...N].map(([D, U]) => `${D}: ${U.reason}`)
      ], [j.sourcePointer])
    } };
  }), h = v.map((j) => j.result), c = [{
    obligationId: "rm-v1:required-study",
    witnessIds: m.state === "established" ? [...m.chain] : [],
    ...he(m.state, [m.reason], ["/evidence"])
  }], d = (() => {
    if (!e.conformity) return { requested: !1, execution: "not_run" };
    const j = { requested: !0, ...e.conformity }, q = i.conformity.requirements.find((J) => J.id === e.conformity.requirementId), B = i.conformity.decisionRules.find((J) => J.id === e.conformity.decisionRuleId);
    if (!q || !B)
      return { ...j, ...he("not_established", [`Requirement ${e.conformity.requirementId} or decision rule ${e.conformity.decisionRuleId} is not configured in the verifier profile.`]) };
    const N = v.filter((J) => J.mapping?.coordinates?.propertyIri === q.propertyIri && J.mapping.coordinates.quantityKindIri === q.quantityKindIri);
    if (N.length !== 1)
      return { ...j, ...he("not_established", [`Requirement ${q.id} must apply to exactly one selected claim; ${N.length} match.`]) };
    const H = N[0];
    if (H.result.state !== "established")
      return { ...j, ...qt(`Not evaluated: claim ${H.claim.id} is not authorized.`) };
    const F = mh(H.mapping.coordinates, q, B);
    return { ...j, ...he(F.state, [F.reason], [H.claim.sourcePointer]) };
  })(), p = /* @__PURE__ */ new Set([
    e.targetId,
    ...w?.chain ?? [],
    ...m.state === "established" ? m.chain : []
  ]), I = [
    ...a.filter((j) => p.has(j.artifactId)).flatMap(l).map((j) => j.state),
    ...h.map((j) => j.state),
    ...c.map((j) => j.state),
    ...d.requested ? [d.state] : []
  ], $ = Bd(I), E = [...r.trace], O = [...r.resources], P = kc(s.artifactId, s.digestSRI, "target", e);
  for (const { claim: j, mapping: q, coverage: B } of v) {
    q && E.push({
      gate: 4,
      nodeUse: P,
      predicate: `claim-mapping:${j.id}`,
      state: q.state,
      execution: "executed",
      reason: q.reason,
      sources: [...q.sources]
    });
    for (const [N, H] of B)
      E.push({
        gate: 5,
        nodeUse: P,
        predicate: `claim-coverage:${j.id}:${N}`,
        state: H.state,
        execution: "executed",
        reason: H.reason,
        sources: [...H.sources]
      });
  }
  for (const j of h)
    E.push({
      gate: 5,
      nodeUse: P,
      predicate: `claim-authorization:${j.claimId}`,
      state: j.state,
      execution: j.execution,
      reason: j.reasons.join(" "),
      sources: [...j.sourcePointers]
    });
  for (const j of f.restrictions)
    E.push({
      gate: 5,
      nodeUse: P,
      predicate: j.id,
      state: j.state,
      execution: "executed",
      reason: j.reason,
      sources: [...j.sources]
    });
  E.push({
    gate: 5,
    nodeUse: P,
    predicate: "authority",
    state: f.state,
    execution: "executed",
    reason: f.reason,
    sources: w ? [...w.chain] : []
  });
  for (const j of f.routes) {
    E.push(j.execution === "not_run" ? {
      gate: 5,
      nodeUse: P,
      predicate: `route:${j.id}`,
      state: "not_established",
      execution: "not_run",
      reason: "Not evaluated: the route budget was exhausted.",
      sources: []
    } : {
      gate: 5,
      nodeUse: P,
      predicate: `route:${j.id}`,
      state: j.state,
      execution: "executed",
      reason: `Route ${j.id} is ${j.state}.`,
      sources: [...j.chain]
    });
    for (const q of j.bases)
      E.push({
        gate: 5,
        nodeUse: P,
        predicate: `route:${j.id}:${q.id}`,
        state: q.state,
        execution: "executed",
        reason: q.reason,
        sources: [...q.sources]
      });
  }
  for (const j of m.bases)
    E.push({
      gate: 6,
      nodeUse: P,
      predicate: `support:${j.id}`,
      state: j.state,
      execution: "executed",
      reason: j.reason,
      sources: [...j.sources]
    });
  for (const j of c)
    E.push({
      gate: 6,
      nodeUse: P,
      predicate: j.obligationId,
      state: j.state,
      execution: j.execution,
      reason: j.reasons.join(" "),
      sources: []
    });
  d.requested && E.push({
    gate: 6,
    nodeUse: P,
    predicate: `conformity:${d.requirementId}`,
    state: d.state,
    execution: d.execution,
    reason: d.reasons.join(" "),
    sources: []
  });
  const M = sc({
    requestId: e.requestId,
    targetId: e.targetId,
    binding: e.binding,
    profile: e.profile,
    artifactVerification: y,
    authorization: h,
    support: c,
    conformity: d,
    decision: $,
    trace: E,
    resources: O,
    limitations: [
      "Verification failures of credentials outside the selected route and support chains are reported but do not decide the request."
    ]
  });
  return Object.freeze({ result: M, artifacts: Object.freeze(a) });
}
const Wo = {
  A: "https://nab.vc4qi.example/credentials/A",
  H: "https://nab.vc4qi.example/credentials/H",
  O: "https://producer.vc4qi.example/credentials/O",
  S: "https://lab.vc4qi.example/credentials/S"
}, vh = (e) => `https://producer.vc4qi.example/credentials/D${e}`, bh = "150", Bi = "2026-09-25T12:00:00Z", wh = { requirementId: "as-mass-fraction-max-200-mg-per-kg", decisionRuleId: "guarded-acceptance-expanded-u" }, _h = "/credentialSubject/materialPropertiesList/0/results/0", Vt = Ad(gr.manifest), Ft = zd(gr.profile), Sh = (e) => (e.nodeUse.split("|")[0] ?? "").trim(), We = (e) => e.length === 0 ? "not_established" : Le(e.map((t) => t.state)), Xo = (e, t) => e.find((n) => n.state === t);
async function Ph(e) {
  const t = vh(e.x), n = { ...Wo, D: t }, i = {}, u = gr.files.filter(($) => !(e.withholdStudy && $.uri === Wo.S)).map(($) => {
    let E = $.text;
    e.tamper && $.uri === t && (E = E.replace(`"value": "${e.x}"`, `"value": "${bh}"`));
    const O = new TextEncoder().encode(E);
    return {
      uri: $.uri,
      mediaType: $.mediaType,
      origin: $.origin,
      version: $.version,
      bytes: O,
      digestSRI: E === $.text ? $.digestSRI : vr(O)
    };
  });
  for (const $ of Object.keys(n)) {
    const E = u.find((O) => O.uri === n[$]);
    E && (i[$] = new TextDecoder().decode(E.bytes));
  }
  const r = Vd({
    requestId: `urn:vc4qi:demonstrator:${e.x}`,
    targetId: t,
    selectedClaims: [{ id: "as", sourcePointer: _h }],
    purpose: "use-as-calibrant",
    binding: { id: Vt.id, version: Vt.version },
    profile: { id: Ft.id, version: Ft.version },
    trustConfigId: "https://vc4qi.example/trust/fixture-nab-anchor",
    evaluationTime: Bi,
    activityTime: Bi,
    suppliedEvidence: [],
    resolverLimits: { maxResources: 64, maxDepth: 4, maxBytes: 5e6 },
    ...e.askFitForUse ? { conformity: wh } : {}
  }), { result: s } = await gh(r, new Rd(u), Vt, Ft), a = ($, E = () => !0) => s.trace.filter((O) => O.gate === $ && E(O)), o = [...a(1)], l = a(2), y = [...l, ...o], g = a(3), f = [...a(0), ...a(4)], m = s.authorization[0], w = a(5, ($) => $.predicate.startsWith("claim-") || $.predicate.startsWith("restriction:") || $.predicate.startsWith("route:")), _ = s.support[0], b = a(6, ($) => $.predicate.startsWith("support:") || $.predicate === "rm-v1:required-study"), S = a(6, ($) => $.predicate.startsWith("conformity:")), v = ($, E, O) => E === "established" ? O : (Xo($, E) ?? Xo($, "not_established"))?.reason ?? "Not evaluated.", h = [
    {
      id: "authentic",
      state: We(y),
      details: y,
      summary: v(y, We(y), "Every credential is signed by its issuer's own key, and every reference matches the exact bytes.")
    },
    {
      id: "current",
      state: We(g),
      details: g,
      summary: v(g, We(g), "Every credential is within its validity period and not revoked.")
    },
    // "Understood" includes reading the claim itself (gate 4); a claim that was never
    // read, because its credential failed a lower gate, is not understood.
    a(4).length === 0 ? {
      id: "understood",
      state: We(a(0)) === "contradicted" ? "contradicted" : "not_established",
      details: f,
      summary: v(a(0), We(a(0)), "The claim was not read, because its credential did not pass the earlier checks.")
    } : {
      id: "understood",
      state: We(f),
      details: f,
      summary: v(f, We(f), a(4)[0].reason)
    },
    {
      id: "authorized",
      state: m.state,
      details: w,
      summary: m.reasons.join(" ")
    },
    {
      id: "supported",
      state: _?.state ?? "not_established",
      details: b,
      summary: _?.reasons.join(" ") ?? "No support was evaluated."
    },
    s.conformity.requested ? {
      id: "fit",
      state: s.conformity.execution === "not_run" ? "not_asked" : s.conformity.state,
      details: S,
      summary: s.conformity.reasons.join(" ")
    } : { id: "fit", state: "not_asked", details: [], summary: "The verifier asked only whether the value is authorized; no limit was applied." }
  ], c = {}, d = {};
  for (const $ of Object.keys(n)) {
    i[$] && (c[$] = JSON.parse(i[$]));
    const E = l.filter((O) => Sh(O) === n[$]);
    d[$] = E.length ? We(E) : "not_established";
  }
  const I = c.D.credentialSubject.materialPropertiesList[0].results[0].data.quantity;
  return {
    options: e,
    result: s,
    questions: h,
    documents: c,
    texts: i,
    protection: d,
    values: { x: I.value, U: I.uncertainty.expandedUncertainty }
  };
}
const Dh = {
  binding: `${Vt.id}@${Vt.version}`,
  profile: `${Ft.id}@${Ft.version}`,
  resources: gr.files.length,
  evaluationTime: Bi
};
export {
  wh as CONFORMITY,
  Bi as EVALUATION_TIME,
  bh as TAMPERED_VALUE,
  Wo as URI,
  Dh as buildInfo,
  vh as certificateUri,
  Ph as evaluateScenario
};
