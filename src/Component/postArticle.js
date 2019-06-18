import React,{Component} from 'react'
import { resolve } from "path";
import '../App.css';
import { NavLink } from 'react-router-dom/cjs/react-router-dom';
import {BrowserRouter as Router,Route ,Link,Redirect} from 'react-router-dom';

export default class postArticle extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            tocke: '',
            title: '',
            content: '',
            id: '',
            redirect: false
        }
        
    }

    componentDidMount() {
        this.titreChange = this.titreChange.bind(this);
        this.contentChange = this.contentChange.bind(this);
        this.idChange = this.idChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.setState({
            tocke: window.sessionStorage.getItem("token")
        })
    }
    
      titreChange(event) {
        this.setState({title: event.target.value});
      }
      contentChange(event) {
        this.setState({content: event.target.value});
      }
      idChange(event) {
        this.setState({id: event.target.value});
      }
      handleSubmit(event) {
        event.preventDefault();

                fetch("http://blog.etherial.fr/articles",{
                method:"POST",
                headers: {
                Authorization :"Bearer "+this.state.tocke,
                "Content-Type" : "application/json"
                  },body:JSON.stringify({
                    "title":this.state.title,
                    "content":this.state.content,
                    "article_category_id":this.state.id
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
            return <Redirect to={'/'} />;
            
        }else{
        
        return(
            
            <div>
                
               
                <form className="fomulaire" onSubmit={this.handleSubmit}>
                 <h1 className="poste">Poste Un Article </h1>
                  <input type="text"  name="title" value={this.state.title} onChange={this.titreChange} size="35" placeholder="titre"/>
                 
                  <input type="text"  name="id" value={this.state.id} onChange={this.idChange} size="35"  placeholder="id" />

                 

                    <br></br>
                    <textarea placeholder="content"  name="content" value={this.state.content} onChange={this.contentChange}   rows="10" cols="100" ></textarea>
                    <input type="submit"  name="submit" className="connexion" id="connexion" size="35" value="Submit" />
                </form>
                
            </div>
          
        );
        }
    }
  
    
}

