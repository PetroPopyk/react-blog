import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { getFirestore, createFirestoreInstance, reduxFirestore } from 'redux-firestore';
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';
import firebaseConfig from './configs/firebaseConfig';
import firebase from 'firebase/app';
import { useSelector } from 'react-redux';
import { isLoaded } from 'react-redux-firebase';

const store    = createStore(rootReducer, compose(applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
                                                  reduxFirestore(firebase, firebaseConfig)));
const rrfProps = {
  firebase,
  config: firebaseConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
};

function IsAuthLoaded({children}) {
  const auth = useSelector(state => state.firebase.auth);
  if (!isLoaded(auth)) {
    return null;
  } else {
    return children;
  }
};

ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
          <IsAuthLoaded>
            <App/>
          </IsAuthLoaded>
        </ReactReduxFirebaseProvider>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
