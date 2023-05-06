import { useEffect, useState } from 'react';
import BasicTable from './components/Main';
import Search from './components/Search';
import SortButton from './components/Sort';

function App() {
  const [users, setUsers] = useState([])
  const [todosState, setTodosState] = useState(users);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data)
        setTodosState(data)
      });
  }, []);
  return (
    <>
     <Search todosState={todosState} setUsers={setUsers} placeholder="search user(s)"/>
     <SortButton todosState={todosState} setTodosState={setTodosState} />
    <BasicTable users={users}/>
    </>
  );
}

export default App;