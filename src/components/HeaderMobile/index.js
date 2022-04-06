import React, { useState } from 'react'
import { Container } from '../Container'
import '../../scss/headerMobile.scss'
import { Link, useLocation } from 'react-router-dom'


const HeaderMobile = (props) => {


  const {donhang, taikhoan , danhmuc} =props
  const [active_Mobile , setActive_Mobile] = useState(1)
  const headerMobile_children = [
    {
      id:1,
      location:"/",
      icon:<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M9.02 2.83992L3.63 7.03992C2.73 7.73992 2 9.22992 2 10.3599V17.7699C2 20.0899 3.89 21.9899 6.21 21.9899H17.79C20.11 21.9899 22 20.0899 22 17.7799V10.4999C22 9.28992 21.19 7.73992 20.2 7.04992L14.02 2.71992C12.62 1.73992 10.37 1.78992 9.02 2.83992Z" stroke="#0F62F9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 17.02L16 17" stroke="#0F62F9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>,
      name:"Trang chủ",
    },
    {
      id:2,
      location:"/danhmuc",
      icon:<svg width="25" height="25" viewBox="0 0 25 25" fill="none">
      <path d="M16 12V14H18" stroke="#0F62F9" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square" stroke-linejoin="round">
      </path>
      <path d="M16 16L16 14L14 14" stroke="#0F62F9" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square" stroke-linejoin="round">
      </path>
      <path d="M18.5 4H13.5C12.67 4 12 3.32 12 2.5C12 1.68 12.67 1 13.5 1H18.5C19.33 1 20 1.68 20 2.5C20 3.32 19.33 4 18.5 4Z" stroke="#0F62F9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M10.3857 15.3767L8.94392 12.5605C7.93717 10.5941 5.52695 9.81617 3.56055 10.8229C1.59414 11.8297 0.816191 14.2399 1.82294 16.2063L3.26476 19.0225L4.59995 18.3389L3.15813 15.5227C2.52891 14.2937 3.01513 12.7873 4.24413 12.1581C5.47313 11.5289 6.97952 12.0151 7.60874 13.2441L9.05056 16.0603L10.3857 15.3767Z" fill="#0F62F9"></path>
      <mask id="path-5-inside-1" fill="white"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.7334 17.9863L4.17522 20.8025C5.18197 22.7689 7.59219 23.5469 9.55859 22.5401C11.525 21.5334 12.3029 19.1231 11.2962 17.1567L9.85438 14.3406L2.7334 17.9863Z"></path></mask>
      <path d="M2.7334 17.9863L2.04982 16.6511L0.714633 17.3347L1.39821 18.6699L2.7334 17.9863ZM11.2962 17.1567L9.96101 17.8403L11.2962 17.1567ZM9.85438 14.3406L11.1896 13.657L10.506 12.3218L9.1708 13.0054L9.85438 14.3406ZM5.5104 20.1189L4.06858 17.3027L1.39821 18.6699L2.84003 21.4861L5.5104 20.1189ZM8.87501 21.2049C7.64601 21.8342 6.13962 21.3479 5.5104 20.1189L2.84003 21.4861C4.22432 24.1899 7.53837 25.2596 10.2422 23.8753L8.87501 21.2049ZM9.96101 17.8403C10.5902 19.0693 10.104 20.5757 8.87501 21.2049L10.2422 23.8753C12.946 22.491 14.0157 19.177 12.6314 16.4732L9.96101 17.8403ZM8.51919 15.0241L9.96101 17.8403L12.6314 16.4732L11.1896 13.657L8.51919 15.0241ZM9.1708 13.0054L2.04982 16.6511L3.41698 19.3215L10.538 15.6757L9.1708 13.0054Z" fill="#0F62F9" mask="url(#path-5-inside-1)"></path>
      <path d="M10.5138 20.6737L9.86809 20.2922C9.7206 20.5417 9.73016 20.854 9.89264 21.0941L10.5138 20.6737ZM10.612 17.4672L11.2796 17.1254H11.2796L10.612 17.4672ZM10 16.2718H9.25C9.25 16.3906 9.27825 16.5078 9.33241 16.6136L10 16.2718ZM10.59 8.41L11.1204 8.94033L11.1204 8.94033L10.59 8.41ZM12.71 6.28999L12.1797 5.75966L12.1797 5.75967L12.71 6.28999ZM13 4V3.25C12.5858 3.25 12.25 3.58579 12.25 4H13ZM19 4H19.75C19.75 3.58579 19.4142 3.25 19 3.25V4ZM19.29 6.28999L19.8203 5.75967L19.8203 5.75966L19.29 6.28999ZM21.41 8.41L20.8796 8.94033L20.8796 8.94033L21.41 8.41ZM22.75 13V9.83H21.25V13H22.75ZM22.75 14V13H21.25V14H22.75ZM22.75 19V14H21.25V19H22.75ZM19 22.75C21.0642 22.75 22.75 21.0642 22.75 19H21.25C21.25 20.2358 20.2358 21.25 19 21.25V22.75ZM13 22.75H19V21.25H13V22.75ZM9.89264 21.0941C10.5654 22.0883 11.707 22.75 13 22.75V21.25C12.23 21.25 11.5431 20.8565 11.1349 20.2534L9.89264 21.0941ZM9.94445 17.809C10.3613 18.6233 10.303 19.5562 9.86809 20.2922L11.1595 21.0553C11.845 19.8952 11.9406 18.4165 11.2796 17.1254L9.94445 17.809ZM9.33241 16.6136L9.94445 17.809L11.2796 17.1254L10.6676 15.93L9.33241 16.6136ZM9.25 12.98V16.2718H10.75V12.98H9.25ZM9.25 11.98V12.98H10.75V11.98H9.25ZM9.25 9.83V11.98H10.75V9.83H9.25ZM10.0597 7.87967C9.8062 8.13317 9.61059 8.46534 9.47846 8.78398C9.34645 9.10234 9.25 9.47428 9.25 9.83H10.75C10.75 9.72573 10.7836 9.55267 10.8641 9.35853C10.9445 9.16467 11.0439 9.01684 11.1204 8.94033L10.0597 7.87967ZM12.1797 5.75967L10.0597 7.87968L11.1204 8.94033L13.2404 6.82032L12.1797 5.75967ZM12.25 5.59C12.25 5.64886 12.2206 5.71874 12.1797 5.75966L13.2404 6.82032C13.5594 6.50125 13.75 6.05113 13.75 5.59H12.25ZM12.25 4V5.59H13.75V4H12.25ZM19 3.25H13V4.75H19V3.25ZM19.75 5.59V4H18.25V5.59H19.75ZM19.8203 5.75966C19.7794 5.71874 19.75 5.64887 19.75 5.59H18.25C18.25 6.05113 18.4406 6.50125 18.7596 6.82032L19.8203 5.75966ZM21.9403 7.87968L19.8203 5.75967L18.7596 6.82032L20.8796 8.94033L21.9403 7.87968ZM22.75 9.83C22.75 9.47428 22.6535 9.10234 22.5215 8.78398C22.3894 8.46534 22.1938 8.13317 21.9403 7.87967L20.8796 8.94033C20.9561 9.01684 21.0555 9.16467 21.1359 9.35853C21.2164 9.55267 21.25 9.72573 21.25 9.83H22.75Z" fill="#0F62F9"></path>
      </svg>,
      name:"Danh mục",
    },
    {
      id:3,
      icon:<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#A0A0A0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2 13H5.76C6.52 13 7.21 13.43 7.55 14.11L8.44 15.9C9 17 10 17 10.24 17H13.77C14.53 17 15.22 16.57 15.56 15.89L16.45 14.1C16.79 13.42 17.48 12.99 18.24 12.99H21.98" stroke="#A0A0A0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6 7L18 7" stroke="#A0A0A0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 10L15 10" stroke="#A0A0A0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>  ,
      name:"Đơn hàng",
    },
    {
      id:4,
      icon:<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12.12 12.78C12.05 12.77 11.96 12.77 11.88 12.78C10.12 12.72 8.71997 11.28 8.71997 9.50998C8.71997 7.69998 10.18 6.22998 12 6.22998C13.81 6.22998 15.28 7.69998 15.28 9.50998C15.27 11.28 13.88 12.72 12.12 12.78Z" stroke="#A0A0A0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18.74 19.3801C16.96 21.0101 14.6 22.0001 12 22.0001C9.40001 22.0001 7.04001 21.0101 5.26001 19.3801C5.36001 18.4401 5.96001 17.5201 7.03001 16.8001C9.77001 14.9801 14.25 14.9801 16.97 16.8001C18.04 17.5201 18.64 18.4401 18.74 19.3801Z" stroke="#A0A0A0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#A0A0A0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>,
      name:"Tài khoản",
    },
  ]
  

  return (
    <div class="headerMobile">
        {
          headerMobile_children.map(name => (
            <div 
              onClick={() => setActive_Mobile(name.id)}
              className={ name.id === active_Mobile
              ? "active__Mobile" : "notActive__Mobile"}>
              {
                name.id === 1 ? 
                <Link  to="/">
                  <div class="icon">
                    <span>{name.icon}</span>  
                  </div>  
                  {name.name}
                </Link> : null
              }
              {
                name.id === 2 ? <Link to='/danhmuc'><div class="icon">
                <span>{name.icon}</span>  
              </div>  
              <p>{name.name}</p></Link> : null
              }
              {
                name.id === 3 ? <Link to='/donhang'><div class="icon">
                <span>{name.icon}</span>  
              </div>  
              <p>{name.name}</p></Link>: null
              }
              {
                name.id === 4 ? <Link to='/taikhoan'><div class="icon">
                <span>{name.icon}</span>  
              </div>  
              <p>{name.name}</p></Link> : null
              }
            </div>
          ))
        }
    </div>
  )
}

export default HeaderMobile