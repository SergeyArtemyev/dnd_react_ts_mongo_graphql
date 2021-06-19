import { FC } from 'react';
import { ClassDescription } from '../../../hooks/useDescription';
import { Player } from '../../../store/reducers/playerReducer';

interface ClassDescProps {
    playerData: Player;
    description: ClassDescription;
}

const ClassDesc: FC<ClassDescProps> = ({ playerData, description }) => {
    switch (playerData!.playerClass) {
        case 'Fighter':
            return (
                <>
                    <p className='main-color underline'>Fighting style</p>
                    <p>{description.fightingStyle}</p>
                    <ul className='browser-default'>
                        <li>{playerData.fightingStyle}</li>
                    </ul>
                    <p className='main-color underline'>Second wind</p>
                    <p>{description.secondWind}</p>
                </>
            );
        case 'Ranger':
            return (
                <>
                    <p className='main-color underline'>Favored Enemy</p>
                    <p>{description.favoredEnemy}</p>
                    <ul className='browser-default'>
                        <li>{playerData.favoredEnemy}</li>
                    </ul>
                    <p className='main-color underline'>Language</p>
                    <ul className='browser-default'>
                        <li>{playerData.language}</li>
                    </ul>
                    <p className='main-color underline'>Natural Explorer</p>
                    <p>{description.naturalExplorer}</p>
                    <ul className='browser-default'>
                        <li>{playerData.naturalExplorer}</li>
                    </ul>
                </>
            );
        case 'Rogue':
            return (
                <>
                    <p className='main-color underline'>Expertise</p>
                    <p>{description.expertise}</p>
                    <ul className='browser-default'>
                        <li>{playerData.expertise1}</li>
                        <li>{playerData.expertise2}</li>
                    </ul>
                    <p className='main-color underline'>Sneak Attack</p>
                    <p>{description.sneakAttack}</p>
                    <p className='main-color underline'>Thieve's Cant</p>
                    <p>{description.thiefCant}</p>
                </>
            );
        case 'Sorcerer':
            return (
                <>
                    <p className='main-color underline'>Spellcasting</p>
                    <p>{description.spellInfo}</p>
                    <p className='main-color underline'>Cantrips</p>
                    <p>{description.cantrips}</p>
                    <p className='main-color underline'>Spell Slots</p>
                    <p>{description.spellSlots}</p>
                    <p>Spell save DC = {description.spellSaveDc}</p>
                    <p>Spell attack modifier = {description.spellAttackMod}</p>
                </>
            );
        default:
            return <div>oops, something went wrong</div>;
    }
};

export default ClassDesc;
