import React, { useState } from 'react'
import Nav from '../Nav'
import '../../scss/NavFull.scss'
import Nav__Top from '../Nav__Top'
import avatar from '../../images/avatar.jpg'

const NavTableList = () => {
    const [activeMenu , setActiveMenu] = useState(3)
  return (
    <div class="navFull">
      <Nav checkActiveMenu={() => setActiveMenu(activeMenu)} activeMenu={activeMenu}></Nav>
      <div class="nav__Left">
        <Nav__Top nameNav="Table Lists" avatar={avatar}></Nav__Top>
      </div>
    </div>
  )
}

export default NavTableList