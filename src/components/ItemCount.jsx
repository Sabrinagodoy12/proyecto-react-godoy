import { useState } from "react";

export const ItemCount = ({ onAdd, stock }) => {
  const [count, setCount] = useState(1);
  const handleDecrease = () => {
    if (count > 1) setCount((prev) => prev - 1);
  };
  const handleIncrease = () => {
    if (stock > count) setCount((prev) => prev + 1);
  };
  const handleAdd = () => {
    onAdd(count);
    setCount(1);
  };

  return (
    <div className="d-flex">
      <div className="count-" onClick={handleDecrease}>
        -
      </div>
      <input type="number" className="type-count" value={count} readOnly />
      <div className="count-mas" onClick={handleIncrease}>
        +
      </div>
      <button type="button" onClick={handleAdd}>
        Agregar al carrito
      </button>
    </div>
  );
};
