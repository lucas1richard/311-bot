import React from 'react';
import { connect } from 'react-redux';
import Channels from '../Channels';

import { makeChannel } from '../../redux/reducers/channel';

class PubForm extends React.Component {
  constructor() {
    super();
    this.state = {
      subject: '',
      message: '',
      description: '',
      lat: 0,
      long: 0
    };
    this.changeSubject = this.changeSubject.bind(this);
    this.changeDescription = this.changeDescription.bind(this);
    this.changeMessage = this.changeMessage.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  getPosition() {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  }

  showPosition(position) {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    return { lat: lat, long: long };
  }


  changeSubject(ev) {
    this.setState({ subject: ev.target.value });
    this.getPosition()
      .then((coordinates) => console.log('geo=> ', this.showPosition(coordinates)));
  }

  changeDescription(ev) {
    this.setState({ description: ev.target.value });
  }

  changeMessage(ev) {
    this.setState({ message: ev.target.value });
  }

  submitForm(ev) {
    ev.preventDefault();
    this.getPosition()
      .then(coordinates => {
        this.setState(this.showPosition(coordinates), () => {
          this.props.submitChannel(this.state);
        });
      });
  }

  render() {
    return (
      <div className="container">
        <Channels />
        <h1>Pub Form</h1>
        <form onSubmit={this.submitForm}>
          <div className="form-group">
            <label>Subject</label>
            <input
              type="text"
              value={this.state.subject}
              onChange={this.changeSubject}
              className="form-control"
            />
          </div>
          {/*<div className="form-group">
            <label>Description</label>
            <input
              type="text"
              value={this.state.description}
              onChange={this.changeDescription}
              className="form-control"
            />
          </div>*/}
          <div className="form-group">
            <label>Message</label>
            <textarea
              value={this.state.description}
              onChange={this.changeDescription}
              rows={4}
              className="form-control"
            />
          </div>
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  submitChannel: channelInfo => dispatch(makeChannel(channelInfo))
});

export default connect(null, mapDispatchToProps)(PubForm);
