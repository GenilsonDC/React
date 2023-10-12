import * as S from "./styles";
import cursoIcons from "../../icons/cursosIcons";
import React from "react";
import { getPeriodoColor } from "./styles";

function CursoCard({ img_curso, abrevia_curso, periodo, nome_curso, actived }) {
  const periodoColor = getPeriodoColor(periodo);

  return (
    <S.Container actived={actived}>
      <img src={cursoIcons[img_curso]} alt="Imagem do curso" />
      <div id="dados">
        <S.RightCard>
          <S.Abrevia> {abrevia_curso}</S.Abrevia>
          <S.Periodo style={{ color: periodoColor }}>{periodo}</S.Periodo>
        </S.RightCard>
      </div>
      <div id="nome">
        <S.BottomCard>
          <span>{nome_curso}</span>
        </S.BottomCard>
      </div>
    </S.Container>
  );
}

export default CursoCard;
