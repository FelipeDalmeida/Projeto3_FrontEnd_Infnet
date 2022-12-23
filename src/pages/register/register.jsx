import Input from '../../components/textfield/input'
import Btn from '../../components/button/button'
import corPrincipal from '../../assets/js/script'
import Text from '../../components/text/text';
import Logo from '../../assets/img/logo1.png'
import Img from '../../components/img/avatar';
import Grid from '@mui/material/Grid';
import CheckBox from '../../components/checkbox/checkbox';
import {useNavigate } from "react-router";
import { useState } from 'react'

const Register=()=>{
    const loginStyle={
        maxWidth:"350px",
        marginLeft:"auto",
        marginRight:"auto",
        boxSizing:"border-box",
        marginTop:"60px"
    }

    
    const [nome,setNome]=useState("")
    const [email,setEmail]=useState("")
    const [email2,setEmail2]=useState({value:"",error:null})
    const [senha,setSenha]=useState("")
    const [senha2,setSenha2]=useState({value:"",error:null})
    const [isChecked,setIsChecked]=useState(true)




    const navigate=useNavigate();
    const goToPage=()=>{navigate('/login')}



    const validaRegistro=()=>{
        if(email!==email2.value){
            setEmail2({...email2, error:"E-mails digitados não coincidem"})
        } else {
            setEmail2({...email2, error:null})
        }
        
        if(senha!==senha2.value){
            setSenha2({...senha2, error:"Senhas digitada não coincide"})
        } else{
            setSenha2({...senha2, error:null})
        }
    }

    const validaChekbox=()=>{
        setIsChecked(!isChecked)
        console.log(isChecked)
    } 

    return <div style={loginStyle}>
        <Img img={Logo} style={{height: "200px", display: "block",  margin: "10px auto 50px"}}/>
        <Text text={"Faça seu Registro"} type={"h3"} style={{fontWeight:"200",}}/>
        <Input label="Nome" fullWidth={true} type="text" value={nome} onChange={(e)=>setNome(e.target.value)}/>
        <Input label="E-mail" fullWidth={true} type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <Input label="Confirme Seu E-mail" fullWidth={true} type="email" value={email2.value} onChange={(e)=>setEmail2({...email2,value:e.target.value})} errorText={email2.error}/>
        <Input label="Senha" fullWidth={true} type="password" value={senha} onChange={(e)=>setSenha(e.target.value)}/>
        <Input label="Confirme Sua Senha" fullWidth={true} type="password" value={senha2.value} onChange={(e)=>setSenha2({...senha2,value:e.target.value})} errorText={senha2.error}/>
        <CheckBox checked={isChecked} onChange={validaChekbox}  style={{color:corPrincipal}} label={"Aceito os termos"}/>
        <Grid container spacing={0} style={{boxSizing:"border-box"}}>
            <Grid item xs={6} style={{boxSizing:"border-box", padding:"0 5 0 0px" }}><Btn type="button" fullWidth={true} title={"Login"} onClick={goToPage} variant={"outlined"} size={"large"}/></Grid>
            <Grid item xs={6} style={{boxSizing:"border-box", padding:"0 0 0 5px" }}><Btn type="button" fullWidth={true} title={"Registrar-se"} onClick={validaRegistro} variant={"contained"} style={{backgroundColor:corPrincipal}} size={"large"}/></Grid>
        </Grid>


    </div>  
}


export default Register