import "@fontsource/montserrat";
import styled from "styled-components";

export const Container = styled.div`
  width: 218px;
  height: 285px;
  box-shadow: -3px 1px 13px -2px rgba(0, 0, 0, 0.1352);
  background-color: #FFFFFF;
  margin: 22px;
  margin-top: 217px;
  transition: all 0.5s ease-in-out;
  border-radius: 8px;
  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
  .all{
  width: 100%;
  flex-direction: column;
  display:flex;
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
  margin-right:11.56px;
  margin-left:4px;
  align-content:center;
  width: 84px;
  height:26px;
  background-color:#373737;
  border-radius: 5px;

  h1{
    font-family: 'Montserrat';
    font-weight: 700;
    font-size: 15px;
    line-height: 15px;
    margin-left: 1px;
    color: #FFFFFF;

    &::before {
      content: "R$";
      position: relative;
      right: 2px;
    }
  }

`;


export const Name = styled.div`
  align-content:center;
  width: 124px;
  height:38px;
  top: 170px;
  margin-left:14px;
  h1{
    font-family: 'Montserrat';
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    margin-left: 1px;
    color: #2C2C2C;
  }

`;
export const Description = styled.div`
  width: 192px;
  height:25px;
  top: 216px;
  margin-left:14px;
  margin-right:11.56px;
  margin-top: 8px;
  margin-bottom: 12px;

  h1{
    font-family: 'Montserrat';
    font-weight: 300;
    font-size: 10px;
    line-height: 12px;
    margin-left: 1px;
    color: #2C2C2C;
  }


`;
export const ImagemContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
align-content: center;
height: 100%;
width:100%;
margin-top: 18px;
margin-bottom: 13px;
`;

export const Imagem = styled.div`
  display:flex;
  flex-direction:row;
  justify-content: center;
  height: 100%;
  width:100%;
  img {
      width: 111px;
      height: 111px;
      object-fit: fill;
    }
`;


export const BottomCard = styled.div`
width: 100%;
position:relative;
display: flex;
flex-direction: row;
align-items:center;
justify-content:center;
background-color:#0F52BA;
border-radius: 0 0 8px 8px;
width:218px;
height:31.91px;
h1{
      font-family: 'Montserrat';
      font-weight: 600;
      font-size: 14px;
      line-height: 18px;
      margin-left: 1px;
      color:#FFFFFF;
}
img{
      width:12px;
      height:13.5px;
      margin-right: 14px;
  }
`;
