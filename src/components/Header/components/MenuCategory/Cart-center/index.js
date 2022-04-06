import React from 'react'
import { Link } from 'react-router-dom'

const CartCenter = (props) => {
  const { itemImage , nameImage } = props
  return (
    <div class="itemNameMenuCategory">
      <Link to="/tendanhmuc">
        <img src={itemImage} title={itemImage}/>
        <p>{nameImage}</p>
      </Link>
    </div>
  )
}

export default CartCenter