import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import request from 'superagent'
import axios from 'axios'
import { uploadPicture } from '../../actions/index'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {Link} from 'react-router'
import {Button} from 'react-materialize'
// import { Link } from 'react-router'
// import { fetchProfile } from '../../actions'
// import _ from 'lodash'
const CLOUD_NAME = 'n1aizojg';
const CLOUD_URL = 'https://api.cloudinary.com/v1_1/djlbddlel/image/upload';

class ProfilePicture extends Component {

  onImageDrop(files){
    let pic = files[0]
    var xhr = new XMLHttpRequest();
    xhr.open('POST', CLOUD_URL, true);
    xhr.onload = () => {
      var data = JSON.parse(xhr.response)
      var pic_url = data.secure_url
      this.props.uploadPicture(pic_url, parseInt(sessionStorage.id))
    }
    var formData = new FormData();
    formData.append('file', pic);
    formData.append('upload_preset', CLOUD_NAME);

    xhr.send(formData);
  }

  render(){
    return(
      <div>
        <div className='whitebg'>
          <h2> Upload a profile picture! </h2>
          <Dropzone multiple={false} accept="image/*" onDrop={this.onImageDrop.bind(this)}>
            <p> Drop an image here or click to select a file from your computer! </p>
          </Dropzone> <br/>
          <Link to={`/commute/new`}><Button className='btn amber darken-4'> Skip for now </Button></Link>

        </div>

        <div className='whitebg'>
          {this.props.userPicture === '' ? null :
          <div>
            This is the image you uploaded: <br/>
            <img src={this.props.userPicture} />
          </div>}
        </div>
      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({uploadPicture}, dispatch)
}

function mapStateToProps(state){

  return {
    userPicture: state.userPicture
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePicture)
