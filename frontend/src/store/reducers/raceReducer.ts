interface Race {
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

interface RaceAction {
    type: string;
    payload: Race | [];
}

export const raceReducer = (state: any[] = [], action: RaceAction): Race | any[] => {
    switch (action.type) {
        case 'case':
            return [];
        default:
            return state;
    }
};
