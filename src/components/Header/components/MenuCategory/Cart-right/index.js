import React from 'react'

const BannerCategory = (props) => {
    const { nameBanner } = props
  return (
    <div class="bannerCategory">
        <img src={nameBanner} title={nameBanner}/>
    </div>
  )
}

export default BannerCategory