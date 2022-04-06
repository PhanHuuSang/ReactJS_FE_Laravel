import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import itemProductCart1 from "../../../../../../../../images/itemProductCart1.jpg";

const ProductMainOrderLeftTop = () => {
  const [clickFullHeighOrder, setClickFullHeighOrder] = useState(false);
  const toggleClickFullHeighOder = () => {
    if (!clickFullHeighOrder) {
      document
        .querySelector(".itemOrder_Left_Top")
        .classList.add("activeFullHeighOder");
      setClickFullHeighOrder(true);
    } else {
      document
        .querySelector(".itemOrder_Left_Top")
        .classList.remove("activeFullHeighOder");
      setClickFullHeighOrder(false);
    }
  };
  const [itemdelete, setItemDelete] = useState(false);

  const [data, setData1] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    let result = await fetch(
      "http://localhost:8000/api/get-cartMedicines/" +
        JSON.parse(localStorage.getItem("user-info-people-DN")).id
    );
    result = await result.json();
    setData1(result);
  }
  let test = 0;
  data.forEach((item) => {
    test += item.medicines_qty * (item.price - item.discount);
  });
  let tam = document.querySelectorAll(".totalmoney");

  if (tam != null) {
    tam.forEach((item) => (item.textContent = `${test} VND`));
  }

  return (
    <div class="productMainOrder_Left_Top">
      <div class="nameOrder_Left_Top">
        <h1>Giỏ hàng</h1>
      </div>
      <div class="nameChilderOder_Left_Top">
        <h1>1</h1>
        <h2>
          Giỏ hàng <span>({data.length} sản phẩm)</span>
        </h2>
        <Link to="/cart">Nhấn để thay đổi</Link>
      </div>
      <div class="itemOrder_Left_Top">
        {data.map((item) => (
          <div class="row">
            <div class="col-md-2">
              <div class="imageItemCart_Left">
                <img src={"http://localhost:8000/" + item.image}></img>
              </div>
            </div>
            <div class="col-md-5">
              <div class="nameItemCart_Left">
                <h1>{item.name}</h1>
              </div>
            </div>
            <div class="col-md-2">
              <div class="buttonItemCart_Left">{item.medicines_qty}</div>
            </div>
            <div class="col-md-3">
              <div class="priceItemCart_Left">
                <p>{item.price - item.discount} VND/ Hộp</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div class="buttonOrder_Left_Top">
        {clickFullHeighOrder ? (
          <span onClick={toggleClickFullHeighOder}>
            Thu gọn{" "}
            <svg
              width="24"
              style={{ transform: "rotate(-90deg)" }}
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#0f62f9"
            >
              <path
                d="M8.5 5L15.5 12L8.5 19"
                stroke="inherit"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </span>
        ) : (
          <span onClick={toggleClickFullHeighOder}>
            Xem tất cả{" "}
            <svg
              width="24"
              style={{ transform: "rotate(90deg)" }}
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#0f62f9"
            >
              <path
                d="M8.5 5L15.5 12L8.5 19"
                stroke="inherit"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </span>
        )}
      </div>
    </div>
  );
};

export default ProductMainOrderLeftTop;
