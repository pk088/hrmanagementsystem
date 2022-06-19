import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Headbar from './Headbar'
import "./Home.css"

const Home = (props) => {


    // chakradhar_pandey@hammes.org
    const[email,setEmail] = useState("")
    
    let navigate = useNavigate();

    const loginHandler = (e) => {
        e.preventDefault();
        if(email=="admin"){
            navigate('Admin');
        }else{
            props.loginHandler(email)
            navigate('Employee');
        }
    }

    return (
        <>
            <Headbar />
            <div className='main_div'>
                <div className="second_div">
                        <h1>Login Here</h1>
                        <p>Use "admin" for Admin login</p>
                    <form onSubmit={loginHandler}>
                        <input type="text" required onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Email Here' />
                        <button type='submit'>Login</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Home