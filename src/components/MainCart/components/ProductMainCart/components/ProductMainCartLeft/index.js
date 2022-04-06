import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axiosClient from "../../../../../../api/axiosClient";
import itemProductCart1 from "../../../../../../images/itemProductCart1.jpg";
import ModalCartDelete from "../../../ModalCartDelete";

const ProductMainCartLeft = (props) => {
  const [togglePolicy, setTogglePolicy] = useState(false);

  const { clickDelete } = props;
  const [itemDelete, setItemDelete] = useState(false);
  const toggleItemDelete = () => {
    setItemDelete(true);
  };
  let [amount, setAmount] = useState(0);

  async function buttonPrev(id) {
    var result = document.getElementById(id);
    var soluong = result.value;
    if (!isNaN(soluong) && soluong > 1) {
      editCart(id, -1);
      result.value--;
      setAmount(soluong);
    }
    return false;
  }
  async function buttonNext(id) {
    var result = document.getElementById(id);
    let amount1 = 0;
    data.forEach((item) => {
      if (item.id === id) {
        amount1 = item.amount;
      }
    });
    var soluong = result.value;
    if (!isNaN(soluong) && soluong < amount1) {
      editCart(id, 1);
      result.value++;
      setAmount(soluong);
    }
    return false;
  }

  async function editCart(id, qty) {
    const formData = new FormData();
    if (localStorage.getItem("user-info-people-DN") == null) {
      formData.append("user_id", "");
    } else {
      formData.append(
        "user_id",
        JSON.parse(localStorage.getItem("user-info-people-DN")).id
      );
    }
    formData.append("medicines_id", id);
    formData.append("medicines_qty", qty);
    axiosClient.post("/add-cartMedicines", formData).then((res) => {
      if (res.data.status === 205) {
        toast.success("Cập nhật giỏ hàng thành công", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    });
  }

  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, [amount]);

  async function getData() {
    let result = await fetch(
      "http://localhost:8000/api/get-cartMedicines/" +
        JSON.parse(localStorage.getItem("user-info-people-DN")).id
    );
    result = await result.json();
    setData(result);
  }
  async function deleteCartMedicines(id) {
    let deleteItem = await fetch(
      "http://localhost:8000/api/delete-cartMedicines/" + id,
      {
        method: "DELETE",
      }
    );
    deleteItem = await deleteItem.json();
    if (deleteItem.result === 200) {
      toast.success("Xóa sản phẩm thành công trong giỏ hàng", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    getData();
  }
  let test = 0;
  if (document.getElementById("soluongsanpham") != null)
    document.getElementById("soluongsanpham").textContent = data.length;
  data.forEach((item) => {
    let ct = document.getElementById(item.name);
    if (ct != null) ct.textContent = `${item.subtotal} VND`;
    test += item.medicines_qty * (item.price - item.discount);
  });
  let tam = document.querySelectorAll(".totalmoney");

  if (tam != null) {
    tam.forEach((item) => (item.textContent = `${test} VND`));
  }

  return (
    <div class="productCart__Full">
      <div class="productCart_Left">
        <div class="nameCart_Left">
          <h1>Giỏ hàng</h1>
          {/* <span onClick={clickDelete}>Xóa tất cả giỏ hàng</span> */}
        </div>
        <div class="shipCart_Left">
          <div class="freeship_check">
            <div class="freeship_position">
              <span>&nbsp;</span>
            </div>
            <div class="freeship_svg">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                stroke="#5DAC46"
                stroke-width="2"
              >
                <path
                  d="M3.33301 10L8.33301 15L16.6663 5"
                  stroke="inherit"
                  stroke-width="inherit"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>
          </div>
          <div class="freeship_free">
            <p>Bạn đã được miễn phí vận chuyển.</p>
          </div>
          <div class="freeship_policy">
            <p>
              Chính sách giao hàng{" "}
              <span onClick={() => setTogglePolicy(!togglePolicy)}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="#C2C2C2">
                  <path
                    d="M16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16C5.87827 16 3.84344 15.1571 2.34315 13.6569C0.842855 12.1566 0 10.1217 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8ZM5.496 6.033H6.321C6.459 6.033 6.569 5.92 6.587 5.783C6.677 5.127 7.127 4.649 7.929 4.649C8.615 4.649 9.243 4.992 9.243 5.817C9.243 6.452 8.869 6.744 8.278 7.188C7.605 7.677 7.072 8.248 7.11 9.175L7.113 9.392C7.11405 9.45761 7.14085 9.52017 7.18762 9.5662C7.23439 9.61222 7.29738 9.63801 7.363 9.638H8.174C8.2403 9.638 8.30389 9.61166 8.35078 9.56478C8.39766 9.51789 8.424 9.4543 8.424 9.388V9.283C8.424 8.565 8.697 8.356 9.434 7.797C10.043 7.334 10.678 6.82 10.678 5.741C10.678 4.23 9.402 3.5 8.005 3.5C6.738 3.5 5.35 4.09 5.255 5.786C5.25363 5.81829 5.25888 5.85053 5.27043 5.88072C5.28198 5.91091 5.29958 5.93841 5.32216 5.96155C5.34473 5.98468 5.3718 6.00296 5.40169 6.01524C5.43159 6.02753 5.46368 6.03357 5.496 6.033ZM7.821 12.476C8.431 12.476 8.85 12.082 8.85 11.549C8.85 10.997 8.43 10.609 7.821 10.609C7.237 10.609 6.812 10.997 6.812 11.549C6.812 12.082 7.237 12.476 7.822 12.476H7.821Z"
                    fill="inherit"
                  ></path>
                </svg>
              </span>
            </p>
            {togglePolicy ? (
              <div class="toggle_policy">
                <div class="top_policy">
                  <h1>Chính sách giao hàng</h1>
                  <i
                    onClick={() => setTogglePolicy(false)}
                    class="fa-solid fa-xmark"
                  ></i>
                </div>
                <div class="bottom_policy">
                  <ul>
                    <li>
                      Pharmacity giao hàng miễn phí cho đơn hàng có giá trị từ
                      300.000 VNĐ trở lên.
                    </li>
                  </ul>
                </div>
              </div>
            ) : null}
          </div>
        </div>
        {data.map((item) => (
          <div class="itemCart_Left">
            <div class="row">
              <div class="col-md-2">
                <div class="imageItemCart_Left">
                  <img src={"http://localhost:8000/" + item.image}></img>
                </div>
              </div>
              <div class="col-md-4">
                <div class="nameItemCart_Left">
                  <h1>{item.name}</h1>
                </div>
              </div>
              <div class="col-md-2">
                <div class="buttonItemCart_Left">
                  <button onClick={() => buttonPrev(item.id)}>-</button>
                  <input
                    id={item.id}
                    name="soluong"
                    readOnly
                    type="text"
                    defaultValue={item.medicines_qty}
                    max={item.amount}
                  />
                  <button onClick={() => buttonNext(item.id)}>+</button>
                </div>
              </div>
              <div class="col-md-3">
                <div class="priceItemCart_Left">
                  <p>{item.price - item.discount} VND/ Hộp</p>
                </div>
              </div>
              <div class="col-md-1">
                <div class="closeItemCart_Left">
                  <p onClick={() => deleteCartMedicines(item.id)}>
                    <i class="fa-solid fa-xmark"></i>
                    Xóa
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}

        {itemDelete ? (
          <ModalCartDelete
            nameModal="Bạn có muốn xóa sản phẩm này khỏi giỏ hàng không?"
            toggleClose={() => setItemDelete(false)}
          ></ModalCartDelete>
        ) : null}
      </div>
      <div class="productCart_Right">
        <div class="nameProductCart_Right">
          <h1>Tổng tiền</h1>
          <span className="totalmoney"></span>
        </div>
        {data.map((item) => (
          <div class="priceProductCart_Right">
            <p>{item.name}</p>
            <span id={item.name}>
              {(item.price - item.discount) * item.medicines_qty} VND
            </span>
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
    </div>
  );
};

export default ProductMainCartLeft;
