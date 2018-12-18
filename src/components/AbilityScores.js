import React, { Component } from 'react'
import axios from 'axios'
import CharacterSheet from './CharacterSheet'
import { connect } from 'react-redux';
import {userLoggedIn}from '../redux/reducer'


 class AbilityScores extends Component {
  constructor(props){
    super(props)
    let {strength, constitution, dexterity, intelligence, wisdom,charisma}= props.character
    this.state={
        strength, strengthMod:0,
        constitution, constitutionMod:0,
        dexterity, dexterityMod:0,
        intelligence, intelligenceMod:0,
        wisdom, wisdomMod:0,
        charisma, charismaMod:0
    }
  }

  handleChange = (val, key)=> {
    this.setState({[key]: val})
  }
  addAbilities = () => {
    axios.post('/api/characters/abilities',this.state)
    .then(response=>{
      let {strength, constitution, dexterity, intelligence, wisdom,charisma}=response.data
      this.setState({
        strength,
        constitution,
        dexterity,
        intelligence,
        wisdom,
        charisma
      })
      this.props.userLoggedIn(response.data)
      
    })
  }

render() {
    let {strength, constitution, dexterity, intelligence, wisdom,charisma}= this.state
    console.log(this.props.character)
    return (
        <div className="card card-body text-white bg-danger border-dark mb-3">
            <h1> <i class="fas fa-fist-raised"></i>Ability Scores</h1>
            <div><h5>Strength:</h5><input value={strength} onChange={(e)=>this.handleChange(e.target.value,'strength')}/>
            <p>mod:{mods(strength)}</p></div>
            <div><h5>Constitution:</h5><input value={constitution} onChange={(e)=>this.handleChange(e.target.value,'constitution')}/>
            <p>mod:{mods(constitution)}</p></div>
            <div><h5>Dexterity:</h5><input value={dexterity} onChange={(e)=>this.handleChange(e.target.value,'dexterity')}/>
            <p>mod:{mods(dexterity)}</p></div>
            <div><h5>Intelligence:</h5><input value={intelligence} onChange={(e)=>this.handleChange(e.target.value,'intelligence')}/>
            <p>mod:{mods(intelligence)}</p></div>
            <div><h5>Wisdom:</h5><input value={wisdom} onChange={(e)=>this.handleChange(e.target.value,'wisdom')}/>
            <p>mod:{mods(wisdom)}</p></div>
            <div><h5>Charisma:</h5><input value={charisma} onChange={(e)=>this.handleChange(e.target.value,'charisma')}/>
            <p>mod:{mods(charisma)}</p></div>
           
            <button type="button" class="btn btn-dark mt-5" data-toggle="tooltip"  data-placement="bottom" title="Update Ability Scores" onClick={this.addAbilities}>Update</button>
            
        </div>
    )
}
}
let mapStateToProps=(state)=>{
  return{character:state.user}
}
export default connect(mapStateToProps,{userLoggedIn})(AbilityScores)

function mods(type){
    return Math.floor((type-10)/2) || 0
}

