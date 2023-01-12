import reactLogo from './assets/react.svg';
import './App.css';
import { Content } from './Content';

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

export function ProductsNew() {
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

function Footer() {
  return (
    <div>
      <p>Copyright @2022</p>
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

export function ProductsIndex(props) {
  console.log(props['products'][2].description);

  return (
    <div id = "products-index">
      {props['products'].map(products => (
        <div key={products.id}>
          <h1>Products List</h1>
          <p>name: {products.name}</p>
          <p>price: {products.price}</p>
          <p>description: {products.description}</p>
        </div>
      ))}
    </div>
  );
}


export default App;
