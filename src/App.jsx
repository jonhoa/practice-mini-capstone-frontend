import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function Header() {}

function ProductsNew() {}

function ProductsIndex() {}

function Footer() {}

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
