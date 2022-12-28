import { Box, Grid, Stack, Rating ,Divider, Chip} from "@mui/material"
import Notfound from "../../pages/notFound/notfound"
import Img from "../img/avatar"
import SelectOptions from "../select/select"
import Text from "../text/text"
import { useState, useEffect } from "react"
import "./discount.css"
import RadioGroup from "../radio/radioGroup"
import Btn from "../button/button"
import SelectNumber from "../select/selectNumber/selectNumber"
import { addLocalStorage, deletItemLocalStorage, loadLocalStrorage } from "../../services/getData"
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import corPrincipal from '../../assets/js/script'

const ProdutoPage=({info,somaFav,subtraiFav, somaCart})=>{

    const [cor,setCor]=useState(info.color?info.color[0]:"")
    const [nota,setNota]=useState(4.5)
    const [size,setSize]=useState("")
    const [unidades,setUnidades]=useState(1)
    const [favorite,setFavorite]=useState(false)

    let preco=parseFloat(info.preco).toFixed(2)
    let desconto=parseFloat(info.desconto).toFixed(2)
    let valorDesconto=(preco*(1-desconto)).toFixed(2)


    //selecionar cor
    const eventHandlerCor=(e)=>{
        setCor(e.target.value)
    }


    //selecionar tamanho
    const eventHandlerSize=(e)=>{
        setSize(e.target.value)
    }

    //selecionar nota
    const eventHandlerNota=(e)=>{
        setNota(e.target.value)
    }

    const saveToCart=()=>{
        info['unit']=unidades
        addLocalStorage("cart",info)
        somaCart()
    }
    
    const saveToFavorite=()=>{
        addLocalStorage("favorite",info)
        setFavorite(true)
        somaFav()
    }

    const deleteFavorite=()=>{
        deletItemLocalStorage("favorite",info.id)
        setFavorite(false)
        subtraiFav()
    }

    const verificaFavorito=()=>{   //verificar e marcar os favoritos
        let favoritos=loadLocalStrorage("favorite")
        if(favoritos){
        favoritos.map(favorito=>{
            if(favorito.id===info.id){
                setFavorite(true)
            }
        })
    }
    }

    useEffect(()=>{
        verificaFavorito()  //verificar favorito
    },[])

    const cores=info.color;
    const tamanhos=info.size;



    const imgStyle={
        width:"100%",
    }

    return info?
    <Grid container spacing={2} sx={{alignItems:"center", height:"calc(100vh - 60px)"}}>]
        <Grid item xs={0} md={1} xl={2}></Grid> {/* offset */}
        <Grid item xs={12} md={5} xl={4} sx={{position:"relative"}}>
           <Img img={info.img} style={imgStyle}/>
           {favorite?<Btn title={<FavoriteIcon sx={{color:corPrincipal}}/>} variant={"text"} size={"large"} onClick={deleteFavorite} style={{position:"absolute",margin:0,right:"0px",top:"0px"}}/>:<Btn title={<FavoriteBorderIcon sx={{color:corPrincipal}}/>} onClick={saveToFavorite} variant={"text"} size={"large"}  style={{position:"absolute",margin:0,right:"0px",top:"0px"}}/>}
        </Grid>
        <Grid item xs={12} md={5} xl={4}>
            <Stack
                direction={{ xs: 'column', md: 'row' }}
                divider={<Divider orientation="vertical" flexItem />}
                spacing={{xs:1, md:4}}
                sx={{ 
                    
                // alignSelf: "center",
                // justifyContent: "center",
                
                marginBottom:"40px",
                }}
            >
                
                    <Text text={`${info.nome}`} type={"h1"} style={{ alignSelf: "center",margin:0, fontSize:"2em",textAlign:"center"}}/>
                    
    
                
                    <Stack spacing={1} sx={{ alignSelf: "center"}}>
                     
                        <Rating name="half-rating" value={nota} precision={0.5} onChange={eventHandlerNota}/>
                    </Stack>
            </Stack>
            
            

            {desconto>0?
            <Stack 
            direction={{ xs: 'column'}}
            sx={{ 
            
                alignItems: "center",
                ['@media (min-width:899px)']:{display:"block"},
                ['@media (max-width:899px)']:{textAlign:"center"},
                // justifyContent: "center",
                
                marginBottom:"40px",
            }}>
                <Chip label={info.type.toUpperCase()} variant="outlined" />
                <Text text={info.descricao} type={"p"}/>
                <Text text={`De: R$ ${preco}`} type={"p"} style={{margin:0, padding:0, display:"block",fontSize:"24px",color:"#999",textDecoration:"line-through"}}/>
                <Text text={`Por: R$ ${valorDesconto}`} type={"p"} style={{margin:0, padding:0, display:"block",color:"#FF6900",fontSize:"20px"}}/>
            </Stack>:
            
            <Stack 
            direction={{ xs: 'column', md: 'row' }}
            sx={{ 
                alignItems: "center",
                // justifyContent: "center",
                ['@media (min-width:768px)']:{display:"block"},

                
                marginBottom:"40px"
            }}>
                <Text text={info.descricao} type={"p"}/>
                <Text text={`R$ ${preco}`} type={"p"} style={{margin:0, padding:0, display:"block",fontSize:"24px",color:"#FF6900"}}/></Stack>}

            <Stack
                direction="row"
                spacing={{xs:1, md:4}}
                sx={{ 
                justifyContent: "center",
                marginBottom:"40px",
                ['@media (min-width:899px)']:{justifyContent: "flex-start"}
                }}
            >
                {info.size?<SelectOptions label={"Tamanho"} labelId={"Tamanho"} options={tamanhos} onChange={eventHandlerSize} value={size}  id={"size"}/>:""}
                {info.color?<SelectOptions label={"Cor"} labelId={"Cor"} options={cores} onChange={eventHandlerCor} value={cor}  id={"cor"}/>:""}
                {info.colorRadio?<RadioGroup name={"Cor"} radios={info.colorRadio} value={cor} onChange={eventHandlerCor}/>:""}
            </Stack>

            <Stack
                direction="row"
                spacing={2}
                sx={{ 
                justifyContent: "center",
                marginBottom:"40px",
                ['@media (min-width:899px)']:{justifyContent: "flex-start"}
                }}
            >
                <SelectNumber value={unidades} onChange={(e)=>setUnidades(e.target.value)} set={setUnidades}/>
                <Btn title={"Adicionar ao Carrinho"} size={"large"} style={{ marginTop: "0px", marginLeft:"5px", backgroundColor:corPrincipal }} onClick={saveToCart}/>
            </Stack>
        </Grid>
   
    
    
    </Grid>:<Notfound/>


}

export default ProdutoPage