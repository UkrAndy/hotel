import React, {Component} from "react";

const Room = ({id,roomNumber,placeCount,number,onDelClick})=>{
    return(
        <tr>
            <td>{number}</td>
            <td>{roomNumber}</td>
            <td>{placeCount}</td>
            <td><button onClick={(e)=>onDelRoom(e,id)}>Видалити</button></td>
        </tr>
    )
}

export default Room;