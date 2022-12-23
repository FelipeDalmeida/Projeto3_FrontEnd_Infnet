import Input from '../../components/textfield/input'
import Btn from '../../components/button/button'
import corPrincipal from '../../assets/js/script'
import LoginIcon from '@mui/icons-material/Login';
import Text from '../../components/text/text';
import Logo from '../../assets/img/logo1.png'
import Img from '../../components/img/avatar';
import Grid from '@mui/material/Grid';
import CheckBox from '../../components/checkbox/checkbox';
import {useNavigate } from "react-router";
import { useState } from 'react'
const Login=()=>{
    const loginStyle={
        maxWidth:"350px",
        marginLeft:"auto",
        marginRight:"auto",
        boxSizing:"border-box",
        marginTop:"60px"
    }

    

    const [email,setEmail]=useState({value:"",error:null})
    const [senha,setSenha]=useState("")
    const [isChecked,setIsChecked]=useState(true)




    const navigate=useNavigate();
    const goToPage=()=>{navigate('/register')}



    const validaLogin=()=>{
        if(!email.value.includes("@")){
            setEmail({...email, error:"Email Inválido"})
        } else{
            setEmail({...email, error:null})
        }
    }

    const validaChekbox=()=>{
        setIsChecked(!isChecked)
        console.log(isChecked)
    } 

    return <div style={loginStyle}>
        <Img img={Logo} style={{height: "200px", display: "block",  margin: "10px auto 50px"}}/>
        <Text text={"Faça seu Login"} type={"h3"} style={{fontWeight:"200",}}/>
        <Input label="E-mail" fullWidth={true} type="email" value={email.value} onChange={(e)=>setEmail({...email,value:e.target.value})} errorText={email.error}/>
        <Input label="Senha" fullWidth={true} type="password" value={senha} onChange={(e)=>setSenha(e.target.value)}/>
        <CheckBox checked={isChecked} onChange={validaChekbox}  style={{color:corPrincipal}} label={"Manter-se conectado?"}/>
        <Grid container spacing={0} style={{boxSizing:"border-box"}}>
            <Grid item xs={6} style={{boxSizing:"border-box", padding:"0 5 0 0px" }}><Btn type="button" fullWidth={true} title={"Registrar-se"} onClick={goToPage} variant={"outlined"} size={"large"}/></Grid>
            <Grid item xs={6} style={{boxSizing:"border-box", padding:"0 0 0 5px" }}><Btn type="button" fullWidth={true} title={"Login"} endIcon={<LoginIcon/>} onClick={validaLogin} variant={"contained"} style={{backgroundColor:corPrincipal}} size={"large"}/></Grid>
        </Grid>


    </div>  
}


export default Login