import * as actionTypes from "./types";

export const set = (employees) => ({
  type: actionTypes.SET_EMPLOYEES,
  payload: { employees },
});

// ----------------------------------------
// Selection
// ----------------------------------------

export const setSelected = (selected) => ({
  type: actionTypes.SET_SELECTED_EMPLOYEES,
  payload: { selected },
});

export const selectAll = () => ({
  type: actionTypes.SELECT_ALL_EMPLOYEES,
});

export const clearSelection = () => ({
  type: actionTypes.CLEAR_EMPLOYEE_SELECTION,
});

// ----------------------------------------
// Sort and filter
// ----------------------------------------

export const sort = ({ order, orderBy }) => ({
  type: actionTypes.SORT_EMPLOYEES,
  payload: { order, orderBy },
});

export const filter = ({ query, filterBy }) => ({
  type: actionTypes.FILTER_EMPLOYEES,
  payload: { query, filterBy },
});
