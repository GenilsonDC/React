import Image from 'next/image';
import carrinho from '../../assets/carrinho.png';
import { useCart } from '../../components/context/CartContext';
import * as S from './styles';

function Header() {
  const { cartCount } = useCart();

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
            <Image src={carrinho} alt={'imagem de carrinho de compras'} />
            <h1>{cartCount}</h1>
          </div>
        </button>
      </S.RightSide>
    </S.Container>
  );
}

export default Header;
