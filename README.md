# tcp-example-app
Example TCP application used for a blog post. This is very similar to https://github.com/JeffreyRiggle/udp-example-app but uses TCP instead of UDP.

# Architecture
Server <-> Electron App <-> Browser page.

## Server
The server is a simple UDP server that takes messages in a JSON format and stores those messages.

## Electron App
Communicates with the server and passes messages to and from the browser page.

## Browser Page
Sends messages and displays existing messages.

# Requirements
* nodejs

# Run example
In one shell navigate to `./server` and run `npm run start`
In another shell navigate to `./nativeapp` and run `npm run dev`