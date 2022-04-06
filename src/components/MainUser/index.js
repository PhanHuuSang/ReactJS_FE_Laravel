import React, { useEffect, useState } from "react";
import "../../scss/MainUser.scss";
import "../../scss/MainOrder.scss";
import Container from "../Container";
import SectionNavUser from "./components/SectionNavUser";
import avatar from "../../images/avatar.jpg";
import SectionUser from "./components/SectionUser";
import {
  Link,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";

import ListMenuUser from "../Configs/ListMenuUser";
import Section_User from "../Section_User";

const MainUser = (props) => {
  const [activeList, setActiveList] = useState(1);
  const { checkHeader } = props;

  return (
    <div class="mainUser">
      <SectionNavUser name="Trang cá nhân"></SectionNavUser>
      <div class="contentMain__User">
        <Container>
          <div class="row">
            <div class="col-md-4">
              <Section_User
                checkUX={() => setActiveList(activeList)}
                activeUX={activeList}
                checkHeader={checkHeader}
              ></Section_User>
            </div>
            <div class="col-md-8">
              <SectionUser></SectionUser>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default MainUser;
