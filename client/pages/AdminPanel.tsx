import { Header } from "@/components/Header";

export default function AdminPanel() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="container mx-auto max-w-7xl px-4 py-20">
        <div className="glass rounded-2xl p-12 text-center animate-slide-up">
          <div className="text-6xl mb-4">🏫</div>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            School District Admin Panel
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            This page will feature aggregated analytics dashboard, student
            wellbeing trends, risk distribution charts, intervention success
            metrics, role-based access controls, and export reports
            functionality.
          </p>
          <button className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all glow-primary">
            Develop This Feature
          </button>
        </div>
      </section>
    </div>
  );
}
