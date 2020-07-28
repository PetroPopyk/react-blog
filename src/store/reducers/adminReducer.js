import { toast } from 'react-toastify';

const initState = {};

const adminReducer = (state = initState, action) => {
  switch (action.type) {
    default:
      return state;
    case 'CHANGE_USER_STATUS_SUCCESS':
      !action.user.blocked ? toast('User successfully blocked!') : toast('User successfully activated!');
      return {
        ...state,
        updatedUser: {...action.user, blocked: !action.user.blocked }
      };
    case 'CHANGE_USER_STATUS_ERROR':
      toast('Something went wrong!');
      return state;
  }
  return state;
};

export default adminReducer;
