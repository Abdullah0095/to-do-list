import React, { useEffect, useState } from 'react';
import Lists from './Components/Lists/Lists';

const App = () => {
  const [toDos, setToDos] = useState([]);
  useEffect(()=> {
    fetch("https://jsonplaceholder.typicode.com/todos/")
    .then(res=>res.json())
    .then(data=> setToDos(data))
  },[]);
  
  const toDos50 = toDos.slice(0,50);
  console.log(toDos50);

  
  
  return (
    <div style={{backgroundColor: 'teal', height: '2900px', marginTop: '-21px'}}>
      <h1 style={{textAlign: 'center'}}>My To-Do-LIST</h1>
      
        {
          toDos50.map(toDo => <Lists toDo={toDo}></Lists>)
          
        }
    </div>
  );
};

export default App;
