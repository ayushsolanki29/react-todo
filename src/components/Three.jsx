import React, { useState } from 'react'
import Four from './Four';

function Three() {
    const [x, setX] = useState(0);
    const btnClick = () => {
        console.log("clicked")
        setX(x + 1);
    }
    return (
        <div>

            <button onClick={() => { btnClick() }}>click me</button>
            <Four data={x} fn={setX}/>
        </div>
    )
}

export default Three
