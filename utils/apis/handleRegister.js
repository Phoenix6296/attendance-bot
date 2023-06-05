import axios from "axios";
import { BASE_URL } from "../constants";
import { toast } from "react-hot-toast";

export const handleRegister = async (
  listOfImages,
  setListOfImage,
  name,
  setName,
  setLoading
) => {
  setLoading(true);
  try {
    const data = new FormData();
    listOfImages.forEach((image, index) => {
      data.append(`img${index}`, image);
    });
    data.append("name", name);
    let config = {
      method: "post",
      url: `${BASE_URL}/register`,
      headers: { "Content-Type": "multipart/form-data" },
      data: data,
    };
    const response = await axios(config);
    if (response.status === 200 || response.status === 201) {
      toast.success(response?.message || "Successfully Registered");
      setLoading(false);
      setName("");
      setListOfImage([]);
    } else {
      setLoading(false);
      toast.error(response?.message || "Something went wrong");
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
