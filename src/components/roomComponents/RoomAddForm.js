import React from 'react'
const AddForm = ({onAddClick}) => {
    let roomNumber, placesCount;
    return <form>
        <label htmlFor="roomNumber">КІМНАТА</label>
        <input id="roomNumber" type="text" ref={node => roomNumber = node} required/>
        <label htmlFor="placesCount">КІЛЬКІСТЬ МІСЦЬ</label>
        <input id="placesCount" type="number" ref={node => placesCount = node} required/>
        <button onClick={(e)=>onAddClick(e,roomNumber.value,placesCount.value)}>Додати</button>
    </form>
};

export default AddForm
