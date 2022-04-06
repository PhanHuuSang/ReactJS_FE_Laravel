import React, { useState } from "react";
import Modal from "../../../../../Modal";
import ModalMobline from "../../../../../ModalMobile";
import ModalMainOrder from "../../../ModalMainOrder";
import ProductMainOrderLeftBody from "./components/ProductMainOrderLeftBody";
import ProductMainOrderLeftBottom from "./components/ProductMainOrderLeftBottom";
import ProductMainOrderLeftTop from "./components/ProductMainOrderLeftTop";

const ProductMainOrderLeft = () => {
  const [toggleModalDN, setToggleModalDN] = useState(false);
  const ModalFlow = () => {
    setToggleModalDN(true);
    if (window.innerWidth > 1200) {
      document.querySelector("body").style = "overflow:hidden";
    }
  };
  const closeXModal = () => {
    setToggleModalDN(false);
    document.querySelector("body").style = null;
  };

  const [clickModalOrder, setClickModalOrder] = useState(false);
  const closeXModalOrder = () => {
    setClickModalOrder(false);
    document.body.style = null;
  };

  const ModalDCFlow = () => {
    setClickModalOrder(true);
    document.body.style = "overflow:hidden";
  };

  return (
    <div class="productMainOrderLeft">
      <ProductMainOrderLeftTop></ProductMainOrderLeftTop>
      <ProductMainOrderLeftBottom></ProductMainOrderLeftBottom>
      {toggleModalDN && window.innerWidth > 1200 ? (
        <Modal toggleCloseUser={closeXModal}></Modal>
      ) : null}
      {toggleModalDN && window.innerWidth <= 1200 ? (
        <ModalMobline></ModalMobline>
      ) : null}
      {clickModalOrder ? (
        <ModalMainOrder closeXModalDC={closeXModalOrder}></ModalMainOrder>
      ) : null}
    </div>
  );
};

export default ProductMainOrderLeft;
