import React from 'react'

const ProductMainOrderLeftBody = (props) => {
    const {clickModalDN , clickModalDiaChi} = props
  return (
    <div class="productMainOrder_Left_Body">
        <div class="nameOrder_Left_Body">
            <h1>2</h1>
            <h2>Thông tin giao hàng</h2>    
        </div>
        <div class="buttonModal_Left_Body">
            <p class="dangnhap" onClick={clickModalDN}>
                Đăng nhập tài khoản SbCode
            </p>
            <p class="diachi" onClick={clickModalDiaChi}>
                Nhập địa chỉ nhận hàng    
            </p>
        </div>
    </div>
  )
}

export default ProductMainOrderLeftBody