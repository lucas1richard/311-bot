import React from 'react';
import { connect } from 'react-redux';


import { getChannels } from '../../redux/reducers/channel';


class Channels extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getChannels();
  }

  componentWillReceiveProps(newProps) {
    console.log(newProps.subscribed);
  }

  render() {
    const { channels, subscribed } = this.props;

    if (!channels) return null;
    console.log(subscribed);

    return (
      <div className="row">
        <div className="col-md-6">
          <h3>All Channels</h3>
          {channels.map(channel => <li>{ channel.subject || 'No subject' }</li>)}
        </div>
        <div className="col-md-6">
          <h3>Subscribed Channels</h3>
          {subscribed.map(channel => <li>{ channel.subject || 'No subject' }</li>)}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getChannels: () => dispatch(getChannels()),
});

const mapStateToProps = ({ channel }) => ({
  channels: channel.localChannels,
  subscribed: channel.subscribedChannels
});

export default connect(mapStateToProps, mapDispatchToProps)(Channels);
