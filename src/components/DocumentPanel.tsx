interface DocumentPanelProps {
  title: string;
  subtitle: string;
  text: string;
  highlights: string[];
  colorClass: string;
  delay: string;
}

function renderHighlightedText(text: string, highlights: string[]) {
  if (!highlights.length) return <span>{text}</span>;

  const regex = new RegExp(
    `(${highlights.map((h) => h.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`,
    "gi"
  );
  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, i) => {
        const isMatch = highlights.some((h) => h.toLowerCase() === part.toLowerCase());
        return isMatch ? (
          <mark key={i} className="text-highlight">{part}</mark>
        ) : (
          <span key={i}>{part}</span>
        );
      })}
    </>
  );
}

const DocumentPanel = ({ title, subtitle, text, highlights, colorClass, delay }: DocumentPanelProps) => (
  <div
    className="flex-1 min-w-0 flex flex-col bg-card rounded-xl border border-border shadow-sm overflow-hidden animate-fade-in-up"
    style={{ animationDelay: delay }}
  >
    <div className="px-4 py-3 border-b border-border">
      <div className="flex items-center gap-2 mb-1">
        <div className={`w-2.5 h-2.5 rounded-full ${colorClass}`} />
        <h3 className="text-sm font-semibold text-foreground">{title}</h3>
      </div>
      <p className="text-[11px] text-muted-foreground pl-[18px]">{subtitle}</p>
    </div>
    <div className="p-4 flex-1 panel-scroll overflow-y-auto">
      <p className="text-[13px] leading-[1.7] text-foreground/85">
        {renderHighlightedText(text, highlights)}
      </p>
    </div>
  </div>
);

export default DocumentPanel;
