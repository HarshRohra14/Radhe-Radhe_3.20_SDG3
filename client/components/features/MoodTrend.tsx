import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

interface MoodTrendData {
  date: string;
  score: number;
  sentiment: "positive" | "neutral" | "negative";
}

interface MoodTrendProps {
  data?: MoodTrendData[];
  period?: "week" | "month";
  onPeriodChange?: (period: "week" | "month") => void;
}

export function MoodTrend({
  data = defaultData,
  period = "week",
  onPeriodChange,
}: MoodTrendProps) {
  const [selectedPeriod, setSelectedPeriod] = useState<"week" | "month">(
    period,
  );

  const handlePeriodChange = (newPeriod: "week" | "month") => {
    setSelectedPeriod(newPeriod);
    onPeriodChange?.(newPeriod);
  };

  return (
    <div className="w-full space-y-4">
      {/* Period selector */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-foreground">Mood Trends</h3>
        <div className="flex gap-2 bg-background/50 rounded-lg p-1 border border-white/10">
          <button
            onClick={() => handlePeriodChange("week")}
            className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
              selectedPeriod === "week"
                ? "bg-primary text-primary-foreground shadow-lg"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Week
          </button>
          <button
            onClick={() => handlePeriodChange("month")}
            className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
              selectedPeriod === "month"
                ? "bg-primary text-primary-foreground shadow-lg"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Month
          </button>
        </div>
      </div>

      {/* Chart */}
      <div className="w-full h-64 glass rounded-2xl p-6">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <defs>
              <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#a855f7" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#06b6d4" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="rgba(255,255,255,0.1)"
            />
            <XAxis
              dataKey="date"
              stroke="rgba(255,255,255,0.5)"
              style={{ fontSize: "12px" }}
            />
            <YAxis
              stroke="rgba(255,255,255,0.5)"
              domain={[0, 100]}
              style={{ fontSize: "12px" }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(20, 15, 40, 0.9)",
                border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: "8px",
              }}
              labelStyle={{ color: "rgba(255,255,255,0.8)" }}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="score"
              stroke="url(#colorScore)"
              strokeWidth={3}
              dot={{ fill: "#a855f7", r: 5 }}
              activeDot={{ r: 7 }}
              isAnimationActive={true}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3">
        <div className="glass rounded-lg p-4 text-center">
          <div className="text-xs text-muted-foreground mb-1">Average</div>
          <div className="text-2xl font-bold text-primary">72</div>
        </div>
        <div className="glass rounded-lg p-4 text-center">
          <div className="text-xs text-muted-foreground mb-1">Peak</div>
          <div className="text-2xl font-bold text-wellness-healthy">88</div>
        </div>
        <div className="glass rounded-lg p-4 text-center">
          <div className="text-xs text-muted-foreground mb-1">Low</div>
          <div className="text-2xl font-bold text-wellness-warning">54</div>
        </div>
      </div>
    </div>
  );
}

const defaultData: MoodTrendData[] = [
  { date: "Mon", score: 65, sentiment: "neutral" },
  { date: "Tue", score: 72, sentiment: "positive" },
  { date: "Wed", score: 68, sentiment: "neutral" },
  { date: "Thu", score: 75, sentiment: "positive" },
  { date: "Fri", score: 88, sentiment: "positive" },
  { date: "Sat", score: 82, sentiment: "positive" },
  { date: "Sun", score: 78, sentiment: "neutral" },
];
