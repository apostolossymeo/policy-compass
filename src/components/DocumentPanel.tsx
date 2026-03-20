interface DocumentPanelProps {
  title: string;
  subtitle: string;
  text: string;
  highlights: string[];
  accentColor: string;
  delay: string;
}

function renderHighlightedText(text: string, highlights: string[]) {
  if (!highlights.length) return <span>{text}</span>;

  const regex = new RegExp(`(${highlights.map((h) => h.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`, "gi");
  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, i) => {
        const isMatch = highlights.some((h) => h.toLowerCase() === part.toLowerCase());
        return isMatch ? (
          <mark key={i} className="text-highlight">
            {part}
          </mark>
        ) : (
          <span key={i}>{part}</span>
        );
      })}
    </>
  );
}

const DocumentPanel = ({ title, subtitle, text, highlights, accentColor, delay }: DocumentPanelProps) => (
  <div
    className="flex-1 min-w-0 flex flex-col border border-border rounded-lg bg-card overflow-hidden animate-fade-in-up"
    style={{ animationDelay: delay }}
  >
    <div className="px-4 py-3 border-b border-border">
      <div className={`w-full h-0.5 rounded-full mb-3 ${accentColor}`} />
      <h3 className="text-sm font-semibold text-foreground leading-snug font-sans">{title}</h3>
      <p className="text-[11px] text-muted-foreground mt-0.5">{subtitle}</p>
    </div>
    <div className="p-4 flex-1 panel-scroll overflow-y-auto">
      <p className="text-sm leading-relaxed text-secondary-foreground">
        {renderHighlightedText(text, highlights)}
      </p>
    </div>
  </div>
);

export default DocumentPanel;
