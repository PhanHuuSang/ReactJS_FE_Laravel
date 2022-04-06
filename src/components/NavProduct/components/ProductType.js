import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import listProductType from '../../Configs/listProductType'

const ProductType = (props) => {
   const {ClickActiveType , activeType} = props
  return (
    <div class="Product__Type">
        <ul>
            {
                listProductType.map(name => (
                    <li key={name.id} onClick={ClickActiveType} className={name.id === activeType ? "active" : ""}>
                        <Link to={`/product/${name.link}`}>
                            <span>{name.icon}</span>
                            {name.name}
                        </Link>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default ProductType