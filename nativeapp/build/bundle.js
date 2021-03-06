/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@jeffriggle/ipc-bridge-client/build/main.js":
/*!******************************************************************!*\
  !*** ./node_modules/@jeffriggle/ipc-bridge-client/build/main.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("!function(e,t){if(true)module.exports=t();else { var r, n; }}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){\"undefined\"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:\"Module\"}),Object.defineProperty(e,\"__esModule\",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&\"object\"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,\"default\",{enumerable:!0,value:e}),2&t&&\"string\"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,\"a\",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p=\"\",n(n.s=1)}([function(e,t,n){\"use strict\";var r,i=\"object\"==typeof Reflect?Reflect:null,o=i&&\"function\"==typeof i.apply?i.apply:function(e,t,n){return Function.prototype.apply.call(e,t,n)};r=i&&\"function\"==typeof i.ownKeys?i.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var s=Number.isNaN||function(e){return e!=e};function u(){u.init.call(this)}e.exports=u,e.exports.once=function(e,t){return new Promise((function(n,r){function i(){void 0!==o&&e.removeListener(\"error\",o),n([].slice.call(arguments))}var o;\"error\"!==t&&(o=function(n){e.removeListener(t,i),r(n)},e.once(\"error\",o)),e.once(t,i)}))},u.EventEmitter=u,u.prototype._events=void 0,u.prototype._eventsCount=0,u.prototype._maxListeners=void 0;var a=10;function c(e){if(\"function\"!=typeof e)throw new TypeError('The \"listener\" argument must be of type Function. Received type '+typeof e)}function l(e){return void 0===e._maxListeners?u.defaultMaxListeners:e._maxListeners}function f(e,t,n,r){var i,o,s,u;if(c(n),void 0===(o=e._events)?(o=e._events=Object.create(null),e._eventsCount=0):(void 0!==o.newListener&&(e.emit(\"newListener\",t,n.listener?n.listener:n),o=e._events),s=o[t]),void 0===s)s=o[t]=n,++e._eventsCount;else if(\"function\"==typeof s?s=o[t]=r?[n,s]:[s,n]:r?s.unshift(n):s.push(n),(i=l(e))>0&&s.length>i&&!s.warned){s.warned=!0;var a=new Error(\"Possible EventEmitter memory leak detected. \"+s.length+\" \"+String(t)+\" listeners added. Use emitter.setMaxListeners() to increase limit\");a.name=\"MaxListenersExceededWarning\",a.emitter=e,a.type=t,a.count=s.length,u=a,console&&console.warn&&console.warn(u)}return e}function p(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function h(e,t,n){var r={fired:!1,wrapFn:void 0,target:e,type:t,listener:n},i=p.bind(r);return i.listener=n,r.wrapFn=i,i}function v(e,t,n){var r=e._events;if(void 0===r)return[];var i=r[t];return void 0===i?[]:\"function\"==typeof i?n?[i.listener||i]:[i]:n?function(e){for(var t=new Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}(i):y(i,i.length)}function d(e){var t=this._events;if(void 0!==t){var n=t[e];if(\"function\"==typeof n)return 1;if(void 0!==n)return n.length}return 0}function y(e,t){for(var n=new Array(t),r=0;r<t;++r)n[r]=e[r];return n}Object.defineProperty(u,\"defaultMaxListeners\",{enumerable:!0,get:function(){return a},set:function(e){if(\"number\"!=typeof e||e<0||s(e))throw new RangeError('The value of \"defaultMaxListeners\" is out of range. It must be a non-negative number. Received '+e+\".\");a=e}}),u.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},u.prototype.setMaxListeners=function(e){if(\"number\"!=typeof e||e<0||s(e))throw new RangeError('The value of \"n\" is out of range. It must be a non-negative number. Received '+e+\".\");return this._maxListeners=e,this},u.prototype.getMaxListeners=function(){return l(this)},u.prototype.emit=function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);var r=\"error\"===e,i=this._events;if(void 0!==i)r=r&&void 0===i.error;else if(!r)return!1;if(r){var s;if(t.length>0&&(s=t[0]),s instanceof Error)throw s;var u=new Error(\"Unhandled error.\"+(s?\" (\"+s.message+\")\":\"\"));throw u.context=s,u}var a=i[e];if(void 0===a)return!1;if(\"function\"==typeof a)o(a,this,t);else{var c=a.length,l=y(a,c);for(n=0;n<c;++n)o(l[n],this,t)}return!0},u.prototype.addListener=function(e,t){return f(this,e,t,!1)},u.prototype.on=u.prototype.addListener,u.prototype.prependListener=function(e,t){return f(this,e,t,!0)},u.prototype.once=function(e,t){return c(t),this.on(e,h(this,e,t)),this},u.prototype.prependOnceListener=function(e,t){return c(t),this.prependListener(e,h(this,e,t)),this},u.prototype.removeListener=function(e,t){var n,r,i,o,s;if(c(t),void 0===(r=this._events))return this;if(void 0===(n=r[e]))return this;if(n===t||n.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete r[e],r.removeListener&&this.emit(\"removeListener\",e,n.listener||t));else if(\"function\"!=typeof n){for(i=-1,o=n.length-1;o>=0;o--)if(n[o]===t||n[o].listener===t){s=n[o].listener,i=o;break}if(i<0)return this;0===i?n.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}(n,i),1===n.length&&(r[e]=n[0]),void 0!==r.removeListener&&this.emit(\"removeListener\",e,s||t)}return this},u.prototype.off=u.prototype.removeListener,u.prototype.removeAllListeners=function(e){var t,n,r;if(void 0===(n=this._events))return this;if(void 0===n.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete n[e]),this;if(0===arguments.length){var i,o=Object.keys(n);for(r=0;r<o.length;++r)\"removeListener\"!==(i=o[r])&&this.removeAllListeners(i);return this.removeAllListeners(\"removeListener\"),this._events=Object.create(null),this._eventsCount=0,this}if(\"function\"==typeof(t=n[e]))this.removeListener(e,t);else if(void 0!==t)for(r=t.length-1;r>=0;r--)this.removeListener(e,t[r]);return this},u.prototype.listeners=function(e){return v(this,e,!0)},u.prototype.rawListeners=function(e){return v(this,e,!1)},u.listenerCount=function(e,t){return\"function\"==typeof e.listenerCount?e.listenerCount(t):d.call(e,t)},u.prototype.listenerCount=d,u.prototype.eventNames=function(){return this._eventsCount>0?r(this._events):[]}},function(e,t,n){\"use strict\";n.r(t),n.d(t,\"client\",(function(){return o}));var r=n(0);class i extends r.EventEmitter{constructor(e){super(),this._cid=1,this._available=!1,this._subscriptions=new Map,this._ipcRenderer=e(),this.setupIPC()}setupIPC(){this._ipcRenderer&&this.setupIPCBridge(()=>{super.emit(this.availableChanged,!0)})}setupIPCBridge(e){this._ipcRenderer.on(\"heartbeat\",()=>{this._available=!0,e()}),this._ipcRenderer.send(\"healthcheck\")}handleEvent(e){return(t,n)=>{let r=this._subscriptions.get(e);r&&r.forEach(e=>{e(n)})}}get availableChanged(){return\"availableChanged\"}get available(){return this._available}sendMessage(e,t){return new Promise((n,r)=>{if(!this.available)return void r(\"IPC Service not available\");let i=this._cid++;const o=\"cid\"+i;this._ipcRenderer.on(o,(e,t)=>{this._ipcRenderer.removeAllListeners(o),n(t)}),this._ipcRenderer.send(\"request\",{id:e,data:t,correlationId:i})})}subscribeEvent(e,t){if(!this.available)return;let n=this._subscriptions.get(e);n?n.push(t):(this._ipcRenderer.on(e,this.handleEvent(e).bind(this)),this._subscriptions.set(e,[t])),this._ipcRenderer.send(\"subscribe\",e)}unsubcribeEvent(e,t){if(!this.available)return;let n=this._subscriptions.get(e);if(!n)return;let r=n.indexOf(t);-1!==r&&n.splice(r,1),0===n.length&&(this._subscriptions.delete(e),this._ipcRenderer.removeListener(e,t),this._ipcRenderer.send(\"unsubscribe\",e))}}const o=new i(()=>{let e;if(window.require){e=window.require(\"electron\").ipcRenderer}return e})}])}));\n\n//# sourceURL=webpack:///./node_modules/@jeffriggle/ipc-bridge-client/build/main.js?");

/***/ }),

