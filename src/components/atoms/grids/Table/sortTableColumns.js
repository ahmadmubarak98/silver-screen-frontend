const sortTableColumns = (source, sourceId, targetId) => {
  if (sourceId === targetId) return source;

  const nextData = source.filter((item) => item.id !== sourceId);
  const dragItem = source.find((item) => item.id === sourceId);
  const index = nextData.findIndex((item) => item.id === targetId);

  nextData.splice(index + 1, 0, dragItem);

  return nextData;
};

export default sortTableColumns;
