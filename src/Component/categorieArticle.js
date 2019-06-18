import React,{Component} from 'react'
import '../App.css';
import { NavLink } from 'react-router-dom/cjs/react-router-dom';
import getarticle from './getArticle'

export default class categorieArticle extends Component {
    
    constructor(props) {
        
        super(props)
        
            this.state = {
                article:[]
                
               }
        
        
        getarticle.getCategories().then((json)=>{
            
            this.setState({
                article: json.data
                })
            
        });
       
        
    
    }
        
        

    render(){
        
        return(
            
            <div>{this.state.article.reverse().map((articles) => {
                return(
                  <div className="article">
                  <div className="titre_menu">  Id : {articles.id} <br></br> Name : {articles.name} </div>
                </div>
                )
            })} </div>
           
          
        );
    }
  
    
}

