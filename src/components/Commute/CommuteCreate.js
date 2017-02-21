import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import axios from 'axios'
import { browserHistory } from 'react-router'
import  { Button, Dropdown, NavItem } from 'react-materialize'

axios.defaults.headers.common['AUTHORIZATION'] = sessionStorage.getItem('jwt')

class CommuteCreate extends Component {
  constructor(){
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      stations: []
    }
  }

  handleSubmit(event){
    event.preventDefault()
    let new_commute = {nickname: this.refs.nickname.value,
      origin_id: this.refs.origin_station.value,
      destination_id: this.refs.destination_station.value,
      time: this.refs.time.value}

    axios.post(`http://localhost:3000/v1/commutes`, new_commute ).then(
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
    axios.get(`http://localhost:3000/v1/stations/?line=${event.target.value}`).then(
      (response) => { this.setState({stations: response.data}) }
    )
  }

  render(){
    console.log(this.state.stations);
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <h3> Make a new commute </h3> <br/>
          <p> Commute Name </p>
          <input type="text" ref='nickname' placeholder="Add a nickname"/>
          <Dropdown trigger={
            <Button >Departure Time</Button>
          }>
          <NavItem value="07:00">07:00</NavItem>
          <NavItem value="07:30">07:30</NavItem>
          <NavItem value="08:00">08:00</NavItem>
          <NavItem value="08:30">08:30</NavItem>
          <NavItem value="09:00">09:00</NavItem>
          <NavItem value="09:30">09:30</NavItem>
          <NavItem value="17:00">17:00</NavItem>
          <NavItem value="17:30">17:30</NavItem>
          <NavItem value="18:00">18:00</NavItem>
          <NavItem value="18:30">18:30</NavItem>
          <NavItem value="19:00">19:00</NavItem>
          <NavItem value="19:30">19:30</NavItem>
        </Dropdown>

          <p> Origin Line </p>
          <select ref="line" onChange={this.fetchStations.bind(this)}>
            {this.lines().map( (line, i) => {return <option value={line} key={i}>{line}</option>} )}
          </select>

          <p> Origin Station </p>
          <select ref="origin_station">
            {this.state.stations.map( (station, i) => {return <option value={station.id} key={i}>{station.name} </option>} )}
          </select>

          <p> Destination Station </p>
          <select ref="destination_station">
            {this.state.stations.map( (station, i) => {return <option value={station.id} key={i}>{station.name}</option>} )}
          </select> <br/>

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
