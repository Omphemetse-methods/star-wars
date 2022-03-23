const routes = (state = null, action) => {
  switch (action.type) {
    case "CHANGE_ROUTE":
      return {
        ...state,
        location_pathname: action.location_pathname,
      };

    default:
      return state;
  }
};

export default routes;
