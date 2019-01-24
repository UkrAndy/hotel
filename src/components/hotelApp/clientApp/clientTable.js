import React, {Component} from "react";
import Client from "./client";

const ClientTable = ({clients,onDelClick})=>{
    return(
        <table>
            <thead>
                <tr>
                    <th>№</th>
                    <th>Ім'я</th>
                    <th>Номер кімнати</th>
                    <th>Кількість днів</th>
                    <th>видалення</th>
                </tr>
            </thead>
            <tbody>
                {...Object.keys(clients).map((client,i)=>{
                    return(
                        <Client key={i} {...client} number={i} onDelClick={onDelClick}/>
                    )
                })}
            </tbody>
        </table>
    )
}

export default ClientTable;