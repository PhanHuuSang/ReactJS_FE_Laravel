import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import imageProduct1 from "../../../../../../images/sectionProduct1.webp";
import imageProduct2 from "../../../../../../images/sectionProduct2.webp";
import imageProduct3 from "../../../../../../images/sectionProduct3.webp";
import imageProduct4 from "../../../../../../images/sectionProduct4.webp";

const SlickProduct = (props) => {
  const imageProduct = [
    {
      id: 1,
      image: imageProduct1,
    },
    {
      id: 1,
      image: imageProduct2,
    },
    {
      id: 1,
      image: imageProduct3,
    },
    {
      id: 1,
      image: imageProduct4,
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  const [data, setData] = useState([]);
  let { id } = useParams();
  useEffect(async () => {
    let reuslt = await fetch("http://localhost:8000/api/medicines/" + id);
    reuslt = await reuslt.json();
    setData(reuslt);
  }, [id]);
  return (
    <div class="slickProduct">
      <div class="slickProductTop">
        <Slider {...settings}>
          <>
            <img src={"http://localhost:8000/" + data.image}></img>
          </>
        </Slider>
        <p>Sản phẩm 100% chính hãng, mẫu mã có thể thay đổi theo lô hàng</p>
      </div>
      <div class="slickProdctBottom"></div>
    </div>
  );
};

export default SlickProduct;
