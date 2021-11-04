//Actions
import axios from "axios";
import {
  FETCH_COUNTRIES,
  ERROR,
  THEME_TOGGLE,
  IS_LOADING_TRUE,
  IS_LOADING_FALSE,
  SET_REGION,
  SET_INPUT,
} from "../ActionType";

const uri = "https://restcountries.com/v2/all";
//const uri = "https://restcountries.eu/rest/v2/region/europe";

export async function fetchCountries(dispatch) {
  try {
    dispatch({ type: IS_LOADING_TRUE });
    const res = await axios.get(uri);
    dispatch({ type: FETCH_COUNTRIES, payload: res.data });
    dispatch({ type: IS_LOADING_FALSE });
  } catch (ex) {
    dispatch({ type: ERROR, payload: ex.message });
  }
}

export function themeToggle(dispatch) {
  dispatch({ type: THEME_TOGGLE });
}

export function setRegion(dispatch, region) {
  dispatch({ type: SET_REGION, payload: { region } });
}

export function searchHandler(dispatch, input) {
  dispatch({ type: SET_INPUT, payload: { input } });
}
