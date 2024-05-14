import Image from 'next/image';
import { useState } from 'react';
import carrinho from '../../assets/carrinho.png';
import Sidebar from '../SideBar';
import { useCart } from '../context/CartContext';
import * as S from './styles';

function Header() {
  const { cartCount } = useCart();
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const toggleCart = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  const closeSidebar = () => {
    setIsSideBarOpen(false);
  };

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
        <div className="buttonContainer">
          <button onClick={toggleCart}>
            <div className="containerbuton">
              <Image src={carrinho} alt={'imagem de carrinho de compras'} />
              <h1>{cartCount}</h1>
            </div>
          </button>
        </div>
      </S.RightSide>
      {isSideBarOpen && <Sidebar closeSidebar={closeSidebar} />}
    </S.Container>
  );
}

export default Header;
