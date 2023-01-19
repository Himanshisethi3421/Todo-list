import React, {useState} from "react";
import "../Task/TaskAdd.css"


function TaskAdd(props) {

    const [first, setfirst] = useState({
      name:"",
      desc:""
    });

    const onchangeHandler = (e)=>{
        setfirst({...first,[e.target.name] : e.target.value});
    }

    const detelejaSaale =(f)=>{
      props.dataLekeJaunga(f)
      setfirst({
        name:"",
        desc:""
      })
    }

    return (
      <div id="innput">
          <input id="input1" name="name" onChange={onchangeHandler} value={first.name} placeholder="Name" ></input><br/>
          <input id="input2" name="desc"  onChange={onchangeHandler} value={first.desc} placeholder="Description" ></input><br/>
          <button id="button" onClick={()=>detelejaSaale(first)}>Create</button>
      </div>
    );
  }
  
  export default TaskAdd;