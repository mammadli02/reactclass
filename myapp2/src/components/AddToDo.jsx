import React , {useState} from "react";
import { v4 as uuidv4} from 'uuid';
function AddToDo({setTodos,todos}){
    const [todoAdd,setTodoAdd]=useState("")
    const handleAdd=()=>{
        const newTodo={
            id:uuidv4(),
            todo:todoAdd,
            done:false
        }
        setTodos([...todos,newTodo])
        setTodoAdd("")
    }
    return(
        
        <>
        <input type="text" placeholder="add todo" value={todoAdd} onChange={(e)=>setTodoAdd(e.target.value)} />
        <button onClick={handleAdd}>Add</button>
        </>
    )
}
export default AddToDo