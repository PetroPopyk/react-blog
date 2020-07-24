import adminReducer from './adminReducer';
import authReducer from './authReducer';
import articleReducer from './articleReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers(
    {
      auth: authReducer,
      article: articleReducer,
      adminReducer: adminReducer,
      firestore: firestoreReducer,
      firebase: firebaseReducer
    }
);

export default rootReducer;
