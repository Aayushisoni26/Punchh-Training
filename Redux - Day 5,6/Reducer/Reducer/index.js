import { combineReducers } from 'redux';

// Imports: Reducers
import employeedetailreducer from './reducer';

// Redux: Root Reducer
const rootReducer = combineReducers({
  
  employeedetailreducer:employeedetailreducer
});

// Exports
export default rootReducer;