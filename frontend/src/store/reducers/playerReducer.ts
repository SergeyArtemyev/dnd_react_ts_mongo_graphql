import { GET_PLAYER_RACE } from '../types/races';

export interface Player {
    name?: string;
    race?: string;
    playerClass?: string;
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
        default:
            return state;
    }
};
