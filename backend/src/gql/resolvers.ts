import { IResolvers } from 'apollo-server-express';
import { GqlContext } from './GqlContext';
import Race from '../models/Race';
import CharClass from '../models/Class';
import Background from '../models/Background';
import Player from '../models/Player';
import { getRaces } from '../controllers/races';

export interface ErrorResult {
    message: string;
}

type charInput = {
    race: string;
    playerClass: string;
    str: number;
    strMod: number;
    strengthPoints: number;
    dex: number;
    dexMod: number;
    dexterityPoints: number;
    con: number;
    conMod: number;
    constitutionPoints: number;
    int: number;
    intMod: number;
    intelligencePoints: number;
    wis: number;
    wisMod: number;
    wisdomPoints: number;
    char: number;
    charMod: number;
    charismaPoints: number;
    avatar: string;
    charName: string;
    background: string;
    alignment: string;
    faith: string;
    lifestyle: string;
    hair: string;
    skin: string;
    eyes: string;
    height: number;
    width: number;
    age: number;
    gender: string;
};

const resolvers: IResolvers = {
    RacesResult: {
        __resolveType(obj: any, context: GqlContext, info: any) {
            if (obj.message) {
                return 'ErrorResult';
            }
            return 'RacesArray';
        },
    },
    Query: {
        getRaces: async (
            obj: any,
            args: null,
            ctx: GqlContext,
            info: any
        ): Promise<{ races: Array<typeof Race> } | ErrorResult> => {
            try {
                const races = await getRaces();
                if (races.result) {
                    return {
                        races: races.result,
                    };
                }
                return {
                    message: races.message ? races.message : 'unexpected error occured',
                };
            } catch (err) {
                console.log(err.message);
                throw new Error('Error occured, check server logs');
            }
        },
        getClasses: async (
            obj: any,
            args: null,
            ctx: GqlContext,
            info: any
        ): Promise<Array<typeof CharClass>> => {
            try {
                const classes = await CharClass.find({});
                return classes;
            } catch (err) {
                console.log(err);
                throw new Error('Error occured, check server logs');
            }
        },
        getBackground: async (
            obj: any,
            args: null,
            ctx: GqlContext,
            info: any
        ): Promise<Array<typeof Background>> => {
            try {
                const background = await Background.find({});
                return background;
            } catch (err) {
                console.log(err);
                throw new Error('Error occured, check server logs');
            }
        },
    },
    Mutation: {
        createCharacter: async (
            obj: any,
            args: { input: charInput },
            ctx: GqlContext,
            info: any
        ): Promise<Array<typeof Player>> => {
            try {
                const player = new Player({
                    ...args.input,
                });
                await player.save();
                return player;
            } catch (err) {
                console.log(err);
                throw new Error('Error occured, check server logs');
            }
        },
    },
};

export default resolvers;
