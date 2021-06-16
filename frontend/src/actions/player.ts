import { ThunkDispatch } from 'redux-thunk';
import { AppState, Actions } from '../store/store';
import { GET_PLAYER_AVATAR, GET_PLAYER_BACKGROUND, ADD_PLAYER } from '../store/types/player';

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

export const addPlayer = (dataObject: any) => async (dispatch: ThunkDispatch<AppState, undefined, Actions>) => {
    dispatch({
        type: ADD_PLAYER,
        payload: dataObject,
    });
};