import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../scss/MainCollection.scss";
// import ProductCategory from '../Configs/ProductCategory'
import ListMainCollection from "./components/ListMainCollection";
import NameMainCollection from "./components/NameMainCollection";
import test from "../../images/product1.webp";
import medicinesApi from "../../api/medicinesApi";
const MainCollection = (props) => {
  const { addCart6 } = props;
  const [medicinesList, setMedicinesList] = useState([]);
  useEffect(() => {
    (async function () {
      try {
        const { data } = await medicinesApi.getMedicines();
        setMedicinesList(data);
        console.log(data);
      } catch (error) {}
    })();
  }, []);

  return (
    <div class="mainCollection">
      <ListMainCollection name="Sản phẩm mới"></ListMainCollection>
      <NameMainCollection name="Sản phẩm mới"></NameMainCollection>
      <div class="mainContent__Collection">
        {medicinesList.map((item) => (
          <div class="ItemCategory" key={item.id}>
            <Link to="/asd">
              {item.nameDiscount ? (
                <div class="discountPos">
                  <p>{item.nameDiscount}</p>
                </div>
              ) : null}
              <div class="imageItemCategory">
                <img src={test} alt="" />
              </div>
              <div class="nameItemCategory">
                <h1>{item.name}</h1>
              </div>
              <div class="priceItemCategory">
                <p class="discount">
                  <del>{item.count}</del>
                </p>
                <p>
                  {item.price}
                  <span>{item.title}</span>
                </p>
              </div>
            </Link>
            <div class="cartItemCategory">
              <button onClick={addCart6}>Thêm vào giỏ hàng</button>
            </div>
          </div>
        ))}
        {/* <div class="ItemCategory" key={medicinesList.id}>
          <Link to="/asd">
            {medicinesList.nameDiscount ? (
              <div class="discountPos">
                <p>{medicinesList.nameDiscount}</p>
              </div>
            ) : null}
            <div class="imageItemCategory">
              <img src={test} title={test}></img>
            </div>
            <div class="nameItemCategory">
              <h1>{medicinesList.name}</h1>
            </div>
            <div class="priceItemCategory">
              <p class="discount">
                <del>{medicinesList.count}</del>
              </p>
              <p>
                {medicinesList.price}
                <span>{medicinesList[0].title}</span>
              </p>
            </div>
          </Link>
          <div class="cartItemCategory">
            <button onClick={addCart6}>Thêm vào giỏ hàng</button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default MainCollection;
