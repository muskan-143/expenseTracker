import { combineReducers } from "redux";
import addExpenseReducer from "./addExpenseReducer";

// combining all the reducer.
const rootReducer = combineReducers({
  expenseState: addExpenseReducer,
});
export default rootReducer;
