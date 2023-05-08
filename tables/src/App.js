import { useEffect, useState } from "react";

import ComponentsTables from "./Components/ComponetsTables";

function App() {
const[passenger,setPassenger]=useState([])
useEffect(()=>{
  fetch("https://api.instantwebtools.net/v1/passenger")
  .then(response=>response.json())
  .then(data=>setPassenger(data));
},[]);


  return (
    <>
    <ComponentsTables passenger={passenger} />
    
    
    </>
  );
}

export default App;
