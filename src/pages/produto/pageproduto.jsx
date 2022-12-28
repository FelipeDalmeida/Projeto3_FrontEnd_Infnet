import Text from "../../components/text/text"
import { useParams } from "react-router-dom"
import { get } from "../../services/getData"
import { useEffect,useState } from "react"
import ProdutoPage from "../../components/produtos/produtosPagina"
import Notfound from "../notFound/notfound"
import PlaceholderProdutos from "../../components/placeholders/placeholderProduto"

const Produto=({somaFav,subtraiFav,somaCart})=>{
    const params=useParams()
    const id=params.id;

    const [produtoInfo,setrProdutoInfo]=useState(<PlaceholderProdutos/>);

    const selecionaProduto=(produtos)=>{
        let info=null
        produtos.map(produto=>{
            if(produto.id===id){
                info= produto
            } 
        })
        return info
    }


    const loadData=async()=>{

        // const response = await get(`https://demo7797720.mockable.io/produto/${id}`).catch((error)=>{if(error.response){return null}}); //Para utilizar com mock de cada página

        const response = await get(`https://demo7797720.mockable.io/projetofrontend3`).catch((error)=>{if(error.response){return null}}); //Pela doc do axios: catch irá verificar se teve erro, caso tenha, resonse será null
        const produtos = response.data;
        let info=selecionaProduto(produtos)
        
        setrProdutoInfo(response?<ProdutoPage info={info} somaFav={somaFav} subtraiFav={subtraiFav} somaCart={somaCart}/>:<Notfound/>)
    }



    useEffect(()=>{loadData()},[])

    // return produtoInfo ?
    // <ProdutoPage info={produtoInfo}/>:
    // <Notfound/>
    return <>{produtoInfo}</>
    //return <>{<PlaceholderProdutos/>}</>


}

export default Produto