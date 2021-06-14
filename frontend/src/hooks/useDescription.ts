import { useSelector } from 'react-redux';
import { CharClass } from '../store/reducers/classReducer';
import { Race } from '../store/reducers/raceReducer';
import { AppState } from '../store/store';

export interface RaceDescription {
    info: string;
    abScInc: string;
    age: string;
    alignment: string;
    size: string;
    speed: string;
    languages: string;
}

export interface ClassDescription {
    info: string;
    hitDice: string;
    hitAtFirstLvl: string;
    hitAtHigherLvl: string;
    profArmor: string;
    profWeapons: string;
    profTool: string;
    savingThrow: string;
    skills: string;
    fightingStyle: string;
    secondWind: string;
    favoredEnemy: string;
    naturalExplorer: string;
    expertise: string;
    sneakAttack: string;
    thiefCant: string;
    spellInfo: string;
    cantrips: string;
    spellSlots: string;
    spellSaveDc: string;
    spellAttackMod: string;
}

export function useDescription(option: 'race', optionName: string): RaceDescription;
export function useDescription(option: 'class', optionName: string): ClassDescription;
export function useDescription(option: string, optionName: string) {
    const races: Race[] = useSelector((state: AppState) => state.races);
    const classes: CharClass[] = useSelector((state: AppState) => state.classes);
    if (option === 'race' && optionName) {
        const [race] = races.filter((race: Race) => race.id === optionName);

        const {
            description: { info, abScInc, age, alignment, size, speed, languages },
        } = race;

        return { info, abScInc, age, alignment, size, speed, languages };
    }
    if (option === 'class' && optionName) {
        const [charClass] = classes.filter((charClass: CharClass) => charClass.id === optionName);

        const {
            description: {
                info,
                hitDice,
                hitAtFirstLvl,
                hitAtHigherLvl,
                profArmor,
                profWeapons,
                profTool,
                savingThrow,
                skills,
                fightingStyle,
                secondWind,
                favoredEnemy,
                naturalExplorer,
                expertise,
                sneakAttack,
                thiefCant,
                spellInfo,
                cantrips,
                spellSlots,
                spellSaveDc,
                spellAttackMod,
            },
        } = charClass;

        return {
            info,
            hitDice,
            hitAtFirstLvl,
            hitAtHigherLvl,
            profArmor,
            profWeapons,
            profTool,
            savingThrow,
            skills,
            fightingStyle,
            secondWind,
            favoredEnemy,
            naturalExplorer,
            expertise,
            sneakAttack,
            thiefCant,
            spellInfo,
            cantrips,
            spellSlots,
            spellSaveDc,
            spellAttackMod,
        };
    }
}
