import { useSelector } from 'react-redux';
import { Race } from '../store/reducers/raceReducer';
import { AppState } from '../store/store';

export const useRaceDescription = (raceName: string) => {
    const races: Race[] = useSelector((state: AppState) => state.races);
    if (raceName) {
        const [race] = races.filter((race: Race) => race.id === raceName);

        const {
            description: { info, abScInc, age, alignment, size, speed, languages },
        } = race;

        return { info, abScInc, age, alignment, size, speed, languages };
    }

    return {
        info: undefined,
        abScInc: undefined,
        age: undefined,
        alignment: undefined,
        size: undefined,
        speed: undefined,
        languages: undefined,
    };
};
