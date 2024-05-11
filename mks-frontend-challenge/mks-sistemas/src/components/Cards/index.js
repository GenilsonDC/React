'use client';
import axios from "axios";
import { useEffect, useState } from "react";
import shopping from "../../assets/shopping.png";
import * as S from "./styles";


function Card() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC')
      .then(response => setProducts(response.data.products))
      .catch(error => {
        console.error('Erro ao buscar produtos!\n', error);
      });
  }, []);



  return (

    products.map(product => (
      <div key={product.id}>
        <S.Container >
          <S.topContainer>
            <S.Imagem><img src={product.photo} alt={product.name} /></S.Imagem>
          </S.topContainer>

          <S.MidleCard>
            <S.Name><h1>{product.name}</h1></S.Name>
            <S.Price><h1>{product.price}</h1></S.Price>
          </S.MidleCard>
          <S.Description><h1>{product.description}</h1></S.Description>

          <S.BottomCard>
            <button><img src={shopping} alt="imagem de sacola" /><h1>Comprar</h1></button>
          </S.BottomCard>
        </S.Container>
      </div>

    ))



  );
}

export default Card;
