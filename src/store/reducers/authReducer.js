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
      console.log(action.error);
      return {
        ...state,
        authError: 'Authentication error!'
      };
    case 'SIGN_OUT_SUCCESS':
      console.log('User signed out');
      return state;
  }
  return state;
};

export default authReducer;
