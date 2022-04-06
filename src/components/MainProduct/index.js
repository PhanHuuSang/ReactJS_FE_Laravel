import React from "react";
import "../../scss/MainProduct.scss";
import SectionContentProduct from "./components/SectionContentProduct";
import SectionNav from "./components/SectionNav";
import SectionProduct from "./components/SectionProduct";

const MainProduct = (props) => {
  const { addCart3, addcart2, addCart1, addCartNow } = props;
  return (
    <div class="mainProduct">
      <SectionNav></SectionNav>
      <SectionProduct
        addCart1={addCart1}
        addCartNow={addCartNow}
      ></SectionProduct>
      <SectionContentProduct
        addCart3={addCart3}
        addcart2={addcart2}
      ></SectionContentProduct>
    </div>
  );
};

export default MainProduct;
