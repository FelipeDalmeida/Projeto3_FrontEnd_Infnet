import {Link } from 'react-router-dom';
import { useEffect, useState} from 'react';
import Nav from '../../components/nav/nav';
import './header.css'
import '../../assets/css/grid.css';
import Btn from '../../components/button/button'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import FavoriteIcon from '@mui/icons-material/Favorite';
import MenuIcon from '@mui/icons-material/Menu';
import { Badge } from '@mui/material';


const Header=({favorite,cart})=>{
    const [click,setClick]=useState(false)


    const manipulaMenuMobile=()=>{
        setClick(!click);
    
    }

    const fechaMenuMobile=()=>{
        setClick(false);
    }


   
    const styleMobile={
        display: click?"block":"none",
    }
    const navMobile={
        position: "absolute",
        top: "0",
        left: "0",
        height: "100vh",
        width: "100%",
        zIndex: "998",
    }

    const lis=[<Link to="/Login">Login</Link>,<Link to="/Register">Registro</Link>,<Link to="/Catalog">Catalogo</Link>]
    // const lis=[<Link to="/">Home</Link>]

    const lisPerfil=[<Link to="/favoritos"><Badge badgeContent={favorite} color="success"><FavoriteIcon/></Badge></Link>,
                    <Link to="/cart"><Badge badgeContent={cart} color="success"><ShoppingCartIcon/></Badge></Link>,]
    return <header className='header-main'>
            
            <Btn className={'menu-mobile'} onClick={manipulaMenuMobile} title={<MenuIcon style={{transform:"scale(1.2)"}}/>} size={"small"} />
            <Nav style={click?navMobile:""} onClick={fechaMenuMobile} lis={lis} styleUl={styleMobile} classNameUl={"ul-header ul-desktop"}/>
            <Nav lis={lisPerfil} classNameUl={"ul-header social-media"}/>
        
    </header>
}

export default Header