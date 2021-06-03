import { GET_CLASSES } from '../types/classes';

export interface CharClass {
    id: string;
    classFeatures: {
        hitDie: string;
        primAbil: string;
        saves: string;
    };
    description: {
        info: string;
        hitDice: string;
        hitAtFirstLvl: string;
        hitAtHigherLvl: string;
        profArmor: string;
        profWeapons: string;
        profTool: string;
        savingThrow: string;
        skills: string;
        favoredEnemy: string;
        fightingStyle: string;
        secondWind: string;
        naturalExplorer: string;
        expertise: string;
        sneakAttack: string;
        thiefCant: string;
        spellInfo: string;
        cantrips: string;
        spellSlots: string;
        spellSaveDc: string;
        spellAttackMod: string;
    };
}

export interface ClassAction {
    type: string;
    payload: Array<CharClass>;
}

export const classReducer = (state: any[] = [], action: ClassAction): Array<CharClass> | any[] => {
    switch (action.type) {
        case GET_CLASSES:
            return action.payload;
        default:
            return state;
    }
};
