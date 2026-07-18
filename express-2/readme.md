## middleware
act as middlemen between request and response

jaha humara logic hota hai use handler kehte hai -> server.get

client request => middleware => route handler => client response

inbuilt middleware -> cors, express.json -> json.parse, url parse : express.url something
custom middleware -> error handling, authentication, validation


## task : custom and inbuild middleware examples and encode decode url , express middleware and how they work, excecution order

Middleware is a function that runs between the request coming from the client and the response being sent back to the client.

when any request comes to the express server, it passes through one or more middleware before reaching to the route handler

syntax: 

function middleware(req, res, next){
    //logic
    
    next()  //most imp
}

here : req -> contains all info about incoming req
res: sends the response
next: its used to tell express that, I'm done. Move to the next middleware or route.

Without calling next(), Express stops there.

if we do not call next() browser will keeps on loading forever until we call next() or res.send(), because express is waiting for this.

in-built middleware:
express.json -> It converts incoming JSON data into a JavaScript object.
express.static -> Serves static files like images, CSS, and JavaScript.
express.urlencoded() ->Used for HTML form data.

third party middleware : cors, morgon : logs every req, error handling middleware -> it includes err in the parameter : (err, req, res, next)

custom : authentication middleware, logger middleware

If neither next() nor a response (like res.send()) is called, the request hangs.

Real-World Request Flow

Client Request
       │
       ▼
express.json()          ← Built-in middleware
       │
       ▼
logger                  ← Custom middleware
       │
       ▼
authentication          ← Custom middleware
       │
       ▼
Route Handler
       │
       ▼
Response

URL Encoding:
Encoding means converting special characters into a format that is safe to use in a URL.
eg: Hello World -> after encoding : Hello%20World -> Space → %20

URL Decoding:
Decoding converts the encoded value back to its original form.
eg: Muskan%20Daruka -> after decode -> Muskan Daruka 

Client send encoded and express automatically decode query parameter