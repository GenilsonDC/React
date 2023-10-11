import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: block;
  justify-content: center;

  .sidebar {
    position: fixed;
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

  button {
    background: none;
    border: none;
  }

  .sidebar-scroll::-webkit-scrollbar {
    display: block;
  }

  .sidebar-scroll {
    margin-top: 7px;
    height: 800px;
    overflow-y: auto;
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

export const Horarios = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SemestresIcons = styled.div`
  height: 60px;
  width: 600px;
  .inative_semestre {
    opacity: 1;
    box-shadow: 1px -1px 14px 0px rgba(254, 0, 0, 0.99);
  }
  button {
    margin-left: 10px;
  }
  img {
    opacity: 0.45;
    border-radius: 50%;

    &:hover {
      opacity: 1;
      transition: all 0.5s ease;
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
    opacity: 1;
    box-shadow: 1px -1px 14px 0px rgba(11, 12, 23, 0.99);
  }

  button {
    margin-left: 10px;
    margin-top: 15px;
  }
  img {
    opacity: 0.35;
    border-radius: 100px;

    &:hover {
      transition: all 0.5s ease;
      opacity: 1;
      cursor: pointer;
    }
    height: 52px;
  }
`;
