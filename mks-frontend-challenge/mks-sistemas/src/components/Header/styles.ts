'use client';
import '@fontsource/montserrat';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 101px;
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  background: #0f52ba;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LeftSide = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  margin-right: 50px;

  .mksTitle {
    position: absolute;
    align-content: center;
    width: 128px;
    height: 44px;
    left: 65px;
    top: 28px;

    h1 {
      font-family: 'Montserrat';
      font-weight: 600;
      font-size: 40px;
      line-height: 19px;
      padding-left: 10px;
      color: #ffffff;
    }
  }

  .sistemTitle {
    position: absolute;
    width: 200px;
    height: 44px;
    align-content: center;
    left: 160px;
    top: 34px;
    h1 {
      font-family: 'Montserrat';
      font-weight: 300;
      font-size: 20px;
      line-height: 19px;
      color: #ffffff;
      padding-left: 10px;
    }
  }
`;

export const RightSide = styled.div`
  width: 50%;
  height: 100%;

  button {
    position: absolute;
    width: 90px;
    height: 45px;
    left: 1262px;
    top: 29px;
    background: #ffffff;
    border: none;
    border-radius: 8px;

    &:hover {
      background-color: #777777;
      cursor: pointer;
    }

    .containerbuton {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      width: 90px;
      height: 45px;
      left: 1262px;
      top: 29px;
      border-radius: 8px;

      img {
        width: 19.1px;
        height: 18px;
        margin-left: 15px;
      }

      h1 {
        width: 32px;
        font-family: 'Montserrat';
        font-weight: 700;
        font-size: 18px;
        line-height: 21.94px;
        overflow: hidden;
        text-overflow: ellipsis;
        margin: 0;
        margin-right: 22px;
        color: #000000;
      }
    }
  }
`;
