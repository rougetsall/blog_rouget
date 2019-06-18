import { resolve } from "path";


export default{
    getArticls(){

        return new Promise((resolve)=> {
            fetch("http://blog.etherial.fr/articles",{
              method:"GET"
              }).then((data)=>{
                data.json().then((json)=>{
                    resolve(json)
                })
             })
        })
        
    },
    getCategories(){
        return new Promise((resolve)=> {
            fetch("http://blog.etherial.fr/articles/categories",{
              method:"GET"
              }).then((data)=>{
                data.json().then((json)=>{
                    resolve(json)
                })
             })
        })
        
    },
    getUser(token){
        return new Promise((resolve)=> {
            fetch("http://blog.etherial.fr/articles/categories",{
              method:"GET"
              }).then((data)=>{
                data.json().then((json)=>{
                    resolve(json)
                })
             })
        })
    }

}
