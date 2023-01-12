import { useState } from 'react';
import { ProductsNew } from './App';
import { ProductsIndex } from "./ProductsIndex";
import { ProductsShow } from "./ProductsShow";
import { Modal } from "./Modal";

export function Content() {
  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);
  const handleShowPost = (products) => {
    console.log(products);
    setCurrentProduct(products);
    console.log('running the program');
    setIsPostsShowVisible(true);
  };

  const handleHidePost = () => {
    setIsPostsShowVisible(false);
  };
  const [currentProduct, setCurrentProduct] = useState({})

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
      <ProductsIndex products={products} onSelectPost={handleShowPost}/>
      <Modal show={isPostsShowVisible} onClose ={handleHidePost}>
        <p>TEST</p>
        <ProductsShow product={currentProduct} />
      </Modal>
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