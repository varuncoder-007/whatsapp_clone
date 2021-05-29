import { Avatar, IconButton } from '@material-ui/core';
import React,{useState} from 'react';
import "./Chat.css";
import {AttachFile, MoreVert, SearchOutlined} from "@material-ui/icons";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon"
import MicIcon from "@material-ui/icons/Mic";
import SendIcon from '@material-ui/icons/Send';
import axios from './axios'

function Chat({messages}) {

    const [input, setInput]= useState("");

    const sendMessage = async (e) =>{
        e.preventDefault();
     

    await axios.post('/messages/new',{
        message: input,
        name :"Varun",
        timestamp: "JustNow!",
        received: true
    })

        setInput("");
    };
    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar />

                <div className="chat__headerInfo">
                    <h3>Room name</h3>
                    <p>Last seeen at ..</p>
                </div>

                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>

                    <IconButton>
                        <AttachFile />
                    </IconButton>

                    <IconButton>
                        <MoreVert/>
                    </IconButton>

                </div>
            </div>

            <div className="chat__body">
                {
                    messages.map((message) =>(
                        <p className={`chat__message ${message.received && "chat__receiver"}`}>
                    
                    <span className="chat__name">{message.name}</span>
                    {message.message}
                    
                    <span className="chat__timestamp">
                        {message.timestamp}
                        
                    </span>
                    </p>
                    ))
                }
                {/* <p className="chat__message">
                    
                    <span className="chat__name">Varun</span>
                    This is a messsage
                    
                    <span className="chat__timestamp">
                        {new Date().toLocaleString()}
                        
                    </span>
                </p> */}
                {/* <p className="chat__message chat__receiver">
                    
                    <span className="chat__name">Varun</span>
                    This is a messsage
                    
                    <span className="chat__timestamp">
                        {new Date().toLocaleString()}
                        
                    </span>
                </p> */}
            
            </div>
            <div className="chat__footer">
                    <IconButton>
                    <InsertEmoticonIcon />
                    </IconButton>
                    
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <form>
                        <input 
                            value= {input} 
                            onChange={(e) => setInput(e.target.value)}
                            placeholder= "Type a message"
                            type="text" 
                        />
                        
                        <button onClick={sendMessage} type="submit" >
                            Send a message
                        </button>
                    </form>
                    <IconButton>
                        <MicIcon />
                    </IconButton>
                    <IconButton >
                        <SendIcon  />
                    </IconButton>
                </div>
        </div>
    
    );
}

export default Chat;