import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Container from "../Container";

const Nav__Top = (props) => {
  const { nameNav, avatar } = props;

  const history = useNavigate();
  const user = JSON.parse(localStorage.getItem("user-info-admin"));
  async function logOut() {
    localStorage.clear(user);
    history("/login");
  }

  return (
    <div class="nav__Top">
      <Container>
        <div class="row">
          <div class="col-md-2">
            <div class="name-nav__Top">
              <h1>{nameNav}</h1>
            </div>
          </div>
          {/* <div class="col-md-4">
            <div class="form-nav__Top">
              <form>
                <span>
                  <i class="fa-solid fa-magnifying-glass"></i>
                </span>
                <input type="text" placeholder="Search"></input>
              </form>
            </div>
          </div> */}
          <div class="col-md-10">
            <div class="account-nav__Top">
              <div class="avatar-nav__top">
                <img src={avatar}></img>
              </div>
              <div class="logOut-nav__top">
                <h1 onClick={logOut}>Log Out</h1>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Nav__Top;
