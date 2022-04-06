import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosClient from "../../../../api/axiosClient";

const ModalMainOrder = (props) => {
  const { closeXModalDC } = props;

  const [clickButton, setClickButton] = useState(1);

  const buttonArray = [
    {
      id: 1,
      name: "Nhà",
    },
    {
      id: 2,
      name: "Công ty",
    },
    {
      id: 3,
      name: "Khác",
    },
  ];

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);

  useEffect(() => {
    getData();
    getCart();
  }, []);

  async function getData() {
    let reuslt1 = await fetch(
      "http://localhost:8000/api/user/" +
        JSON.parse(localStorage.getItem("user-info-people-DN")).id
    );
    reuslt1 = await reuslt1.json();
    setData(reuslt1);
    setName(reuslt1.name);
    setPhone(reuslt1.phone);
    setAddress(reuslt1.address);
  }

  async function getCart() {
    let reuslt1 = await fetch(
      "http://localhost:8000/api/get-cartMedicines/" +
        JSON.parse(localStorage.getItem("user-info-people-DN")).id
    );
    reuslt1 = await reuslt1.json();
    setData1(reuslt1);
  }

  async function addOrder(id) {
    const formData = new FormData();
    formData.append("user_id", id);
    formData.append("date_booking", "2022-04-04");
    formData.append("receiver", name);
    formData.append("address_booking", address);
    let subtotal = 0;
    data1.forEach((item) => {
      subtotal += item.medicines_qty * (item.price - item.discount);
    });
    formData.append("total", subtotal);
    axiosClient.post("/add-order", formData).then((res) => {
      if (res.data.status === 202) {
        alert(res.data.message);
      }
    });
  }

  return (
    <div class="modalMainOrder">
      <div class="modalMainOrder_Children">
        <div class="nameModalOrder">
          <h1>Nhập địa chỉ nhận hàng</h1>
          <i onClick={closeXModalDC} class="fa-solid fa-xmark"></i>
        </div>
        <div class="contentModalOrder">
          {/* <div class="children_top">
            <label>Phân loại địa chỉ (Không bắt buộc)</label>
            <div class="chooseButton">
              {buttonArray.map((name) => (
                <div
                  key={name.id}
                  className={clickButton === name.id ? "ActiveButton" : ""}
                  onClick={() => setClickButton(name.id)}
                >
                  {name.name}
                </div>
              ))}
            </div>
          </div> */}
          <div class="children_body">
            <label>Tên người nhận *</label>
            <input
              onChange={(e) => setName(e.target.value)}
              placeholder="Nhập tên của người nhận"
              defaultValue={name}
            ></input>
            <span id="checkusername"></span>
            <label>Số điện thoại *</label>
            <input
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Nhập số điện của người nhận"
              defaultValue={phone}
            ></input>
            <span id="checkusername"></span>
            <label>Địa chỉ nhà *</label>
            <input
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Nhập địa chỉ nhà của người nhận"
              defaultValue={address}
            ></input>
            <span id="checkusername"></span>
            {/* <label>Ghi chú</label>
              <textarea
                maxLength="225"
                placeholder="Nếu bạn có lời nhắn thêm, vui lòng cho biết"
              ></textarea> */}
            <button onClick={() => addOrder(data.id)}>Xác nhận</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalMainOrder;
