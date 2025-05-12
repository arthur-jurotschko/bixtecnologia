import { render, screen } from "@testing-library/react";
import BarChart from "../components/BarChart";
import React from "react";

const mockData = [
  { amount: "5565", date: "1672531200000", transaction_type: "deposit" },
  { amount: "4300", date: "1672617600000", transaction_type: "withdraw" }
];

test("Exibe corretamente os valores no gráfico de barras", () => {
  render(<BarChart data={mockData.map(tx => Number(tx.amount) / 100)} />);

  expect(screen.getByText("55.65")).toBeInTheDocument();
  expect(screen.getByText("43.00")).toBeInTheDocument();
});
