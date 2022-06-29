import React, {useState} from "react";

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
      <div className="input">
          <input name="name" onChange={onchangeHandler} value={first.name} placeholder="Name" ></input><br/>
          <input name="desc"  onChange={onchangeHandler} value={first.desc} placeholder="Description" ></input><br/>
          <button onClick={()=>detelejaSaale(first)}>Create</button>
      </div>
    );
  }
  
  export default TaskAdd;