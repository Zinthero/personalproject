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
      this.props.userLoggedIn(response.data)
    })
  }
  render() {
    let {atwill,encounter,daily,utility} = this.state.powers
    return (
      <div className="card card-body mb-3">

        <Header/>
      <h1>Character Abilities</h1>
        <div>
        <Link to="charactersheet"><button type="button" class="btn btn-light">Character Sheet</button></Link>
        <Link to="bio"><button type="button" class="btn btn-light">Bio</button></Link>
        <Link to="inventory"><button type="button" class="btn btn-light">Inventory</button></Link>
        </div>
        <h1>At Will Powers</h1>
        <textarea name="atwill" cols="30" rows="10" value={atwill} onChange={(e)=>this.handleChange(e.target.value,'atwill')}></textarea>
        <h1>Encounter Powers</h1>
        <textarea name="encounter" cols="30" rows="10" value={encounter} onChange={(e)=>this.handleChange(e.target.value,'encounter')}></textarea>
        <h1>Daily Powers</h1>
        <textarea name="daily" cols="30" rows="10" value={daily} onChange={(e)=>this.handleChange(e.target.value,'daily')}></textarea>
        <h1>Utility Powers</h1>
        <textarea name="utility" cols="30" rows="10" value={utility} onChange={(e)=>this.handleChange(e.target.value,'utility')}></textarea>
        <button type="button" class="btn btn-danger" onClick={this.addPowers}>Update</button>
        
      </div>
    )
  }
}
let mapStateToProps=(state)=>{
  return{character:state.user}
}
export default connect(mapStateToProps,{userLoggedIn})(Skills)