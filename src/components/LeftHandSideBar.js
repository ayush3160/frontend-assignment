import React from 'react'


export default function LeftHandSideBar(){
    return(
        <div style={{display : "flex",flexDirection : "column"}}>
            <button className='mx-auto my-3 btn btn-outline-primary text-dark' style={{border : "none"}}>Dashboard</button>
            <button className='mx-auto my-3 btn' style={{backgroundColor : "whitesmoke",color : "blue"}}>Skill Test</button>
            <button className='mx-auto my-3 btn btn-outline-primary text-dark' style={{border : "none"}}>Internships</button>
        </div>
    )
}