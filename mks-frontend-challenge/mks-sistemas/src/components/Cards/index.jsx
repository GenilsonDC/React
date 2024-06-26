import axios from 'axios';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { ShimmerSimpleGallery } from 'react-shimmer-effects';

import shopping from '../../assets/shopping.png';
import { useCart } from '../context/CartContext';
import * as S from './styles';

function Card() {
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [cartItems, setCartitems] = useState([]);

  async function fetchProducts() {
    try {
      const response = await axios.get(
        'https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=name&orderBy=ASC',
      );
      setProducts(response.data.products);
      setLoading(false);
    } catch (error) {
      console.error('Erro ao buscar produtos!\n', error);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      fetchProducts();
    }, 1000);
  }, []);

  const handleAddToCart = (product) => {
    setCartitems([...cartItems, product]);
    addToCart(product);
  };

  return (
    <>
      {isLoading ? (
        <ShimmerSimpleGallery card imageHeight={218} caption />
      ) : (
        products.map((product) => (
          <div key={product.id}>
            <motion.div
              className="box"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
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
                <S.BottomCard>
                  <button onClick={() => handleAddToCart(product, cartItems)}>
                    <Image
                      src={shopping}
                      alt="imagem de sacola de compras online"
                    />
                    <h1>Comprar</h1>
                  </button>
                </S.BottomCard>
              </S.Container>
            </motion.div>
          </div>
        ))
      )}
    </>
  );
}

export default Card;
