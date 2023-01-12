
export function ProductsIndex(props) {
  // console.log(props['products'][2].description);

  return (
    <div id = "products-index">
      {props['products'].map(product => (
        <div key={product.id}>
          <h1>Products List</h1>
          <p>name: {product.name}</p>
          <p>price: {product.price}</p>
          <p>description: {product.description}</p>
        </div>
      ))}
    </div>
  );
}
