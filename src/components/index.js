import React, {Components} from "react";
import {Provider, connect} from "react-redux";
import store from "../store";
import {roomActionCreator,clientActionCreator} from "../actions";
import HotelApp from "./hotelApp";

const mapDispatchToProps = dispatch => {
    return {
        onAddRoom: (event, roomNumber, placesCount) => {
            event.preventDefault()
            dispatch(roomActionCreator.addRoom(roomNumber, parseInt(placesCount)))
        },
        onDelRoom(id) {
            dispatch(roomActionCreator.deleteRoom(id));
        },
        onAddClient: (event, clientName, roomNumber, daysCount) => {
            event.preventDefault()
            dispatch(clientActionCreator.addClient(clientName, roomNumber, parseInt(daysCount)))
        },
        onDelClient(id) {
            dispatch(clientActionCreator.deleteClient(id));
        },
    }
}

const mapStateToProps = state =>{
    return{
        rooms: state.rooms,
        clients: state.clients
    }
}
const  ConnectionHotelApp = connect(
    mapDispatchToProps,
    mapStateToProps
)(HotelApp);

export default ()=>(
    <Provider store={store}>
        <ConnectionHotelApp></ConnectionHotelApp>
    </Provider>
)
