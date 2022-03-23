import { configureStore } from "@reduxjs/toolkit";

import routesReducer from "./reducers/routes";
import searchHistoryReducer from "./reducers/searchHistory";

export default configureStore({
  reducer: {
    routes: routesReducer,
    searchHistory: searchHistoryReducer,
  },
});
