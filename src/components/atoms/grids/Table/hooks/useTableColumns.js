import { useMemo } from "react";

const emptyArray = [];

const useTableColumns = (columns = emptyArray, rows, onDrag) => {
  const memoizedColumns = useMemo(() => {
    return columns.map(({ header, renderer, id, ...column }) => ({
      id,
      width: 200,
      ...column,
      headerProps: { id, content: header, onDrag: !column.fixed && onDrag },
      cellProps: { rowData: { rows }, renderer },
    }));
  }, [columns, rows, onDrag]);

  return memoizedColumns;
};

export default useTableColumns;
