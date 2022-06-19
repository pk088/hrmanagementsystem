import React from 'react'
import "./Headbar.css"

const Headbar = (props) => {

    // console.log(props.data);

    return (
        <div>
            <div className='bar'>
                <h1>HR management system</h1>
                {
                    props.data &&
                    <div className='name_icon'>
                        {props.data.name}
                    </div>
                }
            </div>
        </div>
    )
}

export default Headbar