import { GET_RACES } from '../types/races';

export interface Race {
    id: string;
    racialTraits: {
        abscore: string;
        skills: [string];
    };
    description: {
        info: string;
        abScInc: string;
        age: string;
        alignment: string;
        size: string;
        speed: string;
        languages: string;
    };
}

export interface RaceAction {
    type: string;
    payload: Array<Race> | [];
}

export const raceReducer = (state: any[] = [], action: RaceAction): Array<Race> | any[] => {
    switch (action.type) {
        case GET_RACES:
            return action.payload;
        default:
            return state;
    }
};
