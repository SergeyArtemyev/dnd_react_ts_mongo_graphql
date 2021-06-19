import { ObjectId } from 'mongoose';
import { GET_PLAYER_RACE, GET_PLAYER_CLASS, GET_PLAYER_AVATAR, GET_PLAYER_BACKGROUND, ADD_PLAYER, CLEAR_PLAYER_STATE, DELETE_PLAYER } from '../types/player';

export interface Player {
    _id?: ObjectId;
    race?: string;
    extraLanguage?: string;
    cantrip?: string;
    toolProff?: string;
    playerClass?: string;
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
    str?: string;
    strMod?: string;
    strengthPoints?: string;
    dex?: string;
    dexMod?: string;
    dexterityPoints?: string;
    con?: string;
    conMod?: string;
    constitutionPoints?: string;
    int?: string;
    intMod?: string;
    intelligencePoints?: string;
    wis?: string;
    wisMod?: string;
    wisdomPoints?: string;
    char?: string;
    charMod?: string;
    charismaPoints?: string;
    avatar?: string;
    charName?: string;
    background?: string;
    adLang?: string;
    adLang1?: string;
    adLang2?: string;
    gameSet?: string;
    artisanTool?: string;
    extraSkill1?: string;
    extraSkill2?: string;
    alignment?: string;
    faith?: string;
    lifestyle?: string;
    hair?: string;
    skin?: string;
    eyes?: string;
    height?: string;
    weight?: string;
    age?: string;
    gender?: string;
    mWeapon?: string;
    sWeapon?: string;
    potions?: string;
    stuff?: string;
}

interface PlayerAction {
    type: string;
    payload: object;
}

export const playerReducer = (state: Player = {}, action: PlayerAction) => {
    const { type, payload } = action;

    switch (type) {
        case GET_PLAYER_RACE:
            return {
                ...state,
                race: payload,
            };
        case GET_PLAYER_CLASS:
            return {
                ...state,
                playerClass: payload,
            };
        case GET_PLAYER_AVATAR:
            return {
                ...state,
                avatar: payload,
            };
        case GET_PLAYER_BACKGROUND:
            return {
                ...state,
                background: payload,
            };
        case ADD_PLAYER:
            return { ...payload };
        case DELETE_PLAYER:
        case CLEAR_PLAYER_STATE:
            return {};
        default:
            return state;
    }
};
