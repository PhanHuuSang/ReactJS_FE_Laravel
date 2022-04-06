import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import avatar from "../../../../images/avatar.jpg";

const SectionUser = () => {
  const [activeGender, setActiveGender] = useState(1);

  const Gender = [
    {
      id: 1,
      name: "Nam",
    },
    {
      id: 2,
      name: "Nữ",
    },
  ];

  function clickButton() {
    document.getElementById("clickFile").click();
  }
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    let result = await fetch(
      "http://localhost:8000/api/user/" +
        JSON.parse(localStorage.getItem("user-info-people-DN")).id
    );
    result = await result.json();
    setData(result);
    setName(result.name);
    setAvatar(result.avatar);
    setPhone(result.phone);
    setAddress(result.address);
    document.getElementById("leftname").textContent = result.name;
    document.getElementById("leftavatar").src =
      "http://localhost:8000/" + result.avatar;
  }
  async function updateUser(id) {
    const formData = new FormData();
    formData.append("avatar", avatar);
    formData.append("name", name);
    formData.append("phone", phone);
    formData.append("address", address);
    let result = await fetch(
      "http://localhost:8000/api/update-User/" + id + "?_method=PUT",
      {
        method: "POST",
        body: formData,
      }
    );
    if (result.ok === true) {
      getData();
      toast.success("Cập nhật thành công", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    console.log(avatar);
  }

  return (
    <div class="sectionUser__Right">
      <div class="nameSection__User">
        <h1>Chỉnh sửa thông tin cá nhân</h1>
      </div>
      <div class="row">
        <div class="col-md-5">
          <div class="contentUser__Left">
            <div class="imageSection__User">
              <img src={"http://localhost:8000/" + data.avatar} />
            </div>
            <input
              onChange={(e) => setAvatar(e.target.files[0])}
              type="file"
              id="clickFile"
              style={{ display: "none" }}
            />
            <button onClick={clickButton}>Bấm để cập nhật ảnh mới</button>
          </div>
        </div>
        <div class="col-md-7">
          <div class="formUser__Left">
            <div class="formName">
              <div class="inputFile">
                <label>
                  Họ và tên<span>*</span>
                </label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  defaultValue={data.name}
                ></input>
              </div>
            </div>
            <div class="formName" style={{ marginTop: "15px" }}>
              <div class="inputFile">
                <label>
                  Địa chỉ<span>*</span>
                </label>
                <input
                  onChange={(e) => setAddress(e.target.value)}
                  defaultValue={data.address}
                ></input>
              </div>
            </div>
            <div class="formSDT">
              <div class="inputFile">
                <label>Số điện thoại</label>
                <input
                  onChange={(e) => setPhone(e.target.value)}
                  defaultValue={data.phone}
                ></input>
              </div>
            </div>
            <div class="formEmail">
              <div class="inputFile">
                <label>Email</label>
                <input
                  type="email"
                  disabled
                  defaultValue={data.email}
                  autoComplete="on"
                ></input>
              </div>
            </div>
            <Link to="/user/change-password" class="buttonChange">
              Đổi mật khẩu
            </Link>
            <button onClick={() => updateUser(data.id)}>Lưu</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionUser;
