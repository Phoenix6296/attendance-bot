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
      <Link href="/register">
        <div className="lg:flex hidden items-center gap-2">
          <Image src={"/common/logo.png"} height={40} width={40} alt="logo" />
          <h1 className="font-ftMedium text-grayDarker">Attendance System</h1>
        </div>
      </Link>
      <div className="flex gap-5">
        <div className="flex items-center justify-center gap-5">
          <Link href="/register" className="hover:text-primary">
            Register
          </Link>
          <Link href="/attendance" className="hover:text-primary">
            Attendance
          </Link>
        </div>
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
                className="swing-in-top-fwd px-4 py-3 rounded-lg text-red absolute bg-white border border-black border-opacity-10 left-0 top-12 w-full flex gap-4"
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
    </div>
  );
};
