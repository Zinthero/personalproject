import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {Switch, Route} from 'react-router-dom'
import CharacterSheet from './CharacterSheet'
import Login from "./login"

import {userLoggedIn} from '../redux/reducer';
import Header from './Header'



 class Bio extends Component {
  constructor(props){
    super(props)
    let {personalitytraits, background, mannersappear, compantions}= props.character
    this.state = {
    bio:{
      personalitytraits,
      background,
      mannersappear, //manners/apperance
      compantions, //fucked up spelling companions
    }
    }
  }

  // componentDidMount(){
  //   let {id}=this.props.match.params
  //   axios.get(`/api/character/${id}`).then(response=>{
  //     this.setState({
  //       bio:response.data
  //     })
  //   })
  // }

  handleChange = (val, key) =>{
    let bioInfo= {...this.state.bio, [key]:val }
    this.setState({bio:bioInfo})
  }

  addBio = ()=>{
    axios.post('/api/characters/bio', this.state.bio)
    .then(response=>{
      let {personalitytraits, background, mannersappear,compantions} = response.data

      this.setState({
        personalitytraits,
        background,
        mannersappear,
        compantions
      })
      this.props.userLoggedIn(response.data)
      
    })
  }
  render() {
    let {personalitytraits, background, mannersappear,compantions} = this.state.bio
    return (
      <div class="text-white bg-danger"> 
      <Header/>
        <h1>
        Bio
        </h1>
        <div class="mt-5">
        <Link to="charactersheet"><button type="button" class="btn btn-dark mr-5">Character Sheet</button></Link>
        <Link to="skills"><button type="button" class="btn btn-dark mr-5">Skills</button></Link>
        <Link to="inventory"><button type="button" class="btn btn-dark mr-5">Inventory</button></Link>
        </div>
      <div className="card card-body mt-5 text-white bg-danger border-dark">
        
        <h1 class="mt-5">Personality Traits</h1>
        <textarea class="mt-5 border-dark" name="personalityTraits" cols="30" rows="10" value={personalitytraits} onChange={(e)=>this.handleChange(e.target.value,'personalitytraits')}></textarea>
        <h1 class="mt-5">Background</h1>
        <textarea class="mt-5 border-dark" name="background" cols="30" rows="10" value={background} onChange={(e)=>this.handleChange(e.target.value,'background')}></textarea>
        <h1 class="mt-5">Mannerisms/Apperance</h1>
        <textarea class="mt-5 border-dark" name="mannersappear" cols="30" rows="10" value={mannersappear} onChange={(e)=>this.handleChange(e.target.value,'mannersappear')}></textarea>
        <h1 class="mt-5">Companions</h1>
        <textarea class="mt-5 border-dark" name="compantions" cols="30" rows="10" value={compantions} onChange={(e)=>this.handleChange(e.target.value,'compantions')}></textarea>
        <button type="button" class="btn btn-dark mt-5" onClick={this.addBio}>Update</button>
        
      </div>
      </div>
    )
  }
}
let mapStateToProps=(state)=>{
  return{character:state.user}
}
export default connect(mapStateToProps,{userLoggedIn})(Bio)