import React, { Component } from 'react';
import './App.css';
import './style.css';
import {Switch, Route} from 'react-router-dom'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'


//componnets
import CharacterSheet from './components/CharacterSheet'
import Bio from './components/Bio'
import Inventory from './components/Inventory'
import Skills from './components/Skills'
import Login from './components/login'
import Register from './components/Register'


class App extends Component {
  render() {
    return (
      <div className="App">
      
      <Switch>
        <Route exact path ='/' component={Login}/>
        <Route path="/register" component={Register}/>
        <Route path ="/bio" component={Bio}/>
        <Route exact path ="/skills" component = {Skills}/>
        <Route path ="/inventory"component= {Inventory}/>
        <Route path ="/charactersheet" component = {CharacterSheet}/>
      </Switch>
    <Register/>
   
    
      </div>
    );
  }
}

export default App;
