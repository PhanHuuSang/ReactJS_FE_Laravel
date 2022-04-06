import React, { useState } from 'react'
import Nav from '../Nav'
import Container from '../Container'
import '../../scss/NavFull.scss'
import Nav__Top from '../Nav__Top'
import avatar from '../../images/avatar.jpg'
import banner from '../../images/banner.png'

const NavUser = () => {
    const [activeMenu , setActiveMenu] = useState(2)
  return (
    <div class="navFull">
      <Nav checkActiveMenu={() => setActiveMenu(2)} activeMenu={activeMenu}></Nav>
      <div class="nav__Left">
        <Nav__Top nameNav="User Profile" avatar={avatar}></Nav__Top>
        <div class="nav__User">
          <Container>
            <div class="row">
              <div class="col-md-8">
                <div class="User__Edit">
                  <div class="Edit__Name">
                    <h1>Edit Profile</h1>
                  </div>
                  <div class="Eidt__Form">
                    <form action="">
                      <h1>USER INFORMATION</h1>
                      <div class="Form__Children">
                        <div class="Children">
                          <input type="text" value='Creative Code Inc.' disabled></input>
                          <label>
                            <span>COMPANY (DISABLED)</span>
                          </label>
                        </div>
                        <div class="Children">
                          <input type="email" placeholder='Email'></input>
                          <label>
                            <span>Email Address</span>
                          </label>
                        </div>
                        <div class="Children">
                          <input type="text" placeholder='First Name'></input>
                          <label>
                            <span>First Name</span>
                          </label>
                        </div>
                        <div class="Children">
                          <input type="text" placeholder='Last Name'></input>
                          <label>
                            <span>Last Name</span>
                          </label>
                        </div>
                      </div>
                      <h1>CONTACT INFORMATION</h1>
                      <div class="Form__Children">
                        <div class="Children">
                          <input type="text" placeholder='Country'></input>
                          <label>
                            <span>Country</span>
                          </label>
                        </div>
                        <div class="Children">
                          <input type="text" placeholder='City'></input>
                          <label>
                            <span>City</span>
                          </label>
                        </div>
                        <div class="Children">
                          <input type="text" placeholder='Address'></input>
                          <label>
                            <span>Address</span>
                          </label>
                        </div>
                        <div class="Children">
                          <input type="text" placeholder='Postal Code'></input>
                          <label>
                            <span>Postal Code</span>
                          </label>
                        </div>
                      </div>
                      <h1>ABOUT ME</h1>
                      <div class="About__Form">
                        <textarea rows="4" cols="80" placeholder="Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo."></textarea>
                      </div>
                      <button>Update Profile</button>
                    </form>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="User__People">
                  <div class="People__Banner">
                    <img src={banner}></img>
                  </div>
                  <div class="People__Avatar">
                    <img src={avatar}></img>
                  </div>
                  <div class="People__name">
                    <h1>Ung Chấn Vinh</h1>
                    <p class="intro">ucv0411</p>
                    <p class="about">Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.</p>
                  </div>
                  <div class="People__network">
                    <i class="fa-brands fa-facebook-square"></i>
                    <i class="fa-brands fa-instagram"></i>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  )
}

export default NavUser