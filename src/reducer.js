export const initialState = {
  navbar_state: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_NAVBAR_STATE":
      return {
        ...state,
        navbar_state: action.navbar_state,
      };
    default:
      return state;
  }
};

export default reducer;
