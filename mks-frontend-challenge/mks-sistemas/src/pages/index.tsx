import axios from "axios";
import { useEffect, useState } from "react";

interface Product {
    id: number;
    name: string;
    description: string;
    brand: string;
    price: string;
    photo: string;
    createdAt: string;
    updatedAt: string;
}

function Home() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        axios.get('https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC')
            .then(response =>setProducts(response.data.products	))
            .catch(error => {
                console.error('⚠️ Não foi possivel carregar os dados:', error);
            });
    }, []);

    return (
        <div>
            {products.map(product => (
                <div key={product.id}>
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <p>{product.brand}</p>
                    <p>{product.price}</p>
                    <img src={product.photo} alt={product.name} />
                </div>
            ))}
        </div>
    );
}

export default Home;
