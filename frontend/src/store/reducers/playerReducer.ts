import { GET_PLAYER_RACE, GET_PLAYER_CLASS, GET_PLAYER_AVATAR, GET_PLAYER_BACKGROUND } from '../types/player';

export interface Player {
    race?: string;
    name?: string;
    playerClass?: string;
    extraLanguage?: string;
    cantrip?: string;
    toolProf?: string;
    str?: number;
    strMod?: number;
    strengthPoints?: number;
    dex?: number;
    dexMod?: number;
    dexterityPoints?: number;
    con?: number;
    conMod?: number;
    constitutionPoints?: number;
    int?: number;
    intMod?: number;
    intelligencePoints?: number;
    wis?: number;
    wisMod?: number;
    wisdomPoints?: number;
    char?: number;
    charMod?: number;
    charismaPoints?: number;
    avatar?: string;
    charName?: string;
    background?: string;
    alignment?: string;
    faith?: string;
    lifestyle?: string;
    hair?: string;
    skin?: string;
    eyes?: string;
    height?: number;
    width?: number;
    age?: number;
    gender?: string;
}

interface PlayerAction {
    type: string;
    payload: unknown;
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
        default:
            return state;
    }
};
