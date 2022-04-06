import React from 'react'
import Container from '../../../Container'
import SlickProduct from './components/SlickProduct'
import TextProduct from './components/TextProduct'

const SectionProduct = (props) => {
    const {addCart1 , addCartNow} = props
  return (
    <div class="sectionProduct">
        <Container>
            <div class="row">
                <div class="col-md-5">
                    <SlickProduct></SlickProduct>
                </div>    
                <div class="col-md-7">
                  <TextProduct addCart1 = {addCart1} addCartNow={addCartNow}></TextProduct>  
                </div>    
            </div>
        </Container>
    </div>
  )
}

export default SectionProduct