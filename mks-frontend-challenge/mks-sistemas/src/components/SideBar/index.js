import { useCart } from '../context/CartContext';
import * as S from './styles';

function Sidebar() {
  const { cartItems } = useCart();

  return (
    <S.CartSidebar>
      <h2>Itens no Carrinho</h2>
      <ul>
        {cartItems.map((product) => (
          <li key={product.id}>
            <S.Container>
              <S.topContainer>
                <S.Imagem>
                  <img src={product.photo} alt={product.name} />
                </S.Imagem>
              </S.topContainer>
              <S.MidleCard>
                <S.Name>
                  <h1>{product.name}</h1>
                </S.Name>
                <S.Price>
                  <h1>{parseFloat(product.price).toFixed(0)}</h1>
                </S.Price>
              </S.MidleCard>
              <S.Description>
                <h1>{product.description}</h1>
              </S.Description>
            </S.Container>
          </li>
        ))}
      </ul>
    </S.CartSidebar>
  );
}

export default Sidebar;
