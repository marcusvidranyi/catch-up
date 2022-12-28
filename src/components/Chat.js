import React from 'react';
import Cam from "../img/cam.png";
import Add from "../img/add.png";
import More from "../img/more.png";
import Messages from './Messages';
import Input from "./Input";
import {useContext} from "react";


import { ChatContext } from '../context/ChatContext';

const Chat = () => {

  const {data} = useContext(ChatContext);
  return (
    <div className='chat'>
        <div className='chat_info'>
            <span>{data.user.displayName}</span>
            <div className='chat_icons'>
                <img src={Cam} alt=''></img>
                <img src={Add} alt=''></img>
                <img src={More} alt=''></img>
            </div>
        </div>
        <Messages />
        <Input />
    </div>
  )
}

export default Chat