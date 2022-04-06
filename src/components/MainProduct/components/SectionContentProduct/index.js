import React, { useState } from "react";
import Container from "../../../Container";
import Header from "../../../Header";
import Comment from "./components/Comment";
import ContentList from "./components/ContentList";
import ContentSimilar from "./components/ContentSimilar";
import ContentTab from "./components/ContentTab";

const SectionContentProduct = (props) => {
  const { addCart3, addcart2 } = props;

  return (
    <>
      <div class="sectionContentProduct">
        <Container>
          <div class="row">
            <div class="col-md-9">
              <ContentTab></ContentTab>
              <Comment></Comment>
              <ContentList addCart3={addCart3}></ContentList>
            </div>
            <div class="col-md-3">
              <ContentSimilar addcart2={addcart2}></ContentSimilar>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default SectionContentProduct;
