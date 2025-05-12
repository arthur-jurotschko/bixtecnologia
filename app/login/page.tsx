"use client";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const handleLogin = () => {
    localStorage.setItem("auth", "true");
    router.push("/dashboard");
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
}
