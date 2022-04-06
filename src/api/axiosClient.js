import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:8000/api",
  headers: {
    "Content-Type": "application-json",
  },
});

// axiosClient.interceptors.response.use(
//   function (response) {
//     return response.data;
//   },
//   async function (error) {
//     return Promise.reject(error);
//   }
// );

export default axiosClient;
