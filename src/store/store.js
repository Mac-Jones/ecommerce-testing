// import { compose, createStore, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';

// import { rootReducer } from './root-reducer';
import { rootReducer } from './root-reducer';

// const middleWares = [process.env.NODE_ENV !== 'production' && logger].filter(
// 	Boolean
// );
const middleWares = [process.env.NODE_ENV !== 'production' && logger].filter(
	Boolean
);

// const composeEnhancer =
// 	(process.env.NODE_ENV !== 'production' &&
// 		window &&
// 		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
// 	compose;

// const persistConfig = {
// 	key: 'root',
// 	storage,
// 	blacklist: ['user'],
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// // the previos one is only "compose" without redux dev tools
// const composedEnhancer = composeEnhancer(applyMiddleware(...middleWares));

// export const store = createStore(persistedReducer, undefined, composedEnhancer);
export const store = configureStore({
	reducer: rootReducer,
	middleware: (haha) => haha().concat(middleWares),
});

// export const persistor = persistStore(store);
