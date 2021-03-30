import { useCallback } from "react";
import { useDispatch } from "react-redux";
import useSWR from "swr";

import { fetchEmployees } from "~Api";
import { employeeActions } from "~Store";

const useFetchEmployees = () => {
  const dispatch = useDispatch();

  const fetcher = useCallback(async () => {
    const employees = await fetchEmployees();
    dispatch(employeeActions.set(employees));
  }, [dispatch]);

  return useSWR(["/api/employees"], fetcher, { revalidateOnFocus: false });
};

export default useFetchEmployees;
