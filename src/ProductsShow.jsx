export function ProductsShow(props) {
  console.log(props);
  return (
    <div>
      <p><strong>Name</strong>{props.product.name}</p>
      <p><strong>price: </strong>{props.product.price}</p>
      <p><strong>description: </strong>{props.product.description}</p>
      <p><strong>image_url: </strong>{props.product.image_url}</p>
    </div>
  )
}