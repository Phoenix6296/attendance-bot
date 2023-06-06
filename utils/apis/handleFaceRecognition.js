import axios from "axios";
import { BASE_URL } from "../constants";
import { toast } from "react-hot-toast";

export const handleFaceRecognition = async (
  image,
  setData,
  setBoxShadow,
  setLoading
) => {
  try {
    setLoading(true);
    setBoxShadow("rgba(255, 255, 0, 0.5)");
    const data = new FormData();
    data.append("img", image);
    let config = {
      method: "post",
      url: `${BASE_URL}/recognise`,
      headers: { "Content-Type": "multipart/form-data" },
      data: data,
    };
    const response = await axios(config);
    if (response.status === 200 || response.status === 201) {
      setBoxShadow("rgba(0, 255, 0, 0.5)");
      toast.success(response?.message || "Successfully Registered");
      setData(response?.data?.name);
      setLoading(false);
    }
  } catch (e) {
    setBoxShadow("rgba(255, 0, 0, 0.5)");
    console.log(e?.response?.data?.message);
    setData(e?.response?.data?.message);
    setLoading(false);
  }
};
