import React, { useState } from 'react'
import Nav from '../Nav'
import '../../scss/NavFull.scss'
import Nav__Top from '../Nav__Top'
import avatar from '../../images/avatar.jpg'

const NavDashBoard = () => {
    const [activeMenu , setActiveMenu] = useState(1)
  return (
    <div class="navFull">
      <Nav checkActiveMenu={() => setActiveMenu(activeMenu)} activeMenu={activeMenu}></Nav>
      <div class="nav__Left">
        <Nav__Top nameNav="DashBoards" avatar={avatar}></Nav__Top>
      </div>
    </div>
  )
}

export default NavDashBoard