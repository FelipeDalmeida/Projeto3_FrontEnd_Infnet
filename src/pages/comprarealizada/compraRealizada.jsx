import { Stack } from "@mui/material"
import Text from "../../components/text/text";
import CheckIcon from '@mui/icons-material/Check';


const CompraRealizada=({})=>{





    return <Stack
    direction="column"
    sx={{alignItems: "center",
    height: "calc(100vh - 166px)",
    justifyContent: "center",
    width:"100%"}}>
        <Text text={"Compra realizada com sucesso!!! "} type={"h2"}/>
        <CheckIcon sx={{fontSize:"5em", color:"green"}}/>
    
    </Stack>
}

export default CompraRealizada