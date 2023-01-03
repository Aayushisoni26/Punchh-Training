import { BUY_MUFFINS } from "./muffinTypes";
import { ADD_MUFFIN } from "./muffinTypes";

const initialstate = {
  numOfMuffins: 10,
  addedmuffin: 0,
};

const MuffinReducer = (state = initialstate, action) => {
  switch (action.type) {
    case BUY_MUFFINS:
      return {
        ...state,
        numOfMuffins: state.numOfMuffins - 1,
      };
    case ADD_MUFFIN:
      return {
        ...state,
        addedmuffin: state.addedmuffin + 1,
      };
    default:
      return state;
  }
};

export default MuffinReducer;
