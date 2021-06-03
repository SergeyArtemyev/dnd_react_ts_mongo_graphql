import { ThunkDispatch } from 'redux-thunk';
import { AppState, Actions } from '../store/store';
import { Race } from '../store/reducers/raceReducer';
import { GET_RACES } from '../store/types/races';

const loadRaces =
    (racesData: Race) => async (dispatch: ThunkDispatch<AppState, undefined, Actions>) => {
        dispatch({
            type: GET_RACES,
            payload: racesData,
        });
    };

export { loadRaces };
