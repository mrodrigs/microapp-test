"use client";

import { Auth } from "@microapp-io/auth";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const auth = new Auth();
    const a = async () => {
      auth.requestLogin();
    };

    a();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen text-4xl font-bold">
      Hello, Microapp!
    </div>
  );
}
