import axios from "axios";
import { BASE_URL } from "../constants";
import { toast } from "react-hot-toast";

export const takePhoto = async (image, setData, setLoading) => {
  try {
    setLoading(true);
    const data = new FormData();
    let config = {
      method: "post",
      url: `${BASE_URL}/take-photo`,
      headers: {
        Authorization: `bearer ${window.localStorage.getItem(
          ACCESS_TOKEN_KEY
        )}`,
        "Content-Type": "multipart/form-data",
      },
      data: data,
    };
    image && data.append("attendant_image", image);
    const response = await axios(config);
    if (response.status == 200 || response.status == 201) {
      //   setData(response.data.data);
      toast.success("Attendance Marked");
      setLoading(false);
    } else {
      setLoading(false);
      toast.error("Something went wrong");
    }
  } catch (e) {
    // toast.error(
    //   e?.response?.data?.message?.length > 100
    //     ? "Unable to Process"
    //     : e?.response?.data?.message || "Something went wrong"
    // );
    setLoading(false);
  }
};
