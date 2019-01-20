import React from 'React'
import Room from './Room'
const RoomTable = (props) => {
    const {rooms, ...rest} = props;
    return <table>
        <thead>
        <tr>
            <th>№</th>
            <th>Номер кімнати</th>
            <th>Кількість місць</th>
        </tr>
        </thead>
        <tbody>
        {rooms.map((room, i) => (
            <Room {...room} num={i} {...rest}/>
        ))}
        </tbody>
    </table>
};
export default RoomTable