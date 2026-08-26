import { 
  mockStats, 
  mockResearchResults, 
  mockCitationHealth, 
  mockArguments, 
  mockGraph, 
  mockCaseDetails 
} from './mockData';

/**
 * Mock API Client for Nyaya Intelligence (Standalone Frontend Mode)
 * Simulates network latency for an immersive UX without needing a backend.
 */
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const api = {
  // --- RESEARCH & DEMO ---
  research: async (query, options = {}) => {
    await delay(2500); // Simulate AI retrieval
    return {
      research_id: 'mock-' + Date.now(),
      query_analysis: {
        facts: ['Contract termination', 'Arbitration clause survival'],
        legal_issues: ['Separability of arbitration agreement', 'Tribunal jurisdiction'],
        statutory_concepts: ['Section 16 - Arbitration Act 1996'],
        research_objective: query,
        propositions: ['An arbitration agreement can survive termination of the underlying contract.'],
        expanded_terms: ['separability', 'kompetenz-kompetenz', 'survival']
      },
      results: mockResearchResults,
      summary: "Based on the prototype corpus, Indian jurisprudence recognizes the doctrine of separability. The Supreme Court in SMS Tea Estates established that an arbitration agreement is independent and survives termination. However, Garware Wall Ropes and N.N. Global introduce nuances regarding the enforceability of the clause if the underlying contract is unstamped.",
      metadata: { time_taken: 2.5, search_mode: 'hybrid', results_count: mockResearchResults.length }
    };
  },

  getDemos: async () => {
    return [
      { id: 'demo_1', title: 'Arbitration Separability', query: 'Does termination of a contract necessarily terminate the arbitration agreement contained in it?', description: 'Separability doctrine' },
      { id: 'demo_2', title: 'Electronic Evidence', query: 'Can electronic communications support the existence of a contractual relationship where there is no formal written agreement?', description: 'Electronic evidence and contracts' }
    ];
  },

  runDemo: async (demoId) => {
    const demos = await api.getDemos();
    const demo = demos.find(d => d.id === demoId);
    return api.research(demo ? demo.query : "demo query");
  },

  // --- CITATION HEALTH ---
  checkCitations: async (text) => {
    await delay(1500);
    return {
      text,
      verification_status: 'COMPLETED',
      matches: Object.values(mockCitationHealth)
    };
  },

  checkCitation: async (caseId) => {
    await delay(800);
    return mockCitationHealth[caseId] || mockCitationHealth["SC_ARB_001"];
  },

  // --- ARGUMENTS ---
  buildArgument: async (query, selectedCases) => {
    await delay(3500); // Simulate Gemini LLM synthesis
    return { argument_text: mockArguments.synthesis }; // Adapt to old UI if needed, or pass full object
  },

  exportArgument: async (data) => {
    await delay(500);
    return { markdown: '# Export\n' + JSON.stringify(data, null, 2) };
  },

  // --- AUTHORITY MAP ---
  getFullGraph: async () => {
    await delay(1500);
    return mockGraph;
  },

  getSubgraph: async (caseId, hops = 1) => {
    await delay(1000);
    return mockGraph; 
  },

  getCitationGraph: async (caseId) => {
    await delay(1000);
    return mockGraph; 
  },

  // --- CORPUS & EVIDENCE ---
  getCorpusStatus: async () => {
    await delay(500);
    return {
      total_cases: mockStats.total_cases,
      total_paragraphs: mockStats.total_paragraphs,
      total_citations: mockStats.total_citations,
      total_statutes: 3,
      corpus_name: 'Nyaya Intelligence (Standalone Mode)',
      domains: ['Arbitration Law', 'Evidence and Contracts', 'Fundamental Rights'],
      last_updated: mockStats.last_updated,
      index_status: 'Local Mock Data'
    };
  },

  getCase: async (caseId) => {
    await delay(800);
    const caseData = mockCaseDetails[caseId] || mockCaseDetails["SC_ARB_001"];
    const { paragraphs, ...meta } = caseData;
    return meta;
  },

  getCaseParagraphs: async (caseId) => {
    await delay(800);
    const caseData = mockCaseDetails[caseId] || mockCaseDetails["SC_ARB_001"];
    return caseData.paragraphs;
  }
};
