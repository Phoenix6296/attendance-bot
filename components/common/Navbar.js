/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Modal from "./Modal";
import Dropdown from "./Dropdown";

export const Navbar = () => {
  const [profile, setProfile] = useState({});
  const [showPop, setPop] = useState(false);
  const [showDropdown, setDropdown] = useState(false);

  useEffect(() => {
    if (window !== undefined) {
      setProfile(JSON.parse(window?.localStorage?.getItem("USER")));
    }
  }, []);

  return (
    <>
      <div className="px-5 py-4 lg:py-0 lg:pt-8 lg:pb-4 flex items-center justify-between bg-white relative shadow-sm">
        <div
          className="flex items-center gap-2 bg-[#ECF4FF] p-2 rounded-full cursor-pointer border"
          onClick={() => setDropdown(!showDropdown)}
        >
          <Image src={"/common/logo.png"} height={30} width={30} alt="logo" />
          <Image
            src={"/common/down-arrow.png"}
            height={8}
            width={8}
            alt="logo"
            className={`transform ${showDropdown ? "rotate-180" : ""}`}
          />
        </div>
        <div className="flex gap-4">
          <div className="flex gap-3 items-center relative">
            <button
              onClick={() => setPop(() => !showPop)}
              className="flex gap-3 items-center lg:p-2 border border-black border-opacity-10 rounded-lg"
            >
              <Image
                src="/common/profile.svg"
                alt="profile"
                className="hover:shadow rounded-lg"
                height={40}
                width={40}
              />
              <p className="text-sm hidden lg:block">{profile.email}</p>
            </button>
            {showPop ? (
              <div className="px-4 py-4 rounded-lg absolute bg-white border border-black border-opacity-10 top-12 right-0 lg:w-full w-[13rem] flex flex-col gap-4">
                <div className="flex text-base items-center gap-2">
                  <Image
                    src="/common/profile.svg"
                    alt="profile"
                    className="hover:shadow rounded-lg"
                    height={24}
                    width={24}
                  />
                  <span className="truncate">{profile.email}</span>
                </div>
                <hr className="h-px bg-gray-200 border-0" />
                <div
                  onClick={() => {
                    window?.localStorage.clear();
                    router.push("/");
                  }}
                >
                  <div className="flex items-center gap-2 swing-in-top-fwd">
                    <Image
                      src={"/common/logout.svg"}
                      alt="logout"
                      height={12}
                      width={24}
                    />
                    <span className="text-red hover:cursor-pointer">
                      Logout
                    </span>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <Modal isVisible={showDropdown} onClose={setDropdown}>
        <Dropdown setShow={setDropdown} _className="lg:hidden left-5" />
      </Modal>
    </>
  );
};
