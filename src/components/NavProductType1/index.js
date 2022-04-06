import React, { useEffect, useState } from "react";
import Nav from "../Nav";
import ProductAddType from "../NavProduct/components/ProductAddType";
import ProductType from "../NavProduct/components/ProductType";
import ProductName from "../NavProduct/components/ProductName";
import avatar from "../../images/avatar.jpg";
import Nav__Top from "../Nav__Top";
import Container from "../Container";
import listType1 from "../Configs/listType1";
import { Link } from "react-router-dom";

const NavProductType1 = (props) => {
  const [activeType, setActiveType] = useState(1);
  const [activeMenu, setActiveMenu] = useState(5);
  const [data, setData] = useState([]);

  useEffect(async () => {
    getData();
  }, []);

  async function getData() {
    let result = await fetch("http://localhost:8000/api/medicines");
    result = await result.json();
    setData(result);
  }

  async function deleteMedicines(id) {
    let deleteItem = await fetch(
      "http://localhost:8000/api/deleteMedicines/" + id,
      {
        method: "DELETE",
      }
    );
    deleteItem = await deleteItem.json();
    getData();
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
                <ProductName nameProduct="Quản lý sản phẩm"></ProductName>
                <ProductAddType
                  nameLink="/product/type1/add"
                  nameTypeAdd="Thêm sản phẩm"
                ></ProductAddType>
                <div class="Product__Table">
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
                        <th>Action</th>
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
                          <td>
                            <button onClick={() => deleteMedicines(name.id)}>
                              <i class="fa-solid fa-trash"></i>
                            </button>
                            <Link to={"/product/type1/update/" + name.id}>
                              <span>
                                <i class="fa-solid fa-pen-to-square"></i>
                              </span>
                            </Link>
                          </td>
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

export default NavProductType1;
