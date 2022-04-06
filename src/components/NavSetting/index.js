import React, { useState } from 'react'
import Nav from '../Nav'
import '../../scss/NavFull.scss'
import avatar from '../../images/avatar.jpg'
import Nav__Top from '../Nav__Top'

const NavSetting = () => {
    const [activeMenu , setActiveMenu] = useState(6)
    return (
      <div class="navFull">
        <Nav checkActiveMenu={() => setActiveMenu(activeMenu)} activeMenu={activeMenu}></Nav>
        <div class="nav__Left">
        <Nav__Top nameNav="Settings" avatar={avatar}></Nav__Top>
      </div>
      </div>
    )
}

export default NavSetting