const initialstate = 0;
const changethenumber = (state = initialstate, action) => {
    switch(action.type) {
        case "INCREMENT" :return state + 1;
        case "DECREMENT" :return state - action.payloaddec;
        default: return state;
    }
}

export default changethenumber;