import React from "react";
import Title from "./Title";
import Content from "./Content";

function Note(props){
    return(
        <div className={"note-box"}>
            <Title title={props.title}/>
            <Content note={props.note}/>
        </div>
    )
}

export default Note