import React, { useState } from 'react'
import Slider from 'react-slick'
import ProductCategory from '../../../../../Configs/ProductCategory'
import { Link } from 'react-router-dom'

const ContentList = (props) => {

    const {addCart3} = props

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        responsive: [
            {
              breakpoint: 1025,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
                breakpoint: 991,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
                }
              },
            {
              breakpoint: 766,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            }
          ]
      };
  return (
    <div class="contentProduct_List">
        <h1 class="nameList">
            Sản phẩm bán chạy của thương hiệu 1LIFE 
        </h1>    
        <div class="listProduct">
            <Slider {...settings}>
                {
                    ProductCategory.map(name => (
                        <div class="ItemCategory" key={name.id}>
                            <Link to="/asd" >
                                {name.nameDiscount ? <div class="discountPos">
                                    <p>{name.nameDiscount}</p>
                                </div> : null}
                                <div class="imageItemCategory">
                                    <img src={name.imageProduct} title={name.imageProduct}></img>
                                </div>
                                <div class="nameItemCategory">
                                    <h1>{name.nameProduct}</h1>
                                </div>
                                <div class="priceItemCategory">
                                    <p class="discount"><del>{name.discount}</del></p>
                                    <p>{name.priceProduct}<span>{name.contain}</span></p>
                                </div>
                            </Link>
                            <div class="cartItemCategory">
                                <button onClick={addCart3}>Thêm vào giỏ hàng</button>
                            </div>
                        </div>
                    ))
                }
            </Slider>
        </div>
    </div>
  )
}

export default ContentList