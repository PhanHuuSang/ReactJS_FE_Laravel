import React, { useState } from "react";
import HeaderTop from "./components/Header-top";
import "../../scss/Header.scss";
import Modal from "../Modal";
import "../../scss/ModalSearch.scss";
import HeaderBody from "./components/Header-body";
import MenuCategory from "./components/MenuCategory";
import DropdownLanguage from "./components/DropdownLang";
import { toast } from "react-toastify";

const Header = (props) => {
  const [dropUser, setDropUser] = useState(false);
  // const [dropMenu, setDropMenu] = useState(false);
  const [toggleLang, setToggleLang] = useState(false);

  const [activeUserDN, setActiveUserDN] = useState(false);
  const clickUserDN = () => {
    toast.success("Đăng nhập thành công", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    setActiveUserDN(true);
  };

  const toggleUser = (props) => {
    setDropUser(!dropUser);
    document.querySelector("body").style = "overflow:hidden";
    // setDropMenu(false);
    setToggleLang(false);
  };

  const {
    newCart,
    tosts3,
    tosts2,
    tosts1,
    tosts4,
    tosts5,
    tosts6,
    money,
    checkHeader,
  } = props;

  const closeUser = () => {
    setDropUser(false);
    document.querySelector("body").style = null;
  };

  const ToggleLang = () => {
    setToggleLang(!toggleLang);
  };

  const toggleFalse = () => {};
  // const toggleDropMenu = () => {
  //   setDropMenu(!dropMenu);
  // };

  return (
    <header>
      <HeaderTop
        activeUserDN={activeUserDN}
        toggleDropUser={toggleUser}
        toggleLanguage={ToggleLang}
        checkHeader={checkHeader}
      ></HeaderTop>
      {toggleLang ? <DropdownLanguage></DropdownLanguage> : null}
      {dropUser ? (
        <Modal userDN={clickUserDN} toggleCloseUser={closeUser}></Modal>
      ) : null}
      {/* <HeaderBody tosts6={tosts6} tosts5={tosts5} tosts1={tosts1} tosts2={tosts2} tosts4={tosts4} tosts3={tosts3} newCart={newCart} toggleMenuCategory={toggleDropMenu}></HeaderBody> */}
      <HeaderBody
        tosts6={tosts6}
        tosts5={tosts5}
        tosts1={tosts1}
        tosts2={tosts2}
        tosts4={tosts4}
        tosts3={tosts3}
        newCart={newCart}
        money={money}
      ></HeaderBody>
      {/* {dropMenu ? <MenuCategory></MenuCategory> : null} */}
    </header>
  );
};

export default Header;
