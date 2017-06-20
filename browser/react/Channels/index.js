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

    const { channels } = this.props;

    if (!channels) return null;

    console.log('channel', channels);

    return (
      <div>
        {channels.map(channel => <li>{channel.uuid}</li>)}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getChannels: () => dispatch(getChannels()),
});

const mapStateToProps = (state) => {
  return (
    {
      channels: state.channel,
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(Channels);
