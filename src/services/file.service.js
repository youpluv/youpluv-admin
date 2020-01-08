import { API } from "aws-amplify";

import config from "../config/constants";

export const getUrl = () => {
  return API.get(config.APIS.BOLAOABBR_ADMIN, "intranet/upload");
};

export const getPendenciaById = id => {
  const options = {
    body: {}
  };
  return API.get(config.APIS.BOLAOABBR_ADMIN, "pendencias/" + id, options);
};
