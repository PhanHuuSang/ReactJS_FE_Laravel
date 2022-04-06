import React, { useEffect, useState } from "react";
import Container from "../Container";
import Nav from "../Nav";
import avatar from "../../images/avatar.jpg";
import ProductAddType from "../NavProduct/components/ProductAddType";
import ProductName from "../NavProduct/components/ProductName";
import ProductType from "../NavProduct/components/ProductType";
import Nav__Top from "../Nav__Top";
import listType2 from "../Configs/listType2";
import { Link } from "react-router-dom";

const NavProductType2 = (props) => {
  const [activeType, setActiveType] = useState(2);
  const [activeMenu, setActiveMenu] = useState(5);

  const [data, setData] = useState([]);
  useEffect(async () => {
    getData();
  }, []);

  async function deleteCategoryMedicines(id) {
    let result = await fetch("http://localhost:8000/api/deleteCategory/" + id, {
      method: "DELETE",
    });
    result = await result.json();
    getData();
  }

  async function getData() {
    let result = await fetch("http://localhost:8000/api/categoryMedicines");
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
                <ProductName nameProduct="Quản lý hãng"></ProductName>
                <ProductAddType
                  nameLink="/product/type2/add"
                  nameTypeAdd="Thêm sản phẩm"
                ></ProductAddType>
                <div class="Product__Table2">
                  <table>
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Name Category</th>
                        <th>Parent_ID</th>
                        <th>Content</th>
                        <th>Image</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((name) => (
                        <tr>
                          <td>{name.id}</td>
                          <td>{name.category_name}</td>
                          <td>{name.parent_id}</td>
                          <td>{name.content}</td>
                          <td>
                            <img src={"http://localhost:8000/" + name.image} />
                          </td>
                          <td>
                            <button
                              onClick={() => deleteCategoryMedicines(name.id)}
                            >
                              <i class="fa-solid fa-trash"></i>
                            </button>
                            <Link to={"/product/type2/update/" + name.id}>
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

export default NavProductType2;
