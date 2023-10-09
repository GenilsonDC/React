import React from "react";
import * as S from "./styles";
// import { Link } from "react-router-dom";

import logo from "../../assets/FATECSorocaba.png";

// import isConnected from "../../utils/isConnected";

function Header() {
  return (
    <S.Container>
      <S.LeftSide>
        <img src={logo} alt="Logo" />
      </S.LeftSide>
      <S.RightSide>
        {/* <Link to="/">INÍCIO</Link>
        <span className="dividir" />
        <Link to="/task">NOVO HORÁRIO</Link>
        <span className="dividir" /> */}
      </S.RightSide>
    </S.Container>
  );
}

export default Header;
