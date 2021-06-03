import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { raceReducer } from './reducers/raceReducer';
import thunk from 'redux-thunk';
import { classReducer } from './reducers/classReducer';

const reducer = combineReducers({
    races: raceReducer,
    classes: classReducer,
});

const middleware = [thunk];

const store = createStore(reducer, {}, composeWithDevTools(applyMiddleware(...middleware)));

export default store;

export type AppState = ReturnType<typeof reducer>;
export type Actions = { type: string; payload?: any };
