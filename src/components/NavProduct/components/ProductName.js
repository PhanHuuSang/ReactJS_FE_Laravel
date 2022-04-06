import React from 'react'

const ProductName = (props) => {
    const {nameProduct} = props
  return (
    <div class="Product__Name">
        <h1>{nameProduct}</h1>
    </div>
  )
}

export default ProductName