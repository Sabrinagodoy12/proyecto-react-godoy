import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const Item = ({product}) => (
  <Card style={{ width: "18rem" }}>
    <Card.Img variant="top" src={product.img} />
    <Card.Body>
      <Card.Title>{product.name}</Card.Title>
      <Card.Text>  {product.detail}</Card.Text>
      <Card.Text>  {product.category}</Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
);
