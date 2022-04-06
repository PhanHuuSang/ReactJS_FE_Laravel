import React from 'react'

const ModalCartDelete = (props) => {

  const {toggleClose , nameModal} = props


  return (
    <div class="modalCartDelete">
        <div class="modalCart">
          <div class="nameModalCart">
            <h1>Xóa sản phẩm</h1>  
          </div>  
          <div class="contentModalCart">
            <p>{nameModal}</p>  
          </div>
          <div class="buttonModalCart">
            <div class="clostButtonModal" onClick={toggleClose}>
              <p>Quay lại</p>  
            </div>  
            <div class="yesButtonModal">
              <p>Xóa</p>  
            </div>
          </div>
        </div>
    </div>
  )
}

export default ModalCartDelete