import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import axios from 'axios'
import { browserHistory } from 'react-router'
import  { Button, Dropdown, NavItem, Row, Input, Icon } from 'react-materialize'

axios.defaults.headers.common['AUTHORIZATION'] = sessionStorage.getItem('jwt')

class CommuteCreate extends Component {
  constructor(){
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      stations: [],
      time: ''
    }
  }

  handleSubmit(event){
    event.preventDefault()
    let new_commute = {nickname: this.refs.nickname.state.value,
      origin_id: this.refs.origin_station.state.value,
      destination_id: this.refs.destination_station.state.value,
      time: this.refs.time.state.value}
      console.log(new_commute)

    axios.post(`http://metromeet.herokuapp.com//v1/commutes`, new_commute ).then(
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
      <div className='whitebg'>
        <form onSubmit={this.handleSubmit}>
          <h3> Add a New Commute </h3> <br/>
          {/* <p> Commute Name </p> */}
          <Row>
            <Input s={8} label='Commute Name' type="text" ref='nickname' placeholder="Add a public nickname"><Icon>stars</Icon></Input>
          </Row>
          <Row>
            <Input value={this.state.time} s={12} ref='time' type='select' label="Departure Time (+/- 15 minutes)" onChange={} defaultValue='07:00'>
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

          {/* <p> Origin Line </p> */}
        <Row>
          <Input s={12} ref='line' type='select' label='Origin Line' onChange={this.fetchStations.bind(this)}>
            {this.lines().map( (line, i) => {return <option value={line} key={i}>{line}</option>} )}
          </Input>
        </Row>

        <Row>
          <Input s={12} ref='origin_station' type='select' label='Origin Station'>
            {this.state.stations.map( (station, i) => {return <option value={station.id} key={i}>{station.name} </option>} )}
          </Input>
        </Row>

        <Row>
          <Input s={12} ref='destination_station' type='select' label='Destination Station'>
            {this.state.stations.map( (station, i) => {return <option value={station.id} key={i}>{station.name}</option>} )}
          </Input>
        </Row>

          <Button className="btn deep-orange darken-3" type="submit">Submit</Button><br/>
        </form>
      <br/>
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
