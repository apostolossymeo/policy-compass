import { useState } from "react";
import { sections } from "@/data/csdddSampleData";
import DocumentPanel from "./DocumentPanel";
import SimilarityBadge from "./SimilarityBadge";
import { Info, TrendingUp, AlertTriangle, Check } from "lucide-react";

interface ComparisonViewProps {
  activeId: string;
}

const ComparisonView = ({ activeId }: ComparisonViewProps) => {
  const section = sections.find((s) => s.id === activeId) ?? sections[0];
  const [showExplainer, setShowExplainer] = useState(true);

  const score = section.similarityLobbyistFinal;
  const verdict =
    score >= 80
      ? { icon: AlertTriangle, text: "High industry influence detected", color: "text-red-600 bg-red-50 border-red-200" }
      : score >= 60
      ? { icon: TrendingUp, text: "Moderate industry influence", color: "text-amber-600 bg-amber-50 border-amber-200" }
      : { icon: Check, text: "Low industry influence", color: "text-emerald-600 bg-emerald-50 border-emerald-200" };

  const VerdictIcon = verdict.icon;

  return (
    <div className="flex-1 flex flex-col p-5 gap-4 overflow-hidden min-w-0">
      {/* Top bar */}
      <div className="animate-fade-in-up" style={{ animationDelay: "120ms" }}>
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-foreground leading-tight">{section.plainTitle}</h2>
            <p className="text-sm text-muted-foreground mt-1">{section.title}</p>
          </div>
          <div className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-medium shrink-0 ${verdict.color}`}>
            <VerdictIcon className="w-4 h-4" />
            <span>{verdict.text}</span>
            <span className="font-bold tabular-nums">{score}%</span>
          </div>
        </div>

        {showExplainer && (
          <div className="mt-3 bg-eu-blue-light rounded-lg p-3 flex items-start gap-2.5 border border-primary/10">
            <Info className="w-4 h-4 text-primary mt-0.5 shrink-0" />
            <p className="text-xs text-foreground/80 leading-relaxed flex-1">
              <strong>Why it matters:</strong> {section.whyItMatters}
            </p>
            <button
              onClick={() => setShowExplainer(false)}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors shrink-0"
            >
              ✕
            </button>
          </div>
        )}
      </div>

      {/* Four panels in a 2×2 grid */}
      <div className="flex-1 grid grid-cols-2 gap-3 min-h-0 overflow-hidden">
        <DocumentPanel
          title="Original Proposal"
          subtitle="European Commission — Feb 2022"
          text={section.commission.text}
          highlights={section.commission.highlights}
          colorClass="bg-primary"
          delay="180ms"
        />
        <DocumentPanel
          title="Industry Position"
          subtitle="BusinessEurope Lobbying Paper"
          text={section.lobbyist.text}
          highlights={section.lobbyist.highlights}
          colorClass="bg-amber-500"
          delay="240ms"
        />
        <DocumentPanel
          title="Final Adopted Law"
          subtitle="Directive 2024/1760 — Jul 2024"
          text={section.finalLaw.text}
          highlights={section.finalLaw.highlights}
          colorClass="bg-emerald-500"
          delay="300ms"
        />
        <DocumentPanel
          title="Omnibus Rollback"
          subtitle="COM/2025/81 — Feb 2025"
          text={section.omnibus.text}
          highlights={section.omnibus.highlights}
          colorClass="bg-red-500"
          delay="360ms"
        />
      </div>

      {/* Legend */}
      <div className="flex items-center gap-5 text-[11px] text-muted-foreground pt-1 animate-fade-in" style={{ animationDelay: "500ms" }}>
        <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-primary" /> Commission original</span>
        <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-amber-500" /> Industry lobby</span>
        <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-500" /> Final adopted law</span>
        <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-red-500" /> 2025 rollback proposal</span>
        <span className="ml-auto">Source: EUR-Lex, EU Transparency Register</span>
      </div>
    </div>
  );
};

export default ComparisonView;
