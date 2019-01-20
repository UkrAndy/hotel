import React from 'React'
import Room from './Room'
const RoomTable = (props,onDelClick) => {
    const {rooms, ...rest} = props;
    return <table>
        <thead>
        <tr>
            <th>№</th>
            <th>Номер кімнати</th>
            <th>Кількість місць</th>
            <th>Видалення</th>
        </tr>
        </thead>
        <tbody>
        {rooms.map((room, i) => (
            <Room {...room} num={i} {...rest} onDelClick={onDelClick}/>
        ))}
        </tbody>
    </table>
};
export default RoomTable