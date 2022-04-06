import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axiosClient from "../../../../../../api/axiosClient";
import CartApi from "../../../../../../api/cartApi";

const TextProduct = (props) => {
  const { addCart1, addCartNow } = props;

  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);

  let { id } = useParams();
  useEffect(async () => {
    let reuslt = await fetch("http://localhost:8000/api/medicines/" + id);
    reuslt = await reuslt.json();
    setData(reuslt);
    getData1();
  }, [id]);

  async function getData1() {
    let reuslt1 = await fetch(
      "http://localhost:8000/api/get-cartMedicines/" +
        JSON.parse(localStorage.getItem("user-info-people-DN")).id
    );
    reuslt1 = await reuslt1.json();
    setData1(reuslt1);
  }

  function totalmoney() {
    let test = 0;
    if (document.getElementById("soluongsanpham") != null)
      document.getElementById("soluongsanpham").textContent = data1.length;
    data1.forEach((item) => {
      let ct = document.getElementById(item.name);
      if (ct != null) ct.textContent = `${item.subtotal} VND`;
      test += item.medicines_qty * (item.price - item.discount);
    });
    let tam = document.querySelectorAll(".totalmoney");

    if (tam != null) {
      tam.forEach((item) => (item.textContent = `${test} VND`));
    }
  }
  totalmoney();

  function buttonPrev() {
    var result = document.getElementById("soluong");
    var soluong = result.value;
    if (!isNaN(soluong) && soluong > 1) result.value--;
    return false;
  }

  function buttonNext() {
    var result = document.getElementById("soluong");
    var soluong = result.value;
    if (!isNaN(soluong) && soluong < data.amount) result.value++;
    return false;
  }

  async function addCart(id) {
    const formData = new FormData();
    if (localStorage.getItem("user-info-people-DN") == null) {
      formData.append("user_id", "");
    } else {
      formData.append(
        "user_id",
        JSON.parse(localStorage.getItem("user-info-people-DN")).id
      );
    }

    let result = document.getElementById("soluong").value;

    formData.append("medicines_id", id);
    formData.append("medicines_qty", result);

    axiosClient.post("/add-cartMedicines", formData).then((res) => {
      if (res.data.status === 205) {
        getData1();
        toast.success("Thêm sản phẩm thành công vào giỏ hàng", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else if (res.data.status === 201) {
        getData1();
        toast.error("Thêm sản phẩm thất bại vào giỏ hàng", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else if (res.data.status === 202) {
        getData1();
        toast.error("Cần phải đăng nhập để thêm vào giỏ hàng", {
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

    // if (result.status === 205) {
    // } else if (result.status === 201) {
    // }
  }

  return (
    <>
      <div class="textProduct">
        <h1 class="nameProduct">{data.name}</h1>
        <div class="contentProduct">
          <div class="row">
            <div class="col-md-7">
              <div class="priceProduct">
                <p class="price">
                  {data.price - data.discount} VND
                  {data.discount > 0 ? (
                    <>
                      <span class="delPrice">
                        <del>{data.price} VND</del>
                      </span>
                      <span class="discountPrice">
                        - {(data.discount / data.price) * 100}%
                      </span>
                    </>
                  ) : null}
                </p>
                <span>
                  Mua hàng và tích <span class="point">71.250 Điểm</span> thành
                  viên
                  <svg
                    class="QuestionTooltip_icon__1bfKF"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="#112950"
                  >
                    <g opacity="0.2">
                      <path
                        d="M16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16C5.87827 16 3.84344 15.1571 2.34315 13.6569C0.842855 12.1566 0 10.1217 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8ZM5.496 6.033H6.321C6.459 6.033 6.569 5.92 6.587 5.783C6.677 5.127 7.127 4.649 7.929 4.649C8.615 4.649 9.243 4.992 9.243 5.817C9.243 6.452 8.869 6.744 8.278 7.188C7.605 7.677 7.072 8.248 7.11 9.175L7.113 9.392C7.11405 9.45761 7.14085 9.52017 7.18762 9.5662C7.23439 9.61222 7.29738 9.63801 7.363 9.638H8.174C8.2403 9.638 8.30389 9.61166 8.35078 9.56478C8.39766 9.51789 8.424 9.4543 8.424 9.388V9.283C8.424 8.565 8.697 8.356 9.434 7.797C10.043 7.334 10.678 6.82 10.678 5.741C10.678 4.23 9.402 3.5 8.005 3.5C6.738 3.5 5.35 4.09 5.255 5.786C5.25363 5.81829 5.25888 5.85053 5.27043 5.88072C5.28198 5.91091 5.29958 5.93841 5.32216 5.96155C5.34473 5.98468 5.3718 6.00296 5.40169 6.01524C5.43159 6.02753 5.46368 6.03357 5.496 6.033ZM7.821 12.476C8.431 12.476 8.85 12.082 8.85 11.549C8.85 10.997 8.43 10.609 7.821 10.609C7.237 10.609 6.812 10.997 6.812 11.549C6.812 12.082 7.237 12.476 7.822 12.476H7.821Z"
                        fill="inherit"
                      ></path>
                    </g>
                  </svg>
                  <div class="member">
                    <h1>Quyền lợi khi là thành viên</h1>
                    <ul>
                      <li>Quà tặng sinh nhật</li>
                      <li>Mua sản phẩm thứ 2 giá 1k</li>
                      <li>Sản phẩm giảm giá đến 50%</li>
                      <li>
                        Ưu đãi bất ngờ, thiết kế riêng cho từng thành viên
                      </li>
                      <li>Quà tặng nâng hạng VIP</li>
                      <li>Tích điểm đến 6% cho khách hàng VIP</li>
                    </ul>
                  </div>
                </span>
              </div>
              <div class="introduceProduct">
                <p>
                  {/* Humasis COVID-19 Ag Home Test là thiết bị xét nghiệm chẩn đoán
                  in vitro ban đầu dựa trên phương pháp sắc ký miễn dịch. Thiết
                  bị được thiết kế để phát hiện định tính kháng nguyên
                  SARS-CoV-2 qua mẫu dịch ngoáy mũi ở người nghi ngờ nhiễm
                  COVID-19, phù hợp cho cá nhân tự sử dụng (người từ 14 tuổi trở
                  lên) hoặc cho người không có chuyên môn xét nghiệm cho người
                  khác (từ 3 tuổi trở lên), sử dụng tại những địa điểm như là
                  tại nhà mà không nhất thiết phải thực hiện xét nghiệm tại
                  phòng thí nghiệm. Với giá thành rẻ, xét nghiệm Humasis
                  COVID-19 Ag Home Test được thiết kế phát hiện kháng nguyên
                  SARS-CoV-2 ở người nghi nhiễm nhanh chóng, kịp thời trong vòng
                  15 phút. */}
                  {data.content}
                </p>
              </div>
              <div class="from__Product">
                {/* <form> */}
                <div class="numberProduct">
                  <div class="childNumberProduct">
                    <button onClick={buttonPrev}>-</button>
                    <input
                      id="soluong"
                      name="soluong"
                      readOnly
                      type="text"
                      defaultValue={1}
                      max={data.amount}
                    />
                    <button onClick={buttonNext}>+</button>
                  </div>
                </div>
                <div class="buyProduct">
                  <div class="row">
                    <div class="col-md-4">
                      <div class="buyNow">
                        <Link to="/cart" onClick={() => addCart(data.id)}>
                          Mua ngay
                        </Link>
                      </div>
                    </div>
                    <div class="col-md-8">
                      <div class="cartNow" onClick={() => addCart(data.id)}>
                        <button>
                          <i class="fa-solid fa-cart-shopping"></i>
                          Thêm vào giỏ hàng
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* </form> */}
              </div>
              <div class="codeProduct">
                <p>Mã: P22589</p>
              </div>
            </div>
            <div class="col-md-5">
              <div class="delivery">
                <h1>Các hình thức giao hàng</h1>
                <p class="contentShip">
                  <span>
                    <i class="fa-solid fa-star"></i> Freeship{" "}
                  </span>
                  cho đơn hàng từ <span>300k</span>
                </p>
                <div class="codeDelivery">
                  <p>GHN</p>
                  <p>Ahamove</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TextProduct;
