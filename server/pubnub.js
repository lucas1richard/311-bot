const Pubnub = require('pubnub');

const pubnub = new Pubnub({
  publishKey: 'pub-c-c04db793-7660-41f1-84b1-efbda3ef6938',
  subscribeKey: 'sub-c-1813c2b6-54ff-11e7-8ac6-0619f8945a4f'
});

pubnub.addListener({
  message(msg) {
    console.log('New message!', msg);
  },
  presence(presenceEvent) {
    // handle presence
  }
});

function publish(subject, message) {

  function publishSampleMessage() {

    const publishConfig = {
      channel: subject,
      message: `${subject} ---> ${message}`
    };

    pubnub.publish(publishConfig, (status, response) => {
      console.log(status, response);
    });

  }



  console.log('Subscribing..');
  pubnub.subscribe({
    channels: [subject]
  });
}

function emit(channel, update) {
  const publishConfig = {
    channel,
    message: update
  };

  pubnub.publish(publishConfig, (status, response) => {
    console.log(status, response);
  });
}

function subscribe(channels) {
  console.log(`Subscribing to `);
  pubnub.subscribe({
    channels
  });
}

module.exports = {
  publish,
  emit,
  subscribe
};

