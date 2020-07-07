const initState = {};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    default:
    case 'SIGN_IN_SUCCESS':
      return {
        ...state,
        authError: null
      };
    case 'SIGN_IN_ERROR':
      return {
        ...state,
        authError: action.error.message
      };
    case 'SIGN_UP_SUCCESS':
      return {
        ...state,
        authError: null
      };
    case 'SIGN_UP_ERROR':
      return {
        ...state,
        authError: action.error.message
      };
    case 'SIGN_OUT_SUCCESS':
      return state;
  }
  return state;
};

export default authReducer;
