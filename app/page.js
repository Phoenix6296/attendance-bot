"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Input } from "@/components/common/Input";
import { Button } from "@/components/common/Button";

/* eslint-disable @next/next/no-img-element */
export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <div className="h-screen w-full flex bg-white">
      <div className="w-full lg:w-1/2 px-10 lg:px-20">
        <div className="flex justify-between items-center h-full flex-col py-36 ">
          <div className="w-full flex flex-col">
            <div className="mb-10">
              <p className="text-2xl font-semibold">Login</p>
              <p className="text-base">Login to your Attendance System</p>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required={true}
                type="email"
                containerStyles={"w-full mb-6"}
                label={"Enter Email ID"}
                placeholder="Eg. krishna@gmail.com"
              />
              <Input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required={true}
                type="password"
                containerStyles={"w-full mb-10"}
                label={"Password"}
                placeholder="********"
                isShowPassword={true}
                isForgotPassword={true}
                isShowForgotPassword={true}
              />
              <Button
                loading={loading}
                color="bg-primary text-white"
                title={"Login"}
                onClick={() => {
                  window?.webengage?.track(WEBENGAGE_OBJ.LOGIN, {});
                }}
              />
            </form>
          </div>
        </div>
      </div>
      <div className="w-0 lg:w-1/2 flex items-center justify-center">
        <Image
          src="/common/attendance.jpg"
          alt="Login"
          width={640}
          height={0}
        />
      </div>
    </div>
  );
}
