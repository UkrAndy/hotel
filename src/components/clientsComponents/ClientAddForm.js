import React from 'react'
import PropTypes from 'prop-types'

const AddForm = ({rooms, onAddClick}) => {
    let name, room, daysCount
    return <form>
        <label htmlFor="name"></label>
        <input id="name" type="text" ref={node => name = node} required/>
        <label htmlFor="room"></label>
        <select id="room" ref={node => room = node}>
            {rooms.map((room, i) => <option value="{room}" key={i}>room</option>)}
        </select>
        <label htmlFor="daysCount"></label>
        <input id="daysCount" type="number" ref={node => name = node} required/>
    </form>
}
AddForm.propTypes = {
    rooms: PropTypes.arrayOf(PropTypes.number).isRequired,
    onAddClick: PropTypes.func.isRequired
}
