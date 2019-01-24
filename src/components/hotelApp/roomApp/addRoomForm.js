import React, {Component} from "react";
import {v4} from "uuid";

const AddRoomForm = ({onAddClick})=>{
    let id,roomNumber,placeCount
    return(
        <form>
            <label>
                Введіть номер кімнати:
                <input type="number" ref={(v)=>roomNumber=v}/>
            </label>
            <label>
                кількість місць:
                <input type="number" ref={(v)=>placeCount=v}/>
            </label>
            <button type="submit" onClick={(e)=>onAddClick(id=v4(),roomNumber,placeCount)}></button>
        </form>
    )
}

export default AddRoomForm;