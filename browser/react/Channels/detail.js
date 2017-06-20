import React from 'react';
import {browserHistory} from 'react-router';
import Pubnub from 'pubnub';
import { connect } from 'react-redux';

import { addMessage } from '../../redux/reducers/message';


class ChannelDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    let _props = this.props;

    const pubnub = new Pubnub({
      publishKey: 'pub-c-c04db793-7660-41f1-84b1-efbda3ef6938',
      subscribeKey: 'sub-c-1813c2b6-54ff-11e7-8ac6-0619f8945a4f'
    });

    console.log('bh', this.props.params.subject);

    console.log('Subscribing..');
    pubnub.subscribe({
      channels: [_props.params.subject]
    });

    function publishSampleMessage() {

      const publishConfig = {
        channel: _props.params.subject,
        message: `User connecting to channel`
      };

      pubnub.publish(publishConfig, (status, response) => {
        console.log(status, response);
      });
    }

    pubnub.addListener({
      status(statusEvent) {
        if (statusEvent.category === 'PNConnectedCategory') {
          publishSampleMessage();
        }
      },
      message(msg) {
        console.log('New message!', msg);
        _props.addMessage(msg.message);
      },
      presence(presenceEvent) {
        // handle presence
      }
    });
  }


  render() {
    const { messages } = this.props;
    if (!messages) return null;
    return (
      <div className="row">
        <h4>Channel {this.props.params.subject}</h4>
        {messages.map(msg => <li>{msg}</li>)}
      </div>
    );
  }

}

const mapDispatchToProps = dispatch => ({
  addMessage: (text) => dispatch(addMessage(text)),
});

const mapStateToProps = ({ message }) => ({
  messages: message.messages,
});

export default connect(mapStateToProps, mapDispatchToProps)(ChannelDetail);

