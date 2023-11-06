import React from 'react'

export default function Extrabox(props){
    function handleClick(){
            props.onClick()    
    }

    return(
        <div onClick={handleClick} className="extraBox">{props.action}</div>
    )
}