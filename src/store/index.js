import {createStore} from "redux";
import reduser from "../redusers"

let initialStore = {};

export default createStore(reduser,initialStore);