import { FC } from 'react';
import { PlayerChildrenProps } from '../../../screens/Player';
import { Player } from '../../../store/reducers/playerReducer';

const RaceDesc: FC<PlayerChildrenProps<Player>> = ({ playerData }) => {
    const { race, extraLanguage, cantrip, toolProff } = playerData;
    switch (race) {
        case 'Human':
            return (
                <>
                    <p className='main-color underline'>Languages</p>
                    <p>You can speak, read, and write Common and one extra language.</p>
                    <ul className='browser-default'>
                        <li>{extraLanguage}</li>
                    </ul>
                </>
            );
        case 'Elf':
            return (
                <>
                    <p className='main-color underline'>Darkvision</p>
                    <p>Accustomed to twilit forests and the night sky, you have superior vision in dark and dim conditions</p>
                    <p className='main-color underline'>Keen Senses</p>
                    <p>You have proficiency in the Perception skill.</p>
                    <p className='main-color underline'>Fey Ancestry</p>
                    <p>You have advantage on saving throws against being charmed, and magic can’t put you to sleep.</p>
                    <p className='main-color underline'>Trance</p>
                    <p>Elves don’t need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day.</p>
                    <p className='main-color underline'>Cantrip</p>
                    <p>You know one cantrip of your choice from the wizard spell list. Intelligence is your spellcasting ability for it.</p>
                    <ul className='browser-default'>
                        <li>{cantrip}</li>
                    </ul>
                    <p>You can speak, read, and write one extra language of your choice.</p>
                    <ul className='browser-default'>
                        <li>{extraLanguage}</li>
                    </ul>
                </>
            );
        case 'Halfling':
            return (
                <>
                    <p className='main-color underline'>Lucky</p>
                    <p>When you roll a 1 on the d20 for an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll.</p>
                    <p className='main-color underline'>Brave</p>
                    <p>You have advantage on saving throws against being frightened.</p>
                    <p className='main-color underline'>Halfling Nimbleness</p>
                    <p>You can move through the space of any creature that is of a size larger than yours.</p>
                </>
            );
        case 'Dwarf':
            return (
                <>
                    <p className='main-color underline'>Darkvision</p>
                    <p>Accustomed to life underground, you have superior vision in dark and dim conditions.</p>
                    <p className='main-color underline'>Dwarven Resilience</p>
                    <p>You have advantage on saving throws against poison, and you have resistance against poison damage</p>
                    <p className='main-color underline'>Tool Proficiency</p>
                    <p>You gain proficiency with the artisan’s tools of your choice: smith’s tools, brewer’s supplies, or mason’s tools.</p>
                    <ul className='browser-default'>
                        <li>{toolProff}</li>
                    </ul>
                    <p className='main-color underline'>Dwarven Combat Training</p>
                    <p>You have proficiency with the battleaxe, handaxe, light hammer, and warhammer.</p>
                    <p className='main-color underline'>Stonecunning</p>
                    <p>
                        Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add
                        double your proficiency bonus to the check, instead of your normal proficiency bonus.
                    </p>
                </>
            );
        default:
            return <div>oops, something went wrong</div>;
    }
};

export default RaceDesc;
