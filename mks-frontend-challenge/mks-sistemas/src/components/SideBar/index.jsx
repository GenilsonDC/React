import PropTypes from 'prop-types';
import { useCart } from '../context/CartContext';
import * as S from './styles';

function Sidebar({ closeSidebar }) {
  const { cartItems } = useCart();

  return (
    <S.CartSidebar>
      <button className="closeSidebar-btn" onClick={closeSidebar}>
        X
      </button>
      <div className="SideBarTitle">
        <h1>Carrinho de compras</h1>
      </div>

      {cartItems.map((product) => (
        <div className="itensContainer" key={product.id}>
          <S.Container>
            <S.LeftContainer>
              <S.Imagem>
                <img src={product.photo} alt={product.name} />
              </S.Imagem>
            </S.LeftContainer>
            <S.MidleCard>
              <S.Name>
                <h1>{product.name}</h1>
              </S.Name>
            </S.MidleCard>
            <S.QttButton>
              <button>-</button>
              <h1>1</h1>
              <button>+</button>
            </S.QttButton>
            <S.RightContainer>
              <S.Price>
                <h1>{parseFloat(product.price).toFixed(0)}</h1>
              </S.Price>
            </S.RightContainer>
          </S.Container>
        </div>
      ))}
      <S.ButtonContainer>
        <div className="totalCalc">
          <h1>Total:</h1>
          <h1>0</h1>
        </div>
        <button>Finalizar Compra</button>
      </S.ButtonContainer>
    </S.CartSidebar>
  );
}

Sidebar.propTypes = {
  closeSidebar: PropTypes.func.isRequired,
  cartItems: PropTypes.func.isRequired,
};

export default Sidebar;
