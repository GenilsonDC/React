import styled from "styled-components";

export const DiurnoColor = "#06C3FF";
export const NoturnoColor = "#2D0066";
export const VespertinoColor = "#FF9C06";

export const getPeriodoColor = (periodo) => {
  switch (periodo) {
    case "Diurno":
      return DiurnoColor;
    case "Noturno":
      return NoturnoColor;
    case "Noturno A":
      return NoturnoColor;
    case "Noturno B":
      return NoturnoColor;
    case "Vespertino":
      return VespertinoColor;
    default:
      return "#fff";
  }
};

export const Container = styled.div`
  justify-content: space-around;
  width: 222px;
  height: 80px;
  box-shadow: -3px 1px 13px -2px rgba(0, 0, 0, 0.73);
  background: ${(props) => (props.actived ? "#AD0404" : "#7A7A7A")};

  margin-bottom: 7px;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  img {
    width: 64px;
    height: 62px;
    object-fit: fill;
  }
  #dados {
    margin-top: 2px;
    display: flex;
    height: 57px;
  }
  #nome {
    display: flex;
    height: 15px;
    margin-left: -69px;
  }

  &:hover {
    background: #ad0404;
  }
`;

export const RightCard = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  width: 145px;
  flex-direction: column;
`;

export const Abrevia = styled.div`
  font-size: 18px;
  color: white;
`;

export const Periodo = styled.div`
  font-size: 18px;
  font-weight: bold;
`;
export const BottomCard = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  width: 100%;
  display: block;
  justify-content: space-around;
  height: 15px;

  span {
    color: #fff;
    font-size: 12px;
  }
`;
