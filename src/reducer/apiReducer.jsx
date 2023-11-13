export const apiReducer = (state, action) => {
  switch (action.type) {
  
    case 'FETCH_PRODUCTS':
      return {
        ...state,
        products: action.payload,
      };

    case 'FETCH_SINGLE_PRODUCTS':
      return {
        ...state,
        loading: false,
        product: action.payload,
        error: null,
      };
    case 'FETCH_ERROR':
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};
