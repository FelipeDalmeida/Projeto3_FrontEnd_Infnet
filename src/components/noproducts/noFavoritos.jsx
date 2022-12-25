import { Stack } from "@mui/material"
import Text from "../text/text"
import {useNavigate } from "react-router";
import Btn from "../button/button";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import corPrincipal from '../../assets/js/script'

const NoFavoritos=()=>{

    const navigate=useNavigate()
    const goToPage=()=>{navigate("/catalog")}

    return <Stack
    direction="column"
    sx={{alignItems: "center",
    height: "calc(100vh - 60px)",
    justifyContent: "center"}}>
        <Text text={"Você ainda não possui favoritos."} type={"h2"}/>
        <Text text={"Encontre os melhores produtos"} style={{marginTop:0}}/>
        <Btn title={"Ir para nosso catálogo"} startIcon={<ShoppingCartIcon/>} onClick={goToPage} size={"large"} style={{backgroundColor:corPrincipal}}/>
    </Stack>
}

export default NoFavoritos