// import axiosClient from "./axiosClient";
const { default: axiosClient } = require("./axiosClient");
const medicinesApi = {
  getMedicines() {
    const url = "/medicines";
    return axiosClient.get(url);
  },
};

export default medicinesApi;
