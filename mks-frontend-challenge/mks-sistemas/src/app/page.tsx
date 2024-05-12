'use client';
import Cards from '../components/Cards/index';
import Footer from '../components/Footer/index';
import Header from '../components/Header/index';
import { CartProvider } from '../components/context/CartContext';
import * as S from './styles';

export default function Home() {
  return (
    <>
      <CartProvider>
        <S.Container>
          <Header />
          <S.Content>
            <Cards />
          </S.Content>
          <Footer />
        </S.Container>
      </CartProvider>
    </>
  );
}
