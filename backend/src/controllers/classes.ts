import CharClass from '../models/Class';
import { QueryArrayResult } from './resultTypes';

export const getClasses = async (): Promise<QueryArrayResult<typeof CharClass>> => {
    try {
        const classes: Array<typeof CharClass> = await CharClass.find({});
        if (!classes) {
            return { message: 'Classes not found' };
        }
        return {
            result: classes,
        };
    } catch (err) {
        console.error(err);
        throw err;
    }
};
