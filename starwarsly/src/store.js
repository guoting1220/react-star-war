import  { composeWithDevTools} from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

import thunk from "redux-thunk";
import rootReducer from "./reducers/root";
import { createStore, applyMiddleware } from "redux";

const persistConfig = {
  key: "root",
  storage,
  stateReconciler: autoMergeLevel2
};

/* When creating redux store, pass createStore function a persistReducer that wraps app’s root reducer. Once store is created, pass it to the persistStore function, which ensures redux state is saved to persisted storage whenever it changes. */

export const store = createStore(
  persistReducer(persistConfig, rootReducer),
  composeWithDevTools(
    applyMiddleware(thunk),
  )
);

export const persistedStore = persistStore(store);

