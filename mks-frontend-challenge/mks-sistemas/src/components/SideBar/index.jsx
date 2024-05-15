import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { useCart } from '../context/CartContext';
import * as S from './styles';

function Sidebar({ closeSidebar }) {
  const { cartItems, removeFromCart } = useCart();
  const calcularTotal = () => {
    let total = 0;
    cartItems.forEach((product) => {
      total += parseFloat(product.price);
    });
    return total.toFixed(0);
  };

  return (
    <S.CartSidebar>
      <motion.div
        className="sidebar-content"
        initial={{ y: '-50%' }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 70, damping: 20 }}
      >
        <button className="closeSidebar-btn" onClick={closeSidebar}>
          X
        </button>
        <div className="SideBarTitle">
          <h1>
            Carrinho
            <br /> de compras
          </h1>
        </div>

        {cartItems.map((product) => (
          <div className="itensContainer" key={product.id}>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                delay: 0.15,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <S.Container>
                <button
                  className="closeItensContainer-btn"
                  onClick={() => removeFromCart(product.id)}
                >
                  X
                </button>
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
                <div className="quantidadeContainer">
                  <h1>Qtd:</h1>
                  <S.QttButton>
                    <button>-</button>
                    <h1>1</h1>
                    <button>+</button>
                  </S.QttButton>
                </div>
                <S.RightContainer>
                  <S.Price>
                    <h1>{parseFloat(product.price).toFixed(0)}</h1>
                  </S.Price>
                </S.RightContainer>
              </S.Container>
            </motion.div>
          </div>
        ))}
        <S.ButtonContainer>
          <div className="totalCalc">
            <h1>Total:</h1>
            <h1>R${calcularTotal()}</h1>
          </div>
          <button>Finalizar Compra</button>
        </S.ButtonContainer>
      </motion.div>
    </S.CartSidebar>
  );
}

Sidebar.propTypes = {
  closeSidebar: PropTypes.func.isRequired,
  cartItems: PropTypes.array.isRequired,
};

export default Sidebar;
