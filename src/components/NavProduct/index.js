import React, { useState } from 'react'
import Nav from '../Nav'
import '../../scss/NavFull.scss'
import Nav__Top from '../Nav__Top'
import avatar from '../../images/avatar.jpg'
import Container from '../Container'
import ProductType from './components/ProductType'
import ProductName from './components/ProductName'
import ProductAddType from './components/ProductAddType'

const NavProduct = (props) => {
    const { name , ClickActiveType , activeType , nameTypeAdd , nameLink} = props
    const [activeMenu , setActiveMenu] = useState(5)
    return (
      <div class="navFull">
        <Nav checkActiveMenu={() => setActiveMenu(activeMenu)} activeMenu={activeMenu}></Nav>
        <div class="nav__Left">
          <Nav__Top nameNav="Products" avatar={avatar}></Nav__Top>
          <div class="nav__Product">
            <Container>
              <div class="row">
                <div class="col-md-12">
                  <ProductType ClickActiveType={ClickActiveType} activeType={activeType} ></ProductType>
                  <ProductName nameProduct={name}></ProductName>
                  <ProductAddType nameLink={nameLink} nameTypeAdd={nameTypeAdd}></ProductAddType>
                </div>
              </div>
            </Container>
          </div>
        </div>
      </div>
    )
}

export default NavProduct