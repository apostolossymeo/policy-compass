export interface DocumentSection {
  id: string;
  title: string;
  plainTitle: string;
  whyItMatters: string;
  commission: { text: string; highlights: string[] };
  lobbyist: { text: string; highlights: string[] };
  finalLaw: { text: string; highlights: string[] };
  omnibus: { text: string; highlights: string[] };
  similarityLobbyistFinal: number;
}

export const sections: DocumentSection[] = [
  {
    id: "scope",
    title: "Company Size Thresholds",
    plainTitle: "Which companies must follow this law?",
    whyItMatters: "The bigger the threshold, the fewer companies have to check their supply chains for human rights and environmental problems. This directly affects how many workers and communities are protected.",
    commission: {
      text: `This Directive applies to companies which had more than 500 employees on average and had a net worldwide turnover of more than EUR 150 million. For high-impact sectors (textiles, agriculture, mining), lower thresholds apply: 250 employees and EUR 40 million turnover.`,
      highlights: [
        "500 employees",
        "EUR 150 million",
        "250 employees",
        "EUR 40 million",
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
      text: `This Directive shall apply to companies which had more than 1,000 employees on average and had a net worldwide turnover of more than EUR 450 million in the last financial year. The high-impact sector differentiation has been removed.`,
      highlights: [
        "1,000 employees",
        "EUR 450 million",
        "high-impact sector differentiation has been removed",
      ],
    },
    omnibus: {
      text: `The scope and thresholds remain as in the adopted Directive (1,000 employees / EUR 450 million). The Omnibus proposal focuses on simplifying due diligence processes and reducing reporting burden rather than changing which companies are covered.`,
      highlights: [
        "1,000 employees",
        "EUR 450 million",
        "simplifying",
        "reducing reporting burden",
      ],
    },
    similarityLobbyistFinal: 94,
  },
  {
    id: "supply-chain",
    title: "Supply Chain Scope",
    plainTitle: "How far must companies look into their supply chain?",
    whyItMatters: "If companies only need to check their direct suppliers, problems deeper in the supply chain (like child labour in mines or deforestation) can go unchecked.",
    commission: {
      text: `Companies shall identify and assess actual and potential adverse human rights and environmental impacts in their own operations, those of their subsidiaries, and throughout their entire value chain — covering both upstream and downstream, including established and non-established business relationships.`,
      highlights: [
        "entire value chain",
        "established and non-established business relationships",
        "upstream and downstream",
      ],
    },
    lobbyist: {
      text: `Companies should focus due diligence on direct suppliers and established business relationships only. Extending obligations to the entire value chain is disproportionate and would create unmanageable compliance burdens. We recommend limiting scope to tier-1 suppliers and established business relationships.`,
      highlights: [
        "direct suppliers",
        "established business relationships only",
        "limiting scope",
      ],
    },
    finalLaw: {
      text: `Companies shall carry out risk-based human rights and environmental due diligence by identifying and assessing actual and potential adverse impacts in their own operations and those of their subsidiaries, and those carried out by their business partners in their chains of activities.`,
      highlights: [
        "chains of activities",
        "risk-based",
        "business partners",
      ],
    },
    omnibus: {
      text: `In-depth assessment is limited to own operations, subsidiaries, and direct business partners. For indirect business partners, companies only need to act when they have "plausible information" suggesting adverse impacts. Companies shall not seek information from business partners with fewer than 500 employees beyond voluntary reporting standards.`,
      highlights: [
        "direct business partners",
        "plausible information",
        "fewer than 500 employees",
        "voluntary reporting standards",
      ],
    },
    similarityLobbyistFinal: 82,
  },
  {
    id: "climate",
    title: "Climate Transition Plans",
    plainTitle: "Must companies have a climate plan?",
    whyItMatters: "Mandatory climate plans with targets push companies to actually reduce emissions. Voluntary plans often stay on paper.",
    commission: {
      text: `Member States shall ensure that companies adopt a plan to ensure that the business model and strategy of the company are compatible with the transition to a sustainable economy and with the limiting of global warming to 1.5°C in line with the Paris Agreement. This plan shall include time-bound targets and implementation actions.`,
      highlights: [
        "compatible with the transition to a sustainable economy",
        "1.5°C",
        "time-bound targets",
      ],
    },
    lobbyist: {
      text: `Climate transition plans should remain voluntary and non-binding to preserve corporate flexibility. Mandatory alignment with 1.5°C targets imposes prescriptive requirements that may conflict with fiduciary duties. We recommend best-effort climate strategies without binding emission reduction targets.`,
      highlights: [
        "voluntary and non-binding",
        "without binding emission reduction targets",
      ],
    },
    finalLaw: {
      text: `Companies shall adopt a transition plan for climate change mitigation which aims to ensure, through best efforts, that the business model and strategy are compatible with the transition to a sustainable economy and the Paris Agreement goal of limiting global warming to 1.5°C.`,
      highlights: [
        "through best efforts",
        "compatible with the transition",
        "1.5°C",
      ],
    },
    omnibus: {
      text: `Companies shall adopt a transition plan for climate change mitigation, including implementing actions, which aim to ensure, through best efforts, compatibility with the transition to a sustainable economy and with limiting global warming to 1.5°C in line with the Paris Agreement. Monitoring assessments shall be carried out at least every 5 years instead of every 12 months.`,
      highlights: [
        "through best efforts",
        "every 5 years",
        "1.5°C",
      ],
    },
    similarityLobbyistFinal: 74,
  },
  {
    id: "liability",
    title: "Civil Liability",
    plainTitle: "Can companies be sued for harm in their supply chain?",
    whyItMatters: "If victims of human rights abuses can sue companies in EU courts, it creates real accountability. Without this, the law has no teeth.",
    commission: {
      text: `Member States shall ensure that companies are liable for damages if they failed to comply with the obligations to prevent and mitigate potential adverse impacts or to bring actual impacts to an end, and as a result an adverse impact occurred and led to damage. Companies should be liable regarding damages at the level of established indirect business relationships.`,
      highlights: [
        "liable for damages",
        "failed to comply",
        "indirect business relationships",
      ],
    },
    lobbyist: {
      text: `Civil liability provisions should be removed entirely or limited to direct operations only. Liability for harms in indirect supply chain relationships creates unacceptable legal uncertainty and litigation risk. Safe harbour provisions must protect companies that conduct due diligence in good faith.`,
      highlights: [
        "removed entirely",
        "limited to direct operations only",
        "safe harbour",
      ],
    },
    finalLaw: {
      text: `Where a company is held liable for damage caused to a natural or legal person by a failure to comply with the due diligence requirements, those persons shall have a right to full compensation. Companies that participated in industry initiatives or used third-party verification may nevertheless be held liable.`,
      highlights: [
        "right to full compensation",
        "may nevertheless be held liable",
      ],
    },
    omnibus: {
      text: `The directors' duty of care provision (Article 25) is deleted. Liability is maintained but the provision on overriding mandatory application in third-country cases (Article 29(7)) is removed. Industry initiatives and third-party verification do not exempt companies from liability but may be considered.`,
      highlights: [
        "directors' duty of care",
        "deleted",
        "overriding mandatory application",
        "removed",
      ],
    },
    similarityLobbyistFinal: 61,
  },
];

export const navItems = sections.map((s) => ({
  id: s.id,
  title: s.title,
  plainTitle: s.plainTitle,
}));
