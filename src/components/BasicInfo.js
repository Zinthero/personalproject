import React, { Component } from 'react'
import CharacterSheet from './CharacterSheet'
import axios from 'axios'
import { connect } from 'react-redux';
import {userLoggedIn}from '../redux/reducer'


class BasicInfo extends Component {
    constructor(props){
        super(props)
        let { charactername, level, characterclass, paragon, destiny, race, size, age, gender, height, weight, alignment, diety, totalxp } =props.character
        this.state={
          basicInfo:{
            charactername,
            level,
            characterclass,
            paragon,
            destiny,
            totalxp,
            race,
            age, 
            gender, 
            height, 
            weight, 
            alignment, 
            diety
          }}}
          // componentDidMount(){
          //   let {basicInfo} = this.state
          //   axios.get('/api/characters').then(response=>{
          //     this.setState({
          //       basicInfo:response.data
          //     })
          //   })
          // }
          handleChange = (val, key) => {
            let charInfo = { ...this.state.basicInfo, [key]: val }
            this.setState({ basicInfo:charInfo })
          }
          addDetails = ()=> {
            axios.post('/api/characters/details',this.state.basicInfo)
            .then(response=>{
              let { charactername, level, characterclass, paragon, destiny, race, size, age, gender, height, weight, alignment, diety, totalxp } = response.data
              this.setState({
                charactername,
                level, 
                characterclass, 
                paragon, 
                destiny, 
                totalxp, 
                race, 
                age, 
                gender, 
                height, 
                weight, 
                alignment, 
                diety
              })
             this.props.userLoggedIn(response.data)
            }) 
          }
  render() {
    let { charactername, level, characterclass, paragon, destiny, race, size, age, gender, height, weight, alignment, diety, totalxp } = this.state.basicInfo
    return (
      
       
      <div className="card card-body mb-3">
   
        <h1> <i class="fas fa-user-circle"></i>Character</h1>
        <div><h5>Name:</h5><input value={charactername} onChange={(e)=>this.handleChange(e.target.value,'charactername')}/></div>
        <div><h5>Level:</h5><input value={level} onChange={(e)=>this.handleChange(e.target.value,'level')}/></div>
        <div><h5>Class:</h5><input value={characterclass} onChange={(e)=>this.handleChange(e.target.value,'characterclass')}/></div>
        <div><h5>Paragon:</h5><input value={paragon} onChange={(e)=>this.handleChange(e.target.value,'paragon')}/></div>
        <div><h5>Destiny:</h5><input value={destiny} onChange={(e)=>this.handleChange(e.target.value,'destiny')}/></div>
        <div><h5>XP:</h5><input value={totalxp} onChange={(e)=>this.handleChange(e.target.value,'totalxp')}/></div>
        <div><h5>Race:</h5><input value={race} onChange={(e)=>this.handleChange(e.target.value,'race')}/></div>
        <div><h5>Height:</h5><input value={height} onChange={(e)=>this.handleChange(e.target.value,'height')}/></div>
        <div><h5>Weight:</h5><input value={weight} onChange={(e)=>this.handleChange(e.target.value,'weight')}/></div>
        <div><h5>Alignment:</h5><input value={alignment} onChange={(e)=>this.handleChange(e.target.value,'alignment')}/></div>
        <div><h5>Diety:</h5><input value={diety} onChange={(e)=>this.handleChange(e.target.value,'diety')}/></div>
        <button type="button" class="btn btn-danger" onClick={this.addDetails}>Update</button>

      </div>
      
    )
  }
}
let mapStateToProps=(state)=>{
  return{character:state.user}
}
export default connect(mapStateToProps,{userLoggedIn})(BasicInfo)
