import { AUTH_LOGIN,  AUTH_LOGOUT, AUTH_ERROR,  AUTH_CHECK } from 'react-admin';
import { Auth } from "aws-amplify";

export default (type, params) => {
    if (type === AUTH_LOGIN) {
        const { username, password } = params;

        return Auth.signIn(username, password)
        .then(response => {
          if (response.status < 200 || response.status >= 300) {
              throw new Error(response.statusText);
          }
          return response;
        }).then(async () => {
          const token = (await Auth.currentSession()).idToken.jwtToken
          localStorage.setItem('token', token);
      }).catch(error => {
          console.log("Erro fazendo login: ", error);
        throw new Error(error.message);

        });
    }
    if (type === AUTH_LOGOUT) {
        Auth.signOut()
        localStorage.removeItem('token');
        return Promise.resolve();
    }
    if (type === AUTH_ERROR) {
        const status  = params.status;
        if (status === 401 || status === 403) {
            Auth.signOut()
            localStorage.removeItem('token');
            return Promise.reject();
        }
        return Promise.resolve();
    }
    if (type === AUTH_CHECK) {
        return localStorage.getItem('token') ? Promise.resolve() : Promise.reject();
    }
    
    return Promise.resolve();
}


