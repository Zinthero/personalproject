import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Switch, Route} from 'react-router-dom'
import {Link} from 'react-router-dom'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'



//components
import Bio from "./Bio"
import Inventory from "./Inventory"
import Skills from "./Skills"
import BasicInfo from "./BasicInfo"
import AbilityScores from "./AbilityScores"
import SkillInfo from "./SkillInfo"
import Login from "./login"
import Header from './Header'
import OtherInfo from './OtherInfo'


export default class CharacterSheet extends Component {
  constructor(){
    super()
    this.state={
      totalInitiative:{
        initiative:0
      },
      hitPoints:{
        maxHp:0,
        bloodied:0,
        surgeValue:0,
        surgesADay:0
      },
      movement:{
        speed:0
      },
      senses:{
        passiveInsight:0,
        passivePerception:0
      },
      yourFeatures:{
        feature:{
          featureName:"",
          featureAbility:""
        },
        raceFeature:{
          raceName:"",
          raceAbility:""
        }
      },
      languages:{
        knownLanguages:""
      }
    }
  }

  componentDidMount(){
    axios.get('/api/loginCheck').then(res=>{
      if(!res.data){
          this.props.history.push('/')
      }
  })
  }
deleteCharacter(){
  axios.get(`/api/characters/${this.state.character.id}`).then(res=>{
    
  })
}

 

  render() {
    console.log(11111)
    return (
      <div class="text-white bg-danger">
          <Header/>
        <h1> Character Sheet</h1>
        <div class="mt-5" >
        <Link to="bio"><button type="button" class="btn btn-dark mr-5">Bio</button></Link>
        <Link to="skills"><button type="button" class="btn btn-dark mr-5">Skills</button></Link>
        <Link to="inventory"><button type="button" class="btn btn-dark mr-5">Inventory</button></Link>
        </div>
        <div className="container mt-5">
        <li class="d-inline-flex p-10 m-40 "> 
        <BasicInfo/>
        <OtherInfo/>
        <AbilityScores/>
        <SkillInfo/>
        </li>
       
        </div>
      
        </div>
    )
  }
}

