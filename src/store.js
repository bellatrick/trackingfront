import { createContext, useReducer, useContext } from "react";

export const Store = createContext();
export const useStore = () => useContext(Store);

const initalState = {
  product: false,
  invoice: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_PRODUCT":
      return { ...state, product: action.payload };
    case "GET_INVOICE":
      return { ...state, invoice: action.payload };
    default:
      return state;
  }
};

export const StoreProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initalState);

  const value = {
    state,
    dispatch,
  };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
};
