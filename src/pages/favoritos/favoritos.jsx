import { loadLocalStrorage,deletItemLocalStorage,atualizaUnidadesLocalStorage} from "../../services/getData"
import { useEffect,useState } from "react"
import Text from "../../components/text/text";
import Btn from "../../components/button/button";
import {Grid} from "@mui/material";
import Img from "../../components/img/avatar";
import DeleteIcon from '@mui/icons-material/Delete';
import NoFavoritos from "../../components/noproducts/noFavoritos";
import corPrincipal from '../../assets/js/script'
import {useNavigate } from "react-router";

const Favoritos=()=>{
    const [Favoritos,setFavoritos]=useState([])

    const navigate=useNavigate();
    const goToPage=(id)=>{navigate(`/produto/${id}`)}

    useEffect(() => {

        setFavoritos(loadLocalStrorage("favorite"))   //carregar Favoritos salvos no carrinho

      }, []);



    const deletaItem=(item)=>{setFavoritos(deletItemLocalStorage("favorite",item))}

    const removeAll=()=>{
      Favoritos.map(produto=>{deletItemLocalStorage("favorite",produto.id)})
      setFavoritos("")
    }

    const calculaValor=(price,discount)=>{
      price=parseFloat(price).toFixed(2)
      discount=parseFloat(discount).toFixed(2)

      price=price*(1-discount);

      return price.toFixed(2)
    }
    

    return <>{Favoritos.length>0?
    <Grid container spacing={2}>
        <Grid item xs={0}  lg={2}/>
        <Grid item xs={12}  lg={8} sx={{marginTop:"16px",paddingLeft:"20px !important",paddingRight:"5px",boxSizing:"border-box"}}>
            <Btn title={"Remover todos os Itens"} startIcon={<DeleteIcon/>} style={{backgroundColor:corPrincipal,float:"right",margin:"10px 0"}} onClick={removeAll}/>
            {Favoritos.map((favorito)=>(
                <Grid container spacing={2} sx={{position:"relative",border:"1px solid #ddd",margin:0,borderRadius:"3px",width:"100%"}}>
                    <Grid item xs={6} md={3}  sx={{padding:0}}><Img img={favorito.img} style={{width:"100%"}}/></Grid>
                    <Grid item xs={6} md={3}  sx={{alignSelf: "center", textAlign: "center"}}><Text text={favorito.nome}/></Grid>
                    <Grid item xs={6} md={3}  sx={{alignSelf: "center"}}><Text text={"Preço:"}/>
                        {favorito.desconto>0?<>
                        <Text text={`De: R$ ${favorito.preco}`} type={"p"} style={{margin:0, padding:0, display:"block",fontSize:"20px",color:"#999",textDecoration:"line-through"}}/>
                        <Text text={`Por: R$ ${(calculaValor(favorito.preco,favorito.desconto))}`} type={"p"} style={{margin:0, padding:0, display:"block",color:"#FF6900",fontSize:"20px"}}/></>
                    :<Text text={`R$ ${favorito.preco}`} type={"p"} style={{margin:0, padding:0, display:"block",fontSize:"24px",color:"#FF6900"}}/>}
                    </Grid>
                    <Grid item xs={6} md={3}  sx={{textAlignLast: "center",alignSelf: "center"}}><Btn title={"Ver favorito"} onClick={()=>goToPage(favorito.id)} style={{backgroundColor:corPrincipal}}/></Grid>
                    <Btn title={<DeleteIcon/>} variant={"text"} size={"large"} onClick={()=>deletaItem(favorito.id) } style={{position:"absolute",margin:0,right:"0px",top:"0px"}}/>
                </Grid>
            ))}
        </Grid>
    </Grid>
    :<NoFavoritos/>}
  </>

}


export default Favoritos