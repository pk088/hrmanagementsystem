import React, { useRef } from 'react'
// import { useState } from 'react';
import "./Admin.css"
import "./Home.css"
import Headbar from './Headbar'
import Axios from 'axios';




// const Admin = () =>{
    
// const url = "https://gorest.co.in/public/v2/users";

// const token = "8678efa492b8ed8cefc3713a93f45a4c17962b44f5b8e76fd883a01ec2136e74"; 

// const config = { headers: { Authorization: `Bearer ${token}` }, };

// const [data, setData] = useState({ name: "", email: "", gender: "", status: "", });

// function submit(e) { e.preventDefault(); Axios.post(url, config, { name: data.name, year: data.email, gender: data.gender, staus: data.status, }).then((res) => { console.log("latest details is", res); }); }

// function handle(e) { const newdata = { ...data }; newdata[e.target.id] = e.target.value; setData(newdata); console.log("new data is........", newdata); }

// return ( <div className="App"> <h1>Lets use axios</h1> <form onSubmit={(e) => submit(e)}> <input onChange={(e) => handle(e)} id="name" value={data.name} placeholder="name" type="text" ></input> <br />

//     <input
//       onChange={(e) => handle(e)}
//       id="email"
//       value={data.email}
//       placeholder="email"
//       type="text"
//     ></input>
//     <br />
//     <input
//       onChange={(e) => handle(e)}
//       id="gender"
//       value={data.gender}
//       placeholder="gender"
//       type="text"
//     ></input>
//     <br />
//     <input
//       onChange={(e) => handle(e)}
//       id="status"
//       value={data.status}
//       placeholder="status"
//       type="text"
//     ></input>
//     <br />
//     <br />
//     <button>Submit</button>
//   </form>
// </div>
// ); }







const Admin = () => {
    const nameRef = useRef();
    const idRef = useRef();
    const emailRef = useRef();
    // const genderRef = useRef();

    // const [postData, setPostData] = useState({})

    // console.log(postData);


    // const [data, setData] = useState({ name: "", email: "", gender: "", status: "", });
    
    const url = "https://gorest.co.in/public/v1/users";
    const token = "8678efa492b8ed8cefc3713a93f45a4c17962b44f5b8e76fd883a01ec2136e74";
    const config = { headers: { Authorization: `Bearer ${token}` }, };

    const addUserHandler = (e) => {
        e.preventDefault();
        
           const name = nameRef.current.value
           const id = idRef.current.value
           const email = emailRef.current.value
            // console.log(genderRef.current.value);
        

        // setPostData(data)

        Axios.post(url,config, {
            name : name,
            id : id,
            email : email
        })
        .then((res) => { console.log("latest details is", res); }); 
    }

    return (
        <div>
            <Headbar />
            <h1>Admin Panel</h1>
            <div className='main_div'>
                <div className='admin_div'>
                    <form onSubmit={(e) => addUserHandler(e)}>
                        <p>Name</p>
                        <input ref={nameRef} type="text" />
                        <p>ID</p>
                        <input ref={idRef} type="number" />
                        <p>Email</p>
                        <input ref={emailRef} type="email" />
                        {/* <p>Gender </p>
                <input type="radio" name='gender' value="Male" />Male
                <input type="radio" name='gender' value="Female" />Female */}
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Admin