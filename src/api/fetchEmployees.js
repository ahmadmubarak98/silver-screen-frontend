import { mockEmployeeList } from "~Utils/mocks";

const fetchEmployees = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(mockEmployeeList(1000));
    }, 1000);
  });
};

export default fetchEmployees;
