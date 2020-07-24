import { db } from '../../configs/firebaseConfig';

export const changeUserStatus = (user) => {
  return (dispatch, getState) => {
    db.collection('users').doc(user.id).update({...user, blocked: !user.blocked}).then(() => {
      dispatch({type: 'CHANGE_USER_STATUS_SUCCESS', user});
    }).catch(error => {
      dispatch({type: 'CHANGE_USER_STATUS_ERROR', error});
    });
  };
};
