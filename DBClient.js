const AWS = require('aws-sdk');
const DDB = new AWS.DynamoDB.DocumentClient();

const db = {
  Table: process.env.DDB_TABLE,
  Primary: {
      Key: 'pk',
      Range: 'sk'
  },
  Connection: {
      Primary: {
          Key: 'pk',
          Range: 'sk'
      },
      Channels: {
          Index: 'reverse',
          Key: 'sk',
          Range: 'pk'
      },
      Prefix: 'CONNECTION|',
      Entity: 'CONNECTION'
  },
  Channel: {
      Primary: {
          Key: 'pk',
          Range: 'sk'
      },
      Connections: {
          Key: 'pk',
          Range: 'sk'
      },
      Messages: {
          Key: 'pk',
          Range: 'sk'
      },
      Prefix: 'CHANNEL|',
      Entity: 'CHANNEL'
  },
  Message: {
      Primary: {
          Key: 'pk',
          Range: 'sk'
      },
      Prefix: 'MESSAGE|',
      Entity: 'MESSAGE'
  }
}

class DBClient {
  constructor() {

  }

  async saveConnection(connection){}
  async removeConnection(connection){}
  async getConnections(){}
}