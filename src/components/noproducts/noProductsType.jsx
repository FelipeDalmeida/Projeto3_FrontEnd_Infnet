import { Stack } from "@mui/material"
import Text from "../text/text"
import {useNavigate } from "react-router";
import Btn from "../button/button";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import corPrincipal from '../../assets/js/script'

const NoProductsType=({set})=>{

    const setEvent=()=>{
        set(null)
    }



    return <Stack
    direction="column"
    sx={{alignItems: "center",
    height: "calc(100vh - 166px)",
    justifyContent: "center",
    width:"100%"}}>
        <Text text={"Não há produtos deste tipo"} type={"h2"}/>
        <Text text={"Deseja ver nosso catálogo?"} style={{marginTop:0}}/>
        <Btn title={"Continuar comprando"} startIcon={<ShoppingCartIcon/>} onClick={setEvent} size={"large"} style={{backgroundColor:corPrincipal}}/>
    </Stack>
}

export default NoProductsType