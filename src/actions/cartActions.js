import * as actionTypes from './actionTypes';

export const addToCart = id => {
  return {
    type: actionTypes.ADD_TO_CART,
    id,
  };
};

export const incrementCount = id => {
  return {
    type: actionTypes.INCREMENT_COUNT,
    id,
  };
};
export const decrementCount = id => {
  return {
    type: actionTypes.DECREMENT_COUNT,
    id,
  };
};

export const deleteItem = id => {
  return {
    type: actionTypes.DELETE_ITEM,
    id,
  };
};

export const checkOut = () => {
  return {
    type: actionTypes.CHECK_OUT,
  };
};
