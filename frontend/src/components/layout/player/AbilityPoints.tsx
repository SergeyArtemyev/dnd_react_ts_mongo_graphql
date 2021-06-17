import { FC } from 'react';
import { PlayerChildrenProps } from '../../../screens/Player';
import { Player } from '../../../store/reducers/playerReducer';

const AbilityPoints: FC<PlayerChildrenProps<Player>> = ({ playerData }) => {
    const { strMod, strengthPoints, dexMod, dexterityPoints, conMod, constitutionPoints, intMod, intelligencePoints, wisMod, wisdomPoints, charMod, charismaPoints } =
        playerData;

    return (
        <>
            <div className='ab-point'>
                <p className='main-color underline'>str</p>
                <p>{strMod}</p>
                <p className='ab-border'>{strengthPoints}</p>
            </div>
            <div className='ab-point'>
                <p className='main-color underline'>dex</p>
                <p>{dexMod}</p>
                <p className='ab-border'>{dexterityPoints}</p>
            </div>
            <div className='ab-point'>
                <p className='main-color underline'>con</p>
                <p>{conMod}</p>
                <p className='ab-border'>{constitutionPoints}</p>
            </div>
            <div className='ab-point'>
                <p className='main-color underline'>int</p>
                <p>{intMod}</p>
                <p className='ab-border'>{intelligencePoints}</p>
            </div>
            <div className='ab-point'>
                <p className='main-color underline'>wis</p>
                <p>{wisMod}</p>
                <p className='ab-border'>{wisdomPoints}</p>
            </div>
            <div className='ab-point'>
                <p className='main-color underline'>char</p>
                <p>{charMod}</p>
                <p className='ab-border'>{charismaPoints}</p>
            </div>
        </>
    );
};

export default AbilityPoints;
