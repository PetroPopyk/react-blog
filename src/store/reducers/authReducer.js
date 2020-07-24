import { toast } from 'react-toastify';

const initState = {};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    default:
    case 'SIGN_IN_SUCCESS':
      return {
        ...state,
        authError: null
      };
    case 'SIGN_UP_SUCCESS':
      toast('Successfully signed-up!');
      return {
        ...state,
        authError: null
      };
    case 'SIGN_IN_ERROR':
    case 'SIGN_UP_ERROR':
      return {
        ...state,
        authError: action.error.message
      };
    case 'DEFAULT_SIGN_OUT':
      toast('Successfully signed-out!');
      return state;
      case 'BLOCKED_SIGN_OUT':
      toast('This account has been blocked!');
      return state;
  }
  return state;
};

export default authReducer;
