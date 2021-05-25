import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { raceReducer } from './reducers/raceReducer';

const reducer = combineReducers({
    races: raceReducer,
});
const store = createStore(reducer, {}, composeWithDevTools());

export default store;

export type AppState = ReturnType<typeof reducer>;
