import React from "react";
function Buttons({text, icon, center, click}) {
    return <>
        <button onClick={()=>click()} className="button-one"  type={"submit"} style={center ? {margin: '0 auto'} : {}}>
            <span>{text}</span>
            <span className="icon">{icon}</span>
        </button>
    </>
}

export default Buttons;
