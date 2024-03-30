export const ItemList = () => {
  return (
    <>
      {products.map((product) => (
        <h2>{product.name}</h2>
      ))}
    </>
  );
};
