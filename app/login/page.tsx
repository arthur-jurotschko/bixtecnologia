"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username && password) {
      localStorage.setItem("auth", "true");
      router.push("/dashboard");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <input type="text" placeholder="Usuário" onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
}
