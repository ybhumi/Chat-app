import React from 'react'
import Img from "../img/img.png";
import Attach from "../img/attach.png";

const Input = () => {
  return (
    <div className='inp'>
      <input type="text" className="inputarea"  placeholder='Type Something'/>
      <div className="send">
        <img src={Attach} alt="at" height={20} width={20} />
        <input type="file" style={{display:"none"}} id="file" />
        <label htmlFor='file'>
          <img src={Img} height={20} width={20}/>
        </label>
        <button className='sndbtn'> send</button>
      </div>
      
    </div>
  )
}

export default Input
