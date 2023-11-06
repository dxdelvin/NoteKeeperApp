import React, {useState} from "react";
import Extrabox from "./Extrabox";
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';


export default function InputArea(props){
    
    const [checked, setChecked] = React.useState(false);
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
        setNote(()=>{
            return{
                title: "",
                content:""
            }
        })
    }

    function switchIt(){
        if (checked == false){
            setChecked(p=>!p)
        }
    }

    return(
        <div className={"flex"}>
            <div className={"input-box"}>
            {checked && <input name="title" onChange={handleChange} type="text" value={note.title} placeholder="Enter Your Title"></input>}
            <textarea onClick={switchIt} name="content" onChange={handleChange} rows={checked?3:1} value={note.content} placeholder="Enter Your Content"></textarea>
                {checked && <Extrabox onClick={handleClick} action={<AddIcon />} />}
        </div>
        </div>
    )
}