"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(email,password)

  const router = useRouter();

  const saveData = () => {
    if (!email || !password) return;

    localStorage.setItem(
      "session",
      JSON.stringify({
        isLoggedIn: true,
        email,
      })
    );

    router.push("/dashboard");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-100 dark:bg-black font-sans">
      <div className="w-full max-w-sm rounded-xl border bg-white dark:bg-zinc-900 p-8 shadow-sm">
        <h1 className="mb-6 text-center text-2xl font-semibold">
          Welcome back
        </h1>

        <div className="flex flex-col gap-4">
          <Input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            onClick={saveData}
            className="w-full bg-blue-500 hover:bg-blue-600"
          >
            Log In
          </Button>
        </div>

        <p className="mt-4 text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <span className="cursor-pointer font-medium text-blue-500 hover:underline">
            Create an account
          </span>
        </p>
      </div>
    </div>
  );
}