import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import iconCategory from '../../../../images/iconCategory.svg'
import item1 from '../../../../images/1.webp'
import item2 from '../../../../images/2.webp'
import item3 from '../../../../images/3.webp'
import item4 from '../../../../images/4.webp'

const ContentLeftCategory = (props) => {

    const itemProduct = [
        {
            id:1,
            name:"Thực phẩm dinh dưỡng",
            image:item1,
        },
        {
            id:2,
            name:"Dụng cụ sơ cứu",
            image:item2,
        },
        {
            id:3,
            name:"Kế hoạch gia đình",
            image:item3,
        },
        {
            id:4,
            name:"Chăm sóc",
            image:item4,
        },
    ]

    const itemDropdown = [
        {
            userID:1,
            id:1,
            nameItemDropDown:"Sữa dinh dưỡng",
        },
        {
            userID:1,
            id:2,
            nameItemDropDown:"Thức uống có lợi cho sức khỏe",
        },
        {
            userID:1,
            id:3,
            nameItemDropDown:"Thực phẩm có lợi cho sức khỏe",
        },
        {
            userID:2,
            id:4,
            nameItemDropDown:"Dinh dưỡng thể dục thể thao",
        },
        {
            userID:3,
            id:5,
            nameItemDropDown:"Băng gạc",
        },
        {
            userID:4,
            id:6,
            nameItemDropDown:"Dụng cụ thể thao",
        },
    ]

    const [acitveItem , setAcitveItem]  = useState(0)

    const dropDownItemChild = () => {
        if(!acitveItem)
        {
            document.querySelector(".ItemContent__Left").classList.add("activeItemContent__Left")
            setAcitveItem(true)
        }
        else {
            document.querySelector(".ItemContent__Left").classList.remove("activeItemContent__Left")
            setAcitveItem(false)
        }
    }

    const [activeDropdown , setActiveDropDown] = useState(0)


  return (
    <div class="contentCategory__Left">
        <h1 class="nameContent__Left">
            Danh mục
        </h1>
        <div class="productContent__Left">
            {
                itemProduct.map(name => (
                    <div onClick={() => setAcitveItem(name.id)} className={name.id === acitveItem ? " ItemContent__Left activeItemContent__Left" : "ItemContent__Left"}>
                        <div class="itemChild__Left" key={name.id}>
                            <Link to="/">
                                <img class="imageItem" src={name.image}></img>
                                <p>{name.name}</p>
                            </Link>
                            <div class="iconSVG">
                                <img src={iconCategory} alt="" />
                            </div>
                        </div>
                        <div class="dropdownItemChild__Left">
                            <div class="fullItemChilDropDown">
                                {
                                    itemDropdown.map(nameDropdown => (
                                        <>
                                            {
                                                nameDropdown.userID === name.id ? <div onClick={() => setActiveDropDown(nameDropdown.id)} className={nameDropdown.id === activeDropdown && nameDropdown.userID === name.id ? "nameDropDownItem__Left activeDropdown" : "nameDropDownItem__Left"} key={nameDropdown.userID}>
                                                    <Link to="#">
                                                        <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.03447 2.09216C6.80871 2.44977 6.80871 3.55023 6.03447 3.90784L1.91931 5.80855C1.25667 6.11461 0.5 5.63062 0.5 4.90071L0.5 1.09929C0.5 0.369379 1.25667 -0.114611 1.91931 0.191451L6.03447 2.09216Z" fill="#0F62F9"></path></svg>
                                                        {nameDropdown.nameItemDropDown}
                                                    </Link>
                                                </div> : null
                                            }
                                        </>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default ContentLeftCategory