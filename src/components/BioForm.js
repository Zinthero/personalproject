import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { setBio } from  '../redux/reducer'

 class BioForm extends Component {
    constructor(){
        super()
        this.state={
           personalityTraits:'',
           background: '',
           mannersAppear:'',
           compantions: ''

        }
    }
    handleChange = e =>{
        let {name, value} = e.target

        this.setState({
            [name]: value
        })
    }

    handleClick=()=>{
        axios.post('/api/characters', this.state).then(response=> {
            this.props.setBio(response.data)
            this.setState({
                personalityTraits:'',
                background:'',
                mannersAppear:'',
                compantions:''
            })
        })
    }
  render() {
    return (
      <div>
        <input type="text" name="title" value={this.state.title} onChange={this.handleChange} placeholder="Personality Traits"/>
        <textarea name="personalityTraits" cols="30" rows="10" value={this.state.personalityTraits} onChange={this.handleChange}></textarea>
        <button onClick={this.handleClick}>submit</button>
      </div>
    )
  }
}

export default connect(null, {setBio})(BioForm)
