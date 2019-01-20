import React from 'react'
const Room=({num, id, roomNumber, placesCount,img,onDelClick})=>(
    <tr>
        <td>{num}</td>
        <td>{roomNumber}</td>
        <td>{placesCount}</td>
        <td><a href={img} onClick={()=>onDelClick(id)}></a></td>
    </tr>
);
export default Room;
