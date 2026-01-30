import { Header } from "@/components/Header";

export default function JournalAnalysis() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="container mx-auto max-w-7xl px-4 py-20">
        <div className="glass rounded-2xl p-12 text-center animate-slide-up">
          <div className="text-6xl mb-4">📝</div>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Journal Analysis
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            This page will feature journal input with text and voice support, live sentiment detection visualization, emotion tags, highlighted risky phrases, and AI insights about emotional trajectory and risk probability.
          </p>
          <button className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all glow-primary">
            Develop This Feature
          </button>
        </div>
      </section>
    </div>
  );
}
