import axios from "axios";
import { BASE_URL } from "../constants";
import { toast } from "react-hot-toast";

export const handleRegister = async (
  listOfImages,
  setListOfImage,
  setLoading
) => {
  try {
    setLoading(true);
    const data = new FormData();
    let config = {
      method: "post",
      url: `${BASE_URL}/register`,
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: data,
    };
    listOfImages.forEach((image, index) => {
      data.append(`file${index}`, image);
    });
    const response = await axios(config);
    if (response.status == 200 || response.status == 201) {
      toast.success("User Registered Successfully");
      setLoading(false);
      setListOfImage([]);
    } else {
      setLoading(false);
      toast.error("Something went wrong");
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
