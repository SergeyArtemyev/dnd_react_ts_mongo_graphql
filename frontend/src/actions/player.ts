import { ThunkDispatch } from 'redux-thunk';
import { AppState, Actions } from '../store/store';
import { GET_PLAYER_AVATAR, GET_PLAYER_BACKGROUND, ADD_PLAYER, DELETE_PLAYER } from '../store/types/player';

export const getAvatar = (avatar: string) => async (dispatch: ThunkDispatch<AppState, undefined, Actions>) => {
    dispatch({
        type: GET_PLAYER_AVATAR,
        payload: avatar,
    });
};

export const getBackground = (background: string) => async (dispatch: ThunkDispatch<AppState, undefined, Actions>) => {
    dispatch({
        type: GET_PLAYER_BACKGROUND,
        payload: background,
    });
};

export const createCharacter = (dataObject: any) => async (dispatch: ThunkDispatch<AppState, undefined, Actions>) => {
    const player: any = {};
    for (let [key, value] of Object.entries(dataObject)) {
        if (value !== null) {
            player[key] = value;
        }
    }

    dispatch({
        type: ADD_PLAYER,
        payload: player,
    });
};

export const deletePlayer = () => async (dispatch: ThunkDispatch<AppState, undefined, Actions>) => {
    dispatch({
        type: DELETE_PLAYER,
    });
};
