import Container from "react-bootstrap/Container";
import { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";

const initialValues = {
  name: "",
  phone: "",
  email: "",
};

export const Cart = () => {
  const [values, setValues] = useState(initialValues);
  const { items } = useContext(CartContext);

  const total = () =>
    items.reduce((acc, item) => acc + item.count * item.price, 0);
  const handleChange = (ev) => {
    setValues((prev) => {
      return {
        ...prev,
        [ev.target.name]: ev.target.value,
      };
    });
  };

  return (
    <Container className="mt-4">
      <h1>Productos</h1>
      {items.map((i) => {
        return (
          <ul key={i.title} className="lista-cart">
            <li>Prod: {i.title}</li>
            <li>Cant: {i.count}</li>
            <li>$ {i.price}</li>
            {/* <li onClick={handleRemove}>X</li> */}
          </ul>
        );
      })}
      <div className="total-cart"> Total: {total()}</div>
      {
        <form>
          <label>Nombre</label>
          <input
            type="text"
            value={values.name}
            name="name"
            onChange={handleChange}
          />
          <label>Celular</label>
          <input
            type="text"
            value={values.phone}
            name="phone"
            onChange={handleChange}
          />
          <label>Email</label>
          <input
            type="email"
            value={values.email}
            name="email"
            onChange={handleChange}
          />
        </form>
      }
    </Container>
  );
};
