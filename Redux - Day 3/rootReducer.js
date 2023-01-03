import { combineReducers } from "redux";
import cakeReducer from "./cakes/cakeReducer";
import IceCreamReducer from "./iceCream/iceCreamReducer";
import MuffinReducer from "./muffins/muffinReducer";

const rootReducer = combineReducers( {
    cake: cakeReducer,
    iceCream: IceCreamReducer,
    muffins: MuffinReducer

})

export default rootReducer