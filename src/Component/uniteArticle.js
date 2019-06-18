import React,{Component} from 'react'
import '../App.css';
import { NavLink } from 'react-router-dom/cjs/react-router-dom';
import getUnite from './unite'

export default class uniteArticle extends Component {
    
    constructor(props) {
       
        super(props)
     
            this.state = {
                title:'',
                content:'',
                name:''
               }
               
               
            getUnite.getUnite(window.sessionStorage.getItem("id")).then((json)=>{
            
                this.setState({
                    title: json.data.title
                    })
                this.setState({
                    content: json.data.content
                    })
                this.setState({
                    name: json.data.User.firstname
                    })
                
            });
  
    }
    
        
    
    

    render(){
        
        return(
            
       
            <div>
                
                  <div className="article">
                  <div className="titre_menu">  Titre : <button className="titre">{this.state.title}</button></div>
                  <div className="article_content">{this.state.content}
                  <br></br><br></br>By {this.state.name}</div>

                </div>
                
             </div>
           
          
        );
    }
  
    
}

