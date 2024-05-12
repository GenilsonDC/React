'use client';
import '@fontsource/montserrat';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 218px;
  height: 285px;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.1352);
  background-color: #ffffff;
  margin: 0 11px 31px 11px;
  transition: all 0.5s ease-in-out;
  border-radius: 8px;
`;

export const topContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 170px;
  width: auto;
  border-radius: 8px;
`;

export const Imagem = styled.div`
  height: 100%;
  width: auto;
  img {
    height: 100%;
    width: 100%;
    object-fit: fill;
  }
`;

export const MidleCard = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 38px;
  align-items: center;
`;

export const Price = styled.div`
  margin-right: 11.56px;
  margin-left: 4px;
  margin-top: 3px;
  align-content: center;
  width: 64px;
  height: 26px;
  background-color: #373737;
  border-radius: 5px;
  text-align: center;
  h1 {
    font-family: 'Montserrat';
    font-weight: 700;
    font-size: 15px;
    line-height: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-left: 1px;
    color: #ffffff;

    &::before {
      content: 'R$';
      position: relative;
      right: 2px;
    }
  }
`;

export const Name = styled.div`
  align-content: center;
  width: 124px;
  height: 38px;
  margin-left: 14px;
  top: 170px;

  h1 {
    font-family: 'Montserrat';
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0;
    color: #2c2c2c;
  }
`;
export const Description = styled.div`
  width: 192px;
  height: 25px;
  margin-right: 11.56px;
  margin-top: 8px;
  margin-left: 14px;

  h1 {
    font-family: 'Montserrat';
    font-weight: 300;
    font-size: 10px;
    line-height: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0;
    color: #2c2c2c;
  }
`;

export const BottomCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #0f52ba;
  border-radius: 0 0 8px 8px;
  height: 31.91px;
  margin-top: 12px;
  button {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 100%;
    border-radius: 0 0 8px 8px;
    color: #ffffff;
    background-color: rgba(0, 0, 0, 0);
    border: none;
    h1 {
      font-family: 'Montserrat';
      font-weight: 600;
      font-size: 14px;
      line-height: 18px;
      overflow: hidden;
      text-overflow: ellipsis;
      margin: 0;
    }

    img {
      width: 12px;
      height: 13.5px;
      margin-left: 57px;
      margin-right: 14px;
    }

    &:hover {
      background-color: #06b71c;
      cursor: pointer;
    }
  }
`;
