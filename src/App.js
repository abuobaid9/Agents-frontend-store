import './App.css';
import Home from './component/Home';
import Header from './component/Header';
import { Routes, Route } from "react-router-dom";
import Products from './component/Products';
import Product from './component/ProductDetails'
import Cart from './component/Cart';
import About from './component/About';
import Contact from './component/Contact';
import Footer from './component/Footer';
import SimpleCart from "./component/SimpleCart";
import AddProduct from './component/AddProduct';
import FavList from './component/FavList';
import Register from './component/Register';
import Login from './component/Login';

function App() {
  return (
    <>
   
        <Header />
        <SimpleCart />
        <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/newproduct" element={<AddProduct />} />
          <Route path="/favlist" element={<FavList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      
    </>
  );
}

export default App;
