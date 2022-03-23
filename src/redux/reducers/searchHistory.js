// sync with localStorage
const initialState = localStorage.getItem("search_history")
  ? JSON.parse(localStorage.getItem("search_history"))
  : [];

const searchHistory = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_SEARCH_HISTORY_ITEM":
      // check for history duplicates and return history as it is
      if (state.indexOf(action.payload.title) !== -1) return state;

      // update and sync history with localStorage and redux store
      var updatedHistory = [...state];
      updatedHistory.push(action.payload.title);
      updatedHistory.reverse();

      localStorage.setItem("search_history", JSON.stringify(updatedHistory));
      return updatedHistory;

    case "CLEAR_SEARCH_HISTORY":
      // remove search history from the localStorage and return empty array
      localStorage.removeItem("search_history");
      return [];

    case "REMOVE_SEARCH_HISTORY_ITEM":
      // remove seach history item
      var history = [...state];
      console.log("old history", history);

      history.splice(action.payload.index, 1);

      // sync localStorage with the newly updated search history array
      localStorage.setItem("search_history", JSON.stringify(history));
      console.log("new history", history);
      return history;

    default:
      return state;
  }
};

export default searchHistory;
