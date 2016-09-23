import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import combineReducer  from './reducers/combineReducercombineReducer'

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

export default function configureStore(initialState) {
 return createStoreWithMiddleware(rootReducer, initialState);
}