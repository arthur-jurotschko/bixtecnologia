"use client";
import { useRouter } from "next/navigation";

export default function Sidebar() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("auth");
    router.push("/login");
  };

  return (
    <nav>
      <a href="/dashboard">Home</a>
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
}
