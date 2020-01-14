import { API } from "aws-amplify";

import config from "../config/constants";

const getUsers = () => {
  // FIXME: remover paginaçao no back para remover aqui também
  return API.get(
    config.APIS.MYLASH_ADMIN,
    "franchise?pagination_page=1&pagination_perPage=9999"
  );
};

const UserService = {
  getUsers
};

export default UserService;
