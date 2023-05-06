import React from 'react'

function Search({todosState,setUsers, placeholder}) {
  function handleSearch(e) {
    if (e.target.value.trim()==="") {
        setUsers(todosState);
    }
    else{
     let filteredtodos = todosState.filter(user => user.username.toLowerCase().includes(e.target.value.toLowerCase().trim()));
     setUsers(filteredtodos);
    }
 }
  return (
    <>
      <input onChange={(e)=>handleSearch(e)} placeholder={placeholder}/>
    </>
  )
}

export default Search




