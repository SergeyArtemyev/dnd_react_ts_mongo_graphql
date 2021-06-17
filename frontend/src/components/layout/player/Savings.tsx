import { FC } from 'react';
import { PlayerChildrenProps } from '../../../screens/Player';
import { Player } from '../../../store/reducers/playerReducer';

const Savings: FC<PlayerChildrenProps<Player>> = ({ playerData }) => {
    const { playerClass, strMod, dexMod, conMod, intMod, wisMod, charMod } = playerData;

    function getSaving(s = 0, d = 0, c = 0, i = 0, w = 0, ch = 0) {
        if (playerClass === 'Ranger' || playerClass === 'Fighter') {
            s = 2;
        }
        if (playerClass === 'Sorcerer' || playerClass === 'Fighter') {
            c = 2;
        }
        if (playerClass === 'Ranger' || playerClass === 'Rogue') {
            d = 2;
        }
        if (playerClass === 'Sorcerer') {
            ch = 2;
        }
        if (playerClass === 'Rogue') {
            i = 2;
        }

        return { s, d, c, i, w, ch };
    }
    return (
        <div className='savings'>
            <p>
                <span className='underline'>{+strMod! + getSaving().s}</span> Strength
            </p>
            <p>
                <span className='underline'>{+dexMod! + getSaving().d}</span> Dexterity
            </p>
            <p>
                <span className='underline'>{+conMod! + getSaving().c}</span> Constitution
            </p>
            <p>
                <span className='underline'>{+intMod! + getSaving().i}</span> Intelligence
            </p>
            <p>
                <span className='underline'>{+wisMod! + getSaving().w}</span> Wisdom
            </p>
            <p>
                <span className='underline'>{+charMod! + getSaving().ch}</span> Charisma
            </p>
            <p className='main-color underline center-align'>saving throws</p>
        </div>
    );
};

export default Savings;
