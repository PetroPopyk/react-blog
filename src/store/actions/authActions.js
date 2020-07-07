import firebase from 'firebase';
import { db } from '../../configs/firebaseConfig';

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
    firebase.auth().createUserWithEmailAndPassword(
        user.email,
        user.password
    ).then((res) => {
      return db.collection('users').doc(res.user.uid).set({
      firstName: user.firstName,
      lastName: user.lastName,
      isAdmin: false,
      blocked: false
      })
    }).then(() => {
      dispatch({type: 'SIGN_UP_SUCCESS'});
    }).catch(error => {
      dispatch({type: 'SIGN_UP_ERROR', error});
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
