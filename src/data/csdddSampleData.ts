export interface DocumentSection {
  id: string;
  title: string;
  commission: { text: string; highlights: string[] };
  lobbyist: { text: string; highlights: string[] };
  finalLaw: { text: string; highlights: string[] };
  similarityCommissionFinal: number;
  similarityLobbyistFinal: number;
}

export const sections: DocumentSection[] = [
  {
    id: "article-3",
    title: "Article 3: Supply Chain Due Diligence",
    commission: {
      text: `Companies shall identify and assess actual and potential adverse human rights and environmental impacts in their own operations, those of their subsidiaries, and throughout their value chains. The due diligence process shall cover the entire upstream and downstream value chain, including established and non-established business relationships.`,
      highlights: [
        "entire upstream and downstream value chain",
        "established and non-established business relationships",
      ],
    },
    lobbyist: {
      text: `Companies should focus due diligence on direct suppliers and established business relationships only. Extending obligations to the entire value chain is disproportionate and would create unmanageable compliance burdens, particularly for SMEs. We recommend limiting scope to established business relationships and tier-1 suppliers.`,
      highlights: [
        "established business relationships",
        "limiting scope to established business relationships",
      ],
    },
    finalLaw: {
      text: `Companies shall carry out risk-based human rights and environmental due diligence by identifying and assessing actual and potential adverse impacts in their own operations and those of their subsidiaries, and those carried out by their business partners in their chains of activities.`,
      highlights: [
        "business partners in their chains of activities",
        "risk-based",
      ],
    },
    similarityCommissionFinal: 72,
    similarityLobbyistFinal: 88,
  },
  {
    id: "article-15",
    title: "Article 15: Climate Transition Plans",
    commission: {
      text: `Member States shall ensure that companies adopt a plan to ensure that the business model and strategy of the company are compatible with the transition to a sustainable economy and with the limiting of global warming to 1.5°C in line with the Paris Agreement. This plan shall include time-bound targets and implementation actions.`,
      highlights: [
        "compatible with the transition to a sustainable economy",
        "1.5°C in line with the Paris Agreement",
        "time-bound targets",
      ],
    },
    lobbyist: {
      text: `Climate transition plans should remain voluntary and non-binding to preserve corporate flexibility. Mandatory alignment with 1.5°C targets imposes prescriptive requirements that may conflict with fiduciary duties. We recommend best-effort climate strategies without binding emission reduction targets or timelines.`,
      highlights: [
        "voluntary and non-binding",
        "without binding emission reduction targets",
      ],
    },
    finalLaw: {
      text: `Companies shall adopt a transition plan for climate change mitigation which aims to ensure, through best efforts, that the business model and strategy are compatible with the transition to a sustainable economy and the Paris Agreement goal of limiting global warming to 1.5°C.`,
      highlights: [
        "through best efforts",
        "compatible with the transition to a sustainable economy",
        "Paris Agreement",
      ],
    },
    similarityCommissionFinal: 81,
    similarityLobbyistFinal: 74,
  },
  {
    id: "thresholds",
    title: "Thresholds & Scope",
    commission: {
      text: `This Directive applies to companies which are formed in accordance with the legislation of a Member State and which had more than 500 employees on average and had a net worldwide turnover of more than EUR 150 million in the last financial year. For high-impact sectors, the thresholds are 250 employees and EUR 40 million turnover.`,
      highlights: [
        "500 employees",
        "EUR 150 million",
        "250 employees and EUR 40 million",
      ],
    },
    lobbyist: {
      text: `The proposed thresholds are far too low and would capture thousands of mid-sized companies that lack the resources for comprehensive due diligence. We strongly recommend raising the threshold to 1,000 employees and EUR 450 million in turnover, and eliminating the lower threshold for "high-impact sectors" entirely.`,
      highlights: [
        "1,000 employees",
        "EUR 450 million",
        "eliminating the lower threshold",
      ],
    },
    finalLaw: {
      text: `This Directive shall apply to companies which had more than 1,000 employees on average and had a net worldwide turnover of more than EUR 450 million in the last financial year for which annual financial statements have been or should have been adopted. The high-impact sector differentiation has been removed.`,
      highlights: [
        "1,000 employees",
        "EUR 450 million",
        "high-impact sector differentiation has been removed",
      ],
    },
    similarityCommissionFinal: 45,
    similarityLobbyistFinal: 94,
  },
];

export const navItems = sections.map((s) => ({ id: s.id, title: s.title }));
