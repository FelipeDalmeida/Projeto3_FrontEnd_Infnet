import Img from '../img/avatar'
import './load.css'
import Logo from '../../assets/img/logo1.png'
const Load =()=>{

    return <div style={{display:"flex",justifyContent:"center"}}>
            <Img img={Logo} style={{width:"200px",marginTop:"30px"}}/>
            <div class="loader">
            
                <div class="loading"></div>
                <div class="loading"></div>
                <div class="loading"></div>
                <div class="loading"></div>
                <div class="loading"></div>
            </div>
        </div>
}


export default Load