import { Header } from "@/components/Header";
import { WellnessScore } from "@/components/features/WellnessScore";
import { MoodTrend } from "@/components/features/MoodTrend";
import { RiskAlert } from "@/components/features/RiskAlert";
import { EmotionalHeatmap } from "@/components/features/EmotionalHeatmap";
import { SupportTracking } from "@/components/features/SupportTracking";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />

        <div className="container mx-auto max-w-7xl px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-slide-down">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 bg-clip-text text-transparent mb-6">
              Sentinel Soul
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary via-white to-secondary bg-clip-text text-transparent mb-6">
              Your Wellness, Our Mission
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              AI-powered emotional intelligence that detects when students need
              support and connects them with compassionate counselors in
              real-time.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-bold text-lg hover:shadow-2xl glow-primary transition-all duration-300 transform hover:scale-105 w-full sm:w-auto">
                Start Wellness Check
              </button>
              <button className="px-8 py-4 rounded-xl border border-white/20 text-foreground font-bold text-lg hover:bg-white/5 transition-all duration-300 w-full sm:w-auto">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Dashboard Content */}
      <section className="container mx-auto max-w-7xl px-4 py-12 md:py-20">
        {/* Top Row: Wellness Score + Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Wellness Score Card */}
          <div
            className="glass rounded-2xl p-8 flex flex-col items-center justify-center hover:border-primary/50 transition-all duration-300 animate-slide-up"
            style={{ animationDelay: "100ms" }}
          >
            <WellnessScore
              score={72}
              trend="up"
              lastUpdate="Updated 2 hours ago"
            />
          </div>

          {/* Quick Stats */}
          <div
            className="grid grid-cols-2 gap-4 md:col-span-2 animate-slide-up"
            style={{ animationDelay: "200ms" }}
          >
            <div className="glass rounded-xl p-6 hover:border-secondary/50 transition-all group cursor-pointer">
              <div className="text-3xl mb-2">📊</div>
              <p className="text-sm text-muted-foreground mb-2">
                Journal Entries
              </p>
              <p className="text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                12
              </p>
              <p className="text-xs text-muted-foreground mt-2">This week</p>
            </div>

            <div className="glass rounded-xl p-6 hover:border-secondary/50 transition-all group cursor-pointer">
              <div className="text-3xl mb-2">🎯</div>
              <p className="text-sm text-muted-foreground mb-2">Insights</p>
              <p className="text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                8
              </p>
              <p className="text-xs text-muted-foreground mt-2">Generated</p>
            </div>

            <div className="glass rounded-xl p-6 hover:border-secondary/50 transition-all group cursor-pointer">
              <div className="text-3xl mb-2">🤝</div>
              <p className="text-sm text-muted-foreground mb-2">Coach Chat</p>
              <p className="text-3xl font-bold text-wellness-healthy group-hover:text-primary transition-colors">
                Active
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                Ready to help
              </p>
            </div>

            <div className="glass rounded-xl p-6 hover:border-secondary/50 transition-all group cursor-pointer">
              <div className="text-3xl mb-2">⏰</div>
              <p className="text-sm text-muted-foreground mb-2">
                Next Check-in
              </p>
              <p className="text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                3d
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                Follow-up due
              </p>
            </div>
          </div>
        </div>

        {/* Mood Trend Section */}
        <div
          className="mb-12 animate-slide-up"
          style={{ animationDelay: "300ms" }}
        >
          <div className="glass rounded-2xl p-8">
            <MoodTrend period="week" />
          </div>
        </div>

        {/* Risk Alert Section */}
        <div
          className="mb-12 animate-slide-up"
          style={{ animationDelay: "400ms" }}
        >
          <RiskAlert
            level="medium"
            title="Recent Emotional Patterns"
            description="Analysis of your last 7 days of journal entries"
            probability={42}
            keywords={["stressed", "uncertain", "overwhelmed", "hopeful"]}
            lastDetected="Today at 2:43 PM"
          />
        </div>

        {/* Support Tracking Section */}
        <div
          className="mb-12 animate-slide-up"
          style={{ animationDelay: "500ms" }}
        >
          <SupportTracking currentStatus="notified" />
        </div>

        {/* Emotional Heatmap Section */}
        <div
          className="mb-12 animate-slide-up"
          style={{ animationDelay: "600ms" }}
        >
          <div className="glass rounded-2xl p-8">
            <EmotionalHeatmap />
          </div>
        </div>

        {/* AI Insights Panel */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 animate-slide-up"
          style={{ animationDelay: "700ms" }}
        >
          {/* Emotional Trajectory */}
          <div className="glass rounded-2xl p-8 hover:border-primary/50 transition-all">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              📈 Emotional Trajectory
            </h3>
            <p className="text-muted-foreground mb-4">
              Your emotional patterns show positive momentum over the past week,
              with increasing moments of confidence and hope.
            </p>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Stability Index</span>
                <span className="font-bold text-wellness-healthy">+15%</span>
              </div>
              <div className="w-full h-2 bg-background/50 rounded-full overflow-hidden border border-white/10">
                <div className="w-3/4 h-full bg-gradient-to-r from-primary to-secondary" />
              </div>
            </div>
          </div>

          {/* Risk Probability */}
          <div className="glass rounded-2xl p-8 hover:border-secondary/50 transition-all">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              ⚠️ Risk Probability
            </h3>
            <p className="text-muted-foreground mb-4">
              Current emotional risk indicators are within normal range, but
              recommend maintaining regular check-ins.
            </p>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Escalation Risk</span>
                <span className="font-bold text-wellness-moderate">32%</span>
              </div>
              <div className="w-full h-2 bg-background/50 rounded-full overflow-hidden border border-white/10">
                <div
                  className="h-full bg-gradient-to-r from-wellness-warning to-wellness-moderate"
                  style={{ width: "32%" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Suggested Interventions */}
        <div
          className="glass rounded-2xl p-8 animate-slide-up"
          style={{ animationDelay: "800ms" }}
        >
          <h3 className="text-xl font-semibold text-foreground mb-6">
            💡 Suggested Interventions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border border-white/10 rounded-lg p-4 hover:border-primary/50 transition-all cursor-pointer group">
              <div className="text-2xl mb-2">🧘</div>
              <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                Mindfulness Practice
              </h4>
              <p className="text-xs text-muted-foreground">
                Daily 5-minute breathing exercise to manage stress
              </p>
            </div>

            <div className="border border-white/10 rounded-lg p-4 hover:border-primary/50 transition-all cursor-pointer group">
              <div className="text-2xl mb-2">📱</div>
              <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                Journaling Prompt
              </h4>
              <p className="text-xs text-muted-foreground">
                Guided reflection on three positive moments from today
              </p>
            </div>

            <div className="border border-white/10 rounded-lg p-4 hover:border-primary/50 transition-all cursor-pointer group">
              <div className="text-2xl mb-2">🤝</div>
              <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                Talk to Counselor
              </h4>
              <p className="text-xs text-muted-foreground">
                Schedule a one-on-one session with school counselor
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-background/50">
        <div className="container mx-auto max-w-7xl px-4 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-foreground mb-4">
                Wellness Coach AI
              </h4>
              <p className="text-sm text-muted-foreground">
                Empowering schools with AI-driven emotional intelligence.
              </p>
            </div>
            <div>
              <h5 className="font-semibold text-foreground text-sm mb-4">
                Product
              </h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="hover:text-foreground transition-colors cursor-pointer">
                  Dashboard
                </li>
                <li className="hover:text-foreground transition-colors cursor-pointer">
                  Features
                </li>
                <li className="hover:text-foreground transition-colors cursor-pointer">
                  Pricing
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-foreground text-sm mb-4">
                Company
              </h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="hover:text-foreground transition-colors cursor-pointer">
                  About
                </li>
                <li className="hover:text-foreground transition-colors cursor-pointer">
                  Blog
                </li>
                <li className="hover:text-foreground transition-colors cursor-pointer">
                  Contact
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-foreground text-sm mb-4">
                Legal
              </h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="hover:text-foreground transition-colors cursor-pointer">
                  Privacy
                </li>
                <li className="hover:text-foreground transition-colors cursor-pointer">
                  Terms
                </li>
                <li className="hover:text-foreground transition-colors cursor-pointer">
                  Compliance
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-xs text-muted-foreground">
              © 2024 Wellness Coach AI. Data delivery secured via USPS-grade
              infrastructure.
            </p>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <span className="text-xs px-3 py-1 rounded-full bg-secondary/20 text-secondary border border-secondary/30">
                🔒 FERPA Compliant
              </span>
              <span className="text-xs px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/30">
                ✓ GDPR Ready
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
