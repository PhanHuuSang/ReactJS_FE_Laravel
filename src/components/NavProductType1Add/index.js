import React, { useState } from "react";
import Container from "../Container";
import Nav from "../Nav";
import ProductAddType from "../NavProduct/components/ProductAddType";
import ProductName from "../NavProduct/components/ProductName";
import ProductType from "../NavProduct/components/ProductType";
import avatar from "../../images/avatar.jpg";
import Nav__Top from "../Nav__Top";
import logo512 from "../../images/logo512.png";

const NavProductType1Add = () => {
  const [activeType, setActiveType] = useState(1);
  const [activeMenu, setActiveMenu] = useState(5);

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [category_id, setCategoryId] = useState("");
  const [discount, setDiscount] = useState("");
  const [amount, setAmount] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  async function addMedicine() {
    const formData = new FormData();
    formData.append("image", image);
    formData.append("name", name);
    formData.append("price", price);
    formData.append("category_id", category_id);
    formData.append("discount", discount);
    formData.append("amount", amount);
    formData.append("title", title);
    formData.append("content", content);

    let result = await fetch("http://localhost:8000/api/add-medicine", {
      method: "POST",
      body: formData,
    });
    if (result.ok === true) {
      alert("Bạn đã thêm sản phẩm thành công");
    } else {
      alert("Bạn đã thêm sản phẩm thất bại");
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
                <ProductName nameProduct="Quản lý sản phẩm"></ProductName>
                <ProductAddType
                  nameLink="/product/type1/add"
                  nameTypeAdd="Thêm sản phẩm"
                ></ProductAddType>
                <div class="Product__Type1__Add">
                  <div class="Product__Type1__Add__Left">
                    <div class="Children__Type1">
                      <label>Tên sản phẩm</label>
                      <input
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        placeholder="Nhập tên sản phẩm"
                        required
                      ></input>
                    </div>
                    <div class="Children__Type1">
                      <label>Title sản phẩm</label>
                      <input
                        onChange={(e) => setTitle(e.target.value)}
                        type="text"
                        placeholder="Nhập title sản phẩm"
                        required
                      ></input>
                    </div>
                    <div class="Children__Type1">
                      <label>Nội dung mô tả sản phẩm</label>
                      <textarea
                        onChange={(e) => setContent(e.target.value)}
                        cols="80"
                        row="4"
                        placeholder="Nhập mô tả sản phẩm"
                      ></textarea>
                    </div>

                    <div class="Children__Type1">
                      <label>Danh mục sản phẩm</label>
                      <input
                        onChange={(e) => setCategoryId(e.target.value)}
                        type="text"
                        placeholder="Nhập danh mục sản phẩm"
                        required
                      ></input>
                    </div>
                    {/* <div class="Children__Type1">
                        <label>Hãng sản xuất</label>
                        <input
                          type="text"
                          placeholder="Nhập hãng sản xuất"
                          required
                        ></input>
                      </div> */}
                    <div class="Children__Type1">
                      <label>Số lượng sản phẩm</label>
                      <input
                        type="number"
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Nhập số lượng sản phẩm"
                        min="0"
                        required
                      ></input>
                    </div>
                    <div class="Children__Type1">
                      <label>Số tiền giảm giá sản phẩm</label>
                      <input
                        type="number"
                        onChange={(e) => setDiscount(e.target.value)}
                        placeholder="Nhập số tiền giảm giá sản phẩm"
                        min="0"
                        required
                      ></input>
                    </div>
                    <div class="Children__Type1">
                      <label>Số tiền sản phẩm</label>
                      <input
                        type="number"
                        onChange={(e) => setPrice(e.target.value)}
                        placeholder="Nhập số tiền sản phẩm"
                        min="0"
                        required
                      ></input>
                    </div>
                  </div>
                  <div class="Product__Type1__Add__Right">
                    <div class="logo512">
                      <img src={image}></img>
                    </div>
                    <input
                      id="file"
                      type="file"
                      multiple
                      onChange={(e) => setImage(e.target.files[0])}
                      style={{ display: "none" }}
                      required
                    ></input>
                    <span onClick={clickFile}>
                      <i class="fa-solid fa-cloud-arrow-up"></i>
                    </span>
                  </div>
                  <button onClick={addMedicine}>
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

export default NavProductType1Add;
