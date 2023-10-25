import React from "react";
import { Link } from "react-router-dom";
import * as S from "./styles";

import logo from "../../assets/FATECSorocaba.png";

function Header(props) {
  return (
    <S.Container>
      <S.LeftSide>
        <img src={logo} alt="Logo" />
      </S.LeftSide>

      <S.RightSide>
        {props.ShowBackButton ? (
          <Link to="/">⏎ VOLTAR</Link>
        ) : (
          <Link to="/horario">+ NOVO HORÁRIO</Link>
        )}
      </S.RightSide>
    </S.Container>
  );
}

export default Header;
