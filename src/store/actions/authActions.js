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

export const signOut = () => {
  return (dispatch, getState) => {
    firebase.auth().signOut().then(() => {
      dispatch({type: 'SIGN_OUT_SUCCESS'});
    });
  };
};
