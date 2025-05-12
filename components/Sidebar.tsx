"use client";
import { useRouter } from "next/navigation";

export default function Sidebar() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("auth");
    router.push("/login");
  };

  return (
    <div>
      <button onClick={() => router.push("/")}>Home</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
