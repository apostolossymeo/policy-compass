import { sections } from "@/data/csdddSampleData";
import DocumentPanel from "./DocumentPanel";
import SimilarityBadge from "./SimilarityBadge";

interface ComparisonViewProps {
  activeId: string;
}

const ComparisonView = ({ activeId }: ComparisonViewProps) => {
  const section = sections.find((s) => s.id === activeId) ?? sections[0];

  return (
    <div className="flex-1 flex flex-col p-6 gap-4 overflow-hidden">
      <div className="animate-fade-in-up" style={{ animationDelay: "150ms" }}>
        <h2 className="text-lg font-semibold text-foreground">{section.title}</h2>
        <p className="text-xs text-muted-foreground mt-1 font-sans">
          Comparing Commission draft → Lobbyist position → Final adopted text
        </p>
      </div>

      <div className="flex-1 flex items-stretch gap-3 min-h-0">
        <DocumentPanel
          title="Commission Draft"
          subtitle="COM/2022/71 — Feb 2022"
          text={section.commission.text}
          highlights={section.commission.highlights}
          accentColor="bg-blue-400"
          delay="200ms"
        />

        <div className="flex flex-col items-center justify-center gap-6 shrink-0 py-8">
          <SimilarityBadge score={section.similarityCommissionFinal} label="Draft → Final" />
          <div className="w-px flex-1 bg-border" />
          <SimilarityBadge score={section.similarityLobbyistFinal} label="Lobby → Final" />
        </div>

        <DocumentPanel
          title="Lobbyist Position"
          subtitle="BusinessEurope — Oct 2022"
          text={section.lobbyist.text}
          highlights={section.lobbyist.highlights}
          accentColor="bg-primary"
          delay="300ms"
        />

        <div className="flex flex-col items-center justify-center gap-6 shrink-0 py-8">
          <SimilarityBadge score={section.similarityLobbyistFinal} label="Lobby → Final" />
          <div className="w-px flex-1 bg-border" />
          <SimilarityBadge score={section.similarityCommissionFinal} label="Draft → Final" />
        </div>

        <DocumentPanel
          title="Final Adopted Law"
          subtitle="Directive 2024/1760 — Jul 2024"
          text={section.finalLaw.text}
          highlights={section.finalLaw.highlights}
          accentColor="bg-emerald-400"
          delay="400ms"
        />
      </div>
    </div>
  );
};

export default ComparisonView;
