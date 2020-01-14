import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import config from "./config/constants";
import Amplify, { Auth } from "aws-amplify";

const COMMON = {
  region: config.COGNITO.REGION,
  custom_header: async () => {
    return {
      Authorization: (await Auth.currentSession()).idToken.jwtToken
    };
  }
};

Amplify.configure({
  Auth: {
    region: config.COGNITO.REGION,
    userPoolId: config.COGNITO.USER_POOL_ID,
    userPoolWebClientId: config.COGNITO.APP_CLIENT_ID
  },
  API: {
    endpoints: [
      {
        name: config.APIS.MYLASH_ADMIN,
        endpoint: config.DOMAIN_ADMIN,
        ...COMMON
      },
      {
        name: config.APIS.MYLASH,
        endpoint: config.DOMAIN,
        ...COMMON
      },
      {
        name: config.APIS.MYLASH_PUBLIC,
        endpoint: config.DOMAIN
      },
      {
        name: "local",
        endpoint: "http://localhost:8500",
        ...COMMON
      }
    ]
  }
});

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
