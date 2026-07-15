Nodejs vs JavaScript 
javaScript - Prgramming Language 
Nodejs - Runtime evnironment - to run javascript we need nodejs engine that's why we need to install nodejs
Nodejs is async (non-blocking)

## Event-driven-architecture 
nodejs server is based on event-driven-architecture, When we hit any endpoint it gave us response.
eg: api request-response

## Browser-apis
we cannot use localstorage, setTimeout, mouseEvent, keyboardevent etc inside nodejs, because these are browser apis

## HTTP -> hyper text transfer protocol 
Nodejs provide us http module -> http help us to create server -> mostly we use http module 
to access file system we use fs in nodejs -> eg:  to store error log we use fs -> file system
crypto - to encrypt or decrypt data
os - to know about computer



## JavaScript vs Node.js
            JavaScript	                                                       Node.js
JavaScript is a programming language.	                    Node.js is a JavaScript runtime environment.
Used to write logic.	                                    Used to run JavaScript outside the browser.
Mainly used for frontend (can also run in Node.js).	        Mainly used for backend development.
Cannot directly access the file system.	                    Can access the file system using the fs module.
Cannot create a web server by itself.	                    Can create web servers.
Runs in browsers and Node.js.   	                        Runs outside the browser.
Standard language features only.	                        Provides additional APIs like fs, http, path, os, etc.

## task: event loop nodejs
Event loop in Nodejs manages async operation. 
JavaScript is single-threaded. Time-consuming operations like databases, files, timers etc take time to complete. Instead of blocking JavaScript, these tasks are handed over to Node.js APIs. As nodejs is async and non-blocking.
While those operations are running, JavaScript continues executing the remaining code.
when those operations are completed like timers completed their callbacks are placed into the queue
The Event Loop continuously checks the Call Stack. If the Call Stack is empty, it takes the next callback from the queue and pushes it onto the Call Stack for execution.

## creating server in nodejs

1. npm init -y -> to initialize nodejs project with boilerplate, without -y we need to provide everything like filename, type etc

## why there is package.json in every project?
project info | dependency - third party library - project is dependent on which library | dev-dependency is there in package.json -> whatever things | library used by this particular application

## task: import vs require
require belongs to Commonjs module system and import belongs to ESM i.e ES module system
require is used in traditional nodejs, while import is used in mordern javascript
Many existing nodejs application still use require for compatibility
require works with module.exports while import used with export default
require loads modules synchronously, whereas import is statically analyzed and supports features like tree shaking and dynamic imports.

syntax : 
import: import add from "./math.js"; & export default add;
require: const add = require("./math"); & module.exports = add;

