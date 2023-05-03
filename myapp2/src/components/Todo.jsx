import React, {useState} from "react";
import AddToDo from './AddToDo'
import ToDoItem from './TodoItem'
function ToDo(){
    const[todos,setTodos]=useState([])
    return(
<>
<AddToDo todos={todos} setTodos={setTodos}/>
<ul>
    {
        todos.map((elem)=>(
            <ToDoItem key={elem.id} todo={elem.todo} setTodos={setTodos} id={elem.id} todos={todos} done={elem.done}/>
        ))
    }
</ul>
</>
    )
}
export default ToDo