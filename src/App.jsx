import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function Header() {
  return (
    <div>
      <ul>
        <a href="">Home |</a>
        <a href=""> Products |</a>
        <a href=""> About |</a>
        <a href=""> Contact |</a>
      </ul>
    </div>
  );
}

function ProductsNew() {
  return (
    <div align="left">
      <hr/>
      <h1 align="left">Create New Product</h1>
      Name: <input type="input" name="name"></input><br></br>
      Description: <input type="input" name ="description"></input><br></br>
      Price: <input type="input" name ="price"></input><br></br>
      Image Url: <input type="input" name ="image_url"></input>
      <hr />
    </div>
  );
}

function ProductsIndex(props) {
  console.log(props['products'][2].description);

  return (
      {props['products'].map(products =>(
        <div key ={products.id}>
          <h1>Products List</h1>
          <p>name: {products.name}</p>
          <p>price: {products.price}</p>
          <p>description: {products.description}</p>
          </div>
      ))}
      <hr/>
  );
}

function Footer() {
  return (
    <div>
      <p>Copyright @2022</p>
    </div>
  );
}

function Content() {
  const [products, setProducts] = useState( [
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
      <ProductsIndex />
      <ProductsIndex products={products} />
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
