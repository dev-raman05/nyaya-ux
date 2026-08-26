export const mockStats = {
  total_cases: 31,
  total_citations: 142,
  total_paragraphs: 850,
  last_updated: "2024-05-01"
};

export const mockResearchResults = [
  {
    case_id: "SC_ARB_001",
    case_name: "SMS Tea Estates Pvt. Ltd. v. Chandmari Tea Co. Pvt. Ltd.",
    court: "Supreme Court of India",
    citation: "(2011) 14 SCC 66",
    date: "2011-07-20",
    source_url: "https://indiankanoon.org/doc/1718047/",
    relevance_score: 0.92,
    passages: [
      {
        paragraph_id: "SC_ARB_001_p12",
        text: "The arbitration agreement is an independent agreement between the parties... even if the main agreement is terminated, the arbitration agreement will survive for resolution of disputes arising under or in connection with the main agreement.",
        score: 0.95
      }
    ],
    ranking_breakdown: {
      hybrid_score: 0.92,
      bm25_score: 0.88,
      vector_score: 0.95,
      citation_boost: 0.05
    }
  },
  {
    case_id: "SC_ARB_002",
    case_name: "Garware Wall Ropes Ltd. v. Coastal Marine Constructions",
    court: "Supreme Court of India",
    citation: "(2019) 9 SCC 209",
    date: "2019-04-10",
    source_url: "https://indiankanoon.org/doc/1234567/",
    relevance_score: 0.85,
    passages: [
      {
        paragraph_id: "SC_ARB_002_p22",
        text: "While the arbitration clause constitutes a separate agreement, if the underlying contract is unstamped, the arbitration clause cannot be acted upon until the defect is cured.",
        score: 0.89
      }
    ],
    ranking_breakdown: {
      hybrid_score: 0.85,
      bm25_score: 0.80,
      vector_score: 0.87,
      citation_boost: 0.03
    }
  },
  {
    case_id: "SC_ARB_003",
    case_name: "N.N. Global Mercantile Pvt. Ltd. v. Indo Unique Flame",
    court: "Supreme Court of India",
    citation: "(2021) 4 SCC 379",
    date: "2021-01-11",
    source_url: "https://indiankanoon.org/doc/7654321/",
    relevance_score: 0.78,
    passages: [
      {
        paragraph_id: "SC_ARB_003_p55",
        text: "We overrule the decision in SMS Tea Estates to the extent it holds that an arbitration agreement in an unstamped document is non-existent in law.",
        score: 0.82
      }
    ],
    ranking_breakdown: {
      hybrid_score: 0.78,
      bm25_score: 0.71,
      vector_score: 0.82,
      citation_boost: 0.04
    }
  }
];

export const mockCitationHealth = {
  "SC_ARB_001": {
    case_id: "SC_ARB_001",
    case_name: "SMS Tea Estates Pvt. Ltd. v. Chandmari Tea Co. Pvt. Ltd.",
    citation: "(2011) 14 SCC 66",
    status: "Overruled in Part",
    health_score: 45,
    flags: [
      { type: "danger", description: "Overruled by N.N. Global on the issue of unstamped arbitration agreements." },
      { type: "warning", description: "Distinguished by Garware Wall Ropes regarding enforcement." }
    ],
    summary: "This case established the separability of arbitration agreements. However, its ruling that unstamped agreements invalidate the arbitration clause was subsequently overruled by a larger bench in N.N. Global.",
    recent_treatments: [
      { citing_case: "N.N. Global Mercantile", date: "2021-01-11", treatment: "Overruled in Part" },
      { citing_case: "Garware Wall Ropes", date: "2019-04-10", treatment: "Distinguished" }
    ]
  },
  "SC_ARB_002": {
    case_id: "SC_ARB_002",
    case_name: "Garware Wall Ropes Ltd. v. Coastal Marine",
    citation: "(2019) 9 SCC 209",
    status: "Good Law",
    health_score: 85,
    flags: [{ type: "success", description: "Consistently followed in recent judgments." }],
    summary: "Remains good law regarding the procedural requirements of stamping before appointment of an arbitrator.",
    recent_treatments: []
  },
  "SC_ARB_003": {
    case_id: "SC_ARB_003",
    case_name: "N.N. Global Mercantile",
    citation: "(2021) 4 SCC 379",
    status: "Good Law",
    health_score: 95,
    flags: [{ type: "success", description: "Landmark constitution bench judgment. Highly cited." }],
    summary: "The current leading authority on the doctrine of separability and stamping of arbitration agreements.",
    recent_treatments: []
  }
};

