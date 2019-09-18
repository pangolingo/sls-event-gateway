## Testing websockets

Install `wscat` globally. Then run
```
wscat -c wss://XmskQsN2wDp7pqh7qf.execute-api.us-east-1.amazonaws.com/dev --slash
```

## Quick Serverless commands

`serverless info`: get info about the deployed service
`serverless deploy`: deploy the service via CloudFormation
`serverless remove`: tear down environment
`serverless logs -f connectionHandler`: show logs for this handler
`serverless logs -f defaultHandler`: show logs for this other handler

## Helpful Links
https://serverless.com/framework/docs/providers/aws/events/websocket/
http://en.oekaki.nl/paintchat.html
http://en.oekaki.nl/js/paintchat8o.js
https://github.com/serverless/serverless-websockets-plugin/tree/master/example
https://serverless.com/blog/api-gateway-websockets-example
https://serverless.com/blog/api-gateway-websockets-support/
