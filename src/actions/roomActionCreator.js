import actionsType from "../constants/actionsType";

let actionCreator = {
    addRoom: (id,roomNumber,placeCount)=>(
        {
            type: actionsType.ADD_CLIENT,
            payload: {
                id,
                roomNumber,
                placeCount
            }
        }
    ),

    deleteRoom:(id)=>(
        {
            type: actionsType.ADD_CLIENT,
            payload: {
                id
            }
        }
    )
}
export default actionCreator;