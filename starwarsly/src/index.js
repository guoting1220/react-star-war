import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistedStore} from "./store"

/* Redux Persist takes your Redux state object and saves it to persisted storage. Then on app launch it retrieves this persisted state and saves it back to redux. */

/* wrap root component with PersistGate. This delays the rendering of app’s UI until persisted state has been retrieved and saved to redux. */

ReactDOM.render(
  <Provider store={store}>    
    <PersistGate loading={null} persistor={persistedStore}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
