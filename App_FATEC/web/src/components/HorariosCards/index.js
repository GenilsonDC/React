import React from "react";
import * as S from "./styles";

function HorariosCards({ horario, sala_lab, predio, materia, professor }) {
  return (
    <S.Container>
      <div>
        <S.LeftCard>
          <S.Horario>{horario}</S.Horario>
          <S.Professor>{professor}</S.Professor>
        </S.LeftCard>
      </div>
      <S.RightCard>
        <S.Predio>{predio}</S.Predio>
        <S.Salab>{sala_lab}</S.Salab>
      </S.RightCard>
      <div id="linha"></div>
      <S.BottomCard>
        <S.Materia>{materia} </S.Materia>
      </S.BottomCard>
    </S.Container>
  );
}

export default HorariosCards;
