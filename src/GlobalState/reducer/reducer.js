import {
  THEME_TOGGLE,
  FETCH_COUNTRIES,
  ERROR,
  IS_LOADING_TRUE,
  IS_LOADING_FALSE,
  SET_REGION,
  SET_INPUT,
} from "../ActionType";

const reducer = (state, action) => {
  switch (action.type) {
    case IS_LOADING_TRUE:
      return {
        ...state,
        loading: true,
      };
    case IS_LOADING_FALSE:
      return {
        ...state,
        loading: false,
      };
    case THEME_TOGGLE:
      if (state.theme.mode === "dark") {
        return { ...state, theme: { mode: "light", state: true } };
      } else if (state.theme.mode === "light") {
        return { ...state, theme: { mode: "dark", state: false } };
      } else {
        return state;
      }
    case FETCH_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
      };
    case SET_REGION:
      return {
        ...state,
        region: action.payload.region,
      };
    case SET_INPUT:
      return {
        ...state,
        input: action.payload.input,
      };
    case ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
