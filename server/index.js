const WebSocket = require('ws')


// the following starts up the websocket server
const wss = new WebSocket.Server({ 
	port: 8082
})


// Now we listen for an event where a new client has connected to our server, e.g. when a web browser access this app's 
// homepage. 
// There are lots of event-types available, but in this example we're using the event type "connection"
wss.on('connection', ws => {
	console.log("This callback runs when the 'connection' event is triggered")
	//console.log(ws)

	ws.on("close"), () => {
		console.log("client has disconnnected")
	}
})


// the "ws" parameter is the websocket's session object. I.e. it refers to a single connection to the server side. This 
// helps this app keep track when you have multiple web browsers or tabs (clients) accessing this app at once. 


