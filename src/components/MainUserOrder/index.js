import React, { useState } from "react";
import ListMenuUser from "../Configs/ListMenuUser";
import Container from "../Container";
import avatar from "../../images/avatar.jpg";
import SectionNavUser from "../MainUser/components/SectionNavUser";
import { Link } from "react-router-dom";
import SectionUserOrder from "./SectionUserOrder";
import Section_User from "../Section_User";
import "../../scss/ModalSearch.scss";

const MainUserOrder = () => {
  const [activeList, setActiveList] = useState(2);
  return (
    <div class="mainUser">
      <SectionNavUser name="Lịch sử giao dịch"></SectionNavUser>
      <div class="contentMain__User">
        <Container>
          <div class="row">
            <div class="col-md-4">
              <Section_User
                checkUX={() => setActiveList(activeList)}
                activeUX={activeList}
              ></Section_User>
            </div>
            <div class="col-md-8">
              <SectionUserOrder></SectionUserOrder>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default MainUserOrder;
