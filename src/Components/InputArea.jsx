import React, {useState} from "react";
import Title from "./Title";
import Content from "./Content";
import Extrabox from "./Extrabox";


export default function InputArea(props){

    const [note, setNote] = useState({
        title: "",
        content:""
    })

    function handleChange(e){
        const {name, value} = e.target
        setNote(p=>{
            return{
                ...p,
                [name]:value
            }
        })
    }

    function handleClick(e){
        props.addnote(note)
    }

    return(
        <div className={"flex"}>
            <div className={"input-box"}>
            <input name="title" onChange={handleChange} type="text" value={note.title} placeholder="Enter Your Title"></input>
            <textarea name="content" onChange={handleChange} rows="3" value={note.content} placeholder="Enter Your Content"></textarea>
            <Extrabox onClick={handleClick} action="Add"/>
        </div>
        </div>
    )
}