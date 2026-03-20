import { Scale } from "lucide-react";

const Header = () => (
  <header className="border-b border-border bg-card px-6 py-4 animate-fade-in-up">
    <div className="flex items-center gap-3">
      <div className="flex items-center justify-center w-9 h-9 rounded-md bg-primary/15 border border-primary/30">
        <Scale className="w-5 h-5 text-primary" />
      </div>
      <div>
        <h1 className="text-xl leading-tight tracking-tight text-foreground">
          L-DNA: Legislative Influence Tracker
        </h1>
        <p className="text-xs text-muted-foreground mt-0.5 font-sans tracking-wide uppercase">
          Corporate Sustainability Due Diligence Directive — Comparative Analysis
        </p>
      </div>
      <div className="ml-auto flex items-center gap-2">
        <span className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground border border-border rounded px-2 py-1">
          Demo v1.0
        </span>
      </div>
    </div>
  </header>
);

export default Header;
