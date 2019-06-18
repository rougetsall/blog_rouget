import { resolve } from "path";

export default{
    getUnite(id){

        return new Promise((resolve)=> {
            fetch("http://blog.etherial.fr/articles/"+id,{
              method:"GET"
              }).then((data)=>{
                data.json().then((json)=>{
                    resolve(json)
                })
             })
        })
        
    }

}
