import React, { Component } from 'react'
import Login from "./login"
import {Link} from 'react-router-dom'
import Header from './Header'
import { connect } from 'react-redux';

import {userLoggedIn} from '../redux/reducer';
import axios from 'axios'

class Skills extends Component {
  constructor(props){
    super(props)
    let {atwill, encounter, daily, utility} = props.character
    this.state = {
      powers:{
        atwill,
        encounter,
        daily,
        utility
      }
    }
  }

  handleChange = (val,key)=>{
    let powerInfo={...this.state.powers, [key]:val}
    this.setState({powers:powerInfo})
  }

  addPowers = ()=>{
    axios.post('/api/characters/powers', this.state.powers)
    .then(response=>{
      let { atwill, encounter, daily, utility} = response.data
      this.setState({
        atwill,
        encounter,
        daily,
        utility,
      })
      console.log(response.data)
      this.props.userLoggedIn(response.data)
      
    })
  }
  render() {
    let {atwill,encounter,daily,utility} = this.state.powers
    return (
       <div class="text-white bg-danger">
      <Header/>
      <h1>Character Abilities</h1>
        <div class="mt-5">
        <Link to="charactersheet"><button type="button" class="btn btn-dark mr-5">Character Sheet</button></Link>
        <Link to="bio"><button type="button" class="btn btn-dark mr-5">Bio</button></Link>
        <Link to="inventory"><button type="button" class="btn btn-dark mr-5">Inventory</button></Link>
        </div>
      <div className="card card-body mt-5 text-white bg-danger border-dark">
        <h1 class="mt-5 mb-2">At Will Powers</h1>
        <textarea class="mt-5 border-dark" name="atwill" cols="30" rows="10" value={atwill} onChange={(e)=>this.handleChange(e.target.value,'atwill')}></textarea>
        <h1 class="mt-5">Encounter Powers</h1>
        <textarea class="mt-5 border-dark" name="encounter" cols="30" rows="10" value={encounter} onChange={(e)=>this.handleChange(e.target.value,'encounter')}></textarea>
        <h1 class="mt-5">Daily Powers</h1>
        <textarea class="mt-5 border-dark" name="daily" cols="30" rows="10" value={daily} onChange={(e)=>this.handleChange(e.target.value,'daily')}></textarea>
        <h1 class="mt-5">Utility Powers</h1>
        <textarea class="mt-5 border-dark" name="utility" cols="30" rows="10" value={utility} onChange={(e)=>this.handleChange(e.target.value,'utility')}></textarea>
        <button type="button" class="btn btn-dark mt-5" onClick={this.addPowers}>Update</button>
        </div>
      </div>
    )
  }
}
let mapStateToProps=(state)=>{
  return{character:state.user}
}
export default connect(mapStateToProps,{userLoggedIn})(Skills)