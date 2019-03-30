import React from 'react'
import ReactDom from 'react-dom'

function Myinfo(){
    return(
        <div>
        <h1>darshan</h1>
        <p>am darshan aim to be a web dev</p>
        <ul>
        <li>paris</li>
        <li>vegas</li>
        <li>Venice</li>
        </ul>
        </div>
    )
}




ReactDom.render(<Myinfo />,document.getElementById("root"))
