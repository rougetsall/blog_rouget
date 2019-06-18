import React,{Component} from 'react'
import '../App.css';
import { NavLink } from 'react-router-dom/cjs/react-router-dom';
import getarticle from './getArticle'

export default class article extends Component {
    
    constructor(props) {
       
        super(props)
        
            this.state = {
                article:[],
                 tocke: '',
                 id:0
               }
        
        this.setState({
            tocke: "moi"
            })
        getarticle.getArticls().then((json)=>{
            
            this.setState({
                article: json.data
                })
            
        });
       
        
    
    }
        ChangeId(id){
            window.sessionStorage.setItem("id",id);
            
        }
        
        

    render(){
        
        return(
            
            <div>{this.state.article.reverse().map((articles) => {
                return(
                  <div className="article">
                  <div className="titre_menu">  Titre : <NavLink to={'/uniteArticle'}><button className="titre"
                  onClick={()=>{
                    this.ChangeId(articles.id)
                  }
                      
                    } >{articles.title}</button></NavLink></div>
                  <div className="article_content">{articles.content} <br></br><br></br>{articles.User.firstname}</div>
                </div>
                )
            })} </div>
           
          
        );
    }
  
    
}

