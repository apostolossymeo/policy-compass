import { useState, useRef, useEffect } from "react";

interface HighlightedTextProps {
  text: string;
  highlights: string[];
}

interface TooltipState {
  visible: boolean;
  expanded: boolean;
  text: string;
  x: number;
  y: number;
}

function getExplanation(highlight: string): string {
  const explanations: Record<string, string> = {
    "500 employees": "The Commission originally proposed that companies with 500+ employees must comply. This is a relatively low threshold that would cover many mid-sized European companies.",
    "EUR 150 million": "€150 million in worldwide turnover was the Commission's original revenue threshold. Combined with 500 employees, this would have captured a broad range of companies.",
    "250 employees": "For high-risk sectors like mining and textiles, the Commission proposed an even lower bar of 250 employees — recognizing these industries' outsized impact on human rights.",
    "EUR 40 million": "The lower revenue threshold for high-impact sectors would have brought thousands more companies under the law's requirements.",
    "1,000 employees": "The final law doubled the employee threshold to 1,000. This matches what industry lobbyists requested, dramatically reducing the number of covered companies.",
    "EUR 450 million": "The final revenue threshold was tripled from €150M to €450M — exactly matching the BusinessEurope lobbying position. This exempts thousands of companies.",
    "eliminating the lower threshold": "Industry successfully lobbied to remove the lower thresholds for high-risk sectors, meaning textile and mining companies below 1,000 employees are now exempt.",
    "high-impact sector differentiation has been removed": "The final law removed special rules for high-risk sectors. Companies in mining, textiles, and agriculture are now treated the same as all others.",
    "entire value chain": "The Commission wanted companies to check their entire supply chain — from raw material extraction to end consumers. This is the broadest possible scope.",
    "established and non-established business relationships": "The original proposal covered even new or one-off business relationships, not just long-term partners.",
    "upstream and downstream": "Upstream means suppliers; downstream means distributors and retailers. The Commission wanted both covered.",
    "direct suppliers": "Industry wanted companies to only check their immediate, direct suppliers — not suppliers of suppliers.",
    "established business relationships only": "Lobbyists argued that only long-term, stable business relationships should be covered, excluding one-off transactions.",
    "limiting scope": "The core industry demand: narrow the scope so companies have fewer obligations.",
    "chains of activities": "The final law uses 'chains of activities' instead of 'value chain' — a subtly narrower term that may exclude some downstream relationships.",
    "risk-based": "The final law added 'risk-based' — meaning companies prioritize where risks are highest rather than checking everything equally.",
    "business partners": "Broader than 'direct suppliers' but narrower than the Commission's original 'established and non-established business relationships'.",
    "direct business partners": "The Omnibus rollback narrows in-depth assessment to direct partners only, a significant reduction from the original scope.",
    "plausible information": "Under the Omnibus, companies only check indirect partners when they have 'plausible information' of problems — shifting the burden of proof.",
    "fewer than 500 employees": "Small business partners (under 500 employees) are shielded from detailed information requests.",
    "voluntary reporting standards": "Information requests to smaller partners are capped at what voluntary standards require — much less than mandatory due diligence.",
    "compatible with the transition to a sustainable economy": "This phrase requires companies to actively align their business model with sustainability goals.",
    "1.5°C": "The Paris Agreement target to limit warming to 1.5°C. Including this makes climate plans concrete rather than vague.",
    "time-bound targets": "The Commission wanted specific deadlines for emission reductions — making plans enforceable rather than aspirational.",
    "voluntary and non-binding": "Industry's key demand: climate plans should be suggestions, not legal requirements.",
    "without binding emission reduction targets": "Lobbyists wanted to remove any mandatory emission targets from climate transition plans.",
    "through best efforts": "The final law added 'through best efforts' — meaning companies must try but aren't strictly required to achieve 1.5°C alignment. A significant softening.",
    "compatible with the transition": "Kept from the Commission's original language, but weakened by the 'best efforts' qualifier.",
    "every 5 years": "The Omnibus extends monitoring from annual to every 5 years — significantly reducing oversight frequency.",
    "liable for damages": "The Commission proposed that companies can be sued and must pay for harm caused by failing to do proper due diligence.",
    "failed to comply": "Liability is triggered by non-compliance with due diligence obligations — creating real legal consequences.",
    "indirect business relationships": "The Commission wanted liability to extend to harm occurring anywhere in the supply chain, not just direct operations.",
    "removed entirely": "The most extreme industry position: eliminate all civil liability provisions from the directive.",
    "limited to direct operations only": "A fallback industry position: if liability remains, limit it to the company's own factories and offices.",
    "safe harbour": "A legal protection that would shield companies from lawsuits if they can show they tried to do due diligence — even if harm occurred.",
    "right to full compensation": "Victims can seek complete compensation for damages — a strong accountability mechanism that survived lobbying pressure.",
    "may nevertheless be held liable": "Even companies that join industry initiatives or hire auditors can still be sued — closing a potential loophole.",
    "directors' duty of care": "Article 25 required directors personally to consider sustainability. Its deletion removes personal accountability for board members.",
    "deleted": "The Omnibus completely removes this provision — a significant rollback of accountability.",
    "overriding mandatory application": "This ensured EU liability rules applied even when harm happened outside the EU. Its removal may leave some victims without legal recourse.",
    "removed": "Removing overriding mandatory application weakens protection for victims in developing countries.",
    "simplifying": "The stated goal of the Omnibus: reduce complexity. Critics argue this means reducing protection.",
    "reducing reporting burden": "Companies will have fewer reporting obligations — welcomed by business but opposed by transparency advocates.",
  };

  return explanations[highlight] || `This phrase — "${highlight}" — is a key term that changed between document versions. Click to see how it evolved across the legislative process.`;
}

