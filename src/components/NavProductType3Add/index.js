import React, { useState } from "react";
import Container from "../Container";
import Nav from "../Nav";
import ProductAddType from "../NavProduct/components/ProductAddType";
import ProductName from "../NavProduct/components/ProductName";
import ProductType from "../NavProduct/components/ProductType";
import avatar from "../../images/avatar.jpg";
import Nav__Top from "../Nav__Top";

const NavProductType3Add = () => {
  const [activeType, setActiveType] = useState(3);
  const [activeMenu, setActiveMenu] = useState(5);
  return (
    <div class="navFull">
      <Nav
        checkActiveMenu={() => setActiveMenu(activeMenu)}
        activeMenu={activeMenu}
      ></Nav>
      <div class="nav__Left">
        <Nav__Top nameNav="Products" avatar={avatar}></Nav__Top>
        <div class="nav__Product">
          <Container>
            <div class="row">
              <div class="col-md-12">
                <ProductType
                  ClickActiveType={() => setActiveType(activeType)}
                  activeType={activeType}
                ></ProductType>
                <ProductName nameProduct="Quản lý danh mục"></ProductName>
                <ProductAddType
                  nameLink="/product/type3/add"
                  nameTypeAdd="Thêm sản phẩm"
                ></ProductAddType>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default NavProductType3Add;
