import { FC } from 'react';
import { useBackground } from '../../../hooks/useBackground';
import { useDescription } from '../../../hooks/useDescription';
import { PlayerChildrenProps } from '../../../screens/Player';
import { Player } from '../../../store/reducers/playerReducer';

const CharProficiencies: FC<PlayerChildrenProps<Player>> = ({ playerData }) => {
    const { profArmor, profWeapons, profTool } = useDescription('class', playerData.playerClass!);

    const { vehicleProff } = useBackground(playerData.background!);

    return (
        <div>
            <h3>Proficiencies</h3>
            <p>
                <span className='main-color underline'>Proficient in Armor:</span> {profArmor}
            </p>
            <p>
                <span className='main-color underline'>Proficient in Weapon:</span> {profWeapons}
            </p>
            <p>
                <span className='main-color underline'>Proficient in Vehicles:</span> {vehicleProff ? vehicleProff : 'None'}
            </p>
            <p>
                <span className='main-color underline'>Proficient in Tools:</span> {profTool ? profTool : 'None'}
            </p>
        </div>
    );
};

export default CharProficiencies;
