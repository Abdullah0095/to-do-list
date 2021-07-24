import React, { useEffect, useState } from 'react';
import Lists from './Components/Lists/Lists';

const App = () => {
  const [toDos, setToDos] = useState([]);
  useEffect(()=> {
    fetch("https://jsonplaceholder.typicode.com/todos/")
    .then(res=>res.json())
    .then(data=> setToDos(data))
  },[]);
  
  
  return (
    <div style={{backgroundColor: 'MediumTurquoise', height: '11400px', marginTop: '-21px'}}>
      <h1 style={{textAlign: 'center'}}>My To-Do-LIST</h1>
      
        {
          toDos.map(toDo => <Lists toDo={toDo}></Lists>)
          
        }
    </div>
  );
};

export default App;
