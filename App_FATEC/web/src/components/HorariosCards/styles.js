import styled from "styled-components";

export const Container = styled.div`
  justify-content: space-around;
  width: 427px;
  height: 140px;
  box-shadow: -3px 1px 13px -2px rgba(0, 0, 0, 0.73);
  background-color: #ebebeb;
  margin: 13px;
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
  width: 200px;
  flex-direction: column;
  align-items: center;
`;

export const LeftCard = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  width: 225px;
  height: 92px;
  align-items: center;
  flex-direction: column;
`;

export const Horario = styled.div`
  font-size: 22px;
  color: #474646;
`;
export const Professor = styled.div`
  font-size: 26px;
  margin-top: 26px;
  color: #474646;
`;

export const Predio = styled.div`
  font-size: 26px;
  font-weight: bold;
  color: #ad0404;
`;
export const Salab = styled.div`
  font-size: 26px;
  margin-top: 22px;
  font-weight: bold;
  color: #ad0404;
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
