import actionType from "../constants";

const hotelReduser = (state, action) => {
    switch (action) {
        case actionType.ADD_CLIENT:
            return {
                clients: {
                    ...(state.clients),
                    [action.payload.id]: action.payload
                }
            }
        case actionType.DELETE_CLIENT:
            let clients = {...state.clients};
            delete clients[action.id];
            return {
                clients
            }
        case actionType.ADD_ROOM:
            return {
                rooms: {
                    ...(state.rooms),
                    [action.payload.id]: action.payload
                }
            }
        case actionType.DELETE_ROOM:
            let rooms = {...state.rooms};
            delete rooms[action.id];
            return {
                rooms
            }
    }

}

export default hotelReduser;