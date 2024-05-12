'use client';
import Cards from '../components/Cards/index';
import Footer from '../components/Footer/index';
import Header from '../components/Header/index';
import * as S from './styles';

export default function Home() {
  return (
    <S.Container>
      <Header />
      <S.Content>
        <Cards />
      </S.Content>
      <Footer />
    </S.Container>
  );
}
