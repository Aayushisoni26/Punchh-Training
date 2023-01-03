import { BUY_CAKE } from "./cakeTypes"
import { ADD_CAKE } from "./cakeTypes"
const initialstate = {
    numOfCakes: 10,
    addedCakes:0,
}

const cakeReducer = (state=initialstate, action) => {
    switch(action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        case ADD_CAKE: return {
            ...state,
            addedCakes: state.addedCakes + 1
        }
        default : return state
    }
}


export default cakeReducer