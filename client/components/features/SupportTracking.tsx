import { useEffect, useState } from "react";

type TrackingStatus = "detected" | "notified" | "responding" | "delivered" | "followup";

interface TrackingStep {
  id: TrackingStatus;
  label: string;
  description: string;
  timestamp?: string;
  completed: boolean;
}

interface SupportTrackingProps {
  currentStatus: TrackingStatus;
  steps?: TrackingStep[];
}

export function SupportTracking({
  currentStatus = "detected",
  steps = defaultSteps,
}: SupportTrackingProps) {
  const [animatingIndex, setAnimatingIndex] = useState(-1);

  useEffect(() => {
    const currentIndex = steps.findIndex((s) => s.id === currentStatus);
    setAnimatingIndex(currentIndex);
  }, [currentStatus, steps]);

  return (
    <div className="w-full space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-foreground">
          Support Request Tracking
        </h3>
        <div className="text-xs font-medium px-3 py-1 rounded-full bg-secondary/20 text-secondary border border-secondary/30">
          In Progress
        </div>
      </div>

      <div className="glass rounded-2xl p-6">
        {/* USPS-Inspired Tracking Timeline */}
        <div className="relative">
          {/* Progress line */}
          <div className="absolute left-5 top-8 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-muted rounded-full" />

          {/* Steps */}
          <div className="space-y-6">
            {steps.map((step, index) => {
              const isCompleted = steps
                .slice(0, index + 1)
                .every((s) => s.completed);
              const isCurrent = step.id === currentStatus;

              return (
                <div
                  key={step.id}
                  className="relative flex gap-4 animate-slide-up"
                  style={{
                    animationDelay: `${index * 50}ms`,
                  }}
                >
                  {/* Status Circle */}
                  <div
                    className={`relative w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 transition-all ${
                      isCompleted
                        ? "bg-wellness-healthy text-background"
                        : isCurrent
                          ? "bg-primary text-white glow-primary animate-pulse-glow"
                          : "bg-background/50 text-muted-foreground border border-white/20"
                    }`}
                  >
                    {isCompleted ? "✓" : isCurrent ? "→" : "○"}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className={`font-semibold transition-colors ${
                        isCurrent
                          ? "text-primary"
                          : isCompleted
                            ? "text-foreground"
                            : "text-muted-foreground"
                      }`}>
                        {step.label}
                      </h4>
                      {isCurrent && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary border border-primary/30 font-medium">
                          Now
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">
                      {step.description}
                    </p>
                    {step.timestamp && (
                      <p className="text-xs text-muted-foreground/70">
                        {step.timestamp}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* USPS Branding Info */}
      <div className="bg-gradient-to-r from-blue-950/30 to-red-950/20 border border-blue-800/30 rounded-lg p-4 flex items-start gap-3">
        <div className="text-2xl flex-shrink-0">📮</div>
        <div className="text-xs text-muted-foreground">
          <p className="font-semibold text-foreground mb-1">Trusted Delivery of Support</p>
          <p>
            Your support request is tracked and delivered with USPS-grade security and reliability. 
            We ensure every step of the support process is transparent and timely.
          </p>
        </div>
      </div>
    </div>
  );
}

const defaultSteps: TrackingStep[] = [
  {
    id: "detected",
    label: "Risk Detected",
    description: "AI identified emotional indicators in journal entry",
    timestamp: "Today, 2:43 PM",
    completed: true,
  },
  {
    id: "notified",
    label: "Counselor Notified",
    description: "School counselor received alert notification",
    timestamp: "Today, 2:45 PM",
    completed: true,
  },
  {
    id: "responding",
    label: "Counselor Responding",
    description: "Professional reviewing details and preparing response",
    timestamp: undefined,
    completed: false,
  },
  {
    id: "delivered",
    label: "Support Delivered",
    description: "Counselor will reach out with guidance and resources",
    timestamp: undefined,
    completed: false,
  },
  {
    id: "followup",
    label: "Follow-up Scheduled",
    description: "Check-in planned to ensure continued wellbeing",
    timestamp: undefined,
    completed: false,
  },
];
