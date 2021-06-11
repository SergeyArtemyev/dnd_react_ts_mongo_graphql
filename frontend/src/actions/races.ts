import { ThunkDispatch } from 'redux-thunk';
import { AppState, Actions } from '../store/store';
import { Race } from '../store/reducers/raceReducer';
import { GET_RACES } from '../store/types/races';
import { GET_PLAYER_RACE } from '../store/types/player';

export const loadRaces =
    (racesData: Race) => async (dispatch: ThunkDispatch<AppState, undefined, Actions>) => {
        dispatch({
            type: GET_RACES,
            payload: racesData,
        });
    };

export const getPlayerRace =
    (raceName: string) => async (dispatch: ThunkDispatch<AppState, undefined, Actions>) => {
        dispatch({
            type: GET_PLAYER_RACE,
            payload: raceName,
        });
    };
