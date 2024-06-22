const CartReducer = (state, action) => {
  if (action.type === "ADD_TO_MY_CART") {
    // console.log(state.cart);
    // console.log(action.payload)
    const newCartData = {
      id: action.payload.pay1.id,
      quantity: action.payload.pay1.quantity,
      product_name: action.payload.pay1.product_name,
      images: action.payload.pay1.images,
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
    let existingProduct = state.cart.find(
      (item) => item.id == action.payload.pay1.id
    );
    // console.log(existingProduct);
    if (existingProduct) {
      const updatedCartNew = state.cart.map((item) => {
        // console.log("i already exist")
        if (item.id == action.payload.pay1.id) {
          let newAmount = item.amount + action.payload.pay2;
          if (newAmount >= item.quantity) {
            newAmount = item.quantity;
          }
          return {
            ...item,
            amount: newAmount,
          };
        } else {
          return item;
        }
      });
      return {
        ...state,
        cart: updatedCartNew,
      };
    } else {
      const newCartData = {
        id: action.payload.pay1.id,
        quantity: action.payload.pay1.quantity,
        product_name: action.payload.pay1.product_name,
        images: action.payload.pay1.images,
        amount: action.payload.pay2,
      };
      // console.log(newCartData);
      return {
        ...state,
        cart: [...state.cart, newCartData],
      };
    }
  }

  if (action.type === "DELETE_CART_ITEM") {
    // console.log(action.payload)
    const updatedCart = state.cart.filter(
      (item) => item.id !== action.payload.pay1
    );
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

  if (action.type === "DEC_AMOUNT") {
    let updatedCart = state.cart.map((item) => {
      // console.log("i m updated");
      if (item.id == action.payload) {
        // console.log(item);
        let decAmount = item.amount - 1;
        if (decAmount <= 1) {
          decAmount = 1;
        }
        return {
          ...item,
          amount: decAmount,
        };
      } else {
        return item;
      }
    });
    return {
      ...state,
      cart: updatedCart,
    };
  }

  if (action.type === "INC_AMOUNT") {
    let updatedCart = state.cart.map((item) => {
      // console.log("i m updated");
      if (item.id == action.payload) {
        // console.log(item);
        let incAmount = item.amount + 1;
        if (incAmount >= item.quantity) {
          incAmount = item.quantity;
        }
        return {
          ...item,
          amount: incAmount,
        };
      } else {
        return item;
      }
    });
    return {
      ...state,
      cart: updatedCart,
    };
  }

  return state;
};

export default CartReducer;
