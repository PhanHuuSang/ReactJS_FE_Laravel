import React, { useState } from "react";
import Nav from "../Nav";
import avatar from "../../images/avatar.jpg";
import Nav__Top from "../Nav__Top";
import Container from "../Container";
import ProductType from "../NavProduct/components/ProductType";
import ProductName from "../NavProduct/components/ProductName";
import ProductAddType from "../NavProduct/components/ProductAddType";
import listType3 from "../Configs/listType3";

const NavProductType3 = (props) => {
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
                <div class="Product__Table">
                  <table>
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Name Product</th>
                        <th>Category</th>
                        <th>Name People</th>
                        <th>Phone</th>
                        <th>Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {listType3.map((name) => (
                        <tr>
                          <th>{name.id}</th>
                          <th>{name.name}</th>
                          <th>{name.category}</th>
                          <th></th>
                          <th>{name.phone}</th>
                          <th>{name.date}</th>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default NavProductType3;
