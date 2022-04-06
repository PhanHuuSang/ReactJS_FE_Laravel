import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import avatar from "../../../../../../images/avatar.jpg";
import imageProduct1 from "../../../../../../images/sectionProduct1.webp";
import imageProduct2 from "../../../../../../images/sectionProduct2.webp";
import imageProduct3 from "../../../../../../images/sectionProduct3.webp";
import imageProduct4 from "../../../../../../images/sectionProduct4.webp";

const Comment = (props) => {
  const [toggleWrite, setToggleWrite] = useState(true);

  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);

  let { id } = useParams();

  const [text, setText] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    getData();
    getData1();
  }, [id]);

  async function getData() {
    let result = await fetch("http://localhost:8000/api/get-Comments/" + id);
    result = await result.json();
    setData(result);
  }

  async function getData1() {
    let result = await fetch(
      "http://localhost:8000/api/user/" +
        JSON.parse(localStorage.getItem("user-info-people-DN")).id
    );
    result = await result.json();
    setData1(result);
    setEmail(result.email);
    setName(result.name);
    setPhone(result.phone);
  }

  async function addComments() {
    const formData = new FormData();
    formData.append("text", text);
    formData.append("image", image);
    formData.append("medicines_id", id);
    formData.append(
      "user_id",
      JSON.parse(localStorage.getItem("user-info-people-DN")).id
    );

    let result = await fetch("http://localhost:8000/api/add-Comments", {
      method: "POST",
      body: formData,
    });
    getData();
    if (result.ok === true) {
      alert("Bạn đã thêm sản phẩm thành công");
    } else {
      alert("Bạn đã thêm sản phẩm thất bại");
    }
  }

  return (
    <div class="contentProduct_Comment">
      <h1>Đánh giá sản phẩm</h1>
      <div class="product__customer">
        <div class="row">
          <div class="col-md-2">
            <div class="children1">
              <h2>5/5</h2>
              <div class="startChildren1">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
            </div>
          </div>
          <div class="col-md-7">
            <div class="children2">
              <div class="children2__1">
                <div class="startChildren2__1">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
                <span>(27)</span>
                <div class="percent__start">
                  <div class="percent__result" style={{ width: "80%" }}></div>
                </div>
              </div>
              <div class="children2__2">
                <div class="startChildren2__1">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
                <span>(1)</span>
                <div class="percent__start">
                  <div class="percent__result" style={{ width: "50%" }}></div>
                </div>
              </div>
              <div class="children2__3">
                <div class="startChildren2__1">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
                <span>(5)</span>
                <div class="percent__start">
                  <div class="percent__result" style={{ width: "30%" }}></div>
                </div>
              </div>
              <div class="children2__4">
                <div class="startChildren2__1">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
                <span>(0)</span>
                <div class="percent__start">
                  <div class="percent__result" style={{ width: "0%" }}></div>
                </div>
              </div>
              <div class="children2__5">
                <div class="startChildren2__1">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
                <span>(0)</span>
                <div class="percent__start">
                  <div class="percent__result" style={{ width: "0%" }}></div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="children3">
              <h3>Chia sẻ nhận xét về sản phẩm</h3>
              <button onClick={() => setToggleWrite(!toggleWrite)}>
                viết nhận xét
              </button>
            </div>
          </div>
        </div>
      </div>
      {toggleWrite && localStorage.getItem("user-info-people-DN") ? (
        <div class="write__comment">
          <div class="chil1">
            <h2>1. Đánh giá sản phẩm này</h2>
            <div class="wrapper">
              <input type="checkbox" id="st1" value="1" />
              <label for="st1"></label>
              <input type="checkbox" id="st2" value="2" />
              <label for="st2"></label>
              <input type="checkbox" id="st3" value="3" />
              <label for="st3"></label>
              <input type="checkbox" id="st4" value="4" />
              <label for="st4"></label>
              <input type="checkbox" id="st5" value="5" />
              <label for="st5"></label>
            </div>
          </div>
          <div class="chil2">
            <h2>2. Viết nhận xét của bạn vào bên dưới:</h2>
            <textarea
              name=""
              id=""
              cols="30"
              rows="2"
              placeholder="Nhận xét của bạn về sản phẩm"
              onChange={(e) => setText(e.target.value)}
            ></textarea>
          </div>
          <div class="chil3">
            <h2>Thông tin cá nhân của bạn</h2>
            <div class="gridInput">
              <input
                type="text"
                disabled
                value={name}
                placeholder="Tên của bạn"
              ></input>
              <input
                type="text"
                value={phone}
                disabled
                placeholder="Số điện thoại của bạn"
              ></input>
              <input
                type="email"
                value={email}
                disabled
                placeholder="Email của bạn"
              ></input>
              <input
                type="file"
                multiple
                onChange={(e) => setImage(e.target.files[0])}
                title="Thêm hình sản phẩm nếu có"
              ></input>
            </div>
            <button onClick={addComments}>Gửi nhận xét</button>
          </div>
        </div>
      ) : null}
      {data.map((item) => (
        <div class="user__comment">
          <div class="avatar__user">
            <img src={"http://localhost:8000/" + item.avatar}></img>
          </div>
          <div class="content__user">
            <div class="star__user">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <div class="name__user">
              <h2>{item.name}</h2>
              <span>17:27, 29/03/2022</span>
            </div>
            {/* {buyProduct ? (
            <div class="buy__user">
              <span>Đã mua sản phẩm này</span>
            </div>
          ) : null} */}
            <div class="comment__user">
              <p>{item.text}</p>
            </div>
            <div class="image__user">
              <img src={"http://localhost:8000/" + item.image}></img>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comment;
