import React, { useEffect, useState } from "react";
import Nav from "../Nav";
import avatar from "../../images/avatar.jpg";
import Nav__Top from "../Nav__Top";
import Container from "../Container";
import ProductType from "../NavProduct/components/ProductType";
import ProductName from "../NavProduct/components/ProductName";
import logo512 from "../../images/logo512.png";
import ProductAddType from "../NavProduct/components/ProductAddType";
import { useParams } from "react-router-dom";

const NavProductType1Update = (props) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [category_id, setCategoryId] = useState("");
  const [discount, setDiscount] = useState("");
  const [amount, setAmount] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [activeType, setActiveType] = useState(1);
  const [activeMenu, setActiveMenu] = useState(5);

  const [data, setData] = useState([]);
  const { id } = useParams();
  useEffect(async () => {
    let result = await fetch("http://localhost:8000/api/medicines/" + id);
    result = await result.json();
    setData(result);
    setName(result.name);
    setImage(result.image);
    setPrice(result.price);
    setCategoryId(result.category_id);
    setDiscount(result.discount);
    setAmount(result.amount);
    setTitle(result.title);
    setContent(result.content);
  }, []);

  async function updateMedicines(id) {
    const formData = new FormData();
    formData.append("image", image);
    formData.append("name", name);
    formData.append("price", price);
    formData.append("category_id", category_id);
    formData.append("discount", discount);
    formData.append("amount", amount);
    formData.append("title", title);
    formData.append("content", content);

    let result = await fetch(
      "http://localhost:8000/api/updateMedicines/" + id + "?_method=PUT",
      {
        method: "POST",
        body: formData,
      }
    );
    if (result.ok === true) {
      alert("B???n ???? update s???n ph???m th??nh c??ng");
    } else {
      alert("B???n ???? update s???n ph???m th???t b???i");
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
                <ProductName nameProduct="Qu???n l?? s???n ph???m"></ProductName>
                <ProductAddType
                  nameLink="/product/type1/add"
                  nameTypeAdd="Th??m s???n ph???m"
                ></ProductAddType>
                <div class="Product__Type1__Add">
                  <div class="Product__Type1__Add__Left">
                    <div class="Children__Type1">
                      <label>T??n s???n ph???m</label>
                      <input
                        onChange={(e) => setName(e.target.value)}
                        defaultValue={data.name}
                        type="text"
                        required
                      ></input>
                    </div>
                    <div class="Children__Type1">
                      <label>Title s???n ph???m</label>
                      <input
                        onChange={(e) => setTitle(e.target.value)}
                        defaultValue={data.title}
                        type="text"
                        placeholder="Nh???p title s???n ph???m"
                        required
                      ></input>
                    </div>
                    <div class="Children__Type1">
                      <label>N???i dung m?? t??? s???n ph???m</label>
                      <textarea
                        defaultValue={data.content}
                        onChange={(e) => setContent(e.target.value)}
                        cols="80"
                        row="4"
                        placeholder="Nh???p m?? t??? s???n ph???m"
                      ></textarea>
                    </div>

                    <div class="Children__Type1">
                      <label>Danh m???c s???n ph???m</label>
                      <input
                        defaultValue={data.category_id}
                        onChange={(e) => setCategoryId(e.target.value)}
                        type="text"
                        placeholder="Nh???p danh m???c s???n ph???m"
                        required
                      ></input>
                    </div>
                    {/* <div class="Children__Type1">
                        <label>H??ng s???n xu???t</label>
                        <input
                          type="text"
                          placeholder="Nh???p h??ng s???n xu???t"
                          required
                        ></input>
                      </div> */}
                    <div class="Children__Type1">
                      <label>S??? l?????ng s???n ph???m</label>
                      <input
                        type="number"
                        onChange={(e) => setAmount(e.target.value)}
                        defaultValue={data.amount}
                        placeholder="Nh???p s??? l?????ng s???n ph???m"
                        min="0"
                        required
                      ></input>
                    </div>
                    <div class="Children__Type1">
                      <label>S??? ti???n gi???m gi?? s???n ph???m</label>
                      <input
                        type="number"
                        defaultValue={data.discount}
                        onChange={(e) => setDiscount(e.target.value)}
                        placeholder="Nh???p s??? ti???n gi???m gi?? s???n ph???m"
                        min="0"
                        required
                      ></input>
                    </div>
                    <div class="Children__Type1">
                      <label>S??? ti???n s???n ph???m</label>
                      <input
                        type="number"
                        defaultValue={data.price}
                        onChange={(e) => setPrice(e.target.value)}
                        placeholder="Nh???p s??? ti???n s???n ph???m"
                        min="0"
                        required
                      ></input>
                    </div>
                  </div>
                  <div class="Product__Type1__Add__Right">
                    <div class="logo512">
                      <img src={"http://localhost:8000/" + data.image}></img>
                    </div>
                    <input
                      id="file"
                      type="file"
                      onChange={(e) => setImage(e.target.files[0])}
                      defaultValue={data.image}
                      style={{ display: "none" }}
                      required
                    ></input>
                    <span onClick={clickFile}>
                      <i class="fa-solid fa-cloud-arrow-up"></i>
                    </span>
                  </div>
                  <button onClick={() => updateMedicines(data.id)}>
                    <i class="fa-solid fa-pen-to-square"></i> Update
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

export default NavProductType1Update;
