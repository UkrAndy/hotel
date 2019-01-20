import React from 'react'
import PropTypes from 'prop-types'

const AddForm = ({onAddClick}) => {
    let roomNumber, placesCount;
    return <form>
        <label htmlFor="roomNumber">КІМНАТА</label>
        <input id="roomNumber" type="text" ref={node => roomNumber = node} required/>
        <label htmlFor="placesCount">КІЛЬКІСТЬ МІСЦЬ</label>
        <input id="placesCount" type="number" ref={node => placesCount = node} required/>
    </form>
};
AddForm.propTypes = {
    onAddClick: PropTypes.func.isRequired
};
export default AddForm
