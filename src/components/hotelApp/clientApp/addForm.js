import React, {Component} from "react";
import {v4} from "uuid"

const AddForm = ({onAddClick})=>{
    let id,name,roomNumber,dayCount
    return(
        <form>
            <label>
                Введіть ім'я:
                <input type="text" ref={(v)=>name=v}/>
            </label>
            <label>
                Виберіть кімнату:
                <input type="number" ref={(v)=>roomNumber=v}/>
            </label>
            <label>
                Введіть кількість днів:
                <input type="number" ref={(v)=>dayCount=v}/>
            </label>
            <button type="submit" onClick={(e)=>onAddClick(id=v4(),name,roomNumber,dayCount)}></button>
        </form>
    )
}

export default AddForm;