import { loadLocalStrorage,deletItemLocalStorage,atualizaUnidadesLocalStorage} from "../../services/getData"
import { useEffect,useState } from "react"
import Text from "../../components/text/text";
import Btn from "../../components/button/button";
import SelectNumber from "../../components/select/selectNumber/selectNumber";
import { Box, Grid} from "@mui/material";
import Img from "../../components/img/avatar";
import DeleteIcon from '@mui/icons-material/Delete';
import NoProducts from "../../components/noproducts/noProducts";
import corPrincipal from '../../assets/js/script'
import {useNavigate } from "react-router";

const Cart=()=>{
    const [Produtos,setProdutos]=useState([])

    const navigate=useNavigate();
    const goToPage=(page)=>{navigate(`/${page}`)}

    useEffect(() => {

        setProdutos(loadLocalStrorage("cart"))   //carregar produtos salvos no carrinho

      }, []);



    const deletaItem=(item)=>{setProdutos(deletItemLocalStorage("cart",item))}

    const changeValue=(e,index)=>{
        let newArray=[...Produtos]
        newArray[index].unit=e.target.value
        setProdutos(newArray)    
    }

    const setAdiciona=(value,index,info)=>{  //utilizado para adicionar uma unidade ao produto especifico
        let newArray=[...Produtos]
        newArray[index].unit=value+1
        setProdutos(newArray)
        info['unit']=value+1
        atualizaUnidadesLocalStorage("cart",info)
    }

    const setSubtrai=(value,index,info)=>{ //utilizado para subtrair uma unidade ao produto especifico
        let newArray=[...Produtos]
        newArray[index].unit=value-1
        setProdutos(newArray)
        info['unit']=value-1
        atualizaUnidadesLocalStorage("cart",info)
    }

    const removeAll=()=>{
      Produtos.map(produto=>{deletItemLocalStorage("cart",produto.id)})
      setProdutos("")
      
      
    }

    const calculaValor=(price,discount,unit)=>{
      price=parseFloat(price).toFixed(2)
      discount=parseFloat(discount).toFixed(2)

      price=price*(1-discount);

      return (price*unit)
    }
    
    const valorTotal=()=>{
      let total=Produtos.reduce((somaParcial,produto)=> somaParcial+(parseFloat(produto.preco)*produto.unit),0)
      return total.toFixed(2)
    }

    const valorComDesconto=()=>{
      let total=Produtos.reduce((somaParcial,produto)=> somaParcial+calculaValor(produto.preco,produto.desconto,produto.unit),0)
      return total.toFixed(2)
    }

    return <>{Produtos.length>0?
    <Grid container spacing={2}>
      <Grid item xs={12} md={9} sx={{marginTop:"16px",paddingLeft:"20px !important",paddingRight:"5px",boxSizing:"border-box"}}>
        <Btn title={"Remover todos os Itens"} startIcon={<DeleteIcon/>} style={{backgroundColor:corPrincipal,float:"right",margin:"10px 0"}} onClick={removeAll}/>
        {Produtos.map((produto,index)=>(
          <Grid container spacing={2} sx={{position:"relative",border:"1px solid #ddd",margin:0,borderRadius:"3px",width:"100%"}}>
            <Grid item xs={6} md={3} sx={{padding:0}}><Img img={produto.img} style={{width:"100%"}}/></Grid>
            <Grid item xs={6} md={3} sx={{alignSelf: "center"}}><Text text={produto.nome}/></Grid>
            <Grid item xs={6} md={3} sx={{display: "flex", justifyContent: "center",alignItems: "center"}}>              
              <Box><SelectNumber id={produto.id} value={produto.unit} subtraction={()=>setSubtrai(produto.unit,index,produto)} plus={()=>setAdiciona(produto.unit,index,produto)} onChange={(e)=>changeValue(e,index)}/></Box>   
            </Grid>
            <Grid item xs={6} md={3} sx={{alignSelf: "center"}}><Text text={"Subtotal do produto:"}/><Text text={`R$ ${(calculaValor(produto.preco,produto.desconto,produto.unit)).toFixed(2)}`} style={{fontSize:"18px",color:"#FF6900"}}/></Grid>
            <Btn title={<DeleteIcon/>} variant={"text"} size={"large"} onClick={()=>deletaItem(produto.id) } style={{position:"absolute",margin:0,right:"10px",top:"15px"}}/>
          </Grid>
        ))}
      </Grid>
      <Grid item xs={12} md={3} sx={{marginTop:"69px"}}>
        <Grid sx={{padding:"5px",border:"1px solid #ddd",margin:"5px",borderRadius:"3px"}}>
          <Grid sx={{display:"flex", alignItems: "center",justifyContent:"space-around", borderBottom: "1px solid #ccc"}}><Text text={`Valor dos produtos:`} style={{color:"#ccc",fontSize:"12px"}}/><Text text={`R$ ${valorTotal()}`} style={{color:"#FF6900",fontSize:"18px"}}/></Grid>
          <Grid sx={{display:"flex", alignItems: "center",justifyContent:"space-around"}}><Text text={`Valor com desconto:`} style={{color:"#ccc",fontSize:"12px"}}/><Text text={`R$ ${valorComDesconto()}`} style={{color:"#FF6900",fontSize:"18px"}}/></Grid>
          <Box sx={{backgroundColor:"rgb(229, 255, 241)",display:"flex",flexDirection:"column",alignItems:"center",margin: "35px"}}><Text text={`Valor à vista no PIX:`} style={{color:"rgb(31, 144, 80)",fontSize:"12px"}}/><Text text={`R$ ${(valorComDesconto()*0.9).toFixed(2)}`} style={{color:"rgb(31, 144, 80)",fontSize:"24px"}}/></Box>
          <Box>
            <Btn title={"Pagar"} onClick={()=>goToPage("checkout")} style={{backgroundColor:corPrincipal}} fullWidth={true}/>
            <Btn title={"comprar mais"} onClick={()=>goToPage("catalog")} style={{backgroundColor:corPrincipal}} fullWidth={true}/>
          </Box>
        </Grid>
      </Grid>
    </Grid>
    :<NoProducts/>}
  </>

}


export default Cart