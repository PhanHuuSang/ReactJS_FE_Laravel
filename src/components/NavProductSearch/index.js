import React, { useState } from "react";
import Nav from "../Nav";
import Nav__Top from "../Nav__Top";
import avatar from "../../images/avatar.jpg";
import Container from "../Container";
import ProductType from "../NavProduct/components/ProductType";
import ProductName from "../NavProduct/components/ProductName";
import ProductAddType from "../NavProduct/components/ProductAddType";

const NavProductSearch = () => {
  const [activeType, setActiveType] = useState(4);
  const [activeMenu, setActiveMenu] = useState(5);

  const [data, setData] = useState([]);
  async function search(key) {
    let result = await fetch(
      "http://localhost:8000/api/searchMedicines/" + key
    );
    result = await result.json();
    setData(result);
  }

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
                <ProductName nameProduct="Tìm kiếm sản phẩm"></ProductName>
                <div class="inputSearch">
                  <input
                    type="text"
                    onChange={(e) => search(e.target.value)}
                  ></input>
                </div>
                <div class="Product__Table3">
                  <table>
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Category_ID</th>
                        <th>Title</th>
                        <th>Discount</th>
                        <th>Price</th>
                        <th>Amount</th>
                        <th>Image</th>
                        <th>Content</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* {listType1.map((name) => (
                        <tr>
                          <th>{name.id}</th>
                          <th>{name.name}</th>
                          <th>{name.category}</th>
                          <th></th>
                          <th>{name.phone}</th>
                          <th>{name.date}</th>
                        </tr>
                      ))} */}
                      {data.map((name) => (
                        <tr>
                          <td>{name.id}</td>
                          <td>{name.name}</td>
                          <td>{name.category_id}</td>
                          <td>{name.title}</td>
                          <td>{name.discount}</td>
                          <td>{name.price}</td>
                          <td>{name.amount}</td>
                          <td>
                            <img src={"http://localhost:8000/" + name.image} />
                          </td>
                          <td>{name.content}</td>
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

export default NavProductSearch;
