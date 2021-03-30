import { lang, string } from "~Utils";
import * as actionTypes from "./types";

const initialState = {
  // restore filtered lists from here
  employees: [],

  // dictionary for faster reads
  // employeesById: {},

  // sorting
  order: "asc",
  orderBy: "name",

  // filtering
  list: [],
  query: "",
  filterBy: [],

  // selection
  selected: [],
};

// ----------------------------------------
// Helpers
// ----------------------------------------

// allows for granular control of selection criteria
const isMatchingQuery = (account, query, filterBy) => {
  return (
    string.matches(account.name, query) &&
    filterBy.every(([property, value]) => account[property] === value)
  );
};

// populates employee dictionary for faster reads
// const computeDictionary = (employees = []) => {
//   const employeesById = employees.reduce((result, employee) => {
//     return {
//       ...result,
//       [employee.uuid]: employee,
//     };
//   }, {});

//   return { employeesById };
// };

// sorting helpers

const descendingComparator = (a, b, orderBy) => {
  if (b[orderBy] < a[orderBy]) return -1;
  if (b[orderBy] > a[orderBy]) return 1;
  return 0;
};

const getComparator = (order, orderBy) => {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
};

const stableSort = (array, comparator) => {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
};

// ----------------------------------------
// ----------------------------------------

const setEmployees = (state, { employees = [] }) => {
  // const { employeesById } = computeDictionary(employees);

  return {
    ...state,
    query: "",
    employees,
    // employeesById,
    list: stableSort(employees, getComparator(state.order, state.orderBy)),
  };
};

// ----------------------------------------
// Selection
// ----------------------------------------

const setSelectedEmployees = (state, { selected }) => ({
  ...state,
  selected,
});

const selectAllEmployees = (state) => {
  const newSelected = state.employees.map((n) => n.uuid);
  return {
    ...state,
    selected: newSelected,
  };
};

const clearEmployeeSelection = (state) => ({
  ...state,
  selected: [],
});

// ----------------------------------------
// Sort and filter
// ----------------------------------------

const sortEmployees = (state, { order, orderBy }) => ({
  ...state,
  order,
  orderBy,
  list: stableSort(state.list, getComparator(order, orderBy)),
});

const filterEmployees = (
  state,
  { query = state.query, filterBy = state.filterBy }
) => {
  const filtered = state.employees.filter((account) =>
    isMatchingQuery(account, query, filterBy)
  );
  const sorted = stableSort(
    filtered,
    getComparator(state.order, state.orderBy)
  );

  return {
    ...state,
    query,
    filterBy,
    list: sorted,
  };
};

// ----------------------------------------
// Exported handler
// ----------------------------------------

const reducers = {
  [actionTypes.SET_EMPLOYEES]: setEmployees,

  // ----------------------------------------
  // selection
  // ----------------------------------------

  [actionTypes.SET_SELECTED_EMPLOYEES]: setSelectedEmployees,
  [actionTypes.SELECT_ALL_EMPLOYEES]: selectAllEmployees,
  [actionTypes.CLEAR_EMPLOYEE_SELECTION]: clearEmployeeSelection,

  // ----------------------------------------
  // sort and filter
  // ----------------------------------------

  [actionTypes.SORT_EMPLOYEES]: sortEmployees,
  [actionTypes.FILTER_EMPLOYEES]: filterEmployees,
};

const reducer = (state = initialState, { type, payload }) => {
  if (!lang.isFunction(reducers[type])) return state;
  return reducers[type](state, payload);
};

export default reducer;
