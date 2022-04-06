import React, { useContext, useEffect, useState } from "react";
import Container from "../../../Container";
import logo from "../../../../images/logo.png";
import { Link } from "react-router-dom";

const HeaderBody = (props) => {
  const [data, setData] = useState([]);

  async function search(key) {
    if (key.length > 1) {
      let result = await fetch(
        "http://localhost:8000/api/searchMedicines/" + key
      );
      result = await result.json();
      setData(result);
    }
  }

  const [data1, setData1] = useState([]);

  useEffect(async () => {
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

  const {
    toggleMenuCategory,
    newCart,
    tosts3,
    tosts2,
    tosts1,
    tosts4,
    tosts5,
    tosts6,
  } = props;
  return (
    <div class="Header-body">
      <Container>
        <div class="row">
          <div class="col-md-4">
            <div class="Header-body_left">
              <div class="row">
                <div class="col-md-6">
                  <Link to="/">
                    <img src={logo} title={logo} />
                  </Link>
                </div>
                {/* <div class="col-md-5">
                                <div class="Category" onClick={toggleMenuCategory}>
                                    <i class="fa-solid fa-bars"></i>
                                    <p>Danh Mục</p>
                                    <svg class="HeaderPC_chevron-icon__m_CwU" stroke="#112950" width="12" height="8" viewBox="0 0 12 8" fill="none"><path d="M10.6673 1.66602L6.00065 6.33268L1.33398 1.66602" stroke="#112950" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                </div>
                            </div> */}
              </div>
            </div>
          </div>
          <div class="col-md-8">
            <div class="Header-body_right">
              <div class="row">
                <div class="col-md-10">
                  <div class="formSearch">
                    <form method="" action="">
                      <input
                        type="text"
                        onKeyUp={(e) => search(e.target.value)}
                        placeholder="Bạn đang tìm gì hôm nay..."
                      ></input>
                      <svg
                        class="SearchBox_search-icon__2TMqQ"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M18.129 17.1715L15.2645 14.3709L15.1973 14.2688C15.0725 14.1445 14.9018 14.0745 14.7237 14.0745C14.5455 14.0745 14.3748 14.1445 14.25 14.2688C11.8156 16.5021 8.06447 16.6235 5.48435 14.5524C2.90423 12.4814 2.29574 8.86049 4.06242 6.09116C5.8291 3.32183 9.42274 2.26339 12.4601 3.6178C15.4974 4.9722 17.0359 8.31917 16.0552 11.439C15.9846 11.6644 16.0423 11.9095 16.2066 12.082C16.371 12.2545 16.6169 12.3282 16.8519 12.2753C17.0868 12.2224 17.2751 12.0509 17.3457 11.8255C18.518 8.12322 16.7475 4.13898 13.1794 2.45023C9.61143 0.761484 5.31671 1.87504 3.07356 5.07053C0.830408 8.26602 1.312 12.5845 4.20679 15.2323C7.10159 17.8801 11.5408 18.0626 14.6528 15.6618L17.1891 18.1414C17.451 18.3964 17.8745 18.3964 18.1364 18.1414C18.3981 17.8829 18.3981 17.4665 18.1364 17.2079L18.129 17.1715Z"
                          fill="#112950"
                        ></path>
                      </svg>
                    </form>
                    {data.length > 0 ? (
                      <div class="modalSearch">
                        <div class="modalSearch__Content">
                          {data.map((name) => (
                            <div class="modalSearch__Item">
                              <Link to={"/medicines/" + name.id}>
                                <svg
                                  class="DropdownSearch_search-icon__3t0L-"
                                  width="16"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  fill="none"
                                >
                                  <path
                                    d="M14.5024 13.7383L12.2108 11.4979L12.1571 11.4162C12.0572 11.3168 11.9207 11.2608 11.7781 11.2608C11.6356 11.2608 11.4991 11.3168 11.3992 11.4162C9.45169 13.2029 6.4508 13.3 4.3867 11.6431C2.32261 9.98627 1.83581 7.08956 3.24915 4.8741C4.6625 2.65863 7.53741 1.81188 9.96726 2.89541C12.3971 3.97894 13.6279 6.65651 12.8434 9.15238C12.7869 9.33269 12.8331 9.52877 12.9645 9.66676C13.096 9.80475 13.2928 9.86369 13.4807 9.82138C13.6687 9.77906 13.8193 9.64192 13.8758 9.46161C14.8136 6.49975 13.3972 3.31235 10.5428 1.96136C7.68836 0.610359 4.25259 1.5012 2.45807 4.0576C0.663545 6.61399 1.04882 10.0687 3.36465 12.187C5.68049 14.3052 9.23189 14.4512 11.7214 12.5306L13.7505 14.5143C13.96 14.7183 14.2988 14.7183 14.5084 14.5143C14.7177 14.3075 14.7177 13.9744 14.5084 13.7675L14.5024 13.7383Z"
                                    fill="#8E9AAB"
                                  ></path>
                                </svg>
                                {name.name}
                              </Link>
                              <svg
                                class="DropdownSearch_goto-icon__3ty0_ cursor-point"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <path
                                  d="M19.75 11.7246L4.75 11.7246"
                                  stroke="#8E9AAB"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></path>
                                <path
                                  d="M13.6992 5.701L19.7492 11.725L13.6992 17.75"
                                  stroke="#8E9AAB"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></path>
                              </svg>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div class="col-md-2">
                  <div class="cartCategory">
                    {localStorage.getItem("user-info-people-DN") ? (
                      <div class="thanhtoan">
                        <Link to="/cart">
                          <div class="price">
                            <p>Thanh toán</p>
                            <span className="totalmoney"></span>
                          </div>
                          <i class="fa-solid fa-cart-shopping"></i>
                          <span class="sanpham" id="soluongsanpham">
                            0
                          </span>
                        </Link>
                      </div>
                    ) : (
                      <p class="giohang">
                        Giỏ hàng
                        <i class="fa-solid fa-cart-shopping"></i>
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeaderBody;
