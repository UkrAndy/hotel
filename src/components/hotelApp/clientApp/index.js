import React, {Component} from "rect";
import clientTable from "./clientTable";
import addClientForm from "./addClientForm"

const clientApp = ({...params})=>{
    return(
        <div>
            <clientTable clients={client} onDelClick={onDelClick}/>
            <addClientForm onAddClick={onDelClick}/>
        </div>
    )
}

export default clientApp;