"use client";
import { Line } from "react-chartjs-2";

export default function LineChart({ data }: { data: number[] }) {
  if (!data || data.length === 0) return null;

  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [{ label: "Evolução", data, borderColor: "rgba(75, 192, 192, 1)", fill: false }],
  };

  return <Line data={chartData} />;
}
