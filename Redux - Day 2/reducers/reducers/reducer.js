const initialstate = {
    user: {
        username: "test",
    },
}

const reducer = (state = initialstate, action) => {
    switch(action.type){
        default: return state;
    }
}

export default reducer;