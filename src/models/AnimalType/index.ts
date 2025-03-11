export const AnimeTypeSearchSortPaging = {
  scientificName: "",
  vietnameseName: "",
  englishName: "",
  sorting: {
    propertySort: "",
    isAsc: true,
  },
  paging: {
    pageNumber: 0,
    pageSize: 10,
  },
};
export const createAnimalTypeSearchModel = (overrides = {}) => ({
  scientificName: "",
  vietnameseName: "",
  englishName: "",
  sorting: {
    propertySort: "",
    isAsc: true,
  },
  paging: {
    pageNumber: 0,
    pageSize: 10,
  },
  ...overrides,
});
