import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";
import {
  getFirestore,
  getDocs,
  collection,
  query,
  where,
} from "firebase/firestore";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();

    let refCollection;
    if (!id) {
      refCollection = collection(db, "productos");
    } else {
      refCollection = query(
        collection(db, "productos"),
        where("categoryId", "==", id)
      );
    }

    getDocs(refCollection).then((snapshot) => {
      setProducts(
        snapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        })
      );
    });
  }, [id]);

  return (
    <Container className="mt-4">
      <ItemList products={products} />
    </Container>
  );
};
