import React from 'react'
function One() {
    let array = ["user1", "user2", "user3", "user4", "user5", "user6", "user7"];
    return (
        <div>
            {array.map((user) => { return <h2>{user}</h2> })}
        </div>
    )
}

export default One
