import express from 'express'
import fs from 'fs'
const server = express()

server.use(express.json())                          //-> json will be converted to javascript. to make server's js read we convert json into js, if frontend req json data we need to convert it into js so that server can read it. express.json() is a middleware which converts json data into js data.

server.get("/", (req, res) => {
    // res.send('Server is healthy')
    res.json('Server is healthy')
})

server.get("/create", (req, res) => {
    res.json("Data created successfully")
})

server.post("/create-todo", (req, res) => {
    try {
        const body = req.body
        console.log(body)
        fs.writeFileSync("hello.json", JSON.stringify(body, null, 2))
        // fs.writeFileSync("hello.txt", JSON.stringify(body))
        res.send(body)
    } catch (err) {
        console.log("Something went wrong")
    }
})

server.get('/read-todo', (req, res) => {
    console.log('1')
    try {
    const data = fs.readFileSync("hello.json", "utf-8")
    console.log('2')
    res.send(JSON.parse(data))
    } catch (err) {
        console.log("Something went wrong")
    }
    console.log('3')
})

server.delete('/delete-todo', (req, res) => {
    try{
    fs.unlinkSync("hello.json");
    res.send("File deleted successfully");
    } catch(err) {
        console.log("Something went wrong")
    }
})

server.listen(3001, () => {
    console.log("Server is running")
})

