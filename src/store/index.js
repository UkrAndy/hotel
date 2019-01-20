import {createStore} from "redux";
import hotelReducers from "../reducers";

let initialStore = localStorage.getItem("hotel-store") ?
    {products: JSON.parse(localStorage.getItem("hotel-store"))}
    : {};

export default createStore(hotelReducers, initialStore);
