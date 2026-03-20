import HighlightedText from "./HighlightedText";

interface DocumentPanelProps {
  title: string;
  subtitle: string;
  text: string;
  highlights: string[];
  colorClass: string;
  delay: string;
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
      <HighlightedText text={text} highlights={highlights} />
    </div>
  </div>
);

export default DocumentPanel;
