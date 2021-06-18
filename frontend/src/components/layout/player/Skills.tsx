import { useCallback, useState } from 'react';
import { FC, useEffect, useLayoutEffect } from 'react';
import { PlayerChildrenProps } from '../../../screens/Player';
import { Player } from '../../../store/reducers/playerReducer';
import { useProfSkills } from '../../../hooks/useProfSkills';

const Skills: FC<PlayerChildrenProps<Player>> = ({ playerData }) => {
    const [skillElements, setSkillElements] = useState<NodeListOf<HTMLSpanElement> | null>(null);
    const { strMod, dexMod, intMod, wisMod, charMod } = playerData;
    const profSkills = useProfSkills(playerData);

    useLayoutEffect(() => {
        setSkillElements(document.querySelectorAll('.skill'));
    }, []);

    const isProf = useCallback(() => {
        if (skillElements && profSkills) {
            skillElements.forEach((skill) => {
                if (profSkills.includes(skill.innerHTML)) {
                    skill!.previousElementSibling!.previousElementSibling!.classList.add('prof-y');
                }
            });
        }
    }, [profSkills, skillElements]);

    useEffect(() => {
        isProf();
    }, [isProf]);

    return (
        <div className='skills white'>
            <p>
                <span className='circle'></span>
                <span className='dex underline'>{profSkills.includes('Acrobatics') ? +dexMod! + 2 : dexMod}</span> <span className='skill'>Acrobatics</span>{' '}
                <span className='ab-skill'>(Dex)</span>
            </p>
            <p>
                <span className='circle'></span>
                <span className='wis underline'>{profSkills.includes('Animal Handling') ? +wisMod! + 2 : wisMod}</span> <span className='skill'>Animal Handling</span>{' '}
                <span className='ab-skill'>(Wis)</span>
            </p>
            <p>
                <span className='circle'></span>
                <span className='int underline'>{profSkills.includes('Arcana') ? +intMod! + 2 : intMod}</span> <span className='skill'>Arcana</span>{' '}
                <span className='ab-skill'>(Int)</span>
            </p>
            <p>
                <span className='circle'></span>
                <span className='str underline'>{profSkills.includes('Athletics') ? +strMod! + 2 : strMod}</span> <span className='skill'>Athletics</span>{' '}
                <span className='ab-skill'>(Str)</span>
            </p>
            <p>
                <span className='circle'></span>
                <span className='cha underline'>{profSkills.includes('Deception') ? +charMod! + 2 : charMod}</span> <span className='skill'>Deception</span>{' '}
                <span className='ab-skill'>(Cha)</span>
            </p>
            <p>
                <span className='circle'></span>
                <span className='int underline'>{profSkills.includes('History') ? +intMod! + 2 : intMod}</span> <span className='skill'>History</span>{' '}
                <span className='ab-skill'>(Int)</span>
            </p>
            <p>
                <span className='circle'></span>
                <span className='wis underline'>{profSkills.includes('Insight') ? +wisMod! + 2 : wisMod}</span> <span className='skill'>Insight</span>{' '}
                <span className='ab-skill'>(Wis)</span>
            </p>
            <p>
                <span className='circle'></span>
                <span className='cha underline'>{profSkills.includes('Intimidation') ? +charMod! + 2 : charMod}</span> <span className='skill'>Intimidation</span>{' '}
                <span className='ab-skill'>(Cha)</span>
            </p>
            <p>
                <span className='circle'></span>
                <span className='int underline'>{profSkills.includes('Investigation') ? +intMod! + 2 : intMod}</span> <span className='skill'>Investigation</span>{' '}
                <span className='ab-skill'>(Int)</span>
            </p>
            <p>
                <span className='circle'></span>
                <span className='wis underline'>{profSkills.includes('Medicine') ? +wisMod! + 2 : wisMod}</span> <span className='skill'>Medicine</span>{' '}
                <span className='ab-skill'>(Wis)</span>
            </p>
            <p>
                <span className='circle'></span>
                <span className='int underline'>{profSkills.includes('Nature') ? +intMod! + 2 : intMod}</span> <span className='skill'>Nature</span>{' '}
                <span className='ab-skill'>(Int)</span>
            </p>
            <p>
                <span className='circle'></span>
                <span className='wis underline'>{profSkills.includes('Perception') ? +wisMod! + 2 : wisMod}</span> <span className='skill'>Perception</span>{' '}
                <span className='ab-skill'>(Wis)</span>
            </p>
            <p>
                <span className='circle'></span>
                <span className='cha underline'>{profSkills.includes('Perfomance') ? +charMod! + 2 : charMod}</span> <span className='skill'>Perfomance</span>{' '}
                <span className='ab-skill'>(Cha)</span>
            </p>
            <p>
                <span className='circle'></span>
                <span className='cha underline'>{profSkills.includes('Persuasion') ? +charMod! + 2 : charMod}</span> <span className='skill'>Persuasion</span>{' '}
                <span className='ab-skill'>(Cha)</span>
            </p>
            <p>
                <span className='circle'></span>
                <span className='int underline'>{profSkills.includes('Religion') ? +intMod! + 2 : intMod}</span> <span className='skill'>Religion</span>{' '}
                <span className='ab-skill'>(Int)</span>
            </p>
            <p>
                <span className='circle'></span>
                <span className='dex underline'>{profSkills.includes('Sleight of Hand') ? +dexMod! + 2 : dexMod}</span> <span className='skill'>Sleight of Hand</span>{' '}
                <span className='ab-skill'>(Dex)</span>
            </p>
            <p>
                <span className='circle'></span>
                <span className='dex underline'>{profSkills.includes('Stealth') ? +dexMod! + 2 : dexMod}</span> <span className='skill'>Stealth</span>{' '}
                <span className='ab-skill'>(Dex)</span>
            </p>
            <p>
                <span className='circle'></span>
                <span className='wis underline'>{profSkills.includes('Survival') ? +wisMod! + 2 : wisMod}</span> <span className='skill'>Survival</span>{' '}
                <span className='ab-skill'>(Wis)</span>
            </p>
            <p className='main-color underline center-align'>Skills</p>
        </div>
    );
};

export default Skills;
