import React, {  useEffect, useRef, useState } from 'react'
import '../../../../scss/MenuCategory.scss'
import Container from '../../../Container'
import CartLeftMenu from './Cart-left'
import CartCenter from './Cart-center'
import Image1 from '../../../../images/1.png'
import Image2 from '../../../../images/2.png'
import Image3 from '../../../../images/3.jpg'
import Image4 from '../../../../images/4.jpg'
import Image5 from '../../../../images/5.jpg'
import Image6 from '../../../../images/6.jpg'
import Image7 from '../../../../images/7.jpg'
import BannerCategory from './Cart-right'
import bannerImage from '../../../../images/bannerCategory.webp'

const MenuCategory = () => {
    const [ idNameCategory , setNameCatgory ] = useState(1)

    const NameCategory = [
        {
            userID:1,
            id:1,
            nameCart: 'Dược phẩm'
        },
        {
            userID:2,
            id:2,
            nameCart: 'Chăm sóc sức khỏe'
        },
        {
            id:3,
            nameCart: 'Chăm sóc cá nhân'
        },
        {
            id:4,
            nameCart: 'Sản phẩm tiện lợi'
        },
        {
            id:5,
            nameCart: 'Thực phẩm chức năng'
        },
        {
            id:6,
            nameCart: 'Mẹ và bé'
        },
        {
            id:7,
            nameCart: 'Chăm sóc sắc đẹp'
        },
        {
            id:8,
            nameCart: 'Thiết bị y tế'
        },
        {
            id:9,
            nameCart: 'Khuyến Mãi HOT'
        },
    ]

    const [ userIdCategory , setUserIdCategory ] = useState(2)

    const productCategory = [
        {
            userID: 1,
            id: 1,
            itemImage: Image1,
            titleImage: Image1,
            nameImage: 'Thuốc không kê đơn'
        },
        {
            userID: 1,
            id: 2,
            itemImage: Image2,
            titleImage: Image2,
            nameImage: 'Thuốc kê đơn'
        },
        {
            userID: 2,
            id: 1,
            itemImage: Image2,
            titleImage: Image2,
            nameImage: 'Thuốc dinh dưỡng'
        },
        {
            userID: 2,
            id: 2,
            itemImage: Image3,
            titleImage: Image3,
            nameImage: 'Thuốc dinh dưỡng'
        },
        {
            userID: 2,
            id: 3,
            itemImage: Image4,
            titleImage: Image4,
            nameImage: 'Thuốc dinh dưỡng'
        },
        {
            userID: 2,
            id: 4,
            itemImage: Image5,
            titleImage: Image5,
            nameImage: 'Thuốc dinh dưỡng'
        },
        {
            userID: 2,
            id: 5,
            itemImage: Image6,
            titleImage: Image5,
            nameImage: 'Thuốc dinh dưỡng'
        },
        {
            userID: 2,
            id: 6,
            itemImage: Image7,
            titleImage: Image5,
            nameImage: 'Thuốc dinh dưỡng'
        },
    ]


   

  return (
    <div class="MenuCategory-Full">
        <Container>
            <div class="MenuCategory_Drop">
                <div class="UpMenu">
                    <svg class="CategoryMenu_polygon__3sgzG" width="32" height="28" viewBox="0 0 32 28" fill="none"><path d="M14.2679 1C15.0377 -0.333333 16.9622 -0.333334 17.732 1L31.5885 25C32.3583 26.3333 31.396 28 29.8564 28H2.14359C0.603993 28 -0.358258 26.3333 0.411542 25L14.2679 1Z" fill="white"></path></svg>
                </div>
                <div class="row">
                    <div class="col-md-3">
                        <div class="MenuCategory">
                            {/* <CartLeftMenu nameCart="Dược phẩm"></CartLeftMenu>
                            <CartLeftMenu nameCart="Chăm sóc sức khỏe"></CartLeftMenu>
                            <CartLeftMenu nameCart="Chăm sóc cá nhân"></CartLeftMenu>
                            <CartLeftMenu nameCart="Sản phẩm tiện lợi"></CartLeftMenu>
                            <CartLeftMenu nameCart="Thực phẩm chức năng"></CartLeftMenu>
                            <CartLeftMenu nameCart="Mẹ và bé"></CartLeftMenu>
                            <CartLeftMenu nameCart="Chăm sóc sắc đẹp"></CartLeftMenu>
                            <CartLeftMenu nameCart="Thiết bị y tế"></CartLeftMenu>
                            <CartLeftMenu nameCart="Khuyến Mãi HOT "></CartLeftMenu> */}
                            {
                                NameCategory.map((name,index) => (
                                    <CartLeftMenu 
                                        nameCart={name.nameCart}
                                        className = { idNameCategory === name.id ? "activeNameCategory" : "nameMenuCategory"}
                                        onclick = {() => setNameCatgory(name.id)}
                                    ></CartLeftMenu>
                                ))
                            }
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div  class="ItemCategory">
                            {   
                                productCategory.map(name => (
                                    <>
                                        { userIdCategory ===  name.userID && idNameCategory === userIdCategory  ? <CartCenter itemImage={name.itemImage} title={name.itemImage} nameImage={name.nameImage}></CartCenter> : null}
                                    </>
                                ))
                            }
                        </div>
                    </div>
                    <div class="col-md-3">
                        <BannerCategory nameBanner={bannerImage}></BannerCategory>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default MenuCategory