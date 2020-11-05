const { createServer } = require('net');
const { getChatMessages, addChatMessage } = require('./chat');

const server = createServer();

function createDataHandler(socket) {
    return function handleData(data) {
        console.log('Got data ', data);
        const type = data.readInt8();
        const message = data.toString('utf8', 1);

        let res;
    
        if (type === 1) {
            res = getChatMessages(0);
        }
    
        if (type === 2) {
            res = addChatMessage(message);
        }

        if (type === 3) {
            socket.destroy();
            return;
        }
    
        if (!res) {
            res = {
                error: `unknown message ${type}`
            };
        }

        socket.write(Buffer.from(JSON.stringify(res)))
    }
}


function handleClose() {
    console.log('Connection closed');
}

function handleError(err) {
    console.log('Got error ', err);
}

server.on('connection', (socket) => {
    console.log(`New connection from ${socket.remoteAddress} ${socket.remotePort}`);

    socket.on('data', createDataHandler(socket));
    socket.on('close', handleClose);
    socket.on('error', handleError);
});

server.listen(7000);