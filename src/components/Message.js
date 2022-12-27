import React from 'react';
import "../style.scss";

const Message = () => {
  return (
    <div className='message owner'>
       <div className='message_info'>
        <img src="https://images.unsplash.com/photo-1504257432389-52343af06ae3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
        <span>just now</span>
       </div>
       <div className='message_content'>
        <p>hello</p>
        <img src="https://images.unsplash.com/photo-1504257432389-52343af06ae3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
       </div>
    </div>
  )
}

export default Message