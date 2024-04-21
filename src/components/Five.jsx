import React, { useRef, useState } from 'react'

function Five() {
    const inputref = useRef(null);
    const [data,setData ]= useState([]);
  return (
    <div>
        <input type="text" ref={inputref} />
        <button onClick={()=>{setData([...data,inputref.current.value])}}>Fetch Data</button>
        {data.map((item,index) =>{return  <p key={index}>{item}</p>})}
    </div>
  )
}

export default Five
