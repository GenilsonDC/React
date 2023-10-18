import styled from "styled-components";

export const Container = styled.div`
  z-index: 500;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.3rem;
  position: fixed;
  top: 0;
  width: 100%;
  height: 63px;
  background: #ad0404;
  border-bottom: 7px solid #686868;
  display: flex;
`;

export const LeftSide = styled.div`
  width: 70%;
  height: 70px;
  display: flex;
  align-items: center;
  margin-left: 10px;

  img {
    margin-left: 40px;
    width: 140px;
    height: 55px;
    margin-bottom: 8px;
  }
`;

export const RightSide = styled.div`
  width: 50%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 50px;

  button {
    background: none;
    border: none;
    cursor: pointer;
  }

  a,
  button {
    color: #fff;
    font-weight: bold;
    text-decoration: none;
    margin: 0 10px;
    font-size: 1.3rem;

    &:hover {
      color: #373636;
    }

    span {
      background: #fff;
      color: #06c3ff;
      padding: 3px 7px;
      border-radius: 50%;
      position: relative;
      top: -20px;
      right: 10px;
    }
  }

  .dividir::after {
    content: "|";
    margin: 0 10px;
    color: #fff;
  }
`;
