import { createContext, useState } from "react";

export const CartContext = createContext();

export const Provider = ({ children }) => {
  const [items, setItems] = useState([]);

  const clear = () => setItems([]);

  const removeItem = (id) => {
    const filtered = items.filter((item) => item.id !== id);
    setItems(filtered);
  };

  const addItem = (item, count) => {
    const isExists = items.some((i) => i.id === item.id);

    if (isExists) {
      const updateItems = items.map((i) => {
        if ((i.id = item.id)) {
          return {
            ...i,
            count: i.count + count,
          };
        } else {
          return i;
        }
      });
      setItems(updateItems);
    } else {
      setItems([...items, { ...item, count }]);
    }
  };

  return (
    <CartContext.Provider value={{ addItem, clear, items, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};
