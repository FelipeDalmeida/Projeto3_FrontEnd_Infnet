import { Stack } from "@mui/material"
import Text from "../text/text"
import {useNavigate } from "react-router";
import Btn from "../button/button";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import corPrincipal from '../../assets/js/script'

const NoProducts=()=>{

    const navigate=useNavigate()
    const goToPage=()=>{navigate("/catalog")}

    return <Stack
    direction="column"
    sx={{alignItems: "center",
    height: "calc(100vh - 60px)",
    justifyContent: "center"}}>
        <Text text={"O seu carrinho está vazio."} type={"h2"}/>
        <Text text={"Deseja ver nosso catálogo?"} style={{marginTop:0}}/>
        <Btn title={"Continuar comprando"} startIcon={<ShoppingCartIcon/>} onClick={goToPage} size={"large"} style={{backgroundColor:corPrincipal}}/>
    </Stack>
}

export default NoProducts