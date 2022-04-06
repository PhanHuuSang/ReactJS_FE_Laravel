import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../../Container'

const ListMainCollection = (props) => {
    const {name} = props
  return (
    <div class="listMainCollection">
        <Container>
            <div class="row">
                <div class="col-md-12">
                        <ul>
                        <li>
                            <Link to="/">
                                Trang chủ
                            </Link>
                        </li>
                        <li>
                            <Link to="/asd">
                                {name}
                            </Link>
                        </li>
                        </ul>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default ListMainCollection