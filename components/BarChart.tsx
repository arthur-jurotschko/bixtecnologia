"use client";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import React from "react";


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function BarChart({ data }: { data: number[] }) {
  if (!data || data.length === 0) return null; // Evita erro de renderização vazia

  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Receitas",
        data: data,
        backgroundColor: "rgba(75, 192, 192, 0.7)",
      },
    ],
  };

  return <Bar data={chartData} />;
}
