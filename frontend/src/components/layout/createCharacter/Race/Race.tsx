import React, { useState, useContext, useEffect } from 'react';
import { useAvatar } from '../../../../hooks/useAvatar';
import { Race as CharRace } from '../../../../store/reducers/raceReducer';
import human from '../../../../img/form_img/human.jpg';
import elf from '../../../../img/form_img/elf.jpg';
import halfling from '../../../../img/form_img/halfling.jpg';
import dwarf from '../../../../img/form_img/dwarf.jpg';
import RaceTraits from './RaceTraits';
// import RaceDescription from "./RaceDescription";

const Race = React.memo(() => {
    const { raceAvatar, raceName, onChangeAvatar } = useAvatar();
    // dispatch race name to player reducer
    return (
        <div className='race'>
            <h4 className='center-align'>Choose your race</h4>
            <div className='row'>
                <div className='col s12 m12 l6'>
                    <div className='row'>
                        <div className='col m6 s6'>
                            <div className='input-fields col s12 m12'>
                                <select
                                    onChange={onChangeAvatar}
                                    name='race'
                                    id='race'
                                    className='icons'
                                >
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
                            {raceAvatar !== '' ? <RaceTraits /> : null}
                        </div>
                    </div>
                </div>
                {/* <div className="col s12 m12 l6">{racePicture !== "" ? <RaceDescription /> : null}</div> */}
            </div>
        </div>
    );
});

export default Race;
