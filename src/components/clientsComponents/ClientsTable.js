import React from 'React'
import Client from './Client'

const ClientTable = (props) => {
    const {clients, ...rest} = props;
    return <table>
        <thead>
        <tr>
            <th>№</th>
            <th>ПІБ</th>
            <th>Кімната</th>
            <th>Кількість днів</th>
        </tr>
        </thead>
        <tbody>
        {clients.map((client, i) => (
            <Client {...client} num={i} {...rest}/>
        ))}
        </tbody>
    </table>
};
export default ClientTable