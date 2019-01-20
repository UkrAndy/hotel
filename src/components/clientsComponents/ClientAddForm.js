import React from 'react'
import PropTypes from 'prop-types'

const AddForm = ({rooms, onAddClick}) => {
    let name, room, daysCount;
    return <form>
        <label htmlFor="name">ПІБ</label>
        <input id="name" type="text" ref={node => name = node} required/>
        <label htmlFor="room">КІМНАТА</label>
        <select id="room" ref={node => room = node}>
            {rooms.map((room, i) => <option value="{room}" key={i}>room</option>)}
        </select>
        <label htmlFor="daysCount">КІЛЬКІСТЬ ДНІВ</label>
        <input id="daysCount" type="number" ref={node => daysCount = node} required/>
        <button onClick={(e)=>onAddClick(e,name.value,room.value, daysCount.value)}>Додати</button>
    </form>
};

export default AddForm
