import React, {Component} from "react";
import Room from "./client";

const RoomTable = ({rooms,onDelClick})=>{
    return(
        <table>
            <thead>
            <tr>
                <th>№</th>
                <th>Номер кімнати</th>
                <th>Кількість місць</th>
                <th>видалення</th>
            </tr>
            </thead>
            <tbody>
            {...Object.keys(rooms).map((room,i)=>{
                return(
                    <Room key={i} {...room} number={i} onDelClick={onDelClick}/>
                )
            })}
            </tbody>
        </table>
    )
}

export default RoomTable;