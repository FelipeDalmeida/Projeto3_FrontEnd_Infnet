import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {lazy, Suspense, useState, useEffect} from 'react';
import './App.css'
import Header from "./pages/header/header"
import Load from './components/load/load';
import { loadLocalStrorage } from './services/getData';


const Login=lazy(()=>import('./pages/login/login'))
const Catalog=lazy(()=>import('./pages/catalog/catalog'))
const Register=lazy(()=>import('./pages/register/register'))
const Notfound=lazy(()=>import('./pages/notFound/notfound'))
const Favoritos=lazy(()=>import('./pages/favoritos/favoritos'))
const Produto=lazy(()=>import('./pages/produto/pageproduto'))
const Cart=lazy(()=>import('./pages/cart/cart'))
const Checkout=lazy(()=>import('./pages/checkout/checkout'))
const CompraRealizada=lazy(()=>import('./pages/comprarealizada/compraRealizada'))


function App() {

  const [favoriteNumber,setFavoriteNumber]=useState(0)
  const [cartNumber,setCartNumber]=useState(0)

  const carregaNumeroFavoritos=()=>{
    setFavoriteNumber(loadLocalStrorage("favorite")?loadLocalStrorage("favorite").length:0)
    setCartNumber(loadLocalStrorage("cart")?loadLocalStrorage("cart").length:0)
  }
  const carregaNumeroCart=()=>{
    setCartNumber(loadLocalStrorage("cart")?loadLocalStrorage("cart").length:0)
  }
  useEffect(()=>{carregaNumeroFavoritos()},[favoriteNumber])
  useEffect(()=>{carregaNumeroCart()},[cartNumber])

  const somaFav=()=>{
    // console.log("somando")
    setFavoriteNumber(favoriteNumber+1)
  }
  const subtraiFav=()=>{
    // console.log("subtraindo")
    setFavoriteNumber(favoriteNumber-1)
  }
  const somaCart=()=>{
    setCartNumber(cartNumber+1)
  }
  const subtraiCart=()=>{
    setCartNumber(cartNumber-1)
  }



  return (
   <Router>
    <Suspense fallback={<Load/>}>
    <Header favorite={favoriteNumber} cart={cartNumber}/>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={<Catalog somaFav={somaFav} subtraiFav={subtraiFav} somaCart={somaCart}/>}/>
        <Route path="/catalog" element={<Catalog somaFav={somaFav} subtraiFav={subtraiFav} somaCart={somaCart}/>}/>
        <Route path="/produto/:id" element={<Produto somaFav={somaFav} subtraiFav={subtraiFav} somaCart={somaCart}/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/favoritos" element={<Favoritos subtraiFav={subtraiFav}/>}/>
        <Route path="/cart" element={<Cart subtraiCart={subtraiCart}/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/compra_realizada" element={<CompraRealizada/>}/>
        <Route path="*" element={<Notfound/>}/>
        
      </Routes>
    </Suspense>
   </Router>
  );
}

export default App;
