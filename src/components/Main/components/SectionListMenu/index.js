import React from 'react'
import Container from '../../../Container'
import itemProduct1 from '../../../../images/itemProduct1.png'
import itemProduct2 from '../../../../images/itemProduct2.png'
import itemProduct3 from '../../../../images/itemProduct3.png'
import itemProduct4 from '../../../../images/itemProduct4.png'
import itemProduct5 from '../../../../images/itemProduct5.png'
import itemProduct6 from '../../../../images/itemProduct6.png'
import itemProduct7 from '../../../../images/itemProduct7.png'
import itemProduct8 from '../../../../images/itemProduct8.png'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'


const SectionListMenu = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
  const NameCategory = [
    {
        userID:1,
        id:1,
        nameCart: 'Dược phẩm',
        itemProduct: itemProduct1,
    },
    {
        userID:2,
        id:2,
        nameCart: 'Chăm sóc sức khỏe',
        itemProduct: itemProduct2,
    },
    {
        id:3,
        nameCart: 'Chăm sóc cá nhân',
        itemProduct: itemProduct3,
    },
    {
        id:4,
        nameCart: 'Sản phẩm tiện lợi',
        itemProduct: itemProduct4
    },
    {
        id:5,
        nameCart: 'Thực phẩm chức năng',
        itemProduct: itemProduct5
    },
    {
        id:6,
        nameCart: 'Mẹ và bé',
        itemProduct: itemProduct6
    },
    {
        id:7,
        nameCart: 'Chăm sóc sắc đẹp',
        itemProduct: itemProduct7
    },
    {
        id:8,
        nameCart: 'Thiết bị y tế',
        itemProduct: itemProduct8
    },
]
  return (
    <div class="sectionListMenu">
        <Container>
            <div class="row">
              <div class="col-md-12">
                <h1 class="nameList">
                  Danh mục sản phẩm
                </h1>
              </div>
              <div class="listMenu">
                  <Slider {...settings}>
                    {
                      NameCategory.map(name => (
                          <div class="itemListMenu">
                            <Link to="/tendanhmuc">
                                <div class="imageItem">
                                  <img src={name.itemProduct} title={name.itemProduct}/>
                                </div>
                                <div class="nameItem">
                                  <h1>{name.nameCart}</h1>
                                </div>
                            </Link>
                      </div>
                      ))
                    }
                  </Slider>
              </div>
            </div>
        </Container>
    </div>
  )
}

export default SectionListMenu