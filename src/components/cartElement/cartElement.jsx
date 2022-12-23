import Text from "../text/text"
import SelectNumber from "../select/selectNumber/selectNumber"
import Btn from "../button/button"

const CartElement=({info,index,changeValue,setAdiciona,setSubtrai,deletaItem})=>{


    return <><Text text={info.nome}/><Text text={info.unit}/><SelectNumber id={info.id} value={info.unit} subtraction={()=>setSubtrai(info.unit,index)} plus={()=>setAdiciona(info.unit,index)} onChange={(e)=>changeValue(e,index)}/><Btn title={"deletar"} onClick={()=>deletaItem(info.id)}/></>

}

export default CartElement