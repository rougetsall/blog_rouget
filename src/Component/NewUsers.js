import React,{Component} from 'react'
import { resolve } from "path";
import '../App.css';
import { NavLink } from 'react-router-dom/cjs/react-router-dom';
import {BrowserRouter as Router,Route ,Link,Redirect} from 'react-router-dom';
export default class NewUsers extends Component {

    constructor(props) {
        super(props)
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            password_verif:'',
            redirect: false
        }
        this.firstnameChange = this.firstnameChange.bind(this);
        this.lastnameChange = this.lastnameChange.bind(this);
        this.emailChange = this.emailChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
        this.password_verifChange = this.password_verifChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
  
    }
     firstnameChange(event) {
        this.setState({firstname: event.target.value});
      }
      lastnameChange(event) {
        this.setState({lastname: event.target.value});
      }
      emailChange(event) {
        this.setState({email: event.target.value});
      }
      passwordChange(event) {
        this.setState({password: event.target.value});
      }
      password_verifChange(event) {
        this.setState({password_verif: event.target.value});
      }

        handleSubmit(event){
          //alert('les element :' + this.state.firstname+this.state.lastname+this.state.email+this.state.password);
         event.preventDefault();
         
            fetch("http://blog.etherial.fr/users",{
            method:"POST",
            headers: {
            "Content-Type" : "application/json"
            },
            body:JSON.stringify({
                    "firstname": this.state.firstname,
                    "lastname": this.state.lastname,
                    "email":this.state.email,
                    "password":this.state.password,
                    "password_verif":this.state.password_verif
                })
            }).then((res) => {
                    
                    res.json().then((json) => {
                        alert(json.status)
                        if (json.status!=400) {
                            this.setState({
                                redirect: true
                                })
                          
                        }else{
                            alert("email ou password incorrect")
                        }
                    })
            })
        
        }
    

    render(){
        if (this.state.redirect===true) {
            return <Redirect to={'/Article'} />;
            
        }else{
            return(
                <div className="contenue" id="connect">
                
                    <form className="fomulair" onSubmit={this.handleSubmit}>
                    <h1 className="poste">Inscription</h1>
                        <div>
                            <label htmlFor="firstname">
                            <input  type="text" name="firstname" value={this.state.firstname} onChange={this.firstnameChange} className="login"  size="35" required placeholder="firstname"/>
                            </label>
                        </div>
                        <div>
                            <label htmlFor="lastname">
                            <input  type="text"  name="lastname"  value={this.state.lastname} onChange={this.lastnameChange} className="login"  size="35" required placeholder="lastname"/>
                            </label>
                        </div>
                        <div>
                            <label htmlFor="email">
                            <input  type="email" name="email" value={this.state.email} onChange={this.emailChange} className="login"  size="35" required placeholder="email"/>
                            </label>
                        </div>
                        
                        <div>
                            <label htmlFor="password">
                            <input type="password"  name="password" className="password" value={this.state.password} onChange={this.passwordChange}  size="35" required placeholder="password" />
                            </label>
                        </div>
                        <div>
                            <label htmlFor="password_verif">
                            <input type="password"  name="password_verif" className="password" value={this.state.password_verif} onChange={this.password_verifChange}   size="35" required placeholder="password_verif" />
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
