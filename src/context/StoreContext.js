import React, { createContext, useReducer, useContext } from 'react';

const StoreContext = createContext();

const initialState = {
  cart: [],
  likes: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.product],
      };
    case 'ADD_TO_LIKES':
      return {
        ...state,
        likes: [...state.likes, action.product],
      };
    default:
      return state;
  }
};

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);