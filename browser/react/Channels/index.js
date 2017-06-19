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
  render() {
    if (!this.props.channels) return null;

    return (
      <div>
        { this.props.channels.map(channel => <div key={channel.uuid}>{JSON.stringify(channel)}</div>) }
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getChannels: () => dispatch(getChannels()),
});

const mapStateToProps = ({ channels }) => ({
  channels
});

export default connect(mapStateToProps, mapDispatchToProps)(Channels);
