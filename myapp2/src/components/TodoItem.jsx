
import React from "react"
function ToDoItem({id,todo,done,todos,setTodos}){
    const handleDone=()=>{
        const newTodos=todos.map((elem)=>{
            if(elem.id==id){
                elem.done=!elem.done
            }
            return elem;
        })
        setTodos(newTodos)
    }
    return (
        <li>
            {todo}
        <input type="checkbox" checked={done} onChange={handleDone}/>
        </li>

    )
}
export default ToDoItem 