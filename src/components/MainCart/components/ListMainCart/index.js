import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../../../Container'

const ListMainCart = () => {
  return (
    <div class="listCart">
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
                                Giỏ hàng
                            </Link>
                        </li>
                        </ul>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default ListMainCart