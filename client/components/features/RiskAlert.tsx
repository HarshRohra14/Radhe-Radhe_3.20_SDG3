import { useEffect, useState } from "react";

type RiskLevel = "low" | "medium" | "high" | "critical";

interface RiskAlertProps {
  level: RiskLevel;
  title?: string;
  description?: string;
  probability?: number;
  keywords?: string[];
  lastDetected?: string;
}

export function RiskAlert({
  level,
  title = "Emotional Risk Assessment",
  description = "Based on recent journal entries and behavioral patterns",
  probability = 35,
  keywords = ["stressed", "overwhelmed", "uncertain"],
  lastDetected = "Today at 2:43 PM",
}: RiskAlertProps) {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    if (level === "critical" || level === "high") {
      setIsAnimating(true);
    }
  }, [level]);

  const getRiskConfig = (riskLevel: RiskLevel) => {
    switch (riskLevel) {
      case "low":
        return {
          color: "text-wellness-healthy",
          bgColor: "bg-wellness-healthy/10",
          borderColor: "border-wellness-healthy/30",
          badge: "Low Risk",
          icon: "✓",
        };
      case "medium":
        return {
          color: "text-wellness-moderate",
          bgColor: "bg-wellness-moderate/10",
          borderColor: "border-wellness-moderate/30",
          badge: "Medium Risk",
          icon: "!",
        };
      case "high":
        return {
          color: "text-wellness-warning",
          bgColor: "bg-wellness-warning/10",
          borderColor: "border-wellness-warning/30",
          badge: "High Risk",
          icon: "⚠",
        };
      case "critical":
        return {
          color: "text-wellness-critical",
          bgColor: "bg-wellness-critical/10",
          borderColor: "border-wellness-critical/30",
          badge: "Critical",
          icon: "🚨",
        };
    }
  };

  const config = getRiskConfig(level);

  return (
    <div
      className={`rounded-2xl p-6 border-2 ${config.bgColor} ${config.borderColor} transition-all ${
        isAnimating && (level === "critical" || level === "high")
          ? "animate-pulse-glow"
          : ""
      }`}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-start gap-3">
          <div
            className={`text-2xl flex-shrink-0 ${config.color} ${
              level === "critical" ? "animate-bounce" : ""
            }`}
          >
            {config.icon}
          </div>
          <div>
            <h3 className="font-semibold text-foreground">{title}</h3>
            <p className="text-xs text-muted-foreground mt-0.5">
              {description}
            </p>
          </div>
        </div>
        <div
          className={`text-xs font-semibold px-3 py-1 rounded-full ${config.bgColor} ${config.color} border ${config.borderColor}`}
        >
          {config.badge}
        </div>
      </div>

      {/* Risk Probability Meter */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium text-muted-foreground">
            Risk Probability
          </span>
          <span className={`text-sm font-bold ${config.color}`}>
            {probability}%
          </span>
        </div>
        <div className="w-full h-2 bg-background/50 rounded-full overflow-hidden border border-white/10">
          <div
            className={`h-full transition-all duration-500 ease-out`}
            style={{
              width: `${probability}%`,
              background:
                level === "low"
                  ? "linear-gradient(90deg, #22c55e 0%, #16a34a 100%)"
                  : level === "medium"
                    ? "linear-gradient(90deg, #f59e0b 0%, #d97706 100%)"
                    : level === "high"
                      ? "linear-gradient(90deg, #f97316 0%, #ea580c 100%)"
                      : "linear-gradient(90deg, #ef4444 0%, #dc2626 100%)",
            }}
          />
        </div>
      </div>

      {/* Detected Keywords */}
      <div className="mb-4">
        <p className="text-xs font-medium text-muted-foreground mb-2">
          Detected Keywords
        </p>
        <div className="flex flex-wrap gap-2">
          {keywords.map((keyword, idx) => (
            <span
              key={idx}
              className={`text-xs px-2.5 py-1 rounded-full border glass backdrop-blur-sm ${config.borderColor}`}
            >
              {keyword}
            </span>
          ))}
        </div>
      </div>

      {/* Last Detected */}
      <div className="text-xs text-muted-foreground border-t border-white/10 pt-3 mt-3">
        Last detected: {lastDetected}
      </div>

      {/* Action Buttons */}
      {(level === "high" || level === "critical") && (
        <div className="mt-4 flex gap-2">
          <button className="flex-1 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-all glow-primary">
            Talk to Coach
          </button>
          <button className="flex-1 px-4 py-2 rounded-lg border border-white/20 text-foreground hover:bg-white/5 transition-all text-sm font-medium">
            View Details
          </button>
        </div>
      )}
    </div>
  );
}
