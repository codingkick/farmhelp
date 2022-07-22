import { createStore} from "redux";
import { rootReducer } from "./reducers/rootReducer";

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
 

const persistConfig = {
    key: 'root',
    storage : storage,
  }
   
const persistedReducer = persistReducer(persistConfig, rootReducer)
   

export let store = createStore(persistedReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export let persistor = persistStore(store)
