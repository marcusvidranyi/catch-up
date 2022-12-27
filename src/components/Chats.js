import React from 'react';
import "../style.scss";

const Chats = () => {
  return (
    <div className='chats'>
        <div className='user_chat'>
            <img src='https://images.unsplash.com/photo-1504257432389-52343af06ae3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' />
            <div className='user_chat_info'>
                <span>Jane</span>
                <p>Hello</p>
            </div>
        </div>
        <div className='user_chat'>
            <img src='https://images.unsplash.com/photo-1504257432389-52343af06ae3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' />
            <div className='user_chat_info'>
                <span>Jane</span>
                <p>Hello</p>
            </div>
        </div>
        <div className='user_chat'>
            <img src='https://images.unsplash.com/photo-1504257432389-52343af06ae3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' />
            <div className='user_chat_info'>
                <span>Jane</span>
                <p>Hello</p>
            </div>
        </div>
        
    </div>
  )
}

export default Chats