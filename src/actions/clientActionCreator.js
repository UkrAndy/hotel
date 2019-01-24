import actionsType from "../constants/actionsType";

let actionCreator = {
    addClient: (id,name,roomNumber,dayCount)=>(
        {
            type: actionsType.ADD_CLIENT,
            payload: {
                id,
                name,
                roomNumber,
                dayCount
            }
        }
    ),

    deleteClient:(id)=>(
        {
            type: actionsType.ADD_CLIENT,
            payload: {
                id
            }
        }
    )
}
export default actionCreator;