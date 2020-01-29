const STAGES = {
  dev: {
    BASE_URL: "http://127.0.0.1:3333/"
  },
  stg: {},
  prd: {
    BASE_URL: "https://youpluv.herokuapp.com/"
  }
};

const env = process.env.REACT_APP_STAGE || "dev";
const config = STAGES[env];

export default config;
