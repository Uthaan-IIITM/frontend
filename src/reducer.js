export const initialState = {
  navbar_state: 0,
  active_show: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_NAVBAR_STATE":
      return {
        ...state,
        navbar_state: action.navbar_state,
      };
    case "UPDATE_ACTIVE_SHOW":
      return {
        ...state,
        active_show: action.show,
      };
    default:
      return state;
  }
};

export default reducer;
