import PropTypes from 'prop-types' 
import Button from '@mui/material/Button'


const Btn=({style, title, type,onClick,onMouseOver, className, onMouseLeave,variant,disabled,size,startIcon,endIcon,fullWidth,sx})=>{
    let styleDefault={
        marginTop:"5px"
    }
    let styleCustom={...styleDefault,...style}


    // return <button style={styleCustom} type={type} onClick={onClick} onMouseOver={onMouseOver} className={className} onMouseLeave={onMouseLeave}>{title}</button>
    return <Button 
    sx={sx}
    style={styleCustom}
    type={type} 
    onClick={onClick} 
    onMouseOver={onMouseOver} 
    className={className} 
    onMouseLeave={onMouseLeave}
    variant={variant}
    disabled={disabled}
    size={size}
    startIcon={startIcon}
    endIcon={endIcon}
    fullWidth={fullWidth}
    >{title}</Button>
}




Btn.propTypes={
    style:PropTypes.object,
    title:PropTypes.string,
    type:PropTypes.string,
    onClick:PropTypes.func,
    onMouseOver:PropTypes.func,
    onMouseLeave:PropTypes.func,
    className:PropTypes.string,
    variant:PropTypes.string,
    disabled:PropTypes.bool,
    size:PropTypes.string,
    // startIcon:PropTypes.string,
    // endIcon:PropTypes.string,
    fullWidth:PropTypes.bool,
    sx:PropTypes.object
}

Btn.defaultProps={
    style:null,
    title:"Button",
    type:"button",
    onClick:null,
    onMouseOver:null,
    onMouseLeave:null,
    className:"",
    variant:"contained",
    disabled:false,
    size:"medium",
    startIcon:null,
    endIcon:null,
    fullWidth:false,
    sx:null
}





export default Btn