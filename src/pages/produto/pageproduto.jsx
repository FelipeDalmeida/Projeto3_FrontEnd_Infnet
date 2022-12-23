import Text from "../../components/text/text"
import { useParams } from "react-router-dom"
import { get } from "../../services/getData"
import { useEffect,useState } from "react"
import ProdutoPage from "../../components/produtos/produtosPagina"
import Notfound from "../notFound/notfound"
import PlaceholderProdutos from "../../components/placeholders/placeholderProduto"

const Produto=()=>{
    const params=useParams()
    const id=params.id;

    const [produtoInfo,setrProdutoInfo]=useState(<PlaceholderProdutos/>); //TODO Placeholder

    const loadData=async()=>{
        console.log("/////////////////////")
        const response = await get(`http://demo7797720.mockable.io/produto/${id}`).catch((error)=>{if(error.response){return null}}); //Pela doc do axios: catch irá verificar se teve erro, caso tenha, resonse será null
        // setrProdutoInfo(response.data)
        console.log(response)
        setrProdutoInfo(response?<ProdutoPage info={response.data}/>:<Notfound/>)
    }

    useEffect(()=>{loadData()},[])

    // return produtoInfo ?
    // <ProdutoPage info={produtoInfo}/>:
    // <Notfound/>
    return <>{produtoInfo}</>
    //return <>{<PlaceholderProdutos/>}</>


}

export default Produto