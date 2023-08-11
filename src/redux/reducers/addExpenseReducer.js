import {
  ADD_EXPENSE,
  DELETE_EXPENSE,
  SEARCH_EXPENSE,
  TOTAL_EXPENSE,
} from "../actions/actionType";

const initialListLocalStorage = () => {
  const list = localStorage.getItem("expense-list");
  let localStorageExpense = [];
  if (list) {
    localStorageExpense = JSON.parse(list);
  }

  return localStorageExpense;
};
const INITIAl_VALUE = {
  expense: initialListLocalStorage(),
  query: "",
};

const addExpenseReducer = (state = INITIAl_VALUE, action) => {
  switch (action.type) {
    // Adding the expense
    case ADD_EXPENSE: {
      localStorage.setItem(
        "expense-list",
        JSON.stringify([...state.expense, action.data])
      );
      return {
        ...state,
        expense: [...state.expense, action.data],
      };
    }

    // Deleting the expense
    case DELETE_EXPENSE: {
      const { data } = action;
      const updatedData = state.expense.filter(
        (item) => item.date !== data.date
      );
      localStorage.setItem("expense-list", JSON.stringify(updatedData));
      return {
        ...state,
        expense: updatedData,
      };
    }

    // Giving the total
    case TOTAL_EXPENSE: {
      return state;
    }

    // search.

    case SEARCH_EXPENSE: {
      const { query } = action;
      return {
        ...state,
        query,
      };
    }

    default:
      return state;
  }
};

export default addExpenseReducer;
