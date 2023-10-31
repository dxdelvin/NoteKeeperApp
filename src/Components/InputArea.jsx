import React, {useState} from "react";
import Title from "./Title";
import Content from "./Content";
import Extrabox from "./Extrabox";


export default function InputArea(props){
    return(
        <div className={"flex"}>
            <div className={"input-box"}>
            <Title title={<input 
            type="text"
            placeholder="Enter Your Title"
            ></input>}/>
            <Content note={<input 
            type="text"
            placeholder="Enter Your Note"
            ></input>} />
            <Extrabox action="Add"/>
        </div>
        </div>
    )
}