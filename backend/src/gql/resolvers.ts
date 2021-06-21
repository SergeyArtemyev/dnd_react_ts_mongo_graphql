import { IResolvers } from 'apollo-server-express';
import { GqlContext } from './GqlContext';
import Race from '../models/Race';
import CharClass from '../models/Class';
import Background from '../models/Background';
import Player from '../models/Player';
import { getRaces } from '../controllers/races';
import { getClasses } from '../controllers/classes';
import { getBackground } from '../controllers/background';
import { delPlayer, getPlayer } from '../controllers/player';
import { ObjectId } from 'mongoose';

export interface ErrorResult {
    message: string;
}

type charInput = {
    race: string;
    extraLanguage?: string;
    cantrip?: string;
    toolProff?: string;
    playerClass: string;
    fighterSkill1?: string;
    fighterSkill2?: string;
    fightingStyle?: string;
    rangerSkill1?: string;
    rangerSkill2?: string;
    rangerSkill3?: string;
    favoredEnemy?: string;
    language?: string;
    naturalExplorer?: string;
    rogueSkill1?: string;
    rogueSkill2?: string;
    rogueSkill3?: string;
    rogueSkill4?: string;
    expertise1?: string;
    expertise2?: string;
    sorcererSkill?: string;
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
    adLang?: string;
    adLang1?: string;
    adLang2?: string;
    gameSet?: string;
    artisanTool?: string;
    extraSkill1?: string;
    extraSkill2?: string;
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
    mWeapon: string;
    sWeapon: string;
    potions: string;
    stuff: string;
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
    ClassesResult: {
        __resolveType(obj: any, context: GqlContext, info: any) {
            if (obj.message) {
                return 'ErrorResult';
            }
            return 'ClassesArray';
        },
    },
    BackgroundResult: {
        __resolveType(obj: any, context: GqlContext, info: any) {
            if (obj.messsage) {
                return 'ErrorResult';
            }
            return 'BackgroundArray';
        },
    },
    PlayerResult: {
        __resolveType(obj: any, context: GqlContext, info: any) {
            if (obj.messsage) {
                return 'ErrorResult';
            }
            return 'Player';
        },
    },
    DeletePlayerResult: {
        __resolveType(obj: any, context: GqlContext, info: any) {
            if (obj.messsage) {
                return 'ErrorResult';
            }
            return 'DeleteResult';
        },
    },
    Query: {
        getRaces: async (obj: any, args: null, ctx: GqlContext, info: any): Promise<{ races: Array<typeof Race> } | ErrorResult> => {
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
                throw new Error('Error has occured, check server logs');
            }
        },
        getClasses: async (obj: any, args: null, ctx: GqlContext, info: any): Promise<{ classes: Array<typeof CharClass> } | ErrorResult> => {
            try {
                const classes = await getClasses();
                if (classes.result) {
                    return {
                        classes: classes.result,
                    };
                }
                return {
                    message: classes.message ? classes.message : 'unexpected error occured',
                };
            } catch (err) {
                console.error(err.message);
                throw new Error('Error has occured, check server logs');
            }
        },
        getBackground: async (obj: any, args: null, ctx: GqlContext, info: any): Promise<{ background: Array<typeof Background> } | ErrorResult> => {
            try {
                const background = await getBackground();
                if (background.result) {
                    return {
                        background: background.result,
                    };
                }
                return {
                    message: background.message ? background.message : 'unexpected error occured',
                };
            } catch (err) {
                console.log(err.message);
                throw new Error('Error has occured, check server logs');
            }
        },
        getPlayer: async (obj: any, args: { id: ObjectId }, ctx: GqlContext, info: any): Promise<typeof Player | ErrorResult> => {
            try {
                const player = await getPlayer(args.id);
                if (player.result) {
                    return player.result;
                }
                return {
                    message: player.message ? player.message : 'unexpected error occured',
                };
            } catch (err) {
                console.log(err.message);
                throw new Error('Error has occured, check server logs');
            }
        },
    },
    Mutation: {
        createCharacter: async (obj: any, args: { input: charInput }, ctx: GqlContext, info: any): Promise<Array<typeof Player>> => {
            try {
                const player = new Player({
                    ...args.input,
                });
                await player.save();
                return player;
            } catch (err) {
                console.log(err);
                throw new Error('Error has occured, check server logs');
            }
        },
        deletePlayer: async (obj: any, args: { id: ObjectId }, ctx: GqlContext, info: any): Promise<{ result: string } | ErrorResult> => {
            try {
                const player = await delPlayer(args.id);

                if (player.result) {
                    return {
                        result: player.result,
                    };
                }

                return {
                    message: player.message ? player.message : 'unexpected error occured',
                };
            } catch (err) {
                console.log(err);
                throw new Error('Error has occured, check server logs');
            }
        },
    },
};

export default resolvers;
