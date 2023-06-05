"use client";

import Layout from "@/components/Layout";
import Webcam from "react-webcam";
import { useRef, useCallback, useState, useEffect } from "react";
import { Button } from "@/components/common/Button";
import { handleFaceRecognition } from "@/utils/apis/handleFaceRecognition";

export default function Attendance() {
  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user",
  };

  const webcamRef = useRef(null);

  const [image, setImage] = useState(null);

  const [data, setData] = useState(null);

  const [loading, setLoading] = useState(false);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
  }, [webcamRef]);

  const [boxShadow, setBoxShadow] = useState(null);

  useEffect(() => {
    if (loading) {
      setBoxShadow("rgba(255, 255, 0, 0.5)");
    }
    if (data) {
      if (data === "Face not found in database.") {
        setBoxShadow("rgba(255, 0, 0, 0.5)");
      } else {
        setBoxShadow("rgba(0, 255, 0, 0.5)");
      }
    }
  }, [data, loading]);

  useEffect(() => {
    if (image) {
      handleFaceRecognition(image, setData, setLoading);
    }
  }, [image]);

  return (
    <Layout>
      <div className="flex flex-col lg:p-10 p-5 gap-5">
        <div
          style={{ boxShadow: `0 0 10px 5px ${boxShadow}` }}
          className={`w-full rounded-xl overflow-hidden shadow-lg transition-all duration-500 ease-in-out`}
        >
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
          />
        </div>

        <Button
          title={"Click to Verify"}
          className={"bg-primary text-white"}
          onClick={capture}
          loading={loading}
        />
      </div>
    </Layout>
  );
}
