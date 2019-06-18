import React,{Component} from 'react'
import '../App.css';
import { NavLink } from 'react-router-dom/cjs/react-router-dom';
import {BrowserRouter as Router,Route ,Link,Redirect} from 'react-router-dom';
export default class Login extends Component {


    constructor(props) {
        super(props)
        this.state = {
           
            email: '',
            password: '',
            redirect: false,
            jsonn:''
        }
        
        this.emailChange = this.emailChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
       }

       emailChange(event) {
        this.setState({email: event.target.value});
      }
      passwordChange(event) {
        this.setState({password: event.target.value});
      }

       

      handleSubmit(event) {
        event.preventDefault();
                return new Promise((resolve)=> {
                    fetch("http://blog.etherial.fr/auth",{
                        method:"POST",
                        headers: {"Content-Type" : "application/json" },
                        body:JSON.stringify({
                        "email":this.state.email,
                        "password":this.state.password
                    })
                        }).then((res) => {
                    
                                res.json().then((json) => {
                                    if (json.status==200) {
                                        
                                        resolve(json.data.token)
                                        
                                    }else{
                                        resolve('email invalide')
                                    }
                                })
                        })
                }).then((json)=>{
                
                
                this.setState({
                    jsonn: json
                    })
              if (json!=null && json!="email invalide") {
                window.sessionStorage.setItem("token",this.state.jsonn)
                alert(this.state.jsonn)
                this.setState({
                    redirect: true
                    })
              
              }else{
                  alert("email ou password")
              }
            
          })   
        }



    render(){
       
        if (this.state.redirect===true) {
            return <Redirect to={'/'} />;
            
        }else{
        return(
            
            <div className="contenue" id="connect">
           
                
                <form className="fomulair" onSubmit={this.handleSubmit}>
                <h1 className="poste">Connexion </h1>
                    <div>
                       
                        <input  type="text"  name="email" value={this.state.email} onChange={this.emailChange} className="login"  size="35" required placeholder="login"/>
                        
                    </div>
                    <div>
                        
                         <input type="password" className="password" name="password" value={this.state.password} onChange={this.passwordChange}   size="35" required placeholder="Mot de passe" />
                        
                    </div>
                    <div>
                        <input type="submit"  name="connexion" className="connexion" id="connexion" size="35" value="Submit" />
                    </div>
                </form>
              
            </div>
            
        );
        }
    }
    
}
