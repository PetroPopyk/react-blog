import adminReducer from './adminReducer';
import authReducer from './authReducer';
import articleReducer from './articleReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers(
    {
      auth: authReducer,
      article: articleReducer,
      adminReducer: adminReducer,
      form: formReducer,
      firestore: firestoreReducer,
      firebase: firebaseReducer
    }
);

export default rootReducer;
