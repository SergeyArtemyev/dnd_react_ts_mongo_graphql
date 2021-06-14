import { FC } from 'react';

interface RogueDescriptionProps {
    spellInfo: string;
    cantrips: string;
    spellSlots: string;
    spellSaveDc: string;
    spellAttackMod: string;
    changeArrow: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const RogueDescription: FC<RogueDescriptionProps> = ({
    spellInfo,
    cantrips,
    spellSlots,
    spellSaveDc,
    spellAttackMod,
    changeArrow,
}) => {
    return (
        <>
            <li className='desc-li'>
                <div className='collapsible-header' onClick={changeArrow}>
                    <span>Spellcasting</span>
                    <i className='material-icons icon-arrow'>arrow_downward</i>
                </div>
                <div className='collapsible-body'>
                    <p>{spellInfo}</p>
                    <span className='main-color underline'>Cantrip</span>
                    <p>{cantrips}</p>
                    <span className='main-color underline'>Spell Slot</span>
                    <p>{spellSlots}</p>
                    <span className='main-color underline'>Spell Save DC</span>
                    <p>{spellSaveDc}</p>
                    <span className='main-color underline'>Spell Attack Modifier</span>
                    <p>{spellAttackMod}</p>
                </div>
            </li>
        </>
    );
};

export default RogueDescription;
