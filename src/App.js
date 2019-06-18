import React, { Component } from 'react';

import './App.css';
import {BrowserRouter as Router,Route ,Redirect} from 'react-router-dom';
import Login from './Component/Login'
import NewUser from './Component/NewUsers'
import Article from './Component/article'
import uniteArticle from './Component/uniteArticle'
import PostArticle  from './Component/postArticle'
import header  from './Component/header'
import categorie  from './Component/categorieArticle'
import profile from './Component/profile'
import UpdateUsers from './Component/UpdateUser'
import UpdatePassword from './Component/UpdatePassword'

import 'bootstrap/dist/css/bootstrap.css';

//http://doc.blog.etherial.fr
class App extends Component {
   render(){
     return(
         <Router>
           <div>
           <Route path={'/*'} component={header}/>
           <Route path={'/NewUsers'} component={NewUser}/>
           <Route path={'/uniteArticle'} component={uniteArticle}/>
           <Route path={'/PostArticle'} component={PostArticle}/>
           <Route path={'/'} exact component={Article}/>
           <Route path={'/Login'}  component={Login}/>
           <Route path={'/categorie'}  component={categorie}/>
           <Route path={'/profile'}  component={profile}/>
           <Route path={'/UpdateUsers'}  component={UpdateUsers}/>
           <Route path={'/UpdatePassword'}  component={UpdatePassword}/>
           </div>
         </Router>
     );
   }
}
export default App;