// import axiosClient from "./axiosClient";
const { default: axiosClient } = require("./axiosClient");
const CartApi = {
  postCartApi() {
    const url = "/add-to-cart";
    return axiosClient.get(url);
  },
};

export default CartApi;
