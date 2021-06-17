import { useSelector } from 'react-redux';
import Heading from '../components/layout/player/Heading';
import { AppState } from '../store/store';
import AbilityPoints from '../components/layout/player/AbilityPoints';
import Savings from '../components/layout/player/Savings';
// import AcInitSpeed from "../layout/player/AcInitSpeed";
// import Features from "../layout/player/Features";
import Skills from '../components/layout/player/Skills';

export interface PlayerChildrenProps<T> {
    playerData: T;
}

const Player = () => {
    const player = useSelector((state: AppState) => state.player);

    return (
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
                        {/* <AcInitSpeed /> */}
                        {/* <Features data={data} setData={setData} /> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Player;
