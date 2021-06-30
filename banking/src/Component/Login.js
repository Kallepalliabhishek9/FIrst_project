/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import group from '../Asset/1946426.png'
import lockpic from '../Asset/712010.png'
import   './Login.css';
function Login() {
    return (
        <div >
            <form className="Login">
                <div className = "Username">
                <img id = "msg_pic" src = {group}/>
            <label>Username</label>
            <br/>
            <input class ="access" type="Username"placeholder ="Enter the username"/>
            </div>
            <div className="Password">
                <img id = "lock_pic" src ={lockpic}/> 
                <label>Password</label>
                <br/>
                <input class = "access" type="Password" placeholder = "Enter the password"/>
            </div>
            </form>
            
        </div>
        
    )
}

export default Login
