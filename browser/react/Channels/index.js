import React from 'react';
import { connect } from 'react-redux';


import { getChannels } from '../../redux/reducers/channel';


class Channels extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    getChannels();
  }
  render() {
    return null;
  }
}

const mapDispatchToProps = dispatch => ({
  getChannels: () => dispatch(getChannels()),
});

const mapStateToProps = (state) => {
  return (
    {
      channels: state.channels,
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(Channels);
