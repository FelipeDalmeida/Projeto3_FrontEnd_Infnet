import PropTypes from 'prop-types'
import TextField from '@mui/material/TextField'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from 'react'



const Input=({type,multiline,label,id,style,onChange,className, rows,variant,value,fullWidth,error,errorText,disbled,inputStyle})=>{
    
    const [showPassorwd,setShowPassword]=useState(false)
    const changePasswordVisibility=()=>setShowPassword(!showPassorwd);

    let styleDefault={
        boxSizing: "border-box",
        margin:"10px 0",
        position:"relative"
    }
    let styleCustom={...styleDefault,...style};

    const btnStyle={
        backgroundColor:"transparent",
        border:"none",
        position:"absolute",
        right: "10px",
        top: "15px",
    }

    // let inputStyleDefault={
    //     display:"block",
    //     width:"100%",
    //     boxSizing: "border-box",
    //     padding: "5px",
    //     border:"1px solid black",
    //     borderRadius:"5px"

    // }
    // let inputStyleCustom={...inputStyleDefault,...inputStyle};

    // let labelStyleDefault={
    //     display:"block",
    //     padding: "5px",
        
        
    // }
    // let labelStyleCustom={...labelStyleDefault,...labelStyle};
    

    // return label?<label htmlFor={id} style={styleCustom} className={className} >{label}</label> : <input value={value} type={type} style={styleCustom} onChange={onChange} id={id} className={className}/>
    return <div style={styleCustom}>
        <TextField 
            type={type==="password"?(showPassorwd?"text":"password"):type}
            style={inputStyle}
            multiline={multiline}
            label={label}
            onChange={onChange}
            className={className}
            id={id}
            value={value}
            rows={rows}
            variant={variant}
            fullWidth={fullWidth}
            error={(errorText||error)?true:false}
            helperText={errorText}
            disabled= {disbled}/>
        {type==="password"? <button type="button" onClick={changePasswordVisibility} style={btnStyle}>{showPassorwd ? <VisibilityOffIcon/>:<VisibilityIcon/>}</button>:""}
        </div>
}

Input.propTypes={
    type: PropTypes.string,
    multiline:PropTypes.bool,
    label:PropTypes.string,
    id: PropTypes.string,
    onchange: PropTypes.func,
    style: PropTypes.object,
    className:PropTypes.string,
    rows:PropTypes.number,
    value:PropTypes.string,
    variant: PropTypes.string,
    fullWidth: PropTypes.bool,
    error:PropTypes.bool,
    errorText:PropTypes.string,
    disabled: PropTypes.bool,
    inputStyle:PropTypes.object,
    

}

Input.defaultProps={
    type:"text",
    multiline:false,
    label:"",
    style:null,
    id:null,
    onchange:null,
    value:null,
    className:"",
    rows:"4",
    value:null,
    variant: "outlined",
    fullWidth: false,
    error:false,
    errorText:"",
    disabled: false,
    inputStyle:null
}


export default Input