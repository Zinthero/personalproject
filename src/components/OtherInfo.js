import React, { Component } from 'react'
import CharacterSheet from './CharacterSheet'
import axios from 'axios'
import { connect } from 'react-redux'
import {userLoggedIn}from '../redux/reducer'

class OtherInfo extends Component {
    constructor(props){
        super(props)
        let{ initiative, health, ac, fort, reflexes, will, speed}=props.character
        this.state = {
            otherInfo:{
                initiative,
                health,
                ac,
                fort,
                reflexes,
                will,
                speed
            }
        }
    }
    handleChange=(val,key)=>{
        let otterInfo = {...this.state.otherInfo, [key]:val}
        this.setState({otherInfo:otterInfo})
    }
    addOther = () =>{
        axios.post('/api/characters/other',this.state.otherInfo)
        .then(response=>{
            let {initiative,health,ac,fort,reflexes,will,speed}= response.data
            this.setState({
                initiative,
                health,
                ac,
                fort,
                reflexes,
                will,
                speed
            })
            this.props.userLoggedIn(response.data)
        })
    }
  render() {
      let {initiative,health,ac,fort,reflexes,will,speed}=this.state.otherInfo
    return (
      <div className="card card-body mb-3">
      <h1><i class="fas fa-crown"></i>Defenses</h1>
      <div><h5>Initiative:</h5><input value={initiative} onChange={(e)=>this.handleChange(e.target.value,'initiative')}/></div>
        <div><h5>Health:</h5><input value={health} onChange={(e)=>this.handleChange(e.target.value,'health')}/></div>
        <div><h5>Armor Class:</h5><input value={ac} onChange={(e)=>this.handleChange(e.target.value,'ac')}/></div>
        <div><h5>Fortitude:</h5><input value={fort} onChange={(e)=>this.handleChange(e.target.value,'fort')}/></div>
        <div><h5>Reflexes:</h5><input value={reflexes} onChange={(e)=>this.handleChange(e.target.value,'reflexes')}/></div>
        <div><h5>Will:</h5><input value={will} onChange={(e)=>this.handleChange(e.target.value,'will')}/></div>
        <div><h5>Speed:</h5><input value={speed} onChange={(e)=>this.handleChange(e.target.value,'speed')}/></div>
        <button type="button" class="btn btn-danger" onClick={this.addOther}>Update</button>
        
      </div>
    )
  }
}
let mapStateToProps=(state)=>{
    return{character:state.user}
}
export default connect(mapStateToProps,{userLoggedIn})(OtherInfo)