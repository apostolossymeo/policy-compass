import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Landmark, ArrowRight, Scale, BookOpen } from "lucide-react";
import { useLaws } from "@/hooks/useLaws";
import Header from "@/components/Header";

const Index = () => {
  const [search, setSearch] = useState("");
  const { data: laws, isLoading } = useLaws(search);
  const navigate = useNavigate();

  const tagIcons: Record<string, typeof Scale> = {
    "supply chain": Scale,
    "human rights": BookOpen,
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />

      {/* Hero / Search area */}
      <div className="bg-card border-b border-border">
        <div className="max-w-3xl mx-auto px-6 py-16 text-center animate-fade-in-up">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Landmark className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-3xl font-bold text-foreground tracking-tight leading-tight mb-3">
            Who shaped your laws?
          </h1>
          <p className="text-base text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed">
            Search any EU directive to see how it changed from the Commission's original proposal
            to the final adopted text — and who influenced the changes.
          </p>

          {/* Search bar */}
          <div className="relative max-w-lg mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search for a law, topic, or keyword…"
              className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
            />
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="max-w-3xl mx-auto px-6 py-8 w-full">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground mb-4">
          {isLoading ? "Searching…" : laws?.length ? `${laws.length} ${laws.length === 1 ? "law" : "laws"} found` : "No results"}
        </p>

        <div className="space-y-3">
          {laws?.map((law, i) => (
            <button
              key={law.id}
              onClick={() => navigate(`/law/${law.slug}`)}
              className="w-full text-left bg-card border border-border rounded-xl p-5 hover:border-primary/30 hover:shadow-md transition-all duration-200 active:scale-[0.99] group animate-fade-in-up"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">
                    {law.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">
                    {law.plain_title}
                  </p>
                  {law.description && (
                    <p className="text-xs text-muted-foreground/70 mt-2 line-clamp-2">
                      {law.description}
                    </p>
                  )}
                  {law.tags && law.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {law.tags.slice(0, 5).map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center text-[11px] font-medium text-muted-foreground bg-muted rounded-full px-2.5 py-0.5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1" />
              </div>
            </button>
          ))}
        </div>

        {!isLoading && (!laws || laws.length === 0) && search && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-sm">No laws match "{search}"</p>
            <p className="text-xs text-muted-foreground/60 mt-1">Try different keywords</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
