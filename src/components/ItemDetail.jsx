import Container from "react-bootstrap/Container";

export const ItemDetail = ({product}) => {
  return (
    <Container className="mt-4">
      <h1 class="producto-titulo">{product.title}</h1>
      <img src={product.imageId} class="producto-imagen" alt={product.title} />
      <p class="producto-descripcion">{product.description}</p>
      <div class="producto-detalle">{`stock ${product.stock}`}</div>
      <div class="producto-detalle"> {`Precio ${product.price}`}</div>
    </Container>
  );
};
