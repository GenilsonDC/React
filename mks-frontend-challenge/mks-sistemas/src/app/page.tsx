import Cards from "../components/Cards";
import Footer from "../components/Footer";
import Header from "../components/Header";
import * as S from "./styles.js";
export default function Home() {

  return (
    <S.Container>
      <Header/>
      <S.Content>
          <Cards/>
      </S.Content>
      <Footer/>
    </S.Container>
  );
}
