"use client";
import { useCallback, useRef, useState, useEffect } from "react";
import Webcam from "react-webcam";
import Layout from "../../components/Layout";
import { Button } from "@/components/common/Button";
import { handleRegister } from "@/utils/apis/handleRegister";
import { Input } from "@/components/common/Input";

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
    setName("");
  }, []);

  const [name, setName] = useState("");

  useEffect(() => {
    if (listOfImage.length === 5) {
      handleRegister(listOfImage, setListOfImage, name, setName, setLoading);
    }
  }, [listOfImage]);

  return (
    <Layout>
      <div className="lg:p-10 p-5">
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
            <div className="w-full">
              <Input
                placeholder={"Enter your name"}
                required={true}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <Button
              title={"Capture"}
              onClick={capture}
              className={"bg-primary text-white"}
              disabled={listOfImage.length >= 5 || name.length <= 3}
              loading={loading}
            />
          </div>
          <div className="flex items-center justify-center w-full overflow-scroll gap-5">
            {[...Array(5)].map((_, index) => (
              <div className="w-52 h-40 rounded-lg overflow-hidden" key={index}>
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
