'use client';
import '@fontsource/montserrat';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  height: 34px;
  position: relative;
  bottom: 0;
  left: 0;
  right: 0;
  background: #eeeeee;
  font-family: 'Montserrat';
  display: flex;

  div {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
