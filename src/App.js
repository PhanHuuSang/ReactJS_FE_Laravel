import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Outside from "./components/Outside";
import { Route, Routes, useLocation } from "react-router-dom";
import MainProduct from "./components/MainProduct";
import ScrollToTop from "./components/ScrollToTop";
import MainCart from "./components/MainCart";
import { useEffect, useState } from "react";
import MainOrder from "./components/MainOrder";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Toasts from "./components/Toasts";
import HeaderMobile from "./components/HeaderMobile";
import MainDM__Mobile from "./components/MainDM__Mobile";
import ModalMobline from "./components/ModalMobile";
import MainCategory from "./components/MainCategory";
import MainUser from "./components/MainUser";
import MainUserOrder from "./components/MainUserOrder";
import MainUserPassword from "./components/MainUserPassword";
import MainCollection from "./components/MainCollection";
import CheckOut from "./components/CheckOut";
import LoginAdmin from "./components/LoginAdmin";
import NavDashBoard from "./components/NavDashBoard";
import NavUser from "./components/NavUser";
import NavTableList from "./components/NavTableList";
import NavOrder from "./components/NavOrder";
import NavProductManager from "./components/NavProductManager";
import NavSetting from "./components/NavSetting";
import NavProductType1 from "./components/NavProductType1";
import NavProductType2 from "./components/NavProductType2";
import NavProductType3 from "./components/NavProductType3";
import NavProductType1Add from "./components/NavProductType1Add";
import NavProductType2Add from "./components/NavProductType2Add";
import NavProductType3Add from "./components/NavProductType3Add";
import NavProductType1Update from "./components/NavProductType1Update";
import NavProductType2Update from "./components/NavProductType2Update";
import NavProductSearch from "./components/NavProductSearch";

function App(props) {
  const [newCart, setNewCart] = useState(false);
  const clickAddCArt = () => {
    toast.success("Thêm sản phẩm thành công", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    setNewCart(true);
  };

  const [checkHeader, setCheckHeader] = useState(false);
  const clickCheckHeader = () => {
    setCheckHeader(true);
  };

  const [tosts2, setTosts2] = useState(false);
  const clickTosts2 = () => {
    setTosts2(true);
    toast.success("Thêm sản phẩm thành công", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const [tosts3, setTosts3] = useState(false);
  const clickTosts3 = () => {
    setTosts3(true);
    toast.success("Thêm sản phẩm thành công", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const [tosts1, setTosts1] = useState(false);
  const clickTosts1 = () => {
    setTosts1(true);
    toast.success("Thêm sản phẩm thành công", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const [tosts4, setTosts4] = useState(false);
  const clickTosts4 = () => {
    setTosts4(true);
    toast.success("Thêm sản phẩm thành công", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const [tosts5, setTosts5] = useState(false);
  const clickTosts5 = () => {
    setTosts5(true);
    toast.success("Thêm sản phẩm thành công", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const [tosts6, setTosts6] = useState(false);
  const clickTosts6 = () => {
    setTosts6(true);
    toast.success("Thêm sản phẩm thành công", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  useEffect(() => {
    const handleHeaderMobile = () => {
      if (window.scrollY > 100 && window.innerWidth <= 1200) {
        document.querySelector("header").classList.add("activeMobile");
      } else {
        document.querySelector("header").classList.remove("activeMobile");
      }
    };
    window.addEventListener("scroll", handleHeaderMobile);
    return () => {
      window.removeEventListener("scroll", handleHeaderMobile);
    };
  }, []);

  useEffect(() => {
    const handleMobile = () => {
      if (window.innerWidth <= 1200) {
        document
          .querySelector(".headerMobile")
          .classList.add("activeHeader__Mobile");
      } else {
        document
          .querySelector(".headerMobile")
          .classList.remove("activeHeader__Mobile");
      }
    };
    window.addEventListener("resize", handleMobile);
    return () => {
      window.removeEventListener("resize", handleMobile);
    };
  }, []);

  const location = useLocation();

  return (
    <div className="App">
      <ScrollToTop></ScrollToTop>
      <Header
        newCart={newCart}
        tosts6={tosts6}
        tosts5={tosts5}
        tosts4={tosts4}
        tosts1={tosts1}
        tosts2={tosts2}
        tosts3={tosts3}
        checkHeader={checkHeader}
      ></Header>
      <Routes>
        {/* <Route path="/" element={<Main addCart={clickAddCArt}></Main>}></Route> */}
        <Route
          path="/medicines/:id"
          element={
            <MainProduct
              addCartNow={clickTosts5}
              addCart1={clickTosts1}
              addcart2={clickTosts2}
              addCart3={clickTosts3}
            ></MainProduct>
          }
        ></Route>
        <Route path="/cart" element={<MainCart></MainCart>}></Route>
        <Route path="/dathang" element={<MainOrder></MainOrder>}></Route>
        <Route
          path="/"
          element={<MainCategory addCart4={clickTosts4}></MainCategory>}
        ></Route>
        {/* <Route
          path="/xemtatca"
          element={<MainCollection addCart6={clickTosts6}></MainCollection>}
        ></Route> */}
        <Route
          path="/user/account"
          element={<MainUser checkHeader={clickCheckHeader}></MainUser>}
        ></Route>
        <Route path="/checkout" element={<CheckOut></CheckOut>}></Route>
        <Route
          path="/user/order"
          element={<MainUserOrder></MainUserOrder>}
        ></Route>
        <Route
          path="/user/change-password"
          element={<MainUserPassword></MainUserPassword>}
        ></Route>
        <Route
          path="/dashboard"
          element={<NavDashBoard></NavDashBoard>}
        ></Route>
        <Route path="/login" element={<LoginAdmin></LoginAdmin>}></Route>
        <Route path="/user" element={<NavUser></NavUser>}></Route>
        <Route
          path="/table-list"
          element={<NavTableList></NavTableList>}
        ></Route>
        <Route path="/order" element={<NavOrder></NavOrder>}></Route>
        <Route
          path="/product"
          element={<NavProductManager></NavProductManager>}
        ></Route>
        <Route path="/setting" element={<NavSetting></NavSetting>}></Route>
        <Route
          path="/product/type1"
          element={<NavProductType1></NavProductType1>}
        ></Route>
        <Route
          path="/product/type2"
          element={<NavProductType2></NavProductType2>}
        ></Route>
        <Route
          path="/product/type3"
          element={<NavProductType3></NavProductType3>}
        ></Route>
        <Route
          path="/product/type1/add"
          element={<NavProductType1Add></NavProductType1Add>}
        ></Route>
        <Route
          path="/product/type2/add"
          element={<NavProductType2Add></NavProductType2Add>}
        ></Route>
        <Route
          path="/product/type3/add"
          element={<NavProductType3Add></NavProductType3Add>}
        ></Route>
        <Route
          path="/product/type1/update/:id"
          element={<NavProductType1Update></NavProductType1Update>}
        ></Route>
        <Route
          path="/product/type2/update/:id"
          element={<NavProductType2Update></NavProductType2Update>}
        ></Route>
        <Route
          path="/product/search"
          element={<NavProductSearch></NavProductSearch>}
        ></Route>
      </Routes>
      <Outside></Outside>
      <Toasts></Toasts>
      <HeaderMobile></HeaderMobile>
      {location.pathname === "/danhmuc" && window.innerWidth <= 1200 ? (
        <MainDM__Mobile></MainDM__Mobile>
      ) : null}
      {location.pathname === "/taikhoan" && window.innerWidth <= 1200 ? (
        <ModalMobline></ModalMobline>
      ) : null}
    </div>
  );
}

export default App;
