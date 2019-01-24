import React, {Component} from "react";
import ClientApp from "./clientApp";
import RoomApp from "./roomApp";

const HotelApp = (props)=>{
    return (
        <div>
            <ClientApp {...props}></ClientApp>
            <RoomApp {...props}></RoomApp>
        </div>
    )
}

export default HotelApp;