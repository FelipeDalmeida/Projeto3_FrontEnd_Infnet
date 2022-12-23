import { useEffect, useState } from "react"
import { get } from "../../services/getData"
import { Box, Grid } from "@mui/material"
import Produtos from "../../components/produtos/produtos"
import PlaceholderCatalog from "../../components/placeholders/placeholderCatalog"
import Notfound from "../notFound/notfound"

//TODO: selecionar por tipo de produto
const Catalog=()=>{

    const [produtos,setProdutos]=useState(<PlaceholderCatalog/>);
    const loadData=async()=>{
        const response=await get("http://demo7797720.mockable.io/projetofrontend3").catch((error)=>{if(error.response){return null}}); //Pela doc do axios: catch irá verificar se teve erro, caso tenha, resonse será null

        setProdutos(response?<Produtos produtos={response.data}/>:<Notfound/>)  //Produtos serão carregados apenas quando tiver resposta do get, evita ficar aparecendo a página 404 e depois carregando os produtos. 
        
    }
    

    useEffect(()=>{loadData()},[]);
    // console.log(catalog);

    return <>{produtos}</>
    // return <Produtos produtos={catalog}/>
    

}


export default Catalog