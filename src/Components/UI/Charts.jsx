import { Line, Area, LineChart, AreaChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";

export function MiniLineChart({ data, color }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        <Line type="monotone" dataKey="value" stroke={color} strokeWidth={2} dot={false} />
      </LineChart>
    </ResponsiveContainer>
  );
}

export function MainAreaChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data}>
        <defs>
          <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#2563eb" stopOpacity={0.1} />
            <stop offset="95%" stopColor="#2563eb" stopOpacity={0.01} />
          </linearGradient>
        </defs>
        <XAxis
          dataKey="date"
          axisLine={false}
          tickLine={false}
          tick={{ fill: "#94a3b8", fontSize: 12 }}
          padding={{ left: 10, right: 10 }}
        />
        <YAxis axisLine={false} tickLine={false} tick={{ fill: "#94a3b8", fontSize: 12 }} />
        <Tooltip
          contentStyle={{
            backgroundColor: "white",
            border: "1px solid #e2e8f0",
            borderRadius: "8px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
          }}
        />
        <Area type="monotone" dataKey="value" stroke="#2563eb" strokeWidth={2} fill="url(#colorValue)" />
      </AreaChart>
    </ResponsiveContainer>
  );
}
