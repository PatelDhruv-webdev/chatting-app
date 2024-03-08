const express = require('express');
const http = require('http');
const path = require("path");
const { Server } = require('socket.io');




const app = express();
const server = http.createServer(app);
const io = new Server(server);

//  socket connection 

io.on('connection',(socket)=>{
    socket.on("user-msg",(message)=>{
       io.emit("msg",message)
    })
})





app.use(express.static(path.resolve('./public')));

app.get("/", (req, res) => {
    return res.sendFile(path.resolve('public /dhruv.html'));
});

server.listen(9000, () => console.log("server is created at port : 9000 "));
