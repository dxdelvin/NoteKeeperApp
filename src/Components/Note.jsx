import React from "react";
import Title from "./Title";
import Content from "./Content";
import Extrabox from "./Extrabox";
import DeleteIcon from '@mui/icons-material/Delete';

function Note(props){
    function handleClick(){
        props.deletenote(props.id)
        console.log("Hi")
    }

    return(
        <div className={"note-box"}>
            <Title title={props.title}/>
            <Content note={props.note}/>
            <Extrabox onClick={handleClick} action=<DeleteIcon />/>
        </div>
    )
}

export default Note