
const reducer = (state, action) => {
    if (action.type === "ASCENDING") {
      const sorted = action.payload.sort((a, b) => {
        return a.product_name.localeCompare(b.product_name);
      });
      return sorted;
    }
    if (action.type === "DESCENDING") {
      const sorted = action.payload.sort((a, b) => {
        return b.product_name.localeCompare(a.product_name);
      });
      return sorted;
    }
    if (action.type === "LOWEST") {
      const sorted = action.payload.sort((a, b) => {
        return a.quantity - b.quantity;
      });
      return sorted;
    }
    if (action.type === "HIGHEST") {
      const sorted = action.payload.sort((a, b) => {
        return b.quantity - a.quantity;
      });
      return sorted;
    }
    return state;
  };

  export default reducer ;