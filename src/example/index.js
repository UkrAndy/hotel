import React from 'react'
import {Provider, connect} from 'react-redux'
import store from "../store"
import {addRoom, deleteRoom,addClient, deleteClient} from "../actions"
import HotelApp from "./HotelApp";
//---------------------
const img="data:image/png;base64,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"
//---------------------
const mapDispatchToProps = dispatch => {
    return {
        onAddRoom: (event, roomNumber, placesCount) => {
            event.preventDefault()
            dispatch(addRoom(roomNumber, parseInt(placesCount)))
        },
        onDelRoom(id) {
            dispatch(deleteRoom(id));
        },
        onAddClient: (event, clientName, roomNumber, daysCount) => {
            event.preventDefault()
            dispatch(addClient(clientName, roomNumber, parseInt(daysCount)))
        },
        onDelClient(id) {
            dispatch(deleteClient(id));
        },
    }
}
const mapStateToProps = (state) => {
    return {
        rooms: state.rooms,
        clients:state.clients,
        img
    }
}
//---------------------
let ConnectedHotelApp = connect(
    mapStateToProps,
    mapDispatchToProps
)(HotelApp);
export default () => (
    <Provider store={store}>
        <ConnectedHotelApp/>
    </Provider>
)