import PropTypes from 'prop-types'
import { Box, Grid } from "@mui/material"
import Produto from './produto';
import { useState } from 'react';
import SelectOptions from '../select/select';
import Text from '../text/text';
import corPrincipal from '../../assets/js/script'
import NoProductsType from '../noproducts/noProductsType';



const Produtos=({spacing,produtos,xs,sm,md,lg,xl,xxl})=>{
    let contador=0;
    const [type,setType]=useState(null)
    
    const categorias=[null,"Smartwatch","Smartphone","Lazer"]
    return <>
    <Grid container sx={{backgroundColor:"#F2B705",padding:"10px"}}>

        <Grid item xs={16} md={4} sx={{}}>
            <Grid container>
                <Grid item xs={6} sx={{alignSelf:"center",color:"white"}}><Text text={"Procura algo específico?"} type={"h3"} style={{fontWeight:"200", margin:"10px",color:"white"}}/></Grid>
                <Grid item xs={6} sx={{alignSelf:"center"}}><SelectOptions labelStyle={{color:"white"}} style={{margin:"10px 10px"}}  label={"Categorias"} labelId={"Categorias"} options={categorias} onChange={(e)=>setType(e.target.value)} value={type}  id={"size"}/></Grid>
            </Grid>
        </Grid>
    </Grid>

    {type?<Grid container spacing={spacing} style={{marginTop: "10px"}}>   
        {produtos.length>0?
            produtos.map(produto=>{
                if(produto.type===type){
                    contador+=1;
                    return( <Grid item xs={xs} sm={sm} md={md} lg={lg} xl={xl} xxl={xxl}>
                                <Produto produto={produto}/>
                            </Grid>)
                }
                
        }):"Não Há Produtos"}
        {contador===0?<NoProductsType set={setType}/>:""}  {/* Se o contador for zero, nenhum produto da lista era do tipo*/}
    </Grid>:                   
    <Grid container spacing={spacing} style={{marginTop: "10px"}} onClick={()=>{console.log("oie")}}>   {/* Caso queira carregar todos os produtos irá entrar nesse loop*/}
        {produtos.length>0?
            produtos.map(produto=>{
                    return( <Grid item xs={xs} sm={sm} md={md} lg={lg} xl={xl} xxl={xxl}>
                                <Produto produto={produto}/>
                            </Grid>)
                
                
        }):"Não Há Produtos"}  
        

        
    </Grid>}</>
}

Produtos.propTypes={
    type:PropTypes.string,
    spacing:PropTypes.number, 
    produtos:PropTypes.array,
    xs:PropTypes.number,
    sm:PropTypes.number,
    md:PropTypes.number,
    lg:PropTypes.number,
    xl:PropTypes.number,
    xxl:PropTypes.number,
}

Produtos.defaultProps={
    type:"",
    spacing:1, 
    produtos:[],
    xs:12,
    sm:6,
    md:4,
    lg:3,
    xl:2,
    xxl:1,
}

export default Produtos