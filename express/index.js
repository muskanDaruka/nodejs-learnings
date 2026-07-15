import express from 'express'
import fs from 'fs'
const server = express()

server.use(express.json())                          //-> json will be converted to javascript

server.get("/", (req, res) => {
    // res.send('Server is healthy')
    res.json('Server is healthy')
})

server.get("/create",(req, res)=>{
    res.json("Data created successfully")
})

server.post("/create-todo", (req, res) => {
    const body = req.body
    console.log(body)
    fs.writeFileSync("hello.txt", JSON.stringify(body))
    res.send(body)
})

server.get('/read-todo', (req, res) => {
    const data = fs.readFileSync("hello.txt")
    res.send(data)
})

server.delete('/delete-todo',(req, res) => {
    fs.unlinkSync("hello.txt");
    res.send("File deleted successfully");
})

server.listen(3001,()=>{
    console.log("Server is running")
})

