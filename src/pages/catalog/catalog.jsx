import { useEffect, useState } from "react"
import { get } from "../../services/getData"
import { Box, Grid } from "@mui/material"
import Produtos from "../../components/produtos/produtos"
import PlaceholderCatalog from "../../components/placeholders/placeholderCatalog"
import Notfound from "../notFound/notfound"


const Catalog=({somaFav,subtraiFav,somaCart})=>{

    const [produtos,setProdutos]=useState(<PlaceholderCatalog/>);
    const loadData=async()=>{
        const response=await get("https://demo7797720.mockable.io/projetofrontend3").catch((error)=>{if(error.response){return null}}); //Pela doc do axios: catch irá verificar se teve erro, caso tenha, resonse será null

        setProdutos(response?<Produtos produtos={response.data} somaCart={somaCart} somaFav={somaFav} subtraiFav={subtraiFav}/>:<Notfound/>)  //Produtos serão carregados apenas quando tiver resposta do get, evita ficar aparecendo a página 404 e depois carregando os produtos. 
        
    }
    

    useEffect(()=>{loadData()},[]);
  

    return <>{produtos}</>
  
    

}


export default Catalog