import React from "react";
import Container from "../../../Container";
import ProductMainCartLeft from "./components/ProductMainCartLeft";
import ProductMainCartRight from "./components/ProductMainCartRight";

const ProductMainCart = (props) => {
  const { clickDelete } = props;

  return (
    <div class="productCart">
      <Container>
        <div class="row">
          <div class="col-md-12">
            <ProductMainCartLeft
              clickDelete={clickDelete}
            ></ProductMainCartLeft>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductMainCart;
