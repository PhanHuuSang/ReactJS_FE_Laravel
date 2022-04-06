import React, { useEffect } from 'react'
import SectionBanner from './components/SectionBanner'
import '../../scss/Main.scss'
import SectionListMenu from './components/SectionListMenu'
import SectionCovid from './components/SectionCovid'
import SectionCategory from './components/SectionCategory'

const Main = (props) => {
  const {addCart} = props
  return (
    <div class="main">
        <SectionBanner></SectionBanner>
        <SectionListMenu></SectionListMenu>
        <SectionCovid></SectionCovid>
        <SectionCategory addCart={addCart} name="Sản phẩm mới"></SectionCategory>
        <SectionCategory addCart={addCart} name="Sản phẩm bán chạy"></SectionCategory>
    </div>
  )
}

export default Main