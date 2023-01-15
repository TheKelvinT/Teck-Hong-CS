import axios from "axios";
import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

export const makeRequest = () =>
  axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
      Authorization: "bearer " + process.env.REACT_APP_API_TOKEN,
    },
  });
