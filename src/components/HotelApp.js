import React, { Component, PropTypes } from 'react';
import { createStore } from 'redux'
import ClientsActionCreators from "../actions/ClientsActionCreators"
import RoomsActionCreators from "../actions/RoomsActionCreators"
import Client from "./clientsComponents/index"
import Room from "./roomComponents/index"

class ClientPart extends Component{
    constructor(props){
        super(props);
        this.store=this.props.store;
    }
    onAddClick(e,clientName, roomNumber, daysCount)
    {
        e.preventDefault();
        this.store.dispatch(ClientsActionCreators.addClient(clientName, roomNumber, daysCount))
    }
    onDelClick(clientID)
    {
        this.store.dispatch(ClientsActionCreators.deleteClient(clientID));
    }
    render()
    {
        let client=this.store.getState().clients;
        return(
            <div>
                <Client clients={client} onAddClick={this.onAddClick.bind(this)} onDelClick={this.onDelClick.bind(this)}/>
            </div>

        )
    }
}
class RoomPart extends Component{
    constructor(props){
        super(props);
        this.store=this.props.store;
    }
    onAddClick(e,roomNumber,placesCount)
    {
        e.preventDefault();
        this.store.dispatch(RoomsActionCreators.addRoom(roomNumber,placesCount))
    }
    onDelClick(roomID)
    {
        this.store.dispatch(RoomsActionCreators.deleteRoom(roomID));
    }
    render()
    {
        let room=this.store.getState().rooms;
        return(
            <div>
                <Room rooms={room} onAddClick={this.onAddClick.bind(this)} onDelClick={this.onDelClick.bind(this)}/>
            </div>

        )
    }
}
export default {ClientPart,RoomPart};
