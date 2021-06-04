import Background from '../models/Background';
import { QueryArrayResult } from './resultTypes';

export const getBackground = async (): Promise<QueryArrayResult<typeof Background>> => {
    try {
        const background: Array<typeof Background> = await Background.find({});
        if (!background) {
            return {
                message: 'Background not found',
            };
        }
        return {
            result: background,
        };
    } catch (err) {
        console.error(err.message);
        throw err;
    }
};
