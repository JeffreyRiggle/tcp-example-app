const { createServer } = require('net');

const server = createServer();

function handleData(data) {
    console.log('Got data ', data);
}

function handleClose() {
    console.log('Connection closed');
}

function handleError(err) {
    console.log('Got error ', err);
}

server.on('connection', (socket) => {
    console.log(`New connection from ${socket.remoteAddress} ${socket.remotePort}`);

    socket.on('data', handleData);
    socket.on('close', handleClose);
    socket.on('error', handleError);
});

server.listen(7000);