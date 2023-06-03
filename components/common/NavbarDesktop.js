/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

export const NavbarDesktop = () => {
  const router = useRouter();
  const [showPop, setShowPop] = useState(false);
  const [profile, setProfile] = useState({});

  useEffect(() => {
    if (window !== undefined) {
      setProfile(JSON.parse(window?.localStorage?.getItem("USER")));
    }
  }, []);

  return (
    <div className="bg-white flex items-center px-4 py-5 justify-between sticky top-0 z-50 shadow-sm">
      <Link href="/attendance">
        <div className="flex items-center gap-2">
          <Image src={"/common/logo.png"} height={40} width={40} alt="logo" />
          <h1 className="font-ftMedium">Attendance System</h1>
        </div>
      </Link>
      <div className="flex items-center gap-4 text-sm">
        <button
          className="flex gap-3 items-center p-2 border border-black border-opacity-10 rounded-lg relative"
          onClick={() => setShowPop(!showPop)}
        >
          <Image
            src="/common/profile.svg"
            alt="profile"
            className="hover:shadow rounded-lg"
            height={24}
            width={24}
          />
          <p className="text-sm">{profile.email}</p>
          {showPop ? (
            <div
              onClick={() => {
                window?.localStorage.clear();
                router.push("/");
              }}
              className="px-4 py-3 rounded-lg text-red absolute bg-white border border-black border-opacity-10 left-0 top-12 w-full flex gap-4"
            >
              <Image
                src={"/common/logout.svg"}
                alt="logout"
                height={12}
                width={24}
              />
              Logout
            </div>
          ) : null}
        </button>
      </div>
    </div>
  );
};
