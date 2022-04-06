import React from 'react'
import Container from '../../../Container'

const NameMainCategory = (props) => {
    const {name} = props
  return (
    <div class="nameMainCategory">
        <Container>
            <div class="row">
                <div class="col-md-12">
                    <h1>{name}</h1>
                </div>
            </div>
        </Container>
        
    </div>
  )
}

export default NameMainCategory