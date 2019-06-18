import React,{Component} from 'react'
import '../App.css';
import { NavLink } from 'react-router-dom/cjs/react-router-dom';
import getUnite from './unite'

export default class uniteArticle extends Component {
    
    Changetoken(){
        window.sessionStorage.removeItem("token");
        window.sessionStorage.clear();
    }

    render(){
         if ( window.sessionStorage.getItem("token")!=null) {
            return(
            
                <body>
                   
                   <div className="headers">
                       <h1>Bienvenue</h1>
                       <p></p>
                       <p></p>
                       <button className="Poste_article">
                       <NavLink to={'/'}>
                       Article</NavLink> 
                       </button>
                       <button className="Poste_article">
                        <NavLink to={'/categorie'}>
                        Categorie Article</NavLink>
                        </button>
                       <button className="Poste_article">
                       <NavLink to={'/PostArticle'}>
                       Poste Article</NavLink>
                       </button>
                       <button className="Poste_article">
                       <NavLink to={'/profile'}>
                       Mon Profile</NavLink>
                       </button>
                      
                       <button className="Poste_article"
                       onClick={()=>{
                        this.Changetoken()
                      }}>
                       <NavLink to={'/Login'} >
                       deconnexion</NavLink>
                       </button>
                   </div>
              </body>
                    
                      
            );
         }else{
        return(
            
         <body>
            
            <div className="headers">
                <h1>Bienvenue</h1>
                <p></p>
                <p></p>
                <button className="Poste_article">
                <NavLink to={'/'}>
                Article</NavLink> 
                </button>
                <button className="Poste_article">
                <NavLink to={'/categorie'}>
                Categorie Article</NavLink>
                </button>
                <button className="Poste_article">
                <NavLink to={'/Login'}>
                Connexion</NavLink>
                </button>
                <button className="Poste_article">
                <NavLink to={'/NewUsers'}>
                Inscription</NavLink>
                </button>
            </div>
       </body>
             
               
     );}
    }
  
    
}

