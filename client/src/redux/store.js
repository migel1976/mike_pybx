import {createStore, combineReducers,applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import historyReducer from './historyReducer';

const rootReducer=combineReducers({historyPage:historyReducer});
const store=createStore(rootReducer,applyMiddleware(thunkMiddleware));

export default store;
