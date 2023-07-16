import React from 'react'
import Cam from "../img/cam.png";
import Add from "../img/user.jpg";
import More from "../img/more.png";
import Messages from "./Messages";
import Input from "./Input";

const Chat = () => {
  return (
    <div className='chat'>
      <div className="chatinfo">
        <span>Jane</span>
        <div className="chaticons">
          <img src={Cam} height={25}/>
          <img src={Add} height={25}/>
          <img src={More} height={25}/>
        </div>
       
      </div>
      <Messages/>
      <Input />
    </div>
  )
}

export default Chat
