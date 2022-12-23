import Btn from "../../button/button"
import "./selectNumber.css"

const SelectNumber=({onChange,value,set,id,plus,subtraction,hideButton})=>{
    //set deverá ser usado quando tivermos apenas um elemento no hook (como é o caso da página de cada produto)
    //plus e subtraction são funções para alterar estados com array (como é o caso do carrinho)

    const adiciona=()=>{
        set(value+1)
    }

    const subtrai=()=>{
        set(value-1)
    }

    const buttonStyle={
        minWidth:"5px",
        backgroundColor:"transparent",
        color:"Black",
        margin:0,
        boxShadow:"none",
        display:hideButton?"none":"inline",
        
    }

    const inputStyle={
        maxWidth:"30px",
        minHeight:"34px",
        border: "none",
        fontSize:"16px",
        textAlign:"center",
        borderRadius:"4px",

    }

    const spanStyle={
        border:"1px solid",
        borderColor: "rgba(0, 0, 0, 0.23)",
        borderRadius:"4px",
        padding: "11px 0",
    }

    return <span style={spanStyle}>
        <Btn title={"-"} style={buttonStyle} onClick={set?subtrai:subtraction}/>
        <input id={id} style={inputStyle} type={"number"} onChange={onChange} className={"input-custom"} value={value}/>
        <Btn title={"+"} style={buttonStyle} onClick={set?adiciona:plus}/>
    </span>


}


export default SelectNumber