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
import Input from "../../components/textfield/input";
import SelectOptions from "../../components/select/select";


const Checkout=()=>{

    const [Produtos,setProdutos]=useState([])
    const [endereco,setEndereco]=useState({value:"",error:null})
    const [cep,setCep]=useState({value:"",error:null})
    const [celular,setCelular]=useState({value:"",error:null})
    const [nome,setNome]=useState({value:"",error:null})
    const [CPF,setCPF]=useState({value:"",error:null})
    const [cartao,setCartao]=useState({nome:"",errorNome:null,cod:"",errorCod:null,data:"",errorData:null,numero:"",errorNumero:null})
    const [pagamento,setPagamento]=useState("PIX")

    const opcoesPagamento=["PIX","Cartão","Boleto"]
    const navigate=useNavigate();
    const goToPage=(page)=>{navigate(`/${page}`)}
    

    useEffect(() => {

        setProdutos(loadLocalStrorage("cart"))   //carregar produtos salvos no carrinho

      }, []);


    const eventHandlerPagamento=(e)=>{setPagamento(e.target.value)}


    const validaCompra=()=>{
        if(!endereco.value){
            setEndereco({...endereco, error:"Digite o endereço"})
        } else{
            setEndereco({...endereco, error:null})
        }
        if(cep.value.length!=8){ //em um caso real, usar validador de CEP
            setCep({...cep, error:"Digite um CEP válido"})
        } else{
            setCep({...cep, error:null})
        }
        if(celular.value.length!=9){ 
            setCelular({...celular, error:"Digite um celular válido"})
        } else{
            setCelular({...celular, error:null})
        }
        if(!nome.value){ 
            setNome({...nome, error:"Digite o nome do destinatário"})
        } else{
            setNome({...nome, error:null})
        }
        if(CPF.value.length!=11){ //em um caso real, utilizar validador
            setCPF({...CPF, error:"Digite um CPF válido"})
        } else{
            setCPF({...CPF, error:null})
        }

        if(pagamento==="Cartão"){
            if(!cartao.nome){ //em um caso real, utilizar validador
                setCartao({...cartao, errorNome:"Digito o Nome impresso no cartão"})
            } else{
                setCartao({...cartao, errorNome:null})
            }
            if(!cartao.numero){ //em um caso real, utilizar validador
                setCartao({...cartao, errorNumero:"Digite um numero válido"})
            } else{
                setCartao({...cartao, errorNumero:null})
            }
            if(cartao.cod.length!=3){ //em um caso real, utilizar validador
                setCartao({...cartao, errorCod:"Código inválido"})
            } else{
                setCartao({...cartao, errorCod:null})
            }
             
        }
        
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
      <Grid item xs={12} md={8} sx={{marginTop:"16px",paddingLeft:"20px !important",paddingRight:"5px",boxSizing:"border-box"}}>
      <Text text={"Preencha seus dados:"} type={"h3"} style={{fontWeight:"200", margin:"10px",color:"#aaa"}}/>
        <Grid container spacing={2} sx={{position:"relative",border:"1px solid #ddd",margin:0,borderRadius:"3px",width:"100%"}}>
            <Grid item xs={12} md={6} sx={{padding:"0 !important"}}><Input style={{margin:"10px 10px"}} label="Endereço" fullWidth={true} type="text" value={endereco.value} onChange={(e)=>setEndereco({...endereco, value:e.target.value})} errorText={endereco.error}/></Grid>
            <Grid item xs={6} md={3} sx={{padding:"0 !important"}}><Input style={{margin:"10px 10px"}} label="CEP" fullWidth={true} type="text" value={cep.value} onChange={(e)=>setCep({...cep, value:e.target.value})} errorText={cep.error}/></Grid>
            <Grid item xs={6} md={3} sx={{padding:"0 !important"}}><Input style={{margin:"10px 10px"}} label="Celular" fullWidth={true} type="text" value={celular.value} onChange={(e)=>setCelular({...celular, value:e.target.value})} errorText={celular.error}/></Grid>
            <Grid item xs={12} md={9} sx={{padding:"0 !important"}}><Input style={{margin:"10px 10px"}} label="Nome do destinatário" fullWidth={true} type="text" value={nome.value} onChange={(e)=>setNome({...nome, value:e.target.value})} errorText={nome.error}/></Grid>
            <Grid item xs={6} md={3} sx={{padding:"0 !important"}}><Input style={{margin:"10px 10px"}} label="CPF" fullWidth={true} type="text" value={CPF.value} onChange={(e)=>setCPF({...CPF, value:e.target.value})} errorText={CPF.error}/></Grid>
            <Grid item xs={6} md={3} lg={1} sx={{padding:"0 !important"}}><SelectOptions style={{margin:"10px 10px"}} label={"Método de Pagamento"} labelId={"Pagamento"} options={opcoesPagamento} onChange={eventHandlerPagamento} value={pagamento}  id={"size"}/></Grid>
            {pagamento==="Cartão"?<Grid container>
            <Grid item xs={12}><Text text={"Dados do cartão:"} type={"h3"} style={{fontWeight:"200", margin:"10px",color:"#aaa"}}/></Grid>
            <Grid item xs={12} md={6} sx={{padding:"0 !important"}}><Input style={{margin:"10px 10px"}} label="Nome Impresso No Cartão" fullWidth={true} type="text" value={cartao.nome} onChange={(e)=>setCartao({...cartao, nome:e.target.value})} errorText={cartao.errorNome}/></Grid>
            <Grid item xs={12} md={6} sx={{padding:"0 !important"}}><Input style={{margin:"10px 10px"}} label="Número do cartão" fullWidth={true} type="text" value={cartao.numero} onChange={(e)=>setCartao({...cartao, numero:e.target.value})} errorText={cartao.errorNumero}/></Grid>
            <Grid item xs={12} md={6} sx={{padding:"0 !important"}}><Input style={{margin:"10px 10px"}} label="Código de Seguraça" fullWidth={true} type="text" value={cartao.cod} onChange={(e)=>setCartao({...cartao, cod:e.target.value})} errorText={cartao.errorCod}/></Grid>
            <Grid item xs={12} md={6} sx={{padding:"0 !important"}}><Input style={{margin:"10px 10px"}} label="Validade" fullWidth={true} type="text" value={cartao.data} onChange={(e)=>setCartao({...cartao, data:e.target.value})} errorText={cartao.errorData}/></Grid>
            </Grid>
        :""}
        </Grid>
    
      </Grid>
      <Grid item xs={12} md={4} sx={{marginTop:"55px"}}>
        <Grid sx={{padding:"5px",border:"1px solid #ddd",margin:"5px",borderRadius:"3px"}}>
        <Grid sx={{display:"flex", alignItems: "center",justifyContent:"space-around", borderBottom: "1px solid #ccc"}}><Text text={`Valor dos produtos:`} style={{color:"#ccc",fontSize:"12px"}}/><Text text={`R$ ${valorTotal()}`} style={{color:"#FF6900",fontSize:"18px"}}/></Grid>
            <Grid container sx={{    justifyContent: "center"}}>
                <Grid item xs={12} md={6} sx={{backgroundColor: "white" ,display:"flex",flexDirection:"column",alignItems:"center",margin: "0px"}}><Box sx={{backgroundColor:(pagamento!="PIX")?"rgb(229, 255, 241)":"white", color:(pagamento!="PIX")?"rgb(31, 144, 80)":"#FF6900",width:"100%",padding:"5px",margin:"5px", textAlign: "center"}}><Text text={`Total da sua compra:`} style={{fontSize:"12px"}}/><Text text={`R$ ${valorComDesconto()}`} style={{fontSize:"24px"}}/></Box></Grid>
                {pagamento==="PIX"?<Grid item xs={12} md={6} sx={{backgroundColor: "white" ,display:"flex",flexDirection:"column",alignItems:"center",margin: "0px"}}><Box sx={{ backgroundColor:"rgb(229, 255, 241)",width:"100%",padding:"5px",margin:"5px",textAlign: "center"}}><Text text={`Total à vista no PIX:`} style={{color:"rgb(31, 144, 80)",fontSize:"12px"}}/><Text text={`R$ ${(valorComDesconto()*0.9).toFixed(2)}`} style={{color:"rgb(31, 144, 80)",fontSize:"24px"}}/></Box></Grid>:""}
            </Grid>
          <Box>
            <Btn title={"Pagar"} onClick={validaCompra} style={{backgroundColor:corPrincipal}} fullWidth={true}/>
            <Btn title={"Voltar para o carrinho"} onClick={()=>goToPage("cart")} style={{backgroundColor:corPrincipal}} fullWidth={true}/>
          </Box>
        </Grid>
      </Grid>
    </Grid>
    :<NoProducts/>}
  </>
}


export default Checkout