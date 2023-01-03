import { ADD_ICECREAM, BUY_ICECREAM } from "./iceCreamTypes";

const initialstate = {
    numOfIceCreams: 10,
    addedIceCream: 0
}

const IceCreamReducer = (state=initialstate, action) => {
    console.log(action);
    console.log(state);
    switch(action.type) {
        case BUY_ICECREAM: return {
            ...state,
            numOfIceCreams: state.numOfIceCreams - 1
        }
        case ADD_ICECREAM: return {
            ...state,
            addedIceCream: state.addedIceCream + 1
        }
        default : return state
    }
    
}

export default IceCreamReducer