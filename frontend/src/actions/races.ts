import { ThunkDispatch } from 'redux-thunk';
import { AppState, Actions } from '../store/store';

const loadRaces = () => async (dispatch: ThunkDispatch<AppState, undefined, Actions>) => {
    console.log('object');
};

export { loadRaces };
