import axios from "axios";

const get=async(url)=>{
    const response=await axios({
        method:"get",
        url:url
    })
    return response
}

const addLocalStorage=(local,info)=>{

    let localSave=window.localStorage.getItem(local)

    if(localSave){
        localSave=JSON.parse(localSave)

        let verifica=localSave.some(item=>item.id===info.id)
        if(!verifica){
            window.localStorage.setItem(local,JSON.stringify([...localSave,info]))
        }
    }else{
    window.localStorage.setItem(local,JSON.stringify([info]));
    }
}

const atualizaUnidadesLocalStorage=(local,info)=>{  //utilizado apenas na pagina de carrinho
    let localSave=window.localStorage.getItem(local)
    localSave=JSON.parse(localSave)
    for(let i=0;i<localSave.length;i++){
        if(localSave[i].id===info.id){
            localSave[i]={...localSave[i],...info}
        }
    }
    window.localStorage.setItem(local,JSON.stringify(localSave))
}

const loadLocalStrorage=(local)=>{
    let info=JSON.parse(window.localStorage.getItem(local))
    return info
}

const deletItemLocalStorage=(local,id)=>{
    let localSave=window.localStorage.getItem(local)

    if(localSave){
        localSave=JSON.parse(localSave)
        localSave.map((info,index)=>{
            if(info.id===id){
                localSave.splice(index,1)
                window.localStorage.setItem(local,JSON.stringify([...localSave]))
            }
        })
    }
    return localSave
}


export {get,addLocalStorage,loadLocalStrorage,deletItemLocalStorage,atualizaUnidadesLocalStorage}