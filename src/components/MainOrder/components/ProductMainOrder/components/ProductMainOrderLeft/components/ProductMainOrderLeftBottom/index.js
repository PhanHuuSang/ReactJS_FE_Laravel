import React, { useState } from "react";
import tienmat from "../../../../../../../../images/cash.webp";
import momo from "../../../../../../../../images/momo.webp";

const ProductMainOrderLeftBottom = () => {
  const [activePTTT, setActivePTTT] = useState(1);

  const phuognthucthanhtoan = [
    {
      id: 1,
      image: tienmat,
      name: "Tiền Mặt",
      content: "Thanh toán bằng tiền mặt khi nhận hàng",
    },
    {
      id: 2,
      image: momo,
      name: "MoMo",
      content: "Ví điện tử MoMo",
    },
  ];

  return (
    <div class="productMainOrder_Left_Bottom">
      <div class="nameOrder_Left_Bottom">
        <h1>2</h1>
        <h2>Chọn phương thức thanh toán</h2>
      </div>
      <div class="buttonModal_Left_Bottom">
        {phuognthucthanhtoan.map((name) => (
          <div
            class="phuongthuc"
            onClick={() => setActivePTTT(name.id)}
            className={
              activePTTT === name.id ? "activePhuongthuc" : "phuongthuc"
            }
          >
            <div class="row">
              <div class="col-md-2">
                <div class="imagePT">
                  <img src={name.image}></img>
                </div>
              </div>
              <div class="col-md-8">
                <div class="textPT">
                  <h1>{name.name}</h1>
                  <p>{name.content}</p>
                </div>
              </div>
              <div class="col-md-2">
                <div class="radioPT"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductMainOrderLeftBottom;
