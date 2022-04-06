import React, { useEffect, useState } from "react";
import imageThuongHieu from "../../../../../../images/content_thuonghieu.png";

const ContentTab = (props) => {
  const tabTop = [
    {
      id: 1,
      nameMenu: "Mô tả",
    },
    {
      id: 2,
      nameMenu: "Thông tin sản phẩm",
    },
    {
      id: 3,
      nameMenu: "Thương hiệu",
    },
  ];
  const [clickTabTop, setClickTapTop] = useState(1);

  const [clickMoTa, setClickMoTa] = useState(false);

  const clickFullMoTa = () => {
    if (!clickMoTa) {
      document.querySelector(".content_Mota").classList.add("activeFull_Mota");
      setClickMoTa(!clickMoTa);
    } else {
      document
        .querySelector(".content_Mota")
        .classList.remove("activeFull_Mota");
      setClickMoTa(!clickMoTa);
    }
  };

  return (
    <div class="contentProduct_Tab">
      <div class="contentProduct_Tab_top">
        <ul>
          {tabTop.map((name) => (
            <li
              className={name.id === clickTabTop ? "active" : null}
              onClick={() => setClickTapTop(name.id)}
            >
              {name.nameMenu}
            </li>
          ))}
        </ul>
      </div>
      <div class="contentProduct_Tab_body">
        {clickTabTop === 1 ? (
          <>
            <div class="content_Mota">
              <h1>
                Màu sắc: <span>xanh_vàng; đen_cam; hồng_trắng</span>
              </h1>
              <h1>
                Công dụng:{" "}
                <span>Sơ cứu chấn thương trước khi đến bệnh viện</span>
              </h1>
              <h1>
                Đối tượng sử dụng: <span>trẻ em và người lớn</span>
              </h1>
              <h1>
                Độ tuổi sử dụng:{" "}
                <span>Trẻ em từ 6 tuổi trở lên và người lớn</span>
              </h1>
              <h1>
                Thương hiệu: <span>1LIFE</span>
              </h1>
              <h1>
                Sản xuất tại: <span>Việt Nam</span>
              </h1>
              <h1>
                Số giấy công bố: <span>TCCS 05:2021/1L</span>
              </h1>
              <h1>
                Túi sơ cứu bao gồm các dụng cụ sau:
                <ul>
                  <li>
                    Dụng cụ bảo vệ:
                    <ul class="childern">
                      <li>Băng cá nhân trẻ em</li>
                      <li>Băng cá nhân nhỏ</li>
                      <li>Băng cá nhân lớn</li>
                      <li>Gạc vô khuẩn</li>
                      <li>Băng thun</li>
                    </ul>
                  </li>
                  <li>
                    Dụng cụ làm sạch:
                    <ul class="childern">
                      <li>Gạc sát khuẩn</li>
                      <li>Nước muối sinh lý</li>
                    </ul>
                  </li>
                  <li>
                    Dụng cụ khác:
                    <ul class="childern">
                      <li>Băng cuộn y tế</li>
                      <li>Băng keo lụa</li>
                      <li>Gạc vô khuẩn</li>
                      <li>Găng tay y tế</li>
                    </ul>
                  </li>
                </ul>
              </h1>
            </div>
            <div class="buttonClick">
              {clickMoTa ? (
                <span onClick={clickFullMoTa}>
                  {document.querySelector(".activeFull_Mota") ? (
                    <>
                      {" "}
                      Thu Gọn{" "}
                      <svg
                        width="24"
                        style={{ transform: "rotate(-90deg)" }}
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                      >
                        <path
                          d="M8.5 5L15.5 12L8.5 19"
                          stroke="inherit"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>{" "}
                    </>
                  ) : (
                    <>
                      {" "}
                      Xem Thêm{" "}
                      <svg
                        width="24"
                        style={{ transform: "rotate(90deg)" }}
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                      >
                        <path
                          d="M8.5 5L15.5 12L8.5 19"
                          stroke="inherit"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>{" "}
                    </>
                  )}
                </span>
              ) : (
                <span onClick={clickFullMoTa}>
                  {document.querySelector(".activeFull_Mota") ? (
                    <>
                      {" "}
                      Thu Gọn{" "}
                      <svg
                        width="24"
                        style={{ transform: "rotate(-90deg)" }}
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                      >
                        <path
                          d="M8.5 5L15.5 12L8.5 19"
                          stroke="inherit"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>{" "}
                    </>
                  ) : (
                    <>
                      {" "}
                      Xem Thêm{" "}
                      <svg
                        width="24"
                        style={{ transform: "rotate(90deg)" }}
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                      >
                        <path
                          d="M8.5 5L15.5 12L8.5 19"
                          stroke="inherit"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>{" "}
                    </>
                  )}
                </span>
              )}
            </div>
          </>
        ) : null}
        {clickTabTop === 2 ? (
          <div class="content_thongtinsanpham">
            <h1>
              Brand <span>1LIFE</span>
            </h1>
          </div>
        ) : null}
        {clickTabTop === 3 ? (
          <div class="content_thuonghieu">
            <img src={imageThuongHieu}></img>
            <p>Hiện chưa có thông tin cho sản phẩm này</p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ContentTab;
