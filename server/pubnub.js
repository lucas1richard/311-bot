const Pubnub = require( 'pubnub' );

function publish() {
  const pubnub = new Pubnub( {
    publishKey: 'pub-c-c04db793-7660-41f1-84b1-efbda3ef6938',
    subscribeKey: 'sub-c-1813c2b6-54ff-11e7-8ac6-0619f8945a4f'
  } );

  function publishSampleMessage() {

    const publishConfig = {
      channel: 'testname',
      message: 'Wello Horld blablablabla'
    };

    pubnub.publish( publishConfig, ( status, response ) => {
      console.log( status, response );
    } );

  }

  pubnub.addListener( {
    status( statusEvent ) {
      if ( statusEvent.category === 'PNConnectedCategory' ) {
        publishSampleMessage();
      }
    },
    message( msg ) {
      console.log( 'New message!', msg );
    },
    presence( presenceEvent ) {
      // handle presence
    }
  } );

  console.log( 'Subscribing..' );
  pubnub.subscribe( {
    channels: [ 'testname2' ]
  } );


}

module.exports = publish;
