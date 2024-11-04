"use client"
import { useState , useEffect } from "react";
import { io } from "socket.io-client";

const server_url='http://localhost:3004';




export default function App(){
  const [connected,isConnected]=useState(false);

  useEffect(()=>{
    const socket=io(server_url);

    socket.on('connect',()=>{
      console.log('Successfully connceted to the server');
      isConnected(true);
    })
    socket.on('disconnect',()=>{
      console.log("Disconnceted from the server")
      isConnected(false);
    })

    return()=>{
      socket.disconnect();
    }
  },[])

  return(
    <>
    <h1>Socket IO test</h1>
    {connected ? <p>Connected</p> : <p>Disconnected</p>}
    </>
  )

  
}