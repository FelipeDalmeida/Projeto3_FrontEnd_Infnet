import PropTypes from 'prop-types' 

const Text=({type,style,text,className})=>{
    const styleDefaulft={
        // display:"inline",

    }
    const styleCustom={...styleDefaulft,...style}
    
    if(type==="h1"){
        return <h1 className={className} style={styleCustom}>{text}</h1>
    }
    if(type==="h2"){
        return <h2 className={className} style={styleCustom}>{text}</h2>
    }
    if(type==="h3"){
        return <h3 className={className} style={styleCustom}>{text}</h3>
    }
    if(type==="h4"){
        return <h4 className={className} style={styleCustom}>{text}</h4>
    }
    if(type==="h5"){
        return <h5 className={className} style={styleCustom}>{text}</h5>
    }
    if(type==="h6"){
        return <h6 className={className} style={styleCustom}>{text}</h6>
    }

    return <p className={className} style={styleCustom}>{text}</p>
}

Text.propTypes={
    style: PropTypes.object,
    text :PropTypes.string,
    type: PropTypes.string,
}

Text.defaultProps={
    style:"",
    text:"",
    type:"p",
}

export default Text;