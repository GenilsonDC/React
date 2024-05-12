import { useState } from 'react';
import carrinho from '../../assets/carrinho.png';
import * as S from './styles';

function Header() {
  const [cartCount, setCartCount] = useState(0);

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
            <img src={carrinho} alt="imagem de carrinho de compras"></img>
            <h1>{cartCount}</h1>
          </div>
        </button>
      </S.RightSide>
    </S.Container>
  );
}

export default Header;
