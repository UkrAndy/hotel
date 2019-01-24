import React, {Component} from "react";

const Client = ({id,name,roomNumber,dayCount,number,onDelClick})=>{
    return(
        <tr>
            <td>{number}</td>
            <td>{name}</td>
            <td>{roomNumber}</td>
            <td>{dayCount}</td>
            <td><button onClick={(e)=>onDelClient(e,id)}>Видалити</button></td>
        </tr>
    )
}

export default Client;