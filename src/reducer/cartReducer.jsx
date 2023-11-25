export const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id),
      };
    case 'CHANGE_CART_QTY':
      return {
        ...state,
        cart: state.cart.filter((c) =>
          c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
        ),
      };
    case 'FETCH_PRODUCTS':
      return {
        ...state,
        products: action.payload,
      };

    case 'SET_SELECTED_CATEGORY':
      return { ...state, selectedCategory: action.payload };
    case 'FETCH_SEARCH_RESULTS':
      return {
        ...state,
        searchResults: action.payload,
      };
    case 'SET_MIN_PRICE':
      return { ...state, minPrice: action.payload };

    case 'SET_MAX_PRICE':
      return { ...state, maxPrice: action.payload };
    default:
      return state;
  }
};
