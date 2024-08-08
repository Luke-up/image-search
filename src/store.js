import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import imageReducer from './reducers';

const store = createStore(imageReducer, applyMiddleware(thunk));

export default store;
