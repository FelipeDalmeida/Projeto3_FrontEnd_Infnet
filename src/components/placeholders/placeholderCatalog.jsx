import { Box, Grid } from "@mui/material"
import { useEffect, useState } from "react"
import "./placeholder.css"

const PlaceholderCatalog=({})=>{
    const [placeholders,setPlaceholder]=useState([])

    const geraPlaceholder=()=>{
        let placeholder=[]
        for(let i=0;i<20;i++){ //gera 20 placeholder
            
            placeholder.push(<Grid item xs={12} sm={6} md={4} lg={3} xl={2} xxl={1} sx={{boxSizing:"border-box",padding:0,margin:"0"}}>
                    <Box sx={{width:"100%",height:"450px"}} className={"placeholder"}>{""}</Box>
                </Grid>)
               
        }
        setPlaceholder(placeholder)
    }
    useEffect(()=>{geraPlaceholder()},[])

    return <Grid container spacing={1}  sx={{boxSizing:"border-box",marginTop: "10px",width:"100%"}}>
        {placeholders.map(placeholder=>{return placeholder})}
        </Grid>
}


export default PlaceholderCatalog