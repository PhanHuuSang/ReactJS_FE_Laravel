import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Container from "../../../Container";

const HeaderTop = (props) => {
  const { toggleDropUser, toggleLanguage, activeUserDN } = props;

  const [data, setData] = useState([]);
  const { id } = useParams();
  useEffect(async () => {
    let reuslt = await fetch("http://localhost:8000/api/user/" + id);
    reuslt = await reuslt.json();
    setData(reuslt);
    console.log(reuslt);
  }, []);

  return (
    <div class="Header-top">
      <Container>
        <div class="row">
          <div class="col-md-4">
            <div class="Header-top_left">
              <div class="row">
                <div class="col-md-6">
                  <p>Hotline Đặt hàng (Miễn phí)</p>
                </div>
                <div class="col-md-6">
                  <a href="tel:0703337127">
                    <i class="fa-solid fa-phone"></i>
                    0703337127
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-8">
            <div class="Header-top_right">
              <ul>
                <li>
                  <a href="#" title="#">
                    Sống Khỏe
                  </a>
                </li>
                <li>
                  <a href="#" title="#">
                    Nhãn hàng SbCode
                  </a>
                </li>
                <li onClick={toggleLanguage}>
                  <span>
                    <svg
                      class="GroupLanguage_flag-icon__11kIn"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                        fill="#D80027"
                      ></path>
                      <path
                        d="M11.9993 7.21729L13.0785 10.5387H16.5709L13.7455 12.5915L14.8247 15.9129L11.9993 13.8602L9.1739 15.9129L10.2531 12.5915L7.42773 10.5387H10.9201L11.9993 7.21729Z"
                        fill="#FFDA44"
                      ></path>
                    </svg>
                    Tiếng Việt
                    <svg
                      class="GroupLanguage_dropdown-icon__1bIcW"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
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
                </li>
                {/* || localStorage.getItem("user-info-people") */}
                {localStorage.getItem("user-info-people-DN") ? (
                  <li>
                    <Link to={"/user/account"}>
                      Khách hàng <i class="fa-solid fa-user"></i>
                    </Link>
                  </li>
                ) : (
                  <li onClick={toggleDropUser}>
                    <span>
                      Đăng nhập
                      <i class="fa-solid fa-user"></i>
                    </span>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeaderTop;
