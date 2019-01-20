import React from 'react'
const Client=({num,id,clientName, roomNumber, daysCount,img,onDelClick})=>(
    <tr>
        <td>{num}</td>
        <td>{clientName}</td>
        <td>{clientName}</td>
        <td>{roomNumber}</td>
        <td>{daysCount}</td>
        <td><a href={img} onClick={()=>onDelClick(id)}></a></td>
    </tr>
)

export default Client;