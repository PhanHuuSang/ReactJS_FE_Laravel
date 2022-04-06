import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductMainOrderRight = (props) => {
  const { clickModalDC } = props;

  const [formUser, setFormUser] = useState(false);

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
    <div class="productMainOrder_Right">
      <div class="nameProductCart_Right">
        <h1>Tổng tiền</h1>
      </div>
      <div class="priceProductCart_Right">
        <div class="priceOld">
          <p>Tạm tính</p>
          <span class="totalmoney"></span>
        </div>
        <div class="priceNew">
          <p>
            Thành tiền <span>(Đã bao gồm VAT)</span>
          </p>
          <span class="totalmoney"></span>
        </div>
      </div>
      <div class="contentVAT">
        <p>
          *Pharmacity sẽ liên hệ Quý khách sớm nhất trong trường hợp đơn hàng
          không thể giao đến địa điểm theo yêu cầu vì một số khu vực hạn chế
          giao nhận do dịch diễn biến phức tạp.
        </p>
      </div>
      <div class="buyNewProductCart_Right">
        <Link to="/dathang" class="buyProduct" onClick={clickModalDC}>
          <p>Đặt hàng</p>
        </Link>
      </div>
    </div>
  );
};

export default ProductMainOrderRight;
