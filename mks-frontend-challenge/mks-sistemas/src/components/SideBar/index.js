import { useCart } from '../context/CartContext';
import * as S from './styles';

function Sidebar() {
  const { cartItems } = useCart();

  return (
    <S.Container>
      <div className="cart-sidebar">
        <h2>Itens no Carrinho</h2>
        <ul>
          {cartItems.map((product) => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      </div>
    </S.Container>
  );
}

export default Sidebar;
