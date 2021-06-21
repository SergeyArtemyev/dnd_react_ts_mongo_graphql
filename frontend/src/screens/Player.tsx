import { useSelector } from 'react-redux';
import Heading from '../components/layout/player/Heading';
import { AppState } from '../store/store';
import AbilityPoints from '../components/layout/player/AbilityPoints';
import Savings from '../components/layout/player/Savings';
import AcInitSpeed from '../components/layout/player/AcInitSpeed';
import Features from '../components/layout/player/Features';
import Skills from '../components/layout/player/Skills';
import { useLoadData } from '../hooks/useLoadData';
import { Player as PlayerI } from '../store/reducers/playerReducer';
import { useLoadPlayer } from '../hooks/useLoadPlayer';

export interface PlayerChildrenProps<T> {
    playerData: T;
}

const Player = () => {
    const player: PlayerI = useSelector((state: AppState) => state.player);
    const loadingData = useLoadData();
    const loadingPlayer = useLoadPlayer();

    return !loadingData && !loadingPlayer ? (
        <section id='character-sheet'>
            <div className='container'>
                <div className='row'>
                    <div className='col s12'>
                        <Heading playerData={player} />
                    </div>
                </div>
                <div className='row'>
                    <div className='col s2'>
                        <AbilityPoints playerData={player} />
                    </div>
                    <div className='col s4'>
                        <div className='prof-bonus'>
                            <span>+2</span> proficiency bonus
                        </div>
                        <Savings playerData={player} />
                        <Skills playerData={player} />
                    </div>
                    <div className='col s6'>
                        <AcInitSpeed playerData={player} />
                        <Features playerData={player} />
                    </div>
                </div>
            </div>
        </section>
    ) : null;
};

export default Player;
