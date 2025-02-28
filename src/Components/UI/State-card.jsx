import { MiniLineChart } from "./Mini-line-chart";

export function StateCard({ title, value, change, trend, icon, color, chartColor, chartData }) {
  const getColorClasses = (color) => {
    const classes = {
      emerald: {
        bg: "bg-emerald-50",
        text: "text-emerald-600",
        icon: "text-emerald-500",
      },
      orange: {
        bg: "bg-orange-50",
        text: "text-orange-600",
        icon: "text-orange-500",
      },
      gray: {
        bg: "bg-gray-50",
        text: "text-gray-600",
        icon: "text-gray-500",
      },
      blue: {
        bg: "bg-blue-50",
        text: "text-blue-600",
        icon: "text-blue-500",
      },
    };
    return classes[color];
  };

  const colors = getColorClasses(color);
  const trendColor = trend === "up" ? "text-emerald-600" : trend === "down" ? "text-red-600" : "text-gray-600";

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg ${colors.bg}`}>
              <div className={colors.icon}>{icon}</div>
            </div>
            <span className="text-sm text-gray-500">{title}</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
          <span className={`text-sm ${trendColor}`}>{change}</span>
        </div>
        <div className="w-24 h-12">
          <MiniLineChart data={chartData} color={chartColor} />
        </div>
      </div>
    </div>
  );
}
