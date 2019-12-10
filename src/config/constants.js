const APIS = {
  BOLAOABBR: "mylash-api",
  BOLAOABBR_PUBLIC: "mylash-public-api",
  BOLAOABBR_ADMIN: "mylash-admin-api"
};

const STAGES = {
  dev: {
    COGNITO: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_zakxcfV58",
      APP_CLIENT_ID: "52f29jf7umop7qs9m2tqftpsfv"
    },
    APIS,
    DOMAIN: "https://1qizvqhap1.execute-api.us-east-1.amazonaws.com/dev",
    DOMAIN_ADMIN: "https://1qizvqhap1.execute-api.us-east-1.amazonaws.com/dev/admin/"
  },
  stg: {},
  prd: {
    COGNITO: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_zakxcfV58",
      APP_CLIENT_ID: "52f29jf7umop7qs9m2tqftpsfv"
    },
    APIS,
    DOMAIN: "https://1qizvqhap1.execute-api.us-east-1.amazonaws.com/dev",
    DOMAIN_ADMIN: "https://1qizvqhap1.execute-api.us-east-1.amazonaws.com/dev/admin/"
  }
};

const env = process.env.REACT_APP_STAGE || 'dev';
const config = STAGES[env];

export default config;
