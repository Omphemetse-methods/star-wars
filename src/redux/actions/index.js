// route actiosn
const changeRoute = (payload) => ({
  type: "CHANGE_ROUTE",
  location_pathname: payload.location_pathname,
});

// history actions
const addSearchHistoryItem = (movie) => ({
  type: "ADD_SEARCH_HISTORY_ITEM",
  payload: movie,
});

const clearSearchHistory = () => ({
  type: "CLEAR_SEARCH_HISTORY",
});

const removeSearchHistoryItem = (index) => ({
  type: "REMOVE_SEARCH_HISTORY_ITEM",
  payload: { index },
});

export {
  changeRoute,
  clearSearchHistory,
  addSearchHistoryItem,
  removeSearchHistoryItem,
};
