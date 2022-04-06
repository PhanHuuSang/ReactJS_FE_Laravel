import React from 'react'

const CartLeftMenu = (props) => {
    const { nameCart , className , onclick } = props
  return (
    <div class="nameMenuCategory" onClick={onclick} className={className}>
        <h1>
            {nameCart}
        </h1>
        <svg class="CategoryMenu_chevron-icon__1trJB" height="24" width="24" stroke="white" viewBox="0 0 20 20" fill="none" stroke-width="1.5"><path d="M15.8337 7.08398L10.0003 12.9173L4.16699 7.08398" stroke="ỉnherit" stroke-width="inherit" stroke-linecap="round" stroke-linejoin="round"></path></svg>
    </div>
  )
}

export default CartLeftMenu