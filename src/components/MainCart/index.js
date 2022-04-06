import React, { useState } from 'react'
import '../../scss/MainCart.scss'
import ListMainCart from './components/ListMainCart'
import ModalCartDelete from './components/ModalCartDelete'
import ProductMainCart from './components/ProductMainCart'

const MainCart = () => {

  const [toggleModal,setToggleModal] = useState(false)

  return (
    <div class="mainCart">
        <ListMainCart></ListMainCart>
        <ProductMainCart clickDelete={() => setToggleModal(true)}></ProductMainCart>
        {toggleModal ? <ModalCartDelete nameModal="Bạn có muốn xóa toàn bộ sản phẩm khỏi giỏ hàng không?" toggleClose={() => setToggleModal(false)}></ModalCartDelete> : null}
    </div>
  )
}

export default MainCart