import React, {useState} from "react";
import AddIcon from '@material-ui/icons/Add';



function Input(props)
{
    const [inputText , setInput] = useState("");
    function handleChange(event)
    {
        const newInput = event.target.value;
        setInput(newInput);

    }
    
    return (
        <div className = "form">
                <input className = "" onChange = {handleChange} type="text" value = {inputText} />
                <button className = "button" onClick = {() =>{

                    props.Click(inputText);
                    setInput("");
                }}>
               <span><AddIcon /> </span> 
                </button>
            </div>
    );
}
export default Input;