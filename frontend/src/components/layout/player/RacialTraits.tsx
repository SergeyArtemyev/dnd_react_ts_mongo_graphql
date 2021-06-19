import { FC } from 'react';
import { useTraits } from '../../../hooks/useTraits';
import { PlayerChildrenProps } from '../../../screens/Player';
import { Player } from '../../../store/reducers/playerReducer';
import RaceDesc from './RaceDesc';

const RacialTraits: FC<PlayerChildrenProps<Player>> = ({ playerData }) => {
    const { abscore } = useTraits(playerData.race!);

    return (
        <>
            <h4>Racial Traits</h4>
            <p>{abscore}</p>
            <RaceDesc playerData={playerData} />
        </>
    );
};

export default RacialTraits;
