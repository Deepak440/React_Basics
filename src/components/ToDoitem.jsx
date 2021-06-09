import React from "react";

function Todo(props)
{
    function handleClick()
    {
        props.onChecked(props.id);
    }
    return(
        
    <div className = "TodoList" onClick = {handleClick} >
       <li>{props.Item}</li> 
    </div>
    );
}


export default Todo; 