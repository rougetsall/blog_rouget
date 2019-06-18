import { resolve } from "path";

export default{
    posteMessaget(token,content,title,id){
        fetch("http://blog.etherial.fr/articles",{
        method:"POST",
        headers: {
          Authorization :"Bearer "+token,
          "Content-Type" : "application/json"
      },
      body:JSON.stringify({
        "title":title,
        "content":content,
        "article_category_id":id
       })
        })
    }
}