const HighlightedText = ({ text, highlights }: HighlightedTextProps) => {
  const [tooltip, setTooltip] = useState<TooltipState>({
    visible: false,
    expanded: false,
    text: "",
    x: 0,
    y: 0,
  });
  const tooltipRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (tooltipRef.current && !tooltipRef.current.contains(e.target as Node)) {
        setTooltip((prev) => ({ ...prev, visible: false, expanded: false }));
      }
    };
    if (tooltip.visible) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [tooltip.visible]);

  if (!highlights.length) return <span>{text}</span>;

  const regex = new RegExp(
    `(${highlights.map((h) => h.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`,
    "gi"
  );
  const parts = text.split(regex);

  const handleMouseEnter = (highlight: string, e: React.MouseEvent) => {
    if (tooltip.expanded) return;
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    const containerRect = containerRef.current?.getBoundingClientRect();
    if (!containerRect) return;
    setTooltip({
      visible: true,
      expanded: false,
      text: highlight,
      x: rect.left - containerRect.left + rect.width / 2,
      y: rect.top - containerRect.top - 8,
    });
  };

  const handleMouseLeave = () => {
    if (!tooltip.expanded) {
      setTooltip((prev) => ({ ...prev, visible: false }));
    }
  };

  const handleClick = (highlight: string, e: React.MouseEvent) => {
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    const containerRect = containerRef.current?.getBoundingClientRect();
    if (!containerRect) return;
    setTooltip({
      visible: true,
      expanded: true,
      text: highlight,
      x: rect.left - containerRect.left + rect.width / 2,
      y: rect.top - containerRect.top - 8,
    });
  };

  return (
    <div ref={containerRef} className="relative">
      <p className="text-[13px] leading-[1.75] text-foreground/85">
        {parts.map((part, i) => {
          const isMatch = highlights.some((h) => h.toLowerCase() === part.toLowerCase());
          return isMatch ? (
            <mark
              key={i}
              className="text-highlight cursor-pointer hover:brightness-95 transition-all duration-100"
              onMouseEnter={(e) => handleMouseEnter(part, e)}
              onMouseLeave={handleMouseLeave}
              onClick={(e) => handleClick(part, e)}
            >
              {part}
            </mark>
          ) : (
            <span key={i}>{part}</span>
          );
        })}
      </p>

      {tooltip.visible && (
        <div
          ref={tooltipRef}
          className="absolute z-50 animate-fade-in-up"
          style={{
            left: `${tooltip.x}px`,
            top: `${tooltip.y}px`,
            transform: "translate(-50%, -100%)",
            maxWidth: tooltip.expanded ? "320px" : "220px",
          }}
        >
          <div className="bg-card border border-border rounded-lg shadow-lg p-3 text-xs">
            {tooltip.expanded ? (
              <>
                <p className="font-semibold text-foreground mb-1.5">"{tooltip.text}"</p>
                <p className="text-muted-foreground leading-relaxed">
                  {getExplanation(tooltip.text)}
                </p>
              </>
            ) : (
              <p className="text-muted-foreground">
                <span className="font-medium text-foreground">Click</span> to learn why this matters
              </p>
            )}
            <div
              className="absolute left-1/2 -translate-x-1/2 top-full w-2 h-2 bg-card border-r border-b border-border rotate-45 -mt-1"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default HighlightedText;
