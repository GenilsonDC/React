'use client'
// import carr from "../../assets/carrinho.png";
import * as S from "./styles";

function Header(props) {

  return (
    <S.Container>
      <S.LeftSide>
        <div className="mksTitle">
          <h1>MKS</h1>
        </div>

        <div className="sistemTitle">
          <h1>Sistemas</h1>
        </div>
      </S.LeftSide>
      <S.RightSide>
        <div className="containerbuton">
          <button>🛒</button>
          <h1>0</h1>
        </div>
      </S.RightSide>
    </S.Container >

  );
}
export default Header;
