import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "../Nav";
import Nav__Top from "../Nav__Top";
import avatar from "../../images/avatar.jpg";
import Container from "../Container";
import ProductType from "../NavProduct/components/ProductType";
import ProductName from "../NavProduct/components/ProductName";
import ProductAddType from "../NavProduct/components/ProductAddType";

const NavProductType2Update = (props) => {
  const [parent_id, setParent_id] = useState("");
  const [category_name, setCategory_name] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  const [activeType, setActiveType] = useState(2);
  const [activeMenu, setActiveMenu] = useState(5);

  const [data, setData] = useState([]);
  const { id } = useParams();
  useEffect(async () => {
    let result = await fetch(
      "http://localhost:8000/api/categoryMedicines/" + id
    );
    result = await result.json();
    setData(result);
    setParent_id(result.parent_id);
    setImage(result.image);
    setCategory_name(result.category_name);
    setContent(result.content);
  }, []);

  async function updateCategory(id) {
    const formData = new FormData();
    formData.append("image", image);
    formData.append("parent_id", parent_id);
    formData.append("category_name", category_name);
    formData.append("content", content);

    let result = await fetch(
      "http://localhost:8000/api/updateCategory/" + id + "?_method=PUT",
      {
        method: "POST",
        body: formData,
      }
    );
    if (result.ok === true) {
      alert("Bạn đã update sản phẩm thành công");
    } else {
      alert("Bạn đã update sản phẩm thất bại");
    }

    console.log(result);
  }

  const clickFile = () => {
    document.getElementById("file").click();
  };

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
                  nameLink="/product/type2/add"
                  nameTypeAdd="Thêm sản phẩm"
                ></ProductAddType>
                <div class="Product__Type1__Add">
                  <div class="Product__Type1__Add__Left">
                    <div class="Children__Type1">
                      <label>Tên hãng sản phẩm</label>
                      <input
                        defaultValue={data.category_name}
                        onChange={(e) => setCategory_name(e.target.value)}
                        type="text"
                        placeholder="Nhập tên hãng sản phẩm"
                        required
                      ></input>
                    </div>
                    <div class="Children__Type1">
                      <label>Nội dung mô tả hãng sản phẩm</label>
                      <textarea
                        defaultValue={data.content}
                        cols="80"
                        onChange={(e) => setContent(e.target.value)}
                        row="4"
                        placeholder="Nhập mô tả sản phẩm"
                      ></textarea>
                    </div>
                    <div class="Children__Type1">
                      <label>Hãng cha sản xuất</label>
                      <input
                        defaultValue={data.parent_id}
                        onChange={(e) => setParent_id(e.target.value)}
                        type="text"
                        placeholder="Nhập hãng sản xuất"
                        required
                      ></input>
                    </div>
                  </div>
                  <div class="Product__Type1__Add__Right">
                    <div class="logo512">
                      <img src={"http://localhost:8000/" + data.image}></img>
                    </div>
                    <input
                      defaultValue={data.image}
                      onChange={(e) => setImage(e.target.files[0])}
                      id="file"
                      type="file"
                      style={{ display: "none" }}
                      required
                    ></input>
                    <span onClick={clickFile}>
                      <i class="fa-solid fa-cloud-arrow-up"></i>
                    </span>
                  </div>
                  <button onClick={() => updateCategory(data.id)}>
                    <i class="fa-solid fa-circle-plus"></i> Update
                  </button>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default NavProductType2Update;
