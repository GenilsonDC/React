import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: block;
  justify-content: center;
  h1 {
    color: #dd0404;
    border-bottom: solid #686868;
    border-bottom: 3px solid #686868;
  }

  .selecioneCurso {
    display: flex;
    flex-direction: row;
    width: 50%;
    height: 50px;

    img {
      height: 59px;
      width: 44px;
    }
  }

  .sidebar {
    z-index: 10;
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

export const Horarios = styled.div`
  display: flex;
  flex-direction: column;
  a {
    text-decoration: none;
  }
  margin-bottom: 90px;
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
