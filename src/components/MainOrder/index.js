import React, { useState } from 'react'
import ListMainOrder from './components/ListMainOrder'
import '../../scss/MainOrder.scss'
import '../../scss/MainCart.scss'
import ProductMainOrder from './components/ProductMainOrder'
import ModalMainOrder from './components/ModalMainOrder'

const MainOrder = () => {

  

  return (
    <div class="mainOrder">
      <ListMainOrder></ListMainOrder>
      <ProductMainOrder></ProductMainOrder>
    </div>
  )
}

export default MainOrder