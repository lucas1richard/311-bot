const PubNub = require('pubnub');

function publish2() {

  const pubnub = new PubNub({
    publishKey: 'pub-c-c04db793-7660-41f1-84b1-efbda3ef6938',
    subscribeKey: 'sub-c-1813c2b6-54ff-11e7-8ac6-0619f8945a4f'
  });

  var arrChannels = ['channel1', 'channel2', 'channel3', 'channel4'];




  function publishChannel(channelName) {
    const publishConfig = {
      uuid: 'uuid',
      channel: channelName,
      message: 'testing 123'
    };

    pubnub.publish(publishConfig, (status, response) => {
      console.log(status, response);
    });
  }

 arrChannels.forEach(channelName => {
   publishChannel(channelName);
 });

/*
    pubnub.addListener({
      status(statusEvent) {
        if (statusEvent.category === 'PNConnectedCategory') {
          publishChannel(channelName);
        }
      },
      message(msg) {
        console.log('New message!', msg);

      },
      presence(presenceEvent) {
        // handle presence
      }
    });
*/
  console.log('Subscribing to all channels...');

  pubnub.subscribe({
    channel: arrChannels,
    channelGroups: ['cg1'],
  });

  // Get all the channels
  pubnub.hereNow(
    {
      includeUUIDs: true,
      includeState: true,
    },
    function (status, response) {
      // handle status, response
      console.log('hereNow', response);
    }
  );

  pubnub.whereNow({
    uuid: 'uuid',
  }).then((response) => {
    console.log('whereNow', response);
  }).catch((error) => {
    console.log(error);
  });



}

module.exports = publish2;
