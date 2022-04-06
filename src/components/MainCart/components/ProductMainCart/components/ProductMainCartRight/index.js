import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductMainCartRight = (props) => {
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

  return (
    <div class="productCart_Right">
      <div class="nameProductCart_Right">
        <h1>Tổng tiền</h1>
        <span className="totalmoney"></span>
      </div>
      {data.map((item) => (
        <div class="priceProductCart_Right">
          <p>{item.name}</p>
          <span id={item.name}>{item.subtotal} VND</span>
        </div>
      ))}
      <div class="buyNewProductCart_Right">
        <Link to="/" class="buyNew">
          Mua thêm
        </Link>

        <Link to="/dathang" class="buyProduct">
          <p>Đặt hàng</p>
          <span>Giao tận nơi hoặc nhận tại nhà thuốc</span>
        </Link>
      </div>
    </div>
  );
};

export default ProductMainCartRight;
