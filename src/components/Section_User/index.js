import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ListMenuUser from "../Configs/ListMenuUser";
import avatar from "../../images/avatar.jpg";

const Section_User = (props) => {
  const { checkUX, activeUX, checkHeader } = props;

  const history = useNavigate();
  const user = JSON.parse(localStorage.getItem("user-info-people-DN"));

  async function logOut() {
    localStorage.clear(user);
    document.querySelector(".Modal-full").classList.remove("falseUser");
    document.querySelector("body").style = "overflow:hidden";
    history("/");
  }

  const [data1, setData1] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    getData1();
    getData();
  }, []);
  async function getData1() {
    let result = await fetch(
      "http://localhost:8000/api/user/" +
        JSON.parse(localStorage.getItem("user-info-people-DN")).id
    );
    result = await result.json();
    setData1(result);
  }

  async function getData() {
    let result = await fetch(
      "http://localhost:8000/api/get-cartMedicines/" +
        JSON.parse(localStorage.getItem("user-info-people-DN")).id
    );
    result = await result.json();
    setData(result);
  }

  function totalmoney() {
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
  }
  totalmoney();

  return (
    <div class="sectionLeft__User">
      <div class="userContent">
        <div class="avatarUser">
          <img
            id="leftavatar"
            src={"http://localhost:8000/" + data1.avatar}
            alt=""
          />
        </div>
        <div class="nameUser">
          <span id="leftname">{data1.name}</span>
        </div>
      </div>
      <div class="UserMenu">
        <ul>
          {ListMenuUser.map((name, index) => (
            <li
              key={name.id}
              onClick={checkUX}
              className={name.id === activeUX ? "activeUserMenu" : ""}
            >
              <Link to={"/user/" + name.link}>
                <span>{name.icon}</span>
                <h3 class="nameList">
                  {name.name}{" "}
                  {name.nameChild ? <span>{name.nameChild}</span> : null}{" "}
                </h3>
              </Link>
            </li>
          ))}
        </ul>
        <div class="contactAdmin">
          <a href="tel:0703337127">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <g>
                <path
                  d="M21.8906 7.07745H20.4407C19.9659 5.94791 19.2585 4.90634 18.3626 4.03789C16.9544 2.67284 15.1312 1.78339 13.229 1.53336C10.0768 1.11903 6.98733 2.3263 4.96486 4.76277C4.38445 5.462 3.91214 6.24449 3.56348 7.07745H2.10938C0.946266 7.07745 0 8.02372 0 9.18683V11.9993C0 13.1624 0.946266 14.1087 2.10938 14.1087H4.98984L4.68863 13.1871C3.81084 10.5015 4.30594 7.75836 6.04692 5.66094C7.75889 3.59844 10.3754 2.57666 13.0457 2.92761C16.3905 3.36725 19.0988 5.99403 19.6316 9.3155C19.9953 11.582 19.3609 13.8722 17.891 15.599C16.4178 17.3299 14.2746 18.3243 12.0108 18.3275C10.8418 18.329 9.89067 19.2754 9.89067 20.4368C9.89067 21.5999 10.8369 22.5462 12 22.5462C13.1632 22.5462 14.1094 21.5999 14.1094 20.4368V19.4869C15.9825 19.0421 17.6853 18.0103 18.9619 16.5105C19.582 15.782 20.0757 14.9771 20.4378 14.1087H21.8906C23.0537 14.1087 24 13.1624 24 11.9993V9.18678C24 8.02372 23.0537 7.07745 21.8906 7.07745ZM3.0968 12.7025H2.10938C1.72167 12.7025 1.40625 12.387 1.40625 11.9993V9.18683C1.40625 8.79913 1.72167 8.4837 2.10938 8.4837H3.10519C3.08016 8.58908 3.057 8.69502 3.03581 8.80124C2.77917 10.0871 2.80003 11.3956 3.0968 12.7025ZM12.7031 20.4368C12.7031 20.8245 12.3877 21.14 12 21.14C11.6123 21.14 11.2969 20.8245 11.2969 20.4368C11.2969 20.0496 11.618 19.7342 12.0127 19.7337C12.244 19.7334 12.4744 19.7243 12.7031 19.7067V20.4368ZM22.5938 11.9993C22.5938 12.387 22.2783 12.7025 21.8906 12.7025H20.8943C21.1735 11.5282 21.2164 10.3162 21.0201 9.0927C20.9873 8.88842 20.9467 8.68531 20.8992 8.4837H21.8906C22.2783 8.4837 22.5938 8.79913 22.5938 9.18683V11.9993Z"
                  fill="#112950"
                ></path>
                <path
                  d="M8 13C8.5 14.5 9.79 16 12 16C14.21 16 15.5 14.5 16 13"
                  stroke="#112950"
                  stroke-width="1.5"
                  stroke-linecap="round"
                ></path>
                <path
                  d="M9 10C9.55228 10 10 9.32843 10 8.5C10 7.67157 9.55228 7 9 7C8.44772 7 8 7.67157 8 8.5C8 9.32843 8.44772 10 9 10Z"
                  fill="#112950"
                ></path>
                <path
                  d="M15 10C15.5523 10 16 9.32843 16 8.5C16 7.67157 15.5523 7 15 7C14.4477 7 14 7.67157 14 8.5C14 9.32843 14.4477 10 15 10Z"
                  fill="#112950"
                ></path>
              </g>
            </svg>
            <b>1800 6821</b>
            <span>Tư vấn đặt hàng</span>
          </a>
        </div>
        <div class="outAccount">
          <p onClick={logOut}>Đăng xuất</p>
        </div>
      </div>
    </div>
  );
};

export default Section_User;
