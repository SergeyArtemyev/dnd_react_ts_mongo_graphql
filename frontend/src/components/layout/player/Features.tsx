import { FC, useEffect } from 'react';
import { PlayerChildrenProps } from '../../../screens/Player';
import { Player } from '../../../store/reducers/playerReducer';
import ClassFeature from './ClassFeature';
import RacialTraits from './RacialTraits';
import CharDescription from './CharDescription';
import CharEquipment from './CharEquipment';
import CharProficiencies from './CharProficiencies';
//@ts-ignore
import M from 'materialize-css/dist/js/materialize.js';

const Features: FC<PlayerChildrenProps<Player>> = ({ playerData }) => {
    useEffect(() => {
        M.AutoInit();
    }, []);
    return (
        <div className='row tab-container'>
            <div className='col s12'>
                <ul className='tabs'>
                    <li className='tab col s3'>
                        <a className='active' href='#featuresTraits'>
                            Features and Traits
                        </a>
                    </li>
                    <li className='tab col s3'>
                        <a href='#charDescription'>Description</a>
                    </li>
                    <li className='tab col s3'>
                        <a href='#charEquipment'>Equipment</a>
                    </li>
                    <li className='tab col s3'>
                        <a href='#charProficiencies'>Proficiencies</a>
                    </li>
                </ul>
            </div>
            <div id='featuresTraits' className='col s12'>
                <div className='white p-1'>
                    <ClassFeature playerData={playerData} />
                    <RacialTraits playerData={playerData} />
                </div>
            </div>
            <div id='charDescription' className='col s12'>
                <div className='white p-1'>
                    <CharDescription playerData={playerData} />
                </div>
            </div>
            <div id='charEquipment' className='col s12'>
                <div className='white p-1'>
                    <CharEquipment playerData={playerData} />
                </div>
            </div>
            <div id='charProficiencies' className='col s12'>
                <div className='white p-1'>
                    <CharProficiencies playerData={playerData} />
                </div>
            </div>
        </div>
    );
};

export default Features;
