const express = require('express');
const app = express();
const server =require("http").createServer(app);
const io =require("socket.io")(server,{cors:{origin:"*"}});

app.get("/home",(req,res)=>{
    res.render("home")
});

server.listen(3001,()=>{
    console.log("server running...")
})
io.on('connection',(socket)=>{
    console.log("connection established");
    socket.on("message",(data)=>{
    socket.broadcast.emit('message',data);
    });
});

