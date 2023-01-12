
export function ProductsIndex(props) {
  // console.log(props['products'][2].description);

  return (
    <div id = "products-index">
      <h1>Products List</h1>
      <hr />
      {props['products'].map(product => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>Price: {product.price}</p>
          <p>Description: {product.description}</p>
          <button onClick ={() => props.onSelectPost(product)}>View More</button>
          <hr />
        </div>
      ))}
    </div>
  );
}
