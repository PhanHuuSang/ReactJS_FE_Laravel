import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../../../Container'

const SectionNav = () => {
  return (
    <div class="sectionNav">
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
                          Tên sản phẩm
                      </Link>
                    </li>
                  </ul>
            </div>
          </div>
        </Container>
    </div>
  )
}

export default SectionNav