import React from 'react'
import "./Employee.css"
import Headbar from './Headbar';

const Employee = (props) => {

    const data = props.data[0]

    console.log(data);
    return (
        <div>
            <Headbar data={data} />

            <div className='main_div'>

                {
                    data ? <div className='userdata'>
                        <h2>User Name : {data.name}</h2>
                        <h2>User Id : {data.id}</h2>
                        <h2>User Email : {data.email}</h2>
                        <h2>User Status : {data.status}</h2>
                    </div>
                        :
                        <h1>"User Not Found..!!"</h1>
                }
            </div>
        </div>
    )
}

export default Employee