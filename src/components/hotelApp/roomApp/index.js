import React, {Component} from "rect";
import roomTable from "./roomTableTable";
import addRoomForm from "./addRoomFormForm"

const roomApp = ({...params})=>{
    return(
        <div>
            <roomTable  rooms={rooms} onDelClick={onDelClick}/>
            <addRoomForm onAddClick={onDelClick}/>
        </div>
    )
}

export default roomApp;