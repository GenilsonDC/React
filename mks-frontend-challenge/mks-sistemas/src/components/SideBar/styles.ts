'use client';
import '@fontsource/montserrat';
import styled from 'styled-components';

export const CartSidebar = styled.div`
  z-index: 10;
  position: fixed;
  right: 0px;
  top: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 486px;
  height: 100%;
  box-shadow: -5px 0px 6px 0px rgba(0, 0, 0, 0.1352);
  background-color: #0f52ba;
  transition: all 0.5s ease-in-out;
  padding-bottom: 120px;

  .closeSidebar-btn {
    height: 38px;
    width: 38px;
    border: none;
    border-radius: 50%;
    background-color: #000000;
    color: #ffffff;
    font-family: 'Montserrat';
    font-weight: 400;
    font-size: 28px;
    line-height: 15px;
    &:hover {
      cursor: pointer;
    }
    position: absolute;
    right: 22px;
    margin-top: 39px;
  }
  .SideBarTitle {
    margin-top: 36px;
    margin-bottom: 64px;
    width: 180px;
    height: 56px;
    margin-left: 47px;
    text-align: start;

    h1 {
      font-family: 'Montserrat';
      font-weight: 700;
      font-size: 27px;
      line-height: 32.91px;
      overflow: hidden;
      text-overflow: ellipsis;
      color: #ffffff;
    }
  }

  .itensContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
    width: 385px;
  }

  overflow-x: hidden;
  overflow-y: hidden;
  transition: overflow-y 0.5s;
  &:hover {
    overflow-y: auto;
  }
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: #656362;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-track {
    background: #0f52ba;
    border-radius: 5px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 379px;
  height: 95px;
  box-shadow: -2px 2px 10px 0px rgba(0, 0, 0, 0.5);
  background-color: #ffffff;
  margin-bottom: 22px;
  transition: all 0.5s ease-in-out;
  border-radius: 8px;
`;

export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 95px;
  width: auto;
  min-width: 20px;
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
  align-items: center;
  width: 113px;
  height: 33px;
`;

export const Name = styled.div`
  align-content: center;
  width: 100%;
  height: 100%;
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

export const QttButton = styled.div`
  width: 50px;
  height: 19px;
  display: flex;
  flex-direction: row;
  align-items: center;
  button {
    border: none;
    background-color: #ffffff;
  }

  h1 {
    font-family: 'Montserrat';
    font-weight: 400;
    font-size: 8px;
    line-height: 9.75px;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-left: 4px;
    margin-right: 4px;
    color: #000000;
  }
`;

export const RightContainer = styled.div`
  width: 62px;
  height: 17px;
  margin-top: 8px;
  margin-left: 14px;
  align-content: center;
`;

export const Price = styled.div`
  margin-right: 11.56px;
  margin-left: 4px;
  margin-top: 3px;
  align-content: center;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  text-align: center;

  h1 {
    font-family: 'Montserrat';
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #000000;

    &::before {
      content: 'R$';
      position: relative;
      right: 2px;
    }
  }
`;

export const ButtonContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;

  button {
    position: relative;
    right: 0;
    bottom: 0;
    width: 486px;
    height: 97px;
    background: #000000;
    color: #ffffff;
    border: none;
    &:hover {
      background-color: #06b71c;
      cursor: pointer;
    }

    font-family: 'Montserrat';
    font-weight: 700;
    font-size: 28px;
    line-height: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
