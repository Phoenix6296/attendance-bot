"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/common/Button";

export default function Attendance() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        router.push("/attendance");
      }, 3000);
    }
  }, [loading]);

  return (
    <section className="h-screen w-full flex items-center justify-center">
      <div
        className="flex flex-col cursor-pointer select-none items-center gap-3 hover:text-blue-700"
        onClick={() => setLoading(true)}
      >
        <Image
          src="/common/attendace.gif"
          alt="logo"
          width={200}
          height={200}
        />
        <Button
          title={"Start"}
          className={"bg-primary text-white"}
          onClick={() => setLoading(true)}
          loading={loading}
        />
      </div>
    </section>
  );
}
