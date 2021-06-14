import { FC, useEffect } from 'react';
//@ts-ignore
import M from 'materialize-css/dist/js/materialize.min.js';
import { useDescription } from '../../../../hooks/useDescription';
import { useChangeArrow } from '../../../../hooks/useChangeArrow';
import SelectFactory from '../../../../components/selects/SelectFactory';
import FighterDescription from './FighterDescription';
import RangerDescription from './RangerDescription';
import RogueDescription from './RogueDescription';
import SorcererDescription from './SorcererDescription';

interface ClassDescriptionProps {
    className: string;
}

const ClassDescription: FC<ClassDescriptionProps> = ({ className }) => {
    const {
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
    } = useDescription('class', className);

    const changeArrow = useChangeArrow();

    useEffect(() => {
        // Initialize Material JS
        M.AutoInit();
    });

    let profSelect;
    if (className === 'Fighter') {
        profSelect = (
            <>
                <SelectFactory
                    dataName={className}
                    selectName='fighterSkill1'
                    label='Fighter Skill'
                />
                <SelectFactory
                    dataName={className}
                    selectName='fighterSkill2'
                    label='Fighter Skill'
                />
            </>
        );
    } else if (className === 'Ranger') {
        profSelect = (
            <>
                <SelectFactory
                    dataName={className}
                    selectName='rangerSkill1'
                    label='Ranger Skill'
                />
                <SelectFactory
                    dataName={className}
                    selectName='rangerSkill2'
                    label='Ranger Skill'
                />
                <SelectFactory
                    dataName={className}
                    selectName='rangerSkill3'
                    label='Ranger Skill'
                />
            </>
        );
    } else if (className === 'Rogue') {
        profSelect = (
            <>
                <SelectFactory dataName={className} selectName='rogueSkill1' label='Rogue Skill' />
                <SelectFactory dataName={className} selectName='rogueSkill2' label='Rogue Skill' />
                <SelectFactory dataName={className} selectName='rogueSkill3' label='Rogue Skill' />
                <SelectFactory dataName={className} selectName='rogueSkill4' label='Rogue Skill' />
            </>
        );
    } else if (className === 'Sorcerer') {
        profSelect = (
            <>
                <SelectFactory
                    dataName={className}
                    selectName='sorcererSkill'
                    label='Sorcerer Skill'
                />
            </>
        );
    }
    return (
        <div className='description'>
            <h3>Description</h3>
            <p>{info}</p>
            <ul className='collapsible expandable'>
                <li className='desc-li'>
                    <div className='collapsible-header' onClick={changeArrow}>
                        <span>Hit Points</span>
                        <i className='material-icons icon-arrow'>arrow_downward</i>
                    </div>
                    <div className='collapsible-body'>
                        <p>
                            <span className='main-color underline'>Hit Dice:</span> {hitDice}
                        </p>
                        <p>
                            <span className='main-color underline'>Hit Points at 1st Level:</span>{' '}
                            {hitAtFirstLvl}
                        </p>
                        <p>
                            <span className='main-color underline'>
                                Hit Points at Higher Levels:
                            </span>{' '}
                            {hitAtHigherLvl}
                        </p>
                    </div>
                </li>
                <li className='desc-li'>
                    <div className='collapsible-header' onClick={changeArrow}>
                        <span>Proficiences</span>
                        <span className='new badge' data-badge-caption='choose options'></span>
                        <i className='material-icons icon-arrow'>arrow_downward</i>
                    </div>
                    <div className='collapsible-body'>
                        <p>
                            <span className='main-color underline'>Armor:</span> {profArmor}
                        </p>
                        <p>
                            <span className='main-color underline'>Weapons:</span> {profWeapons}
                        </p>
                        <p>
                            <span className='main-color underline'>Tools:</span> {profTool}
                        </p>
                        <p>
                            <span className='main-color underline'>Saving Throws:</span>{' '}
                            {savingThrow}
                        </p>
                        <p>
                            <span className='main-color underline'>Skills:</span> {skills}
                        </p>
                        <p>{profSelect}</p>
                    </div>
                </li>
                {className === 'Fighter' ? (
                    <FighterDescription
                        className={className}
                        fightingStyle={fightingStyle}
                        secondWind={secondWind}
                        changeArrow={changeArrow}
                    />
                ) : null}
                {className === 'Ranger' ? (
                    <RangerDescription
                        className={className}
                        favoredEnemy={favoredEnemy}
                        naturalExplorer={naturalExplorer}
                        changeArrow={changeArrow}
                    />
                ) : null}
                {className === 'Rogue' ? (
                    <RogueDescription
                        className={className}
                        expertise={expertise}
                        sneakAttack={sneakAttack}
                        thiefCant={thiefCant}
                        changeArrow={changeArrow}
                    />
                ) : null}
                {className === 'Sorcerer' ? (
                    <SorcererDescription
                        spellInfo={spellInfo}
                        spellSlots={spellSlots}
                        spellAttackMod={spellAttackMod}
                        spellSaveDc={spellSaveDc}
                        cantrips={cantrips}
                        changeArrow={changeArrow}
                    />
                ) : null}
            </ul>
        </div>
    );
};

export default ClassDescription;
