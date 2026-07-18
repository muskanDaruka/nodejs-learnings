const express = require('express');
const server = express()

server.use(express.json())                      //inbuilt middleware : used for converting json data into javascript object

server.use((req, res, next)=>{                  //middleware
    console.log(1)
    next()
})

server.get("/", (req,res, next) => {          //route handler    //if we use next() here than only it will run the after 
    console.log(2)
    res.send("Server is running")
    next()
})

server.use((req, res, next)=>{            //after route handler runs the code after that  will never run, even its a middleware
    console.log(3)
    next()
})

server.listen(3000, () => {
    console.log("Server started successfully")
}) 
