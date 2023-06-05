import axios from "axios";
import { BASE_URL } from "../constants";
import { toast } from "react-hot-toast";

export const handleFaceRecognition = async (image, setData, setLoading) => {
  try {
    setLoading(true);
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
      toast.success(response?.message || "Successfully Registered");
      setData(response?.data?.name);
      setLoading(false);
    } else {
      setLoading(false);
      toast.error(response?.data?.message || "Something went wrong");
    }
  } catch (e) {
    console.log(e);
    toast.error(
      e?.response?.data?.message?.length > 100
        ? "Unable to Process"
        : e?.response?.data?.message || "Something went wrong"
    );
    setLoading(false);
  }
};
