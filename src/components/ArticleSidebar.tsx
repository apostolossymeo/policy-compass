import { navItems } from "@/data/csdddSampleData";
import { FileText, ChevronRight } from "lucide-react";

interface ArticleSidebarProps {
  activeId: string;
  onSelect: (id: string) => void;
}

const ArticleSidebar = ({ activeId, onSelect }: ArticleSidebarProps) => (
  <aside className="w-64 shrink-0 border-r border-border bg-sidebar p-4 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
    <h2 className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-4 font-sans">
      Navigation
    </h2>
    <nav className="space-y-1">
      {navItems.map((item) => {
        const active = item.id === activeId;
        return (
          <button
            key={item.id}
            onClick={() => onSelect(item.id)}
            className={`w-full flex items-center gap-2.5 rounded-md px-3 py-2.5 text-left text-sm transition-colors duration-150 ${
              active
                ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                : "text-sidebar-foreground hover:bg-sidebar-accent/50"
            }`}
          >
            <FileText className="w-4 h-4 shrink-0 text-primary/70" />
            <span className="truncate">{item.title}</span>
            {active && <ChevronRight className="w-3.5 h-3.5 ml-auto text-primary" />}
          </button>
        );
      })}
    </nav>

    <div className="mt-8 p-3 rounded-md border border-border bg-card">
      <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold mb-2 font-sans">
        Scaling Roadmap
      </p>
      <ul className="space-y-1.5 text-xs text-muted-foreground">
        <li className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          EUR-Lex API integration
        </li>
        <li className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40" />
          Parltrack amendments
        </li>
        <li className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40" />
          Legal-BERT embeddings
        </li>
        <li className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40" />
          Pluralism scoring
        </li>
      </ul>
    </div>
  </aside>
);

export default ArticleSidebar;
