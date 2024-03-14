import cart from "../assets/cart.png";

export const CartWidget = () => {
  return (
    <div id="cart-widget">
      <img src={cart} alt="imagen de carrito de compras" width={40} />
      <span>10</span>
    </div>
  );
};
