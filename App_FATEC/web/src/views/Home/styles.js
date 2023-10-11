import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
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
  img {
    opacity: 0.35;

    &:hover {
      opacity: 1;
      transition: all 0.5s ease;
      cursor: pointer;
    }
    margin-left: 20px;
    height: 52px;
  }
`;

export const DiasSemanaIcons = styled.div`
  height: 60px;
  width: 450px;
  img {
    opacity: 0.35;
    &:hover {
      transition: all 0.5s ease;
      opacity: 1;
      cursor: pointer;
    }
    height: 52px;
    margin-left: 20px;
  }
`;
