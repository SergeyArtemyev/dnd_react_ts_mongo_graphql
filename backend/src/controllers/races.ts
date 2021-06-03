import Race from '../models/Race';
import { QueryArrayResult } from './resultTypes';

export const getRaces = async (): Promise<QueryArrayResult<typeof Race>> => {
    const races = await Race.find({});
    if (!races) {
        return {
            message: 'Races not found',
        };
    } else {
        return { result: races };
    }
};
