import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { browserHistory } from 'react-router'
import rootReducer from '../reducers/reducers';

const store = createStore(rootReducer,applyMiddleware(thunkMiddleware))

export default store