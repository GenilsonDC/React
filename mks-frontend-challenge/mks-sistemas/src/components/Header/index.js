import carrinho from "../../assets/carrinho.png";
import * as S from "./styles";

function Header() {
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
        <button>
          <div className="containerbuton">
            <img src={carrinho}></img><h1>0</h1>
          </div>
        </button>
      </S.RightSide>
    </S.Container>
  );
}

export default Header;
