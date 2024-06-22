const CartReducer = (state, action) => {
  if (action.type === "ADD_TO_MY_CART") {
    // console.log(state);
    // console.log(action.payload)
    const newCartData = {
      id: action.payload.pay1.id,
      quantity: action.payload.pay1.quantity,
      amount: action.payload.pay2,
    };
    return {
      ...state,
      cart: [...state.cart, newCartData],
    };
  }

  if (action.type === "ADD_MORE_TO_MY_CART") {
    // console.log(state);
    // console.log(action.payload)
    const newCartData = {
      id: action.payload.pay1.id,
      quantity: action.payload.pay1.quantity,
      amount: action.payload.pay2,
    };
    // console.log(newCartData);
    return {
      ...state,
      cart: [...state.cart, newCartData],
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
