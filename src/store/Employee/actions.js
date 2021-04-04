import * as actionTypes from "./types";

const set = (employees) => ({
  type: actionTypes.SET_EMPLOYEES,
  payload: { employees },
});

// ----------------------------------------
// Selection
// ----------------------------------------

const setSelected = (selected) => ({
  type: actionTypes.SET_SELECTED_EMPLOYEES,
  payload: { selected },
});

const selectAll = () => ({
  type: actionTypes.SELECT_ALL_EMPLOYEES,
});

const clearSelection = () => ({
  type: actionTypes.CLEAR_EMPLOYEE_SELECTION,
});

// ----------------------------------------
// Sort and filter
// ----------------------------------------

const sort = ({ order, orderBy }) => ({
  type: actionTypes.SORT_EMPLOYEES,
  payload: { order, orderBy },
});

const filter = ({ query, filterBy }) => ({
  type: actionTypes.FILTER_EMPLOYEES,
  payload: { query, filterBy },
});

export const employeeActions = {
  clearSelection,
  filter,
  selectAll,
  set,
  setSelected,
  sort,
};
