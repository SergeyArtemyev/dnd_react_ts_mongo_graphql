import { useEffect, useState } from 'react';
import {
    languages,
    cantrips,
    toolProf,
    fighterStyle,
    favoredEnemy,
    naturalExplorer,
    fighterSkill,
    rangerSkill,
    expertise,
    rogueSkill,
    sorcererSkill,
    background,
    extraSkill,
} from '../utils/selectData';

export interface SelectData {
    human: {
        language: string[];
    };
    elf: {
        language: string[];
        cantrips: string[];
    };
    dwarf: {
        tool: string[];
    };
    fighter: {
        'fighting style': string[];
        'fighter skill': string[];
    };
    ranger: {
        'favored enemy': string[];
        language: string[];
        'natural explorer': string[];
        'ranger skill': string[];
    };
    rogue: {
        expertise: string[];
        'rogue skill': string[];
    };
    sorcerer: {
        'sorcerer skill': string[];
    };
    background: {
        background: string[];
    };
    'haunted one': {
        'extra skill': string[];
    };
}

export const useSelectData = () => {
    const [selectData, setSelectData] = useState<SelectData>();

    useEffect(() => {
        setSelectData({
            human: {
                language: languages,
            },
            elf: {
                language: languages,
                cantrips: cantrips,
            },
            dwarf: {
                tool: toolProf,
            },
            fighter: {
                'fighting style': fighterStyle,
                'fighter skill': fighterSkill,
            },
            ranger: {
                'favored enemy': favoredEnemy,
                language: languages,
                'natural explorer': naturalExplorer,
                'ranger skill': rangerSkill,
            },
            rogue: {
                expertise: expertise,
                'rogue skill': rogueSkill,
            },
            sorcerer: {
                'sorcerer skill': sorcererSkill,
            },
            background: {
                background: background,
            },
            'haunted one': {
                'extra skill': extraSkill,
            },
        });
    }, []);

    return selectData;
};
