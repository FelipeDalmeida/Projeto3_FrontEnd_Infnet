import { FormControl,Select,InputLabel, Box, MenuItem  } from '@mui/material'
import PropTypes from 'prop-types'



const SelectOptions=({fullwidth,label,options,style,className,onClick,onChange,value,labelId,id,labelStyle})=>{

    // let optionsElement=<Options options={options} />

    // let styleCustom={...styleDefault, ...style}
    // let styleDivDefault={
    //     boxSizing:"border-box",
    //     padding: "5px",
    // }



    return <Box sx={{ minWidth: "120px" }} style={style}>
        <FormControl fullWidth={fullwidth}>
        <InputLabel sx={labelStyle} id={labelId}>{label}</InputLabel>
        <Select
        labelId={labelId}
        id={id}
        value={value}
        label={label}
        onChange={onChange}
        >
            {options.map(option=>{
                return <MenuItem value={option}>{option}</MenuItem>
            })}
        </Select>
    

    </FormControl>
    </Box>
}

SelectOptions.propTypes={
    fullwidth:PropTypes.bool,
    label:PropTypes.string,
    options:PropTypes.array,
    style: PropTypes.object,
    className:PropTypes.string,
    onClick:PropTypes.func,
    onChange:PropTypes.func,
    value:PropTypes.string,
    labelId:PropTypes.string,
    id:PropTypes.string,
    labelStyle:PropTypes.object
}

SelectOptions.defaultProps={
    fullwidth:true,
    label:"",
    options:[],
    style: null,
    className:"",
    onClick:null,
    onChange:null,
    value:"",
    labelId:"",
    id:"",
    labelStyle:null
}

export default SelectOptions
