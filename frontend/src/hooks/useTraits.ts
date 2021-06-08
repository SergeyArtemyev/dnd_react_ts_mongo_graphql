import { useSelector } from 'react-redux';
import { Race } from '../store/reducers/raceReducer';
import { AppState } from '../store/store';

export const useTraits = (raceName: string) => {
    const races: Race[] = useSelector((state: AppState) => state.races);
    if (raceName) {
        const [race] = races.filter((race: Race) => race.id === raceName);

        const {
            racialTraits: { abscore, skills },
        } = race;

        return { abscore, skills };
    }

    return { abscore: undefined, skills: undefined };
};
