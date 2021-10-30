export const initialState = {
  navbar_state: 0,
  active_show: null,
  admin_token: null,
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
    case "UPDATE_ADMIN_TOKEN":
      return {
        ...state,
        admin_token: action.token,
      };
    default:
      return state;
  }
};

export default reducer;
