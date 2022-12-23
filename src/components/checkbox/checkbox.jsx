import { FormControlLabel , FormGroup, Checkbox } from '@mui/material';
import PropTypes from 'prop-types'

const CheckBox = ({size,checked,onChange,style,label})=>{
    return <FormGroup>
            <FormControlLabel control={<Checkbox size={size} checked={checked} onChange={onChange}  style={style}/>} label={label}/>
        </FormGroup>
}

CheckBox.propTypes={
    size: PropTypes.string,
    checked:PropTypes.bool,
    onChange: PropTypes.func,
    style: PropTypes.object,
    label: PropTypes.string 

}

CheckBox.defaultProps={
    size: "medium",
    checked:true,
    onChange: null,
    style: null,
    label: "" 
}

export default CheckBox