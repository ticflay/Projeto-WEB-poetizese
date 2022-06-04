export function handleSearch(data, searchParam, searchString) {
  return data.filter((item) => {
    return searchParam.some((newItem) => {
      if (item[newItem]) {
        return (
          item[newItem]
            .toString()
            .toLowerCase()
            .indexOf(searchString.toLowerCase()) > -1
        );
      }
    });
  });
}
