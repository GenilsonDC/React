import styled from "styled-components";

export const Container = styled.div`
  justify-content: space-around;
  width: 357px;
  height: 140px;
  box-shadow: -3px 1px 13px -2px rgba(0, 0, 0, 0.73);
  background-color: #ebebeb;

  margin: 10px;
  transition: all 0.5s ease;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  #linha {
    background-color: #686868;
    height: 1.6px;
    width: 100%;
    margin-left: 3px;
    margin-right: 3px;
  }

  &:hover {
    background: #fff;
  }
`;

export const RightCard = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  height: 92px;
  width: 130px;
  flex-direction: column;
  align-items: center;
`;

export const LeftCard = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  align-items: center;
  width: 220px;
  height: 92px;
  flex-direction: column;
`;

export const Horario = styled.div`
  font-size: 22px;
  color: #2d0066;
`;
export const Professor = styled.div`
  font-size: 26px;
  margin-top: 26px;
  color: #2d0066;
`;

export const Predio = styled.div`
  font-size: 26px;
  font-weight: bold;
  color: #2d0066;
`;
export const Salab = styled.div`
  font-size: 26px;
  margin-top: 22px;

  font-weight: bold;

  color: #2d0066;
`;

export const Materia = styled.div`
  font-size: 26px;
  text-align: center;
  color: #ad0404;
`;

export const BottomCard = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  align-self: center;
  width: 100%;
`;
