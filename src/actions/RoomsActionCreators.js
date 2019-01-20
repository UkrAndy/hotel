import {RoomsActionTypes} from "../constants/ActionTypes"
import {v4} from 'uuid'

const addRoom=(roomNumber,placesCount)=>({
    type:RoomsActionTypes.ADD_ROOM,
    payload:{
        id:v4(),
        roomNumber,
        placesCount
    }
});

const deleteRoom=(roomID)=>({
    type:RoomsActionTypes.DELETE_ROOM,
    payload:roomID
});
export default {addRoom,deleteRoom};