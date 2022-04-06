import React from "react";
import "../../scss/MainCategory.scss";
import Container from "../Container";
import ContentLeftCategory from "./components/ContentLeftCategory";
import ContentRightCategory from "./components/ContentRightCategory";
import ListMainCategory from "./components/ListMainCategory";
import NameMainCategory from "./components/NameMainCategory";

const MainCategory = (props) => {
  const { addCart4 } = props;
  return (
    <div class="mainCategory">
      {/* <ListMainCategory name="Thực phẩm dinh dưỡng"></ListMainCategory> */}
      <NameMainCategory name="Thực phẩm dinh dưỡng"></NameMainCategory>
      <div class="contentCategory">
        <Container>
          <div class="row">
            <div class="col-md-3">
              <ContentLeftCategory></ContentLeftCategory>
            </div>
            <div class="col-md-9">
              <ContentRightCategory addCart4={addCart4}></ContentRightCategory>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default MainCategory;
