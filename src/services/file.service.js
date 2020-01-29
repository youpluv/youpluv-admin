import { API } from "aws-amplify";

import config from "../config/constants";

const getFiles = () => {
  return API.get(config.APIS.MYLASH_ADMIN, "file");
};

const getUrl = () => {
  return API.get(config.APIS.MYLASH_ADMIN, "intranet/upload");
};

const getUrlImage = () => {
  return API.get(config.APIS.MYLASH_ADMIN, "franchise/upload-image");
};

const getPendenciaById = id => {
  const options = {
    body: {}
  };
  return API.get(config.APIS.MYLASH_ADMIN, "pendencias/" + id, options);
};

export default { getFiles, getUrl, getUrlImage, getPendenciaById };
