import "@fontsource/montserrat";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  height: 101px;
  top:0;
  background: #0F52BA;
  font-family: 'Montserrat';
  position: fixed;
  display: flex;
  align-items:center;
  justify-content: center;
`;
export const LeftSide = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  margin-right: 50px;


.mksTitle{
  position: absolute;
  align-content:center;
  width:128px;
  height:44px;
  left: 65px;
  top: 28px;

  h1{
    font-family: 'Montserrat';
    font-weight: 600;
    font-size: 40px;
    line-height: 19px;
    padding-left: 10px;
    color: #FFFFFF;
  }
};
.sistemTitle{
  position: absolute;
  width:200px;
  height:44px;
  align-content:center;
  left: 160px;
  top: 37px;
  h1{
    font-family: 'Montserrat';
    font-weight: 300;
    font-size: 20px;
    line-height: 19px;
    color: #FFFFFF;
    padding-left: 10px;

  }
}
`;

export const RightSide = styled.div`
  width: 50%;
  height: 100%;

.containerbuton{
  position:absolute;
  display:flex;
  flex-direction:row;
  align-items: center;
  width: 90px;
  height: 45px;
  left: 1262px;
  top: 29px;
  background: #FFFFFF;
  border-radius: 8px;

  span{
    margin-left: -21px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    color: #000000;
  }

}


button {
  width: 90px;
  height: 45px;
  left: 1262px;
  background: none;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  text-decoration: none;
  font-size: 1.3rem;

    &:hover {
    background-color:#777777;
    cursor: pointer;
    }

  }


`;


