import { combineReducers } from "redux";

import product from "./product";
import ui from "./ui";
import countries from "./countries";

const createRootReducer = () =>
    combineReducers({
        product,
        ui,
        countries,
    });

export default createRootReducer;
