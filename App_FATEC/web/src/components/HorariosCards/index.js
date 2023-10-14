import React, { useState } from "react";
import * as S from "./styles";

function HorariosCards({ horario, sala_lab, predio, materia, professor }) {
  const [selectedHorario, setSelectedHorario] = useState(null);

  const handleCardClick = () => {
    setSelectedHorario({
      horario,
      professor,
      predio,
      sala_lab,
      materia,
    });
  };

  return (
    <S.Container onClick={handleCardClick}>
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

  function DetalhesHorario({ selectedHorario }) {
    if (!selectedHorario) {
      return null;
    }

    return (
      <div>
        <h2>Detalhes do Horário</h2>
        <p>Horário: {selectedHorario.horario}</p>
        <p>Professor: {selectedHorario.professor}</p>
        <p>Predio: {selectedHorario.predio}</p>
        <p>Sala/Lab: {selectedHorario.sala_lab}</p>
        <p>Matéria: {selectedHorario.materia}</p>
      </div>
    );
  }
}

export default HorariosCards;
