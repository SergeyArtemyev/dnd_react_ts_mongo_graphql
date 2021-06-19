import { FC } from 'react';
import { PlayerChildrenProps } from '../../../screens/Player';
import { Player } from '../../../store/reducers/playerReducer';

const CharEquipment: FC<PlayerChildrenProps<Player>> = ({ playerData }) => {
    const { mWeapon, sWeapon, potions, stuff } = playerData;

    return (
        <div>
            <h4>Your starting equipment</h4>
            <p className='main-color underline'>Main Weapon</p>
            <ul className='browser-default'>
                <li>{mWeapon}</li>
            </ul>
            <p className='main-color underline'>Secondary Weapon</p>
            <ul className='browser-default'>
                <li>{sWeapon}</li>
            </ul>
            <p className='main-color underline'>Potions</p>
            <ul className='browser-default'>
                <li>{potions}</li>
            </ul>
            <p className='main-color underline'>Other Stuff</p>
            <ul className='browser-default'>
                <li>{stuff}</li>
            </ul>
        </div>
    );
};

export default CharEquipment;
