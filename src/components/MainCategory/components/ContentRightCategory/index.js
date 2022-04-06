import React, { useEffect, useState } from "react";
import Container from "../../../Container";
import banner1 from "../../../../images/banner1.webp";
import banner2 from "../../../../images/banner2.webp";
import banner3 from "../../../../images/banner3.webp";
import banner4 from "../../../../images/banner4.webp";
import Slider from "react-slick";
import { Link, useNavigate, useParams } from "react-router-dom";
import PaginationCategory from "../PaginationCategory";
import image1 from "../../../../images/product1.webp";
import medicinesApi from "../../../../api/medicinesApi";
import { toast } from "react-toastify";
import axiosClient from "../../../../api/axiosClient";
import Pagination from "react-js-pagination";

const ContentRightCategory = (props) => {
  const { addCart4 } = props;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    let result = await fetch(
      "http://localhost:8000/api/get-cartMedicines/" +
        JSON.parse(localStorage.getItem("user-info-people-DN")).id
    );
    result = await result.json();
    setData(result);
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

    formData.append("medicines_id", id);
    formData.append("medicines_qty", 1);

    axiosClient.post("/add-cartMedicines", formData).then((res) => {
      if (res.data.status === 205) {
        getData();
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
        getData();
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
        getData();
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
  const [medicinesList, setMedicinesList] = useState([]);
  let [pagination, setPagination] = useState([]);
  let pageNumber = 1;
  useEffect(() => {
    getPagination(pageNumber);
  }, [pageNumber]);

  async function getPagination(pageNumber) {
    let result = await fetch(
      `http://localhost:8000/api/get-Pagination/?page=${pageNumber}`
    );
    result = await result.json();
    setPagination(result);
    console.log(pageNumber);
  }

  return (
    <div class="contentCategory__Right">
      <div class="bannerCategory">
        <Slider {...settings}>
          <img src={banner1} title={banner1} />
          <img src={banner2} title={banner2} />
          <img src={banner3} title={banner3} />
          <img src={banner4} title={banner1} />
        </Slider>
      </div>
      <div class="mainProductCategory">
        {pagination.data != null
          ? pagination.data.map((item) => (
              <div class="ItemCategory" key={item.id}>
                <Link to={"/medicines/" + item.id}>
                  {item.discount > 0 ? (
                    <div class="discountPos">
                      <p>-{(item.discount / item.price) * 100}%</p>
                    </div>
                  ) : null}
                  <div class="imageItemCategory">
                    <img src={"http://localhost:8000/" + item.image}></img>
                  </div>
                  <div class="nameItemCategory">
                    <h1>{item.name}</h1>
                  </div>
                  <div class="priceItemCategory">
                    <p class="discount">
                      <del>{item.price}</del>
                    </p>
                    <p>
                      {item.price - item.discount} / <span>{item.title}</span>
                    </p>
                  </div>
                </Link>
                <div class="cartItemCategory">
                  <button onClick={() => addCart(item.id)}>
                    Thêm vào giỏ hàng
                  </button>
                </div>
              </div>
            ))
          : ""}
      </div>
      <Pagination
        activePage={pagination.current_page}
        totalItemsCount={pagination.total}
        itemsCountPerPage={pagination.per_page}
        onChange={(pageNumber) => getPagination(pageNumber)}
        itemClass="page-item"
        linkClass="page-link"
      ></Pagination>
    </div>
  );
};

export default ContentRightCategory;
