const { app, BrowserWindow } = require('electron')
const { start, registerEvent, broadcast } = require('@jeffriggle/ipc-bridge-server')
const { Socket } = require('net')

function createClient() {
  console.log('Creating client');
  const client = new Socket()

  client.connect({ port: 7000, host: 'localhost' });

  client.on('connect', () => {
    console.log('Client has connected');
    broadcast('connectionState', {
      connected: true
    });
  });

  client.on('close', () => {
    console.log('Connection has been closed');
    broadcast('connectionState', {
      connected: false
    });
  });

  client.on('data', (message) => {
    console.log(`Got data ${message}`);
    broadcast('newMessage', JSON.parse(message.toString()));
  });

  return client;
}

function setupClient() {
  let client = createClient();
  registerEvent('sendChatMessage', (event, message) => {
    const req = Buffer.alloc(message.length + 1);
    req.writeInt8(2, 0);
    req.write(message, 1);

    client.write(req);
  });

  registerEvent('newMessage', (event, message) => {
    const req = new Buffer.alloc(1);
    req.writeInt8(1);

    client.write(req);
  });

  registerEvent('disconnect', (event, message) => {
    console.log('disconnecting from the client');
    client.destroy();
  });

  registerEvent('disconnectServer', (event, message) => {
    console.log('Got disconnect from server request');
    const req = new Buffer.alloc(1);
    req.writeInt8(3);

    client.write(req);
  });

  registerEvent('reconnect', () => {
    console.log('Reconnecting');
    client = createClient();
  });

  start();
}

function createWindow () {
  const win = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadFile('build/index.html')
  setupClient()
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})