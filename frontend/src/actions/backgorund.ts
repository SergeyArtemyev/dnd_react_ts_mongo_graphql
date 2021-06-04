import { ThunkDispatch } from 'redux-thunk';
import { GET_BACKGROUND } from '../store/types/background';
import { Background } from '../store/reducers/backgroundReducer';
import { AppState, Actions } from '../store/store';

export const loadBackground =
    (backgroundData: Background) =>
    async (dispatch: ThunkDispatch<AppState, undefined, Actions>) => {
        dispatch({
            type: GET_BACKGROUND,
            payload: backgroundData,
        });
    };
