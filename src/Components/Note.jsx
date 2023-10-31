import React from "react";
import Title from "./Title";
import Content from "./Content";
import Extrabox from "./Extrabox";

function Note(props){
    return(
        <div className={"note-box"}>
            <Title title={props.title}/>
            <Content note={props.note}/>
            <Extrabox action="Delete"/>
        </div>
    )
}

export default Note