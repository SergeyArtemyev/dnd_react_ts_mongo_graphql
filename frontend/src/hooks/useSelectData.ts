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
    gameSet,
    artisanTool,
    lifestyle,
    alignment,
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
        'additional language': string[];
    };
    acolyte: {
        'additional language': string[];
    };
    'criminal or spy': {
        'game set': string[];
    };
    'folk hero': {
        'artisan tool': string[];
    };
    sage: {
        'additional language': string[];
    };
    soldier: {
        'game set': string[];
    };
    lifestyle: {
        lifestyle: string[];
    };
    alignment: {
        alignment: string[];
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
                'additional language': languages,
            },
            acolyte: {
                'additional language': languages,
            },
            'criminal or spy': {
                'game set': gameSet,
            },
            'folk hero': {
                'artisan tool': artisanTool,
            },
            sage: {
                'additional language': languages,
            },
            soldier: {
                'game set': gameSet,
            },
            lifestyle: {
                lifestyle: lifestyle,
            },
            alignment: {
                alignment: alignment,
            },
        });
    }, []);

    return selectData;
};
