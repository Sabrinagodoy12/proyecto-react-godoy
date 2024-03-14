import Container from "react-bootstrap/Container";

export const ItemListContainer = ({ greeting }) => (
  <Container id="container-item">
    <h1>{greeting}</h1>
  </Container>
);
