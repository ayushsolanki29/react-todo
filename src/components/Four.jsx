import React from 'react'

function Four({data, fn}) {
  return (
    <div>
        <button onClick={()=>{fn(10)}}>Set 10</button>
      From Four.jsx = {data}
    </div>
  )
}

export default Four
