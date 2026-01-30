import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";

interface HeatmapData {
  emotion: string;
  frequency: number;
  percentage: number;
}

interface EmotionalHeatmapProps {
  data?: HeatmapData[];
  title?: string;
}

export function EmotionalHeatmap({
  data = defaultHeatmapData,
  title = "Emotional Distribution (Anonymized)",
}: EmotionalHeatmapProps) {
  const getEmotionColor = (emotion: string): string => {
    const colors: Record<string, string> = {
      Happy: "#22c55e",
      Confident: "#84cc16",
      Calm: "#06b6d4",
      Anxious: "#f59e0b",
      Sad: "#3b82f6",
      Frustrated: "#f97316",
      Overwhelmed: "#ef4444",
      Hopeful: "#8b5cf6",
    };
    return colors[emotion] || "#a855f7";
  };

  return (
    <div className="w-full space-y-4">
      <div>
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        <p className="text-xs text-muted-foreground mt-1">
          District-wide emotional patterns (aggregated, privacy-protected)
        </p>
      </div>

      <div className="glass rounded-2xl p-6">
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis
              dataKey="emotion"
              stroke="rgba(255,255,255,0.5)"
              style={{ fontSize: "12px" }}
            />
            <YAxis
              stroke="rgba(255,255,255,0.5)"
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
            <Bar dataKey="frequency" radius={[8, 8, 0, 0]}>
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={getEmotionColor(entry.emotion)}
                  opacity={0.8}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Emotion Legend */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {data.map((item, idx) => (
          <div
            key={idx}
            className="glass rounded-lg p-3 text-center transition-all hover:border-white/20"
          >
            <div
              className="w-3 h-3 rounded-full mx-auto mb-2"
              style={{ backgroundColor: getEmotionColor(item.emotion) }}
            />
            <p className="text-xs font-medium text-foreground">{item.emotion}</p>
            <p className="text-xs text-muted-foreground mt-0.5">{item.percentage}%</p>
          </div>
        ))}
      </div>

      {/* Privacy Notice */}
      <div className="bg-secondary/10 border border-secondary/30 rounded-lg p-3 flex items-start gap-2">
        <div className="text-secondary text-lg flex-shrink-0">🔒</div>
        <div className="text-xs text-muted-foreground">
          <strong>Privacy-Protected:</strong> Data is aggregated and anonymized.
          Individual student identities are never displayed in district-wide analytics.
        </div>
      </div>
    </div>
  );
}

const defaultHeatmapData: HeatmapData[] = [
  { emotion: "Happy", frequency: 45, percentage: 18 },
  { emotion: "Confident", frequency: 52, percentage: 21 },
  { emotion: "Calm", frequency: 38, percentage: 15 },
  { emotion: "Anxious", frequency: 35, percentage: 14 },
  { emotion: "Sad", frequency: 28, percentage: 11 },
  { emotion: "Frustrated", frequency: 22, percentage: 9 },
  { emotion: "Overwhelmed", frequency: 12, percentage: 5 },
  { emotion: "Hopeful", frequency: 20, percentage: 8 },
];
