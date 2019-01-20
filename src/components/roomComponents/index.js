import React, {PureComponent} from 'react';
import RoomTable from './RoomTable'
import RoomAddForm from './RoomAddForm'

class RoomsContainer extends PureComponent {
    render() {
        return (
            <div>
                <RoomTable {...this.props}/>
                <RoomAddForm {...this.props}/>
            </div>
        )
    }
}
export default RoomsContainer;