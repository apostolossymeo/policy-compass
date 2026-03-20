interface SimilarityBadgeProps {
  score: number;
  label: string;
}

const SimilarityBadge = ({ score, label }: SimilarityBadgeProps) => {
  const color =
    score >= 80
      ? "text-red-400 border-red-400/30 bg-red-400/10"
      : score >= 60
      ? "text-primary border-primary/30 bg-primary/10"
      : "text-emerald-400 border-emerald-400/30 bg-emerald-400/10";

  return (
    <div className="flex flex-col items-center gap-1 shrink-0">
      <div className={`rounded-full border px-3 py-1 text-sm font-semibold tabular-nums ${color}`}>
        {score}%
      </div>
      <span className="text-[9px] uppercase tracking-widest text-muted-foreground text-center leading-tight max-w-[80px]">
        {label}
      </span>
    </div>
  );
};

export default SimilarityBadge;
