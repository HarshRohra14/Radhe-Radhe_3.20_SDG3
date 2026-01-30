import { useEffect, useState } from "react";

interface WellnessScoreProps {
  score: number; // 0-100
  trend?: "up" | "down" | "stable";
  lastUpdate?: string;
}

export function WellnessScore({
  score,
  trend = "stable",
  lastUpdate = "Updated 2 hours ago",
}: WellnessScoreProps) {
  const [displayScore, setDisplayScore] = useState(0);

  useEffect(() => {
    let animationFrame: number;
    const animate = () => {
      setDisplayScore((prev) => {
        if (prev < score) {
          return Math.min(prev + 2, score);
        }
        return prev;
      });
    };

    const interval = setInterval(animate, 20);
    return () => clearInterval(interval);
  }, [score]);

  // Determine color based on score
  const getColor = (value: number) => {
    if (value >= 75) return "text-wellness-healthy";
    if (value >= 50) return "text-wellness-moderate";
    if (value >= 25) return "text-wellness-warning";
    return "text-wellness-critical";
  };

  const getGlowColor = (value: number) => {
    if (value >= 75) return "shadow-[0_0_30px_rgba(34,197,94,0.4)]";
    if (value >= 50) return "shadow-[0_0_30px_rgba(251,191,36,0.4)]";
    if (value >= 25) return "shadow-[0_0_30px_rgba(249,115,22,0.4)]";
    return "shadow-[0_0_30px_rgba(239,68,68,0.4)]";
  };

  const circumference = 2 * Math.PI * 45;
  const offset = circumference - (displayScore / 100) * circumference;

  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className={`relative w-40 h-40 rounded-full flex items-center justify-center glass glow-primary transition-all duration-300 ${getGlowColor(displayScore)}`}
      >
        {/* SVG Circle Background */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 120 120">
          {/* Background circle */}
          <circle
            cx="60"
            cy="60"
            r="45"
            fill="none"
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth="8"
          />
          {/* Progress circle */}
          <circle
            cx="60"
            cy="60"
            r="45"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="transition-all duration-500"
            style={{
              transform: "rotate(-90deg)",
              transformOrigin: "60px 60px",
            }}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgb(168, 85, 247)" />
              <stop offset="100%" stopColor="rgb(6, 182, 212)" />
            </linearGradient>
          </defs>
        </svg>

        {/* Score Content */}
        <div className="flex flex-col items-center justify-center relative z-10">
          <div className={`text-4xl font-bold ${getColor(displayScore)}`}>
            {Math.round(displayScore)}
          </div>
          <div className="text-xs text-muted-foreground mt-1">
            Wellness Score
          </div>
        </div>
      </div>

      {/* Trend indicator */}
      <div className="mt-6 flex items-center gap-2">
        {trend === "up" && (
          <div className="flex items-center gap-1 text-wellness-healthy">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 10a7 7 0 1114 0 7 7 0 01-14 0z" />
              <path
                d="M9 7v4.414L6.707 9.121a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l4-4a1 1 0 00-1.414-1.414L11 11.414V7a1 1 0 00-2 0z"
                fill="currentColor"
              />
            </svg>
            <span className="text-xs font-medium">Improving</span>
          </div>
        )}
        {trend === "down" && (
          <div className="flex items-center gap-1 text-wellness-warning">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 10a7 7 0 1114 0 7 7 0 01-14 0z" />
              <path
                d="M11 13v-4.414l2.293 2.293a1 1 0 001.414-1.414l-4-4a1 1 0 00-1.414 0l-4 4a1 1 0 001.414 1.414L9 8.586V13a1 1 0 002 0z"
                fill="currentColor"
              />
            </svg>
            <span className="text-xs font-medium">Needs Attention</span>
          </div>
        )}
        {trend === "stable" && (
          <div className="flex items-center gap-1 text-wellness-moderate">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 10a7 7 0 1114 0 7 7 0 01-14 0z" />
              <path
                d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                fill="currentColor"
              />
            </svg>
            <span className="text-xs font-medium">Stable</span>
          </div>
        )}
      </div>

      {/* Last update */}
      <div className="text-xs text-muted-foreground mt-3">{lastUpdate}</div>
    </div>
  );
}
