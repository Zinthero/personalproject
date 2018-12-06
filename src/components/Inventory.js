import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Header from './Header'
import Login from './login'
import {connect} from 'react-redux';
import {userLoggedIn} from '../redux/reducer';
import axios from 'axios'

class Inventory extends Component {
  constructor(props){
    super(props)
    let {armor, weapons, magicitems, otherequipment,misc, gold} = props.character
    this.state={
      inventory:{
      armor,
      weapons,
      magicitems,
      otherequipment,
      misc,
      gold
    }
    }
  }

  handleChange = (val,key)=>{
    let inventoryInfo = {...this.state.inventory, [key]:val}
    this.setState({inventory:inventoryInfo})
  }

  addInventory = ()=>{
    axios.post('/api/characters/inventory', this.state.inventory)
    .then(response=>{
      let {armor, weapons, magicitems, otherequipment, misc, gold} = response.data
      this.setState({
        armor,
        weapons,
        magicitems,
        otherequipment,
        misc,
        gold
      })
    })
  }

  render() {
    let {armor, weapons, magicitems, otherequipment, misc, gold} = this.state.inventory
    return (
      <div className="card card-body mb-3">
      <Header/>
      <h1>Inventory</h1>
      <div>
      <Link to="charactersheet"><button type="button" class="btn btn-light">Character Sheet</button></Link>
        <Link to="skills"><button type="button" class="btn btn-light">Skills</button></Link>
        <Link to="bio"><button type="button" class="btn btn-light">Bio</button></Link>
      </div>
        <div><h5>Gold:</h5><input value={gold} onChange={(e)=>this.handleChange(e.target.value,'gold')}/></div>
        <h1>Weapons</h1>
        <textarea name="weapons" cols="30" rows="10" value={weapons} onChange={(e)=>this.handleChange(e.target.value,'weapons')}></textarea>
        <h1>Armor</h1>
        <textarea name="armor" cols="30" rows="10" value={armor} onChange={(e)=>this.handleChange(e.target.value,'armor')}></textarea>
        <h1>Magic Items</h1>
        <textarea name="magicitems" cols="30" rows="10" value={magicitems} onChange={(e)=>this.handleChange(e.target.value,'magicitems')}></textarea>
        <h1>Other Equipment</h1>
        <textarea name="otherequipment" cols="30" rows="10" value={otherequipment} onChange={(e)=>this.handleChange(e.target.value,'otherequipment')}></textarea>
        <h1>Misc</h1>
        <textarea name="misc" cols="30" rows="10" value={misc} onChange={(e)=>this.handleChange(e.target.value,'misc')}></textarea>
        <button type="button" class="btn btn-danger" onClick={this.addInventory}>Update</button>
      </div>
    )
  }
}
let mapStateToProps=(state)=>{
  return{character:state.user}
}
export default connect(mapStateToProps,{userLoggedIn})(Inventory)