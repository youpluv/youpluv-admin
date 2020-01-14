import {API} from "aws-amplify"

import config from "../config/constants";

export const getFiles = () => {
    return API.get(config.APIS.MYLASH_ADMIN, 'file');
}
