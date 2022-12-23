import PropTypes from 'prop-types';


const Img=({img,style,alt})=>{
    return <img src={img} style={style} alt={alt}/>
}

Img.propTypes={
    img:PropTypes.string,
    style:PropTypes.object,
    alt:PropTypes.string
}

Img.defaultProps={
    img:"",
    style:null,
    alt:""
}

export default Img