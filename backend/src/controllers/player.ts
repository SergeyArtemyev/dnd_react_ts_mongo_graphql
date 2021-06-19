import { ObjectId } from 'mongoose';
import Player from '../models/Player';
import { QueryArrayResult, QuerySingleResult } from './resultTypes';

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

export const delPlayer = async (id: ObjectId): Promise<QuerySingleResult<string>> => {
    try {
        const player = await Player.findById(id);
        if (!player) {
            return {
                message: 'Player not dound',
            };
        }
        await player.remove();
        return {
            result: 'Player Deleted',
        };
    } catch (err) {
        console.error(err.message);
        throw err;
    }
};
