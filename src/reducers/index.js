import {ClientsActionTypes, RoomsActionTypes} from "../constants/ActionTypes"

const clientsReducers = (state, action) => {
    switch (action.type) {
        case ClientsActionTypes.ADD_CLIENT:
            return {
                clients: {
                    ...state.clients,
                    [action.payload.id]: action.payload
                },
                rooms: {...state.rooms}

            }
        case ClientsActionTypes.DELETE_CLIENT:
            let clients = {...state.clients}
            delete clients[action.payload.id]
            return {
                clients,
                rooms: {...state.rooms}
            }
        default:
            return state
    }
}
const roomsReducers = (state, action) => {
    switch (action.type) {
        case RoomsActionTypes.ADD_ROOM:
            return {
                rooms: {
                    ...state.rooms,
                    [action.payload.id]: action.payload
                },
                clients: {...state.clients}

            }
        case RoomsActionTypes.DELETE_ROOM:
            let rooms = {...state.rooms}
            delete rooms[action.payload.id]
            return {
                rooms,
                clients: {...state.clients}
            }
        default:
            return state
    }
}
export default {clientsReducers,roomsReducers}