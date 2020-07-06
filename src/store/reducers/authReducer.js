const initState = {};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    default:
    case 'SIGNIN_SUCCESS':
      return {
        ...state,
        authError: null
      };
    case 'SIGNIN_ERROR':
      console.log(action.error);
      return {
        ...state,
        authError: 'Authentication error!'
      };
  }
  return state;
};

export default authReducer;
