import { useState } from 'react';
import { ProductsNew } from './App';
import { ProductsIndex } from "./ProductsIndex";

export function Content() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Phone",
      description: "Gadget used to power your life",
      price: "$200",
      image_url: "..."
    },
    {
      id: 2,
      name: "Car",
      description: "Motor vehicle",
      price: "$24000",
      image_url: "..."
    },
    {
      id: 3,
      name: "Knife",
      description: "Cut stuff up",
      price: "$20",
      image_url: "..."
    },
  ]);

  return (
    <div>
      <ProductsNew />
      <ProductsIndex products={products} />
    </div>
  );
}
// const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);

// const handleShowPost = () => {
//   setIsPostsShowVisible(true);
// };

// const handleHidePost = () => {
//   setIsPostsShowVisible(false);
// };