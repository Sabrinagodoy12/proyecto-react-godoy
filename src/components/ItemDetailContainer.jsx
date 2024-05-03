import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import data from "../data/products.json";
import { useParams } from "react-router-dom";
import { getFirestore, getDoc, doc } from "firebase/firestore";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();

    const refDoc = doc(db, "productos", id);

    getDoc(refDoc).then((snapshot) => {
      setProduct({ id: snapshot.id, ...snapshot.data() });
    });
  }, [id]);

  return (
    <Container className="mt-4">
      <h1>{product.title}</h1>
      <img src={product.imageId} alt={product.title} />
      <p>{product.description}</p>
      <div>{`stock ${product.stock}`}</div>
      <div>{`Precio ${product.price}`}</div>
    </Container>
  );
};

// useEffect(() => {
//   const get = new Promise((resolve, reject) => {
//     setTimeout(() => resolve(data), 2000);
//   });
//   get.then((data) => {
//     const filter = data.find((producto) => producto.id === Number(id));
//     setProduct(filter);
//   });
// }, [id]);
// if (!product) return <div>Cargando</div>;

// return (
//   <Container className="mt-4">
//     <h1>{product.name}</h1>
//     <img src={product.img} alt="a" />
//   </Container>
// );
// };
