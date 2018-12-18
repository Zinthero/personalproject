import React, { Component } from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

import {userLoggedIn} from '../redux/reducer'

class Register extends Component {
  constructor(){
    super()
    this.state={
      name:'',
      email:'',
      password:'',
      error:''
    }
  }

  handleChange=e=>{
    let {name, value} = e.target
    this.setState({
      [name]:value
    })
  }

  handleClick = () => {
    axios.post('/auth/register', this.state).then(response => {
      let user = response.data
      this.props.userLoggedIn(user)
    }).catch(err=>{
      console.log(err.response)
      console.log(err.response.data)
      this.setState({
        error: err.response.data
      })
    })
  }
  render() {
    return this.props.isAuthenticated ?
    <Redirect to="/"/>: 
      <div class="d-flex justify-content-end">
        <h1 class="mr-3 my-sm-3">Registration:</h1>
        <input
        class="my-sm-4"
        type="text"
        name="email"
        placeholder="email"
        value={this.state.email}
        onChange={this.handleChange}/>
        <input
        class="my-sm-4 ml-2"
        type="password"
        name="password"
        placeholder="password"
        value={this.state.password}
        onChange={this.handleChange}/>
        <button className= "btn btn-outline-light my-2 my-sm-4 ml-3" onClick={this.handleClick}>Submit</button>
        {this.state.error}

      </div>
  }
}

function mapStateToProps(state){
  let {isAuthenticated}=state
  return{
    isAuthenticated
  }
}
export default connect(mapStateToProps, {userLoggedIn})(Register)
  

