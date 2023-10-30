import React from "react";

let date = new Date()

function Footer(){
    return(
        <div className={"footer"}>
            <h4>Copyright {date.getUTCFullYear()}</h4>
        </div>
    ) 
}

export default Footer