/***/ "./node_modules/@jeffriggle/ipc-bridge-client/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@jeffriggle/ipc-bridge-client/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./build/main.js */ \"./node_modules/@jeffriggle/ipc-bridge-client/build/main.js\");\n\n//# sourceURL=webpack:///./node_modules/@jeffriggle/ipc-bridge-client/index.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const { client } = __webpack_require__(/*! @jeffriggle/ipc-bridge-client */ \"./node_modules/@jeffriggle/ipc-bridge-client/index.js\");\nlet chatArea, input, sendbutton;\n\nfunction setup() {\n    chatArea = document.createElement('div');\n    chatArea.style = 'display: flex; flex: 1 1 auto; flex-direction: column; border: 1px solid black;';\n    input = document.createElement('input');\n    input.style = 'flex: 1 1 auto';\n    sendbutton = document.createElement('button');\n    sendbutton.innerText = 'send message';\n    sendbutton.style = 'flex: 0 0 auto';\n    let disconnectFromServer = document.createElement('button');\n    disconnectFromServer.innerText = 'disconnect from server';\n    disconnectFromServer.style = 'flex: 0 0 auto';\n\n    let disconnectFromClient = document.createElement('button');\n    disconnectFromClient.innerText = 'disconnect';\n    disconnectFromClient.style = 'flex: 0 0 auto';\n\n    let reconnectButton = document.createElement('button');\n    reconnectButton.innerText = 'reconnect';\n    reconnectButton.style = 'flex: 0 0 auto';\n\n    let sendArea = document.createElement('div');\n    sendArea.style = 'flex: 0 0 auto; display: flex;';\n    sendArea.appendChild(input);\n    sendArea.appendChild(sendbutton);\n\n    let disconnectArea = document.createElement('div');\n    disconnectArea.style = 'flex: 0 0 auto; display: flex;';\n    disconnectArea.appendChild(disconnectFromServer);\n    disconnectArea.appendChild(disconnectFromClient);\n\n    sendbutton.onclick = () => {\n        client.sendMessage('sendChatMessage', input.value);\n        input.value = '';\n    }\n\n    disconnectFromClient.onclick = () => {\n        client.sendMessage('disconnect');\n    }\n\n    disconnectFromServer.onclick = () => {\n        client.sendMessage('disconnectServer');\n    }\n\n    reconnectButton.onclick = () => {\n        client.sendMessage('reconnect');\n    }\n\n    client.subscribeEvent('newMessage', (message) => {\n        message.items.forEach(message => {\n            const newMessage = document.createElement('div');\n            const timeStamp = document.createElement('span');\n            timeStamp.style = 'font-style: italic;';\n            const tstamp = new Date(message.time);\n            timeStamp.innerText = `${tstamp.toDateString()} - ${tstamp.toLocaleTimeString()}: `;\n            const msg = document.createElement('span');\n            msg.innerText = message.message;\n\n            newMessage.appendChild(timeStamp);\n            newMessage.appendChild(msg);\n            chatArea.appendChild(newMessage);\n        });\n    });\n\n    client.subscribeEvent('connectionState', (message) => {\n        if (message.connected) {\n            chatArea.disabled = false;\n            disconnectFromClient.disabled = false;\n            disconnectFromServer.disabled = false;\n            sendbutton.disabled = false;\n            input.disabled = false;\n            disconnectArea.removeChild(reconnectButton);\n            return;\n        }\n\n        chatArea.disabled = true;\n        disconnectFromClient.disabled = true;\n        disconnectFromServer.disabled = true;\n        sendbutton.disabled = true;\n        input.disabled = true;\n        disconnectArea.appendChild(reconnectButton);\n    });\n\n    const app = document.getElementById('app');\n    app.appendChild(chatArea);\n    app.appendChild(sendArea);\n    app.appendChild(disconnectArea);\n    input.focus();\n}\n\nif (client.available) {\n    setup();\n} else {\n    client.on(client.availableChanged, setup);\n}\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ })

/******/ });