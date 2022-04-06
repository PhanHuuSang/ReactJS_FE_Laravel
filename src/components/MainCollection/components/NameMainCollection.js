import React from 'react'
import Container from '../../Container'

const NameMainCollection = (props) => {
    const {name} = props
  return (
    <div class="nameMainCollection">
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

export default NameMainCollection