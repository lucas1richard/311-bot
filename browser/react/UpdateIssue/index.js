import React from 'react';
import { connect } from 'react-redux';

import { postUpdate } from '../../redux/reducers/channel';

class UpdateIssue extends React.Component {
  constructor() {
    super();
    this.state = {
      channel: '',
      update: ''
    };

    this.changeUpdateTxt = this.changeUpdateTxt.bind(this);
    this.changeChannelUUID = this.changeChannelUUID.bind(this);
    this.submitUpdate = this.submitUpdate.bind(this);

  }

  changeChannelUUID(ev) {
    this.setState({ channel: ev.target.value });
  }

  changeUpdateTxt(ev) {
    this.setState({ update: ev.target.value });
  }

  submitUpdate(ev) {
    ev.preventDefault();
    this.props.postUpdate(this.state.channel, this.state.update);
  }

  render() {
    return (
      <div className="container">
        <h2>Update an Issue</h2>
        <hr />
        <form onSubmit={ this.submitUpdate }>
          <div className="form-group">
            <label>Channel UUID:</label>
            <input
              type="text"
              className="form-control"
              value={ this.state.channel }
              onChange={ this.changeChannelUUID }
            />
          </div>
          <div className="form-group">
            <label>Issue Update:</label>
            <textarea
              type="text"
              value={ this.state.update }
              onChange={ this.changeUpdateTxt }
              cols={4}
              className="form-control"
            />
          </div>
          <button className="btn btn-primary">Submit Update</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  postUpdate: (subject, update) => dispatch(postUpdate(subject, update))
});

export default connect(null, mapDispatchToProps)(UpdateIssue);
