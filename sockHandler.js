'use strict';
const ws = require("./WSClient");

let wsClient;
const getWSClient = function(event){
  return wsClient || new ws.Client(event);
}

const success = {
  statusCode: 200
};

module.exports.connectionHandler = async (event, context) => {
  if (event.requestContext.eventType === "CONNECT") {
    console.log('connecting...', event)
    // getWSClient(event).send(event, {
    //   event: 'connecting',
    //   message: "hmm"
    // })
    // getWSClient(event).send(event, {
    //   event: 'channel_message',
    //   channelId: 'whatever ID',
    //   name: 'my name',
    //   content: 'some content'
    // })
    // TODO: send image data to client
    // TODO: add connection to DB
    // TODO: send the user back their connection ID
    return success;
  } else if (event.requestContext.eventType === "DISCONNECT") {
    // console.log('disconnecting...', event)
    // TODO: remove connection from DB
    return success;
  }
};

module.exports.defaultHandler = async (event) => {
  // TODO
  // console.log('default handling...', event)
  // getWSClient(event).send(event, {
  //   event: 'default_handling',
  //   message: `repeat to you: ${JSON.stringify(event.body)}`
  // })
  // TODO: send client ID and draw data to ALL users
  return success;
};

module.exports.actionHandler = async (event) => {
  // TODO: do we need this?
  console.log('action handling...', event)
  
  return success;
};
