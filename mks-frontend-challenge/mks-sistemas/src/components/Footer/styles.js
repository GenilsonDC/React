'use client';
import styled from "styled-components";

export const Container = styled.div`
  width: 1440px;
  height: 34px;
  background: #EEEEEE;
  font-family: 'Montserrat';
  position: fixed;
  bottom:0;
  display: flex;


  div {
    display:flex;
    width:100%;
    flex-direction:column;
    justify-content: center;
    align-items:center;
    margin-top: 4px;
    height: 100%;

    h1 {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #000000;
    }
  }

`;
