"use client";
import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Transaction = {
  amount: number;
  industry: string;
  state: string;
};

export default function DashboardPage() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [filteredTransactions, setFilteredTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/data");
      const data = await response.json();
      setTransactions(data);
      setFilteredTransactions(data);
    }
    fetchData();
  }, []);

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader>
          <CardTitle>Total Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{transactions.length}</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Total Amount</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            ${filteredTransactions.reduce((acc, curr) => acc + curr.amount, 0).toFixed(2)}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
