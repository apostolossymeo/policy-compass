import { Landmark } from "lucide-react";

const Header = () => (
  <header className="bg-card border-b border-border px-6 py-4 animate-fade-in-up">
    <div className="flex items-center gap-3 max-w-screen-2xl mx-auto">
      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary text-primary-foreground">
        <Landmark className="w-5 h-5" />
      </div>
      <div className="flex-1">
        <h1 className="text-lg font-bold text-foreground tracking-tight leading-tight">
          L-DNA: Legislative Influence Tracker
        </h1>
        <p className="text-xs text-muted-foreground mt-0.5">
          See how industry lobbying shaped the EU Corporate Sustainability Due Diligence Directive
        </p>
      </div>
      <div className="hidden sm:flex items-center gap-2">
        <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-muted-foreground bg-muted rounded-full px-3 py-1">
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          4 articles compared
        </span>
      </div>
    </div>
  </header>
);

export default Header;
