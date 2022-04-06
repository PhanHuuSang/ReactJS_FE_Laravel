import React, { useEffect, useState } from 'react'
import logo from '../../images/logo192.png'
import '../../scss/NavFull.scss'
import {Link} from 'react-router-dom'
import listMenu from '../Configs/listMenu'

const Nav = (props) => {
  const {checkActiveMenu , activeMenu } = props
  const handleClick = () => {
    const clickP = document.querySelector(".navAdmin")
    clickP.classList.toggle("activeClick")
  }
  return (
    <div class="navAdmin">
      <div class="navAdmin__Top">
        <div class="logoNav">
          <img src={logo}></img>
        </div>
        <div class="nameNav">
          <h1>SbCode</h1>
        </div>
      </div>
      <div class="navAdmin__Center">
        <ul>
          {
            listMenu.map((name,index) => (
              <li key={name.id} onClick={checkActiveMenu}  className={name.id === activeMenu ? "active" : ""}>
                <Link to={name.link}>
                  <span>{name.icon}</span>
                  <p>{name.name}</p>
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
      {/* <div class="navAdmin__Bottom">
        <p onClick={handleClick}>
          <i class="fa-solid fa-circle-right"></i>
        </p>
      </div> */}
    </div>
  )
}

export default Nav