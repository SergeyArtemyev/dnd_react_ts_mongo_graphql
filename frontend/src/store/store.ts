import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { raceReducer } from './reducers/raceReducer';
import thunk from 'redux-thunk';
import { classReducer } from './reducers/classReducer';
import { backgroundReducer } from './reducers/backgroundReducer';

const reducer = combineReducers({
    races: raceReducer,
    classes: classReducer,
    background: backgroundReducer,
});

const middleware = [thunk];

const store = createStore(reducer, {}, composeWithDevTools(applyMiddleware(...middleware)));

export default store;

export type AppState = ReturnType<typeof reducer>;
export type Actions = { type: string; payload?: any };
