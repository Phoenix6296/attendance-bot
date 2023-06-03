"use client";
import Layout from "@/components/Layout";
import { Camera } from "react-camera-pro";
import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/common/Button";
import UserData from "@/components/Attendance/UserData";
import Image from "next/image";
import { takePhoto } from "@/utils/apis/takePhoto";

export default function Attendace() {
  const camera = useRef(null);
  const [image, setImage] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    if (isClicked) {
      setTimeout(() => {
        setIsClicked(false);
      }, 5000);
    }
  }, [isClicked]);

  const handleTakePhoto = () => {
    setLoading(true);
    setIsClicked(true);
    setImage(camera.current.takePhoto());
    takePhoto(image, setData, setLoading);
  };

  return (
    <Layout>
      <div className="grid lg:grid-cols-2 grid-cols-1 lg:mt-20">
        <div className="flex flex-col items-center justify-center p-10 gap-5">
          <div className="w-full rounded-xl overflow-hidden shadow-lg">
            <Camera ref={camera} aspectRatio={16 / 9} />
          </div>
          <Button
            onClick={handleTakePhoto}
            title={"Click"}
            className={"bg-primary text-white"}
            loading={loading}
          />
        </div>
        <div className="flex items-center justify-center">
          {isClicked ? (
            <UserData
              name={data?.name || "Krishna"}
              email={data?.email || "krishna@gmail.com"}
              phone={data?.phone || "1234567890"}
              imgSrc={image || "/common/profile.jpg"}
            />
          ) : (
            <div className="flex flex-col items-center justify-center gap-3">
              <Image
                src={"/common/profile.png"}
                alt="Krishna"
                width={500}
                height={500}
                className="lg:block hidden rounded-xl shadow-lg"
              />
              <h1 className="text-3xl">Ready to go 🤘🏻</h1>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
