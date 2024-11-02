import { Server } from "socket.io";
import http from "http";
import express from "express";

const app=express();
const server=http.createServer(app);
const io=new Server(server);


app.get('/', (req: express.Request, res: express.Response): void => {
    res.send("Socket IO is running now ");
})

io.on('conncetion',(socket)=>{
    console.log('a user connceted');

    socket.on('disconnect',()=>{
        console.log('a user disconnected')
    })
})

const PORT=process.env.PORT || 3000;
server.listen(PORT,()=>{
    console.log(`server is running on PORT ${PORT}`)
})