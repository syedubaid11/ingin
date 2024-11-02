import { Server } from "socket.io";
import http from "http";
import express from "express";

const app=express();
const server=http.createServer(app);
const io=new Server(server);


interface Request extends express.Request {}
interface Response extends express.Response {}

app.get('/', (req: Request, res: Response) => {
    res.send("Socket IO is running now ");
});