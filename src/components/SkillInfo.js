import React, { Component } from 'react'
import axios from 'axios'
import CharacterSheet from './CharacterSheet'
import {connect} from 'react-redux'
import {userLoggedIn}from '../redux/reducer'


 class SkillInfo extends Component {
    constructor(props){
        super(props)
        let {acrobatics, arcana, athletics, bluff, diplomacy, dungeoneering, endurance, heal, history, insight, intimidate, nature, perception, religion, stealth, streetwise, thievery}=props.character
        this.state={
            skills:{
                acrobatics,
                arcana,
                athletics,
                bluff,
                diplomacy,
                dungeoneering,
                endurance,
                heal,
                history,
                insight,
                intimidate,
                nature,
                perception,
                religion,
                stealth,
                streetwise,
                thievery
              }
        }
    }
    // componentDidMount(){
    //     let {skills} = this.state
    //     axios.get(`/api/characters/skills/`).then(response=>{
    //       console.log('skillz', response.data)
    //       this.setState({
    //         skills:response.data
    //       })
    //     })
    //   }
      handleChange = (val, key)=> {
          let skillInfo = { ...this.state.skills, [key]:val}
          this.setState({skills:skillInfo})
      }
      addSkills = () => {
        axios.post('/api/characters/skills',this.state.skills)
      .then(response=>{
        let {acrobatics, arcana, athletics, bluff, diplomacy, dungeoneering, endurance, heal, history, insight, intimidate, nature, perception, religion, stealth, streetwise, thievery}=response.data

        this.setState({
          acrobatics,
          arcana,
          athletics,
          bluff,
          diplomacy,
          dungeoneering,
          endurance,
          heal,
          history,
          insight,
          intimidate,
          nature,
          perception,
          religion,
          stealth,
          streetwise,
          thievery,
        })
        this.props.userLoggedIn(response.data)
        // console.log("skills",response.data)
      }) 

      }
  render() {
    let {acrobatics, arcana, athletics, bluff, diplomacy, dungeoneering, endurance, heal, history, insight, intimidate, nature, perception, religion, stealth, streetwise, thievery} = this.state.skills
   
    return (
      <div className="card card-body mb-3">
        <h1><i class="fas fa-street-view"></i>Skills</h1>
        <div><h5>Acrobatics:</h5><input value={acrobatics} onChange={(e)=>this.handleChange(e.target.value,'acrobatics')}/></div>
        <div><h5>Arcana:</h5><input value={arcana} onChange={(e)=>this.handleChange(e.target.value,'arcana')}/></div>
        <div><h5>Athletics:</h5><input value={athletics} onChange={(e)=>this.handleChange(e.target.value,'athletics')}/></div>
        <div><h5>Bluff:</h5><input value={bluff} onChange={(e)=>this.handleChange(e.target.value,'bluff')}/></div>
        <div><h5>Diplomacy:</h5><input value={diplomacy} onChange={(e)=>this.handleChange(e.target.value,'diplomacy')}/></div>
        <div><h5>Dungeoneering:</h5><input value={dungeoneering} onChange={(e)=>this.handleChange(e.target.value,'dungeoneering')}/></div>
        <div><h5>Endurance:</h5><input value={endurance} onChange={(e)=>this.handleChange(e.target.value,'endurance')}/></div>
        <div><h5>Heal:</h5><input value={heal} onChange={(e)=>this.handleChange(e.target.value,'heal')}/></div>
        <div><h5>History:</h5><input value={history} onChange={(e)=>this.handleChange(e.target.value,'history')}/></div>
        <div><h5>Insight:</h5><input value={insight} onChange={(e)=>this.handleChange(e.target.value,'insight')}/></div>
        <div><h5>Intimidate:</h5><input value={intimidate} onChange={(e)=>this.handleChange(e.target.value,'intimidate')}/></div>
        <div><h5>Nature:</h5><input value={nature} onChange={(e)=>this.handleChange(e.target.value,'nature')}/></div>
        <div><h5>Perception:</h5><input value={perception} onChange={(e)=>this.handleChange(e.target.value,'perception')}/></div>
        <div><h5>Religion:</h5><input value={religion} onChange={(e)=>this.handleChange(e.target.value,'religion')}/></div>
        <div><h5>Stealth:</h5><input value={stealth} onChange={(e)=>this.handleChange(e.target.value,'stealth')}/></div>
        <div><h5>Streetwise:</h5><input value={streetwise} onChange={(e)=>this.handleChange(e.target.value,'streetwise')}/></div>
        <div><h5>Thievery:</h5><input value={thievery} onChange={(e)=>this.handleChange(e.target.value,'thievery')}/></div>
        <button type="button" class="btn btn-danger" onClick={this.addSkills}>Update</button>
      </div>
    )
  }
}
let mapStateToProps=(state)=>{
return{character:state.user}
}
export default connect(mapStateToProps,{userLoggedIn})(SkillInfo)