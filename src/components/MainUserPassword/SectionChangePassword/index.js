import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axiosClient from "../../../api/axiosClient";

const SectionChangePassword = (props) => {
  const [password, setPassowrd] = useState("");
  const [new_password, setNewPassword] = useState("");
  const [new_password1, setNewPassword1] = useState("");
  async function changePassword(id) {
    if (new_password === new_password1) {
      const formData = new FormData();
      formData.append("password", password);
      formData.append("new_password", new_password);
      axiosClient
        .post("/change-Password/" + id + "?_method=PUT", formData)
        .then((res) => {
          if (res.data.status === 201) {
            toast.success("Cập nhật mật khẩu thành công", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            document.querySelectorAll("input").forEach((element) => {
              element.value = "";
            });
          } else if (res.data.status === 202) {
            toast.error("Cập nhật mật khẩu thất bại", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
        });
    } else {
      toast.error("Mật khẩu mới không trùng khớp", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }

  return (
    <div class="sectionChangePassword">
      <div class="nameSection__User">
        <Link to="/user/account">
          <svg
            stroke="black"
            width="10"
            height="16"
            viewBox="0 0 10 16"
            fill="none"
          >
            <path
              d="M8.5 15L1.5 8L8.5 1"
              stroke="inherit"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </Link>
        <h1>Đổi mật khẩu</h1>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="formChangePassword">
            <div class="inputFile">
              <label>
                Mật khẩu hiện tại <span>*</span>
              </label>
              <div class="inputChild">
                <span>
                  <svg width="16" height="18" viewBox="0 0 16 18" fill="none">
                    <path
                      d="M11.7239 6.83548V5.04464C11.698 2.94548 9.97471 1.26548 7.87638 1.29131C5.82055 1.31714 4.15805 2.97214 4.12305 5.02798V6.83548"
                      stroke="#8894A7"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M7.92448 10.7969V12.6477"
                      stroke="#8894A7"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.92435 6.35352C3.13685 6.35352 1.54102 7.66018 1.54102 11.5793C1.54102 15.4993 3.13685 16.806 7.92435 16.806C12.7118 16.806 14.3085 15.4993 14.3085 11.5793C14.3085 7.66018 12.7118 6.35352 7.92435 6.35352Z"
                      stroke="#8894A7"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </span>
                <input
                  onChange={(e) => setPassowrd(e.target.value)}
                  type="password"
                ></input>
              </div>
            </div>
            <div class="inputFile">
              <label>
                Mật khẩu mới <span>*</span>
              </label>
              <div class="inputChild">
                <span>
                  <svg width="16" height="18" viewBox="0 0 16 18" fill="none">
                    <path
                      d="M11.7239 6.83548V5.04464C11.698 2.94548 9.97471 1.26548 7.87638 1.29131C5.82055 1.31714 4.15805 2.97214 4.12305 5.02798V6.83548"
                      stroke="#8894A7"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M7.92448 10.7969V12.6477"
                      stroke="#8894A7"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.92435 6.35352C3.13685 6.35352 1.54102 7.66018 1.54102 11.5793C1.54102 15.4993 3.13685 16.806 7.92435 16.806C12.7118 16.806 14.3085 15.4993 14.3085 11.5793C14.3085 7.66018 12.7118 6.35352 7.92435 6.35352Z"
                      stroke="#8894A7"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </span>
                <input
                  onChange={(e) => setNewPassword(e.target.value)}
                  type="password"
                  defaultValue=""
                ></input>
              </div>
            </div>
            <div class="inputFile">
              <label>
                Nhập lại mật khẩu mới <span>*</span>
              </label>
              <div class="inputChild">
                <span>
                  <svg width="16" height="18" viewBox="0 0 16 18" fill="none">
                    <path
                      d="M11.7239 6.83548V5.04464C11.698 2.94548 9.97471 1.26548 7.87638 1.29131C5.82055 1.31714 4.15805 2.97214 4.12305 5.02798V6.83548"
                      stroke="#8894A7"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M7.92448 10.7969V12.6477"
                      stroke="#8894A7"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.92435 6.35352C3.13685 6.35352 1.54102 7.66018 1.54102 11.5793C1.54102 15.4993 3.13685 16.806 7.92435 16.806C12.7118 16.806 14.3085 15.4993 14.3085 11.5793C14.3085 7.66018 12.7118 6.35352 7.92435 6.35352Z"
                      stroke="#8894A7"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </span>
                <input
                  onChange={(e) => setNewPassword1(e.target.value)}
                  type="password"
                  defaultValue=""
                ></input>
              </div>
            </div>
            <button
              onClick={() =>
                changePassword(
                  JSON.parse(localStorage.getItem("user-info-people-DN")).id
                )
              }
            >
              Xác nhận
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionChangePassword;
