import { useState } from "react";
import Header from "@/components/Header";
import ArticleSidebar from "@/components/ArticleSidebar";
import ComparisonView from "@/components/ComparisonView";

const Index = () => {
  const [activeId, setActiveId] = useState("article-3");

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header />
      <div className="flex flex-1 min-h-0">
        <ArticleSidebar activeId={activeId} onSelect={setActiveId} />
        <ComparisonView activeId={activeId} />
      </div>
    </div>
  );
};

export default Index;
