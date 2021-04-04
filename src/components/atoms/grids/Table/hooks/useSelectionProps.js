import { useMemo } from "react";
import { useDispatch } from "react-redux";

const useSelectionProps = (
  rows,
  totalRowCount,
  selected,
  setSelected,
  selectAll,
  clearSelection
) => {
  const dispatch = useDispatch();

  const memoizedProps = useMemo(() => {
    return {
      onClearSelection: () => dispatch(clearSelection()),
      onSelectAll: () => dispatch(selectAll()),
      onSetSelected: (selected) => dispatch(setSelected(selected)),
      rows,
      selected,
      totalRowCount,
    };
  }, [
    rows,
    totalRowCount,
    selected,
    setSelected,
    selectAll,
    clearSelection,
    dispatch,
  ]);

  return memoizedProps;
};

export default useSelectionProps;
