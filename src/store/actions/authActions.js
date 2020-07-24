import firebase from 'firebase';

export const signIn = (credentials) => {
  return (dispatch, getState) => {
    firebase.auth().signInWithEmailAndPassword(
        credentials.email,
        credentials.password
    ).then(() => {
      dispatch({type: 'SIGN_IN_SUCCESS'});
    }).catch(error => {
      dispatch({type: 'SIGN_IN_ERROR', error});
    })
  }
};

export const signUp = (user) => {
  return (dispatch, getState) => {
    firebase.createUser({ ...user }, {
      firstName: `${user.firstName}`,
        lastName: `${user.lastName}`,
        isAdmin: false,
        blocked: false
    }).then(() => {
      dispatch({type: 'SIGN_UP_SUCCESS'});
    }).catch(error => {
      dispatch({type: 'SIGN_UP_ERROR', error});
    });
  }
};

export const signOut = (isBlocked) => {
  return (dispatch, getState) => {
    firebase.auth().signOut().then(() => {
      isBlocked ? dispatch({type: 'BLOCKED_SIGN_OUT'}) : dispatch({type: 'DEFAULT_SIGN_OUT'});
    });
  };
};
