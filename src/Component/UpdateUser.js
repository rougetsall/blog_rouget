import React,{Component} from 'react'
import { resolve } from "path";
import '../App.css';
import { NavLink } from 'react-router-dom/cjs/react-router-dom';
import {BrowserRouter as Router,Route ,Link,Redirect} from 'react-router-dom';
export default class UpdateUsers extends Component {

    constructor(props) {
        super(props)
        this.state = {
            firstname: '',
            lastname: '',
            birthdate: '',
            redirect: false
            
        }
        this.firstnameChange = this.firstnameChange.bind(this);
        this.lastnameChange = this.lastnameChange.bind(this);
        this.birthdateChange = this.birthdateChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
  
    }
     firstnameChange(event) {
        this.setState({firstname: event.target.value});
      }
      lastnameChange(event) {
        this.setState({lastname: event.target.value});
      }
      birthdateChange(event) {
        this.setState({birthdate: event.target.value});
      }
      

        handleSubmit(event){
         event.preventDefault();
         
            fetch("http://blog.etherial.fr/users/me",{
            method:"PUT",
            headers: {
            "Authorization" :"Bearer "+window.sessionStorage.getItem("token"),
            "Content-Type" : "application/json"
            },
            body:JSON.stringify({
                    "firstname": this.state.firstname,
                    "lastname": this.state.lastname,
                    "birthdate":this.state.birthdate
                    
                })
            }).then((res) => {
                    
                    res.json().then((json) => {
                       
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
                            <input  type="date" name="birthdate" value={this.state.birthdate} onChange={this.birthdateChange} className="login"  size="35" required placeholder="birthdate"/>
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
