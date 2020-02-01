import { axiosInstance } from "../services/base.service";

const getRecords = async params => {
  return (await axiosInstance())
    .get("rainfall")
    .then(res => {
      return res.data;
    })
    .catch(error => {
      console.log("ERROR RAIND SERVICE :: ", error);
      // let message = "Ocorreu um erro inesperado";
    });
};

export { getRecords };
