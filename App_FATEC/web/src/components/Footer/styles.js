import styled from "styled-components";

export const Container = styled.div`
  z-index: 11;
  width: 100%;
  height: 70px;
  background: #ad0404;
  border-top: 7px solid #686868;

  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;

  div {
    margin-top: 4px;
    text-align: center;
    height: 72px;
    min-width: 300px;
    max-width: 600px;
  }
  span {
    color: #fff;
  }

  h3 {
    color: #fff;
    margin-bottom: 0px;
  }
`;
