import { ThunkDispatch } from 'redux-thunk';
import { AppState, Actions } from '../store/store';
import { GET_CLASSES } from '../store/types/classes';
import { CharClass } from '../store/reducers/classReducer';

export const loadClasses =
    (classesData: CharClass) => async (dispatch: ThunkDispatch<AppState, undefined, Actions>) => {
        dispatch({
            type: GET_CLASSES,
            payload: classesData,
        });
    };
