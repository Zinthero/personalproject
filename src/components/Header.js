import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Link } from 'react-router-dom'
import {userLoggedOut} from '../redux/reducer'
import axios from 'axios'
import Register from './Register'

 class Header extends Component {

  logout = () => {
    axios.get('/auth/logout').then(response => {
      this.props.userLoggedOut()
     
    })
  }
  render() {
    return (
      <div >
        <header className= "navbar navbar-expand-sm navbar-dark bg-dark mb-5 py-0 d-flex justify-content-between text-white  " > <h1><i class="fab fa-d-and-d ml-10"></i></h1><h1>Tabletop Pro</h1>
        {this.props.isAuthenticated ?
        <button className= "btn btn-outline-light my-2 my-sm-0 mr-5" onClick={this.logout}><Link to ="/">Logout</Link></button>:
        <button className= "btn btn-outline-light my-2 my-sm-0 mr-5">
          <Link to ="/">login</Link>
          </button>}
        </header>
      </div>
    )
  }
}

function mapStateToProps(state){
  let {isAuthenticated} = state
  return {
    isAuthenticated
  }
}

export default connect(mapStateToProps, {userLoggedOut})(Header)
