import React,{useState} from "react";
import Input from "./input";
import Todo from "./ToDoitem";

function App(){
    
    const [items , setItems] = useState([]); 
   
    // Add item to the list
    function handleClick(inputtext)
    {

        
        setItems( (prev)=> {return [...prev , inputtext] });

    }

    // Delete  item from the list array
    function deleteItem(id)
    {
        setItems(prev => {
            return prev.filter((item , index) => {
                return index !== id;
            });
        });
    }
    return (

        <div className = "container">
            <div className = "headcontainer">
                <h1 className = "heading" >To-Do List</h1>
            </div>

             
            <Input 
            
               Click = {handleClick}    
            />

            <div>
                <ul>
                        {items.map((todoItem, index)  => (
                        <Todo
                         key = {index}
                         id ={index}
                         Item = {todoItem}
                         onChecked = {deleteItem}
                         />
                        ))}
                </ul>
            </div>
        </div>

    );

}
export default App;