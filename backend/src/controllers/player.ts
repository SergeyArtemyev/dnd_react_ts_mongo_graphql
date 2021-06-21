import { ObjectId } from 'mongoose';
import Player from '../models/Player';
import { QuerySingleResult } from './resultTypes';

export const getPlayer = async (id: ObjectId): Promise<QuerySingleResult<typeof Player>> => {
    try {
        const player: typeof Player = await Player.findById(id);
        if (!player) {
            return {
                message: 'Player not found',
            };
        }
        return {
            result: player,
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
