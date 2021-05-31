import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { raceReducer } from './reducers/raceReducer';
import thunk from 'redux-thunk';

const reducer = combineReducers({
    races: raceReducer,
});

const middleware = [thunk];

const store = createStore(reducer, {}, composeWithDevTools(applyMiddleware(...middleware)));

export default store;

export type AppState = ReturnType<typeof reducer>;
export type Actions = { type: string; payload?: any };
