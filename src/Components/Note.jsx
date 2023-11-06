import React from "react";
import Title from "./Title";
import Content from "./Content";
import Extrabox from "./Extrabox";

function Note(props){
    function handleClick(){
        props.deletenote(props.id)
        console.log("Hi")
    }

    return(
        <div className={"note-box"}>
            <Title title={props.title}/>
            <Content note={props.note}/>
            <Extrabox onClick={handleClick} action="Delete"/>
        </div>
    )
}

export default Note