const http = require('http');

const server = http.createServer((req, res) => {
    console.log("Request received");
    console.log(req.method, req.url);
    if(req.url === '/' && req.method === 'GET'){
        res.end('Hello World')
    } else if (req.url === '/' && req.method === 'POST'){
        res.end('Hello from POST')
    } else if (req.url === '/' && req.method === 'PUT'){                //if user wants to update the whole resource then we use PUT method
        res.end('Hello from PUT')
    } else if (req.url === '/' && req.method === 'DELETE'){
        res.end('Hello from DELETE')    
    } else if (req.url === '/' && req.method === 'PATCH'){              //if user wants to update the specific resource data then we use PATCH method
        res.end('Hello from PATCH')
    } else {
        res.end('Hello from other method')
    }
}); 

server.listen(3000,()=>{
    console.log("server is running on port 3000")
})
