const APIS = {
  BOLAOABBR: "bolaoabbr-api",
  BOLAOABBR_PUBLIC: "bolaoabbr-public-api",
  BOLAOABBR_ADMIN: "bolaoabbr-admin-api"
};

const STAGES = {
  dev: {
    COGNITO: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_KSB5mpHsR",
      APP_CLIENT_ID: "63tm1s50masmlheprputq1gddt"
    },
    APIS,
    DOMAIN: "https://tek6o9u89b.execute-api.us-east-1.amazonaws.com/api",
    DOMAIN_ADMIN: "https://tek6o9u89b.execute-api.us-east-1.amazonaws.com/api/admin/"
  },
  stg: {},
  prd: {
    COGNITO: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_EaIhlTa2A",
      APP_CLIENT_ID: "33s2jn1hhcspjfl7bcbggie7dk"
    },
    APIS,
    DOMAIN: "https://dhov5q9xhh.execute-api.us-east-1.amazonaws.com/api",
    DOMAIN_ADMIN: "https://dhov5q9xhh.execute-api.us-east-1.amazonaws.com/api/admin/"
  }
};

const env = process.env.REACT_APP_STAGE || 'dev';
const config = STAGES[env];

export default config;
