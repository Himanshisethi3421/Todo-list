import React, { useState } from 'react';
import Task from './Component/TaskAdd';
import "./App.css"
import Show from "./Component/ShowTask";

function App() {

  const [state, setstate] = useState([]);
  const [deleted, setdeleted] = useState([]);

  

  const childToParentDataSet = (childdata) =>{
    let copy = [...state];
    copy.push(childdata);
    setstate(copy)
  }


  const DeleteAll =()=>{
    setdeleted(state);
    setstate([]);
  }

  const DataFilter =(index)=>{
    let copyDelete = [...deleted];
    copyDelete.push(state[index]);
    setdeleted(copyDelete);
    setstate(state.filter((e , i) => i !== index ));
  }

 
  return <div className='main'>
  <div className='childmain'>
    <h3>TODO LIST</h3>
      <Task  dataLekeJaunga = {childToParentDataSet} />
    </div>
      <Show dataToShow = {state} dataFilter = {DataFilter}/> 
      {state.length > 0 ?
        <button className='btn' onClick={DeleteAll} >DeleteAll</button>
      :""}
      
  </div>;
}

export default App;
