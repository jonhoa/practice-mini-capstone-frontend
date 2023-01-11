import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function Header() {
  return(
    <div>
      <ul>
        <a href="">Home |</a>
        <a href=""> Products |</a>
        <a href=""> About |</a>
        <a href=""> Contact |</a>
      </ul>
    </div>
  )
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
  )
}

function ProductsIndex() {
 return (
  <div>
    <h1>Products List</h1>
    <p>Displays all products here</p>
    <hr/>
  </div>
 )
}

function Footer() {
  return (
    <div>
      <p>Copyright @2022</p>
    </div>
  )
}

function Content() {
  return (
    <div>
      <ProductsNew />
      <ProductsIndex />
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
