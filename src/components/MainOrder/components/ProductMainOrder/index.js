import React, { useState } from 'react'
import Container from '../../../Container'
import Modal from '../../../Modal'
import ModalMainOrder from '../ModalMainOrder'
import ProductMainOrderLeft from './components/ProductMainOrderLeft'
import ProductMainOrderRight from './components/ProductMainOrderRight'

const ProductMainOrder = () => {

  const [ModalDC ,setModalDC] = useState(false)
  const toggleModalDC = () => {
    if(!ModalDC) {
      setModalDC(true)
      document.body.style = "overflow:hidden"
    }
    else {
      setModalDC(false)
      document.body.style = null
    }
  }

  return (
    <div class="productMainOrder">
        <Container>
            <div class="row">
                <div class="col-md-8">
                    <ProductMainOrderLeft></ProductMainOrderLeft>
                </div>
                <div class="col-md-4">
                    <ProductMainOrderRight clickModalDC={toggleModalDC}></ProductMainOrderRight>
                    {ModalDC ? <ModalMainOrder closeXModalDC={toggleModalDC} ></ModalMainOrder> : null}
                </div>    
            </div>
        </Container>
        
    </div>
  )
}

export default ProductMainOrder