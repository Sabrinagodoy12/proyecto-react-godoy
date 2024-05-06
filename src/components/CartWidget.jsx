import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import cart from "../assets/cart.png";

export const CartWidget = () => {
  const { items } = useContext(CartContext);

  const total = items.reduce((acc, elem) => acc + elem.count, 0);
  return (
    <Link to="/cart" id="cart-widget">
      <img src={cart} alt="icono de carrito de compras" width={40} />
      <span> {total}</span>
    </Link>
  );
};
