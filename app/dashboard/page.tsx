"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import BarChart from "@/components/BarChart";

export default function Dashboard() {
  const router = useRouter();
  const [revenues, setRevenues] = useState<number[]>([]);

  useEffect(() => {
    if (!localStorage.getItem("auth")) {
      router.push("/login");
    }

    // Definir os dados de forma segura
    setRevenues([1000, 1200, 1400, 1600, 1800, 2000]);
  }, []);

  return (
    <div>
      <h1>Dashboard Financeiro</h1>
      {revenues.length > 0 && <BarChart data={revenues} />}
    </div>
  );
}
