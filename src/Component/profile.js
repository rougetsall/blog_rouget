import React,{Component} from 'react'
import { resolve } from "path";
import '../App.css';
import { NavLink } from 'react-router-dom/cjs/react-router-dom';
import {BrowserRouter as Router,Route ,Link,Redirect} from 'react-router-dom';
import getProfile from "./getProfile"
export default class profile extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            firstname:'',
            id:'',
            lastname:'',
            birthdate:'',
           
           
            
            
        }
    }
       componentDidMount() {
        
           

        getProfile.getprofile(window.sessionStorage.getItem("token")).then((json)=>{

                    this.setState({
                        firstname: json.data.firstname
                        })
                    this.setState({
                        birthdate: json.data.birthdate
                        })
                    this.setState({
                        lastname: json.data.lastname
                        })
                    this.setState({
                        id: json.data.id
                        })
            
                
            
        });
       

    }

    
    
      
      
      

    render(){
       
        
        return(
            
           
                
                <div>
                    
                  <div className="article">
                  <br></br>
                  <button className="Poste_article">
                    <NavLink to={'/UpdateUsers'}>
                    Update User</NavLink>
                    </button>
                    <button className="Poste_article_1">
                    <NavLink to={'/UpdatePassword'}>
                    Update Password</NavLink>
                    </button>
                  <div className="titre_menu">  Id : {this.state.id}</div>
                  <div className="article_content">Firstname : {this.state.firstname} <br></br>
                  <br></br>Lastname : {this.state.lastname}
                  <br></br>
                  <br></br>Birthdate : {this.state.birthdate}</div>
                </div>
                )
                  </div>
                
            
          
        );
        
    }
  
    
}

