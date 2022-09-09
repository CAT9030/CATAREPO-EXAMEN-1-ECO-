const express = require('express');
const { Server } = require('socket.io');
const PORT = 5050;

const app = express();
const httpServer = app.listen(PORT, () => {
    console.table(
        {
            'Controller:' : 'http://localhost:5050/controller',
            'Display:' : 'http://localhost:5050/display',
        }
    )
});
const ioServer = new Server(httpServer, { path: '/real-time' });

//const staticController = express.static('public-controller');
//const staticDisplay = express.static('public-display');

app.use('/controller', express.static('public-controller'));
app.use('/display', express.static('public-display'));
app.use(express.json());

/*___________________________________________

1) Create an endpoint to GET a validation message to test if the endpoint is working
_____________________________________________ */
const GET_MESSAGE_ENDPOINT = https: //${window.location.hostname}:5050
async function callSnakeDetail(snakeKey) {
const query = await fetch(GET_MESSAGE_ENDPOINT);
const data = await query.json();
const { name, score } = data;
selectedSnake = { name, score }
}

/*___________________________________________

2) Create the socket methods to listen the events and emit a response
It should listen for directions and emit the incoming data.
_____________________________________________ */

ioServer.on('connection', (socket) => {
    if(directions&& userEmail){
        directions = 'direccion'
        socket.emit('mobile-screen', {
        screen: 'direccion uwu'
    })
    socket.emit('mobile-userInfo',{
        name: userName,
        email: userEmail,
    })
}
console.log(userDireccion, userName)

});

/*___________________________________________

3) Create an endpoint to POST user score and print it
_____________________________________________ */

let newLead = {
name: 'David',
score: '30'
};
const ADD_LEAD_ENDPOINT = `http://${window.location.hostname}:5050`
async function sendLead(newLead) {
const postRequest = {
method: 'POST',
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify(newLead)
}
const request = await fetch(ADD_LEAD_ENDPOINT, postRequest);
}