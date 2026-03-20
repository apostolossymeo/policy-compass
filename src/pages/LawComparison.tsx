import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import ArticleSidebar from "@/components/ArticleSidebar";
import ComparisonView from "@/components/ComparisonView";
import { useLawBySlug, useLawSections } from "@/hooks/useLaws";
import { ArrowLeft } from "lucide-react";

const LawComparison = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { data: law, isLoading: lawLoading } = useLawBySlug(slug || "");
  const { data: sections, isLoading: sectionsLoading } = useLawSections(law?.id);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    if (sections?.length && !activeId) {
      setActiveId(sections[0].id);
    }
  }, [sections, activeId]);

  if (lawLoading || sectionsLoading) {
    return (
      <div className="flex flex-col h-screen bg-background">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-3" />
            <p className="text-sm text-muted-foreground">Loading law comparison…</p>
          </div>
        </div>
      </div>
    );
  }

  if (!law || !sections?.length) {
    return (
      <div className="flex flex-col h-screen bg-background">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <p className="text-lg font-medium text-foreground mb-2">Law not found</p>
            <button onClick={() => navigate("/")} className="text-sm text-primary hover:underline">
              ← Back to search
            </button>
          </div>
        </div>
      </div>
    );
  }

  const navItems = sections.map((s) => ({
    id: s.id,
    title: s.title,
    plainTitle: s.plain_title,
  }));

  const currentSection = sections.find((s) => s.id === activeId);

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-background">
      <Header />
      <div className="px-5 py-2 border-b border-border bg-card flex items-center gap-3">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors active:scale-[0.97]"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>
        <span className="text-border">|</span>
        <h2 className="text-sm font-medium text-foreground truncate">{law.title}</h2>
      </div>
      <div className="flex flex-1 min-h-0">
        <ArticleSidebar activeId={activeId} onSelect={setActiveId} navItems={navItems} />
        <ComparisonView activeId={activeId} sectionMeta={currentSection} />
      </div>
    </div>
  );
};

export default LawComparison;
