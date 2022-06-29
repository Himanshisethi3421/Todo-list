import "./ShowTask.css"
function ShowTask(props) {
    

    let list = props.dataToShow.map((data,index) =>{
        return (<div  key={index} >
                <h3>{data.name}</h3>
                <p>{data.desc}</p>
                <button onClick={()=>props.dataFilter(index)} ><i class="ri-close-fill"></i></button>
                <hr/>
            </div>)
    })

  return <div className="showmain">
      {list}
  </div>;
}

export default ShowTask;
