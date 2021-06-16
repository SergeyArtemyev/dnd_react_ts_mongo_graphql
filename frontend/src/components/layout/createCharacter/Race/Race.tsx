import React, { useEffect, useCallback } from 'react';
import { useAvatar } from '../../../../hooks/useAvatar';
import { useDispatch } from 'react-redux';
import human from '../../../../img/form_img/human.jpg';
import elf from '../../../../img/form_img/elf.jpg';
import halfling from '../../../../img/form_img/halfling.jpg';
import dwarf from '../../../../img/form_img/dwarf.jpg';
import RaceTraits from './RaceTraits';
import { getPlayerRace } from '../../../../actions/races';
import RaceDescription from './RaceDescription';
import initAbility from '../../../../utils/initAbility';

const Race = React.memo(() => {
    const { avatar: raceAvatar, name: raceName, onChangeAvatar } = useAvatar();
    const dispatch = useDispatch();

    const initAb = useCallback(initAbility, [raceName]);

    useEffect(() => {
        initAb();
        raceName && dispatch(getPlayerRace(raceName));
    }, [dispatch, raceName, initAb]);

    return (
        <div className='race'>
            <h4 className='center-align'>Choose your race</h4>
            <div className='row'>
                <div className='col s12 m12 l6'>
                    <div className='row'>
                        <div className='col m6 s6'>
                            <div className='input-field col s12 m12'>
                                <select onChange={onChangeAvatar} name='race' id='races' className='icons'>
                                    <option value=''>Choose Race</option>
                                    <option data-icon={human} value='Human'>
                                        Human
                                    </option>
                                    <option data-icon={elf} value='Elf'>
                                        Elf
                                    </option>
                                    <option data-icon={halfling} value='Halfling'>
                                        Halfling
                                    </option>
                                    <option data-icon={dwarf} value='Dwarf'>
                                        Dwarf
                                    </option>
                                </select>
                            </div>
                            <div className='img-wraper'>
                                <img src={raceAvatar} alt={raceAvatar} />
                            </div>
                        </div>
                        <div className='col m6 s6'>
                            <h6>Racial traits</h6>
                            {raceAvatar ? <RaceTraits raceName={raceName} /> : null}
                        </div>
                    </div>
                </div>
                <div className='col s12 m12 l6'>{raceAvatar !== '' ? <RaceDescription raceName={raceName} /> : null}</div>
            </div>
        </div>
    );
});

export default Race;
