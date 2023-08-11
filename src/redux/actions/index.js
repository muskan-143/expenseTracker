import {
  ADD_EXPENSE,
  DELETE_EXPENSE,
  SEARCH_EXPENSE,
  TOTAL_EXPENSE,
} from "./actionType";

// Action for adding the expense.

export const addExpense = (data) => {
  return {
    type: ADD_EXPENSE,
    data,
  };
};

export const deleteExpense = (data) => {
  return {
    type: DELETE_EXPENSE,
    data,
  };
};

export const totalExpense = () => {
  return {
    type: TOTAL_EXPENSE,
  };
};
export const search = (query) => {
  return {
    type: SEARCH_EXPENSE,
    query,
  };
};
