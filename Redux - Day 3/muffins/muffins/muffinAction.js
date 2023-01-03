import { BUY_MUFFINS } from "./muffinTypes"
import { ADD_MUFFIN } from "./muffinTypes"

export const buyMuffins = () => {
    return {
        type: BUY_MUFFINS
    }
}

export const addmuffin = () => {
    return {
        type: ADD_MUFFIN
    }
}