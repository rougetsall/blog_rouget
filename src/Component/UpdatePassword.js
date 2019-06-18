import React,{Component} from 'react'
import { resolve } from "path";
import '../App.css';
import { NavLink } from 'react-router-dom/cjs/react-router-dom';
import {BrowserRouter as Router,Route ,Link,Redirect} from 'react-router-dom';
export default class UpdatePassword extends Component {

    constructor(props) {
        super(props)
        this.state = {
            password_old: '',
            password_new: '',
            password_new_verif: '',
            redirect: false
            
        }
        this.password_oldChange = this.password_oldChange.bind(this);
        this.password_newChange = this.password_newChange.bind(this);
        this.password_new_verifChange = this.password_new_verifChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
  
    }
     password_oldChange(event) {
        this.setState({password_old: event.target.value});
      }
      password_newChange(event) {
        this.setState({password_new: event.target.value});
      }
      password_new_verifChange(event) {
        this.setState({password_new_verif: event.target.value});
      }
      

        handleSubmit(event){
          alert('les element :' + this.state.password_old+this.state.password_new+this.state.password_new_verif);
         event.preventDefault();
         
            fetch("http://blog.etherial.fr/users/me/password",{
            method:"PUT",
            headers: {
            "Authorization" :"Bearer "+window.sessionStorage.getItem("token"),
            "Content-Type" : "application/json"
            },
            body:JSON.stringify({
                    "password_old": this.state.password_old,
                    "password_new": this.state.password_new,
                    "password_new_verif":this.state.password_new_verif
                    
                })
            }).then((res) => {
                    
                    res.json().then((json) => {
                        alert(json.status)
                        if (json.status!=400) {
                            this.setState({
                                redirect: true
                                })
                          
                        }else{
                            alert("incorrect")
                        }
                    })
            })
        
        }
    

    render(){
        if (this.state.redirect===true) {
            return <Redirect to={'/profile'} />;
            
        }else{
            return(
                <div className="contenue" id="connect">
                
                    <form className="fomulair" onSubmit={this.handleSubmit}>
                    <h1 className="poste">UpdateUsers</h1>
                        <div>
                            <label htmlFor="password_old">
                            <input  type="password" name="password_old" value={this.state.password_old} onChange={this.password_oldChange} className="login"  size="35" required placeholder="password_old"/>
                            </label>
                        </div>
                        <div>
                            <label htmlFor="password_new">
                            <input  type="password"  name="password_new"  value={this.state.password_new} onChange={this.password_newChange} className="login"  size="35" required placeholder="password_new"/>
                            </label>
                        </div>
                        <div>
                            <label htmlFor="email">
                            <input  type="password" name="password_new_verif" value={this.state.password_new_verif} onChange={this.password_new_verifChange} className="login"  size="35" required placeholder="password_new_verif"/>
                            </label>
                        </div>
                        
                        <div>
                            <input type="submit"  className="connexion" id="inscription" size="35" value="Submit" />
                        </div>
                        
                    </form>
                    
                </div>
                
            );
        }
    }
 
    
}
