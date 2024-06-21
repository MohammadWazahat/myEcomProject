const CartReducer = (state, action) => {
  if (action.type === "ADD_TO_MY_CART") {
    // const a = action.payload;
    // console.log(state);
    // console.log(a);
    return {
      ...state,
      cart: [...state.cart, action.payload],
    };
  }

  if (action.type === "ADD_MORE_TO_MY_CART") {
    // const a = action.payload;
    // console.log(state);
    // console.log(a);
    return {
      ...state,
      cart: [...state.cart, action.payload],
    };
  }

  if (action.type === "DELETE_CART_ITEM") {
    // console.log(action.payload)
    const updatedCart = state.cart.filter((item) => item.id !== action.payload);
    // console.log(updatedCart);
    return {
      ...state,
      cart: updatedCart,
    };
  }

  if (action.type === "DELETE_ALL_CART_ITEM") {
    return {
      ...state,
      cart: [],
    };
  }

  return state;
};

export default CartReducer;
