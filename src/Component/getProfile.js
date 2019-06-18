import { resolve } from "path";


export default{
    getprofile(token){

        return new Promise((resolve)=> {
            fetch("http://blog.etherial.fr/users/me",{
              method:"GET",
              headers: {
                "Authorization" :"Bearer "+token
                }
              }).then((data)=>{
                data.json().then((json)=>{
                    resolve(json)
                })
             })
        })
        
    }
}
