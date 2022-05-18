import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "../Reducers/index";

const persistConfig = {
    key: "root",
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default function storeFunction() {
    let store = createStore(persistedReducer);
    let persistor = persistStore(store);
    return { store, persistor };
};