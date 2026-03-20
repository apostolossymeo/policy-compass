import { useSectionDocuments } from "@/hooks/useLaws";
import DocumentPanel from "./DocumentPanel";
import { Info, TrendingUp, AlertTriangle, Check } from "lucide-react";
import { useState } from "react";

interface SectionMeta {
  id: string;
  title: string;
  plain_title: string;
  why_it_matters: string | null;
  similarity_lobbyist_final: number | null;
}

interface ComparisonViewProps {
  activeId: string;
  sectionMeta?: SectionMeta;
}

const sourceColorMap: Record<string, string> = {
  commission: "bg-primary",
  lobbyist: "bg-amber-500",
  final_law: "bg-emerald-500",
  omnibus: "bg-red-500",
};

const sourceOrder = ["commission", "lobbyist", "final_law", "omnibus"];

const ComparisonView = ({ activeId, sectionMeta }: ComparisonViewProps) => {
  const { data: documents, isLoading } = useSectionDocuments(activeId || undefined);
  const [showExplainer, setShowExplainer] = useState(true);

  if (isLoading || !documents) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const score = sectionMeta?.similarity_lobbyist_final ?? 0;
  const verdict =
    score >= 80
      ? { icon: AlertTriangle, text: "High industry influence", color: "text-red-600 bg-red-50 border-red-200" }
      : score >= 60
      ? { icon: TrendingUp, text: "Moderate influence", color: "text-amber-600 bg-amber-50 border-amber-200" }
      : { icon: Check, text: "Low influence", color: "text-emerald-600 bg-emerald-50 border-emerald-200" };

  const VerdictIcon = verdict.icon;

  const sortedDocs = [...documents].sort(
    (a, b) => sourceOrder.indexOf(a.source) - sourceOrder.indexOf(b.source)
  );

  return (
    <div className="flex-1 flex flex-col p-5 gap-4 overflow-hidden min-w-0">
      <div className="animate-fade-in-up" style={{ animationDelay: "120ms" }}>
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-foreground leading-tight">
              {sectionMeta?.plain_title || "Comparison"}
            </h2>
            <p className="text-sm text-muted-foreground mt-1">{sectionMeta?.title}</p>
          </div>
          <div className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-medium shrink-0 ${verdict.color}`}>
            <VerdictIcon className="w-4 h-4" />
            <span>{verdict.text}</span>
            <span className="font-bold tabular-nums">{score}%</span>
          </div>
        </div>

        {showExplainer && sectionMeta?.why_it_matters && (
          <div className="mt-3 bg-eu-blue-light rounded-lg p-3 flex items-start gap-2.5 border border-primary/10">
            <Info className="w-4 h-4 text-primary mt-0.5 shrink-0" />
            <p className="text-xs text-foreground/80 leading-relaxed flex-1">
              <strong>Why it matters:</strong> {sectionMeta.why_it_matters}
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

      <div className="flex-1 grid grid-cols-2 gap-3 min-h-0 overflow-hidden">
        {sortedDocs.map((doc, i) => (
          <DocumentPanel
            key={doc.id}
            title={doc.source_label}
            subtitle={doc.source_subtitle}
            text={doc.body_text}
            highlights={doc.highlights || []}
            colorClass={sourceColorMap[doc.source] || "bg-muted-foreground"}
            delay={`${180 + i * 60}ms`}
          />
        ))}
      </div>

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