export const mockArguments = {
  query: "Does an arbitration clause survive if the underlying contract is terminated?",
  synthesis: "Under Indian arbitration jurisprudence, the doctrine of separability is well-established. An arbitration clause is treated as an independent contract. Therefore, the termination, breach, or invalidity of the main contract does not automatically terminate the arbitration clause, allowing the arbitral tribunal to determine the validity of the termination itself. However, statutory defects like non-payment of stamp duty may pose procedural bars to enforcement, though they do not render the clause non-existent.",
  supporting_cases: [
    {
      case_name: "SMS Tea Estates Pvt. Ltd.",
      citation: "(2011) 14 SCC 66",
      relevance: "Establishes that the arbitration agreement is independent and survives termination.",
      snippet: "even if the main agreement is terminated, the arbitration agreement will survive for resolution of disputes arising under or in connection with the main agreement."
    },
    {
      case_name: "N.N. Global Mercantile",
      citation: "(2021) 4 SCC 379",
      relevance: "Reaffirms the doctrine of separability even in cases of underlying contractual defects.",
      snippet: "The arbitration agreement is a distinct and separate agreement... it survives the substantive contract."
    }
  ],
  challenging_cases: [
    {
      case_name: "Garware Wall Ropes Ltd.",
      citation: "(2019) 9 SCC 209",
      relevance: "Provides a procedural challenge: if the underlying contract is fatally defective (e.g., unstamped), the arbitration clause cannot be acted upon until cured.",
      snippet: "the arbitration clause cannot be acted upon until the defect is cured."
    }
  ]
};

export const mockGraph = {
  nodes: [
    { id: "SC_ARB_001", label: "SMS Tea Estates", group: "Supreme Court", value: 15, url: "https://indiankanoon.org/doc/1718047/" },
    { id: "SC_ARB_002", label: "Garware Wall Ropes", group: "Supreme Court", value: 10, url: "https://indiankanoon.org/doc/1234567/" },
    { id: "SC_ARB_003", label: "N.N. Global", group: "Supreme Court", value: 25, url: "https://indiankanoon.org/doc/7654321/" },
    { id: "SC_ARB_004", label: "Vidya Drolia", group: "Supreme Court", value: 20, url: "#" },
    { id: "SC_ARB_005", label: "Bharat Aluminium (BALCO)", group: "Supreme Court", value: 30, url: "#" },
  ],
  links: [
    { source: "SC_ARB_002", target: "SC_ARB_001", type: "distinguishes", value: 2 },
    { source: "SC_ARB_003", target: "SC_ARB_001", type: "overrules", value: 3 },
    { source: "SC_ARB_003", target: "SC_ARB_002", type: "cites", value: 1 },
    { source: "SC_ARB_004", target: "SC_ARB_001", type: "cites", value: 1 },
    { source: "SC_ARB_004", target: "SC_ARB_005", type: "follows", value: 2 },
  ]
};

export const mockCaseDetails = {
  "SC_ARB_001": {
    case_id: "SC_ARB_001",
    case_name: "SMS Tea Estates Pvt. Ltd. v. Chandmari Tea Co. Pvt. Ltd.",
    court: "Supreme Court of India",
    citation: "(2011) 14 SCC 66",
    date: "2011-07-20",
    paragraphs: [
      { id: "SC_ARB_001_p11", text: "11. The appellant contended that the arbitration agreement is separate from the lease deed." },
      { id: "SC_ARB_001_p12", text: "12. The arbitration agreement is an independent agreement between the parties. Therefore, even if the main agreement is terminated, the arbitration agreement will survive for resolution of disputes arising under or in connection with the main agreement." },
      { id: "SC_ARB_001_p13", text: "13. However, where the applicable Stamp Act requires the document to be stamped, and it is not stamped, the court cannot act upon the arbitration agreement." }
    ]
  }
};
