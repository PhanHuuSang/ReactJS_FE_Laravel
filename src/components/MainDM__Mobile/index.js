import React , {useState} from 'react'
import '../../scss/MainDM__Mobile.scss'
import image1 from '../../images/1.png'
import image2 from '../../images/2.png'
import image3 from '../../images/3.jpg'
import image4 from '../../images/4.jpg'
import image5 from '../../images/5.jpg'


const MainDM__Mobile = () => {
  const [activeList__Mobile , setActiveList__Mobile] = useState(1)
  const List_Left__Mobile = [
    {
      id:1,
      name:"Dược phẩm",
    },
    {
      id:2,
      name:"Chăm sóc sức khỏe",
    },
    {
      id:3,
      name:"Chăm sóc cá nhân",
    },
    {
      id:4,
      name:"Sản phẩm tiện lợi",
    },
    {
      id:5,
      name:"Thực phẩm chức năng",
    },
    {
      id:6,
      name:"Mẹ và bé",
    },
    {
      id:7,
      name:"Chăm sóc sắc đẹp",
    },
    {
      id:8,
      name:"Thiết bị y tế",
    },
  ]

  const [activeProduct__Mobile , setActiveProduct__Molie] = useState(2)
  const Product_Right__Mobile = [
    {
      userId:1,
      id:1,
      image:image1,
      name:"Thuốc không kê đơn",
    },
    {
      userId:1,
      id:2,
      image:image2,
      name:"Thuốc kê đơn",
    },
    {
      userId:1,
      id:3,
      image:image3,
      name:"Dụng cụ sơ cứu",
    },
    {
      userId:1,
      id:1,
      image:image4,
      name:"Kế hoạch gia đình",
    },
    {
      userId:2,
      id:2,
      image:image5,
      name:"Khẩu trang y tế",
    },
  ]

  return (
    <div class="fullMainDM__Mobile">
      <div class="mainDM__Mobile">
        <div class="main_Left__Mobile">
          <div class="fullList__Moile">
            {
              List_Left__Mobile.map(name => (
                <div className={name.id === activeList__Mobile ? "activeListMenu__Mobile" : "listMenu__Mobile"}
                  onClick={() => setActiveList__Mobile(name.id)}>
                    <h1>{name.name}</h1>  
                </div>
              ))
            }
          </div>
          <div class="callMenu__Mobile">
            <p>Hotline Đặt hàng(Miễn phí)</p>
            <a href="tel:0703337127">
            <i class="fa-solid fa-phone"></i>
              1800 6821</a>  
          </div>
        </div>
        <div class="main_Right__Mobile">
          <div class="formRight__Mobile">
            <input type="text" placeholder='Tìm kiếm danh mục'></input>  
          </div>
          <div class="productRight__Mobile">
            {
              Product_Right__Mobile.map(name => (
                <>
                  {
                    name.userId === activeProduct__Mobile && activeProduct__Mobile === activeList__Mobile ? 
                    <div key={name.id} class="itemProductRight__Mobile">
                      <img src={name.image}></img>
                      <p>{name.name}</p>  
                    </div> : null
                  }
                </>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainDM__Mobile