import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import Btn from "../button/button";
import Img from "../img/avatar";
import Text from "../text/text";
import "./discount.css"
import corPrincipal from '../../assets/js/script'
import {useNavigate } from "react-router";
import { addLocalStorage, deletItemLocalStorage, loadLocalStrorage } from "../../services/getData"
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';



const Produto=({produto,somaFav,subtraiFav,somaCart})=>{
    

    let {id,nome,img,descricao,preco,desconto,type}=produto
    

    const navigate=useNavigate();
    const goToPage=()=>{navigate(`/produto/${id}`)}
    const goToCart=()=>{navigate("/cart/")}

    preco=parseFloat(preco).toFixed(2)
    desconto=parseFloat(desconto).toFixed(2)
    let valorDesconto=(preco*(1-desconto)).toFixed(2)

    const [mouseover,setMouseover]=useState(false)
    const [favorite,setFavorite]=useState(false)

    const displayBtn=()=>{
        setMouseover(true);
    }
    const hideBtn=()=>{
        setMouseover(false);
    }

    const saveToCart=()=>{
        produto['unit']=1
        addLocalStorage("cart",produto)
        somaCart()
    }

    const saveToFavorite=()=>{
        addLocalStorage("favorite",produto)
        setFavorite(true)
        somaFav()
    }

    const deleteFavorite=()=>{
        deletItemLocalStorage("favorite",produto.id)
        setFavorite(false)
        subtraiFav()
    }

    const verificaFavorito=()=>{   //verificar e marcar os favoritos
        let favoritos=loadLocalStrorage("favorite")
        if(favoritos){
        favoritos.map(favorito=>{
            if(favorito.id===produto.id){
                setFavorite(true)
            }
        })
    }
    }

    const btnClick=()=>{
        saveToCart();
        goToCart();
    }

    useEffect(()=>{
        verificaFavorito()
    },[])

    return <Box 
            sx={{position:"relative",
                boxSizing:"border-box",
                transform:mouseover?"scaleX(1.02)":"scaleX(1)",
                transform:mouseover?"scaleY(1.02)":"scaleY(1)",
                boxShadow:mouseover? "0px 4px 30px rgb(0 0 0 / 15%)":"none",
                margin:"10px"
            }}
              onMouseOver={displayBtn} onMouseLeave={hideBtn}>
            <div onClick={goToPage} style={{cursor: "pointer"}}>
                <div>
                    <Img img={img} style={{width:"100%"}}/>
                </div>
                <Text text={nome} type={"h3"} style={{marginLeft:"20px",display:"block"}}/>
                <Text text={descricao} type={"p"}  style={{marginLeft:"20px",display:"block",fontWeight:"300",fontSize:"14px"}}/>

                {desconto>0?
                <div >
                    <Text text={`De: R$ ${preco}`} type={"p"} style={{marginLeft:"20px",display:"block",fontSize:"18px",color:"#999",textDecoration:"line-through"}}/>
                    <Text text={`Por: R$ ${valorDesconto}`} type={"p"} style={{marginLeft:"20px",display:"block",color:"#FF6900"}}/>
                    <span className="flag-discount" style={{position:"absolute",top: "50px", right: "40px"}}>{`${desconto*100}% OFF`}</span>
                </div>:
                
                <div><Text text={`R$ ${preco}`} type={"p"} style={{marginLeft:"20px",display:"block",fontSize:"18px",color:"#FF6900"}}/></div>}
            </div>
            <div style={{textAlign: "center",display:mouseover?"block":"none", transition: "all 2s linear"}}><Btn title={"Comprar"} fullWidth={false} onClick={btnClick} style={{width:"80%", backgroundColor:corPrincipal, marginBottom: "15px"}} size={"large"}/></div>
            {mouseover?favorite?<Btn title={<FavoriteIcon sx={{color:corPrincipal}}/>} variant={"text"} size={"large"} onClick={deleteFavorite} style={{position:"absolute",margin:0,right:"0px",top:"0px"}}/>:<Btn title={<FavoriteBorderIcon sx={{color:corPrincipal}}/>} onClick={saveToFavorite} variant={"text"} size={"large"}  style={{position:"absolute",margin:0,right:"0px",top:"0px"}}/>:""}

            
        </Box>
        
}


export default Produto