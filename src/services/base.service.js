import Axios from "axios";

export const axiosInstance = async () => {
  const instance = Axios.create({
    baseURL: "https://youpluv.herokuapp.com/api/",
    headers: {
      Authorization: `Bearer ${await localStorage.getItem("token")}`
    }
  });
  return instance;
};
