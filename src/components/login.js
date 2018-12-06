import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {Switch, Route} from 'react-router-dom'
import {Redirect} from 'react-router-dom'
import {userLoggedIn} from '../redux/reducer'


//components 
import CharacterSheet from './CharacterSheet'
import Bio from './Bio'
import Inventory from './Inventory'
import Skills from './Skills'



class Login extends Component {
  constructor(){
    super()
    this.state = {
      email: '',
      password: '',
      error:''
    }
  }

  handleChange = e => {
    let {name, value} = e.target

    this.setState({
      [name]: value
    })
  }

  handleClick=()=>{
    axios.post('/auth/login', this.state).then(response=>{
      console.log(response.data)
      let user = response.data
      this.props.userLoggedIn(user)
    }).catch(err=>{
      console.log(err.response)
      this.setState({
        error:err.response.data
      })
    })
  }
  render() {
    
    return this.props.isAuthenticated?
    <Redirect to="charactersheet"/> :
      
      
      <div>  
          <header className= "navbar navbar-expand-sm navbar-dark bg-danger mb-0 py-0   " > <h1><i class="fab fa-d-and-d ml-10"></i></h1><h1>Tabletop Pro</h1>
          <input
          type="text"
          name="email"
          placeholder="email"
          value={this.state.email}
          onChange={this.handleChange}/>
          <input
          type= "password"
          name="password"
          placeholder="password"
          value={this.state.password}
          onChange={this.handleChange}/>
          
          <button class="btn btn-outline-dark my-2 my-sm-0 " onClick={this.handleClick}>Login</button>
          {this.state.error}
       
          </header>
      </div>
    
  }
}

function mapStateToProps(state){
  let {isAuthenticated} = state
  return {
    isAuthenticated
  }
 
}

export default connect(mapStateToProps, {userLoggedIn})(Login)
