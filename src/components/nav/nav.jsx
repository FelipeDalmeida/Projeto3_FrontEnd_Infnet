import PropTypes from 'prop-types' 
import Limultiplus from "./limultiplus"

const Nav =({lis,style,styleUl,styleLi,className,classNameUl,classNameLi,onClick})=>{
    const styleDefaulft={
        alignSelf: "center",
    }
    const styleCustom={...styleDefaulft,...style}

    const styleDefaulftUl={
        listStyle:"none",
        padding: "0",
        margin: "0",
    }
    const styleCustomUl={...styleDefaulftUl,...styleUl}

    const styleDefaulftLi={
        padding:"10px 0"
    }
    const styleCustomLi={...styleDefaulftLi,...styleLi}

    return <nav onClick={onClick} style={styleCustom} className={className}>
        <ul style={styleCustomUl} className={classNameUl}><Limultiplus lis={lis} style={styleCustomLi} className={classNameLi}/></ul>
    </nav>
}

Nav.propTypes={
    lis:PropTypes.array,
    style:PropTypes.object,
    styleUl:PropTypes.object,
    styleLi:PropTypes.object,
    className:PropTypes.string,
    classNameUl:PropTypes.string,
    classNameLi:PropTypes.string,
    onClick:PropTypes.func,
}

Nav.defaultProps={
    lis:"",
    style:null,
    styleUl:null,
    styleLi:null,
    className:"",
    classNameUl:"",
    classNameLi:"",
    onClick:null,
}


export default Nav