import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { NavbarDesktop } from "../common/NavbarDesktop";
import { Navbar } from "../common/Navbar";
export default function Layout({ children }) {
  const router = useRouter();
  useEffect(() => {
    if (window !== undefined) {
      if (!window?.localStorage?.getItem("USER")) {
        window.localStorage.clear();
        router.push("/");
      }
    }
  }, [router]);

  return (
    <div className="w-full">
      <div className="w-full hidden lg:flex">
        <div className="relative desktop-view">
          <NavbarDesktop />
          <div>{children}</div>
        </div>
      </div>
      <div className="w-full lg:hidden mx-auto bg-graybg relative shadow-lg lg:pb-20 min-h-screen">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
