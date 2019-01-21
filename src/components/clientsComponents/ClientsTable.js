import React from 'React'
import Client from './Client'

const ClientTable = (props,onDelClick) => {
    const {clients, ...rest} = props;
    return <table>
        <thead>
        <tr>
            <th>№</th>
            <th>ПІБ</th>
            <th>Кімната</th>
            <th>Кількість днів</th>
            <th>Видалення</th>
        </tr>
        </thead>
        <tbody>
        {clients.map((client, i) => (
            <Client {...client} num={i} {...rest} onDelClick={onDelClick}/>
        ))}
        </tbody>
    </table>
};
export default ClientTable