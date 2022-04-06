import React, { useState } from "react";
import Container from "../Container";
import Nav from "../Nav";
import ProductAddType from "../NavProduct/components/ProductAddType";
import ProductName from "../NavProduct/components/ProductName";
import ProductType from "../NavProduct/components/ProductType";
import avatar from "../../images/avatar.jpg";
import Nav__Top from "../Nav__Top";
import logo512 from "../../images/logo512.png";

const NavProductType2Add = () => {
  const [activeType, setActiveType] = useState(2);
  const [activeMenu, setActiveMenu] = useState(5);

  const [parent_id, setParent_id] = useState("");
  const [category_name, setCategory_name] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  async function addCategoryMedicines() {
    const formData = new FormData();
    formData.append("image", image);
    formData.append("parent_id", parent_id);
    formData.append("category_name", category_name);
    formData.append("content", content);

    let result = await fetch("http://localhost:8000/api/add-categoryMedicine", {
      method: "POST",
      body: formData,
    });
    if (result.ok === true) {
      alert("Bạn đã thêm hãng thành công");
    } else {
      alert("Bạn đã thêm hãng thất bại");
    }
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
                <ProductName nameProduct="Quản lý hãng"></ProductName>
                <ProductAddType
                  nameLink="/product/type2/add"
                  nameTypeAdd="Thêm sản phẩm"
                ></ProductAddType>
                <div class="Product__Type1__Add">
                  <div class="Product__Type1__Add__Left">
                    <div class="Children__Type1">
                      <label>Tên hãng sản phẩm</label>
                      <input
                        onChange={(e) => setCategory_name(e.target.value)}
                        type="text"
                        placeholder="Nhập tên hãng sản phẩm"
                        required
                      ></input>
                    </div>
                    <div class="Children__Type1">
                      <label>Nội dung mô tả hãng sản phẩm</label>
                      <textarea
                        onChange={(e) => setContent(e.target.value)}
                        cols="80"
                        row="4"
                        placeholder="Nhập mô tả sản phẩm"
                      ></textarea>
                    </div>
                    <div class="Children__Type1">
                      <label>Hãng cha sản xuất</label>
                      <input
                        onChange={(e) => setParent_id(e.target.value)}
                        type="text"
                        placeholder="Nhập hãng sản xuất"
                        required
                      ></input>
                    </div>
                  </div>
                  <div class="Product__Type1__Add__Right">
                    <div class="logo512">
                      <img src={logo512}></img>
                    </div>
                    <input
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
                  <button onClick={addCategoryMedicines}>
                    <i class="fa-solid fa-circle-plus"></i> Thêm
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

export default NavProductType2Add;
