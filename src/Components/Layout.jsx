import { StateCard } from "./UI/State-card";  // Correct import
import { useState } from "react";
import { DocumentTextIcon, CurrencyDollarIcon, CreditCardIcon, UsersIcon, EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import { MainAreaChart } from "./UI/Charts";  // Import MainAreaChart

export default function Layout({ isDrawerOpen }) {
  const [stats] = useState([
    {
      title: "Total Sales",
      value: "34,945",
      change: "+1.56%",
      trend: "up",
      icon: <DocumentTextIcon className="w-5 h-5" />,
      color: "emerald",
      chartColor: "#10b981",
    },
    {
      title: "Total Income",
      value: "$37,802",
      change: "-1.56%",
      trend: "down",
      icon: <CurrencyDollarIcon className="w-5 h-5" />,
      color: "orange",
      chartColor: "#f97316",
    },
    {
      title: "Orders Paid",
      value: "34,945",
      change: "0.00%",
      trend: "neutral",
      icon: <CreditCardIcon className="w-5 h-5" />,
      color: "gray",
      chartColor: "#94a3b8",
    },
    {
      title: "Total Visitor",
      value: "34,945",
      change: "+1.56%",
      trend: "up",
      icon: <UsersIcon className="w-5 h-5" />,
      color: "blue",
      chartColor: "#2563eb",
    },
  ]);

  const miniChartData = Array(10)
    .fill(0)
    .map((_, i) => ({ value: Math.random() * 100 }));

  const areaChartData = Array(12)
    .fill(0)
    .map((_, i) => ({
      date: new Date(2024, i, 1).toLocaleString("default", { month: "short" }),
      value: Math.random() * 100 + 50,
    }));

  return (
    <div className={`min-h-screen bg-gray-50 p-6 transition-all duration-300 ${isDrawerOpen ? 'ml-64' : 'ml-0'}`}>
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StateCard
              key={index}
              title={stat.title}
              value={stat.value}
              change={stat.change}
              trend={stat.trend}
              icon={stat.icon}
              color={stat.color}
              chartColor={stat.chartColor}
              chartData={miniChartData}
            />
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-900">Recent Order</h2>
              <button className="p-2 hover:bg-gray-50 rounded-full transition-colors">
                <EllipsisHorizontalIcon className="w-6 h-6 text-gray-500" />
              </button>
            </div>
            <div className="h-[300px] w-full">
              <MainAreaChart data={areaChartData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
