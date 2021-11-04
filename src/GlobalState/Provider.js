import { createContext, useReducer, useContext } from "react";
import { initialState } from "./InitialState";
import reducer from "./reducer/reducer";

import {
  fetchCountries,
  themeToggle,
  setRegion,
  searchHandler,
} from "./action/action";

const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { countries, loading, theme, region, input } = state;

  return (
    <GlobalContext.Provider
      value={{
        countries,
        loading,
        theme,
        input,
        region,
        dispatch,
        fetchCountries,
        themeToggle,
        setRegion,
        searchHandler,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
