import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {lazy, Suspense} from 'react';
import './App.css'
import Header from "./pages/header/header"
import Load from './components/load/load';

const Login=lazy(()=>import('./pages/login/login'))
const Catalog=lazy(()=>import('./pages/catalog/catalog'))
const Register=lazy(()=>import('./pages/register/register'))
const Notfound=lazy(()=>import('./pages/notFound/notfound'))
const Favoritos=lazy(()=>import('./pages/favoritos/favoritos'))
const Produto=lazy(()=>import('./pages/produto/pageproduto'))
const Cart=lazy(()=>import('./pages/cart/cart'))
const Checkout=lazy(()=>import('./pages/checkout/checkout'))


function App() {
  return (
   <Router>
    <Suspense fallback={<Load/>}>
    <Header/>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={<Catalog/>}/>
        <Route path="/catalog" element={<Catalog/>}/>
        <Route path="/produto/:id" element={<Produto/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/favoritos" element={<Favoritos/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="*" element={<Notfound/>}/>
        
      </Routes>
    </Suspense>
   </Router>
  );
}

export default App;
