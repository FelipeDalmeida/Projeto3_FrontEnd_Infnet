import { Box, Grid, Stack, Divider } from "@mui/material"

import "./placeholder.css"

const PlaceholderProdutos=({})=>{

    return <Grid container spacing={2} sx={{alignItems:"center", height:"calc(100vh - 60px)"}}>
        <Grid item xs={0} md={1} xl={2}></Grid> {/* offset */}
        <Grid item xs={12} md={5} xl={4} sx={{position:"relative", maxHeight:"350px",minHeight:"350px", textAlign: "-webkit-center"}}>
           <Box className={"placeholder"} sx={{width:"300px",height:"300px"}}></Box>
        </Grid>
        <Grid item xs={12} md={5} xl={4}>
            
                
            <Box className={"placeholder"} sx={{width:"100%",height:"40px"}}></Box>
            
            
            

            
            <Stack 
            direction={{ xs: 'column'}}
            sx={{ 
            
                alignItems: "center",
                ['@media (min-width:768px)']:{display:"block"},
                ['@media (max-width:768px)']:{textAlign:"center"},
            
                
                marginBottom:"40px",
            }}>
                <Box className={"placeholder"} sx={{width:"100%",height:"40px"}}></Box>
                <Box className={"placeholder"} sx={{width:"40% !important",height:"60px"}}></Box>
            </Stack>

            
            
        </Grid>
   
    
    
    </Grid>
}


export default PlaceholderProdutos