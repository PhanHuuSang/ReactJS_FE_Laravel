import { Link } from 'react-router-dom'
import Container from '../../../Container'
import React from 'react'

const SectionNavUser = (props) => {
  const {name} = props
  return (
    <div class="sectionNavUser">
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
                      <p>{name}</p>
                    </li>
                  </ul>
            </div>
          </div>
        </Container>
    </div>
  )
}

export default SectionNavUser