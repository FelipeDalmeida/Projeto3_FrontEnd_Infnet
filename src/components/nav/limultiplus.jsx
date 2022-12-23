import PropTypes from 'prop-types' 

const Limultiplus=({lis,style,className})=>{ //Lis em formato de array. Irá gerar as li do Nav
    let liSum=[]
    for(let i=0;i<lis.length;i++){
        liSum.push(<li style={style} className={className}>{lis[i]}</li>)
    }
    return liSum;
}

Limultiplus.propTypes={
    lis:PropTypes.array,
    style:PropTypes.object,
    className:PropTypes.string,
}

Limultiplus.defaultProps={
    lis:[],
    style:null,
    className:"",
}

export default Limultiplus