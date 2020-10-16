const { app, BrowserWindow } = require('electron')
const { start, registerEvent, broadcast } = require('@jeffriggle/ipc-bridge-server')
const { Socket } = require('net')

function setupClient() {
    let connected = false;
    const client = new Socket()

    client.connect({ port: 7000, host: 'localhost' }, () => {
        connected = true;
    })

    client.on('data', (message) => {
        console.log(`Got data ${message}`)
        broadcast('newMessage', JSON.parse(message.toString()))
    })

    registerEvent('sendChatMessage', (event, message) => {
        const req = Buffer.alloc(message.length + 1);
        req.writeInt8(2, 0);
        req.write(message, 1);

        client.write(req)
    })

    registerEvent('newMessage', (event, message) => {
        const req = new Buffer.alloc(1);
        req.writeInt8(1);

        client.write(req)
    })

    start()
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