import { GET_BACKGROUND } from '../types/background';

export interface Background {
    id: string;
    description: {
        info: string;
        skillProff: string[];
        backFeature: string;
        featureInfo: string;
        toolProff: string;
        vehicleProff: string;
    };
}

interface BackroundAction {
    type: string;
    payload: Array<Background>;
}

export const backgroundReducer = (state: any[] = [], action: BackroundAction): Array<Background> | any[] => {
    switch (action.type) {
        case GET_BACKGROUND:
            return action.payload;
        default:
            return state;
    }
};
