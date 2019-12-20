import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import config from "./config/constants";
import Amplify from "aws-amplify";

const COMMON = {
  region: config.COGNITO.REGION,
  custom_header: async () => {
    return {
      Authorization: "asdf"
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
        name: config.APIS.BOLAOABBR_ADMIN,
        endpoint: config.DOMAIN_ADMIN,
        ...COMMON
      },
      {
        name: config.APIS.BOLAOABBR,
        endpoint: config.DOMAIN,
        ...COMMON
      },
      {
        name: config.APIS.BOLAOABBR_PUBLIC,
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

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
