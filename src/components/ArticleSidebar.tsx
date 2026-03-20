import { navItems as defaultNavItems } from "@/data/csdddSampleData";
import { ChevronRight, HelpCircle } from "lucide-react";

interface NavItem {
  id: string;
  title: string;
  plainTitle: string;
}

interface ArticleSidebarProps {
  activeId: string;
  onSelect: (id: string) => void;
  navItems?: NavItem[];
}

const ArticleSidebar = ({ activeId, onSelect, navItems }: ArticleSidebarProps) => {
  const items = navItems || defaultNavItems;

  return (
    <aside className="w-72 shrink-0 border-r border-border bg-card p-5 animate-fade-in-up flex flex-col" style={{ animationDelay: "80ms" }}>
      <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground mb-3">
        Topics
      </p>
      <nav className="space-y-1">
        {items.map((item) => {
          const active = item.id === activeId;
          return (
            <button
              key={item.id}
              onClick={() => onSelect(item.id)}
              className={`w-full text-left rounded-lg px-3 py-3 transition-all duration-150 group active:scale-[0.98] ${
                active
                  ? "bg-eu-blue-light border border-primary/20 shadow-sm"
                  : "hover:bg-muted border border-transparent"
              }`}
            >
              <span className={`text-sm font-medium block leading-snug ${active ? "text-primary" : "text-foreground"}`}>
                {item.plainTitle}
              </span>
              <span className="text-[11px] text-muted-foreground mt-0.5 block">{item.title}</span>
              {active && <ChevronRight className="w-3.5 h-3.5 text-primary mt-1" />}
            </button>
          );
        })}
      </nav>

      <div className="mt-auto pt-6">
        <div className="rounded-lg bg-eu-gold-light border border-accent/30 p-4">
          <div className="flex items-start gap-2">
            <HelpCircle className="w-4 h-4 text-accent-foreground mt-0.5 shrink-0" />
            <div>
              <p className="text-xs font-semibold text-foreground">How to read this</p>
              <p className="text-[11px] text-muted-foreground mt-1 leading-relaxed">
                Compare the same legal topic across four versions. <span className="text-highlight">Hover yellow text</span> for a quick preview, <strong>click</strong> to read the full explanation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default ArticleSidebar;
