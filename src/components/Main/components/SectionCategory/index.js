import React, { useEffect } from 'react'
import Container from '../../../Container'
import Slider from 'react-slick'
import product1 from '../../../../images/product1.webp'
import product2 from '../../../../images/product2.webp'
import product3 from '../../../../images/product3.webp'
import product4 from '../../../../images/product4.webp'
import product5 from '../../../../images/product5.webp'
import product6 from '../../../../images/product6.webp'
import { Link, Route, Routes } from 'react-router-dom'

const SectionCategory = (props) => {
    const { addCart , name} = props


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 2,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
                breakpoint: 991,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 2,
                  initialSlide: 2
                }
            },
            {
                breakpoint: 767,
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
    const productCategory = [
        {
            id:1,
            link: '/bo-tui-so-cuu',
            nameProduct:"Bộ túi sơ cứu 1LIFE First Aids Kit",
            imageProduct:product1,
            priceProduct:"394.200 VND/",
            contain:"Bộ",
            discount:"21.000 VND",
            nameDiscount:"-21%"
        },
        {
            id:2,
            nameProduct:"Miếng dán chườm lạnh hạ sốt cho trẻ em Cool Kid Extra (2 miếng/gói)",
            imageProduct:product2,
            priceProduct:"32.000 VDN/",
            contain:"Gói",
            discount:"22.000VND",
            nameDiscount:"-21%"
        },
        {
            id:3,
            nameProduct:"Dung dịch sát khuẩn tay nhanh On1 (100ml)",
            imageProduct:product3,
            priceProduct:"20.000 VND/",
            contain:"Chai",
            discount:"21.000 VND",
            nameDiscount:"-21%"
        },
        {
            id:4,
            nameProduct:"Gel rửa tay diệt khuẩn Lifebuoy Total 10 (Chai 50ml)",
            imageProduct:product4,
            priceProduct:"23.000 VND/",
            contain:"Chai"
        },
        {
            id:5,
            nameProduct:"Gel rửa tay hương dưa táo Green Cross (100ml)",
            imageProduct:product5,
            priceProduct:"38.000 VND/",
            contain:"Chai"
        },
        {
            id:6,
            nameProduct:"Kẹo dẻo bổ sung vitamin C tăng cường sức đề kháng Nat C Yummy Gummyz (125g)",
            imageProduct:product6,
            priceProduct:"117.900 VND/",
            contain:"Hộp"
        },
    ]
  return (
    <div class="sectionCategory">
        <Container>
            <div class="row">
                <div class="col-md-12">
                    <div class="nameCategory">
                        <h1>{name}</h1>
                        <Link to="/xemtatca">Xem tất cả sản phẩm</Link>
                    </div>
                </div>
                <div class="listCategory">
                    <Slider {...settings}>
                        {
                            productCategory.map(name => (
                                <div class="ItemCategory" key={name.id}>
                                    <Link to="/asd">
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
                                        <button onClick={addCart}>Thêm vào giỏ hàng</button>
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>
                    {/* <div class="row">
                        <div class="col-md-2">
                        <div class="ItemCategory">
                                    <div class="imageItemCategory">
                                        <img src={product1} title={product1}></img>
                                    </div>
                                    <div class="nameItemCategory">
                                        <h1>{"asd"}</h1>
                                    </div>
                                    <div class="priceItemCategory">
                                        <p>{"300.000 VND/"}<span>{"Chai"}</span></p>
                                    </div>
                                    <div class="cartItemCategory">
                                        <button>Thêm vào giỏ hàng</button>
                                    </div>
                                </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </Container>

    </div>
  )
}

export default SectionCategory