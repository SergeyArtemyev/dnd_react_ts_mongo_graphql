import Race from '../models/Race';

export class QueryArrayResult<T> {
    constructor(public message?: string, public result?: Array<T>) {}
}

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
