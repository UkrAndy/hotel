import {ClientsActionTypes} from "../constants/ActionTypes"
import {v4} from 'uuid'

const ClientsActionsCreators = {
    addClient: (clientName, roomNumber, daysCount) => (
        {
            type: ClientsActionTypes.ADD_CLIENT,
            payload: {
                id: v4(),
                clientName,
                roomNumber,
                daysCount
            }
        }
    ),
    deleteClient: (clientID) => ({
        type: ClientsActionTypes.DELETE_CLIENT,
        payload: clientID
    })
};
export default ClientsActionsCreators;