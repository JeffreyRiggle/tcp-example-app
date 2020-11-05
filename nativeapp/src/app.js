const { client } = require('@jeffriggle/ipc-bridge-client');
let chatArea, input, sendbutton;

function setup() {
    chatArea = document.createElement('div');
    chatArea.style = 'display: flex; flex: 1 1 auto; flex-direction: column; border: 1px solid black;';
    input = document.createElement('input');
    input.style = 'flex: 1 1 auto';
    sendbutton = document.createElement('button');
    sendbutton.innerText = 'send message';
    sendbutton.style = 'flex: 0 0 auto';
    let disconnectFromServer = document.createElement('button');
    disconnectFromServer.innerText = 'disconnect from server';
    disconnectFromServer.style = 'flex: 0 0 auto';

    let disconnectFromClient = document.createElement('button');
    disconnectFromClient.innerText = 'disconnect';
    disconnectFromClient.style = 'flex: 0 0 auto';

    let reconnectButton = document.createElement('button');
    reconnectButton.innerText = 'reconnect';
    reconnectButton.style = 'flex: 0 0 auto';

    let sendArea = document.createElement('div');
    sendArea.style = 'flex: 0 0 auto; display: flex;';
    sendArea.appendChild(input);
    sendArea.appendChild(sendbutton);

    let disconnectArea = document.createElement('div');
    disconnectArea.style = 'flex: 0 0 auto; display: flex;';
    disconnectArea.appendChild(disconnectFromServer);
    disconnectArea.appendChild(disconnectFromClient);

    sendbutton.onclick = () => {
        client.sendMessage('sendChatMessage', input.value);
        input.value = '';
    }

    disconnectFromClient.onclick = () => {
        client.sendMessage('disconnect');
    }

    disconnectFromServer.onclick = () => {
        client.sendMessage('disconnectServer');
    }

    reconnectButton.onclick = () => {
        client.sendMessage('reconnect');
    }

    client.subscribeEvent('newMessage', (message) => {
        message.items.forEach(message => {
            const newMessage = document.createElement('div');
            const timeStamp = document.createElement('span');
            timeStamp.style = 'font-style: italic;';
            const tstamp = new Date(message.time);
            timeStamp.innerText = `${tstamp.toDateString()} - ${tstamp.toLocaleTimeString()}: `;
            const msg = document.createElement('span');
            msg.innerText = message.message;

            newMessage.appendChild(timeStamp);
            newMessage.appendChild(msg);
            chatArea.appendChild(newMessage);
        });
    });

    client.subscribeEvent('connectionState', (message) => {
        if (message.connected) {
            chatArea.disabled = false;
            disconnectFromClient.disabled = false;
            disconnectFromServer.disabled = false;
            sendbutton.disabled = false;
            input.disabled = false;
            disconnectArea.removeChild(reconnectButton);
            return;
        }

        chatArea.disabled = true;
        disconnectFromClient.disabled = true;
        disconnectFromServer.disabled = true;
        sendbutton.disabled = true;
        input.disabled = true;
        disconnectArea.appendChild(reconnectButton);
    });

    const app = document.getElementById('app');
    app.appendChild(chatArea);
    app.appendChild(sendArea);
    app.appendChild(disconnectArea);
    input.focus();
}

if (client.available) {
    setup();
} else {
    client.on(client.availableChanged, setup);
}