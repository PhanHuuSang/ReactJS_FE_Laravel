import React, { useState } from "react";
import { Link } from "react-router-dom";
import ListMenuUser from "../Configs/ListMenuUser";
import avatar from "../../images/avatar.jpg";
import Container from "../Container";
import SectionNavUser from "../MainUser/components/SectionNavUser";
import SectionChangePassword from "./SectionChangePassword";
import Section_User from "../Section_User";

const MainUserPassword = (props) => {
  const [activeList, setActiveList] = useState(1);
  const { checkHeader } = props;
  return (
    <div class="mainUser">
      <SectionNavUser name="Đổi mật khẩu"></SectionNavUser>
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
              <SectionChangePassword></SectionChangePassword>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default MainUserPassword;
