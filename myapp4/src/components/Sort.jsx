import React, { useState } from 'react'

function SortButton({todosState,setTodosState}) {
    const [desc,SetDesc]=useState(true)
  function handleSort  () {

    let sortedtodos 
    if(desc){
        sortedtodos = todosState.sort((a, b) => a.name.localeCompare(b.name));
    }
    else{
        sortedtodos=todosState.sort((a,b)=>b.name.localeCompare(a.name))
        console.log(sortedtodos);
        setTodosState([...sortedtodos])
    }
 
    setTodosState([...sortedtodos]);
    SetDesc(!desc)
   
  }
  return (
    <>
       <button onClick={handleSort}>sort by name</button>
    </>
  )
}

export default SortButton
