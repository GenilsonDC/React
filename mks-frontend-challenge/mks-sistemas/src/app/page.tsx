'use client';
import Cards from '../components/Cards/index';
import Footer from '../components/Footer/index';
import Header from '../components/Header/index';
import Sidebar from '../components/SideBar';
import { CartProvider } from '../components/context/CartContext';
import * as S from './styles';

export default function Home() {
  return (
    <>
      <CartProvider>
        <S.Container>
          <Header />
          <Sidebar />
          <S.Content>
            <Cards />
          </S.Content>
          <Footer />
        </S.Container>
      </CartProvider>
    </>
  );
}
