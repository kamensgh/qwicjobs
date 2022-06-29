import axios from "axios";

const BASE_URL = "https://qwicjobs-api.herokuapp.com/";

export const axiosRequest = axios.create({
  baseURL: BASE_URL,
});
// export const userRequest = axios.create({
//     baseURL: BASE_URL,
//     headers: {token: `Bearer ${TOKEN}`}
// })
