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
        console.error('Error fetching products:', error);
      });
  }, []);



  return (
    <S.Container >
      <div className="all">
        {
          products.map(product => (
            <div key={product.id}>
              <S.ImagemContainer>
                <S.Imagem><img src={product.photo} alt={product.name} /></S.Imagem>
              </S.ImagemContainer>

              <S.MidleCard>
                <S.Name><h1>{product.name}</h1></S.Name>
                <S.Price><h1>{product.price}</h1></S.Price>
              </S.MidleCard>
              <S.Description><h1>{product.description}</h1></S.Description>

              <S.BottomCard>
                <img src={shopping} alt="imagem de sacola" />
                <h1>Comprar</h1>
              </S.BottomCard>
            </div>
          ))
        }
      </div>
    </S.Container>

  );
}

export default Card;
