import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: block;
  justify-content: center;

  .selecioneCurso {
    display: flex;
    flex-direction: row;
    width: 50%;
    height: 50px;

    img {
      height: 54px;
      width: 44px;
      rotate: 180deg;
    }
  }

  h1 {
    color: #06c3ff;
    border-bottom: solid #686868;
    border-bottom: 3px solid #686868;
  }
  button {
    cursor: pointer;
  }
  margin-bottom: 10px;
  button {
    background: none;
    border: none;
  }
  .sidebar {
    position: fixed;
    z-index: 9;
    left: 0;
    top: 63px;
    bottom: 72px;
    background-color: #686868;
    width: 233px;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }
  .sidebar .sidebar-scroll {
    margin-top: 7px;
    height: 800px;
    overflow-y: hidden;
    transition: overflow-y 0.5s;

    &:hover {
      overflow-y: auto;
    }

    &::-webkit-scrollbar {
      width: 10px;
    }

    &::-webkit-scrollbar-thumb {
      background: #686868;
      border-radius: 5px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: #ad0404;
    }

    &::-webkit-scrollbar-track {
      background: white;
      border-radius: 5px;
    }
  }

  .hora {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 110px;
    width: 700px;
    min-height: auto;
    max-height: auto;
    justify-content: center;
    margin-left: 320px;
  }
`;

export const SemestresIcons = styled.div`
  height: 60px;
  width: 600px;
  .inative_semestre {
    opacity: 0.34;
    &:hover {
      opacity: 1;
      box-shadow: 1px -1px 14px 0px rgba(211, 102, 33, 0.99);
    }
    box-shadow: 1px -1px 14px 0px rgba(254, 0, 0, 0.99);
  }
  button {
    margin-left: 10px;
  }
  img {
    opacity: 1;
    border-radius: 50%;

    &:hover {
      opacity: 0.74;
      transition: all 0.5s ease;
      box-shadow: 1px -1px 14px 0px rgba(11, 12, 233, 0.99);

      cursor: pointer;
    }
    height: 52px;
  }
`;

export const DiasSemanaIcons = styled.div`
  height: 60px;
  width: 450px;
  margin-bottom: 40px;
  .inative_dia {
    opacity: 0.34;
    &:hover {
      opacity: 1;
      box-shadow: 1px -1px 14px 0px rgba(211, 102, 33, 0.99);
    }
    box-shadow: 1px -1px 14px 0px rgba(11, 12, 33, 0.99);
  }

  button {
    margin-left: 10px;
    margin-top: 15px;
  }
  img {
    opacity: 1;
    border-radius: 50%;

    &:hover {
      transition: all 0.5s ease;
      opacity: 0.74;
      box-shadow: 1px -1px 14px 0px rgba(11, 12, 233, 0.99);

      cursor: pointer;
    }
    height: 52px;
  }
`;

export const MudaHorarios = styled.div`
  width: 560px;
  height: 500px;
  box-shadow: -3px 1px 13px -2px rgba(0, 0, 0, 0.73);
  background-color: #ebebeb;
  margin: 10px;
  transition: all 0.5s ease;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  input {
    width: 100%;
    margin-left: 26px;
    font-size: 26px;
    border: none;
    background-color: transparent;
    color: #2d0066;
    margin-bottom: -19px;
  }

  #linha {
    background-color: #686868;
    height: 1.6px;
    width: 100%;
    margin-left: 3px;
    margin-right: 3px;
    opacity: 0.7;
  }

  &:hover {
    background: #fff;
  }
`;

export const Materia = styled.div`
  font-size: 26px;
  font-weight: bold;
  color: #ad0404;
  margin-left: 22px;
  margin-top: 10px;
`;

export const Professor = styled.div`
  font-size: 26px;
  font-weight: bold;
  color: #ad0404;
  margin-left: 22px;
  margin-bottom: -20px;
`;

export const Predio = styled.div`
  font-size: 26px;
  font-weight: bold;
  color: #ad0404;
  margin-left: 22px;
  margin-bottom: -20px;
`;

export const Salab = styled.div`
  font-size: 26px;
  font-weight: bold;
  color: #ad0404;
  margin-left: 22px;
  margin-bottom: -20px;
`;

export const Horario = styled.div`
  font-size: 26px;
  font-weight: bold;
  color: #ad0404;
  margin-left: 22px;
  margin-bottom: -20px;
`;
export const Buttons = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-around;
  margin-bottom: 70px;

  .btnSalvar {
    background-color: #06c3ff;
    color: white;
    border-radius: 10px;
    width: 304px;
    height: 55px;
    transition: all 0.5s ease;
    font-size: 24px;
    font-weight: bold;
    &:hover {
      background-color: #2d0066;
    }
  }

  .btnExcluir {
    background-color: #e37575;
    color: white;
    border-radius: 10px;
    width: 152px;
    height: 55px;
    transition: all 0.5s ease;
    font-size: 24px;

    &:hover {
      background-color: #ad0404;
      font-weight: bold;
    }
  }
`;
