"use client";
import { useCallback, useRef, useState, useEffect } from "react";
import Webcam from "react-webcam";
import Layout from "../../components/Layout";
import { Button } from "@/components/common/Button";
import { handleRegister } from "@/utils/apis/handleRegister";

export default function Register() {
  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user",
  };

  const [listOfImage, setListOfImage] = useState([]);

  const [loading, setLoading] = useState(false);

  const webcamRef = useRef(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    if (listOfImage.length < 5) {
      setListOfImage((prev) => [...prev, imageSrc]);
    }
  }, [webcamRef, listOfImage]);

  const resetCapture = useCallback(() => {
    setListOfImage([]);
  }, []);

  useEffect(() => {
    if (listOfImage.length === 5) {
      handleRegister(listOfImage, setListOfImage, setLoading);
    }
  }, [listOfImage]);

  return (
    <Layout>
      <div className="p-10">
        <h1 className="text-3xl text-grayDarker lg:mb-0 mb-10">
          Register the User
        </h1>
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:mt-20 gap-5">
          <div className="flex flex-col items-center justify-center gap-5">
            <div className="w-full rounded-xl overflow-hidden shadow-lg">
              <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                videoConstraints={videoConstraints}
              />
            </div>
            <Button
              title={"Capture"}
              onClick={capture}
              className={"bg-primary text-white"}
              disabled={listOfImage.length >= 5}
              setLoading={loading}
            />
          </div>
          <div className="flex items-center justify-center w-full overflow-scroll gap-5">
            {[...Array(5)].map((_, index) => (
              <div className="w-52 h-40 rounded-lg overflow-hidden">
                {listOfImage[index] ? (
                  <img
                    src={listOfImage[index]}
                    alt={`captured${index}`}
                    className="w-full h-full"
                  />
                ) : (
                  <div className="w-full h-full border rounded-lg"></div>
                )}
              </div>
            ))}
          </div>
          {listOfImage.length > 0 && (
            <Button title={"Try Again"} onClick={resetCapture} />
          )}
        </div>
      </div>
    </Layout>
  );
}
