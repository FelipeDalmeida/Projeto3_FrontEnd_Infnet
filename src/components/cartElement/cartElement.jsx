import PropTypes from 'prop-types' 
import Text from "../text/text"
import SelectNumber from "../select/selectNumber/selectNumber"
import Btn from "../button/button"

const CartElement=({info,index,changeValue,setAdiciona,setSubtrai,deletaItem})=>{


    return <><Text text={info.nome}/><Text text={info.unit}/><SelectNumber id={info.id} value={info.unit} subtraction={()=>setSubtrai(info.unit,index)} plus={()=>setAdiciona(info.unit,index)} onChange={(e)=>changeValue(e,index)}/><Btn title={"deletar"} onClick={()=>deletaItem(info.id)}/></>

}

CartElement.PropTypes={
    info:PropTypes.string,
    index:PropTypes.number,
    changeValue:PropTypes.func,
    setAdiciona:PropTypes.func,
    setSubtrai:PropTypes.func,
    deletaItem:PropTypes.func,
}

CartElement.defaultProps={
    info:"",
    index:null,
    changeValue:null,
    setAdiciona:null,
    setSubtrai:null,
    deletaItem:null,
}

export default CartElement