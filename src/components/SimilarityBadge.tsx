import { ArrowRight } from "lucide-react";

interface SimilarityBadgeProps {
  score: number;
  direction: "vertical" | "horizontal";
}

const SimilarityBadge = ({ score, direction }: SimilarityBadgeProps) => {
  const label = score >= 80 ? "High match" : score >= 60 ? "Partial match" : "Low match";
  const colorClass =
    score >= 80
      ? "bg-red-50 text-red-700 border-red-200"
      : score >= 60
      ? "bg-amber-50 text-amber-700 border-amber-200"
      : "bg-emerald-50 text-emerald-700 border-emerald-200";

  if (direction === "vertical") {
    return (
      <div className="flex flex-col items-center gap-1.5 py-2">
        <div className="w-px h-6 bg-border" />
        <div className={`rounded-full border px-2.5 py-0.5 text-xs font-semibold tabular-nums ${colorClass}`}>
          {score}%
        </div>
        <span className="text-[9px] text-muted-foreground uppercase tracking-wider">{label}</span>
        <div className="w-px h-6 bg-border" />
      </div>
    );
  }

  return (
    <div className="flex items-center gap-1.5">
      <ArrowRight className="w-3 h-3 text-muted-foreground" />
      <div className={`rounded-full border px-2.5 py-0.5 text-xs font-semibold tabular-nums ${colorClass}`}>
        {score}% match
      </div>
    </div>
  );
};

export default SimilarityBadge;
