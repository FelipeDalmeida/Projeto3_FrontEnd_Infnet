import Text from "../../components/text/text"
import corPrincipal from '../../assets/js/script'

const Notfound=()=>{

    let styleDiv={
        display:"flex",
        height: "calc(100vh - 60px)",
        justifyContent: "center",
        alignItems: "center",
        flexDirection:"column",
        
    }

    let style404={
        fontSize:"10em",
        color:corPrincipal,
        fontFamily: "'Lobster', cursive",
        margin: 0,
        textShadow: `5px 5px 10px ${corPrincipal}`,
    }

    let styleText={
        fontSize:"1.5em",
        color:corPrincipal,
        fontStyle: "italic",
        textAlign: "center",
    }

    return <div style={styleDiv}>
    <Text text={"404"} type={"h1"} style={style404}/>
    <Text text={"A Página Que Você Procura Não Foi Encontrada"} type={"p"} style={styleText}/>
    </div>
}


export default Notfound