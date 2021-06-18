import Player from '../models/Player';
import { QueryArrayResult } from './resultTypes';

export const getPlayer = async (): Promise<QueryArrayResult<typeof Player>> => {
    try {
        const players: Array<typeof Player> = await Player.find({});
        if (!players) {
            return {
                message: 'Player not found',
            };
        }
        return {
            result: players,
        };
    } catch (err) {
        console.error(err.message);
        throw err;
    }
};
