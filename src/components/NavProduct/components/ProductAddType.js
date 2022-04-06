import React from "react";
import { Link } from "react-router-dom";

const ProductAddType = (props) => {
  const { nameTypeAdd, nameLink, nameLinkUpdate, nameUpdateAdd } = props;
  return (
    <div class="Product__Type__Add">
      <Link to={nameLink}>
        <span>
          {" "}
          <i class="fa-solid fa-circle-plus"></i>{" "}
        </span>
        {nameTypeAdd}
      </Link>
    </div>
  );
};

export default ProductAddType;
