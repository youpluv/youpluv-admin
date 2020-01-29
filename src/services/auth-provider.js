import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR, AUTH_CHECK } from "react-admin";
<<<<<<< HEAD
import { Auth } from "aws-amplify";
=======
import config from "../config/constants";
import Axios from "axios";

const baseUrl = config.BASE_URL;
>>>>>>> s3-upload

export default (type, params) => {
  if (type === AUTH_LOGIN) {
    const { username, password } = params;
<<<<<<< HEAD

    return Auth.signIn(username, password)
      .then(response => {
        if (response.status < 200 || response.status >= 300) {
          throw new Error(response.statusText);
        }
        return response;
      })
      .then(async () => {
        const token = (await Auth.currentSession()).idToken.jwtToken;
        localStorage.setItem("token", token);
      })
=======
    const body = {
      email: username,
      password
    };

    return Axios.post(`${baseUrl}login/`, body)
      .then(response => {
        console.log(response);

        if (response.status < 200 || response.status >= 300) {
          throw new Error(response.statusText);
        }
        localStorage.setItem("token", response.data.token);
        return response;
      })
>>>>>>> s3-upload
      .catch(error => {
        console.log("Erro fazendo login: ", error);
        throw new Error(error.message);
      });
  }
  if (type === AUTH_LOGOUT) {
<<<<<<< HEAD
    Auth.signOut();
=======
>>>>>>> s3-upload
    localStorage.removeItem("token");
    return Promise.resolve();
  }
  if (type === AUTH_ERROR) {
    const status = params.status;
    if (status === 401 || status === 403) {
<<<<<<< HEAD
      Auth.signOut();
=======
>>>>>>> s3-upload
      localStorage.removeItem("token");
      return Promise.reject();
    }
    return Promise.resolve();
  }
  if (type === AUTH_CHECK) {
    return localStorage.getItem("token") ? Promise.resolve() : Promise.reject();
  }

  return Promise.resolve();
};
