import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {Switch, Route} from 'react-router-dom'
import CharacterSheet from './CharacterSheet'
import Login from "./login"

import {userLoggedIn} from '../redux/reducer';
import Header from './Header'
import BioForm from './BioForm'


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
      <div className="card card-body mb-3">
        <Header/>
        <h1>
        Bio
        </h1>
        <div>
        <Link to="charactersheet"><button type="button" class="btn btn-light">Character Sheet</button></Link>
        <Link to="skills"><button type="button" class="btn btn-light">Skills</button></Link>
        <Link to="inventory"><button type="button" class="btn btn-light">Inventory</button></Link>
        </div>
        <h1>Personality Traits</h1>
        <textarea name="personalityTraits" cols="30" rows="10" value={personalitytraits} onChange={(e)=>this.handleChange(e.target.value,'personalitytraits')}></textarea>
        <h1>Background</h1>
        <textarea name="background" cols="30" rows="10" value={background} onChange={(e)=>this.handleChange(e.target.value,'background')}></textarea>
        <h1>Mannerisms/Apperance</h1>
        <textarea name="mannersappear" cols="30" rows="10" value={mannersappear} onChange={(e)=>this.handleChange(e.target.value,'mannersappear')}></textarea>
        <h1>Companions</h1>
        <textarea name="compantions" cols="30" rows="10" value={compantions} onChange={(e)=>this.handleChange(e.target.value,'compantions')}></textarea>
        <button type="button" class="btn btn-danger" onClick={this.addBio}>Update</button>
      </div>
    )
  }
}
let mapStateToProps=(state)=>{
  return{character:state.user}
}
export default connect(mapStateToProps,{userLoggedIn})(Bio)