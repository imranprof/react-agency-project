'use client'

import { useEffect } from "react";
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push("/branding");
  }, [router]);

  return (
    <main>
    </main>
  );
}
