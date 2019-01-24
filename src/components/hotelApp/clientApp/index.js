import React, {Component} from "rect";
import clientTable from "./clientTable";
import addForm from "./addForm"

const clientApp = ({...params})=>{
    return(
        <div>
            <clientTable clients={client} onDelClick={onDelClick}/>
            <addForm onAddClick={onDelClick}/>
        </div>
    )
}

export default clientApp;