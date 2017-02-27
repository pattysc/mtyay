import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import axios from 'axios'
import { browserHistory } from 'react-router'
import  { Button, Dropdown, NavItem, Row, Input } from 'react-materialize'

axios.defaults.headers.common['AUTHORIZATION'] = sessionStorage.getItem('jwt')

class CommuteCreate extends Component {
  constructor(){
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      stations: [],
      time: '',
      origin_station: '',
      destination_station: ''
        }
  }

  handleSubmit(event){
    event.preventDefault()
    let new_commute = {nickname: this.refs.nickname.value,
      origin_id: this.state.origin_station,
      destination_id: this.state.destination_station,
      time: this.state.time}
      console.log(new_commute);

    axios.post(`https://metromeet.herokuapp.com/v1/commutes`, new_commute ).then(
      (response) => {
        // Add a "flash message" here that invites user to
        // create another commute OR skip ahead to see matches :)
        browserHistory.push('/commute')

      })
  }

  lines(){
    return [' ', 'A', 'B', 'C', 'D', 'E', 'F',
    'G', 'J', 'L', 'M', 'N', 'Q', 'R',
    'S', 'W', '1', '2', '3', '4', '5', '6', '7']
  }

  fetchStations(event){
    axios.get(`https://metromeet.herokuapp.com/v1/stations/?line=${event.target.value}`).then(
      (response) => { this.setState({stations: response.data}) }
    )
  }

  timeChange(event){
    this.setState({
      time: event.target.value
    })
  }

  originChange(event){
    this.setState({
      origin_station: event.target.value

    })
  }

  destinationChange(event){
    this.setState({
      destination_station: event.target.value

    })
  }

  render(){
    console.log(this.state.stations);
    return(
      <div className="whitebg">
        <form onSubmit={this.handleSubmit}>
          <h3> Make a new commute </h3> <br/>
          <p> Commute Name </p>
          <input type="text" ref="nickname" placeholder="Add a nickname"/>
          <Row>
          <Input s={12} type='select' onChange={this.timeChange.bind(this)} label="Departure Time (+/- 15 minutes)">
            <option value="07:00">07:00</option>
            <option value="07:30">07:30</option>
            <option value="08:00">08:00</option>
            <option value="08:30">08:30</option>
            <option value="09:00">09:00</option>
            <option value="09:30">09:30</option>
            <option value="17:00">17:00</option>
            <option value="17:30">17:30</option>
            <option value="18:00">18:00</option>
            <option value="18:30">18:30</option>
            <option value="19:00">19:00</option>
            <option value="19:30">19:30</option>
          </Input>
        </Row>

          <p> Origin Line </p>
          <Input select ref="line" type="select" onChange={this.fetchStations.bind(this)}>
            {this.lines().map( (line, i) => {return <option value={line} key={i}>{line}</option>} )}
          </Input>

          <p> Origin Station </p>
          <Input type="select" onChange={this.originChange.bind(this)} ref="origin_station">
            {this.state.stations.map( (station, i) => {return <option value={station.id} key={i}>{station.name} </option>} )}
          </Input>

          <p> Destination Station </p>
          <Input type="select" onChange={this.destinationChange.bind(this)} ref="destination_station">
            {this.state.stations.map( (station, i) => {return <option value={station.id} key={i}>{station.name}</option>} )}
          </Input> <br/>

          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({}, dispatch)
}

function mapStateToProps(state){

  return {
    user: state.user,
    profile: state.profile
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommuteCreate)
