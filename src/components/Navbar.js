import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
        <span className='logo'>Catch Up</span>
        <div className='user'>
            <img src='https://images.unsplash.com/photo-1504257432389-52343af06ae3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' alt="" />
            <span>John</span>
            <button>logout</button>

        </div>

    </div>
  )
}

export default Navbar