// import axiosClient from "./axiosClient";
const { default: axiosClient } = require("./axiosClient");
const usersApi = {
  postUsers() {
    const url = "/login";
    return axiosClient.post(url);
  },
};

export default usersApi;
