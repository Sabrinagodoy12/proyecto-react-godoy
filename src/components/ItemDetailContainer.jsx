import { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";
import data from "../data/products.json";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const get = new Promise((resolve, reject) => {
      setTimeout(() => resolve(data), 2000);
    });
    get.then((data) => {
      const filter = data.find((producto) => producto.id === Number(id));
      setProduct(filter);
    });
  }, [id]);

  if (!product) return <div>Cargando</div>;

  return (
    <Container className="mt-4">
      <h1>{product.name}</h1>
      <img src={product.img} alt="a" />
    </Container>
  );
};
