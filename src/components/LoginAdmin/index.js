import React, { useEffect, useState } from "react";
import { Link, useHistory, useNavigate } from "react-router-dom";
import "../../scss/Admin.scss";
import usersApi from "../../api/usersApi";

const LoginAdmin = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("user-info-admin")) {
      history("/dashboard");
    }
  }, []);

  async function login() {
    let item = { email, password };
    let result = await fetch("http://localhost:8000/api/loginAdmin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(item),
    });
    result = await result.json();
    localStorage.setItem("user-info-admin", JSON.stringify(result));
    history("/dashboard");
  }
  return (
    <div class="Admin">
      <div class="Modal__Admin">
        <div class="row">
          <div class="col-md-12">
            <div class="Modal__Admin__Login">
              <div class="name__Login__Modal">
                <h1>Đăng nhập</h1>
              </div>
              <div class="form__Login__Modal">
                <div class="formChildren">
                  <label>Email:</label>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    required
                    placeholder="Nhập tài khoản"
                  ></input>
                </div>
                <div class="formChildren">
                  <label>Password:</label>
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    required
                    placeholder="Nhập mật khẩu"
                  ></input>
                </div>
                <button onClick={login}>Đăng nhập</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginAdmin;
